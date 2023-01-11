import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as o,a as e,b as t,d as n,f as d,r as a}from"./app.333ff1c5.js";const c={},s=e("h2",{id:"\u6982\u5FF5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6982\u5FF5","aria-hidden":"true"},"#"),t(" \u6982\u5FF5")],-1),l=e("p",null,"libp2p\u533A\u5206\u4E86peer \u7684\u8EAB\u4EFD\u548C\u4F4D\u7F6E\u3002peer \u7684\u8EAB\u4EFD\u662F\u7A33\u5B9A\u7684\u3001\u53EF\u9A8C\u8BC1\u7684\uFF0C\u5E76\u4E14\u5728\u5BF9\u7B49\u65B9\u7684\u6574\u4E2A\u751F\u547D\u5468\u671F\u5185\u6709\u6548\uFF0C peer \u8EAB\u4EFD\u6E90\u4E8E\u5BF9\u7B49id\u89C4\u8303\u4E2D\u63CF\u8FF0\u7684\u516C\u94A5\u3002",-1),_=e("p",null,"\u5728\u7279\u5B9A\u7684\u7F51\u7EDC\u4E0A\uFF0C\u5728\u7279\u5B9A\u7684\u65F6\u95F4\u70B9\uFF0Cpeer\u53EF\u80FD\u6709\u4E00\u4E2A\u6216\u591A\u4E2A\u4F4D\u7F6E\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5730\u5740\u8868\u793A\u3002\u4F8B\u5982\uFF0C\u53EF\u4EE5\u901A\u8FC7TCP\u7AEF\u53E31234\u4E0A7.7.7.7\u7684\u5168\u5C40IPv4\u5730\u5740\u8BBF\u95EE.",-1),m=e("strong",null,"\u81EA\u6211\u63CF\u8FF0\u65B9\u5F0F",-1),u={href:"https://github.com/multiformats/multiaddr",target:"_blank",rel:"noopener noreferrer"},h=d(`<p>\u591A\u5730\u5740\u5728\u6574\u4E2Alibp2p\u4E2D\u7528\u4E8E\u7F16\u7801\u7F51\u7EDC\u5730\u5740\u3002\u5F53\u5730\u5740\u9700\u8981\u5728\u8FDB\u7A0B\u4E4B\u95F4\u5171\u4EAB\u6216\u4EA4\u6362\u65F6\uFF0C\u5B83\u4EEC\u88AB\u7F16\u7801\u4E3Amultiaddr\u7684\u4E8C\u8FDB\u5236\u8868\u793A\u3002</p><p>\u5F53\u4EA4\u6362\u5730\u5740\u65F6\uFF0C\u5BF9\u7B49\u7AEF\u53D1\u9001\u4E00\u4E2A\u5305\u542B\u5176\u7F51\u7EDC\u5730\u5740\u548C\u5BF9\u7B49\u7AEFid\u7684\u591A\u5730\u5740\uFF0C\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/ip4/7.7.7.7/tcp/1234/p2p/QmYyQSo1c1Ym7orWxLYvCrM2EmxFTANf8wXmmE7DWjhx5N
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u591A\u5730\u5740\u662F\u53EF\u4EE5\u904D\u5386\u5230\u67D0\u4E2A\u76EE\u6807\u7684\u6307\u4EE4\u5E8F\u5217\u3002</p><p>\u4F8B\u5982\uFF0C/ip4/7.7.7.7/tcp/1234\u591A\u5730\u5740\u4EE5ip4\u5F00\u5934\uFF0C\u8FD9\u662F\u9700\u8981\u5730\u5740\u7684\u6700\u4F4E\u7EA7\u522B\u534F\u8BAE\u3002tcp\u534F\u8BAE\u8FD0\u884C\u5728ip4\u4E4B\u4E0A\uFF0C\u6240\u4EE5\u5B83\u662F\u4E0B\u4E00\u4E2A\u3002</p><p>\u4E0A\u9762\u7684multiaddr\u7531\u4E24\u4E2A\u7EC4\u4EF6\u7EC4\u6210\uFF0C/ip4/7.7.7.7\u7EC4\u4EF6\u548C/tcp/1234\u7EC4\u4EF6\u3002\u4E0D\u53EF\u80FD\u518D\u5206\u5F00\u4E00\u4E2A/\u4EC5ip4\u662F\u65E0\u6548\u7684\u591A\u5730\u5740\uFF0C\u56E0\u4E3Aip4\u534F\u8BAE\u88AB\u5B9A\u4E49\u4E3A\u9700\u898132\u4F4D\u5730\u5740\u3002\u540C\u6837\uFF0Ctcp\u9700\u898116\u4F4D\u7AEF\u53E3\u53F7\u3002</p><p>\u5C3D\u7BA1\u6211\u4EEC\u5C06/ip4/7.7.7.7\u548C/tcp/1234\u79F0\u4E3A\u8F83\u5927tcp/IP\u5730\u5740\u7684\u201C\u7EC4\u4EF6\u201D\uFF0C\u4F46\u6839\u636Emultiaddr\u89C4\u8303\uFF0C\u5B83\u4EEC\u5B9E\u9645\u4E0A\u90FD\u662F\u6709\u6548\u7684\u591A\u5730\u5740\u3002\u7136\u800C\uFF0C\u5E76\u975E\u6BCF\u4E2A\u8BED\u6CD5\u4E0A\u6709\u6548\u7684\u591A\u5740\u90FD\u662F\u7F51\u7EDC\u4E2D\u8FDB\u7A0B\u7684\u529F\u80FD\u63CF\u8FF0\u3002\u6B63\u5982\u6211\u4EEC\u6240\u770B\u5230\u7684\uFF0C\u5373\u4F7F\u662F\u4E00\u4E2A\u7B80\u5355\u7684TCP/IP\u8FDE\u63A5\u4E5F\u9700\u8981\u5C06\u4E24\u4E2A\u591A\u5730\u5740\u5408\u5E76\u4E3A\u4E00\u4E2A\u3002\u6709\u5173\u5982\u4F55\u7EC4\u5408\u591A\u5730\u5740\u7684\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u201C\u7EC4\u5408\u591A\u5730\u5740\u201D\u4E00\u8282\uFF0C\u6709\u5173\u63CF\u8FF0\u6709\u6548\u4F20\u8F93\u5730\u5740\u7684\u7EC4\u5408\uFF0C\u8BF7\u53C2\u9605\u4F20\u8F93\u591A\u5730\u5740\u4E00\u8282\u3002</p><p>multiaddr\u534F\u8BAE\u8868\u5305\u542B\u6240\u6709\u5F53\u524D\u5B9A\u4E49\u7684\u534F\u8BAE\u53CA\u5176\u5730\u5740\u7EC4\u4EF6\u7684\u957F\u5EA6\u3002</p>`,8);function f(x,b){const p=a("ExternalLinkIcon");return i(),o("div",null,[s,l,_,e("p",null,[t("Libp2p \u662F\u4E0D\u53D7\u4F20\u8F93\u9650\u5236\u7684\uFF0C\u4E0D\u5355\u5355\u662F\u53EA\u652F\u6301tcp/udp\u7684\u7F51\u7EDC\u3002\u4E3A\u4E86\u5B9E\u73B0\u8FD9\u4E2A\u76EE\u6807\uFF0C\u800C\u65E0\u9700\u4E13\u95E8\u8BC4\u4F30\u6BCF\u4E2A\u5BFB\u5740\u65B9\u6848\uFF0CLIBP2P\u4F7F\u7528MultiaDDR\u4EE5"),m,t("\u4E3A\u6240\u6709\u53D7\u652F\u6301\u7684\u4F20\u8F93\u534F\u8BAE\u7F16\u7801\u7F51\u7EDC\u5730\u5740\u3002"),e("a",u,[t("multiaddr\u683C\u5F0F\u4EE5\u53CA\u5176\u5B9E\u73B0"),n(p)]),t("\uFF0C")]),h])}const g=r(c,[["render",f],["__file","Introduction_to_libp2p_multiAddress_network.html.vue"]]);export{g as default};
