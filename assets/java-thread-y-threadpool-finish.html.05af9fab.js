import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as o,a as n,b as a,d as t,f as c,r as l}from"./app.a499ae15.js";const i={},u=c(`<h1 id="\u7EBF\u7A0B\u6C60\u6267\u884C\u5B8C\u6240\u6709\u4EFB\u52A1\u540E\u518D\u6267\u884C\u4E3B\u7EBF\u7A0B\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B\u6C60\u6267\u884C\u5B8C\u6240\u6709\u4EFB\u52A1\u540E\u518D\u6267\u884C\u4E3B\u7EBF\u7A0B\u65B9\u6848" aria-hidden="true">#</a> \u7EBF\u7A0B\u6C60\u6267\u884C\u5B8C\u6240\u6709\u4EFB\u52A1\u540E\u518D\u6267\u884C\u4E3B\u7EBF\u7A0B\u65B9\u6848</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u4E4B\u524D\u6709\u4E2A\u4E1A\u52A1\u9700\u8981\u5C06\u591A\u4EFDpdf\u8F6C\u6210\u56FE\u7247\uFF0C\u6700\u65E9\u6211\u4EEC\u662F\u5C06pdf\u6309\u987A\u5E8F\u4E00\u5F20\u5F20\u8F6C\u6362\u3002\u4F46\u662F\u8F6C\u6362\u65F6\u95F4\u5B9E\u5728\u592A\u957F\u3002</p><ul><li><p>\u6539\u8FDB\u6D41\u7A0B\u4E00\uFF1A</p><p>\u5C06pdf\u8F6C\u56FE\u7247\u505A\u6210\u5F02\u6B65\u5904\u7406\uFF0C\u901F\u5EA6\u662F\u5FEB\u4E86\uFF0C\u4F46\u662F\u5E76\u4E0D\u77E5\u9053\u4EC0\u4E48\u65F6\u5019\u7ED3\u675F\u3002\u67E5\u770B\u56FE\u7247\u65F6\u56FE\u7247\u90FD\u4E3A\u7A7A</p></li><li><p>\u6539\u8FDB\u6D41\u7A0B\u4E8C\uFF1A</p><p>\u4F7F\u7528CountDownLatch\u76D1\u542C\u7EBF\u7A0B\u6C60\u662F\u5426\u5168\u90E8\u6267\u884C\u5B8C\u6210\uFF0C\u6267\u884C\u5B8C\u6210\u540E\u624D\u8FD4\u56DE</p></li></ul><h2 id="_2-\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 2.\u89E3\u51B3\u65B9\u6848</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test1</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ExecutorService</span> executorService <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newCachedThreadPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">CountDownLatch</span> cdl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CountDownLatch</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Random</span> random <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> executorService<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ThreadTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">Test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u63D2\u5165\u6570\u636E\u5B8C\u6210\u540E  \u6267\u884C\u4FEE\u6539\u64CD\u4F5C</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            cdl<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B83\u4EEC\u5DF2\u7ECF\u63D2\u5B8C\u5566..............................&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        executorService<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">class</span> <span class="token class-name">ThreadTest</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>

        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u6267\u884C\u63D2\u5165\u6570\u636E\u64CD\u4F5C  \u6BCF\u6B21\u63D2\u5165\u4E00\u6761</span>
            <span class="token comment">// \u6A21\u62DF\u8017\u65F6</span>
            <span class="token keyword">int</span> time <span class="token operator">=</span> random<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\u6267\u884C\u5B8C\u4E86\uFF0C\u8017\u65F6\uFF1A&quot;</span> <span class="token operator">+</span> time <span class="token operator">/</span> <span class="token number">1000</span> <span class="token operator">+</span> <span class="token string">&quot;\u79D2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            cdl<span class="token punctuation">.</span><span class="token function">countDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210901205113806.png" alt="image-20210901205113806"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,8),k={href:"https://www.zhihu.com/question/52580874",target:"_blank",rel:"noopener noreferrer"},r={href:"https://www.jianshu.com/p/128476015902",target:"_blank",rel:"noopener noreferrer"};function d(m,v){const s=l("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[n("a",k,[a("Java\u7B49\u7EBF\u7A0B\u6C60\u6267\u884C\u5B8C\u6240\u6709\u4EFB\u52A1\u540E\u518D\u6267\u884C\u4E3B\u7EBF\u7A0B?"),t(s)])]),n("p",null,[n("a",r,[a("CountDownLatch\u8BE6\u89E3"),t(s)])])])}const w=p(i,[["render",d],["__file","java-thread-y-threadpool-finish.html.vue"]]);export{w as default};
