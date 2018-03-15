---
layout:     post
title:      

subtitle:   Kafka 源码剖析(二)
date:       2018-03-15
author:     空明
header-img: img/post-bg-2015.jpg
catalog: true
tags:
    - kafka
    - scala
    - 基础
---

## KAFKA的启动

直接运行Kafka.scala中的main方法（需要指定启动参数，也就是server.properties的位置）来启动Kafka。因为kafka依赖zookeeper，所以我们需要提前启动zookeeper，然后在server.properties中指定zk地址后，启动。

看一下main()方法：

```
  def main(args: Array[String]): Unit = {
    try {   
// 加载对应的server.properties配置文件,并生成Properties实例.
      val serverProps = getPropsFromArgs(args)
//这里生成一个KafkaServer的实例,这个实例生成时,会在实例中同时生成一个KafkaServer的实例,
// 生成KafkaServer实例前,需要先通过serverProps生成出一个KafkaConfig的实例.

      val kafkaServerStartable = KafkaServerStartable.fromProps(serverProps)

      // attach shutdown handler to catch control-c
      Runtime.getRuntime().addShutdownHook(new Thread() {
        override def run() = {
          kafkaServerStartable.shutdown
        }
      })
// 停止 服务 
      kafkaServerStartable.startup
      kafkaServerStartable.awaitShutdown
    }
    catch {
      case e: Throwable =>
        fatal(e)
        System.exit(1)
    }
    System.exit(0)
  }
```
## 根据properties生成server实例
  getPropsFromArgs(args)，这一行很明确，就是从配置文件中读取我们配置的内容，然后赋值给serverProps。
KafkaServerStartable.fromProps(serverProps)，
```
    object KafkaServerStartable {
      def fromProps(serverProps: Properties) = {
        KafkaMetricsReporter.startReporters(new VerifiableProperties(serverProps))
        new KafkaServerStartable(KafkaConfig.fromProps(serverProps))
      }
    }
```

这块主要是启动了一个内部的监控服务（内部状态监控）。


