import  sidebar  from "vuepress-theme-hope";
export const sidebarConfig = sidebar({
  // 你可以省略 .md 扩展名，以 / 结尾的路径会被推断为 /README.md(区分大小写)
  "/nice-article/itmind/": [
    "readme.md",
    "ideapxideajhideayjjhmideazxjhzcmpjjcyjjhqcyx",
    "yigkymxczideatsyqdffblwxjcywdxbxt",
    "ideapjazjczxjhmzcmyjjhcxgxz",
    "ideajhmideajhmideapxideajhmideazcmideayjjhm",
    "navicatmacyjpx",
    "navicatzxbwindowspjbjc",
    "typorayjpx",
    "typoramaczwpjbhyjjdkptmarkdownbjqmksimacsocom",
    "xshellazpjbjcxshellpxffxbxt",
    "pycharmjhpxmazjcnyrgxxbxt",
  ],

  //区块链学习路线
  "/blockchain/": [
    "The_white_paper_the_currency",
    "White_paper_the_etheric_lane",
    {
      text: "区块链基础知识",
      prefix: "Basic_logic/",
      collapsible: true,
      children: [
        "Block_chain_concept",
        "Block_chain_and_random_Numbers",
        "Chain_block_design",
        "Intelligent_contract_solidity",
        "League_chain",
        "Smart_contracts_design_pattern",
      ],
    },
    {
      text: "区块链组件",
      prefix: "component/p2p",
      collapsible: true,
      children: [
        "Some_of_the_design_ideas_of_P2P_network",
        "Introduction_to_libp2p_autoNAT_network",
        "Introduction_to_libp2p_MDNS_network",
        "Introduction_to_p2p_network_transmission_of_NAT",
        "Introduction_to_libp2p_multiAddress_network",
        "Introduction_to_p2p_network_transport_protocol",
        "Introduction_to_the_relay_of_p2p_network_protocol",
      ],
    },
    {
      text: "区块链公链研究",
      prefix: "Male_chain_research",
      collapsible: true,
      children: [
        "cosmos/Cosmos_source",
        "ethereum/Etheric_fang_basic_theory_part/The_wallet_series/0.Rounding",
        "ethereum/Etheric_fang_basic_theory_part/1.What_is_the_etheric_lane",
        "ethereum/Etheric_fang_basic_theory_part/2.The_etheric_lanes_and_related_terms",
        "ethereum/Etheric_fang_basic_theory_part/3.The_etheric_fang_launch_parameters_explanation",
        "ethereum/Etheric_fang_source_analysis/p2p/1.Etheric_fang_source_analysis_of_p2p_network_boot",
        "ethereum/Etheric_fang_source_analysis/p2p/2.Etheric_fang_Kademlia_algorithm_of_the_source_code_analysis",
        "ethereum/Etheric_fang_source_analysis/p2p/3.Etheric_fang_source_analysis_of_p2p_nodes_found",
        "ethereum/Etheric_fang_source_analysis/p2p/4.Etheric_fang_RLPX_agreement",
        "ethereum/Etheric_fang_source_analysis/p2p/5.Etheric_fang_source_analysis_of_block_and_radio",
        "ethereum/Etheric_fang_source_analysis/p2p/6.Etheric_fang_Fetcher_synchronization_of_the_source_code_analysis",
      
        "ethereum/Etheric_fang_source_analysis/1.etheric_fang_source_of_the_etheric_lanes_start_proces",
      ],
    },

  ],
  "/sidebar/sanfene/": [
    "nixi",
    "javase",
    "collection",
    "javathread",
    "jvm",
    "spring",
    "redis",
    "mybatis",
    "mysql",
    "os",
    "network",
    "rocketmq",
  ],
// 学习路线
  "/learningPath/": [
    {
      text: "Java学习路线",
      prefix: "java/",
      collapsible: true,
      children: [
        "yitiaolong",
        "thread",
        "jvm",
      ],
    },
    "c",
    "ccc",
    "python",
    "go",
    "os",
    "qianduan",
    "algorithm",
    "bigdata",
    "android",
    "mysql",
  ],
    
  // 必须放在最后面
  "/": [
    {
      text: "一、前言",
      link: "home",
    },
    {
      text: "二、Java核心",
      collapsible: true,
      children: [
        {
          prefix: "overview/",
          text: "2.1 Java概述",
          collapsible: true,
          children: [
          "what-is-java",
          "java-history",
          "java-can-do-what",
          "jdk-install-config",
          "IDEA-install-config",
          "hello-world",
          ],
        },
        {
          text: "2.2 Java语法基础",
          collapsible: true,
          children: [
          "basic-extra-meal/48-keywords",
          "basic-extra-meal/java-naming",
          "basic-grammar/javadoc",
          "basic-grammar/basic-data-type",
          "basic-grammar/type-cast",
          "basic-grammar/operator",
          "basic-grammar/flow-control",
          ],
        },
        {
          text: "2.3 数组&字符串",
          collapsible: true,
          children: [
          "array/array",
          "array/print",
          "string/immutable",
          "string/constant-pool",
          "string/intern",
          "string/equals",
          "string/join",
          "string/split",
          ],
        },
        {
          text: "2.4 面向对象编程",
          collapsible: true,
          children: [
          "oo/object-class",
          "oo/package",
          "oo/var",
          "oo/method",
          "oo/construct",
          "oo/access-control",
          "oo/code-init",
          "oo/abstract",
          "oo/interface",
          "oo/abstract-vs-interface",
          "oo/inner-class",
          "oo/this-super",
          "basic-extra-meal/override-overload",
          "oo/static",
          "oo/final",
          "oo/encapsulation",
          "oo/extends-bigsai",
          "oo/polymorphism",
          
          ],
        },
        {
          text: "2.5 集合框架（容器）",
          collapsible: true,
          children: [
          
          "collection/gailan",
          "collection/arraylist",
          "collection/linkedlist",
          "collection/list-war-2",
          "collection/iterator-iterable",
          "collection/fail-fast",
          "collection/hashmap",
          "collection/linkedhashmap",
          "collection/treemap",
          "collection/arraydeque",
          "collection/PriorityQueue",
          "collection/WeakHashMap",
         
          ],
        },
        {
          text: "2.6 IO",
          collapsible: true,
          prefix:"io/",
          children: [
          "shangtou",
          "file-path",
          "stream",
          "reader-writer",
          "buffer",
          "char-byte",
          "serialize",
          "Serializbale",
          "transient",
          "print",
          ],
        },
        {
          text: "2.7 异常处理",
          collapsible: true,
          prefix:"exception/",
          children: [
          "gailan",
          "try-with-resouces",
          "shijian",
          "npe",
          ],
        },
        {
          text: "2.8 常用工具类",
          collapsible: true,
          prefix:"common-tool/",
          children: [
          "arrays",
          "collections",
          "hutool",
          "guava",
          "utils",
          ],
        },
        {
          text: "2.9 Java新特性",
          prefix: "java8/",
          collapsible: true,
          children: [
          "stream",
          "optional",
          "Lambda",
          ],
        },
        {
          text: "2.10 Java重要知识点",
          prefix:"basic-extra-meal/",
          collapsible: true,
          children: [
          "java-unicode",
          "int-cache",
          "box",
          "deep-copy",
          "hashcode",
          "equals-hashcode",
          "Overriding",
          "pass-by-value",
          "comparable-omparator",
          "jdk9-char-byte-string",
          "jdk-while-for-wuxian-xunhuan",
          "class-object",
          "instanceof",
          "instanceof-jvm",
          "immutable",
          "varables",
          "generic",
          "true-generic",
          "annotation",
          "enum",
          "fanshe",
          ],
        },
        {
          text: "2.11 网络编程",
          collapsible: true,
          prefix: "socket/",
          children: [
            "socket",
            "http",
          ],
        },
        {
          text: "2.12 NIO",
          collapsible: true,
          prefix: "nio/",
          children: [
            "why",
            "rumen",
            "moxing",
            "network-connect",
            "BIONIOAIO",
          ],
        },
        {
          text: "2.13 并发编程",
          collapsible: true,
          prefix: "thread/",
          children: [
          "wangzhe-thread",
          "thread-state-and-method",
          "thread-group-and-thread-priority",
          "why-need-thread",
          "thread-bring-some-problem",
          "jmm",
          "volatile",
          "synchronized-1",
          "synchronized",
          "cas",
          "aqs",
          "lock",
          "suo",
          "pianxiangsuo",
          "reentrantLock",
          "ReentrantReadWriteLock",
          "condition",
          "LockSupport",
          "map",
          "ConcurrentHashMap",
          "ConcurrentLinkedQueue",
          "CopyOnWriteArrayList",
          "ThreadLocal",
          "BlockingQueue",
          "pool",
          "ScheduledThreadPoolExecutor",
          "atomic",
          "CountDownLatch",
          "fork-join",
          "shengchanzhe-xiaofeizhe",
          ],
        },
        {
          text: "2.14 JVM",
          prefix: "jvm/",
          collapsible: true,
          children: [
          "what-is-jvm",
          "how-run-java-code",
          "class-load",
          "class-file-jiegou",
          "bytecode",
          "zijiema-zhiling",
          "how-jvm-run-zijiema-zhiling",
          "hsdb",
          "asm",
          "compile-jdk",
          "neicun-jiegou",
          "whereis-the-object",
          "gc",
          "tujie-gc",
          "meituan-9-gc",
          "problem-tools",
          "jit",
          "oom",
          "cpu-percent-100",
          "zongjie",
          
          ],
        },
      ],
    },
    {
      text: "三、Java企业级开发",
      collapsible: true,
      children: [
        {
          text: "3.1 开发/构建工具",
          collapsible: true,
          children: [
            {
              text: "3.1.1 Nginx",
              children: [
                "nginx/nginx",
              ],
            },
            {
              text: "3.1.2 IDE",
              collapsible: true,
              children: [
              "ide/4-debug-skill",
              "ide/xechat",
              "ide/shenji-chajian-10",
              ],
            },
            {
              text: "3.1.3 Maven",
              collapsible: true,
              children: [
              "maven/maven",
              ],
            },
            {
              text: "3.1.4 Git",
              collapsible: true,
              children: [
              "git/git-qiyuan",
              ],
            },
          ],
        },
        {
          text: "3.3 Spring",
          collapsible: true,
          children: [
            {
              text: "Spring AOP扫盲",
              link: "springboot/aop-log",
            },
            {
              text: "Spring IoC扫盲",
              link: "springboot/ioc",
            },
          ],
        },
        {
          text: "3.4 SpringBoot",
          collapsible: true,
          children: [
            {
              text: "搭建第一个Spring Boot项目",
              link: "springboot/initializr",
            },
            {
              text: "整合MySQL和Druid",
              link: "springboot/mysql-druid",
            },
            {
              text: "整合JPA",
              link: "springboot/jpa",
            },
            {
              text: "整合Thymeleaf",
              link: "springboot/thymeleaf",
            },
            {
              text: "开启事务支持",
              link: "springboot/transaction",
            },
            {
              text: "过滤器、拦截器、监听器",
              link: "springboot/Filter-Interceptor-Listener",
            },
            {
              text: "整合Redis实现缓存",
              link: "redis/redis-springboot",
            },
            {
              text: "整合Logback",
              link: "springboot/logback"
            },
            {
              text: "整合Swagger-UI",
              link: "springboot/swagger"
            },
            {
              text: "整合Knife4j",
              link: "tool/knife4j"
            },
            {
              text: "整合SpringTask",
              link: "springboot/springtask"
            },
            {
              text: "整合MyBatis-Plus AutoGenerator",
              link: "kaiyuan/auto-generator",
            },
            "springboot/quartz",
            "springboot/mybatis",
            "springboot/docker",
            "springboot/macos-codingmore-run",
            "springboot/windows-codingmore-run",
            "springboot/linux-codingmore-run",
            "springboot/validator",
          ],
        },
        {
          text: "3.5 Netty",
          collapsible: true,
          children: [
            "netty/rumen",
          ],
        },
        {
          text: "3.6 辅助工具",
          collapsible: true,
          children: [
            "tool/choco",
            "tool/brew",
            "tool/tabby",
            "tool/warp",
            "tool/windterm",
            "tool/chiner",
            "tool/DBeaver",
          ],
        },
        {
          text: "3.7 开源轮子",
          collapsible: true,
          children: [
            {
              text: "HTTP调用框架Forest",
              link: "tool/forest",
            },
            {
              text: "单元测试Junit",
              link: "tool/junit",
            },
            {
              text: "阿里开源的fastjson",
              link: "tool/fastjson",
            },
            {
              text: "谷歌开源的Gson",
              link: "tool/gson",
            },
            {
              text: "SpringBoot内置的Jackson",
              link: "tool/jackson",
            },
            {
              text: "日志框架的鼻祖Log4j",
              link: "tool/log4j",
            },
            {
              text: "高性能日志框架Log4j2",
              link: "tool/log4j2",
            },
            {
              text: "Spring Boot内置的Logback",
              link: "tool/logback",
            },
            {
              text: "日志门面SLF4J",
              link: "tool/slf4j",
            },
            
          ],
        },
        {
          text: "3.8 分布式",
          collapsible: true,
          children: [
            {
              text: "Elasticsearch入门",
              link: "elasticsearch/rumen"
            },
            {
              text: "聊聊ZooKeeper",
              link: "zookeeper/jibenjieshao"
            },
            {
              text: "聊聊微服务网关",
              link: "microservice/api-wangguan"
            },
          ],
        },
        {
          text: "3.9 消息队列",
          collapsible: true,
          children: [
            {
              text: "RabbitMQ入门",
              link: "mq/rabbitmq-rumen"
            },
            {
              text: "如何保障消息不丢失",
              link: "mq/100-budiushi"
            },
            "mq/kafka",
          ],
        },
      ],
    },
    {
      text: "四、数据库",
      collapsible: true,
      children: [
        {
          text: "MySQL",
          collapsible: true,
          children: [
            {
              text: "MySQL和Redis数据一致性",
              link: "mysql/redis-shuju-yizhixing"
            },
          ],
        },
        {
          text: "Redis",
          collapsible: true,
          children: [
            {
              text: "Redis入门",
              link: "redis/rumen"
            },
            {
              text: "缓存雪崩、穿透、击穿",
              link: "redis/xuebeng-chuantou-jichuan"
            },
          ],
        },
        {
          text: "MongoDB",
          collapsible: true,
          children: [
            "mongodb/rumen",
          ],
        },
      ],
    },
    {
      text: "五、计算机基础",
      collapsible: true,
      prefix: "cs/",
      children: [
        {
          text: "计算机操作系统",
          link: "os",
        },
        {
          text: "计算机网络",
          link: "wangluo",
        },
      ],
    },
    {
      text: "六、求职面试",
      collapsible: true,
      children: [
        {
          text: "面试题&八股文",
          collapsible: true,
          prefix:"interview/",
          children: [
            "java-34",
            "java-hashmap-13",
            "redis-12",
            "mysql-60",
            "dubbo-17",
            "java-basic-baguwen",
            "java-thread-baguwen",
            "java-jvm-baguwen",
            "mianshiguan-bigfile-miaochuan",
            "mianshiguan-fenkufenbiao",
            "mianshiguan-youhuiquan",
          ],
        }
        ],
    },
    {
      text: "七、学习建议",
      collapsible: true,
      prefix: "study_suggest/",
      children: [
          "LearnCS-ByYourself",
          "read-csapp",
          "electron-information-engineering",
          "gaokao-zhiyuan-cs",
          "test-programmer-read-books",
          "xiaozhao-java-should-master",
          "chengxuyuan-fuye",
          "ruhzfzdgzzcxcz",
          "gaobingfa-jingyan-hsmcomputer",
          "hr-xinzi",
          "35-weiji",
          "20ren-it-quma",
          "benkesheng-ali-tengxun",
          "408",
        ],
    },
    // {
    //   text: "九、联系作者",
    //   collapsible: true,
    //   prefix: "about-the-author/",
    //   children: [
    //     "bzhan-10wan",
    //     "zhihu-1000wan",
    //     "csdn-1000wan",
    //     "readme.md",
        
    //   ],
    // },
  ],
});



