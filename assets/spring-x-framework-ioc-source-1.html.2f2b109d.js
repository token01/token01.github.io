const e=JSON.parse('{"key":"v-38ccb6ca","path":"/dependencies/spring/spring-x-framework-ioc-source-1.html","title":"Spring\u8FDB\u9636- Spring IOC\u5B9E\u73B0\u539F\u7406\u8BE6\u89E3\u4E4BIOC\u4F53\u7CFB\u7ED3\u6784\u8BBE\u8BA1","lang":"zh-CN","frontmatter":{"order":70,"category":["Spring"],"summary":"Spring\u8FDB\u9636- Spring IOC\u5B9E\u73B0\u539F\u7406\u8BE6\u89E3\u4E4BIOC\u4F53\u7CFB\u7ED3\u6784\u8BBE\u8BA1 \\"\u5728\u5BF9IoC\u6709\u4E86\u521D\u6B65\u7684\u8BA4\u77E5\u540E\uFF0C\u6211\u4EEC\u5F00\u59CB\u5BF9IOC\u7684\u5B9E\u73B0\u539F\u7406\u8FDB\u884C\u6DF1\u5165\u7406\u89E3\u3002\u672C\u6587\u5C06\u5E2E\u52A9\u4F60\u7AD9\u5728\u8BBE\u8BA1\u8005\u7684\u89D2\u5EA6\u53BB\u770BIOC\u6700\u9876\u5C42\u7684\u7ED3\u6784\u8BBE\u8BA1\u3002\\" 1. \u7AD9\u5728\u8BBE\u8BA1\u8005\u7684\u89D2\u5EA6\u8003\u8651\u8BBE\u8BA1IOC\u5BB9\u5668 \\" \u5982\u679C\u8BA9\u4F60\u6765\u8BBE\u8BA1\u4E00\u4E2AIoC\u5BB9\u5668\uFF0C\u4F60\u4F1A\u600E\u4E48\u8BBE\u8BA1\uFF1F\u6211\u4EEC\u521D\u6B65\u7684\u901A\u8FC7\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6765\u5E2E\u52A9\u6211\u4EEC\u66F4\u597D\u7684\u7406\u89E3IOC\u7684\u8BBE\u8BA1\u3002\\" \u5728\u8BBE","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/dependencies/spring/spring-x-framework-ioc-source-1.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"Spring\u8FDB\u9636- Spring IOC\u5B9E\u73B0\u539F\u7406\u8BE6\u89E3\u4E4BIOC\u4F53\u7CFB\u7ED3\u6784\u8BBE\u8BA1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T10:41:29.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T10:41:29.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u7AD9\u5728\u8BBE\u8BA1\u8005\u7684\u89D2\u5EA6\u8003\u8651\u8BBE\u8BA1IOC\u5BB9\u5668","slug":"_1-\u7AD9\u5728\u8BBE\u8BA1\u8005\u7684\u89D2\u5EA6\u8003\u8651\u8BBE\u8BA1ioc\u5BB9\u5668","link":"#_1-\u7AD9\u5728\u8BBE\u8BA1\u8005\u7684\u89D2\u5EA6\u8003\u8651\u8BBE\u8BA1ioc\u5BB9\u5668","children":[]},{"level":2,"title":"2. Spring IoC\u7684\u4F53\u7CFB\u7ED3\u6784\u8BBE\u8BA1","slug":"_2-spring-ioc\u7684\u4F53\u7CFB\u7ED3\u6784\u8BBE\u8BA1","link":"#_2-spring-ioc\u7684\u4F53\u7CFB\u7ED3\u6784\u8BBE\u8BA1","children":[{"level":3,"title":"2.1 BeanFactory\u548CBeanRegistry\uFF1AIOC\u5BB9\u5668\u529F\u80FD\u89C4\u8303\u548CBean\u7684\u6CE8\u518C","slug":"_2-1-beanfactory\u548Cbeanregistry-ioc\u5BB9\u5668\u529F\u80FD\u89C4\u8303\u548Cbean\u7684\u6CE8\u518C","link":"#_2-1-beanfactory\u548Cbeanregistry-ioc\u5BB9\u5668\u529F\u80FD\u89C4\u8303\u548Cbean\u7684\u6CE8\u518C","children":[]},{"level":3,"title":"2.2 BeanDefinition\uFF1A\u5404\u79CDBean\u5BF9\u8C61\u53CA\u5176\u76F8\u4E92\u7684\u5173\u7CFB","slug":"_2-2-beandefinition-\u5404\u79CDbean\u5BF9\u8C61\u53CA\u5176\u76F8\u4E92\u7684\u5173\u7CFB","link":"#_2-2-beandefinition-\u5404\u79CDbean\u5BF9\u8C61\u53CA\u5176\u76F8\u4E92\u7684\u5173\u7CFB","children":[]},{"level":3,"title":"2.3 ApplicationContext\uFF1AIOC\u63A5\u53E3\u8BBE\u8BA1\u548C\u5B9E\u73B0","slug":"_2-3-applicationcontext-ioc\u63A5\u53E3\u8BBE\u8BA1\u548C\u5B9E\u73B0","link":"#_2-3-applicationcontext-ioc\u63A5\u53E3\u8BBE\u8BA1\u548C\u5B9E\u73B0","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1672051289000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":2}]},"readingTime":{"minutes":9.82,"words":2946},"filePathRelative":"dependencies/spring/spring-x-framework-ioc-source-1.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
