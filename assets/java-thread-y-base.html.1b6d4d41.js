const e=JSON.parse('{"key":"v-c616d4ea","path":"/java/thread/java-thread-y-base.html","title":"\u591A\u7EBF\u7A0B","lang":"zh-CN","frontmatter":{"summary":"\u591A\u7EBF\u7A0B 1. \u4EC0\u4E48\u662F\u7EBF\u7A0B\u548C\u8FDB\u7A0B 1.1 \u4EC0\u4E48\u662F\u8FDB\u7A0B \u8FDB\u7A0B\u662F\u7A0B\u5E8F\u7684\u4E00\u6B21\u6267\u884C\u8FC7\u7A0B\uFF0C\u662F\u64CD\u4F5C\u7CFB\u7EDF\u5206\u914D\u8D44\u6E90\u7684\u6700\u5C0F\u5355\u4F4D\u3002\u7CFB\u7EDF\u8FD0\u884C\u4E00\u4E2A\u7A0B\u5E8F\u5373\u662F\u4E00\u4E2A\u8FDB\u7A0B\u4ECE\u521B\u5EFA\uFF0C\u8FD0\u884C\u5230\u6D88\u4EA1\u7684\u8FC7\u7A0B \\"\u5728java\u4E2D\uFF0C\u5F53\u6211\u4EEC\u542F\u52A8 main \u51FD\u6570\u65F6\u5176\u5B9E\u5C31\u662F\u542F\u52A8\u4E86\u4E00\u4E2A JVM \u7684\u8FDB\u7A0B\uFF0C\u800Cmain\u51FD\u6570\u6240\u5728\u7684\u7EBF\u7A0B\u5C31\u662F\u8FD9\u4E2A\u8FDB\u7A0B\u4E2D\u7684\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u4E5F\u79F0\u4E3B\u7EBF\u7A0B\\" 1.2 \u4EC0\u4E48\u662F\u7EBF\u7A0B \u4ED6\u662F\u64CD\u4F5C\u7CFB\u7EDF\u8FD0\u7B97\u8C03\u5EA6\uFF08\u7A0B\u5E8F\u6267\u884C\uFF09\u7684","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/java/thread/java-thread-y-base.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"\u591A\u7EBF\u7A0B"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T12:28:23.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T12:28:23.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u4EC0\u4E48\u662F\u7EBF\u7A0B\u548C\u8FDB\u7A0B","slug":"_1-\u4EC0\u4E48\u662F\u7EBF\u7A0B\u548C\u8FDB\u7A0B","link":"#_1-\u4EC0\u4E48\u662F\u7EBF\u7A0B\u548C\u8FDB\u7A0B","children":[{"level":3,"title":"1.1 \u4EC0\u4E48\u662F\u8FDB\u7A0B","slug":"_1-1-\u4EC0\u4E48\u662F\u8FDB\u7A0B","link":"#_1-1-\u4EC0\u4E48\u662F\u8FDB\u7A0B","children":[]},{"level":3,"title":"1.2 \u4EC0\u4E48\u662F\u7EBF\u7A0B","slug":"_1-2-\u4EC0\u4E48\u662F\u7EBF\u7A0B","link":"#_1-2-\u4EC0\u4E48\u662F\u7EBF\u7A0B","children":[]}]},{"level":2,"title":"2. \u7EBF\u7A0B\u4E0E\u8FDB\u7A0B\u7684\u5173\u7CFB\u4E0E\u533A\u522B\u53CA\u4F18\u7F3A\u70B9","slug":"_2-\u7EBF\u7A0B\u4E0E\u8FDB\u7A0B\u7684\u5173\u7CFB\u4E0E\u533A\u522B\u53CA\u4F18\u7F3A\u70B9","link":"#_2-\u7EBF\u7A0B\u4E0E\u8FDB\u7A0B\u7684\u5173\u7CFB\u4E0E\u533A\u522B\u53CA\u4F18\u7F3A\u70B9","children":[{"level":3,"title":"2.1 \u8FDB\u7A0B\u4E0E\u7EBF\u7A0B\u7684\u5173\u7CFB","slug":"_2-1-\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B\u7684\u5173\u7CFB","link":"#_2-1-\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B\u7684\u5173\u7CFB","children":[]},{"level":3,"title":"2.2 \u8FDB\u7A0B\u4E0E\u7EBF\u7A0B\u7684\u533A\u522B","slug":"_2-2-\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B\u7684\u533A\u522B","link":"#_2-2-\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B\u7684\u533A\u522B","children":[]}]},{"level":2,"title":"3. \u8FDB\u7A0B\u4E0E\u7EBF\u7A0B\u7684\u5185\u5B58\u533A\u57DF","slug":"_3-\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B\u7684\u5185\u5B58\u533A\u57DF","link":"#_3-\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B\u7684\u5185\u5B58\u533A\u57DF","children":[{"level":3,"title":"3.1 \u4ECE\u5185\u5B58\u533A\u57DF\u89D2\u5EA6\u6765\u5206\u6790\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B\u533A\u522B","slug":"_3-1-\u4ECE\u5185\u5B58\u533A\u57DF\u89D2\u5EA6\u6765\u5206\u6790\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B\u533A\u522B","link":"#_3-1-\u4ECE\u5185\u5B58\u533A\u57DF\u89D2\u5EA6\u6765\u5206\u6790\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B\u533A\u522B","children":[]},{"level":3,"title":"3.2 \u7A0B\u5E8F\u8BA1\u6570\u5668\u4E3A\u4EC0\u4E48\u662F\u79C1\u6709\u7684\uFF1F","slug":"_3-2-\u7A0B\u5E8F\u8BA1\u6570\u5668\u4E3A\u4EC0\u4E48\u662F\u79C1\u6709\u7684","link":"#_3-2-\u7A0B\u5E8F\u8BA1\u6570\u5668\u4E3A\u4EC0\u4E48\u662F\u79C1\u6709\u7684","children":[]},{"level":3,"title":"3.3 \u865A\u62DF\u673A\u6808\u548C\u672C\u5730\u65B9\u6CD5\u6808\u4E3A\u4EC0\u4E48\u662F\u79C1\u6709\u7684","slug":"_3-3-\u865A\u62DF\u673A\u6808\u548C\u672C\u5730\u65B9\u6CD5\u6808\u4E3A\u4EC0\u4E48\u662F\u79C1\u6709\u7684","link":"#_3-3-\u865A\u62DF\u673A\u6808\u548C\u672C\u5730\u65B9\u6CD5\u6808\u4E3A\u4EC0\u4E48\u662F\u79C1\u6709\u7684","children":[]},{"level":3,"title":"3.4. \u4E00\u53E5\u8BDD\u7B80\u5355\u4E86\u89E3\u5806\u548C\u65B9\u6CD5\u533A","slug":"_3-4-\u4E00\u53E5\u8BDD\u7B80\u5355\u4E86\u89E3\u5806\u548C\u65B9\u6CD5\u533A","link":"#_3-4-\u4E00\u53E5\u8BDD\u7B80\u5355\u4E86\u89E3\u5806\u548C\u65B9\u6CD5\u533A","children":[]}]},{"level":2,"title":"4. \u5E76\u53D1\u548C\u5E76\u884C","slug":"_4-\u5E76\u53D1\u548C\u5E76\u884C","link":"#_4-\u5E76\u53D1\u548C\u5E76\u884C","children":[]},{"level":2,"title":"5. \u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u591A\u7EBF\u7A0B","slug":"_5-\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u591A\u7EBF\u7A0B","link":"#_5-\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u591A\u7EBF\u7A0B","children":[]},{"level":2,"title":"6. \u591A\u7EBF\u7A0B\u53EF\u80FD\u5E26\u6765\u7684\u95EE\u9898","slug":"_6-\u591A\u7EBF\u7A0B\u53EF\u80FD\u5E26\u6765\u7684\u95EE\u9898","link":"#_6-\u591A\u7EBF\u7A0B\u53EF\u80FD\u5E26\u6765\u7684\u95EE\u9898","children":[]},{"level":2,"title":"7. \u4EC0\u4E48\u662F\u4E0A\u4E0B\u6587\u5207\u6362","slug":"_7-\u4EC0\u4E48\u662F\u4E0A\u4E0B\u6587\u5207\u6362","link":"#_7-\u4EC0\u4E48\u662F\u4E0A\u4E0B\u6587\u5207\u6362","children":[{"level":3,"title":"7.1 \u4E3A\u4EC0\u4E48\u9700\u8981\u4E0A\u4E0B\u6587\u5207\u6362","slug":"_7-1-\u4E3A\u4EC0\u4E48\u9700\u8981\u4E0A\u4E0B\u6587\u5207\u6362","link":"#_7-1-\u4E3A\u4EC0\u4E48\u9700\u8981\u4E0A\u4E0B\u6587\u5207\u6362","children":[]},{"level":3,"title":"7.2 \u4E3A\u4EC0\u4E48\u8BF4\u4E0A\u4E0B\u6587\u5207\u6362\u6D88\u8017\u65F6\u95F4","slug":"_7-2-\u4E3A\u4EC0\u4E48\u8BF4\u4E0A\u4E0B\u6587\u5207\u6362\u6D88\u8017\u65F6\u95F4","link":"#_7-2-\u4E3A\u4EC0\u4E48\u8BF4\u4E0A\u4E0B\u6587\u5207\u6362\u6D88\u8017\u65F6\u95F4","children":[]}]},{"level":2,"title":"8. \u4E3A\u4EC0\u4E48\u6211\u4EEC\u4E0D\u80FD\u76F4\u63A5\u8C03\u7528 run() \u65B9\u6CD5\uFF1F","slug":"_8-\u4E3A\u4EC0\u4E48\u6211\u4EEC\u4E0D\u80FD\u76F4\u63A5\u8C03\u7528-run-\u65B9\u6CD5","link":"#_8-\u4E3A\u4EC0\u4E48\u6211\u4EEC\u4E0D\u80FD\u76F4\u63A5\u8C03\u7528-run-\u65B9\u6CD5","children":[]},{"level":2,"title":"9. \u4EC0\u4E48\u662F\u7EBF\u7A0B\u5B89\u5168","slug":"_9-\u4EC0\u4E48\u662F\u7EBF\u7A0B\u5B89\u5168","link":"#_9-\u4EC0\u4E48\u662F\u7EBF\u7A0B\u5B89\u5168","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1672057703000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":3}]},"readingTime":{"minutes":6.71,"words":2012},"filePathRelative":"java/thread/java-thread-y-base.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};