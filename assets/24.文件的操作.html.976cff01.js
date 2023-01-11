import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.0eb3f08c.js";const p={},e=t(`<h1 id="_24-\u6587\u4EF6\u7684\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_24-\u6587\u4EF6\u7684\u64CD\u4F5C" aria-hidden="true">#</a> 24.\u6587\u4EF6\u7684\u64CD\u4F5C</h1><h2 id="_1-\u76F8\u5173\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_1-\u76F8\u5173\u64CD\u4F5C" aria-hidden="true">#</a> 1\uFF0C\u76F8\u5173\u64CD\u4F5C</h2><h3 id="_1-\u5EFA\u7ACB\u4E0E\u6253\u5F00\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u5EFA\u7ACB\u4E0E\u6253\u5F00\u6587\u4EF6" aria-hidden="true">#</a> 1\uFF0C\u5EFA\u7ACB\u4E0E\u6253\u5F00\u6587\u4EF6</h3><p>\u65B0\u5EFA\u6587\u4EF6\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u4E24\u4E2A\u65B9\u6CD5\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Create</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>file <span class="token operator">*</span>File<span class="token punctuation">,</span> err Error<span class="token punctuation">)</span>
\u6839\u636E\u63D0\u4F9B\u7684\u6587\u4EF6\u540D\u521B\u5EFA\u65B0\u7684\u6587\u4EF6\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6587\u4EF6\u5BF9\u8C61\uFF0C\u9ED8\u8BA4\u6743\u9650\u662F<span class="token number">0666</span>\u7684\u6587\u4EF6\uFF0C\u8FD4\u56DE\u7684\u6587\u4EF6\u5BF9\u8C61\u662F\u53EF\u8BFB\u5199\u7684\u3002

<span class="token keyword">func</span> <span class="token function">NewFile</span><span class="token punctuation">(</span>fd <span class="token builtin">uintptr</span><span class="token punctuation">,</span> name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>File
\u6839\u636E\u6587\u4EF6\u63CF\u8FF0\u7B26\u521B\u5EFA\u76F8\u5E94\u7684\u6587\u4EF6\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6587\u4EF6\u5BF9\u8C61
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u5982\u4E0B\u4E24\u4E2A\u65B9\u6CD5\u6765\u6253\u5F00\u6587\u4EF6\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Open</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>file <span class="token operator">*</span>File<span class="token punctuation">,</span> err Error<span class="token punctuation">)</span>
\u8BE5\u65B9\u6CD5\u6253\u5F00\u4E00\u4E2A\u540D\u79F0\u4E3Aname\u7684\u6587\u4EF6\uFF0C\u4F46\u662F\u662F\u53EA\u8BFB\u65B9\u5F0F\uFF0C\u5185\u90E8\u5B9E\u73B0\u5176\u5B9E\u8C03\u7528\u4E86OpenFile\u3002

<span class="token keyword">func</span> <span class="token function">OpenFile</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> flag <span class="token builtin">int</span><span class="token punctuation">,</span> perm <span class="token builtin">uint32</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>file <span class="token operator">*</span>File<span class="token punctuation">,</span> err Error<span class="token punctuation">)</span>
\u6253\u5F00\u540D\u79F0\u4E3Aname\u7684\u6587\u4EF6\uFF0Cflag\u662F\u6253\u5F00\u7684\u65B9\u5F0F\uFF0C\u53EA\u8BFB\u3001\u8BFB\u5199\u7B49\uFF0Cperm\u662F\u6743\u9650
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u5199\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u5199\u6587\u4EF6" aria-hidden="true">#</a> 2\uFF0C\u5199\u6587\u4EF6</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>file <span class="token operator">*</span>File<span class="token punctuation">)</span> <span class="token function">Write</span><span class="token punctuation">(</span>b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err Error<span class="token punctuation">)</span>
\u5199\u5165<span class="token builtin">byte</span>\u7C7B\u578B\u7684\u4FE1\u606F\u5230\u6587\u4EF6

<span class="token keyword">func</span> <span class="token punctuation">(</span>file <span class="token operator">*</span>File<span class="token punctuation">)</span> <span class="token function">WriteAt</span><span class="token punctuation">(</span>b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> off <span class="token builtin">int64</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err Error<span class="token punctuation">)</span>
\u5728\u6307\u5B9A\u4F4D\u7F6E\u5F00\u59CB\u5199\u5165<span class="token builtin">byte</span>\u7C7B\u578B\u7684\u4FE1\u606F

