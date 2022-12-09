const e=JSON.parse('{"key":"v-1f354ebe","path":"/mysql/redis-shuju-yizhixing.html","title":"如何保障MySQL和Redis的数据一致性？","lang":"zh-CN","frontmatter":{"category":["Java企业级开发"],"tag":["MySQL","Redis"],"title":"如何保障MySQL和Redis的数据一致性？","summary":"\\" 整理：musk，戳转载链接，作者：楼仔，戳原文链接。\\" 如何保障 MySQL 和 Redis 的数据一致性？这个问题很早之前我就遇到过，但是一直没有仔细去研究，上个月看了极客的课程，有一篇文章专门有过讲解，刚好有粉丝也问我这个问题，所以感觉有必要单独出一篇。 之前也看了很多相关的文章，但是感觉讲的都不好，很多文章都会去讲各种策略，比如（旁路缓存）策略、（","head":[["meta",{"property":"og:url","content":"https://newzone.top/mysql/redis-shuju-yizhixing.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"如何保障MySQL和Redis的数据一致性？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-09T06:05:30.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:modified_time","content":"2022-12-09T06:05:30.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"不好的方案","slug":"不好的方案","link":"#不好的方案","children":[{"level":3,"title":"1. 先写 MySQL，再写 Redis","slug":"_1-先写-mysql-再写-redis","link":"#_1-先写-mysql-再写-redis","children":[]},{"level":3,"title":"2. 先写 Redis，再写 MySQL","slug":"_2-先写-redis-再写-mysql","link":"#_2-先写-redis-再写-mysql","children":[]},{"level":3,"title":"3. 先删除 Redis，再写 MySQL","slug":"_3-先删除-redis-再写-mysql","link":"#_3-先删除-redis-再写-mysql","children":[]}]},{"level":2,"title":"好的方案","slug":"好的方案","link":"#好的方案","children":[{"level":3,"title":"4. 先删除 Redis，再写 MySQL，再删除 Redis","slug":"_4-先删除-redis-再写-mysql-再删除-redis","link":"#_4-先删除-redis-再写-mysql-再删除-redis","children":[]},{"level":3,"title":"5. 先写 MySQL，再删除 Redis","slug":"_5-先写-mysql-再删除-redis","link":"#_5-先写-mysql-再删除-redis","children":[]},{"level":3,"title":"6. 先写 MySQL，通过 Binlog，异步更新 Redis","slug":"_6-先写-mysql-通过-binlog-异步更新-redis","link":"#_6-先写-mysql-通过-binlog-异步更新-redis","children":[]}]},{"level":2,"title":"几种方案比较","slug":"几种方案比较","link":"#几种方案比较","children":[]}],"git":{"createdTime":1669017288000,"updatedTime":1670565930000,"contributors":[{"name":"Kong Ming(空明)","email":"token01@126.com","commits":5}]},"readingTime":{"minutes":6.71,"words":2014},"filePathRelative":"mysql/redis-shuju-yizhixing.md","localizedDate":"2022年11月21日"}');export{e as data};