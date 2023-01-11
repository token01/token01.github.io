import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as i,f as l}from"./app.0eb3f08c.js";const r={},t=l('<h1 id="\u5927\u8868\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u5927\u8868\u4F18\u5316" aria-hidden="true">#</a> \u5927\u8868\u4F18\u5316</h1><p>\u5F53MySQL\u5355\u8868\u8BB0\u5F55\u6570\u636E\u8FC7\u5927\uFF0C\u6570\u636E\u5E93\u7684CRUD\u6027\u80FD\u4F1A\u660E\u663E\u4E0B\u964D\uFF0C\u4E00\u4E9B\u5E38\u89C1\u7684\u4F18\u5316\u63AA\u65BD</p><h2 id="_1-\u9650\u5236\u6570\u636E\u7684\u8303\u56F4" tabindex="-1"><a class="header-anchor" href="#_1-\u9650\u5236\u6570\u636E\u7684\u8303\u56F4" aria-hidden="true">#</a> 1. \u9650\u5236\u6570\u636E\u7684\u8303\u56F4</h2><p>\u52A1\u5FC5\u7981\u6B62\u4E0D\u5E26\u4EFB\u4F55\u9650\u5236\u6570\u636E\u8303\u56F4\u7684\u67E5\u8BE2\u8BED\u53E5</p><blockquote><p>\u4F8B\u5982\uFF1A\u6211\u4EEC\u5F53\u7528\u6237\u5728\u67E5\u8BE2\u8BA2\u5355\u5386\u53F2\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u63A7\u5236\u5728\u4E00\u4E2A\u8303\u56F4\u5185\uFF1B</p></blockquote><h2 id="_2-\u8BFB-\u5199\u5206\u79BB" tabindex="-1"><a class="header-anchor" href="#_2-\u8BFB-\u5199\u5206\u79BB" aria-hidden="true">#</a> 2. \u8BFB/\u5199\u5206\u79BB</h2><p>\u7ECF\u5178\u7684\u6570\u636E\u5E93\u62C6\u5206\u65B9\u6848\uFF0C\u4E3B\u5E93\u8D1F\u8D23\u5199\uFF0C\u4ECE\u5E93\u8D1F\u8D23\u8BFB</p><h2 id="_3-\u5782\u76F4\u5206\u533A" tabindex="-1"><a class="header-anchor" href="#_3-\u5782\u76F4\u5206\u533A" aria-hidden="true">#</a> 3. \u5782\u76F4\u5206\u533A</h2><p><strong>\u6839\u636E\u6570\u636E\u5E93\u91CC\u9762\u7684\u6570\u636E\u8868\u7684\u76F8\u5173\u6027\u8FDB\u884C\u62C6\u5206</strong></p><blockquote><p>\u4F8B\u5982\uFF1A\u7528\u6237\u8868\u4E2D\u65E2\u6709\u7528\u6237\u767B\u5F55\u4FE1\u606F\u53C8\u6709\u7528\u6237\u57FA\u672C\u4FE1\u606F\uFF0C\u53EF\u4EE5\u5C06\u7528\u6237\u8868\u62C6\u5206\u6210\u4E24\u4E2A\u5355\u72EC\u7684\u8868\uFF0C\u751A\u81F3\u653E\u5230\u5355\u72EC\u7684\u5E93\u505A\u5206\u5E93</p></blockquote><p><strong>\u7B80\u5355\u6765\u8BF4\u5782\u76F4\u62C6\u5206\u662F\u6307\u6570\u636E\u8868\u5217\u7684\u62C6\u5206\uFF0C\u628A\u4E00\u5F20\u5217\u6BD4\u8F83\u591A\u7684\u8868\u62C6\u5206\u4E3A\u591A\u5F20\u8868</strong></p><p>\u5982\u4E0B\u56FE</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190913195804469.png" alt="image-20190913195804469"></p><h3 id="_3-1-\u5782\u76F4\u62C6\u5206\u7684\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5782\u76F4\u62C6\u5206\u7684\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> 3.1 \u5782\u76F4\u62C6\u5206\u7684\u4F18\u7F3A\u70B9</h3><ul><li><p>\u4F18\u70B9</p><ul><li>\u53EF\u4EE5\u4F7F\u5F97\u5217\u6570\u636E\u53D8\u5C0F\uFF0C\u5728\u67E5\u8BE2\u65F6\u51CF\u5C11\u8BFB\u53D6\u7684block\u6570\uFF0C\u51CF\u5C11I/O\u6B21\u6570</li><li>\u7B80\u5316\u8868\u7ED3\u6784\uFF0C\u6613\u4E8E\u7EF4\u62A4</li></ul></li><li><p>\u7F3A\u70B9</p><ul><li>\u4E3B\u952E\u4F1A\u51FA\u73B0\u5197\u4F59\uFF0C\u9700\u8981\u7BA1\u7406\u5197\u4F59\u5217</li><li>\u5E76\u4F1A\u5F15\u8D77join\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5728\u5E94\u7528\u5C42\u8FDB\u884CJoin\u6765\u89E3\u51B3</li><li>\u4F1A\u8BA9\u4E8B\u52A1\u53D8\u5F97\u66F4\u52A0\u590D\u6742</li></ul></li></ul><h2 id="_4-\u6C34\u5E73\u5206\u533A" tabindex="-1"><a class="header-anchor" href="#_4-\u6C34\u5E73\u5206\u533A" aria-hidden="true">#</a> 4. \u6C34\u5E73\u5206\u533A</h2><p><strong>\u4FDD\u6301\u6570\u636E\u8868\u7ED3\u6784\u4E0D\u53D8\uFF0C\u901A\u8FC7\u67D0\u79CD\u7B56\u7565\u5B58\u50A8\u6570\u636E\u5206\u7247\uFF0C\u8FD9\u6837\u6BCF\u4E00\u7247\u6570\u636E\u5206\u6563\u5230\u4E0D\u540C\u7684\u8868\u6216\u8005\u5E93\u4E2D\uFF0C\u8FBE\u5230\u4E86\u5206\u5E03\u5F0F\u7684\u76EE\u7684\u3002\u6C34\u5E73\u62C6\u5206\u53EF\u4EE5\u652F\u6301\u975E\u5E38\u5927\u7684\u6570\u636E\u91CF</strong></p><p>\u6C34\u5E73\u62C6\u5206\u662F\u6307\u6570\u636E\u8868\u884C\u7684\u62C6\u5206\uFF0C\u8868\u7684\u884C\u6570\u8D85\u8FC7200\u4E07\u884C\u65F6\uFF0C\u5C31\u4F1A\u53D8\u6162\uFF0C\u8FD9\u65F6\u53EF\u4EE5\u628A\u4E00\u5F20\u7684\u8868\u7684\u6570\u636E\u62C6\u6210\u591A\u5F20\u8868\u6765\u5B58\u653E\u3002</p><blockquote><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u7528\u6237\u4FE1\u606F\u8868\u62C6\u5206\u6210\u591A\u4E2A\u7528\u6237\u4FE1\u606F\u8868\uFF0C\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u5355\u4E00\u8868\u6570\u636E\u91CF\u8FC7\u5927\u5BF9\u6027\u80FD\u9020\u6210\u7684\u5F71\u54CD</p></blockquote><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190913202054918.png" alt="image-20190913202054918"></p><p>\u6C34\u5E73\u62C6\u5206\u53EF\u4EE5<strong>\u652F\u6301\u975E\u5E38\u5927\u7684\u6570\u636E\u91CF</strong></p><p>\u9700\u8981\u6CE8\u610F\u7684\u4E00\u70B9\u662F\uFF1A\u5206\u8868\u4EC5\u4EC5\u662F\u89E3\u51B3\u4E86\u5355\u4E00\u8868\u6570\u636E\u8FC7\u5927\u7684\u95EE\u9898\uFF0C\u4F46\u7531\u4E8E\u8868\u7684\u6570\u636E\u8FD8\u662F\u5728\u540C\u4E00\u53F0\u673A\u5668\u4E0A\uFF0C\u5176\u5B9E\u5BF9\u4E8E\u63D0\u5347Mysql\u5E76\u53D1\u80FD\u529B\u6CA1\u6709\u610F\u4E49\u3002\u6240\u4EE5<strong>\u6C34\u5E73\u62C6\u5206\u6700\u597D\u5206\u5E93</strong></p><h3 id="_4-1-\u6C34\u5E73\u62C6\u5206\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_4-1-\u6C34\u5E73\u62C6\u5206\u603B\u7ED3" aria-hidden="true">#</a> 4.1 \u6C34\u5E73\u62C6\u5206\u603B\u7ED3</h3><p>\u6C34\u5E73\u62C6\u5206\u80FD\u591F<strong>\u652F\u6301\u975E\u5E38\u5927\u7684\u6570\u636E\u91CF\u5B58\u50A8\uFF0C\u5E94\u7528\u7AEF\u6539\u9020\u4E5F\u5C11</strong>\uFF0C\u4F46\u5206\u7247<strong>\u4E8B\u52A1\u96BE\u4EE5\u89E3\u51B3</strong>\uFF0C\u8DE8\u8282\u70B9join\u6027\u80FD\u8F83\u5DEE\uFF0C\u903B\u8F91\u590D\u6742\u3002</p><blockquote><p><strong>\u5C3D\u91CF\u4E0D\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u5206\u7247\uFF0C\u56E0\u4E3A\u62C6\u5206\u4F1A\u5E26\u6765\u903B\u8F91\u3001\u90E8\u7F72\u3001\u8FD0\u7EF4\u7B49\u5404\u79CD\u590D\u6742\u5EA6</strong>\uFF0C\u4E00\u822C\u7684\u6570\u636E\u8868\u5728\u4F18\u5316\u5F97\u5F53\u7684\u60C5\u51B5\u4E0B\u652F\u6491\u5343\u4E07\u4EE5\u4E0B\u7684\u6570\u636E\u91CF\u662F\u6CA1\u6709\u592A\u5927\u95EE\u9898\u7684\u3002\u5982\u679C\u5B9E\u5728\u8981\u5206\u7247\uFF0C\u5C3D\u91CF\u9009\u62E9\u5BA2\u6237\u7AEF\u5206\u7247\u67B6\u6784\uFF0C\u8FD9\u6837\u53EF\u4EE5\u51CF\u5C11\u4E00\u6B21\u548C\u4E2D\u95F4\u4EF6\u7684\u7F51\u7EDCI/O</p></blockquote><h3 id="_4-2-\u6570\u636E\u5E93\u5206\u7247\u4E24\u79CD\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_4-2-\u6570\u636E\u5E93\u5206\u7247\u4E24\u79CD\u65B9\u6848" aria-hidden="true">#</a> 4.2 \u6570\u636E\u5E93\u5206\u7247\u4E24\u79CD\u65B9\u6848</h3><ul><li><p>\u5BA2\u6237\u7AEF\u4EE3\u7406</p><p><strong>\u5206\u7247\u903B\u8F91\u5728\u5E94\u7528\u7AEF\uFF0C\u5C01\u88C5\u5728jar\u5305\u4E2D\uFF0C\u901A\u8FC7\u4FEE\u6539\u6216\u8005\u5C01\u88C5JDBC\u5C42\u6765\u5B9E\u73B0</strong></p><ul><li>\u5F53\u5F53\u7F51\u7684Sharding-JDBC</li><li>\u963F\u91CC\u7684TDDL\u662F\u4E24\u79CD\u6BD4\u8F83\u5E38\u7528\u7684\u5B9E\u73B0</li></ul></li><li><p>\u4E2D\u95F4\u4EF6\u4EE3\u7406</p><p><strong>\u5728\u5E94\u7528\u548C\u6570\u636E\u4E2D\u95F4\u52A0\u4E86\u4E00\u5C42\u4EE3\u7406\u5C42\uFF0C\u5206\u7247\u903B\u8F91\u7EDF\u4E00\u7EF4\u62A4\u5728\u4E2D\u95F4\u4EF6\u670D\u52A1\u4E2D</strong>\u3002</p><ul><li>Mycat</li><li>360\u7684Atlas</li><li>\u7F51\u6613\u7684DDB</li></ul></li></ul>',27),o=[t];function n(s,p){return e(),i("div",null,o)}const d=a(r,[["render",n],["__file","mysql-x-optimize-bigtable.html.vue"]]);export{d as default};
