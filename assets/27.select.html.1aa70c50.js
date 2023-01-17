import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.09fc910f.js";const t={},p=e(`<h1 id="_27-select" tabindex="-1"><a class="header-anchor" href="#_27-select" aria-hidden="true">#</a> 27.select</h1><h2 id="_1-select\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_1-select\u4F5C\u7528" aria-hidden="true">#</a> 1\uFF0Cselect\u4F5C\u7528</h2><p>Go\u91CC\u9762\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5173\u952E\u5B57select\uFF0C\u901A\u8FC7select\u53EF\u4EE5\u76D1\u542Cchannel\u4E0A\u7684\u6570\u636E\u6D41\u52A8\u3002</p><p>select\u7684\u7528\u6CD5\u4E0Eswitch\u8BED\u8A00\u975E\u5E38\u7C7B\u4F3C\uFF0C\u7531select\u5F00\u59CB\u4E00\u4E2A\u65B0\u7684\u9009\u62E9\u5757\uFF0C\u6BCF\u4E2A\u9009\u62E9\u6761\u4EF6\u7531case\u8BED\u53E5\u6765\u63CF\u8FF0\u3002</p><p>\u4E0Eswitch\u8BED\u53E5\u53EF\u4EE5\u9009\u62E9\u4EFB\u4F55\u53EF\u4F7F\u7528\u76F8\u7B49\u6BD4\u8F83\u7684\u6761\u4EF6\u76F8\u6BD4\uFF0C select\u6709\u6BD4\u8F83\u591A\u7684\u9650\u5236\uFF0C\u5176\u4E2D\u6700\u5927\u7684\u4E00\u6761\u9650\u5236\u5C31\u662F\u6BCF\u4E2Acase\u8BED\u53E5\u91CC\u5FC5\u987B\u662F\u4E00\u4E2AIO\u64CD\u4F5C\uFF0C\u5927\u81F4\u7684\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>    <span class="token keyword">select</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token operator">&lt;-</span>chan1<span class="token punctuation">:</span>
        <span class="token comment">// \u5982\u679Cchan1\u6210\u529F\u8BFB\u5230\u6570\u636E\uFF0C\u5219\u8FDB\u884C\u8BE5case\u5904\u7406\u8BED\u53E5</span>
    <span class="token keyword">case</span> chan2 <span class="token operator">&lt;-</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token comment">// \u5982\u679C\u6210\u529F\u5411chan2\u5199\u5165\u6570\u636E\uFF0C\u5219\u8FDB\u884C\u8BE5case\u5904\u7406\u8BED\u53E5</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        <span class="token comment">// \u5982\u679C\u4E0A\u9762\u90FD\u6CA1\u6709\u6210\u529F\uFF0C\u5219\u8FDB\u5165default\u5904\u7406\u6D41\u7A0B</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E00\u4E2Aselect\u8BED\u53E5\u4E2D\uFF0CGo\u8BED\u8A00\u4F1A\u6309\u987A\u5E8F\u4ECE\u5934\u81F3\u5C3E\u8BC4\u4F30\u6BCF\u4E00\u4E2A\u53D1\u9001\u548C\u63A5\u6536\u7684\u8BED\u53E5\u3002</p><p>\u5982\u679C\u5176\u4E2D\u7684\u4EFB\u610F\u4E00\u8BED\u53E5\u53EF\u4EE5\u7EE7\u7EED\u6267\u884C(\u5373\u6CA1\u6709\u88AB\u963B\u585E)\uFF0C\u90A3\u4E48\u5C31\u4ECE\u90A3\u4E9B\u53EF\u4EE5\u6267\u884C\u7684\u8BED\u53E5\u4E2D\u4EFB\u610F\u9009\u62E9\u4E00\u6761\u6765\u4F7F\u7528\u3002</p><p>\u5982\u679C\u6CA1\u6709\u4EFB\u610F\u4E00\u6761\u8BED\u53E5\u53EF\u4EE5\u6267\u884C(\u5373\u6240\u6709\u7684\u901A\u9053\u90FD\u88AB\u963B\u585E)\uFF0C\u90A3\u4E48\u6709\u4E24\u79CD\u53EF\u80FD\u7684\u60C5\u51B5\uFF1A</p><ul><li>\u5982\u679C\u7ED9\u51FA\u4E86default\u8BED\u53E5\uFF0C\u90A3\u4E48\u5C31\u4F1A\u6267\u884Cdefault\u8BED\u53E5\uFF0C\u540C\u65F6\u7A0B\u5E8F\u7684\u6267\u884C\u4F1A\u4ECEselect\u8BED\u53E5\u540E\u7684\u8BED\u53E5\u4E2D\u6062\u590D\u3002</li><li>\u5982\u679C\u6CA1\u6709default\u8BED\u53E5\uFF0C\u90A3\u4E48select\u8BED\u53E5\u5C06\u88AB\u963B\u585E\uFF0C\u76F4\u5230\u81F3\u5C11\u6709\u4E00\u4E2A\u901A\u4FE1\u53EF\u4EE5\u8FDB\u884C\u4E0B\u53BB\u3002</li></ul><p>\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span><span class="token punctuation">,</span> quit <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 x<span class="token punctuation">,</span> y <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span>
 <span class="token keyword">for</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u76D1\u542Cchannel\u6570\u636E\u7684\u6D41\u52A8</span>
  <span class="token keyword">select</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> ch <span class="token operator">&lt;-</span> x<span class="token punctuation">:</span>
   x<span class="token punctuation">,</span> y <span class="token operator">=</span> y<span class="token punctuation">,</span> x<span class="token operator">+</span>y
  <span class="token keyword">case</span> flag <span class="token operator">:=</span> <span class="token operator">&lt;-</span>quit<span class="token punctuation">:</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;flag = &quot;</span><span class="token punctuation">,</span> flag<span class="token punctuation">)</span>
   <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
 quit <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
 <span class="token comment">//\u6D88\u8D39\u8005\uFF0C\u4ECEchannel\u8BFB\u53D6\u5185\u5BB9</span>
 <span class="token comment">//\u65B0\u5EFA\u534F\u7A0B</span>
 <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">8</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
   num <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;num = &quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//\u53EF\u4EE5\u505C\u6B62</span>
  quit <span class="token operator">&lt;-</span> <span class="token boolean">true</span>
 <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token comment">//\u751F\u4EA7\u8005\uFF0C\u4EA7\u751F\u6570\u5B57\uFF0C\u5199\u5165channel</span>
 <span class="token function">fibonacci</span><span class="token punctuation">(</span>ch<span class="token punctuation">,</span> quit<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://t.eryajf.net/imgs/2021/09/f201c60d25fe0085.jpg" alt="594d5ca9b9fcdb51"></p><h2 id="_2-\u8D85\u65F6" tabindex="-1"><a class="header-anchor" href="#_2-\u8D85\u65F6" aria-hidden="true">#</a> 2\uFF0C\u8D85\u65F6</h2><p>\u6709\u65F6\u5019\u4F1A\u51FA\u73B0goroutine\u963B\u585E\u7684\u60C5\u51B5\uFF0C\u90A3\u4E48\u6211\u4EEC\u5982\u4F55\u907F\u514D\u6574\u4E2A\u7A0B\u5E8F\u8FDB\u5165\u963B\u585E\u7684\u60C5\u51B5\u5462\uFF1F\u6211\u4EEC\u53EF\u4EE5\u5229\u7528select\u6765\u8BBE\u7F6E\u8D85\u65F6\uFF0C\u901A\u8FC7\u5982\u4E0B\u7684\u65B9\u5F0F\u5B9E\u73B0\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
 quit <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>

 <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">{</span>
   <span class="token keyword">select</span> <span class="token punctuation">{</span>
   <span class="token keyword">case</span> num <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch<span class="token punctuation">:</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;num = &quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
   <span class="token keyword">case</span> <span class="token operator">&lt;-</span>time<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span><span class="token punctuation">:</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D85\u65F6&quot;</span><span class="token punctuation">)</span>
    quit <span class="token operator">&lt;-</span> <span class="token boolean">true</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  ch <span class="token operator">&lt;-</span> i
  time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token operator">&lt;-</span>quit
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7A0B\u5E8F\u7ED3\u675F&quot;</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),c=[p];function o(l,i){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","27.select.html.vue"]]);export{k as default};
