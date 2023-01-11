import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.333ff1c5.js";const e={},p=t(`<h1 id="\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F-\u6253\u5F00\u5916\u90E8\u94FE\u63A5webview" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F-\u6253\u5F00\u5916\u90E8\u94FE\u63A5webview" aria-hidden="true">#</a> \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F-\u6253\u5F00\u5916\u90E8\u94FE\u63A5webview</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u6211\u4EEC\u5C0F\u7A0B\u5E8F\u7ECF\u5E38\u6709\u4E00\u4E9B\u6253\u5F00\u5916\u90E8\u94FE\u63A5\u7684\u9700\u6C42\uFF0C\u5982\u6D3B\u52A8\u9875\uFF0C\u6216\u8005\u662F\u4E4B\u524D\u5DF2\u7ECF\u5B8C\u6210\u7684\u529F\u80FD\u4E0D\u5E0C\u671B\u5728\u5C0F\u7A0B\u5E8F\u4E2D\u91CD\u505A\u3002\u6211\u4EEC\u5E0C\u671B\u5C0F\u7A0B\u5E8F\u4E2D\u80FD\u76F4\u63A5\u6253\u5F00\u8FD9\u4E9B\u9875\u9762\u3002</p><h2 id="_2-\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_2-\u6B65\u9AA4" aria-hidden="true">#</a> 2. \u6B65\u9AA4</h2><h3 id="_2-1-\u65B0\u5EFAwebview\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#_2-1-\u65B0\u5EFAwebview\u9875\u9762" aria-hidden="true">#</a> 2.1 \u65B0\u5EFAwebview\u9875\u9762</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>view<span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>web<span class="token operator">-</span>view <span class="token operator">:</span>src<span class="token operator">=</span><span class="token string">&quot;url&quot;</span> bindmessage<span class="token operator">=</span><span class="token string">&quot;getMessage&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>web<span class="token operator">-</span>view<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>url <span class="token operator">=</span> options<span class="token punctuation">.</span>url<span class="token punctuation">;</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;webview\u8981\u6253\u5F00\u7684\u9875\u9762\uFF1A&quot;</span><span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>url<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u8C03\u6574\u5230webview" tabindex="-1"><a class="header-anchor" href="#_2-2-\u8C03\u6574\u5230webview" aria-hidden="true">#</a> 2.2 \u8C03\u6574\u5230webview</h3><p>\u53EA\u6709https: \u548Chttp: \u5F00\u5934\u7684\u91C7\u7528webview\u6253\u5F00</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">toDetail</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;https:&quot;</span><span class="token punctuation">)</span><span class="token operator">||</span>e<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;http:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
						<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/pages/webview/webview?url=&#39;</span><span class="token operator">+</span>  e<span class="token punctuation">.</span>url
					<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;/pages/menu/menu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					uni<span class="token punctuation">.</span><span class="token function">switchTab</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
						<span class="token literal-property property">url</span><span class="token operator">:</span>e<span class="token punctuation">.</span>url
					<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
					uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
						<span class="token literal-property property">url</span><span class="token operator">:</span> e<span class="token punctuation">.</span>url
					<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-1-\u6253\u5F00\u53D7\u9650" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u6253\u5F00\u53D7\u9650" aria-hidden="true">#</a> 2.2.1 \u6253\u5F00\u53D7\u9650</h4><p>\u63D0\u793A\u6253\u5F00\u53D7\u9650\uFF0C\u9700\u8981\u914D\u7F6E\u4E1A\u52A1\u57DF\u540D</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220326065321127.png" alt="image-20220326065321127"></p><h3 id="_2-3-\u914D\u7F6E\u4E1A\u52A1\u57DF\u540D" tabindex="-1"><a class="header-anchor" href="#_2-3-\u914D\u7F6E\u4E1A\u52A1\u57DF\u540D" aria-hidden="true">#</a> 2.3 \u914D\u7F6E\u4E1A\u52A1\u57DF\u540D</h3><p>\u6211\u4EEC\u5728\u5C0F\u7A0B\u5E8F\u540E\u53F0\u7BA1\u7406\u4E2D\u914D\u7F6E\u4E1A\u52A1\u57DF\u540D</p><p>\u5F00\u53D1- \u5F00\u53D1\u8BBE\u7F6E-\u4E1A\u52A1\u57DF\u540D\u4E2D\u4FEE\u6539</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220326065803516.png" alt="image-20220326065803516"></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220326065855295.png" alt="image-20220326065855295"></p><h3 id="_2-4-\u6821\u9A8C\u6587\u4EF6\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-4-\u6821\u9A8C\u6587\u4EF6\u4F7F\u7528" aria-hidden="true">#</a> 2.4 \u6821\u9A8C\u6587\u4EF6\u4F7F\u7528</h3><p>\u5F53\u6211\u4EEC\u914D\u7F6E\u4E1A\u52A1\u57DF\u540D\u65F6\uFF0C\u4F1A\u63D0\u793A\u6211\u4EEC\u9700\u8981\u914D\u7F6E\u6821\u9A8C\u6587\u4EF6\u3002\u6211\u4EEC\u4E0B\u8F7D\u6821\u9A8C\u6587\u4EF6</p><p>\u6587\u4EF6\u540D\uFF1A 7Sn5OqKddU.txt \u5185\u5BB9\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>c5c130153411e08718df45834cee9abc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-4-1-\u65B9\u6848\u4E00-nginx\u914D\u7F6E-\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#_2-4-1-\u65B9\u6848\u4E00-nginx\u914D\u7F6E-\u63A8\u8350" aria-hidden="true">#</a> 2.4.1 \u65B9\u6848\u4E00\uFF1Anginx\u914D\u7F6E(\u63A8\u8350)</h4><p>nginx \u76F4\u63A5\u8FD4\u56DE\u6587\u5B57</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code> <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        
        <span class="token directive"><span class="token keyword">location</span> /7Sn5OqKddU.txt</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">return</span> <span class="token number">200</span> <span class="token string">&#39;c5c130153411e08718df45834cee9abc&#39;</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-2-\u4EE3\u7801\u5199\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_2-4-2-\u4EE3\u7801\u5199\u63A5\u53E3" aria-hidden="true">#</a> 2.4.2 \u4EE3\u7801\u5199\u63A5\u53E3</h4><p>\u8981\u5728\u6839\u57DF\u540D\u4E0B\uFF0C\u6240\u4EE5\u4E0D\u80FD\u6709\u524D\u7F00</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>	<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/7Sn5OqKddU.txt&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">wxBizAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;c5c130153411e08718df45834cee9abc&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(e,[["render",i],["__file","wx-mp-opne-webview.html.vue"]]);export{d as default};
