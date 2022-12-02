---
title: 淘宝面试官👤：优惠券系统该如何设计？
shortTitle: 大厂的优惠券系统是如何设计的？
description: 大厂的优惠券系统是如何设计的？
category:
  - 求职面试
tag:
  - 面试题&八股文
head:
  - - meta
    - name: keywords
      content: Java,java,面试题,八股文,优惠券
---


## 1 Scenario 场景

电商大厂常见促销手段：

*   优惠券
*   拼团
*   砍价
*   老带新

### **1.1 优惠券的种类**

*   满减券
*   直减券
*   折扣券

### **1.2 优惠券系统的核心流程**

#### **1.2.1 发券**

发券的方式：同步发送 or 异步发送

#### **1.2.2 领券**

*   谁能领？

所有用户 or 指定的用户

*   领取上限

一个优惠券最多能领取多少张？

*   领取方式

用户主动领取 or 自动发放被动领取

#### **1.2.3 用券**

*   作用范围

商品、商户、类目

*   计算方式

是否互斥、是否达到门槛等

### **1.3 需求拆解**

#### **1.3.1 商家侧**

*   创建优惠券
*   发送优惠券

#### **1.3.2 用户侧**

*   领取优惠券
*   下单
*   使用优惠券
*   支付

## **2 Service 服务**

### **2.1 服务结构设计**

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-cdf44a4a-f648-49f0-bebe-686c4a66d2fd.jpg)

### **2.2 优惠券系统设计技术难点**

*   券的分布式事务，使用券的过程会出现的分布式问题分析?
*   如何防止超发?
*   如何大批量给用户发券?
*   如何限制券的使用条件?
*   如何防止用户重复领券?


## 3 Storage存储

### **3.1 表单设计**

#### **券批次（券模板），coupon\_batch**

指一批优惠券的抽象、模板，包含优惠券的大部分属性。

如商家创建了一批优惠券，共1000张，使用时间为2022-11-11 00:00:00 ~ 2022-11-11 23:59:59，规定只有数码类目商品才能使用，满100减50。

#### **券**

发放到用户的一个实体，已与用户绑定。

如将某批次的优惠券中的一张发送给某个用户，此时优惠券属于用户。

#### **规则**

优惠券的使用有规则和条件限制，比如满100减50券，需要达到门槛金额100元才能使用。

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-638df6ed-12f8-4a20-8c58-89051bc9376a.jpg)

**券批次表 coupon\_batch**

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-c4d8f639-328b-42b9-94b0-5e15b8eee784.jpg)

**规则表 rule：**

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-b2383938-ffbc-4686-808c-908ab11e4b2b.jpg)

**规则内容：**

```
{ 
  threshold: 5.01 // 使用门槛 
  amount: 5 // 优惠金额 
  use_range: 3 // 使用范围，0—全场，1—商家，2—类别，3—商品 
  commodity_id: 10 // 商品 id 
  receive_count: 1 // 每个用户可以领取的数量 
  is_mutex: true // 是否互斥，true 表示互斥，false 表示不互斥 
  receive_started_at: 2020-11-1 00:08:00 // 领取开始时间 
  receive_ended_at: 2020-11-6 00:08:00 // 领取结束时间 
  use_started_at: 2020-11-1 00:00:00 // 使用开始时间 
  use_ended_at: 2020-11-11 11:59:59 // 使用结束时间 
}
```


**优惠券表 coupon：**

```

create table t_coupon
(
    coupon_id     int          null comment '券ID，主键',
    user_id       int          null comment '用户ID',
    batch_id      int          null comment '批次ID',
    status        int          null comment '0-未使用、1-已使用、2-已过期、3-冻结',
    order_id      varchar(255) null comment '对应订单ID',
    received_time datetime     null comment '领取时间',
    validat_time  datetime     null comment '有效日期',
    used_time     datetime     null comment '使用时间'
);
```


### **3.2 建券**

**1、新建规则**

```
INSERT INTO rule (name, type, rule_content) 
VALUES(“满减规则”, 0, '{ 
                         threshold: 100 
                         amount: 10 
                         ...... 
                       }');
```

**2、新建优惠券批次**

```
INSERT INTO coupon\_batch (coupon\_name, rule\_id, total\_count ) 
VALUES(“劳斯莱斯5元代金券”, 1010, 10000);
```




