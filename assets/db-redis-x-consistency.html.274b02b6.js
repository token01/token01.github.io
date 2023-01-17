import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as l,a as i,b as r,d as n,f as d,r as o}from"./app.f5d9e013.js";const t={},g=d('<h1 id="redis\u8FDB\u9636-\u5982\u4F55\u4FDD\u969Cmysql\u548Credis\u7684\u6570\u636E\u4E00\u81F4\u6027" tabindex="-1"><a class="header-anchor" href="#redis\u8FDB\u9636-\u5982\u4F55\u4FDD\u969Cmysql\u548Credis\u7684\u6570\u636E\u4E00\u81F4\u6027" aria-hidden="true">#</a> Redis\u8FDB\u9636 - \u5982\u4F55\u4FDD\u969CMySQL\u548CRedis\u7684\u6570\u636E\u4E00\u81F4\u6027\uFF1F</h1><h2 id="_0-\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#_0-\u524D\u8A00" aria-hidden="true">#</a> 0. \u524D\u8A00</h2><p>\u76F4\u63A5\u5148\u629B\u4E00\u4E0B\u7ED3\u8BBA\uFF1A<strong>\u5728\u6EE1\u8DB3\u5B9E\u65F6\u6027\u7684\u6761\u4EF6\u4E0B\uFF0C\u4E0D\u5B58\u5728\u4E24\u8005\u5B8C\u5168\u4FDD\u5B58\u4E00\u81F4\u7684\u65B9\u6848\uFF0C\u53EA\u6709\u6700\u7EC8\u4E00\u81F4\u6027\u65B9\u6848\u3002</strong> \u6839\u636E\u7F51\u4E0A\u7684\u4F17\u591A\u89E3\u51B3\u65B9\u6848\uFF0C\u603B\u7ED3\u51FA 6 \u79CD\uFF0C\u76F4\u63A5\u770B\u76EE\u5F55\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20221129233458742.png" alt="image-20221129233458742"></p><h2 id="_1-\u4E0D\u597D\u7684\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_1-\u4E0D\u597D\u7684\u65B9\u6848" aria-hidden="true">#</a> 1 \u4E0D\u597D\u7684\u65B9\u6848</h2><h3 id="_1-1-\u5148\u5199-mysql-\u518D\u5199-redis" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5148\u5199-mysql-\u518D\u5199-redis" aria-hidden="true">#</a> 1.1 \u5148\u5199 MySQL\uFF0C\u518D\u5199 Redis</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20221129233531099.png" alt="image-20221129233531099"></p><blockquote><p>\u56FE\u89E3\u8BF4\u660E\uFF1A</p><ul><li>\u8FD9\u662F\u4E00\u526F\u65F6\u5E8F\u56FE\uFF0C\u63CF\u8FF0\u8BF7\u6C42\u7684\u5148\u540E\u8C03\u7528\u987A\u5E8F\uFF1B</li><li>\u6A58\u9EC4\u8272\u7684\u7EBF\u662F\u8BF7\u6C42 A\uFF0C\u9ED1\u8272\u7684\u7EBF\u662F\u8BF7\u6C42 B\uFF1B</li><li>\u6A58\u9EC4\u8272\u7684\u6587\u5B57\uFF0C\u662F MySQL \u548C Redis \u6700\u7EC8\u4E0D\u4E00\u81F4\u7684\u6570\u636E\uFF1B</li><li>\u6570\u636E\u662F\u4ECE 10 \u66F4\u65B0\u4E3A 11\uFF1B</li><li>\u540E\u9762\u6240\u6709\u7684\u56FE\uFF0C\u90FD\u662F\u8FD9\u4E2A\u542B\u4E49\uFF0C\u4E0D\u518D\u8D58\u8FF0\u3002</li></ul></blockquote><p>\u8BF7\u6C42 A\u3001B \u90FD\u662F\u5148\u5199 MySQL\uFF0C\u7136\u540E\u518D\u5199 Redis\uFF0C\u5728\u9AD8\u5E76\u53D1\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u8BF7\u6C42 A \u5728\u5199 Redis \u65F6\u5361\u4E86\u4E00\u4F1A\uFF0C\u8BF7\u6C42 B \u5DF2\u7ECF\u4F9D\u6B21\u5B8C\u6210\u6570\u636E\u7684\u66F4\u65B0\uFF0C\u5C31\u4F1A\u51FA\u73B0\u56FE\u4E2D\u7684\u95EE\u9898\u3002</p><p>\u8FD9\u4E2A\u56FE\u5DF2\u7ECF\u753B\u7684\u5F88\u6E05\u6670\u4E86\uFF0C\u6211\u5C31\u4E0D\u7528\u518D\u53BB\u5570\u55E6\u4E86\u5427\uFF0C<strong>\u4E0D\u8FC7\u8FD9\u91CC\u6709\u4E2A\u524D\u63D0\uFF0C\u5C31\u662F\u5BF9\u4E8E\u8BFB\u8BF7\u6C42\uFF0C\u5148\u53BB\u8BFB Redis\uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u518D\u53BB\u8BFB DB\uFF0C\u4F46\u662F\u8BFB\u8BF7\u6C42\u4E0D\u4F1A\u518D\u56DE\u5199 Redis\u3002</strong> \u5927\u767D\u8BDD\u8BF4\u4E00\u4E0B\uFF0C\u5C31\u662F\u8BFB\u8BF7\u6C42\u4E0D\u4F1A\u66F4\u65B0 Redis\u3002</p><h3 id="_1-2-\u5148\u5199-redis-\u518D\u5199-mysql" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5148\u5199-redis-\u518D\u5199-mysql" aria-hidden="true">#</a> 1.2 \u5148\u5199 Redis\uFF0C\u518D\u5199 MySQL</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20221129233651886.png" alt="image-20221129233651886"></p><p>\u540C\u201C\u5148\u5199 MySQL\uFF0C\u518D\u5199 Redis\u201D\uFF0C\u770B\u56FE\u53EF\u79D2\u61C2\u3002</p><h3 id="_1-3-\u5148\u5220\u9664-redis-\u518D\u5199-mysql" tabindex="-1"><a class="header-anchor" href="#_1-3-\u5148\u5220\u9664-redis-\u518D\u5199-mysql" aria-hidden="true">#</a> 1.3 \u5148\u5220\u9664 Redis\uFF0C\u518D\u5199 MySQL</h3><p>\u8FD9\u5E45\u56FE\u548C\u4E0A\u9762\u6709\u4E9B\u4E0D\u4E00\u6837\uFF0C\u524D\u9762\u7684\u8BF7\u6C42 A \u548C B \u90FD\u662F\u66F4\u65B0\u8BF7\u6C42\uFF0C\u8FD9\u91CC\u7684\u8BF7\u6C42 A \u662F\u66F4\u65B0\u8BF7\u6C42\uFF0C<strong>\u4F46\u662F\u8BF7\u6C42 B \u662F\u8BFB\u8BF7\u6C42\uFF0C\u4E14\u8BF7\u6C42 B \u7684\u8BFB\u8BF7\u6C42\u4F1A\u56DE\u5199 Redis\u3002</strong></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20221129233801952.png" alt="image-20221129233801952"></p><p>\u8BF7\u6C42 A \u5148\u5220\u9664\u7F13\u5B58\uFF0C\u53EF\u80FD\u56E0\u4E3A\u5361\u987F\uFF0C\u6570\u636E\u4E00\u76F4\u6CA1\u6709\u66F4\u65B0\u5230 MySQL\uFF0C\u5BFC\u81F4\u4E24\u8005\u6570\u636E\u4E0D\u4E00\u81F4\u3002</p><p><strong>\u8FD9\u79CD\u60C5\u51B5\u51FA\u73B0\u7684\u6982\u7387\u6BD4\u8F83\u5927\uFF0C\u56E0\u4E3A\u8BF7\u6C42 A \u66F4\u65B0 MySQL \u53EF\u80FD\u8017\u65F6\u4F1A\u6BD4\u8F83\u957F\uFF0C\u800C\u8BF7\u6C42 B \u7684\u524D\u4E24\u6B65\u90FD\u662F\u67E5\u8BE2\uFF0C\u4F1A\u975E\u5E38\u5FEB\u3002</strong></p><h2 id="_2-\u597D\u7684\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_2-\u597D\u7684\u65B9\u6848" aria-hidden="true">#</a> 2. \u597D\u7684\u65B9\u6848</h2><h3 id="_1-4-\u5148\u5220\u9664-redis-\u518D\u5199-mysql-\u518D\u5220\u9664-redis" tabindex="-1"><a class="header-anchor" href="#_1-4-\u5148\u5220\u9664-redis-\u518D\u5199-mysql-\u518D\u5220\u9664-redis" aria-hidden="true">#</a> 1.4 \u5148\u5220\u9664 Redis\uFF0C\u518D\u5199 MySQL\uFF0C\u518D\u5220\u9664 Redis</h3><p>\u5BF9\u4E8E\u201C\u5148\u5220\u9664 Redis\uFF0C\u518D\u5199 MySQL\u201D\uFF0C\u5982\u679C\u8981\u89E3\u51B3\u6700\u540E\u7684\u4E0D\u4E00\u81F4\u95EE\u9898\uFF0C\u5176\u5B9E\u518D\u5BF9 Redis \u91CD\u65B0\u5220\u9664\u5373\u53EF\uFF0C<strong>\u8FD9\u4E2A\u4E5F\u662F\u5927\u5BB6\u5E38\u8BF4\u7684\u201C\u7F13\u5B58\u53CC\u5220\u201D\u3002</strong></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20221129233931661.png" alt="image-20221129233931661"></p><p>\u4E3A\u4E86\u4FBF\u4E8E\u5927\u5BB6\u770B\u56FE\uFF0C\u5BF9\u4E8E\u84DD\u8272\u7684\u6587\u5B57\uFF0C\u201C\u5220\u9664\u7F13\u5B58 10\u201D\u5FC5\u987B\u5728\u201C\u56DE\u5199\u7F13\u5B5810\u201D\u540E\u9762\uFF0C\u90A3\u5982\u4F55\u624D\u80FD\u4FDD\u8BC1\u4E00\u5B9A\u662F\u5728\u540E\u9762\u5462\uFF1F<strong>\u7F51\u4E0A\u7ED9\u51FA\u7684\u7B2C\u4E00\u4E2A\u65B9\u6848\u662F\uFF0C\u8BA9\u8BF7\u6C42 A \u7684\u6700\u540E\u4E00\u6B21\u5220\u9664\uFF0C\u7B49\u5F85 500ms\u3002</strong></p><p>\u5BF9\u4E8E\u8FD9\u79CD\u65B9\u6848\uFF0C\u770B\u770B\u5C31\u884C\uFF0C\u53CD\u6B63\u6211\u662F\u4E0D\u4F1A\u7528\uFF0C\u592A Low \u4E86\uFF0C\u98CE\u9669\u4E5F\u4E0D\u53EF\u63A7\u3002</p><p><strong>\u90A3\u6709\u6CA1\u6709\u66F4\u597D\u7684\u65B9\u6848\u5462\uFF0C\u6211\u5EFA\u8BAE\u5F02\u6B65\u4E32\u884C\u5316\u5220\u9664\uFF0C\u5373\u5220\u9664\u8BF7\u6C42\u5165\u961F\u5217</strong></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20221129234009705.png" alt="image-20221129234009705"></p><p>\u5F02\u6B65\u5220\u9664\u5BF9\u7EBF\u4E0A\u4E1A\u52A1\u65E0\u5F71\u54CD\uFF0C\u4E32\u884C\u5316\u5904\u7406\u4FDD\u969C\u5E76\u53D1\u60C5\u51B5\u4E0B\u6B63\u786E\u5220\u9664\u3002</p><p>\u5982\u679C\u53CC\u5220\u5931\u8D25\u600E\u4E48\u529E\uFF0C\u7F51\u4E0A\u6709\u7ED9 Redis \u52A0\u4E00\u4E2A\u7F13\u5B58\u8FC7\u671F\u65F6\u95F4\u7684\u65B9\u6848\uFF0C\u8FD9\u4E2A\u4E0D\u6562\u82DF\u540C\u3002<strong>\u4E2A\u4EBA\u5EFA\u8BAE\u6574\u4E2A\u91CD\u8BD5\u673A\u5236\uFF0C\u53EF\u4EE5\u501F\u52A9\u6D88\u606F\u961F\u5217\u7684\u91CD\u8BD5\u673A\u5236\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u6574\u4E2A\u8868\uFF0C\u8BB0\u5F55\u91CD\u8BD5\u6B21\u6570</strong>\uFF0C\u65B9\u6CD5\u5F88\u591A\u3002</p><blockquote><p>\u7B80\u5355\u5C0F\u7ED3\u4E00\u4E0B\uFF1A</p><ul><li>\u201C\u7F13\u5B58\u53CC\u5220\u201D\u4E0D\u8981\u7528\u65E0\u8111\u7684 sleep 500 ms\uFF1B</li><li>\u901A\u8FC7\u6D88\u606F\u961F\u5217\u7684\u5F02\u6B65&amp;\u4E32\u884C\uFF0C\u5B9E\u73B0\u6700\u540E\u4E00\u6B21\u7F13\u5B58\u5220\u9664\uFF1B</li><li>\u7F13\u5B58\u5220\u9664\u5931\u8D25\uFF0C\u589E\u52A0\u91CD\u8BD5\u673A\u5236\u3002</li></ul></blockquote><h3 id="_1-5-\u5148\u5199-mysql-\u518D\u5220\u9664-redis" tabindex="-1"><a class="header-anchor" href="#_1-5-\u5148\u5199-mysql-\u518D\u5220\u9664-redis" aria-hidden="true">#</a> 1.5. \u5148\u5199 MySQL\uFF0C\u518D\u5220\u9664 Redis</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20221129234057440.png" alt="image-20221129234057440"></p><p>\u5BF9\u4E8E\u4E0A\u9762\u8FD9\u79CD\u60C5\u51B5\uFF0C\u5BF9\u4E8E\u7B2C\u4E00\u6B21\u67E5\u8BE2\uFF0C\u8BF7\u6C42 B \u67E5\u8BE2\u7684\u6570\u636E\u662F 10\uFF0C\u4F46\u662F MySQL \u7684\u6570\u636E\u662F 11\uFF0C<strong>\u53EA\u5B58\u5728\u8FD9\u4E00\u6B21\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5\uFF0C\u5BF9\u4E8E\u4E0D\u662F\u5F3A\u4E00\u81F4\u6027\u8981\u6C42\u7684\u4E1A\u52A1\uFF0C\u53EF\u4EE5\u5BB9\u5FCD\u3002</strong>\uFF08\u90A3\u4EC0\u4E48\u60C5\u51B5\u4E0B\u4E0D\u80FD\u5BB9\u5FCD\u5462\uFF0C\u6BD4\u5982\u79D2\u6740\u4E1A\u52A1\u3001\u5E93\u5B58\u670D\u52A1\u7B49\u3002\uFF09</p><p>\u5F53\u8BF7\u6C42 B \u8FDB\u884C\u7B2C\u4E8C\u6B21\u67E5\u8BE2\u65F6\uFF0C\u56E0\u4E3A\u6CA1\u6709\u547D\u4E2D Redis\uFF0C\u4F1A\u91CD\u65B0\u67E5\u4E00\u6B21 DB\uFF0C\u7136\u540E\u518D\u56DE\u5199\u5230 Reids\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20221129234242330.png" alt="image-20221129234242330"></p><p>\u8FD9\u91CC\u9700\u8981\u6EE1\u8DB3 2 \u4E2A\u6761\u4EF6\uFF1A</p><ul><li>\u7F13\u5B58\u521A\u597D\u81EA\u52A8\u5931\u6548\uFF1B</li><li>\u8BF7\u6C42 B \u4ECE\u6570\u636E\u5E93\u67E5\u51FA 10\uFF0C\u56DE\u5199\u7F13\u5B58\u7684\u8017\u65F6\uFF0C\u6BD4\u8BF7\u6C42 A \u5199\u6570\u636E\u5E93\uFF0C\u5E76\u4E14\u5220\u9664\u7F13\u5B58\u7684\u8FD8\u957F\u3002</li></ul><p>\u5BF9\u4E8E\u7B2C\u4E8C\u4E2A\u6761\u4EF6\uFF0C\u6211\u4EEC\u90FD\u77E5\u9053\u66F4\u65B0 DB \u80AF\u5B9A\u6BD4\u67E5\u8BE2\u8017\u65F6\u8981\u957F\uFF0C\u6240\u4EE5\u51FA\u73B0\u8FD9\u4E2A\u60C5\u51B5\u7684\u6982\u7387\u5F88\u5C0F\uFF0C\u540C\u65F6\u6EE1\u8DB3\u4E0A\u8FF0\u6761\u4EF6\u7684\u60C5\u51B5\u66F4\u5C0F\u3002</p><h3 id="_1-6-\u5148\u5199-mysql-\u901A\u8FC7-binlog-\u5F02\u6B65\u66F4\u65B0-redis" tabindex="-1"><a class="header-anchor" href="#_1-6-\u5148\u5199-mysql-\u901A\u8FC7-binlog-\u5F02\u6B65\u66F4\u65B0-redis" aria-hidden="true">#</a> 1.6 \u5148\u5199 MySQL\uFF0C\u901A\u8FC7 Binlog\uFF0C\u5F02\u6B65\u66F4\u65B0 Redis</h3><p>\u8FD9\u79CD\u65B9\u6848\uFF0C\u4E3B\u8981\u662F\u76D1\u542C MySQL \u7684 Binlog\uFF0C\u7136\u540E\u901A\u8FC7\u5F02\u6B65\u7684\u65B9\u5F0F\uFF0C\u5C06\u6570\u636E\u66F4\u65B0\u5230 Redis\uFF0C\u8FD9\u79CD\u65B9\u6848\u6709\u4E2A\u524D\u63D0\uFF0C\u67E5\u8BE2\u7684\u8BF7\u6C42\uFF0C\u4E0D\u4F1A\u56DE\u5199 Redis\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20221129234344095.png" alt="image-20221129234344095"></p><p>\u8FD9\u4E2A\u65B9\u6848\uFF0C\u4F1A\u4FDD\u8BC1 MySQL \u548C Redis \u7684\u6700\u7EC8\u4E00\u81F4\u6027\uFF0C\u4F46\u662F\u5982\u679C\u4E2D\u9014\u8BF7\u6C42 B \u9700\u8981\u67E5\u8BE2\u6570\u636E\uFF0C\u5982\u679C\u7F13\u5B58\u65E0\u6570\u636E\uFF0C\u5C31\u76F4\u63A5\u67E5 DB\uFF1B\u5982\u679C\u7F13\u5B58\u6709\u6570\u636E\uFF0C\u67E5\u8BE2\u7684\u6570\u636E\u4E5F\u4F1A\u5B58\u5728\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5\u3002</p><p><strong>\u6240\u4EE5\u8FD9\u4E2A\u65B9\u6848\uFF0C\u662F\u5B9E\u73B0\u6700\u7EC8\u4E00\u81F4\u6027\u7684\u7EC8\u6781\u89E3\u51B3\u65B9\u6848\uFF0C\u4F46\u662F\u4E0D\u80FD\u4FDD\u8BC1\u5B9E\u65F6\u6027\u3002</strong></p><h2 id="_3-\u51E0\u79CD\u65B9\u6848\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#_3-\u51E0\u79CD\u65B9\u6848\u6BD4\u8F83" aria-hidden="true">#</a> 3. \u51E0\u79CD\u65B9\u6848\u6BD4\u8F83</h2><p>\u6211\u4EEC\u5BF9\u6BD4\u4E0A\u9762\u8BA8\u8BBA\u7684 6 \u79CD\u65B9\u6848\uFF1A</p><ol><li>\u5148\u5199 Redis\uFF0C\u518D\u5199 MySQL</li></ol><ul><li><strong>\u8FD9\u79CD\u65B9\u6848\uFF0C\u6211\u80AF\u5B9A\u4E0D\u4F1A\u7528</strong>\uFF0C\u4E07\u4E00 DB \u6302\u4E86\uFF0C\u4F60\u628A\u6570\u636E\u5199\u5230\u7F13\u5B58\uFF0CDB \u65E0\u6570\u636E\uFF0C\u8FD9\u4E2A\u662F\u707E\u96BE\u6027\u7684\uFF1B</li><li>\u6211\u4E4B\u524D\u4E5F\u89C1\u540C\u5B66\u8FD9\u4E48\u7528\u8FC7\uFF0C\u5982\u679C\u5199 DB \u5931\u8D25\uFF0C\u5BF9 Redis \u8FDB\u884C\u9006\u64CD\u4F5C\uFF0C\u90A3\u5982\u679C\u9006\u64CD\u4F5C\u5931\u8D25\u5462\uFF0C\u662F\u4E0D\u662F\u8FD8\u8981\u641E\u4E2A\u91CD\u8BD5\uFF1F</li></ul><ol><li>\u5148\u5199 MySQL\uFF0C\u518D\u5199 Redis</li></ol><ul><li><strong>\u5BF9\u4E8E\u5E76\u53D1\u91CF\u3001\u4E00\u81F4\u6027\u8981\u6C42\u4E0D\u9AD8\u7684\u9879\u76EE\uFF0C\u5F88\u591A\u5C31\u662F\u8FD9\u4E48\u7528\u7684</strong>\uFF0C\u6211\u4E4B\u524D\u4E5F\u7ECF\u5E38\u8FD9\u4E48\u641E\uFF0C\u4F46\u662F\u4E0D\u5EFA\u8BAE\u8FD9\u4E48\u505A\uFF1B</li><li>\u5F53 Redis \u77AC\u95F4\u4E0D\u53EF\u7528\u7684\u60C5\u51B5\uFF0C\u9700\u8981\u62A5\u8B66\u51FA\u6765\uFF0C\u7136\u540E\u7EBF\u4E0B\u5904\u7406\u3002</li></ul><ol><li>\u5148\u5220\u9664 Redis\uFF0C\u518D\u5199 MySQL</li></ol><ul><li>\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u6211\u8FD8\u771F\u6CA1\u7528\u8FC7\uFF0C<strong>\u76F4\u63A5\u5FFD\u7565\u5427\u3002</strong></li></ul><ol><li>\u5148\u5220\u9664 Redis\uFF0C\u518D\u5199 MySQL\uFF0C\u518D\u5220\u9664 Redis</li></ol><ul><li>\u8FD9\u79CD\u65B9\u5F0F\u867D\u7136\u53EF\u884C\uFF0C\u4F46\u662F<strong>\u611F\u89C9\u597D\u590D\u6742</strong>\uFF0C\u8FD8\u8981\u641E\u4E2A\u6D88\u606F\u961F\u5217\u53BB\u5F02\u6B65\u5220\u9664 Redis\u3002</li></ul><ol><li>\u5148\u5199 MySQL\uFF0C\u518D\u5220\u9664 Redis</li></ol><ul><li><strong>\u6BD4\u8F83\u63A8\u8350\u8FD9\u79CD\u65B9\u5F0F</strong>\uFF0C\u5220\u9664 Redis \u5982\u679C\u5931\u8D25\uFF0C\u53EF\u4EE5\u518D\u591A\u91CD\u8BD5\u51E0\u6B21\uFF0C\u5426\u5219\u62A5\u8B66\u51FA\u6765\uFF1B</li><li>\u8FD9\u4E2A\u65B9\u6848\uFF0C\u662F\u5B9E\u65F6\u6027\u4E2D\u6700\u597D\u7684\u65B9\u6848\uFF0C\u5728\u4E00\u4E9B\u9AD8\u5E76\u53D1\u573A\u666F\u4E2D\uFF0C\u63A8\u8350\u8FD9\u79CD\u3002</li></ul><ol><li>\u5148\u5199 MySQL\uFF0C\u901A\u8FC7 Binlog\uFF0C\u5F02\u6B65\u66F4\u65B0 Redis</li></ol><ul><li><strong>\u5BF9\u4E8E\u5F02\u5730\u5BB9\u707E\u3001\u6570\u636E\u6C47\u603B\u7B49\uFF0C\u5EFA\u8BAE\u4F1A\u7528\u8FD9\u79CD\u65B9\u5F0F</strong>\uFF0C\u6BD4\u5982 binlog + kafka\uFF0C\u6570\u636E\u7684\u4E00\u81F4\u6027\u4E5F\u53EF\u4EE5\u8FBE\u5230\u79D2\u7EA7\uFF1B</li><li>\u7EAF\u7CB9\u7684\u9AD8\u5E76\u53D1\u573A\u666F\uFF0C\u4E0D\u5EFA\u8BAE\u7528\u8FD9\u79CD\u65B9\u6848\uFF0C\u6BD4\u5982\u62A2\u8D2D\u3001\u79D2\u6740\u7B49\u3002</li></ul><h3 id="_3-1-\u4E2A\u4EBA\u7ED3\u8BBA" tabindex="-1"><a class="header-anchor" href="#_3-1-\u4E2A\u4EBA\u7ED3\u8BBA" aria-hidden="true">#</a> 3.1 <strong>\u4E2A\u4EBA\u7ED3\u8BBA\uFF1A</strong></h3><ul><li><strong>\u5B9E\u65F6\u4E00\u81F4\u6027\u65B9\u6848</strong>\uFF1A\u91C7\u7528\u201C\u5148\u5199 MySQL\uFF0C\u518D\u5220\u9664 Redis\u201D\u7684\u7B56\u7565\uFF0C\u8FD9\u79CD\u60C5\u51B5\u867D\u7136\u4E5F\u4F1A\u5B58\u5728\u4E24\u8005\u4E0D\u4E00\u81F4\uFF0C\u4F46\u662F\u9700\u8981\u6EE1\u8DB3\u7684\u6761\u4EF6\u6709\u70B9\u82DB\u523B\uFF0C<strong>\u6240\u4EE5\u662F\u6EE1\u8DB3\u5B9E\u65F6\u6027\u6761\u4EF6\u4E0B\uFF0C\u80FD\u5C3D\u91CF\u6EE1\u8DB3\u4E00\u81F4\u6027\u7684\u6700\u4F18\u89E3\u3002</strong></li><li><strong>\u6700\u7EC8\u4E00\u81F4\u6027\u65B9\u6848</strong>\uFF1A\u91C7\u7528\u201C\u5148\u5199 MySQL\uFF0C\u901A\u8FC7 Binlog\uFF0C\u5F02\u6B65\u66F4\u65B0 Redis\u201D\uFF0C\u53EF\u4EE5\u901A\u8FC7 Binlog\uFF0C\u7ED3\u5408\u6D88\u606F\u961F\u5217\u5F02\u6B65\u66F4\u65B0 Redis\uFF0C<strong>\u662F\u6700\u7EC8\u4E00\u81F4\u6027\u7684\u6700\u4F18\u89E3\u3002</strong></li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',59),p={href:"https://tobebetterjavaer.com/mysql/redis-shuju-yizhixing.html",target:"_blank",rel:"noopener noreferrer"};function h(c,m){const e=o("ExternalLinkIcon");return a(),l("div",null,[g,i("p",null,[i("a",p,[r("\u5982\u4F55\u4FDD\u969CMySQL\u548CRedis\u7684\u6570\u636E\u4E00\u81F4\u6027\uFF1F"),n(e)])])])}const b=s(t,[["render",h],["__file","db-redis-x-consistency.html.vue"]]);export{b as default};
