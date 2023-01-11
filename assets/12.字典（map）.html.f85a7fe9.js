import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.89148984.js";const p={},e=t(`<h1 id="_12-\u5B57\u5178-map" tabindex="-1"><a class="header-anchor" href="#_12-\u5B57\u5178-map" aria-hidden="true">#</a> 12.\u5B57\u5178\uFF08map\uFF09</h1><h2 id="_1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1-\u6982\u8FF0" aria-hidden="true">#</a> 1\uFF0C\u6982\u8FF0</h2><p>map \u662F\u4E00\u79CD\u7279\u6B8A\u7684\u6570\u636E\u7ED3\u6784\uFF1A\u4E00\u79CD\u5143\u7D20\u5BF9\uFF08pair\uFF09\u7684\u65E0\u5E8F\u96C6\u5408\uFF0Cpair \u7684\u4E00\u4E2A\u5143\u7D20\u662F key\uFF0C\u5BF9\u5E94\u7684\u53E6\u4E00\u4E2A\u5143\u7D20\u662F value\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u7ED3\u6784\u4E5F\u79F0\u4E3A\u5173\u8054\u6570\u7EC4\u6216\u5B57\u5178\u3002\u8FD9\u662F\u4E00\u79CD\u5FEB\u901F\u5BFB\u627E\u503C\u7684\u7406\u60F3\u7ED3\u6784\uFF1A\u7ED9\u5B9A key\uFF0C\u5BF9\u5E94\u7684 value \u53EF\u4EE5\u8FC5\u901F\u5B9A\u4F4D\u3002</p><p>map \u8FD9\u79CD\u6570\u636E\u7ED3\u6784\u5728\u5176\u4ED6\u7F16\u7A0B\u8BED\u8A00\u4E2D\u4E5F\u79F0\u4E3A\u5B57\u5178\uFF08Python\uFF09\u3001hash \u548C HashTable \u7B49\u3002</p><p>Go\u8BED\u8A00\u4E2D\u7684map\uFF08\u6620\u5C04\u3001\u5B57\u5178\uFF09\u662F\u4E00\u79CD\u5185\u7F6E\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u5B83\u662F\u4E00\u4E2A<code>\u65E0\u5E8F</code>\u7684<code>key-value\u5BF9</code>\u7684\u96C6\u5408\uFF0C\u6BD4\u5982\u4EE5\u8EAB\u4EFD\u8BC1\u53F7\u4F5C\u4E3A\u552F\u4E00\u952E\u6765\u6807\u8BC6\u4E00\u4E2A\u4EBA\u7684\u4FE1\u606F\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/c1ac13abc70c9fa1.jpg" alt="m_29efd94e3554aeeb5fbf87150d8cab28_r"></p><p>map\u7684\u683C\u5F0F\u4E3A\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">map</span><span class="token punctuation">[</span>keyType<span class="token punctuation">]</span>valueType
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u4E00\u4E2Amap\u91CC\u6240\u6709\u7684\u952E\u90FD\u662F<code>\u552F\u4E00</code>\u7684\uFF0C\u800C\u4E14\u5FC5\u987B\u662F\u652F\u6301<code>==</code>\u548C<code>!=</code>\u64CD\u4F5C\u7B26\u7684\u7C7B\u578B\uFF0C\u5207\u7247\u3001\u51FD\u6570\u4EE5\u53CA\u5305\u542B\u5207\u7247\u7684\u7ED3\u6784\u7C7B\u578B\u8FD9\u4E9B\u7C7B\u578B\u7531\u4E8E\u5177\u6709\u5F15\u7528\u8BED\u4E49\uFF0C\u4E0D\u80FD\u4F5C\u4E3A\u6620\u5C04\u7684\u952E\uFF0C\u4F7F\u7528\u8FD9\u4E9B\u7C7B\u578B\u4F1A\u9020\u6210\u7F16\u8BD1\u9519\u8BEF\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> dict <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//err,invalid map key type []string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>map\u503C\u53EF\u4EE5\u662F\u4EFB\u610F\u7C7B\u578B\uFF0C\u6CA1\u6709\u9650\u5236\u3002map\u91CC\u6240\u6709\u952E\u7684\u6570\u636E\u7C7B\u578B\u5FC5\u987B\u662F\u76F8\u540C\u7684\uFF0C\u503C\u4E5F\u5FC5\u987B\u76F8\u540C\uFF0C\u4F46\u662F\u952E\u548C\u503C\u7684\u6570\u636E\u7C7B\u578B\u53EF\u4EE5\u4E0D\u76F8\u540C\u3002</p><p>\u6CE8\u610F\uFF1Amap\u662F\u65E0\u5E8F\u7684\uFF0C\u6211\u4EEC\u65E0\u6CD5\u51B3\u5B9A\u5B83\u7684\u8FD4\u56DE\u987A\u5E8F\uFF0C\u6240\u4EE5\uFF0C\u6BCF\u6B21\u6253\u5370\u7ED3\u679C\u7684\u987A\u5E8F\u6709\u53EF\u80FD\u4E0D\u540C\u3002</p><h2 id="_2-map\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-map\u7684\u4F7F\u7528" aria-hidden="true">#</a> 2\uFF0Cmap\u7684\u4F7F\u7528</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CF\uFF0C\u7C7B\u578B\u4E3Amap</span>
 <span class="token keyword">var</span> m1 <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;m1 = &quot;</span><span class="token punctuation">,</span> m1<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;len = &quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>m1<span class="token punctuation">)</span><span class="token punctuation">)</span>

 <span class="token comment">//\u53EF\u4EE5\u901A\u8FC7make\u521B\u5EFA</span>
 m2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;m2 = &quot;</span><span class="token punctuation">,</span> m2<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;len = &quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>m2<span class="token punctuation">)</span><span class="token punctuation">)</span>

 <span class="token comment">//\u53EF\u4EE5\u6307\u5B9A\u957F\u5EA6\uFF0C\u5982\u679C\u6CA1\u6709\u6570\u636E\uFF0C\u90A3\u4E48\u957F\u5EA6\u4F9D\u65E7\u4E3A0</span>
 m3 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;m3 = &quot;</span><span class="token punctuation">,</span> m3<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;len = &quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>m3<span class="token punctuation">)</span><span class="token punctuation">)</span>

 <span class="token comment">//\u53EF\u4EE5\u6307\u5B9A\u957F\u5EA6\uFF0C\u5982\u679C\u6570\u636E\u8D85\u8FC7\u8BBE\u5B9A\u957F\u5EA6\uFF0C\u90A3\u4E48\u4F1A\u81EA\u52A8\u6269\u5BB9</span>
 m4 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
 m4<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;aa&quot;</span>
 m4<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;bb&quot;</span>
 m4<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;cc&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;m4 = &quot;</span><span class="token punctuation">,</span> m4<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;len = &quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>m4<span class="token punctuation">)</span><span class="token punctuation">)</span>

 <span class="token comment">//\u76F4\u63A5\u521D\u59CB\u5316,\u952E\u9700\u8981\u65F6\u552F\u4E00\u7684</span>
 m5 <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">:</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;m5 = &quot;</span><span class="token punctuation">,</span> m5<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-map\u7684\u8D4B\u503C" tabindex="-1"><a class="header-anchor" href="#_3-map\u7684\u8D4B\u503C" aria-hidden="true">#</a> 3\uFF0Cmap\u7684\u8D4B\u503C</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 m <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token string">&quot;mike&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token string">&quot;yoyo&quot;</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;m = &quot;</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span>
 <span class="token comment">//\u8D4B\u503C\uFF0C\u5982\u679C\u5DF2\u7ECF\u5B58\u5728\u7684key\u503C\uFF0C\u90A3\u4E48\u5C06\u4F1A\u4FEE\u6539\u5176\u5185\u5BB9</span>
 m<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;aaa&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;m = &quot;</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span>
 <span class="token comment">//\u5982\u679C\u7ED9\u4E0D\u5B58\u5728\u7684key\u8D4B\u503C\uFF0C\u90A3\u4E48\u5C06\u4F1A\u8FFD\u52A0\u5185\u5BB9</span>
 <span class="token comment">//\u8FFD\u52A0\u5185\u5BB9\u7684\u65F6\u5019\uFF0Cmap\u4F1A\u81EA\u52A8\u6269\u5BB9\uFF0C\u4E0Eappend\u7C7B\u4F3C</span>
 m<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;bbb&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;m = &quot;</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-map\u7684\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#_4-map\u7684\u904D\u5386" aria-hidden="true">#</a> 4\uFF0Cmap\u7684\u904D\u5386</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 m <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token string">&quot;mike&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token string">&quot;yoyo&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">:</span> <span class="token string">&quot;nana&quot;</span><span class="token punctuation">}</span>
 <span class="token comment">//\u7B2C\u4E00\u4E2A\u8FD4\u56DE\u503C\u4E3Akey\uFF0C\u7B2C\u4E8C\u4E2A\u8FD4\u56DE\u503C\u4E3Avalue\uFF0C\u904D\u5386\u7ED3\u679C\u662F\u65E0\u5E8F\u7684</span>
 <span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d===&gt;%s\\n&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token comment">//\u5982\u4F55\u5224\u65AD\u4E00\u4E2Akey\u503C\u662F\u5426\u5B58\u5728\uFF0C\u901A\u8FC7 value, ok</span>
 <span class="token comment">//\u7B2C\u4E00\u4E2A\u8FD4\u56DE\u503C\u4E3Akey\u6240\u5BF9\u5E94\u7684value\uFF0C\u7B2C\u4E8C\u4E2A\u8FD4\u56DE\u503C\u4E3Akey\u662F\u5426\u5B58\u5728\u7684\u6761\u4EF6\uFF0C\u5B58\u5728ok\u5219\u4E3Atrue</span>
 value<span class="token punctuation">,</span> ok <span class="token operator">:=</span> m<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
 <span class="token keyword">if</span> ok <span class="token operator">==</span> <span class="token boolean">true</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;m[1] = &quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BE5key\u4E0D\u5B58\u5728&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-map\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#_5-map\u5220\u9664" aria-hidden="true">#</a> 5\uFF0Cmap\u5220\u9664</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 m <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token string">&quot;mike&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token string">&quot;yoyo&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">:</span> <span class="token string">&quot;nana&quot;</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;m = &quot;</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span>
 <span class="token comment">//\u901A\u8FC7delete\u51FD\u6570\u8FDB\u884C\u5220\u9664</span>

 <span class="token function">delete</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">//\u8868\u793A\u5220\u9664key\u4E3A1\u7684\u6570\u636E</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;m = &quot;</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-map\u505A\u51FD\u6570\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_6-map\u505A\u51FD\u6570\u53C2\u6570" aria-hidden="true">#</a> 6\uFF0Cmap\u505A\u51FD\u6570\u53C2\u6570</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>m <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token function">delete</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 m <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token string">&quot;mike&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token string">&quot;yoyo&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">:</span> <span class="token string">&quot;nana&quot;</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;m = &quot;</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span>

 <span class="token function">test</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token comment">//\u5728\u51FD\u6570\u5185\u5220\u9664\u67D0\u4E2Akey</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;m = &quot;</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),o=[e];function c(i,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","12.\u5B57\u5178\uFF08map\uFF09.html.vue"]]);export{r as default};
