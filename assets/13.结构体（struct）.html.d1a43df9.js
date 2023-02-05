import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.df1d0035.js";const e={},p=t(`<h1 id="_13-\u7ED3\u6784\u4F53-struct" tabindex="-1"><a class="header-anchor" href="#_13-\u7ED3\u6784\u4F53-struct" aria-hidden="true">#</a> 13.\u7ED3\u6784\u4F53\uFF08struct\uFF09</h1><h2 id="_1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1-\u6982\u8FF0" aria-hidden="true">#</a> 1\uFF0C\u6982\u8FF0</h2><p>\u6709\u65F6\u6211\u4EEC\u9700\u8981\u5C06\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u7EC4\u5408\u6210\u4E00\u4E2A\u6709\u673A\u7684\u6574\u4F53\uFF0C\u5982\uFF1A\u4E00\u4E2A\u5B66\u751F\u6709\u5B66\u53F7\u3001\u6027\u80FD\u3001\u6027\u522B\u3001\u5E74\u9F84\u3001\u5730\u5740\u7B49\u5C5E\u6027\u3002\u5982\u679C\u4E00\u4E2A\u4E00\u4E2A\u5B9A\u4E49\u53D8\u91CF\u4F1A\u6BD4\u8F83\u7E41\u7410\uFF0C\u6570\u636E\u4E0D\u4FBF\u4E8E\u7BA1\u7406\u3002\u8FD9\u65F6\u5C31\u53EF\u4EE5\u5F15\u5165\u7ED3\u6784\u4F53\u4E86\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/ecc9c0e9aa054e4b.jpg" alt="m_919a846007897080a41597f11bd5aa1e_r"></p><p>\u7ED3\u6784\u4F53\u662F\u4E00\u79CD\u805A\u5408\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u5B83\u662F\u7531\u4E00\u7CFB\u5217\u5177\u6709\u76F8\u540C\u7C7B\u578B\u6216\u8005\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u6784\u6210\u7684\u6570\u636E\u96C6\u5408\u3002\u6BCF\u4E2A\u6570\u636E\u6210\u4E3A\u7ED3\u6784\u4F53\u7684\u6210\u5458\u3002</p><h2 id="_2-\u7ED3\u6784\u4F53\u666E\u901A\u53D8\u91CF\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#_2-\u7ED3\u6784\u4F53\u666E\u901A\u53D8\u91CF\u521D\u59CB\u5316" aria-hidden="true">#</a> 2\uFF0C\u7ED3\u6784\u4F53\u666E\u901A\u53D8\u91CF\u521D\u59CB\u5316</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 id   <span class="token builtin">int</span>
 name <span class="token builtin">string</span>
 sex  <span class="token builtin">byte</span>
 age  <span class="token builtin">int</span>
 addr <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u987A\u5E8F\u521D\u59CB\u5316\uFF0C\u6BCF\u4E2A\u6210\u5458\u90FD\u9700\u8981\u521D\u59CB\u5316\uFF0C\u5426\u5219\u62A5\u9519</span>
 <span class="token keyword">var</span> s1 Student <span class="token operator">=</span> Student<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;mike&quot;</span><span class="token punctuation">,</span> <span class="token char">&#39;m&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token string">&quot;beijing&quot;</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s1 = &quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>

 <span class="token comment">//\u6307\u5B9A\u6210\u5458\u521D\u59CB\u5316\uFF0C\u6CA1\u6709\u521D\u59CB\u5316\u7684\u9ED8\u8BA4\u4E3A0</span>
 s2 <span class="token operator">:=</span> Student<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;mike&quot;</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">13</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s2 = &quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>\u7B80\u5355\u4F7F\u7528\uFF1A</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 id   <span class="token builtin">int</span>
 name <span class="token builtin">string</span>
 sex  <span class="token builtin">byte</span>
 age  <span class="token builtin">int</span>
 addr <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> s Student
 <span class="token comment">//\u64CD\u4F5C\u6210\u5458\u9700\u8981\u4F7F\u7528\u70B9(.)\u8FD0\u7B97\u7B26</span>
 s<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token number">1</span>
 s<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;mike&quot;</span>
 s<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token char">&#39;m&#39;</span>
 s<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">12</span>
 s<span class="token punctuation">.</span>addr <span class="token operator">=</span> <span class="token string">&quot;hangzhou&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s = &quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u7ED3\u6784\u4F53\u6307\u9488\u53D8\u91CF\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#_3-\u7ED3\u6784\u4F53\u6307\u9488\u53D8\u91CF\u521D\u59CB\u5316" aria-hidden="true">#</a> 3\uFF0C\u7ED3\u6784\u4F53\u6307\u9488\u53D8\u91CF\u521D\u59CB\u5316</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 id   <span class="token builtin">int</span>
 name <span class="token builtin">string</span>
 sex  <span class="token builtin">byte</span>
 age  <span class="token builtin">int</span>
 addr <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u987A\u5E8F\u521D\u59CB\u5316\uFF0C\u6BCF\u4E2A\u6210\u5458\u90FD\u9700\u8981\u521D\u59CB\u5316\uFF0C\u5426\u5219\u62A5\u9519</span>
 <span class="token keyword">var</span> s1 <span class="token operator">*</span>Student <span class="token operator">=</span> <span class="token operator">&amp;</span>Student<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;mike&quot;</span><span class="token punctuation">,</span> <span class="token char">&#39;m&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token string">&quot;beijing&quot;</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s1 = &quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>

 <span class="token comment">//\u6307\u5B9A\u6210\u5458\u521D\u59CB\u5316\uFF0C\u6CA1\u6709\u521D\u59CB\u5316\u7684\u9ED8\u8BA4\u4E3A0</span>
 s2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>Student<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;mike&quot;</span><span class="token punctuation">,</span> addr<span class="token punctuation">:</span> <span class="token string">&quot;hangzhou&quot;</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s2 type is:%T\\n&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s2 = &quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>\u7B80\u5355\u4F7F\u7528\uFF1A</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 id   <span class="token builtin">int</span>
 name <span class="token builtin">string</span>
 sex  <span class="token builtin">byte</span>
 age  <span class="token builtin">int</span>
 addr <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//1\uFF0C\u6307\u9488\u6709\u5408\u6CD5\u6307\u5411\u540E\uFF0C\u518D\u64CD\u4F5C\u6210\u5458</span>
 <span class="token comment">//\u5148\u5B9A\u4E49\u4E00\u4E2A\u666E\u901A\u7ED3\u6784\u4F53\u53D8\u91CF</span>
 <span class="token keyword">var</span> s Student
 <span class="token comment">//\u518D\u5B9A\u4E49\u4E00\u4E2A\u6307\u9488\u53D8\u91CF\uFF0C\u4FDD\u5B58s\u7684\u5730\u5740</span>
 <span class="token keyword">var</span> p1 <span class="token operator">*</span>Student
 p1 <span class="token operator">=</span> <span class="token operator">&amp;</span>s
 <span class="token comment">//\u901A\u8FC7\u6307\u9488\u64CD\u4F5C\u6210\u5458\uFF0Cp1.id\u548C(*p1).id\u90FD\u53EF\u4EE5</span>
 p1<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token number">1</span>
 <span class="token punctuation">(</span><span class="token operator">*</span>p1<span class="token punctuation">)</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;mike&quot;</span>
 p1<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token char">&#39;m&#39;</span>
 p1<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">12</span>
 p1<span class="token punctuation">.</span>addr <span class="token operator">=</span> <span class="token string">&quot;hangzhou&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;p1 = &quot;</span><span class="token punctuation">,</span> p1<span class="token punctuation">)</span>

 <span class="token comment">//2\uFF0C\u901A\u8FC7new\u7533\u8BF7\u4E00\u4E2A\u7ED3\u6784\u4F53</span>
 p2 <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>Student<span class="token punctuation">)</span>
 p2<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token number">1</span>
 p2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;mike&quot;</span>
 p2<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token char">&#39;m&#39;</span>
 p2<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">12</span>
 p2<span class="token punctuation">.</span>addr <span class="token operator">=</span> <span class="token string">&quot;hangzhou&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;p2 = &quot;</span><span class="token punctuation">,</span> p2<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u7ED3\u6784\u4F53\u7684\u6BD4\u8F83\u548C\u8D4B\u503C" tabindex="-1"><a class="header-anchor" href="#_4-\u7ED3\u6784\u4F53\u7684\u6BD4\u8F83\u548C\u8D4B\u503C" aria-hidden="true">#</a> 4\uFF0C\u7ED3\u6784\u4F53\u7684\u6BD4\u8F83\u548C\u8D4B\u503C</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 id   <span class="token builtin">int</span>
 name <span class="token builtin">string</span>
 sex  <span class="token builtin">byte</span>
 age  <span class="token builtin">int</span>
 addr <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

 s1 <span class="token operator">:=</span> Student<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;mike&quot;</span><span class="token punctuation">,</span> <span class="token char">&#39;m&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token string">&quot;beijing&quot;</span><span class="token punctuation">}</span>
 s2 <span class="token operator">:=</span> Student<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;mike&quot;</span><span class="token punctuation">,</span> <span class="token char">&#39;m&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token string">&quot;beijing&quot;</span><span class="token punctuation">}</span>
 s3 <span class="token operator">:=</span> Student<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;mike&quot;</span><span class="token punctuation">,</span> <span class="token char">&#39;m&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token string">&quot;beijing&quot;</span><span class="token punctuation">}</span>

 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s1 = s2&quot;</span><span class="token punctuation">,</span> s1 <span class="token operator">==</span> s2<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s1 = s3&quot;</span><span class="token punctuation">,</span> s1 <span class="token operator">==</span> s3<span class="token punctuation">)</span>

 <span class="token comment">//\u540C\u7C7B\u578B\u76842\u4E2A\u7ED3\u6784\u4F53\uFF0C\u53EF\u4EE5\u76F8\u4E92\u8D4B\u503C</span>
 <span class="token keyword">var</span> tmp Student
 tmp <span class="token operator">=</span> s3
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;tmp = &quot;</span><span class="token punctuation">,</span> tmp<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u7ED3\u6784\u4F53\u505A\u51FD\u6570\u53C2\u6570-\u503C\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#_5-\u7ED3\u6784\u4F53\u505A\u51FD\u6570\u53C2\u6570-\u503C\u4F20\u9012" aria-hidden="true">#</a> 5\uFF0C\u7ED3\u6784\u4F53\u505A\u51FD\u6570\u53C2\u6570-\u503C\u4F20\u9012</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 id   <span class="token builtin">int</span>
 name <span class="token builtin">string</span>
 sex  <span class="token builtin">byte</span>
 age  <span class="token builtin">int</span>
 addr <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u76F8\u5F53\u4E8E\u62F7\u8D1D\u4E00\u4EFD\u5230test\u51FD\u6570\u4E2D\uFF0C\u90A3\u4E48\u5BF9\u5E94\u7684\u64CD\u4F5C\u4E5F\u5C31\u5728test\u4F5C\u7528\u57DF\u5F53\u4E2D\u751F\u6548</span>
