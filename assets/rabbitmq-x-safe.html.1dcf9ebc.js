import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as i,a,b as n,d as o,f as s,r as l}from"./app.ec51a1ed.js";const c={},d=s('<h1 id="rabbitmq\u95EE\u9898-\u9632\u6B62\u6570\u636E\u4E22\u5931-\u8865\u5145" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u95EE\u9898-\u9632\u6B62\u6570\u636E\u4E22\u5931-\u8865\u5145" aria-hidden="true">#</a> RabbitMQ\u95EE\u9898 - \u9632\u6B62\u6570\u636E\u4E22\u5931(\u8865\u5145)</h1><h2 id="_1-\u6D88\u606F\u53EF\u9760\u4F20\u8F93" tabindex="-1"><a class="header-anchor" href="#_1-\u6D88\u606F\u53EF\u9760\u4F20\u8F93" aria-hidden="true">#</a> 1. \u6D88\u606F\u53EF\u9760\u4F20\u8F93</h2><p><strong>\u6D88\u606F\u53EF\u9760\u4F20\u8F93</strong> \u4E00\u822C\u662F\u4E1A\u52A1\u7CFB\u7EDF\u63A5\u5165\u6D88\u606F\u4E2D\u95F4\u4EF6\u9996\u8981\u8003\u8651\u7684\u95EE\u9898\uFF0C\u4E00\u822C\u6D88\u606F\u4E2D\u95F4\u4EF6\u7684\u6D88\u606F\u4F20\u8F93\u4FDD\u969C\u5206\u4E3A\u4E09\u4E2A\u5C42\u7EA7\uFF1A</p><ul><li><code>At most once</code>\uFF1A\u6700\u591A\u4E00\u6B21\u3002\u6D88\u606F\u53EF\u80FD\u4F1A\u4E22\u5931\uFF0C\u4F46\u7EDD\u4E0D\u4F1A\u91CD\u590D\u4F20\u8F93</li><li><code>At least once</code>\uFF1A\u6700\u5C11\u4E00\u6B21\u3002\u6D88\u606F\u7EDD\u4E0D\u4F1A\u4E22\u5931\uFF0C\u4F46\u53EF\u80FD\u91CD\u590D\u4F20\u8F93</li><li><code>Exactly once</code>\uFF1A\u6070\u597D\u4E00\u6B21\u3002\u6BCF\u6761\u6D88\u606F\u80AF\u5B9A\u4F1A\u88AB\u4F20\u8F93\u4E00\u6B21\u4E14\u4EC5\u4F20\u8F93\u4E00\u6B21\u3002</li></ul><p><strong>RabbitMQ \u652F\u6301 \u300C\u6700\u591A\u4E00\u6B21\u300D\u548C\u300C\u6700\u5C11\u4E00\u6B21\u300D\uFF0C\u4E0D\u652F\u6301\u6070\u597D\u4E00\u6B21</strong></p><h2 id="_2-\u6700\u5C11\u4E00\u6B21\u6295\u9012\u8003\u8651\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-\u6700\u5C11\u4E00\u6B21\u6295\u9012\u8003\u8651\u70B9" aria-hidden="true">#</a> 2. \u6700\u5C11\u4E00\u6B21\u6295\u9012\u8003\u8651\u70B9</h2><p>\u6700\u5C11\u4E00\u6B21\u6295\u9012\u5B9E\u73B0\u9700\u8981\u8003\u8651\u4EE5\u4E0B\u51E0\u4E2A\u65B9\u9762\uFF1A</p><ul><li>\u6D88\u606F\u751F\u4EA7\u8005\u9700\u8981\u5F00\u542F\u4E8B\u7269\u673A\u5236\u6216 publisher confirm \u673A\u5236\u3002<strong>\u786E\u4FDD\u6D88\u606F\u4F20\u8F93\u5230 RabbitMQ \u4E2D</strong></li><li>\u6D88\u606F\u751F\u4EA7\u8005\u9700\u8981\u914D\u5408\u4F7F\u7528 mandatory \u53C2\u6570\u6216\u5219\u5907\u4EFD\u4EA4\u6362\u5668\u6765 <strong>\u786E\u4FDD\u6D88\u606F</strong> \u80FD\u591F\u4ECE\u4EA4\u6362\u5668\u8DEF <strong>\u7531\u5230\u961F\u5217\u4E2D</strong>\uFF0C\u8FDB\u800C\u80FD\u591F\u4FDD\u5B58\u800C\u4E0D\u88AB\u4E22\u5F03</li><li>\u6D88\u606F\u548C\u961F\u5217\u90FD\u9700\u8981\u6301\u4E45\u5316\u5904\u7406\uFF0C\u786E\u4FDD\u6D88\u606F\u4E0D\u4F1A\u5728 RabbitMQ \u9047\u5230\u5F02\u5E38\u60C5\u51B5\u65F6\u4E22\u5931\u3002</li><li>\u6D88\u8D39\u8005\u5728\u6D88\u8D39\u5C0F\u65F6\u65F6\uFF0C\u9700\u8981\u5C06 autoAck \u8BBE\u7F6E\u4E3A fasle\uFF0C\u624B\u52A8\u8FDB\u884C ack</li></ul><h2 id="_3-\u6700\u591A\u4E00\u6B21\u6295\u9012\u8003\u8651\u70B9" tabindex="-1"><a class="header-anchor" href="#_3-\u6700\u591A\u4E00\u6B21\u6295\u9012\u8003\u8651\u70B9" aria-hidden="true">#</a> 3. \u6700\u591A\u4E00\u6B21\u6295\u9012\u8003\u8651\u70B9</h2><p>\u6700\u591A\u4E00\u6B21\uFF0C\u65E0\u9700\u8003\u8651\u3002</p><h2 id="_4-\u6070\u597D\u4E00\u6B21-rabbitmq\u65E0\u6CD5\u4FDD\u969C-\u3002" tabindex="-1"><a class="header-anchor" href="#_4-\u6070\u597D\u4E00\u6B21-rabbitmq\u65E0\u6CD5\u4FDD\u969C-\u3002" aria-hidden="true">#</a> 4. \u6070\u597D\u4E00\u6B21(RabbitMQ\u65E0\u6CD5\u4FDD\u969C)\u3002</h2><ul><li><p>\u8003\u8651\u4E00\u79CD\u60C5\u51B5\uFF0C\u6765\u8BF4\u660E\u4E3A\u4EC0\u4E48\u65E0\u6CD5\u4FDD\u969C\uFF1A</p><p>\u6D88\u8D39\u8005\u5728 <strong>\u6D88\u8D39\u5B8C\u4E00\u6761\u6D88\u606F\u540E</strong>\uFF0C\u5411 RabbitMQ <strong>\u53D1\u9001\u786E\u8BA4 Basic.Ack \u547D\u4EE4</strong>\uFF0C\u6B64\u65F6\u67D0\u79CD\u539F\u56E0\uFF08\u7F51\u7EDC\u65AD\u5F00\u7B49\uFF09<strong>\u5BFC\u81F4 RabbitMQ \u5E76\u6CA1\u6709\u6536\u5230\u8FD9\u4E2A\u786E\u8BA4\u547D\u4EE4</strong>\u3002\u6B64\u65F6 RabbitMQ \u4E0D\u4F1A\u5C06\u6B64\u6761\u6D88\u606F\u6807\u8BB0\u5220\u9664\u3002\u5728 <strong>\u91CD\u65B0\u5EFA\u7ACB\u8FDE\u63A5\u540E\uFF0C\u8FD8\u4F1A\u6D88\u8D39\u5230\u8FD9\u4E00\u6761\u6D88\u606F</strong>\uFF0C\u8FD9\u5C31\u9020\u6210\u4E86 <strong>\u91CD\u590D\u6D88\u8D39</strong>\u3002</p></li><li><p>\u518D\u6765\u770B\u4E00\u79CD\u60C5\u51B5\uFF1A</p><p>\u751F\u4EA7\u8005\u4F7F\u7528 publisher confirm \u673A\u5236\uFF0C\u53D1\u9001\u4E00\u6761\u6D88\u606F\u7B49\u5F85 RabbitMQ \u8FD4\u56DE\u786E\u8BA4\u901A\u77E5\uFF0C\u6B64\u65F6\u7F51\u7EDC\u65AD\u5F00\uFF0C\u751F\u4EA7\u8005\u6355\u83B7\u5230\u5F02\u5E38\u60C5\u51B5\uFF0C\u4E3A\u4E86\u786E\u4FDD\u6D88\u606F\u53EF\u9760\u6027\u9009\u62E9\u91CD\u65B0\u53D1\u9001\uFF0C\u8FD9\u6837 RabbitMQ \u4E2D\u5C31\u6709\u4E24\u6761\u540C\u6837\u7684\u6D88\u606F\u3002\u6D88\u8D39\u65F6\u5C31\u76F8\u5F53\u4E8E\u91CD\u590D\u6D88\u8D39\u3002</p></li></ul><p>\u603B\u7ED3\u8D77\u6765\uFF0C\u53D1\u751F\u5728\u4E1A\u52A1\u7CFB\u7EDF\u4E0E RabbitMQ \u4EA4\u4E92\u7F51\u7EDC\u8FDE\u63A5\u65B9\u9762\u3002\u6240\u4EE5\u76EE\u524D\u5927\u591A\u6570\u4E3B\u6D41\u7684\u6D88\u606F\u4E2D\u95F4\u4EF6\u90FD\u6CA1\u6709\u6D88\u606F\u53BB\u91CD\u673A\u5236\uFF0C\u6765\u4FDD\u969C\u300C\u6070\u597D\u4E00\u6B21\u300D\u3002<strong>\u53BB\u91CD\u4E00\u822C\u662F\u5728\u5BA2\u6237\u7AEF\u5B9E\u73B0\uFF0C\u6BD4\u5982\u5F15\u5165 GUID\uFF08Globally Unique Identifier\uFF09\u6982\u5FF5</strong>\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',14),b={href:"https://zq99299.github.io/mq-tutorial/rabbitmq-ac/04/10.html",target:"_blank",rel:"noopener noreferrer"};function h(p,_){const e=l("ExternalLinkIcon");return r(),i("div",null,[d,a("p",null,[a("a",b,[n("\u6D88\u606F\u4F20\u8F93\u4FDD\u969C"),o(e)])])])}const f=t(c,[["render",h],["__file","rabbitmq-x-safe.html.vue"]]);export{f as default};
