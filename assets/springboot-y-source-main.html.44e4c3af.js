import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,a as n,b as p,d as o,f as c,r as i}from"./app.89148984.js";const l={},u=c(`<h1 id="\u4E3A\u4EC0\u4E48springboot\u4E2Dmain\u65B9\u6CD5\u6267\u884C\u5B8C\u6BD5\u540E\u7A0B\u5E8F\u4E0D\u4F1A\u76F4\u63A5\u9000\u51FA\u5462" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48springboot\u4E2Dmain\u65B9\u6CD5\u6267\u884C\u5B8C\u6BD5\u540E\u7A0B\u5E8F\u4E0D\u4F1A\u76F4\u63A5\u9000\u51FA\u5462" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48SpringBoot\u4E2Dmain\u65B9\u6CD5\u6267\u884C\u5B8C\u6BD5\u540E\u7A0B\u5E8F\u4E0D\u4F1A\u76F4\u63A5\u9000\u51FA\u5462</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u6B63\u5E38\u60C5\u51B5\u4E0B\u6211\u4EECmain\u65B9\u6CD5\u6267\u884C\u7ED3\u675F\u540E\uFF0C\u8BE5\u8FDB\u7A0B\u5C31\u7ED3\u675F\u4E86\u3002\u90A3\u4E3A\u4EC0\u4E48springboot main\u51FD\u6570\u6267\u884C\u5B8C\u4E0D\u4F1A\u9000\u51FA\u5462\uFF1F</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220515222654390.png" alt="image-20220515222654390"></p><p>\u9488\u5BF9\u8FD9\u4E2A\u95EE\u9898\u6211\u4EEC\u53EF\u4EE5\u8F6C\u5316\u4E00\u4E0B\u601D\u8DEF\uFF1A\u4E00\u4E2AJVM\u8FDB\u7A0B\uFF0C\u5728\u4EC0\u4E48\u60C5\u51B5\u4E0B\u4F1A\u6B63\u5E38\u9000\u51FA\uFF1F</p><h2 id="_2-\u4EC0\u4E48\u60C5\u51B5jvm\u8FDB\u7A0B-\u5728\u4EC0\u4E48\u60C5\u51B5\u4E0B\u4F1A\u6B63\u5E38\u9000\u51FA" tabindex="-1"><a class="header-anchor" href="#_2-\u4EC0\u4E48\u60C5\u51B5jvm\u8FDB\u7A0B-\u5728\u4EC0\u4E48\u60C5\u51B5\u4E0B\u4F1A\u6B63\u5E38\u9000\u51FA" aria-hidden="true">#</a> 2. \u4EC0\u4E48\u60C5\u51B5JVM\u8FDB\u7A0B\uFF0C\u5728\u4EC0\u4E48\u60C5\u51B5\u4E0B\u4F1A\u6B63\u5E38\u9000\u51FA\uFF1F</h2><h3 id="_2-1-\u65B9\u5F0F1-system-exit-\u6216runtime-exit" tabindex="-1"><a class="header-anchor" href="#_2-1-\u65B9\u5F0F1-system-exit-\u6216runtime-exit" aria-hidden="true">#</a> 2.1 \u65B9\u5F0F1\uFF1ASystem.exit()<code>\u6216</code>Runtime.exit()</h3><p>\u4F7F\u7528<code>System.exit()</code>\u6216<code>Runtime.exit()</code>\u53EF\u4EE5\u76F4\u63A5\u5BFC\u81F4\u5F53\u524DJVM\u8FDB\u7A0B\u9000\u51FA\uFF0C</p><p>\u4F46\u662F\u4ED4\u7EC6\u60F3\u60F3\u8FD9\u4E2A\u597D\u50CF\u8DDFSpringBoot\u6CA1\u5565\u5173\u7CFB\u54C8</p><h3 id="_2-2-\u65B9\u5F0F2-\u975Edaemon\u8FDB\u7A0B\u5B8C\u5168\u7EC8\u6B62" tabindex="-1"><a class="header-anchor" href="#_2-2-\u65B9\u5F0F2-\u975Edaemon\u8FDB\u7A0B\u5B8C\u5168\u7EC8\u6B62" aria-hidden="true">#</a> 2.2 \u65B9\u5F0F2\uFF1A<strong>\u975Edaemon\u8FDB\u7A0B\u5B8C\u5168\u7EC8\u6B62</strong></h3><p>\u53E6\u5916\u4E00\u4E2A\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8FDB\u7A0B\u9000\u51FA\u7684\u662F\u6240\u6709\u7684<strong>\u975Edaemon\u8FDB\u7A0B\u5B8C\u5168\u7EC8\u6B62</strong>\uFF0C\u90A3\u4E48\u6839\u636E\u8FD9\u4E2A\u6761\u4EF6\u53CD\u63A8\u7684\u8BDD\u662F\u4E0D\u662F\u8BF4\u53EA\u8981\u4FDD\u8BC1SpringBoot\u8FDB\u7A0B\u4E2D\u5305\u542B1\u4E2A\u4EE5\u4E0A\u7684daemon\u8FDB\u7A0B\u5C31\u53EF\u4EE5\u4FDD\u8BC1\u7A0B\u5E8F\u4E0D\u4F1A\u9000\u51FA</p><h2 id="_3-springboot\u662F\u5982\u4F55\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_3-springboot\u662F\u5982\u4F55\u5B9E\u73B0" aria-hidden="true">#</a> 3. SpringBoot\u662F\u5982\u4F55\u5B9E\u73B0</h2><p>\u6211\u4EEC\u4EE5SpringBoot\u9ED8\u8BA4\u4F7F\u7528\u7684Tomcat\u5BB9\u5668\u4E3A\u4F8B\uFF0C\u5728\u6211\u4E4B\u524DSpringBoot\u6E90\u7801\u5206\u6790\u7684\u6587\u7AE0\u4E2D\u4E5F\u63D0\u5230\u8FC7\uFF0C\u5728\u542F\u52A8Tomcat\u7684\u65F6\u5019\uFF0C\u4F1A\u8C03\u7528<code>TomcatWebServer</code>\u7684<code>initialize</code>\u65B9\u6CD5\uFF0C\u5728\u8FD9\u4E2A\u65B9\u6CD5\u4E2D\u4F1A\u8C03\u7528\u4E00\u4E2A<code>startDaemonAwaitThread</code>\u65B9\u6CD5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">startDaemonAwaitThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span> awaitThread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token string">&quot;container-&quot;</span> <span class="token operator">+</span> containerCounter<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">TomcatWebServer</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span>tomcat<span class="token punctuation">.</span><span class="token function">getServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        awaitThread<span class="token punctuation">.</span><span class="token function">setContextClassLoader</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        awaitThread<span class="token punctuation">.</span><span class="token function">setDaemon</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        awaitThread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u6211\u4EEC\u5728\u6DF1\u6316\u4E00\u4E0B\uFF0C\u5728Tomcat\u7684<code>this.tomcat.getServer().await()</code>\u8FD9\u4E2A\u65B9\u6CD5\u4E2D\uFF0C\u7EBF\u7A0B\u662F\u5982\u4F55\u5B9E\u73B0\u4E0D\u9000\u51FA\u7684\u3002\u8FD9\u91CC\u4E3A\u4E86\u9605\u8BFB\u65B9\u4FBF\uFF0C\u53BB\u6389\u4E86\u4E0D\u76F8\u5173\u7684\u4EE3\u7801\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span> port<span class="token operator">==</span><span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                awaitThread <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>stopAwait<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span> <span class="token number">10000</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span> <span class="token class-name">InterruptedException</span> ex <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token comment">// continue and check the flag</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                awaitThread <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728await\u65B9\u6CD5\u4E2D\uFF0C\u5B9E\u9645\u4E0A\u5F53\u524D\u7EBF\u7A0B\u5728\u4E00\u4E2Awhile\u5FAA\u73AF\u4E2D\u6BCF10\u79D2\u68C0\u67E5\u4E00\u6B21 stopAwait\u8FD9\u4E2A\u53D8\u91CF\uFF0C\u5B83\u662F\u4E00\u4E2Avolatile\u7C7B\u578B\u53D8\u91CF\uFF0C\u7528\u4E8E\u786E\u4FDD\u88AB\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u4FEE\u6539\u540E\uFF0C\u5F53\u524D\u7EBF\u7A0B\u80FD\u591F\u7ACB\u5373\u770B\u5230\u8FD9\u4E2A\u53D8\u5316\u3002\u5982\u679C\u6CA1\u6709\u53D8\u5316\uFF0C\u5C31\u4F1A\u4E00\u76F4\u5904\u4E8Ewhile\u5FAA\u73AF\u4E2D\u3002\u8FD9\u5C31\u662F\u8BE5\u7EBF\u7A0B\u4E0D\u9000\u51FA\u7684\u539F\u56E0\uFF0C\u4E5F\u5C31\u662F\u6574\u4E2Aspring-boot\u5E94\u7528\u4E0D\u9000\u51FA\u7684\u539F\u56E0\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,18),r={href:"https://mp.weixin.qq.com/s?__biz=MzU5MDgzOTYzMw==&mid=2247484897&idx=1&sn=abe1f147fc9e574393523ee0930aba9b&chksm=fe396fdfc94ee6c95a8e428f012e8922a7b8719bea48ea8086680b74265358a2ffb7acde53a4&scene=178&cur_album_id=1344428721251598337#rd",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const a=i("ExternalLinkIcon");return t(),e("div",null,[u,n("p",null,[n("a",r,[p("\u79D1\u666E\uFF1A\u4E3A\u4EC0\u4E48SpringBoot\u4E2Dmain\u65B9\u6CD5\u6267\u884C\u5B8C\u6BD5\u540E\u7A0B\u5E8F\u4E0D\u4F1A\u76F4\u63A5\u9000\u51FA\u5462"),o(a)])])])}const b=s(l,[["render",d],["__file","springboot-y-source-main.html.vue"]]);export{b as default};
