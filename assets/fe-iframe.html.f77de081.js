import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a,b as i,d as c,f as l,r as o}from"./app.55a3f9ac.js";const r={},p=l(`<h1 id="iframe" tabindex="-1"><a class="header-anchor" href="#iframe" aria-hidden="true">#</a> iframe</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1.\u7B80\u4ECB</h2><p>\u5728\u9875\u9762\u5D4C\u5957iframe\u6807\u7B7E\uFF0C\u6307\u5B9Asrc\u5C31\u53EF\u4EE5\u5C55\u793A\u4E00\u4E2A\u5916\u90E8\u7684url</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>www.baidu.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>iframe \u6807\u7B7E\u529F\u80FD\u5F3A\u5927\uFF0C\u4F46\u4E5F\u662F\u80FD\u8017\u6700\u9AD8\u7684\u4E00\u4E2A\u539F\u751F\uFF0C\u5B89\u5168\u6027\u4E5F\u5DEE\u3002\u5728\u4F7F\u7528\u65F6\u8981\u6743\u8861\u4F7F\u7528</p><h2 id="_2-\u57FA\u7840\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a> 2. \u57FA\u7840\u4F7F\u7528</h2><p>\u57FA\u7840\u4F7F\u7528</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>www.baidu.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5E38\u7528\u5C5E\u6027</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.frameborder:\u662F\u5426\u663E\u793A\u8FB9\u6846\uFF0C1(yes),0(no)

2.height:\u6846\u67B6\u4F5C\u4E3A\u4E00\u4E2A\u666E\u901A\u5143\u7D20\u7684\u9AD8\u5EA6\uFF0C\u5EFA\u8BAE\u5728\u4F7F\u7528css\u8BBE\u7F6E\u3002

3.width:\u6846\u67B6\u4F5C\u4E3A\u4E00\u4E2A\u666E\u901A\u5143\u7D20\u7684\u5BBD\u5EA6\uFF0C\u5EFA\u8BAE\u4F7F\u7528css\u8BBE\u7F6E\u3002

4.name:\u6846\u67B6\u7684\u540D\u79F0\uFF0Cwindow.frames[name]\u65F6\u4E13\u7528\u7684\u5C5E\u6027\u3002

5.scrolling:\u6846\u67B6\u7684\u662F\u5426\u6EDA\u52A8\u3002yes,no,auto\u3002

6.src\uFF1A\u5185\u6846\u67B6\u7684\u5730\u5740\uFF0C\u53EF\u4EE5\u4F7F\u9875\u9762\u5730\u5740\uFF0C\u4E5F\u53EF\u4EE5\u662F\u56FE\u7247\u7684\u5730\u5740\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u91CD\u65B0\u52A0\u8F7Diframe" tabindex="-1"><a class="header-anchor" href="#_2-\u91CD\u65B0\u52A0\u8F7Diframe" aria-hidden="true">#</a> 2. \u91CD\u65B0\u52A0\u8F7Diframe</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> pdfIframe <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>pdfIframe<span class="token punctuation">;</span>
pdfIframe<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,13),d={href:"https://segmentfault.com/a/1190000004502619",target:"_blank",rel:"noopener noreferrer"};function u(m,v){const n=o("ExternalLinkIcon");return e(),t("div",null,[p,a("p",null,[a("a",d,[i("iframe,\u6211\u4EEC\u6765\u8C08\u4E00\u8C08"),c(n)])])])}const f=s(r,[["render",u],["__file","fe-iframe.html.vue"]]);export{f as default};
