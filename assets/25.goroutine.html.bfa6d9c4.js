import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as p,a as n,b as i,d as o,f as s,r as c}from"./app.61aab752.js";const l={},u=s('<h1 id="_25-goroutine" tabindex="-1"><a class="header-anchor" href="#_25-goroutine" aria-hidden="true">#</a> 25.goroutine</h1><h2 id="_1-\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#_1-\u524D\u8A00" aria-hidden="true">#</a> 1\uFF0C\u524D\u8A00</h2><h3 id="_1-\u5E76\u884C\u548C\u5E76\u53D1" tabindex="-1"><a class="header-anchor" href="#_1-\u5E76\u884C\u548C\u5E76\u53D1" aria-hidden="true">#</a> 1\uFF0C\u5E76\u884C\u548C\u5E76\u53D1</h3><ul><li><strong>\u5E76\u884C</strong>(parallel)\uFF1A\u6307\u5728\u540C\u4E00\u65F6\u523B\uFF0C\u6709\u591A\u6761\u6307\u4EE4\u5728\u591A\u4E2A\u5904\u7406\u5668\u4E0A\u540C\u65F6\u6267\u884C\u3002</li></ul><p><img src="http://t.eryajf.net/imgs/2021/09/3d8f3318726a3fc4.jpg" alt="65c600bcaf658755"></p><ul><li><strong>\u5E76\u53D1</strong>(concurrency)\uFF1A\u6307\u5728\u540C\u4E00\u65F6\u523B\u53EA\u80FD\u6709\u4E00\u6761\u6307\u4EE4\u6267\u884C\uFF0C\u4F46\u591A\u4E2A\u8FDB\u7A0B\u6307\u4EE4\u88AB\u5FEB\u901F\u7684\u8F6E\u6362\u6267\u884C\uFF0C\u4F7F\u5F97\u5728\u5B8F\u89C2\u4E0A\u5177\u6709\u591A\u4E2A\u8FDB\u7A0B\u540C\u65F6\u6267\u884C\u7684\u6548\u679C\uFF0C\u4F46\u5728\u5FAE\u89C2\u4E0A\u5E76\u4E0D\u662F\u540C\u65F6\u6267\u884C\u7684\uFF0C\u53EA\u662F\u628A\u65F6\u95F4\u5206\u6210\u82E5\u5E72\u6BB5\uFF0C\u4F7F\u591A\u4E2A\u8FDB\u7A0B\u5FEB\u901F\u4EA4\u66FF\u7684\u6267\u884C\u3002</li></ul><p><img src="http://t.eryajf.net/imgs/2021/09/fa1ae9433929f0eb.jpg" alt="33c7114d42fb5432"></p><ul><li>\u5E76\u884C\u662F\u4E24\u4E2A\u961F\u5217<code>\u540C\u65F6</code>\u4F7F\u7528\u4E24\u53F0\u5496\u5561\u673A</li><li>\u5E76\u53D1\u662F\u4E24\u4E2A\u961F\u5217<code>\u4EA4\u66FF</code>\u4F7F\u7528\u4E00\u53F0\u5496\u5561\u673A</li></ul><p><img src="http://t.eryajf.net/imgs/2021/09/244fc11efe8f5d49.jpg" alt="ee2eedc9ebae698b"></p><p>\u4F60\u5403\u996D\u5403\u5230\u4E00\u534A\uFF0C\u7535\u8BDD\u6765\u4E86\uFF0C\u4F60\u4E00\u76F4\u5230\u5403\u5B8C\u4E86\u4EE5\u540E\u624D\u53BB\u63A5\uFF0C\u8FD9\u5C31\u8BF4\u660E\u4F60\u4E0D\u652F\u6301\u5E76\u53D1\u4E5F\u4E0D\u652F\u6301\u5E76\u884C\u3002 \u4F60\u5403\u996D\u5403\u5230\u4E00\u534A\uFF0C\u7535\u8BDD\u6765\u4E86\uFF0C\u4F60\u505C\u4E86\u4E0B\u6765\u63A5\u4E86\u7535\u8BDD\uFF0C\u63A5\u5B8C\u540E\u7EE7\u7EED\u5403\u996D\uFF0C\u8FD9\u8BF4\u660E\u4F60\u652F\u6301\u5E76\u53D1\u3002 \u4F60\u5403\u996D\u5403\u5230\u4E00\u534A\uFF0C\u7535\u8BDD\u6765\u4E86\uFF0C\u4F60\u4E00\u8FB9\u6253\u7535\u8BDD\u4E00\u8FB9\u5403\u996D\uFF0C\u8FD9\u8BF4\u660E\u4F60\u652F\u6301\u5E76\u884C\u3002</p><p>\u5E76\u53D1\u7684\u5173\u952E\u662F\u4F60\u6709\u5904\u7406\u591A\u4E2A\u4EFB\u52A1\u7684\u80FD\u529B\uFF0C\u4E0D\u4E00\u5B9A\u8981\u540C\u65F6\u3002 \u5E76\u884C\u7684\u5173\u952E\u662F\u4F60\u6709\u540C\u65F6\u5904\u7406\u591A\u4E2A\u4EFB\u52A1\u7684\u80FD\u529B\u3002 \u6240\u4EE5\u6211\u8BA4\u4E3A\u5B83\u4EEC\u6700\u5173\u952E\u7684\u70B9\u5C31\u662F\uFF1A\u662F\u5426\u662F**\u300E\u540C\u65F6\u300F**\u3002</p>',11),d={href:"http://t.cn/Ai94Gf7N",target:"_blank",rel:"noopener noreferrer"},r=s(`<h3 id="_2-go\u8BED\u8A00\u5E76\u53D1\u7684\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#_2-go\u8BED\u8A00\u5E76\u53D1\u7684\u4F18\u52BF" aria-hidden="true">#</a> 2\uFF0CGo\u8BED\u8A00\u5E76\u53D1\u7684\u4F18\u52BF</h3><p>\u6709\u4EBA\u628AGo\u6BD4\u4F5C21\u4E16\u7EAA\u7684C\u8BED\u8A00\uFF0C\u7B2C\u4E00\u662F\u56E0\u4E3AGo\u8BED\u8A00\u8BBE\u8BA1\u7B80\u5355\uFF0C\u7B2C\u4E8C\uFF0C21\u4E16\u7EAA\u6700\u91CD\u8981\u7684\u5C31\u662F\u5E76\u884C\u7A0B\u5E8F\u8BBE\u8BA1\uFF0C\u800C<strong>Go\u4ECE\u8BED\u8A00\u5C42\u9762\u5C31\u652F\u6301\u4E86\u5E76\u53D1</strong>\u3002\u540C\u65F6\uFF0C\u5E76\u53D1\u7A0B\u5E8F\u7684\u5185\u5B58\u7BA1\u7406\u6709\u65F6\u5019\u662F\u975E\u5E38\u590D\u6742\u7684\uFF0C\u800CGo\u8BED\u8A00\u63D0\u4F9B\u4E86\u81EA\u52A8\u5783\u573E\u56DE\u6536\u673A\u5236\u3002</p><p>Go\u8BED\u8A00\u4E3A\u5E76\u53D1\u7F16\u7A0B\u800C\u5185\u7F6E\u7684\u4E0A\u5C42API\u57FA\u4E8ECSP(communicating sequential processes, \u987A\u5E8F\u901A\u4FE1\u8FDB\u7A0B)\u6A21\u578B\u3002\u8FD9\u5C31\u610F\u5473\u7740\u663E\u5F0F\u9501\u90FD\u662F\u53EF\u4EE5\u907F\u514D\u7684\uFF0C\u56E0\u4E3AGo\u8BED\u8A00\u901A\u8FC7\u76F8\u518C\u5B89\u5168\u7684\u901A\u9053\u53D1\u9001\u548C\u63A5\u53D7\u6570\u636E\u4EE5\u5B9E\u73B0\u540C\u6B65\uFF0C\u8FD9\u5927\u5927\u5730\u7B80\u5316\u4E86\u5E76\u53D1\u7A0B\u5E8F\u7684\u7F16\u5199\u3002</p><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u4E00\u4E2A\u666E\u901A\u7684\u684C\u9762\u8BA1\u7B97\u673A\u8DD1\u5341\u51E0\u4E8C\u5341\u4E2A\u7EBF\u7A0B\u5C31\u6709\u70B9\u8D1F\u8F7D\u8FC7\u5927\u4E86\uFF0C\u4F46\u662F\u540C\u6837\u8FD9\u53F0\u673A\u5668\u5374\u53EF\u4EE5\u8F7B\u677E\u5730\u8BA9\u6210\u767E\u4E0A\u5343\u751A\u81F3\u8FC7\u4E07\u4E2Agoroutine\u8FDB\u884C\u8D44\u6E90\u7ADE\u4E89\u3002</p><h2 id="_2-goroutine" tabindex="-1"><a class="header-anchor" href="#_2-goroutine" aria-hidden="true">#</a> 2\uFF0Cgoroutine</h2><h3 id="_1-goroutine\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_1-goroutine\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 1\uFF0Cgoroutine\u662F\u4EC0\u4E48</h3><p>goroutine\u662FGo\u5E76\u884C\u8BBE\u8BA1\u7684\u6838\u5FC3\u3002goroutine\u8BF4\u5230\u5E95\u5176\u5B9E\u5C31\u662F\u534F\u7A0B\uFF0C\u4F46\u662F\u5B83\u6BD4\u7EBF\u7A0B\u66F4\u5C0F\uFF0C\u5341\u51E0\u4E2Agoroutine\u53EF\u80FD\u4F53\u73B0\u5728\u5E95\u5C42\u5C31\u662F\u4E94\u516D\u4E2A\u7EBF\u7A0B\uFF0CGo\u8BED\u8A00\u5185\u90E8\u5E2E\u4F60\u5B9E\u73B0\u4E86\u8FD9\u4E9Bgoroutine\u4E4B\u95F4\u7684\u5185\u5B58\u5171\u4EAB\u3002\u6267\u884Cgoroutine\u53EA\u9700\u6781\u5C11\u7684\u6808\u5185\u5B58(\u5927\u6982\u662F4~5KB)\uFF0C\u5F53\u7136\u4F1A\u6839\u636E\u76F8\u5E94\u7684\u6570\u636E\u4F38\u7F29\u3002\u4E5F\u6B63\u56E0\u4E3A\u5982\u6B64\uFF0C\u53EF\u540C\u65F6\u8FD0\u884C\u6210\u5343\u4E0A\u4E07\u4E2A\u5E76\u53D1\u4EFB\u52A1\u3002goroutine\u6BD4thread\u66F4\u6613\u7528\u3001\u66F4\u9AD8\u6548\u3001\u66F4\u8F7B\u4FBF\u3002</p><h3 id="_2-\u521B\u5EFAgoroutine" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFAgoroutine" aria-hidden="true">#</a> 2\uFF0C\u521B\u5EFAgoroutine</h3><p>\u53EA\u9700\u5728\u51FD\u6570\u8C03\u2F64\u8BED\u53E5\u524D\u6DFB\u52A0 go \u5173\u952E\u5B57\uFF0C\u5C31\u53EF\u521B\u5EFA\u5E76\u53D1\u6267\u2F8F\u5355\u5143\u3002\u5F00\u53D1\u2F08\u5458\u65E0\u9700\u4E86\u89E3\u4EFB\u4F55\u6267\u2F8F\u7EC6\u8282\uFF0C\u8C03\u5EA6\u5668\u4F1A\u81EA\u52A8\u5C06\u5176\u5B89\u6392\u5230\u5408\u9002\u7684\u7CFB\u7EDF\u7EBF\u7A0B\u4E0A\u6267\u884C\u3002</p><p>\u5728\u5E76\u53D1\u7F16\u7A0B\u91CC\uFF0C\u6211\u4EEC\u901A\u5E38\u60F3\u8BB2\u4E00\u4E2A\u8FC7\u7A0B\u5207\u5206\u6210\u51E0\u5757\uFF0C\u7136\u540E\u8BA9\u6BCF\u4E2Agoroutine\u5404\u81EA\u8D1F\u8D23\u4E00\u5757\u5DE5\u4F5C\u3002\u5F53\u4E00\u4E2A\u7A0B\u5E8F\u542F\u52A8\u65F6\uFF0C\u5176\u4E3B\u51FD\u6570\u5373\u5728\u4E00\u4E2A\u5355\u72EC\u7684goroutine\u4E2D\u8FD0\u884C\uFF0C\u6211\u4EEC\u53EB\u5B83main goroutine\u3002\u65B0\u7684goroutine\u4F1A\u7528go\u8BED\u53E5\u6765\u521B\u5EFA\u3002</p><p>\u793A\u4F8B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">Newtask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">for</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;this is a Newtask&quot;</span><span class="token punctuation">)</span>
  time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span> <span class="token comment">//\u8868\u793A\u5EF6\u65F61s</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

 <span class="token keyword">go</span> <span class="token function">Newtask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u65B0\u5EFA\u4E00\u4E2A\u534F\u7A0B\uFF0C\u4E00\u4E2A\u4EFB\u52A1</span>

 <span class="token keyword">for</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;this is a main goroutine&quot;</span><span class="token punctuation">)</span>
  time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span> <span class="token comment">//\u8868\u793A\u5EF6\u65F61s</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u4E3B\u534F\u7A0B\u9000\u51FA-\u5B50\u534F\u7A0B\u4E5F\u4F1A\u9000\u51FA" tabindex="-1"><a class="header-anchor" href="#_3-\u4E3B\u534F\u7A0B\u9000\u51FA-\u5B50\u534F\u7A0B\u4E5F\u4F1A\u9000\u51FA" aria-hidden="true">#</a> 3\uFF0C\u4E3B\u534F\u7A0B\u9000\u51FA\uFF0C\u5B50\u534F\u7A0B\u4E5F\u4F1A\u9000\u51FA</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u5982\u679C\u4E3B\u534F\u7A0B\u9000\u51FA\u4E86\uFF0C\u5176\u4ED6\u5B50\u534F\u7A0B\u4E5F\u4F1A\u8DDF\u7740\u9000\u51FA</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  i <span class="token operator">:=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">{</span>
   i<span class="token operator">++</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B50\u534F\u7A0B i = &quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
   time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u522B\u5FD8\u4E86()\u8FDB\u884C\u8C03\u7528</span>

 i <span class="token operator">:=</span> <span class="token number">0</span>
 <span class="token keyword">for</span> <span class="token punctuation">{</span>
  i<span class="token operator">++</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main i = &quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
  time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>

  <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span>
   <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5\u6709\u65F6\u5019\u4F1A\u51FA\u73B0\u4E00\u79CD\u60C5\u51B5\uFF0C\u5C31\u662F\u7A0B\u5E8F\u8FD0\u884C\u4E4B\u540E\u4EC0\u4E48\u90FD\u6CA1\u6709\u8F93\u51FA\uFF0C\u6709\u53EF\u80FD\u5C31\u662F\u5B50\u534F\u7A0B\u8FD8\u6CA1\u6765\u5F97\u53CA\u6253\u5370\u7684\u65F6\u5019\uFF0C\u4E3B\u534F\u7A0B\u5C31\u5DF2\u7ECF\u9000\u51FA\u4E86\u3002\u8981\u6CE8\u610F\u8FD9\u4E2A\u70B9\u3002</p><h3 id="_4-runtime\u5305" tabindex="-1"><a class="header-anchor" href="#_4-runtime\u5305" aria-hidden="true">#</a> 4\uFF0Cruntime\u5305</h3><h4 id="_1-gosched" tabindex="-1"><a class="header-anchor" href="#_1-gosched" aria-hidden="true">#</a> 1\uFF0CGosched</h4><p>runtime.Gosched() \u7528\u4E8E\u8BA9\u51FACPU\u65F6\u95F4\u7247\uFF0C\u8BA9\u51FA\u5F53\u524Dgoroutine\u7684\u6267\u884C\u6743\u9650\uFF0C\u8C03\u5EA6\u5668\u5B89\u6392\u5176\u4ED6\u7B49\u5F85\u7684\u4EFB\u52A1\u8FD0\u884C\uFF0C\u5E76\u5728\u4E0B\u6B21\u67D0\u4E2A\u65F6\u5019\u4ECE\u8BE5\u4F4D\u7F6E\u6062\u590D\u6267\u884C\u3002</p><p>\u8FD9\u5C31\u50CF\u8DD1\u63A5\u529B\u8D5B\uFF0CA\u8DD1\u4E86\u4E00\u4F1A\u78B0\u5230\u4EE3\u7801runtime.Gosched() \u5C31\u628A\u63A5\u529B\u68D2\u4EA4\u7ED9B\u4E86\uFF0CA\u6B47\u7740\u4E86\uFF0CB\u7EE7\u7EED\u8DD1\u3002</p><p>\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;runtime&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;go&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u8868\u793A\u8BA9\u51FA\u65F6\u95F4\u7247\uFF0C\u522B\u7684\u534F\u7A0B\u6267\u884C\u5B8C\u6210\u4E4B\u540E\uFF0C\u518D\u6765\u6267\u884C\u4E3B\u534F\u7A0B</span>
  runtime<span class="token punctuation">.</span><span class="token function">Gosched</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>$ <span class="token keyword">go</span> run 4_Gosched\u7684\u4F7F\u7528<span class="token punctuation">.</span><span class="token keyword">go</span>
<span class="token keyword">go</span>
<span class="token keyword">go</span>
<span class="token keyword">go</span>
<span class="token keyword">go</span>
<span class="token keyword">go</span>
hello
hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4E0D\u52A0<code>runtime.Gosched()</code>\u51FD\u6570\uFF0C\u90A3\u4E48\u7ED3\u679C\u4F1A\u662F\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>$ <span class="token keyword">go</span> run 4_Gosched\u7684\u4F7F\u7528<span class="token punctuation">.</span><span class="token keyword">go</span>
<span class="token keyword">go</span>
hello
<span class="token keyword">go</span>
hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-goexit" tabindex="-1"><a class="header-anchor" href="#_2-goexit" aria-hidden="true">#</a> 2\uFF0CGoexit</h4><p>\u8C03\u7528 runtime.Goexit() \u5C06\u7ACB\u5373\u7EC8\u6B62\u5F53\u524D goroutine \u6267\u2F8F\uFF0C\u8C03\u5EA6\u5668\u786E\u4FDD\u6240\u6709\u5DF2\u6CE8\u518C defer \u5EF6\u8FDF\u8C03\u7528\u88AB\u6267\u884C\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;runtime&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ccc&quot;</span><span class="token punctuation">)</span>
 <span class="token comment">//return //\u8868\u793A\u7EC8\u6B62\u6B21\u51FD\u6570</span>
 runtime<span class="token punctuation">.</span><span class="token function">Goexit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u8868\u793A\u7EC8\u6B62\u6240\u5728\u7684\u534F\u7A0B</span>

 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ddd&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u521B\u5EFA\u65B0\u7684\u534F\u7A0B</span>
 <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span>
  <span class="token comment">//\u8C03\u7528\u522B\u7684\u51FD\u6570</span>
  <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;bbb&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token comment">//\u7279\u5730\u5199\u4E00\u4E2A\u6B7B\u5FAA\u73AF\uFF0C\u76EE\u7684\u4E0D\u8BA9\u4E3B\u534F\u7A0B\u7ED3\u675F</span>
 <span class="token keyword">for</span> <span class="token punctuation">{</span>

 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-gomaxprocs" tabindex="-1"><a class="header-anchor" href="#_3-gomaxprocs" aria-hidden="true">#</a> 3\uFF0CGOMAXPROCS</h4><p>\u8C03\u7528 runtime.GOMAXPROCS() \u7528\u6765\u8BBE\u7F6E\u53EF\u4EE5\u5E76\u884C\u8BA1\u7B97\u7684CPU\u6838\u6570\u7684\u6700\u5927\u503C\uFF0C\u5E76\u8FD4\u56DE\u4E4B\u524D\u7684\u503C\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;runtime&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 n <span class="token operator">:=</span> runtime<span class="token punctuation">.</span><span class="token function">GOMAXPROCS</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">//\u6307\u5B9A\u4EE5\u5355\u6838\u8FD0\u7B97</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;n = &quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>

 <span class="token keyword">for</span> <span class="token punctuation">{</span>
  <span class="token keyword">go</span> fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

  fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u7B2C\u4E00\u6B21\u6267\u884C(runtime.GOMAXPROCS(1))\u65F6\uFF0C\u6700\u591A\u540C\u65F6\u53EA\u80FD\u6709\u4E00\u4E2Agoroutine\u88AB\u6267\u884C\u3002\u6240\u4EE5 \u4F1A\u6253\u5370\u5F88\u591A1\u3002\u8FC7\u4E86\u4E00\u6BB5\u65F6\u95F4\u540E\uFF0CGO\u8C03\u5EA6\u5668\u4F1A\u5C06\u5176\u7F6E\u4E3A\u4F11\u7720\uFF0C\u5E76\u5524\u9192\u53E6\u4E00\u4E2Agoroutine\uFF0C\u8FD9\u65F6\u5019\u5C31\u5F00\u59CB\u6253\u5370\u5F88\u591A0\u4E86\uFF0C\u5728\u6253\u5370\u7684\u65F6\u5019\uFF0Cgoroutine\u662F\u88AB\u8C03\u5EA6\u5230\u64CD\u4F5C\u7CFB\u7EDF\u7EBF\u7A0B\u4E0A\u7684\u3002</p><p>\u5728\u7B2C\u4E8C\u6B21\u6267\u884C(runtime.GOMAXPROCS(2))\u65F6\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86\u4E24\u4E2ACPU\uFF0C\u6240\u4EE5\u4E24\u4E2Agoroutine\u53EF\u4EE5\u4E00\u8D77\u88AB\u6267\u884C\uFF0C\u4EE5\u540C\u6837\u7684\u9891\u7387\u4EA4\u66FF\u6253\u53700\u548C1\u3002</p><h4 id="_4-sync-waitgroup" tabindex="-1"><a class="header-anchor" href="#_4-sync-waitgroup" aria-hidden="true">#</a> 4\uFF0Csync.WaitGroup</h4><p>\u8FD8\u6709\u4E00\u79CD\u65B9\u5F0F\u662F\u5229\u7528sync\u5305\u5185\u7684\u4E00\u4E2A\u65B9\u6CD5\u6765\u5B9E\u73B0\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;math/rand&quot;</span>
 <span class="token string">&quot;sync&quot;</span>
 <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

<span class="token keyword">func</span> <span class="token function">f1</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// goroutine\u7ED3\u675F\u5C31\u767B\u8BB0-1</span>
 time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> time<span class="token punctuation">.</span><span class="token function">Duration</span><span class="token punctuation">(</span>rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">//\u542F\u52A8\u4E00\u4E2Agoroutine\u5C31\u767B\u8BB0+1</span>
  <span class="token keyword">go</span> <span class="token function">f1</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//\u7B49\u5F85\u6240\u6709\u7B49\u7EA7\u7684goroutine\u90FD\u7ED3\u675F</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-\u591A\u534F\u7A0B\u5BFC\u81F4\u8D44\u6E90\u7ADE\u4E89\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_5-\u591A\u534F\u7A0B\u5BFC\u81F4\u8D44\u6E90\u7ADE\u4E89\u95EE\u9898" aria-hidden="true">#</a> 5\uFF0C\u591A\u534F\u7A0B\u5BFC\u81F4\u8D44\u6E90\u7ADE\u4E89\u95EE\u9898</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u5B9A\u4E49\u4E00\u4E2A\u6253\u5370\u673A\uFF0C\u53C2\u6570\u4E3A\u5B57\u7B26\u4E32\uFF0C\u6309\u6BCF\u4E2A\u5B57\u7B26\u4E32\u6253\u5370</span>
<span class="token comment">//\u6253\u5370\u673A\u5C5E\u4E8E\u516C\u5171\u8D44\u6E90</span>
<span class="token keyword">func</span> <span class="token function">Printer</span><span class="token punctuation">(</span>str <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> data <span class="token operator">:=</span> <span class="token keyword">range</span> str <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
  time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">person1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token function">Printer</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">person2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token function">Printer</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u65B0\u5EFA2\u4E2A\u534F\u7A0B\uFF0C\u4EE3\u88682\u4E2A\u4EBA\uFF0C2\u4E2A\u4EBA\u540C\u65F6\u4F7F\u7528\u6253\u5370\u673A</span>
 <span class="token keyword">go</span> <span class="token function">person1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token keyword">go</span> <span class="token function">person2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token comment">//\u7279\u5730\u4E0D\u8BA9\u4E3B\u534F\u7A0B\u7ED3\u675F\uFF0C\u521B\u5EFA\u4E00\u4E2A\u6B7B\u5FAA\u73AF</span>
 <span class="token keyword">for</span> <span class="token punctuation">{</span>

 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u5982\u4E0B\u7ED3\u679C\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>$ <span class="token keyword">go</span> run <span class="token number">7_</span>\u591A\u4EFB\u52A1\u5BFC\u81F4\u8D44\u6E90\u7ADE\u4E89\u95EE\u9898<span class="token punctuation">.</span><span class="token keyword">go</span>
whoerllldo

exit status <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40);function k(v,m){const a=c("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[n("a",d,[i("http://t.cn/Ai94Gf7N"),o(a)])]),r])}const f=e(l,[["render",k],["__file","25.goroutine.html.vue"]]);export{f as default};
