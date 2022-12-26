import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as i,a as s,d as t,f as l,r as p}from"./app.33b1aeb5.js";const r={},o=l(`<h1 id="redis\u8FDB\u9636-\u4E8B\u52A1-redis\u4E8B\u52A1\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#redis\u8FDB\u9636-\u4E8B\u52A1-redis\u4E8B\u52A1\u8BE6\u89E3" aria-hidden="true">#</a> Redis\u8FDB\u9636 - \u4E8B\u52A1\uFF1ARedis\u4E8B\u52A1\u8BE6\u89E3</h1><blockquote><p>Redis \u4E8B\u52A1\u7684\u672C\u8D28\u662F\u4E00\u7EC4\u547D\u4EE4\u7684\u96C6\u5408\u3002\u4E8B\u52A1\u652F\u6301\u4E00\u6B21\u6267\u884C\u591A\u4E2A\u547D\u4EE4\uFF0C\u4E00\u4E2A\u4E8B\u52A1\u4E2D\u6240\u6709\u547D\u4EE4\u90FD\u4F1A\u88AB\u5E8F\u5217\u5316\u3002\u5728\u4E8B\u52A1\u6267\u884C\u8FC7\u7A0B\uFF0C\u4F1A\u6309\u7167\u987A\u5E8F\u4E32\u884C\u5316\u6267\u884C\u961F\u5217\u4E2D\u7684\u547D\u4EE4\uFF0C\u5176\u4ED6\u5BA2\u6237\u7AEF\u63D0\u4EA4\u7684\u547D\u4EE4\u8BF7\u6C42\u4E0D\u4F1A\u63D2\u5165\u5230\u4E8B\u52A1\u6267\u884C\u547D\u4EE4\u5E8F\u5217\u4E2D\u3002</p></blockquote><h2 id="_1-\u4EC0\u4E48\u662Fredis\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662Fredis\u4E8B\u52A1" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662FRedis\u4E8B\u52A1</h2><p>Redis \u4E8B\u52A1\u7684\u672C\u8D28\u662F\u4E00\u7EC4\u547D\u4EE4\u7684\u96C6\u5408\u3002\u4E8B\u52A1\u652F\u6301\u4E00\u6B21\u6267\u884C\u591A\u4E2A\u547D\u4EE4\uFF0C\u4E00\u4E2A\u4E8B\u52A1\u4E2D\u6240\u6709\u547D\u4EE4\u90FD\u4F1A\u88AB\u5E8F\u5217\u5316\u3002\u5728\u4E8B\u52A1\u6267\u884C\u8FC7\u7A0B\uFF0C\u4F1A\u6309\u7167\u987A\u5E8F\u4E32\u884C\u5316\u6267\u884C\u961F\u5217\u4E2D\u7684\u547D\u4EE4\uFF0C\u5176\u4ED6\u5BA2\u6237\u7AEF\u63D0\u4EA4\u7684\u547D\u4EE4\u8BF7\u6C42\u4E0D\u4F1A\u63D2\u5165\u5230\u4E8B\u52A1\u6267\u884C\u547D\u4EE4\u5E8F\u5217\u4E2D\u3002</p><p>\u603B\u7ED3\u8BF4\uFF1Aredis\u4E8B\u52A1\u5C31\u662F\u4E00\u6B21\u6027\u3001\u987A\u5E8F\u6027\u3001\u6392\u4ED6\u6027\u7684\u6267\u884C\u4E00\u4E2A\u961F\u5217\u4E2D\u7684\u4E00\u7CFB\u5217\u547D\u4EE4\u3002</p><blockquote><p>redis \u662F\u5355\u7EBF\u7A0B\u7684\u6240\u4EE5\u5F88\u5BB9\u6613\u505A\u5230\u8FD9\u70B9</p></blockquote><h2 id="_2-redis\u4E8B\u52A1\u76F8\u5173\u547D\u4EE4\u548C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-redis\u4E8B\u52A1\u76F8\u5173\u547D\u4EE4\u548C\u4F7F\u7528" aria-hidden="true">#</a> 2. Redis\u4E8B\u52A1\u76F8\u5173\u547D\u4EE4\u548C\u4F7F\u7528</h2><blockquote><p>MULTI \u3001 EXEC \u3001 DISCARD \u548C WATCH \u662F Redis \u4E8B\u52A1\u76F8\u5173\u7684\u547D\u4EE4\u3002</p></blockquote><ul><li>MULTI \uFF1A\u5F00\u542F\u4E8B\u52A1\uFF0Credis\u4F1A\u5C06\u540E\u7EED\u7684\u547D\u4EE4\u9010\u4E2A\u653E\u5165\u961F\u5217\u4E2D\uFF0C\u7136\u540E\u4F7F\u7528EXEC\u547D\u4EE4\u6765\u539F\u5B50\u5316\u6267\u884C\u8FD9\u4E2A\u547D\u4EE4\u7CFB\u5217\u3002</li><li>EXEC\uFF1A\u6267\u884C\u4E8B\u52A1\u4E2D\u7684\u6240\u6709\u64CD\u4F5C\u547D\u4EE4\u3002</li><li>DISCARD\uFF1A\u53D6\u6D88\u4E8B\u52A1\uFF0C\u653E\u5F03\u6267\u884C\u4E8B\u52A1\u5757\u4E2D\u7684\u6240\u6709\u547D\u4EE4\u3002</li><li>WATCH\uFF1A\u76D1\u89C6\u4E00\u4E2A\u6216\u591A\u4E2Akey,\u5982\u679C\u4E8B\u52A1\u5728\u6267\u884C\u524D\uFF0C\u8FD9\u4E2Akey(\u6216\u591A\u4E2Akey)\u88AB\u5176\u4ED6\u547D\u4EE4\u4FEE\u6539\uFF0C\u5219\u4E8B\u52A1\u88AB\u4E2D\u65AD\uFF0C\u4E0D\u4F1A\u6267\u884C\u4E8B\u52A1\u4E2D\u7684\u4EFB\u4F55\u547D\u4EE4\u3002</li><li>UNWATCH\uFF1A\u53D6\u6D88WATCH\u5BF9\u6240\u6709key\u7684\u76D1\u89C6\u3002</li></ul><h3 id="_2-1-\u6807\u51C6\u7684\u4E8B\u52A1\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6807\u51C6\u7684\u4E8B\u52A1\u6267\u884C" aria-hidden="true">#</a> 2.1 \u6807\u51C6\u7684\u4E8B\u52A1\u6267\u884C</h3><p>\u7ED9k1\u3001k2\u5206\u522B\u8D4B\u503C\uFF0C\u5728\u4E8B\u52A1\u4E2D\u4FEE\u6539k1\u3001k2\uFF0C\u6267\u884C\u4E8B\u52A1\u540E\uFF0C\u67E5\u770Bk1\u3001k2\u503C\u90FD\u88AB\u4FEE\u6539\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 v1
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k2 v2
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> MULTI
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 <span class="token number">11</span>
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k2 <span class="token number">22</span>
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> EXEC
<span class="token number">1</span><span class="token punctuation">)</span> OK
<span class="token number">2</span><span class="token punctuation">)</span> OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k1
<span class="token string">&quot;11&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k2
<span class="token string">&quot;22&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>

  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u4E8B\u52A1\u53D6\u6D88" tabindex="-1"><a class="header-anchor" href="#_2-2-\u4E8B\u52A1\u53D6\u6D88" aria-hidden="true">#</a> 2.2 \u4E8B\u52A1\u53D6\u6D88</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> MULTI
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 <span class="token number">33</span>
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k2 <span class="token number">34</span>
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> DISCARD
OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u4E8B\u52A1\u51FA\u73B0\u9519\u8BEF\u7684\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_2-3-\u4E8B\u52A1\u51FA\u73B0\u9519\u8BEF\u7684\u5904\u7406" aria-hidden="true">#</a> 2.3 \u4E8B\u52A1\u51FA\u73B0\u9519\u8BEF\u7684\u5904\u7406</h3><h4 id="_2-3-1-\u8BED\u6CD5\u9519\u8BEF-\u7F16\u8BD1\u5668\u9519\u8BEF-\u56DE\u6EDA" tabindex="-1"><a class="header-anchor" href="#_2-3-1-\u8BED\u6CD5\u9519\u8BEF-\u7F16\u8BD1\u5668\u9519\u8BEF-\u56DE\u6EDA" aria-hidden="true">#</a> 2.3.1 \u8BED\u6CD5\u9519\u8BEF\uFF08\u7F16\u8BD1\u5668\u9519\u8BEF\uFF09\uFF08\u56DE\u6EDA\uFF09</h4><p>\u5728\u5F00\u542F\u4E8B\u52A1\u540E\uFF0C\u4FEE\u6539k1\u503C\u4E3A11\uFF0Ck2\u503C\u4E3A22\uFF0C\u4F46k2\u8BED\u6CD5\u9519\u8BEF\uFF0C\u6700\u7EC8\u5BFC\u81F4\u4E8B\u52A1\u63D0\u4EA4\u5931\u8D25\uFF0Ck1\u3001k2\u4FDD\u7559\u539F\u503C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 v1
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k2 v2
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> MULTI
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 <span class="token number">11</span>
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> sets k2 <span class="token number">22</span>
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> ERR unknown <span class="token builtin class-name">command</span> <span class="token variable"><span class="token variable">\`</span>sets<span class="token variable">\`</span></span>, with args beginning with: <span class="token variable"><span class="token variable">\`</span>k2<span class="token variable">\`</span></span>, <span class="token variable"><span class="token variable">\`</span><span class="token number">22</span><span class="token variable">\`</span></span>, 
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">exec</span>
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> EXECABORT Transaction discarded because of previous errors.
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k1
<span class="token string">&quot;v1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k2
<span class="token string">&quot;v2&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-2-redis\u7C7B\u578B\u9519\u8BEF-\u8FD0\u884C\u65F6\u9519\u8BEF-\u4E0D\u56DE\u6EDA" tabindex="-1"><a class="header-anchor" href="#_2-3-2-redis\u7C7B\u578B\u9519\u8BEF-\u8FD0\u884C\u65F6\u9519\u8BEF-\u4E0D\u56DE\u6EDA" aria-hidden="true">#</a> 2.3.2 <strong>Redis\u7C7B\u578B\u9519\u8BEF\uFF08\u8FD0\u884C\u65F6\u9519\u8BEF\uFF09</strong>\uFF08\u4E0D\u56DE\u6EDA\uFF09</h4><p>\u5728\u5F00\u542F\u4E8B\u52A1\u540E\uFF0C\u4FEE\u6539k1\u503C\u4E3A11\uFF0Ck2\u503C\u4E3A22\uFF0C\u4F46\u5C06k2\u7684\u7C7B\u578B\u4F5C\u4E3AList\uFF0C\u5728\u8FD0\u884C\u65F6\u68C0\u6D4B\u7C7B\u578B\u9519\u8BEF\uFF0C\u6700\u7EC8\u5BFC\u81F4\u4E8B\u52A1\u63D0\u4EA4\u5931\u8D25\uFF0C\u6B64\u65F6\u4E8B\u52A1\u5E76\u6CA1\u6709\u56DE\u6EDA\uFF0C\u800C\u662F\u8DF3\u8FC7\u9519\u8BEF\u547D\u4EE4\u7EE7\u7EED\u6267\u884C\uFF0C \u7ED3\u679Ck1\u503C\u6539\u53D8\u3001k2\u4FDD\u7559\u539F\u503C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 v1
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 v2
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> MULTI
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 <span class="token number">11</span>
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lpush k2 <span class="token number">22</span>
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> EXEC
<span class="token number">1</span><span class="token punctuation">)</span> OK
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> WRONGTYPE Operation against a key holding the wrong kind of value
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k1
<span class="token string">&quot;11&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k2
<span class="token string">&quot;v2&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>

  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-cas\u64CD\u4F5C\u5B9E\u73B0\u4E50\u89C2\u9501" tabindex="-1"><a class="header-anchor" href="#_2-4-cas\u64CD\u4F5C\u5B9E\u73B0\u4E50\u89C2\u9501" aria-hidden="true">#</a> 2.4 CAS\u64CD\u4F5C\u5B9E\u73B0\u4E50\u89C2\u9501</h3><blockquote><p>WATCH \u547D\u4EE4\u53EF\u4EE5\u4E3A Redis \u4E8B\u52A1\u63D0\u4F9B check-and-set \uFF08CAS\uFF09\u884C\u4E3A\u3002</p></blockquote><h4 id="_2-4-1-cas-\u4E50\u89C2\u9501-redis\u5B98\u65B9\u7684\u4F8B\u5B50\u5E2E\u4F60\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#_2-4-1-cas-\u4E50\u89C2\u9501-redis\u5B98\u65B9\u7684\u4F8B\u5B50\u5E2E\u4F60\u7406\u89E3" aria-hidden="true">#</a> 2.4.1 <strong>CAS? \u4E50\u89C2\u9501</strong>\uFF1FRedis\u5B98\u65B9\u7684\u4F8B\u5B50\u5E2E\u4F60\u7406\u89E3</h4><p>\u88AB WATCH \u7684\u952E\u4F1A\u88AB\u76D1\u89C6\uFF0C\u5E76\u4F1A\u53D1\u89C9\u8FD9\u4E9B\u952E\u662F\u5426\u88AB\u6539\u52A8\u8FC7\u4E86\u3002 \u5982\u679C\u6709\u81F3\u5C11\u4E00\u4E2A\u88AB\u76D1\u89C6\u7684\u952E\u5728 EXEC \u6267\u884C\u4E4B\u524D\u88AB\u4FEE\u6539\u4E86\uFF0C \u90A3\u4E48\u6574\u4E2A\u4E8B\u52A1\u90FD\u4F1A\u88AB\u53D6\u6D88\uFF0C EXEC \u8FD4\u56DEnil-reply\u6765\u8868\u793A\u4E8B\u52A1\u5DF2\u7ECF\u5931\u8D25\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C \u5047\u8BBE\u6211\u4EEC\u9700\u8981\u539F\u5B50\u6027\u5730\u4E3A\u67D0\u4E2A\u503C\u8FDB\u884C\u589E 1 \u64CD\u4F5C\uFF08\u5047\u8BBE INCR \u4E0D\u5B58\u5728\uFF09\u3002</p><p>\u9996\u5148\u6211\u4EEC\u53EF\u80FD\u4F1A\u8FD9\u6837\u505A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>val <span class="token operator">=</span> GET mykey
val <span class="token operator">=</span> val + <span class="token number">1</span>
SET mykey <span class="token variable">$val</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u8FD9\u4E2A\u5B9E\u73B0\u5728\u53EA\u6709\u4E00\u4E2A\u5BA2\u6237\u7AEF\u7684\u65F6\u5019\u53EF\u4EE5\u6267\u884C\u5F97\u5F88\u597D\u3002 \u4F46\u662F\uFF0C \u5F53\u591A\u4E2A\u5BA2\u6237\u7AEF\u540C\u65F6\u5BF9\u540C\u4E00\u4E2A\u952E\u8FDB\u884C\u8FD9\u6837\u7684\u64CD\u4F5C\u65F6\uFF0C \u5C31\u4F1A\u4EA7\u751F\u7ADE\u4E89\u6761\u4EF6\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF0C \u5982\u679C\u5BA2\u6237\u7AEF A \u548C B \u90FD\u8BFB\u53D6\u4E86\u952E\u539F\u6765\u7684\u503C\uFF0C \u6BD4\u5982 10 \uFF0C \u90A3\u4E48\u4E24\u4E2A\u5BA2\u6237\u7AEF\u90FD\u4F1A\u5C06\u952E\u7684\u503C\u8BBE\u4E3A 11 \uFF0C \u4F46\u6B63\u786E\u7684\u7ED3\u679C\u5E94\u8BE5\u662F 12 \u624D\u5BF9\u3002</p><p>\u6709\u4E86 WATCH \uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u8F7B\u677E\u5730\u89E3\u51B3\u8FD9\u7C7B\u95EE\u9898\u4E86\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>WATCH mykey
val <span class="token operator">=</span> GET mykey
val <span class="token operator">=</span> val + <span class="token number">1</span>
MULTI
SET mykey <span class="token variable">$val</span>
EXEC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u4E0A\u9762\u7684\u4EE3\u7801\uFF0C \u5982\u679C\u5728 WATCH \u6267\u884C\u4E4B\u540E\uFF0C EXEC \u6267\u884C\u4E4B\u524D\uFF0C \u6709\u5176\u4ED6\u5BA2\u6237\u7AEF\u4FEE\u6539\u4E86 mykey \u7684\u503C\uFF0C \u90A3\u4E48\u5F53\u524D\u5BA2\u6237\u7AEF\u7684\u4E8B\u52A1\u5C31\u4F1A\u5931\u8D25\u3002 \u7A0B\u5E8F\u9700\u8981\u505A\u7684\uFF0C \u5C31\u662F\u4E0D\u65AD\u91CD\u8BD5\u8FD9\u4E2A\u64CD\u4F5C\uFF0C \u76F4\u5230\u6CA1\u6709\u53D1\u751F\u78B0\u649E\u4E3A\u6B62\u3002</p><p>\u8FD9\u79CD\u5F62\u5F0F\u7684\u9501\u88AB\u79F0\u4F5C\u4E50\u89C2\u9501\uFF0C \u5B83\u662F\u4E00\u79CD\u975E\u5E38\u5F3A\u5927\u7684\u9501\u673A\u5236\u3002 \u5E76\u4E14\u56E0\u4E3A\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C \u4E0D\u540C\u7684\u5BA2\u6237\u7AEF\u4F1A\u8BBF\u95EE\u4E0D\u540C\u7684\u952E\uFF0C \u78B0\u649E\u7684\u60C5\u51B5\u4E00\u822C\u90FD\u5F88\u5C11\uFF0C \u6240\u4EE5\u901A\u5E38\u5E76\u4E0D\u9700\u8981\u8FDB\u884C\u91CD\u8BD5\u3002</p><h4 id="_2-4-2-watch\u662F\u5982\u4F55\u76D1\u89C6\u5B9E\u73B0\u7684\u5462" tabindex="-1"><a class="header-anchor" href="#_2-4-2-watch\u662F\u5982\u4F55\u76D1\u89C6\u5B9E\u73B0\u7684\u5462" aria-hidden="true">#</a> 2.4.2 watch\u662F\u5982\u4F55\u76D1\u89C6\u5B9E\u73B0\u7684\u5462\uFF1F</h4><p>Redis\u4F7F\u7528WATCH\u547D\u4EE4\u6765\u51B3\u5B9A\u4E8B\u52A1\u662F\u7EE7\u7EED\u6267\u884C\u8FD8\u662F\u56DE\u6EDA\uFF0C\u90A3\u5C31\u9700\u8981\u5728MULTI\u4E4B\u524D\u4F7F\u7528WATCH\u6765\u76D1\u63A7\u67D0\u4E9B\u952E\u503C\u5BF9\uFF0C\u7136\u540E\u4F7F\u7528MULTI\u547D\u4EE4\u6765\u5F00\u542F\u4E8B\u52A1\uFF0C\u6267\u884C\u5BF9\u6570\u636E\u7ED3\u6784\u64CD\u4F5C\u7684\u5404\u79CD\u547D\u4EE4\uFF0C\u6B64\u65F6\u8FD9\u4E9B\u547D\u4EE4\u5165\u961F\u5217\u3002</p><p>\u5F53\u4F7F\u7528EXEC\u6267\u884C\u4E8B\u52A1\u65F6\uFF0C\u9996\u5148\u4F1A\u6BD4\u5BF9WATCH\u6240\u76D1\u63A7\u7684\u952E\u503C\u5BF9\uFF0C\u5982\u679C\u6CA1\u53D1\u751F\u6539\u53D8\uFF0C\u5B83\u4F1A\u6267\u884C\u4E8B\u52A1\u961F\u5217\u4E2D\u7684\u547D\u4EE4\uFF0C\u63D0\u4EA4\u4E8B\u52A1\uFF1B\u5982\u679C\u53D1\u751F\u53D8\u5316\uFF0C\u5C06\u4E0D\u4F1A\u6267\u884C\u4E8B\u52A1\u4E2D\u7684\u4EFB\u4F55\u547D\u4EE4\uFF0C\u540C\u65F6\u4E8B\u52A1\u56DE\u6EDA\u3002\u5F53\u7136\u65E0\u8BBA\u662F\u5426\u56DE\u6EDA\uFF0CRedis\u90FD\u4F1A\u53D6\u6D88\u6267\u884C\u4E8B\u52A1\u524D\u7684WATCH\u547D\u4EE4\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220625085151074.png" alt="image-20220625085151074"></p><h4 id="_2-4-3-watch-\u547D\u4EE4\u5B9E\u73B0\u76D1\u89C6" tabindex="-1"><a class="header-anchor" href="#_2-4-3-watch-\u547D\u4EE4\u5B9E\u73B0\u76D1\u89C6" aria-hidden="true">#</a> 2.4.3 <strong>watch \u547D\u4EE4\u5B9E\u73B0\u76D1\u89C6</strong></h4><p>\u5728\u4E8B\u52A1\u5F00\u59CB\u524D\u7528WATCH\u76D1\u63A7k1\uFF0C\u4E4B\u540E\u4FEE\u6539k1\u4E3A11\uFF0C\u8BF4\u660E\u4E8B\u52A1\u5F00\u59CB\u524Dk1\u503C\u88AB\u6539\u53D8\uFF0CMULTI\u5F00\u59CB\u4E8B\u52A1\uFF0C\u4FEE\u6539k1\u503C\u4E3A12\uFF0Ck2\u4E3A22\uFF0C\u6267\u884CEXEC\uFF0C\u53D1\u56DEnil\uFF0C\u8BF4\u660E\u4E8B\u52A1\u56DE\u6EDA\uFF1B\u67E5\u770B\u4E0Bk1\u3001k2\u7684\u503C\u90FD\u6CA1\u6709\u88AB\u4E8B\u52A1\u4E2D\u7684\u547D\u4EE4\u6240\u6539\u53D8\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 v1
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k2 v2
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> WATCH k1
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 <span class="token number">11</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> MULTI
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 <span class="token number">12</span>
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k2 <span class="token number">22</span>
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> EXEC
<span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k1
<span class="token string">&quot;11&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k2
<span class="token string">&quot;v2&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-4-unwatch\u53D6\u6D88\u76D1\u89C6" tabindex="-1"><a class="header-anchor" href="#_2-4-4-unwatch\u53D6\u6D88\u76D1\u89C6" aria-hidden="true">#</a> 2.4.4 <strong>UNWATCH\u53D6\u6D88\u76D1\u89C6</strong></h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 v1
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k2 v2
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> WATCH k1
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 <span class="token number">11</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> UNWATCH
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> MULTI
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 <span class="token number">12</span>
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k2 <span class="token number">22</span>
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">exec</span>
<span class="token number">1</span><span class="token punctuation">)</span> OK
<span class="token number">2</span><span class="token punctuation">)</span> OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k1
<span class="token string">&quot;12&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k2
<span class="token string">&quot;22&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-redis\u4E8B\u52A1\u6267\u884C\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_3-redis\u4E8B\u52A1\u6267\u884C\u6B65\u9AA4" aria-hidden="true">#</a> 3. Redis\u4E8B\u52A1\u6267\u884C\u6B65\u9AA4</h2><p>\u901A\u8FC7\u4E0A\u6587\u547D\u4EE4\u6267\u884C\uFF0C\u5F88\u663E\u7136Redis\u4E8B\u52A1\u6267\u884C\u662F\u4E09\u4E2A\u9636\u6BB5\uFF1A</p><ul><li><strong>\u5F00\u542F</strong>\uFF1A\u4EE5MULTI\u5F00\u59CB\u4E00\u4E2A\u4E8B\u52A1</li><li><strong>\u5165\u961F</strong>\uFF1A\u5C06\u591A\u4E2A\u547D\u4EE4\u5165\u961F\u5230\u4E8B\u52A1\u4E2D\uFF0C\u63A5\u5230\u8FD9\u4E9B\u547D\u4EE4\u5E76\u4E0D\u4F1A\u7ACB\u5373\u6267\u884C\uFF0C\u800C\u662F\u653E\u5230\u7B49\u5F85\u6267\u884C\u7684\u4E8B\u52A1\u961F\u5217\u91CC\u9762</li><li><strong>\u6267\u884C</strong>\uFF1A\u7531EXEC\u547D\u4EE4\u89E6\u53D1\u4E8B\u52A1</li></ul><p>\u5F53\u4E00\u4E2A\u5BA2\u6237\u7AEF\u5207\u6362\u5230\u4E8B\u52A1\u72B6\u6001\u4E4B\u540E\uFF0C \u670D\u52A1\u5668\u4F1A\u6839\u636E\u8FD9\u4E2A\u5BA2\u6237\u7AEF\u53D1\u6765\u7684\u4E0D\u540C\u547D\u4EE4\u6267\u884C\u4E0D\u540C\u7684\u64CD\u4F5C\uFF1A</p><ul><li><strong>\u5982\u679C\u5BA2\u6237\u7AEF\u53D1\u9001\u7684\u547D\u4EE4\u4E3A EXEC \u3001 DISCARD \u3001 WATCH \u3001 MULTI \u56DB\u4E2A\u547D\u4EE4\u7684\u5176\u4E2D\u4E00\u4E2A\uFF0C \u90A3\u4E48\u670D\u52A1\u5668\u7ACB\u5373\u6267\u884C\u8FD9\u4E2A\u547D\u4EE4\u3002</strong></li><li>\u4E0E\u6B64\u76F8\u53CD\uFF0C \u5982\u679C\u5BA2\u6237\u7AEF\u53D1\u9001\u7684\u547D\u4EE4\u662F EXEC \u3001 DISCARD \u3001 WATCH \u3001 MULTI \u56DB\u4E2A\u547D\u4EE4\u4EE5\u5916\u7684\u5176\u4ED6\u547D\u4EE4\uFF0C \u90A3\u4E48\u670D\u52A1\u5668\u5E76\u4E0D\u7ACB\u5373\u6267\u884C\u8FD9\u4E2A\u547D\u4EE4\uFF0C \u800C\u662F\u5C06\u8FD9\u4E2A\u547D\u4EE4\u653E\u5165\u4E00\u4E2A\u4E8B\u52A1\u961F\u5217\u91CC\u9762\uFF0C \u7136\u540E\u5411\u5BA2\u6237\u7AEF\u8FD4\u56DE QUEUED \u56DE\u590D\u3002</li></ul><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220625091934231.png" alt="image-20220625091934231"><h2 id="_4-\u66F4\u6DF1\u5165\u7684\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#_4-\u66F4\u6DF1\u5165\u7684\u7406\u89E3" aria-hidden="true">#</a> 4. \u66F4\u6DF1\u5165\u7684\u7406\u89E3</h2><blockquote><p>\u6211\u4EEC\u518D\u901A\u8FC7\u51E0\u4E2A\u95EE\u9898\u6765\u6DF1\u5165\u7406\u89E3Redis\u4E8B\u52A1\u3002</p></blockquote><h3 id="_4-1-\u4E3A\u4EC0\u4E48-redis-\u4E0D\u652F\u6301\u56DE\u6EDA" tabindex="-1"><a class="header-anchor" href="#_4-1-\u4E3A\u4EC0\u4E48-redis-\u4E0D\u652F\u6301\u56DE\u6EDA" aria-hidden="true">#</a> 4.1 \u4E3A\u4EC0\u4E48 Redis \u4E0D\u652F\u6301\u56DE\u6EDA\uFF1F</h3><blockquote><p>\u5982\u679C\u4F60\u6709\u4F7F\u7528\u5173\u7CFB\u5F0F\u6570\u636E\u5E93\u7684\u7ECF\u9A8C\uFF0C \u90A3\u4E48 \u201C<strong>Redis \u5728\u4E8B\u52A1\u5931\u8D25\u65F6\u4E0D\u8FDB\u884C\u56DE\u6EDA\uFF0C\u800C\u662F\u7EE7\u7EED\u6267\u884C\u4F59\u4E0B\u7684\u547D\u4EE4</strong>\u201D\u8FD9\u79CD\u505A\u6CD5\u53EF\u80FD\u4F1A\u8BA9\u4F60\u89C9\u5F97\u6709\u70B9\u5947\u602A\u3002</p></blockquote><p>\u4EE5\u4E0B\u662F\u8FD9\u79CD\u505A\u6CD5\u7684\u4F18\u70B9\uFF1A</p><ul><li>Redis \u547D\u4EE4\u53EA\u4F1A\u56E0\u4E3A\u9519\u8BEF\u7684\u8BED\u6CD5\u800C\u5931\u8D25\uFF08\u5E76\u4E14\u8FD9\u4E9B\u95EE\u9898\u4E0D\u80FD\u5728\u5165\u961F\u65F6\u53D1\u73B0\uFF09\uFF0C\u6216\u662F\u547D\u4EE4\u7528\u5728\u4E86\u9519\u8BEF\u7C7B\u578B\u7684\u952E\u4E0A\u9762\uFF1A\u8FD9\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4ECE\u5B9E\u7528\u6027\u7684\u89D2\u5EA6\u6765\u8BF4\uFF0C\u5931\u8D25\u7684\u547D\u4EE4\u662F\u7531\u7F16\u7A0B\u9519\u8BEF\u9020\u6210\u7684\uFF0C\u800C\u8FD9\u4E9B\u9519\u8BEF\u5E94\u8BE5\u5728\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\u88AB\u53D1\u73B0\uFF0C\u800C\u4E0D\u5E94\u8BE5\u51FA\u73B0\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u3002</li><li>\u56E0\u4E3A\u4E0D\u9700\u8981\u5BF9\u56DE\u6EDA\u8FDB\u884C\u652F\u6301\uFF0C\u6240\u4EE5 Redis \u7684\u5185\u90E8\u53EF\u4EE5\u4FDD\u6301\u7B80\u5355\u4E14\u5FEB\u901F\u3002</li></ul><p>\u6709\u79CD\u89C2\u70B9\u8BA4\u4E3A Redis \u5904\u7406\u4E8B\u52A1\u7684\u505A\u6CD5\u4F1A\u4EA7\u751F bug \uFF0C \u7136\u800C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C \u5728\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C <strong>\u56DE\u6EDA\u5E76\u4E0D\u80FD\u89E3\u51B3\u7F16\u7A0B\u9519\u8BEF\u5E26\u6765\u7684\u95EE\u9898</strong>\u3002</p><blockquote><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C \u5982\u679C\u4F60\u672C\u6765\u60F3\u901A\u8FC7 INCR \u547D\u4EE4\u5C06\u952E\u7684\u503C\u52A0\u4E0A 1 \uFF0C \u5374\u4E0D\u5C0F\u5FC3\u52A0\u4E0A\u4E86 2 \uFF0C \u53C8\u6216\u8005\u5BF9\u9519\u8BEF\u7C7B\u578B\u7684\u952E\u6267\u884C\u4E86 INCR \uFF0C \u56DE\u6EDA\u662F\u6CA1\u6709\u529E\u6CD5\u5904\u7406\u8FD9\u4E9B\u60C5\u51B5\u7684\u3002</p></blockquote><h3 id="_4-2-\u5982\u4F55\u7406\u89E3redis\u4E0E\u4E8B\u52A1\u7684acid" tabindex="-1"><a class="header-anchor" href="#_4-2-\u5982\u4F55\u7406\u89E3redis\u4E0E\u4E8B\u52A1\u7684acid" aria-hidden="true">#</a> 4.2 \u5982\u4F55\u7406\u89E3Redis\u4E0E\u4E8B\u52A1\u7684ACID\uFF1F</h3><blockquote><p>\u4E00\u822C\u6765\u8BF4\uFF0C\u4E8B\u52A1\u6709\u56DB\u4E2A\u6027\u8D28\u79F0\u4E3AACID\uFF0C\u5206\u522B\u662F\u539F\u5B50\u6027\uFF0C\u4E00\u81F4\u6027\uFF0C\u9694\u79BB\u6027\u548C\u6301\u4E45\u6027\u3002\u8FD9\u662F\u57FA\u7840\uFF0C\u4F46\u662F\u5F88\u591A\u6587\u7AE0\u5BF9Redis \u662F\u5426\u652F\u6301ACID\u6709\u4E00\u4E9B\u5F02\u8BAE\uFF0C\u6211\u89C9\u7684\u6709\u5FC5\u8981\u68B3\u7406\u4E0B\uFF1A</p></blockquote><ul><li><strong>\u539F\u5B50\u6027atomicity</strong></li></ul><p>\u9996\u5148\u901A\u8FC7\u4E0A\u6587\u77E5\u9053 \u8FD0\u884C\u671F\u7684\u9519\u8BEF\u662F\u4E0D\u4F1A\u56DE\u6EDA\u7684\uFF0C\u5F88\u591A\u6587\u7AE0\u7531\u6B64\u8BF4Redis\u4E8B\u52A1\u8FDD\u80CC\u539F\u5B50\u6027\u7684\uFF1B\u800C\u5B98\u65B9\u6587\u6863\u8BA4\u4E3A\u662F\u9075\u4ECE\u539F\u5B50\u6027\u7684\u3002</p><p>Redis\u5B98\u65B9\u6587\u6863\u7ED9\u7684\u7406\u89E3\u662F\uFF0C<strong>Redis\u7684\u4E8B\u52A1\u662F\u539F\u5B50\u6027\u7684\uFF1A\u6240\u6709\u7684\u547D\u4EE4\uFF0C\u8981\u4E48\u5168\u90E8\u6267\u884C\uFF0C\u8981\u4E48\u5168\u90E8\u4E0D\u6267\u884C</strong>\u3002\u800C\u4E0D\u662F\u5B8C\u5168\u6210\u529F\u3002</p><ul><li><strong>\u4E00\u81F4\u6027consistency</strong></li></ul><p>redis\u4E8B\u52A1\u53EF\u4EE5\u4FDD\u8BC1\u547D\u4EE4\u5931\u8D25\u7684\u60C5\u51B5\u4E0B\u5F97\u4EE5\u56DE\u6EDA\uFF0C\u6570\u636E\u80FD\u6062\u590D\u5230\u6CA1\u6709\u6267\u884C\u4E4B\u524D\u7684\u6837\u5B50\uFF0C\u662F\u4FDD\u8BC1\u4E00\u81F4\u6027\u7684\uFF0C\u9664\u975Eredis\u8FDB\u7A0B\u610F\u5916\u7EC8\u7ED3\u3002</p><ul><li><strong>\u9694\u79BB\u6027Isolation</strong></li></ul><p>redis\u4E8B\u52A1\u662F\u4E25\u683C\u9075\u5B88\u9694\u79BB\u6027\u7684\uFF0C\u539F\u56E0\u662Fredis\u662F\u5355\u8FDB\u7A0B\u5355\u7EBF\u7A0B\u6A21\u5F0F(v6.0\u4E4B\u524D\uFF09\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u547D\u4EE4\u6267\u884C\u8FC7\u7A0B\u4E2D\u4E0D\u4F1A\u88AB\u5176\u4ED6\u5BA2\u6237\u7AEF\u547D\u4EE4\u6253\u65AD\u3002</p><p>\u4F46\u662F\uFF0CRedis\u4E0D\u50CF\u5176\u5B83\u7ED3\u6784\u5316\u6570\u636E\u5E93\u6709\u9694\u79BB\u7EA7\u522B\u8FD9\u79CD\u8BBE\u8BA1\u3002</p><ul><li><strong>\u6301\u4E45\u6027Durability</strong></li></ul><p><strong>redis\u4E8B\u52A1\u662F\u4E0D\u4FDD\u8BC1\u6301\u4E45\u6027\u7684</strong>\uFF0C\u8FD9\u662F\u56E0\u4E3Aredis\u6301\u4E45\u5316\u7B56\u7565\u4E2D\u4E0D\u7BA1\u662FRDB\u8FD8\u662FAOF\u90FD\u662F\u5F02\u6B65\u6267\u884C\u7684\uFF0C\u4E0D\u4FDD\u8BC1\u6301\u4E45\u6027\u662F\u51FA\u4E8E\u5BF9\u6027\u80FD\u7684\u8003\u8651\u3002</p><h3 id="_4-3-redis\u4E8B\u52A1\u5176\u5B83\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_4-3-redis\u4E8B\u52A1\u5176\u5B83\u5B9E\u73B0" aria-hidden="true">#</a> 4.3 Redis\u4E8B\u52A1\u5176\u5B83\u5B9E\u73B0</h3><ul><li>\u57FA\u4E8ELua\u811A\u672C\uFF0CRedis\u53EF\u4EE5\u4FDD\u8BC1\u811A\u672C\u5185\u7684\u547D\u4EE4\u4E00\u6B21\u6027\u3001\u6309\u987A\u5E8F\u5730\u6267\u884C\uFF0C\u5176\u540C\u65F6\u4E5F\u4E0D\u63D0\u4F9B\u4E8B\u52A1\u8FD0\u884C\u9519\u8BEF\u7684\u56DE\u6EDA\uFF0C\u6267\u884C\u8FC7\u7A0B\u4E2D\u5982\u679C\u90E8\u5206\u547D\u4EE4\u8FD0\u884C\u9519\u8BEF\uFF0C\u5269\u4E0B\u7684\u547D\u4EE4\u8FD8\u662F\u4F1A\u7EE7\u7EED\u8FD0\u884C\u5B8C</li><li>\u57FA\u4E8E\u4E2D\u95F4\u6807\u8BB0\u53D8\u91CF\uFF0C\u901A\u8FC7\u53E6\u5916\u7684\u6807\u8BB0\u53D8\u91CF\u6765\u6807\u8BC6\u4E8B\u52A1\u662F\u5426\u6267\u884C\u5B8C\u6210\uFF0C\u8BFB\u53D6\u6570\u636E\u65F6\u5148\u8BFB\u53D6\u8BE5\u6807\u8BB0\u53D8\u91CF\u5224\u65AD\u662F\u5426\u4E8B\u52A1\u6267\u884C\u5B8C\u6210\u3002\u4F46\u8FD9\u6837\u4F1A\u9700\u8981\u989D\u5916\u5199\u4EE3\u7801\u5B9E\u73B0\uFF0C\u6BD4\u8F83\u7E41\u7410</li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,71),c={href:"https://pdai.tech/md/db/nosql-redis/db-redis-x-trans.html",target:"_blank",rel:"noopener noreferrer"},d=s("strong",null,"Redis\u8FDB\u9636 - \u4E8B\u52A1\uFF1ARedis\u4E8B\u52A1\u8BE6\u89E3",-1);function u(k,m){const n=p("ExternalLinkIcon");return e(),i("div",null,[o,s("p",null,[s("a",c,[d,t(n)])])])}const h=a(r,[["render",u],["__file","db-redis-x-trans.html.vue"]]);export{h as default};
