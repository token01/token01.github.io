const e=JSON.parse('{"key":"v-5e3906d9","path":"/java/thread/java-thread-x-lock-LockSupport.html","title":"JUC\u9501: LockSupport\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":130,"category":["Java","\u5E76\u53D1"],"summary":"JUC\u9501: LockSupport\u8BE6\u89E3 0. \u9762\u8BD5\u9898 \u4E3A\u4EC0\u4E48LockSupport\u4E5F\u662F\u6838\u5FC3\u57FA\u7840\u7C7B? AQS\u6846\u67B6\u501F\u52A9\u4E8E\u4E24\u4E2A\u7C7B\uFF1AUnsafe(\u63D0\u4F9BCAS\u64CD\u4F5C)\u548CLockSupport(\u63D0\u4F9Bpark/unpark\u64CD\u4F5C); \u5199\u51FA\u5206\u522B\u901A\u8FC7wait/notify\u548CLockSupport\u7684park/unpark\u5B9E\u73B0\u540C\u6B65?; LockSupport.park()\u4F1A\u91CA\u653E\u9501\u8D44\u6E90","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/java/thread/java-thread-x-lock-LockSupport.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"JUC\u9501: LockSupport\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T10:41:29.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T10:41:29.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"0. \u9762\u8BD5\u9898","slug":"_0-\u9762\u8BD5\u9898","link":"#_0-\u9762\u8BD5\u9898","children":[]},{"level":2,"title":"1. \u7B80\u4ECB","slug":"_1-\u7B80\u4ECB","link":"#_1-\u7B80\u4ECB","children":[]},{"level":2,"title":"2. \u65B9\u6CD5","slug":"_2-\u65B9\u6CD5","link":"#_2-\u65B9\u6CD5","children":[]},{"level":2,"title":"3. \u5B9E\u4F8B","slug":"_3-\u5B9E\u4F8B","link":"#_3-\u5B9E\u4F8B","children":[]},{"level":2,"title":"4. park\u548Cunpark\u7684\u5148\u540E\u987A\u5E8F\u4E0D\u4E25\u683C","slug":"_4-park\u548Cunpark\u7684\u5148\u540E\u987A\u5E8F\u4E0D\u4E25\u683C","link":"#_4-park\u548Cunpark\u7684\u5148\u540E\u987A\u5E8F\u4E0D\u4E25\u683C","children":[{"level":3,"title":"4.1 jdk\u7684\u6587\u6863\u63CF\u8FF0","slug":"_4-1-jdk\u7684\u6587\u6863\u63CF\u8FF0","link":"#_4-1-jdk\u7684\u6587\u6863\u63CF\u8FF0","children":[]}]},{"level":2,"title":"5. \u76F8\u5173\u95EE\u9898","slug":"_5-\u76F8\u5173\u95EE\u9898","link":"#_5-\u76F8\u5173\u95EE\u9898","children":[{"level":3,"title":"5.1 Thread.sleep()\u548CObject.wait()\u7684\u533A\u522B","slug":"_5-1-thread-sleep-\u548Cobject-wait-\u7684\u533A\u522B","link":"#_5-1-thread-sleep-\u548Cobject-wait-\u7684\u533A\u522B","children":[]},{"level":3,"title":"5.2 Object.wait()\u548CCondition.await()\u7684\u533A\u522B","slug":"_5-2-object-wait-\u548Ccondition-await-\u7684\u533A\u522B","link":"#_5-2-object-wait-\u548Ccondition-await-\u7684\u533A\u522B","children":[]},{"level":3,"title":"5.3 Thread.sleep()\u548CLockSupport.park()\u7684\u533A\u522B","slug":"_5-3-thread-sleep-\u548Clocksupport-park-\u7684\u533A\u522B","link":"#_5-3-thread-sleep-\u548Clocksupport-park-\u7684\u533A\u522B","children":[]},{"level":3,"title":"5.4 Object.wait()\u548CLockSupport.park()\u7684\u533A\u522B","slug":"_5-4-object-wait-\u548Clocksupport-park-\u7684\u533A\u522B","link":"#_5-4-object-wait-\u548Clocksupport-park-\u7684\u533A\u522B","children":[]},{"level":3,"title":"5.5 \u5982\u679C\u5728wait()\u4E4B\u524D\u6267\u884C\u4E86notify()\u4F1A\u600E\u6837?","slug":"_5-5-\u5982\u679C\u5728wait-\u4E4B\u524D\u6267\u884C\u4E86notify-\u4F1A\u600E\u6837","link":"#_5-5-\u5982\u679C\u5728wait-\u4E4B\u524D\u6267\u884C\u4E86notify-\u4F1A\u600E\u6837","children":[]},{"level":3,"title":"5.6 \u5982\u679C\u5728park()\u4E4B\u524D\u6267\u884C\u4E86unpark()\u4F1A\u600E\u6837?","slug":"_5-6-\u5982\u679C\u5728park-\u4E4B\u524D\u6267\u884C\u4E86unpark-\u4F1A\u600E\u6837","link":"#_5-6-\u5982\u679C\u5728park-\u4E4B\u524D\u6267\u884C\u4E86unpark-\u4F1A\u600E\u6837","children":[]},{"level":3,"title":"5.7 LockSupport.park()\u4F1A\u91CA\u653E\u9501\u8D44\u6E90\u5417?","slug":"_5-7-locksupport-park-\u4F1A\u91CA\u653E\u9501\u8D44\u6E90\u5417","link":"#_5-7-locksupport-park-\u4F1A\u91CA\u653E\u9501\u8D44\u6E90\u5417","children":[]}]},{"level":2,"title":"6. \u603B\u7ED3","slug":"_6-\u603B\u7ED3","link":"#_6-\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1672051289000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":2}]},"readingTime":{"minutes":6.46,"words":1937},"filePathRelative":"java/thread/java-thread-x-lock-LockSupport.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
