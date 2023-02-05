import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as o,a as n,b as s,d as t,f as r,r as l}from"./app.df1d0035.js";const c={},i=n("h1",{id:"vue\u4F7F\u7528print-js\u5B9E\u73B0\u6253\u5370\u529F\u80FD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue\u4F7F\u7528print-js\u5B9E\u73B0\u6253\u5370\u529F\u80FD","aria-hidden":"true"},"#"),s(" Vue\u4F7F\u7528print-js\u5B9E\u73B0\u6253\u5370\u529F\u80FD")],-1),d=n("h2",{id:"_1-\u5B98\u7F51\u5730\u5740",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u5B98\u7F51\u5730\u5740","aria-hidden":"true"},"#"),s(" 1. \u5B98\u7F51\u5730\u5740")],-1),u={href:"https://printjs.crabbly.com/",target:"_blank",rel:"noopener noreferrer"},k=r(`<h2 id="_2-\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#_2-\u4E0B\u8F7D" aria-hidden="true">#</a> 2. \u4E0B\u8F7D</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install print-js --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#_3-\u5BFC\u5165" aria-hidden="true">#</a> 3. \u5BFC\u5165</h2><p>\u5728main.js \u4E2D\u5168\u5C40\u5BFC\u5165</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> printjs <span class="token keyword">from</span> <span class="token string">&#39;print-js&#39;</span>

<span class="token keyword">import</span> <span class="token string">&#39;print-js/dist/print.css&#39;</span><span class="token punctuation">;</span>

<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$print <span class="token operator">=</span> printjs<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_4-\u4F7F\u7528" aria-hidden="true">#</a> 4. \u4F7F\u7528</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;printBox&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;@/assets/resources/images/zuyoulogo.png&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;@/assets/logo.png&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>abc<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string">&quot;page-break-after:always;&quot;</span><span class="token operator">&gt;</span>\u5206\u9875<span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string">&quot;page-break-after:always;&quot;</span><span class="token operator">&gt;</span>\u5206\u9875<span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string">&quot;page-break-after:always;&quot;</span><span class="token operator">&gt;</span>\u5206\u9875<span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string">&quot;page-break-after:always;&quot;</span><span class="token operator">&gt;</span>\u5206\u9875<span class="token number">4</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>a<span class="token operator">-</span>button @click<span class="token operator">=</span><span class="token string">&quot;printHTML&quot;</span><span class="token operator">&gt;</span>\u6253\u5370<span class="token constant">HTML</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">-</span>button<span class="token operator">&gt;</span>

  <span class="token operator">&lt;</span>a<span class="token operator">-</span>button @click<span class="token operator">=</span><span class="token string">&quot;printPDF&quot;</span><span class="token operator">&gt;</span>\u6253\u5370<span class="token constant">PDF</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">-</span>button<span class="token operator">&gt;</span>

  <span class="token operator">&lt;</span>a<span class="token operator">-</span>button @click<span class="token operator">=</span><span class="token string">&quot;printImg&quot;</span><span class="token operator">&gt;</span>\u6253\u5370\u56FE\u7247<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">-</span>button<span class="token operator">&gt;</span>

  <span class="token operator">&lt;</span>a<span class="token operator">-</span>button @click<span class="token operator">=</span><span class="token string">&quot;printJSON&quot;</span><span class="token operator">&gt;</span>\u6253\u5370<span class="token constant">JSON</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">-</span>button<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">printUrl</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">printUrl2</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">someJSONdata</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John Doe&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;john@doe.com&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">phone</span><span class="token operator">:</span> <span class="token string">&#39;111-111-1111&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Barry Allen&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;barry@flash.com&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">phone</span><span class="token operator">:</span> <span class="token string">&#39;222-222-2222&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Cool Dude&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;cool@dude.com&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">phone</span><span class="token operator">:</span> <span class="token string">&#39;333-333-3333&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">printHTML</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$print</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      	<span class="token literal-property property">printable</span><span class="token operator">:</span> <span class="token string">&#39;printBox&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;html&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">&#39;\u6253\u5370\u6807\u9898&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">targetStyles</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u6253\u5370\u5185\u5BB9\u4F7F\u7528\u6240\u6709HTML\u6837\u5F0F\uFF0C\u6CA1\u6709\u8BBE\u7F6E\u8FD9\u4E2A\u5C5E\u6027/\u503C\uFF0C\u8BBE\u7F6E\u5206\u9875\u6253\u5370\u6CA1\u6709\u6548\u679C</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">printJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$print</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">printable</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>someJSONdata<span class="token punctuation">,</span> <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;email&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;phone&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">printPDF</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$print</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">printable</span><span class="token operator">:</span> <span class="token string">&#39;docs/xx_large_printjs.pdf&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;pdf&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">printImg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$print</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      	<span class="token literal-property property">printable</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>printUrl<span class="token punctuation">,</span> <span class="token comment">// \u4E5F\u53EF\u8BBE\u7F6E\u6E05\u6670\u5EA6\u6BD4html\u7ED1\u5B9A\u66F4\u9AD8\u7CBE\u5EA6\u7684\u56FE\u7247</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;image&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$print</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      	<span class="token literal-property property">printable</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>printUrl<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>printUrl2<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u6253\u5370\u591A\u5F20\u56FE\u7247</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;image&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u5177\u4F53\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_5-\u5177\u4F53\u53C2\u6570" aria-hidden="true">#</a> 5. \u5177\u4F53\u53C2\u6570</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>printable</td><td>null</td><td>\u6587\u6863\u6765\u6E90\uFF1Apdf\u6216\u56FE\u50CF\u7684url\uFF0Chtml\u5143\u7D20\u7684id\u6216json\u6570\u636E\u7684\u5BF9\u8C61</td></tr><tr><td>type</td><td>PDF</td><td>\u53EF\u6253\u5370\u7C7B\u578B\u3002\u53EF\u7528\u7684\u6253\u5370\u9009\u9879\u5305\u62EC\uFF1Apdf\uFF0Chtml\uFF0Cimage\uFF0Cjson\u548Craw-html\u3002</td></tr><tr><td>header</td><td>null</td><td>\u7528\u4E8EHTML\uFF0CImage\u6216JSON\u6253\u5370\u7684\u53EF\u9009\u6807\u5934\u3002\u5B83\u5C06\u653E\u5728\u9875\u9762\u9876\u90E8\u3002\u6B64\u5C5E\u6027\u5C06\u63A5\u53D7\u6587\u672C\u6216\u539F\u59CBHTML</td></tr><tr><td>headerStyle</td><td>&#39;font-weight\uFF1A300;&#39;</td><td>\u8981\u5E94\u7528\u4E8E\u6807\u9898\u6587\u672C\u7684\u53EF\u9009\u6807\u9898\u6837\u5F0F</td></tr><tr><td>maxWidth</td><td>800</td><td>\u6700\u5927\u6587\u6863\u5BBD\u5EA6\uFF08\u50CF\u7D20\uFF09\u3002\u6839\u636E\u9700\u8981\u66F4\u6539\u6B64\u9879\u3002\u5728\u6253\u5370HTML\uFF0C\u56FE\u50CF\u6216JSON\u65F6\u4F7F\u7528\u3002</td></tr><tr><td>css</td><td>null</td><td>\u8FD9\u5141\u8BB8\u6211\u4EEC\u4F20\u9012\u4E00\u4E2A\u6216\u591A\u4E2A\u5E94\u8BE5\u5E94\u7528\u4E8E\u6B63\u5728\u6253\u5370\u7684html\u7684css\u6587\u4EF6URL\u3002\u503C\u53EF\u4EE5\u662F\u5305\u542B\u5355\u4E2AURL\u7684\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5305\u542B\u591A\u4E2AURL\u7684\u6570\u7EC4\u3002</td></tr><tr><td>style</td><td>null</td><td>\u8FD9\u5141\u8BB8\u6211\u4EEC\u4F20\u9012\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8BE5\u5B57\u7B26\u4E32\u5E94\u8BE5\u5E94\u7528\u4E8E\u6B63\u5728\u6253\u5370\u7684html\u3002</td></tr><tr><td>scanStyles</td><td>true</td><td>\u8BBE\u7F6E\u4E3Afalse\u65F6\uFF0C\u5E93\u4E0D\u4F1A\u5904\u7406\u5E94\u7528\u4E8E\u6B63\u5728\u6253\u5370\u7684html\u7684\u6837\u5F0F\u3002\u4F7F\u7528css\u53C2\u6570\u65F6\u5F88\u6709\u7528\u3002</td></tr><tr><td>targetStyle</td><td>null</td><td>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5728\u6253\u5370HTML\u5143\u7D20\u65F6\uFF0C\u5E93\u4EC5\u5904\u7406\u67D0\u4E9B\u6837\u5F0F\u3002\u6B64\u9009\u9879\u5141\u8BB8\u60A8\u4F20\u9012\u8981\u5904\u7406\u7684\u6837\u5F0F\u6570\u7EC4\u3002\u4F8B\u5982\uFF1A[&#39;padding-top&#39;\uFF0C&#39;border-bottom&#39;]</td></tr><tr><td>targetStyles</td><td>null</td><td>\u4E0EtargetStyle\u76F8\u540C\uFF0C\u8FD9\u5C06\u5904\u7406\u4EFB\u4F55\u4E00\u7CFB\u5217\u6837\u5F0F\u3002\u4F8B\u5982\uFF1A[&#39;border&#39;\uFF0C&#39;padding&#39;]\uFF0C\u5C06\u5305\u62EC&#39;border-bottom&#39;\uFF0C&#39;border-top&#39;\uFF0C&#39;border-left&#39;\uFF0C&#39;border-right&#39;\uFF0C&#39;padding-top&#39;\u7B49\u3002\u4F60\u4E5F\u53EF\u4EE5\u4F20\u9012[&#39;*&#39;]\u6765\u5904\u7406\u6240\u6709\u6837\u5F0F</td></tr><tr><td>ignoreElements</td><td>[]</td><td>\u63A5\u53D7\u6253\u5370\u7236html\u5143\u7D20\u65F6\u5E94\u5FFD\u7565\u7684html\u7684id\u6570\u7EC4\u3002</td></tr><tr><td>properties</td><td>null</td><td>\u5728\u6253\u5370JSON\u65F6\u4F7F\u7528\u3002\u8FD9\u4E9B\u662F\u5BF9\u8C61\u5C5E\u6027\u540D\u79F0\u3002</td></tr><tr><td>gridHeaderStyle</td><td>&#39;font-weight\uFF1Abold;&#39;</td><td>\u6253\u5370JSON\u6570\u636E\u65F6\u7F51\u683C\u6807\u9898\u7684\u53EF\u9009\u6837\u5F0F\u3002</td></tr><tr><td>gridStyle</td><td>&#39;border: 1px solid lightgray; margin-bottom: -1px;&#39;</td><td>\u6253\u5370JSON\u6570\u636E\u65F6\u7F51\u683C\u884C\u7684\u53EF\u9009\u6837\u5F0F</td></tr><tr><td>repeatTableHeader</td><td>true</td><td>\u5728\u6253\u5370JSON\u6570\u636E\u65F6\u4F7F\u7528\u3002\u8BBE\u7F6E\u4E3A\u65F6false\uFF0C\u6570\u636E\u8868\u6807\u9898\u4EC5\u663E\u793A\u5728\u7B2C\u4E00\u9875\u4E2D\u3002</td></tr><tr><td>showModal</td><td>null</td><td>\u542F\u7528\u6B64\u9009\u9879\u53EF\u5728\u68C0\u7D22\u6216\u5904\u7406\u5927\u578BPDF\u6587\u4EF6\u65F6\u663E\u793A\u7528\u6237\u53CD\u9988</td></tr><tr><td>modalMessage</td><td>&#39;Retrieving Document...&#39;</td><td>\u5F53\u5411\u7528\u6237\u663E\u793A\u7684\u6D88\u606FshowModal\u88AB\u8BBE\u5B9A\u4E3Atrue\u3002</td></tr><tr><td>onLoadingStart</td><td>null</td><td>\u52A0\u8F7DPDF\u65F6\u8981\u6267\u884C\u7684\u529F\u80FD</td></tr><tr><td>onLoadingEnd</td><td>null</td><td>\u52A0\u8F7DPDF\u540E\u8981\u6267\u884C\u7684\u529F\u80FD</td></tr><tr><td>documentTitle</td><td>&#39;Document&#39;</td><td>\u6253\u5370html\uFF0Cimage\u6216json\u65F6\uFF0C\u5B83\u5C06\u663E\u793A\u4E3A\u6587\u6863\u6807\u9898\u3002\u5982\u679C\u7528\u6237\u5C1D\u8BD5\u5C06\u6253\u5370\u4F5C\u4E1A\u4FDD\u5B58\u4E3Apdf\u6587\u4EF6\uFF0C\u5B83\u4E5F\u5C06\u662F\u6587\u6863\u7684\u540D\u79F0\u3002</td></tr><tr><td>fallbackPrintable</td><td>null</td><td>\u6253\u5370pdf\u65F6\uFF0C\u5982\u679C\u6D4F\u89C8\u5668\u4E0D\u517C\u5BB9\uFF08\u68C0\u67E5\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u8868\uFF09\uFF0C\u5E93\u5C06\u5728\u65B0\u9009\u9879\u5361\u4E2D\u6253\u5F00pdf\u3002\u8FD9\u5141\u8BB8\u60A8\u4F20\u9012\u8981\u6253\u5F00\u7684\u4E0D\u540Cpdf\u6587\u6863\uFF0C\u800C\u4E0D\u662F\u4F20\u9012\u7ED9printable\u7684\u539F\u59CB\u6587\u6863\u3002\u5982\u679C\u60A8\u5728\u5907\u7528pdf\u6587\u4EF6\u4E2D\u6CE8\u5165javascript\uFF0C\u8FD9\u53EF\u80FD\u5F88\u6709\u7528\u3002</td></tr><tr><td>onPdfOpen</td><td>null</td><td>\u6253\u5370pdf\u65F6\uFF0C\u5982\u679C\u6D4F\u89C8\u5668\u4E0D\u517C\u5BB9\uFF08\u68C0\u67E5\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u8868\uFF09\uFF0C\u5E93\u5C06\u5728\u65B0\u9009\u9879\u5361\u4E2D\u6253\u5F00pdf\u3002\u53EF\u4EE5\u5728\u6B64\u5904\u4F20\u9012\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD9\u5C06\u5728\u53D1\u751F\u8FD9\u79CD\u60C5\u51B5\u65F6\u6267\u884C\u3002\u5728\u60A8\u60F3\u8981\u5904\u7406\u6253\u5370\u6D41\u7A0B\uFF0C\u66F4\u65B0\u7528\u6237\u754C\u9762\u7B49\u7684\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u5B83\u53EF\u80FD\u5F88\u6709\u7528\u3002</td></tr><tr><td>onPrintDialogClose</td><td>null</td><td>\u5173\u95ED\u6D4F\u89C8\u5668\u6253\u5370\u5BF9\u8BDD\u6846\u540E\u6267\u884C\u56DE\u8C03\u529F\u80FD</td></tr><tr><td>onError</td><td>error =&gt; throw error</td><td>\u53D1\u751F\u9519\u8BEF\u65F6\u8981\u6267\u884C\u7684\u56DE\u8C03\u51FD\u6570\u3002</td></tr><tr><td>base64</td><td>false</td><td>\u5728\u6253\u5370\u4F5C\u4E3Abase64\u6570\u636E\u4F20\u9012\u7684PDF\u6587\u6863\u65F6\u4F7F\u7528</td></tr><tr><td>honorMarginPadding(\u4E0D\u5EFA\u8BAE\u4F7F\u7528)</td><td>true</td><td>\u8FD9\u7528\u4E8E\u4FDD\u7559\u6216\u5220\u9664\u6B63\u5728\u6253\u5370\u7684\u5143\u7D20\u7684\u586B\u5145\u548C\u8FB9\u8DDD\u3002\u6709\u65F6\u8FD9\u4E9B\u6837\u5F0F\u8BBE\u7F6E\u5728\u5C4F\u5E55\u4E0A\u5F88\u68D2\uFF0C\u4F46\u5728\u6253\u5370\u65F6\u770B\u8D77\u6765\u5F88\u7CDF\u7CD5\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7\u5C06\u5176\u8BBE\u7F6E\u4E3Afalse\u6765\u5220\u9664\u5B83\u3002</td></tr><tr><td>honorColor(\u4E0D\u5EFA\u8BAE\u4F7F\u7528)</td><td>false</td><td>\u8981\u4EE5\u5F69\u8272\u6253\u5370\u6587\u672C\uFF0C\u8BF7\u5C06\u6B64\u5C5E\u6027\u8BBE\u7F6E\u4E3Atrue\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6240\u6709\u6587\u672C\u90FD\u5C06\u4EE5\u9ED1\u8272\u6253\u5370\u3002</td></tr><tr><td>font(\u4E0D\u5EFA\u8BAE\u4F7F\u7528)</td><td>&#39;TimesNewRoman&#39;</td><td>\u6253\u5370HTML\u6216JSON\u65F6\u4F7F\u7528\u7684\u5B57\u4F53</td></tr><tr><td>font_size(\u4E0D\u5EFA\u8BAE\u4F7F\u7528)</td><td>&#39;12pt&#39;</td><td>\u6253\u5370HTML\u6216JSON\u65F6\u4F7F\u7528\u7684\u5B57\u4F53\u5927\u5C0F</td></tr><tr><td>imageStyle (\u4E0D\u5EFA\u8BAE\u4F7F\u7528)</td><td>&#39;width:100%;&#39;</td><td>\u6253\u5370\u56FE\u50CF\u65F6\u4F7F\u7528\u3002\u63A5\u53D7\u5305\u542B\u8981\u5E94\u7528\u4E8E\u6BCF\u4E2A\u56FE\u50CF\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F\u7684\u5B57\u7B26\u4E32\u3002</td></tr><tr><td>frameId</td><td>null</td><td>print.js\u4F1A\u5C06\u8981\u6253\u5370\u7684\u5185\u5BB9\u590D\u5236\u5230\u4E00\u4E2A\u65B0\u7684Frame\u4E2D,\u6B64\u53C2\u6570\u662Fframe\u7684id\u503C</td></tr></tbody></table><h2 id="_6-\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#_6-\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> 6. \u53C2\u8003\u6587\u7AE0</h2>`,10),v={href:"https://juejin.cn/post/6888519415717953549",target:"_blank",rel:"noopener noreferrer"};function m(b,g){const a=l("ExternalLinkIcon");return e(),o("div",null,[i,d,n("p",null,[n("a",u,[s("https://printjs.crabbly.com/"),t(a)])]),k,n("p",null,[n("a",v,[s("Vue\u4F7F\u7528print-js\u5B9E\u73B0\u6253\u5370\u529F\u80FD"),t(a)])])])}const f=p(c,[["render",m],["__file","fe-lib-print.html.vue"]]);export{f as default};
