const e=JSON.parse('{"key":"v-3b508d79","path":"/java/thread/java-thread-x-lock-reentrantlock-back.html","title":"ReentrantLock\u91CD\u5165\u9501","lang":"zh-CN","frontmatter":{"summary":"ReentrantLock\u91CD\u5165\u9501 1. \u7B80\u4ECB ReentrantLock\u662F\u53EF\u91CD\u5165\u7684\u4E92\u65A5\u9501\uFF0C\u867D\u7136\u5177\u6709\u4E0Esynchronized\u76F8\u540C\u529F\u80FD\uFF0C\u4F46\u662F\u4F1A\u6BD4synchronized\u66F4\u52A0\u7075\u6D3B\uFF08\u5177\u6709\u66F4\u591A\u7684\u65B9\u6CD5\uFF09\u3002 2. ReentrantLock \u548C Synchronized\u7684\u5BF9\u6BD4 ReentrantLock Synchronized ---------- ---------","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/java/thread/java-thread-x-lock-reentrantlock-back.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"ReentrantLock\u91CD\u5165\u9501"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T10:41:29.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T10:41:29.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u7B80\u4ECB","slug":"_1-\u7B80\u4ECB","link":"#_1-\u7B80\u4ECB","children":[]},{"level":2,"title":"2. ReentrantLock \u548C Synchronized\u7684\u5BF9\u6BD4","slug":"_2-reentrantlock-\u548C-synchronized\u7684\u5BF9\u6BD4","link":"#_2-reentrantlock-\u548C-synchronized\u7684\u5BF9\u6BD4","children":[]},{"level":2,"title":"3. \u57FA\u7840\u4F7F\u7528","slug":"_3-\u57FA\u7840\u4F7F\u7528","link":"#_3-\u57FA\u7840\u4F7F\u7528","children":[]},{"level":2,"title":"4. ReentrantLock\u7684\u4F18\u70B9","slug":"_4-reentrantlock\u7684\u4F18\u70B9","link":"#_4-reentrantlock\u7684\u4F18\u70B9","children":[{"level":3,"title":"4.1 \u53EF\u91CD\u5165\uFF08\u5176\u5B9Esynchronized \u4E5F\u662F\u53EF\u91CD\u5165\u7684\uFF09","slug":"_4-1-\u53EF\u91CD\u5165-\u5176\u5B9Esynchronized-\u4E5F\u662F\u53EF\u91CD\u5165\u7684","link":"#_4-1-\u53EF\u91CD\u5165-\u5176\u5B9Esynchronized-\u4E5F\u662F\u53EF\u91CD\u5165\u7684","children":[]},{"level":3,"title":"4.2 \u53EF\u4E2D\u65AD","slug":"_4-2-\u53EF\u4E2D\u65AD","link":"#_4-2-\u53EF\u4E2D\u65AD","children":[]},{"level":3,"title":"4.3 \u53EF\u9650\u65F6","slug":"_4-3-\u53EF\u9650\u65F6","link":"#_4-3-\u53EF\u9650\u65F6","children":[]}]},{"level":2,"title":"4.4 \u516C\u5E73\u9501","slug":"_4-4-\u516C\u5E73\u9501","link":"#_4-4-\u516C\u5E73\u9501","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1672051289000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":2}]},"readingTime":{"minutes":3.77,"words":1130},"filePathRelative":"java/thread/java-thread-x-lock-reentrantlock-back.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
