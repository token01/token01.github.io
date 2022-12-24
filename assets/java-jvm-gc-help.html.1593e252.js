const e=JSON.parse('{"key":"v-b1760dc8","path":"/java/jvm/java-jvm-gc-help.html","title":"\u5BF9\u8C61\u5DF2\u7ECF\u6B7B\u4EA1\uFF1F","lang":"zh-CN","frontmatter":{"category":["Java","JVM"],"summary":"\u5BF9\u8C61\u5DF2\u7ECF\u6B7B\u4EA1\uFF1F \u5806\u4E2D\u51E0\u4E4E\u653E\u7740\u6240\u6709\u7684\u5BF9\u8C61\u5B9E\u4F8B\uFF0C\u5BF9\u5806\u5783\u573E\u56DE\u6536\u524D\u7684\u7B2C\u4E00\u6B65\u5C31\u662F\u5224\u65AD\u54EA\u4E9B\u5BF9\u8C61\u5DF2\u7ECF\u6B7B\u4EA1\uFF08\u5373\u4E0D\u80FD\u518D\u88AB\u4EFB\u4F55\u9014\u5F84\u4F7F\u7528\u7684\u5BF9\u8C61\uFF09\u3002 1. \u5982\u4F55\u5224\u65AD\u5BF9\u8C61\u5DF2\u7ECF\u6B7B\u4EA1 1.1 \u5F15\u7528\u8BA1\u6570\u6CD5 \u7ED9\u5BF9\u8C61\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u5F15\u7528\u8BA1\u6570\u5668\uFF0C\u6BCF\u5F53\u6709\u4E00\u4E2A\u5730\u65B9\u5F15\u7528\u4ED6\u3002\u8BA1\u6570\u5668\u5C31+1\uFF0C\u5F53\u5F15\u7528\u5931\u6548\uFF0C\u8BA1\u6570\u5668\u5C31\u51CF1.\u4EFB\u4F55\u65F6\u5019\u8BA1\u6570\u5668\u4E3A0 \u7684\u5BF9\u8C61\u5C31\u662F\u4E0D\u53EF\u80FD\u518D\u88AB\u4F7F\u7528\u7684 \u8FD9\u4E2A\u65B9\u6CD5\u5B9E\u73B0\u7B80\u5355\uFF0C\u6548\u7387\u9AD8\uFF0C\u4F46\u662F\u76EE\u524D\u4E3B\u6D41\u7684\u865A\u62DF\u673A\u4E2D","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/java/jvm/java-jvm-gc-help.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"\u5BF9\u8C61\u5DF2\u7ECF\u6B7B\u4EA1\uFF1F"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u5982\u4F55\u5224\u65AD\u5BF9\u8C61\u5DF2\u7ECF\u6B7B\u4EA1","slug":"_1-\u5982\u4F55\u5224\u65AD\u5BF9\u8C61\u5DF2\u7ECF\u6B7B\u4EA1","link":"#_1-\u5982\u4F55\u5224\u65AD\u5BF9\u8C61\u5DF2\u7ECF\u6B7B\u4EA1","children":[{"level":3,"title":"1.1 \u5F15\u7528\u8BA1\u6570\u6CD5","slug":"_1-1-\u5F15\u7528\u8BA1\u6570\u6CD5","link":"#_1-1-\u5F15\u7528\u8BA1\u6570\u6CD5","children":[]},{"level":3,"title":"1.2 \u53EF\u8FBE\u6027\u5206\u6790\u7B97\u6CD5","slug":"_1-2-\u53EF\u8FBE\u6027\u5206\u6790\u7B97\u6CD5","link":"#_1-2-\u53EF\u8FBE\u6027\u5206\u6790\u7B97\u6CD5","children":[]}]},{"level":2,"title":"2 \u518D\u8C08\u5F15\u7528","slug":"_2-\u518D\u8C08\u5F15\u7528","link":"#_2-\u518D\u8C08\u5F15\u7528","children":[{"level":3,"title":"2.1\uFF0E\u5F3A\u5F15\u7528","slug":"_2-1-\u5F3A\u5F15\u7528","link":"#_2-1-\u5F3A\u5F15\u7528","children":[]},{"level":3,"title":"2.2 \u8F6F\u5F15\u7528\uFF08SoftReference\uFF09","slug":"_2-2-\u8F6F\u5F15\u7528-softreference","link":"#_2-2-\u8F6F\u5F15\u7528-softreference","children":[]},{"level":3,"title":"2.3 \u5F31\u5F15\u7528\uFF08WeakReference\uFF09","slug":"_2-3-\u5F31\u5F15\u7528-weakreference","link":"#_2-3-\u5F31\u5F15\u7528-weakreference","children":[]},{"level":3,"title":"2.4 \u865A\u5F15\u7528\uFF08PhantomReference\uFF09","slug":"_2-4-\u865A\u5F15\u7528-phantomreference","link":"#_2-4-\u865A\u5F15\u7528-phantomreference","children":[]}]},{"level":2,"title":"3. \u4E0D\u53EF\u8FBE\u7684\u5BF9\u8C61\u5E76\u975E\u201C\u975E\u6B7B\u4E0D\u53EF\u201D","slug":"_3-\u4E0D\u53EF\u8FBE\u7684\u5BF9\u8C61\u5E76\u975E-\u975E\u6B7B\u4E0D\u53EF","link":"#_3-\u4E0D\u53EF\u8FBE\u7684\u5BF9\u8C61\u5E76\u975E-\u975E\u6B7B\u4E0D\u53EF","children":[]},{"level":2,"title":"4. \u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u5E38\u91CF\u662F\u5E9F\u5F03\u5E38\u91CF","slug":"_4-\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u5E38\u91CF\u662F\u5E9F\u5F03\u5E38\u91CF","link":"#_4-\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u5E38\u91CF\u662F\u5E9F\u5F03\u5E38\u91CF","children":[]},{"level":2,"title":"5. \u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u7C7B\u662F\u65E0\u7528\u7C7B","slug":"_5-\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u7C7B\u662F\u65E0\u7528\u7C7B","link":"#_5-\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u7C7B\u662F\u65E0\u7528\u7C7B","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":6.74,"words":2023},"filePathRelative":"java/jvm/java-jvm-gc-help.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
