import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.89148984.js";const p={},e=t(`<h1 id="_01-go\u65E5\u5E38\u5F00\u53D1\u4EE3\u7801\u7247\u6BB5" tabindex="-1"><a class="header-anchor" href="#_01-go\u65E5\u5E38\u5F00\u53D1\u4EE3\u7801\u7247\u6BB5" aria-hidden="true">#</a> 01.go\u65E5\u5E38\u5F00\u53D1\u4EE3\u7801\u7247\u6BB5</h1><h2 id="\u83B7\u53D6\u7EC8\u7AEF\u8F93\u5165" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u7EC8\u7AEF\u8F93\u5165" aria-hidden="true">#</a> \u83B7\u53D6\u7EC8\u7AEF\u8F93\u5165</h2><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4F7F\u7528fmt\u5305\u7684scan\u65B9\u6CD5\u6765\u83B7\u53D6\u7EC8\u7AEF\u8F93\u5165\u5185\u5BB9\uFF0C\u4F46\u662F\u8FD9\u53EF\u80FD\u4F1A\u6709\u4E00\u4E2A\u95EE\u9898\uFF0C\u5982\u679C\u8F93\u5165\u5185\u5BB9\u6709\u7A7A\u683C\u6216\u8005\u6362\u884C\uFF0C\u5C31\u4E0D\u9002\u7528\u4E86\uFF0C\u56E0\u6B64\uFF0C\u53EF\u4EE5\u901A\u8FC7bufio\u6765\u5B9E\u73B0\u83B7\u53D6\u8F93\u5165\u7684\u529F\u80FD\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;bufio&quot;</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">input1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> s <span class="token builtin">string</span>
 fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u5185\u5BB9\uFF1A&quot;</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8F93\u5165\u7684\u5185\u5BB9\u4E3A\uFF1A%s\\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">input2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> s <span class="token builtin">string</span>
 reader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdin<span class="token punctuation">)</span>
 s<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">=</span> reader<span class="token punctuation">.</span><span class="token function">ReadString</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span> <span class="token comment">//\u6307\u5B9A\u83B7\u53D6\u8F93\u5165\u65F6\u7684\u5206\u9694\u6807\u8BC6</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8F93\u5165\u7684\u5185\u5BB9\u4E3A:%s\\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u95EE\u9898\u5728\u4E8E\uFF0C\u5F53\u7528\u6237\u8F93\u5165\u5185\u5BB9\u4E3A  a b c\u65F6\uFF0C\u7A0B\u5E8F\u83B7\u53D6\u5230\u7684\u53EA\u6709a\uFF0C\u4EA6\u5373\u7A7A\u683C\u5373\u88AB\u622A\u65AD</span>
 <span class="token comment">// input1()</span>
 <span class="token function">input2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u751F\u6210\u4E00\u4E2A\u968F\u673A\u6570" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u4E00\u4E2A\u968F\u673A\u6570" aria-hidden="true">#</a> \u751F\u6210\u4E00\u4E2A\u968F\u673A\u6570</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;math/rand&quot;</span>
 <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// \u8BBE\u7F6E\u4E00\u4E2A\u65F6\u95F4\u79CD\u5B50</span>
 rand<span class="token punctuation">.</span><span class="token function">Seed</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token comment">// \u8868\u793A\u968F\u673A\u8FD4\u56DE\u4E00\u4E2A0\u5230100\u4E4B\u95F4\u7684\u6570\u5B57</span>
 s <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u83B7\u53D6\u4E3B\u673Aip" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u4E3B\u673Aip" aria-hidden="true">#</a> \u83B7\u53D6\u4E3B\u673AIP</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;net&quot;</span>
 <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">GetOutboundIP</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ip <span class="token builtin">string</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;udp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;8.8.8.8:80&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 localAddr <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">LocalAddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>net<span class="token punctuation">.</span>UDPAddr<span class="token punctuation">)</span>
 <span class="token comment">//fmt.Println(localAddr.String())</span>
 ip <span class="token operator">=</span> strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>localAddr<span class="token punctuation">.</span>IP<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
 <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 ip<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">GetOutboundIP</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u6548\u679C\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token punctuation">[</span>root@ops<span class="token operator">-</span>eryajf<span class="token operator">-</span>test<span class="token operator">-</span><span class="token number">1</span> test<span class="token punctuation">]</span>$<span class="token keyword">go</span> run main<span class="token punctuation">.</span><span class="token keyword">go</span>
<span class="token number">10.3</span><span class="token number">.0</span><span class="token number">.41</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5982\u4F55\u83B7\u53D6\u4E00\u5468\u524D-\u4E00\u5929\u524D\u7684\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u83B7\u53D6\u4E00\u5468\u524D-\u4E00\u5929\u524D\u7684\u65F6\u95F4" aria-hidden="true">#</a> \u5982\u4F55\u83B7\u53D6\u4E00\u5468\u524D,\u4E00\u5929\u524D\u7684\u65F6\u95F4</h2><p>\u83B7\u53D6\u4E00\u5929\u524D\u6216\u8005\u4E00\u5468\u524D\u5E94\u8BE5\u662F\u65E5\u5E38\u5F53\u4E2D\u7ECF\u5E38\u9047\u5230\u7684\u573A\u666F\uFF0C\u8FD9\u91CC\u8BF4\u4E00\u4E0Bgo\u5F53\u4E2D\u7684\u5B9E\u73B0\u65B9\u5F0F\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;fmt&quot;</span>
  <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//Add\u65B9\u6CD5\u548CSub\u65B9\u6CD5\u662F\u76F8\u53CD\u7684\uFF0C\u83B7\u53D6t0\u548Ct1\u7684\u65F6\u95F4\u8DDD\u79BBd\u662F\u4F7F\u7528Sub</span>
