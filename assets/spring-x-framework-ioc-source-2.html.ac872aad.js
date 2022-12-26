const e=JSON.parse('{"key":"v-3563058c","path":"/dependencies/spring/spring-x-framework-ioc-source-2.html","title":"Spring\u8FDB\u9636 - Spring IOC\u5B9E\u73B0\u539F\u7406\u8BE6\u89E3\u4E4BIOC\u521D\u59CB\u5316\u6D41\u7A0B","lang":"zh-CN","frontmatter":{"order":80,"category":["Spring"],"summary":"Spring\u8FDB\u9636 - Spring IOC\u5B9E\u73B0\u539F\u7406\u8BE6\u89E3\u4E4BIOC\u521D\u59CB\u5316\u6D41\u7A0B \\"\u4E0A\u6587\uFF0C\u6211\u4EEC\u770B\u4E86IOC\u8BBE\u8BA1\u8981\u70B9\u548C\u8BBE\u8BA1\u7ED3\u6784\uFF1B\u7D27\u63A5\u7740\u8FD9\u7BC7\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u4E0B\u6E90\u7801\u7684\u5B9E\u73B0\u4E86\uFF1ASpring\u5982\u4F55\u5B9E\u73B0\u5C06\u8D44\u6E90\u914D\u7F6E\uFF08\u4EE5xml\u914D\u7F6E\u4E3A\u4F8B\uFF09\u901A\u8FC7\u52A0\u8F7D\uFF0C\u89E3\u6790\uFF0C\u751F\u6210BeanDefination\u5E76\u6CE8\u518C\u5230IoC\u5BB9\u5668\u4E2D\u7684\\" 1. \u5F15\u5165 \u4E0A\u6587\uFF0C\u6211\u4EEC\u770B\u4E86IOC\u8BBE\u8BA1\u8981\u70B9\u548C\u8BBE\u8BA1\u7ED3\u6784\uFF1B\u7D27\u63A5\u7740\u8FD9\u7BC7\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u4E0B\u6E90\u7801\u7684","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/dependencies/spring/spring-x-framework-ioc-source-2.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"Spring\u8FDB\u9636 - Spring IOC\u5B9E\u73B0\u539F\u7406\u8BE6\u89E3\u4E4BIOC\u521D\u59CB\u5316\u6D41\u7A0B"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T10:41:29.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T10:41:29.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u5F15\u5165","slug":"_1-\u5F15\u5165","link":"#_1-\u5F15\u5165","children":[]},{"level":2,"title":"2. \u5982\u4F55\u5C06Bean\u4ECEXML\u914D\u7F6E\u4E2D\u89E3\u6790\u540E\u653E\u5230IoC\u5BB9\u5668\u4E2D\u7684\uFF1F","slug":"_2-\u5982\u4F55\u5C06bean\u4ECExml\u914D\u7F6E\u4E2D\u89E3\u6790\u540E\u653E\u5230ioc\u5BB9\u5668\u4E2D\u7684","link":"#_2-\u5982\u4F55\u5C06bean\u4ECExml\u914D\u7F6E\u4E2D\u89E3\u6790\u540E\u653E\u5230ioc\u5BB9\u5668\u4E2D\u7684","children":[{"level":3,"title":"2.1 \u521D\u59CB\u5316\u7684\u5165\u53E3","slug":"_2-1-\u521D\u59CB\u5316\u7684\u5165\u53E3","link":"#_2-1-\u521D\u59CB\u5316\u7684\u5165\u53E3","children":[]},{"level":3,"title":"2.2 \u8BBE\u7F6E\u8D44\u6E90\u89E3\u6790\u5668\u548C\u73AF\u5883","slug":"_2-2-\u8BBE\u7F6E\u8D44\u6E90\u89E3\u6790\u5668\u548C\u73AF\u5883","link":"#_2-2-\u8BBE\u7F6E\u8D44\u6E90\u89E3\u6790\u5668\u548C\u73AF\u5883","children":[]},{"level":3,"title":"2.3 \u8BBE\u7F6E\u914D\u7F6E\u8DEF\u5F84","slug":"_2-3-\u8BBE\u7F6E\u914D\u7F6E\u8DEF\u5F84","link":"#_2-3-\u8BBE\u7F6E\u914D\u7F6E\u8DEF\u5F84","children":[]},{"level":3,"title":"2.4 \u521D\u59CB\u5316\u7684\u4E3B\u4F53\u6D41\u7A0B","slug":"_2-4-\u521D\u59CB\u5316\u7684\u4E3B\u4F53\u6D41\u7A0B","link":"#_2-4-\u521D\u59CB\u5316\u7684\u4E3B\u4F53\u6D41\u7A0B","children":[]}]},{"level":2,"title":"3. \u603B\u7ED3","slug":"_3-\u603B\u7ED3","link":"#_3-\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1672051289000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":2}]},"readingTime":{"minutes":15.85,"words":4755},"filePathRelative":"dependencies/spring/spring-x-framework-ioc-source-2.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
