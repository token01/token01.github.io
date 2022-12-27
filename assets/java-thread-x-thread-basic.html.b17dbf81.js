const e=JSON.parse('{"key":"v-9ba68da0","path":"/java/thread/java-thread-x-thread-basic.html","title":"Java \u5E76\u53D1 - \u7EBF\u7A0B\u57FA\u7840","lang":"zh-CN","frontmatter":{"order":30,"category":["Java","\u5E76\u53D1"],"summary":"Java \u5E76\u53D1 - \u7EBF\u7A0B\u57FA\u7840 0. \u9762\u8BD5\u9898 \u7EBF\u7A0B\u6709\u54EA\u51E0\u79CD\u72B6\u6001? \u5206\u522B\u8BF4\u660E\u4ECE\u4E00\u79CD\u72B6\u6001\u5230\u53E6\u4E00\u79CD\u72B6\u6001\u8F6C\u53D8\u6709\u54EA\u4E9B\u65B9\u5F0F?; \u901A\u5E38\u7EBF\u7A0B\u6709\u54EA\u51E0\u79CD\u4F7F\u7528\u65B9\u5F0F?; \u57FA\u7840\u7EBF\u7A0B\u673A\u5236\u6709\u54EA\u4E9B?; \u7EBF\u7A0B\u7684\u4E2D\u65AD\u65B9\u5F0F\u6709\u54EA\u4E9B?; \u7EBF\u7A0B\u7684\u4E92\u65A5\u540C\u6B65\u65B9\u5F0F\u6709\u54EA\u4E9B? \u5982\u4F55\u6BD4\u8F83\u548C\u9009\u62E9?; \u7EBF\u7A0B\u4E4B\u95F4\u6709\u54EA\u4E9B\u534F\u4F5C\u65B9\u5F0F?; 1. \u7EBF\u7A0B\u72B6\u6001\u8F6C\u6362 1.1 \u65B0\u5EFA\uFF08New\uFF09 \u521B\u5EFA\u540E\u5C1A\u672A\u542F\u52A8\u3002 1.2 \u53EF\u8FD0\u884C(Runnab","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/java/thread/java-thread-x-thread-basic.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"Java \u5E76\u53D1 - \u7EBF\u7A0B\u57FA\u7840"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T12:28:23.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T12:28:23.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"0. \u9762\u8BD5\u9898","slug":"_0-\u9762\u8BD5\u9898","link":"#_0-\u9762\u8BD5\u9898","children":[]},{"level":2,"title":"1. \u7EBF\u7A0B\u72B6\u6001\u8F6C\u6362","slug":"_1-\u7EBF\u7A0B\u72B6\u6001\u8F6C\u6362","link":"#_1-\u7EBF\u7A0B\u72B6\u6001\u8F6C\u6362","children":[{"level":3,"title":"1.1 \u65B0\u5EFA\uFF08New\uFF09","slug":"_1-1-\u65B0\u5EFA-new","link":"#_1-1-\u65B0\u5EFA-new","children":[]},{"level":3,"title":"1.2 \u53EF\u8FD0\u884C(Runnable)","slug":"_1-2-\u53EF\u8FD0\u884C-runnable","link":"#_1-2-\u53EF\u8FD0\u884C-runnable","children":[]},{"level":3,"title":"1.3 \u963B\u585E(Blocking)","slug":"_1-3-\u963B\u585E-blocking","link":"#_1-3-\u963B\u585E-blocking","children":[]},{"level":3,"title":"1.4 \u65E0\u9650\u671F\u7B49\u5F85(Waiting)","slug":"_1-4-\u65E0\u9650\u671F\u7B49\u5F85-waiting","link":"#_1-4-\u65E0\u9650\u671F\u7B49\u5F85-waiting","children":[]},{"level":3,"title":"1.5 \u9650\u671F\u7B49\u5F85(Timed Waiting)","slug":"_1-5-\u9650\u671F\u7B49\u5F85-timed-waiting","link":"#_1-5-\u9650\u671F\u7B49\u5F85-timed-waiting","children":[]},{"level":3,"title":"1.6 \u6B7B\u4EA1(Terminated)","slug":"_1-6-\u6B7B\u4EA1-terminated","link":"#_1-6-\u6B7B\u4EA1-terminated","children":[]},{"level":3,"title":"1.7 \u5B8C\u6574\u7684\u8F6C\u6362\u56FE","slug":"_1-7-\u5B8C\u6574\u7684\u8F6C\u6362\u56FE","link":"#_1-7-\u5B8C\u6574\u7684\u8F6C\u6362\u56FE","children":[]}]},{"level":2,"title":"2. \u7EBF\u7A0B\u4F7F\u7528\u65B9\u5F0F","slug":"_2-\u7EBF\u7A0B\u4F7F\u7528\u65B9\u5F0F","link":"#_2-\u7EBF\u7A0B\u4F7F\u7528\u65B9\u5F0F","children":[{"level":3,"title":"2.1 \u5B9E\u73B0 Runnable \u63A5\u53E3","slug":"_2-1-\u5B9E\u73B0-runnable-\u63A5\u53E3","link":"#_2-1-\u5B9E\u73B0-runnable-\u63A5\u53E3","children":[]},{"level":3,"title":"2.2 \u5B9E\u73B0 Callable \u63A5\u53E3","slug":"_2-2-\u5B9E\u73B0-callable-\u63A5\u53E3","link":"#_2-2-\u5B9E\u73B0-callable-\u63A5\u53E3","children":[]},{"level":3,"title":"2.3 \u7EE7\u627F Thread \u7C7B","slug":"_2-3-\u7EE7\u627F-thread-\u7C7B","link":"#_2-3-\u7EE7\u627F-thread-\u7C7B","children":[]},{"level":3,"title":"2.4 \u5B9E\u73B0\u63A5\u53E3 VS \u7EE7\u627F Thread","slug":"_2-4-\u5B9E\u73B0\u63A5\u53E3-vs-\u7EE7\u627F-thread","link":"#_2-4-\u5B9E\u73B0\u63A5\u53E3-vs-\u7EE7\u627F-thread","children":[]}]},{"level":2,"title":"3. \u57FA\u7840\u7EBF\u7A0B\u673A\u5236","slug":"_3-\u57FA\u7840\u7EBF\u7A0B\u673A\u5236","link":"#_3-\u57FA\u7840\u7EBF\u7A0B\u673A\u5236","children":[{"level":3,"title":"3.1 Executor","slug":"_3-1-executor","link":"#_3-1-executor","children":[]},{"level":3,"title":"3.2 Daemon","slug":"_3-2-daemon","link":"#_3-2-daemon","children":[]},{"level":3,"title":"3.3 sleep()","slug":"_3-3-sleep","link":"#_3-3-sleep","children":[]},{"level":3,"title":"3.4 yield()","slug":"_3-4-yield","link":"#_3-4-yield","children":[]}]},{"level":2,"title":"4. \u7EBF\u7A0B\u4E2D\u65AD","slug":"_4-\u7EBF\u7A0B\u4E2D\u65AD","link":"#_4-\u7EBF\u7A0B\u4E2D\u65AD","children":[{"level":3,"title":"4.1 InterruptedException","slug":"_4-1-interruptedexception","link":"#_4-1-interruptedexception","children":[]},{"level":3,"title":"4.2 interrupted()","slug":"_4-2-interrupted","link":"#_4-2-interrupted","children":[]},{"level":3,"title":"4.3 Executor \u7684\u4E2D\u65AD\u64CD\u4F5C","slug":"_4-3-executor-\u7684\u4E2D\u65AD\u64CD\u4F5C","link":"#_4-3-executor-\u7684\u4E2D\u65AD\u64CD\u4F5C","children":[]}]},{"level":2,"title":"5. \u7EBF\u7A0B\u4E92\u65A5\u540C\u6B65","slug":"_5-\u7EBF\u7A0B\u4E92\u65A5\u540C\u6B65","link":"#_5-\u7EBF\u7A0B\u4E92\u65A5\u540C\u6B65","children":[{"level":3,"title":"5.1 synchronized","slug":"_5-1-synchronized","link":"#_5-1-synchronized","children":[]},{"level":3,"title":"5.2 ReentrantLock","slug":"_5-2-reentrantlock","link":"#_5-2-reentrantlock","children":[]},{"level":3,"title":"5.3 \u6BD4\u8F83","slug":"_5-3-\u6BD4\u8F83","link":"#_5-3-\u6BD4\u8F83","children":[]},{"level":3,"title":"5.4 \u4F7F\u7528\u9009\u62E9","slug":"_5-4-\u4F7F\u7528\u9009\u62E9","link":"#_5-4-\u4F7F\u7528\u9009\u62E9","children":[]}]},{"level":2,"title":"6. \u7EBF\u7A0B\u4E4B\u95F4\u7684\u534F\u4F5C","slug":"_6-\u7EBF\u7A0B\u4E4B\u95F4\u7684\u534F\u4F5C","link":"#_6-\u7EBF\u7A0B\u4E4B\u95F4\u7684\u534F\u4F5C","children":[{"level":3,"title":"6.1 join()","slug":"_6-1-join","link":"#_6-1-join","children":[]},{"level":3,"title":"6.2 wait() notify() notifyAll()","slug":"_6-2-wait-notify-notifyall","link":"#_6-2-wait-notify-notifyall","children":[]},{"level":3,"title":"6.3 await() signal() signalAll()","slug":"_6-3-await-signal-signalall","link":"#_6-3-await-signal-signalall","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1672057703000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":3}]},"readingTime":{"minutes":11.55,"words":3466},"filePathRelative":"java/thread/java-thread-x-thread-basic.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};