const e=JSON.parse('{"key":"v-5f3a45a5","path":"/java/thread/java-thread-x-lock-ReentrantLock.html","title":"JUC\u9501: ReentrantLock\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":550,"category":["Java","\u5E76\u53D1"],"summary":"JUC\u9501: ReentrantLock\u8BE6\u89E3 0. \u5E26\u7740BAT\u5927\u5382\u7684\u9762\u8BD5\u95EE\u9898\u53BB\u7406\u89E3 \u4EC0\u4E48\u662F\u53EF\u91CD\u5165\uFF0C\u4EC0\u4E48\u662F\u53EF\u91CD\u5165\u9501? \u5B83\u7528\u6765\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898?; ReentrantLock\u7684\u6838\u5FC3\u662FAQS\uFF0C\u90A3\u4E48\u5B83\u600E\u4E48\u6765\u5B9E\u73B0\u7684\uFF0C\u7EE7\u627F\u5417? \u8BF4\u8BF4\u5176\u7C7B\u5185\u90E8\u7ED3\u6784\u5173\u7CFB\u3002; ReentrantLock\u662F\u5982\u4F55\u5B9E\u73B0\u516C\u5E73\u9501\u7684?; ReentrantLock\u662F\u5982\u4F55\u5B9E\u73B0\u975E\u516C\u5E73\u9501\u7684?; ReentrantLo","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/java/thread/java-thread-x-lock-ReentrantLock.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"JUC\u9501: ReentrantLock\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"0. \u5E26\u7740BAT\u5927\u5382\u7684\u9762\u8BD5\u95EE\u9898\u53BB\u7406\u89E3","slug":"_0-\u5E26\u7740bat\u5927\u5382\u7684\u9762\u8BD5\u95EE\u9898\u53BB\u7406\u89E3","link":"#_0-\u5E26\u7740bat\u5927\u5382\u7684\u9762\u8BD5\u95EE\u9898\u53BB\u7406\u89E3","children":[]},{"level":2,"title":"1. ReentrantLock\u6E90\u7801\u5206\u6790","slug":"_1-reentrantlock\u6E90\u7801\u5206\u6790","link":"#_1-reentrantlock\u6E90\u7801\u5206\u6790","children":[{"level":3,"title":"1.1 \u7C7B\u7684\u7EE7\u627F\u5173\u7CFB","slug":"_1-1-\u7C7B\u7684\u7EE7\u627F\u5173\u7CFB","link":"#_1-1-\u7C7B\u7684\u7EE7\u627F\u5173\u7CFB","children":[]},{"level":3,"title":"1.2 \u7C7B\u7684\u5185\u90E8\u7C7B","slug":"_1-2-\u7C7B\u7684\u5185\u90E8\u7C7B","link":"#_1-2-\u7C7B\u7684\u5185\u90E8\u7C7B","children":[]},{"level":3,"title":"1.3 \u7C7B\u7684\u5C5E\u6027","slug":"_1-3-\u7C7B\u7684\u5C5E\u6027","link":"#_1-3-\u7C7B\u7684\u5C5E\u6027","children":[]},{"level":3,"title":"1.4 \u7C7B\u7684\u6784\u9020\u51FD\u6570","slug":"_1-4-\u7C7B\u7684\u6784\u9020\u51FD\u6570","link":"#_1-4-\u7C7B\u7684\u6784\u9020\u51FD\u6570","children":[]},{"level":3,"title":"1.5 \u6838\u5FC3\u51FD\u6570\u5206\u6790","slug":"_1-5-\u6838\u5FC3\u51FD\u6570\u5206\u6790","link":"#_1-5-\u6838\u5FC3\u51FD\u6570\u5206\u6790","children":[]}]},{"level":2,"title":"2. \u793A\u4F8B\u5206\u6790","slug":"_2-\u793A\u4F8B\u5206\u6790","link":"#_2-\u793A\u4F8B\u5206\u6790","children":[{"level":3,"title":"2.1 \u516C\u5E73\u9501","slug":"_2-1-\u516C\u5E73\u9501","link":"#_2-1-\u516C\u5E73\u9501","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":8.2,"words":2460},"filePathRelative":"java/thread/java-thread-x-lock-ReentrantLock.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
