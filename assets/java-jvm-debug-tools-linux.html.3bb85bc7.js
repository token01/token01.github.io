const l=JSON.parse('{"key":"v-5ebaefb4","path":"/java/jvm/java-jvm-debug-tools-linux.html","title":"\u8C03\u8BD5\u6392\u9519 - Java \u95EE\u9898\u6392\u67E5\u4E4BLinux\u547D\u4EE4","lang":"zh-CN","frontmatter":{"Order":250,"Category":["Java","JVM"],"summary":"\u8C03\u8BD5\u6392\u9519 - Java \u95EE\u9898\u6392\u67E5\u4E4BLinux\u547D\u4EE4 \\" Java \u5728\u7EBF\u95EE\u9898\u6392\u67E5\u4E3B\u8981\u5206\u4E24\u7BC7\uFF1A\u672C\u6587\u662F\u7B2C\u4E00\u7BC7\uFF0C\u901A\u8FC7linux\u5E38\u7528\u547D\u4EE4\u6392\u67E5\u3002\\" 1. \u6587\u672C\u64CD\u4F5C 1.1 \u6587\u672C\u67E5\u627E - grep grep\u5E38\u7528\u547D\u4EE4\uFF1A Grep\u7684\u53C2\u6570\uFF1A 1.2 \u6587\u672C\u5206\u6790 - awk awk\u57FA\u672C\u547D\u4EE4\uFF1A \u5185\u5EFA\u53D8\u91CF \u66F4\u591A\u8BF7\u53C2\u8003\uFF1ALinux awk \u547D\u4EE4 1.3 \u6587\u672C\u5904\u7406 - sed sed\u5E38\u7528\uFF1A ","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/java/jvm/java-jvm-debug-tools-linux.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"\u8C03\u8BD5\u6392\u9519 - Java \u95EE\u9898\u6392\u67E5\u4E4BLinux\u547D\u4EE4"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T10:41:29.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T10:41:29.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u6587\u672C\u64CD\u4F5C","slug":"_1-\u6587\u672C\u64CD\u4F5C","link":"#_1-\u6587\u672C\u64CD\u4F5C","children":[{"level":3,"title":"1.1 \u6587\u672C\u67E5\u627E - grep","slug":"_1-1-\u6587\u672C\u67E5\u627E-grep","link":"#_1-1-\u6587\u672C\u67E5\u627E-grep","children":[]},{"level":3,"title":"1.2 \u6587\u672C\u5206\u6790 - awk","slug":"_1-2-\u6587\u672C\u5206\u6790-awk","link":"#_1-2-\u6587\u672C\u5206\u6790-awk","children":[]},{"level":3,"title":"1.3 \u6587\u672C\u5904\u7406 - sed","slug":"_1-3-\u6587\u672C\u5904\u7406-sed","link":"#_1-3-\u6587\u672C\u5904\u7406-sed","children":[]}]},{"level":2,"title":"2. \u6587\u4EF6\u64CD\u4F5C","slug":"_2-\u6587\u4EF6\u64CD\u4F5C","link":"#_2-\u6587\u4EF6\u64CD\u4F5C","children":[{"level":3,"title":"2.1 \u6587\u4EF6\u76D1\u542C - tail","slug":"_2-1-\u6587\u4EF6\u76D1\u542C-tail","link":"#_2-1-\u6587\u4EF6\u76D1\u542C-tail","children":[]},{"level":3,"title":"2.2 \u6587\u4EF6\u67E5\u627E - find","slug":"_2-2-\u6587\u4EF6\u67E5\u627E-find","link":"#_2-2-\u6587\u4EF6\u67E5\u627E-find","children":[]},{"level":3,"title":"2.3 pgm","slug":"_2-3-pgm","link":"#_2-3-pgm","children":[]}]},{"level":2,"title":"3. \u67E5\u770B\u7F51\u7EDC\u548C\u8FDB\u7A0B","slug":"_3-\u67E5\u770B\u7F51\u7EDC\u548C\u8FDB\u7A0B","link":"#_3-\u67E5\u770B\u7F51\u7EDC\u548C\u8FDB\u7A0B","children":[{"level":3,"title":"3.1 \u67E5\u770B\u6240\u6709\u7F51\u7EDC\u63A5\u53E3\u7684\u5C5E\u6027","slug":"_3-1-\u67E5\u770B\u6240\u6709\u7F51\u7EDC\u63A5\u53E3\u7684\u5C5E\u6027","link":"#_3-1-\u67E5\u770B\u6240\u6709\u7F51\u7EDC\u63A5\u53E3\u7684\u5C5E\u6027","children":[]},{"level":3,"title":"3.2 \u67E5\u770B\u9632\u706B\u5899\u8BBE\u7F6E","slug":"_3-2-\u67E5\u770B\u9632\u706B\u5899\u8BBE\u7F6E","link":"#_3-2-\u67E5\u770B\u9632\u706B\u5899\u8BBE\u7F6E","children":[]},{"level":3,"title":"3.3 \u67E5\u770B\u8DEF\u7531\u8868","slug":"_3-3-\u67E5\u770B\u8DEF\u7531\u8868","link":"#_3-3-\u67E5\u770B\u8DEF\u7531\u8868","children":[]},{"level":3,"title":"3.4 netstat","slug":"_3-4-netstat","link":"#_3-4-netstat","children":[]},{"level":3,"title":"3.5 \u67E5\u770B\u6240\u6709\u8FDB\u7A0B","slug":"_3-5-\u67E5\u770B\u6240\u6709\u8FDB\u7A0B","link":"#_3-5-\u67E5\u770B\u6240\u6709\u8FDB\u7A0B","children":[]},{"level":3,"title":"3.6 top","slug":"_3-6-top","link":"#_3-6-top","children":[]}]},{"level":2,"title":"4. \u67E5\u770B\u78C1\u76D8\u548C\u5185\u5B58\u76F8\u5173","slug":"_4-\u67E5\u770B\u78C1\u76D8\u548C\u5185\u5B58\u76F8\u5173","link":"#_4-\u67E5\u770B\u78C1\u76D8\u548C\u5185\u5B58\u76F8\u5173","children":[{"level":3,"title":"4.1 \u67E5\u770B\u5185\u5B58\u4F7F\u7528 - free -m","slug":"_4-1-\u67E5\u770B\u5185\u5B58\u4F7F\u7528-free-m","link":"#_4-1-\u67E5\u770B\u5185\u5B58\u4F7F\u7528-free-m","children":[]},{"level":3,"title":"4.2 \u67E5\u770B\u5404\u5206\u533A\u4F7F\u7528\u60C5\u51B5","slug":"_4-2-\u67E5\u770B\u5404\u5206\u533A\u4F7F\u7528\u60C5\u51B5","link":"#_4-2-\u67E5\u770B\u5404\u5206\u533A\u4F7F\u7528\u60C5\u51B5","children":[]},{"level":3,"title":"4.3 \u67E5\u770B\u6307\u5B9A\u76EE\u5F55\u7684\u5927\u5C0F","slug":"_4-3-\u67E5\u770B\u6307\u5B9A\u76EE\u5F55\u7684\u5927\u5C0F","link":"#_4-3-\u67E5\u770B\u6307\u5B9A\u76EE\u5F55\u7684\u5927\u5C0F","children":[]},{"level":3,"title":"4.4 \u67E5\u770B\u5185\u5B58\u603B\u91CF","slug":"_4-4-\u67E5\u770B\u5185\u5B58\u603B\u91CF","link":"#_4-4-\u67E5\u770B\u5185\u5B58\u603B\u91CF","children":[]},{"level":3,"title":"4.5 \u67E5\u770B\u7A7A\u95F2\u5185\u5B58\u91CF","slug":"_4-5-\u67E5\u770B\u7A7A\u95F2\u5185\u5B58\u91CF","link":"#_4-5-\u67E5\u770B\u7A7A\u95F2\u5185\u5B58\u91CF","children":[]},{"level":3,"title":"4.6 \u67E5\u770B\u7CFB\u7EDF\u8D1F\u8F7D\u78C1\u76D8\u548C\u5206\u533A","slug":"_4-6-\u67E5\u770B\u7CFB\u7EDF\u8D1F\u8F7D\u78C1\u76D8\u548C\u5206\u533A","link":"#_4-6-\u67E5\u770B\u7CFB\u7EDF\u8D1F\u8F7D\u78C1\u76D8\u548C\u5206\u533A","children":[]},{"level":3,"title":"4.7 \u67E5\u770B\u7CFB\u7EDF\u8D1F\u8F7D\u78C1\u76D8\u548C\u5206\u533A","slug":"_4-7-\u67E5\u770B\u7CFB\u7EDF\u8D1F\u8F7D\u78C1\u76D8\u548C\u5206\u533A","link":"#_4-7-\u67E5\u770B\u7CFB\u7EDF\u8D1F\u8F7D\u78C1\u76D8\u548C\u5206\u533A","children":[]},{"level":3,"title":"4.8 \u67E5\u770B\u6302\u63A5\u7684\u5206\u533A\u72B6\u6001","slug":"_4-8-\u67E5\u770B\u6302\u63A5\u7684\u5206\u533A\u72B6\u6001","link":"#_4-8-\u67E5\u770B\u6302\u63A5\u7684\u5206\u533A\u72B6\u6001","children":[]},{"level":3,"title":"4.9 \u67E5\u770B\u6240\u6709\u5206\u533A","slug":"_4-9-\u67E5\u770B\u6240\u6709\u5206\u533A","link":"#_4-9-\u67E5\u770B\u6240\u6709\u5206\u533A","children":[]},{"level":3,"title":"4.10 \u67E5\u770B\u6240\u6709\u4EA4\u6362\u5206\u533A","slug":"_4-10-\u67E5\u770B\u6240\u6709\u4EA4\u6362\u5206\u533A","link":"#_4-10-\u67E5\u770B\u6240\u6709\u4EA4\u6362\u5206\u533A","children":[]},{"level":3,"title":"4.11 \u67E5\u770B\u786C\u76D8\u5927\u5C0F","slug":"_4-11-\u67E5\u770B\u786C\u76D8\u5927\u5C0F","link":"#_4-11-\u67E5\u770B\u786C\u76D8\u5927\u5C0F","children":[]}]},{"level":2,"title":"5. \u67E5\u770B\u7528\u6237\u548C\u7EC4\u76F8\u5173","slug":"_5-\u67E5\u770B\u7528\u6237\u548C\u7EC4\u76F8\u5173","link":"#_5-\u67E5\u770B\u7528\u6237\u548C\u7EC4\u76F8\u5173","children":[{"level":3,"title":"5.1 \u67E5\u770B\u6D3B\u52A8\u7528\u6237","slug":"_5-1-\u67E5\u770B\u6D3B\u52A8\u7528\u6237","link":"#_5-1-\u67E5\u770B\u6D3B\u52A8\u7528\u6237","children":[]},{"level":3,"title":"5.2 \u67E5\u770B\u6307\u5B9A\u7528\u6237\u4FE1\u606F","slug":"_5-2-\u67E5\u770B\u6307\u5B9A\u7528\u6237\u4FE1\u606F","link":"#_5-2-\u67E5\u770B\u6307\u5B9A\u7528\u6237\u4FE1\u606F","children":[]},{"level":3,"title":"5.3 \u67E5\u770B\u7528\u6237\u767B\u5F55\u65E5\u5FD7","slug":"_5-3-\u67E5\u770B\u7528\u6237\u767B\u5F55\u65E5\u5FD7","link":"#_5-3-\u67E5\u770B\u7528\u6237\u767B\u5F55\u65E5\u5FD7","children":[]},{"level":3,"title":"5.4 \u67E5\u770B\u7CFB\u7EDF\u6240\u6709\u7528\u6237","slug":"_5-4-\u67E5\u770B\u7CFB\u7EDF\u6240\u6709\u7528\u6237","link":"#_5-4-\u67E5\u770B\u7CFB\u7EDF\u6240\u6709\u7528\u6237","children":[]},{"level":3,"title":"5.5 \u67E5\u770B\u7CFB\u7EDF\u6240\u6709\u7EC4","slug":"_5-5-\u67E5\u770B\u7CFB\u7EDF\u6240\u6709\u7EC4","link":"#_5-5-\u67E5\u770B\u7CFB\u7EDF\u6240\u6709\u7EC4","children":[]}]},{"level":2,"title":"6. \u67E5\u770B\u670D\u52A1\uFF0C\u6A21\u5757\u548C\u5305\u76F8\u5173","slug":"_6-\u67E5\u770B\u670D\u52A1-\u6A21\u5757\u548C\u5305\u76F8\u5173","link":"#_6-\u67E5\u770B\u670D\u52A1-\u6A21\u5757\u548C\u5305\u76F8\u5173","children":[]},{"level":2,"title":"7. \u67E5\u770B\u7CFB\u7EDF\uFF0C\u8BBE\u5907\uFF0C\u73AF\u5883\u4FE1\u606F","slug":"_7-\u67E5\u770B\u7CFB\u7EDF-\u8BBE\u5907-\u73AF\u5883\u4FE1\u606F","link":"#_7-\u67E5\u770B\u7CFB\u7EDF-\u8BBE\u5907-\u73AF\u5883\u4FE1\u606F","children":[]},{"level":2,"title":"8. tsar","slug":"_8-tsar","link":"#_8-tsar","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1672051289000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":2}]},"readingTime":{"minutes":11.58,"words":3474},"filePathRelative":"java/jvm/java-jvm-debug-tools-linux.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{l as data};