### **3.3 发券**

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-066459b1-1271-468e-9e45-c409b6298144.jpg)

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-a448c453-8b50-4af8-a913-bda03a6c6f97.jpg)

##### **如何给大量用户发券？**

异步发送！

##### **触达系统**

*   短信、邮件

可通过调用第三方接口的方式实现

*   站内信

通过数据库插入记录来实现

**信息表 message**

```
create table t_message
(
    id         int null comment '信息ID',
    send_id    int null comment '发送者id',
    rec_id     int null comment '接受者id',
    content    vachar(255) comment '站内信内容',
    is_read    int null comment '是否已读',
    send_time  datetime comment '发送时间'
)
comment '信息表';
```

先考虑用户量很少的情况，商家要给所有人发站内信，则先遍历用户表，再按照用户表中的所有用户依次将站内信插入到 message 表中。这样，如果有100个用户，则群发一条站内信要执行100个插入操作。

#### **系统用户数增加到w级**

发一条站内信，就得重复插入上万条数据。而且这上万条数据的 content 一样！假设一条站内信占100K，发一次站内信就要消耗十几M。对此，可将原来的表拆成两个表：

**信息表 message**

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-19c6ce5d-8e83-4552-902d-5d28cd17a7be.jpg)

**信息内容表 message\_content**

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-e04b414f-6b41-4882-8324-208715b52284.jpg)

#### **发一封站内信的步骤**

1.  往 message\_content 插入站内信的内容
2.  在 message 表中，给所有用户插入一条记录，标识有一封站内信


#### **千w级用户数**

这就有【非活跃用户】的问题，假设注册用户一千万，根据二八原则，其中活跃用户占20%。若采用上面拆成两个表的情况，发一封“站内信”，得执行一千万个插入操作。可能剩下80%用户基本都不会再登录，其实只需对其中20%用户插入数据。

**信息表 message：**

```
create table t_message
(
    id         int null comment '信息 ID',
    # send_id    int null comment '发送者 id', 去除该字段
    rec_id     int null comment '接受者 id',
    message_id int null comment '外键，信息内容',
    is_read    int null comment '是否已读'
)
    comment '信息表';
create table t_message_content
(
    id        int          null comment '信息内容id',
    send_id     int         null comment '发送者id',
    content   varchar(255) null comment '内容',
    send_time datetime     null comment '发送时间'
);
```



#### **用户侧操作**

登录后，首先查询 message\_content 中的那些没有在 message 中有记录的数据，表示是未读的站内信。在查阅站内信的内容时，再将相关的记录插入 message。

#### **系统侧操作**

发站内信时：

*   只在 message\_content 插入站内信的主体内容
*   message 不插入记录

#### **给 10W 用户发券**

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-e6134270-a52f-4579-a200-e0c0e4c13c82.jpg)

有什么问题？重复消费，导致超发！

1.  运营提供满足条件的用户文件，上传到发券管理后台并选择要发送的优惠券
2.  管理服务器根据【用户ID】、【券批次ID】生成消息，发送到MQ
3.  优惠券服务器消费消息

```
# 记住使用事务哦！
INSERT INTO coupon (user_id, coupon_id，batch_id)
  VALUES(1001, 66889, 1111);

UPDATE coupon_batch SET total_count = total_count - 1,
                          assign_count = assign_count + 1
                      WHERE batch_id = 1111 AND total_count > 0;
```

### **3.4 领券**

#### 步骤

1.  校验优惠券余量

```
SELECT total_count FROM coupon_batch
WHERE batch_id = 1111;
```



2.  新增优惠券用户表，扣减余量

```
# 注意事务！
INSERT INTO coupon (user_id, coupon_id，batch_id)
  VALUES(1001, 66889, 1111); 

UPDATE coupon_batch SET total_count = total_count - 1,
                          assign_count = assign_count + 1
                      WHERE batch_id = 1111 AND total_count > 0;
```



用户领券过程中，其实也会出现类似秒杀场景。秒杀场景下会有哪些问题，如何解决？

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-8367d61b-2a12-4225-9fc2-586a1baac77d.jpg)

#### **用户重复领取或多领**

Redis 数据校验！

1.  领券前，先查缓存

```
# 判断成员元素是否是集合的成员
```
```
SISMEMBER KEY VALUE
SISMEMBER batch_id:1111:user_id 1001
```

2.  领券
3.  领券后，更新缓存

