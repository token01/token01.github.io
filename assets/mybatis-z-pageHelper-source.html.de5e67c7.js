import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,f as e}from"./app.b657c1d1.js";const t={},p=e(`<h1 id="mybatis-pagehelper\u6E90\u7801\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#mybatis-pagehelper\u6E90\u7801\u5206\u6790" aria-hidden="true">#</a> Mybatis-PageHelper\u6E90\u7801\u5206\u6790</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u9879\u76EE\u4E2D\u5206\u9875\u662F\u975E\u5E38\u5E38\u89C1\u7684\u9700\u6C42\uFF0C\u5728\u9879\u76EE\u4E2D\u6211\u4EEC\u4E00\u822C\u96C6\u6210\u7B2C\u4E09\u65B9\u7684\u5206\u9875\u63D2\u4EF6\uFF0C\u907F\u514D\u5728\u4E1A\u52A1\u5C42\u5D4C\u5165\u8FC7\u591A\u4E1A\u52A1\u4EE3\u7801\u3002</p><p>\u5206\u9875\u63D2\u4EF6\uFF0C\u6211\u4EEC\u9879\u76EE\u4E2D\u662F\u91C7\u7528<code>Mybatis-PageHelper </code>\uFF0C\u4F5C\u4E3A\u4E00\u6B3E\u8F7B\u91CF\u7EA7\u7684\u63D2\u4EF6\uFF0C\u6E90\u7801\u5E94\u8BE5\u4E0D\u96BE\uFF0C\u6211\u4EEC\u5C31\u6765\u5206\u6790\u5206\u6790\u4ED6\u7684\u6E90\u7801</p><h2 id="_2-\u5206\u9875\u63D2\u4EF6\u5B9E\u73B0\u539F\u7406\u4E0E\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#_2-\u5206\u9875\u63D2\u4EF6\u5B9E\u73B0\u539F\u7406\u4E0E\u57FA\u7840" aria-hidden="true">#</a> 2. \u5206\u9875\u63D2\u4EF6\u5B9E\u73B0\u539F\u7406\u4E0E\u57FA\u7840</h2><h3 id="_2-1-\u62E6\u622A\u5668" tabindex="-1"><a class="header-anchor" href="#_2-1-\u62E6\u622A\u5668" aria-hidden="true">#</a> 2.1 \u62E6\u622A\u5668</h3><p>Mybatis \u63D0\u4F9B\u4E86\u62E6\u622A\u5668\u63A5\u53E3<code>Interceptor(org.apache.ibatis.plugin.Interceptor)</code>, \u6211\u4EEC\u4EC5\u9700\u8981\u5728\u5B9E\u73B0\u7C7B\u4E2D\u5BF9\u62E6\u622A\u5BF9\u8C61\u548C\u65B9\u6CD5\u8FDB\u884C\u5904\u7406\u5373\u53EF</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211023103716074.png" alt="image-20211023103716074"></p><h4 id="_2-1-1-object-intercept-invocation-invocation" tabindex="-1"><a class="header-anchor" href="#_2-1-1-object-intercept-invocation-invocation" aria-hidden="true">#</a> 2.1.1 Object intercept(Invocation invocation)</h4><p><strong>intercept \u662Fmybatis \u8FD0\u884C\u65F6\u8981\u6267\u884C\u7684\u65B9\u6CD5</strong>\u3002\u901A\u8FC7\u8BE5\u65B9\u6CD5\u7684\u53C2\u6570<code>invocation</code> \u53EF\u4EE5\u5F97\u5230\u5F88\u591A\u6709\u7528\u7684\u4FE1\u606F\uFF0C\u8BE5\u53C2\u6570\u7684\u65B9\u6CD5\u5E38\u7528\u5982\u4E0B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ZszInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">Interceptor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">intercept</span><span class="token punctuation">(</span><span class="token class-name">Invocation</span> invocation<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> target <span class="token operator">=</span> invocation<span class="token punctuation">.</span><span class="token function">getTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Method</span> method <span class="token operator">=</span> invocation<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args <span class="token operator">=</span> invocation<span class="token punctuation">.</span><span class="token function">getArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> result <span class="token operator">=</span> invocation<span class="token punctuation">.</span><span class="token function">proceed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>getTarget ():</p><p>\u83B7\u53D6\u5F53\u524D\u62E6\u622A\u7684\u5BF9\u8C61</p></li><li><p>getMethod()\uFF1A</p><p>\u83B7\u53D6\u5F53\u524D\u88AB\u62E6\u622A\u7684\u65B9\u6CD5</p></li><li><p>getArgs()\uFF1A</p><p>\u53EF\u4EE5\u8FD4\u56DE\u88AB\u62E6\u622A\u65B9\u6CD5\u4E2D\u7684\u53C2\u6570</p></li><li><p>invocation.proceed()\uFF1A</p><p>proceed() \u65B9\u6CD5\u5B9E\u9645\u4E0A\u6267\u884C\u4E86method.invoke(target,args)\u65B9\u6CD5\uFF0C\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\u6CA1\u6709\u505A\u4EFB\u4F55\u5904\u7406\uFF0C\u76F4\u63A5\u8FD4\u56DE\u4E86\u7ED3\u679C</p></li></ul><h4 id="_2-1-2-plugin-object-target" tabindex="-1"><a class="header-anchor" href="#_2-1-2-plugin-object-target" aria-hidden="true">#</a> 2.1.2 plugin(Object target)</h4><p>\u8FD9\u4E2A\u65B9\u6CD5\u7684\u53C2\u6570target \u5C31\u662F\u62E6\u622A\u5668\u8981\u62E6\u622A\u7684\u5BF9\u8C61\uFF0C\u8BE5\u65B9\u6CD5\u4F1A\u5728\u521B\u5EFA\u88AB\u62E6\u622A\u7684\u63A5\u53E3\u5B9E\u73B0\u7C7B\u65F6\u88AB\u8C03\u7528\u3002</p><p>\u542C\u8D77\u6765\u6709\u70B9\u7ED5\uFF0C\u5176\u5B9E\u73B0\u5176\u5B9E\u6211\u4EEC\u53EA\u9700\u8981\u8C03\u7528mybatis \u63D0\u4F9B\u7684 <code>Plugin.wrap(target, this)</code> \u9759\u6001\u65B9\u6CD5\u5C31\u53EF\u4EE5\u901A\u8FC7java\u7684\u52A8\u6001\u4EE3\u7406\u62E6\u622A\u76EE\u6807\u5BF9\u8C61</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>		<span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">plugin</span><span class="token punctuation">(</span><span class="token class-name">Object</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Plugin</span><span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-3-setproperties-properties-properties" tabindex="-1"><a class="header-anchor" href="#_2-1-3-setproperties-properties-properties" aria-hidden="true">#</a> 2.1.3 setProperties(Properties properties)</h4><p>\u4F20\u9012\u63D2\u4EF6\u7684\u53C2\u6570\uFF0C\u53EF\u4EE5\u901A\u8FC7\u53C2\u6570\u6765\u6539\u53D8\u63D2\u4EF6\u7684\u884C\u4E3A</p><ul><li><p>\u5982\u4F55\u914D\u7F6E\u53C2\u6570\uFF1A</p><p>\u6211\u4EEC\u5728\u914D\u7F6E\u62E6\u622A\u5668\u7684\u65F6\u5019\uFF0C\u5C31\u9700\u8981\u914D\u7F6E</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span> <span class="token attr-name">interceptor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.github.pagehelper.PageInterceptor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- \u652F\u6301\u901A\u8FC7Mapper\u63A5\u53E3\u53C2\u6570\u6765\u4F20\u9012\u5206\u9875\u53C2\u6570 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>helperDialect<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mysql<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>supportMethodsArguments<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rowBoundsWithCount<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_2-2-\u62E6\u622A\u5668\u7B7E\u540D" tabindex="-1"><a class="header-anchor" href="#_2-2-\u62E6\u622A\u5668\u7B7E\u540D" aria-hidden="true">#</a> 2.2 \u62E6\u622A\u5668\u7B7E\u540D</h3><p><code>@Intercepts</code> \u548C \u6CE8\u89E3\u7B7E\u540D <code>@Signature</code> \u7528\u6765\u914D\u7F6E\u62E6\u622A\u5668\u8981\u62E6\u622A\u7684\u63A5\u53E3\u7684\u65B9\u6CD5</p><p><code>@Intercepts</code> \u6CE8\u89E3\u4E2D\u7684\u5C5E\u6027\u662F\u4E00\u4E2A <code>@Signature</code>\u7B7E\u540D\u6570\u7EC4\uFF0C\u53EF\u4EE5\u5728\u540C\u4E00\u4E2A\u62E6\u622A\u5668\u4E2D\u540C\u65F6\u62E6\u622A\u4E0D\u540C\u7684\u63A5\u53E3\u548C\u65B9\u6CD5</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211023111853954.png" alt="image-20211023111853954"></p><p><code>@Signature</code> \u6CE8\u89E3\u5305\u542B\u4EE5\u4E0B\u4E09\u4E2A\u5C5E\u6027</p><ul><li><p>type: \u914D\u7F6E\u62E6\u622A\u5668\u7684\u63A5\u53E3\uFF0C\u53EF\u9009\u503C\u662F</p><ul><li>Executor()</li><li>ParameterHandler()</li><li>ResultSetHandler()</li><li>StatementHandler()</li></ul></li><li><p>Method: \u8BBE\u7F6E\u62E6\u622A\u5668\u4E2D\u7684\u65B9\u6CD5\u540D\uFF0C\u53EF\u9009\u503C\u662F\u4E0A\u97624\u4E2A\u63A5\u53E3\u4E2D\u5BF9\u5E94\u7684\u65B9\u6CD5\uFF0C\u9700\u8981\u548C\u63A5\u53E3\u5339\u914D</p><p>\u4F8B\u5982Executor \u4E2D\u80FD\u9009query\uFF0Cupdate\u7B49</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211023112540386.png" alt="image-20211023112540386"></p></li><li><p>args\uFF1A\u8BBE\u7F6E\u62E6\u622A\u65B9\u6CD5\u7684\u53C2\u6570\u7C7B\u578B\u6570\u7EC4\uFF0C\u901A\u8FC7\u65B9\u6CD5\u540D\u548C\u53C2\u6570\u7C7B\u578B\u53EF\u4EE5\u786E\u5B9A\u552F\u4E00\u4E00\u4E2A\u65B9\u6CD5</p></li></ul><h2 id="_3-pagehelper\u6E90\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_3-pagehelper\u6E90\u7801\u5B9E\u73B0" aria-hidden="true">#</a> 3. PageHelper\u6E90\u7801\u5B9E\u73B0</h2><h3 id="_3-1-\u62E6\u622A\u5668\u4E0E\u62E6\u622A\u5668\u7B7E\u540D" tabindex="-1"><a class="header-anchor" href="#_3-1-\u62E6\u622A\u5668\u4E0E\u62E6\u622A\u5668\u7B7E\u540D" aria-hidden="true">#</a> 3.1 \u62E6\u622A\u5668\u4E0E\u62E6\u622A\u5668\u7B7E\u540D</h3><p>\u8FD9\u6837\u6211\u4EEC\u5C31\u80FD\u62E6\u622A\u5230sql \u67E5\u8BE2\u8BED\u53E5</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211023164728249.png" alt="image-20211023164728249"></p><h3 id="_3-2-\u83B7\u53D6\u62E6\u622A\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_3-2-\u83B7\u53D6\u62E6\u622A\u53C2\u6570" aria-hidden="true">#</a> 3.2 \u83B7\u53D6\u62E6\u622A\u53C2\u6570</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211023164930142.png" alt="image-20211023164930142"></p><h3 id="_3-3-\u5206\u9875\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#_3-3-\u5206\u9875\u5224\u65AD" aria-hidden="true">#</a> 3.3 \u5206\u9875\u5224\u65AD</h3><ol><li>\u5224\u65AD\u662F\u5426\u9700\u8981\u5206\u9875</li><li>\u5224\u65AD\u662F\u5426\u9700\u8981\u8FDB\u884Ccount \u67E5\u8BE2 <ol><li>\u67E5\u8BE2\u603B\u6570</li></ol></li><li>\u5206\u9875\u67E5\u8BE2</li></ol><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211023165357858.png" alt="image-20211023165357858"></p><h3 id="_3-4-\u8BA1\u7B97\u603B\u6570" tabindex="-1"><a class="header-anchor" href="#_3-4-\u8BA1\u7B97\u603B\u6570" aria-hidden="true">#</a> 3.4 \u8BA1\u7B97\u603B\u6570</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211023165640099.png" alt="image-20211023165640099"></p><p>\u8BA1\u7B97\u603B\u6570\u5B9E\u73B0</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211023165903830.png" alt="image-20211023165903830"></p><p>\u83B7\u53D6\u65B9\u8A00count sql</p><p>\u6B64\u65F6\u8FD8\u8D34\u5FC3\u7684\u53BB\u9664\u4E86order by</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211023170153258.png" alt="image-20211023170153258"></p><p>\u83B7\u53D6\u666E\u901A\u7684Count-sql</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211023170559536.png" alt="image-20211023170559536"></p><h3 id="_3-5-\u5206\u9875\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_3-5-\u5206\u9875\u67E5\u8BE2" aria-hidden="true">#</a> 3.5 \u5206\u9875\u67E5\u8BE2</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211023170703110.png" alt="image-20211023170703110"></p><ul><li>boundSql \u5305\u542B\u4E86\u6267\u884C\u7684sql \u548C\u5BF9\u5E94\u7684\u53C2\u6570</li></ul><p>\u8C03\u7528\u65B9\u8A00\u83B7\u53D6\u5206\u9875 sql</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211023171056962.png" alt="image-20211023171056962"></p><ol><li><code>String sql = boundSql.getSql()</code> \u65B9\u8A00sql</li><li>\u5176\u4E2D<code>Page page = this.getLocalPage();</code> \u5C31\u662F\u83B7\u5F97\u5206\u9875\u7684\u53C2\u6570</li><li>\u5224\u65AD\u662F\u5426\u9700\u8981\u6392\u5E8F\uFF0C\u6DFB\u52A0orderby \u8BED\u53E5</li></ol><p>\u83B7\u53D6\u5206\u9875\u7684 getPageSql</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211023171543077.png" alt="image-20211023171543077"></p><p>\u8F6C\u6362\u4E3A\u5206\u9875\u8BED\u53E5</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211023171621305.png" alt="image-20211023171621305"></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211023171656921.png" alt="image-20211023171656921"></p><h3 id="_3-6-\u6DFB\u52A0order-by-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_3-6-\u6DFB\u52A0order-by-\u8BED\u53E5" aria-hidden="true">#</a> 3.6 \u6DFB\u52A0order by \u8BED\u53E5</h3><p>\u5728\u505A\u5206\u9875\u67E5\u8BE2\u7684\u65F6\u5019\u6821\u9A8C\u4E86\u662F\u5426\u9700\u8981order by \u8BED\u53E5</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211023171330695.png" alt="image-20211023171330695"></p><p>\u6DFB\u52A0order \u8BED\u53E5</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211023171410950.png" alt="image-20211023171410950"></p><h2 id="_4-dialect-\u65B9\u8A00\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_4-dialect-\u65B9\u8A00\u63A5\u53E3" aria-hidden="true">#</a> 4. Dialect \u65B9\u8A00\u63A5\u53E3</h2><p>Dialect \u65B9\u8A00 \u5305\u542B\u4E86\u6570\u636E\u5E93\u652F\u6301\u7684\u7C7B\u578B</p><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u51E0\u4E2A\u5173\u952E\u8282\u70B9\u4E0A\u90FD\u8C03\u7528\u4E86Dialect</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211023173219075.png" alt="image-20211023173219075"></p><h3 id="_4-1-dialect-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_4-1-dialect-\u63A5\u53E3" aria-hidden="true">#</a> 4.1 dialect \u63A5\u53E3</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211023173328549.png" alt="image-20211023173328549"></p><h3 id="_4-2-dialect-\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_4-2-dialect-\u5B9E\u4F8B" aria-hidden="true">#</a> 4.2 dialect \u5B9E\u4F8B</h3><h4 id="_4-2-1-oracle-\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_4-2-1-oracle-\u7248\u672C" aria-hidden="true">#</a> 4.2.1 oracle \u7248\u672C</h4><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211023173426394.png" alt="image-20211023173426394"></p><h4 id="_4-2-2-mysql\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_4-2-2-mysql\u7248\u672C" aria-hidden="true">#</a> 4.2.2 mysql\u7248\u672C</h4><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211023173527432.png" alt="image-20211023173527432"></p>`,70),i=[p];function c(o,l){return n(),s("div",null,i)}const d=a(t,[["render",c],["__file","mybatis-z-pageHelper-source.html.vue"]]);export{d as default};
