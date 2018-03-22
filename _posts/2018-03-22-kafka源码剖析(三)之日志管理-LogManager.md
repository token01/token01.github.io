---
layout:     post
title:      

subtitle:   Kafka 源码剖析(三)
date:       2018-03-22
author:     空明
header-img: img/post-bg-2015.jpg
catalog: true
tags:
    - kafka
    - scala
    - 基础
---

## 1 入口
```
/* start log manager */
        // 启动日志管理模块
        logManager = LogManager(config, zkUtils, brokerState, kafkaScheduler, time, brokerTopicStats)
        logManager.startup()

```
## 2 开启代码
```
/**
   *  Start the background threads to flush logs and do log cleanup
    *  启动后台线程来冲洗日志和日志清理 依赖多线程
   */
  def startup() {
    /* Schedule the cleanup task to delete old logs */
    if(scheduler != null) {
      info("Starting log cleanup with a period of %d ms.".format(retentionCheckMs))
      scheduler.schedule("kafka-log-retention",
                         cleanupLogs _,
                         delay = InitialTaskDelayMs,
                         period = retentionCheckMs,
                         TimeUnit.MILLISECONDS)
      info("Starting log flusher with a default period of %d ms.".format(flushCheckMs))
      scheduler.schedule("kafka-log-flusher",
                         flushDirtyLogs _,
                         delay = InitialTaskDelayMs,
                         period = flushCheckMs,
                         TimeUnit.MILLISECONDS)
      scheduler.schedule("kafka-recovery-point-checkpoint",
                         checkpointRecoveryPointOffsets _,
                         delay = InitialTaskDelayMs,
                         period = flushRecoveryOffsetCheckpointMs,
                         TimeUnit.MILLISECONDS)
      scheduler.schedule("kafka-log-start-offset-checkpoint",
                         checkpointLogStartOffsets _,
                         delay = InitialTaskDelayMs,
                         period = flushStartOffsetCheckpointMs,
                         TimeUnit.MILLISECONDS)
      scheduler.schedule("kafka-delete-logs",
                         deleteLogs _,
                         delay = InitialTaskDelayMs,
                         period = defaultConfig.fileDeleteDelayMs,
                         TimeUnit.MILLISECONDS)
    }
    if(cleanerConfig.enableCleaner)
      cleaner.startup()
  }

```
## 3核心代码

