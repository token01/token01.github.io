const e=JSON.parse(`{"key":"v-90f418a4","path":"/arch/distributed/theory/ms-conway-law.html","title":"\u5FAE\u670D\u52A1\u57FA\u7840-\u5EB7\u5A01\u5B9A\u5F8B","lang":"zh-CN","frontmatter":{"order":40,"category":["\u67B6\u6784"],"summary":"\u5FAE\u670D\u52A1\u57FA\u7840-\u5EB7\u5A01\u5B9A\u5F8B \\"\u5FAE\u670D\u52A1\u8FD9\u4E2A\u6982\u5FF5\u5F88\u65E9\u5C31\u63D0\u51FA\u4E86\uFF0C \u771F\u6B63\u706B\u8D77\u6765\u662F\u57282016\u5E74\u5DE6\u53F3\uFF0C\u800C\u5EB7\u5A01\u5B9A\u5F8B(Conway's Law)\u5C31\u662F\u5FAE\u670D\u52A1\u7406\u8BBA\u57FA\u7840\u3002\\" 1. \u80CC\u666F \u5FAE\u670D\u52A1\u662F\u6700\u8FD1\u975E\u5E38\u706B\u70ED\u7684\u65B0\u6982\u5FF5\uFF0C\u5927\u5BB6\u90FD\u5728\u8FFD\uFF0C\u4E5F\u90FD\u89C9\u5F97\u5F88\u5BF9\uFF0C\u4F46\u662F\u4F3C\u4E4E\u6CA1\u6709\u5F88\u5145\u8DB3\u7684\u7406\u8BBA\u57FA\u7840\u8BF4\u660E\u8FD9\u662F\u6B63\u786E\u7684\uFF0C\u7ED9\u4EBA\u7684\u611F\u89C9\u662F \u4E0D\u660E\u89C9\u5389 \u3002\u524D\u6BB5\u65F6\u95F4\u770B\u4E86Mike Amundsen\u300A\u8FDC\u8DDD\u79BB\u6761\u4EF6\u4E0B\u7684\u5EB7\u5A01\u5B9A\u5F8B\u2014\u2014\u5206\u5E03\u5F0F\u4E16\u754C","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/arch/distributed/theory/ms-conway-law.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"\u5FAE\u670D\u52A1\u57FA\u7840-\u5EB7\u5A01\u5B9A\u5F8B"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u80CC\u666F","slug":"_1-\u80CC\u666F","link":"#_1-\u80CC\u666F","children":[]},{"level":2,"title":"2. \u5EB7\u5A01\u5B9A\u5F8B\u8BE6\u7EC6\u4ECB\u7ECD","slug":"_2-\u5EB7\u5A01\u5B9A\u5F8B\u8BE6\u7EC6\u4ECB\u7ECD","link":"#_2-\u5EB7\u5A01\u5B9A\u5F8B\u8BE6\u7EC6\u4ECB\u7ECD","children":[]},{"level":2,"title":"3.\u5B9A\u5F8B\u8BF4\u660E","slug":"_3-\u5B9A\u5F8B\u8BF4\u660E","link":"#_3-\u5B9A\u5F8B\u8BF4\u660E","children":[{"level":3,"title":"3.1 \u7B2C\u4E00\u5B9A\u5F8B\uFF1A","slug":"_3-1-\u7B2C\u4E00\u5B9A\u5F8B","link":"#_3-1-\u7B2C\u4E00\u5B9A\u5F8B","children":[]},{"level":3,"title":"3.2 \u7B2C\u4E8C\u5B9A\u5F8B","slug":"_3-2-\u7B2C\u4E8C\u5B9A\u5F8B","link":"#_3-2-\u7B2C\u4E8C\u5B9A\u5F8B","children":[]},{"level":3,"title":"3.3 \u7B2C\u4E09\u5B9A\u5F8B","slug":"_3-3-\u7B2C\u4E09\u5B9A\u5F8B","link":"#_3-3-\u7B2C\u4E09\u5B9A\u5F8B","children":[]},{"level":3,"title":"3.4 \u7B2C\u56DB\u5B9A\u5F8B","slug":"_3-4-\u7B2C\u56DB\u5B9A\u5F8B","link":"#_3-4-\u7B2C\u56DB\u5B9A\u5F8B","children":[]}]},{"level":2,"title":"4. \u5EB7\u5A01\u5B9A\u5F8B\u5982\u4F55\u89E3\u91CA\u5FAE\u670D\u52A1\u7684\u5408\u7406\u6027","slug":"_4-\u5EB7\u5A01\u5B9A\u5F8B\u5982\u4F55\u89E3\u91CA\u5FAE\u670D\u52A1\u7684\u5408\u7406\u6027","link":"#_4-\u5EB7\u5A01\u5B9A\u5F8B\u5982\u4F55\u89E3\u91CA\u5FAE\u670D\u52A1\u7684\u5408\u7406\u6027","children":[{"level":3,"title":"4.1 \u5982\u4F55\u5960\u5B9A\u4E86\u5FAE\u670D\u52A1\u67B6\u6784\u7684\u7406\u8BBA\u57FA\u7840","slug":"_4-1-\u5982\u4F55\u5960\u5B9A\u4E86\u5FAE\u670D\u52A1\u67B6\u6784\u7684\u7406\u8BBA\u57FA\u7840","link":"#_4-1-\u5982\u4F55\u5960\u5B9A\u4E86\u5FAE\u670D\u52A1\u67B6\u6784\u7684\u7406\u8BBA\u57FA\u7840","children":[]},{"level":3,"title":"4.2 \u5EB7\u5A01\u7684\u5B9E\u8DF5\u610F\u4E49","slug":"_4-2-\u5EB7\u5A01\u7684\u5B9E\u8DF5\u610F\u4E49","link":"#_4-2-\u5EB7\u5A01\u7684\u5B9E\u8DF5\u610F\u4E49","children":[]},{"level":3,"title":"4.3 \u5EB7\u5A01\u7406\u8BBA\u4E0B\u7684\u5FAE\u670D\u52A1\u8BE5\u662F\u600E\u4E48\u6837\u7684","slug":"_4-3-\u5EB7\u5A01\u7406\u8BBA\u4E0B\u7684\u5FAE\u670D\u52A1\u8BE5\u662F\u600E\u4E48\u6837\u7684","link":"#_4-3-\u5EB7\u5A01\u7406\u8BBA\u4E0B\u7684\u5FAE\u670D\u52A1\u8BE5\u662F\u600E\u4E48\u6837\u7684","children":[]}]},{"level":2,"title":"5. \u603B\u7ED3","slug":"_5-\u603B\u7ED3","link":"#_5-\u603B\u7ED3","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":12.37,"words":3711},"filePathRelative":"arch/distributed/theory/ms-conway-law.md","localizedDate":"2022\u5E7412\u670824\u65E5"}`);export{e as data};
