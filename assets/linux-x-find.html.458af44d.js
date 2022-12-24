const e=JSON.parse('{"key":"v-7a459808","path":"/deploy/linux/linux-x-find.html","title":"","lang":"zh-CN","frontmatter":{"order":220,"category":["linux"],"summary":"1 \u7B80\u4ECB find\u662F\u6700\u5E38\u89C1\u548C\u6700\u5F3A\u5927\u7684\u67E5\u627E\u547D\u4EE4\uFF0C\u4F60\u53EF\u4EE5\u7528\u5B83\u627E\u5230\u4EFB\u4F55\u4F60\u60F3\u627E\u7684\u6587\u4EF6\u3002 2 \u547D\u4EE4\u8BED\u6CD5 path\uFF1A \u6240\u8981\u641C\u7D22\u7684\u76EE\u5F55\u53CA\u5176\u6240\u6709\u5B50\u76EE\u5F55\u3002\u9ED8\u8BA4\u4E3A\u5F53\u524D\u76EE\u5F55\u3002; expression\uFF1A \u6240\u8981\u641C\u7D22\u7684\u6587\u4EF6\u7684\u7279\u5F81\u3002; cmd\uFF1A \u5BF9\u641C\u7D22\u7ED3\u679C\u8FDB\u884C\u7279\u5B9A\u7684\u5904\u7406\u3002; \u5982\u679C\u4EC0\u4E48\u53C2\u6570\u4E5F\u4E0D\u52A0\uFF0Cfind\u9ED8\u8BA4\u641C\u7D22\u5F53\u524D\u76EE\u5F55\u53CA\u5176\u5B50\u76EE\u5F55\uFF0C\u5E76\u4E14\u4E0D\u8FC7\u6EE4\u4EFB\u4F55\u7ED3\u679C\uFF08\u4E5F\u5C31\u662F\u8FD4\u56DE\u6240\u6709\u6587\u4EF6\uFF09\uFF0C\u5C06\u5B83\u4EEC\u5168\u90FD\u663E\u793A\u5728","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/deploy/linux/linux-x-find.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1 \u7B80\u4ECB","slug":"_1-\u7B80\u4ECB","link":"#_1-\u7B80\u4ECB","children":[]},{"level":2,"title":"2 \u547D\u4EE4\u8BED\u6CD5","slug":"_2-\u547D\u4EE4\u8BED\u6CD5","link":"#_2-\u547D\u4EE4\u8BED\u6CD5","children":[]},{"level":2,"title":"3 \u5B9E\u4F8B","slug":"_3-\u5B9E\u4F8B","link":"#_3-\u5B9E\u4F8B","children":[{"level":3,"title":"3.1 \u6309\u6269\u5C55\u540D\u67E5\u627E\u6587\u4EF6","slug":"_3-1-\u6309\u6269\u5C55\u540D\u67E5\u627E\u6587\u4EF6","link":"#_3-1-\u6309\u6269\u5C55\u540D\u67E5\u627E\u6587\u4EF6","children":[]},{"level":3,"title":"3.2 \u5728\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684\u6A21\u5F0F\u4E0B\uFF0C\u67E5\u627E\u4E0E\u7ED9\u5B9A\u540D\u79F0\u5339\u914D\u7684\u76EE\u5F55","slug":"_3-2-\u5728\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684\u6A21\u5F0F\u4E0B-\u67E5\u627E\u4E0E\u7ED9\u5B9A\u540D\u79F0\u5339\u914D\u7684\u76EE\u5F55","link":"#_3-2-\u5728\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684\u6A21\u5F0F\u4E0B-\u67E5\u627E\u4E0E\u7ED9\u5B9A\u540D\u79F0\u5339\u914D\u7684\u76EE\u5F55","children":[]},{"level":3,"title":"3.3 \u901A\u8FC7\u5339\u914D\u591A\u4E2A\u6A21\u5F0F\u67E5\u627E\u6587\u4EF6","slug":"_3-3-\u901A\u8FC7\u5339\u914D\u591A\u4E2A\u6A21\u5F0F\u67E5\u627E\u6587\u4EF6","link":"#_3-3-\u901A\u8FC7\u5339\u914D\u591A\u4E2A\u6A21\u5F0F\u67E5\u627E\u6587\u4EF6","children":[]},{"level":3,"title":"3.4 \u67E5\u627E\u4E0E\u8DEF\u5F84\u6A21\u5F0F\u5339\u914D\u7684\u6587\u4EF6:","slug":"_3-4-\u67E5\u627E\u4E0E\u8DEF\u5F84\u6A21\u5F0F\u5339\u914D\u7684\u6587\u4EF6","link":"#_3-4-\u67E5\u627E\u4E0E\u8DEF\u5F84\u6A21\u5F0F\u5339\u914D\u7684\u6587\u4EF6","children":[]},{"level":3,"title":"3.5\u67E5\u627E\u4E0E\u7ED9\u5B9A\u5927\u5C0F\u8303\u56F4\u5339\u914D\u7684\u6587\u4EF6:","slug":"_3-5\u67E5\u627E\u4E0E\u7ED9\u5B9A\u5927\u5C0F\u8303\u56F4\u5339\u914D\u7684\u6587\u4EF6","link":"#_3-5\u67E5\u627E\u4E0E\u7ED9\u5B9A\u5927\u5C0F\u8303\u56F4\u5339\u914D\u7684\u6587\u4EF6","children":[]},{"level":3,"title":"3.6 \u627E\u5230\u6700\u8FD17\u5929\u4FEE\u6539\u8FC7\u7684\u6587\u4EF6\uFF0C\u5E76\u5220\u9664\u5B83\u4EEC:","slug":"_3-6-\u627E\u5230\u6700\u8FD17\u5929\u4FEE\u6539\u8FC7\u7684\u6587\u4EF6-\u5E76\u5220\u9664\u5B83\u4EEC","link":"#_3-6-\u627E\u5230\u6700\u8FD17\u5929\u4FEE\u6539\u8FC7\u7684\u6587\u4EF6-\u5E76\u5220\u9664\u5B83\u4EEC","children":[]},{"level":3,"title":"3.7 \u6839\u636E\u6587\u4EF6\u7C7B\u578B\u8FDB\u884C\u641C\u7D22","slug":"_3-7-\u6839\u636E\u6587\u4EF6\u7C7B\u578B\u8FDB\u884C\u641C\u7D22","link":"#_3-7-\u6839\u636E\u6587\u4EF6\u7C7B\u578B\u8FDB\u884C\u641C\u7D22","children":[]},{"level":3,"title":"3.8 \u6839\u636E\u6587\u4EF6\u65F6\u95F4\u6233\u8FDB\u884C\u641C\u7D22","slug":"_3-8-\u6839\u636E\u6587\u4EF6\u65F6\u95F4\u6233\u8FDB\u884C\u641C\u7D22","link":"#_3-8-\u6839\u636E\u6587\u4EF6\u65F6\u95F4\u6233\u8FDB\u884C\u641C\u7D22","children":[]},{"level":3,"title":"","slug":"","link":"#","children":[]}]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":1.98,"words":595},"filePathRelative":"deploy/linux/linux-x-find.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
