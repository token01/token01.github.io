import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as o,a as n,b as s,d as t,f as l,r as p}from"./app.f06c8422.js";const c={},u=n("h1",{id:"_22-\u6B63\u5219\u8868\u8FBE\u5F0F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_22-\u6B63\u5219\u8868\u8FBE\u5F0F","aria-hidden":"true"},"#"),s(" 22.\u6B63\u5219\u8868\u8FBE\u5F0F")],-1),r=n("p",null,"\u6B63\u5219\u8868\u8FBE\u5F0F\u662F\u4E00\u79CD\u8FDB\u884C\u6A21\u5F0F\u5339\u914D\u548C\u6587\u672C\u64CD\u7EB5\u7684\u590D\u6742\u800C\u53C8\u5F3A\u5927\u7684\u5DE5\u5177\u3002\u867D\u7136\u6B63\u5219\u8868\u8FBE\u5F0F\u6BD4\u7EAF\u7CB9\u7684\u6587\u672C\u5339\u914D\u6548\u7387\u4F4E\uFF0C\u4F46\u662F\u5B83\u5374\u66F4\u7075\u6D3B\u3002\u6309\u7167\u5B83\u7684\u8BED\u6CD5\u89C4\u5219\uFF0C\u968F\u9700\u8981\u6784\u9020\u51FA\u7684\u5339\u914D\u6A21\u5F0F\u5C31\u80FD\u591F\u4ECE\u539F\u59CB\u6587\u672C\u4E2D\u7B5B\u9009\u51FA\u51E0\u4E4E\u4EFB\u4F55\u4F60\u60F3\u8981\u5F97\u5230\u7684\u5B57\u7B26\u7EC4\u5408\u3002",-1),d={href:"https://studygolang.com/pkgdoc",title:"regexp\u6807\u51C6\u5305",target:"_blank",rel:"noopener noreferrer"},v={href:"http://t.cn/zTV0WS8",target:"_blank",rel:"noopener noreferrer"},m=l(`<p>\u5176\u5B9E\u5B57\u7B26\u4E32\u5904\u7406\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528string\u5305\u6765\u8FDB\u884C\u641C\u7D22\uFF08Contains,Index\uFF09\uFF0C\u66FF\u6362\uFF08Replace\uFF09\u548C\u89E3\u6790\uFF08Split,Join\uFF09\u7B49\u64CD\u4F5C\uFF0C\u4F46\u662F\u8FD9\u4E9B\u90FD\u662F\u7B80\u5355\u7684\u5B57\u7B26\u4E32\u64CD\u4F5C\uFF0C\u4ED6\u4EEC\u7684\u641C\u7D22\u90FD\u662F\u5927\u5C0F\u5199\u654F\u611F\uFF0C\u800C\u4E14\u56FA\u5B9A\u7684\u5B57\u7B26\u4E32\uFF0C\u5982\u679C\u6211\u4EEC\u9700\u8981\u5339\u914D\u53EF\u53D8\u7684\u90A3\u79CD\u5C31\u6CA1\u529E\u6CD5\u5B9E\u73B0\u4E86\uFF0C\u5F53\u7136\u5982\u679Cstring\u5305\u80FD\u591F\u89E3\u51B3\u4F60\u7684\u95EE\u9898\uFF0C\u90A3\u4E48\u5C31\u5C3D\u91CF\u4F7F\u7528\u5B83\u6765\u89E3\u51B3\u3002\u56E0\u4E3A\u4ED6\u4EEC\u8DB3\u591F\u7B80\u5355\uFF0C\u800C\u4E14\u6027\u80FD\u548C\u53EF\u8BFB\u6027\u90FD\u4F1A\u6BD4\u6B63\u5219\u597D\u3002</p><p>\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u89C4\u5219\uFF1A</p><p>\u793A\u4F8B\u4E00\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;regexp&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 buf <span class="token operator">:=</span> <span class="token string">&quot;abc azc a2c aac 666 a0c tzc abcd&quot;</span>

 <span class="token comment">//1\uFF0C\u89E3\u91CA\u89C4\u5219\uFF0C\u5B83\u4F1A\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5982\u679C\u6210\u529F\u5219\u8FD4\u56DE\u89E3\u91CA\u5668</span>
 <span class="token comment">//reg1 := regexp.MustCompile(\`a.c\`)</span>
 reg1 <span class="token operator">:=</span> regexp<span class="token punctuation">.</span><span class="token function">MustCompile</span><span class="token punctuation">(</span><span class="token string">\`a\\dc\`</span><span class="token punctuation">)</span> <span class="token comment">//\`a\\dc\` \u7B49\u6548\u4E8E \`a[0-9]c\`</span>
 <span class="token keyword">if</span> reg1 <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;regexp err&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>

 <span class="token comment">//2,\u6839\u636E\u89C4\u5219\u5C06\u5339\u914D\u5230\u7684\u7ED3\u679C\u8F93\u51FA</span>
 result <span class="token operator">:=</span> reg1<span class="token punctuation">.</span><span class="token function">FindAllStringSubmatch</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">//-1\u8868\u793A\u6240\u6709</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;result = &quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B\u4E8C\uFF0C\u4F7F\u7528\u6B63\u5219\u5339\u914D\u5C0F\u6570\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;regexp&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 buf <span class="token operator">:=</span> <span class="token string">&quot;43.12 7.8 2.3 3.14 6. 1.a bcd 6.66&quot;</span>
 <span class="token comment">//\u89E3\u91CA\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C+\u8868\u793A\u5339\u914D\u524D\u4E00\u4E2A\u5B57\u7B261\u6B21\u6216\u4EFB\u610F\u591A\u6B21</span>
 reg <span class="token operator">:=</span> regexp<span class="token punctuation">.</span><span class="token function">MustCompile</span><span class="token punctuation">(</span><span class="token string">\`\\d+\\.\\d+\`</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> reg <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;MustCompile err&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>

 <span class="token comment">//\u63D0\u53D6\u5173\u952E\u4FE1\u606F</span>
 <span class="token comment">//result := reg.FindAllString(buf, -1)</span>
 result <span class="token operator">:=</span> reg<span class="token punctuation">.</span><span class="token function">FindAllStringSubmatch</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;result = &quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B\u4E09\u83B7\u53D6\u7F51\u9875\u5185\u5BB9\u4E2D\u5173\u952E\u4FE1\u606F\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;regexp&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\`\`\u53CD\u5F15\u53F7\u8868\u793A\u539F\u5B57\u7B26</span>
 buf <span class="token operator">:=</span> <span class="token string">\`
 &lt;!DOCTYPE html&gt;
&lt;html lang=&quot;zh-CN&quot;&gt;
&lt;head&gt;
 &lt;title&gt;Go\u8BED\u8A00\u6807\u51C6\u5E93\u6587\u6863\u4E2D\u6587\u7248 | Go\u8BED\u8A00\u4E2D\u6587\u7F51 | Golang\u4E2D\u6587\u793E\u533A | Golang\u4E2D\u56FD&lt;/title&gt;
 &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no&quot;&gt;
 &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge, chrome=1&quot;&gt;
 &lt;meta charset=&quot;utf-8&quot;&gt;
 &lt;link rel=&quot;shortcut icon&quot; href=&quot;/static/img/go.ico&quot;&gt;
 &lt;link rel=&quot;apple-touch-icon&quot; type=&quot;image/png&quot; href=&quot;/static/img/logo2.png&quot;&gt;
 &lt;meta name=&quot;author&quot; content=&quot;polaris &lt;polaris@studygolang.com&gt;&quot;&gt;
 &lt;meta name=&quot;keywords&quot; content=&quot;\u4E2D\u6587, \u6587\u6863, \u6807\u51C6\u5E93, Go\u8BED\u8A00,Golang,Go\u793E\u533A,Go\u4E2D\u6587\u793E\u533A,Golang\u4E2D\u6587\u793E\u533A,Go\u8BED\u8A00\u793E\u533A,Go\u8BED\u8A00\u5B66\u4E60,\u5B66\u4E60Go\u8BED\u8A00,Go\u8BED\u8A00\u5B66\u4E60\u56ED\u5730,Golang \u4E2D\u56FD,Golang\u4E2D\u56FD,Golang China, Go\u8BED\u8A00\u8BBA\u575B, Go\u8BED\u8A00\u4E2D\u6587\u7F51&quot;&gt;
 &lt;meta name=&quot;description&quot; content=&quot;Go\u8BED\u8A00\u6587\u6863\u4E2D\u6587\u7248\uFF0CGo\u8BED\u8A00\u4E2D\u6587\u7F51\uFF0C\u4E2D\u56FD Golang \u793E\u533A\uFF0CGo\u8BED\u8A00\u5B66\u4E60\u56ED\u5730\uFF0C\u81F4\u529B\u4E8E\u6784\u5EFA\u5B8C\u5584\u7684 Golang \u4E2D\u6587\u793E\u533A\uFF0CGo\u8BED\u8A00\u7231\u597D\u8005\u7684\u5B66\u4E60\u5BB6\u56ED\u3002\u5206\u4EAB Go \u8BED\u8A00\u77E5\u8BC6\uFF0C\u4EA4\u6D41\u4F7F\u7528\u7ECF\u9A8C&quot;&gt;
&lt;/head&gt;
&lt;head&gt;
 &lt;div&gt;\u4F60\u597D&lt;/div&gt;
 &lt;div&gt;\u4F60\u5728\u5E72\u561B\u5462&lt;/div&gt;
 &lt;div&gt;are
 u
 ok?
 &lt;/div&gt;
 &lt;div&gt;\u5403\u996D\u6CA1&lt;/div&gt;
&lt;/head&gt;

&lt;frameset cols=&quot;15,85&quot;&gt;
 &lt;frame src=&quot;/static/pkgdoc/i.html&quot;&gt;
 &lt;frame name=&quot;main&quot; src=&quot;/static/pkgdoc/main.html&quot; tppabs=&quot;main.html&quot; &gt;
 &lt;noframes&gt;
 &lt;/noframes&gt;
&lt;/frameset&gt;
&lt;/html&gt;
 \`</span>
 reg <span class="token operator">:=</span> regexp<span class="token punctuation">.</span><span class="token function">MustCompile</span><span class="token punctuation">(</span><span class="token string">\`&lt;div&gt;(?s:(.*?))&lt;/div&gt;\`</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> reg <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;MustCompile err&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>

 <span class="token comment">//\u63D0\u53D6\u5173\u952E\u4FE1\u606F</span>
 <span class="token comment">//result := reg.FindAllString(buf, -1)</span>
 result <span class="token operator">:=</span> reg<span class="token punctuation">.</span><span class="token function">FindAllStringSubmatch</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
 <span class="token comment">//fmt.Println(&quot;result = &quot;, result)</span>

 <span class="token comment">//\u8FC7\u6EE4\u6389&lt;div&gt;&lt;/div&gt;</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> test <span class="token operator">:=</span> <span class="token keyword">range</span> result <span class="token punctuation">{</span>
  <span class="token comment">//fmt.Println(&quot;test[0] = &quot;, test[0]) //\u5E26&lt;div&gt;&lt;/div&gt;</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;test[1] = &quot;</span><span class="token punctuation">,</span> test<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//\u4E0D\u5E26&lt;div&gt;&lt;/div&gt;</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>$ <span class="token keyword">go</span> run <span class="token number">10_</span>\u6B63\u5219\u8868\u8FBE\u5F0F<span class="token number">3.</span><span class="token keyword">go</span>
test<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span>  \u4F60\u597D
test<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span>  \u4F60\u5728\u5E72\u561B\u5462
test<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span>  are
        u
        ok?

test<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span>  \u5403\u996D\u6CA1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function k(b,g){const a=p("ExternalLinkIcon");return i(),o("div",null,[u,r,n("p",null,[s("Go\u8BED\u8A00\u901A\u8FC7"),n("a",d,[s("regexp\u6807\u51C6\u5305"),t(a)]),s("\u4E3A\u6B63\u5219\u8868\u8FBE\u5F0F\u63D0\u4F9B\u4E86\u5B98\u65B9\u652F\u6301\uFF0C\u5982\u679C\u4F60\u5DF2\u7ECF\u4F7F\u7528\u8FC7\u5176\u4ED6\u7F16\u7A0B\u8BED\u8A00\u63D0\u4F9B\u7684\u6B63\u5219\u76F8\u5173\u529F\u80FD\uFF0C\u90A3\u4E48\u4F60\u5E94\u8BE5\u5BF9Go\u8BED\u8A00\u7248\u672C\u7684\u4E0D\u4F1A\u592A\u964C\u751F\uFF0C\u4F46\u662F\u5B83\u4EEC\u4E4B\u95F4\u4E5F\u6709\u4E00\u4E9B\u5DEE\u5F02\uFF0C\u56E0\u4E3AGo\u5B9E\u73B0\u7684\u662FRE2\u6807\u51C6\uFF0C\u9664\u4E86\\C\uFF0C\u8BE6\u7EC6\u7684\u8BED\u6CD5\u63CF\u8FF0\u53C2\u8003\uFF1A"),n("a",v,[s("http://t.cn/zTV0WS8"),t(a)])]),m])}const h=e(c,[["render",k],["__file","22.\u6B63\u5219\u8868\u8FBE\u5F0F.html.vue"]]);export{h as default};
