const e=JSON.parse('{"key":"v-46c51318","path":"/interview/java-34.html","title":"34 道 Java 精选面试题👍","lang":"zh-CN","frontmatter":{"title":"34 道 Java 精选面试题👍","shortTitle":"34 道 Java 精选面试题👍","category":["求职面试"],"tag":["面试题&八股文"],"description":"凤凰涅槃进阶之路，小白的零基础Java教程，34 道 Java 精选面试题👍","head":[["meta",{"name":"keywords","content":"Java,java,面试题,八股文"}],["meta",{"property":"og:url","content":"https://bytecodes.tech/interview/java-34.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"34 道 Java 精选面试题👍"}],["meta",{"property":"og:description","content":"凤凰涅槃进阶之路，小白的零基础Java教程，34 道 Java 精选面试题👍"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-09T07:23:26.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"面试题&八股文"}],["meta",{"property":"article:modified_time","content":"2022-12-09T07:23:26.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1.介绍一下 java 吧","slug":"_1-介绍一下-java-吧","link":"#_1-介绍一下-java-吧","children":[]},{"level":2,"title":"2.java 有哪些数据类型？","slug":"_2-java-有哪些数据类型","link":"#_2-java-有哪些数据类型","children":[]},{"level":2,"title":"3.接口和抽象类有什么区别？","slug":"_3-接口和抽象类有什么区别","link":"#_3-接口和抽象类有什么区别","children":[]},{"level":2,"title":"4.重载和重写什么区别？","slug":"_4-重载和重写什么区别","link":"#_4-重载和重写什么区别","children":[]},{"level":2,"title":"5.常见的异常有哪些？","slug":"_5-常见的异常有哪些","link":"#_5-常见的异常有哪些","children":[]},{"level":2,"title":"6.异常要怎么解决？","slug":"_6-异常要怎么解决","link":"#_6-异常要怎么解决","children":[]},{"level":2,"title":"7.arrayList 和 linkedList 的区别？","slug":"_7-arraylist-和-linkedlist-的区别","link":"#_7-arraylist-和-linkedlist-的区别","children":[]},{"level":2,"title":"8.hashMap 1.7 和 hashMap 1.8 的区别？","slug":"_8-hashmap-1-7-和-hashmap-1-8-的区别","link":"#_8-hashmap-1-7-和-hashmap-1-8-的区别","children":[]},{"level":2,"title":"9.hashMap 线程不安全体现在哪里？","slug":"_9-hashmap-线程不安全体现在哪里","link":"#_9-hashmap-线程不安全体现在哪里","children":[]},{"level":2,"title":"10.那么 hashMap 线程不安全怎么解决？","slug":"_10-那么-hashmap-线程不安全怎么解决","link":"#_10-那么-hashmap-线程不安全怎么解决","children":[]},{"level":2,"title":"11.concurrentHashMap 1.7 和 1.8 有什么区别","slug":"_11-concurrenthashmap-1-7-和-1-8-有什么区别","link":"#_11-concurrenthashmap-1-7-和-1-8-有什么区别","children":[]},{"level":2,"title":"12.介绍一下 hashset 吧","slug":"_12-介绍一下-hashset-吧","link":"#_12-介绍一下-hashset-吧","children":[]},{"level":2,"title":"13.什么是泛型？","slug":"_13-什么是泛型","link":"#_13-什么是泛型","children":[]},{"level":2,"title":"14.泛型擦除是什么？","slug":"_14-泛型擦除是什么","link":"#_14-泛型擦除是什么","children":[]},{"level":2,"title":"15.说说进程和线程的区别？","slug":"_15-说说进程和线程的区别","link":"#_15-说说进程和线程的区别","children":[]},{"level":2,"title":"16.volatile 有什么作用？","slug":"_16-volatile-有什么作用","link":"#_16-volatile-有什么作用","children":[]},{"level":2,"title":"17.什么是包装类？为什么需要包装类？","slug":"_17-什么是包装类-为什么需要包装类","link":"#_17-什么是包装类-为什么需要包装类","children":[]},{"level":2,"title":"18.Integer a = 1000，Integer b = 1000，a==b 的结果是什么？那如果 a，b 都为1，结果又是什么？","slug":"_18-integer-a-1000-integer-b-1000-a-b-的结果是什么-那如果-a-b-都为1-结果又是什么","link":"#_18-integer-a-1000-integer-b-1000-a-b-的结果是什么-那如果-a-b-都为1-结果又是什么","children":[]},{"level":2,"title":"19.JMM 是什么？","slug":"_19-jmm-是什么","link":"#_19-jmm-是什么","children":[]},{"level":2,"title":"20.创建对象有哪些方式","slug":"_20-创建对象有哪些方式","link":"#_20-创建对象有哪些方式","children":[]},{"level":2,"title":"21.讲讲单例模式懒汉式吧","slug":"_21-讲讲单例模式懒汉式吧","link":"#_21-讲讲单例模式懒汉式吧","children":[]},{"level":2,"title":"22.volatile 有什么作用","slug":"_22-volatile-有什么作用","link":"#_22-volatile-有什么作用","children":[]},{"level":2,"title":"23.怎么保证线程安全？","slug":"_23-怎么保证线程安全","link":"#_23-怎么保证线程安全","children":[]},{"level":2,"title":"24.synchronized 锁升级的过程","slug":"_24-synchronized-锁升级的过程","link":"#_24-synchronized-锁升级的过程","children":[]},{"level":2,"title":"25.cas 是什么？","slug":"_25-cas-是什么","link":"#_25-cas-是什么","children":[]},{"level":2,"title":"26.聊聊 ReentrantLock 吧","slug":"_26-聊聊-reentrantlock-吧","link":"#_26-聊聊-reentrantlock-吧","children":[]},{"level":2,"title":"27.多线程的创建方式有哪些？","slug":"_27-多线程的创建方式有哪些","link":"#_27-多线程的创建方式有哪些","children":[]},{"level":2,"title":"28.线程池有哪些参数？","slug":"_28-线程池有哪些参数","link":"#_28-线程池有哪些参数","children":[]},{"level":2,"title":"29.线程池的执行流程？","slug":"_29-线程池的执行流程","link":"#_29-线程池的执行流程","children":[]},{"level":2,"title":"30.线程池的拒绝策略有哪些？","slug":"_30-线程池的拒绝策略有哪些","link":"#_30-线程池的拒绝策略有哪些","children":[]},{"level":2,"title":"31.介绍一下四种引用类型?","slug":"_31-介绍一下四种引用类型","link":"#_31-介绍一下四种引用类型","children":[]},{"level":2,"title":"32.深拷贝、浅拷贝是什么？","slug":"_32-深拷贝、浅拷贝是什么","link":"#_32-深拷贝、浅拷贝是什么","children":[]},{"level":2,"title":"33.聊聊 ThreadLocal 吧","slug":"_33-聊聊-threadlocal-吧","link":"#_33-聊聊-threadlocal-吧","children":[]},{"level":2,"title":"34.一个对象的内存布局是怎么样的?","slug":"_34-一个对象的内存布局是怎么样的","link":"#_34-一个对象的内存布局是怎么样的","children":[]}],"git":{"createdTime":1669017288000,"updatedTime":1670570606000,"contributors":[{"name":"Kong Ming(空明)","email":"token01@126.com","commits":9}]},"readingTime":{"minutes":20.88,"words":6263},"filePathRelative":"interview/java-34.md","localizedDate":"2022年11月21日"}');export{e as data};
