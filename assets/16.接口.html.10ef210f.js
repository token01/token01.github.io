import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.18744acf.js";const p={},e=t(`<h1 id="_16-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_16-\u63A5\u53E3" aria-hidden="true">#</a> 16.\u63A5\u53E3</h1><h2 id="_1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1-\u6982\u8FF0" aria-hidden="true">#</a> 1\uFF0C\u6982\u8FF0</h2><p>\u5728Go\u8BED\u8A00\u4E2D\uFF0C\u63A5\u53E3\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7C7B\u578B\uFF0C\u63A5\u53E3\u7C7B\u578B\u5177\u4F53\u63CF\u8FF0\u4E86\u4E00\u7CFB\u5217\u65B9\u6CD5\u7684\u96C6\u5408\u3002</p><p>\u63A5\u53E3\u7C7B\u578B\u662F\u4E00\u79CD\u62BD\u8C61\u7684\u7C7B\u578B\uFF0C\u5B83\u4E0D\u4F1A\u66B4\u6F0F\u51FA\u5B83\u6240\u4EE3\u8868\u7684\u5BF9\u8C61\u7684\u5185\u90E8\u503C\u7684\u7ED3\u6784\u548C\u8FD9\u4E2A\u5BF9\u8C61\u652F\u6301\u7684\u57FA\u7840\u64CD\u4F5C\u7684\u96C6\u5408\uFF0C\u5B83\u4EEC\u53EA\u4F1A\u5C55\u793A\u51FA\u5B83\u4EEC\u81EA\u5DF1\u7684\u65B9\u6CD5\u3002<code>\u56E0\u6B64\u63A5\u53E3\u7C7B\u578B\u4E0D\u80FD\u5C06\u5176\u5B9E\u4F8B\u5316\u3002</code></p><p>Go\u901A\u8FC7\u501F\u53E3\u5B9E\u73B0\u4E86\u9E2D\u5B50\u7C7B\u578B\uFF08duck-typing\uFF09\uFF1A\u201C\u5F53\u770B\u5230\u4E00\u53EA\u9E1F\u8D70\u8D77\u6765\u50CF\u9E2D\u5B50\uFF0C\u6E38\u6CF3\u8D77\u6765\u50CF\u9E2D\u5B50\uFF0C\u53EB\u8D77\u6765\u4E5F\u50CF\u9E2D\u5B50\uFF0C\u90A3\u4E48\u8FD9\u53EA\u9E1F\u5C31\u53EF\u4EE5\u88AB\u79F0\u4E3A\u9E2D\u5B50\u201D\u3002<code>\u6211\u4EEC\u5E76\u4E0D\u5173\u5FC3\u5BF9\u8C61\u662F\u4EC0\u4E48\u7C7B\u578B\uFF0C\u5230\u5E95\u662F\u4E0D\u662F\u9E2D\u5B50\uFF0C\u53EA\u5173\u5FC3\u884C\u4E3A</code>\u3002</p><ul><li>\u540C\u4E00\u4E2A\u7ED3\u6784\u4F53\u53EF\u4EE5\u5B9E\u73B0\u591A\u4E2A\u63A5\u53E3</li><li>\u63A5\u53E3\u53EF\u4EE5\u5D4C\u5957</li><li>\u5173\u4E8E\u63A5\u53E3\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u53EA\u6709\u5F53\u6709\u4E24\u4E2A\u6216\u4E24\u4E2A\u4EE5\u4E0A\u7684\u5177\u4F53\u7C7B\u578B\u5FC5\u987B\u4EE5\u76F8\u540C\u65B9\u5F0F\u8FDB\u884C\u5904\u7406\u7684\u624D\u9700\u8981\u5B9A\u4E49\u63A5\u53E3\u3002\u4E0D\u8981\u4E3A\u4E86\u63A5\u53E3\u800C\u5B9A\u4E49\u63A5\u53E3\uFF0C\u90A3\u6837\u53EA\u4F1A\u589E\u52A0\u4E0D\u5FC5\u8981\u7684\u62BD\u8C61\uFF0C\u5BFC\u81F4\u4E0D\u5FC5\u8981\u7684\u8FD0\u884C\u65F6\u635F\u8017\u3002</li></ul><h2 id="_2-\u63A5\u53E3\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u63A5\u53E3\u7684\u4F7F\u7528" aria-hidden="true">#</a> 2\uFF0C\u63A5\u53E3\u7684\u4F7F\u7528</h2><h3 id="_1-\u63A5\u53E3\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#_1-\u63A5\u53E3\u5B9A\u4E49" aria-hidden="true">#</a> 1\uFF0C\u63A5\u53E3\u5B9A\u4E49</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> Humaner <span class="token keyword">interface</span> <span class="token punctuation">{</span>
 <span class="token function">SayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u63A5\u53E3\u547D\u540D\u4E60\u60EF\u4EE5<code>er</code>\u7ED3\u5C3E</li><li>\u63A5\u53E3\u53EA\u6709\u65B9\u6CD5\u58F0\u660E\uFF0C\u6CA1\u6709\u5B9E\u73B0\uFF0C\u6CA1\u6709\u6570\u636E\u5B57\u6BB5</li><li>\u63A5\u53E3\u53EF\u4EE5\u533F\u540D\u5D4C\u5165\u5176\u4ED6\u63A5\u53E3\uFF0C\u6216\u5D4C\u5165\u5230\u7ED3\u6784\u4E2D</li></ul><h3 id="_2-\u63A5\u53E3\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-\u63A5\u53E3\u5B9E\u73B0" aria-hidden="true">#</a> 2\uFF0C\u63A5\u53E3\u5B9E\u73B0</h3><p>\u63A5\u53E3\u662F\u7528\u6765\u5B9A\u4E49\u884C\u4E3A\u7684\u7C7B\u578B\u3002\u8FD9\u4E9B\u88AB\u5B9A\u4E49\u7684\u884C\u4E3A\u4E0D\u7531\u63A5\u53E3\u76F4\u63A5\u5B9E\u73B0\uFF0C\u800C\u662F\u7531\u7528\u6237\u5B9A\u4E49\u7684\u7C7B\u578B\u5B9E\u73B0\uFF0C\u4E00\u4E2A\u5B9E\u73B0\u4E86\u8FD9\u4E9B\u65B9\u6CD5\u7684\u5177\u4F53\u7C7B\u578B\u662F\u8FD9\u4E2A\u63A5\u53E3\u7C7B\u578B\u7684\u5B9E\u4F8B\u3002</p><p>\u5982\u679C\u7528\u6237\u5B9A\u4E49\u7684\u7C7B\u578B\u5B9E\u73B0\u4E86\u67D0\u4E2A\u63A5\u53E3\u7C7B\u578B\u58F0\u660E\u7684\u4E00\u7EC4\u65B9\u6CD5\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7528\u6237\u5B9A\u4E49\u7684\u7C7B\u578B\u7684\u503C\u5C31\u53EF\u4EE5\u8D4B\u7ED9\u8FD9\u4E2A\u63A5\u53E3\u7C7B\u578B\u7684\u503C\u3002\u8FD9\u4E2A\u8D4B\u503C\u4F1A\u628A\u7528\u6237\u5B9A\u4E49\u7684\u7C7B\u578B\u7684\u503C\u5B58\u5165\u63A5\u53E3\u7C7B\u578B\u7684\u503C\u3002</p><h2 id="_3-\u793A\u4F8B\u5B66\u4E60" tabindex="-1"><a class="header-anchor" href="#_3-\u793A\u4F8B\u5B66\u4E60" aria-hidden="true">#</a> 3\uFF0C\u793A\u4F8B\u5B66\u4E60</h2><h3 id="_1-\u63A5\u53E3\u7684\u5B9A\u4E49\u4E0E\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_1-\u63A5\u53E3\u7684\u5B9A\u4E49\u4E0E\u5B9E\u73B0" aria-hidden="true">#</a> 1\uFF0C\u63A5\u53E3\u7684\u5B9A\u4E49\u4E0E\u5B9E\u73B0</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Humaner <span class="token keyword">interface</span> <span class="token punctuation">{</span>
 <span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 name <span class="token builtin">string</span>
 id   <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">//Student \u901A\u8FC7\u4E0A\u8FB9\u5B9A\u4E49\u7684\u63A5\u53E3\u5B9E\u73B0\u4E86\u5176\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>tmp <span class="token operator">*</span>Student<span class="token punctuation">)</span> <span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Student[%s, %d] sayhi\\n&quot;</span><span class="token punctuation">,</span> tmp<span class="token punctuation">.</span>name<span class="token punctuation">,</span> tmp<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Teacher <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 addr  <span class="token builtin">string</span>
 group <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//Teacher \u901A\u8FC7\u4E0A\u8FB9\u5B9A\u4E49\u7684\u63A5\u53E3\u5B9E\u73B0\u4E86\u5176\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>tmp <span class="token operator">*</span>Teacher<span class="token punctuation">)</span> <span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Teacher[%s, %s] sayhi\\n&quot;</span><span class="token punctuation">,</span> tmp<span class="token punctuation">.</span>addr<span class="token punctuation">,</span> tmp<span class="token punctuation">.</span>addr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//Mystr \u901A\u8FC7\u4E0A\u8FB9\u5B9A\u4E49\u7684\u63A5\u53E3\u5B9E\u73B0\u4E86\u5176\u65B9\u6CD5</span>
