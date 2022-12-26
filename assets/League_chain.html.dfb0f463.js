import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,a as e,b as t,d as r,f as i,r as d}from"./app.f90ce353.js";const c={},h=e("hr",null,null,-1),s=e("p",null,"BSN \u533A\u5757\u94FE\u670D\u52A1\u7F51\u7EDC\uFF08Blockchain-based Service Network\uFF09",-1),u={href:"http://kb.bsnbase.com/webdoc/view/Pub4028813e711a7c39017185cacb7b5640.html",target:"_blank",rel:"noopener noreferrer"},_=e("li",null,[e("p",null,"Hyperledger Fabric (\u6709\u56FD\u5BC6\u7248Fabric)")],-1),p=e("li",null,[e("p",null,"FISCO BCOS \uFF08\u652F\u6301\u56FD\u5BC6\uFF09")],-1),b={href:"https://github.com/citahub/cita",target:"_blank",rel:"noopener noreferrer"},f=e("li",null,[e("p",null,"\u68A7\u6850\u94FE")],-1),k=e("li",null,[e("p",null,"Brochain")],-1),S={href:"https://github.com/xuperchain/xuperchain",target:"_blank",rel:"noopener noreferrer"},g={id:"fisco-bcos",tabindex:"-1"},B=e("a",{class:"header-anchor",href:"#fisco-bcos","aria-hidden":"true"},"#",-1),C={href:"https://github.com/FISCO-BCOS/FISCO-BCOS",target:"_blank",rel:"noopener noreferrer"},m=i('<ul><li><p>\u4FDD\u969C\u4FE1\u606F\u4FDD\u5BC6\u6027\u3001\u8BA4\u8BC1\u6027\u3001\u5B8C\u6574\u6027\u3001\u4E0D\u53EF\u62B5\u8D56\u6027\uFF0C\u9700\u91C7\u7528CA\u7684\u51C6\u5165\u673A\u5236\uFF0C\u5E76\u652F\u6301\u4EFB\u610F\u591A\u7EA7\u7684\u8BC1\u4E66\u7ED3\u6784\u3002<br> \u9ED8\u8BA4\u91C7\u7528\u4E09\u7EA7\u7684\u8BC1\u4E66\u7ED3\u6784\uFF0C\u81EA\u4E0A\u800C\u4E0B\u5206\u522B\u4E3A\u94FE\u8BC1\u4E66\u3001\u673A\u6784\u8BC1\u4E66\u3001\u8282\u70B9\u8BC1\u4E66\u3002</p><ul><li><p>\u94FE\u8BC1\u4E66: \u8054\u76DF\u94FE\u62E5\u6709\u552F\u4E00\u7684\u94FE\u8BC1\u4E66</p><blockquote><p>\u8BC1\u4E66<code>ca.crt</code> , \u79C1\u94A5<code>ca.key</code> , \u7B7E\u53D1\u8BC1\u4E66\u7684\u5E8F\u5217\u53F7\u8BB0\u5F55\u6587\u4EF6<code>ca.srl</code></p></blockquote></li><li><p>\u673A\u6784\u8BC1\u4E66\uFF1A</p><blockquote><p>\u673A\u6784\u8BC1\u4E66<code>agency.crt</code> , \u673A\u6784\u79C1\u94A5<code>agency.key</code> , <code>agency.srl</code></p></blockquote></li><li><p>\u8282\u70B9\u8BC1\u4E66\uFF1A\u7531\u673A\u6784\u81EA\u5DF1\u751F\u4EA7\uFF0C\u6BCF\u4E2A\u673A\u6784\u90FD\u53EF\u4EE5\u62E5\u6709\u591A\u4E2A\u8282\u70B9</p></li></ul></li><li><p>\u5F15\u5165\u591A\u7FA4\u7EC4\u67B6\u6784\uFF0C\u652F\u6301\u533A\u5757\u94FE\u8282\u70B9\u542F\u52A8\u591A\u4E2A\u7FA4\u7EC4\uFF0C\u7FA4\u7EC4\u95F4\u4EA4\u6613\u5904\u7406\u3001\u6570\u636E\u5B58\u50A8\u3001\u533A\u5757\u5171\u8BC6\u76F8\u4E92\u9694\u79BB\uFF0C\u4FDD\u969C\u533A\u5757\u94FE\u7CFB\u7EDF\u9690\u79C1\u6027\u7684\u540C\u65F6\uFF0C\u964D\u4F4E\u4E86\u7CFB\u7EDF\u7684\u8FD0\u7EF4\u590D\u6742\u5EA6</p><blockquote><p>\u673A\u6784A\u3001B\u3001C\u6240\u6709\u8282\u70B9\u6784\u6210\u4E00\u4E2A\u533A\u5757\u94FE\u7F51\u7EDC\uFF0C\u8FD0\u884C\u4E1A\u52A11\uFF1B\u4E00\u6BB5\u65F6\u95F4\u540E\uFF0C\u673A\u6784A\u3001B\u542F\u52A8\u4E1A\u52A12\uFF0C\u4E14\u4E0D\u5E0C\u671B\u8BE5\u4E1A\u52A1\u76F8\u5173\u6570\u636E\u3001\u4EA4\u6613\u5904\u7406\u88AB\u673A\u6784C\u611F\u77E5\uFF0C\u6709\u4F55\u89E3\uFF1F</p></blockquote><p>\u4E00\u822C\u7406\u89E3\u7FA4\u7EC4\u4E2A\u6570\u53EF\u4EE5\u8FBE\u5230\u6574\u6570\u4E0A\u9650\uFF0C\u4F46\u7531\u4E8E\u786C\u4EF6\u7684\u9650\u5236\uFF0C\u5E94\u91C7\u7528\u8FD9\u79CD\u6781\u7AEF\u7684\u8BBE\u8BA1\uFF0C\u673A\u6784\u53EF\u4EE5\u4E3A\u4E0D\u540C\u7684\u4E1A\u52A1\u4F7F\u7528\u4E0D\u540C\u7684\u8282\u70B9\u53BB\u52A0\u4E86\u5BF9\u5E94\u7FA4\u7EC4\u6765\u89E3\u51B3\u591A\u4E1A\u52A1\u95EE\u9898\u3002</p><blockquote><p>100\u4E2A\u7FA4\u7EC4\u90FD\u843D\u5728\u4E00\u4E2A\u8282\u70B9\u4E0A\u53EF\u80FD\u9700\u8981\u300264\u6838\uFF0C128g\u5185\u5B58\uFF0C\u767E\u5146\u5916\u7F51\u5E26\u5BBD\uFF0C4T\u786C\u76D8\u4EE5\u4E0A\u3002\u8FD9\u662F\u57FA\u672C\u7684\u3002\u5982\u679C\u4E1A\u52A1\u6709\u4E0A\u91CF\u8FD8\u5F97\u52A0</p></blockquote></li></ul><h3 id="\u8282\u70B9\u51C6\u5165\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B9\u51C6\u5165\u673A\u5236" aria-hidden="true">#</a> \u8282\u70B9\u51C6\u5165\u673A\u5236</h3><p>CA\u9ED1\u767D\u540D\u5355</p><ul><li>\u7FA4\u7EC4\u8282\u70B9\uFF1A\u5171\u8BC6\u8282\u70B9\uFF0C\u89C2\u5BDF\u8282\u70B9</li><li>\u6E38\u79BB\u8282\u70B9\uFF1A\u5B8C\u6210\u7F51\u7EDC\u51C6\u5165\u4F46\u6CA1\u6709\u52A0\u5165\u7FA4\u7EC4\u7684\u8282\u70B9\uFF0C\u4E0D\u53C2\u4E0E\u5171\u8BC6\u548C\u540C\u6B65</li></ul><h4 id="\u7F51\u7EDC\u51C6\u5165\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u51C6\u5165\u673A\u5236" aria-hidden="true">#</a> \u7F51\u7EDC\u51C6\u5165\u673A\u5236</h4><h4 id="\u7FA4\u7EC4\u51C6\u5165\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u7FA4\u7EC4\u51C6\u5165\u673A\u5236" aria-hidden="true">#</a> \u7FA4\u7EC4\u51C6\u5165\u673A\u5236</h4><p><strong>\u4EA4\u6613\u6D41\u7A0B</strong></p><ul><li>\u7528\u6237\u901A\u8FC7\u64CD\u4F5CSDK\u6216\u76F4\u63A5\u7F16\u5199curl\u547D\u4EE4\u5411\u6240\u8FDE\u63A5\u7684\u8282\u70B9\u53D1\u8D77\u4EA4\u6613\u3002</li><li>\u8282\u70B9\u6536\u5230\u4EA4\u6613\u540E\uFF0C\u82E5\u5F53\u524D\u4EA4\u6613\u6C60\u672A\u6EE1\u5219\u5C06\u4EA4\u6613\u9644\u52A0\u81F3TxPool\u4E2D\u5E76\u5411\u81EA\u5DF1\u6240\u8FDE\u7684\u8282\u70B9\u5E7F\u64AD\u8BE5\u4EA4\u6613\uFF1B\u5426\u5219\u4E22\u5F03\u4EA4\u6613\u5E76\u8F93\u51FA\u544A\u8B66\u3002</li><li>Sealer(\u6253\u5305\u5668)\u4F1A\u4E0D\u65AD\u4ECE\u4EA4\u6613\u6C60\u4E2D\u53D6\u51FA\u4EA4\u6613\uFF0C\u5E76\u7ACB\u5373\u5C06\u6536\u96C6\u5230\u7684\u4EA4\u6613\u6253\u5305\u4E3A\u533A\u5757\u5E76\u53D1\u9001\u81F3\u5171\u8BC6\u5F15\u64CE\u3002</li><li>\u5171\u8BC6\u5F15\u64CE\u8C03\u7528BlockVerifier\u5BF9\u533A\u5757\u8FDB\u884C\u9A8C\u8BC1\u5E76\u5728\u7F51\u7EDC\u4E2D\u8FDB\u884C\u5171\u8BC6\uFF0CBlockVerifier\u8C03\u7528Executor\u6267\u884C\u533A\u5757\u4E2D\u7684\u6BCF\u7B14\u4EA4\u6613\u3002\u5F53\u533A\u5757\u9A8C\u8BC1\u65E0\u8BEF\u4E14\u7F51\u7EDC\u4E2D\u8282\u70B9\u8FBE\u6210\u4E00\u81F4\u540E\uFF0C\u5171\u8BC6\u5F15\u64CE\u5C06\u533A\u5757\u53D1\u9001\u81F3BlockChain\u3002</li><li>BlockChain\u6536\u5230\u533A\u5757\uFF0C\u5BF9\u533A\u5757\u4FE1\u606F\uFF08\u5982\u5757\u9AD8\u7B49\uFF09\u8FDB\u884C\u68C0\u67E5\uFF0C\u5E76\u5C06\u533A\u5757\u6570\u636E\u4E0E\u8868\u6570\u636E\u5199\u5165\u5E95\u5C42\u5B58\u50A8\u4E2D\uFF0C\u5B8C\u6210\u533A\u5757\u4E0A\u94FE\u3002</li></ul><p><strong>\u4EA4\u6613\u540C\u6B65</strong></p><ul><li>\u4E00\u7B14\u4EA4\u6613\u901A\u8FC7channel\u6216RPC\u53D1\u9001\u5230\u67D0\u8282\u70B9\u4E0A</li><li>\u6536\u5230\u4EA4\u6613\u7684\u8282\u70B9\u5168\u91CF\u5E7F\u64AD\u6B64\u4EA4\u6613\u7ED9\u5176\u5B83\u8282\u70B9</li><li>\u5176\u5B83\u8282\u70B9\u6536\u5230\u4EA4\u6613\u540E\uFF0C\u4E3A\u4E86\u4FDD\u9669\u8D77\u89C1\uFF0C\u9009\u62E925%\u7684\u8282\u70B9\u518D\u5E7F\u64AD\u4E00\u6B21</li><li>\u8282\u70B9\u6536\u5230\u5E7F\u64AD\u8FC7\u7684\u4EA4\u6613\uFF0C\u4E0D\u4F1A\u518D\u6B21\u5E7F\u64AD</li></ul><h3 id="\u56FD\u5BC6\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u56FD\u5BC6\u7B97\u6CD5" aria-hidden="true">#</a> \u56FD\u5BC6\u7B97\u6CD5</h3><table><thead><tr><th></th><th>\u6807\u51C6\u7248FISCO BCOS</th><th>\u56FD\u5BC6\u7248FISCO BCOS</th></tr></thead><tbody><tr><td>SSL\u94FE\u63A5</td><td>Openssl TLSv1.2\u534F\u8BAE</td><td>\u56FD\u5BC6TLSv1.1\u534F\u8BAE</td></tr><tr><td>\u7B7E\u540D\u9A8C\u8BC1</td><td>ECDSA\u7B7E\u540D\u7B97\u6CD5</td><td>SM2\u7B7E\u540D\u7B97\u6CD5</td></tr><tr><td>\u6D88\u606F\u6458\u8981\u7B97\u6CD5</td><td>SHA-256 SHA-3</td><td>SM3\u6D88\u606F\u6458\u8981\u7B97\u6CD5</td></tr><tr><td>\u843D\u76D8\u52A0\u5BC6\u7B97\u6CD5</td><td>AES-256\u52A0\u5BC6\u7B97\u6CD5</td><td>SM4\u52A0\u5BC6\u7B97\u6CD5</td></tr><tr><td>\u8BC1\u4E66\u6A21\u5F0F</td><td>OpenSSL\u8BC1\u4E66\u6A21\u5F0F</td><td>\u56FD\u5BC6\u53CC\u8BC1\u4E66\u6A21\u5F0F</td></tr><tr><td>\u5408\u7EA6\u7F16\u8BD1\u5668</td><td>\u4EE5\u592A\u574Asolidity\u7F16\u8BD1\u5668</td><td>\u56FD\u5BC6solidity\u7F16\u8BD1\u5668</td></tr></tbody></table>',12),x={href:"https://fisco-bcos-documentation.readthedocs.io/zh_CN/latest/docs/design/features/guomi.html",target:"_blank",rel:"noopener noreferrer"},y={id:"webase",tabindex:"-1"},O=e("a",{class:"header-anchor",href:"#webase","aria-hidden":"true"},"#",-1),A={href:"https://github.com/WeBankFinTech/WeBASE",target:"_blank",rel:"noopener noreferrer"},I={id:"weidentity",tabindex:"-1"},F=e("a",{class:"header-anchor",href:"#weidentity","aria-hidden":"true"},"#",-1),q={href:"https://github.com/WeBankFinTech/WeIdentity",target:"_blank",rel:"noopener noreferrer"},w={id:"wedpr",tabindex:"-1"},L=e("a",{class:"header-anchor",href:"#wedpr","aria-hidden":"true"},"#",-1),W={href:"https://github.com/WeBankBlockchain/WeDPR-Lab-Core",target:"_blank",rel:"noopener noreferrer"};function E(N,T){const o=d("ExternalLinkIcon");return n(),a("div",null,[h,e("ul",null,[e("li",null,[s,e("blockquote",null,[e("p",null,[t("\u662F\u4E00\u4E2A\u8DE8\u4E91\u670D\u52A1\u3001\u8DE8\u95E8\u6237\u3001\u8DE8\u5E95\u5C42\u6846\u67B6\uFF0C\u7528\u4E8E\u90E8\u7F72\u548C\u8FD0\u884C\u533A\u5757\u94FE\u5E94\u7528\u7684\u5168\u7403\u6027\u516C\u5171\u57FA\u7840\u8BBE\u65BD\u7F51\u7EDC\uFF0C\u7531\u56FD\u5BB6\u4FE1\u606F\u4E2D\u5FC3\u3001\u4E2D\u56FD\u79FB\u52A8\u901A\u4FE1\u96C6\u56E2\u516C\u53F8\u3001\u4E2D\u56FD\u94F6\u8054\u80A1\u4EFD\u6709\u9650\u516C\u53F8\u3001\u5317\u4EAC\u7EA2\u67A3\u79D1\u6280\u6709\u9650\u516C\u53F8\u5171\u540C\u53D1\u8D77 "),e("a",u,[t("BSN\u57F9\u8BAD"),r(o)])])])]),_,p,e("li",null,[e("p",null,[e("a",b,[t("CITA"),r(o)])])]),f,k,e("li",null,[e("p",null,[e("a",S,[t("XuperChain"),r(o)])])])]),e("h2",g,[B,t(),e("a",C,[t("FISCO BCOS"),r(o)])]),m,e("p",null,[e("a",x,[t("\u8BE6\u7EC6"),r(o)])]),e("h3",y,[O,t(),e("a",A,[t("WeBASE"),r(o)])]),e("h3",I,[F,t(),e("a",q,[t("WeIdentity"),r(o)])]),e("h3",w,[L,t(),e("a",W,[t("WeDPR"),r(o)])])])}const P=l(c,[["render",E],["__file","League_chain.html.vue"]]);export{P as default};
