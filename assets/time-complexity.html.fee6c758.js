import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.c2a49a29.js";const p={},t=e(`<p>“musk，为什么要讲时间复杂度呀？”三妹问。</p><p>“因为接下来要用到啊。后面我们学习 ArrayList、LinkedList 的时候，会比较两者在增删改查时的执行效率，而时间复杂度是衡量执行效率的一个重要标准。”我说。</p><p>“到时候跑一下代码，统计一下前后的时间差不更准确吗？”三妹反问道。</p><p>“实际上，你说的是另外一种评估方法，这种评估方法可以得出非常准确的数值，但也有很大的局限性。”我不急不慢地说。</p><p>第一，测试结果会受到测试环境的影响。你比如说，同样的代码，在我这台 iMac 上跑出来的时间和在你那台华为的 MacBook 上抛出的时间可能就差别很大。</p><p>第二，测试结果会受到测试数据的影响。你比如说，一个排序后的数组和一个没有排序后的数组，调用了同一个查询方法，得出来的结果可能会差别特别大。</p><p>“因此，我们需要这种不依赖于具体测试环境和测试数据就能粗略地估算出执行效率的方法，时间复杂度就是其中的一种，还有一种是空间复杂度。”我继续补充道。</p><p>来看下面这段代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 第 1 行</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 第 2 行</span>
        sum <span class="token operator">=</span> sum <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 第 3 行</span>
    <span class="token punctuation">}</span> <span class="token comment">// 第 4 行</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span> <span class="token comment">// 第 5 行</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码非常简单，方法体里总共 5 行代码，包括“}”那一行。每段代码的执行时间可能都不大一样，但假设我们认为每行代码的执行时间是一样的，比如说 unit_time，那么这段代码总的执行时间为多少呢？</p><p>“这个我知道呀！”三妹喊道，“第 1、5 行需要 2 个 unit_time，第 2、3 行需要 2<em>n</em>unit_time，总的时间就是 2(n+1)*unit_time。”</p><p>“对，一段代码的执行时间 T(n) 和总的执行次数成正比，也就是说，代码执行的次数越多，花费的时间就越多。”我总结道，“这个规律可以用一个公式来表达：”</p><blockquote><p>T(n) = O(f(n))</p></blockquote><p>f(n) 表示代码总的执行次数，大写 O 表示代码的执行时间 T(n) 和 f(n) 成正比。</p><p>这也就是大 O 表示法，它不关心代码具体的执行时间是多少，它关心的是代码执行时间的变化趋势，这也就是时间复杂度这个概念的由来。</p><p>对于上面那段代码 <code>sum()</code> 来说，影响时间复杂度的主要是第 2 行代码，其余的，像系数 2、常数 2 都是可以忽略不计的，我们只关心影响最大的那个，所以时间复杂度就表示为 <code>O(n)</code>。</p><p>常见的时间复杂度有这么 3 个：</p><h2 id="_1-o-1" tabindex="-1"><a class="header-anchor" href="#_1-o-1" aria-hidden="true">#</a> 1）<code>O(1)</code></h2><p>代码的执行时间，和数据规模 n 没有多大关系。</p><p>括号中的 1 可以是 3，可以是 5，可以 100，我们习惯用 1 来表示，表示这段代码的执行时间是一个常数级别。比如说下面这段代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> k <span class="token operator">=</span> i <span class="token operator">+</span> j<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上执行了 3 次，但我们也认为这段代码的时间复杂度为 <code>O(1)</code>。</p><h2 id="_2-o-n" tabindex="-1"><a class="header-anchor" href="#_2-o-n" aria-hidden="true">#</a> 2）<code>O(n)</code></h2><p>时间复杂度和数据规模 n 是线性关系。换句话说，数据规模增大 K 倍，代码执行的时间就大致增加 K 倍。</p><h2 id="_3-o-logn" tabindex="-1"><a class="header-anchor" href="#_3-o-logn" aria-hidden="true">#</a> 3）<code>O(logn)</code></h2><p>时间复杂度和数据规模 n 是对数关系。换句话说，数据规模大幅增加时，代码执行的时间只有少量增加。</p><p>来看一下代码示例，</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">logn</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i <span class="token operator">*=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>换句话说，当数据量 n 从 2 增加到 2^64 时，代码执行的时间只增加 64 倍。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>遍历次数 |   i
----------+-------
    0     |   i
    1     |  i*2
    2     |  i*4
   ...    |  ...
   ...    |  ...
    k     |  i*2^k 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“好了，三妹，这节就讲到这吧，理解了上面 3 个时间复杂度，后面我们学习 ArrayList、LinkedList 的时候，两者在增删改查时的执行效率就很容易对比清楚了。”我伸了个懒腰后对三妹说，“整体上，集合框架就这么多东西了，随后我们会一一展开来讲，比如说 ArrayList、LinkedList、HashMap 等。”。</p><p>“好的，musk。”三妹重新回答沙发上，一盘王者荣耀即将开始。</p><hr>`,33),o=[t];function i(c,l){return s(),a("div",null,o)}const u=n(p,[["render",i],["__file","time-complexity.html.vue"]]);export{u as default};
