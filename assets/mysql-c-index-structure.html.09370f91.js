import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as n,a as e,b as t,d as h,f as s,r as d}from"./app.1b7ba94e.js";const l={},o=s('<h1 id="\u7D22\u5F15\u5E38\u89C1\u7684\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15\u5E38\u89C1\u7684\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> \u7D22\u5F15\u5E38\u89C1\u7684\u6570\u636E\u7ED3\u6784</h1><h2 id="_1-\u987A\u5E8F\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#_1-\u987A\u5E8F\u67E5\u627E" aria-hidden="true">#</a> 1. \u987A\u5E8F\u67E5\u627E</h2><p><strong>\u7B97\u6CD5\u590D\u6742\u5EA6\uFF1AO(n)</strong></p><p>\u6700\u57FA\u672C\u7684\u67E5\u8BE2\u7B97\u6CD5\uFF0C\u590D\u6742\u5EA6O(n),\u5927\u6570\u636E\u91CF\u65F6\u6B64\u7B97\u6CD5\u6548\u7387\u975E\u5E38\u7CDF\u7CD5</p><h2 id="_2-\u4E8C\u53C9\u6811\u67E5\u627E-binary-tree-search" tabindex="-1"><a class="header-anchor" href="#_2-\u4E8C\u53C9\u6811\u67E5\u627E-binary-tree-search" aria-hidden="true">#</a> 2. \u4E8C\u53C9\u6811\u67E5\u627E(binary tree search)</h2><p><strong>\u7B97\u6CD5\u590D\u6742\u5EA6\uFF1AO(log2n)</strong></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190904230943376.png" alt="image-20190904230943376"></p><p>\u5DE6\u8FB9\u662F\u6570\u636E\u8868\uFF0C\u4E00\u5171\u6709\u4E24\u5217\u4E03\u6761\u8BB0\u5F55\uFF0C\u6700\u5DE6\u8FB9\u7684\u662F\u6570\u636E\u8BB0\u5F55\u7684\u7269\u7406\u5730\u5740\u3002\uFF08\u903B\u8F91\u76F8\u90BB\u7684\u8BB0\u5F55\u5728\u78C1\u76D8\u4E0A\u4E5F\u5E76\u4E0D\u4E00\u5B9A\u662F\u7269\u7406\u76F8\u90BB\uFF09\u3002</p><p>\u4E3A\u4E86\u52A0\u5FEBcol2 \u7684\u67E5\u627E\uFF0C\u53EF\u4EE5\u7EF4\u62A4\u4E00\u4E2A\u53F3\u8FB9\u6240\u793A\u7684\u4E8C\u53C9\u67E5\u627E\u6811\uFF0C<strong>\u6BCF\u4E2A\u8282\u70B9\u5206\u522B\u5305\u542B\u7D22\u5F15\u952E\u503C\u548C\u4E00\u4E2A\u6307\u5411\u5BF9\u5E94\u6570\u636E\u8BB0\u5F55\u7269\u7406\u5730\u5740\u7684\u6307\u9488</strong>\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u8FD0\u7528\u4E8C\u53C9\u67E5\u627E\u5728O(log2n)\u7684\u590D\u6742\u5EA6\u5185\u83B7\u53D6\u54CD\u5E94\u7684\u6570\u636E</p><h2 id="_3-hash\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_3-hash\u7D22\u5F15" aria-hidden="true">#</a> 3. hash\u7D22\u5F15</h2><ul><li>\u4F18\u70B9\uFF1A <ul><li>\u67E5\u8BE2\u6548\u7387\u9AD8</li></ul></li><li>\u7F3A\u70B9 <ul><li>\u65E0\u6CD5\u6EE1\u8DB3\u8303\u56F4\u67E5\u627E <ul><li>\u4EC5\u4EC5\u80FD\u6EE1\u8DB3\u201C=\u201D\uFF0C\u201Cin\u201D ,\u4E0D\u80FD\u4F7F\u7528\u8303\u56F4\u67E5\u8BE2</li><li>\u65E0\u6CD5\u88AB\u7528\u6765\u907F\u514D\u6570\u636E\u7684\u6392\u5E8F\u64CD\u4F5C</li><li>\u4E0D\u80FD\u5229\u7528\u90E8\u5206\u7D22\u5F15\u952E\u67E5\u8BE2</li><li>\u4E0D\u80FD\u907F\u514D\u8868\u626B\u63CF</li><li>\u9047\u5230\u5927\u91CFHash\u503C\u76F8\u7B49\u7684\u60C5\u51B5\u540E\uFF0C\u6027\u80FD\u4E0D\u4E00\u5B9A\u5C31\u4F1A\u6BD4B-Tree\u7D22\u5F15\u9AD8</li></ul></li></ul></li></ul><h2 id="_4-\u4E8C\u53C9\u6811\u3001\u7EA2\u9ED1\u6811" tabindex="-1"><a class="header-anchor" href="#_4-\u4E8C\u53C9\u6811\u3001\u7EA2\u9ED1\u6811" aria-hidden="true">#</a> 4. \u4E8C\u53C9\u6811\u3001\u7EA2\u9ED1\u6811</h2><p><strong>\u7B97\u6CD5\u590D\u6742\u5EA6\uFF1AO(h)</strong></p><p>\u8FD9\u5C06\u5BFC\u81F4\u6811\u7684\u9AD8\u5EA6\u975E\u5E38\u9AD8\u3002\uFF08\u5E73\u8861\u4E8C\u53C9\u6811\u4E00\u4E2A\u8282\u70B9\u53EA\u80FD\u6709\u5DE6\u5B50\u6811\u548C\u53F3\u5B50\u6811\uFF09\uFF0C<strong>\u903B\u8F91\u4E0A\u5F88\u8FD1\u7684\u8282\u70B9\uFF08\u7236\u5B50\uFF09\u7269\u7406\u4E0A\u53EF\u80FD\u5F88\u8FDC\uFF0C\u65E0\u6CD5\u5229\u7528\u5C40\u90E8\u6027\uFF0CIO\u6B21\u6570\u591A\u67E5\u627E\u6162\uFF0C\u6548\u7387\u4F4E</strong>\uFF08\u903B\u8F91\u4E0A\u76F8\u90BB\u8282\u70B9\u6CA1\u6CD5\u76F4\u63A5\u901A\u8FC7\u987A\u5E8F\u6307\u9488\u5173\u8054\uFF0C\u53EF\u80FD\u9700\u8981\u8FED\u4EE3\u56DE\u4E0A\u5C42\u8282\u70B9\u91CD\u590D\u5411\u4E0B\u904D\u5386\u67E5\u627E\u5BF9\u5E94\u7684\u8282\u70B9\uFF0C\u6548\u7387\u4F4E\uFF09</p><h2 id="_5-b-tree" tabindex="-1"><a class="header-anchor" href="#_5-b-tree" aria-hidden="true">#</a> 5. B-Tree</h2><p>\u7ED3\u6784\uFF1A<strong>B-Tree \u6BCF\u4E2A\u8282\u70B9\u90FD\u662F\u4E00\u4E2A\u4E8C\u5143\u6570\u7EC4</strong>\uFF0C\u6240\u6709\u7684\u8282\u70B9\u90FD\u53EF\u4EE5\u5B58\u50A8\u6570\u636E\uFF0Ckey\u4E3A\u7D22\u5F15key\uFF0Cdata\u4E3A\u9664key \u6307\u4EE3\u7684\u6570\u636E\u3002\u7ED3\u6784\u5982\u4E0B</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190904234252606.png" alt="image-20190904234252606"></p><h3 id="_5-1-\u68C0\u7D22\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_5-1-\u68C0\u7D22\u539F\u7406" aria-hidden="true">#</a> 5.1 \u68C0\u7D22\u539F\u7406\uFF1A</h3><p>\u9996\u5148\u4ECE<strong>\u6839\u8282\u70B9\u8FDB\u884C\u4E8C\u5206\u67E5\u627E</strong>\uFF0C\u5982\u679C\u627E\u5230\u5219\u8FD4\u56DE\u5BF9\u5E94\u8282\u70B9\u7684data\uFF0C\u5426\u5219<strong>\u5BF9\u76F8\u5E94\u533A\u95F4\u7684\u6307\u9488\u6307\u5411\u7684\u8282\u70B9\u9012\u5F52</strong>\u8FDB\u884C\u67E5\u627E\uFF0C\u76F4\u5230\u627E\u5230\u8282\u70B9\u6216\u672A\u627E\u5230\u8282\u70B9\u8FD4\u56DEnull\u6307\u9488\u3002</p><h3 id="_5-2-b-tree\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_5-2-b-tree\u7F3A\u70B9" aria-hidden="true">#</a> 5.2 B-Tree\u7F3A\u70B9</h3><ul><li>\u63D2\u5165\u5220\u9664\u65B0\u7684\u6570\u636E\u8BB0\u5F55\u4F1A\u7834\u574FB-Tree\u7684\u6027\u8D28\uFF0C\u56E0\u6B64\u5728\u63D2\u5165\u5220\u9664\u65F6\uFF0C\u9700\u8981\u5BF9\u6811\u8FDB\u884C\u4E00\u4E2A\u5206\u88C2\u3001\u5408\u5E76\u3001\u8F6C\u79FB\u7B49\u64CD\u4F5C\u4EE5\u4FDD\u6301B-Tree\u6027\u8D28\u3002\u9020\u6210IO\u64CD\u4F5C\u9891\u7E41</li><li>\u533A\u95F4\u67E5\u627E\u53EF\u80FD\u9700\u8981\u8FD4\u56DE\u4E0A\u5C42\u8282\u70B9\u91CD\u590D\u904D\u5386\uFF0CIO\u64CD\u4F5C\u7E41\u7410\u3002</li></ul><h2 id="_6-b-tree" tabindex="-1"><a class="header-anchor" href="#_6-b-tree" aria-hidden="true">#</a> 6. B+Tree</h2><p>B+Tree \u662FB-Tree\u7684\u53D8\u79CD</p><h3 id="_6-1-\u4E0Eb-tree\u7684\u4E0D\u540C\u70B9" tabindex="-1"><a class="header-anchor" href="#_6-1-\u4E0Eb-tree\u7684\u4E0D\u540C\u70B9" aria-hidden="true">#</a> 6.1 \u4E0EB-Tree\u7684\u4E0D\u540C\u70B9</h3><ul><li>\u975E\u53F6\u5B50\u8282\u70B9\u4E0D\u5B58\u50A8data\uFF0C\u53EA\u5B58\u50A8\u7D22\u5F15key\uFF1B</li><li>\u53EA\u6709\u53F6\u5B50\u8282\u70B9\u624D\u5B58\u50A8data</li></ul><h3 id="_6-2-b-tree\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_6-2-b-tree\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> 6.2 B+Tree\u6570\u636E\u7ED3\u6784</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190904235621742.png" alt="image-20190904235621742"></p><h3 id="_6-3-mysql-\u4E2D\u7684b-tree" tabindex="-1"><a class="header-anchor" href="#_6-3-mysql-\u4E2D\u7684b-tree" aria-hidden="true">#</a> 6.3 MySQL \u4E2D\u7684B+Tree</h3><h4 id="_6-3-1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_6-3-1-\u6982\u8FF0" aria-hidden="true">#</a> 6.3.1 \u6982\u8FF0</h4><p>\u5728\u7ECF\u5178B+Tree\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u4E86\u4F18\u5316\uFF0C\u589E\u52A0\u4E86<strong>\u987A\u5E8F\u8BBF\u95EE\u6307\u9488</strong>\u3002</p><h4 id="_6-3-2-\u8BE6\u7EC6" tabindex="-1"><a class="header-anchor" href="#_6-3-2-\u8BE6\u7EC6" aria-hidden="true">#</a> 6.3.2 \u8BE6\u7EC6</h4><p>\u5728B+Tree\u7684\u6BCF\u4E2A\u53F6\u5B50\u8282\u70B9\u589E\u52A0\u4E00\u4E2A\u6307\u5411\u76F8\u90BB\u53F6\u5B50\u8282\u70B9\u7684\u6307\u9488\uFF0C\u5C31\u5F62\u6210\u4E86<strong>\u5E26\u6709\u987A\u5E8F\u8BBF\u95EE\u6307\u9488\u7684B+Tree</strong>\u3002\u8FD9\u6837\u5C31<strong>\u63D0\u9AD8\u4E86\u533A\u95F4\u8BBF\u95EE\u6027\u80FD</strong>\uFF1A</p><h4 id="_6-3-3-\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_6-3-3-\u6848\u4F8B" aria-hidden="true">#</a> 6.3.3 \u6848\u4F8B\uFF1A</h4><p>\u5982\u679C\u8981\u67E5\u8BE2key\u4E3A\u4ECE18\u523049\u7684\u6240\u6709\u6570\u636E\u8BB0\u5F55\uFF0C\u5F53\u627E\u523018\u540E\uFF0C\u53EA\u9700\u987A\u7740\u8282\u70B9\u548C\u6307\u9488\u987A\u5E8F\u904D\u5386\u5C31\u53EF\u4EE5\u4E00\u6B21\u6027\u8BBF\u95EE\u5230\u6240\u6709\u6570\u636E\u8282\u70B9\uFF0C\u6781\u5927\u63D0\u5230\u4E86\u533A\u95F4\u67E5\u8BE2\u6548\u7387(<strong>\u65E0\u9700\u8FD4\u56DE\u4E0A\u5C42\u7236\u8282\u70B9\u91CD\u590D\u904D\u5386\u67E5\u627E\u51CF\u5C11IO\u64CD\u4F5C</strong>)\u3002</p><h4 id="_6-3-4-\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_6-3-4-\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> 6.3.4 \u6570\u636E\u7ED3\u6784</h4><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190905000332979.png" alt="image-20190905000332979"></p><h3 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h3>',37),c={href:"https://www.jianshu.com/p/486a514b0ded",target:"_blank",rel:"noopener noreferrer"};function p(g,u){const a=d("ExternalLinkIcon");return i(),n("div",null,[o,e("p",null,[e("a",c,[t("MYSQL-B+TREE\u7D22\u5F15\u539F\u7406"),h(a)])])])}const m=r(l,[["render",p],["__file","mysql-c-index-structure.html.vue"]]);export{m as default};
