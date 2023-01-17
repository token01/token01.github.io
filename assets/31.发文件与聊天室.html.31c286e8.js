import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.09fc910f.js";const p={},e=t(`<h1 id="_31-\u53D1\u6587\u4EF6\u4E0E\u804A\u5929\u5BA4" tabindex="-1"><a class="header-anchor" href="#_31-\u53D1\u6587\u4EF6\u4E0E\u804A\u5929\u5BA4" aria-hidden="true">#</a> 31.\u53D1\u6587\u4EF6\u4E0E\u804A\u5929\u5BA4</h1><h2 id="_1-\u6536\u53D1\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u6536\u53D1\u6587\u4EF6" aria-hidden="true">#</a> 1\uFF0C\u6536\u53D1\u6587\u4EF6</h2><p>\u505A\u4E00\u4E2A\u6587\u4EF6\u4E0A\u4F20\u63A5\u6536\u7684\u4E00\u4E2A\u670D\u52A1\u3002</p><h3 id="_1-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_1-\u539F\u7406" aria-hidden="true">#</a> 1\uFF0C\u539F\u7406</h3><p><img src="http://t.eryajf.net/imgs/2021/09/12e333f732527d13.jpg" alt="HTB1lQAydG5s3KVjSZFN763D3FXaC"></p><h3 id="_2-os-stat\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-os-stat\u7684\u4F7F\u7528" aria-hidden="true">#</a> 2\uFF0Cos.stat\u7684\u4F7F\u7528</h3><p>\u901A\u8FC7\u8FD9\u4E2A\u51FD\u6570\u53EF\u4EE5\u83B7\u53D6\u5230\u6587\u4EF6\u5BF9\u5E94\u7684\u4E00\u4E9B\u72B6\u6001\u4FE1\u606F\uFF0C\u5982\u4E0B\u4E3E\u4F8B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 list <span class="token operator">:=</span> os<span class="token punctuation">.</span>Args
 <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">2</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;usage: xxx file&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 filename <span class="token operator">:=</span> list<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
 info<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Stat</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;file name is &quot;</span><span class="token punctuation">,</span> info<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;file size is &quot;</span><span class="token punctuation">,</span> info<span class="token punctuation">.</span><span class="token function">Size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>$ <span class="token keyword">go</span> run 04_os<span class="token punctuation">.</span>stat\u7684\u4F7F\u7528<span class="token punctuation">.</span><span class="token keyword">go</span> &#39;<span class="token operator">/</span>d<span class="token operator">/</span>all<span class="token operator">-</span>in<span class="token operator">/</span><span class="token number">39</span>\uFF0C<span class="token keyword">go</span>\u8BED\u8A00\u6559\u7A0B<span class="token operator">/</span>letsgo<span class="token operator">/</span><span class="token number">1801</span><span class="token operator">-</span>Go\u8BED\u8A00\u89C6\u9891\u96F6 \u57FA\u7840\u5165\u95E8\u5230\u7CBE\u901A\u9879\u76EE\u5B9E\u6218web\u7F16\u7A0BGolang <span class="token number">2018</span>\u5E74\u65B0\u6559\u7A0B<span class="token operator">/</span>\u7B2C<span class="token number">01</span>\u5957<span class="token operator">-</span>Go\u8BED\u8A00\u5FEB\u901F\u5165\u95E8\uFF08<span class="token number">2018</span>\u5E74<span class="token number">2</span> \u6708\u66F4\u65B0\u7CBE\u54C1\uFF0C\u63A8\u8350\u89C2\u770B\uFF09<span class="token operator">/</span>\u7B2C<span class="token number">7</span>\u5929\u89C6\u9891<span class="token operator">/</span><span class="token number">01_</span>\u6628\u65E5\u56DE\u987E<span class="token punctuation">.</span>mp4&#39;
file name is  <span class="token number">01_</span>\u6628\u65E5\u56DE\u987E<span class="token punctuation">.</span>mp4
file size is  <span class="token number">67010611</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u53D1\u9001\u65B9" tabindex="-1"><a class="header-anchor" href="#_3-\u53D1\u9001\u65B9" aria-hidden="true">#</a> 3\uFF0C\u53D1\u9001\u65B9</h3><p>\u5148\u6765\u5199\u4E00\u4E2A\u53D1\u9001\u7AEF\u4EE3\u7801\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;io&quot;</span>
 <span class="token string">&quot;net&quot;</span>
 <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u53D1\u9001\u6587\u4EF6\u5185\u5BB9</span>
