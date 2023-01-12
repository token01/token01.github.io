import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as n,a as e,b as r,d as i,f as s,r as l}from"./app.59d8da70.js";const o={},h=s(`<h1 id="mysql-\u5B58\u50A8\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#mysql-\u5B58\u50A8\u5F15\u64CE" aria-hidden="true">#</a> MySQL - \u5B58\u50A8\u5F15\u64CE</h1><blockquote><p>\u672C\u6587\u4E3B\u8981\u4ECB\u7ECDMySQL\u4E2D\u7684\u5B58\u50A8\u5F15\u64CE\u3002</p></blockquote><h2 id="_1-innodb" tabindex="-1"><a class="header-anchor" href="#_1-innodb" aria-hidden="true">#</a> 1. InnoDB</h2><p>\u662F MySQL \u9ED8\u8BA4\u7684\u4E8B\u52A1\u578B\u5B58\u50A8\u5F15\u64CE\uFF0C<strong>\u53EA\u6709\u5728\u9700\u8981\u5B83\u4E0D\u652F\u6301\u7684\u7279\u6027\u65F6\uFF0C\u624D\u8003\u8651\u4F7F\u7528\u5176\u5B83\u5B58\u50A8\u5F15\u64CE</strong>\u3002</p><p>\u5B9E\u73B0\u4E86\u56DB\u4E2A\u6807\u51C6\u7684\u9694\u79BB\u7EA7\u522B\uFF0C\u9ED8\u8BA4\u7EA7\u522B\u662F\u53EF\u91CD\u590D\u8BFB(REPEATABLE READ)\u3002\u5728\u53EF\u91CD\u590D\u8BFB\u9694\u79BB\u7EA7\u522B\u4E0B\uFF0C\u901A\u8FC7\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236(MVCC)+ \u95F4\u9699\u9501(Next-Key Locking)\u9632\u6B62\u5E7B\u5F71\u8BFB\u3002</p><p>\u4E3B\u7D22\u5F15\u662F\u805A\u7C07\u7D22\u5F15\uFF0C\u5728\u7D22\u5F15\u4E2D\u4FDD\u5B58\u4E86\u6570\u636E\uFF0C\u4ECE\u800C\u907F\u514D\u76F4\u63A5\u8BFB\u53D6\u78C1\u76D8\uFF0C\u56E0\u6B64\u5BF9\u67E5\u8BE2\u6027\u80FD\u6709\u5F88\u5927\u7684\u63D0\u5347\u3002</p><p>\u5185\u90E8\u505A\u4E86\u5F88\u591A\u4F18\u5316\uFF0C\u5305\u62EC\u4ECE\u78C1\u76D8\u8BFB\u53D6\u6570\u636E\u65F6\u91C7\u7528\u7684\u53EF\u9884\u6D4B\u6027\u8BFB\u3001\u80FD\u591F\u52A0\u5FEB\u8BFB\u64CD\u4F5C\u5E76\u4E14\u81EA\u52A8\u521B\u5EFA\u7684\u81EA\u9002\u5E94\u54C8\u5E0C\u7D22\u5F15\u3001\u80FD\u591F\u52A0\u901F\u63D2\u5165\u64CD\u4F5C\u7684\u63D2\u5165\u7F13\u51B2\u533A\u7B49\u3002</p><p>\u652F\u6301\u771F\u6B63\u7684\u5728\u7EBF\u70ED\u5907\u4EFD\u3002\u5176\u5B83\u5B58\u50A8\u5F15\u64CE\u4E0D\u652F\u6301\u5728\u7EBF\u70ED\u5907\u4EFD\uFF0C\u8981\u83B7\u53D6\u4E00\u81F4\u6027\u89C6\u56FE\u9700\u8981\u505C\u6B62\u5BF9\u6240\u6709\u8868\u7684\u5199\u5165\uFF0C\u800C\u5728\u8BFB\u5199\u6DF7\u5408\u573A\u666F\u4E2D\uFF0C\u505C\u6B62\u5199\u5165\u53EF\u80FD\u4E5F\u610F\u5473\u7740\u505C\u6B62\u8BFB\u53D6\u3002</p><h2 id="_2-myisam" tabindex="-1"><a class="header-anchor" href="#_2-myisam" aria-hidden="true">#</a> 2. MyISAM</h2><p>\u8BBE\u8BA1\u7B80\u5355\uFF0C\u6570\u636E\u4EE5\u7D27\u5BC6\u683C\u5F0F\u5B58\u50A8\u3002\u5BF9\u4E8E\u53EA\u8BFB\u6570\u636E\uFF0C\u6216\u8005\u8868\u6BD4\u8F83\u5C0F\u3001\u53EF\u4EE5\u5BB9\u5FCD\u4FEE\u590D\u64CD\u4F5C\uFF0C\u5219\u4F9D\u7136\u53EF\u4EE5\u4F7F\u7528\u5B83\u3002</p><p>\u63D0\u4F9B\u4E86\u5927\u91CF\u7684\u7279\u6027\uFF0C\u5305\u62EC\u538B\u7F29\u8868\u3001\u7A7A\u95F4\u6570\u636E\u7D22\u5F15\u7B49\u3002</p><p><strong>\u4E0D\u652F\u6301\u4E8B\u52A1</strong>\u3002</p><p>\u4E0D\u652F\u6301\u884C\u7EA7\u9501\uFF0C\u53EA\u80FD\u5BF9\u6574\u5F20\u8868\u52A0\u9501\uFF0C\u8BFB\u53D6\u65F6\u4F1A\u5BF9\u9700\u8981\u8BFB\u5230\u7684\u6240\u6709\u8868\u52A0\u5171\u4EAB\u9501\uFF0C\u5199\u5165\u65F6\u5219\u5BF9\u8868\u52A0\u6392\u5B83\u9501\u3002\u4F46\u5728\u8868\u6709\u8BFB\u53D6\u64CD\u4F5C\u7684\u540C\u65F6\uFF0C\u4E5F\u53EF\u4EE5\u5F80\u8868\u4E2D\u63D2\u5165\u65B0\u7684\u8BB0\u5F55\uFF0C\u8FD9\u88AB\u79F0\u4E3A\u5E76\u53D1\u63D2\u5165(CONCURRENT INSERT)\u3002</p><p>\u53EF\u4EE5\u624B\u5DE5\u6216\u8005\u81EA\u52A8\u6267\u884C\u68C0\u67E5\u548C\u4FEE\u590D\u64CD\u4F5C\uFF0C\u4F46\u662F\u548C\u4E8B\u52A1\u6062\u590D\u4EE5\u53CA\u5D29\u6E83\u6062\u590D\u4E0D\u540C\uFF0C\u53EF\u80FD\u5BFC\u81F4\u4E00\u4E9B\u6570\u636E\u4E22\u5931\uFF0C\u800C\u4E14\u4FEE\u590D\u64CD\u4F5C\u662F\u975E\u5E38\u6162\u7684\u3002</p><p>\u5982\u679C\u6307\u5B9A\u4E86 DELAY_KEY_WRITE \u9009\u9879\uFF0C\u5728\u6BCF\u6B21\u4FEE\u6539\u6267\u884C\u5B8C\u6210\u65F6\uFF0C\u4E0D\u4F1A\u7ACB\u5373\u5C06\u4FEE\u6539\u7684\u7D22\u5F15\u6570\u636E\u5199\u5165\u78C1\u76D8\uFF0C\u800C\u662F\u4F1A\u5199\u5230\u5185\u5B58\u4E2D\u7684\u952E\u7F13\u51B2\u533A\uFF0C\u53EA\u6709\u5728\u6E05\u7406\u952E\u7F13\u51B2\u533A\u6216\u8005\u5173\u95ED\u8868\u7684\u65F6\u5019\u624D\u4F1A\u5C06\u5BF9\u5E94\u7684\u7D22\u5F15\u5757\u5199\u5165\u78C1\u76D8\u3002\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u6781\u5927\u7684\u63D0\u5347\u5199\u5165\u6027\u80FD\uFF0C\u4F46\u662F\u5728\u6570\u636E\u5E93\u6216\u8005\u4E3B\u673A\u5D29\u6E83\u65F6\u4F1A\u9020\u6210\u7D22\u5F15\u635F\u574F\uFF0C\u9700\u8981\u6267\u884C\u4FEE\u590D\u64CD\u4F5C\u3002</p><h2 id="_3-\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#_3-\u6BD4\u8F83" aria-hidden="true">#</a> 3. \u6BD4\u8F83</h2><table><thead><tr><th></th><th>MyISAM</th><th>InnoDB</th></tr></thead><tbody><tr><td>\u662F\u5426\u652F\u6301\u884C\u7EA7\u9501</td><td>\u53EA\u6709\u8868\u7EA7\u9501\uFF08table-level locking\uFF09</td><td>\u652F\u6301\u884C\u7EA7\u9501\uFF08row-level locking\uFF09\u548C\u8868\u7EA7\u9501\uFF0C\u9ED8\u8BA4\u884C\u7EA7\u9501</td></tr><tr><td>\u662F\u5426\u652F\u6301\u4E8B\u52A1</td><td>\u4E0D\u652F\u6301</td><td>\u652F\u6301</td></tr><tr><td>\u5D29\u6E83\u540E\u7684\u5B89\u5168\u6062\u590D</td><td>\u4E0D\u652F\u6301</td><td>\u652F\u6301</td></tr><tr><td>\u652F\u6301\u5916\u952E</td><td>\u4E0D\u652F\u6301</td><td>\u652F\u6301</td></tr><tr><td>\u652F\u6301MVCC</td><td>\u4E0D\u652F\u6301</td><td>\u652F\u6301</td></tr><tr><td>\u5728\u7EBF\u70ED\u5907\u4EFD</td><td>\u4E0D\u652F\u6301</td><td>\u652F\u6301</td></tr></tbody></table><h2 id="_4-\u67E5\u770B\u5B58\u50A8\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#_4-\u67E5\u770B\u5B58\u50A8\u5F15\u64CE" aria-hidden="true">#</a> 4. \u67E5\u770B\u5B58\u50A8\u5F15\u64CE</h2><h3 id="_4-1-\u67E5\u770Bmysql\u63D0\u4F9B\u7684\u6240\u6709\u5B58\u50A8\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#_4-1-\u67E5\u770Bmysql\u63D0\u4F9B\u7684\u6240\u6709\u5B58\u50A8\u5F15\u64CE" aria-hidden="true">#</a> 4.1 \u67E5\u770BMySQL\u63D0\u4F9B\u7684\u6240\u6709\u5B58\u50A8\u5F15\u64CE</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; show engines;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190902000239425.png" alt="image-20190902000239425"></p><p>\u4ECE\u4E0A\u56FE\u6211\u4EEC\u53EF\u4EE5\u51FAMysql \u5F53\u524D\u7684\u9ED8\u8BA4\u5B58\u50A8\u5F15\u64CE\u662FInnoDB,\u4E5F\u63D0\u793A\u4E86innoDB \u652F\u6301\u4E8B\u52A1\uFF0C\u884C\u7EA7\u9501\u7B49\u7279\u6027</p><h3 id="_4-2-\u67E5\u770Bmysql-\u5F53\u524D\u9ED8\u8BA4\u7684\u5B58\u50A8\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#_4-2-\u67E5\u770Bmysql-\u5F53\u524D\u9ED8\u8BA4\u7684\u5B58\u50A8\u5F15\u64CE" aria-hidden="true">#</a> 4.2 \u67E5\u770BMySQL \u5F53\u524D\u9ED8\u8BA4\u7684\u5B58\u50A8\u5F15\u64CE</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>show variables like &#39;%storage_engine%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190902000442313.png" alt="image-20190902000442313"></p><h3 id="_4-3-\u67E5\u770B\u8868\u7684\u5B58\u50A8\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#_4-3-\u67E5\u770B\u8868\u7684\u5B58\u50A8\u5F15\u64CE" aria-hidden="true">#</a> 4.3 \u67E5\u770B\u8868\u7684\u5B58\u50A8\u5F15\u64CE</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>show table status like &quot;t_user&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,28),c={href:"https://pdai.tech/md/db/sql-mysql/sql-mysql-engine.html",target:"_blank",rel:"noopener noreferrer"};function p(m,u){const t=l("ExternalLinkIcon");return d(),n("div",null,[h,e("p",null,[e("a",c,[r(" MySQL - \u5B58\u50A8\u5F15\u64CE"),i(t)])])])}const b=a(o,[["render",p],["__file","sql-mysql-engine.html.vue"]]);export{b as default};
