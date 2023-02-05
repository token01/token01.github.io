import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,f as e}from"./app.df1d0035.js";const o={},d=e(`<h1 id="_02-golang\u4EA4\u53C9\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#_02-golang\u4EA4\u53C9\u7F16\u8BD1" aria-hidden="true">#</a> 02.golang\u4EA4\u53C9\u7F16\u8BD1</h1><p>Golang\u652F\u6301\u4EA4\u53C9\u7F16\u8BD1\u7A0B\u5E8F\uFF0C\u4EA4\u53C9\u7F16\u8BD1\u7684\u610F\u601D\u5C31\u662F\u5728Mac\u7535\u8111\u4E0A\u53EF\u4EE5\u7F16\u8BD1\u51FA\u80FD\u5728Windows\u4E0A\uFF0CLinux\u4E0A\u8FD0\u884C\u7684\u7A0B\u5E8F\uFF0C\u540C\u7406\u5176\u4ED6\u73AF\u5883\u4E5F\u53EF\u4EE5\u3002</p><p>\u65B9\u6CD5\u4E5F\u7279\u522B\u7B80\u5355\uFF0C\u8FD9\u91CC\u505A\u4E00\u4E0B\u8BB0\u5F55\u3002</p><h2 id="_1-mac\u7535\u8111\u4E0A\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#_1-mac\u7535\u8111\u4E0A\u7F16\u8BD1" aria-hidden="true">#</a> 1\uFF0CMac\u7535\u8111\u4E0A\u7F16\u8BD1</h2><p><code>Linux</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>CGO_ENABLED<span class="token operator">=</span><span class="token number">0</span> GOOS<span class="token operator">=</span>linux GOARCH<span class="token operator">=</span>amd64 <span class="token keyword">go</span> build main<span class="token punctuation">.</span><span class="token keyword">go</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Windows</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>CGO_ENABLED<span class="token operator">=</span><span class="token number">0</span> GOOS<span class="token operator">=</span>windows GOARCH<span class="token operator">=</span>amd64 <span class="token keyword">go</span> build main<span class="token punctuation">.</span><span class="token keyword">go</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-linux\u73AF\u5883\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#_2-linux\u73AF\u5883\u7F16\u8BD1" aria-hidden="true">#</a> 2\uFF0CLinux\u73AF\u5883\u7F16\u8BD1</h2><p><code>Mac</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>CGO_ENABLED<span class="token operator">=</span><span class="token number">0</span> GOOS<span class="token operator">=</span>darwin GOARCH<span class="token operator">=</span>amd64 <span class="token keyword">go</span> build main<span class="token punctuation">.</span><span class="token keyword">go</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Windows</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>CGO_ENABLED<span class="token operator">=</span><span class="token number">0</span> GOOS<span class="token operator">=</span>windows GOARCH<span class="token operator">=</span>amd64 <span class="token keyword">go</span> build main<span class="token punctuation">.</span><span class="token keyword">go</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-windows\u7535\u8111\u4E0A\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#_3-windows\u7535\u8111\u4E0A\u7F16\u8BD1" aria-hidden="true">#</a> 3\uFF0CWindows\u7535\u8111\u4E0A\u7F16\u8BD1</h2><p><code>Mac</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>SET CGO_ENABLED<span class="token operator">=</span><span class="token number">0</span>
SET GOOS<span class="token operator">=</span>darwin
SET GOARCH<span class="token operator">=</span>amd64
<span class="token keyword">go</span> build main<span class="token punctuation">.</span><span class="token keyword">go</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Linux</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>SET CGO_ENABLED<span class="token operator">=</span><span class="token number">0</span>
SET GOOS<span class="token operator">=</span>linux
SET GOARCH<span class="token operator">=</span>amd64
<span class="token keyword">go</span> build main<span class="token punctuation">.</span><span class="token keyword">go</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),i=[d];function p(r,l){return n(),s("div",null,i)}const u=a(o,[["render",p],["__file","02.golang\u4EA4\u53C9\u7F16\u8BD1.html.vue"]]);export{u as default};
