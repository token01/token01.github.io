const e=JSON.parse('{"key":"v-2f35393d","path":"/db/es/elasticsearch-demo.html","title":"Es-\u6D4B\u8BD5demo","lang":"zh-CN","frontmatter":{"summary":"Es-\u6D4B\u8BD5demo 1. \u7D22\u5F15\u7BA1\u7406 1.1 \u67E5\u770B\u7D22\u5F15 1.2 \u5220\u9664\u7D22\u5F15 2. DSL\u67E5\u8BE2\u4E4B\u590D\u5408\u67E5\u8BE2 2.1 bool query(\u5E03\u5C14\u67E5\u8BE2) \\"bool\u67E5\u8BE2\u53EF\u4EE5\u7075\u6D3B\u7684\u7B5B\u9009\u548C\u8FC7\u6EE4\u51FA\u81EA\u5DF1\u60F3\u8981\u7684\u6570\u636E\\" Bool\u67E5\u8BE2\u8BED\u6CD5\u6709\u4EE5\u4E0B\u7279\u70B9 \u5B50\u67E5\u8BE2\u53EF\u4EE5\u4EFB\u610F\u987A\u5E8F\u51FA\u73B0; \u53EF\u4EE5\u5D4C\u5957\u591A\u4E2A\u67E5\u8BE2\uFF0C\u5305\u62ECbool\u67E5\u8BE2; \u5982\u679Cbool\u67E5\u8BE2\u4E2D\u6CA1\u6709must\u6761\u4EF6\uFF0Cshould\u4E2D\u5FC5\u987B\u81F3\u5C11\u6EE1\u8DB3\u4E00\u6761\u624D\u4F1A\u8FD4","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/db/es/elasticsearch-demo.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"Es-\u6D4B\u8BD5demo"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u7D22\u5F15\u7BA1\u7406","slug":"_1-\u7D22\u5F15\u7BA1\u7406","link":"#_1-\u7D22\u5F15\u7BA1\u7406","children":[{"level":3,"title":"1.1 \u67E5\u770B\u7D22\u5F15","slug":"_1-1-\u67E5\u770B\u7D22\u5F15","link":"#_1-1-\u67E5\u770B\u7D22\u5F15","children":[]},{"level":3,"title":"1.2 \u5220\u9664\u7D22\u5F15","slug":"_1-2-\u5220\u9664\u7D22\u5F15","link":"#_1-2-\u5220\u9664\u7D22\u5F15","children":[]}]},{"level":2,"title":"2. DSL\u67E5\u8BE2\u4E4B\u590D\u5408\u67E5\u8BE2","slug":"_2-dsl\u67E5\u8BE2\u4E4B\u590D\u5408\u67E5\u8BE2","link":"#_2-dsl\u67E5\u8BE2\u4E4B\u590D\u5408\u67E5\u8BE2","children":[{"level":3,"title":"2.1 bool query(\u5E03\u5C14\u67E5\u8BE2)","slug":"_2-1-bool-query-\u5E03\u5C14\u67E5\u8BE2","link":"#_2-1-bool-query-\u5E03\u5C14\u67E5\u8BE2","children":[]},{"level":3,"title":"2.2 boosting query(\u63D0\u9AD8\u67E5\u8BE2)","slug":"_2-2-boosting-query-\u63D0\u9AD8\u67E5\u8BE2","link":"#_2-2-boosting-query-\u63D0\u9AD8\u67E5\u8BE2","children":[]},{"level":3,"title":"2.3 constant_score\uFF08\u56FA\u5B9A\u5206\u6570\u67E5\u8BE2\uFF09","slug":"_2-3-constant-score-\u56FA\u5B9A\u5206\u6570\u67E5\u8BE2","link":"#_2-3-constant-score-\u56FA\u5B9A\u5206\u6570\u67E5\u8BE2","children":[]},{"level":3,"title":"2.4 dis_max(\u6700\u4F73\u5339\u914D\u67E5\u8BE2\uFF09","slug":"_2-4-dis-max-\u6700\u4F73\u5339\u914D\u67E5\u8BE2","link":"#_2-4-dis-max-\u6700\u4F73\u5339\u914D\u67E5\u8BE2","children":[]}]},{"level":2,"title":"3. DSL\u67E5\u8BE2\u4E4B\u5168\u6587\u641C\u7D22","slug":"_3-dsl\u67E5\u8BE2\u4E4B\u5168\u6587\u641C\u7D22","link":"#_3-dsl\u67E5\u8BE2\u4E4B\u5168\u6587\u641C\u7D22","children":[{"level":3,"title":"3.1 match \u67E5\u8BE2","slug":"_3-1-match-\u67E5\u8BE2","link":"#_3-1-match-\u67E5\u8BE2","children":[]},{"level":3,"title":"3.2 \u591A\u8BCDmatch\uFF0C\u9ED8\u8BA4or","slug":"_3-2-\u591A\u8BCDmatch-\u9ED8\u8BA4or","link":"#_3-2-\u591A\u8BCDmatch-\u9ED8\u8BA4or","children":[]},{"level":3,"title":"3.3 \u591A\u8BCDmatch\uFF0C\u6307\u5B9A\u4E3Aand","slug":"_3-3-\u591A\u8BCDmatch-\u6307\u5B9A\u4E3Aand","link":"#_3-3-\u591A\u8BCDmatch-\u6307\u5B9A\u4E3Aand","children":[]},{"level":3,"title":"3.4 \u63A7\u5236match\u7684\u5339\u914D\u7CBE\u5EA6","slug":"_3-4-\u63A7\u5236match\u7684\u5339\u914D\u7CBE\u5EA6","link":"#_3-4-\u63A7\u5236match\u7684\u5339\u914D\u7CBE\u5EA6","children":[]},{"level":3,"title":"3.5 match_phrase \u641C\u7D22\u8BCD\u7EC4","slug":"_3-5-match-phrase-\u641C\u7D22\u8BCD\u7EC4","link":"#_3-5-match-phrase-\u641C\u7D22\u8BCD\u7EC4","children":[]},{"level":3,"title":"3.6 match_phrase_prefix \u67E5\u6700\u540E\u4E00\u4E2A\u8BCD\u9879\u662F\u524D\u7F00","slug":"_3-6-match-phrase-prefix-\u67E5\u6700\u540E\u4E00\u4E2A\u8BCD\u9879\u662F\u524D\u7F00","link":"#_3-6-match-phrase-prefix-\u67E5\u6700\u540E\u4E00\u4E2A\u8BCD\u9879\u662F\u524D\u7F00","children":[]},{"level":3,"title":"3.7 multi_match \u4E00\u6B21\u5BF9\u591A\u4E2A\u5B57\u6BB5\u67E5\u8BE2","slug":"_3-7-multi-match-\u4E00\u6B21\u5BF9\u591A\u4E2A\u5B57\u6BB5\u67E5\u8BE2","link":"#_3-7-multi-match-\u4E00\u6B21\u5BF9\u591A\u4E2A\u5B57\u6BB5\u67E5\u8BE2","children":[]},{"level":3,"title":"3.8 query_string\uFF08\u6839\u636E\u8FD0\u7B97\u7B26\u6765\u89E3\u6790\u548C\u62C6\u5206\u67E5\u8BE2\u5B57\u7B26\u4E32\uFF09","slug":"_3-8-query-string-\u6839\u636E\u8FD0\u7B97\u7B26\u6765\u89E3\u6790\u548C\u62C6\u5206\u67E5\u8BE2\u5B57\u7B26\u4E32","link":"#_3-8-query-string-\u6839\u636E\u8FD0\u7B97\u7B26\u6765\u89E3\u6790\u548C\u62C6\u5206\u67E5\u8BE2\u5B57\u7B26\u4E32","children":[]},{"level":3,"title":"3.9 simple_query_string \u65E0\u6548\u8BED\u6CD5\u4E0D\u4F1A\u8FD4\u56DE\u9519\u8BEF","slug":"_3-9-simple-query-string-\u65E0\u6548\u8BED\u6CD5\u4E0D\u4F1A\u8FD4\u56DE\u9519\u8BEF","link":"#_3-9-simple-query-string-\u65E0\u6548\u8BED\u6CD5\u4E0D\u4F1A\u8FD4\u56DE\u9519\u8BEF","children":[]}]},{"level":2,"title":"4. DSL\u67E5\u8BE2\u4E4BTerm","slug":"_4-dsl\u67E5\u8BE2\u4E4Bterm","link":"#_4-dsl\u67E5\u8BE2\u4E4Bterm","children":[{"level":3,"title":"4.1 \u5B57\u6BB5\u5B58\u5728:exist","slug":"_4-1-\u5B57\u6BB5\u5B58\u5728-exist","link":"#_4-1-\u5B57\u6BB5\u5B58\u5728-exist","children":[]},{"level":3,"title":"4.2 \u5B57\u6BB5\u4E0D\u5B58\u5728:bool+must_not+exist","slug":"_4-2-\u5B57\u6BB5\u4E0D\u5B58\u5728-bool-must-not-exist","link":"#_4-2-\u5B57\u6BB5\u4E0D\u5B58\u5728-bool-must-not-exist","children":[]},{"level":3,"title":"4.3 id\u67E5\u8BE2:ids","slug":"_4-3-id\u67E5\u8BE2-ids","link":"#_4-3-id\u67E5\u8BE2-ids","children":[]},{"level":3,"title":"4.4 \u524D\u7F00:prefix","slug":"_4-4-\u524D\u7F00-prefix","link":"#_4-4-\u524D\u7F00-prefix","children":[]},{"level":3,"title":"4.5 \u5206\u8BCD\u5339\u914D:term","slug":"_4-5-\u5206\u8BCD\u5339\u914D-term","link":"#_4-5-\u5206\u8BCD\u5339\u914D-term","children":[]},{"level":3,"title":"4.6 \u591A\u4E2A\u5206\u8BCD\u5339\u914D:terms","slug":"_4-6-\u591A\u4E2A\u5206\u8BCD\u5339\u914D-terms","link":"#_4-6-\u591A\u4E2A\u5206\u8BCD\u5339\u914D-terms","children":[]},{"level":3,"title":"4.7 \u901A\u914D\u7B26:wildcard","slug":"_4-7-\u901A\u914D\u7B26-wildcard","link":"#_4-7-\u901A\u914D\u7B26-wildcard","children":[]},{"level":3,"title":"4.8 \u8303\u56F4:range","slug":"_4-8-\u8303\u56F4-range","link":"#_4-8-\u8303\u56F4-range","children":[]},{"level":3,"title":"4.9 \u6B63\u5219:regexp","slug":"_4-9-\u6B63\u5219-regexp","link":"#_4-9-\u6B63\u5219-regexp","children":[]},{"level":3,"title":"4.10 \u6A21\u7CCA\u5339\u914D:fuzzy","slug":"_4-10-\u6A21\u7CCA\u5339\u914D-fuzzy","link":"#_4-10-\u6A21\u7CCA\u5339\u914D-fuzzy","children":[]}]},{"level":2,"title":"5. \u805A\u5408\u67E5\u8BE2\u4E4BBucket\u805A\u5408","slug":"_5-\u805A\u5408\u67E5\u8BE2\u4E4Bbucket\u805A\u5408","link":"#_5-\u805A\u5408\u67E5\u8BE2\u4E4Bbucket\u805A\u5408","children":[{"level":3,"title":"5.1 \u6807\u51C6\u7684\u805A\u5408","slug":"_5-1-\u6807\u51C6\u7684\u805A\u5408","link":"#_5-1-\u6807\u51C6\u7684\u805A\u5408","children":[]},{"level":3,"title":"5.2 \u591A\u4E2A\u805A\u5408","slug":"_5-2-\u591A\u4E2A\u805A\u5408","link":"#_5-2-\u591A\u4E2A\u805A\u5408","children":[]},{"level":3,"title":"5.3 \u5D4C\u5957\u5206\u7EC4","slug":"_5-3-\u5D4C\u5957\u5206\u7EC4","link":"#_5-3-\u5D4C\u5957\u5206\u7EC4","children":[]},{"level":3,"title":"5.4 \u524D\u7F6E\u6761\u4EF6\u7684\u8FC7\u6EE4\uFF1Afilter","slug":"_5-4-\u524D\u7F6E\u6761\u4EF6\u7684\u8FC7\u6EE4-filter","link":"#_5-4-\u524D\u7F6E\u6761\u4EF6\u7684\u8FC7\u6EE4-filter","children":[]},{"level":3,"title":"5.5 \u5BF9filter\u8FDB\u884C\u5206\u7EC4\u805A\u5408\uFF1Afilters","slug":"_5-5-\u5BF9filter\u8FDB\u884C\u5206\u7EC4\u805A\u5408-filters","link":"#_5-5-\u5BF9filter\u8FDB\u884C\u5206\u7EC4\u805A\u5408-filters","children":[]},{"level":3,"title":"5.6 \u5BF9number\u7C7B\u578B\u805A\u5408\uFF1ARange","slug":"_5-6-\u5BF9number\u7C7B\u578B\u805A\u5408-range","link":"#_5-6-\u5BF9number\u7C7B\u578B\u805A\u5408-range","children":[]},{"level":3,"title":"5.7 \u5BF9\u65E5\u671F\u7C7B\u578B\u805A\u5408\uFF1ADate Range","slug":"_5-7-\u5BF9\u65E5\u671F\u7C7B\u578B\u805A\u5408-date-range","link":"#_5-7-\u5BF9\u65E5\u671F\u7C7B\u578B\u805A\u5408-date-range","children":[]},{"level":3,"title":"5.8 \u5BF9\u67F1\u72B6\u56FE\u529F\u80FD\uFF1AHistrogram","slug":"_5-8-\u5BF9\u67F1\u72B6\u56FE\u529F\u80FD-histrogram","link":"#_5-8-\u5BF9\u67F1\u72B6\u56FE\u529F\u80FD-histrogram","children":[]}]},{"level":2,"title":"6.\u5176\u4ED6\u64CD\u4F5C","slug":"_6-\u5176\u4ED6\u64CD\u4F5C","link":"#_6-\u5176\u4ED6\u64CD\u4F5C","children":[{"level":3,"title":"6.1 \u67E5\u627E\u5168\u90E8","slug":"_6-1-\u67E5\u627E\u5168\u90E8","link":"#_6-1-\u67E5\u627E\u5168\u90E8","children":[]},{"level":3,"title":"6.2 \u9AD8\u4EAE\u641C\u7D22","slug":"_6-2-\u9AD8\u4EAE\u641C\u7D22","link":"#_6-2-\u9AD8\u4EAE\u641C\u7D22","children":[]},{"level":3,"title":"6.3 \u5206\u8BCD\u5206\u6790","slug":"_6-3-\u5206\u8BCD\u5206\u6790","link":"#_6-3-\u5206\u8BCD\u5206\u6790","children":[]}]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":4.62,"words":1387},"filePathRelative":"db/es/elasticsearch-demo.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};