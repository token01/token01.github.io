import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.f386ac8b.js";const e={},p=t(`<h1 id="_14-\u533F\u540D\u7EC4\u5408" tabindex="-1"><a class="header-anchor" href="#_14-\u533F\u540D\u7EC4\u5408" aria-hidden="true">#</a> 14.\u533F\u540D\u7EC4\u5408</h1><p>\u5BF9\u4E8E\u9762\u5411\u5BF9\u8C61\u53D8\u6210\u7684\u652F\u6301\uFF0CGo\u8BED\u8A00\u8BBE\u8BA1\u7684\u975E\u5E38\u7B80\u6D01\u4E14\u4F18\u96C5\u3002\u56E0\u4E3A\uFF0CGo\u8BED\u8A00\u5E76\u6CA1\u6709\u6CBF\u88AD\u4F20\u7EDF\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u4E2D\u7684\u8BF8\u591A\u6982\u5FF5\uFF0C\u6BD4\u5982\u7EE7\u627F\uFF08\u4E0D\u652F\u6301\u7EE7\u627F\uFF0C\u5C3D\u7BA1\u533F\u540D\u5B57\u6BB5\u7684\u5185\u5B58\u5E03\u5C40\u548C\u884C\u4E3A\u7C7B\u4F3C\u7EE7\u627F\uFF0C\u4F46\u5B83\u5E76\u4E0D\u662F\u7EE7\u627F\uFF09\uFF0C\u865A\u51FD\u6570\uFF0C\u6784\u9020\u51FD\u6570\u548C\u6790\u6784\u51FD\u6570\uFF0C\u9690\u85CF\u7684this\u6307\u9488\u7B49\u3002</p><p>\u4F20\u7EDF\u9762\u5411\u5BF9\u8C61\u6838\u5FC3\u6982\u5FF5\u53EF\u5982\u56FE\u4E86\u89E3\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/c300859e9bea1787.jpg" alt="m_2ab287133a302b022f5eaf17ba39d3cb_r"></p><p>\u5C3D\u7BA1Go\u8BED\u8A00\u4E2D\u6CA1\u6709\u5C01\u88C5\uFF0C\u7EE7\u627F\uFF0C\u591A\u6001\u8FD9\u4E9B\u6982\u5FF5\uFF0C\u4F46\u540C\u6837\u901A\u8FC7\u522B\u7684\u65B9\u5F0F\u5B9E\u73B0\u4E86\u8FD9\u4E9B\u7279\u6027\uFF1A</p><ul><li>\u5C01\u88C5\uFF1A\u901A\u8FC7<code>\u65B9\u6CD5</code>\u5B9E\u73B0</li><li>\u7EE7\u627F\uFF1A\u901A\u8FC7<code>\u533F\u540D\u5B57\u6BB5</code>\u5B9E\u73B0</li><li>\u591A\u6001\uFF1A\u901A\u8FC7<code>\u63A5\u53E3</code>\u5B9E\u73B0</li></ul><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u5B9A\u4E49\u7ED3\u6784\u4F53\u7684\u65F6\u5019\u662F\u5B57\u6BB5\u540D\u4E0E\u5176\u7C7B\u578B\u4E00\u4E00\u5BF9\u5E94\uFF0C\u5B9E\u9645\u4E0AGo\u652F\u6301\u53EA\u63D0\u4F9B\u7C7B\u578B\uFF0C\u800C\u4E0D\u5199\u5B57\u6BB5\u540D\u7684\u65B9\u5F0F\uFF0C\u4E5F\u5C31\u662F\u533F\u540D\u5B57\u6BB5\uFF0C\u4E5F\u79F0\u4E3A\u5D4C\u5165\u5B57\u6BB5\u3002</p><p>\u5F53\u533F\u540D\u5B57\u6BB5\u4E5F\u662F\u4E00\u4E2A\u7ED3\u6784\u4F53\u7684\u65F6\u5019\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7ED3\u6784\u4F53\u6240\u62E5\u6709\u7684\u5168\u90E8\u5B57\u6BB5\u90FD\u88AB\u9690\u5F0F\u5730\u5F15\u5165\u4E86\u5F53\u524D\u5B9A\u4E49\u7684\u8FD9\u4E2A\u7ED3\u6784\u4F53\u3002</p><h2 id="_1-\u533F\u540D\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#_1-\u533F\u540D\u5B57\u6BB5" aria-hidden="true">#</a> 1\uFF0C\u533F\u540D\u5B57\u6BB5</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 name <span class="token builtin">string</span>
 sex  <span class="token builtin">byte</span>
 age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u5185\u5BB9\u91CD\u53E0\u7684\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5F15\u7528\uFF0C\u53EA\u6709\u7C7B\u578B\uFF0C\u6CA1\u6709\u540D\u5B57\uFF0C\u5C31\u662F\u533F\u540D\u5B57\u6BB5</span>
 <span class="token comment">//\u8FD9\u6837Student\u5C31\u4F1A\u7EE7\u627FPerson\u8FD9\u4E2A\u7ED3\u6784\u4F53\u91CC\u8FB9\u7684\u6210\u5458\u4E86</span>
 Person
 id   <span class="token builtin">int</span>
 addr <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u533F\u540D\u5B57\u6BB5\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#_2-\u533F\u540D\u5B57\u6BB5\u521D\u59CB\u5316" aria-hidden="true">#</a> 2\uFF0C\u533F\u540D\u5B57\u6BB5\u521D\u59CB\u5316</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 name <span class="token builtin">string</span>
 sex  <span class="token builtin">byte</span>
 age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u5185\u5BB9\u91CD\u53E0\u7684\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5F15\u7528\uFF0C\u53EA\u6709\u7C7B\u578B\uFF0C\u6CA1\u6709\u540D\u5B57\uFF0C\u5C31\u662F\u533F\u540D\u5B57\u6BB5</span>
 <span class="token comment">//\u8FD9\u6837Student\u5C31\u4F1A\u7EE7\u627FPerson\u8FD9\u4E2A\u7ED3\u6784\u4F53\u91CC\u8FB9\u7684\u6210\u5458\u4E86</span>
 Person
 id   <span class="token builtin">int</span>
 addr <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u987A\u5E8F\u521D\u59CB\u5316</span>
 <span class="token keyword">var</span> s1 <span class="token operator">=</span> Student<span class="token punctuation">{</span>Person<span class="token punctuation">{</span><span class="token string">&quot;yoyo&quot;</span><span class="token punctuation">,</span> <span class="token char">&#39;m&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;hangzhou&quot;</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s1 = &quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>

 <span class="token comment">//\u81EA\u52A8\u63A8\u5BFC\u7C7B\u578B</span>
 s2 <span class="token operator">:=</span> Student<span class="token punctuation">{</span>Person<span class="token punctuation">{</span><span class="token string">&quot;yoyo&quot;</span><span class="token punctuation">,</span> <span class="token char">&#39;m&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;hangzhou&quot;</span><span class="token punctuation">}</span>
 <span class="token comment">//fmt.Println(&quot;s2 = &quot;, s2)</span>
 <span class="token comment">//%+v\u663E\u793A\u8BE6\u7EC6\u4FE1\u606F</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s2 = %+v\\n&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>

 <span class="token comment">//\u6307\u5B9A\u6210\u5458\u521D\u59CB\u5316\uFF0C\u6CA1\u6709\u521D\u59CB\u5316\u7684\u9ED8\u8BA4\u4E3A0</span>
 s3 <span class="token operator">:=</span> Student<span class="token punctuation">{</span>addr<span class="token punctuation">:</span> <span class="token string">&quot;hangzhou&quot;</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s3 = %+v\\n&quot;</span><span class="token punctuation">,</span> s3<span class="token punctuation">)</span>

 s4 <span class="token operator">:=</span> Student<span class="token punctuation">{</span>Person<span class="token punctuation">:</span> Person<span class="token punctuation">{</span>age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">,</span> addr<span class="token punctuation">:</span> <span class="token string">&quot;hangzhou&quot;</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s4 = %+v\\n&quot;</span><span class="token punctuation">,</span> s4<span class="token punctuation">)</span>

 <span class="token comment">//s5 := Student{age: 18, addr: &quot;hangzhou&quot;} //err</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u6210\u5458\u7684\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_3-\u6210\u5458\u7684\u64CD\u4F5C" aria-hidden="true">#</a> 3\uFF0C\u6210\u5458\u7684\u64CD\u4F5C</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 name <span class="token builtin">string</span>
 sex  <span class="token builtin">byte</span>
 age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Person
 id   <span class="token builtin">int</span>
 addr <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

 s1 <span class="token operator">:=</span> Student<span class="token punctuation">{</span>Person<span class="token punctuation">{</span><span class="token string">&quot;yoyo&quot;</span><span class="token punctuation">,</span> <span class="token char">&#39;m&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;hangzhou&quot;</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>name<span class="token punctuation">,</span> s1<span class="token punctuation">.</span>sex<span class="token punctuation">,</span> s1<span class="token punctuation">.</span>age<span class="token punctuation">,</span> s1<span class="token punctuation">.</span>id<span class="token punctuation">,</span> s1<span class="token punctuation">.</span>addr<span class="token punctuation">)</span>
 <span class="token comment">//\u4FEE\u6539\u67D0\u4E2A\u6210\u5458\u7684\u503C</span>
 s1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;eryajf&quot;</span>
 s1<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">22</span>
 s1<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token number">5</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>name<span class="token punctuation">,</span> s1<span class="token punctuation">.</span>sex<span class="token punctuation">,</span> s1<span class="token punctuation">.</span>age<span class="token punctuation">,</span> s1<span class="token punctuation">.</span>id<span class="token punctuation">,</span> s1<span class="token punctuation">.</span>addr<span class="token punctuation">)</span>

 <span class="token comment">//\u4FEE\u6539Person\u91CC\u8FB9\u7684\u503C</span>
 s1<span class="token punctuation">.</span>Person <span class="token operator">=</span> Person<span class="token punctuation">{</span><span class="token string">&quot;long&quot;</span><span class="token punctuation">,</span> <span class="token char">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>name<span class="token punctuation">,</span> s1<span class="token punctuation">.</span>sex<span class="token punctuation">,</span> s1<span class="token punctuation">.</span>age<span class="token punctuation">,</span> s1<span class="token punctuation">.</span>id<span class="token punctuation">,</span> s1<span class="token punctuation">.</span>addr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u540C\u540D\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#_4-\u540C\u540D\u5B57\u6BB5" aria-hidden="true">#</a> 4\uFF0C\u540C\u540D\u5B57\u6BB5</h2><p>\u5176\u89C4\u5219\u4E0E\u524D\u8FB9\u7684\u540C\u540D\u53D8\u91CF\u65F6\u4E00\u81F4\u7684\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 name <span class="token builtin">string</span>
 sex  <span class="token builtin">byte</span>
 age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Person
 id   <span class="token builtin">int</span>
 addr <span class="token builtin">string</span>
 name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CF</span>
 <span class="token keyword">var</span> s Student
 <span class="token comment">//\u5982\u679C\u5B9A\u4E49\u7684\u7ED3\u6784\u4F53\u5F15\u7528\u7684\u533F\u540D\u5B57\u6BB5\u6709\u91CD\u540D\u5B57\u6BB5\uFF0C\u90A3\u4E48\u5728\u5B57\u6BB5\u8D4B\u503C\u7684\u65F6\u5019</span>
 <span class="token comment">//\u9ED8\u8BA4\u89C4\u5219\u4E3A\u5C31\u8FD1\u539F\u5219\uFF0C\u5982\u679C\u5C31\u8FD1\u6CA1\u6709\uFF0C\u518D\u5F80\u5916\u5C42\u5339\u914D</span>
 s<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;erya&quot;</span> <span class="token comment">//\u8FD9\u4E2Aname\u662F\u7ED9Student\u8D4B\u503C</span>
 s<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token char">&#39;m&#39;</span>
 s<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span>
 s<span class="token punctuation">.</span>addr <span class="token operator">=</span> <span class="token string">&quot;hangzhou&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s = %+v\\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>

 <span class="token comment">//\u5982\u679C\u8981\u7ED9Person\u91CC\u8FB9\u7684name\u5B57\u6BB5\u8D4B\u503C\uFF0C\u5219\u9700\u8981\u663E\u5F0F\u8C03\u7528</span>
 s<span class="token punctuation">.</span>Person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;long&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s = %+v\\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u975E\u7ED3\u6784\u4F53\u533F\u540D\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#_5-\u975E\u7ED3\u6784\u4F53\u533F\u540D\u5B57\u6BB5" aria-hidden="true">#</a> 5\uFF0C\u975E\u7ED3\u6784\u4F53\u533F\u540D\u5B57\u6BB5</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> mystr <span class="token builtin">string</span> <span class="token comment">//\u81EA\u5B9A\u4E49\u7C7B\u578B\uFF0C\u76F8\u5F53\u4E8E\u522B\u540D</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 name <span class="token builtin">string</span>
 sex  <span class="token builtin">byte</span>
 age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Person <span class="token comment">//\u7ED3\u6784\u4F53\u7C7B\u578B\u533F\u540D\u5B57\u6BB5</span>
 <span class="token builtin">int</span>    <span class="token comment">//\u57FA\u7840\u7C7B\u578B\u533F\u540D\u5B57\u6BB5</span>
 mystr
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 s <span class="token operator">:=</span> Student<span class="token punctuation">{</span>Person<span class="token punctuation">{</span><span class="token string">&quot;yoyo&quot;</span><span class="token punctuation">,</span> <span class="token char">&#39;m&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">,</span> <span class="token string">&quot;hangzhou&quot;</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s = %+v\\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>

 s<span class="token punctuation">.</span>Person <span class="token operator">=</span> Person<span class="token punctuation">{</span><span class="token string">&quot;erya&quot;</span><span class="token punctuation">,</span> <span class="token char">&#39;m&#39;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>Person<span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token builtin">int</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>mystr<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-\u7ED3\u6784\u4F53\u6307\u9488\u7C7B\u578B\u533F\u540D\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#_6-\u7ED3\u6784\u4F53\u6307\u9488\u7C7B\u578B\u533F\u540D\u5B57\u6BB5" aria-hidden="true">#</a> 6\uFF0C\u7ED3\u6784\u4F53\u6307\u9488\u7C7B\u578B\u533F\u540D\u5B57\u6BB5</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 name <span class="token builtin">string</span>
 sex  <span class="token builtin">byte</span>
 age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 <span class="token operator">*</span>Person <span class="token comment">//\u6307\u9488\u7C7B\u578B</span>
 id      <span class="token builtin">int</span>
 addr    <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

 s1 <span class="token operator">:=</span> Student<span class="token punctuation">{</span><span class="token operator">&amp;</span>Person<span class="token punctuation">{</span><span class="token string">&quot;yoyo&quot;</span><span class="token punctuation">,</span> <span class="token char">&#39;m&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;hangzhou&quot;</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>name<span class="token punctuation">,</span> s1<span class="token punctuation">.</span>sex<span class="token punctuation">,</span> s1<span class="token punctuation">.</span>age<span class="token punctuation">,</span> s1<span class="token punctuation">.</span>id<span class="token punctuation">,</span> s1<span class="token punctuation">.</span>addr<span class="token punctuation">)</span>

 <span class="token comment">//\u901A\u8FC7new\u64CD\u4F5C</span>
 <span class="token keyword">var</span> s2 Student
 s2<span class="token punctuation">.</span>Person <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span>
 s2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;eryajf&quot;</span>
 s2<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">22</span>
 s2<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token number">5</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s2<span class="token punctuation">.</span>name<span class="token punctuation">,</span> s2<span class="token punctuation">.</span>sex<span class="token punctuation">,</span> s2<span class="token punctuation">.</span>age<span class="token punctuation">,</span> s2<span class="token punctuation">.</span>id<span class="token punctuation">,</span> s2<span class="token punctuation">.</span>addr<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),i=[p];function o(c,l){return s(),a("div",null,i)}const r=n(e,[["render",o],["__file","14.\u533F\u540D\u7EC4\u5408.html.vue"]]);export{r as default};
