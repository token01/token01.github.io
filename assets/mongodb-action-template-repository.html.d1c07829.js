const e=JSON.parse('{"key":"v-369ad53a","path":"/db/mongodb/mongodb-action-template-repository.html","title":"MongoTemplate\u548CMongoRepository\u603B\u7ED3","lang":"zh-CN","frontmatter":{"summary":"MongoTemplate\u548CMongoRepository\u603B\u7ED3 1. \u7B80\u4ECB Spring Data \u64CD\u4F5C MongoDB \u505A CRUD \u7684\u65F6\u5019\u4E00\u822C\u4F1A\u4F7F\u7528\u4E24\u79CD\u65B9\u5F0FMongoTemplate\u548CMongoRepositor\u3002\u672C\u6587\u5C31\u8FD9\u4E24\u79CD\u65B9\u5F0F\u505A\u4E2A\u7B80\u5355\u7684\u5BF9\u6BD4\u4ECB\u7ECD\uFF0C\u5E76\u5BF9\u6211\u4EEC\u5728\u4E1A\u52A1\u4E2D\u7ECF\u5E38\u4F7F\u7528\u5230\u7684\u67E5\u8BE2\u505A\u4E00\u4E9B\u4E3E\u4F8B\u3002 2. \u6570\u636E\u51C6\u5907 \u5176\u4E2D\u4F7F\u7528\u5230\u7684 User \u7C7B\u5982\u4E0B User.j","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/db/mongodb/mongodb-action-template-repository.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"MongoTemplate\u548CMongoRepository\u603B\u7ED3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u7B80\u4ECB","slug":"_1-\u7B80\u4ECB","link":"#_1-\u7B80\u4ECB","children":[]},{"level":2,"title":"2. \u6570\u636E\u51C6\u5907","slug":"_2-\u6570\u636E\u51C6\u5907","link":"#_2-\u6570\u636E\u51C6\u5907","children":[]},{"level":2,"title":"3. \u4F7F\u7528 MongoTemplate \u5F62\u5F0F","slug":"_3-\u4F7F\u7528-mongotemplate-\u5F62\u5F0F","link":"#_3-\u4F7F\u7528-mongotemplate-\u5F62\u5F0F","children":[{"level":3,"title":"3.1 insert","slug":"_3-1-insert","link":"#_3-1-insert","children":[]},{"level":3,"title":"3.2 save","slug":"_3-2-save","link":"#_3-2-save","children":[]},{"level":3,"title":"3.3 save - update","slug":"_3-3-save-update","link":"#_3-3-save-update","children":[]},{"level":3,"title":"3.4 updateFirst","slug":"_3-4-updatefirst","link":"#_3-4-updatefirst","children":[]},{"level":3,"title":"3.5 updateMulti","slug":"_3-5-updatemulti","link":"#_3-5-updatemulti","children":[]},{"level":3,"title":"3.6 findAndModify","slug":"_3-6-findandmodify","link":"#_3-6-findandmodify","children":[]},{"level":3,"title":"3.7 upsert","slug":"_3-7-upsert","link":"#_3-7-upsert","children":[]},{"level":3,"title":"3.8 remove","slug":"_3-8-remove","link":"#_3-8-remove","children":[]}]},{"level":2,"title":"4. \u4F7F\u7528 MongoRepository  \u5F62\u5F0F\u3002","slug":"_4-\u4F7F\u7528-mongorepository-\u5F62\u5F0F\u3002","link":"#_4-\u4F7F\u7528-mongorepository-\u5F62\u5F0F\u3002","children":[{"level":3,"title":"4.1 \u63D2\u5165\u548C\u66F4\u65B0","slug":"_4-1-\u63D2\u5165\u548C\u66F4\u65B0","link":"#_4-1-\u63D2\u5165\u548C\u66F4\u65B0","children":[]},{"level":3,"title":"4.2 \u67E5\u627E","slug":"_4-2-\u67E5\u627E","link":"#_4-2-\u67E5\u627E","children":[]},{"level":3,"title":"4.3 \u5220\u9664","slug":"_4-3-\u5220\u9664","link":"#_4-3-\u5220\u9664","children":[]}]},{"level":2,"title":"5. \u4E24\u79CD\u65B9\u5F0F\u7684\u5BF9\u6BD4","slug":"_5-\u4E24\u79CD\u65B9\u5F0F\u7684\u5BF9\u6BD4","link":"#_5-\u4E24\u79CD\u65B9\u5F0F\u7684\u5BF9\u6BD4","children":[]},{"level":2,"title":"6. \u5E38\u89C1\u4E1A\u52A1\u95EE\u9898\u505A\u6CD5","slug":"_6-\u5E38\u89C1\u4E1A\u52A1\u95EE\u9898\u505A\u6CD5","link":"#_6-\u5E38\u89C1\u4E1A\u52A1\u95EE\u9898\u505A\u6CD5","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":4.5,"words":1351},"filePathRelative":"db/mongodb/mongodb-action-template-repository.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
