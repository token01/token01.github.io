import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,a as n,b as p,d as c,f as o,r as i}from"./app.62e9bec7.js";const l={},u=o(`<h1 id="vue\u81EA\u5B9A\u4E49\u9632\u6296\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#vue\u81EA\u5B9A\u4E49\u9632\u6296\u6307\u4EE4" aria-hidden="true">#</a> Vue\u81EA\u5B9A\u4E49\u9632\u6296\u6307\u4EE4</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u9879\u76EE\u4E2D\u7ECF\u5E38\u4F1A\u9047\u5230\u8BF4\uFF0C\u4E00\u4E2A\u6309\u94AE\u56E0\u4E3A\u7F51\u7EDCIO\u7B49\u95EE\u9898\uFF0C\u53EF\u80FD\u8FD8\u5728\u8BF7\u6C42\u8FC7\u7A0B\u4E2D\uFF0C\u7528\u6237\u8FDE\u7EED\u70B9\u51FB\u3002\u5BFC\u81F4\u91CD\u590D\u53D1\u9001\u8BF7\u6C42\u3002</p><p>\u8FD9\u79CD\u60C5\u51B5\u4E0B\u6211\u4EEC\u4F7F\u7528\u9632\u6296/\u8282\u6D41\u5C31\u80FD\u5F88\u597D\u7684\u89E3\u51B3\uFF0C\u5B9E\u73B0\u5F97\u65B9\u6848\u6709\u5F88\u591A\uFF0C\u4F46\u662F\u81EA\u5B9A\u4E49\u6307\u4EE4\u7684\u65B9\u5F0F\u662F\u6700\u7B80\u5355\u7684\u3002\u540E\u9762\u6709\u9700\u8981\u4F7F\u7528\u9632\u6296\u7684\u5730\u65B9\u53EA\u8981\u4F7F\u7528\u6539\u6307\u4EE4\u5373\u53EF\u3002</p><h2 id="_2-\u539F\u59CB\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#_2-\u539F\u59CB\u60C5\u51B5" aria-hidden="true">#</a> 2. \u539F\u59CB\u60C5\u51B5</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sayHello<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u63D0\u4EA4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello!&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u6211\u4EEC\u8FDE\u7EED\u70B9\u51FB\u591A\u6B21\uFF0C\u63A7\u5236\u53F0\u4F1A\u8F93\u51FA\u591A\u6B21 Hello!</p><h2 id="_3-\u6211\u60F3\u8FBE\u5230\u7684\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#_3-\u6211\u60F3\u8FBE\u5230\u7684\u6548\u679C" aria-hidden="true">#</a> 3. \u6211\u60F3\u8FBE\u5230\u7684\u6548\u679C\uFF1A</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-throttle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>\u201C200\u201D</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sayHello<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u63D0\u4EA4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u901A\u8FC7\u6B64\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u8BA9\u63D0\u4EA4\u6309\u94AE\u5728200ms\u5185\u7684\u591A\u6B21\u70B9\u51FB\u53EA\u80FD\u6267\u884C\u4E00\u6B21\uFF0C\u5E76\u4E14\u521A\u70B9\u51FB\u65F6\u5C31\u6267\u884C\u3002\u82E5\u4E0D\u8BBE\u7F6E\u65F6\u95F4\uFF08200\uFF09\uFF0C\u5219\u9ED8\u8BA42000ms\u5185\u53EA\u6267\u884C\u4E00\u6B21\u3002</p><h2 id="_4-\u9632\u6296-\u8282\u6D41\u7684\u533A\u522B\u548C\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#_4-\u9632\u6296-\u8282\u6D41\u7684\u533A\u522B\u548C\u9009\u62E9" aria-hidden="true">#</a> 4. \u9632\u6296 / \u8282\u6D41\u7684\u533A\u522B\u548C\u9009\u62E9</h2><h3 id="_4-1-\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#_4-1-\u89E3\u91CA" aria-hidden="true">#</a> 4.1 \u89E3\u91CA</h3><ul><li><p>\u8282\u6D41</p><p>\u6307\u4E00\u5B9A\u65F6\u95F4\u5185js\u65B9\u6CD5\u53EA\u8DD1\u4E00\u6B21\u3002\u6BD4\u5982\u4EBA\u7684\u7728\u773C\u775B\uFF0C\u5C31\u662F\u4E00\u5B9A\u65F6\u95F4\u5185\u7728\u4E00\u6B21\u3002\u8FD9\u662F\u51FD\u6570\u3002</p></li><li><p>\u9632\u6296</p><p>\u6307\u9891\u7E41\u89E6\u53D1\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EA\u6709\u8DB3\u591F\u7684\u7A7A\u95F2\u65F6\u95F4\uFF0C\u624D\u6267\u884C\u4EE3\u7801\u4E00\u6B21\u3002\u6BD4\u5982\u751F\u6D3B\u4E2D\u7684\u5750\u516C\u4EA4\uFF0C\u5C31\u662F\u4E00\u5B9A\u65F6\u95F4\u5185\uFF0C\u5982\u679C\u6709\u4EBA\u9646\u7EED\u5237\u5361\u4E0A\u8F66\uFF0C\u53F8\u673A\u5C31\u4E0D\u4F1A\u5F00\u8F66\u3002\u53EA\u6709\u522B\u4EBA\u6CA1\u5237\u5361\u4E86\uFF0C\u53F8\u673A\u624D\u5F00\u8F66\u3002</p></li></ul><h3 id="_4-2-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_4-2-\u533A\u522B" aria-hidden="true">#</a> 4.2 \u533A\u522B</h3><p>\u5728\u6211\u770B\u6765\u5B83\u4EEC\u7684\u5DEE\u522B\u5728\u4E8E\u5E94\u7528\u573A\u666F\uFF0C\u4E3E\u4F8B\u5982\u4E0B\uFF1A</p><p>\u3010\u5E94\u7528\u573A\u666F\u3011\uFF1A\u5206\u522B\u5728\u65F6\u95F4\u6BB50.2s,0.4s,0.6s,0.8s\u8FDB\u884C\u8FDE\u7EED\u70B9\u51FB\uFF0C\u89E6\u53D1searchAPI\u3002</p><p>\u3010\u9632\u6296\u540E\u7684\u6548\u679C\u3011\uFF1A0.8s\u540E\u624D\u771F\u6B63\u8FDB\u884CsearchAPI\u7684\u53D1\u9001\uFF1B</p><p>\u3010\u8282\u6D41\u7684\u6548\u679C\u3011\uFF1A0.2s\u65F6\u53D1\u73B0\u6709\u4EBA\u70B9\u51FB\uFF0C\u7ACB\u5373\u89E6\u53D1searchAPI\u63A5\u53E3\uFF0C\u5E76\u4E14\u5728x\u79D2\u5185\uFF0C\u7528\u6237\u70B9\u51FB\u65E0\u6548\u3002</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f58e1a53d1a476db7dbea470ad29b57~tplv-k3u1fbpfcp-watermark.awebp" alt="img"></p><h3 id="_4-3-\u5982\u4F55\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#_4-3-\u5982\u4F55\u9009\u62E9" aria-hidden="true">#</a> 4.3 \u5982\u4F55\u9009\u62E9</h3><p>\u6211\u8FD9\u8FB9\u9700\u8981\u5728\u7528\u6237\u521A\u70B9\u51FB\u7684\u65F6\u5019\u5C31\u7ACB\u5373\u54CD\u5E94\uFF0C\u540E\u9762\u51E0\u79D2\u949F\u7684\u70B9\u51FB\u65E0\u6548\uFF0C\u662F\u8282\u6D41\u7684\u6548\u679C\uFF0C\u6240\u4EE5\u9009\u62E9\u8282\u6D41\u3002</p><h2 id="_5-\u5982\u4F55\u521B\u5EFA\u81EA\u5B9A\u4E49\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#_5-\u5982\u4F55\u521B\u5EFA\u81EA\u5B9A\u4E49\u6307\u4EE4" aria-hidden="true">#</a> 5. \u5982\u4F55\u521B\u5EFA\u81EA\u5B9A\u4E49\u6307\u4EE4</h2><h3 id="_5-1-\u9009\u62E9\u5408\u9002\u7684\u94A9\u5B50\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_5-1-\u9009\u62E9\u5408\u9002\u7684\u94A9\u5B50\u51FD\u6570" aria-hidden="true">#</a> 5.1 \u9009\u62E9\u5408\u9002\u7684\u94A9\u5B50\u51FD\u6570</h3><p>\u81EA\u5B9A\u4E49\u6307\u4EE4\u7684\u94A9\u5B50\u51FD\u6570\uFF1Abind\uFF0Cinserted\uFF0Cupdate\uFF0CcomponentUpdated\uFF0Cunbind</p><p>\u6211\u9009\u7528bind\uFF0C\u53EA\u9700\u8981\u4E00\u6B21\u6027\u7684\u521D\u59CB\u5316\u5C31\u591F\u4E86\u3002</p><h3 id="_5-2-\u94A9\u5B50\u51FD\u6570\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_5-2-\u94A9\u5B50\u51FD\u6570\u53C2\u6570" aria-hidden="true">#</a> 5.2 \u94A9\u5B50\u51FD\u6570\u53C2\u6570</h3><p>el\uFF1A\u53EF\u76F4\u63A5\u64CD\u4F5CDOM(\u4F8B\u5982\uFF0C <code>el.addEventListener</code> , <code>el.onclick</code> )\u3002</p><p>binding\uFF1A\u53EF\u901A\u8FC7value\u83B7\u5F97\u6307\u4EE4\u7ED1\u5B9A\u503C\u3002</p><h3 id="_5-3-\u601D\u8003-\u5982\u4F55\u5728\u4E0D\u59A8\u788D\u539F\u672Cclick\u4E8B\u4EF6\u7684\u60C5\u51B5\u4E0B-\u6DFB\u52A0\u76D1\u542Cclick\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5-3-\u601D\u8003-\u5982\u4F55\u5728\u4E0D\u59A8\u788D\u539F\u672Cclick\u4E8B\u4EF6\u7684\u60C5\u51B5\u4E0B-\u6DFB\u52A0\u76D1\u542Cclick\u4E8B\u4EF6" aria-hidden="true">#</a> 5.3 \u601D\u8003\uFF1A\u5982\u4F55\u5728\u4E0D\u59A8\u788D\u539F\u672Cclick\u4E8B\u4EF6\u7684\u60C5\u51B5\u4E0B\uFF0C\u6DFB\u52A0\u76D1\u542Cclick\u4E8B\u4EF6</h3><blockquote><p>onclick\u4E8B\u4EF6\u7684\u5904\u7406\u7A0B\u5E8F\u5728\u6709\u591A\u4E2A\u7684\u60C5\u51B5\u4E0B\uFF0C\u540E\u8005\u4F1A\u8986\u76D6\u524D\u8005\u3002addEventListener\u7ED9\u4E00\u4E2A\u4E8B\u4EF6\u6CE8\u518C\u591A\u4E2Alistener\uFF0C\u4E0D\u4F1A\u51FA\u73B0\u8986\u76D6\u7684\u60C5\u51B5\u3002</p></blockquote><p>\u5F53\u7136\u662F\u4F7F\u7528<code>addEventListener</code>\uFF08<em>IE\u6D4F\u89C8\u5668\u8981\u7528 <code>attachEvent</code> \uFF0C\u7136\u800C\u6211\u7684\u9879\u76EE\u4E2D\u53EA\u9700\u8981\u652F\u6301chrome\u5373\u53EF\uFF0C\u5C31\u4E0D\u8003\u8651\u5566</em>\uFF09</p><h2 id="_6-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_6-\u5B9E\u73B0" aria-hidden="true">#</a> 6. \u5B9E\u73B0</h2><h3 id="_6-1-\u5B9A\u4E49\u9632\u6296\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#_6-1-\u5B9A\u4E49\u9632\u6296\u6307\u4EE4" aria-hidden="true">#</a> 6.1 \u5B9A\u4E49\u9632\u6296\u6307\u4EE4\uFF1A</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;throttle&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">bind</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> throttleTime <span class="token operator">=</span> binding<span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// \u9632\u6296\u65F6\u95F4</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>throttleTime<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u7528\u6237\u82E5\u4E0D\u8BBE\u7F6E\u9632\u6296\u65F6\u95F4\uFF0C\u5219\u9ED8\u8BA42s</span>
      throttleTime <span class="token operator">=</span> <span class="token number">2000</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> cbFun<span class="token punctuation">;</span>
    el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cbFun<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u7B2C\u4E00\u6B21\u6267\u884C</span>
        cbFun <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          cbFun <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> throttleTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        event <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span><span class="token function">stopImmediatePropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-\u4F7F\u7528\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#_6-2-\u4F7F\u7528\u6307\u4EE4" aria-hidden="true">#</a> 6.2 \u4F7F\u7528\u6307\u4EE4\uFF1A</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sayHello<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-throttle</span><span class="token punctuation">&gt;</span></span>\u63D0\u4EA4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello!&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,39),r={href:"https://juejin.cn/post/6844903944653651981",target:"_blank",rel:"noopener noreferrer"};function d(k,h){const a=i("ExternalLinkIcon");return t(),e("div",null,[u,n("p",null,[n("a",r,[p("\u3010\u5B9E\u6218\u3011Vue\u81EA\u5B9A\u4E49\u9632\u6296\u6307\u4EE4"),c(a)])])])}const b=s(l,[["render",d],["__file","vue-shake-instructions.html.vue"]]);export{b as default};
