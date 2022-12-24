const e=JSON.parse('{"key":"v-173e5d05","path":"/java/thread/java-thread-x-lock-reentrantlock-source.html","title":"ReentrantLock\u6E90\u7801\u5206\u6790(\u4E00)-\u6574\u4F53\u6D41\u7A0B","lang":"zh-CN","frontmatter":{"summary":"ReentrantLock\u6E90\u7801\u5206\u6790(\u4E00)-\u6574\u4F53\u6D41\u7A0B 1. \u7C7B\u7684\u7EE7\u627F\u5173\u7CFB ReentrantLock \u5B9E\u73B0\u4E86 Lock\u63A5\u53E3\uFF0CLock\u63A5\u53E3\u4E2D\u5B9A\u4E49\u4E86 lock\u4E0E unlock\u76F8\u5173\u64CD\u4F5C\uFF0C\u5E76\u4E14\u8FD8\u5B58\u5728 newCondition\u65B9\u6CD5\uFF0C\u8868\u793A\u751F\u6210\u4E00\u4E2A\u6761\u4EF6\u3002 2. \u7C7B\u7684\u5185\u90E8\u7C7B ReentrantLock \u603B\u5171\u6709\u4E09\u4E2A\u5185\u90E8\u7C7B\uFF0C\u5E76\u4E14\u4E09\u4E2A\u5185\u90E8\u7C7B\u662F\u7D27\u5BC6\u76F8\u5173\u7684\uFF0C\u4E0B\u9762\u5148\u770B\u4E09\u4E2A\u7C7B\u7684\u5173\u7CFB\u3002 \\"\u8BF4","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/java/thread/java-thread-x-lock-reentrantlock-source.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"ReentrantLock\u6E90\u7801\u5206\u6790(\u4E00)-\u6574\u4F53\u6D41\u7A0B"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u7C7B\u7684\u7EE7\u627F\u5173\u7CFB","slug":"_1-\u7C7B\u7684\u7EE7\u627F\u5173\u7CFB","link":"#_1-\u7C7B\u7684\u7EE7\u627F\u5173\u7CFB","children":[]},{"level":2,"title":"2. \u7C7B\u7684\u5185\u90E8\u7C7B","slug":"_2-\u7C7B\u7684\u5185\u90E8\u7C7B","link":"#_2-\u7C7B\u7684\u5185\u90E8\u7C7B","children":[]},{"level":2,"title":"3. AQS\u81EA\u5B9A\u4E49\u540C\u6B65\u5668","slug":"_3-aqs\u81EA\u5B9A\u4E49\u540C\u6B65\u5668","link":"#_3-aqs\u81EA\u5B9A\u4E49\u540C\u6B65\u5668","children":[{"level":3,"title":"3.1 AbstractQueuedSynchronizer \u62BD\u8C61\u7C7B\u6838\u5FC3\u65B9\u6CD5","slug":"_3-1-abstractqueuedsynchronizer-\u62BD\u8C61\u7C7B\u6838\u5FC3\u65B9\u6CD5","link":"#_3-1-abstractqueuedsynchronizer-\u62BD\u8C61\u7C7B\u6838\u5FC3\u65B9\u6CD5","children":[]},{"level":3,"title":"3.2 Sync \u7C7B\u7684\u6E90\u7801","slug":"_3-2-sync-\u7C7B\u7684\u6E90\u7801","link":"#_3-2-sync-\u7C7B\u7684\u6E90\u7801","children":[]},{"level":3,"title":"3.3 NonfairSync \u7C7B\u7684\u6E90\u7801","slug":"_3-3-nonfairsync-\u7C7B\u7684\u6E90\u7801","link":"#_3-3-nonfairsync-\u7C7B\u7684\u6E90\u7801","children":[]},{"level":3,"title":"3.4 FairSync \u7C7B\u6E90\u7801","slug":"_3-4-fairsync-\u7C7B\u6E90\u7801","link":"#_3-4-fairsync-\u7C7B\u6E90\u7801","children":[]},{"level":3,"title":"3.5 ReentrantLock\u548C AQS\u4E4B\u95F4\u65B9\u6CD5\u7684\u4EA4\u4E92\u8FC7\u7A0B","slug":"_3-5-reentrantlock\u548C-aqs\u4E4B\u95F4\u65B9\u6CD5\u7684\u4EA4\u4E92\u8FC7\u7A0B","link":"#_3-5-reentrantlock\u548C-aqs\u4E4B\u95F4\u65B9\u6CD5\u7684\u4EA4\u4E92\u8FC7\u7A0B","children":[]}]},{"level":2,"title":"4. \u7C7B\u7684\u5C5E\u6027","slug":"_4-\u7C7B\u7684\u5C5E\u6027","link":"#_4-\u7C7B\u7684\u5C5E\u6027","children":[]},{"level":2,"title":"5. \u7C7B\u7684\u6784\u9020\u51FD\u6570","slug":"_5-\u7C7B\u7684\u6784\u9020\u51FD\u6570","link":"#_5-\u7C7B\u7684\u6784\u9020\u51FD\u6570","children":[{"level":3,"title":"5.1 \u9ED8\u8BA4\u6784\u9020\u51FD\u6570","slug":"_5-1-\u9ED8\u8BA4\u6784\u9020\u51FD\u6570","link":"#_5-1-\u9ED8\u8BA4\u6784\u9020\u51FD\u6570","children":[]},{"level":3,"title":"5.2 \u6307\u5B9A\u9501\u6784\u9020\u51FD\u6570","slug":"_5-2-\u6307\u5B9A\u9501\u6784\u9020\u51FD\u6570","link":"#_5-2-\u6307\u5B9A\u9501\u6784\u9020\u51FD\u6570","children":[]}]},{"level":2,"title":"6. \u6838\u5FC3\u51FD\u6570\u5206\u6790","slug":"_6-\u6838\u5FC3\u51FD\u6570\u5206\u6790","link":"#_6-\u6838\u5FC3\u51FD\u6570\u5206\u6790","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":8.52,"words":2557},"filePathRelative":"java/thread/java-thread-x-lock-reentrantlock-source.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
