import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.0eb3f08c.js";const e={},p=t(`<h1 id="_05-\u6D41\u7A0B\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#_05-\u6D41\u7A0B\u63A7\u5236" aria-hidden="true">#</a> 05.\u6D41\u7A0B\u63A7\u5236</h1><p>Go\u8BED\u8A00\u652F\u6301\u6700\u57FA\u672C\u7684\u4E09\u79CD\u7A0B\u5E8F\u8FD0\u7B97\u7ED3\u6784\uFF1A\u987A\u5E8F\u7ED3\u6784\uFF0C\u9009\u62E9\u7ED3\u6784\uFF0C\u5FAA\u73AF\u7ED3\u6784\u3002</p><ul><li>\u987A\u5E8F\u7ED3\u6784\uFF1A\u7A0B\u5E8F\u6309\u987A\u5E8F\u6267\u884C\uFF0C\u4E0D\u53D1\u751F\u8DF3\u8F6C\u3002</li><li>\u9009\u62E9\u7ED3\u6784\uFF1A\u4F9D\u636E\u662F\u5426\u6EE1\u8DB3\u6761\u4EF6\uFF0C\u6709\u9009\u62E9\u7684\u6267\u884C\u7B26\u5408\u6761\u4EF6\u7684\u7A0B\u5E8F\u3002</li><li>\u5FAA\u73AF\u7ED3\u6784\uFF1A\u4F9D\u636E\u6761\u4EF6\u662F\u5426\u6EE1\u8DB3\uFF0C\u5FAA\u73AF\u591A\u6B21\u6267\u884C\u67D0\u6BB5\u4EE3\u7801\u3002</li></ul><h2 id="_1-if\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#_1-if\u5224\u65AD" aria-hidden="true">#</a> 1\uFF0Cif\u5224\u65AD</h2><h3 id="_1-if\u7B80\u5355\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-if\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a> 1\uFF0Cif\u7B80\u5355\u4F7F\u7528</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 s <span class="token operator">:=</span> <span class="token string">&quot;\u738B\u601D\u806A&quot;</span>

 <span class="token comment">//if\u548C{\u5C31\u662F\u6761\u4EF6\uFF0C\u6761\u4EF6\u901A\u5E38\u90FD\u662F\u5173\u7CFB\u8FD0\u7B97\u7B26</span>
 <span class="token keyword">if</span> s <span class="token operator">==</span> <span class="token string">&quot;\u738B\u601D\u806A&quot;</span> <span class="token punctuation">{</span> <span class="token comment">//\u5DE6\u62EC\u53F7\u548Cif\u8981\u5728\u540C\u4E00\u884C</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5DE6\u53F3\u4E00\u4E2A\u59B9\u5B50\uFF0C\u53F3\u624B\u4E00\u4E2A\u5927\u5988&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token comment">//if\u652F\u6301\u5D4C\u51651\u4E2A\u521D\u59CB\u5316\u8BED\u53E5\uFF0C\u521D\u59CB\u5316\u8BED\u53E5\u548C\u5224\u65AD\u6761\u4EF6\u4EE5\u5206\u53F7\u5206\u9694</span>
 <span class="token keyword">if</span> a <span class="token operator">:=</span> <span class="token number">10</span><span class="token punctuation">;</span> a <span class="token operator">==</span> <span class="token number">10</span> <span class="token punctuation">{</span> <span class="token comment">//\u6761\u4EF6\u4E3A\u771F\uFF0C\u5219\u6267\u884C\u5982\u4E0B\u6253\u5370\u8BED\u53E5</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;a = 10&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-if\u590D\u6742\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#_2-if\u590D\u6742\u5224\u65AD" aria-hidden="true">#</a> 2\uFF0Cif\u590D\u6742\u5224\u65AD</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//1</span>
 a <span class="token operator">:=</span> <span class="token number">10</span>
 <span class="token keyword">if</span> a <span class="token operator">==</span> <span class="token number">10</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;a = 10&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;a != 10&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token comment">//2</span>
 <span class="token keyword">if</span> a <span class="token operator">:=</span> <span class="token number">9</span><span class="token punctuation">;</span> a <span class="token operator">==</span> <span class="token number">10</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;a = 10&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;a != 10&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token comment">//\u6CE8\u610F\uFF0C\u4E0A\u8FB9\u867D\u7136\u4E24\u4E2A\u4F8B\u5B50\u91CC\u8FB9\u90FD\u4F7F\u7528\u4E86\u53D8\u91CFa\uFF0C\u4F46\u662F\u5E76\u4E0D\u4F1A\u62A5\u51B2\u7A81\u3002</span>

 <span class="token comment">//3</span>
 b <span class="token operator">:=</span> <span class="token number">8</span>
 <span class="token keyword">if</span> a <span class="token operator">==</span> <span class="token number">10</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;b = 10&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> b <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;b &lt; 10&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> b <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;b &gt; 10&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FD9\u662F\u4E0D\u53EF\u80FD\u7684\uFF01&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token comment">//4</span>
 <span class="token keyword">if</span> b <span class="token operator">:=</span> <span class="token number">8</span><span class="token punctuation">;</span> b <span class="token operator">==</span> <span class="token number">10</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;b = 10&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> b <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;b &lt; 10&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> b <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;b &gt; 10&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FD9\u662F\u4E0D\u53EF\u80FD\u7684\uFF01&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-switch\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_2-switch\u8BED\u53E5" aria-hidden="true">#</a> 2\uFF0Cswitch\u8BED\u53E5</h2><p>switch\u8BED\u53E5\u4E0Eshell\u5F53\u4E2D\u7684case\u8BED\u53E5\u975E\u5E38\u7C7B\u4F3C\uFF0C\u53EA\u4E0D\u8FC7\u8BED\u6CD5\u5173\u952E\u5B57\u7A0D\u5FAE\u4E0D\u540C\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 num <span class="token operator">:=</span> <span class="token number">1</span>

 <span class="token keyword">switch</span> num <span class="token punctuation">{</span> <span class="token comment">//switch\u540E\u9762\u5199\u7684\u662F\u53D8\u91CF\u672C\u8EAB</span>
 <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u9009\u62E9\u7684\u697C\u5C42\u662F%d\u5C42&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token keyword">break</span>       <span class="token comment">//go\u8BED\u8A00\u4E5F\u6709break\u5173\u952E\u5B57\uFF0C\u8868\u793A\u8DF3\u51FAswitch\u8BED\u53E5\uFF0C\u53EF\u4EE5\u4E0D\u5199\uFF0C\u9ED8\u8BA4\u5C31\u5305\u542B</span>
  <span class="token keyword">fallthrough</span> <span class="token comment">//\u8868\u793A\u4E0D\u8DF3\u51FAswitch\u8BED\u53E5\uFF0C\u540E\u9762\u7684\u65E0\u6761\u4EF6\u6267\u884C,\u4E0D\u5E38\u7528\uFF0C\u4E86\u89E3\u5373\u53EF</span>
 <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u9009\u62E9\u7684\u697C\u5C42\u662F%d\u5C42&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token comment">//break</span>
 <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u9009\u62E9\u7684\u697C\u5C42\u662F%d\u5C42&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token comment">//break</span>
 <span class="token keyword">case</span> <span class="token number">4</span><span class="token punctuation">:</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u9009\u62E9\u7684\u697C\u5C42\u662F%d\u5C42&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token comment">//break</span>
 <span class="token keyword">case</span> <span class="token number">5</span><span class="token punctuation">:</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u9009\u62E9\u7684\u697C\u5C42\u662F%d\u5C42&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token comment">//break</span>
 <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token comment">//\u7528\u4E8E\u5339\u914D\u6761\u4EF6\u4EE5\u5916\u7684\u60C5\u51B5</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u60A8\u9009\u62E9\u7684\u697C\u5C42\u4E0D\u5B58\u5728\uFF01&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>switch\u7684\u4E00\u4E9B\u5176\u4ED6\u7528\u6CD5\u4ECB\u7ECD\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//switch\u4E5F\u652F\u6301\u76F4\u63A5\u521D\u59CB\u5316\u8BED\u53E5\uFF0C\u521D\u59CB\u5316\u8BED\u53E5\u548C\u53D8\u91CF\u672C\u8EAB\u4EE5\u5206\u53F7\u5206\u9694</span>
 <span class="token keyword">switch</span> num <span class="token operator">:=</span> <span class="token number">4</span><span class="token punctuation">;</span> num <span class="token punctuation">{</span>
 <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u9009\u62E9\u7684\u697C\u5C42\u662F%d\u5C42&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
 <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u9009\u62E9\u7684\u697C\u5C42\u662F%d\u5C42&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
 <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">:</span> <span class="token comment">//\u5982\u679C\u6709\u591A\u4E2A\u6761\u4EF6\u7ED3\u679C\u4E00\u6837\uFF0C\u90A3\u4E48\u591A\u6761\u4EF6\u53EF\u4EE5\u5199\u5728\u4E00\u8D77</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u9009\u62E9\u7684\u662Fxx\u5C42&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">case</span> <span class="token number">6</span><span class="token punctuation">:</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u9009\u62E9\u7684\u697C\u5C42\u662F%d\u5C42&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
 <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token comment">//\u7528\u4E8E\u5339\u914D\u6761\u4EF6\u4EE5\u5916\u7684\u60C5\u51B5</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u60A8\u9009\u62E9\u7684\u697C\u5C42\u4E0D\u5B58\u5728\uFF01&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token comment">//\u8FD8\u53EF\u4EE5\u5C06\u6761\u4EF6\u5199\u5728case\u8BED\u53E5\u5F53\u4E2D\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A</span>
 score <span class="token operator">:=</span> <span class="token number">85</span>
 <span class="token keyword">switch</span> <span class="token punctuation">{</span>
 <span class="token keyword">case</span> score <span class="token operator">&gt;=</span> <span class="token number">90</span><span class="token punctuation">:</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F18\u79C0&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">case</span> score <span class="token operator">&gt;=</span> <span class="token number">80</span><span class="token punctuation">:</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u826F\u597D&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">case</span> score <span class="token operator">&gt;=</span> <span class="token number">70</span><span class="token punctuation">:</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E00\u822C&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">default</span><span class="token punctuation">:</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5176\u4ED6&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-for\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#_3-for\u5FAA\u73AF" aria-hidden="true">#</a> 3\uFF0Cfor\u5FAA\u73AF</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">/*\u6807\u51C6\u683C\u5F0F\u5982\u4E0B\uFF1A
 for \u521D\u59CB\u6761\u4EF6; \u5224\u65AD\u6761\u4EF6; \u6761\u4EF6\u53D8\u5316 {
  }
 */</span>

 <span class="token comment">//\u7B97\u51FA1+2+3...100\u7684\u7D2F\u52A0\u548C</span>

 sum <span class="token operator">:=</span> <span class="token number">0</span>
 <span class="token comment">/*
  1\uFF0C\u521D\u59CB\u6761\u4EF6  i := 1
  2\uFF0C\u5224\u65AD\u6761\u4EF6 i &lt;= 100 \u662F\u5426\u4E3A\u771F\uFF0C\u5982\u679C\u4E3A\u771F\uFF0C\u5219\u6267\u884C\u5FAA\u73AF\u4F53\uFF0C\u5982\u679C\u4E3A\u5047\uFF0C\u5219\u8DF3\u51FA
  3\uFF0C\u6761\u4EF6\u53D8\u5316 i++
  4\uFF0C\u91CD\u590D \u7B2C2,3,4\u6B65
 */</span>
 <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  sum <span class="token operator">=</span> sum <span class="token operator">+</span> i
 <span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;sum =&quot;</span><span class="token punctuation">,</span> sum<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-range\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#_4-range\u5173\u952E\u5B57" aria-hidden="true">#</a> 4\uFF0Crange\u5173\u952E\u5B57</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 str <span class="token operator">:=</span> <span class="token string">&quot;abc&quot;</span>

 <span class="token comment">//\u901A\u8FC7for\u6253\u5370\u6BCF\u4E2A\u5B57\u7B26</span>
 <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;str[%d]=%c\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token comment">//range\u8868\u793A\u8FED\u4EE3\u6253\u5370\u6BCF\u4E2A\u5143\u7D20\uFF0C\u9ED8\u8BA4\u8FD4\u56DE2\u4E2A\u503C\uFF1A\u4E00\u4E2A\u662F\u5143\u7D20\u7684\u4F4D\u7F6E\uFF0C\u4E00\u4E2A\u662F\u5143\u7D20\u7684\u503C</span>
 <span class="token keyword">for</span> i<span class="token punctuation">,</span> data <span class="token operator">:=</span> <span class="token keyword">range</span> str <span class="token punctuation">{</span> <span class="token comment">//i\u8868\u793A\u7684\u662F\u5143\u7D20\u7684\u4F4D\u7F6E\uFF080,1,2\uFF09,data\u8868\u793A\u7684\u662F\u5143\u7D20\u5BF9\u5E94\u7684\u503C\uFF08a,b,c\uFF09</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;str[%d]=%c\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> data<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token comment">//\u7B49\u4EF7\u4E8E\u5982\u4E0B\u5199\u6CD5\uFF1A</span>
 <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> str <span class="token punctuation">{</span> <span class="token comment">//\u7B2C2\u4E2A\u8FD4\u56DE\u503C\uFF0C\u9ED8\u8BA4\u4E22\u5F03\uFF0C\u8FD4\u56DE\u5143\u7D20\u7684\u4F4D\u7F6E\uFF08\u4E0B\u6807\uFF09</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;str[%d]=%c\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token comment">//\u53C8\u7B49\u4EF7\u4E8E\u5982\u4E0B\u5199\u6CD5</span>
 <span class="token keyword">for</span> i<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token keyword">range</span> str <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;str[%d]=%c\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-break\u548Ccontinue" tabindex="-1"><a class="header-anchor" href="#_5-break\u548Ccontinue" aria-hidden="true">#</a> 5\uFF0Cbreak\u548Ccontinue</h2><p>break\u8868\u793A\u8DF3\u51FA\u5F53\u524D\u5FAA\u73AF\u3002 continue\u8868\u793A\u8DF3\u51FA\u672C\u6B21\u5FAA\u73AF\u3002</p><p>\u6CE8\u610F\uFF1Abreak\u53EF\u4EE5\u7528\u4E8Efor,switch,select\uFF0C\u800Ccontinue\u53EA\u80FD\u7528\u5728for\u5FAA\u73AF\u5F53\u4E2D\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 i <span class="token operator">:=</span> <span class="token number">0</span>
 <span class="token keyword">for</span> <span class="token punctuation">{</span> <span class="token comment">//for\u540E\u8FB9\u4E0D\u5199\u4EFB\u4F55\u4E1C\u897F\uFF0C\u8868\u793A\u8FD9\u4E2A\u5FAA\u73AF\u6761\u4EF6\u6C38\u8FDC\u4E3A\u771F\uFF0C\u5373\u6B7B\u5FAA\u73AF\uFF0C\u6216\u8005\u65E0\u9650\u5FAA\u73AF</span>
  i<span class="token operator">++</span>
  time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span> <span class="token comment">//\u8868\u793Asleep 1 s</span>
  <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">5</span> <span class="token punctuation">{</span>
   <span class="token comment">//break //\u8DF3\u51FA\u5FAA\u73AF\uFF0C\u5982\u679C\u5D4C\u5957\u591A\u4E2A\u5FAA\u73AF\uFF0C\u5219\u8DF3\u51FA\u6700\u8FD1\u7684\u90A3\u4E2A\u5185\u5FAA\u73AF</span>
   <span class="token keyword">continue</span> <span class="token comment">//\u8DF3\u51FA\u672C\u6B21\u5FAA\u73AF</span>
  <span class="token punctuation">}</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;i =&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-goto\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#_6-goto\u5173\u952E\u5B57" aria-hidden="true">#</a> 6\uFF0Cgoto\u5173\u952E\u5B57</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u6CE8\u91CA\u6389\u4E0A\u8FB9\u7684fmt\u5305\uFF0C\u53EF\u4EE5\u5355\u72EC\u6D4B\u8BD5\u5982\u4E0B\u4E24\u4E2A\u5173\u952E\u5B57</span>
 <span class="token comment">//break  //\u8F93\u51FA\uFF1Abreak is not in a loop, switch, or select</span>
 <span class="token comment">//continue //\u8F93\u51FA\uFF1Acontinue is not in a loop</span>

 <span class="token comment">//goto\u53EF\u4EE5\u7528\u5728\u4EFB\u4F55\u5730\u65B9\uFF0C\u4F46\u662F\u4E0D\u80FD\u591F\u8DE8\u51FD\u6570\u4F7F\u7528</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;1111111&quot;</span><span class="token punctuation">)</span>

 <span class="token keyword">goto</span> End <span class="token comment">//goto\u662F\u5173\u952E\u8BCD\uFF0CEnd\u662F\u81EA\u5B9A\u4E49\u7684\u6807\u7B7E</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;2222222&quot;</span><span class="token punctuation">)</span>
End<span class="token punctuation">:</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;3333333&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\u65E5\u5E38\u5199\u4EE3\u7801\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u4E2A\u5173\u952E\u5B57\uFF0C\u4F1A\u663E\u5F97\u4EE3\u7801\u6BD4\u8F83\u4E71\u3002</p>`,24),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(e,[["render",i],["__file","05.\u6D41\u7A0B\u63A7\u5236.html.vue"]]);export{d as default};
