import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.31f1281d.js";const p={},e=t(`<h1 id="gc\u4E2D\u5BF9\u8C61\u81EA\u6551" tabindex="-1"><a class="header-anchor" href="#gc\u4E2D\u5BF9\u8C61\u81EA\u6551" aria-hidden="true">#</a> GC\u4E2D\u5BF9\u8C61\u81EA\u6551</h1><p>\u5373\u4F7F\u5728\u53EF\u8FBE\u6027\u5206\u6790\u7B97\u6CD5\u4E2D, \u88AB\u5224\u5B9A\u4E3A\u4E0D\u53EF\u8FBE\u7684\u5BF9\u8C61, \u4E5F\u5E76\u975E\u662F&#39;\u975E\u6B7B\u4E0D\u53EF&#39; \u7684, \u8FD9\u65F6\u5019\u4ED6\u4EEC\u6682\u5904\u4E8E&#39;\u7F13\u5211&#39; \u9636\u6BB5, \u8981\u771F\u6B63\u5BA3\u544A\u4E00\u4E2A\u5BF9\u8C61\u6B7B\u4EA1, \u81F3\u5C11\u8981\u7ECF\u5386\u4E24\u6B21\u6807\u8BB0\u8FC7\u7A0B:</p><ol><li><p>\u5982\u679C<strong>\u5BF9\u8C61\u5931\u53BB\u5F15\u7528(\u5728\u8FDB\u884C\u53EF\u8FBE\u6027\u5206\u6790\u540E\u53D1\u73B0\u6CA1\u6709\u4E0E GC Roots \u76F8\u8FDE\u63A5\u7684\u5F15\u7528\u94FE), \u5E76\u4E14\u8BE5\u5BF9\u8C61\u7684 finalize()\u65B9\u6CD5\u672A\u8C03\u7528\u8FC7</strong>, \u8BE5\u5BF9\u8C61\u5C06\u4F1A\u88AB\u7B2C\u4E00\u6B21\u6807\u8BB0</p></li><li><p>\u5982\u679C\u8FD9\u4E2A\u5BF9\u8C61\u5DF2\u7ECF\u88AB\u6807\u8BB0\u4E86, \u90A3\u4E48\u8FD9\u4E2A\u5BF9\u8C61\u4F1A\u88AB\u653E\u5165 ReferenceQueue \u961F\u5217\u4E2D, \u7531 FinalizeThread \u7EBF\u7A0B\u53BB\u6267\u884C, \u6700\u7EC8\u4F1A\u8C03\u7528\u8BE5\u5BF9\u8C61\u7684 finalize() \u65B9\u6CD5. \u8FD9\u91CC\u6240\u8C13\u7684&#39;\u6267\u884C&#39; \u5E76\u4E0D\u4F1A\u4FDD\u8BC1 finalize() \u65B9\u6CD5\u8C03\u7528\u7ED3\u675F,\u4E3A\u5982\u679C finalize() \u65B9\u6CD5\u6267\u884C\u7F13\u6162, \u6781\u7AEF\u60C5\u51B5\u4E0B\u53EF\u80FD\u4F1A\u5BFC\u81F4 ReferenceQueue \u961F\u5217\u4E2D\u5176\u4ED6\u7684\u5BF9\u8C61\u6C38\u8FDC\u5904\u4E8E\u7B49\u5F85, \u751A\u81F3\u5BFC\u81F4 GC \u7CFB\u7EDF\u5D29\u6E83.</p></li></ol><p><strong>finalize() \u65B9\u6CD5\u662F\u5BF9\u8C61\u9003\u8131\u6B7B\u4EA1\u547D\u8FD0\u7684\u6700\u540E\u4E00\u6B21\u673A\u4F1A</strong>, \u8C03\u7528 finalize() \u65B9\u6CD5\u540E,GC \u7CFB\u7EDF\u5C06\u5BF9 ReferenceQueue \u961F\u5217\u4E2D\u7684\u5BF9\u8C61\u8FDB\u884C\u7B2C\u4E8C\u6B21\u6807\u8BB0, \u5982\u679C<strong>\u5BF9\u8C61\u8981\u5728 finalize() \u65B9\u6CD5\u4E2D\u6210\u529F\u81EA\u6551, \u53EA\u8981\u91CD\u65B0\u4E0E\u5F15\u7528\u94FE\u5EFA\u7ACB\u5F15\u7528\u5373\u53EF, \u5982:\u628A\u5F53\u524D\u5BF9\u8C61( this )\u8D4B\u503C\u7ED9\u67D0\u4E2A\u7C7B\u53D8\u91CF\u6216\u8005\u5BF9\u8C61\u7684\u6210\u5458\u53D8\u91CF</strong>, \u90A3\u4E48\u5728\u7B2C\u4E8C\u6B21\u6807\u8BB0\u65F6\u5B83\u5C06\u88AB\u79FB\u9664\u51FA &#39;\u5373\u5C06\u56DE\u6536&#39; \u7684\u96C6\u5408, \u8FD9\u6837\u8BE5\u5BF9\u8C61\u5C31\u5B8C\u6210\u4E86\u4E00\u6B21\u81EA\u6551; <strong>\u5982\u679C\u8BE5\u5BF9\u8C61\u88AB\u7B2C\u4E8C\u6B21\u6807\u8BB0, \u90A3\u5C31\u771F\u7684\u8981\u88AB\u56DE\u6536\u4E86</strong>.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FinalizeEscapeGC</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u7528\u4E8E\u81EA\u6551\u7684\u7C7B\u53D8\u91CF</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">FinalizeEscapeGC</span> <span class="token constant">SAVA_HOOK</span><span class="token punctuation">;</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F53\u524D\u5BF9\u8C61: &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span> <span class="token operator">+</span> <span class="token string">&quot; \u5728 &quot;</span> <span class="token operator">+</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; \u7EBF\u7A0B\u6267\u884C finalize() \u65B9\u6CD5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// \u628A\u5F53\u524D\u5BF9\u8C61( this )\u8D4B\u503C\u7ED9\u67D0\u4E2A\u7C7B\u53D8\u91CF, \u91CD\u65B0\u4E0E\u5F15\u7528\u94FE\u5EFA\u7ACB\u5F15\u7528</span>
		<span class="token class-name">FinalizeEscapeGC</span><span class="token punctuation">.</span><span class="token constant">SAVA_HOOK</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61 FinalizeEscapeGC@3654919e, SAVA_HOOK \u5F15\u7528\u8BE5\u5BF9\u8C61</span>
		<span class="token constant">SAVA_HOOK</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FinalizeEscapeGC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C\u4E00\u6B21\u81EA\u6551&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token constant">SAVA_HOOK</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// \u5931\u53BB\u5F15\u7528</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">gc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD0\u884C\u5783\u573E\u56DE\u6536\u5668</span>
		<span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8BA9 GC \u76F8\u5173\u7EBF\u7A0B\u5148\u8D70</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">SAVA_HOOK</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token constant">SAVA_HOOK</span> <span class="token operator">+</span> <span class="token string">&quot; \u5BF9\u8C61\u81EA\u6551\u6210\u529F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5BF9\u8C61\u5DF2\u88AB\u56DE\u6536&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n\u7B2C\u4E8C\u6B21\u81EA\u6551&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token constant">SAVA_HOOK</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// \u5931\u53BB\u5F15\u7528</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">gc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD0\u884C\u5783\u573E\u56DE\u6536\u5668</span>
		<span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8BA9 GC \u76F8\u5173\u7EBF\u7A0B\u5148\u8D70</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">SAVA_HOOK</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token constant">SAVA_HOOK</span> <span class="token operator">+</span> <span class="token string">&quot; \u5BF9\u8C61\u81EA\u6551\u6210\u529F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5BF9\u8C61\u5DF2\u88AB\u56DE\u6536&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8FD0\u884C\u7ED3\u679C:

