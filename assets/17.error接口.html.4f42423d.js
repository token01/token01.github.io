import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.ec51a1ed.js";const t={},p=e(`<h1 id="_17-error\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_17-error\u63A5\u53E3" aria-hidden="true">#</a> 17.error\u63A5\u53E3</h1><h2 id="_1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1-\u6982\u8FF0" aria-hidden="true">#</a> 1\uFF0C\u6982\u8FF0</h2><p>Go\u8BED\u8A00\u5F15\u5165\u4E86\u4E00\u4E2A\u5173\u4E8E\u9519\u8BEF\u5904\u7406\u7684\u6807\u51C6\u6A21\u5F0F\uFF0C\u5373error\u63A5\u53E3\uFF0C\u5B83\u662FGo\u8BED\u8A00\u5185\u5EFA\u7684\u63A5\u53E3\u7C7B\u578B\uFF0C\u8BE5\u63A5\u53E3\u7684\u5B9A\u4E49\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> <span class="token builtin">error</span> <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Go\u8BED\u8A00\u7684\u6807\u51C6\u5E93\u4EE3\u7801\u5305errors\u4E3A\u7528\u6237\u63D0\u4F9B\u5982\u4E0B\u65B9\u6CD5\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> errors

<span class="token keyword">type</span> errorString <span class="token keyword">struct</span> <span class="token punctuation">{</span> 
    text <span class="token builtin">string</span> 
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">New</span><span class="token punctuation">(</span>text <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>errorString<span class="token punctuation">{</span>text<span class="token punctuation">}</span> 
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>e <span class="token operator">*</span>errorString<span class="token punctuation">)</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> e<span class="token punctuation">.</span>text 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53E6\u4E00\u4E2A\u53EF\u4EE5\u751F\u6210error\u7C7B\u578B\u503C\u7684\u65B9\u6CD5\u662F\u8C03\u7528fmt\u5305\u4E2D\u7684Errorf\u51FD\u6570\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> fmt
<span class="token keyword">import</span> <span class="token string">&quot;errors&quot;</span>

<span class="token keyword">func</span> <span class="token function">Errorf</span><span class="token punctuation">(</span>format <span class="token builtin">string</span><span class="token punctuation">,</span> args <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>format<span class="token punctuation">,</span> args<span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-error\u63A5\u53E3\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-error\u63A5\u53E3\u7684\u4F7F\u7528" aria-hidden="true">#</a> 2\uFF0Cerror\u63A5\u53E3\u7684\u4F7F\u7528</h2><h3 id="_1-\u7B80\u5355\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u5355\u793A\u4F8B" aria-hidden="true">#</a> 1\uFF0C\u7B80\u5355\u793A\u4F8B</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">import</span> <span class="token string">&quot;errors&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u5148\u4F7F\u7528fmt\u5305\u5185\u7684\u9519\u8BEF\u65B9\u6CD5</span>
 <span class="token comment">//var err1 error = fmt.Errorf(&quot;s%&quot;,&quot;this is normal err1&quot;) \u7B49\u4EF7\u4E8E\u4E0B\u8FB9\u7684</span>
 err1 <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;this is normal err1&quot;</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err1 = &quot;</span><span class="token punctuation">,</span> err1<span class="token punctuation">)</span>

 <span class="token comment">//\u6216\u8005\u76F4\u63A5\u4F7F\u7528error\u5305</span>
 err2 <span class="token operator">:=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;this is normal err2&quot;</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err2 = &quot;</span><span class="token punctuation">,</span> err2<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u5982\u4F55\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u5982\u4F55\u5E94\u7528" aria-hidden="true">#</a> 2\uFF0C\u5982\u4F55\u5E94\u7528</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">import</span> <span class="token string">&quot;errors&quot;</span>

<span class="token keyword">func</span> <span class="token function">MyDiv</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>result <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 err <span class="token operator">=</span> <span class="token boolean">nil</span>
 <span class="token keyword">if</span> b <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
  err <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;\u5206\u6BCD\u4E0D\u80FD\u4E3A0&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  result <span class="token operator">=</span> a <span class="token operator">/</span> b
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 result<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">MyDiv</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;result = &quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","17.error\u63A5\u53E3.html.vue"]]);export{d as default};
