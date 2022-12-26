const e=JSON.parse('{"key":"v-4014464e","path":"/java/thread/java-thread-x-juc-AtomicInteger.html","title":"JUC\u539F\u5B50\u7C7B: CAS, Unsafe\u548C\u539F\u5B50\u7C7B\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":120,"category":["Java","\u5E76\u53D1"],"summary":"JUC\u539F\u5B50\u7C7B: CAS, Unsafe\u548C\u539F\u5B50\u7C7B\u8BE6\u89E3 \\"Java\u539F\u5B50\u7C7B\u662F\u901A\u8FC7UnSafe\u7C7B\u5B9E\u73B0\u7684\uFF0C\u8FD9\u8282\u4E3B\u8981\u5206\u6790\u4E0BUnSafe\u7C7B\u3002UnSafe\u7C7B\u5728J.U.C\u4E2DCAS\u64CD\u4F5C\u6709\u5F88\u5E7F\u6CDB\u7684\u5E94\u7528\u3002\\" 1. \u7B80\u4ECB Unsafe\u662F\u4F4D\u4E8Esun.misc\u5305\u4E0B\u7684\u4E00\u4E2A\u7C7B\uFF0C\u4E3B\u8981\u63D0\u4F9B\u4E00\u4E9B\u7528\u4E8E\u6267\u884C\u4F4E\u7EA7\u522B\u3001\u4E0D\u5B89\u5168\u64CD\u4F5C\u7684\u65B9\u6CD5\uFF0C \u5982\u76F4\u63A5\u8BBF\u95EE\u7CFB\u7EDF\u5185\u5B58\u8D44\u6E90; \u81EA\u4E3B\u7BA1\u7406\u5185\u5B58\u8D44\u6E90\u7B49; \u8FD9\u4E9B\u65B9\u6CD5\u5728\u63D0\u5347Jav","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/java/thread/java-thread-x-juc-AtomicInteger.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"JUC\u539F\u5B50\u7C7B: CAS, Unsafe\u548C\u539F\u5B50\u7C7B\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T10:41:29.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T10:41:29.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u7B80\u4ECB","slug":"_1-\u7B80\u4ECB","link":"#_1-\u7B80\u4ECB","children":[{"level":3,"title":"1.1 Unsafe\u7C7B\u7684\u6307\u9488\u98CE\u9669","slug":"_1-1-unsafe\u7C7B\u7684\u6307\u9488\u98CE\u9669","link":"#_1-1-unsafe\u7C7B\u7684\u6307\u9488\u98CE\u9669","children":[]},{"level":3,"title":"1.2 Unsafe \u7C7B\u7684\u4F7F\u7528\u53D7\u9650\u5236","slug":"_1-2-unsafe-\u7C7B\u7684\u4F7F\u7528\u53D7\u9650\u5236","link":"#_1-2-unsafe-\u7C7B\u7684\u4F7F\u7528\u53D7\u9650\u5236","children":[]}]},{"level":2,"title":"2. Unsafe \u603B\u4F53\u529F\u80FD","slug":"_2-unsafe-\u603B\u4F53\u529F\u80FD","link":"#_2-unsafe-\u603B\u4F53\u529F\u80FD","children":[]},{"level":2,"title":"3. Unsafe\u4E0ECAS","slug":"_3-unsafe\u4E0Ecas","link":"#_3-unsafe\u4E0Ecas","children":[]},{"level":2,"title":"4. Unsafe\u5E95\u5C42compareAndSwap \u7684\u5B9E\u73B0","slug":"_4-unsafe\u5E95\u5C42compareandswap-\u7684\u5B9E\u73B0","link":"#_4-unsafe\u5E95\u5C42compareandswap-\u7684\u5B9E\u73B0","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1672051289000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":2}]},"readingTime":{"minutes":3.99,"words":1196},"filePathRelative":"java/thread/java-thread-x-juc-AtomicInteger.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
