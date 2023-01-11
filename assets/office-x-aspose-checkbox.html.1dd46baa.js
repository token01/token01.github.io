import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.333ff1c5.js";const e={},p=t(`<h1 id="aspose-word\u63D2\u5165\u590D\u9009\u6846" tabindex="-1"><a class="header-anchor" href="#aspose-word\u63D2\u5165\u590D\u9009\u6846" aria-hidden="true">#</a> Aspose.Word\u63D2\u5165\u590D\u9009\u6846</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>word \u4E2D\u96BE\u514D\u6709\u590D\u9009\u6846\u7684\u529F\u80FD\uFF0C\u6211\u4EEC\u52A8\u6001\u63D2\u5165\u6587\u5B57\u65F6\uFF0C\u4ED6\u53EA\u662F\u4E00\u4E2A\u6587\u672C\uFF0C\u5E76\u6CA1\u6709\u9009\u4E2D\u5207\u6362\u7684\u529F\u80FD\u3002</p><h2 id="_2-\u89E3\u51B3\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u51B3\u601D\u8DEF" aria-hidden="true">#</a> 2. \u89E3\u51B3\u601D\u8DEF</h2><p>\u6211\u4EEC\u6765\u770B\u770B word \u4E2D\u6211\u4EEC\u662F\u5982\u4F55\u63D2\u5165\u590D\u9009\u6846\u7684</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622104329590.png" alt="image-20220622104329590"><p>\u6211\u4EEC\u67E5\u770B\u8BE6\u60C5</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220622104534970.png" alt="image-20220622104534970"></p><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230</p><ul><li>\u5B57\u4F53\u4E3A\uFF1AWingdings 2</li><li>\u5B57\u7B26\u4EE3\u7801\u4E3A\uFF1A0052</li></ul><p>\u90A3\u4E48\u6211\u4EEC\u63D2\u5165\u7279\u5B9A\u7684\u683C\u5F0F\u7684\u5B57\u4F53\uFF0C\u5BF9\u5E94\u7684\u4EE3\u7801\u662F\u4E0D\u662F\u5C31\u80FD\u89E3\u51B3\u4E86</p><h2 id="_3-\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#_3-\u89E3\u51B3" aria-hidden="true">#</a> 3. \u89E3\u51B3</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">boolean</span> isMoveSuccess <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">moveToMergeField</span><span class="token punctuation">(</span>fieldName<span class="token punctuation">)</span><span class="token punctuation">;</span>
 builder<span class="token punctuation">.</span><span class="token function">getFont</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           
 <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>fieldValue<span class="token punctuation">,</span><span class="token string">&quot;\u2611&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;\\u0052&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>fieldValue<span class="token punctuation">,</span><span class="token string">&quot;\u2610&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
       builder<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;\\u00A3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u6211\u4EEC\u5C31\u6B63\u5E38\u6E32\u67D3\u51FA\u4E86\u590D\u9009\u6846</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220622104905805.png" alt="image-20220622104905805"></p>`,15),o=[p];function c(i,u){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","office-x-aspose-checkbox.html.vue"]]);export{d as default};
