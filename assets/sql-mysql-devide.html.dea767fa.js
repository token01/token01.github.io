import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as h,a,b as d,d as n,f as s,r as l}from"./app.364af573.js";const t={},c=s('<h1 id="mysql-\u5206\u8868\u5206\u5E93" tabindex="-1"><a class="header-anchor" href="#mysql-\u5206\u8868\u5206\u5E93" aria-hidden="true">#</a> MySQL - \u5206\u8868\u5206\u5E93</h1><h2 id="_1-\u6C34\u5E73\u5207\u5206" tabindex="-1"><a class="header-anchor" href="#_1-\u6C34\u5E73\u5207\u5206" aria-hidden="true">#</a> 1. \u6C34\u5E73\u5207\u5206</h2><p>\u6C34\u5E73\u5207\u5206\u53C8\u79F0\u4E3A Sharding\uFF0C\u5B83\u662F\u5C06\u540C\u4E00\u4E2A\u8868\u4E2D\u7684\u8BB0\u5F55\u62C6\u5206\u5230\u591A\u4E2A\u7ED3\u6784\u76F8\u540C\u7684\u8868\u4E2D\u3002</p><p>\u5F53\u4E00\u4E2A\u8868\u7684\u6570\u636E\u4E0D\u65AD\u589E\u591A\u65F6\uFF0CSharding \u662F\u5FC5\u7136\u7684\u9009\u62E9\uFF0C\u5B83\u53EF\u4EE5\u5C06\u6570\u636E\u5206\u5E03\u5230\u96C6\u7FA4\u7684\u4E0D\u540C\u8282\u70B9\u4E0A\uFF0C\u4ECE\u800C\u7F13\u89E3\u5355\u4E2A\u6570\u636E\u5E93\u7684\u538B\u529B\u3002</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220630203012598.png" alt="image-20220630203012598"><h2 id="_2-\u5782\u76F4\u5207\u5206" tabindex="-1"><a class="header-anchor" href="#_2-\u5782\u76F4\u5207\u5206" aria-hidden="true">#</a> 2. \u5782\u76F4\u5207\u5206</h2><p>\u5782\u76F4\u5207\u5206\u662F\u5C06\u4E00\u5F20\u8868\u6309\u5217\u5207\u5206\u6210\u591A\u4E2A\u8868\uFF0C\u901A\u5E38\u662F\u6309\u7167\u5217\u7684\u5173\u7CFB\u5BC6\u96C6\u7A0B\u5EA6\u8FDB\u884C\u5207\u5206\uFF0C\u4E5F\u53EF\u4EE5\u5229\u7528\u5782\u76F4\u5207\u5206\u5C06\u7ECF\u5E38\u88AB\u4F7F\u7528\u7684\u5217\u548C\u4E0D\u7ECF\u5E38\u88AB\u4F7F\u7528\u7684\u5217\u5207\u5206\u5230\u4E0D\u540C\u7684\u8868\u4E2D\u3002</p><p>\u5728\u6570\u636E\u5E93\u7684\u5C42\u9762\u4F7F\u7528\u5782\u76F4\u5207\u5206\u5C06\u6309\u6570\u636E\u5E93\u4E2D\u8868\u7684\u5BC6\u96C6\u7A0B\u5EA6\u90E8\u7F72\u5230\u4E0D\u540C\u7684\u5E93\u4E2D\uFF0C\u4F8B\u5982\u5C06\u539F\u6765\u7684\u7535\u5546\u6570\u636E\u5E93\u5782\u76F4\u5207\u5206\u6210\u5546\u54C1\u6570\u636E\u5E93\u3001\u7528\u6237\u6570\u636E\u5E93\u7B49\u3002</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220630203247107.png" alt="image-20220630203247107"><h2 id="_3-sharding-\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#_3-sharding-\u7B56\u7565" aria-hidden="true">#</a> 3. Sharding \u7B56\u7565</h2><ul><li>\u54C8\u5E0C\u53D6\u6A21: hash(key) % NUM_DB</li><li>\u8303\u56F4: \u53EF\u4EE5\u662F ID \u8303\u56F4\u4E5F\u53EF\u4EE5\u662F\u65F6\u95F4\u8303\u56F4</li><li>\u6620\u5C04\u8868: \u4F7F\u7528\u5355\u72EC\u7684\u4E00\u4E2A\u6570\u636E\u5E93\u6765\u5B58\u50A8\u6620\u5C04\u5173\u7CFB</li></ul><h2 id="_4-sharding-\u5B58\u5728\u7684\u95EE\u9898\u53CA\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_4-sharding-\u5B58\u5728\u7684\u95EE\u9898\u53CA\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 4. Sharding \u5B58\u5728\u7684\u95EE\u9898\u53CA\u89E3\u51B3\u65B9\u6848</h2><h3 id="_4-1-\u4E8B\u52A1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_4-1-\u4E8B\u52A1\u95EE\u9898" aria-hidden="true">#</a> 4.1 \u4E8B\u52A1\u95EE\u9898</h3><p>\u4F7F\u7528\u5206\u5E03\u5F0F\u4E8B\u52A1\u6765\u89E3\u51B3\uFF0C\u6BD4\u5982 XA \u63A5\u53E3\u3002</p><h3 id="_4-2-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#_4-2-\u94FE\u63A5" aria-hidden="true">#</a> 4.2 \u94FE\u63A5</h3><p>\u53EF\u4EE5\u5C06\u539F\u6765\u7684 JOIN \u5206\u89E3\u6210\u591A\u4E2A\u5355\u8868\u67E5\u8BE2\uFF0C\u7136\u540E\u5728\u7528\u6237\u7A0B\u5E8F\u4E2D\u8FDB\u884C JOIN\u3002</p><h3 id="_4-3-id-\u552F\u4E00\u6027" tabindex="-1"><a class="header-anchor" href="#_4-3-id-\u552F\u4E00\u6027" aria-hidden="true">#</a> 4.3 ID \u552F\u4E00\u6027</h3><ul><li>\u4F7F\u7528\u5168\u5C40\u552F\u4E00 ID: GUID</li><li>\u4E3A\u6BCF\u4E2A\u5206\u7247\u6307\u5B9A\u4E00\u4E2A ID \u8303\u56F4</li><li>\u5206\u5E03\u5F0F ID \u751F\u6210\u5668 (\u5982 Twitter \u7684 Snowflake \u7B97\u6CD5)</li></ul><h2 id="_5-\u6570\u636E\u5E93\u5206\u7247\u4E24\u79CD\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_5-\u6570\u636E\u5E93\u5206\u7247\u4E24\u79CD\u65B9\u6848" aria-hidden="true">#</a> 5. \u6570\u636E\u5E93\u5206\u7247\u4E24\u79CD\u65B9\u6848</h2><h3 id="_5-1-\u5BA2\u6237\u7AEF\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#_5-1-\u5BA2\u6237\u7AEF\u4EE3\u7406" aria-hidden="true">#</a> 5.1 \u5BA2\u6237\u7AEF\u4EE3\u7406</h3><p><strong>\u5206\u7247\u903B\u8F91\u5728\u5E94\u7528\u7AEF\uFF0C\u5C01\u88C5\u5728jar\u5305\u4E2D\uFF0C\u901A\u8FC7\u4FEE\u6539\u6216\u8005\u5C01\u88C5JDBC\u5C42\u6765\u5B9E\u73B0</strong></p><ul><li>\u5F53\u5F53\u7F51\u7684Sharding-JDBC</li><li>\u963F\u91CC\u7684TDDL\u662F\u4E24\u79CD\u6BD4\u8F83\u5E38\u7528\u7684\u5B9E\u73B0</li></ul><h3 id="_5-2-\u4E2D\u95F4\u4EF6\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#_5-2-\u4E2D\u95F4\u4EF6\u4EE3\u7406" aria-hidden="true">#</a> 5.2 \u4E2D\u95F4\u4EF6\u4EE3\u7406</h3><p><strong>\u5728\u5E94\u7528\u548C\u6570\u636E\u4E2D\u95F4\u52A0\u4E86\u4E00\u5C42\u4EE3\u7406\u5C42\uFF0C\u5206\u7247\u903B\u8F91\u7EDF\u4E00\u7EF4\u62A4\u5728\u4E2D\u95F4\u4EF6\u670D\u52A1\u4E2D</strong>\u3002</p><ul><li>Mycat</li><li>360\u7684Atlas</li><li>\u7F51\u6613\u7684DDB</li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',26),o={href:"https://pdai.tech/md/db/sql-mysql/sql-mysql-devide.html",target:"_blank",rel:"noopener noreferrer"};function _(p,g){const e=l("ExternalLinkIcon");return r(),h("div",null,[c,a("p",null,[a("a",o,[d("MySQL - \u5206\u8868\u5206\u5E93"),n(e)])])])}const f=i(t,[["render",_],["__file","sql-mysql-devide.html.vue"]]);export{f as default};
