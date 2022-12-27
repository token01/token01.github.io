const e=JSON.parse('{"key":"v-ba94561e","path":"/db/es/elasticsearch-y-th-4.html","title":"ES\u8BE6\u89E3 - \u539F\u7406\uFF1AES\u539F\u7406\u4E4B\u8BFB\u53D6\u6587\u6863\u6D41\u7A0B\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":240,"category":["ElasticSearch"],"summary":"ES\u8BE6\u89E3 - \u539F\u7406\uFF1AES\u539F\u7406\u4E4B\u8BFB\u53D6\u6587\u6863\u6D41\u7A0B\u8BE6\u89E3 \\"ElasticSearch\u4E2D\u6700\u91CD\u8981\u539F\u7406\u662F\u6587\u6863\u7684\u7D22\u5F15\u548C\u6587\u6863\u7684\u8BFB\u53D6\uFF0C\u524D\u6587\u4ECB\u7ECD\u4E86\u7D22\u5F15\u6587\u6863\u6D41\u7A0B\uFF0C\u672C\u6587\u5E26\u4F60\u7406\u89E3ES\u6587\u6863\u7684\u8BFB\u53D6\u8FC7\u7A0B\u3002\\" 1. \u6587\u6863\u67E5\u8BE2\u6B65\u9AA4\u987A\u5E8F \\" \u5148\u770B\u4E0B\u6574\u4F53\u7684\u67E5\u8BE2\u6D41\u7A0B\\" 1.1 \u5355\u4E2A\u6587\u6863 \u4EE5\u4E0B\u662F\u4ECE\u4E3B\u5206\u7247\u6216\u8005\u526F\u672C\u5206\u7247\u68C0\u7D22\u6587\u6863\u7684\u6B65\u9AA4\u987A\u5E8F\uFF1A 1.2 \u591A\u4E2A\u6587\u6863 \u4F7F\u7528 mget \u53D6\u56DE\u591A\u4E2A\u6587\u6863\u7684\u6B65\u9AA4\u987A\u5E8F\uFF1A \u4EE5\u4E0B\u662F\u4F7F","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/db/es/elasticsearch-y-th-4.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"ES\u8BE6\u89E3 - \u539F\u7406\uFF1AES\u539F\u7406\u4E4B\u8BFB\u53D6\u6587\u6863\u6D41\u7A0B\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T11:56:34.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T11:56:34.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u6587\u6863\u67E5\u8BE2\u6B65\u9AA4\u987A\u5E8F","slug":"_1-\u6587\u6863\u67E5\u8BE2\u6B65\u9AA4\u987A\u5E8F","link":"#_1-\u6587\u6863\u67E5\u8BE2\u6B65\u9AA4\u987A\u5E8F","children":[{"level":3,"title":"1.1 \u5355\u4E2A\u6587\u6863","slug":"_1-1-\u5355\u4E2A\u6587\u6863","link":"#_1-1-\u5355\u4E2A\u6587\u6863","children":[]},{"level":3,"title":"1.2 \u591A\u4E2A\u6587\u6863","slug":"_1-2-\u591A\u4E2A\u6587\u6863","link":"#_1-2-\u591A\u4E2A\u6587\u6863","children":[]}]},{"level":2,"title":"2. \u6587\u6863\u8BFB\u53D6\u8FC7\u7A0B\u8BE6\u89E3","slug":"_2-\u6587\u6863\u8BFB\u53D6\u8FC7\u7A0B\u8BE6\u89E3","link":"#_2-\u6587\u6863\u8BFB\u53D6\u8FC7\u7A0B\u8BE6\u89E3","children":[]},{"level":2,"title":"3. \u6DF1\u5165ElasticSearch\u8BFB\u53D6\u6587\u6863\u7684\u5B9E\u73B0\u673A\u5236","slug":"_3-\u6DF1\u5165elasticsearch\u8BFB\u53D6\u6587\u6863\u7684\u5B9E\u73B0\u673A\u5236","link":"#_3-\u6DF1\u5165elasticsearch\u8BFB\u53D6\u6587\u6863\u7684\u5B9E\u73B0\u673A\u5236","children":[{"level":3,"title":"3.1 \u8BFB\u64CD\u4F5C","slug":"_3-1-\u8BFB\u64CD\u4F5C","link":"#_3-1-\u8BFB\u64CD\u4F5C","children":[]},{"level":3,"title":"3.2 Lucene\u7684\u8BFB","slug":"_3-2-lucene\u7684\u8BFB","link":"#_3-2-lucene\u7684\u8BFB","children":[]},{"level":3,"title":"3.3 Elasticsearch\u7684\u8BFB","slug":"_3-3-elasticsearch\u7684\u8BFB","link":"#_3-3-elasticsearch\u7684\u8BFB","children":[]},{"level":3,"title":"3.4 Elasticsearch\u67E5\u8BE2\u6D41\u7A0B","slug":"_3-4-elasticsearch\u67E5\u8BE2\u6D41\u7A0B","link":"#_3-4-elasticsearch\u67E5\u8BE2\u6D41\u7A0B","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1672055794000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":3}]},"readingTime":{"minutes":17.29,"words":5187},"filePathRelative":"db/es/elasticsearch-y-th-4.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};