<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>s Student<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 s<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token number">666</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;test = &quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

 s <span class="token operator">:=</span> Student<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;mike&quot;</span><span class="token punctuation">,</span> <span class="token char">&#39;m&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token string">&quot;beijing&quot;</span><span class="token punctuation">}</span>

 <span class="token function">test</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token comment">//\u503C\u4F20\u9012\uFF0C\u5F62\u53C2\u65E0\u6CD5\u6539\u5B9E\u53C2</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main = &quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-\u7ED3\u6784\u4F53\u505A\u51FD\u6570\u53C2\u6570-\u5730\u5740\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#_6-\u7ED3\u6784\u4F53\u505A\u51FD\u6570\u53C2\u6570-\u5730\u5740\u4F20\u9012" aria-hidden="true">#</a> 6\uFF0C\u7ED3\u6784\u4F53\u505A\u51FD\u6570\u53C2\u6570-\u5730\u5740\u4F20\u9012</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 id   <span class="token builtin">int</span>
 name <span class="token builtin">string</span>
 sex  <span class="token builtin">byte</span>
 age  <span class="token builtin">int</span>
 addr <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>p <span class="token operator">*</span>Student<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 p<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token number">666</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

 s <span class="token operator">:=</span> Student<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;mike&quot;</span><span class="token punctuation">,</span> <span class="token char">&#39;m&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token string">&quot;beijing&quot;</span><span class="token punctuation">}</span>

 <span class="token function">test</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s<span class="token punctuation">)</span> <span class="token comment">//\u5730\u5740\u4F20\u9012\uFF0C\u5F62\u53C2\u4FEE\u6539\u5C31\u662F\u5BF9\u5B9E\u53C2\u4FEE\u6539</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main = &quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-\u53EF\u89C1\u6027" tabindex="-1"><a class="header-anchor" href="#_7-\u53EF\u89C1\u6027" aria-hidden="true">#</a> 7\uFF0C\u53EF\u89C1\u6027</h2><p>\u5728Go\u8BED\u8A00\u5F53\u4E2D\uFF0C\u6240\u6709\u60F3\u8981\u5168\u5C40\u8C03\u7528\u7684\u53D8\u91CF\uFF0C\u51FD\u6570\uFF0C\u7ED3\u6784\u4F53\u7C7B\u578B\uFF0C\u7ED3\u6784\u4F53\u6210\u5458\uFF0C\u90FD\u5FC5\u987B\u5728\u5B9A\u4E49\u7684\u65F6\u5019\uFF0C\u9996\u5B57\u6BCD\u5927\u5199\uFF0C\u5426\u5219\u53EA\u80FD\u5728\u5F53\u524D\u4F5C\u7528\u57DF\u751F\u6548\u3002</p>`,21),i=[p];function o(c,l){return s(),a("div",null,i)}const r=n(e,[["render",o],["__file","13.\u7ED3\u6784\u4F53\uFF08struct\uFF09.html.vue"]]);export{r as default};
