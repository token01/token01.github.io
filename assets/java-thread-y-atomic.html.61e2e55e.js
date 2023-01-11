import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as n,b as o,d as c,f as i,r as p}from"./app.89148984.js";const l={},r=i(`<h1 id="atomic\u539F\u5B50\u7C7B" tabindex="-1"><a class="header-anchor" href="#atomic\u539F\u5B50\u7C7B" aria-hidden="true">#</a> Atomic\u539F\u5B50\u7C7B</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>Java\u4ECEJDK1.5\u5F00\u59CB\u63D0\u4F9B\u4E86java.util.concurrent.atomic\u5305\uFF0C<strong>atomic\u5305\u4E2D\u7684\u7C7B\u7528\u4E8E\u5728\u591A\u7EBF\u7A0B\u73AF\u5883\u4E0B\u5B9E\u73B0\u5355\u4E2A\u53D8\u91CF\u591A\u4E2A\u72EC\u7ACB\u64CD\u4F5C\uFF08\u6BD4\u5982\u8BFB-\u5199\uFF09\u7684\u8FDE\u7EED\u539F\u5B50\u6027\u3002</strong></p><p>\u5E76\u4E14\u90FD\u6BD4\u8F83\u9AD8\u6548\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u90FD\u662F\u7531\u57FA\u4E8E\u504F\u79FB\u91CF\uFF08\u7C7B\u4F3C\u4E8E\u6307\u9488\uFF09\u7684<strong>\u975E\u963B\u585ECAS\u7B97\u6CD5\u5B9E\u73B0\uFF0C\u7528\u4E8E\u66FF\u4EE3\u9501\u7684\u4F7F\u7528\u3002</strong></p><blockquote><p>\u65E0\u9501\u7684\u8FDB\u884C\u539F\u5B50\u64CD\u4F5C\uFF0C\u7528\u4E8E\u66FF\u4EE3\u9501\u7684\u4F7F\u7528</p><p>\u539F\u7406\uFF1A<strong>volatile\u5B57\u6BB5\u4FEE\u9970\u7B26+CAS\u7B97\u6CD5\uFF08Unsafe\u63D0\u4F9B\uFF09</strong></p></blockquote><h2 id="_2-juc\u5305\u4E2D\u76844\u7C7B\u539F\u5B50\u7C7B" tabindex="-1"><a class="header-anchor" href="#_2-juc\u5305\u4E2D\u76844\u7C7B\u539F\u5B50\u7C7B" aria-hidden="true">#</a> 2. JUC\u5305\u4E2D\u76844\u7C7B\u539F\u5B50\u7C7B</h2><p>\u5E76\u53D1\u5305 <code>java.util.concurrent</code> \u7684\u539F\u5B50\u7C7B\u90FD\u5B58\u653E\u5728<code>java.util.concurrent.atomic</code>\u4E0B,\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190917225827634.png" alt="image-20190917225827634"></p><h3 id="_2-1-\u57FA\u672C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-1-\u57FA\u672C\u7C7B\u578B" aria-hidden="true">#</a> <strong>2.1 \u57FA\u672C\u7C7B\u578B</strong></h3><p>\u4F7F\u7528\u539F\u5B50\u7684\u65B9\u5F0F\u66F4\u65B0\u57FA\u672C\u7C7B\u578B</p><ul><li>AtomicInteger\uFF1A\u6574\u5F62\u539F\u5B50\u7C7B</li><li>AtomicLong\uFF1A\u957F\u6574\u578B\u539F\u5B50\u7C7B</li><li>AtomicBoolean\uFF1A\u5E03\u5C14\u578B\u539F\u5B50\u7C7B</li></ul><h3 id="_2-2-\u6570\u7EC4\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-2-\u6570\u7EC4\u7C7B\u578B" aria-hidden="true">#</a> <strong>2.2 \u6570\u7EC4\u7C7B\u578B</strong></h3><p>\u4F7F\u7528\u539F\u5B50\u7684\u65B9\u5F0F\u66F4\u65B0\u6570\u7EC4\u91CC\u7684\u67D0\u4E2A\u5143\u7D20</p><ul><li>AtomicIntegerArray\uFF1A\u6574\u5F62\u6570\u7EC4\u539F\u5B50\u7C7B</li><li>AtomicLongArray\uFF1A\u957F\u6574\u5F62\u6570\u7EC4\u539F\u5B50\u7C7B</li><li>AtomicReferenceArray\uFF1A\u5F15\u7528\u7C7B\u578B\u6570\u7EC4\u539F\u5B50\u7C7B</li></ul><h3 id="_2-3-\u5F15\u7528\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5F15\u7528\u7C7B\u578B" aria-hidden="true">#</a> 2.3 <strong>\u5F15\u7528\u7C7B\u578B</strong></h3><ul><li>AtomicReference\uFF1A\u5F15\u7528\u7C7B\u578B\u539F\u5B50\u7C7B</li><li>AtomicStampedReference\uFF1A\u539F\u5B50\u66F4\u65B0\u5F15\u7528\u7C7B\u578B\u91CC\u7684\u5B57\u6BB5\u539F\u5B50\u7C7B</li><li>AtomicMarkableReference \uFF1A\u539F\u5B50\u66F4\u65B0\u5E26\u6709\u6807\u8BB0\u4F4D\u7684\u5F15\u7528\u7C7B\u578B</li></ul><h3 id="_2-4-\u5BF9\u8C61\u7684\u5C5E\u6027\u4FEE\u6539\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-4-\u5BF9\u8C61\u7684\u5C5E\u6027\u4FEE\u6539\u7C7B\u578B" aria-hidden="true">#</a> <strong>2.4 \u5BF9\u8C61\u7684\u5C5E\u6027\u4FEE\u6539\u7C7B\u578B</strong></h3><ul><li>AtomicIntegerFieldUpdater\uFF1A\u539F\u5B50\u66F4\u65B0\u6574\u5F62\u5B57\u6BB5\u7684\u66F4\u65B0\u5668</li><li>AtomicLongFieldUpdater\uFF1A\u539F\u5B50\u66F4\u65B0\u957F\u6574\u5F62\u5B57\u6BB5\u7684\u66F4\u65B0\u5668</li><li>AtomicStampedReference\uFF1A\u539F\u5B50\u66F4\u65B0\u5E26\u6709\u7248\u672C\u53F7\u7684\u5F15\u7528\u7C7B\u578B\u3002\u8BE5\u7C7B\u5C06\u6574\u6570\u503C\u4E0E\u5F15\u7528\u5173\u8054\u8D77\u6765\uFF0C\u53EF\u7528\u4E8E\u89E3\u51B3\u539F\u5B50\u7684\u66F4\u65B0\u6570\u636E\u548C\u6570\u636E\u7684\u7248\u672C\u53F7\uFF0C\u53EF\u4EE5\u89E3\u51B3\u4F7F\u7528 CAS \u8FDB\u884C\u539F\u5B50\u66F4\u65B0\u65F6\u53EF\u80FD\u51FA\u73B0\u7684 ABA \u95EE\u9898\u3002</li></ul><h2 id="_3-\u5E26\u7248\u672C\u53F7\u7684\u539F\u5B50\u7C7B" tabindex="-1"><a class="header-anchor" href="#_3-\u5E26\u7248\u672C\u53F7\u7684\u539F\u5B50\u7C7B" aria-hidden="true">#</a> 3. \u5E26\u7248\u672C\u53F7\u7684\u539F\u5B50\u7C7B</h2><p>\u901A\u8FC7\u539F\u5B50\u7684\u65B9\u5F0F\u66F4\u65B0\u5355\u4E2A\u53D8\u91CF\u7684\u539F\u5B50\u7C7B\u7684\u5347\u7EA7\u7248\uFF0CAtomic\u5305\u63D0\u4F9B\u4E86\u4EE5\u4E0B2\u4E2A\u7C7B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. AtomicMarkableReference&lt; V &gt;\uFF1A\u7EF4\u62A4\u5E26\u6709\u6807\u8BB0\u4F4D\u7684\u5BF9\u8C61\u5F15\u7528\uFF0C\u53EF\u4EE5\u539F\u5B50\u65B9\u5F0F\u5BF9\u5176\u8FDB\u884C\u66F4\u65B0\u3002
2. AtomicStampedReference&lt; V &gt;\uFF1A\u7EF4\u62A4\u5E26\u6709\u6574\u6570\u6807\u5FD7\u7684\u5BF9\u8C61\u5F15\u7528\uFF0C\u53EF\u7528\u539F\u5B50\u65B9\u5F0F\u5BF9\u5176\u8FDB\u884C\u66F4\u65B0\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4E24\u4E2A\u539F\u5B50\u7C7B\u7684\u65B9\u6CD5\u4EE5\u53CA\u539F\u7406\u51E0\u4E4E\u4E00\u81F4\uFF0C\u5C5E\u4E8E\u5E26\u6709\u7248\u672C\u53F7\u7684\u539F\u5B50\u7C7B\u3002</p><h3 id="_3-1-\u4E3A\u4EC0\u4E48\u9700\u8981\u5E26\u7248\u672C\u53F7-aba\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_3-1-\u4E3A\u4EC0\u4E48\u9700\u8981\u5E26\u7248\u672C\u53F7-aba\u95EE\u9898" aria-hidden="true">#</a> 3.1 \u4E3A\u4EC0\u4E48\u9700\u8981\u5E26\u7248\u672C\u53F7\uFF1F\uFF08ABA\u95EE\u9898\uFF09</h3><p>\u6211\u4EEC\u77E5\u9053CAS\u64CD\u4F5C\u7684\u4E09\u5927\u95EE\u9898\u4E4B\u4E00\u5C31\u662F\u201CABA\u201D\u95EE\u9898\uFF1A<strong>CAS\u5728\u64CD\u4F5C\u503C\u7684\u65F6\u5019\uFF0C\u9700\u8981\u68C0\u67E5\u9884\u671F\u503C\u6709\u6CA1\u6709\u53D1\u751F\u53D8\u5316\uFF0C\u5982\u679C\u6CA1\u6709\u53D1\u751F\u53D8\u5316\u5219\u66F4\u65B0\u3002\u4F46\u662F\uFF0C\u5982\u679C\u4E00\u4E2A\u7EBF\u7A0Bt1\u9996\u5148\u83B7\u53D6\u4E86\u9884\u671F\u503CA\uFF0C\u6B64\u65F6\u53E6\u4E00\u4E2A\u7EBF\u7A0Bt2\u5219\u5C06\u503C\u4ECEA\u53D8\u6210\u4E86B\uFF0C\u968F\u540E\u53C8\u53D8\u6210\u4E86A\uFF0C\u968F\u540Et1\u518D\u4F7F\u7528CAS\u8FDB\u884C\u6BD4\u8F83\u4EA4\u6362\u7684\u65F6\u5019\uFF0C\u4F1A\u53D1\u73B0\u5B83\u7684\u9884\u671F\u503C\u201C\u6CA1\u6709\u53D8\u5316\u201D\uFF0C\u4F46\u5B9E\u9645\u4E0A\u662F\u53D8\u5316\u8FC7\u7684\u3002\u8FD9\u5C31\u662FABA\u95EE\u9898\u7684\u7531\u6765</strong>\u3002</p><h3 id="_3-2-\u5982\u4F55\u89E3\u51B3aba\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5982\u4F55\u89E3\u51B3aba\u95EE\u9898" aria-hidden="true">#</a> 3.2 \u5982\u4F55\u89E3\u51B3ABA\u95EE\u9898</h3><p>ABA\u95EE\u9898\u7684\u89E3\u51B3\u601D\u8DEF\u5C31\u662F\u4F7F\u7528\u7248\u672C\u53F7\uFF0C1A-&gt;2B-&gt;3A\uFF0C\u5728Atomic\u5305\u4E2D\uFF0C\u63D0\u4F9B\u4E86\u4E00\u4E2A\u73B0\u6210\u7684AtomicStampedReference\u7C7B\u6765\u89E3\u51B3ABA\u95EE\u9898\uFF0C\u4F7F\u7528\u7684\u5C31\u662F\u6DFB\u52A0\u7248\u672C\u53F7\u7684\u65B9\u6CD5\u3002\u8FD8\u6709\u4E00\u4E2AAtomicMarkableReference\u5B9E\u73B0\u7C7B\uFF0C\u5B83\u6BD4AtomicStampedReference\u66F4\u52A0\u7B80\u5355\uFF0CAtomicStampedReference\u4E2D\u6BCF\u66F4\u65B0\u4E00\u6B21\u6570\u636E\u7248\u672C\u53F7\u4E5F\u4F1A\u66F4\u65B0\u4E00\u6B21\uFF0C\u8FD9\u6837\u53EF\u4EE5\u4F7F\u7528\u7248\u672C\u53F7\u7EDF\u8BA1\u5230\u5E95\u66F4\u65B0\u4E86\u591A\u5C11\u6B21\uFF0C\u800CAtomicMarkableReference\u4EC5\u4EC5\u4F7F\u7528\u4E86\u4E00\u4E2Aboolean\u503C\u6765\u8868\u793A\u503C\u662F\u5426\u6539\u53D8\u8FC7\uFF0C\u56E0\u6B64\u4F7F\u7528\u7684\u6BD4\u8F83\u5C11\u3002</p><h2 id="_4-atomicinteger-\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_4-atomicinteger-\u7684\u4F7F\u7528" aria-hidden="true">#</a> 4. AtomicInteger \u7684\u4F7F\u7528</h2><p><strong>AtomicInteger \u7C7B\u5E38\u7528\u65B9\u6CD5</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u83B7\u53D6\u5F53\u524D\u7684\u503C</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getAndSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> newValue<span class="token punctuation">)</span><span class="token comment">//\u83B7\u53D6\u5F53\u524D\u7684\u503C\uFF0C\u5E76\u8BBE\u7F6E\u65B0\u7684\u503C</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getAndIncrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//\u83B7\u53D6\u5F53\u524D\u7684\u503C\uFF0C\u5E76\u81EA\u589E</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getAndDecrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u83B7\u53D6\u5F53\u524D\u7684\u503C\uFF0C\u5E76\u81EA\u51CF</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getAndAdd</span><span class="token punctuation">(</span><span class="token keyword">int</span> delta<span class="token punctuation">)</span> <span class="token comment">//\u83B7\u53D6\u5F53\u524D\u7684\u503C\uFF0C\u5E76\u52A0\u4E0A\u9884\u671F\u7684\u503C</span>
<span class="token keyword">boolean</span> <span class="token function">compareAndSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> expect<span class="token punctuation">,</span> <span class="token keyword">int</span> update<span class="token punctuation">)</span> <span class="token comment">//\u5982\u679C\u8F93\u5165\u7684\u6570\u503C\u7B49\u4E8E\u9884\u671F\u503C\uFF0C\u5219\u4EE5\u539F\u5B50\u65B9\u5F0F\u5C06\u8BE5\u503C\u8BBE\u7F6E\u4E3A\u8F93\u5165\u503C\uFF08update\uFF09</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">lazySet</span><span class="token punctuation">(</span><span class="token keyword">int</span> newValue<span class="token punctuation">)</span><span class="token comment">//\u6700\u7EC8\u8BBE\u7F6E\u4E3AnewValue,\u4F7F\u7528 lazySet \u8BBE\u7F6E\u4E4B\u540E\u53EF\u80FD\u5BFC\u81F4\u5176\u4ED6\u7EBF\u7A0B\u5728\u4E4B\u540E\u7684\u4E00\u5C0F\u6BB5\u65F6\u95F4\u5185\u8FD8\u662F\u53EF\u4EE5\u8BFB\u5230\u65E7\u7684\u503C\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>AtomicInteger \u7C7B\u7684\u4F7F\u7528\u793A\u4F8B</strong></p><p>\u4F7F\u7528 AtomicInteger \u4E4B\u540E\uFF0C\u4E0D\u7528\u5BF9 increment() \u65B9\u6CD5\u52A0\u9501\u4E5F\u53EF\u4EE5\u4FDD\u8BC1\u7EBF\u7A0B\u5B89\u5168\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">AtomicIntegerTest</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token class-name">AtomicInteger</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//\u4F7F\u7528AtomicInteger\u4E4B\u540E\uFF0C\u4E0D\u9700\u8981\u5BF9\u8BE5\u65B9\u6CD5\u52A0\u9501\uFF0C\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u7EBF\u7A0B\u5B89\u5168\u3002</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  count<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
     
       <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-atomicinteger-\u7C7B\u7684\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_5-atomicinteger-\u7C7B\u7684\u539F\u7406" aria-hidden="true">#</a> 5. AtomicInteger \u7C7B\u7684\u539F\u7406</h2><p>AtomicInteger \u7C7B\u7684\u90E8\u5206\u6E90\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token comment">// setup to use Unsafe.compareAndSwapInt for updates\uFF08\u66F4\u65B0\u64CD\u4F5C\u65F6\u63D0\u4F9B\u201C\u6BD4\u8F83\u5E76\u66FF\u6362\u201D\u7684\u4F5C\u7528\uFF09</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Unsafe</span> unsafe <span class="token operator">=</span> <span class="token class-name">Unsafe</span><span class="token punctuation">.</span><span class="token function">getUnsafe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> valueOffset<span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            valueOffset <span class="token operator">=</span> unsafe<span class="token punctuation">.</span>objectFieldOffset
                <span class="token punctuation">(</span><span class="token class-name">AtomicInteger</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>ex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> value<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AtomicInteger \u7C7B\u4E3B\u8981\u5229\u7528 CAS (compare and swap) + volatile \u548C native \u65B9\u6CD5\u6765\u4FDD\u8BC1\u539F\u5B50\u64CD\u4F5C\uFF0C\u4ECE\u800C\u907F\u514D synchronized \u7684\u9AD8\u5F00\u9500\uFF0C\u6267\u884C\u6548\u7387\u5927\u4E3A\u63D0\u5347\u3002</p><p>CAS\u7684\u539F\u7406\u662F\u62FF\u671F\u671B\u7684\u503C\u548C\u539F\u672C\u7684\u4E00\u4E2A\u503C\u4F5C\u6BD4\u8F83\uFF0C\u5982\u679C\u76F8\u540C\u5219\u66F4\u65B0\u6210\u65B0\u7684\u503C\u3002UnSafe \u7C7B\u7684 objectFieldOffset() \u65B9\u6CD5\u662F\u4E00\u4E2A\u672C\u5730\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u662F\u7528\u6765\u62FF\u5230\u201C\u539F\u6765\u7684\u503C\u201D\u7684\u5185\u5B58\u5730\u5740\uFF0C\u8FD4\u56DE\u503C\u662F valueOffset\u3002\u53E6\u5916 value \u662F\u4E00\u4E2Avolatile\u53D8\u91CF\uFF0C\u5728\u5185\u5B58\u4E2D\u53EF\u89C1\uFF0C\u56E0\u6B64 JVM \u53EF\u4EE5\u4FDD\u8BC1\u4EFB\u4F55\u65F6\u523B\u4EFB\u4F55\u7EBF\u7A0B\u603B\u80FD\u62FF\u5230\u8BE5\u53D8\u91CF\u7684\u6700\u65B0\u503C\u3002</p><h2 id="_6-jdk1-8\u4E2D\u65B0\u589E\u7684\u539F\u5B50\u52A0\u5F3A\u7C7B" tabindex="-1"><a class="header-anchor" href="#_6-jdk1-8\u4E2D\u65B0\u589E\u7684\u539F\u5B50\u52A0\u5F3A\u7C7B" aria-hidden="true">#</a> 6. JDK1.8\u4E2D\u65B0\u589E\u7684\u539F\u5B50\u52A0\u5F3A\u7C7B</h2><h3 id="_6-1-jdk1-8-\u65B0\u589E\u7684\u539F\u5B50\u52A0\u5F3A\u7C7B" tabindex="-1"><a class="header-anchor" href="#_6-1-jdk1-8-\u65B0\u589E\u7684\u539F\u5B50\u52A0\u5F3A\u7C7B" aria-hidden="true">#</a> 6.1 jdk1.8 \u65B0\u589E\u7684\u539F\u5B50\u52A0\u5F3A\u7C7B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. LongAdder\uFF1Along\u7C7B\u578B\u7684\u6570\u503C\u7D2F\u52A0\u5668\uFF0C\u4ECE0\u5F00\u59CB\u7D2F\u52A0\uFF0C\u7D2F\u52A0\u89C4\u5219\u4E3A\u52A0\u6CD5\u8FD0\u7B97\u3002
2. LongAccumulator\uFF1Along\u7C7B\u578B\u7684\u6570\u503C\u7D2F\u52A0\u5668\uFF0C\u53EF\u4ECE\u6307\u5B9A\u503C\u5F00\u59CB\u7D2F\u52A0\uFF0C\u53EF\u6307\u5B9A\u7D2F\u52A0\u89C4\u5219\u3002
3. DoubleAdder\uFF1Adouble\u7C7B\u578B\u7684\u6570\u503C\u7D2F\u52A0\u5668\uFF0C\u4ECE0\u5F00\u59CB\u7D2F\u52A0\uFF0C\u7D2F\u52A0\u89C4\u5219\u4E3A\u52A0\u6CD5\u8FD0\u7B97\u3002
4. DoubleAccumulator\uFF1Adouble\u7C7B\u578B\u7684\u6570\u503C\u7D2F\u52A0\u5668\uFF0C\u53EF\u4ECE\u6307\u5B9A\u503C\u5F00\u59CB\u7D2F\u52A0\uFF0C\u53EF\u6307\u5B9A\u7D2F\u52A0\u89C4\u5219\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-\u4E3A\u4EC0\u4E48\u9700\u8981\u52A0\u5F3A" tabindex="-1"><a class="header-anchor" href="#_6-2-\u4E3A\u4EC0\u4E48\u9700\u8981\u52A0\u5F3A" aria-hidden="true">#</a> 6.2 \u4E3A\u4EC0\u4E48\u9700\u8981\u52A0\u5F3A</h3><p>\u81EA\u4ECE\u539F\u5B50\u7C7B\u95EE\u4E16\u4E4B\u540E\uFF0C<strong>\u591A\u7EBF\u7A0B\u73AF\u5883\u4E0B\u5982\u679C\u7528\u4E8E\u7EDF\u8BA1\u8BA1\u6570\u64CD\u4F5C\uFF0C\u4E00\u822C\u53EF\u4EE5\u4F7F\u7528AtomicLong\u6765\u4EE3\u66FF\u9501\u4F5C\u4E3A\u8BA1\u6570\u5668</strong>\uFF0CAtomicLong \u901A\u8FC7CAS \u63D0\u4F9B\u4E86\u975E\u963B\u585E\u7684\u539F\u5B50\u6027\u64CD\u4F5C\uFF0C\u76F8\u6BD4\u4F7F\u7528\u963B\u585E\u7B97\u6CD5\u7684\u540C\u6B65\u5668\u6765\u8BF4\u5B83\u7684\u6027\u80FD\u5DF1\u7ECF\u5F88\u597D\u4E86\uFF0C\u90A3\u4E48\uFF0C\u5B83\u4EEC\u6709\u4EC0\u4E48\u7F3A\u70B9\u5417\uFF1F</p><p>\u5B9E\u9645\u4E0A\uFF0CAtomicLong\u7B49\u5176\u4ED6\u4F20\u7EDF\u7684atomic\u539F\u5B50\u7C7B\u5BF9\u4E8E\u6570\u503C\u7684\u66F4\u6539\uFF0C\u901A\u5E38\u90FD\u662F<strong>\u5728\u4E00\u4E2A\u65E0\u9650\u5FAA\u73AF\uFF08\u81EA\u65CB\uFF09\u4E2D\u4E0D\u65AD\u5C1D\u8BD5CAS \u7684\u4FEE\u6539\u64CD\u4F5C\uFF0C\u4E00\u65E6CAS\u5931\u8D25\u5219\u5FAA\u73AF\u91CD\u8BD5\uFF0C\u8FD9\u6837\u6765\u4FDD\u8BC1\u6700\u7EC8CAS\u64CD\u4F5C\u6210\u529F</strong>\u3002\u5982\u679C\u7ADE\u4E89\u4E0D\u6FC0\u70C8\uFF0C\u90A3\u4E48\u4FEE\u6539\u6210\u529F\u7684\u6982\u7387\u5C31\u5F88\u9AD8\uFF0C\u4F46\u662F\u5982\u679C<strong>\u5728\u9AD8\u5E76\u53D1\u4E0B\u5927\u91CF\u7EBF\u7A0B\u9891\u7E41\u7684\u7ADE\u4E89\u4FEE\u6539\u8BA1\u6570\u5668\uFF0C\u4F1A\u9020\u6210\u4E00\u6B21CAS\u4FEE\u6539\u5931\u8D25\u7684\u6982\u7387\u5C31\u5F88\u9AD8</strong>\u3002\u5728\u5927\u91CF\u4FEE\u6539\u5931\u8D25\u65F6\uFF0C\u8FD9\u4E9B\u539F\u5B50\u64CD\u4F5C\u5C31\u4F1A\u8FDB\u884C\u591A\u6B21\u5FAA\u73AF\u5C1D\u8BD5**\uFF0C\u767D\u767D\u6D6A\u8D39CPU \u8D44\u6E90\uFF0C\u56E0\u6B64\u6027\u80FD\u8FD8\u662F\u4F1A\u53D7\u5230\u5F71\u54CD**\u3002</p><p><strong>JDK1.8\u65B0\u589E\u8FD9\u4E9B\u7C7B\uFF0C\u6B63\u662F\u4E3A\u4E86\u89E3\u51B3\u9AD8\u5E76\u53D1\u73AF\u5883\u4E0B\u7531\u4E8E\u9891\u7E41\u8BFB\u5199AtomicLong\u7B49\u8BA1\u6570\u5668\u800C\u53EF\u80FD\u9020\u6210\u67D0\u4E9B\u7EBF\u7A0B\u6301\u7EED\u7684\u7A7A\u8F6C\uFF08\u5FAA\u73AF\uFF09\u8FDB\u800C\u6D6A\u8D39CPU\u7684\u60C5\u51B5\uFF0C\u5B83\u4EEC\u4E5F\u88AB\u79F0\u4E3A\u201C\u7D2F\u52A0\u5668\u201D\uFF01</strong></p><h2 id="_7-atomic-\u5408\u9002\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_7-atomic-\u5408\u9002\u573A\u666F" aria-hidden="true">#</a> 7. atomic \u5408\u9002\u573A\u666F</h2><p><strong>\u5355\u4E2A\u53D8\u91CF\u7684\u590D\u5408\u64CD\u4F5C\uFF08\u6BD4\u5982\u8BFB-\u5199\uFF09\u4E2D\u53EF\u4EE5\u4EE3\u66FF\u9501\u7684\u6765\u4FDD\u8BC1\u64CD\u4F5C\u7684\u539F\u5B50\u6027\u548C\u5B89\u5168\u6027\uFF0C\u5E76\u4E14\u7531\u4E8E\u6CA1\u6709\u4F7F\u7528\u9501\u800C\u6709\u4E0D\u9519\u7684\u6027\u80FD</strong></p><blockquote><p>\u5BF9\u4E8E\u591A\u4E2A\u53D8\u91CF\u7684\u590D\u5408\u64CD\u4F5C\u4EE5\u53CA\u4E00\u6279\u4EE3\u7801\u7684\u539F\u5B50\u6027\u548C\u5B89\u5168\u6027\u5374\u65E0\u80FD\u4E3A\u529B\uFF0C\u6B64\u65F6\u53EA\u80FD\u4F7F\u7528\u9501\u3002</p></blockquote><h2 id="_8-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_8-\u603B\u7ED3" aria-hidden="true">#</a> 8. \u603B\u7ED3</h2><p>\u5B9E\u9645\u4E0Avolatile\u5173\u952E\u5B57\u4EE5\u53CAUnsafe\u7C7B\u63D0\u4F9B\u7684CAS\u7684\u65B9\u6CD5\u5C31\u662F\u6784\u6210\u539F\u5B50\u7C7B\u7684\u57FA\u77F3\uFF0C\u539F\u5B50\u7C7B\u7684\u65B9\u6CD5\u5B9E\u9645\u4E0A\u5C31\u662F\u5BF9\u4E8EUnsafe\u4E2D\u7684CAS\u65B9\u6CD5\u7684\u4E8C\u6B21\u5305\u88C5\uFF0C\u65B9\u4FBF\u5F00\u53D1\u4EBA\u5458\u4F7F\u7528\u800C\u5DF2\u3002Unsafe\u4E2D\u7684CAS\u65B9\u6CD5\u4F5C\u4E3Anative\u65B9\u6CD5\uFF0C\u672C\u8EAB\u5E76\u4E0D\u662FJava\u8BED\u8A00\u5B9E\u73B0\u7684\uFF0C\u5B83\u4EEC\u7684\u6E90\u7801\u4F4D\u4E8EJVM\u865A\u62DF\u673A\u7684\u6E90\u7801\u4E2D\uFF0CHotSpot\u865A\u62DF\u673A\u7684\u6E90\u7801\u4E2D\u5C31\u6709\u8FD9\u4E9Bnative\u65B9\u6CD5\u7684\u5177\u4F53\u5B9E\u73B0\uFF0C\u5B83\u4EEC\u90FD\u662F\u91C7\u7528C++\u7684\u4EE3\u7801\u5B9E\u73B0\u7684\uFF0C\u65B9\u4FBF\u4E0E\u5E95\u5C42\u7CFB\u7EDF\u4EA4\u4E92\uFF0C\u5728openjdk\u4E2D\u53EF\u4EE5\u627E\u5230\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,50),d={href:"https://blog.csdn.net/weixin_43767015/article/details/107895944",target:"_blank",rel:"noopener noreferrer"};function u(k,m){const a=p("ExternalLinkIcon");return e(),t("div",null,[r,n("p",null,[n("a",d,[o("Java atomic\u539F\u5B50\u64CD\u4F5C\u7C7B\u7684\u4ECB\u7ECD"),c(a)])])])}const g=s(l,[["render",u],["__file","java-thread-y-atomic.html.vue"]]);export{g as default};
