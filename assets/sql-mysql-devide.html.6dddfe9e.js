const e=JSON.parse('{"key":"v-7604ce15","path":"/db/mysql/sql-mysql-devide.html","title":"MySQL - \u5206\u8868\u5206\u5E93","lang":"zh-CN","frontmatter":{"order":310,"category":["Mysql","\u6570\u636E\u5E93"],"summary":"MySQL - \u5206\u8868\u5206\u5E93 1. \u6C34\u5E73\u5207\u5206 \u6C34\u5E73\u5207\u5206\u53C8\u79F0\u4E3A Sharding\uFF0C\u5B83\u662F\u5C06\u540C\u4E00\u4E2A\u8868\u4E2D\u7684\u8BB0\u5F55\u62C6\u5206\u5230\u591A\u4E2A\u7ED3\u6784\u76F8\u540C\u7684\u8868\u4E2D\u3002 \u5F53\u4E00\u4E2A\u8868\u7684\u6570\u636E\u4E0D\u65AD\u589E\u591A\u65F6\uFF0CSharding \u662F\u5FC5\u7136\u7684\u9009\u62E9\uFF0C\u5B83\u53EF\u4EE5\u5C06\u6570\u636E\u5206\u5E03\u5230\u96C6\u7FA4\u7684\u4E0D\u540C\u8282\u70B9\u4E0A\uFF0C\u4ECE\u800C\u7F13\u89E3\u5355\u4E2A\u6570\u636E\u5E93\u7684\u538B\u529B\u3002 2. \u5782\u76F4\u5207\u5206 \u5782\u76F4\u5207\u5206\u662F\u5C06\u4E00\u5F20\u8868\u6309\u5217\u5207\u5206\u6210\u591A\u4E2A\u8868\uFF0C\u901A\u5E38\u662F\u6309\u7167\u5217\u7684\u5173\u7CFB\u5BC6\u96C6\u7A0B\u5EA6\u8FDB\u884C\u5207\u5206\uFF0C\u4E5F\u53EF\u4EE5\u5229\u7528\u5782\u76F4\u5207\u5206\u5C06\u7ECF\u5E38","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/db/mysql/sql-mysql-devide.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"MySQL - \u5206\u8868\u5206\u5E93"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u6C34\u5E73\u5207\u5206","slug":"_1-\u6C34\u5E73\u5207\u5206","link":"#_1-\u6C34\u5E73\u5207\u5206","children":[]},{"level":2,"title":"2. \u5782\u76F4\u5207\u5206","slug":"_2-\u5782\u76F4\u5207\u5206","link":"#_2-\u5782\u76F4\u5207\u5206","children":[]},{"level":2,"title":"3. Sharding \u7B56\u7565","slug":"_3-sharding-\u7B56\u7565","link":"#_3-sharding-\u7B56\u7565","children":[]},{"level":2,"title":"4. Sharding \u5B58\u5728\u7684\u95EE\u9898\u53CA\u89E3\u51B3\u65B9\u6848","slug":"_4-sharding-\u5B58\u5728\u7684\u95EE\u9898\u53CA\u89E3\u51B3\u65B9\u6848","link":"#_4-sharding-\u5B58\u5728\u7684\u95EE\u9898\u53CA\u89E3\u51B3\u65B9\u6848","children":[{"level":3,"title":"4.1 \u4E8B\u52A1\u95EE\u9898","slug":"_4-1-\u4E8B\u52A1\u95EE\u9898","link":"#_4-1-\u4E8B\u52A1\u95EE\u9898","children":[]},{"level":3,"title":"4.2 \u94FE\u63A5","slug":"_4-2-\u94FE\u63A5","link":"#_4-2-\u94FE\u63A5","children":[]},{"level":3,"title":"4.3 ID \u552F\u4E00\u6027","slug":"_4-3-id-\u552F\u4E00\u6027","link":"#_4-3-id-\u552F\u4E00\u6027","children":[]}]},{"level":2,"title":"5. \u6570\u636E\u5E93\u5206\u7247\u4E24\u79CD\u65B9\u6848","slug":"_5-\u6570\u636E\u5E93\u5206\u7247\u4E24\u79CD\u65B9\u6848","link":"#_5-\u6570\u636E\u5E93\u5206\u7247\u4E24\u79CD\u65B9\u6848","children":[{"level":3,"title":"5.1 \u5BA2\u6237\u7AEF\u4EE3\u7406","slug":"_5-1-\u5BA2\u6237\u7AEF\u4EE3\u7406","link":"#_5-1-\u5BA2\u6237\u7AEF\u4EE3\u7406","children":[]},{"level":3,"title":"5.2 \u4E2D\u95F4\u4EF6\u4EE3\u7406","slug":"_5-2-\u4E2D\u95F4\u4EF6\u4EE3\u7406","link":"#_5-2-\u4E2D\u95F4\u4EF6\u4EE3\u7406","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":1.75,"words":525},"filePathRelative":"db/mysql/sql-mysql-devide.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
