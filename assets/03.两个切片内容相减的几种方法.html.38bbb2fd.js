import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.f5d9e013.js";const p={},o=t(`<h1 id="_03-\u4E24\u4E2A\u5207\u7247\u5185\u5BB9\u76F8\u51CF\u7684\u51E0\u79CD\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_03-\u4E24\u4E2A\u5207\u7247\u5185\u5BB9\u76F8\u51CF\u7684\u51E0\u79CD\u65B9\u6CD5" aria-hidden="true">#</a> 03.\u4E24\u4E2A\u5207\u7247\u5185\u5BB9\u76F8\u51CF\u7684\u51E0\u79CD\u65B9\u6CD5</h1><ul><li><p>\u95EE\u9898</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>\u5DF2\u77E5\uFF1A 
 <span class="token keyword">var</span> a <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;33&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;22&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;44&quot;</span><span class="token punctuation">}</span>
 <span class="token keyword">var</span> b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;22&quot;</span><span class="token punctuation">}</span>
 <span class="token keyword">var</span> b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>

\u9884\u671F\uFF1A
 c <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;22&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_1-\u8FD0\u7EF4\u7684\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#_1-\u8FD0\u7EF4\u7684\u601D\u8DEF" aria-hidden="true">#</a> 1\uFF0C\u8FD0\u7EF4\u7684\u601D\u8DEF</h2><h3 id="\u65B9\u6CD5\u4E00" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E00" aria-hidden="true">#</a> \u65B9\u6CD5\u4E00</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> <span class="token punctuation">(</span>
  weightInstanceList <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;22&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;33&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;44&quot;</span><span class="token punctuation">}</span>
  RelateInstance     <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;22&quot;</span><span class="token punctuation">}</span>
  a                  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">// \u671F\u671B\uFF1A22,33,44</span>
 <span class="token punctuation">)</span>

 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>weightInstanceList<span class="token punctuation">,</span> RelateInstance<span class="token punctuation">)</span>

 <span class="token comment">// \u5FAA\u73AF\u8001\u7684</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> instance <span class="token operator">:=</span> <span class="token keyword">range</span> weightInstanceList <span class="token punctuation">{</span>
  <span class="token comment">// \u4F20\u5165\u5F85\u5220\u9664IP\u5207\u7247 \u8001\u7684IP \u8FDB\u884C\u5224\u65AD \u662F\u5426\u76F8\u7B49 \u76F8\u7B49\u8868\u793A\u5F85\u5220\u9664 \u53CD\u4E4B\u52A0\u5165\u66F4\u65B0jenkinsFile\u5217\u8868</span>
  isOk <span class="token operator">:=</span> <span class="token function">IsContain</span><span class="token punctuation">(</span>RelateInstance<span class="token punctuation">,</span> instance<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token operator">!</span>isOk <span class="token punctuation">{</span>
   a <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> instance<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

 <span class="token punctuation">}</span>

 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6700\u540E\u7ED3\u679C\uFF1A&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span> <span class="token comment">// a=[&quot;11&quot;,&quot;11&quot;,&quot;11&quot;]</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">IsContain</span><span class="token punctuation">(</span>items <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> item <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> eachItem <span class="token operator">:=</span> <span class="token keyword">range</span> items <span class="token punctuation">{</span>
  <span class="token keyword">if</span> eachItem <span class="token operator">==</span> item <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65B9\u6CD5\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E8C" aria-hidden="true">#</a> \u65B9\u6CD5\u4E8C</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> <span class="token punctuation">(</span>
  weightInstanceList <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;33&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;22&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;44&quot;</span><span class="token punctuation">}</span>
  RelateInstance     <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;22&quot;</span><span class="token punctuation">}</span>
 <span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>weightInstanceList<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> instance <span class="token operator">:=</span> <span class="token keyword">range</span> weightInstanceList <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> item <span class="token operator">:=</span> <span class="token keyword">range</span> RelateInstance <span class="token punctuation">{</span>
   <span class="token keyword">if</span> instance <span class="token operator">==</span> item <span class="token punctuation">{</span>
    weightInstanceList <span class="token operator">=</span> <span class="token function">RemoveParam</span><span class="token punctuation">(</span>weightInstanceList<span class="token punctuation">,</span> instance<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>

  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6700\u540E\u7ED3\u679C\uFF1A&quot;</span><span class="token punctuation">,</span> weightInstanceList<span class="token punctuation">)</span> <span class="token comment">// a=[&quot;11&quot;,&quot;11&quot;,&quot;11&quot;]</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">RemoveParam</span><span class="token punctuation">(</span>sli <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> n <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
 <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>sli<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> sli<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> n <span class="token punctuation">{</span>
   <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
    sli <span class="token operator">=</span> sli<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>sli<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
    sli <span class="token operator">=</span> sli<span class="token punctuation">[</span><span class="token punctuation">:</span>i<span class="token punctuation">]</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    sli <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>sli<span class="token punctuation">[</span><span class="token punctuation">:</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> sli<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token operator">...</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   i<span class="token operator">--</span> <span class="token comment">// \u5982\u679C\u7D22\u5F15i\u88AB\u53BB\u6389\u540E\uFF0C\u539F\u6765\u7D22\u5F15i+1\u7684\u4F1A\u79FB\u52A8\u5230\u7D22\u5F15i</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> sli
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2\u5F00\u53D1\u7684\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#_2\u5F00\u53D1\u7684\u601D\u8DEF" aria-hidden="true">#</a> 2\u5F00\u53D1\u7684\u601D\u8DEF</h2><h3 id="\u65B9\u6CD5\u4E00-1" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E00-1" aria-hidden="true">#</a> \u65B9\u6CD5\u4E00</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> <span class="token punctuation">(</span>
  weightInstanceList <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;33&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;22&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;44&quot;</span><span class="token punctuation">}</span>
  RelateInstance     <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;22&quot;</span><span class="token punctuation">}</span>
 <span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">diff</span><span class="token punctuation">(</span>weightInstanceList<span class="token punctuation">,</span> RelateInstance<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">diff</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> <span class="token punctuation">(</span>
  r <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
  m <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token punctuation">)</span>

 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> b <span class="token punctuation">{</span>
  m<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> a <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> m<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
   r <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">return</span> r
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65B9\u6CD5\u4E8C-1" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E8C-1" aria-hidden="true">#</a> \u65B9\u6CD5\u4E8C</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> <span class="token punctuation">(</span>
  weightInstanceList <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;33&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;22&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;44&quot;</span><span class="token punctuation">}</span>
  RelateInstance     <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;22&quot;</span><span class="token punctuation">}</span>
 <span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">diff</span><span class="token punctuation">(</span>weightInstanceList<span class="token punctuation">,</span> RelateInstance<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">diff</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> <span class="token punctuation">(</span>
  r <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
  m <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token punctuation">)</span>

 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> a <span class="token punctuation">{</span>
  m<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> b <span class="token punctuation">{</span>
  <span class="token function">delete</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">for</span> k<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
  r <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> k<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">return</span> r
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u51FA\uFF0C\u8FD0\u7EF4\u5904\u7406\u8BE5\u95EE\u9898\u65F6\u601D\u8DEF\u4F1A\u56F0\u5728\u5F53\u524D\u7C7B\u578B\u4E2D\u4E88\u4EE5\u5B9E\u73B0\uFF0C\u4E0D\u5982\u5F00\u53D1\u5BF9\u6570\u636E\u7ED3\u6784\u4EE5\u53CA\u7279\u6027\u638C\u63E1\u7684\u7262\u56FA\uFF0C\u8FD0\u7528\u8D77\u6765\u4E5F\u5C31\u4E0D\u591F\u7075\u6D3B\u4E86\u3002</p>`,13),e=[o];function c(i,u){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","03.\u4E24\u4E2A\u5207\u7247\u5185\u5BB9\u76F8\u51CF\u7684\u51E0\u79CD\u65B9\u6CD5.html.vue"]]);export{r as default};