<span class="token keyword">type</span> Mystr <span class="token builtin">string</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>tmp <span class="token operator">*</span>Mystr<span class="token punctuation">)</span> <span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Mystr[%s] sayhi\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>tmp<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u5B9A\u4E49\u63A5\u53E3\u7C7B\u578B\u7684\u53D8\u91CF</span>
 <span class="token keyword">var</span> i Humaner

 <span class="token comment">//\u53EA\u8981\u5B9E\u73B0\u4E86\u6B64\u63A5\u53E3\u65B9\u6CD5\u7684\u7C7B\u578B\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7C7B\u578B\u7684\u53D8\u91CF\uFF08\u63A5\u6536\u8005\u7C7B\u578B\uFF09\u5C31\u53EF\u4EE5\u7ED9i\u8D4B\u503C</span>
 s <span class="token operator">:=</span> <span class="token operator">&amp;</span>Student<span class="token punctuation">{</span><span class="token string">&quot;erya&quot;</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">}</span>
 i <span class="token operator">=</span> s
 i<span class="token punctuation">.</span><span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 t <span class="token operator">:=</span> <span class="token operator">&amp;</span>Teacher<span class="token punctuation">{</span><span class="token string">&quot;bj&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;go&quot;</span><span class="token punctuation">}</span>
 i <span class="token operator">=</span> t
 i<span class="token punctuation">.</span><span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token keyword">var</span> str Mystr <span class="token operator">=</span> <span class="token string">&quot;hello go&quot;</span>
 i <span class="token operator">=</span> <span class="token operator">&amp;</span>str
 i<span class="token punctuation">.</span><span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u591A\u6001\u7684\u5448\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-\u591A\u6001\u7684\u5448\u73B0" aria-hidden="true">#</a> 2\uFF0C\u591A\u6001\u7684\u5448\u73B0</h3><p><code>\u5176\u4E00\uFF1A</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Humaner <span class="token keyword">interface</span> <span class="token punctuation">{</span>
 <span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 name <span class="token builtin">string</span>
 id   <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">//Student \u901A\u8FC7\u4E0A\u8FB9\u5B9A\u4E49\u7684\u63A5\u53E3\u5B9E\u73B0\u4E86\u5176\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>tmp <span class="token operator">*</span>Student<span class="token punctuation">)</span> <span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Student[%s, %d] sayhi\\n&quot;</span><span class="token punctuation">,</span> tmp<span class="token punctuation">.</span>name<span class="token punctuation">,</span> tmp<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Teacher <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 addr  <span class="token builtin">string</span>
 group <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//Teacher \u901A\u8FC7\u4E0A\u8FB9\u5B9A\u4E49\u7684\u63A5\u53E3\u5B9E\u73B0\u4E86\u5176\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>tmp <span class="token operator">*</span>Teacher<span class="token punctuation">)</span> <span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Teacher[%s, %d] sayhi\\n&quot;</span><span class="token punctuation">,</span> tmp<span class="token punctuation">.</span>addr<span class="token punctuation">,</span> tmp<span class="token punctuation">.</span>addr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//Mystr \u901A\u8FC7\u4E0A\u8FB9\u5B9A\u4E49\u7684\u63A5\u53E3\u5B9E\u73B0\u4E86\u5176\u65B9\u6CD5</span>
<span class="token keyword">type</span> Mystr <span class="token builtin">string</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>tmp <span class="token operator">*</span>Mystr<span class="token punctuation">)</span> <span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Mystr[%s, %d] sayhi\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>tmp<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u5B9A\u4E49\u63A5\u53E3\u7C7B\u578B\u7684\u53D8\u91CF</span>
 <span class="token keyword">var</span> i Humaner

 <span class="token comment">//\u53EA\u8981\u5B9E\u73B0\u4E86\u6B64\u63A5\u53E3\u65B9\u6CD5\u7684\u7C7B\u578B\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7C7B\u578B\u7684\u53D8\u91CF\uFF08\u63A5\u6536\u8005\u7C7B\u578B\uFF09\u5C31\u53EF\u4EE5\u7ED9i\u8D4B\u503C</span>
 s <span class="token operator">:=</span> <span class="token operator">&amp;</span>Student<span class="token punctuation">{</span><span class="token string">&quot;erya&quot;</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">}</span>
 i <span class="token operator">=</span> s
 i<span class="token punctuation">.</span><span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 t <span class="token operator">:=</span> <span class="token operator">&amp;</span>Teacher<span class="token punctuation">{</span><span class="token string">&quot;bj&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;go&quot;</span><span class="token punctuation">}</span>
 i <span class="token operator">=</span> t
 i<span class="token punctuation">.</span><span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token keyword">var</span> str Mystr <span class="token operator">=</span> <span class="token string">&quot;hello go&quot;</span>
 i <span class="token operator">=</span> <span class="token operator">&amp;</span>str
 i<span class="token punctuation">.</span><span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>\u5176\u4E8C\uFF1A</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Humaner <span class="token keyword">interface</span> <span class="token punctuation">{</span>
 <span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 name <span class="token builtin">string</span>
 id   <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">//Student \u901A\u8FC7\u4E0A\u8FB9\u5B9A\u4E49\u7684\u63A5\u53E3\u5B9E\u73B0\u4E86\u5176\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>tmp <span class="token operator">*</span>Student<span class="token punctuation">)</span> <span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Student[%s, %d] sayhi\\n&quot;</span><span class="token punctuation">,</span> tmp<span class="token punctuation">.</span>name<span class="token punctuation">,</span> tmp<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Teacher <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 addr  <span class="token builtin">string</span>
 group <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//Teacher \u901A\u8FC7\u4E0A\u8FB9\u5B9A\u4E49\u7684\u63A5\u53E3\u5B9E\u73B0\u4E86\u5176\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>tmp <span class="token operator">*</span>Teacher<span class="token punctuation">)</span> <span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Teacher[%s, %s] sayhi\\n&quot;</span><span class="token punctuation">,</span> tmp<span class="token punctuation">.</span>addr<span class="token punctuation">,</span> tmp<span class="token punctuation">.</span>addr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//Mystr \u901A\u8FC7\u4E0A\u8FB9\u5B9A\u4E49\u7684\u63A5\u53E3\u5B9E\u73B0\u4E86\u5176\u65B9\u6CD5</span>
<span class="token keyword">type</span> Mystr <span class="token builtin">string</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>tmp <span class="token operator">*</span>Mystr<span class="token punctuation">)</span> <span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Mystr[%s] sayhi\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>tmp<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5B9A\u4E49\u4E00\u4E2A\u666E\u901A\u51FD\u6570\uFF0C\u51FD\u6570\u7684\u53C2\u6570\u4E3A\u63A5\u53E3\u7C7B\u578B</span>
<span class="token comment">//\u53EA\u6709\u4E00\u4E2A\u51FD\u6570\uFF0C\u53EF\u4EE5\u6709\u4E0D\u540C\u8868\u73B0\uFF0C\u5373\u4E3A\u591A\u6001</span>

<span class="token keyword">func</span> <span class="token function">WhoSayHi</span><span class="token punctuation">(</span>i Humaner<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 i<span class="token punctuation">.</span><span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 s <span class="token operator">:=</span> <span class="token operator">&amp;</span>Student<span class="token punctuation">{</span><span class="token string">&quot;erya&quot;</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">}</span>
 t <span class="token operator">:=</span> <span class="token operator">&amp;</span>Teacher<span class="token punctuation">{</span><span class="token string">&quot;bj&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;go&quot;</span><span class="token punctuation">}</span>
 <span class="token keyword">var</span> str Mystr <span class="token operator">=</span> <span class="token string">&quot;hello go&quot;</span>

 <span class="token comment">//\u8C03\u7528\u540C\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F1A\u6709\u4E0D\u540C\u8868\u73B0\uFF0C\u591A\u6001</span>
 <span class="token comment">// WhoSayHi(s)</span>
 <span class="token comment">// WhoSayHi(t)</span>
 <span class="token comment">// WhoSayHi(&amp;str)</span>

 <span class="token comment">//\u521B\u5EFA\u4E00\u4E2A\u5207\u7247</span>
 x <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>Humaner<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
 x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> s
 x<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> t
 x<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>str

 <span class="token comment">//\u7B2C\u4E00\u4E2A\u8FD4\u56DE\u4E0B\u6807\uFF0C\u7B2C\u4E8C\u4E2A\u8FD4\u56DE\u4E0B\u6807\u5BF9\u5E94\u7684\u503C</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> x <span class="token punctuation">{</span>
  i<span class="token punctuation">.</span><span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u63A5\u53E3\u7684\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_3-\u63A5\u53E3\u7684\u7EE7\u627F" aria-hidden="true">#</a> 3\uFF0C\u63A5\u53E3\u7684\u7EE7\u627F</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Humaner <span class="token keyword">interface</span> <span class="token punctuation">{</span> <span class="token comment">//\u5B50\u96C6</span>
 <span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Personer <span class="token keyword">interface</span> <span class="token punctuation">{</span> <span class="token comment">//\u8D85\u96C6</span>
 Humaner <span class="token comment">//\u533F\u540D\u5B57\u6BB5\uFF0C\u7EE7\u627F\u4E86sayhi()</span>
 <span class="token function">sing</span><span class="token punctuation">(</span>lrc <span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 name <span class="token builtin">string</span>
 id   <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">//Student \u5B9E\u73B0\u4E86sayhi()</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>tmp <span class="token operator">*</span>Student<span class="token punctuation">)</span> <span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Student[%s, %d] sayhi\\n&quot;</span><span class="token punctuation">,</span> tmp<span class="token punctuation">.</span>name<span class="token punctuation">,</span> tmp<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>tmp <span class="token operator">*</span>Student<span class="token punctuation">)</span> <span class="token function">sing</span><span class="token punctuation">(</span>lrc <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Student\u5728\u5531\u7740: &quot;</span><span class="token punctuation">,</span> lrc<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u5B9A\u4E49\u4E00\u4E2A\u63A5\u53E3\u7C7B\u578B\u7684\u53D8\u91CF</span>
 <span class="token keyword">var</span> i Personer
 s <span class="token operator">:=</span> <span class="token operator">&amp;</span>Student<span class="token punctuation">{</span><span class="token string">&quot;erya&quot;</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">}</span>
 i <span class="token operator">=</span> s

 i<span class="token punctuation">.</span><span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 i<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token string">&quot;\u5954\u8DD1&quot;</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u63A5\u53E3\u7684\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_4-\u63A5\u53E3\u7684\u8F6C\u6362" aria-hidden="true">#</a> 4\uFF0C\u63A5\u53E3\u7684\u8F6C\u6362</h3><p>\u8FD9\u4E2A\u5730\u65B9\u6D89\u53CA\u5230\u4E00\u4E2A\u6982\u5FF5\uFF0C\u5C31\u662F\u8D85\u96C6\u53EF\u4EE5\u8F6C\u6362\u4E3A\u5B50\u96C6\uFF0C\u800C\u5B50\u96C6\u4E0D\u80FD\u8F6C\u6362\u4E3A\u8D85\u96C6\uFF0C\u5176\u5B9E\u5F88\u5BB9\u6613\u7406\u89E3\uFF0C\u56E0\u4E3A\u8D85\u96C6\u91CC\u8FB9\u5C06\u4F1A\u6709\u5B50\u96C6\u5F53\u4E2D\u672A\u5B9A\u4E49\u7684\u4E1C\u897F\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Humaner <span class="token keyword">interface</span> <span class="token punctuation">{</span> <span class="token comment">//\u5B50\u96C6</span>
 <span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Personer <span class="token keyword">interface</span> <span class="token punctuation">{</span> <span class="token comment">//\u8D85\u96C6</span>
 Humaner <span class="token comment">//\u533F\u540D\u5B57\u6BB5\uFF0C\u7EE7\u627F\u4E86sayhi()</span>
 <span class="token function">sing</span><span class="token punctuation">(</span>lrc <span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 name <span class="token builtin">string</span>
 id   <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">//Student \u5B9E\u73B0\u4E86sayhi()</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>tmp <span class="token operator">*</span>Student<span class="token punctuation">)</span> <span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Student[%s, %d] sayhi\\n&quot;</span><span class="token punctuation">,</span> tmp<span class="token punctuation">.</span>name<span class="token punctuation">,</span> tmp<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>tmp <span class="token operator">*</span>Student<span class="token punctuation">)</span> <span class="token function">sing</span><span class="token punctuation">(</span>lrc <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Student\u5728\u5531\u7740: &quot;</span><span class="token punctuation">,</span> lrc<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u8D85\u96C6\u53EF\u4EE5\u8F6C\u6362\u4E3A\u5B50\u96C6\uFF0C\u800C\u5B50\u96C6\u4E0D\u80FD\u8F6C\u6362\u4E3A\u8D85\u96C6</span>
 <span class="token comment">//\u5176\u5B9E\u5F88\u5BB9\u6613\u7406\u89E3\uFF0C\u56E0\u4E3A\u8D85\u96C6\u91CC\u8FB9\u5C06\u4F1A\u6709\u5B50\u96C6\u5F53\u4E2D\u672A\u5B9A\u4E49\u7684\u4E1C\u897F</span>

 <span class="token keyword">var</span> iPro Personer <span class="token comment">//\u8D85\u96C6</span>
 iPro <span class="token operator">=</span> <span class="token operator">&amp;</span>Student<span class="token punctuation">{</span><span class="token string">&quot;erya&quot;</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">}</span>
 <span class="token keyword">var</span> i Humaner <span class="token comment">//\u5B50\u96C6</span>

 iPro <span class="token operator">=</span> i <span class="token comment">//err</span>

 i <span class="token operator">=</span> iPro <span class="token comment">//\u53EF\u4EE5\uFF0C\u8D85\u96C6\u53EF\u4EE5\u8F6C\u6362\u4E3A\u5B50\u96C6</span>
 i<span class="token punctuation">.</span><span class="token function">sayhi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-\u7A7A\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_5-\u7A7A\u63A5\u53E3" aria-hidden="true">#</a> 5\uFF0C\u7A7A\u63A5\u53E3</h3><p>\u7A7A\u63A5\u53E3\uFF08interface{}\uFF09\u4E0D\u5305\u542B\u4EFB\u4F55\u7684\u65B9\u6CD5\uFF0C\u6B63\u56E0\u4E3A\u5982\u6B64\uFF0C<code>\u6240\u6709\u7684\u7C7B\u578B\u90FD\u5B9E\u73B0\u4E86\u7A7A\u63A5\u53E3</code>\uFF0C\u56E0\u6B64\u7A7A\u63A5\u53E3\u53EF\u4EE5\u5B58\u50A8\u4EFB\u610F\u7C7B\u578B\u7684\u6570\u503C\u3002\u5B83\u6709\u70B9\u7C7B\u4F3C\u4E8EC\u8BED\u8A00\u7684void*\u7C7B\u578B\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> v1 <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token number">1</span>  <span class="token comment">// \u5C06int\u7C7B\u578B\u8D4B\u503C\u7ED9interface{}</span>
<span class="token keyword">var</span> v2 <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span> <span class="token comment">// \u5C06string\u7C7B\u578B\u8D4B\u503C\u7ED9interface{}</span>
<span class="token keyword">var</span> v3 <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>v2 <span class="token comment">// \u5C06*interface{}\u7C7B\u578B\u8D4B\u503C\u7ED9interface{}</span>
<span class="token keyword">var</span> v4 <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">struct</span><span class="token punctuation">{</span> x <span class="token builtin">int</span> <span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> v5 <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token keyword">struct</span><span class="token punctuation">{</span> x <span class="token builtin">int</span> <span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u51FD\u6570\u53EF\u4EE5\uFF08\u6216\u8005\u9700\u8981\uFF09\u63A5\u53D7\u4EFB\u610F\u7684\u5BF9\u8C61\u5B9E\u4F8B\u65F6\uFF0C\u6211\u4EEC\u4F1A\u5C06\u5176\u58F0\u660E\u4E3Ainterface{}\uFF0C\u6700\u5178\u578B\u7684\u4F8B\u5B50\u5C31\u662F\u6807\u51C6\u5E93fmt\u4E2Dprint xxx\u7CFB\u5217\u7684\u51FD\u6570\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Printf</span><span class="token punctuation">(</span>fmt <span class="token builtin">string</span><span class="token punctuation">,</span> args <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">Println</span><span class="token punctuation">(</span>args <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u8FB9\u7528\u4E00\u4E2A\u5B9E\u4F8B\u6765\u7406\u89E3\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u7A7A\u63A5\u53E3\u7C7B\u578B\uFF0C\u76F8\u5F53\u4E8E\u4E07\u80FD\u7C7B\u578B\uFF0C\u53EF\u4EE5\u4FDD\u5B58\u4EFB\u610F\u7C7B\u578B\u7684\u503C</span>
 <span class="token keyword">var</span> i <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token number">1</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;i = &quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>

 i <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;i = &quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-\u63A5\u53E3\u7C7B\u578B\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_6-\u63A5\u53E3\u7C7B\u578B\u67E5\u8BE2" aria-hidden="true">#</a> 6\uFF0C\u63A5\u53E3\u7C7B\u578B\u67E5\u8BE2</h3><p>\u6211\u4EEC\u77E5\u9053interface\u7684\u53D8\u91CF\u91CC\u9762\u53EF\u4EE5\u5B58\u50A8\u4EFB\u610F\u7C7B\u578B\u7684\u6570\u503C(\u8BE5\u7C7B\u578B\u5B9E\u73B0\u4E86interface)\u3002\u90A3\u4E48\u6211\u4EEC\u600E\u4E48\u53CD\u5411\u77E5\u9053\u8FD9\u4E2A\u53D8\u91CF\u91CC\u9762\u5B9E\u9645\u4FDD\u5B58\u4E86\u7684\u662F\u54EA\u4E2A\u7C7B\u578B\u7684\u5BF9\u8C61\u5462\uFF1F\u76EE\u524D\u5E38\u7528\u7684\u6709\u4E24\u79CD\u65B9\u6CD5\uFF1A</p><ul><li>comma-ok\u65AD\u8A00</li><li>switch\u6D4B\u8BD5</li></ul><h4 id="_1-comma-ok\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#_1-comma-ok\u65AD\u8A00" aria-hidden="true">#</a> 1\uFF0Ccomma-ok\u65AD\u8A00</h4><p>Go\u8BED\u8A00\u91CC\u9762\u6709\u4E00\u4E2A\u8BED\u6CD5\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5224\u65AD\u662F\u5426\u662F\u8BE5\u7C7B\u578B\u7684\u53D8\u91CF\uFF1A<code>value, ok = element.(T)</code>\u8FD9\u91CC\u7684value\u5C31\u662F\u53D8\u91CF\u7684\u503C\uFF0Cok\u662F\u4E00\u4E2Abool\u7C7B\u578B\uFF0Celement\u662Finterface\u53D8\u91CF\uFF0CT\u662F\u65AD\u8A00\u7684\u7C7B\u578B\u3002</p><p>\u5982\u679Celement\u91CC\u9762\u786E\u5B9E\u5B58\u50A8\u4E86T\u7C7B\u578B\u7684\u6570\u503C\uFF0C\u90A3\u4E48ok\u8FD4\u56DEtrue\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DEfalse\u3002</p><p>\u9996\u5148\u53EF\u4EE5\u901A\u8FC7if\u5224\u65AD\u6765\u8FDB\u884C\u67E5\u8BE2\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 name <span class="token builtin">string</span>
 id   <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 i <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
 i<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
 i<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;hello go&quot;</span>
 i<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> Student<span class="token punctuation">{</span><span class="token string">&quot;erya&quot;</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">}</span>

 <span class="token comment">//\u7C7B\u578B\u67E5\u8BE2\uFF0C\u4E5F\u53EB\u7C7B\u578B\u65AD\u8A00</span>
 <span class="token comment">//\u7B2C\u4E00\u4E2A\u8FD4\u56DE\u4E0B\u6807\uFF0C\u7B2C\u4E8C\u4E2A\u8FD4\u56DE\u4E0B\u6807\u5BF9\u5E94\u7684\u503C\uFF0Cdata\u5206\u522B\u662Fi[0],i[1],i[2]</span>
 <span class="token keyword">for</span> index<span class="token punctuation">,</span> data <span class="token operator">:=</span> <span class="token keyword">range</span> i <span class="token punctuation">{</span>
  <span class="token comment">//\u7B2C\u4E00\u4E2A\u8FD4\u56DE\u7684\u662F\u503C\uFF0C\u7B2C\u4E8C\u4E2A\u8FD4\u56DE\u5224\u65AD\u7ED3\u679C\u7684\u771F\u5047</span>
  <span class="token keyword">if</span> value<span class="token punctuation">,</span> ok <span class="token operator">:=</span> data<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token operator">==</span> <span class="token boolean">true</span> <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;x[%d] \u7C7B\u578B\u4E3Aint, \u5185\u5BB9\u4E3A %d\\n&quot;</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> value<span class="token punctuation">,</span> ok <span class="token operator">:=</span> data<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token operator">==</span> <span class="token boolean">true</span> <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;x[%d] \u7C7B\u578B\u4E3Astring, \u5185\u5BB9\u4E3A %s\\n&quot;</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> value<span class="token punctuation">,</span> ok <span class="token operator">:=</span> data<span class="token punctuation">.</span><span class="token punctuation">(</span>Student<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token operator">==</span> <span class="token boolean">true</span> <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;x[%d] \u7C7B\u578B\u4E3AStudent, \u5185\u5BB9\u4E3Aname = %s, id = %d\\n&quot;</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> value<span class="token punctuation">.</span>name<span class="token punctuation">,</span> value<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u8005\u4F7F\u7528switch\u8FDB\u884C\u5224\u65AD\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 name <span class="token builtin">string</span>
 id   <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 i <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
 i<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
 i<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;hello go&quot;</span>
 i<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> Student<span class="token punctuation">{</span><span class="token string">&quot;erya&quot;</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">}</span>

 <span class="token comment">//\u7C7B\u578B\u67E5\u8BE2\uFF0C\u4E5F\u53EB\u7C7B\u578B\u65AD\u8A00</span>
 <span class="token keyword">for</span> index<span class="token punctuation">,</span> data <span class="token operator">:=</span> <span class="token keyword">range</span> i <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> value <span class="token operator">:=</span> data<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;x[%d] \u7C7B\u578B\u4E3Aint, \u5185\u5BB9\u4E3A %d\\n&quot;</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
  <span class="token keyword">case</span> <span class="token builtin">string</span><span class="token punctuation">:</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;x[%d] \u7C7B\u578B\u4E3Astring, \u5185\u5BB9\u4E3A %s\\n&quot;</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
  <span class="token keyword">case</span> Student<span class="token punctuation">:</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;x[%d] \u7C7B\u578B\u4E3AStudent, \u5185\u5BB9\u4E3Aname = %s, id = %d\\n&quot;</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> value<span class="token punctuation">.</span>name<span class="token punctuation">,</span> value<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),i=[e];function o(c,l){return s(),a("div",null,i)}const r=n(p,[["render",o],["__file","16.\u63A5\u53E3.html.vue"]]);export{r as default};
