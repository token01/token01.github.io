import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as i,f as l}from"./app.2a33308c.js";const n={},r=l(`<h1 id="\u8054\u5408\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u8054\u5408\u7D22\u5F15" aria-hidden="true">#</a> \u8054\u5408\u7D22\u5F15</h1><h2 id="_1-\u4EC0\u4E48\u662F\u8054\u5408\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662F\u8054\u5408\u7D22\u5F15" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662F\u8054\u5408\u7D22\u5F15</h2><p>\u4E24\u4E2A\u6216\u66F4\u591A\u4E2A\u5217\u4E0A\u7684\u7D22\u5F15\u88AB\u79F0\u4E3A\u8054\u5408\u7D22\u5F15\uFF0C\u8054\u5408\u7D22\u5F15\u53C8\u53EB\u590D\u5408\u7D22\u5F15\u3002</p><p>\u5BF9\u4E8E\u8054\u5408\u7D22\u5F15\uFF1A</p><ul><li>MySql\u4ECE\u5DE6\u5230\u53F3\u4F7F\u7528\u7D22\u5F15\u4E2D\u5B57\u6BB5</li><li>\u4E00\u4E2A\u67E5\u8BE2\u53EF\u4EE5\u53EA\u4F7F\u7528\u7D22\u5F15\u4E2D\u7684\u4E00\u90E8\u5206\uFF0C\u4F46\u53EA\u80FD\u662F\u6700\u5DE6\u90E8\u5206\uFF08\u6700\u5DE6\u524D\u7F00\uFF09</li></ul><p>\u4F8B\u5982\uFF1A</p><p>\u7D22\u5F15\u662Fkey index\uFF08a,b,c\uFF09 \u53EF\u4EE5\u652F\u6301<strong>a|a,b|a,b,c</strong>\uFF0C\u4E09\u79CD\u7EC4\u5408\u67E5\u627E\uFF0C\u4F46\u4E0D\u652F\u6301b,c \u8FDB\u884C\u67E5\u627E\u3002\u5F53\u6700\u5DE6\u4FA7\u5B57\u6BB5\u662F\u5E38\u91CF\u5F15\u7528\u65F6\uFF0C\u7D22\u5F15\u5C31\u5341\u5206\u6709\u6548</p><h2 id="_2-\u9700\u8981\u9075\u5FAA\u7684\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_2-\u9700\u8981\u9075\u5FAA\u7684\u89C4\u5219" aria-hidden="true">#</a> 2. \u9700\u8981\u9075\u5FAA\u7684\u89C4\u5219</h2><ol><li>\u9700\u8981\u52A0\u7D22\u5F15\u7684\u5B57\u6BB5\uFF0C\u8981\u5728where\u6761\u4EF6\u4E2D</li><li>\u6570\u636E\u91CF\u5C11\u7684\u5B57\u6BB5\u4E0D\u9700\u8981\u52A0\u7D22\u5F15</li><li>\u5982\u4F55where\u6761\u4EF6\u4E2D\u662For\u5173\u7CFB\uFF0C\u52A0\u7D22\u5F15\u4E0D\u8D77\u4F5C\u7528</li><li>\u7B26\u5408\u6700\u5DE6\u524D\u7F00\u539F\u5219</li></ol><h2 id="_3-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_3-\u539F\u7406" aria-hidden="true">#</a> 3. \u539F\u7406</h2><h3 id="_3-1-b-tree\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_3-1-b-tree\u7ED3\u6784" aria-hidden="true">#</a> 3.1 B+Tree\u7ED3\u6784</h3><p>\u6BCF\u4E00\u4E2A\u78C1\u76D8\u5FEB\u5728mysql\u4E2D\u662F\u4E00\u4E2A\u9875\uFF0C\u9875\u5927\u5C0F\u662F\u56FA\u5B9A\u7684\uFF0Cmysql innodb\u7684\u9ED8\u8BA4\u7684\u9875\u5927\u5C0F\u662F16k\u3002\u6BCF\u4E2A\u7D22\u5F15\u4F1A\u5206\u914D\u5728\u9875\u4E0A\u7684\u6570\u91CF\u662F\u7531\u5B57\u6BB5\u7684\u5927\u5C0F\u51B3\u5B9A\u3002\u5F53\u5B57\u6BB5\u503C\u957F\u5EA6\u8D8A\u957F\uFF0C\u6BCF\u4E00\u9875\u4E0A\u7684\u6570\u91CF\u5C31\u4F1A\u8D8A\u5C11\uFF0C\u56E0\u6B64\u5728\u4E00\u5B9A\u6570\u636E\u91CF\u7684\u60C5\u51B5\u4E0B\uFF0C\u6240\u4EE5\u7684\u6DF1\u5EA6\u4F1A\u8D8A\u6DF1\uFF0C\u5F71\u54CD\u7D22\u5F15\u67E5\u627E\u6548\u7387</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190909223519018.png" alt="image-20190909223519018"></p><p>\u5BF9\u4E8E\u590D\u5408\u7D22\u5F15\uFF08\u591A\u5217b+tree,\u4F7F\u7528\u591A\u5217\u503C\u7EC4\u5408\u800C\u6210\u7684b+tree\u7D22\u5F15\uFF09\u3002\u9075\u5FAA\u6700\u5DE6\u524D\u7F00\u539F\u5219\uFF0C\u4ECE\u5DE6\u5230\u53F3\u7684\u4F7F\u7528\u7D22\u5F15\u4E2D\u7684\u5B57\u6BB5\uFF0C<strong>\u4E00\u4E2A\u67E5\u8BE2\u53EF\u4EE5\u53EA\u4F7F\u7528\u7D22\u5F15\u4E2D\u7684\u4E00\u90E8\u5206\uFF0C\u4F46\u53EA\u80FD\u662F\u505A\u5DE6\u4FA7\u90E8\u5206</strong></p><h3 id="_3-2-\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5B9E\u4F8B" aria-hidden="true">#</a> 3.2 \u5B9E\u4F8B</h3><p>\u521B\u5EFA\u8868test</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>create table test(

a int,

b int,

c int,

KEY a(a,b,c)

);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BD4\u5982\uFF08a,b,c\uFF09\u7684\u65F6\u5019\uFF0Cb+tree\u662F\u6309\u7167\u4ECE<strong>\u5DE6\u5230\u53F3\u7684\u987A\u5E8F\u6765\u5EFA\u7ACB\u641C\u7D22\u6811</strong>\u7684</p><ul><li>\u5F53\uFF08a =? and b= ? and c=?) \u8FD9\u6837\u7684\u6570\u636E\u6765\u68C0\u7D22\u7684\u65F6\u5019 <ul><li>b+\u6811\u4F1A\u4F18\u5148\u6BD4\u8F83a\u5217\u6765\u786E\u5B9A\u4E0B\u4E00\u6B65\u7684\u65B9\u5411</li><li>\u5982\u679Ca\u5217\u76F8\u540C\u518D\u4F9D\u6B21\u6BD4\u8F83b\u5217\u548Cc\u5217</li><li>\u6700\u540E\u5F97\u5230\u68C0\u7D22\u6570\u636E</li></ul></li><li>\u4F46\u5F53\uFF08b=? and c =?\uFF09\u8FD9\u6837\u6CA1\u6709a\u5217\u7684\u6570\u636E\u6765\u7684\u65F6\u5019 <ul><li>b+\u6811\u5C31\u4E0D\u77E5\u9053\u4E0B\u4E00\u6B65\u8BE5\u67E5\u90A3\u4E2A\u8282\u70B9\uFF0C\u56E0\u4E3A\u5EFA\u7ACB\u641C\u7D22\u6811\u7684\u65F6\u5019a\u5217\u5C31\u662F\u7B2C\u4E00\u4E2A\u6BD4\u8F83\u56E0\u5B50\u3002\u5FC5\u987B\u8981\u5148\u8DDFa\u5217\u6765\u641C\u7D22\u624D\u80FD\u77E5\u9053\u4E0B\u4E00\u6B65\u53BB\u54EA\u91CC\u67E5\u8BE2</li></ul></li><li>\u5F53\uFF08a=? and c =?\uFF09\u8FD9\u6837\u7684\u6570\u636E\u6765\u68C0\u7D22\u65F6 <ul><li>b+\u6811\u53EF\u4EE5\u7528a\u5217\u6765\u5236\u5B9A\u641C\u7D22\u65B9\u5411\uFF0C\u4F46\u4E0B\u4E00\u4E2A\u5B57\u6BB5b\u5217\u7684\u7F3A\u5931\uFF0C\u53EA\u80FD\u5427a\u5217\u7684\u6570\u636E\u627E\u5230</li><li>\u7136\u540E\u5728\u5339\u914Dc\u5217\u7684\u6570\u636E</li></ul></li></ul><h2 id="_4-\u591A\u5217\u7D22\u5F15\u7684\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_4-\u591A\u5217\u7D22\u5F15\u7684\u5E94\u7528" aria-hidden="true">#</a> 4. \u591A\u5217\u7D22\u5F15\u7684\u5E94\u7528</h2><h3 id="_4-1-\u591A\u5217\u7D22\u5F15\u5728and\u67E5\u8BE2\u4E2D\u7684\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_4-1-\u591A\u5217\u7D22\u5F15\u5728and\u67E5\u8BE2\u4E2D\u7684\u5E94\u7528" aria-hidden="true">#</a> 4.1 \u591A\u5217\u7D22\u5F15\u5728and\u67E5\u8BE2\u4E2D\u7684\u5E94\u7528</h3><ul><li><p>select * from test where a=? and b=? and c=?\uFF1B</p><p>\u67E5\u8BE2\u6548\u7387\u6700\u9AD8\uFF0C\u7D22\u5F15\u5168\u8986\u76D6\u3002</p></li><li><p>select * from test where a=? and b=?</p><p>\u7D22\u5F15\u8986\u76D6a\u548Cb\u3002</p></li><li><p>select * from test where b=? and a=?</p><p>\u7ECF\u8FC7mysql\u7684\u67E5<strong>\u8BE2\u5206\u6790\u5668\u7684\u4F18\u5316\uFF0C\u7D22\u5F15\u8986\u76D6a\u548Cb</strong>\u3002</p></li><li><p>select * from test where a=?\uFF1B</p><p>\u7D22\u5F15\u8986\u76D6a\u3002</p></li><li><p>select * from test where b=? and c=?</p><p>\u6CA1\u6709a\u5217\uFF0C\u4E0D\u8D70\u7D22\u5F15\uFF0C\u7D22\u5F15\u5931\u6548\u3002</p></li><li><p>select * from test where c=?\uFF1B</p><p>\u6CA1\u6709a\u5217\uFF0C\u4E0D\u8D70\u7D22\u5F15\uFF0C\u7D22\u5F15\u5931\u6548\u3002</p></li></ul><h3 id="_4-2-\u591A\u5217\u7D22\u5F15\u5728\u8303\u56F4\u67E5\u8BE2\u4E2D\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_4-2-\u591A\u5217\u7D22\u5F15\u5728\u8303\u56F4\u67E5\u8BE2\u4E2D\u5E94\u7528" aria-hidden="true">#</a> 4.2 \u591A\u5217\u7D22\u5F15\u5728\u8303\u56F4\u67E5\u8BE2\u4E2D\u5E94\u7528</h3><ul><li><p>select * from test where a=? and b between ? and ? and c=?\uFF1B</p><p>\u7D22\u5F15\u8986\u76D6a\u548Cb\uFF0C<strong>\u56E0b\u5217\u662F\u8303\u56F4\u67E5\u8BE2\uFF0C\u56E0\u6B64c\u5217\u4E0D\u80FD\u8D70\u7D22\u5F15</strong>\u3002</p></li><li><p>select * from test where a between ? and ? and b=?\uFF1B</p><p>a\u5217\u8D70\u7D22\u5F15\uFF0C\u56E0a\u5217\u662F\u8303\u56F4\u67E5\u8BE2\uFF0C\u56E0\u6B64b\u5217\u662F\u65E0\u6CD5\u4F7F\u7528\u7D22\u5F15\u3002</p></li><li><p>select * from test where a between ? and ? and b between ? and ? and c=?\uFF1B</p><p>a\u5217\u8D70\u7D22\u5F15\uFF0C\u56E0a\u5217\u662F\u8303\u56F4\u67E5\u8BE2\uFF0Cb\u5217\u662F\u8303\u56F4\u67E5\u8BE2\u4E5F\u4E0D\u80FD\u4F7F\u7528\u7D22\u5F15\u3002</p></li></ul><h3 id="_4-3-\u591A\u5217\u7D22\u5F15\u5728\u6392\u5E8F\u4E2D\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_4-3-\u591A\u5217\u7D22\u5F15\u5728\u6392\u5E8F\u4E2D\u5E94\u7528" aria-hidden="true">#</a> 4.3 <strong>\u591A\u5217\u7D22\u5F15\u5728\u6392\u5E8F\u4E2D\u5E94\u7528</strong></h3><ul><li><p>select * from test where a=? and b=? order by c\uFF1B</p><p>a\u3001b\u3001c\u4E09\u5217\u5168\u8986\u76D6\u7D22\u5F15\uFF0C\u67E5\u8BE2\u6548\u7387\u6700\u9AD8\u3002</p></li><li><p>select * from test where a=? and b between ? and ? order by c\uFF1B</p><p>a\u3001b\u5217\u4F7F\u7528\u7D22\u5F15\u67E5\u627E\uFF0C\u56E0b\u5217\u662F\u8303\u56F4\u67E5\u8BE2\uFF0C\u56E0\u6B64c\u5217\u4E0D\u80FD\u4F7F\u7528\u7D22\u5F15\uFF0C\u4F1A\u51FA\u73B0file sort\u3002</p></li></ul><h2 id="_5-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_5-\u603B\u7ED3" aria-hidden="true">#</a> 5. \u603B\u7ED3</h2><ul><li><p>\u8054\u5408\u7D22\u5F15\u7684\u4F7F\u7528\u5728\u5199where\u8C03\u7684\u987A\u5E8F\u65E0\u5173\uFF0Cmysql \u67E5\u8BE2\u5206\u6790\u4F1A\u8FDB\u884C\u4F18\u5316\u800C\u4F7F\u7528\u7D22\u5F15\uFF0C\u4F46\u662F\u4E3A\u4E86\u51CF\u8F7B\u67E5\u8BE2\u5206\u6790\u5668\u7684\u538B\u529B\uFF0C\u6700\u597D\u548C\u7D22\u5F15\u7684\u4ECE\u5DE6\u5230\u53F3\u7684\u987A\u5E8F\u4E00\u81F4</p></li><li><p>\u4F7F\u7528\u7B49\u503C\u67E5\u8BE2\uFF0C\u591A\u5217\u540C\u65F6\u67E5\u8BE2\uFF0C\u7D22\u5F15\u4F1A\u4E00\u76F4\u4F20\u9012\u5E76\u751F\u6548\u3002\u56E0\u6B64\u7B49\u503C\u67E5\u8BE2\u6548\u7387\u6700\u597D\u3002</p></li><li><p>\u7D22\u5F15\u67E5\u627E\u9075\u5FAA\u6700\u5DE6\u4FA7\u539F\u5219\u3002<strong>\u4F46\u662F\u9047\u5230\u8303\u56F4\u67E5\u8BE2\u5217\u4E4B\u540E\u7684\u5217\u7D22\u5F15\u5931\u6548\u3002</strong></p></li><li><p>\u6392\u5E8F\u4E5F\u80FD\u4F7F\u7528\u7D22\u5F15\uFF0C\u5408\u7406\u4F7F\u7528\u7D22\u5F15\u6392\u5E8F\uFF0C\u907F\u514D\u51FA\u73B0file sort\u3002</p></li></ul>`,28),d=[r];function t(s,c){return a(),i("div",null,d)}const b=e(n,[["render",t],["__file","mysql-c-index-uni.html.vue"]]);export{b as default};
