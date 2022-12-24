const e=JSON.parse('{"key":"v-7d1bcb32","path":"/think/deepImpression/online-oom-thread-oom2.html","title":"\u7EBF\u4E0AOOM-\u8BB0\u4E00\u6B21OOM\u6392\u67E5\u8FC7\u7A0B","lang":"zh-CN","frontmatter":{"order":120,"category":["OOM"],"summary":"\u7EBF\u4E0AOOM-\u8BB0\u4E00\u6B21OOM\u6392\u67E5\u8FC7\u7A0B 1. \u80CC\u666F \u9879\u76EE\u4E2D\u6709\u4E2A\u9700\u6C42\u662F\u5C06\u722C\u866B\u722C\u53D6\u5230\u7684\u7F51\u9875\u6570\u636E\uFF08\u5B58\u653E\u5728mongodb\uFF09, \u505A\u6570\u636E\u6E05\u7406\u540E\u653E\u5165\u641C\u7D22\u5F15\u64CE\uFF08solr\uFF09\u4E2D\u3002\u603B\u5171350w\u7684\u7F51\u9875\u6570\u636E\uFF0C\u5982\u679C\u6309\u6B63\u5E38\u901F\u5EA6\u540C\u6B6510\u4E2A\u5C0F\u65F6\u5373\u53EF\u5B8C\u6210\u3002\u4F46\u6211\u4EEC\u5B9E\u9645\u6D4B\u8BD5\u53D1\u73B0\uFF0C\u968F\u7740\u65F6\u95F4\u63A8\u79FB\uFF0C\u540C\u6B65\u65F6\u95F4\u8D8A\u6765\u8D8A\u957F\uFF0C\u6302\u4E86\u4E00\u5929\u53EA\u540C\u6B65\u4E86100w\u6570\u636E\u3002\u4E14\u540E\u9762\u8D8A\u6765\u8D8A\u6162\u3002\u9886\u5BFC\u627E\u5230\u6211\uFF0C\u8BA9\u6211\u5E2E\u5FD9\u6392\u67E5\u89E3\u51B3 2. \u89E3\u51B3\u4E00: m","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/think/deepImpression/online-oom-thread-oom2.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"\u7EBF\u4E0AOOM-\u8BB0\u4E00\u6B21OOM\u6392\u67E5\u8FC7\u7A0B"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u80CC\u666F","slug":"_1-\u80CC\u666F","link":"#_1-\u80CC\u666F","children":[]},{"level":2,"title":"2. \u89E3\u51B3\u4E00: mongodb \u5927\u6570\u636E\u91CF\u5206\u9875\u67E5\u8BE2\u6548\u7387\u95EE\u9898","slug":"_2-\u89E3\u51B3\u4E00-mongodb-\u5927\u6570\u636E\u91CF\u5206\u9875\u67E5\u8BE2\u6548\u7387\u95EE\u9898","link":"#_2-\u89E3\u51B3\u4E00-mongodb-\u5927\u6570\u636E\u91CF\u5206\u9875\u67E5\u8BE2\u6548\u7387\u95EE\u9898","children":[{"level":3,"title":"2.1 \u89E3\u51B3\u65B9\u68481\uFF1A\u901A\u8FC7_id \u6BD4\u8F83\u53D6\u5206\u9875","slug":"_2-1-\u89E3\u51B3\u65B9\u68481-\u901A\u8FC7-id-\u6BD4\u8F83\u53D6\u5206\u9875","link":"#_2-1-\u89E3\u51B3\u65B9\u68481-\u901A\u8FC7-id-\u6BD4\u8F83\u53D6\u5206\u9875","children":[]},{"level":3,"title":"2.2 \u89E3\u51B3\u65B9\u68482\uFF1A\u901A\u8FC7\u6E38\u6807\u6765\u67E5\u8BE2","slug":"_2-2-\u89E3\u51B3\u65B9\u68482-\u901A\u8FC7\u6E38\u6807\u6765\u67E5\u8BE2","link":"#_2-2-\u89E3\u51B3\u65B9\u68482-\u901A\u8FC7\u6E38\u6807\u6765\u67E5\u8BE2","children":[]},{"level":3,"title":"2.3 \u4F18\u5316\u6210\u679C","slug":"_2-3-\u4F18\u5316\u6210\u679C","link":"#_2-3-\u4F18\u5316\u6210\u679C","children":[]}]},{"level":2,"title":"3. OOM\u5F15\u53D1\uFF1A\u901A\u8FC7\u591A\u7EBF\u7A0B\u6765\u4F18\u5316","slug":"_3-oom\u5F15\u53D1-\u901A\u8FC7\u591A\u7EBF\u7A0B\u6765\u4F18\u5316","link":"#_3-oom\u5F15\u53D1-\u901A\u8FC7\u591A\u7EBF\u7A0B\u6765\u4F18\u5316","children":[{"level":3,"title":"3.1 OOM: GC overhead limit exceeded","slug":"_3-1-oom-gc-overhead-limit-exceeded","link":"#_3-1-oom-gc-overhead-limit-exceeded","children":[]},{"level":3,"title":"3.2 \u67E5\u770B GC-Roots \u5F15\u7528\u94FE","slug":"_3-2-\u67E5\u770B-gc-roots-\u5F15\u7528\u94FE","link":"#_3-2-\u67E5\u770B-gc-roots-\u5F15\u7528\u94FE","children":[]},{"level":3,"title":"3.3 \u5206\u6790\u6211\u4EEC\u7684\u4EE3\u7801\uFF0C\u67E5\u627E\u539F\u56E0","slug":"_3-3-\u5206\u6790\u6211\u4EEC\u7684\u4EE3\u7801-\u67E5\u627E\u539F\u56E0","link":"#_3-3-\u5206\u6790\u6211\u4EEC\u7684\u4EE3\u7801-\u67E5\u627E\u539F\u56E0","children":[]},{"level":3,"title":"3.4 \u4F18\u5316\u6210\u529F","slug":"_3-4-\u4F18\u5316\u6210\u529F","link":"#_3-4-\u4F18\u5316\u6210\u529F","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":4.19,"words":1257},"filePathRelative":"think/deepImpression/online-oom-thread-oom2.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
