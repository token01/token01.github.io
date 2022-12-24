const e=JSON.parse('{"key":"v-87f24f22","path":"/db/mysql/sql-mysql-b-log.html","title":"MySQL - \u4E09\u5927\u65E5\u5FD7(Redo Log\u3001Undo Log\u3001Bin Log)","lang":"zh-CN","frontmatter":{"order":320,"category":["\u6570\u636E\u5E93","Mysql"],"summary":"MySQL - \u4E09\u5927\u65E5\u5FD7(Redo Log\u3001Undo Log\u3001Bin Log) 1. \u80CC\u666F MySQL\u5B9E\u73B0\u4E8B\u52A1\u3001\u5D29\u6E83\u6062\u590D\u3001\u96C6\u7FA4\u7684\u4E3B\u4ECE\u590D\u5236\uFF0C\u5E95\u5C42\u90FD\u79BB\u4E0D\u5F00\u65E5\u5FD7\uFF0C\u6240\u4EE5\u65E5\u5FD7\u662FMySQL\u7684\u7CBE\u534E\u6240\u5728\u3002\u53EA\u6709\u4E86\u89E3MySQL\u65E5\u5FD7\uFF0C\u624D\u7B97\u662F\u5F7B\u5E95\u641E\u61C2MySQL\u3002 MySQL\u7684\u4E09\u5927\u65E5\u5FD7\u7CFB\u7EDF\uFF0CRedo Log\uFF08\u91CD\u505A\u65E5\u5FD7\uFF09\u3001Undo Log\uFF08\u6062\u590D\u65E5\u5FD7\uFF09\u3001Bin Log\uFF08\u5907\u4EFD\u65E5\u5FD7\uFF09\u3002 2.","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/db/mysql/sql-mysql-b-log.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"MySQL - \u4E09\u5927\u65E5\u5FD7(Redo Log\u3001Undo Log\u3001Bin Log)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u80CC\u666F","slug":"_1-\u80CC\u666F","link":"#_1-\u80CC\u666F","children":[]},{"level":2,"title":"2. Redo Log\uFF08\u91CD\u505A\u65E5\u5FD7\uFF09","slug":"_2-redo-log-\u91CD\u505A\u65E5\u5FD7","link":"#_2-redo-log-\u91CD\u505A\u65E5\u5FD7","children":[{"level":3,"title":"2.1 Redo Log\u7684\u5185\u5BB9\u4E0E\u4F5C\u7528","slug":"_2-1-redo-log\u7684\u5185\u5BB9\u4E0E\u4F5C\u7528","link":"#_2-1-redo-log\u7684\u5185\u5BB9\u4E0E\u4F5C\u7528","children":[]},{"level":3,"title":"2.2 \u4EC0\u4E48\u65F6\u5019\u5199\u5165Redo Log\uFF1F","slug":"_2-2-\u4EC0\u4E48\u65F6\u5019\u5199\u5165redo-log","link":"#_2-2-\u4EC0\u4E48\u65F6\u5019\u5199\u5165redo-log","children":[]},{"level":3,"title":"2.3 Redo Log\u5237\u76D8\u89C4\u5219","slug":"_2-3-redo-log\u5237\u76D8\u89C4\u5219","link":"#_2-3-redo-log\u5237\u76D8\u89C4\u5219","children":[]}]},{"level":2,"title":"3. Undo Log\uFF08\u56DE\u6EDA\u65E5\u5FD7\uFF09","slug":"_3-undo-log-\u56DE\u6EDA\u65E5\u5FD7","link":"#_3-undo-log-\u56DE\u6EDA\u65E5\u5FD7","children":[{"level":3,"title":"3.1 Undo Log\u7684\u5185\u5BB9\u4E0E\u4F5C\u7528","slug":"_3-1-undo-log\u7684\u5185\u5BB9\u4E0E\u4F5C\u7528","link":"#_3-1-undo-log\u7684\u5185\u5BB9\u4E0E\u4F5C\u7528","children":[]},{"level":3,"title":"3.2 Undo Log\u5982\u4F55\u56DE\u6EDA\u5230\u4E0A\u4E00\u4E2A\u7248\u672C","slug":"_3-2-undo-log\u5982\u4F55\u56DE\u6EDA\u5230\u4E0A\u4E00\u4E2A\u7248\u672C","link":"#_3-2-undo-log\u5982\u4F55\u56DE\u6EDA\u5230\u4E0A\u4E00\u4E2A\u7248\u672C","children":[]}]},{"level":2,"title":"4. Bin Log\uFF08\u5907\u4EFD\u65E5\u5FD7\uFF09","slug":"_4-bin-log-\u5907\u4EFD\u65E5\u5FD7","link":"#_4-bin-log-\u5907\u4EFD\u65E5\u5FD7","children":[{"level":3,"title":"4.1 Bin Log\u7684\u5185\u5BB9\u4E0E\u4F5C\u7528","slug":"_4-1-bin-log\u7684\u5185\u5BB9\u4E0E\u4F5C\u7528","link":"#_4-1-bin-log\u7684\u5185\u5BB9\u4E0E\u4F5C\u7528","children":[]},{"level":3,"title":"4.2 \u4EC0\u4E48\u65F6\u5019\u5199\u5165Bin Log\uFF1F","slug":"_4-2-\u4EC0\u4E48\u65F6\u5019\u5199\u5165bin-log","link":"#_4-2-\u4EC0\u4E48\u65F6\u5019\u5199\u5165bin-log","children":[]}]},{"level":2,"title":"5. \u77E5\u8BC6\u70B9\u603B\u7ED3","slug":"_5-\u77E5\u8BC6\u70B9\u603B\u7ED3","link":"#_5-\u77E5\u8BC6\u70B9\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":4.75,"words":1425},"filePathRelative":"db/mysql/sql-mysql-b-log.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
