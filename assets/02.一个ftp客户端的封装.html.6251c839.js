import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as e,a as n,b as s,d as o,f as c,r as i}from"./app.f5d9e013.js";const l={},u=n("h1",{id:"_02-\u4E00\u4E2Aftp\u5BA2\u6237\u7AEF\u7684\u5C01\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_02-\u4E00\u4E2Aftp\u5BA2\u6237\u7AEF\u7684\u5C01\u88C5","aria-hidden":"true"},"#"),s(" 02.\u4E00\u4E2Aftp\u5BA2\u6237\u7AEF\u7684\u5C01\u88C5")],-1),r=n("p",null,"\u516C\u53F8\u4E00\u4E2A\u4E1A\u52A1\u7684\u7A0B\u5E8F\u9700\u8981\u89E3\u6790\u4E00\u4E9B\u5916\u90E8\u6570\u636E\uFF0C\u800C\u8FD9\u4E9B\u6570\u636E\u9700\u8981\u6BCF\u5929\u5B9A\u65F6\u4ECE\u5916\u90E8ftp\u70B9\u62C9\u53D6\uFF0C\u5E38\u7406\u6765\u8BB2\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528Linux\u4E2D\u7684lftp\u6765\u8FDB\u884Cdownload\uFF0C\u4F46\u662F\u8FD9\u6837\u5B9A\u4E49\u7684\u811A\u672C\uFF0C\u5C06\u4F1A\u628A\u8FDE\u63A5ftp\u7684\u7528\u6237\u540D\u5BC6\u7801\u7B49\u4FE1\u606F\u66B4\u6F0F\u5728\u5916\uFF0C\u4E0D\u591F\u5B89\u5168\u3002",-1),k=n("p",null,"\u6700\u8FD1\u5728\u5B66go\uFF0C\u56E0\u6B64\u60F3\u7740\u7528go\u8BED\u8A00\u6765\u5BF9\u529F\u80FD\u505A\u4E00\u4E0B\u5C01\u88C5\u3002",-1),d=n("p",null,"\u9700\u6C42\u4E5F\u975E\u5E38\u7B80\u5355\uFF1A",-1),v=n("ol",null,[n("li",null,"\u5236\u4F5C\u4E00\u4E2Aftp\u5BA2\u6237\u7AEF\u5DE5\u5177\uFF0C\u4E0D\u5FC5\u914D\u7F6E\u5176\u4ED6\u5185\u5BB9\uFF0C\u5C06\u7528\u6237\u540D\u5BC6\u7801\u8FDE\u63A5\u5730\u5740\u5C01\u88C5\u8FDB\u53BB\u3002"),n("li",null,"\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u884C\u6307\u5B9A\u8981\u4E0B\u8F7D\u7684\u6587\u4EF6\uFF0C\u4E0B\u8F7D\u5230\u6307\u5B9A\u4F4D\u7F6E\u3002")],-1),m={href:"https://github.com/jlaffaye/ftp",target:"_blank",rel:"noopener noreferrer"},f=c(`<p>\u5C31\u6B64\u5F00\u59CB\uFF0C\u6211\u4E5F\u5F00\u542F\u4E86\u4EBA\u751F\u7B2C\u4E00\u6B21\u81EA\u4E3B\u5730\u5F00\u53D1\u4E00\u4E2A\u7B80\u5355\u7684\u5C0F\u5DE5\u5177\u3002</p><p>\u6700\u7EC8\u5199\u51FA\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;flag&quot;</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;github.com/jlaffaye/ftp&quot;</span>
 <span class="token string">&quot;io/ioutil&quot;</span>
 <span class="token string">&quot;os&quot;</span>
 <span class="token string">&quot;strings&quot;</span>
 <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// \u901A\u8FC7ftp\u5185\u7F6E\u7684Dial\u8FDE\u63A5\u8FDC\u7A0Bftp,\u83B7\u5F97\u4E00\u4E2A\u8FDE\u63A5\u5BF9\u8C61c</span>
 c<span class="token punctuation">,</span> err <span class="token operator">:=</span> ftp<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;192.168.0.22:21&quot;</span><span class="token punctuation">,</span> ftp<span class="token punctuation">.</span><span class="token function">DialWithTimeout</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;conn ftp failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token comment">// Login \u4F7F\u7528\u7528\u6237\u540D\u5BC6\u7801\u8FDB\u884C\u8BA4\u8BC1</span>
 err <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">Login</span><span class="token punctuation">(</span><span class="token string">&quot;ftp_usera&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;login ftp failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token comment">// \u6B64\u5904\u5B9A\u4E49\u4E00\u4E2A\u547D\u4EE4\u884C\u53C2\u6570\uFF0C\u4EE5\u5B9A\u4E49\u5C06\u8981\u4E0B\u8F7D\u7684\u6587\u4EF6\uFF0C\u5982\u679C\u6587\u4EF6\u4E0D\u5728\u6839\u76EE\u5F55\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5168\u8DEF\u5F84</span>
 name <span class="token operator">:=</span> flag<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;test-file.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u8BF7\u8F93\u5165\u5C06\u8981\u4E0B\u8F7D\u7684\u6587\u4EF6\u8DEF\u5F84&quot;</span><span class="token punctuation">)</span>
 flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\u7684\u5BF9\u8C61</span>
 r<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Retr</span><span class="token punctuation">(</span><span class="token operator">*</span>name<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;retr file failed, err&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token comment">// \u4F7F\u7528ioutil\u8BFB\u53D6\u521A\u521A\u5BF9\u8C61\u7684\u5185\u5BB9</span>
 buf<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;read file failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token comment">// \u5B9A\u4E49\u6587\u4EF6\u4E0B\u8F7D\u4E4B\u540E\u4FDD\u5B58\u5728\u672C\u5730\u7684\u8DEF\u5F84\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u662F\u4E00\u4E2A\u56FA\u5B9A\u7684\u4F4D\u7F6E\uFF0C\u56E0\u6B64\u5199\u6B7B\u4E86\uFF0C\u5728\u56FA\u5B9A\u8DEF\u5F84\u4E0B\uFF0C\u6309\u5929\u8FDB\u884C\u5206\u5272\u4FDD\u5B58</span>
 path <span class="token operator">:=</span> <span class="token string">&quot;/data/www/storage/jzbbankcode&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">&quot;20060102&quot;</span><span class="token punctuation">)</span>
 err <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token function">MkdirAll</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token number">0755</span><span class="token punctuation">)</span> <span class="token comment">//\u5148\u521B\u5EFA\u5982\u4E0A\u5B9A\u4E49\u7684\u8DEF\u5F84</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;mkdir directory failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token comment">// \u901A\u8FC7\u622A\u53D6\u5B9A\u4E49\u7528\u6237\u8F93\u5165\u7684\u6587\u4EF6\u8DEF\u5F84\u6700\u540E\u4E00\u6BB5\uFF0C\u4ECE\u800C\u83B7\u53D6\u5230\u6587\u4EF6\u540D\uFF0C\u4EE5\u653E\u5165\u672C\u5730</span>
 s1 <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span><span class="token operator">*</span>name<span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
 _file <span class="token operator">:=</span> path <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> s1<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
 err <span class="token operator">=</span> ioutil<span class="token punctuation">.</span><span class="token function">WriteFile</span><span class="token punctuation">(</span>_file<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0644</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;write file failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5404\u5904\u5173\u952E\u5730\u65B9\u90FD\u5DF2\u7ECF\u8FDB\u884C\u6CE8\u91CA\u4E86\uFF0C\u6B64\u65F6\u53EF\u4EE5\u7F16\u8BD1\u4E00\u4E0B\u7A0B\u5E8F\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">go</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u67E5\u770B\u5E2E\u52A9\u4FE1\u606F\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>$ <span class="token punctuation">.</span><span class="token operator">/</span>gftp <span class="token operator">-</span>h
Usage of <span class="token punctuation">.</span><span class="token operator">/</span>gftp<span class="token punctuation">:</span>
  <span class="token operator">-</span>file <span class="token builtin">string</span>
        \u8BF7\u8F93\u5165\u5C06\u8981\u4E0B\u8F7D\u7684\u6587\u4EF6\u8DEF\u5F84 <span class="token punctuation">(</span><span class="token keyword">default</span> <span class="token string">&quot;test-file.txt&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function b(g,q){const a=i("ExternalLinkIcon");return p(),e("div",null,[u,r,k,d,v,n("p",null,[s("\u641E\u7A0B\u5E8F\u90FD\u662F\u9762\u5411GitHub\u7F16\u7A0B\uFF0C\u6211\u5E76\u4E0D\u4F1A\u51ED\u7A7A\u5199\u4EC0\u4E48\u4E1C\u897F\uFF0C\u4E8E\u662F\u4E5F\u4E00\u6837\u5148\u53BB\u627E\u4E86\u4E00\u4E0B\u5173\u4E8Eftp\u7684\u8F6E\u5B50\uFF0C\u6700\u540E\u627E\u5230\u4E86"),n("a",m,[s("github.com/jlaffaye/ftp"),o(a)]),s("\u3002")]),f])}const w=t(l,[["render",b],["__file","02.\u4E00\u4E2Aftp\u5BA2\u6237\u7AEF\u7684\u5C01\u88C5.html.vue"]]);export{w as default};