![image.png](http://upload-images.jianshu.io/upload_images/1731949-3cfdfc76991bb2a5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 3.1 相关配置信息
- 配置项log.cleaner.threads,默认值1.用于配置清理过期日志的线程个数(用于日志合并).

- 配置项log.cleaner.dedupe.buffer.size,默认值128MB,用于配置清理过期数据的内存缓冲区,这个用于数据清理时,选择的压缩方式时,用于对重复数据的清理排序内存,用于日志合并.

- 配置项log.cleaner.io.buffer.load.factor,默认值0.9,用于配置清理内存缓冲区的数据装载因子,主要是用于hash,这个因子越小,对桶的重复可能越小,但内存占用越大,用于日志合并.

- 配置项log.cleaner.io.buffer.size,默认值512KB,用于清理过期数据的IO缓冲区大小,用于日志合并.

- 配置项message.max.bytes,默认值1000012字节,用于设置单条数据的最大大小.

- 配置项log.cleaner.io.max.bytes.per.second,用于控制过期数据清理时的IO速度限制,默认不限制速度,用于日志合并.

- 配置项log.cleaner.backoff.ms,用于定时检查日志是否需要清理的时间间隔(这个主要是在日志合并时使用),默认是15秒.

- 配置项log.cleaner.enable,是否启用日志的定时清理,默认是启用.

- 配置项num.recovery.threads.per.data.dir,用于在启动时,用于日志恢复的线程个数,默认是1.

- 配置项log.flush.scheduler.interval.ms,用于检查日志是否被flush到磁盘,默认不检查.

- 配置项log.flush.offset.checkpoint.interval.ms,用于定时对partition的offset进行保存的时间间隔,默认值60000ms.

- 配置项log.retention.check.interval.ms,定期检查保留日志的时间间隔,默认值5分钟.

### 3.2 启动步骤zk 模块
 ```
 // 首先先在zk 读取日志  这块就不多解释了 
    val cleanerConfig = CleanerConfig(numThreads = config.logCleanerThreads,
      dedupeBufferSize = config.logCleanerDedupeBufferSize,
      dedupeBufferLoadFactor = config.logCleanerDedupeBufferLoadFactor,
      ioBufferSize = config.logCleanerIoBufferSize,
      maxMessageSize = config.messageMaxBytes,
      maxIoBytesPerSecond = config.logCleanerIoMaxBytesPerSecond,
      backOffMs = config.logCleanerBackoffMs,
      enableCleaner = config.logCleanerEnable)

    new LogManager(logDirs = config.logDirs.map(new File(_)).toArray,
      topicConfigs = topicConfigs,
      defaultConfig = defaultLogConfig,
      cleanerConfig = cleanerConfig,
      ioThreads = config.numRecoveryThreadsPerDataDir,
      flushCheckMs = config.logFlushSchedulerIntervalMs,
      flushRecoveryOffsetCheckpointMs = config.logFlushOffsetCheckpointIntervalMs,
      flushStartOffsetCheckpointMs = config.logFlushStartOffsetCheckpointIntervalMs,
      retentionCheckMs = config.logCleanupIntervalMs,
      maxPidExpirationMs = config.transactionIdExpirationMs,
      scheduler = kafkaScheduler,
      brokerState = brokerState,
      time = time,
      brokerTopicStats = brokerTopicStats)
  }
```

### 3.3 启动运行流程

```
threadsafe
class LogManager(val logDirs: Array[File],
                 val topicConfigs: Map[String, LogConfig], // note that this doesn't get updated after creation
                 val defaultConfig: LogConfig,
                 val cleanerConfig: CleanerConfig,
                 ioThreads: Int,
                 val flushCheckMs: Long,
                 val flushRecoveryOffsetCheckpointMs: Long,
                 val flushStartOffsetCheckpointMs: Long,
                 val retentionCheckMs: Long,
                 val maxPidExpirationMs: Int,
                 scheduler: Scheduler,
                 val brokerState: BrokerState,
                 brokerTopicStats: BrokerTopicStats,
                 time: Time) extends Logging {
  val RecoveryPointCheckpointFile = "recovery-point-offset-checkpoint"
  val LogStartOffsetCheckpointFile = "log-start-offset-checkpoint"
  val LockFile = ".lock"
  val InitialTaskDelayMs = 30*1000

  private val logCreationOrDeletionLock = new Object
  private val logs = new Pool[TopicPartition, Log]()
  private val logsToBeDeleted = new LinkedBlockingQueue[Log]()
//  检查日志目录是否被创建,如果没有创建目录,同时检查目录是否有读写的权限.
  createAndValidateLogDirs(logDirs)
//  生成每个目录的.lock文件,并通过这个文件锁定这个目录.
  private val dirLocks = lockLogDirs(logDirs)
//  根据每个目录下的recovery-point-offset-checkpoint文件,生成出checkpoints的集合.这个用于定期更新每个partition的offset记录.
  private val recoveryPointCheckpoints = logDirs.map(dir => (dir, new OffsetCheckpointFile(new File(dir, RecoveryPointCheckpointFile)))).toMap
  private val logStartOffsetCheckpoints = logDirs.map(dir => (dir, new OffsetCheckpointFile(new File(dir, LogStartOffsetCheckpointFile)))).toMap
//  根据每一个目录,生成一个线程池,线程池的大小是num.recovery.threads.per.data.dir配置的值,
//  读取每个目录下的topic-partitionid的目录,并根据zk中针对此topic的配置文件(或者默认的配置文件),通过offset-checkpoint中记录的此partition对应的offset,生成Log实例.并通过线程池来执行Log实例的加载,也就是日志的恢复.

  loadLogs()

  // public, so we can access this from kafka.admin.DeleteTopicTest
  val cleaner: LogCleaner =
    if(cleanerConfig.enableCleaner)
      new LogCleaner(cleanerConfig, logDirs, logs, time = time)
    else
      null
```

### 3.4 清理过期日志
 
 ```
/**
   * Runs through the log removing segments older than a certain age
   */
  private def cleanupExpiredSegments(log: Log): Int = {
    if (log.config.retentionMs < 0)
      return 0
    val startMs = time.milliseconds
    log.deleteOldSegments(startMs - _.lastModified > log.config.retentionMs)
  }
```
这块又涉及到一个配置：retention.ms，这个参数表示日志保存的时间。如果小于0，表示永不失效，也就没有了删除这一说。

当然，如果文件的修改时间跟当前时间差，大于设置的日志保存时间，就要执行删除动作了。具体的删除方法为：

```
  /**
   * Delete any log segments matching the given predicate function,
   * starting with the oldest segment and moving forward until a segment doesn't match.
   * @param predicate A function that takes in a single log segment and returns true iff it is deletable
   * @return The number of segments deleted
   */
  def deleteOldSegments(predicate: LogSegment => Boolean): Int = {
    lock synchronized {
      //find any segments that match the user-supplied predicate UNLESS it is the final segment
      //and it is empty (since we would just end up re-creating it)
      val lastEntry = segments.lastEntry
      val deletable =
        if (lastEntry == null) Seq.empty
        else logSegments.takeWhile(s => predicate(s) && (s.baseOffset != lastEntry.getValue.baseOffset || s.size > 0))
      val numToDelete = deletable.size
      if (numToDelete > 0) {
        // we must always have at least one segment, so if we are going to delete all the segments, create a new one first
        if (segments.size == numToDelete)
          roll()
        // remove the segments for lookups
        deletable.foreach(deleteSegment(_))
      }
      numToDelete
    }
  }
```
这块的逻辑是：根据传入的predicate来判断哪些日志符合被删除的要求，放入到deletable中，最后遍历deletable，进行删除操作。

  ```
private def deleteSegment(segment: LogSegment) {
    info("Scheduling log segment %d for log %s for deletion.".format(segment.baseOffset, name))
    lock synchronized {
      segments.remove(segment.baseOffset)
      asyncDeleteSegment(segment)
    }
  }
  
    private def asyncDeleteSegment(segment: LogSegment) {
    segment.changeFileSuffixes("", Log.DeletedFileSuffix)
    def deleteSeg() {
      info("Deleting segment %d from log %s.".format(segment.baseOffset, name))
      segment.delete()
    }
    scheduler.schedule("delete-file", deleteSeg, delay = config.fileDeleteDelayMs)
  }

```

这块是一个异步删除文件的过程，包含一个配置：file.delete.delay.ms。表示每隔多久删除一次日志文件。删除的过程是先把日志的后缀改为.delete，然后定时删除。

### 3.5 清理过大日志

 ```
 /**
   *  Runs through the log removing segments until the size of the log
   *  is at least logRetentionSize bytes in size
   */
  private def cleanupSegmentsToMaintainSize(log: Log): Int = {
    if(log.config.retentionSize < 0 || log.size < log.config.retentionSize)
      return 0
    var diff = log.size - log.config.retentionSize
    def shouldDelete(segment: LogSegment) = {
      if(diff - segment.size >= 0) {
        diff -= segment.size
        true
      } else {
        false
      }
    }
    log.deleteOldSegments(shouldDelete)
  }
```
这块代码比较清晰，如果日志大小大于retention.bytes，那么就会被标记为待删除，然后调用的方法是一样的，也是deleteOldSegments。就不赘述了。

### 3.6 定期对log的磁盘缓冲区进行flush:
这个通过后台的调度组件定期去执行LogManager中的flushDirtyLogs的函数,

这个函数中迭代所有的partition的log,并执行flush的操作,这个操作中通过当前最后一个offset找到上一次进行checkpoint的offset与当前的offset中间的segment,并执行segment中log与index的flush操作.对应log文件执行文件管道的force函数,对于index文件,执行文件管道map的force函数.

``` 
private def flushDirtyLogs() = {
  debug("Checking for dirty logs to flush...")

  for ((topicAndPartition, log) <- logs) {
    try {
      val timeSinceLastFlush = time.milliseconds - log.lastFlushTime
      debug("Checking if flush is needed on " + topicAndPartition.topic 

           + " flush interval  " + log.config.flushMs +
            " last flushed " + log.lastFlushTime + " time since last flush: " 

           + timeSinceLastFlush)
      if(timeSinceLastFlush >= log.config.flushMs)
        log.flush
    } catch {
      case e: Throwable =>
        error("Error flushing topic " + topicAndPartition.topic, e)
    }
  }
}

```
 

### 3.7 定期对partition的offset进行checkpoint操作:
这个通过后台的调度组件定期去

   执行LogManager中的checkpointRecoveryPointOffsets的函数,

```
def checkpointRecoveryPointOffsets() {
  this.logDirs.foreach(checkpointLogsInDir)
}
```

这里对每个dir中存储的partition的最后一个offset进行checkpoint的操作.

在这个函数中,迭代每个dir中对应的partition的offset记录到对应目录下的checkpoint文件中.

第一行写入一个0,表示是checkpoint文件的版本.

第二行写入的是partition的个数,当前checkpoint时,这个dir已经存在数据的partition的个数.

后面对应第二个的值个数的条数的数据,每条数据写入topic partition offset的值.

```
private def checkpointLogsInDir(dir: File): Unit = {
  val recoveryPoints = this.logsByDir.get(dir.toString)
  if (recoveryPoints.isDefined) {
    this.recoveryPointCheckpoints(dir).write(recoveryPoints.get.mapValues(

        _.recoveryPoint))
  }
}


``` 

LogCleaner实例中,定期执行的日志压缩:
这个实例中,通过CleanerThread的线程进行处理:


1. 配置项log.cleaner.io.max.bytes.per.second,用于控制这个线程操作的IO速度,默认不控制速度
1. 配置项log.cleaner.dedupe.buffer.size,默认值128MB,用于配置清理过期数据的内存缓冲区,这个用于数据清理时,选择的压缩方式时,用于对重复数据的清理排序内存.
1. 配置项log.cleaner.threads,默认值1.用于配置清理过期日志的线程个数.
1. 配置项log.cleaner.backoff.ms,用于定时检查日志是否需要清理的时间间隔,默认是15秒.
1.