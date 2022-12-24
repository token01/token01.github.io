---
title: 浅谈营销中台抽奖系统设计
shortTitle: 浅谈营销中台抽奖系统设计
category:
  - 浅谈营销中台抽奖系统设计"
tag:
  - 架构设计
description: 浅谈营销中台抽奖系统设计
head:
  - - meta
    - name: keywords
      content: Java,Java SE,Java基础,Java教程,凤凰涅槃进阶之路,Java入门,教程,java数组,数组
---

## 抽奖模型

1. 根据配置的`参与抽奖策略`判定用户是否有参与抽奖的权限
2. 预处理抽奖，即提供快速返回抽奖结果的`后门`
3. 根据奖品配置的`奖品筛选策略`，筛选奖品，返回可能中的`奖项`
4. 根据配置的`开奖策略`, 对该奖项进行逻辑判定，判定是否中奖
5. 如果未中奖，则判定是否存在`默认奖项`, 存在则判定中`默认奖项`

```java
LotteryResult lottery(Subject subject) {
    LotteryResult result = LotteryResult.NO_AUTHORITY;
    if (this.permit(subject)) {             // 判定是否允许参与抽奖
        result = preLottery(subject);       // 预处理抽奖
        if (result == null) {               
            result = LotteryResult.FAILED;
            // 奖品筛选
            LotteryPrize prize = this.selectPrize(subject);
            if (prize != null) {
                // 奖项判定
                result = prize.prefer(subject);
            }
            // 默认奖逻辑
            if (!result.isSuccess() && this.defaultPrize() != null) {
                result = this.defaultPrize().prefer(subject);
            }
        }
    }
    return result;
}
```

