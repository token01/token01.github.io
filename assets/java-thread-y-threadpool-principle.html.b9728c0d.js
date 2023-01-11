const e=JSON.parse('{"key":"v-72483972","path":"/java/thread/java-thread-y-threadpool-principle.html","title":"\u7EBF\u7A0B\u6C60\u7684\u5177\u4F53\u5B9E\u73B0\u539F\u7406","lang":"zh-CN","frontmatter":{"summary":"\u7EBF\u7A0B\u6C60\u7684\u5177\u4F53\u5B9E\u73B0\u539F\u7406 \u5728\u4E0A\u4E00\u8282\u6211\u4EEC\u4ECE\u5B8F\u89C2\u4E0A\u4ECB\u7ECD\u4E86ThreadPoolExecutor\uFF0C\u4E0B\u9762\u6211\u4EEC\u6765\u6DF1\u5165\u89E3\u6790\u4E00\u4E0B\u7EBF\u7A0B\u6C60\u7684\u5177\u4F53\u5B9E\u73B0\u539F\u7406\uFF0C\u5C06\u4ECE\u4E0B\u9762\u51E0\u4E2A\u65B9\u9762\u8BB2\u89E3\uFF1A 1.\u7EBF\u7A0B\u6C60\u72B6\u6001 2.\u4EFB\u52A1\u7684\u6267\u884C 3.\u7EBF\u7A0B\u6C60\u4E2D\u7684\u7EBF\u7A0B\u521D\u59CB\u5316 4.\u4EFB\u52A1\u7F13\u5B58\u961F\u5217\u53CA\u6392\u961F\u7B56\u7565 5.\u4EFB\u52A1\u62D2\u7EDD\u7B56\u7565 6.\u7EBF\u7A0B\u6C60\u7684\u5173\u95ED 7.\u7EBF\u7A0B\u6C60\u5BB9\u91CF\u7684\u52A8\u6001\u8C03\u6574 1. \u7EBF\u7A0B\u6C60\u72B6\u6001 \u5728ThreadPoolExecutor\u4E2D","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/java/thread/java-thread-y-threadpool-principle.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"\u7EBF\u7A0B\u6C60\u7684\u5177\u4F53\u5B9E\u73B0\u539F\u7406"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u7EBF\u7A0B\u6C60\u72B6\u6001","slug":"_1-\u7EBF\u7A0B\u6C60\u72B6\u6001","link":"#_1-\u7EBF\u7A0B\u6C60\u72B6\u6001","children":[]},{"level":2,"title":"2. \u4EFB\u52A1\u7684\u6267\u884C","slug":"_2-\u4EFB\u52A1\u7684\u6267\u884C","link":"#_2-\u4EFB\u52A1\u7684\u6267\u884C","children":[{"level":3,"title":"2.1 \u7EBF\u7A0B\u6C60\u4F8B\u5B50","slug":"_2-1-\u7EBF\u7A0B\u6C60\u4F8B\u5B50","link":"#_2-1-\u7EBF\u7A0B\u6C60\u4F8B\u5B50","children":[]},{"level":3,"title":"2.2 \u63D0\u4EA4\u5230\u6700\u7EC8\u6267\u884C\u5B8C\u6BD5\u7ECF\u5386\u4E86\u54EA\u4E9B\u8FC7\u7A0B","slug":"_2-2-\u63D0\u4EA4\u5230\u6700\u7EC8\u6267\u884C\u5B8C\u6BD5\u7ECF\u5386\u4E86\u54EA\u4E9B\u8FC7\u7A0B","link":"#_2-2-\u63D0\u4EA4\u5230\u6700\u7EC8\u6267\u884C\u5B8C\u6BD5\u7ECF\u5386\u4E86\u54EA\u4E9B\u8FC7\u7A0B","children":[]},{"level":3,"title":"2.3 \u603B\u7ED3","slug":"_2-3-\u603B\u7ED3","link":"#_2-3-\u603B\u7ED3","children":[]}]},{"level":2,"title":"3. \u7EBF\u7A0B\u6C60\u4E2D\u7684\u7EBF\u7A0B\u521D\u59CB\u5316","slug":"_3-\u7EBF\u7A0B\u6C60\u4E2D\u7684\u7EBF\u7A0B\u521D\u59CB\u5316","link":"#_3-\u7EBF\u7A0B\u6C60\u4E2D\u7684\u7EBF\u7A0B\u521D\u59CB\u5316","children":[]},{"level":2,"title":"4. \u4EFB\u52A1\u7F13\u5B58\u961F\u5217\u53CA\u6392\u961F\u7B56\u7565","slug":"_4-\u4EFB\u52A1\u7F13\u5B58\u961F\u5217\u53CA\u6392\u961F\u7B56\u7565","link":"#_4-\u4EFB\u52A1\u7F13\u5B58\u961F\u5217\u53CA\u6392\u961F\u7B56\u7565","children":[]},{"level":2,"title":"5. \u4EFB\u52A1\u62D2\u7EDD\u7B56\u7565","slug":"_5-\u4EFB\u52A1\u62D2\u7EDD\u7B56\u7565","link":"#_5-\u4EFB\u52A1\u62D2\u7EDD\u7B56\u7565","children":[]},{"level":2,"title":"6. \u7EBF\u7A0B\u6C60\u7684\u5173\u95ED","slug":"_6-\u7EBF\u7A0B\u6C60\u7684\u5173\u95ED","link":"#_6-\u7EBF\u7A0B\u6C60\u7684\u5173\u95ED","children":[]},{"level":2,"title":"7. \u7EBF\u7A0B\u6C60\u5BB9\u91CF\u7684\u52A8\u6001\u8C03\u6574","slug":"_7-\u7EBF\u7A0B\u6C60\u5BB9\u91CF\u7684\u52A8\u6001\u8C03\u6574","link":"#_7-\u7EBF\u7A0B\u6C60\u5BB9\u91CF\u7684\u52A8\u6001\u8C03\u6574","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":9.01,"words":2702},"filePathRelative":"java/thread/java-thread-y-threadpool-principle.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};