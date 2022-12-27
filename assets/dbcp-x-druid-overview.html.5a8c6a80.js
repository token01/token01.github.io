import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as d,a as e,b as t,d as n,f as o,r as c}from"./app.70325d6b.js";const h={},s=o('<h1 id="\u4E3A\u4EC0\u4E48\u9009\u62E9druid" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9009\u62E9druid" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u9009\u62E9Druid</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>Druid \u9664\u4E86\u63D0\u4F9B\u6027\u80FD\u5353\u8D8A\u7684\u8FDE\u63A5\u6C60\u529F\u80FD\u5916\uFF0C\u8FD8\u96C6\u6210\u4E86SQL\u76D1\u63A7\uFF0C\u9ED1\u540D\u5355\u62E6\u622A\u7B49\u529F\u80FD\uFF0C\u7528\u5B83\u81EA\u5DF1\u7684\u8BDD\u8BF4\uFF0CDruid\u662F\u201C\u4E3A\u76D1\u63A7\u800C\u751F\u201D\u3002\u501F\u52A9\u4E8E\u963F\u91CC\u8FD9\u4E2A\u5E73\u53F0\u7684\u53F7\u53EC\u529B\uFF0C\u4EA7\u54C1\u4E00\u7ECF\u53D1\u5E03\u5C31\u8D62\u5F97\u4E86\u5927\u6279\u7528\u6237\u7684\u62E5\u8DB8\uFF0C\u4ECE\u7528\u6237\u4F7F\u7528\u7684\u53CD\u9988\u6765\u770B\uFF0CDruid\u4E5F\u786E\u5B9E\u6CA1\u8BA9\u7528\u6237\u5931\u671B\u3002</p><p>\u76F8\u8F83\u4E8E\u5176\u4ED6\u4EA7\u54C1\uFF0CDruid\u53E6\u4E00\u4E2A\u6BD4\u8F83\u5927\u7684\u4F18\u52BF\uFF0C\u5C31\u662F\u4E2D\u6587\u6587\u6863\u6BD4\u8F83\u5168\u9762\uFF08\u6BD5\u7ADF\u662F\u56FD\u4EBA\u7684\u9879\u76EE\u4E48\uFF09\uFF0C\u5728github\u7684wiki\u9875\u9762\uFF0C\u5217\u4E3E\u4E86\u65E5\u5E38\u4F7F\u7528\u4E2D\u53EF\u80FD\u9047\u5230\u7684\u95EE\u9898\uFF0C\u5BF9\u4E00\u4E2A\u65B0\u7528\u6237\u6765\u8BB2\uFF0C\u4E0A\u9762\u63D0\u4F9B\u7684\u5185\u5BB9\u5DF2\u7ECF\u8DB3\u591F\u6307\u5BFC\u5B83\u5B8C\u6210\u4EA7\u54C1\u7684\u914D\u7F6E\u548C\u4F7F\u7528\u4E86\u3002</p><h2 id="_2-druid-\u76F8\u5BF9\u4E8E\u5176\u4ED6\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u7684\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-druid-\u76F8\u5BF9\u4E8E\u5176\u4ED6\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u7684\u4F18\u70B9" aria-hidden="true">#</a> 2. Druid \u76F8\u5BF9\u4E8E\u5176\u4ED6\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u7684\u4F18\u70B9</h2><ol><li>\u5F3A\u5927\u7684\u76D1\u63A7\u7279\u6027\uFF0C\u901A\u8FC7Druid\u63D0\u4F9B\u7684\u76D1\u63A7\u529F\u80FD\uFF0C\u53EF\u4EE5\u6E05\u695A\u77E5\u9053\u8FDE\u63A5\u6C60\u548CSQL\u7684\u5DE5\u4F5C\u60C5\u51B5\u3002 a. \u76D1\u63A7SQL\u7684\u6267\u884C\u65F6\u95F4\u3001ResultSet\u6301\u6709\u65F6\u95F4\u3001\u8FD4\u56DE\u884C\u6570\u3001\u66F4\u65B0\u884C\u6570\u3001\u9519\u8BEF\u6B21\u6570\u3001\u9519\u8BEF\u5806\u6808\u4FE1\u606F\uFF1B b. SQL\u6267\u884C\u7684\u8017\u65F6\u533A\u95F4\u5206\u5E03\u3002\u4EC0\u4E48\u662F\u8017\u65F6\u533A\u95F4\u5206\u5E03\u5462\uFF1F\u6BD4\u5982\u8BF4\uFF0C\u67D0\u4E2ASQL\u6267\u884C\u4E861000\u6B21\uFF0C\u5176\u4E2D01\u6BEB\u79D2\u533A\u95F450\u6B21\uFF0C110\u6BEB\u79D2800\u6B21\uFF0C10100\u6BEB\u79D2100\u6B21\uFF0C1001000\u6BEB\u79D230\u6B21\uFF0C1~10\u79D215\u6B21\uFF0C10\u79D2\u4EE5\u4E0A5\u6B21\u3002\u901A\u8FC7\u8017\u65F6\u533A\u95F4\u5206\u5E03\uFF0C\u80FD\u591F\u975E\u5E38\u6E05\u695A\u77E5\u9053SQL\u7684\u6267\u884C\u8017\u65F6\u60C5\u51B5\uFF1B c. \u76D1\u63A7\u8FDE\u63A5\u6C60\u7684\u7269\u7406\u8FDE\u63A5\u521B\u5EFA\u548C\u9500\u6BC1\u6B21\u6570\u3001\u903B\u8F91\u8FDE\u63A5\u7684\u7533\u8BF7\u548C\u5173\u95ED\u6B21\u6570\u3001\u975E\u7A7A\u7B49\u5F85\u6B21\u6570\u3001PSCache\u547D\u4E2D\u7387\u7B49\u3002</li><li>\u65B9\u4FBF\u6269\u5C55\u3002Druid\u63D0\u4F9B\u4E86Filter-Chain\u6A21\u5F0F\u7684\u6269\u5C55API\uFF0C\u53EF\u4EE5\u81EA\u5DF1\u7F16\u5199Filter\u62E6\u622AJDBC\u4E2D\u7684\u4EFB\u4F55\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5728\u4E0A\u9762\u505A\u4EFB\u4F55\u4E8B\u60C5\uFF0C\u6BD4\u5982\u8BF4\u6027\u80FD\u76D1\u63A7\u3001SQL\u5BA1\u8BA1\u3001\u7528\u6237\u540D\u5BC6\u7801\u52A0\u5BC6\u3001\u65E5\u5FD7\u7B49\u7B49\u3002</li><li>Druid\u96C6\u5408\u4E86\u5F00\u6E90\u548C\u5546\u4E1A\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u7684\u4F18\u79C0\u7279\u6027\uFF0C\u5E76\u7ED3\u5408\u963F\u91CC\u5DF4\u5DF4\u5927\u89C4\u6A21\u82DB\u523B\u751F\u4EA7\u73AF\u5883\u7684\u4F7F\u7528\u7ECF\u9A8C\u8FDB\u884C\u4F18\u5316\u3002</li></ol><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',7),l={href:"https://www.jianshu.com/p/0f58804b3dea",target:"_blank",rel:"noopener noreferrer"};function u(_,p){const r=c("ExternalLinkIcon");return i(),d("div",null,[s,e("p",null,[e("a",l,[t("\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u539F\u7406\u4ECB\u7ECD+\u5E38\u7528\u8FDE\u63A5\u6C60\u4ECB\u7ECD"),n(r)])])])}const m=a(h,[["render",u],["__file","dbcp-x-druid-overview.html.vue"]]);export{m as default};