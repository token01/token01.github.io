const e=JSON.parse(`{"key":"v-84fdf052","path":"/db/mysql/mysql-x-optimize-like.html","title":"like\u6A21\u7CCA\u67E5\u8BE2\u4F18\u5316","lang":"zh-CN","frontmatter":{"summary":"like\u6A21\u7CCA\u67E5\u8BE2\u4F18\u5316 1. \u80CC\u666F \u5728\u4F7F\u7528mysql\u8FDB\u884C\u6A21\u7CCA\u67E5\u8BE2\u7684\u65F6\u5019\uFF0C\u5F88\u81EA\u5BB9\u7684\u4F1A\u7528\u5230 like \u8BED\u53E5\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5728\u6570\u91CF\u5C0F\u7684\u65F6\u5019\uFF0C\u4E0D\u5BB9\u6613\u770B\u51FA\u67E5\u8BE2\u6548\u7387\uFF0C\u4F46\u5728\u6570\u636E\u91CF\u8FBE\u5230\u767E\u4E07\u7EA7\uFF0C\u5343\u4E07\u7EA7\u7684\u65F6\u5019\uFF0C\u67E5\u8BE2\u7684\u6548\u7387\u5C31\u5F88\u5BB9\u6613\u663E\u73B0\u51FA\u6765\u3002\u8FD9\u4E2A\u65F6\u5019\u67E5\u8BE2\u7684\u6548\u7387\u5C31\u663E\u5F97\u5F88\u91CD\u8981\uFF01 \u4E00\u822C\u60C5\u51B5\u4E0Blike\u6A21\u7CCA\u67E5\u8BE2\u7684\u5199\u6CD5\u4E3A\uFF08field\u5DF2\u5EFA\u7ACB\u7D22\u5F15\uFF09 \u4E0A\u9762\u7684\u8BED\u53E5\u7528explain\u89E3\u91CA\u6765\u770B\uFF0CSQL\u8BED\u53E5\u5E76\u672A\u7528","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/db/mysql/mysql-x-optimize-like.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"like\u6A21\u7CCA\u67E5\u8BE2\u4F18\u5316"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u80CC\u666F","slug":"_1-\u80CC\u666F","link":"#_1-\u80CC\u666F","children":[]},{"level":2,"title":"2. \u5BF9\u7167\u7EC4","slug":"_2-\u5BF9\u7167\u7EC4","link":"#_2-\u5BF9\u7167\u7EC4","children":[]},{"level":2,"title":"3. \u89E3\u51B3\u65B9\u6848","slug":"_3-\u89E3\u51B3\u65B9\u6848","link":"#_3-\u89E3\u51B3\u65B9\u6848","children":[{"level":3,"title":"3.1 LOCATE\uFF08'substr',str,pos\uFF09\u65B9\u6CD5","slug":"_3-1-locate-substr-str-pos-\u65B9\u6CD5","link":"#_3-1-locate-substr-str-pos-\u65B9\u6CD5","children":[]},{"level":3,"title":"3.2 POSITION('substr' IN field)\u65B9\u6CD5","slug":"_3-2-position-substr-in-field-\u65B9\u6CD5","link":"#_3-2-position-substr-in-field-\u65B9\u6CD5","children":[]},{"level":3,"title":"3.3 INSTR(str,'substr')\u65B9\u6CD5","slug":"_3-3-instr-str-substr-\u65B9\u6CD5","link":"#_3-3-instr-str-substr-\u65B9\u6CD5","children":[]},{"level":3,"title":"3.4 FIND_IN_SET(str1,str2):","slug":"_3-4-find-in-set-str1-str2","link":"#_3-4-find-in-set-str1-str2","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":1.73,"words":518},"filePathRelative":"db/mysql/mysql-x-optimize-like.md","localizedDate":"2022\u5E7412\u670824\u65E5"}`);export{e as data};
