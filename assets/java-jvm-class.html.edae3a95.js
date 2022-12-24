const e=JSON.parse('{"key":"v-d2220394","path":"/java/jvm/java-jvm-class.html","title":"JVM \u57FA\u7840 - \u7C7B\u5B57\u8282\u7801\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":20,"category":["Java","JVM"],"summary":"JVM \u57FA\u7840 - \u7C7B\u5B57\u8282\u7801\u8BE6\u89E3 \\"\u6E90\u4EE3\u7801\u901A\u8FC7\u7F16\u8BD1\u5668\u7F16\u8BD1\u4E3A\u5B57\u8282\u7801\uFF0C\u518D\u901A\u8FC7\u7C7B\u52A0\u8F7D\u5B50\u7CFB\u7EDF\u8FDB\u884C\u52A0\u8F7D\u5230JVM\u4E2D\u8FD0\u884C\u3002\\" 1. \u591A\u8BED\u8A00\u7F16\u8BD1\u4E3A\u5B57\u8282\u7801\u5728JVM\u8FD0\u884C \u8BA1\u7B97\u673A\u662F\u4E0D\u80FD\u76F4\u63A5\u8FD0\u884Cjava\u4EE3\u7801\u7684\uFF0C\u5FC5\u987B\u8981\u5148\u8FD0\u884Cjava\u865A\u62DF\u673A\uFF0C\u518D\u7531java\u865A\u62DF\u673A\u8FD0\u884C\u7F16\u8BD1\u540E\u7684java\u4EE3\u7801\u3002\u8FD9\u4E2A\u7F16\u8BD1\u540E\u7684java\u4EE3\u7801\uFF0C\u5C31\u662F\u672C\u6587\u8981\u4ECB\u7ECD\u7684java\u5B57\u8282\u7801\u3002 \u4E3A\u4EC0\u4E48jvm\u4E0D\u80FD\u76F4\u63A5\u8FD0\u884Cjava\u4EE3\u7801\u5462\uFF0C\u8FD9\u662F","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/java/jvm/java-jvm-class.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"JVM \u57FA\u7840 - \u7C7B\u5B57\u8282\u7801\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u591A\u8BED\u8A00\u7F16\u8BD1\u4E3A\u5B57\u8282\u7801\u5728JVM\u8FD0\u884C","slug":"_1-\u591A\u8BED\u8A00\u7F16\u8BD1\u4E3A\u5B57\u8282\u7801\u5728jvm\u8FD0\u884C","link":"#_1-\u591A\u8BED\u8A00\u7F16\u8BD1\u4E3A\u5B57\u8282\u7801\u5728jvm\u8FD0\u884C","children":[]},{"level":2,"title":"2. Java\u5B57\u8282\u7801\u6587\u4EF6","slug":"_2-java\u5B57\u8282\u7801\u6587\u4EF6","link":"#_2-java\u5B57\u8282\u7801\u6587\u4EF6","children":[{"level":3,"title":"2.1 Class\u6587\u4EF6\u7684\u7ED3\u6784\u5C5E\u6027","slug":"_2-1-class\u6587\u4EF6\u7684\u7ED3\u6784\u5C5E\u6027","link":"#_2-1-class\u6587\u4EF6\u7684\u7ED3\u6784\u5C5E\u6027","children":[]},{"level":3,"title":"2.2 \u4ECE\u4E00\u4E2A\u4F8B\u5B50\u5F00\u59CB","slug":"_2-2-\u4ECE\u4E00\u4E2A\u4F8B\u5B50\u5F00\u59CB","link":"#_2-2-\u4ECE\u4E00\u4E2A\u4F8B\u5B50\u5F00\u59CB","children":[]},{"level":3,"title":"2.3 \u53CD\u7F16\u8BD1\u5B57\u8282\u7801\u6587\u4EF6","slug":"_2-3-\u53CD\u7F16\u8BD1\u5B57\u8282\u7801\u6587\u4EF6","link":"#_2-3-\u53CD\u7F16\u8BD1\u5B57\u8282\u7801\u6587\u4EF6","children":[]},{"level":3,"title":"2.4 \u5B57\u8282\u7801\u6587\u4EF6\u4FE1\u606F","slug":"_2-4-\u5B57\u8282\u7801\u6587\u4EF6\u4FE1\u606F","link":"#_2-4-\u5B57\u8282\u7801\u6587\u4EF6\u4FE1\u606F","children":[]},{"level":3,"title":"2.5 \u5E38\u91CF\u6C60","slug":"_2-5-\u5E38\u91CF\u6C60","link":"#_2-5-\u5E38\u91CF\u6C60","children":[]},{"level":3,"title":"2.6 \u65B9\u6CD5\u8868\u96C6\u5408","slug":"_2-6-\u65B9\u6CD5\u8868\u96C6\u5408","link":"#_2-6-\u65B9\u6CD5\u8868\u96C6\u5408","children":[]},{"level":3,"title":"2.7 \u7C7B\u540D","slug":"_2-7-\u7C7B\u540D","link":"#_2-7-\u7C7B\u540D","children":[]}]},{"level":2,"title":"3. \u518D\u770B\u4E24\u4E2A\u793A\u4F8B","slug":"_3-\u518D\u770B\u4E24\u4E2A\u793A\u4F8B","link":"#_3-\u518D\u770B\u4E24\u4E2A\u793A\u4F8B","children":[{"level":3,"title":"3.1 \u5206\u6790try-catch-finally","slug":"_3-1-\u5206\u6790try-catch-finally","link":"#_3-1-\u5206\u6790try-catch-finally","children":[]},{"level":3,"title":"3.2 kotlin \u51FD\u6570\u6269\u5C55\u7684\u5B9E\u73B0","slug":"_3-2-kotlin-\u51FD\u6570\u6269\u5C55\u7684\u5B9E\u73B0","link":"#_3-2-kotlin-\u51FD\u6570\u6269\u5C55\u7684\u5B9E\u73B0","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":14.02,"words":4206},"filePathRelative":"java/jvm/java-jvm-class.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
