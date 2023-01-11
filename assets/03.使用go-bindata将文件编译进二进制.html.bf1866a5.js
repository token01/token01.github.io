import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,a as s,b as n,d as i,f as a,r as c}from"./app.333ff1c5.js";const l={},u=a(`<h1 id="_03-\u4F7F\u7528go-bindata\u5C06\u6587\u4EF6\u7F16\u8BD1\u8FDB\u4E8C\u8FDB\u5236" tabindex="-1"><a class="header-anchor" href="#_03-\u4F7F\u7528go-bindata\u5C06\u6587\u4EF6\u7F16\u8BD1\u8FDB\u4E8C\u8FDB\u5236" aria-hidden="true">#</a> 03.\u4F7F\u7528go-bindata\u5C06\u6587\u4EF6\u7F16\u8BD1\u8FDB\u4E8C\u8FDB\u5236</h1><p>\u5728\u65E5\u5E38\u5F00\u53D1\u5DE5\u4F5C\u4E2D\uFF0C\u6709\u4E00\u4E9B\u914D\u7F6E\u6587\u4EF6\u4E4B\u7C7B\u7684\u9759\u6001\u5185\u5BB9\u6211\u4EEC\u662F\u5265\u79BB\u5728\u9879\u76EE\u4E4B\u5916\u5B58\u5728\u7684\uFF0C\u800C\u5982\u679C\u60F3\u8981\u5B9E\u73B0\u8BE5\u9879\u76EE\u6253\u51FA\u6765\u7684\u4E8C\u8FDB\u5236\u5305\u80FD\u591F\u4E0D\u4F9D\u8D56\u672C\u5730\u9759\u6001\u914D\u7F6E\uFF0C\u968F\u5904\u8FD0\u884C\uFF0C\u9488\u5BF9\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5DF2\u7ECF\u6709\u4E0D\u5C11\u524D\u4EBA\u601D\u8003\u8FC7\u4E86\uFF0C\u8FD9\u7BC7\u6587\u7AE0\u5C31\u662F\u8981\u4ECB\u7ECD\u4E00\u4E2A\u5DE5\u5177\uFF1A</p><p>::: cardList 1</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>bindata
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> \u5C06\u9759\u6001\u6587\u4EF6\u7F16\u8BD1\u5230\u4E8C\u8FDB\u5236
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//avatars2.githubusercontent.com/u/416130<span class="token punctuation">?</span>s=460<span class="token important">&amp;u=8753e86600e300a9811cdc539aa158deec2e2724&amp;v=4</span>
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/go<span class="token punctuation">-</span>bindata/go<span class="token punctuation">-</span>bindata
  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#ffa8a8&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="_1-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5" aria-hidden="true">#</a> 1\uFF0C\u5B89\u88C5</h2><p>\u6B64\u5DE5\u5177\u4F7F\u7528\u65F6\u4F9D\u8D56\u547D\u4EE4\u884C\u5BF9\u6587\u4EF6\u8FDB\u884C\u5904\u7406\uFF0C\u56E0\u6B64\u6211\u4EEC\u5148\u5B89\u88C5\u6B64\u5305\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">go</span> get <span class="token operator">-</span>u github<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token keyword">go</span><span class="token operator">-</span>bindata<span class="token operator">/</span><span class="token keyword">go</span><span class="token operator">-</span>bindata<span class="token operator">/</span><span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u4F60\u7684go\u7248\u672C\u5DF2\u7ECF\u6765\u5230\u4E861.17\uFF0C\u90A3\u4E48\u53EF\u80FD\u4F1A\u9047\u5230\u5982\u4E0B\u62A5\u9519\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ go get <span class="token parameter variable">-u</span> github.com/go-bindata/go-bindata/<span class="token punctuation">..</span>.
go: downloading github.com/go-bindata/go-bindata v1.0.0
go get: installing executables with <span class="token string">&#39;go get&#39;</span> <span class="token keyword">in</span> module mode is deprecated.
 Use <span class="token string">&#39;go install pkg@version&#39;</span> instead.
 For <span class="token function">more</span> information, see https://golang.org/doc/go-get-install-deprecation
 or run <span class="token string">&#39;go help get&#39;</span> or <span class="token string">&#39;go help install&#39;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),r={href:"https://github.com/go-bindata/go-bindata/issues/77",target:"_blank",rel:"noopener noreferrer"},d=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go <span class="token function">install</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-v</span> github.com/go-bindata/go-bindata/<span class="token punctuation">..</span>.@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5\u5B8C\u6210\u4E4B\u540E\uFF0C\u4F1A\u5728\u672C\u5730GOPATH\u76EE\u5F55\u4E0B\u591A\u4E00\u4E2A\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u6211\u4EEC\u5C06\u5176\u653E\u5230\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF\u4E2D\uFF0C\u4EE5\u5907\u65B9\u4FBF\u4F7F\u7528\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token variable">$GOPATH</span>/bin/go-bindata
/Users/liqilong/eryajf/letsgo/project/bin/go-bindata

$ <span class="token function">cp</span> <span class="token variable">$GOPATH</span>/bin/go-bindata /usr/local/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u5982\u4E0B\u547D\u4EE4\u9A8C\u8BC1\u5B89\u88C5\u6210\u529F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ go-bindata <span class="token parameter variable">-version</span>
go-bindata <span class="token number">3.1</span>.3 <span class="token punctuation">(</span>Go runtime go1.14.4<span class="token punctuation">)</span>.
Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2010</span>-2013, Jim Teeuwen.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528" aria-hidden="true">#</a> 2\uFF0C\u4F7F\u7528</h2><p>\u6B64\u65F6\u6211\u4EEC\u6709\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\u5982\u4E0B\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>$ cat .env
<span class="token key atrule">USER</span><span class="token punctuation">:</span> eryajf
<span class="token key atrule">PASS</span><span class="token punctuation">:</span> eryajf.net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u539F\u6765\u5728\u672C\u5730\u8BFB\u53D6\u7684\u65F6\u5019\uFF0C\u7ED3\u5408<code>viper</code>\u5305\uFF0C\u6211\u4EEC\u7684\u59FF\u52BF\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;log&quot;</span>

 <span class="token string">&quot;github.com/spf13/viper&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 viper<span class="token punctuation">.</span><span class="token function">SetConfigFile</span><span class="token punctuation">(</span><span class="token string">&quot;.env&quot;</span><span class="token punctuation">)</span> <span class="token comment">// \u8BFB\u53D6yaml\u914D\u7F6E\u6587\u4EF6</span>
 <span class="token keyword">if</span> err <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">ReadInConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> err<span class="token punctuation">.</span><span class="token punctuation">(</span>viper<span class="token punctuation">.</span>ConfigFileNotFoundError<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
   <span class="token comment">// Config file not found; ignore error if desired</span>
   log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;no such config file&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token comment">// Config file was found but another error was produced</span>
   log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;read config error&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token comment">// \u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\u5931\u8D25\u81F4\u547D\u9519\u8BEF</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7528\u6237\u4E3A:&quot;</span><span class="token punctuation">,</span> viper<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;USER&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5BC6\u7801\u4E3A:&quot;</span><span class="token punctuation">,</span> viper<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;PASS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u53EF\u5F97\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ go run main.go
\u7528\u6237\u4E3A: eryajf
\u5BC6\u7801\u4E3A: eryajf.net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u6211\u4EEC\u628A\u914D\u7F6E\u6587\u4EF6\u901A\u8FC7go-bindata\u51C6\u6362\u6210\u4E00\u4E2Ago\u6587\u4EF6\uFF0C\u64CD\u4F5C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go-bindata <span class="token parameter variable">-o</span><span class="token operator">=</span>./public/config.go <span class="token parameter variable">-pkg</span><span class="token operator">=</span>public .env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>-o</code>\uFF1A\u6307\u5B9A\u6253\u5305\u540E\u751F\u6210\u7684go\u6587\u4EF6\u8DEF\u5F84</li><li><code>-pkg</code>\uFF1A\u6307\u5B9A\u6253\u5305\u540E\u751F\u6210\u7684go\u6587\u4EF6\u7684\u5305\u540D</li><li><code>.env</code>\uFF1A\u6307\u5B9A\u5C06\u8981\u6253\u5305\u7684\u6587\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u76EE\u5F55</li></ul><p>\u6253\u5305\u547D\u4EE4\u6267\u884C\u540E\uFF0C\u53EF\u4EE5\u770B\u5230\u751F\u6210\u4E86\u4E00\u4E2Apublic\u76EE\u5F55\uFF0C\u800C\u4E14\u591A\u4E86\u4E00\u4E2Aconfig.go\u6587\u4EF6\u3002</p><p>\u6B64\u65F6\u4E3Bmain\u5305\u6539\u9020\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;bytes&quot;</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;notify-demo/public&quot;</span>

 <span class="token string">&quot;github.com/spf13/viper&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fileobj<span class="token punctuation">,</span> err <span class="token operator">:=</span> public<span class="token punctuation">.</span><span class="token function">Asset</span><span class="token punctuation">(</span><span class="token string">&quot;.env&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Asset file err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 viper<span class="token punctuation">.</span><span class="token function">SetConfigType</span><span class="token punctuation">(</span><span class="token string">&quot;yaml&quot;</span><span class="token punctuation">)</span>
 err <span class="token operator">=</span> viper<span class="token punctuation">.</span><span class="token function">ReadConfig</span><span class="token punctuation">(</span>bytes<span class="token punctuation">.</span><span class="token function">NewBuffer</span><span class="token punctuation">(</span>fileobj<span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Read Config err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7528\u6237\u4E3A:&quot;</span><span class="token punctuation">,</span> viper<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;USER&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5BC6\u7801\u4E3A:&quot;</span><span class="token punctuation">,</span> viper<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;PASS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u53EF\u5F97\u7ED3\u679C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ go run main.go
\u7528\u6237\u4E3A: eryajf
\u5BC6\u7801\u4E3A: eryajf.net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u5373\u4FBF\u6211\u4EEC\u628A\u672C\u5730\u7684.env\u5220\u9664\uFF0C\u4E5F\u4E0D\u4F1A\u5F71\u54CD\u9879\u76EE\u8FD0\u884C\u4E86\u3002</p>`,21);function k(v,m){const e=c("ExternalLinkIcon");return p(),o("div",null,[u,s("p",null,[n("\u6B64\u65F6\u53EF\u5C06\u547D\u4EE4\u66F4\u6539\u5982\u4E0B("),s("a",r,[n("\u53C2\u8003"),i(e)]),n(")\uFF1A")]),d])}const f=t(l,[["render",k],["__file","03.\u4F7F\u7528go-bindata\u5C06\u6587\u4EF6\u7F16\u8BD1\u8FDB\u4E8C\u8FDB\u5236.html.vue"]]);export{f as default};