## KafkaServer的启动
下面是一个在java中常见的钩子函数，在关闭时会启动一些销毁程序，保证程序安全关闭。kafkaServerStartable.startup。跟进去可以很清楚的看到，里面调用的方法是KafkaServer中的startup方法：
```
// 启动kafka的调度器,这个KafkaScheduler的实例生成时需要得到background.threads配置的值,默认是10个,用于配置后台线程池的个数

def startup() {
    try {
      info("starting")

      if(isShuttingDown.get)
        throw new IllegalStateException("Kafka server is still shutting down, cannot re-start!")

      if(startupComplete.get)
        return

      val canStartup = isStartingUp.compareAndSet(false, true)
      if (canStartup) {
        metrics = new Metrics(metricConfig, reporters, kafkaMetricsTime, true)

        brokerState.newState(Starting)
    // 启动scheduler 实例  
        /* start scheduler */
        kafkaScheduler.startup()
   
//  生产zk 初始化 并依赖  判断  broker 是否发生变化  
        /* setup zookeeper */
        zkUtils = initZk()
     
     // 初始化创建并启动LogManager的实例,
        /* start log manager */
        logManager = createLogManager(zkUtils.zkClient, brokerState)
        logManager.startup()

// 如果broker.id的配置没有配置(小于0的值时),同时broker.id.generation.enable配置为true,默认也就是true,
// 这个时候根据zk中/brokers/seqid路径的version值,第一次从0开始,每次增加.并加上reserved.broker.max.id配置的值,默认是1000,
//来充当这个server的broker.id,同时把这个broker.id更新到logDir目录下的meta.properties文件中,
//下次读取时,直接读取这个配置文件中的broker.id的值,而不需要重新进行创建.
        /* generate brokerId */
        config.brokerId =  getBrokerId
        this.logIdent = "[Kafka Server " + config.brokerId + "], "
  // 启动 kafka 的sockerServer 
        socketServer = new SocketServer(config, metrics, kafkaMetricsTime)
        socketServer.startup()

//,生成并启动ReplicaManager,此实例依赖kafkaScheduler与logManager实例.
       /* start replica manager */
        replicaManager = new ReplicaManager(config, metrics, time, kafkaMetricsTime, zkUtils, kafkaScheduler, logManager,
          isShuttingDown)
        replicaManager.startup()

//生成并启动KafkaController实例,此使用用于控制当前的broker中的所有的leader的partition的操作.        
   /* start kafka controller */
        kafkaController = new KafkaController(config, zkUtils, brokerState, kafkaMetricsTime, metrics, threadNamePrefix)
        kafkaController.startup()

   //生成并启动GroupCoordinator的实例,这个是0.9新加入的一个玩意,用于对consumer中新加入的与partition的检查,并对partition与consumer进行平衡操作.

        /* start group coordinator */
        groupCoordinator = GroupCoordinator(config, zkUtils, replicaManager, kafkaMetricsTime)
        groupCoordinator.startup()

    // 根据authorizer.class.name配置项配置的Authorizer的实现类,生成一个用于认证的实例,用于对用户的操作进行认证.这个默认为不认证.
        /* Get the authorizer and initialize it if one is specified.*/
        authorizer = Option(config.authorizerClassName).filter(_.nonEmpty).map { authorizerClassName =>
          val authZ = CoreUtils.createObject[Authorizer](authorizerClassName)
          authZ.configure(config.originals())
          authZ
        }

   // 成用于对外对外提供服务的KafkaApis实例,并设置当前的broker的状态为运行状态
        /* start processing requests */
        apis = new KafkaApis(socketServer.requestChannel, replicaManager, groupCoordinator,
          kafkaController, zkUtils, config.brokerId, config, metadataCache, metrics, authorizer)
        requestHandlerPool = new KafkaRequestHandlerPool(config.brokerId, socketServer.requestChannel, apis, config.numIoThreads)
        brokerState.newState(RunningAsBroker)

        Mx4jLoader.maybeLoad()


//生成动态配置修改的处理管理,主要是topic修改与client端配置的修改,并把已经存在的clientid对应的配置进行修改.
        /* start dynamic config manager */
        dynamicConfigHandlers = Map[String, ConfigHandler](ConfigType.Topic -> new TopicConfigHandler(logManager, config),
                                                           ConfigType.Client -> new ClientIdConfigHandler(apis.quotaManagers))

        // Apply all existing client configs to the ClientIdConfigHandler to bootstrap the overrides
        // TODO: Move this logic to DynamicConfigManager
        AdminUtils.fetchAllEntityConfigs(zkUtils, ConfigType.Client).foreach {
          case (clientId, properties) => dynamicConfigHandlers(ConfigType.Client).processConfigChanges(clientId, properties)
        }
//   创建一个配置实例 并发起通知给个个block
        // Create the config manager. start listening to notifications
        dynamicConfigManager = new DynamicConfigManager(zkUtils, dynamicConfigHandlers)
        dynamicConfigManager.startup()
         
        /* tell everyone we are alive */
        val listeners = config.advertisedListeners.map {case(protocol, endpoint) =>
          if (endpoint.port == 0)
            (protocol, EndPoint(endpoint.host, socketServer.boundPort(protocol), endpoint.protocolType))
          else
            (protocol, endpoint)
        }
        kafkaHealthcheck = new KafkaHealthcheck(config.brokerId, listeners, zkUtils, config.rack,
          config.interBrokerProtocolVersion)
        kafkaHealthcheck.startup()

        // Now that the broker id is successfully registered via KafkaHealthcheck, checkpoint it
        checkpointBrokerId(config.brokerId)

        /* register broker metrics */
        registerStats()

        shutdownLatch = new CountDownLatch(1)
        startupComplete.set(true)
        isStartingUp.set(false)
        AppInfoParser.registerAppInfo(jmxPrefix, config.brokerId.toString)
        info("started")
      }
    }
    catch {
      case e: Throwable =>
        fatal("Fatal error during KafkaServer startup. Prepare to shutdown", e)
        isStartingUp.set(false)
        shutdown()
        throw e
    }
  }
```
首先判断是否目前正在关闭中或者已经启动了，这两种情况直接抛出异常。然后是一个CAS的操作isStartingUp，防止线程并发操作启动，判断是否可以启动。如果可以启动，就开始我们的启动过程。

构造Metrics类
定义broker状态为启动中starting
启动定时器kafkaScheduler.startup()
构造zkUtils：利用参数中的zk信息，启动一个zk客户端
启动文件管理器：读取zk中的配置信息，包含__consumer_offsets和__system.topic__。重点是启动一些定时任务，来删除符合条件的记录(cleanupLogs)，清理脏记录(flushDirtyLogs)，把所有记录写到一个文本文件中，防止在启动时重启所有的记录文件(checkpointRecoveryPointOffsets)。
```
  /**
   *  Start the background threads to flush logs and do log cleanup
   */
  def startup() {
    /* Schedule the cleanup task to delete old logs */
    if(scheduler != null) {
      info("Starting log cleanup with a period of %d ms.".format(retentionCheckMs))
      scheduler.schedule("kafka-log-retention", 
                         cleanupLogs, 
                         delay = InitialTaskDelayMs, 
                         period = retentionCheckMs, 
                         TimeUnit.MILLISECONDS)
      info("Starting log flusher with a default period of %d ms.".format(flushCheckMs))
      scheduler.schedule("kafka-log-flusher", 
                         flushDirtyLogs, 
                         delay = InitialTaskDelayMs, 
                         period = flushCheckMs, 
                         TimeUnit.MILLISECONDS)
      scheduler.schedule("kafka-recovery-point-checkpoint",
                         checkpointRecoveryPointOffsets,
                         delay = InitialTaskDelayMs,
                         period = flushCheckpointMs,
                         TimeUnit.MILLISECONDS)
    }
    if(cleanerConfig.enableCleaner)
      cleaner.startup()
  }
```