<span class="token keyword">func</span> <span class="token punctuation">(</span>file <span class="token operator">*</span>File<span class="token punctuation">)</span> <span class="token function">WriteString</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ret <span class="token builtin">int</span><span class="token punctuation">,</span> err Error<span class="token punctuation">)</span>
\u5199\u5165<span class="token builtin">string</span>\u4FE1\u606F\u5230\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>os.OpenFile()</code>\u51FD\u6570\u80FD\u591F\u4EE5\u6307\u5B9A\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6\uFF0C\u4ECE\u800C\u5B9E\u73B0\u6587\u4EF6\u7684\u5199\u5165\u76F8\u5173\u529F\u80FD\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">OpenFile</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> flag <span class="token builtin">int</span><span class="token punctuation">,</span> perm FileMode<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>File<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D\uFF1A</p><ul><li><p><code>name</code>\uFF1A\u8981\u6253\u5F00\u7684\u6587\u4EF6\u540D</p></li><li><p><code>flag</code>\uFF1A\u6253\u5F00\u6587\u4EF6\u7684\u6A21\u5F0F\u3002</p><p>\u6A21\u5F0F\u6709\u4EE5\u4E0B\u51E0\u79CD\uFF1A</p><table><thead><tr><th style="text-align:center;">\u6A21\u5F0F</th><th style="text-align:center;">\u542B\u4E49</th></tr></thead><tbody><tr><td style="text-align:center;"><code>os.O_WRONLY</code></td><td style="text-align:center;">\u53EA\u5199</td></tr><tr><td style="text-align:center;"><code>os.O_CREATE</code></td><td style="text-align:center;">\u521B\u5EFA\u6587\u4EF6</td></tr><tr><td style="text-align:center;"><code>os.O_RDONLY</code></td><td style="text-align:center;">\u53EA\u8BFB</td></tr><tr><td style="text-align:center;"><code>os.O_RDWR</code></td><td style="text-align:center;">\u8BFB\u5199</td></tr><tr><td style="text-align:center;"><code>os.O_TRUNC</code></td><td style="text-align:center;">\u6E05\u7A7A</td></tr><tr><td style="text-align:center;"><code>os.O_APPEND</code></td><td style="text-align:center;">\u8FFD\u52A0</td></tr></tbody></table></li><li><p><code>perm</code>\uFF1A\u6587\u4EF6\u6743\u9650\uFF0C\u4E00\u4E2A\u516B\u8FDB\u5236\u6570\u3002r\uFF08\u8BFB\uFF0904\uFF0Cw\uFF08\u5199\uFF0902\uFF0Cx\uFF08\u6267\u884C\uFF0901\u3002</p></li></ul><h3 id="_3-\u8BFB\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u8BFB\u6587\u4EF6" aria-hidden="true">#</a> 3\uFF0C\u8BFB\u6587\u4EF6</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>file <span class="token operator">*</span>File<span class="token punctuation">)</span> <span class="token function">Read</span><span class="token punctuation">(</span>b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err Error<span class="token punctuation">)</span>
\u8BFB\u53D6\u6570\u636E\u5230b\u4E2D