<span class="token comment">//\u5C06t0\u52A0d\u83B7\u53D6t1\u5C31\u662F\u4F7F\u7528Add\u65B9\u6CD5</span>
  k <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">//\u4E00\u5929\u4E4B\u524D</span>
  d<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">ParseDuration</span><span class="token punctuation">(</span><span class="token string">&quot;-24h&quot;</span><span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token comment">//\u4E00\u5468\u4E4B\u524D</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>d <span class="token operator">*</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token comment">//\u4E00\u6708\u4E4B\u524D</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>d <span class="token operator">*</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FB9\u4F8B\u5B50\u6BD4\u8F83\u6709\u610F\u4E49\u7684\u662F\u4E00\u5468\u4E4B\u524D\uFF0C\u4E00\u5929\u4E4B\u524D\u6216\u8005\u4E00\u6708\u4E4B\u524D\u7684\u7B97\u6CD5\uFF0C\u66F4\u591A\u7528\u5982\u4E0B\u65B9\u5F0F\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>t <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u8BA1\u7B97\u524D\u4E00\u5929, \u5F53\u524D\u65F6\u95F4\u52A0\u4E0A0\u5E74\uFF0C0\u6708\uFF0C-1\u5929</span>
t1 <span class="token operator">:=</span> t<span class="token punctuation">.</span><span class="token function">AddDate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
 
<span class="token comment">// \u8BA1\u7B97\u4E0A\u4E00\u4E2A\u6708\u65F6\u95F4,\u5F53\u524D\u65F6\u95F4\u52A0\u4E0A0\u5E74\uFF0C-1\u6708\uFF0C0\u5929</span>
t1 <span class="token operator">:=</span> t<span class="token punctuation">.</span><span class="token function">AddDate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u5728\u5207\u7247\u5217\u8868\u91CC" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u5728\u5207\u7247\u5217\u8868\u91CC" aria-hidden="true">#</a> \u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u5728\u5207\u7247\u5217\u8868\u91CC</h2><p>\u6709\u65F6\u5019\u6211\u4EEC\u4F1A\u901A\u8FC7\u904D\u5386\u62FF\u5230\u6570\u636E\uFF0C\u4F46\u662F\u8FD9\u4E9B\u6570\u636E\u5F53\u4E2D\u7684\u90E8\u5206\u5185\u5BB9\u662F\u6211\u4EEC\u7279\u522B\u5173\u5FC3\u7684\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u51FA\u73B0\u4E86\u4E00\u4E2A\u573A\u666F\uFF1A\u904D\u5386\u7684\u65F6\u5019\u5982\u4F55\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u5728\u81EA\u5DF1\u5173\u5FC3\u7684\u5217\u8868\u5F53\u4E2D\uFF1F</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Find</span><span class="token punctuation">(</span>slice <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> val <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i<span class="token punctuation">,</span> item <span class="token operator">:=</span> <span class="token keyword">range</span> slice <span class="token punctuation">{</span>
        <span class="token keyword">if</span> item <span class="token operator">==</span> val <span class="token punctuation">{</span>
            <span class="token keyword">return</span> i<span class="token punctuation">,</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
\u3000\u3000dataList <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;test2&quot;</span><span class="token punctuation">}</span>
\u3000\u3000
\u3000\u3000dataStr <span class="token operator">:=</span> <span class="token string">&quot;test1&quot;</span>\u3000\u3000
\u3000\u3000<span class="token comment">// \u4F20\u5165\u5207\u7247 \u548C \u8981\u67E5\u627E\u7684\u5B57\u7B26\u4E32</span>
\u3000\u3000<span class="token boolean">_</span><span class="token punctuation">,</span> flag <span class="token operator">:=</span> <span class="token function">Find</span><span class="token punctuation">(</span>dataList<span class="token punctuation">,</span> dataStr<span class="token punctuation">)</span>
\u3000\u3000<span class="token keyword">if</span> flag <span class="token punctuation">{</span>
\u3000\u3000\u3000\u3000fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B58\u5728 -&gt; &quot;</span><span class="token punctuation">,</span> dataStr<span class="token punctuation">)</span>
\u3000\u3000<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
\u3000\u3000\u3000\u3000fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E0D\u5B58\u5728 -&gt; &quot;</span><span class="token punctuation">,</span> dataStr<span class="token punctuation">)</span>
\u3000\u3000<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u5C31\u53EF\u4EE5\u501F\u52A9\u4E8E\u4E0A\u8FB9\u7684\u8FD9\u4E2A\u5C0F\u5DE5\u5177\u6765\u5FEB\u901F\u8FC7\u6EE4\u6216\u8005\u5224\u65AD\u5BF9\u5E94\u7684\u5B57\u7B26\u4E32\u662F\u5426\u662F\u81EA\u5DF1\u60F3\u8981\u7684\u4E86\u3002</p>`,19),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","01.go\u65E5\u5E38\u5F00\u53D1\u4EE3\u7801\u7247\u6BB5.html.vue"]]);export{k as default};
