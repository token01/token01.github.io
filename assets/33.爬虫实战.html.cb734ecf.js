import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.59d8da70.js";const p={},e=t(`<h1 id="_33-\u722C\u866B\u5B9E\u6218" tabindex="-1"><a class="header-anchor" href="#_33-\u722C\u866B\u5B9E\u6218" aria-hidden="true">#</a> 33.\u722C\u866B\u5B9E\u6218</h1><p>\u722C\u866B\u4E00\u5171\u6709\u56DB\u4E2A\u4E3B\u8981\u6B65\u9AA4\uFF1A</p><ol><li>\u660E\u786E\u76EE\u6807\uFF0C\u8981\u77E5\u9053\u4F60\u51C6\u5907\u5728\u54EA\u4E2A\u8303\u56F4\u6216\u8005\u7F51\u7AD9\u53BB\u641C\u7D22\u3002</li><li>\u722C\uFF0C\u5C06\u6240\u6709\u7684\u7F51\u7AD9\u5185\u5BB9\u5168\u90E8\u722C\u4E0B\u6765\u3002</li><li>\u53D6\uFF0C\u53BB\u6389\u5BF9\u6211\u4EEC\u6CA1\u7528\u5904\u7684\u6570\u636E\u3002</li><li>\u5904\u7406\u6570\u636E\uFF0C\u6309\u7167\u6211\u4EEC\u60F3\u8981\u7684\u65B9\u5F0F\u5B58\u50A8\u548C\u4F7F\u7528\u3002</li></ol><h2 id="_1-\u767E\u5EA6\u8D34\u5427\u5C0F\u722C\u866B" tabindex="-1"><a class="header-anchor" href="#_1-\u767E\u5EA6\u8D34\u5427\u5C0F\u722C\u866B" aria-hidden="true">#</a> 1\uFF0C\u767E\u5EA6\u8D34\u5427\u5C0F\u722C\u866B</h2><p>\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;net/http&quot;</span>
 <span class="token string">&quot;os&quot;</span>
 <span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u722C\u53D6\u7F51\u9875\u5185\u5BB9</span>
<span class="token keyword">func</span> <span class="token function">HttpGet</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>result <span class="token builtin">string</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 resp<span class="token punctuation">,</span> err1 <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err1 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  err <span class="token operator">=</span> err1
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">defer</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token comment">//\u8BFB\u53D6\u7F51\u9875body\u7684\u5185\u5BB9</span>
 buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1204</span><span class="token operator">*</span><span class="token number">4</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> <span class="token punctuation">{</span>
  n<span class="token punctuation">,</span> err <span class="token operator">:=</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
  <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span> <span class="token comment">//\u8BFB\u53D6\u7ED3\u675F\uFF0C\u6216\u8005\u51FA\u95EE\u9898</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;resp.Body.Read err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
   <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
  result <span class="token operator">+=</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">DoWork</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6B63\u5728\u722C\u53D6 %d \u5230 %d \u7684\u9875\u9762\\n&quot;</span><span class="token punctuation">,</span> start<span class="token punctuation">,</span> end<span class="token punctuation">)</span>

 <span class="token comment">//1,\u660E\u786E\u76EE\u6807\uFF08\u8981\u77E5\u9053\u4F60\u51C6\u5907\u5728\u54EA\u4E2A\u8303\u56F4\u6216\u8005\u7F51\u7AD9\u53BB\u641C\u7D22\uFF09</span>
 <span class="token comment">//https://tieba.baidu.com/f?kw=%E7%BB%9D%E5%9C%B0%E6%B1%82%E7%94%9F&amp;ie=utf-8&amp;pn=0 //\u4E0B\u4E00\u9875+50</span>
 <span class="token keyword">for</span> i <span class="token operator">:=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> end<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  url <span class="token operator">:=</span> <span class="token string">&quot;https://tieba.baidu.com/f?kw=%E7%BB%9D%E5%9C%B0%E6%B1%82%E7%94%9F&amp;ie=utf-8&amp;pn=&quot;</span> <span class="token operator">+</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">50</span><span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;url = &quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span>

  <span class="token comment">//2,\u722C\u53D6\u5185\u5BB9\uFF08\u5C06\u7F51\u7AD9\u5185\u5BB9\u722C\u53D6\u4E0B\u6765\uFF09</span>
  result<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">HttpGet</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;HttpGet err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
   <span class="token keyword">continue</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//\u628A\u5185\u5BB9\u5199\u5165\u5230\u6587\u4EF6</span>
  fileName <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;.html&quot;</span>
  f<span class="token punctuation">,</span> err1 <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err1 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;os.Create err1 = &quot;</span><span class="token punctuation">,</span> err1<span class="token punctuation">)</span>
   <span class="token keyword">continue</span>
  <span class="token punctuation">}</span>
  f<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment">//\u5199\u5185\u5BB9</span>
  f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>             <span class="token comment">//\u5173\u95ED\u6587\u4EF6</span>

 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> start<span class="token punctuation">,</span> end <span class="token builtin">int</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u8D77\u59CB\u9875(&gt;= 1)\uFF1A&quot;</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>start<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u7EC8\u6B62\u9875(&gt;= \u8D77\u59CB\u9875)\uFF1A&quot;</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>end<span class="token punctuation">)</span>

 <span class="token function">DoWork</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u4E4B\u540E\uFF0C\u5C06\u4F1A\u628A\u722C\u53D6\u7684\u5185\u5BB9\u4FDD\u5B58\u5728\u6587\u4EF6\u4E2D\u3002</p><h2 id="_2-\u5E76\u53D1\u7248\u722C\u866B" tabindex="-1"><a class="header-anchor" href="#_2-\u5E76\u53D1\u7248\u722C\u866B" aria-hidden="true">#</a> 2\uFF0C\u5E76\u53D1\u7248\u722C\u866B</h2><p>\u521A\u521A\u7684\u722C\u866B\u662F\u5355\u4EFB\u52A1\u8DD1\u7684\uFF0C\u5982\u679C\u722C\u53D6\u91CF\u975E\u5E38\u5927\uFF0C\u5C31\u9700\u8981\u7528\u5230\u5E76\u53D1\u4E86\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;net/http&quot;</span>
 <span class="token string">&quot;os&quot;</span>
 <span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u722C\u53D6\u7F51\u9875\u5185\u5BB9</span>
