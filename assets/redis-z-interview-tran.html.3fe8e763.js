const e=JSON.parse('{"key":"v-5b767d31","path":"/db/redis/redis-z-interview-tran.html","title":"Redis\u9762\u8BD5 - \u4E8B\u52A1","lang":"zh-CN","frontmatter":{"order":1060,"category":["\u6570\u636E\u5E93","Redis"],"summary":"Redis\u9762\u8BD5 - \u4E8B\u52A1 1 \u4EC0\u4E48\u662Fredis\u4E8B\u52A1\uFF1F Redis \u4E8B\u52A1\u7684\u672C\u8D28\u662F\u4E00\u7EC4\u547D\u4EE4\u7684\u96C6\u5408\u3002\u4E8B\u52A1\u652F\u6301\u4E00\u6B21\u6267\u884C\u591A\u4E2A\u547D\u4EE4\uFF0C\u4E00\u4E2A\u4E8B\u52A1\u4E2D\u6240\u6709\u547D\u4EE4\u90FD\u4F1A\u88AB\u5E8F\u5217\u5316\u3002\u5728\u4E8B\u52A1\u6267\u884C\u8FC7\u7A0B\uFF0C\u4F1A\u6309\u7167\u987A\u5E8F\u4E32\u884C\u5316\u6267\u884C\u961F\u5217\u4E2D\u7684\u547D\u4EE4\uFF0C\u5176\u4ED6\u5BA2\u6237\u7AEF\u63D0\u4EA4\u7684\u547D\u4EE4\u8BF7\u6C42\u4E0D\u4F1A\u63D2\u5165\u5230\u4E8B\u52A1\u6267\u884C\u547D\u4EE4\u5E8F\u5217\u4E2D\u3002 \u603B\u7ED3\u8BF4\uFF1Aredis\u4E8B\u52A1\u5C31\u662F\u4E00\u6B21\u6027\u3001\u987A\u5E8F\u6027\u3001\u6392\u4ED6\u6027\u7684\u6267\u884C\u4E00\u4E2A\u961F\u5217\u4E2D\u7684\u4E00\u7CFB\u5217\u547D\u4EE4\u3002 2 Redis\u4E8B\u52A1\u76F8\u5173","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/db/redis/redis-z-interview-tran.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"Redis\u9762\u8BD5 - \u4E8B\u52A1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1 \u4EC0\u4E48\u662Fredis\u4E8B\u52A1\uFF1F","slug":"_1-\u4EC0\u4E48\u662Fredis\u4E8B\u52A1","link":"#_1-\u4EC0\u4E48\u662Fredis\u4E8B\u52A1","children":[]},{"level":2,"title":"2 Redis\u4E8B\u52A1\u76F8\u5173\u547D\u4EE4\uFF1F","slug":"_2-redis\u4E8B\u52A1\u76F8\u5173\u547D\u4EE4","link":"#_2-redis\u4E8B\u52A1\u76F8\u5173\u547D\u4EE4","children":[]},{"level":2,"title":"3 Redis\u4E8B\u52A1\u7684\u4E09\u4E2A\u9636\u6BB5\uFF1F","slug":"_3-redis\u4E8B\u52A1\u7684\u4E09\u4E2A\u9636\u6BB5","link":"#_3-redis\u4E8B\u52A1\u7684\u4E09\u4E2A\u9636\u6BB5","children":[]},{"level":2,"title":"4 Redis\u4E8B\u52A1\u5176\u5B83\u5B9E\u73B0\uFF1F","slug":"_4-redis\u4E8B\u52A1\u5176\u5B83\u5B9E\u73B0","link":"#_4-redis\u4E8B\u52A1\u5176\u5B83\u5B9E\u73B0","children":[]},{"level":2,"title":"5 Redis\u4E8B\u52A1\u4E2D\u51FA\u73B0\u9519\u8BEF\u7684\u5904\u7406\uFF1F","slug":"_5-redis\u4E8B\u52A1\u4E2D\u51FA\u73B0\u9519\u8BEF\u7684\u5904\u7406","link":"#_5-redis\u4E8B\u52A1\u4E2D\u51FA\u73B0\u9519\u8BEF\u7684\u5904\u7406","children":[]},{"level":2,"title":"6 Redis\u4E8B\u52A1\u4E2Dwatch\u662F\u5982\u4F55\u76D1\u89C6\u5B9E\u73B0\u7684\u5462\uFF1F","slug":"_6-redis\u4E8B\u52A1\u4E2Dwatch\u662F\u5982\u4F55\u76D1\u89C6\u5B9E\u73B0\u7684\u5462","link":"#_6-redis\u4E8B\u52A1\u4E2Dwatch\u662F\u5982\u4F55\u76D1\u89C6\u5B9E\u73B0\u7684\u5462","children":[]},{"level":2,"title":"7 \u4E3A\u4EC0\u4E48 Redis \u4E0D\u652F\u6301\u56DE\u6EDA\uFF1F","slug":"_7-\u4E3A\u4EC0\u4E48-redis-\u4E0D\u652F\u6301\u56DE\u6EDA","link":"#_7-\u4E3A\u4EC0\u4E48-redis-\u4E0D\u652F\u6301\u56DE\u6EDA","children":[]},{"level":2,"title":"8 Redis \u5BF9 ACID\u7684\u652F\u6301\u6027\u7406\u89E3\uFF1F","slug":"_8-redis-\u5BF9-acid\u7684\u652F\u6301\u6027\u7406\u89E3","link":"#_8-redis-\u5BF9-acid\u7684\u652F\u6301\u6027\u7406\u89E3","children":[]},{"level":2,"title":"9 Redis\u4E8B\u52A1\u5176\u4ED6\u5B9E\u73B0\uFF1F","slug":"_9-redis\u4E8B\u52A1\u5176\u4ED6\u5B9E\u73B0","link":"#_9-redis\u4E8B\u52A1\u5176\u4ED6\u5B9E\u73B0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":6.1,"words":1829},"filePathRelative":"db/redis/redis-z-interview-tran.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};