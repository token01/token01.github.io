const e=JSON.parse('{"key":"v-02cc3d51","path":"/java/thread/java-thread-x-lock-LockSupport-source.html","title":"JUC\u9501: LockSupport\u6E90\u7801\u5206\u6790","lang":"zh-CN","frontmatter":{"order":525,"category":["Java","\u5E76\u53D1"],"summary":"JUC\u9501: LockSupport\u6E90\u7801\u5206\u6790 1. \u7C7B\u7684\u5C5E\u6027 UNSAFE\u5B57\u6BB5\u8868\u793Asun.misc.Unsafe\u7C7B\uFF0C\u4E00\u822C\u7A0B\u5E8F\u4E2D\u4E0D\u5141\u8BB8\u76F4\u63A5\u8C03\u7528; \u800Clong\u578B\u7684\u8868\u793A\u5B9E\u4F8B\u5BF9\u8C61\u76F8\u5E94\u5B57\u6BB5\u5728\u5185\u5B58\u4E2D\u7684\u504F\u79FB\u5730\u5740\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BE5\u504F\u79FB\u5730\u5740\u83B7\u53D6\u6216\u8005\u8BBE\u7F6E\u8BE5\u5B57\u6BB5\u7684\u503C\u3002; 2. \u7C7B\u7684\u6784\u9020\u51FD\u6570 \u79C1\u6709\u6784\u9020\u51FD\u6570\uFF0C\u65E0\u6CD5\u88AB\u5B9E\u4F8B\u5316\u3002\u6240\u4EE5\u6240\u6709\u7684\u65B9\u6CD5\u90FD\u662F\u9759\u6001\u7684 3. Unsafe\u7C7B\u4E2D\u7684park\u548Cunpar","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/java/thread/java-thread-x-lock-LockSupport-source.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"JUC\u9501: LockSupport\u6E90\u7801\u5206\u6790"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u7C7B\u7684\u5C5E\u6027","slug":"_1-\u7C7B\u7684\u5C5E\u6027","link":"#_1-\u7C7B\u7684\u5C5E\u6027","children":[]},{"level":2,"title":"2. \u7C7B\u7684\u6784\u9020\u51FD\u6570","slug":"_2-\u7C7B\u7684\u6784\u9020\u51FD\u6570","link":"#_2-\u7C7B\u7684\u6784\u9020\u51FD\u6570","children":[]},{"level":2,"title":"3. Unsafe\u7C7B\u4E2D\u7684park\u548Cunpark\u51FD\u6570","slug":"_3-unsafe\u7C7B\u4E2D\u7684park\u548Cunpark\u51FD\u6570","link":"#_3-unsafe\u7C7B\u4E2D\u7684park\u548Cunpark\u51FD\u6570","children":[]},{"level":2,"title":"4. \u6838\u5FC3\u51FD\u6570\u5206\u6790","slug":"_4-\u6838\u5FC3\u51FD\u6570\u5206\u6790","link":"#_4-\u6838\u5FC3\u51FD\u6570\u5206\u6790","children":[{"level":3,"title":"4.1 park\u51FD\u6570","slug":"_4-1-park\u51FD\u6570","link":"#_4-1-park\u51FD\u6570","children":[]},{"level":3,"title":"4.2 \u65E0\u53C2\u91CD\u8F7D\u7248\u672C\uFF0Cpark()\u51FD\u6570","slug":"_4-2-\u65E0\u53C2\u91CD\u8F7D\u7248\u672C-park-\u51FD\u6570","link":"#_4-2-\u65E0\u53C2\u91CD\u8F7D\u7248\u672C-park-\u51FD\u6570","children":[]},{"level":3,"title":"4.3 parkNanos\u51FD\u6570","slug":"_4-3-parknanos\u51FD\u6570","link":"#_4-3-parknanos\u51FD\u6570","children":[]},{"level":3,"title":"4.4 parkUntil\u51FD\u6570","slug":"_4-4-parkuntil\u51FD\u6570","link":"#_4-4-parkuntil\u51FD\u6570","children":[]},{"level":3,"title":"4.5 unpark\u51FD\u6570","slug":"_4-5-unpark\u51FD\u6570","link":"#_4-5-unpark\u51FD\u6570","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":5.03,"words":1508},"filePathRelative":"java/thread/java-thread-x-lock-LockSupport-source.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
