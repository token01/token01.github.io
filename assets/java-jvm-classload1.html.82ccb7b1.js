const e=JSON.parse('{"key":"v-c66a671e","path":"/java/jvm/java-jvm-classload1.html","title":"JVM \u5185\u5B58\u5206\u914D\u4E0E\u56DE\u6536","lang":"zh-CN","frontmatter":{"category":["Java","JVM"],"summary":"JVM \u5185\u5B58\u5206\u914D\u4E0E\u56DE\u6536 1. JVM \u5185\u5B58\u5206\u914D\u4E0E\u56DE\u6536 Java \u7684\u81EA\u52A8\u5185\u5B58\u7BA1\u7406\u4E3B\u8981\u662F\u9488\u5BF9\u8C61\u5185\u5B58\u7684\u56DE\u6536\u548C\u5BF9\u8C61\u7684\u5185\u5B58\u7684\u5206\u914D\u3002\u540C\u65F6\uFF0Cjava \u81EA\u52A8\u5185\u5B58\u7BA1\u7406\u6700\u6838\u5FC3\u7684\u529F\u80FD\u662F \u5806\u5185\u5B58\u4E2D\u7684\u5BF9\u8C61\u5206\u914D\u4E0E\u56DE\u6536 Java \u5806\u662F\u5783\u573E\u6536\u96C6\u5668\u7BA1\u7406\u7684\u4E3B\u8981\u533A\u57DF\uFF0C\u56E0\u6B64\u4E5F\u88AB\u79F0\u4F5CGC \u5806\uFF08Garbage Collected Heap\uFF09.\u4ECE\u5783\u573E\u56DE\u6536\u7684\u89D2\u5EA6\uFF0C\u7531\u4E8E\u73B0\u5728\u6536\u96C6\u5668\u57FA\u672C\u90FD\u91C7\u7528\u5206\u4EE3\u5783\u573E\u6536\u96C6\u7B97\u6CD5\uFF0C","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/java/jvm/java-jvm-classload1.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"JVM \u5185\u5B58\u5206\u914D\u4E0E\u56DE\u6536"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. JVM \u5185\u5B58\u5206\u914D\u4E0E\u56DE\u6536","slug":"_1-jvm-\u5185\u5B58\u5206\u914D\u4E0E\u56DE\u6536","link":"#_1-jvm-\u5185\u5B58\u5206\u914D\u4E0E\u56DE\u6536","children":[{"level":3,"title":"1.1 \u5BF9\u8C61\u4F18\u5148\u5728eden \u533A\u5206\u914D","slug":"_1-1-\u5BF9\u8C61\u4F18\u5148\u5728eden-\u533A\u5206\u914D","link":"#_1-1-\u5BF9\u8C61\u4F18\u5148\u5728eden-\u533A\u5206\u914D","children":[]},{"level":3,"title":"1.2 \u5927\u5BF9\u8C61\u76F4\u63A5\u8FDB\u5165\u8001\u5E74\u4EE3","slug":"_1-2-\u5927\u5BF9\u8C61\u76F4\u63A5\u8FDB\u5165\u8001\u5E74\u4EE3","link":"#_1-2-\u5927\u5BF9\u8C61\u76F4\u63A5\u8FDB\u5165\u8001\u5E74\u4EE3","children":[]},{"level":3,"title":"1.3 \u957F\u671F\u5B58\u6D3B\u7684\u5BF9\u8C61\u5C06\u8FDB\u5165\u8001\u5E74\u4EE3","slug":"_1-3-\u957F\u671F\u5B58\u6D3B\u7684\u5BF9\u8C61\u5C06\u8FDB\u5165\u8001\u5E74\u4EE3","link":"#_1-3-\u957F\u671F\u5B58\u6D3B\u7684\u5BF9\u8C61\u5C06\u8FDB\u5165\u8001\u5E74\u4EE3","children":[]},{"level":3,"title":"1.4 \u52A8\u6001\u5BF9\u8C61\u5E74\u9F84\u5224\u5B9A","slug":"_1-4-\u52A8\u6001\u5BF9\u8C61\u5E74\u9F84\u5224\u5B9A","link":"#_1-4-\u52A8\u6001\u5BF9\u8C61\u5E74\u9F84\u5224\u5B9A","children":[]}]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":4.86,"words":1459},"filePathRelative":"java/jvm/java-jvm-classload1.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
