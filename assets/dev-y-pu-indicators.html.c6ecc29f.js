const e=JSON.parse('{"key":"v-6d53cb2b","path":"/develop/test/dev-y-pu-indicators.html","title":"\u5355\u5143\u6D4B\u8BD5 - Mockito \u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":50,"category":["Test"],"summary":"\u5355\u5143\u6D4B\u8BD5 - Mockito \u8BE6\u89E3 \\" Mock\u901A\u5E38\u662F\u6307\uFF0C\u5728\u6D4B\u8BD5\u4E00\u4E2A\u5BF9\u8C61A\u65F6\uFF0C\u6211\u4EEC\u6784\u9020\u4E00\u4E9B\u5047\u7684\u5BF9\u8C61\u6765\u6A21\u62DF\u4E0EA\u4E4B\u95F4\u7684\u4EA4\u4E92\uFF0C\u800C\u8FD9\u4E9BMock\u5BF9\u8C61\u7684\u884C\u4E3A\u662F\u6211\u4EEC\u4E8B\u5148\u8BBE\u5B9A\u4E14\u7B26\u5408\u9884\u671F\u3002\u901A\u8FC7\u8FD9\u4E9BMock\u5BF9\u8C61\u6765\u6D4B\u8BD5A\u5728\u6B63\u5E38\u903B\u8F91\uFF0C\u5F02\u5E38\u903B\u8F91\u6216\u538B\u529B\u60C5\u51B5\u4E0B\u5DE5\u4F5C\u662F\u5426\u6B63\u5E38\u3002\u800CMockito\u662F\u6700\u6D41\u884C\u7684Java mock\u6846\u67B6\u4E4B\u4E00\u3002\\" 1. \u4EC0\u4E48\u662F Mock \u6D4B\u8BD5 \\" Mock\u901A\u5E38\u662F\u6307\uFF0C\u5728\u6D4B\u8BD5","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/develop/test/dev-y-pu-indicators.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"\u5355\u5143\u6D4B\u8BD5 - Mockito \u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u4EC0\u4E48\u662F Mock \u6D4B\u8BD5","slug":"_1-\u4EC0\u4E48\u662F-mock-\u6D4B\u8BD5","link":"#_1-\u4EC0\u4E48\u662F-mock-\u6D4B\u8BD5","children":[]},{"level":2,"title":"2. Mock \u9002\u7528\u5728\u4EC0\u4E48\u573A\u666F","slug":"_2-mock-\u9002\u7528\u5728\u4EC0\u4E48\u573A\u666F","link":"#_2-mock-\u9002\u7528\u5728\u4EC0\u4E48\u573A\u666F","children":[]},{"level":2,"title":"3. Mockito","slug":"_3-mockito","link":"#_3-mockito","children":[{"level":3,"title":"3.1 \u5B98\u65B9\u8D44\u6599","slug":"_3-1-\u5B98\u65B9\u8D44\u6599","link":"#_3-1-\u5B98\u65B9\u8D44\u6599","children":[]},{"level":3,"title":"3.2 Maven\u5305\u5F15\u5165","slug":"_3-2-maven\u5305\u5F15\u5165","link":"#_3-2-maven\u5305\u5F15\u5165","children":[]},{"level":3,"title":"3.3 \u6D4B\u8BD5:Hello World","slug":"_3-3-\u6D4B\u8BD5-hello-world","link":"#_3-3-\u6D4B\u8BD5-hello-world","children":[]},{"level":3,"title":"3.4 \u6D4B\u8BD5:\u4F7F\u7528mock\u65B9\u6CD5","slug":"_3-4-\u6D4B\u8BD5-\u4F7F\u7528mock\u65B9\u6CD5","link":"#_3-4-\u6D4B\u8BD5-\u4F7F\u7528mock\u65B9\u6CD5","children":[]},{"level":3,"title":"3.5 \u6D4B\u8BD5:\u9002\u7528@Mock\u6CE8\u89E3","slug":"_3-5-\u6D4B\u8BD5-\u9002\u7528-mock\u6CE8\u89E3","link":"#_3-5-\u6D4B\u8BD5-\u9002\u7528-mock\u6CE8\u89E3","children":[]},{"level":3,"title":"3.6 \u6D4B\u8BD5:\u53C2\u6570\u5339\u914D","slug":"_3-6-\u6D4B\u8BD5-\u53C2\u6570\u5339\u914D","link":"#_3-6-\u6D4B\u8BD5-\u53C2\u6570\u5339\u914D","children":[]},{"level":3,"title":"3.7 \u6D4B\u8BD5:Mock\u5F02\u5E38","slug":"_3-7-\u6D4B\u8BD5-mock\u5F02\u5E38","link":"#_3-7-\u6D4B\u8BD5-mock\u5F02\u5E38","children":[]},{"level":3,"title":"3.8 \u6D4B\u8BD5:spy \u548C @Spy \u6CE8\u89E3","slug":"_3-8-\u6D4B\u8BD5-spy-\u548C-spy-\u6CE8\u89E3","link":"#_3-8-\u6D4B\u8BD5-spy-\u548C-spy-\u6CE8\u89E3","children":[]},{"level":3,"title":"3.9 \u6D4B\u8BD5:\u6D4B\u8BD5\u9694\u79BB","slug":"_3-9-\u6D4B\u8BD5-\u6D4B\u8BD5\u9694\u79BB","link":"#_3-9-\u6D4B\u8BD5-\u6D4B\u8BD5\u9694\u79BB","children":[]},{"level":3,"title":"3.10 \u6D4B\u8BD5:\u7ED3\u5408PowerMock\u652F\u6301\u9759\u6001\u65B9\u6CD5","slug":"_3-10-\u6D4B\u8BD5-\u7ED3\u5408powermock\u652F\u6301\u9759\u6001\u65B9\u6CD5","link":"#_3-10-\u6D4B\u8BD5-\u7ED3\u5408powermock\u652F\u6301\u9759\u6001\u65B9\u6CD5","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":11.6,"words":3479},"filePathRelative":"develop/test/dev-y-pu-indicators.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
