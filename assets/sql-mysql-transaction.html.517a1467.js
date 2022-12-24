const e=JSON.parse('{"key":"v-7e78de6c","path":"/db/mysql/sql-mysql-transaction.html","title":"MySQL - \u4E8B\u52A1","lang":"zh-CN","frontmatter":{"order":40,"category":["\u6570\u636E\u5E93","Mysql"],"summary":"MySQL - \u4E8B\u52A1 1. \u4EC0\u4E48\u662F\u4E8B\u52A1 \u4E8B\u52A1\u5C31\u662F\u903B\u8F91\u4E0A\u7684\u4E00\u7EC4\u64CD\u4F5C\uFF0C\u8981\u4E48\u90FD\u6267\u884C\uFF0C\u8981\u4E48\u90FD\u4E0D\u6267\u884C 1.1 \u6848\u4F8B \u4E8B\u52A1\u6700\u7ECF\u5178\u4F8B\u5B50\u8F6C\u8D26\uFF1A\u5047\u8BBE\u5C0F\u660E\u8981\u7ED9\u5C0F\u7EA2\u8F6C\u8D261000\u5143\uFF0C\u8FD9\u4E2A\u8F6C\u8D26\u4F1A\u6D89\u53CA\u5230\u4E24\u4E2A\u5173\u952E\u64CD\u4F5C \u5C06\u5C0F\u660E\u7684\u4F59\u989D\u51CF\u5C111000\u5143; \u5C06\u5C0F\u7EA2\u7684\u4F59\u989D\u589E\u52A01000\u5143; \u4E07\u4E00\u5728\u8FD9\u4E24\u4E2A\u64CD\u4F5C\u4E4B\u95F4\u7A81\u7136\u51FA\u73B0\u9519\u8BEF\u6BD4\u5982\u94F6\u884C\u7CFB\u7EDF\u5954\u6E83\uFF0C\u5BFC\u81F4\u5C0F\u660E\u4F59\u989D\u51CF\u5C11\u800C\u5C0F\u7EA2\u7684\u4F59\u989D\u6CA1\u6709\u589E\u52A0\uFF0C\u8FD9\u5C31\u4E0D\u5BF9\u4E86\u3002 \u4E8B\u52A1\u5C31\u662F\u4FDD","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/db/mysql/sql-mysql-transaction.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"MySQL - \u4E8B\u52A1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u4EC0\u4E48\u662F\u4E8B\u52A1","slug":"_1-\u4EC0\u4E48\u662F\u4E8B\u52A1","link":"#_1-\u4EC0\u4E48\u662F\u4E8B\u52A1","children":[{"level":3,"title":"1.1 \u6848\u4F8B","slug":"_1-1-\u6848\u4F8B","link":"#_1-1-\u6848\u4F8B","children":[]}]},{"level":2,"title":"2. \u4E8B\u52A1\u7684\u56DB\u5927\u7279\u6027\uFF08ACID\uFF09","slug":"_2-\u4E8B\u52A1\u7684\u56DB\u5927\u7279\u6027-acid","link":"#_2-\u4E8B\u52A1\u7684\u56DB\u5927\u7279\u6027-acid","children":[{"level":3,"title":"2.1 \u6570\u636E\u5E93\u662F\u5982\u4F55\u4FDD\u8BC1ACID\u7684","slug":"_2-1-\u6570\u636E\u5E93\u662F\u5982\u4F55\u4FDD\u8BC1acid\u7684","link":"#_2-1-\u6570\u636E\u5E93\u662F\u5982\u4F55\u4FDD\u8BC1acid\u7684","children":[]}]},{"level":2,"title":"3. \u5E76\u53D1\u4E8B\u52A1\u5E26\u6765\u54EA\u4E9B\u95EE\u9898","slug":"_3-\u5E76\u53D1\u4E8B\u52A1\u5E26\u6765\u54EA\u4E9B\u95EE\u9898","link":"#_3-\u5E76\u53D1\u4E8B\u52A1\u5E26\u6765\u54EA\u4E9B\u95EE\u9898","children":[{"level":3,"title":"3.1 \u4E0D\u53EF\u91CD\u590D\u8BFB\u548C\u5E7B\u8BFB\u533A\u522B","slug":"_3-1-\u4E0D\u53EF\u91CD\u590D\u8BFB\u548C\u5E7B\u8BFB\u533A\u522B","link":"#_3-1-\u4E0D\u53EF\u91CD\u590D\u8BFB\u548C\u5E7B\u8BFB\u533A\u522B","children":[]}]},{"level":2,"title":"4. \u4E8B\u52A1\u9694\u79BB\u7EA7\u522B\u6709\u54EA\u4E9B","slug":"_4-\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B\u6709\u54EA\u4E9B","link":"#_4-\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B\u6709\u54EA\u4E9B","children":[]},{"level":2,"title":"5. \u9694\u79BB\u7EA7\u522B\u6848\u4F8B","slug":"_5-\u9694\u79BB\u7EA7\u522B\u6848\u4F8B","link":"#_5-\u9694\u79BB\u7EA7\u522B\u6848\u4F8B","children":[]},{"level":2,"title":"6. MySQL innoDB \u7684\u9694\u79BB\u7EA7\u522B","slug":"_6-mysql-innodb-\u7684\u9694\u79BB\u7EA7\u522B","link":"#_6-mysql-innodb-\u7684\u9694\u79BB\u7EA7\u522B","children":[{"level":3,"title":"5.1 InnoDB \u7684 REPEATABLE-READ\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u907F\u514D\u5E7B\u8BFB","slug":"_5-1-innodb-\u7684-repeatable-read\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u907F\u514D\u5E7B\u8BFB","link":"#_5-1-innodb-\u7684-repeatable-read\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u907F\u514D\u5E7B\u8BFB","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":7.21,"words":2162},"filePathRelative":"db/mysql/sql-mysql-transaction.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
