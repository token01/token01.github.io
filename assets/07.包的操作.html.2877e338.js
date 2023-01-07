import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.d506d850.js";const i={},t=e(`<h1 id="_07-\u5305\u7684\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_07-\u5305\u7684\u64CD\u4F5C" aria-hidden="true">#</a> 07.\u5305\u7684\u64CD\u4F5C</h1><h2 id="_1-\u4E0E\u5305\u76F8\u5173\u7684\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_1-\u4E0E\u5305\u76F8\u5173\u7684\u64CD\u4F5C" aria-hidden="true">#</a> 1\uFF0C\u4E0E\u5305\u76F8\u5173\u7684\u64CD\u4F5C</h2><h3 id="_1-\u5BFC\u5165\u5305" tabindex="-1"><a class="header-anchor" href="#_1-\u5BFC\u5165\u5305" aria-hidden="true">#</a> 1\uFF0C\u5BFC\u5165\u5305</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token comment">//\u591A\u5305\u5F15\u7528\u65B9\u5F0F1</span>
<span class="token comment">// import &quot;fmt&quot;</span>
<span class="token comment">// import &quot;os&quot;</span>

<span class="token comment">//\u591A\u5305\u5F15\u7528\u65B9\u5F0F2\uFF0C\u5E38\u7528</span>
<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;this is test&quot;</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;args is=&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>Args<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u7ED9\u5305\u8D77\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#_2-\u7ED9\u5305\u8D77\u522B\u540D" aria-hidden="true">#</a> 2\uFF0C\u7ED9\u5305\u8D77\u522B\u540D</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> io <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 io<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;this is test&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u70B9\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_3-\u70B9\u64CD\u4F5C" aria-hidden="true">#</a> 3\uFF0C<code>.</code>\u70B9\u64CD\u4F5C</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token punctuation">.</span> <span class="token string">&quot;fmt&quot;</span>
 <span class="token punctuation">.</span> <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;this is test&quot;</span><span class="token punctuation">)</span>
 <span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;args is=&quot;</span><span class="token punctuation">,</span> Args<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u5F15\u7528\u5305\u4E4B\u524D\u52A0\u4E00\u4E2A<code>.</code>\uFF0C\u53EF\u4EE5\u5728\u4E0B\u8FB9\u8C03\u7528\u5305\u7684\u65F6\u5019\uFF0C\u53BB\u6389\u524D\u7F00\u5305\u540D\uFF0C\u4F46\u662F\u4E0D\u63A8\u8350\u8FD9\u79CD\u505A\u6CD5\u3002</p><h3 id="_4-\u4E0B\u5212\u7EBF\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_4-\u4E0B\u5212\u7EBF\u64CD\u4F5C" aria-hidden="true">#</a> 4\uFF0C<code>_</code>\u4E0B\u5212\u7EBF\u64CD\u4F5C</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token boolean">_</span> <span class="token string">&quot;fmt&quot;</span>
 <span class="token boolean">_</span> <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u5F15\u7528\u5305\u4E4B\u524D\u52A0\u4E00\u4E2A<code>_</code>\uFF0C\u6709\u65F6\u5019\u4F1A\u7528\u5230\u4E00\u4E2A\u5305\u7684init\u51FD\u6570\uFF0C\u4F46\u662F\u53C8\u4E0D\u9700\u8981\u5F15\u7528\u8FD9\u4E2A\u5305\u7684\u6807\u8BC6\u7B26\uFF0C\u5C31\u53EF\u4EE5\u7528\u8FD9\u4E2A\u4E0B\u5212\u7EBF\u64CD\u4F5C\u3002</p>`,12),o=[t];function c(p,l){return s(),a("div",null,o)}const r=n(i,[["render",c],["__file","07.\u5305\u7684\u64CD\u4F5C.html.vue"]]);export{r as default};
