const e=JSON.parse('{"key":"v-53ba6f7e","path":"/java/thread/java-thread-x-theorty.html","title":"ReentrantLock\u6E90\u7801\u5206\u6790(\u4E8C)-\u83B7\u53D6\u9501\u7EC6\u8282","lang":"zh-CN","frontmatter":{"summary":"ReentrantLock\u6E90\u7801\u5206\u6790(\u4E8C)-\u83B7\u53D6\u9501\u7EC6\u8282 1. ReentrantLock \u4E2D\u7EBF\u7A0B\u52A0\u5165\u7B49\u5F85\u961F\u5217 1.1 \u52A0\u5165\u961F\u5217\u7684\u65F6\u673A \u5F53\u6267\u884CAcquire(1)\u65F6\uFF0C\u4F1A\u901A\u8FC7tryAcquire\u83B7\u53D6\u9501\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u83B7\u53D6\u9501\u5931\u8D25\uFF0C\u5C31\u4F1A\u8C03\u7528 addWaiter\u52A0\u5165\u5230\u7B49\u5F85\u961F\u5217\u4E2D\u53BB\u3002 \u5728AQS \u4E2D \u5728 ReentrantLock 1.2 \u5982\u4F55\u52A0\u5165\u961F\u5217 \u83B7\u53D6\u9501\u5931\u8D25\u540E\uFF0C\u4F1A","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/java/thread/java-thread-x-theorty.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"ReentrantLock\u6E90\u7801\u5206\u6790(\u4E8C)-\u83B7\u53D6\u9501\u7EC6\u8282"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. ReentrantLock \u4E2D\u7EBF\u7A0B\u52A0\u5165\u7B49\u5F85\u961F\u5217","slug":"_1-reentrantlock-\u4E2D\u7EBF\u7A0B\u52A0\u5165\u7B49\u5F85\u961F\u5217","link":"#_1-reentrantlock-\u4E2D\u7EBF\u7A0B\u52A0\u5165\u7B49\u5F85\u961F\u5217","children":[{"level":3,"title":"1.1 \u52A0\u5165\u961F\u5217\u7684\u65F6\u673A","slug":"_1-1-\u52A0\u5165\u961F\u5217\u7684\u65F6\u673A","link":"#_1-1-\u52A0\u5165\u961F\u5217\u7684\u65F6\u673A","children":[]},{"level":3,"title":"1.2 \u5982\u4F55\u52A0\u5165\u961F\u5217","slug":"_1-2-\u5982\u4F55\u52A0\u5165\u961F\u5217","link":"#_1-2-\u5982\u4F55\u52A0\u5165\u961F\u5217","children":[]},{"level":3,"title":"1.3 \u7EBF\u7A0B\u83B7\u53D6\u9501 \u8FC7\u7A0B\u603B\u7ED3","slug":"_1-3-\u7EBF\u7A0B\u83B7\u53D6\u9501-\u8FC7\u7A0B\u603B\u7ED3","link":"#_1-3-\u7EBF\u7A0B\u83B7\u53D6\u9501-\u8FC7\u7A0B\u603B\u7ED3","children":[]},{"level":3,"title":"1.4 \u516C\u5E73\u9501\u52A0\u9501\u65F6\u5224\u65AD\u7B49\u5F85\u961F\u5217\u4E2D\u662F\u5426\u5B58\u5728\u6709\u6548\u8282\u70B9","slug":"_1-4-\u516C\u5E73\u9501\u52A0\u9501\u65F6\u5224\u65AD\u7B49\u5F85\u961F\u5217\u4E2D\u662F\u5426\u5B58\u5728\u6709\u6548\u8282\u70B9","link":"#_1-4-\u516C\u5E73\u9501\u52A0\u9501\u65F6\u5224\u65AD\u7B49\u5F85\u961F\u5217\u4E2D\u662F\u5426\u5B58\u5728\u6709\u6548\u8282\u70B9","children":[]},{"level":3,"title":"1.5 \u7B49\u5F85\u961F\u5217\u4E2D\u7EBF\u7A0B\u51FA\u961F\u5217\u65F6\u673A","slug":"_1-5-\u7B49\u5F85\u961F\u5217\u4E2D\u7EBF\u7A0B\u51FA\u961F\u5217\u65F6\u673A","link":"#_1-5-\u7B49\u5F85\u961F\u5217\u4E2D\u7EBF\u7A0B\u51FA\u961F\u5217\u65F6\u673A","children":[]}]},{"level":2,"title":"2. CANCELLED\u72B6\u6001\u8282\u70B9\u751F\u6210","slug":"_2-cancelled\u72B6\u6001\u8282\u70B9\u751F\u6210","link":"#_2-cancelled\u72B6\u6001\u8282\u70B9\u751F\u6210","children":[]},{"level":2,"title":"3. \u5982\u4F55\u89E3\u9501","slug":"_3-\u5982\u4F55\u89E3\u9501","link":"#_3-\u5982\u4F55\u89E3\u9501","children":[]},{"level":2,"title":"4. \u4E2D\u65AD\u6062\u590D\u540E\u7684\u6267\u884C\u6D41\u7A0B","slug":"_4-\u4E2D\u65AD\u6062\u590D\u540E\u7684\u6267\u884C\u6D41\u7A0B","link":"#_4-\u4E2D\u65AD\u6062\u590D\u540E\u7684\u6267\u884C\u6D41\u7A0B","children":[]},{"level":2,"title":"5. \u5C0F\u7ED3","slug":"_5-\u5C0F\u7ED3","link":"#_5-\u5C0F\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":16.94,"words":5082},"filePathRelative":"java/thread/java-thread-x-theorty.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
