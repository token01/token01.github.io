const e=JSON.parse('{"key":"v-51169917","path":"/java/base/java-basic-x-generic.html","title":"Java \u57FA\u7840 - \u6CDB\u578B\u673A\u5236\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":30,"category":["Java"],"summary":"Java \u57FA\u7840 - \u6CDB\u578B\u673A\u5236\u8BE6\u89E3 \\" Java\u6CDB\u578B\u8FD9\u4E2A\u7279\u6027\u662F\u4ECEJDK 1.5\u624D\u5F00\u59CB\u52A0\u5165\u7684\uFF0C\u56E0\u6B64\u4E3A\u4E86\u517C\u5BB9\u4E4B\u524D\u7684\u7248\u672C\uFF0CJava\u6CDB\u578B\u7684\u5B9E\u73B0\u91C7\u53D6\u4E86\u201C\u4F2A\u6CDB\u578B\u201D\u7684\u7B56\u7565\uFF0C\u5373Java\u5728\u8BED\u6CD5\u4E0A\u652F\u6301\u6CDB\u578B\uFF0C\u4F46\u662F\u5728\u7F16\u8BD1\u9636\u6BB5\u4F1A\u8FDB\u884C\u6240\u8C13\u7684\u201C\u7C7B\u578B\u64E6\u9664\u201D\uFF08Type Erasure\uFF09\uFF0C\u5C06\u6240\u6709\u7684\u6CDB\u578B\u8868\u793A\uFF08\u5C16\u62EC\u53F7\u4E2D\u7684\u5185\u5BB9\uFF09\u90FD\u66FF\u6362\u4E3A\u5177\u4F53\u7684\u7C7B\u578B\uFF08\u5176\u5BF9\u5E94\u7684\u539F\u751F\u6001\u7C7B\u578B\uFF09\uFF0C\u5C31\u50CF\u5B8C\u5168\u6CA1\u6709\u6CDB\u578B\u4E00\u6837\u3002\u672C\u6587\u7EFC\u5408\u591A","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/java/base/java-basic-x-generic.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"Java \u57FA\u7840 - \u6CDB\u578B\u673A\u5236\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u4E3A\u4EC0\u4E48\u4F1A\u5F15\u5165\u6CDB\u578B","slug":"_1-\u4E3A\u4EC0\u4E48\u4F1A\u5F15\u5165\u6CDB\u578B","link":"#_1-\u4E3A\u4EC0\u4E48\u4F1A\u5F15\u5165\u6CDB\u578B","children":[]},{"level":2,"title":"2. \u6CDB\u578B\u7684\u57FA\u672C\u4F7F\u7528","slug":"_2-\u6CDB\u578B\u7684\u57FA\u672C\u4F7F\u7528","link":"#_2-\u6CDB\u578B\u7684\u57FA\u672C\u4F7F\u7528","children":[{"level":3,"title":"2.1 \u6CDB\u578B\u7C7B","slug":"_2-1-\u6CDB\u578B\u7C7B","link":"#_2-1-\u6CDB\u578B\u7C7B","children":[]},{"level":3,"title":"2.2 \u6CDB\u578B\u63A5\u53E3","slug":"_2-2-\u6CDB\u578B\u63A5\u53E3","link":"#_2-2-\u6CDB\u578B\u63A5\u53E3","children":[]},{"level":3,"title":"2.3 \u6CDB\u578B\u65B9\u6CD5","slug":"_2-3-\u6CDB\u578B\u65B9\u6CD5","link":"#_2-3-\u6CDB\u578B\u65B9\u6CD5","children":[]},{"level":3,"title":"2.4 \u6CDB\u578B\u7684\u4E0A\u4E0B\u9650","slug":"_2-4-\u6CDB\u578B\u7684\u4E0A\u4E0B\u9650","link":"#_2-4-\u6CDB\u578B\u7684\u4E0A\u4E0B\u9650","children":[]},{"level":3,"title":"2.5 \u6CDB\u578B\u6570\u7EC4","slug":"_2-5-\u6CDB\u578B\u6570\u7EC4","link":"#_2-5-\u6CDB\u578B\u6570\u7EC4","children":[]}]},{"level":2,"title":"3. \u6DF1\u5165\u7406\u89E3\u6CDB\u578B","slug":"_3-\u6DF1\u5165\u7406\u89E3\u6CDB\u578B","link":"#_3-\u6DF1\u5165\u7406\u89E3\u6CDB\u578B","children":[{"level":3,"title":"3.1 \u5982\u4F55\u7406\u89E3Java\u4E2D\u7684\u6CDB\u578B\u662F\u4F2A\u6CDB\u578B\uFF1F\u6CDB\u578B\u4E2D\u7C7B\u578B\u64E6\u9664","slug":"_3-1-\u5982\u4F55\u7406\u89E3java\u4E2D\u7684\u6CDB\u578B\u662F\u4F2A\u6CDB\u578B-\u6CDB\u578B\u4E2D\u7C7B\u578B\u64E6\u9664","link":"#_3-1-\u5982\u4F55\u7406\u89E3java\u4E2D\u7684\u6CDB\u578B\u662F\u4F2A\u6CDB\u578B-\u6CDB\u578B\u4E2D\u7C7B\u578B\u64E6\u9664","children":[]},{"level":3,"title":"3.2 \u5982\u4F55\u8BC1\u660E\u7C7B\u578B\u7684\u64E6\u9664\u5462\uFF1F","slug":"_3-2-\u5982\u4F55\u8BC1\u660E\u7C7B\u578B\u7684\u64E6\u9664\u5462","link":"#_3-2-\u5982\u4F55\u8BC1\u660E\u7C7B\u578B\u7684\u64E6\u9664\u5462","children":[]},{"level":3,"title":"3.3 \u5982\u4F55\u7406\u89E3\u7C7B\u578B\u64E6\u9664\u540E\u4FDD\u7559\u7684\u539F\u59CB\u7C7B\u578B?","slug":"_3-3-\u5982\u4F55\u7406\u89E3\u7C7B\u578B\u64E6\u9664\u540E\u4FDD\u7559\u7684\u539F\u59CB\u7C7B\u578B","link":"#_3-3-\u5982\u4F55\u7406\u89E3\u7C7B\u578B\u64E6\u9664\u540E\u4FDD\u7559\u7684\u539F\u59CB\u7C7B\u578B","children":[]},{"level":3,"title":"3.4 \u5982\u4F55\u7406\u89E3\u6CDB\u578B\u7684\u7F16\u8BD1\u671F\u68C0\u67E5\uFF1F","slug":"_3-4-\u5982\u4F55\u7406\u89E3\u6CDB\u578B\u7684\u7F16\u8BD1\u671F\u68C0\u67E5","link":"#_3-4-\u5982\u4F55\u7406\u89E3\u6CDB\u578B\u7684\u7F16\u8BD1\u671F\u68C0\u67E5","children":[]},{"level":3,"title":"3.5 \u5982\u4F55\u7406\u89E3\u6CDB\u578B\u7684\u591A\u6001\uFF1F\u6CDB\u578B\u7684\u6865\u63A5\u65B9\u6CD5","slug":"_3-5-\u5982\u4F55\u7406\u89E3\u6CDB\u578B\u7684\u591A\u6001-\u6CDB\u578B\u7684\u6865\u63A5\u65B9\u6CD5","link":"#_3-5-\u5982\u4F55\u7406\u89E3\u6CDB\u578B\u7684\u591A\u6001-\u6CDB\u578B\u7684\u6865\u63A5\u65B9\u6CD5","children":[]},{"level":3,"title":"3.6 \u5982\u4F55\u7406\u89E3\u57FA\u672C\u7C7B\u578B\u4E0D\u80FD\u4F5C\u4E3A\u6CDB\u578B\u7C7B\u578B\uFF1F","slug":"_3-6-\u5982\u4F55\u7406\u89E3\u57FA\u672C\u7C7B\u578B\u4E0D\u80FD\u4F5C\u4E3A\u6CDB\u578B\u7C7B\u578B","link":"#_3-6-\u5982\u4F55\u7406\u89E3\u57FA\u672C\u7C7B\u578B\u4E0D\u80FD\u4F5C\u4E3A\u6CDB\u578B\u7C7B\u578B","children":[]},{"level":3,"title":"3.7 \u5982\u4F55\u7406\u89E3\u6CDB\u578B\u7C7B\u578B\u4E0D\u80FD\u5B9E\u4F8B\u5316\uFF1F","slug":"_3-7-\u5982\u4F55\u7406\u89E3\u6CDB\u578B\u7C7B\u578B\u4E0D\u80FD\u5B9E\u4F8B\u5316","link":"#_3-7-\u5982\u4F55\u7406\u89E3\u6CDB\u578B\u7C7B\u578B\u4E0D\u80FD\u5B9E\u4F8B\u5316","children":[]},{"level":3,"title":"3.8 \u6CDB\u578B\u6570\u7EC4\uFF1A\u80FD\u4E0D\u80FD\u91C7\u7528\u5177\u4F53\u7684\u6CDB\u578B\u7C7B\u578B\u8FDB\u884C\u521D\u59CB\u5316\uFF1F","slug":"_3-8-\u6CDB\u578B\u6570\u7EC4-\u80FD\u4E0D\u80FD\u91C7\u7528\u5177\u4F53\u7684\u6CDB\u578B\u7C7B\u578B\u8FDB\u884C\u521D\u59CB\u5316","link":"#_3-8-\u6CDB\u578B\u6570\u7EC4-\u80FD\u4E0D\u80FD\u91C7\u7528\u5177\u4F53\u7684\u6CDB\u578B\u7C7B\u578B\u8FDB\u884C\u521D\u59CB\u5316","children":[]},{"level":3,"title":"3.9 \u6CDB\u578B\u6570\u7EC4\uFF1A\u5982\u4F55\u6B63\u786E\u7684\u521D\u59CB\u5316\u6CDB\u578B\u6570\u7EC4\u5B9E\u4F8B\uFF1F","slug":"_3-9-\u6CDB\u578B\u6570\u7EC4-\u5982\u4F55\u6B63\u786E\u7684\u521D\u59CB\u5316\u6CDB\u578B\u6570\u7EC4\u5B9E\u4F8B","link":"#_3-9-\u6CDB\u578B\u6570\u7EC4-\u5982\u4F55\u6B63\u786E\u7684\u521D\u59CB\u5316\u6CDB\u578B\u6570\u7EC4\u5B9E\u4F8B","children":[]},{"level":3,"title":"3.10 \u5982\u4F55\u7406\u89E3\u6CDB\u578B\u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5\u548C\u9759\u6001\u53D8\u91CF\uFF1F","slug":"_3-10-\u5982\u4F55\u7406\u89E3\u6CDB\u578B\u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5\u548C\u9759\u6001\u53D8\u91CF","link":"#_3-10-\u5982\u4F55\u7406\u89E3\u6CDB\u578B\u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5\u548C\u9759\u6001\u53D8\u91CF","children":[]},{"level":3,"title":"3.11 \u5982\u4F55\u7406\u89E3\u5F02\u5E38\u4E2D\u4F7F\u7528\u6CDB\u578B\uFF1F","slug":"_3-11-\u5982\u4F55\u7406\u89E3\u5F02\u5E38\u4E2D\u4F7F\u7528\u6CDB\u578B","link":"#_3-11-\u5982\u4F55\u7406\u89E3\u5F02\u5E38\u4E2D\u4F7F\u7528\u6CDB\u578B","children":[]},{"level":3,"title":"3.12 \u5982\u4F55\u83B7\u53D6\u6CDB\u578B\u7684\u53C2\u6570\u7C7B\u578B\uFF1F","slug":"_3-12-\u5982\u4F55\u83B7\u53D6\u6CDB\u578B\u7684\u53C2\u6570\u7C7B\u578B","link":"#_3-12-\u5982\u4F55\u83B7\u53D6\u6CDB\u578B\u7684\u53C2\u6570\u7C7B\u578B","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":31.34,"words":9403},"filePathRelative":"java/base/java-basic-x-generic.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
