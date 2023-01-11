import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as n,f as e}from"./app.31f1281d.js";const o={},t=e(`<h1 id="_5e\u6570\u636E\u5927\u8868-\u5206\u533A\u8868\u67E5\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_5e\u6570\u636E\u5927\u8868-\u5206\u533A\u8868\u67E5\u6570\u636E" aria-hidden="true">#</a> 5e\u6570\u636E\u5927\u8868\uFF0C\u5206\u533A\u8868\u67E5\u6570\u636E</h1><p>\u5206\u533A\u8868\u662F\u6309\u65E5\u81EA\u52A8\u521B\u5EFA\u7684\u3002</p><p>\u8BB0\u4E0B\u601D\u8DEF</p><ol><li><p>\u67E5\u8BE2\u51FA\u8BE5\u8868\u6240\u6709\u5206\u533A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> PARTITION_NAME<span class="token punctuation">,</span> HIGH_VALUE <span class="token keyword">from</span> user_tab_partitions <span class="token keyword">where</span> table_name<span class="token operator">=</span><span class="token string">&#39;DAVE&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5BF9\u6BD4 HIGH_VALUE \u67E5\u51FA\u8FD13\u5E74\u7684\u6240\u6709\u5206\u533A\u503C</p></li><li><p>\u5C06\u6240\u6709\u5206\u533A\u503C\u8FDB\u884Cunion all</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dave <span class="token keyword">partition</span><span class="token punctuation">(</span>SYS_P53<span class="token punctuation">)</span>
<span class="token keyword">UNION</span> <span class="token keyword">ALL</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dave <span class="token keyword">partition</span><span class="token punctuation">(</span>SYS_P54<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,4),l=[t];function p(r,c){return a(),n("div",null,l)}const u=s(o,[["render",p],["__file","oracle-y-partition-query.html.vue"]]);export{u as default};