<span class="token keyword">func</span> <span class="token punctuation">(</span>file <span class="token operator">*</span>File<span class="token punctuation">)</span> <span class="token function">ReadAt</span><span class="token punctuation">(</span>b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> off <span class="token builtin">int64</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err Error<span class="token punctuation">)</span>
\u4ECEoff\u5F00\u59CB\u8BFB\u53D6\u6570\u636E\u5230b\u4E2D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u5220\u9664\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-\u5220\u9664\u6587\u4EF6" aria-hidden="true">#</a> 4\uFF0C\u5220\u9664\u6587\u4EF6</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Remove</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> Error
\u8C03\u7528\u8BE5\u51FD\u6570\u5C31\u53EF\u4EE5\u5220\u9664\u6587\u4EF6\u540D\u4E3Aname\u7684\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u793A\u4F8B\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_2-\u793A\u4F8B\u4EE3\u7801" aria-hidden="true">#</a> 2\uFF0C\u793A\u4F8B\u4EE3\u7801</h2><h3 id="_1-\u8BBE\u5907\u6587\u4EF6\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-\u8BBE\u5907\u6587\u4EF6\u7684\u4F7F\u7528" aria-hidden="true">#</a> 1\uFF0C\u8BBE\u5907\u6587\u4EF6\u7684\u4F7F\u7528</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// os.Stdout.Close()         //\u5173\u95ED\u540E\uFF0C\u65E0\u6CD5\u8F93\u51FA</span>
 <span class="token comment">// fmt.Println(&quot;are u ok ?&quot;) //\u5F80\u6807\u51C6\u8F93\u51FA\u8BBE\u5907\uFF08\u663E\u793A\u5668\uFF09\u5199\u5185\u5BB9</span>

 <span class="token comment">//\u6807\u51C6\u8BBE\u5907\u6587\u4EF6os.Stdout\uFF0C\u9ED8\u8BA4\u5DF2\u7ECF\u6253\u5F00\uFF0C\u7528\u6237\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528</span>
 os<span class="token punctuation">.</span>Stdout<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;are u ok?\\n&quot;</span><span class="token punctuation">)</span>

 <span class="token keyword">var</span> a <span class="token builtin">int</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165a: &quot;</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span> <span class="token comment">//\u4ECE\u6807\u51C6\u8F93\u5165\u8BBE\u5907\u4E2D\u8BFB\u53D6\u5185\u5BB9\uFF0C\u653E\u5728a\u4E2D</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;a = &quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u6587\u4EF6\u7684\u8BFB\u5199" tabindex="-1"><a class="header-anchor" href="#_2-\u6587\u4EF6\u7684\u8BFB\u5199" aria-hidden="true">#</a> 2\uFF0C\u6587\u4EF6\u7684\u8BFB\u5199</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;bufio&quot;</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;io&quot;</span>
 <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">WriteFile</span><span class="token punctuation">(</span>path <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u65B0\u5EFA\u5E76\u6253\u5F00\u6587\u4EF6</span>
 f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token comment">//\u4F7F\u7528\u5B8C\u6BD5\uFF0C\u9700\u8981\u5173\u95ED\u6587\u4EF6</span>
 <span class="token keyword">defer</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token keyword">var</span> buf <span class="token builtin">string</span>
 <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  buf <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;i = %d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token comment">//\u8868\u793A\u5C06&quot;i = %d\\n&quot;\u7684\u5185\u5BB9\u5199\u8FDBbuf\u4E2D</span>
  f<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">ReadFile</span><span class="token punctuation">(</span>path <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u6253\u5F00\u6587\u4EF6</span>
 f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token comment">//\u5173\u95ED\u6587\u4EF6</span>
 <span class="token keyword">defer</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">//\u8868\u793A2k\u5927\u5C0F</span>
 n<span class="token punctuation">,</span> err1 <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err1 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> err1 <span class="token operator">!=</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span> <span class="token comment">//\u6587\u4EF6\u51FA\u9519\uFF0C\u540C\u65F6\u6CA1\u6709\u5230\u7ED3\u5C3E</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;buf = &quot;</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token comment">//\u9010\u884C\u6765\u8FDB\u884C\u8BFB\u53D6</span>
