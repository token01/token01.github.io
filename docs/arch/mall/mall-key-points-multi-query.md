# 商城设计要点(九)-订单分库分表，多维度查询

## 1. 简介

如果电商网站的订单数过多，我们一般会想到 `分库分表` 解决策略。没问题，这个方向是对的。

**但是查询维度很多**

1、买家，查询 `我的订单` 列表，需要根据 `buyer_id` 来查询

2、查看订单详情，需要根据 `order_id` 来查询

3、卖家，查询 `我的销售` 列表，需要根据 `seller_id` 来查询

而订单分表只有一个分表键，如何满足多维度 SQL 操作呢？



## 2. 解决方案

而订单分表只有一个分表键，如何满足多维度 SQL 操作呢？

我们一般是基于买家维度来设计，下图是 `淘宝` 的订单列表

![image-20220326213429736](https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220326213429736.png)

一个订单号 19 位，我们会发现同一个用户不同订单的最后 6 位都是一样的，没错，那是用户id的后6位。

这样，上文中  `场景1`、`场景2` 的查询可以共性抽取， 采用 `buyer_id` 或 `order_id` 的 `后六位` 作为分表键，对 `1 000 000` 取模，得到买家维度的订单分表的编号。

至于 `场景3` 卖家维度的订单查询，我们可以采用数据异构方式，按 `seller_id` 维度另外存储一份数据，专门供卖家使用。

## 参考文章

[聊聊电商系统中常见的9大坑！库存超卖、重复下单、物流单ABA](https://mp.weixin.qq.com/s/BgVr0jEBJwQI5UW_ele08A)