\u7B2C\u4E00\u6B21\u81EA\u6551
\u5F53\u524D\u5BF9\u8C61: FinalizeEscapeGC@3654919e \u5728 Thread[Finalizer,8,system] \u7EBF\u7A0B\u6267\u884C finalize() \u65B9\u6CD5
FinalizeEscapeGC@3654919e \u5BF9\u8C61\u81EA\u6551\u6210\u529F

\u7B2C\u4E8C\u6B21\u81EA\u6551
\u5BF9\u8C61\u5DF2\u88AB\u56DE\u6536
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E3A\u4EC0\u4E48\u7B2C\u4E8C\u6B21\u81EA\u6551\u5931\u8D25" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u7B2C\u4E8C\u6B21\u81EA\u6551\u5931\u8D25" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u7B2C\u4E8C\u6B21\u81EA\u6551\u5931\u8D25\uFF1F</h3><p><strong>\u53E6\u5916\u4E00\u4E2A\u503C\u5F97\u6CE8\u610F\u7684\u5730\u65B9\u662F, \u4EE3\u7801\u4E2D\u4E24\u6B21\u8BD5\u56FE\u5B9E\u73B0\u81EA\u6551,</strong></p><p><strong>\u8FD0\u884C\u7ED3\u679C\u5374\u662F: \u4E00\u6B21\u81EA\u6551\u6210\u529F, \u4E00\u6B21\u5931\u8D25</strong></p><p><strong>\u8FD9\u662F\u56E0\u4E3A\u4EFB\u4F55\u5BF9\u8C61\u7684 finalize() \u65B9\u6CD5\u90FD\u53EA\u4F1A\u88AB\u8C03\u7528\u4E00\u6B21, \u5982\u679C\u5BF9\u8C61\u9762\u4E34\u4E0B\u4E00\u6B21 GC, \u5B83\u7684 finalize() \u65B9\u6CD5\u4E0D\u4F1A\u88AB\u518D\u6B21\u6267\u884C, \u56E0\u6B64\u7B2C\u4E8C\u6B21\u81EA\u6551\u5931\u8D25\u4E86.</strong></p><p>###Finalizer \u7EBF\u7A0B</p><p>Finalizer \u7EBF\u7A0B, \u5176\u4F18\u5148\u7EA7\u4E3A 8, \u7528\u4E8E\u5728 GC \u524D, \u6267\u884C\u5BF9\u8C61\u7684 finalize() \u65B9\u6CD5</p><p>\u5173\u4E8E Finalizer \u7EBF\u7A0B:</p><p>JVM \u5728 GC \u65F6\u4F1A\u5C06\u5931\u53BB\u5F15\u7528\u7684\u5BF9\u8C61\u5305\u88C5\u6210 java.lang.ref.Finalizer \u5BF9\u8C61\uFF08java.lang.ref.Reference \u62BD\u8C61\u7C7B\u7684\u5B9E\u73B0\uFF09\uFF0C\u5E76\u653E\u5165ReferenceQueue\uFF0C\u7531 Finalizer$FinalizeThread \u7EBF\u7A0B\u6765\u5904\u7406</p>`,15),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","java-jvm-gc-help.html.vue"]]);export{r as default};
