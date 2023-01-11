import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as o,a as s,b as n,d as i,f as a,r as c}from"./app.ec51a1ed.js";const l={},u=a(`<h1 id="_09-\u6307\u9488-pointer" tabindex="-1"><a class="header-anchor" href="#_09-\u6307\u9488-pointer" aria-hidden="true">#</a> 09.\u6307\u9488\uFF08pointer\uFF09</h1><h2 id="_1-\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#_1-\u6307\u9488" aria-hidden="true">#</a> 1\uFF0C\u6307\u9488</h2><p>\u6307\u9488\u662F\u4E00\u4E2A\u4EE3\u8868\u7740\u67D0\u4E2A\u5185\u5B58\u5730\u5740\u7684\u503C\u3002</p><p>\u8FD9\u4E2A\u5185\u5B58\u5730\u5740\u5F80\u5F80\u662F\u5728\u5185\u5B58\u4E2D\u5B58\u4F4F\u7684\u4E24\u4E00\u4E2A\u53D8\u91CF\u7684\u503C\u7684\u8D77\u59CB\u4F4D\u7F6E\u3002Go\u8BED\u8A00\u5BF9\u6307\u9488\u7684\u652F\u6301\u4ECB\u4E8EJava\u8BED\u8A00\u548CC/C++\u8BED\u8A00\u4E4B\u95F4\uFF0C\u5B83\u65E2\u6CA1\u6709\u50CFJava\u8BED\u8A00\u90A3\u6837\u53D6\u6D88\u4E86\u4EE3\u7801\u5BF9\u6307\u9488\u7684\u76F4\u63A5\u64CD\u4F5C\u7684\u80FD\u529B\uFF0C\u4E5F\u907F\u514D\u4E86C/C++\u8BED\u8A00\u4E2D\u7531\u4E8E\u5BF9\u6307\u9488\u7684\u6EE5\u7528\u800C\u9020\u6210\u7684\u5B89\u5168\u548C\u53EF\u9760\u6027\u95EE\u9898\u3002</p><p>Go\u8BED\u8A00\u867D\u7136\u4FDD\u7559\u4E86\u6307\u9488\uFF0C\u4F46\u4E0E\u5176\u4ED6\u7F16\u7A0B\u8BED\u8A00\u4E0D\u540C\u7684\u662F\uFF1A</p><ul><li>\u9ED8\u8BA4\u503Cnil\uFF0C\u6CA1\u6709NULL\u5E38\u91CF\u3002</li><li>\u64CD\u4F5C\u7B26&quot;&amp;&quot;\u53D6\u53D8\u91CF\u5730\u5740\uFF0C&quot;*&quot;\u901A\u8FC7\u6307\u9488\u8BBF\u95EE\u76EE\u6807\u5BF9\u8C61\u3002</li><li>\u4E0D\u652F\u6301\u6307\u9488\u8FD0\u7B97\uFF0C\u4E0D\u652F\u6301&quot;-&gt;&quot;\u8FD0\u7B97\u7B26\uFF0C\u76F4\u63A5\u7528&quot;.&quot;\u8BBF\u95EE\u76EE\u6807\u6210\u5458\u3002</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span>
 <span class="token comment">//\u6BCF\u4E2A\u53D8\u91CF\u67092\u5C42\u542B\u4E49\uFF0C\u53D8\u91CF\u7684\u5185\u5B58\u548C\u53D8\u91CF\u7684\u5730\u5740</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a = %d\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>   <span class="token comment">//a,\u53D8\u91CF\u7684\u5185\u5B58\uFF0C\u4E5F\u5C31\u662F\u5B58\u5728\u5185\u5B58\u5F53\u4E2D\u7684\u5185\u5BB9</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;&amp;a = %v\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">)</span> <span class="token comment">//&amp;a,\u53D8\u91CF\u7684\u5730\u5740\uFF0C\u4E5F\u5C31\u662F\u5185\u5B58\u6240\u5728\u5185\u5B58\u5F53\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u4E5F\u53EB\u6307\u9488</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-\u6307\u9488\u53D8\u91CF\u7684\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-\u6307\u9488\u53D8\u91CF\u7684\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> 1\uFF0C\u6307\u9488\u53D8\u91CF\u7684\u57FA\u672C\u4F7F\u7528</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span>
 <span class="token comment">//\u6BCF\u4E2A\u53D8\u91CF\u67092\u5C42\u542B\u4E49\uFF0C\u53D8\u91CF\u7684\u5185\u5B58\u548C\u53D8\u91CF\u7684\u5730\u5740</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a = %d\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>   <span class="token comment">//a,\u53D8\u91CF\u7684\u5185\u5B58\uFF0C\u4E5F\u5C31\u662F\u5B58\u5728\u5185\u5B58\u5F53\u4E2D\u7684\u5185\u5BB9</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;&amp;a = %v\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">)</span> <span class="token comment">//&amp;a,\u53D8\u91CF\u7684\u5730\u5740\uFF0C\u4E5F\u5C31\u662F\u5185\u5B58\u6240\u5728\u5185\u5B58\u5F53\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u4E5F\u53EB\u6307\u9488</span>

 <span class="token comment">//\u4FDD\u5B58\u67D0\u4E2A\u53D8\u91CF\u7684\u5730\u5740\uFF0C\u9700\u8981\u6307\u9488\u7C7B\u578B *int \u4FDD\u5B58int\u7684\u5730\u5740\uFF0C **int\u5219\u4FDD\u5B58*int\u7684\u5730\u5740</span>
 <span class="token comment">//\u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CFp\uFF0C\u7C7B\u578B\u4E3A*int</span>
 <span class="token keyword">var</span> p <span class="token operator">*</span><span class="token builtin">int</span>
 p <span class="token operator">=</span> <span class="token operator">&amp;</span>a <span class="token comment">//\u6307\u9488\u53D8\u91CF\u6307\u5411\u8C01\uFF0C\u5C31\u628A\u8C01\u7684\u5730\u5740\u8D4B\u7ED9\u6307\u9488\u53D8\u91CF</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p = %v, &amp;a = %v\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">)</span>

 <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token number">666</span> <span class="token comment">//*p\u64CD\u4F5C\u7684\u4E0D\u662Fp\u7684\u5185\u5B58\uFF0C\u662Fp\u6240\u6307\u5411\u7684\u5185\u5B58(\u5C31\u662Fa)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;*p = %v, a = %v\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>p<span class="token punctuation">,</span> a<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u662F\u9488\u5BF9\u6574\u5F62\u7684\u4E00\u4E2A\u6D4B\u8BD5\uFF0C\u5176\u5B9E\uFF0C\u5728\u9488\u5BF9\u5B57\u7B26\u4E32\u7684\u65F6\u5019\uFF0C\u4E5F\u662F\u4E00\u6837\u7684\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 s <span class="token operator">:=</span> <span class="token string">&quot;good bay&quot;</span>
 <span class="token keyword">var</span> p <span class="token operator">*</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>s
 <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token string">&quot;ciao&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p = %v\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;*p = %v\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>p<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s = %v\\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u5BF9 *p \u8D4B\u53E6\u4E00\u4E2A\u503C\u6765\u66F4\u6539\u201C\u5BF9\u8C61\u201D\uFF0C\u8FD9\u6837 s \u4E5F\u4F1A\u968F\u4E4B\u66F4\u6539\u3002</p><h3 id="_2-\u4E0D\u8981\u64CD\u4F5C\u6CA1\u6709\u5408\u6CD5\u6307\u5411\u7684\u5185\u5B58" tabindex="-1"><a class="header-anchor" href="#_2-\u4E0D\u8981\u64CD\u4F5C\u6CA1\u6709\u5408\u6CD5\u6307\u5411\u7684\u5185\u5B58" aria-hidden="true">#</a> 2\uFF0C\u4E0D\u8981\u64CD\u4F5C\u6CA1\u6709\u5408\u6CD5\u6307\u5411\u7684\u5185\u5B58</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> p <span class="token operator">*</span><span class="token builtin">int</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;p = &quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>

 <span class="token comment">//*p = 666 //err,\u56E0\u4E3Ap\u6CA1\u6709\u5408\u6CD5\u6307\u5411\u3002</span>
 <span class="token keyword">var</span> a <span class="token builtin">int</span>
 p <span class="token operator">=</span> <span class="token operator">&amp;</span>a <span class="token comment">//p\u6307\u5411a\u7684\u6307\u9488</span>
 <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token number">666</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;a = &quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FB9\u4E3E\u4E86\u4E00\u4E2A\u6CA1\u6709\u521D\u59CB\u5316\u503C\u7684\u53D8\u91CF\uFF0C\u5B83\u4F1A\u88AB\u7F3A\u7701\u4E3Anil\u3002</p><p>\u4F46\u662F\u6CE8\u610F\uFF1A\u8FD8\u4E0D\u80FD\u5F97\u5230\u4E00\u4E2A\u6587\u5B57\u6216\u5E38\u91CF\u7684\u5730\u5740\u3002</p><p><code>\u5E38\u91CF\uFF1A</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> i <span class="token operator">=</span> <span class="token number">5</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;&amp;i = &quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>i<span class="token punctuation">)</span> <span class="token comment">//err: cannot take the address of i</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>\u6587\u5B57\uFF1A</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;test = &quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">//err: cannot take the address of 10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),r=s("code",null,"pointer+2",-1),d={href:"http://VB.NET",target:"_blank",rel:"noopener noreferrer"},k=a(`<p>\u56E0\u6B64 <code>c = *p++</code> \u5728 Go \u8BED\u8A00\u7684\u4EE3\u7801\u4E2D\u662F\u4E0D\u5408\u6CD5\u7684\u3002</p><h2 id="_2-new\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2-new\u51FD\u6570" aria-hidden="true">#</a> 2\uFF0Cnew\u51FD\u6570</h2><p>\u51FD\u6570new(T)\u5C06\u521B\u5EFA\u4E00\u4E2AT\u7C7B\u578B\u7684\u533F\u540D\u53D8\u91CF\uFF0C\u6240\u505A\u7684\u662F\u4E3AT\u7C7B\u578B\u7684\u65B0\u503C\u5206\u914D\u5E76\u6E05\u96F6\u4E00\u5757\u513F\u5185\u5B58\u7A7A\u95F4\uFF0C\u7136\u540E\u5C06\u8FD9\u5757\u5185\u5B58\u7A7A\u95F4\u7684\u5730\u5740\u4F5C\u4E3A\u7ED3\u679C\u8FD4\u56DE\uFF0C\u800C\u8FD9\u4E2A\u7ED3\u679C\u5C31\u662F\u6307\u5411\u8FD9\u4E2A\u65B0\u7684T\u7C7B\u578B\u503C\u7684\u6307\u9488\u503C\uFF0C\u8FD4\u56DE\u7684\u6307\u9488\u7C7B\u578B\u4E3A*T\u3002</p><h3 id="_1-new\u51FD\u6570\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-new\u51FD\u6570\u7684\u4F7F\u7528" aria-hidden="true">#</a> 1\uFF0Cnew\u51FD\u6570\u7684\u4F7F\u7528</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">/*\u4E4B\u524D\u7684\u4F20\u7EDF\u8D4B\u503C\u65B9\u5F0F
 a := 10
 var p *int
 p = &amp;a //\u6307\u5411\u4E00\u4E2A\u5408\u6CD5\u5185\u5B58
 *p = 666
 fmt.Println(&quot;*p =&quot;, *p)
 */</span>

 <span class="token comment">//p\u4E3A*int\u7C7B\u578B\uFF0C\u6307\u5411\u533F\u540Dint\u53D8\u91CF</span>
 <span class="token keyword">var</span> p <span class="token operator">*</span><span class="token builtin">int</span>
 <span class="token comment">//new\u8868\u793A\u5206\u914D\u4E00\u4E2Aint\u7C7B\u578B\u7684\u7A7A\u95F4\uFF0C\u7ED9\u5230\u53D8\u91CFp</span>
 p <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;*p =&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>p<span class="token punctuation">)</span> <span class="token comment">//*p=0</span>

 <span class="token comment">//\u540C\u6837\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u81EA\u52A8\u63A8\u5BFC\u7C7B\u578B\u8FDB\u884C\u8D4B\u503C</span>
 q <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
 <span class="token operator">*</span>q <span class="token operator">=</span> <span class="token number">777</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;*q =&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>q<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EA\u9700\u8981\u4F7F\u7528new()\u51FD\u6570\uFF0C\u65E0\u9700\u62C5\u5FC3\u5176\u5185\u5B58\u7684\u751F\u547D\u5468\u671F\u6216\u600E\u6837\u5C06\u5176\u5220\u9664\uFF0C\u56E0\u4E3AGo\u8BED\u8A00\u7684\u5185\u5B58\u7BA1\u7406\u7CFB\u7EDF\u4F1A\u5E2E\u6211\u4EEC\u6253\u7406\u4E00\u5207\uFF08\u76F8\u5F53\u4E8E\u81EA\u52A8GC\uFF09\u3002</p><h3 id="_2-\u666E\u901A\u53D8\u91CF\u505A\u51FD\u6570\u7684\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_2-\u666E\u901A\u53D8\u91CF\u505A\u51FD\u6570\u7684\u53C2\u6570" aria-hidden="true">#</a> 2\uFF0C\u666E\u901A\u53D8\u91CF\u505A\u51FD\u6570\u7684\u53C2\u6570</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">swap</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 a<span class="token punctuation">,</span> b <span class="token operator">=</span> b<span class="token punctuation">,</span> a
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;swap : a= %d, b= %d\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 a<span class="token punctuation">,</span> b <span class="token operator">:=</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span>
 <span class="token function">swap</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">//\u901A\u8FC7\u53D8\u91CF\u8FDB\u884C\u503C\u7684\u4F20\u9012(\u7AD9\u5728\u53D8\u91CF\u7684\u89D2\u5EA6\u4E0A)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;main : a= %d, b= %d\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://t.eryajf.net/imgs/2021/09/a26cb2391973151c.jpg" alt="m_a5a5b59ecd9291857e97028a15160cf8_r"></p><h3 id="_3-\u6307\u9488\u505A\u51FD\u6570\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_3-\u6307\u9488\u505A\u51FD\u6570\u53C2\u6570" aria-hidden="true">#</a> 3\uFF0C\u6307\u9488\u505A\u51FD\u6570\u53C2\u6570</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">swap</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> p2 <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token operator">*</span>p1<span class="token punctuation">,</span> <span class="token operator">*</span>p2 <span class="token operator">=</span> <span class="token operator">*</span>p2<span class="token punctuation">,</span> <span class="token operator">*</span>p1
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 a<span class="token punctuation">,</span> b <span class="token operator">:=</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span>
 <span class="token comment">//\u901A\u8FC7\u4E00\u4E2A\u51FD\u6570\u4EA4\u6362a\u548Cb\u7684\u5185\u5BB9</span>
 <span class="token function">swap</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">)</span> <span class="token comment">//\u5730\u5740\u4F20\u9012</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;main : a= %d, b= %d\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://t.eryajf.net/imgs/2021/09/e90f11c2c09eb536.jpg" alt="m_f7fdd690cd0415d9ae16d73c02f18101_r"></p>`,12);function v(m,b){const p=c("ExternalLinkIcon");return e(),o("div",null,[u,s("p",null,[n("\u6240\u4EE5\u8BF4\uFF0CGo \u8BED\u8A00\u548C C\u3001C++ \u4EE5\u53CA D \u8BED\u8A00\u8FD9\u4E9B\u4F4E\u7EA7\uFF08\u7CFB\u7EDF\uFF09\u8BED\u8A00\u4E00\u6837\uFF0C\u90FD\u6709\u6307\u9488\u7684\u6982\u5FF5\u3002\u4F46\u662F\u5BF9\u4E8E\u7ECF\u5E38\u5BFC\u81F4 C \u8BED\u8A00\u5185\u5B58\u6CC4\u6F0F\u7EE7\u800C\u7A0B\u5E8F\u5D29\u6E83\u7684\u6307\u9488\u8FD0\u7B97\uFF08\u6240\u8C13\u7684\u6307\u9488\u7B97\u6CD5\uFF0C\u5982\uFF1A"),r,n("\uFF0C\u79FB\u52A8\u6307\u9488\u6307\u5411\u5B57\u7B26\u4E32\u7684\u5B57\u8282\u6570\u6216\u6570\u7EC4\u7684\u67D0\u4E2A\u4F4D\u7F6E\uFF09\u662F\u4E0D\u88AB\u5141\u8BB8\u7684\u3002Go \u8BED\u8A00\u4E2D\u7684\u6307\u9488\u4FDD\u8BC1\u4E86\u5185\u5B58\u5B89\u5168\uFF0C\u66F4\u50CF\u662F Java\u3001C# \u548C "),s("a",d,[n("VB.NET"),i(p)]),n(" \u4E2D\u7684\u5F15\u7528\u3002")]),k])}const q=t(l,[["render",v],["__file","09.\u6307\u9488\uFF08pointer\uFF09.html.vue"]]);export{q as default};