<span class="token keyword">func</span> <span class="token function">SendFile</span><span class="token punctuation">(</span>path <span class="token builtin">string</span><span class="token punctuation">,</span> conn net<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u4EE5\u53EA\u8BFB\u65B9\u5F0F\u6253\u5F00\u6587\u4EF6</span>
 f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;os.Open err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">defer</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token operator">*</span><span class="token number">4</span><span class="token punctuation">)</span>
 <span class="token comment">//\u8BFB\u591A\u5C11\u5185\u5BB9\uFF0C\u53D1\u9001\u591A\u5C11</span>
 <span class="token keyword">for</span> <span class="token punctuation">{</span>
  n<span class="token punctuation">,</span> err <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span> <span class="token comment">//\u4ECE\u6587\u4EF6\u8BFB\u53D6\u5185\u5BB9</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6587\u4EF6\u53D1\u9001\u5B8C\u6BD5&quot;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;f.Read err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//\u53D1\u9001\u5185\u5BB9</span>
  conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//\u7ED9\u670D\u52A1\u5668\u53D1\u9001\u5185\u5BB9</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u63D0\u793A\u8F93\u5165\u6587\u4EF6</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u9700\u8981\u4F20\u8F93\u7684\u6587\u4EF6\uFF1A&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">var</span> path <span class="token builtin">string</span>
 fmt<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>path<span class="token punctuation">)</span>

 <span class="token comment">//\u83B7\u53D6\u6587\u4EF6\u540D info.name()</span>
 info<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Stat</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;os.Stat err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>

 <span class="token comment">//\u4E3B\u52A8\u8FDE\u63A5\u670D\u52A1\u5668</span>
 conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1:8000&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;net.Dial err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token comment">//\u5148\u7ED9\u63A5\u6536\u65B9\u53D1\u9001\u6587\u4EF6\u540D</span>
 <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;conn.Write err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>

 <span class="token comment">//\u5224\u65AD\u63A5\u6536\u65B9\u7684\u56DE\u590D\uFF0C\u5982\u679C\u56DE\u590D&quot;ok&quot;\uFF0C\u8BF4\u660E\u5BF9\u65B9\u51C6\u5907\u597D\uFF0C\u53EF\u4EE5\u53D1\u9001\u6587\u4EF6</span>
 <span class="token keyword">var</span> n <span class="token builtin">int</span>
 buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span>
 n<span class="token punctuation">,</span> err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;conn.Read err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">if</span> <span class="token string">&quot;ok&quot;</span> <span class="token operator">==</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u53D1\u9001\u6587\u4EF6\u5185\u5BB9</span>
  <span class="token function">SendFile</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> conn<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u63A5\u6536\u65B9" tabindex="-1"><a class="header-anchor" href="#_4-\u63A5\u6536\u65B9" aria-hidden="true">#</a> 4\uFF0C\u63A5\u6536\u65B9</h3><p>\u7136\u540E\u662F\u63A5\u6536\u65B9\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;io&quot;</span>
 <span class="token string">&quot;net&quot;</span>
 <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u63A5\u53D7\u6587\u4EF6\u5185\u5BB9</span>
