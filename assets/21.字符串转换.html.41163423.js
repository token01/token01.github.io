import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.333ff1c5.js";const p={},o=t(`<h1 id="_21-\u5B57\u7B26\u4E32\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_21-\u5B57\u7B26\u4E32\u8F6C\u6362" aria-hidden="true">#</a> 21.\u5B57\u7B26\u4E32\u8F6C\u6362</h1><p>\u5B57\u7B26\u4E32\u8F6C\u5316\u7684\u51FD\u6570\u5728strconv\u4E2D\uFF0C\u5982\u4E0B\u4E5F\u53EA\u662F\u5217\u51FA\u4E00\u4E9B\u5E38\u7528\u7684\u3002</p><h2 id="_1-append" tabindex="-1"><a class="header-anchor" href="#_1-append" aria-hidden="true">#</a> 1\uFF0CAppend</h2><p>Append \u7CFB\u5217\u51FD\u6570\u5C06\u6574\u6570\u7B49\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u540E\uFF0C\u6DFB\u52A0\u5230\u73B0\u6709\u7684\u5B57\u8282\u6570\u7EC4\u4E2D\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>    str <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
    str <span class="token operator">=</span> strconv<span class="token punctuation">.</span><span class="token function">AppendInt</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token number">4567</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">//\u4EE510\u8FDB\u5236\u65B9\u5F0F\u8FFD\u52A0</span>
    str <span class="token operator">=</span> strconv<span class="token punctuation">.</span><span class="token function">AppendBool</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    str <span class="token operator">=</span> strconv<span class="token punctuation">.</span><span class="token function">AppendQuote</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">&quot;abcdefg&quot;</span><span class="token punctuation">)</span>
    str <span class="token operator">=</span> strconv<span class="token punctuation">.</span><span class="token function">AppendQuoteRune</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token char">&#39;\u5355&#39;</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//4567false&quot;abcdefg&quot;&#39;\u5355&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>\u793A\u4F8B\u4EE3\u7801\uFF1A</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u540E\u8FFD\u52A0\u5230\u5B57\u8282\u6570\u7EC4</span>
 slice <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span>
 slice <span class="token operator">=</span> strconv<span class="token punctuation">.</span><span class="token function">AppendBool</span><span class="token punctuation">(</span>slice<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
 <span class="token comment">//\u7B2C\u4E8C\u4E2A\u6570\u4E3A\u8981\u8FFD\u52A0\u7684\u5185\u5BB9\uFF0C\u7B2C3\u4E2A\u6570\u4E3A\u6307\u5B9A10\u8FDB\u5236\u65B9\u5F0F\u8FFD\u52A0</span>
 slice <span class="token operator">=</span> strconv<span class="token punctuation">.</span><span class="token function">AppendInt</span><span class="token punctuation">(</span>slice<span class="token punctuation">,</span> <span class="token number">1234</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
 slice <span class="token operator">=</span> strconv<span class="token punctuation">.</span><span class="token function">AppendQuote</span><span class="token punctuation">(</span>slice<span class="token punctuation">,</span> <span class="token string">&quot;abchelloeryajf&quot;</span><span class="token punctuation">)</span>

 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;slice = &quot;</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//\u8F6C\u6362\u4E3Astring\u4E4B\u540E\u518D\u8FFD\u52A0</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-format" tabindex="-1"><a class="header-anchor" href="#_2-format" aria-hidden="true">#</a> 2\uFF0CFormat</h2><p>Format \u7CFB\u5217\u51FD\u6570\u628A\u5176\u4ED6\u7C7B\u578B\u7684\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>    a <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">FormatBool</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    b <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">FormatInt</span><span class="token punctuation">(</span><span class="token number">1234</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    c <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">FormatUint</span><span class="token punctuation">(</span><span class="token number">12345</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    d <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span><span class="token number">1023</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">)</span> <span class="token comment">//false 1234 12345 1023</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>\u793A\u4F8B\u4EE3\u7801\uFF1A</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u5176\u4ED6\u7C7B\u578B\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32</span>
 <span class="token keyword">var</span> str <span class="token builtin">string</span>
 str <span class="token operator">=</span> strconv<span class="token punctuation">.</span><span class="token function">FormatBool</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
 <span class="token comment">//&#39;f&#39;\uFF1A\u6307\u6253\u5370\u683C\u5F0F\uFF0C\u4EE5\u5C0F\u6570\u65B9\u5F0F\uFF0C -1\u6307\u5C0F\u6570\u70B9\u4F4D\u6570(\u7D27\u7F29\u6A21\u5F0F)\uFF0C64\uFF1A\u6307\u4EE5float64\u5904\u7406</span>
 str <span class="token operator">=</span> strconv<span class="token punctuation">.</span><span class="token function">FormatFloat</span><span class="token punctuation">(</span><span class="token number">3.14</span><span class="token punctuation">,</span> <span class="token char">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span>

 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;str = &quot;</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u53E6\u5916\u7684\u5E38\u7528\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_3-\u53E6\u5916\u7684\u5E38\u7528\u8F6C\u6362" aria-hidden="true">#</a> 3\uFF0C\u53E6\u5916\u7684\u5E38\u7528\u8F6C\u6362</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u6574\u5F62\u8F6C\u5B57\u7B26\u4E32\uFF0C\u5E38\u7528\u65B9\u5F0F\u5982\u4E0B</span>
 str <span class="token operator">=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span><span class="token number">666</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;str = &quot;</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span>

 <span class="token comment">//\u5B57\u7B26\u4E32\u8F6C\u5176\u4ED6\u7C7B\u578B</span>
 <span class="token keyword">var</span> flag <span class="token builtin">bool</span>
 <span class="token keyword">var</span> err <span class="token builtin">error</span>
 flag<span class="token punctuation">,</span> err <span class="token operator">=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseBool</span><span class="token punctuation">(</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;flag = &quot;</span><span class="token punctuation">,</span> flag<span class="token punctuation">)</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token comment">//\u628A\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u6574\u5F62</span>
 a<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span><span class="token string">&quot;567&quot;</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;a = &quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u5176\u4ED6\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_4-\u5176\u4ED6\u8F6C\u6362" aria-hidden="true">#</a> 4\uFF0C\u5176\u4ED6\u8F6C\u6362</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u4ECE\u5B57\u7B26\u4E32\u4E2D\u89E3\u6790\u51FA\u5BF9\u5E94\u7684\u6570\u636E</span>
 str <span class="token operator">:=</span> <span class="token string">&quot;1000&quot;</span>
 ret1<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseInt</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;parse int failed, err&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> ret1<span class="token punctuation">)</span>

 <span class="token comment">// Atoi:\u5B57\u7B26\u4E32\u8F6C\u6362\u6210int</span>
 ret2<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> ret2<span class="token punctuation">)</span>
 <span class="token comment">// int \u8F6C\u6362\u6210\u5B50\u5B57\u7B26\u4E32</span>
 i <span class="token operator">:=</span> <span class="token number">10</span>
 ret3 <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> ret3<span class="token punctuation">)</span>
 <span class="token comment">// \u4ECE\u5B57\u7B26\u4E32\u4E2D\u89E3\u6790\u51FA\u5E03\u5C14\u503C</span>
 boolStr <span class="token operator">:=</span> <span class="token string">&quot;true&quot;</span>
 bv<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseBool</span><span class="token punctuation">(</span>boolStr<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v  %T\\n&quot;</span><span class="token punctuation">,</span> bv<span class="token punctuation">,</span> bv<span class="token punctuation">)</span>

 <span class="token comment">// \u4ECE\u5B57\u7B26\u4E32\u4E2D\u89E3\u6790\u51FA\u6D6E\u70B9\u6570</span>
 floatStr <span class="token operator">:=</span> <span class="token string">&quot;1.23&quot;</span>
 fv<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseFloat</span><span class="token punctuation">(</span>floatStr<span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v  %T\\n&quot;</span><span class="token punctuation">,</span> fv<span class="token punctuation">,</span> fv<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),e=[o];function c(i,l){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","21.\u5B57\u7B26\u4E32\u8F6C\u6362.html.vue"]]);export{k as default};