<span class="token keyword">func</span> <span class="token function">ReadFileline</span><span class="token punctuation">(</span>path <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u6253\u5F00\u6587\u4EF6</span>
 f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token comment">//\u5173\u95ED\u6587\u4EF6</span>
 <span class="token keyword">defer</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token comment">//\u65B0\u5EFA\u4E00\u4E2A\u7F13\u51B2\u533A\uFF0C\u628A\u5185\u5BB9\u5148\u653E\u8FDB\u7F13\u51B2\u533A</span>
 r <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>

 <span class="token keyword">for</span> <span class="token punctuation">{</span> <span class="token comment">//\u521B\u5EFA\u4E00\u4E2A\u65E0\u9650\u5FAA\u73AF\u6765\u8FDB\u884C\u9010\u884C\u8BFB\u53D6</span>
  buf<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span><span class="token function">ReadBytes</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span> <span class="token comment">//\u4EE5&#39;\\n&#39;\u4F5C\u4E3A\u6BCF\u884C\u7684\u7ED3\u675F\uFF0C\u4F46\u662F&#39;\\n&#39;\u4E5F\u4F1A\u88AB\u8BFB\u5165</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span> <span class="token comment">//\u8BFB\u53D6\u5230\u6587\u4EF6\u7ED3\u5C3E\uFF0C\u5219\u8DF3\u51FA\u5FAA\u73AF</span>
    <span class="token keyword">break</span>
   <span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;buf = #%s#\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 path <span class="token operator">:=</span> <span class="token string">&quot;./demo.txt&quot;</span>
 <span class="token comment">//WriteFile(path)</span>
 <span class="token comment">//ReadFile(path)</span>
 <span class="token function">ReadFileline</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u4E09\u79CD\u8BFB\u53D6\u6587\u4EF6\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-\u4E09\u79CD\u8BFB\u53D6\u6587\u4EF6\u7684\u65B9\u6CD5" aria-hidden="true">#</a> 3\uFF0C\u4E09\u79CD\u8BFB\u53D6\u6587\u4EF6\u7684\u65B9\u6CD5</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;bufio&quot;</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;io&quot;</span>
 <span class="token string">&quot;io/ioutil&quot;</span>
 <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">readfilebyread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fileobj<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;./main.go&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;open file filed,err:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">defer</span> fileobj<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token comment">//\u4F7F\u7528read\u65B9\u6CD5\u8BFB\u53D6</span>
 <span class="token keyword">var</span> tmp <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">2048</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> <span class="token punctuation">{</span>
  n<span class="token punctuation">,</span> err <span class="token operator">:=</span> fileobj<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6587\u4EF6\u8BFB\u5B8C\u4E86...&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;read file filed,err:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
   <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>tmp<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">readfilebybufio</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fileobj<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;./main.go&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;open file filed,err:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">defer</span> fileobj<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 reader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>fileobj<span class="token punctuation">)</span>
 <span class="token keyword">for</span> <span class="token punctuation">{</span>
  line<span class="token punctuation">,</span> err <span class="token operator">:=</span> reader<span class="token punctuation">.</span><span class="token function">ReadString</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6587\u4EF6\u8BFB\u5B8C\u4E86&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;read file filed,err&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">readfilebyioutil</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 result<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span><span class="token string">&quot;./main.go&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ioutil read failed,err&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// readfilebyread()</span>
 <span class="token comment">// readfilebybufio()</span>
 <span class="token function">readfilebyioutil</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u4E09\u79CD\u5199\u5165\u5185\u5BB9\u7684\u65B9\u6CD5e" tabindex="-1"><a class="header-anchor" href="#_4-\u4E09\u79CD\u5199\u5165\u5185\u5BB9\u7684\u65B9\u6CD5e" aria-hidden="true">#</a> 4\uFF0C\u4E09\u79CD\u5199\u5165\u5185\u5BB9\u7684\u65B9\u6CD5e</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;bufio&quot;</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;io/ioutil&quot;</span>
 <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">writebyos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fileobj<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span><span class="token string">&quot;xxx.txt&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_WRONLY<span class="token operator">|</span>os<span class="token punctuation">.</span>O_TRUNC<span class="token operator">|</span>os<span class="token punctuation">.</span>O_CREATE<span class="token punctuation">,</span> <span class="token number">0644</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;openfile faild&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">defer</span> fileobj<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token comment">//write</span>
 fileobj<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;this is test\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token comment">//WriteString</span>
 fileobj<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FD9\u662F\u4E00\u6761\u6D4B\u8BD5&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">writebybufio</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fileobj<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span><span class="token string">&quot;xxx.txt&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_WRONLY<span class="token operator">|</span>os<span class="token punctuation">.</span>O_TRUNC<span class="token operator">|</span>os<span class="token punctuation">.</span>O_CREATE<span class="token punctuation">,</span> <span class="token number">0644</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;openfile faild&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">defer</span> fileobj<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 wr <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewWriter</span><span class="token punctuation">(</span>fileobj<span class="token punctuation">)</span>
 wr<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;hello world!&quot;</span><span class="token punctuation">)</span> <span class="token comment">//\u5C06\u5185\u5BB9\u5199\u5165\u5230\u7F13\u5B58\u4E2D</span>
 wr<span class="token punctuation">.</span><span class="token function">Flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                     <span class="token comment">//\u843D\u76D8</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">writebyioutil</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 str <span class="token operator">:=</span> <span class="token string">&quot;hello eryajf&quot;</span>
 err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">WriteFile</span><span class="token punctuation">(</span><span class="token string">&quot;xxx.txt&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0644</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// writebyos()</span>
 <span class="token comment">// writebybufio()</span>
 <span class="token function">writebyioutil</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u6848\u4F8B-\u5B9E\u73B0\u4E00\u4E2Acp\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_3-\u6848\u4F8B-\u5B9E\u73B0\u4E00\u4E2Acp\u547D\u4EE4" aria-hidden="true">#</a> 3\uFF0C\u6848\u4F8B:\u5B9E\u73B0\u4E00\u4E2Acp\u547D\u4EE4</h2><p>\u57FA\u672C\u601D\u8DEF\u5C31\u662F\u8BFB\u53D6a\u6587\u4EF6\u7684\u5185\u5BB9\u5199\u5165\u5230b\u6587\u4EF6\u4E2D\uFF0C\u5C31\u5B9E\u73B0\u4E86\u62F7\u8D1D\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;io&quot;</span>
 <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 list <span class="token operator">:=</span> os<span class="token punctuation">.</span>Args <span class="token comment">//\u6216\u8BB8\u547D\u4EE4\u884C\u53C2\u6570</span>
 <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">3</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;usage: xxx srcFile dstFile&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>

 srcFileName <span class="token operator">:=</span> list<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
 dstFileName <span class="token operator">:=</span> list<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
 <span class="token keyword">if</span> srcFileName <span class="token operator">==</span> dstFileName <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6E90\u6587\u4EF6\u548C\u76EE\u6807\u6587\u4EF6\u540D\u5B57\u4E0D\u80FD\u76F8\u540C&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>

 <span class="token comment">//\u53EA\u8BFB\u65B9\u5F0F\u6253\u5F00\u6E90\u6587\u4EF6</span>
 sF<span class="token punctuation">,</span> err1 <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>srcFileName<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err1 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err1 = &quot;</span><span class="token punctuation">,</span> err1<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token comment">//\u65B0\u5EFA\u76EE\u7684\u6587\u4EF6</span>
 dF<span class="token punctuation">,</span> err2 <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>dstFileName<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err2 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err2 = &quot;</span><span class="token punctuation">,</span> err2<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>

 <span class="token comment">//\u64CD\u4F5C\u5B8C\u6BD5\uFF0C\u5173\u95ED\u6587\u4EF6</span>
 <span class="token keyword">defer</span> sF<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token keyword">defer</span> dF<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token comment">//\u6838\u5FC3\u5904\u7406\uFF0C\u4ECE\u6E90\u6587\u4EF6\u8BFB\u53D6\u5185\u5BB9\uFF0C\u5F80\u76EE\u7684\u6587\u4EF6\u5199\uFF0C\u8BFB\u591A\u5C11\u5199\u591A\u5C11</span>
 buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token operator">*</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">//\u521B\u5EFA\u4E00\u4E2A4k\u5927\u5C0F\u7684\u4E34\u65F6\u7F13\u51B2\u533A</span>
 <span class="token keyword">for</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u4ECE\u6E90\u6587\u4EF6\u8BFB\u53D6\u5185\u5BB9\uFF0Cn\u8868\u793A\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\u7684\u957F\u5EA6</span>
  n<span class="token punctuation">,</span> err <span class="token operator">:=</span> sF<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span> <span class="token comment">//\u6587\u4EF6\u8BFB\u53D6\u5B8C\u6BD5</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span>
   <span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//\u5F80\u76EE\u7684\u6587\u4EF6\u5199\uFF0C\u8BFB\u591A\u5C11\u5199\u591A\u5C11</span>
  dF<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5148\u628A\u4EE3\u7801\u7F16\u8BD1\u6210\u53EF\u6267\u884C\u7A0B\u5E8F\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>$ <span class="token keyword">go</span> build <span class="token number">17_</span>\u5B9E\u6218\uFF1A\u62F7\u8D1D\u6587\u4EF6<span class="token punctuation">.</span><span class="token keyword">go</span>
$ ls
<span class="token number">17_</span>\u5B9E\u6218\uFF1A\u62F7\u8D1D\u6587\u4EF6<span class="token punctuation">.</span><span class="token keyword">go</span>    demo<span class="token punctuation">.</span>txt    <span class="token number">17_</span>\u5B9E\u6218\uFF1A\u62F7\u8D1D\u6587\u4EF6<span class="token punctuation">.</span>exe<span class="token operator">*</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u6267\u884C\u7A0B\u5E8F\u8FDB\u884C\u62F7\u8D1D\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>$ <span class="token punctuation">.</span><span class="token operator">/</span><span class="token number">17_</span>\u5B9E\u6218\uFF1A\u62F7\u8D1D\u6587\u4EF6<span class="token punctuation">.</span>exe demo<span class="token punctuation">.</span>txt aa<span class="token punctuation">.</span>txt
$ cat aa<span class="token punctuation">.</span>txt
i <span class="token operator">=</span> <span class="token number">0</span>
i <span class="token operator">=</span> <span class="token number">1</span>
i <span class="token operator">=</span> <span class="token number">2</span>
i <span class="token operator">=</span> <span class="token number">3</span>
i <span class="token operator">=</span> <span class="token number">4</span>
i <span class="token operator">=</span> <span class="token number">5</span>
i <span class="token operator">=</span> <span class="token number">6</span>
i <span class="token operator">=</span> <span class="token number">7</span>
i <span class="token operator">=</span> <span class="token number">8</span>
i <span class="token operator">=</span> <span class="token number">9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),o=[e];function i(c,l){return s(),a("div",null,o)}const k=n(p,[["render",i],["__file","24.\u6587\u4EF6\u7684\u64CD\u4F5C.html.vue"]]);export{k as default};
