const e=JSON.parse('{"key":"v-b12311f8","path":"/dependencies/jpa/jpa-i-query-overview.html","title":"JPA\u67E5\u8BE2\u65B9\u5F0F\u603B\u7ED3","lang":"zh-CN","frontmatter":{"summary":"JPA\u67E5\u8BE2\u65B9\u5F0F\u603B\u7ED3 \u67E5\u8BE2\u65B9\u5F0F\u79CD\u7C7B 1. \u6309\u7167jpa\u89C4\u8303\uFF0C\u901A\u8FC7\u65B9\u6CD5\u540D\u6765\u521B\u5EFA\u67E5\u8BE2 \uFF08\u7B80\u5355\u7684\u7528\u8FD9\u4E2A\uFF0C\u6761\u4EF6\u5F88\u591A\u7684\u8BDD\uFF0C\u7528\u8FD9\u4E2A\u65B9\u6CD5\u540D\u4F1A\u5F88\u957F\u3002\uFF09 2. Query by Example \u6BCF\u6B21\u9700\u8981\u91CD\u65B0new \u5BF9\u8C61\u4F20\u5165(\u4E0D\u652F\u6301or,\u4EC5\u652F\u6301and) 3. @Query JPQL \u6216\u539F\u751Fsql\u67E5\u8BE2 4. EntityManager.createNativeQuery \u539F\u751FSQL ","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/dependencies/jpa/jpa-i-query-overview.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"JPA\u67E5\u8BE2\u65B9\u5F0F\u603B\u7ED3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u67E5\u8BE2\u65B9\u5F0F\u79CD\u7C7B","slug":"\u67E5\u8BE2\u65B9\u5F0F\u79CD\u7C7B","link":"#\u67E5\u8BE2\u65B9\u5F0F\u79CD\u7C7B","children":[]},{"level":2,"title":"1. \u6309\u7167jpa\u89C4\u8303\uFF0C\u901A\u8FC7\u65B9\u6CD5\u540D\u6765\u521B\u5EFA\u67E5\u8BE2","slug":"_1-\u6309\u7167jpa\u89C4\u8303-\u901A\u8FC7\u65B9\u6CD5\u540D\u6765\u521B\u5EFA\u67E5\u8BE2","link":"#_1-\u6309\u7167jpa\u89C4\u8303-\u901A\u8FC7\u65B9\u6CD5\u540D\u6765\u521B\u5EFA\u67E5\u8BE2","children":[{"level":3,"title":"1.1 \u6838\u5FC3\u65B9\u6CD5","slug":"_1-1-\u6838\u5FC3\u65B9\u6CD5","link":"#_1-1-\u6838\u5FC3\u65B9\u6CD5","children":[]},{"level":3,"title":"1.2 \u67E5\u8BE2\u5173\u952E\u5B57","slug":"_1-2-\u67E5\u8BE2\u5173\u952E\u5B57","link":"#_1-2-\u67E5\u8BE2\u5173\u952E\u5B57","children":[]},{"level":3,"title":"1.3 \u8BE6\u7EC6\u67E5\u8BE2\u8BED\u6CD5","slug":"_1-3-\u8BE6\u7EC6\u67E5\u8BE2\u8BED\u6CD5","link":"#_1-3-\u8BE6\u7EC6\u67E5\u8BE2\u8BED\u6CD5","children":[]},{"level":3,"title":"1.4 \u5185\u7F6E\u65B9\u6CD5 \uFF08\u5206\u9875\uFF0C\u6392\u5E8F\uFF09","slug":"_1-4-\u5185\u7F6E\u65B9\u6CD5-\u5206\u9875-\u6392\u5E8F","link":"#_1-4-\u5185\u7F6E\u65B9\u6CD5-\u5206\u9875-\u6392\u5E8F","children":[]}]},{"level":2,"title":"2. Example_\u5B9E\u4F8B\u67E5\u8BE2","slug":"_2-example-\u5B9E\u4F8B\u67E5\u8BE2","link":"#_2-example-\u5B9E\u4F8B\u67E5\u8BE2","children":[{"level":3,"title":"2.1 \u6982\u5FF5\u5B9A\u4E49:","slug":"_2-1-\u6982\u5FF5\u5B9A\u4E49","link":"#_2-1-\u6982\u5FF5\u5B9A\u4E49","children":[]},{"level":3,"title":"2.2 \u7279\u70B9\u53CA\u7EA6\u675F\uFF08\u5C40\u9650\u6027\uFF09:","slug":"_2-2-\u7279\u70B9\u53CA\u7EA6\u675F-\u5C40\u9650\u6027","link":"#_2-2-\u7279\u70B9\u53CA\u7EA6\u675F-\u5C40\u9650\u6027","children":[]},{"level":3,"title":"2.3 \u8303\u4F8B","slug":"_2-3-\u8303\u4F8B","link":"#_2-3-\u8303\u4F8B","children":[]}]},{"level":2,"title":"3. @Query\u6CE8\u89E3","slug":"_3-query\u6CE8\u89E3","link":"#_3-query\u6CE8\u89E3","children":[{"level":3,"title":"3.1 JPQL","slug":"_3-1-jpql","link":"#_3-1-jpql","children":[]},{"level":3,"title":"3.2 \u539F\u751Fsql\u67E5\u8BE2","slug":"_3-2-\u539F\u751Fsql\u67E5\u8BE2","link":"#_3-2-\u539F\u751Fsql\u67E5\u8BE2","children":[]},{"level":3,"title":"3.3 \u600E\u4E48\u5F80@Query\u6CE8\u89E3\u4E2D\u7684JPQL\u4E2D\u4F20\u9012\u53C2\u6570\u5462\uFF1F","slug":"_3-3-\u600E\u4E48\u5F80-query\u6CE8\u89E3\u4E2D\u7684jpql\u4E2D\u4F20\u9012\u53C2\u6570\u5462","link":"#_3-3-\u600E\u4E48\u5F80-query\u6CE8\u89E3\u4E2D\u7684jpql\u4E2D\u4F20\u9012\u53C2\u6570\u5462","children":[]},{"level":3,"title":"3.4 Query\u4E2D\u6709like\u5173\u952E\u5B57","slug":"_3-4-query\u4E2D\u6709like\u5173\u952E\u5B57","link":"#_3-4-query\u4E2D\u6709like\u5173\u952E\u5B57","children":[]}]},{"level":2,"title":"4. EntityManager.createNativeQuery \u539F\u751FSQL","slug":"_4-entitymanager-createnativequery-\u539F\u751Fsql","link":"#_4-entitymanager-createnativequery-\u539F\u751Fsql","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":8.25,"words":2476},"filePathRelative":"dependencies/jpa/jpa-i-query-overview.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
