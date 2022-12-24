const e=JSON.parse('{"key":"v-303cd4c4","path":"/db/redis/db-redis-x-redis-object.html","title":"Redis\u8FDB\u9636 - \u6570\u636E\u7C7B\u578B\uFF1A\u5BF9\u8C61\u673A\u5236\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":110,"category":["\u6570\u636E\u5E93","Redis"],"summary":"Redis\u8FDB\u9636 - \u6570\u636E\u7C7B\u578B\uFF1A\u5BF9\u8C61\u673A\u5236\u8BE6\u89E3 1. \u5F15\u5165:\u4ECE\u54EA\u91CC\u5F00\u59CB\u5B66\u4E60\u5E95\u5C42\uFF1F \\" \u6211\u5728\u6574\u7406Redis\u5E95\u5C42\u8BBE\u8BA1\u65F6\uFF0C\u53D1\u73B0\u7F51\u4E0A\u5176\u5B9E\u662F\u6709\u5F88\u591A\u8D44\u6599\u7684\uFF0C\u4F46\u662F\u7F3A\u5C11\u4E00\u79CD\u81EA\u4E0A\u800C\u4E0B\u7684\u627F\u63A5\u3002\u8FD9\u91CC\u6211\u5C06\u6536\u96C6\u5F88\u591A\u7F51\u4E0A\u7684\u8D44\u6599\u5E76\u91CD\u65B0\u7EC4\u7EC7\uFF0C\u6765\u5E2E\u52A9\u4F60\u66F4\u597D\u7684\u7406\u89E3Redis\u5E95\u5C42\u8BBE\u8BA1\u3002\\" \u6211\u4EEC\u5728\u524D\u6587\u5DF2\u7ECF\u9610\u8FF0\u4E86Redis 5\u79CD\u57FA\u7840\u6570\u636E\u7C7B\u578B\u8BE6\u89E3\u548CRedis\u5165\u95E8 - \u6570\u636E\u7ED3\u6784\uFF1AStream\u8BE6\u89E3\uFF1B\u90A3\u4E48\u8FD9\u4E9B\u57FA","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/db/redis/db-redis-x-redis-object.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"Redis\u8FDB\u9636 - \u6570\u636E\u7C7B\u578B\uFF1A\u5BF9\u8C61\u673A\u5236\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u5F15\u5165:\u4ECE\u54EA\u91CC\u5F00\u59CB\u5B66\u4E60\u5E95\u5C42\uFF1F","slug":"_1-\u5F15\u5165-\u4ECE\u54EA\u91CC\u5F00\u59CB\u5B66\u4E60\u5E95\u5C42","link":"#_1-\u5F15\u5165-\u4ECE\u54EA\u91CC\u5F00\u59CB\u5B66\u4E60\u5E95\u5C42","children":[]},{"level":2,"title":"2. \u4E3A\u4EC0\u4E48Redis\u4F1A\u8BBE\u8BA1redisObject\u5BF9\u8C61","slug":"_2-\u4E3A\u4EC0\u4E48redis\u4F1A\u8BBE\u8BA1redisobject\u5BF9\u8C61","link":"#_2-\u4E3A\u4EC0\u4E48redis\u4F1A\u8BBE\u8BA1redisobject\u5BF9\u8C61","children":[]},{"level":2,"title":"3. redisObject\u6570\u636E\u7ED3\u6784","slug":"_3-redisobject\u6570\u636E\u7ED3\u6784","link":"#_3-redisobject\u6570\u636E\u7ED3\u6784","children":[]},{"level":2,"title":"4. \u547D\u4EE4\u7684\u7C7B\u578B\u68C0\u67E5\u548C\u591A\u6001","slug":"_4-\u547D\u4EE4\u7684\u7C7B\u578B\u68C0\u67E5\u548C\u591A\u6001","link":"#_4-\u547D\u4EE4\u7684\u7C7B\u578B\u68C0\u67E5\u548C\u591A\u6001","children":[]},{"level":2,"title":"5. \u5BF9\u8C61\u5171\u4EAB","slug":"_5-\u5BF9\u8C61\u5171\u4EAB","link":"#_5-\u5BF9\u8C61\u5171\u4EAB","children":[]},{"level":2,"title":"6. \u5F15\u7528\u8BA1\u6570\u4EE5\u53CA\u5BF9\u8C61\u7684\u6D88\u6BC1","slug":"_6-\u5F15\u7528\u8BA1\u6570\u4EE5\u53CA\u5BF9\u8C61\u7684\u6D88\u6BC1","link":"#_6-\u5F15\u7528\u8BA1\u6570\u4EE5\u53CA\u5BF9\u8C61\u7684\u6D88\u6BC1","children":[]},{"level":2,"title":"7. \u5C0F\u7ED3","slug":"_7-\u5C0F\u7ED3","link":"#_7-\u5C0F\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":7.93,"words":2378},"filePathRelative":"db/redis/db-redis-x-redis-object.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