<span class="token keyword">func</span> <span class="token function">RecvFile</span><span class="token punctuation">(</span>FileName <span class="token builtin">string</span><span class="token punctuation">,</span> conn net<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u65B0\u5EFA\u6587\u4EF6</span>
 f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>FileName<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;os.Create err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token operator">*</span><span class="token number">4</span><span class="token punctuation">)</span>
 <span class="token comment">//\u63A5\u53D7\u591A\u5C11\uFF0C\u5199\u5165\u591A\u5C11\uFF0C\u4E00\u70B9\u4E0D\u5DEE</span>
 <span class="token keyword">for</span> <span class="token punctuation">{</span>
  n<span class="token punctuation">,</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6587\u4EF6\u63A5\u6536\u5B8C\u6BD5&quot;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;conn.Read err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>

   <span class="token punctuation">}</span>
   <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  f<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u76D1\u542C</span>
 listenner<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1:8000&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;net.Listen err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">defer</span> listenner<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token comment">//\u963B\u585E\u7B49\u5F85\u7528\u6237\u8FDE\u63A5</span>
 conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> listenner<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;listenner.Accept err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span>
 <span class="token keyword">var</span> n <span class="token builtin">int</span>
 n<span class="token punctuation">,</span> err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;conn.Read err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 FileName <span class="token operator">:=</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span>

 <span class="token comment">//\u56DE\u590D&quot;ok&quot;</span>
 conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token comment">//\u63A5\u53D7\u6587\u4EF6\u5185\u5BB9</span>
 <span class="token function">RecvFile</span><span class="token punctuation">(</span>FileName<span class="token punctuation">,</span> conn<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-\u8FD0\u884C\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#_5-\u8FD0\u884C\u9A8C\u8BC1" aria-hidden="true">#</a> 5\uFF0C\u8FD0\u884C\u9A8C\u8BC1</h3><p>\u5148\u8FD0\u884C\u63A5\u6536\u65B9\u4EE3\u7801\uFF0C\u7136\u540E\u5728\u8FD0\u884C\u53D1\u9001\u65B9\u8FDB\u884C\u53D1\u9001\uFF0C\u6B64\u5904\u9700\u8981\u7559\u610F\u53D1\u9001\u7684\u8DEF\u5F84\uFF0C\u4F3C\u4E4E\u4E0D\u80FD\u6709\u4E2D\u6587\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/e20f98ee34fbfb02.jpg" alt="HTB1TFovdRGw3KVjSZFw762Q2FXag"></p><h2 id="_2-\u5E76\u53D1\u804A\u5929\u5BA4" tabindex="-1"><a class="header-anchor" href="#_2-\u5E76\u53D1\u804A\u5929\u5BA4" aria-hidden="true">#</a> 2\uFF0C\u5E76\u53D1\u804A\u5929\u5BA4</h2><p>\u4EE3\u7801\u5185\u5BB9\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;net&quot;</span>
 <span class="token string">&quot;strings&quot;</span>
 <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Client <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 C    <span class="token keyword">chan</span> <span class="token builtin">string</span> <span class="token comment">//\u7528\u6237\u53D1\u9001\u6570\u636E\u7684\u7BA1\u9053</span>
 Name <span class="token builtin">string</span>      <span class="token comment">//\u7528\u6237\u540D</span>
 Addr <span class="token builtin">string</span>      <span class="token comment">//\u7F51\u7EDC\u5730\u5740</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u4FDD\u5B58\u5728\u7EBF\u7528\u6237\uFF0C\u4F7F\u7528map\uFF0CcliAddr ===&gt; Client</span>
<span class="token keyword">var</span> onlineMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>Client

<span class="token keyword">var</span> message <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>

<span class="token comment">//\u65B0\u5F00\u4E00\u4E2A\u534F\u7A0B\uFF0C\u8F6C\u53D1\u6D88\u606F\uFF0C\u53EA\u8981\u6709\u6D88\u606F\u6765\u4E86\uFF0C\u5C31\u904D\u5386map\uFF0C\u7ED9map\u4E2D\u6BCF\u4E2A\u6210\u5458\u90FD\u53D1\u9001\u6B64\u6D88\u606F</span>
<span class="token keyword">func</span> <span class="token function">Manager</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u7ED9map\u5206\u914D\u7A7A\u95F4</span>
 onlineMap <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>Client<span class="token punctuation">)</span>
 <span class="token keyword">for</span> <span class="token punctuation">{</span>
  msg <span class="token operator">:=</span> <span class="token operator">&lt;-</span>message <span class="token comment">//\u6CA1\u6709\u6D88\u606F\u524D\uFF0C\u963B\u585E\u7B49\u5F85</span>
  <span class="token comment">//\u904D\u5386map\uFF0C\u7ED9map\u4E2D\u6BCF\u4E2A\u6210\u5458\u90FD\u53D1\u9001\u6B64\u6D88\u606F</span>
  <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> cli <span class="token operator">:=</span> <span class="token keyword">range</span> onlineMap <span class="token punctuation">{</span>
   cli<span class="token punctuation">.</span>C <span class="token operator">&lt;-</span> msg
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u7ED9\u7528\u6237\u53D1\u4FE1\u606F</span>
<span class="token keyword">func</span> <span class="token function">WriteMsgToClient</span><span class="token punctuation">(</span>cli Client<span class="token punctuation">,</span> conn net<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">for</span> msg <span class="token operator">:=</span> <span class="token keyword">range</span> cli<span class="token punctuation">.</span>C <span class="token punctuation">{</span>
  conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>msg <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">MakeMsg</span><span class="token punctuation">(</span>cli Client<span class="token punctuation">,</span> msg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>buf <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 buf <span class="token operator">=</span> <span class="token string">&quot;[&quot;</span> <span class="token operator">+</span> cli<span class="token punctuation">.</span>Addr <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span> <span class="token operator">+</span> cli<span class="token punctuation">.</span>Name <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> msg
 <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">HandleConn</span><span class="token punctuation">(</span>conn net<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u83B7\u53D6\u5BA2\u6237\u7AEF\u7684\u7F51\u7EDC\u5730\u5740</span>
 cliAddr <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">RemoteAddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token comment">//\u521B\u5EFA\u4E00\u4E2A\u7ED3\u6784\u4F53\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7528\u6237\u540D\u548C\u7F51\u7EDC\u5730\u5740\u4E00\u6837</span>
 cli <span class="token operator">:=</span> Client<span class="token punctuation">{</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cliAddr<span class="token punctuation">,</span> cliAddr<span class="token punctuation">}</span>
 <span class="token comment">//\u628A\u7ED3\u6784\u4F53\u6DFB\u52A0\u5230map</span>
 onlineMap<span class="token punctuation">[</span>cliAddr<span class="token punctuation">]</span> <span class="token operator">=</span> cli
 <span class="token comment">//\u65B0\u5F00\u4E00\u4E2A\u534F\u7A0B\uFF0C\u4E13\u95E8\u7ED9\u5BA2\u6237\u7AEF\u53D1\u9001\u4FE1\u606F</span>
 <span class="token keyword">go</span> <span class="token function">WriteMsgToClient</span><span class="token punctuation">(</span>cli<span class="token punctuation">,</span> conn<span class="token punctuation">)</span>

 <span class="token comment">//\u5E7F\u64AD\u7528\u6237\u5728\u7EBF</span>
 <span class="token comment">//message&lt;-&quot;[&quot; + cli.Addr + &quot;]&quot; + cli.Name + &quot;: login&quot;</span>
 message <span class="token operator">&lt;-</span> <span class="token function">MakeMsg</span><span class="token punctuation">(</span>cli<span class="token punctuation">,</span> <span class="token string">&quot;login&quot;</span><span class="token punctuation">)</span>
 <span class="token comment">//\u63D0\u793A\u6211\u662F\u8C01</span>
 cli<span class="token punctuation">.</span>C <span class="token operator">&lt;-</span> <span class="token function">MakeMsg</span><span class="token punctuation">(</span>cli<span class="token punctuation">,</span> <span class="token string">&quot;I m here&quot;</span><span class="token punctuation">)</span>

 isQuit <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token comment">//\u5BF9\u65B9\u662F\u5426\u4E3B\u52A8\u9000\u51FA</span>
 hasData <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token comment">//\u5BF9\u65B9\u662F\u5426\u6709\u6570\u636E</span>
 <span class="token comment">//\u65B0\u5EFA\u4E00\u4E2A\u534F\u7A0B\uFF0C\u63A5\u6536\u7528\u6237\u53D1\u9001\u8FC7\u6765\u7684\u6570\u636E</span>
 <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">2048</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">{</span>
   n<span class="token punctuation">,</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
   <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span> <span class="token comment">//\u5BF9\u65B9\u65AD\u5F00\uFF0C\u6216\u8005\u51FA\u95EE\u9898</span>
    isQuit <span class="token operator">&lt;-</span> <span class="token boolean">true</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;conn.Read err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
   msg <span class="token operator">:=</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
   <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">3</span> <span class="token operator">&amp;&amp;</span> msg <span class="token operator">==</span> <span class="token string">&quot;who&quot;</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u904D\u5386map\uFF0C\u7ED9\u5F53\u524D\u7528\u6237\u53D1\u9001\u6240\u6709\u5728\u7EBF\u7528\u6237</span>
    conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;user list:\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> tmp <span class="token operator">:=</span> <span class="token keyword">range</span> onlineMap <span class="token punctuation">{</span>
     msg <span class="token operator">=</span> tmp<span class="token punctuation">.</span>Addr <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> tmp<span class="token punctuation">.</span>Name <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span>
     conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">8</span> <span class="token operator">&amp;&amp;</span> msg<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&quot;rename&quot;</span> <span class="token punctuation">{</span>
    <span class="token comment">//rename|mike</span>
    name <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> <span class="token string">&quot;|&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    cli<span class="token punctuation">.</span>Name <span class="token operator">=</span> name
    onlineMap<span class="token punctuation">[</span>cliAddr<span class="token punctuation">]</span> <span class="token operator">=</span> cli
    conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;rename success\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">//\u8F6C\u53D1\u6B64\u5185\u5BB9</span>
    message <span class="token operator">&lt;-</span> <span class="token function">MakeMsg</span><span class="token punctuation">(</span>cli<span class="token punctuation">,</span> msg<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   hasData <span class="token operator">&lt;-</span> <span class="token boolean">true</span> <span class="token comment">//\u4EE3\u8868\u6709\u6570\u636E</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u901A\u8FC7select\u68C0\u6D4Bchannel\u7684\u6D41\u52A8</span>
  <span class="token keyword">select</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token operator">&lt;-</span>isQuit<span class="token punctuation">:</span>
   <span class="token function">delete</span><span class="token punctuation">(</span>onlineMap<span class="token punctuation">,</span> cliAddr<span class="token punctuation">)</span><span class="token comment">//\u5F53\u524D\u7528\u6237\u4ECEmap\u4E2D\u5220\u9664</span>
   message <span class="token operator">&lt;-</span> <span class="token function">MakeMsg</span><span class="token punctuation">(</span>cli<span class="token punctuation">,</span> <span class="token string">&quot;login out&quot;</span><span class="token punctuation">)</span><span class="token comment">//\u5E7F\u64AD\u8C01\u4E0B\u7EBF\u4E86</span>
   <span class="token keyword">return</span>
   
  <span class="token keyword">case</span> <span class="token operator">&lt;-</span>hasData<span class="token punctuation">:</span>

  <span class="token keyword">case</span> <span class="token operator">&lt;-</span>time<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment">//60s\u540E\u9000\u51FA</span>
   <span class="token function">delete</span><span class="token punctuation">(</span>onlineMap<span class="token punctuation">,</span> cliAddr<span class="token punctuation">)</span>
   message <span class="token operator">&lt;-</span> <span class="token function">MakeMsg</span><span class="token punctuation">(</span>cli<span class="token punctuation">,</span> <span class="token string">&quot;time out leave out&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u76D1\u542C</span>
 listener<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;:8000&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;net.Listen err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">defer</span> listener<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token comment">//\u65B0\u5F00\u4E00\u4E2A\u534F\u7A0B\uFF0C\u8F6C\u53D1\u6D88\u606F\uFF0C\u53EA\u8981\u6709\u6D88\u606F\u6765\u4E86\uFF0C\u5C31\u904D\u5386map\uFF0C\u7ED9map\u4E2D\u6BCF\u4E2A\u6210\u5458\u90FD\u53D1\u9001\u6B64\u6D88\u606F</span>
 <span class="token keyword">go</span> <span class="token function">Manager</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token comment">//\u4E3B\u534F\u7A0B\uFF0C\u963B\u585E\u5FAA\u73AF\u7B49\u5F85\u7528\u6237\u8FDE\u63A5</span>
 <span class="token keyword">for</span> <span class="token punctuation">{</span>
  conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> listener<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;listener.Accept err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
   <span class="token keyword">continue</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">go</span> <span class="token function">HandleConn</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span> <span class="token comment">//\u5904\u7406\u7528\u6237\u8FDE\u63A5</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","31.\u53D1\u6587\u4EF6\u4E0E\u804A\u5929\u5BA4.html.vue"]]);export{r as default};