```
# 将一或多个成员元素加入到集合中，已经存在于集合的成员元素将被忽略
SADD KEY VALUE1......VALUEN
SADD batch_id:1111:user_id 1001
```

## **3.5 用券**

何时校验优惠券使用规则？

1.  确认订单（√）
2.  提交订单
3.  立即付款

确认订单页，对优惠券进行校验：

*   判断是否过期
*   判断适用范围
*   判断是否达到门槛
*   判断是否互斥


### **返回可用券**

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-182ea6b8-4702-4f01-b3dd-f9636815863f.jpg)

```
SELECT batch_id FROM coupon WHERE user_id = 1001 AND status = 0;
SELECT rule_id FROM coupon_batch WHERE batch_id = 1111;
SELECT name, type, rule_content FROM rule WHERE rule_id = 1010;
```

### 选择可用券，并返回结果

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-3d50a63e-2c1a-413b-9143-f808dcc4e0da.jpg)

### **同时操作多个服务，如何保证一致性？**

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-3b30f2df-fd77-4265-b655-31a82028505e.jpg)

### **表设计**

**优惠券操作记录表 Coupon\_opt\_record**

```
create table t_coupon_opt_record
(
    user_id     int      null comment '用户id',
    coupon_id   int      null comment '优惠券id',
    operating   int      null comment '操作，0-锁定、1-核销、2-解锁',
    operated_at datetime null comment '操作时间'
);
```

TCC，Try-Confirm-Cancel，目前分布式事务主流解决方案。

1.  阶段一：Try

对资源进行冻结，预留业务资源

创建订单时，将优惠券状态改为 “冻结”

2.  阶段二：Confirm

确认执行业务操作，做真正提交，将第一步Try中冻结的资源，真正扣减

订单支付成功，将优惠券状态改为 “已使用”

3.  阶段三：Cancel

取消执行业务操作，取消Try阶段预留的业务资源

支付失败/超时或订单关闭情况，将优惠券状态改为 “未使用”

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-c6a77fdf-4f4d-4082-92a7-c2cd11aba686.jpg)


## 4 Scale 扩展

### **4.1 快过期券提醒**

#### **定时扫券表**

缺点：扫描数据量太大，随着历史数据越来越多，会影响线上主业务，最终导致慢SQL。

#### **延时消息**

缺点：有些券的有效时间太长了(30天)以上，有可能造成大量 MQ 积压

#### **新增通知表**

优点：扫描的数据量小，效率高。删除无用的已通知的数据记录

##### **通知信息表（notify\_msg）设计**

```
create table t_notify_msg
(
    id          bigint auto_increment comment '自增主键',
    coupon_id   bigint       null comment '券id',
    user_id     bigint       null comment '用户id',
    notify_day  varchar(255) null comment '需要执行通知的日期',
    notify_type int          null comment '通知类型，1-过期提醒',
    notif_time  timestamp    null comment '通知的时间，在该时间戳所在天内通知',
    status      int          null comment '通知状态，0-初始状态、1-成功、2-失败',
    constraint t_notify_msg_id_uindex
        unique (id)
);

alter table t_notify_msg
    add primary key (id);
```

**过期券提**

1.  在创建优惠券的时候就将需要提醒的记录插入提醒表中notify\_msg
2.  把用户ID+批次ID+通知日期作为唯一索引，防止同一个批次有重复的记录通知，保证每天只会被通知一次
3.  建立notify\_time，通知时间索引，每日的通知扫描通过该索引列查询，通过索引列来提高查询效率
4.  通知完成后该表中的数据变失去了意义，通过定时任务将该数据删除

### **4.2 数据库层面优化 - 索引**

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-9e10c3cb-d0af-4b0e-a2f9-3da2fe7e72f1.jpg)

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-8df5b954-9e5a-445d-882f-f91616fee662.jpg)

### **4.3 发券接口，限流保护**

#### **前端限流**

点击一次后，按钮短时间内置灰

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-d2d8684d-9488-4543-9b2b-8e7559c8e625.jpg)

#### **后端限流**

部分请求直接跳转到【繁忙页】


>参考链接：[https://mp.weixin.qq.com/s/r9lgiOwV5cw8XmfCBUTcUA](https://mp.weixin.qq.com/s/r9lgiOwV5cw8XmfCBUTcUA)，出处：JavaEdge，整理：musk

----

  

 

  