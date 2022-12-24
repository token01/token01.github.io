import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,a as s,d as r,f as o,r as l}from"./app.2a33308c.js";const t={},d=o(`<h1 id="sql\u8BED\u53E5\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#sql\u8BED\u53E5\u4F18\u5316" aria-hidden="true">#</a> SQL\u8BED\u53E5\u4F18\u5316</h1><h2 id="_1-\u8D1F\u5411\u67E5\u8BE2\u4E0D\u80FD\u4F7F\u7528\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_1-\u8D1F\u5411\u67E5\u8BE2\u4E0D\u80FD\u4F7F\u7528\u7D22\u5F15" aria-hidden="true">#</a> 1. \u8D1F\u5411\u67E5\u8BE2\u4E0D\u80FD\u4F7F\u7528\u7D22\u5F15</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> name <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">where</span> id <span class="token operator">not</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5E94\u8BE5\u4FEE\u6539\u4E3A:</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> name <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">where</span> id <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-\u524D\u5BFC\u6A21\u7CCA\u67E5\u8BE2\u4E0D\u80FD\u4F7F\u7528\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_2-\u524D\u5BFC\u6A21\u7CCA\u67E5\u8BE2\u4E0D\u80FD\u4F7F\u7528\u7D22\u5F15" aria-hidden="true">#</a> 2. \u524D\u5BFC\u6A21\u7CCA\u67E5\u8BE2\u4E0D\u80FD\u4F7F\u7528\u7D22\u5F15</h2><p>\u5982:</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> name <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">where</span> name <span class="token operator">like</span> <span class="token string">&#39;%zhangsan&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u975E\u524D\u5BFC\u5219\u53EF\u4EE5:</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> name <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">where</span> name <span class="token operator">like</span> <span class="token string">&#39;zhangsan%&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5EFA\u8BAE\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 <code>Lucene</code> \u7B49\u5168\u6587\u7D22\u5F15\u5DE5\u5177\u6765\u4EE3\u66FF\u9891\u7E41\u7684\u6A21\u7CCA\u67E5\u8BE2\u3002</p><h2 id="_3-\u6570\u636E\u533A\u5206\u4E0D\u660E\u663E\u7684\u4E0D\u5EFA\u8BAE\u521B\u5EFA\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_3-\u6570\u636E\u533A\u5206\u4E0D\u660E\u663E\u7684\u4E0D\u5EFA\u8BAE\u521B\u5EFA\u7D22\u5F15" aria-hidden="true">#</a> 3. \u6570\u636E\u533A\u5206\u4E0D\u660E\u663E\u7684\u4E0D\u5EFA\u8BAE\u521B\u5EFA\u7D22\u5F15</h2><p>\u5982 user \u8868\u4E2D\u7684\u6027\u522B\u5B57\u6BB5\uFF0C\u53EF\u4EE5\u660E\u663E\u533A\u5206\u7684\u624D\u5EFA\u8BAE\u521B\u5EFA\u7D22\u5F15\uFF0C\u5982\u8EAB\u4EFD\u8BC1\u7B49\u5B57\u6BB5\u3002</p><h2 id="_4-\u5B57\u6BB5\u7684\u9ED8\u8BA4\u503C\u4E0D\u8981\u4E3A-null" tabindex="-1"><a class="header-anchor" href="#_4-\u5B57\u6BB5\u7684\u9ED8\u8BA4\u503C\u4E0D\u8981\u4E3A-null" aria-hidden="true">#</a> 4. \u5B57\u6BB5\u7684\u9ED8\u8BA4\u503C\u4E0D\u8981\u4E3A null</h2><p>\u8FD9\u6837\u4F1A\u5E26\u6765\u548C\u9884\u671F\u4E0D\u4E00\u81F4\u7684\u67E5\u8BE2\u7ED3\u679C\u3002</p><h2 id="_5-\u5728\u5B57\u6BB5\u4E0A\u8FDB\u884C\u8BA1\u7B97\u4E0D\u80FD\u547D\u4E2D\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_5-\u5728\u5B57\u6BB5\u4E0A\u8FDB\u884C\u8BA1\u7B97\u4E0D\u80FD\u547D\u4E2D\u7D22\u5F15" aria-hidden="true">#</a> 5. \u5728\u5B57\u6BB5\u4E0A\u8FDB\u884C\u8BA1\u7B97\u4E0D\u80FD\u547D\u4E2D\u7D22\u5F15</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> name <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">where</span> FROM_UNIXTIME<span class="token punctuation">(</span>create_time<span class="token punctuation">)</span> <span class="token operator">&lt;</span> CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5E94\u8BE5\u4FEE\u6539\u4E3A:</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> name <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">where</span> create_time <span class="token operator">&lt;</span> FROM_UNIXTIME<span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-\u6700\u5DE6\u524D\u7F00\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_6-\u6700\u5DE6\u524D\u7F00\u95EE\u9898" aria-hidden="true">#</a> 6. \u6700\u5DE6\u524D\u7F00\u95EE\u9898</h2><p>\u5982\u679C\u7ED9 user \u8868\u4E2D\u7684 username pwd \u5B57\u6BB5\u521B\u5EFA\u4E86\u590D\u5408\u7D22\u5F15\u90A3\u4E48\u4F7F\u7528\u4EE5\u4E0BSQL \u90FD\u662F\u53EF\u4EE5\u547D\u4E2D\u7D22\u5F15:</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> username <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">where</span> username<span class="token operator">=</span><span class="token string">&#39;zhangsan&#39;</span> <span class="token operator">and</span> pwd <span class="token operator">=</span><span class="token string">&#39;axsedf1sd&#39;</span>

<span class="token keyword">select</span> username <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">where</span> pwd <span class="token operator">=</span><span class="token string">&#39;axsedf1sd&#39;</span> <span class="token operator">and</span> username<span class="token operator">=</span><span class="token string">&#39;zhangsan&#39;</span>

<span class="token keyword">select</span> username <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">where</span> username<span class="token operator">=</span><span class="token string">&#39;zhangsan&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\u4F7F\u7528</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> username <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">where</span> pwd <span class="token operator">=</span><span class="token string">&#39;axsedf1sd&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u662F\u4E0D\u80FD\u547D\u4E2D\u7D22\u5F15\u7684\u3002</p><h2 id="_7-\u5982\u679C\u660E\u786E\u77E5\u9053\u53EA\u6709\u4E00\u6761\u8BB0\u5F55\u8FD4\u56DE" tabindex="-1"><a class="header-anchor" href="#_7-\u5982\u679C\u660E\u786E\u77E5\u9053\u53EA\u6709\u4E00\u6761\u8BB0\u5F55\u8FD4\u56DE" aria-hidden="true">#</a> 7. \u5982\u679C\u660E\u786E\u77E5\u9053\u53EA\u6709\u4E00\u6761\u8BB0\u5F55\u8FD4\u56DE</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> name <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">where</span> username<span class="token operator">=</span><span class="token string">&#39;zhangsan&#39;</span> <span class="token keyword">limit</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u63D0\u9AD8\u6548\u7387\uFF0C\u53EF\u4EE5\u8BA9\u6570\u636E\u5E93\u505C\u6B62\u6E38\u6807\u79FB\u52A8\u3002</p><h2 id="_8-\u4E0D\u8981\u8BA9\u6570\u636E\u5E93\u5E2E\u6211\u4EEC\u505A\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_8-\u4E0D\u8981\u8BA9\u6570\u636E\u5E93\u5E2E\u6211\u4EEC\u505A\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> 8. \u4E0D\u8981\u8BA9\u6570\u636E\u5E93\u5E2E\u6211\u4EEC\u505A\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> name <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">where</span> telno<span class="token operator">=</span><span class="token number">18722222222</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u6837\u867D\u7136\u53EF\u4EE5\u67E5\u51FA\u6570\u636E\uFF0C\u4F46\u662F\u4F1A\u5BFC\u81F4\u5168\u8868\u626B\u63CF\u3002</p><p>\u9700\u8981\u4FEE\u6539\u4E3A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> name <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">where</span> telno<span class="token operator">=</span><span class="token string">&#39;18722222222&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_9-\u5982\u679C\u9700\u8981\u8FDB\u884C-join-\u7684\u5B57\u6BB5\u4E24\u8868\u7684\u5B57\u6BB5\u7C7B\u578B\u8981\u76F8\u540C" tabindex="-1"><a class="header-anchor" href="#_9-\u5982\u679C\u9700\u8981\u8FDB\u884C-join-\u7684\u5B57\u6BB5\u4E24\u8868\u7684\u5B57\u6BB5\u7C7B\u578B\u8981\u76F8\u540C" aria-hidden="true">#</a> 9. \u5982\u679C\u9700\u8981\u8FDB\u884C join \u7684\u5B57\u6BB5\u4E24\u8868\u7684\u5B57\u6BB5\u7C7B\u578B\u8981\u76F8\u540C</h2><p>\u4E0D\u7136\u4E5F\u4E0D\u4F1A\u547D\u4E2D\u7D22\u5F15\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,36),c={href:"https://pdai.tech/md/db/sql-lan/sql-lan-optimize.html",target:"_blank",rel:"noopener noreferrer"},i=s("strong",null,"SQL\u8BED\u8A00 - SQL\u8BED\u53E5\u4F18\u5316",-1);function k(u,m){const a=l("ExternalLinkIcon");return e(),p("div",null,[d,s("p",null,[s("a",c,[i,r(a)])])])}const w=n(t,[["render",k],["__file","sql-x-optimization.html.vue"]]);export{w as default};
