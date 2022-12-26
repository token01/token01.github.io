import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a,b as p,d as c,f as o,r as i}from"./app.33b1aeb5.js";const l={},u=o(`<h1 id="vue\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#vue\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> Vue\u8FC7\u6EE4\u5668</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><h3 id="_1-1-\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4F5C\u7528" aria-hidden="true">#</a> 1.1 \u4F5C\u7528</h3><p>Vue \u8FC7\u6EE4\u5668\u7528\u4E8E\u4E00\u4E9B\u5E38\u89C1\u7684\u6587\u672C\u683C\u5F0F\u5316</p><h3 id="_1-2-\u5728\u54EA\u7528" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5728\u54EA\u7528" aria-hidden="true">#</a> 1.2 \u5728\u54EA\u7528</h3><ul><li><p>\u53CC\u82B1\u62EC\u53F7\u63D2\u503C</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u5728\u53CC\u82B1\u62EC\u53F7\u4E2D --&gt;</span>
{{ message | capitalize }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>v-bind</code> \u8868\u8FBE\u5F0F</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u5728 \`v-bind\` \u4E2D --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rawId | formatId<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>\u8FC7\u6EE4\u5668\u5E94\u8BE5\u88AB\u6DFB\u52A0\u5728 JavaScript \u8868\u8FBE\u5F0F\u7684\u5C3E\u90E8\uFF0C\u7531\u201C\u7BA1\u9053\u201D\u7B26\u53F7\u6307\u793A\uFF1A</p><h2 id="_2-\u5B9A\u4E49\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9A\u4E49\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> 2. \u5B9A\u4E49\u8FC7\u6EE4\u5668</h2><h3 id="_2-1-\u7EC4\u4EF6\u4E2D\u5B9A\u4E49\u672C\u5730\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#_2-1-\u7EC4\u4EF6\u4E2D\u5B9A\u4E49\u672C\u5730\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> 2.1 \u7EC4\u4EF6\u4E2D\u5B9A\u4E49\u672C\u5730\u8FC7\u6EE4\u5668</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">capitalize</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>
    value <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> value<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u521B\u5EFAvue-\u5B9E\u4F8B\u4E4B\u524D\u5168\u5C40\u5B9A\u4E49\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#_2-2-\u521B\u5EFAvue-\u5B9E\u4F8B\u4E4B\u524D\u5168\u5C40\u5B9A\u4E49\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> 2.2 \u521B\u5EFAVue \u5B9E\u4F8B\u4E4B\u524D\u5168\u5C40\u5B9A\u4E49\u8FC7\u6EE4\u5668</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">&#39;capitalize&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>
  value <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> value<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u5168\u5C40\u8FC7\u6EE4\u5668\u548C\u5C40\u90E8\u8FC7\u6EE4\u5668\u91CD\u540D\u65F6\uFF0C\u4F1A\u91C7\u7528\u5C40\u90E8\u8FC7\u6EE4\u5668\u3002</p><h2 id="_3-\u8FC7\u6EE4\u5668\u53C2\u6570\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#_3-\u8FC7\u6EE4\u5668\u53C2\u6570\u539F\u5219" aria-hidden="true">#</a> 3. \u8FC7\u6EE4\u5668\u53C2\u6570\u539F\u5219</h2><p>\u8FC7\u6EE4\u5668\u51FD\u6570\u603B\u63A5\u6536\u8868\u8FBE\u5F0F\u7684\u503C (\u4E4B\u524D\u7684\u64CD\u4F5C\u94FE\u7684\u7ED3\u679C) \u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u3002</p><h3 id="_3-1-\u7B80\u5355\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#_3-1-\u7B80\u5355\u60C5\u51B5" aria-hidden="true">#</a> 3.1 \u7B80\u5355\u60C5\u51B5</h3><p>\u5728\u4E0A\u8FF0\u4F8B\u5B50\u4E2D\uFF0C<code>capitalize</code> \u8FC7\u6EE4\u5668\u51FD\u6570\u5C06\u4F1A\u6536\u5230 <code>message</code> \u7684\u503C\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u3002</p><h3 id="_3-2-\u8FC7\u6EE4\u5668\u4E32\u8054\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#_3-2-\u8FC7\u6EE4\u5668\u4E32\u8054\u60C5\u51B5" aria-hidden="true">#</a> 3.2 \u8FC7\u6EE4\u5668\u4E32\u8054\u60C5\u51B5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{{ message | filterA | filterB }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C<code>filterA</code> \u88AB\u5B9A\u4E49\u4E3A\u63A5\u6536\u5355\u4E2A\u53C2\u6570\u7684\u8FC7\u6EE4\u5668\u51FD\u6570\uFF0C\u8868\u8FBE\u5F0F <code>message</code> \u7684\u503C\u5C06\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u5230\u51FD\u6570\u4E2D\u3002\u7136\u540E\u7EE7\u7EED\u8C03\u7528\u540C\u6837\u88AB\u5B9A\u4E49\u4E3A\u63A5\u6536\u5355\u4E2A\u53C2\u6570\u7684\u8FC7\u6EE4\u5668\u51FD\u6570 <code>filterB</code>\uFF0C\u5C06 <code>filterA</code> \u7684\u7ED3\u679C\u4F20\u9012\u5230 <code>filterB</code> \u4E2D\u3002</p><h3 id="_3-3-\u591A\u4E2A\u53C2\u6570\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#_3-3-\u591A\u4E2A\u53C2\u6570\u60C5\u51B5" aria-hidden="true">#</a> 3.3 \u591A\u4E2A\u53C2\u6570\u60C5\u51B5</h3><p>\u8FC7\u6EE4\u5668\u662F JavaScript \u51FD\u6570\uFF0C\u56E0\u6B64\u53EF\u4EE5\u63A5\u6536\u53C2\u6570\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{{ message | filterA(&#39;arg1&#39;, arg2) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u91CC\uFF0C<code>filterA</code> \u88AB\u5B9A\u4E49\u4E3A\u63A5\u6536\u4E09\u4E2A\u53C2\u6570\u7684\u8FC7\u6EE4\u5668\u51FD\u6570\u3002\u5176\u4E2D <code>message</code> \u7684\u503C\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u666E\u901A\u5B57\u7B26\u4E32 <code>&#39;arg1&#39;</code> \u4F5C\u4E3A\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u8868\u8FBE\u5F0F <code>arg2</code> \u7684\u503C\u4F5C\u4E3A\u7B2C\u4E09\u4E2A\u53C2\u6570\u3002</p><h2 id="_4-\u8865\u5145" tabindex="-1"><a class="header-anchor" href="#_4-\u8865\u5145" aria-hidden="true">#</a> 4. \u8865\u5145</h2><ul><li><p>\u5982\u679C\u5728element \u7684table \u4E2D\uFF0C\u9700\u8981\u683C\u5F0F\u5316\u6570\u636E\u4E5F\u53EF\u4EE5\u4F7F\u7528:formatter \u8FBE\u5230\u6587\u672C\u683C\u5F0F\u5316\u6548\u679C</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u72B6\u6001<span class="token punctuation">&quot;</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>status<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:formatter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>statusFormat<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token comment">// \u5C97\u4F4D\u72B6\u6001\u5B57\u5178\u7FFB\u8BD1</span>
    <span class="token function">statusFormat</span><span class="token punctuation">(</span><span class="token parameter">row<span class="token punctuation">,</span> column</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">selectDictLabel</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>statusOptions<span class="token punctuation">,</span> row<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_5-\u4F7F\u7528\u5168\u5C40\u7684\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#_5-\u4F7F\u7528\u5168\u5C40\u7684\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> 5. \u4F7F\u7528\u5168\u5C40\u7684\u8FC7\u6EE4\u5668</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let dateStr = this.$options.filters[&quot;dateFormat&quot;](new Date(), &quot;YYYYMMDDHHmmss&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,29),r={href:"https://cn.vuejs.org/v2/guide/filters.html",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const n=i("ExternalLinkIcon");return e(),t("div",null,[u,a("p",null,[a("a",r,[p("\u5B98\u65B9\u6587\u6863"),c(n)])])])}const b=s(l,[["render",d],["__file","vue-filter.html.vue"]]);export{b as default};
