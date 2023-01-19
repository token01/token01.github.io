import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,a as n,b as s,d as e,f as a,r as c}from"./app.f6fb4051.js";const l={},u=a(`<h1 id="_09-golang\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u6C47\u603B" tabindex="-1"><a class="header-anchor" href="#_09-golang\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u6C47\u603B" aria-hidden="true">#</a> 09.golang\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u6C47\u603B</h1><p>golang\u4F5C\u4E3A\u5F3A\u7C7B\u578B\u8BED\u8A00\uFF0C\u6211\u4EEC\u5728\u65E5\u5E38\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u9047\u5230\u7C7B\u578B\u8F6C\u6362\u7684\u573A\u666F\u4E5F\u975E\u5E38\u591A\uFF0C\u672C\u6587\u6574\u7406\u6211\u5728\u5DE5\u4F5C\u5F00\u53D1\u4E2D\u9047\u5230\u8FC7\u7684\u7C7B\u578B\u8F6C\u6362\u5B9E\u8DF5\u3002</p><h2 id="string-to-other" tabindex="-1"><a class="header-anchor" href="#string-to-other" aria-hidden="true">#</a> String To Other</h2><ul><li><p><code>string to int</code></p><ul><li><p>\u65B9\u6CD5\u4E00</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> str <span class="token operator">:=</span> <span class="token string">&quot;10&quot;</span>
 <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u65B9\u6CD5\u4E8C</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> str <span class="token operator">:=</span> <span class="token string">&quot;10&quot;</span>
 <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseInt</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><code>string to int8</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> str <span class="token operator">:=</span> <span class="token string">&quot;10&quot;</span>
 <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseInt</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>string to int32</code></p><p><strong>int32\u4E5F\u53EB\u505Arune</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> str <span class="token operator">:=</span> <span class="token string">&quot;10&quot;</span>
 <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseInt</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>string to int64</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> str <span class="token operator">:=</span> <span class="token string">&quot;10&quot;</span>
 <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseInt</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>string to float32</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> ret<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseFloat</span><span class="token punctuation">(</span><span class="token string">&quot;3.14159&quot;</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>string to float64</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> ret<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseFloat</span><span class="token punctuation">(</span><span class="token string">&quot;3.14159&quot;</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>string to []byte</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> s1 <span class="token operator">:=</span> <span class="token string">&quot;hello&quot;</span>
  b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>json string to map</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">JsonToMap</span><span class="token punctuation">(</span>jsonStr <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>m <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 err <span class="token operator">=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>m<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="other-to-string" tabindex="-1"><a class="header-anchor" href="#other-to-string" aria-hidden="true">#</a> Other To String</h2>`,5),r=a(`<li><p><code>[]byte to string</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> <span class="token keyword">var</span> s1 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),d=a(`<p><code>int64 to string</code></p><blockquote><p>int, int32, int16, int8 \u8F6C\u5341\u8FDB\u5236\u5B57\u7B26\u4E32</p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> <span class="token keyword">var</span> number <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">12</span> <span class="token comment">// \u60A8\u53EF\u4EE5\u5728\u8FD9\u91CC\u4F7F\u7528\u4EFB\u4F55\u6574\u6570: int32, int16, int8</span>
 s <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">FormatInt</span><span class="token punctuation">(</span><span class="token function">int64</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),k=n("code",null,"int",-1),v=n("code",null,"string",-1),m={href:"https://pkg.go.dev/strconv#Itoa",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"strconv.Itoa",-1),g={href:"https://pkg.go.dev/strconv#FormatInt",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"strconv.FormatInt(int64(i), 10)",-1),h=a(`<div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> number <span class="token operator">:=</span> <span class="token number">12</span>
 str <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),q=n("h2",{id:"map-to-other",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#map-to-other","aria-hidden":"true"},"#"),s(" Map To Other")],-1),y=a(`<p><code>map to json string</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">MapToJson</span><span class="token punctuation">(</span>m <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 result<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token function">string</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),_={href:"https://github.com/json-iterator/go",target:"_blank",rel:"noopener noreferrer"},j=a(`<div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>

 jsoniter <span class="token string">&quot;github.com/json-iterator/go&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> json <span class="token operator">=</span> jsoniter<span class="token punctuation">.</span>ConfigCompatibleWithStandardLibrary

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 tmpData <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;eryajf&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span>

 output<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>tmpData<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),w=a(`<li><p><code>map to slice</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">MapToSlice</span><span class="token punctuation">(</span>m <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
  s <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
    s <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> s
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),x=a(`<h2 id="json-to-other" tabindex="-1"><a class="header-anchor" href="#json-to-other" aria-hidden="true">#</a> Json To Other</h2><ul><li><p><code>json to map</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">JsonToMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 jsonStr <span class="token operator">:=</span> <span class="token string">\`{&quot;name&quot;: &quot;eryajf&quot;,&quot;age&quot;: 18}\`</span>
 <span class="token keyword">var</span> mapResult <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
 err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>mapResult<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;JsonToMap err: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>mapResult<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>json to struct</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;encoding/json&quot;</span>
 <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> People <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Name <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot;\`</span>
 Age <span class="token builtin">int</span> <span class="token string">\`json:&quot;age&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 jsonStr <span class="token operator">:=</span> <span class="token string">\`{&quot;name&quot;: &quot;eryajf&quot;,&quot;age&quot;: 18}\`</span>
 <span class="token keyword">var</span> people People
 json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>people<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>people<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> people<span class="token punctuation">.</span>Age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4F7F\u7528\u7B2C\u4E09\u65B9JSON\u5E93\u8FDB\u884C\u89E3\u6790\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>

 jsoniter <span class="token string">&quot;github.com/json-iterator/go&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> People <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Name <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot;\`</span>
 Age <span class="token builtin">int</span> <span class="token string">\`json:&quot;age&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 jsonStr <span class="token operator">:=</span> <span class="token string">\`{&quot;name&quot;: &quot;eryajf&quot;,&quot;age&quot;: 18}\`</span>
 <span class="token keyword">var</span> people People
 json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>people<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>people<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> people<span class="token punctuation">.</span>Age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote></li></ul><h2 id="struct-to-other" tabindex="-1"><a class="header-anchor" href="#struct-to-other" aria-hidden="true">#</a> Struct To Other</h2><ul><li><p><code>struct to json</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;encoding/json&quot;</span>
 <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> People <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Name <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot;\`</span>
 Age <span class="token builtin">int</span> <span class="token string">\`json:&quot;age&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 p <span class="token operator">:=</span> People<span class="token punctuation">{</span>
  Name<span class="token punctuation">:</span> <span class="token string">&quot;eryajf&quot;</span><span class="token punctuation">,</span>
  Age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
 jsonBytes<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>jsonBytes<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u540C\u7406\uFF0C\u8FD9\u91CC\u4ECD\u65E7\u53EF\u4EE5\u501F\u52A9\u7B2C\u4E09\u65B9JSON\u5E93\u8FDB\u884C\u89E3\u6790\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>

 jsoniter <span class="token string">&quot;github.com/json-iterator/go&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> json <span class="token operator">=</span> jsoniter<span class="token punctuation">.</span>ConfigCompatibleWithStandardLibrary

<span class="token keyword">type</span> People <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Name <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot;\`</span>
 Age  <span class="token builtin">int</span>    <span class="token string">\`json:&quot;age&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 p <span class="token operator">:=</span> People<span class="token punctuation">{</span>
  Name<span class="token punctuation">:</span> <span class="token string">&quot;eryajf&quot;</span><span class="token punctuation">,</span>
  Age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
 jsonBytes<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>jsonBytes<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote></li></ul><p>\u672A\u5B8C\u3002\u3002\u3002</p>`,5);function P(S,N){const t=c("ExternalLinkIcon");return o(),i("div",null,[u,n("ul",null,[r,n("li",null,[d,n("blockquote",null,[n("p",null,[s("\u8981\u8F6C\u6362"),k,s("\u4E3A"),v,s("\u4E5F\u53EF\u4EE5\u4F7F\u7528"),n("a",m,[b,e(t)]),s("which \u7B49\u4EF7\u4E8E"),n("a",g,[f,e(t)]),s(".")]),h])])]),q,n("ul",null,[n("li",null,[y,n("blockquote",null,[n("p",null,[s("\u901A\u5E38\u4E5F\u4F1A\u4F7F\u7528\u4E00\u4E9B\u7B2C\u4E09\u65B9\u7684json\u5E93\u8FDB\u884C\u89E3\u6790\uFF0C\u8FD9\u91CC\u63A8\u8350\uFF1A"),n("a",_,[s("github.com/json-iterator/go"),e(t)])]),j])]),w]),x])}const M=p(l,[["render",P],["__file","09.golang\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u6C47\u603B.html.vue"]]);export{M as default};
