const e=JSON.parse('{"key":"v-25740d30","path":"/db/oracle/oracle-y-partition-create.html","title":"oracle\u5206\u533A\u8868-\u81EA\u52A8\u521B\u5EFA\u7684\u5206\u533A","lang":"zh-CN","frontmatter":{"summary":"oracle\u5206\u533A\u8868-\u81EA\u52A8\u521B\u5EFA\u7684\u5206\u533A 1. \u521B\u5EFA\u6309\u6708\u5206\u533A\u7684\u5206\u533A\u8868 1.1 \u521B\u5EFA\u5206\u533A\u8868 \u6CE8\u610F\uFF1A\u5982\u679C\u5728\u5EFAInterval\u5206\u533A\u8868\u662F\u6CA1\u6709\u628A\u6240\u6709\u7684\u5206\u533A\u5199\u5B8C\u6210\uFF0C\u5728\u63D2\u5165\u76F8\u5173\u6570\u636E\u540E\u4F1A\u81EA\u52A8\u751F\u6210\u5206\u533A 1.2 \u67E5\u770B\u73B0\u5728\u8868\u7684\u5206\u533A: 1.3 \u63D2\u5165\u6D4B\u8BD5\u6570\u636E\uFF1A \u5411intervalpart \u8868\u63D2\u51652020.1.1\u53F7\u540E\u768419\u4E2A\u6708\u6570\u636E \u8865\u5145\uFF1Aadd_months()\u51FD\u6570\u83B7\u53D6\u524D\u4E00\u4E2A\u6708\u6216\u8005\u4E0B\u4E00\u4E2A\u6708\u7684","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/db/oracle/oracle-y-partition-create.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"oracle\u5206\u533A\u8868-\u81EA\u52A8\u521B\u5EFA\u7684\u5206\u533A"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u521B\u5EFA\u6309\u6708\u5206\u533A\u7684\u5206\u533A\u8868","slug":"_1-\u521B\u5EFA\u6309\u6708\u5206\u533A\u7684\u5206\u533A\u8868","link":"#_1-\u521B\u5EFA\u6309\u6708\u5206\u533A\u7684\u5206\u533A\u8868","children":[{"level":3,"title":"1.1  \u521B\u5EFA\u5206\u533A\u8868","slug":"_1-1-\u521B\u5EFA\u5206\u533A\u8868","link":"#_1-1-\u521B\u5EFA\u5206\u533A\u8868","children":[]},{"level":3,"title":"1.2 \u67E5\u770B\u73B0\u5728\u8868\u7684\u5206\u533A:","slug":"_1-2-\u67E5\u770B\u73B0\u5728\u8868\u7684\u5206\u533A","link":"#_1-2-\u67E5\u770B\u73B0\u5728\u8868\u7684\u5206\u533A","children":[]},{"level":3,"title":"1.3  \u63D2\u5165\u6D4B\u8BD5\u6570\u636E\uFF1A","slug":"_1-3-\u63D2\u5165\u6D4B\u8BD5\u6570\u636E","link":"#_1-3-\u63D2\u5165\u6D4B\u8BD5\u6570\u636E","children":[]},{"level":3,"title":"1.4 \u89C2\u5BDF\u81EA\u52A8\u521B\u5EFA\u7684\u5206\u533A\uFF1A","slug":"_1-4-\u89C2\u5BDF\u81EA\u52A8\u521B\u5EFA\u7684\u5206\u533A","link":"#_1-4-\u89C2\u5BDF\u81EA\u52A8\u521B\u5EFA\u7684\u5206\u533A","children":[]},{"level":3,"title":"1.5 \u67E5\u770B\u5206\u533A\u5185\u5BB9\uFF1A","slug":"_1-5-\u67E5\u770B\u5206\u533A\u5185\u5BB9","link":"#_1-5-\u67E5\u770B\u5206\u533A\u5185\u5BB9","children":[]}]},{"level":2,"title":"2. \u521B\u5EFA\u4E00\u4E2A\u4EE5\u5929\u4E3A\u95F4\u9694\u7684\u5206\u533A\u8868\uFF1A","slug":"_2-\u521B\u5EFA\u4E00\u4E2A\u4EE5\u5929\u4E3A\u95F4\u9694\u7684\u5206\u533A\u8868","link":"#_2-\u521B\u5EFA\u4E00\u4E2A\u4EE5\u5929\u4E3A\u95F4\u9694\u7684\u5206\u533A\u8868","children":[{"level":3,"title":"2.1 \u521B\u5EFA\u5206\u533A\u8868\uFF1A","slug":"_2-1-\u521B\u5EFA\u5206\u533A\u8868","link":"#_2-1-\u521B\u5EFA\u5206\u533A\u8868","children":[]},{"level":3,"title":"2.2 \u67E5\u770B\u8868\u5206\u533A","slug":"_2-2-\u67E5\u770B\u8868\u5206\u533A","link":"#_2-2-\u67E5\u770B\u8868\u5206\u533A","children":[]},{"level":3,"title":"2.3 \u63D2\u5165\u6D4B\u8BD5\u6570\u636E","slug":"_2-3-\u63D2\u5165\u6D4B\u8BD5\u6570\u636E","link":"#_2-3-\u63D2\u5165\u6D4B\u8BD5\u6570\u636E","children":[]},{"level":3,"title":"2.4 \u89C2\u5BDF\u81EA\u52A8\u521B\u5EFA\u7684\u5206\u533A\uFF1A","slug":"_2-4-\u89C2\u5BDF\u81EA\u52A8\u521B\u5EFA\u7684\u5206\u533A","link":"#_2-4-\u89C2\u5BDF\u81EA\u52A8\u521B\u5EFA\u7684\u5206\u533A","children":[]},{"level":3,"title":"2.5 \u67E5\u770B\u5206\u533A\u5185\u5BB9\uFF1A","slug":"_2-5-\u67E5\u770B\u5206\u533A\u5185\u5BB9","link":"#_2-5-\u67E5\u770B\u5206\u533A\u5185\u5BB9","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":1.77,"words":532},"filePathRelative":"db/oracle/oracle-y-partition-create.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};