<span class="token keyword">func</span> <span class="token function">HttpGet</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>result <span class="token builtin">string</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 resp<span class="token punctuation">,</span> err1 <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err1 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  err <span class="token operator">=</span> err1
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">defer</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token comment">//\u8BFB\u53D6\u7F51\u9875body\u7684\u5185\u5BB9</span>
 buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1204</span><span class="token operator">*</span><span class="token number">4</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> <span class="token punctuation">{</span>
  n<span class="token punctuation">,</span> err <span class="token operator">:=</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
  <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span> <span class="token comment">//\u8BFB\u53D6\u7ED3\u675F\uFF0C\u6216\u8005\u51FA\u95EE\u9898</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;resp.Body.Read err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
   <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
  result <span class="token operator">+=</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">SpiderPage</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">,</span> page <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 url <span class="token operator">:=</span> <span class="token string">&quot;https://tieba.baidu.com/f?kw=%E7%BB%9D%E5%9C%B0%E6%B1%82%E7%94%9F&amp;ie=utf-8&amp;pn=&quot;</span> <span class="token operator">+</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">50</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;url = &quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span>

 <span class="token comment">//2,\u722C\u53D6\u5185\u5BB9\uFF08\u5C06\u7F51\u7AD9\u5185\u5BB9\u722C\u53D6\u4E0B\u6765\uFF09</span>
 result<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">HttpGet</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;HttpGet err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token comment">//\u628A\u5185\u5BB9\u5199\u5165\u5230\u6587\u4EF6</span>
 fileName <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;.html&quot;</span>
 f<span class="token punctuation">,</span> err1 <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err1 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;os.Create err1 = &quot;</span><span class="token punctuation">,</span> err1<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 f<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment">//\u5199\u5185\u5BB9</span>
 f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>             <span class="token comment">//\u5173\u95ED\u6587\u4EF6</span>
 page <span class="token operator">&lt;-</span> i
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">DoWork</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6B63\u5728\u722C\u53D6 %d \u5230 %d \u7684\u9875\u9762\\n&quot;</span><span class="token punctuation">,</span> start<span class="token punctuation">,</span> end<span class="token punctuation">)</span>
 page <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
 <span class="token comment">//1,\u660E\u786E\u76EE\u6807\uFF08\u8981\u77E5\u9053\u4F60\u51C6\u5907\u5728\u54EA\u4E2A\u8303\u56F4\u6216\u8005\u7F51\u7AD9\u53BB\u641C\u7D22\uFF09</span>
 <span class="token comment">//https://tieba.baidu.com/f?kw=%E7%BB%9D%E5%9C%B0%E6%B1%82%E7%94%9F&amp;ie=utf-8&amp;pn=0 //\u4E0B\u4E00\u9875+50</span>
 <span class="token keyword">for</span> i <span class="token operator">:=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> end<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  <span class="token keyword">go</span> <span class="token function">SpiderPage</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> page<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">for</span> i <span class="token operator">:=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> end<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C%d\u4E2A\u9875\u9762\u722C\u53D6\u5B8C\u6210\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span>page<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> start<span class="token punctuation">,</span> end <span class="token builtin">int</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u8D77\u59CB\u9875(&gt;= 1)\uFF1A&quot;</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>start<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u7EC8\u6B62\u9875(&gt;= \u8D77\u59CB\u9875)\uFF1A&quot;</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>end<span class="token punctuation">)</span>

 <span class="token function">DoWork</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5229\u7528go\u5173\u952E\u8BCD\u5B9E\u73B0\u5E76\u53D1\uFF0C\u7136\u540E\u518D\u914D\u5408\u7BA1\u9053\u4EE5\u4FDD\u8BC1\u4EFB\u52A1\u5728\u5B8C\u6210\u4E4B\u524D\u963B\u585E\u72B6\u6001\uFF0C\u4ECE\u800C\u80FD\u591F\u6B63\u5E38\u5B8C\u6210\u3002</p>`,11),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","33.\u722C\u866B\u5B9E\u6218.html.vue"]]);export{k as default};