![抽奖流程](https://cdn.nlark.com/yuque/0/2020/png/338441/1597633436656-6b675e61-068c-40e4-aa8b-1a1f707be542.png)

## 逻辑链

上文提及的各种策略，以及预处理抽奖，都是以内置一个逻辑链实现的。它是一个典型的责任链模式. 它将逻辑控制赋予每一个逻辑节点本身.

#### `参与抽奖策略`示例

![逻辑链](https://cdn.nlark.com/yuque/0/2020/png/338441/1597633446327-704e83c4-d9e0-466c-954e-df586519675c.png)

#### 标签设计

```
动态标签原理：
    定位人群 -> 目标是否有标签, 即是否属于对应人群
    
人群元数据：
    用户数据源
    取值逻辑
    匹配逻辑
    目标值
    
举例：
    用户档案表  -> 数据源
    用户age字段 -> 取值逻辑
    大于50岁    -> 匹配逻辑 + 目标值
    
标签复用：
    
    
标签扩展：
    缩小范围：
        年龄 >或< xxx
        年龄>  xxx
    sn存在 = sn exists
    指定SN = sn exists + sn==xxx
```

以**会员积分**标签为例

* 先在**UserGroupType**类中定义个枚举

  ```java
  public enum UserGroupType {
        userIntegral(2), //会员积分
        private Integer val;
  
      public static UserGroupType getByValue(Integer type) {
          for (UserGroupType groupType : values()) {
              if (groupType.val.equals(type)) {
                  return groupType;
              }
          }
          return null;
      }
  
      public Integer getVal() {
          return this.val;
      }
  
      public boolean match(Integer val) {
          return this.val.equals(val);
      }
  }  
  ```

* 然后在**group**目录下增加个对应的Group文件(**UserIntegralUserGroup**)

  ```java
  @Service("userIntegralUserGroup-v1")
  @Scope("prototype")
  public class UserIntegralUserGroup extends AbstractUserGroupFilter {
  
      @Autowired
      private IBenefitEventClient iBenefitEventClient;
  
      @Override
      public boolean match(UserGroupType type) {
          return type == UserGroupType.userIntegral;
      }
  
      /**
       *  第一个参数： 逻辑判断，必填，格式： 数值， 范围：0,1,2,3,4分别代表>,≥,=,<,≤
       *  第二个参数： 用户积分数，必填，格式： 数值
       */
      @Override
      public boolean filter(Subject subject, LotteryContext ctx) {
          Principal principal = subject.getPrincipal();
          if (principal == null) {
              ctx.message("用户未登录");
              return false;
          }
          Integer type = getParam(0, Integer.class);
          Integer requireIntegral = getParam(1, Integer.class);
  
          /**
           * 当只存在一个参数时，参数设定为积分，判断逻辑设定为等于
           */
          if (requireIntegral == null) {
              requireIntegral = type;
              type = 2;
          }
  
          boolean pass  = false;
          R<Integer> r = iBenefitEventClient.getIntegralNum(subject.getUserId());
          if (r.isSuccess()) {
              Integer currentIntegral = r.getData();
              switch (type) {
                  // >；≥；=；<；≤
                  case 0:
                      pass = currentIntegral > requireIntegral;
                      break;
                  case 1:
                      pass = currentIntegral >= requireIntegral;
                      break;
                  case 2:
                      pass = currentIntegral.equals(requireIntegral);
                      break;
                  case 3:
                      pass = currentIntegral < requireIntegral;
                      break;
                  case 4:
                      pass = currentIntegral <= requireIntegral;
                      break;
              }
              if (!pass) {
                  ctx.message("活动参与积分不足");
              }
          }
  
          // 纪录需要的积分数
          ctx.attach(LotteryAttachKey.LOTTERY_INTEGRAL_REQUIRED, requireIntegral);
          return pass;
      }
  
      @Override
      public String getName() {
          return "会员积分限制";
      }
  }
  
  ```

* 最后在相关的实现类中调用

  * ActivityBuilder

    ```java
    private UserGroupSystem from(ActivityJoinStrategy activityJoinStrategy, Activity activity) {
        UserGroupSystem joinStrategy = new UserGroupSystem("参与策略-" + activityJoinStrategy.getId());
         ...
            // 积分要求
            if (activityJoinStrategy.getRequireIntegral() != null) {
                UserGroup group = factory.create(UserGroupType.userIntegral, activityJoinStrategy.getRequireIntegral());
                joinStrategy.add(group);
            }
         ...
    }
    ```

    

  * 添加活动（**UserGroupSystem**）

    ```java
        public R addActivityLottery(ActivityContentParam param) {
          ...
                /**
                 * 处理常用UserGroup
                 */
                List<ActivityContentParam.UserGroupStrategyItem> otherStrategyItem = new ArrayList<>();
                for (ActivityContentParam.UserGroupStrategyItem item : joinStrategy.getStrategyItems()) {
                    UserGroupType userGroupType = UserGroupType.getByValue(item.getType());
                    switch (userGroupType) {
                        case all:
                            break;
                        case userIntegral:
                            if (item.getParams().size() == 1) {
                                Integer requireIntegral = Integer.parseInt(item.getParams().get(0));
                                activityJoinStrategy.setRequireIntegral(requireIntegral);
                            }
                            break;
                        default:
                            otherStrategyItem.add(item);
                            break;
                    }
                }
          ...
        }
    ```

    

  * 获取活动信息（**getActivityInfoForUpdate**）

    ```java
        public R<ActivityContentResult> getActivityInfoForUpdate(String activityId) {
          ...
            /**
             * joinStrategy
             */
            List<ActivityContentParam.UserGroupStrategy> joinUserGroupStrategyList = new ArrayList<>();
            List<ActivityJoinStrategy> joinStrategyList = joinStrategyService.getActivityJoinStrategy(activityId);
            for (ActivityJoinStrategy joinStrategy : joinStrategyList) {
                ActivityContentParam.UserGroupStrategy userGroupStrategy = new ActivityContentParam.UserGroupStrategy();
                userGroupStrategy.setId(joinStrategy.getId());
                List<ActivityContentParam.UserGroupStrategyItem> strategyItems = new ArrayList<>();
                // 积分
                if (Func.isNotEmpty(joinStrategy.getRequireIntegral())) {
                    ActivityContentParam.UserGroupStrategyItem item = new ActivityContentParam.UserGroupStrategyItem();
                    item.setType(UserGroupType.userIntegral.getVal());
                    item.setParams(Arrays.asList(joinStrategy.getRequireIntegral().toString()));
                    strategyItems.add(item);
                }
            }
            result.setJoinStrategy(joinUserGroupStrategyList);
          ...
    }
    ```

## 平台抽奖流程设计

```
1. 取用户池总数(有标签的情况取当前标签用户池总数)，用来制作随机数。假如：10000。

2. 开始抽奖
    1. 随机数取序号, 987
    2. 根据该序号取数据库实体，并排除已中奖人
        # 去获取序号大于等于987且满足条件的第一个用户
        SELECT *
        FROM
        	t_lottery_activity_user_pool
        WHERE order_num >= #{order_num}
        and activity_id = #{activity_id}
        and attr_1 = #{attr_1}
        and user_id not in #{user_id_list}
        and user_token not in #{user_token_list} 
        order by order_num desc
        limit 1;
        
        # 当获取用户失败时，即序号正好是最大值，且该序号已中奖
        # 去获取序号小于等于987且满足条件的第一个用户
        SELECT *
        FROM
        	t_lottery_activity_user_pool
        WHERE order_num <= #{order_num}
        and activity_id = #{activity_id}
        and attr_1 = #{attr_1}
        and user_id not in #{user_id_list}
        and user_token not in #{user_token_list} 
        order by order_num asc
        limit 1;
    3. 将取到的用户缓存下来，用于规避重复中奖。

3. 抽多个人就重复二步骤   
```

## 平台抽奖流程实现

```java
# 开始抽奖某个奖
int maxAwardNum                         # 当次活动每人最大中奖次数
int repeatAward                         # 同奖品是否能重复中奖 - 基于userId判定人是否重复

cacheUserCountMap = null;
if (maxAwardNum > 0):
    getPointNumMap = getAwardUser();
if (repeatAward == 0):
    getPrizePointList = getPrizePointUser();    # userId
    
for item in batch:                       # 多批次抽奖
    if maxAwardNum == 0 && repeatAward == 1:
        # 随机去获取基于批次的用户，并设定为中奖用户
        getPointUser(item, item.count)
    else:
        for i in range(item.count):    # 单批次抽多次
            disableUser = getDisableUser(cacheUserCountMap, maxAwardNum)
            user = getPointUserOne(disableUser, getPointArray)
            if repeatAward == 0:
                getPrizePointList.put(user.id)
            if (maxAwardNum > 0) {
                if (getPointNumMap.containsKey(user.getUserId())) {
                    getPointNumMap.put(user.getUserId(), getPointNumMap.get(user.getUserId()) + 1);
                } else {
                    getPointNumMap.put(user.getUserId(), 1);
                }
            }            
```

## 数据库设计

### 主流程业务表结构

![主流程业务表](https://cdn.nlark.com/yuque/0/2020/png/338441/1597627377781-a4f238fb-b10d-42d8-8bac-d775f0e7f905.png)

```mysql
# 黑名单
CREATE TABLE `t_lottery_activity_blacklist` (
  `id` varchar(64) NOT NULL,
  `phone` varchar(255) DEFAULT NULL COMMENT '用户手机号码',
  `cause` varchar(255) DEFAULT NULL COMMENT '原因',
  `create_account` varchar(64) DEFAULT NULL COMMENT '添加人',
  `create_org` varchar(64) DEFAULT NULL,
  `update_account` varchar(64) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='抽奖活动黑名单表';

# 白名单
CREATE TABLE `t_lottery_activity_whitelist` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `phone` varchar(255) DEFAULT NULL COMMENT '用户手机号码',
  `account_id` varchar(255) DEFAULT NULL COMMENT '用户ID',
  `activity_id` varchar(255) DEFAULT NULL COMMENT '抽奖活动ID',
  `specified_prize_id` varchar(255) DEFAULT NULL COMMENT '指定奖品ID',
  `lottery_status` int(11) DEFAULT '0' COMMENT '中奖状态（0是未抽奖，1是未中奖，2是已中奖）',
  `lottery_time` datetime DEFAULT NULL COMMENT '抽奖时间',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `create_account` varchar(64) DEFAULT NULL COMMENT '添加人',
  `create_org` varchar(64) DEFAULT NULL,
  `update_account` varchar(64) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `add_time` datetime DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='抽奖活动白名单表';

# 抽奖活动
CREATE TABLE `t_lottery_activity` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `title` varchar(255) DEFAULT NULL COMMENT '抽奖页标题',
  `name` varchar(255) DEFAULT NULL COMMENT '抽奖活动名称',
  `type` int(11) DEFAULT NULL COMMENT '奖励类型：0->普通；1->活动关联',
  `form` int(11) DEFAULT NULL COMMENT '抽奖形式：0->摇一摇；1->九宫格',
  `genre` int(11) DEFAULT NULL COMMENT '抽奖类型：0->自主抽奖  1->平台抽奖',
  `description` varchar(255) DEFAULT NULL COMMENT '奖励说明',
  `start_date` datetime DEFAULT NULL COMMENT '开始时间',
  `end_date` datetime DEFAULT NULL COMMENT '结束时间',
  `perfect_activity` int(11) DEFAULT NULL COMMENT '是否是100%中奖：0->不是；1->是',
  `join_num` int(11) DEFAULT NULL COMMENT '活动已参数次数',
  `join_people_num` int(11) DEFAULT NULL COMMENT '活动已参数人数',
  `virtual_join_people_num` int(11) DEFAULT NULL COMMENT '活动虚拟参与人数',
  `show_join_people_num` int(11) DEFAULT NULL COMMENT '是否展示参与人数 ：0->隐藏；1->展示',
  `award_num` int(11) DEFAULT NULL COMMENT '中奖次数',
  `award_people_num` int(11) DEFAULT NULL COMMENT '中奖人数',
  `award_num_limit` int(11) DEFAULT NULL COMMENT '中奖人数限制',
  `join_people_total_limit` int(11) DEFAULT NULL COMMENT '总参与人数限制标志：0不限制，1限制，2奖品抽完即结束',
  `join_people_total_limit_num` int(11) DEFAULT NULL COMMENT '总参与限制人数',
  `status` int(11) DEFAULT NULL COMMENT '抽奖状态：0->未上线；1->已上线；2->已下线；3->手动结束',
  `backdrop` varchar(255) DEFAULT NULL COMMENT '活动主题背景图',
  `back_color` varchar(255) DEFAULT NULL COMMENT '背景色值',
  `pic_prize` varchar(255) DEFAULT NULL COMMENT '我的奖品图',
  `begin_draw` varchar(255) DEFAULT NULL COMMENT '开始抽奖图',
  `show_winning_list` int(11) DEFAULT NULL COMMENT '0不展示，1单条展示，2平铺展示',
  `permit_share` int(11) DEFAULT NULL COMMENT '允许分享 0不允许，1允许',
  `pic_rule` varchar(255) DEFAULT NULL COMMENT '抽奖规则图',
  `miss_point_pic` varchar(255) DEFAULT NULL COMMENT '未中奖图片',
  `miss_point_tips` varchar(255) DEFAULT NULL COMMENT '未中奖提示',
  `one_person_is_repeat` int(11) DEFAULT NULL COMMENT '同奖品下是否能重复，0可以重复，1不能重复',
  `one_person_lottery_number` int(11) DEFAULT NULL COMMENT '平台抽奖每人中奖次数',
  `show_lottery_number` int(11) DEFAULT NULL COMMENT '可抽次数得显示隐藏',
  `show_label` varchar(255) DEFAULT NULL COMMENT '展示字段（拼接）',
  `show_lottery_person` int(11) DEFAULT NULL COMMENT '可抽人数显示隐藏',
  `data_sources` varchar(64) DEFAULT NULL COMMENT '数据来源：1->SN号 2->手机号 3->手机号及验证码',
  `all_label` varchar(255) DEFAULT NULL COMMENT '全部标签字段',
  `auto_lottery_number` int(11) DEFAULT NULL COMMENT '自主抽奖每人中奖次数 0->不限；1->限制每人',
  `lottery_user_type` varchar(64) DEFAULT NULL COMMENT '平台抽奖用户类型',
  `store_channel` int(11) DEFAULT NULL COMMENT '店铺渠道：0->无渠道；1-> 用户平台；2->零售销售',
  `share_image` varchar(255) DEFAULT NULL COMMENT '分享图片',
  `share_tips` varchar(255) DEFAULT NULL COMMENT '分享提示',
  `share_people_num` int(11) DEFAULT '0' COMMENT '分享人数',
  `visit_people_num` int(11) DEFAULT NULL COMMENT '访问人数',
  `red_pack_num` decimal(10,2) DEFAULT NULL COMMENT '红包发放金额',
  `create_account` varchar(64) DEFAULT NULL,
  `create_org` varchar(64) DEFAULT NULL,
  `update_account` varchar(64) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='抽奖活动表';

# 抽奖活动参与码表
CREATE TABLE `t_lottery_activity_join_code` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `join_code` varchar(255) DEFAULT NULL COMMENT '抽奖码',
  `user_id` varchar(64) DEFAULT NULL COMMENT '用户ID',
  `user_token` varchar(255) DEFAULT NULL COMMENT '用户登录凭证',
  `user_source` varchar(255) DEFAULT NULL COMMENT '用户来源',
  `user_remark` varchar(255) DEFAULT NULL COMMENT '用户备注',
  `activity_id` varchar(64) DEFAULT NULL COMMENT '抽奖ID',
  `source` varchar(255) DEFAULT NULL COMMENT '抽奖码来源',
  `source_id` varchar(255) DEFAULT NULL COMMENT '来源ID',
  `status` int(11) DEFAULT NULL COMMENT '抽奖状态：0->未使用；1->已使用',
  `create_account` varchar(64) DEFAULT NULL,
  `create_org` varchar(64) DEFAULT NULL,
  `update_account` varchar(64) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='抽奖活动参与码表';

# 活动参与策略 (一个活动可能有多个活动参与策略，能满足一个就能参加)
CREATE TABLE `t_lottery_activity_join_strategy` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `activity_id` varchar(64) NOT NULL COMMENT '活动ID',
  `user_group_type` int(11) DEFAULT '0' COMMENT '目标用户 0所有 1动态配置',
  `user_group_value` varchar(1000) DEFAULT NULL COMMENT '用户分组ID',
  `require_level` varchar(64) DEFAULT NULL COMMENT '需要等级, 逗号分隔，只要满足其中一个等级',
  `require_integral` int(11) DEFAULT NULL COMMENT '需要积分（消耗积分）',
  `join_number` int(11) DEFAULT NULL COMMENT '允许参数次数',
  `join_period` int(11) DEFAULT NULL COMMENT '参与周期 0：永久 1：日 2：周 3：月 4：年，配合join_number设置限制活动参与次数',
  `award_number` int(11) DEFAULT NULL COMMENT '中奖次数限制',
  `award_period` int(11) DEFAULT NULL COMMENT '中奖次数限制周期，同join_period',
  `priority` int(11) DEFAULT NULL COMMENT '策略优先级, 越小优先级越高',
  `update_account` varchar(64) DEFAULT NULL,
  `create_org` varchar(64) DEFAULT NULL,
  `create_account` varchar(64) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_activity` (`activity_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='抽奖活动参与策略表';

# 活动链接表 
CREATE TABLE `t_lottery_activity_link` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `activity_id` varchar(64) NOT NULL COMMENT '活动ID',
  `url` varchar(255) DEFAULT NULL COMMENT '地址',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `type` int(11) DEFAULT NULL COMMENT '活动类型 0链接 1二维码',
  `create_account` varchar(64) DEFAULT NULL,
  `create_org` varchar(64) DEFAULT NULL,
  `update_account` varchar(64) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='活动链接表';

# 平台抽奖批次表
CREATE TABLE `t_lottery_activity_platform_batch` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `activity_id` varchar(64) DEFAULT NULL COMMENT '活动ID',
  `prize_id` varchar(64) DEFAULT NULL COMMENT '奖品ID',
  `batch_code` varchar(255) DEFAULT NULL COMMENT '批次号',
  `award_total` int(11) DEFAULT NULL COMMENT '抽奖人数',
  `priority` int(11) DEFAULT NULL COMMENT '优先级',
  `attr1` varchar(255) DEFAULT NULL COMMENT '属性1',
  `attr2` varchar(255) DEFAULT NULL COMMENT '属性2',
  `attr3` varchar(255) DEFAULT NULL COMMENT '属性3',
  `attr4` varchar(255) DEFAULT NULL COMMENT '属性4',
  `attr5` varchar(255) DEFAULT NULL COMMENT '属性5',
  `attr6` varchar(255) DEFAULT NULL COMMENT '属性6',
  `attr7` varchar(255) DEFAULT NULL COMMENT '属性7',
  `attr8` varchar(255) DEFAULT NULL COMMENT '属性8',
  `attr9` varchar(255) DEFAULT NULL COMMENT '属性8',
  `attr10` varchar(255) DEFAULT NULL COMMENT '属性10',
  `create_account` varchar(64) DEFAULT NULL,
  `create_org` varchar(64) DEFAULT NULL,
  `update_account` varchar(64) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `is_lottery` int(11) DEFAULT '0' COMMENT '是否抽完',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='平台抽奖批次表';

# 平台抽奖用户池表
CREATE TABLE `t_lottery_activity_platform_user_pool` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `activity_id` varchar(64) DEFAULT NULL COMMENT '活动ID',
  `user_id` varchar(64) NOT NULL COMMENT '用户ID',
  `user_token` varchar(255) NOT NULL COMMENT '用户凭证',
  `user_source` varchar(255) NOT NULL COMMENT '用户来源',
  `attr1` varchar(255) DEFAULT NULL COMMENT '属性1',
  `attr2` varchar(255) DEFAULT NULL COMMENT '属性2',
  `attr3` varchar(255) DEFAULT NULL COMMENT '属性3',
  `attr4` varchar(255) DEFAULT NULL COMMENT '属性4',
  `attr5` varchar(255) DEFAULT NULL COMMENT '属性5',
  `attr6` varchar(255) DEFAULT NULL COMMENT '属性6',
  `attr7` varchar(255) DEFAULT NULL COMMENT '属性7',
  `attr8` varchar(255) DEFAULT NULL COMMENT '属性8',
  `attr9` varchar(255) DEFAULT NULL COMMENT '属性8',
  `attr10` varchar(255) DEFAULT NULL COMMENT '属性10',
  `order_num` int(11) DEFAULT NULL COMMENT '序号',
  `create_account` varchar(64) DEFAULT NULL,
  `create_org` varchar(64) DEFAULT NULL,
  `update_account` varchar(64) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_activity_attr1` (`activity_id`,`attr1`(191)) USING BTREE,
  KEY `idx_activity_attr2` (`activity_id`,`attr2`(191)) USING BTREE,
  KEY `idx_activity_attr3` (`activity_id`,`attr3`(191)) USING BTREE,
  KEY `idx_activity_attr4` (`activity_id`,`attr4`(191)) USING BTREE,
  KEY `idx_activity_attr5` (`activity_id`,`attr5`(191)) USING BTREE,
  KEY `idx_activity_attr6` (`activity_id`,`attr6`(191)) USING BTREE,
  KEY `idx_activity_attr7` (`activity_id`,`attr7`(191)) USING BTREE,
  KEY `idx_activity_attr8` (`activity_id`,`attr8`(191)) USING BTREE,
  KEY `idx_activity_attr9` (`activity_id`,`attr9`(191)) USING BTREE,
  KEY `idx_activity_attr10` (`activity_id`,`attr10`(191)) USING BTREE,
  KEY `idx_activity_order_num` (`activity_id`,`order_num`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='平台抽奖用户池表';

# 活动奖品池
CREATE TABLE `t_lottery_activity_prize` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `activity_id` varchar(64) DEFAULT NULL COMMENT '活动ID',
  `type` int(11) DEFAULT NULL COMMENT '奖品类别：0->实物；1->积分；2->虚拟商品；3->红包；4->无中奖',
  `name` varchar(255) DEFAULT NULL COMMENT '奖品名称',
  `level` varchar(255) DEFAULT NULL COMMENT '奖品等级',
  `image` varchar(255) DEFAULT NULL COMMENT '奖品图片',
  `description` varchar(255) DEFAULT NULL COMMENT '奖品描述',
  `award_total` bigint(20) DEFAULT NULL COMMENT '奖品总数',
  `award_distribute` bigint(20) DEFAULT NULL COMMENT '奖品已发放数量',
  `award_lock_total` int(11) DEFAULT NULL COMMENT '奖品锁定数量',
  `is_default` int(11) DEFAULT NULL COMMENT '是否是默认奖品',
  `distribute_type` int(11) DEFAULT NULL COMMENT '兑奖方式：1->自营发放；2->第三方平台',
  `redirect_url` varchar(255) DEFAULT NULL COMMENT '跳转路径',
  `redirect_url_image` varchar(255) DEFAULT NULL COMMENT '跳转路径图片',
  `sku_code` varchar(255) DEFAULT NULL COMMENT '商品编码',
  `integral` int(11) DEFAULT NULL COMMENT '奖励积分值',
  `money` decimal(10,2) DEFAULT NULL COMMENT '价值，单位分',
  `warning_surplus` int(11) DEFAULT NULL COMMENT '预警库存',
  `warning_phone` varchar(255) DEFAULT NULL COMMENT '预警手机号',
  `priority` int(11) DEFAULT NULL COMMENT '优先级，值越低优先级越高',
  `create_account` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_org` varchar(64) DEFAULT NULL COMMENT '创建部门',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_account` varchar(64) DEFAULT NULL COMMENT '修改人',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `status` int(11) DEFAULT NULL COMMENT '奖品状态：0->禁用；1->启用',
  `is_deleted` int(11) DEFAULT NULL COMMENT '删除状态',
  `tenant_id` varchar(12) DEFAULT NULL COMMENT '租户号',
  `position` varchar(64) DEFAULT NULL COMMENT '位置, 用于九宫格配置',
  `virtual_type` int(11) DEFAULT NULL COMMENT '虚拟类型：1->电商优惠券；2->优惠码；3->虚拟金',
  `promotion_code` varchar(255) DEFAULT NULL COMMENT '优惠码',
  `distribute_channel` int(11) DEFAULT NULL COMMENT '放渠道：1->公众号\n     * 发放渠道：1->公众号',
  `award_tips` varchar(255) DEFAULT NULL COMMENT '中奖提示',
  `main_function_menu` varchar(255) DEFAULT NULL COMMENT '主功能按钮',
  `main_function_menu_url` varchar(255) DEFAULT NULL COMMENT '主功能按钮跳转地址',
  `assist_function_menu` int(11) DEFAULT NULL COMMENT '辅功能按钮：1->页面跳转；2->一键关注',
  `assist_function_menu_name` varchar(64) DEFAULT NULL COMMENT '辅功能按钮名称',
  `assist_function_menu_url` varchar(255) DEFAULT NULL COMMENT '辅功能按钮跳转地址',
  `assist_function_menu_qrcode` varchar(255) DEFAULT NULL COMMENT '辅功能按钮二维码',
  `deadline` int(11) DEFAULT NULL COMMENT '兑奖期限：1->随活动期限；2->固定期限；3->固定时长',
  `fixed_term_start_time` datetime DEFAULT NULL COMMENT '固定期限开始日期',
  `fixed_term_end_time` datetime DEFAULT NULL COMMENT '固定期限结束日期',
  `fixed_term_later_date` int(11) DEFAULT NULL COMMENT '固定时长领取后几天生效',
  `fixed_term_date` int(11) DEFAULT NULL COMMENT '固定时长有效天数',
  `draw_condition` varchar(64) DEFAULT NULL COMMENT '领取条件：1->身份实名认证；2->注册会员',
  `app_id` varchar(64) DEFAULT NULL COMMENT 'appId',
  `redirect_type` int(11) DEFAULT NULL COMMENT '跳转类型：0->跳转路径，1->跳转路径图片',
  PRIMARY KEY (`id`),
  KEY `idx_activity` (`activity_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='活动奖品池';

# 奖品筛选策略, 筛选出用户可能中奖的奖品
CREATE TABLE `t_lottery_activity_prize_match_strategy` (
  `id` varchar(64) NOT NULL COMMENT 'ID',
  `activity_id` varchar(64) DEFAULT NULL COMMENT '活动ID',
  `prize_id` varchar(64) DEFAULT NULL COMMENT '奖品ID',
  `match_rate` varchar(255) DEFAULT NULL COMMENT '奖品权重',
  `user_group_type` int(11) DEFAULT '0' COMMENT '目标用户 0 所有 1动态配置',
  `user_group_value` varchar(1000) DEFAULT NULL COMMENT '用户分组ID',
  `priority` int(11) DEFAULT NULL COMMENT '优先级 越小优先级越高',
  `create_account` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_org` varchar(64) DEFAULT NULL COMMENT '创建部门',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_account` varchar(64) DEFAULT NULL COMMENT '修改人',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `status` int(11) DEFAULT NULL COMMENT '业务状态',
  `is_deleted` int(11) DEFAULT NULL COMMENT '删除状态',
  `tenant_id` varchar(12) DEFAULT NULL COMMENT '租户号',
  PRIMARY KEY (`id`),
  KEY `idx_activity_prize_id` (`activity_id`,`prize_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='奖品命中策略';

# 奖品开奖策略
CREATE TABLE `t_lottery_activity_prize_strategy` (
  `id` varchar(64) NOT NULL COMMENT 'ID',
  `activity_id` varchar(64) DEFAULT NULL COMMENT '活动ID',
  `prize_id` varchar(64) DEFAULT NULL COMMENT '奖品ID',
  `prize_rate` varchar(255) DEFAULT NULL COMMENT '奖品概率',
  `prize_num` bigint(20) DEFAULT NULL COMMENT '奖品投放数量',
  `prize_distribute_num` bigint(20) DEFAULT NULL COMMENT '已分发奖品数量',
  `start_date` datetime DEFAULT NULL COMMENT '开始时间',
  `end_date` datetime DEFAULT NULL COMMENT '结束时间',
  `user_group_type` int(11) DEFAULT '0' COMMENT '目标用户 0 所有 1动态配置',
  `user_group_value` varchar(1000) DEFAULT NULL COMMENT '用户分组ID',
  `priority` int(11) DEFAULT NULL COMMENT '优先级 越小优先级越高',
  `create_account` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_org` varchar(64) DEFAULT NULL COMMENT '创建部门',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_account` varchar(64) DEFAULT NULL COMMENT '修改人',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `status` int(11) DEFAULT NULL COMMENT '业务状态',
  `is_deleted` int(11) DEFAULT NULL COMMENT '删除状态',
  `tenant_id` varchar(12) DEFAULT NULL COMMENT '租户号',
  PRIMARY KEY (`id`),
  KEY `idx_activity_prize` (`activity_id`,`prize_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='开奖策略';

# 中奖纪录
CREATE TABLE `t_lottery_activity_record` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `user_id` varchar(64) DEFAULT NULL COMMENT '用户ID',
  `motion_record_id` varchar(64) DEFAULT NULL COMMENT '活动记录ID',
  `user_phone` varchar(255) DEFAULT NULL COMMENT '抽奖手机号',
  `wx_open_id` varchar(128) DEFAULT NULL COMMENT '微信OPENID',
  `user_token` varchar(255) DEFAULT NULL COMMENT '用户参与凭证',
  `user_source` varchar(255) DEFAULT NULL COMMENT '用户来源  1->SN号 2->手机号 3->订单号 4->抽奖券码 ',
  `user_channel` int(11) DEFAULT NULL COMMENT '用户渠道，用于单活动多渠道抽奖的情况，配合t_lottery_activity_link',
  `user_remark` varchar(255) DEFAULT NULL COMMENT '用户备注',
  `activity_id` varchar(64) DEFAULT NULL COMMENT '活动ID',
  `prize_id` varchar(64) DEFAULT NULL COMMENT '奖品ID',
  `prize_strategy_id` varchar(255) DEFAULT NULL COMMENT '奖品策略ID',
  `award_time` datetime DEFAULT NULL COMMENT '开奖日期',
  `cash_time` datetime DEFAULT NULL COMMENT '兑奖日期',
  `cash_status` int(11) DEFAULT NULL COMMENT '兑奖状态 0未兑奖 1已兑奖 2已发货 3已完成 4待审核 5失败',
  `send_time` datetime DEFAULT NULL COMMENT '发奖日期',
  `receive_name` varchar(255) DEFAULT NULL COMMENT '收货人姓名',
  `receive_phone` varchar(255) DEFAULT NULL COMMENT '收货人手机',
  `receive_province` varchar(255) DEFAULT NULL COMMENT '收货人省份',
  `receive_city` varchar(255) DEFAULT NULL COMMENT '收货人城市',
  `receive_region` varchar(255) DEFAULT NULL COMMENT '收货人地区',
  `receive_detail_address` varchar(255) DEFAULT NULL COMMENT '收货人详细地址',
  `deliver_type` varchar(255) DEFAULT NULL COMMENT '物流类型',
  `deliver_company` varchar(255) DEFAULT NULL COMMENT '物流公司',
  `deliver_number` varchar(255) DEFAULT NULL COMMENT '物流单号',
  `address_id` varchar(64) DEFAULT NULL COMMENT '地址ID',
  `white_token` varchar(64) DEFAULT NULL COMMENT '通过白名单中奖使用的token',
  `create_account` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_org` varchar(64) DEFAULT NULL COMMENT '创建部门',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_account` varchar(64) DEFAULT NULL COMMENT '修改人',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `status` int(11) DEFAULT NULL COMMENT '是否中奖：0->否 1->是',
  `is_deleted` int(11) DEFAULT NULL COMMENT '删除状态',
  `tenant_id` varchar(12) DEFAULT NULL COMMENT '租户号',
  `verify_status` int(11) DEFAULT '0' COMMENT '审核状态：0->未审核；1->已审核；2->已拒绝',
  `approve_status` int(11) DEFAULT '0' COMMENT '实名认证状态：0->未认证；1->已认证',
  `approve_name` varchar(255) DEFAULT NULL COMMENT '实名姓名',
  `approve_phone` varchar(255) DEFAULT NULL COMMENT '实名电话',
  `approve_id_card` varchar(255) DEFAULT NULL COMMENT '实名身份证号',
  `detail` varchar(255) DEFAULT NULL COMMENT '反馈详情',
  `flow_type` int(11) DEFAULT NULL COMMENT '流向类型：0->线上，1->线下',
  `offline_flow` varchar(255) DEFAULT NULL COMMENT '具体流向，customer_code',
  PRIMARY KEY (`id`),
  KEY `idx_activity_user` (`activity_id`,`user_id`) USING BTREE,
  KEY `idx_user` (`user_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='活动参与记录';

# 抽奖活动trace表
CREATE TABLE `t_lottery_activity_record_trace` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `user_id` varchar(64) DEFAULT NULL COMMENT '账号Id',
  `user_token` varchar(255) DEFAULT NULL COMMENT '用户参与凭证',
  `user_source` varchar(255) DEFAULT NULL COMMENT '用户来源  1->SN号 2->手机号 3->订单号 4->抽奖券码 ',
  `activity_id` varchar(64) DEFAULT NULL COMMENT '活动Id',
  `activity_record_id` varchar(64) DEFAULT NULL COMMENT '活动记录Id',
  `trace_content` text COMMENT '跟踪内容',
  `create_account` varchar(64) DEFAULT NULL,
  `create_org` varchar(64) DEFAULT NULL,
  `update_account` varchar(64) DEFAULT NULL,
  `status` int(11) DEFAULT NULL COMMENT '抽奖状态：0->未使用；1->已使用',
  `is_deleted` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='抽奖活动trace表';

# 抽奖活动trace明细表
CREATE TABLE `t_lottery_activity_record_trace_detail` (
  `id` varchar(64) NOT NULL,
  `record_id` varchar(64) DEFAULT NULL,
  `user_id` varchar(64) DEFAULT NULL,
  `user_token` varchar(255) DEFAULT NULL,
  `user_source` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT NULL COMMENT '类型：参与策略，预处理策略，中奖策略，开奖策略',
  `code` varchar(11) DEFAULT NULL COMMENT 'UserGroupType的code值',
  `params` varchar(255) DEFAULT NULL COMMENT '参数值',
  `award` int(11) DEFAULT NULL COMMENT '是否中奖，0未中奖，1中奖',
  `status` varchar(255) DEFAULT NULL COMMENT '状态，0失败，1成功',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

# 公众号红包记录
CREATE TABLE `t_lottery_wx_redpack_record` (
  `id` varchar(64) NOT NULL COMMENT 'ID',
  `re_openid` varchar(32) DEFAULT NULL,
  `mch_id` varchar(64) DEFAULT NULL COMMENT '商户id',
  `detail_id` varchar(255) DEFAULT NULL COMMENT '红包单号',
  `status` varchar(16) DEFAULT NULL COMMENT '红包状态 红包状态 SENDING:发放中  SENT:已发放待领取  FAILED：发放失败  RECEIVED:已领取  RFUND_ING:退款中  REFUND:已退款',
  `send_type` varchar(32) DEFAULT NULL COMMENT '发放类型',
  `hb_type` varchar(32) DEFAULT NULL COMMENT '红包类型',
  `total_num` int(11) DEFAULT NULL COMMENT '红包个数',
  `total_amount` int(11) DEFAULT NULL COMMENT '红包金额',
  `reason` varchar(32) DEFAULT NULL COMMENT '失败原因',
  `send_time` datetime DEFAULT NULL COMMENT '红包发送时间',
  `refund_time` datetime DEFAULT NULL COMMENT '红包退款时间',
  `refund_amount` int(11) DEFAULT NULL COMMENT '红包退款金额',
  `wishing` varchar(128) DEFAULT NULL COMMENT '祝福语',
  `remark` varchar(255) DEFAULT NULL COMMENT '活动描述',
  `act_name` varchar(32) DEFAULT NULL COMMENT '活动名称',
  `hblist` varchar(128) DEFAULT NULL COMMENT '领取列表',
  `return_msg` varchar(128) DEFAULT NULL COMMENT '返回结果',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='公众号红包记录';
```

### 新老用户活动表（可迁移到商城模块）

![新老用户活动](https://cdn.nlark.com/yuque/0/2020/png/338441/1597627845765-5677fbe0-323e-4e08-bae9-0183d3343042.png)

```mysql
# 活动广告表 （正式环境都没用到）
CREATE TABLE `t_lottery_motion_advertise` (
  `id` varchar(64) NOT NULL,
  `name` varchar(100) DEFAULT NULL COMMENT '广告名称',
  `motion_id` varchar(64) DEFAULT NULL COMMENT '活动ID',
  `pic` varchar(500) DEFAULT NULL COMMENT '广告图片',
  `url` varchar(500) DEFAULT NULL COMMENT '链接地址',
  `remark` varchar(500) DEFAULT NULL COMMENT '备注',
  `sort` int(11) DEFAULT '0' COMMENT '排序',
  `app_id` varchar(64) DEFAULT NULL COMMENT 'appId',
  `create_account` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_org` varchar(64) DEFAULT NULL COMMENT '创建部门',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `tenant_id` varchar(12) DEFAULT NULL COMMENT '租户号',
  `update_account` varchar(64) DEFAULT NULL COMMENT '修改人',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `is_deleted` int(1) DEFAULT NULL COMMENT '是否删除',
  `status` int(1) DEFAULT NULL COMMENT '上下线状态：0->下线；1->上线',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='活动广告表';

# 试条领取记录表
CREATE TABLE `t_lottery_strip` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `bottle_id` varchar(64) DEFAULT NULL COMMENT '试条瓶id',
  `account_id` varchar(64) DEFAULT NULL COMMENT '账户ID',
  `quantity` int(11) DEFAULT NULL COMMENT '数量',
  `remark` varchar(64) DEFAULT NULL COMMENT '备注',
  `create_account` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_org` varchar(64) DEFAULT NULL COMMENT '创建部门',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_account` varchar(64) DEFAULT NULL COMMENT '修改人',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `status` int(11) DEFAULT NULL COMMENT '业务状态',
  `is_deleted` int(11) DEFAULT '0' COMMENT '是否已删除',
  `task_code` varchar(64) DEFAULT NULL COMMENT '活动任务编码',
  PRIMARY KEY (`id`),
  KEY `account_bottle_index` (`account_id`,`bottle_id`) USING BTREE,
  KEY `create_time_index` (`create_time`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='试条领取记录表';

# 试条瓶领取记录表
CREATE TABLE `t_lottery_strip_bottle` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `account_id` varchar(64) DEFAULT NULL COMMENT '账户ID',
  `ac_code` varchar(255) DEFAULT NULL COMMENT '试条码',
  `order_sn` varchar(255) DEFAULT NULL COMMENT '订单号',
  `model_id` varchar(64) DEFAULT NULL COMMENT '试条瓶型号ID',
  `model_name` varchar(64) DEFAULT NULL COMMENT '试条瓶型号',
  `model_image` varchar(255) DEFAULT NULL COMMENT '试条瓶图片',
  `specs` int(11) DEFAULT NULL COMMENT '规格',
  `expire_date` date DEFAULT NULL COMMENT '数量',
  `goods_type` int(11) DEFAULT '1' COMMENT '商品类型 1：随单发货 2：自付运费',
  `user_type` int(11) DEFAULT NULL COMMENT '1:新用户  2：老用户',
  `sku_code` varchar(64) DEFAULT NULL COMMENT '试条瓶sku',
  `dynamic_one_picture` varchar(255) DEFAULT NULL COMMENT '瓶子完成任务动效图1',
  `dynamic_two_picture` varchar(255) DEFAULT NULL COMMENT '瓶子完成任务动效图2',
  `dynamic_full_picture` varchar(255) DEFAULT NULL COMMENT '试条瓶集满动效图',
  `create_account` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_org` varchar(64) DEFAULT NULL COMMENT '创建部门',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_account` varchar(64) DEFAULT NULL COMMENT '修改人',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `status` int(11) DEFAULT NULL COMMENT '业务状态 1:已参与 2：可兑换  3：已完成',
  `is_deleted` int(11) DEFAULT '0' COMMENT '是否已删除',
  PRIMARY KEY (`id`),
  KEY `account_id_index` (`account_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='试条瓶领取记录表';

#  新用户参与活动情况表
CREATE TABLE `t_lottery_activity_state` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `account_id` varchar(64) DEFAULT NULL COMMENT '账户ID',
  `bottle_quantity` int(11) DEFAULT NULL COMMENT '试条瓶总数量',
  `bottle_spec_quantity` int(11) DEFAULT NULL COMMENT '试条瓶规格数量',
  `strip_quantity` int(11) DEFAULT NULL COMMENT '试条数量',
  `create_account` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_org` varchar(64) DEFAULT NULL COMMENT '创建部门',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_account` varchar(64) DEFAULT NULL COMMENT '修改人',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `status` int(11) DEFAULT NULL COMMENT '用户参与活动状态 1 已参与 2 可兑换  3 已完成',
  `is_deleted` int(11) DEFAULT '0' COMMENT '是否已删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='用户参与活动情况表';

#  老用户活动参与型号
CREATE TABLE `t_lottery_strip_bottle_model` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `code` varchar(50) DEFAULT NULL COMMENT '编码',
  `model` varchar(50) DEFAULT NULL COMMENT '型号',
  `name` varchar(50) DEFAULT NULL COMMENT '名称',
  `img1` varchar(255) DEFAULT NULL,
  `img2` varchar(255) DEFAULT NULL,
  `img3` varchar(255) DEFAULT NULL,
  `img4` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COMMENT='老用户活动参与型号';

# 新用户活动参与型号
CREATE TABLE `t_lottery_strip_bottle_model_new` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `code` varchar(50) DEFAULT NULL COMMENT '编码',
  `model` varchar(50) DEFAULT NULL COMMENT '型号',
  `name` varchar(50) DEFAULT NULL COMMENT '名称',
  `img0` varchar(255) DEFAULT NULL,
  `img1` varchar(255) DEFAULT NULL,
  `img2` varchar(255) DEFAULT NULL,
  `img3` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COMMENT='新用户活动参与型号';

# 老用户活动中奖率
CREATE TABLE `t_lottery_strip_rate` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `min_count` int(11) DEFAULT NULL COMMENT '最小次数',
  `max_count` int(11) DEFAULT NULL COMMENT '最大次数',
  `rate_value` int(11) DEFAULT NULL COMMENT '中奖率(分子)',
  `type` int(11) DEFAULT NULL COMMENT '类型:1.试条,2.试条瓶',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COMMENT='老用户活动中奖率';

```

### 唯一码（试条码）表

![唯一码相关表](https://cdn.nlark.com/yuque/0/2020/png/338441/1597628559521-bef1bc51-a870-4c92-b3f6-e2d9c6af9073.png)

```mysql
# 试条码配置表
CREATE TABLE `t_lottery_supplier_config` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `material_name` varchar(255) DEFAULT NULL COMMENT '物料信息',
  `bar_code` varchar(255) DEFAULT NULL COMMENT '69码',
  `first_url` varchar(255) DEFAULT NULL COMMENT '首次应用链接',
  `create_account` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_org` varchar(64) DEFAULT NULL COMMENT '创建部门',
  `update_account` varchar(64) DEFAULT NULL COMMENT '修改人',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `tenant_id` varchar(12) DEFAULT NULL COMMENT '租户号',
  `status` int(11) DEFAULT NULL COMMENT '业务状态',
  `is_deleted` int(11) DEFAULT NULL COMMENT '删除状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='试条码配置表';

# 试条码扫码信息配置表
CREATE TABLE `t_lottery_supplier_configuration` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `account_id` varchar(64) DEFAULT NULL COMMENT '账号ID',
  `limits` int(11) DEFAULT NULL COMMENT '每人每月扫码限制次数',
  `tips` varchar(255) DEFAULT NULL COMMENT '超出扫码次数提示',
  `name` varchar(255) DEFAULT NULL COMMENT '运营人员姓名',
  `phone` varchar(255) DEFAULT NULL COMMENT '运营人员电话',
  `create_account` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_org` varchar(64) DEFAULT NULL COMMENT '创建部门',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_account` varchar(64) DEFAULT NULL COMMENT '修改人',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `tenant_id` int(12) DEFAULT NULL COMMENT '租户号',
  `status` int(11) DEFAULT NULL COMMENT '业务状态',
  `is_deleted` int(2) DEFAULT NULL COMMENT '删除状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='试条码扫码信息配置表';

```

### 可兼容的表

![可兼容表](https://cdn.nlark.com/yuque/0/2020/png/338441/1597627834599-19731b11-b499-4400-9130-428de94e0f8e.png)

```mysql
# 原活动表
CREATE TABLE `t_lottery_motion` (
  `id` varchar(64) NOT NULL,
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `name` varchar(255) DEFAULT NULL COMMENT '名称',
  `type` int(11) DEFAULT NULL COMMENT '活动类型 0无门槛活动 1积分活动 2任务活动 3唯一码活动',
  `description` varchar(255) DEFAULT NULL COMMENT '活动描述',
  `start_date` datetime DEFAULT NULL COMMENT '开始时间',
  `end_date` datetime DEFAULT NULL COMMENT '结束时间',
  `join_num` int(11) DEFAULT NULL COMMENT '活动已参数次数',
  `join_people_num` int(11) DEFAULT NULL COMMENT '活动已参数人数',
  `join_people_total_limit` int(11) DEFAULT NULL COMMENT '总人数参与限制：0不限 1限制',
  `join_people_total_limit_num` int(11) DEFAULT NULL COMMENT '总人数参与限制数量',
  `virtual_join_people_num` int(11) DEFAULT NULL COMMENT '活动虚拟参与人数',
  `show_join_people_num` int(11) DEFAULT NULL COMMENT '是否展示参与人数 0隐藏1展示',
  `award_num` int(11) DEFAULT NULL COMMENT '中奖次数',
  `award_people_num` int(11) DEFAULT NULL COMMENT '中奖人数',
  `activity_id` varchar(64) DEFAULT NULL COMMENT '关联抽奖活动',
  `require_integral` int(11) DEFAULT NULL COMMENT '需要消费的积分数，只有在type为1的时候生效',
  `lack_integral_tip` varchar(255) DEFAULT NULL COMMENT '积分不足提示',
  `join_people_full_tip` varchar(255) DEFAULT NULL COMMENT '活动人数超上限提示',
  `share_image` varchar(255) DEFAULT NULL COMMENT '分享图片',
  `share_tips_completed` varchar(255) DEFAULT NULL COMMENT '已完成活动用户分享',
  `share_tips_not_completed` varchar(255) DEFAULT NULL COMMENT '未完成活动用户分享',
  `qrcode_num` int(11) DEFAULT NULL COMMENT '生成二维码个数，不少于1',
  `link_num` int(11) DEFAULT NULL COMMENT '生成链接数量，不少于1',
  `backdrop` varchar(255) DEFAULT NULL COMMENT '活动背景图',
  `button_backdrop` varchar(255) DEFAULT NULL COMMENT '按钮背景图',
  `create_account` varchar(64) DEFAULT NULL,
  `create_org` varchar(64) DEFAULT NULL,
  `update_account` varchar(64) DEFAULT NULL,
  `status` int(11) DEFAULT NULL COMMENT '0 待发布，1已上线，2已下线，3已结束',
  `is_deleted` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `code_type` int(11) DEFAULT NULL COMMENT '唯一码类型 1:试条码 2:墨菲码',
  `validate_type` int(11) DEFAULT NULL COMMENT '验证条件类型  1：会员标签',
  `tag_type` varchar(20) DEFAULT NULL COMMENT '标签类型 1：新用户 2：老用户',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='活动表';

# 原活动参与策略表
CREATE TABLE `t_lottery_motion_join_strategy` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `motion_id` varchar(255) NOT NULL COMMENT '活动ID',
  `user_group_type` int(11) DEFAULT '0' COMMENT '目标用户 0所有 1动态配置',
  `user_group_value` varchar(64) DEFAULT NULL COMMENT '用户分组ID',
  `require_level` varchar(64) DEFAULT NULL COMMENT '需要等级, 逗号分隔，只要满足其中一个等级',
  `require_integral` int(11) DEFAULT NULL COMMENT '需要积分（消耗积分）',
  `require_accode` int(11) DEFAULT NULL COMMENT '需要试调码 0:不需求 1:需要',
  `join_people_total` int(11) DEFAULT NULL COMMENT '活动参与人数上限',
  `join_number` int(11) DEFAULT NULL COMMENT '允许参加次数',
  `join_period` int(11) DEFAULT NULL COMMENT '参与周期 0：永久 1：日 2：周 3：月 4：年，配合join_number设置限制活动参与次数',
  `award_number` int(11) DEFAULT NULL COMMENT '中奖次数限制',
  `award_period` int(11) DEFAULT NULL COMMENT '中奖次数限制周期，同join_period',
  `priority` int(11) DEFAULT NULL COMMENT '策略优先级, 越小优先级越高',
  `update_account` varchar(64) DEFAULT NULL,
  `create_org` varchar(64) DEFAULT NULL,
  `create_account` varchar(64) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `require_mfcode` int(11) DEFAULT NULL COMMENT '需要墨菲码 0:不需求 1:需要',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='活动参与策略表';

# 原活动策略表
CREATE TABLE `t_lottery_motion_link` (
  `id` varchar(64) NOT NULL,
  `motion_id` varchar(255) NOT NULL COMMENT '活动ID',
  `url` varchar(255) DEFAULT NULL COMMENT '地址',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `type` int(11) DEFAULT NULL COMMENT '活动类型 0链接 1二维码',
  `create_account` varchar(64) DEFAULT NULL,
  `create_org` varchar(64) DEFAULT NULL,
  `update_account` varchar(64) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='活动链接表';

# 原活动纪录表（同时也是临时抽奖令牌表）
CREATE TABLE `t_lottery_motion_record` (
  `id` varchar(64) NOT NULL,
  `motion_id` varchar(64) NOT NULL,
  `user_id` varchar(64) NOT NULL,
  `activity_id` varchar(64) NOT NULL,
  `type` int(11) DEFAULT NULL COMMENT '类型',
  `require_integral` int(11) DEFAULT NULL COMMENT '需要积分数',
  `chance` int(11) DEFAULT NULL COMMENT '抽奖机会次数',
  `chance_surplus` int(11) DEFAULT NULL COMMENT '抽奖剩余次数',
  `expire_time` datetime DEFAULT NULL COMMENT '令牌超时日期',
  `consume_time` datetime DEFAULT NULL COMMENT '消费时间',
  `lottery_record_id` varchar(64) DEFAULT NULL COMMENT '中奖纪录ID',
  `lottery_status` int(11) DEFAULT NULL COMMENT '中奖状态：0 未中奖 1已中奖',
  `create_account` varchar(64) DEFAULT NULL,
  `create_org` varchar(64) DEFAULT NULL,
  `update_account` varchar(64) DEFAULT NULL,
  `status` int(11) DEFAULT NULL COMMENT '0无效 1有效 2已抽奖',
  `is_deleted` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `ac_code` varchar(255) DEFAULT NULL COMMENT '试条码token',
  `mf_code` varchar(255) DEFAULT NULL COMMENT '墨菲码token',
  PRIMARY KEY (`id`),
  KEY `idx_motion_user` (`motion_id`,`user_id`) USING BTREE,
  KEY `idx_activity_user` (`activity_id`,`user_id`) USING BTREE,
  KEY `idx_user` (`user_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='活动纪录表（同时也是临时抽奖令牌表）';

```



## 切换方案
