import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as n,a as e,b as l,d as t,f as d,r as h}from"./app.f6fb4051.js";const s={},o=d('<h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>Zksync \u662F zkrollup, \u4F7F\u7528\u52A0\u5BC6\u6709\u6548\u6027\u8BC1\u660E\u5728\u4EE5\u592A\u574A\u4E0A\u63D0\u4F9B\u53EF\u6269\u5C55\u548C\u4F4E\u6210\u672C\u4EA4\u6613\u7684\u65E0\u4FE1\u4EFB\u534F\u8BAE\u3002</p><h2 id="zksync-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#zksync-\u6982\u8FF0" aria-hidden="true">#</a> zksync \u6982\u8FF0</h2><p>Rollup \u9700\u8981 operator \u5C06\u4EA4\u6613\u6C47\u603B\u5728\u4E00\u8D77\uFF0C\u8BA1\u7B97\u51FA\u6B63\u786E\u72B6\u6001\u72B6\u6001\u7684\u96F6\u77E5\u8BC6\u8BC1\u660E\uFF0C\u518D\u548C roullup \u5408\u7EA6\u4EA4\u4E92\u6765\u5F71\u54CD\u72B6\u6001\u8F6C\u6362\u3002</p><p>zksync \u7684 rollup \u64CD\u4F5C\u5982\u4E0B\uFF1A</p><ul><li>\u7528\u6237\u521B\u5EFA\u4EA4\u6613\u6216\u8005\u4F18\u5148\u7EA7\u64CD\u4F5C</li><li>\u5904\u7406\u6B64\u8BF7\u6C42\u540E\uFF0COperator \u521B\u5EFA rollup \u64CD\u4F5C\u5E76\u5C06\u5176\u6DFB\u52A0\u5230L2\u5757\u4E2D</li><li>\u4E00\u65E6L2\u533A\u5757\u5B8C\u6210\uFF0C\u8FD0\u8425\u5546\u533A\u5757\u8BC1\u660E\u4F5C\u4E3A\u533A\u5757\u627F\u8BFA\u63D0\u4EA4\u7ED9 zksync \u5408\u7EA6\uFF0C\u5408\u7EA6\u5C06\u4F1A\u6821\u9A8C rollup\u7684\u90E8\u5206\u903B\u8F91\uFF0C\u9A8C\u8BC1\u6210\u529F\u5219\u770B\u505A\u6700\u7EC8\u72B6\u6001</li></ul><p>L2 \u533A\u5757\u7684\u751F\u547D\u5468\u671F \uFF1A</p><ul><li>Pending :operator \u63A5\u6536\u5230\u4EA4\u6613</li><li>Processed \uFF1A\u4EA4\u6613\u88AB operator \u6267\u884C\u5E76\u786E\u8BA4\u5305\u542B\u5728\u4E0B\u4E2A\u533A\u5757\u4E2D</li><li>Committed \uFF1A\u8868\u660E\u8BE5\u533A\u5757\u7684\u4EA4\u6613\u6570\u636E\u5DF2\u53D1\u5E03\u5728\u4EE5\u592A\u574A\u4E0A\u3002\u5B83\u4E0D\u80FD\u8BC1\u660E\u5B83\u662F\u4EE5\u6709\u6548\u7684\u65B9\u5F0F\u6267\u884C\u7684\uFF0C\u4F46\u5B83\u786E\u4FDD\u4E86\u5757\u6570\u636E\u7684\u53EF\u7528\u6027\u3002</li><li>Finalized \uFF1A\u8FD9\u8868\u660E\u4EA4\u6613\u7684SNARK\u6709\u6548\u6027\u8BC1\u660E\u5DF2\u63D0\u4EA4\u5E76\u7531\u667A\u80FD\u5408\u7EA6\u9A8C\u8BC1\uFF08\u4E00\u7B14\u7B14\u7684\u4EA4\u6613\u7531L1\u6253\u5305\uFF09\u3002\u5728\u8FD9\u4E00\u6B65\u9AA4\u4E4B\u540E\uFF0C\u4EA4\u6613\u88AB\u8BA4\u4E3A\u662F\u6700\u7EC8\u7684</li></ul><p>\u4ECE Processed \u5230 Finalized \u8981\u7ECF\u5386\u51E0\u4E2A\u5C0F\u65F6\u3002</p><p>zksync2.0 \u652F\u6301\u7684\u529F\u80FD\u5982\u4E0B\uFF1A</p><ul><li>ECDSA\u7B7E\u540D\u7684\u672C\u673A\u652F\u6301\uFF1A\u4EFB\u4F55\u5E10\u6237\u90FD\u53EF\u4EE5\u5728 L2 \u4E2D\u4F7F\u7528\u4E0E L1 \u76F8\u540C\u7684\u79C1\u94A5\u8FDB\u884C\u7BA1\u7406</li><li>\u652F\u6301 solidity 0.8.x</li><li>Web3 API\u4E0E\u4EE5\u592A\u574A\u5B8C\u5168\u517C\u5BB9\u3002\u8FD9\u5141\u8BB8\u4E0E\u73B0\u6709\u7684\u7D22\u5F15\u5668\u3001\u6D4F\u89C8\u5668\u7B49\u65E0\u7F1D\u96C6\u6210\u3002</li><li>\u652F\u6301 keccak256\u3001 sha256 \u548C ecrecover\u901A\u8FC7\u9884\u7F16\u8BD1</li><li>hardhat \u63D2\u4EF6\u652F\u6301\u5728 zksync \u4E0A\u7B80\u5355\u6D4B\u8BD5\u548C\u5F00\u53D1</li><li>\u652F\u6301 \u4ECE\u4EE5\u592A\u574A\u4E0A\u4F20\u9012\u6570\u636E\u5230 zksync \u4E0A\u7684\u5408\u7EA6</li></ul><h2 id="\u4E86\u89E3zksync" tabindex="-1"><a class="header-anchor" href="#\u4E86\u89E3zksync" aria-hidden="true">#</a> \u4E86\u89E3zksync</h2><h3 id="\u6536\u8D39\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u6536\u8D39\u673A\u5236" aria-hidden="true">#</a> \u6536\u8D39\u673A\u5236</h3><h3 id="\u8DE8\u94FE\u6865" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u94FE\u6865" aria-hidden="true">#</a> \u8DE8\u94FE\u6865</h3><p>L1\u548CL2\u5404\u90E8\u7F72\u4E00\u4E2A\u5408\u7EA6\uFF0C\u6765\u4F5C\u4E3A\u6865\u63A5\u3002\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u81EA\u7531\u4E3A\u4EFB\u4F55\u4EE3\u5E01\u5EFA\u9020\u81EA\u5DF1\u7684\u6865\u6881\u3002\u4F46\u662F\uFF0C\u6211\u4EEC\u63D0\u4F9B\u9ED8\u8BA4\u7684\u6865\u6881\uFF08\u4E00\u4E2A\u7528\u4E8EETH\uFF0C\u53E6\u4E00\u4E2A\u7528\u4E8EERC20\u4EE3\u5E01\uFF09\uFF0C\u53EF\u7528\u4E8E\u57FA\u672C\u6865\u63A5\u3002</p><h4 id="\u5B58\u94B1\u5230l2" tabindex="-1"><a class="header-anchor" href="#\u5B58\u94B1\u5230l2" aria-hidden="true">#</a> \u5B58\u94B1\u5230L2</h4><p>\u7528\u6237\u8C03\u7528 L1 bradge\u5408\u7EA6\u7684 \u5B58\u6B3E\u65B9\u6CD5\uFF0C\u5C06\u4F1A\u89E6\u53D1\u4EE5\u4E0B\u4E8B\u4EF6\uFF1A</p><ul><li>\u7528\u6237\u5728L1 \u4E0A\u7684token\u4F1A\u88AB\u53D1\u9001\u5230 L1 bridge \u5E76\u88AB\u9501\u4F4F</li><li>L1 bridge \u5408\u7EA6\u4F1A\u542F\u52A8\u4E00\u7B14\u4EA4\u6613\u53D1\u9001\u5230 L2 bridge \u901A\u8FC7 L1-&gt;L2 (\u8FD9\u662F\u4E2A\u4EC0\u4E48)</li><li>\u5728L2\u4EA4\u6613\u4E2D\uFF0Ctoken \u5C06\u88AB mint \u5E76\u53D1\u9001\u5230L2\u4E0A\u7684\u6307\u5B9A\u5730\u5740 <ul><li>\u5982\u679CzkSync\u4E0A\u8FD8\u4E0D\u5B58\u5728\u4EE4\u724C\uFF0C\u5219\u4F1A\u4E3A\u5176\u90E8\u7F72\u65B0\u7684\u5408\u7EA6\u3002\u5047\u8BBEL2\u4EE4\u724C\u5730\u5740\u662F\u786E\u5B9A\u6027\u7684\uFF08\u57FA\u4E8E\u539F\u59CBL1\u5730\u5740\u3001\u540D\u79F0\u548C\u7B26\u53F7\uFF09\uFF0C\u4E0D\u7BA1\u8C01\u662F\u7B2C\u4E00\u4E2A\u6865\u63A5\u5B83\u7684\u4EBA\uFF0C\u65B0\u7684L2\u5730\u5740\u90FD\u662F\u76F8\u540C\u7684\u3002</li><li>\u5BF9\u4E8E\u6BCF\u4E2A\u6267\u884C\u7684L1-&gt;L2\u4EA4\u6613\uFF0C\u90FD\u4F1A\u6709\u4E00\u6761L2-&gt;L1\u65E5\u5FD7\u6D88\u606F\u786E\u8BA4\u5176\u6267\u884C\u3002</li></ul></li></ul><p>warning\uFF1A</p><p>\u5982\u679C\u6B64\u4EA4\u6613\u51FA\u4E8E\u4EFB\u4F55\u539F\u56E0\u5931\u8D25\uFF08\u4F8B\u5982\uFF0C\u63D0\u4F9B\u7684\u8D39\u7528\u592A\u4F4E\uFF09\uFF0C\u5219\u65E5\u5FD7\u6D88\u606F\u5C06\u9648\u8FF0\u5176\u6545\u969C\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u5728L1\u6865\u4E0A\u8BC1\u660E\u5305\u542B\u65E5\u5FD7\uFF0C\u4EE5\u901A\u8FC7\u8C03\u7528Moded sopairfailedDeposit\u5C06\u5B58\u5165\u8D44\u91D1\u9000\u8FD8\u7ED9\u539F\u59CB\u53D1\u4EF6\u4EBA</p><h4 id="\u63D0\u6B3E\u5230l1" tabindex="-1"><a class="header-anchor" href="#\u63D0\u6B3E\u5230l1" aria-hidden="true">#</a> \u63D0\u6B3E\u5230L1</h4><p>\u7528\u6237\u8C03\u7528\u53D6\u6B3E\u64CD\u4F5C\u5728 L2 bradge \u5408\u7EA6\u4E0A\uFF0C\u5C06\u4F1A\u89E6\u53D1\u4EE5\u4E0B\u52A8\u4F5C\uFF1A</p><ul><li>L2\u7684token\u4F1A\u88ABburn\u6389</li><li>\u4E00\u4E2A L2-&gt;L1 \u7684\u6D88\u606F\u5173\u4E8E\u63D0\u6B3E\u7684 \u4F1A\u88AB\u53D1\u9001</li><li>\u4E4B\u540E\uFF0C\u64A4\u56DE\u64CD\u4F5C\u5C06\u53EF\u7531L1 bradge \u4E2D\u7684\u4EFB\u4F55\u4EBA\u6700\u7EC8\u5B8C\u6210\uFF08\u901A\u8FC7\u8BC1\u660E\u5305\u542BL2-&gt;L1\u6D88\u606F\uFF0C\u8FD9\u662F\u5728\u8C03\u7528L1 \u7F51\u6865\u4E2D\u7684\u7684finlizeWithdraw\u65B9\u6CD5\u65F6\u5B8C\u6210\u7684\uFF09</li><li>\u8C03\u7528\u65B9\u6CD5\u540E\uFF0C\u8D44\u91D1\u4ECEL1 bradge \u89E3\u9501\u5E76\u53D1\u9001\u7ED9\u63D0\u6B3E\u63A5\u6536\u8005</li></ul><p>warning \uFF1A</p><p>\u5728\u6D4B\u8BD5\u7F51\u73AF\u5883\u4E0A\uFF0C\u6211\u4EEC\u4F1A\u81EA\u52A8\u786E\u5B9A\u6240\u6709\u63D0\u6B3E\uFF0C\u5373\uFF0C\u5BF9\u4E8E\u6BCF\u6B21\u63D0\u6B3E\uFF0C\u6211\u4EEC\u5C06\u901A\u8FC7\u8FDB\u884CL1\u4EA4\u6613\u6765\u7167\u987E\u5B83\uFF0C\u4EE5\u8BC1\u660E\u6BCF\u6761\u6D88\u606F\u5305\u542B\u5728\u5185\u3002</p><h3 id="l1-l2\u4E92\u64CD\u4F5C\u6027" tabindex="-1"><a class="header-anchor" href="#l1-l2\u4E92\u64CD\u4F5C\u6027" aria-hidden="true">#</a> L1/L2\u4E92\u64CD\u4F5C\u6027</h3><h4 id="\u4F18\u5148\u7EA7\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5148\u7EA7\u961F\u5217" aria-hidden="true">#</a> \u4F18\u5148\u7EA7\u961F\u5217</h4><h4 id="l2-l1-\u6D88\u606F\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#l2-l1-\u6D88\u606F\u4F20\u9012" aria-hidden="true">#</a> L2-&gt;L1 \u6D88\u606F\u4F20\u9012</h4><p>\u4E0E L1 -&gt; L2 \u901A\u4FE1\u76F8\u53CD\uFF0C\u4EC5\u57FA\u4E8E\u4F20\u8F93\u4FE1\u606F\uFF0C\u800C\u4E0D\u662F\u57FA\u4E8E L1 \u4E0A\u7684\u4E8B\u52A1\u6267\u884C\u3002\u5B83\u662F\u4E00\u4E2A\u5185\u7F6E\u529F\u80FD\uFF0C\u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF1A\u4ECE L2 \u53D1\u9001\u6D88\u606F\u548C\u5728 L1 \u4E0A\u8BFB\u53D6\u6D88\u606F\u3002\u7B2C\u4E00\u4E2A\u662F\u4F5C\u4E3A\u5BF9 L2 \u7CFB\u7EDF\u667A\u80FD\u5408\u7EA6\u7684\u8C03\u7528\u6765\u5B9E\u73B0\u7684\u3002\u7B2C\u4E8C\u4E2A\u662F\u5728 zkSync L1 \u667A\u80FD\u5408\u7EA6\u4E0A\u4F5C\u4E3A getter \u51FD\u6570\u5B9E\u73B0\u7684\u3002</p><p>\u53D1\u9001\u6D88\u606F\uFF1A</p><p>\u4ECE L2 \u53D1\u9001\u5230 L1 \u7684\u6BCF\u6761\u6D88\u606F\u90FD\u5305\u542B\u53D1\u9001\u8005\u7684\u5730\u5740\u548C\u6D88\u606F\u672C\u8EAB\u3002\u6D88\u606F\u7684\u957F\u5EA6\u53EF\u4EE5\u4EFB\u610F\u5927\uFF0C\u4F46\u662F\u6D88\u606F\u8D8A\u957F\uFF0C\u53D1\u9001\u7684\u6210\u672C\u5C31\u8D8A\u9AD8\u3002\u64CD\u4F5C\u5458\u5FC5\u987B\u5305\u62EC\u76F8\u5E94 merkle \u6839\u7684\u6240\u6709\u6D88\u606F\uFF08\u89C1\u4E0B\u4E00\u6BB5\uFF09\u3002\u56E0\u6B64\uFF0C\u6240\u6709\u6D88\u606F\u90FD\u662F\u516C\u5F00\u53EF\u7528\u7684\uFF0C\u4E0D\u5FC5\u4F9D\u8D56\u8FD0\u8425\u5546\u6765\u62AB\u9732\u5B83\u4EEC</p><p>\u9605\u8BFB\u6D88\u606F</p>',32),c={href:"https://v2-docs.zksync.io/api/api.html#zksgetl2tol1msgproof",target:"_blank",rel:"noopener noreferrer"},L=e("p",null,"\u603B\u7ED3\uFF1A",-1),p=e("ul",null,[e("li",null,"L2 -> L1 \u901A\u4FE1\u9700\u8981 L2 \u4E0A\u7684\u4E00\u4E2A\u4E8B\u52A1\u548C L1 \u4E0A\u7684\u4E00\u4E2A\u4E8B\u52A1\u3002"),e("li",null,"\u6D88\u606F\u53EF\u4EE5\u662F\u4EFB\u610F\u957F\u5EA6\u3002"),e("li",null,"\u8BC1\u660E\u6D88\u606F\u5305\u542B\u5728 L2 \u5757\u4E2D\u6240\u9700\u7684\u6240\u6709\u6570\u636E\u59CB\u7EC8\u53EF\u4EE5\u4ECE\u4EE5\u592A\u574A\u6062\u590D\u3002\u4F46\u662F\uFF0C\u6700\u7B80\u5355\u7684\u65B9\u6CD5\u662F\u901A\u8FC7 API \u5411\u8FD0\u8425\u5546\u8BF7\u6C42\u8BC1\u660E\u3002")],-1),u=e("h2",{id:"l1-l2-\u4EA4\u6D41",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#l1-l2-\u4EA4\u6D41","aria-hidden":"true"},"#"),l(" L1->L2 \u4EA4\u6D41")],-1),k=e("p",null,"\u4EA4\u6613\u6709 base fee, \u57FA\u4E8E\u4EA4\u6613\u7684ergslimit \u548CL1\u4E0A\u7684gas price \u5F97\u51FA\u7684\uFF0C\u76EE\u524D\u6765\u8BF4L1-> L2\u7684\u4EA4\u6613\u90FD\u662F\u5148\u8FDB\u5148\u51FA\u65B9\u5F0F\u3002",-1);function _(f,b){const a=h("ExternalLinkIcon");return r(),n("div",null,[o,e("p",null,[l("\u53D1\u9001\u7684\u6BCF\u6761\u6D88\u606F\u90FD\u53EF\u4EE5\u5728\u94FE\u4E0A\u8BFB\u53D6\u3002\u6B64\u5916\uFF0C\u53EF\u4EE5\u8BC1\u660E\u6D88\u606F\u5DF2\u5728\u7279\u5B9A\u7684 L2 \u5757\u4E2D\u53D1\u9001\u3002\u4E3A\u4E86\u4F7F\u8FD9\u79CD\u8BC1\u660E\u5BF9\u7528\u6237\u548C\u8FD0\u8425\u5546\u90FD\u5C3D\u53EF\u80FD\u4FBF\u5B9C\uFF0C\u6211\u4EEC\u5C06\u6BCF\u4E2A L2 \u5757\u7684\u6240\u6709\u6D88\u606F\u5B58\u50A8\u5728 merkle \u6811\u4E2D\u3002\u56E0\u6B64\uFF0C\u4EFB\u4F55 L1 \u667A\u80FD\u5408\u7EA6\u90FD\u53EF\u4EE5\u901A\u8FC7\u63D0\u4F9B\u5305\u542B\u5728\u67D0\u4E2A L2 \u5757\u4E2D\u7684\u8BC1\u660E\u6765\u4F7F\u7528\u53D1\u9001\u7684\u6D88\u606F\u3002\u53EA\u80FD\u57FA\u4E8E\u8FD0\u8425\u5546\u53D1\u9001\u7ED9 zkSync L1 \u667A\u80FD\u5408\u7EA6\u7684\u6570\u636E\u751F\u6210\u8BC1\u660E\u3002\u4E5F\u53EF\u4EE5\u901A\u8FC7"),e("a",c,[l("API"),t(a)]),l("\u83B7\u5F97\u8BC1\u660E")]),L,p,u,k])}const y=i(s,[["render",_],["__file","zksync2.0.html.vue"]]);export{y as default};
