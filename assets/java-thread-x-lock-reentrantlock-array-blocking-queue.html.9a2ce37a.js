import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as n,b as p,d as o,f as c,r as l}from"./app.df1d0035.js";const i={},u=c(`<h1 id="reentrantlock\u548C\u6761\u4EF6\u9501condition\u5B9E\u73B0\u963B\u585E\u961F\u5217arrayblockingqueue" tabindex="-1"><a class="header-anchor" href="#reentrantlock\u548C\u6761\u4EF6\u9501condition\u5B9E\u73B0\u963B\u585E\u961F\u5217arrayblockingqueue" aria-hidden="true">#</a> ReentrantLock\u548C\u6761\u4EF6\u9501Condition\u5B9E\u73B0\u963B\u585E\u961F\u5217ArrayBlockingQueue</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u6BD4\u5982\u6700\u5178\u578B\u7684\u963B\u585E\u961F\u5217 ArrayBlockingQueue\uFF0C\u5F53\u961F\u5217\u4E2D\u6CA1\u6709\u5143\u7D20\u7684\u65F6\u5019\uFF0C\u4ED6\u65E0\u6CD5take\u51FA\u4E00\u4E2A\u5143\u7D20\uFF0C\u9700\u8981\u7B49\u5F85\u5176\u4ED6\u7EBF\u7A0B\u5165\u961F\u4E00\u4E2A\u5143\u7D20\u540E\u5524\u9192\u5B83\uFF0C\u624D\u80FD\u7EE7\u7EED\u5F39\u51FA\u5143\u7D20\u3002</p><h3 id="_1-1-\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-1-\u7279\u70B9" aria-hidden="true">#</a> 1.1 \u7279\u70B9</h3><p>\u963B\u585E\u961F\u5217\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u5148\u8FDB\u5148\u51FA\u961F\u5217,\u5B83\u6709\u4EE5\u4E0B\u51E0\u4E2A\u7279\u70B9 1.\u5165\u961F\u548C\u51FA\u961F\u7EBF\u7A0B\u5B89\u5168 2.\u5F53\u961F\u5217\u6EE1\u65F6,\u5165\u961F\u7EBF\u7A0B\u4F1A\u88AB\u963B\u585E;\u5F53\u961F\u5217\u4E3A\u7A7A\u65F6,\u51FA\u961F\u7EBF\u7A0B\u4F1A\u88AB\u963B\u585E\u3002</p><h2 id="_2-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9E\u73B0" aria-hidden="true">#</a> 2. \u5B9E\u73B0</h2><h3 id="_2-1-\u4E09\u4E2A\u91CD\u8981\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_2-1-\u4E09\u4E2A\u91CD\u8981\u7684\u5C5E\u6027" aria-hidden="true">#</a> 2.1 \u4E09\u4E2A\u91CD\u8981\u7684\u5C5E\u6027</h3><p>\u5B83\u6709\u4E09\u4E2A\u91CD\u8981\u7684\u5C5E\u6027\uFF0C\u4E00\u4E2A\u9501\u548C\u4E24\u4E2A\u6761\u4EF6\uFF0C\u6E90\u7801\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">ReentrantLock</span> lock<span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Condition</span> notEmpty<span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Condition</span> notFull<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u5728\u6784\u9020\u65B9\u6CD5\u4E2D\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5728\u6784\u9020\u65B9\u6CD5\u4E2D\u521D\u59CB\u5316" aria-hidden="true">#</a> 2.2 \u5728\u6784\u9020\u65B9\u6CD5\u4E2D\u521D\u59CB\u5316\uFF1A</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ArrayBlockingQueue</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">,</span> <span class="token keyword">boolean</span> fair<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>capacity <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span>capacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
    lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span>fair<span class="token punctuation">)</span><span class="token punctuation">;</span>
    notEmpty <span class="token operator">=</span> lock<span class="token punctuation">.</span><span class="token function">newCondition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    notFull <span class="token operator">=</span>  lock<span class="token punctuation">.</span><span class="token function">newCondition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-take-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-3-take-\u65B9\u6CD5" aria-hidden="true">#</a> 2.3 take() \u65B9\u6CD5\uFF1A</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">ReentrantLock</span> lock <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lock<span class="token punctuation">;</span>
    lock<span class="token punctuation">.</span><span class="token function">lockInterruptibly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
            notEmpty<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-enqueue-e-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-4-enqueue-e-\u65B9\u6CD5" aria-hidden="true">#</a> 2.4 enqueue(E)\u65B9\u6CD5\uFF1A</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token class-name">E</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// assert lock.getHoldCount() == 1;</span>
    <span class="token comment">// assert items[putIndex] == null;</span>
    <span class="token keyword">final</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> items <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">;</span>
    items<span class="token punctuation">[</span>putIndex<span class="token punctuation">]</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>putIndex <span class="token operator">==</span> items<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
        putIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    count<span class="token operator">++</span><span class="token punctuation">;</span>
    notEmpty<span class="token punctuation">.</span><span class="token function">signal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4E0A\u9762take\u65B9\u6CD5\u53EF\u4EE5\u770B\u51FA\uFF0C\u5F53\u961F\u5217\u4E3A\u7A7A\u65F6\uFF0C\u7EBF\u7A0B\u8981\u7B49\u5F85\u5165\u961F\u53D1\u751F\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u51FA\u961F\u8FD4\u56DE\uFF1B</p><p>\u5F53\u5165\u961F\u65B9\u6CD5enqueue\u8C03\u7528\u65F6\uFF0C\u961F\u5217\u4E0D\u4E3A\u7A7A\uFF0CnotEmpty.signal() \u5524\u9192\u7B49\u5F85\u7684\u7EBF\u7A0B\u3002</p><h3 id="_2-5-put-e-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-5-put-e-\u65B9\u6CD5" aria-hidden="true">#</a> 2.5 put(E)\u65B9\u6CD5\uFF1A</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token function">checkNotNull</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> <span class="token class-name">ReentrantLock</span> lock <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lock<span class="token punctuation">;</span>
    lock<span class="token punctuation">.</span><span class="token function">lockInterruptibly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> items<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
            notFull<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">enqueue</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63D2\u5165\u5143\u7D20\u7684\u65F6\u5019\uFF0C\u5982\u679C\u961F\u5217\u5DF2\u7ECF\u6EE1\u4E86\uFF0C\u7EBF\u7A0B\u8981\u7B49\u5F85\uFF0C\u7B49\u5F85\u961F\u5217\u4E0D\u662F\u6EE1\u7684\u72B6\u6001\u65F6\u624D\u53EF\u4EE5\u6267\u884C\u540E\u9762\u7684\u5165\u961F\u64CD\u4F5C\uFF1B</p><h3 id="_2-6-\u51FA\u961F\u6216remove\u7B49\u64CD\u4F5C\u4E4B\u540E-\u4F1A\u89E6\u53D1\u5524\u9192\u7B49\u5F85\u7684\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-6-\u51FA\u961F\u6216remove\u7B49\u64CD\u4F5C\u4E4B\u540E-\u4F1A\u89E6\u53D1\u5524\u9192\u7B49\u5F85\u7684\u7EBF\u7A0B" aria-hidden="true">#</a> 2.6 \u51FA\u961F\u6216remove\u7B49\u64CD\u4F5C\u4E4B\u540E\uFF0C\u4F1A\u89E6\u53D1\u5524\u9192\u7B49\u5F85\u7684\u7EBF\u7A0B\uFF1A</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">E</span> <span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// assert lock.getHoldCount() == 1;</span>
    <span class="token comment">// assert items[takeIndex] != null;</span>
    <span class="token keyword">final</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> items <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">E</span> x <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">)</span> items<span class="token punctuation">[</span>takeIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
    items<span class="token punctuation">[</span>takeIndex<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>takeIndex <span class="token operator">==</span> items<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
        takeIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    count<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>itrs <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        itrs<span class="token punctuation">.</span><span class="token function">elementDequeued</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    	notFull<span class="token punctuation">.</span><span class="token function">signal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0Csignal \u548C await \u8981\u6210\u5BF9\u8C03\u7528\uFF0C\u4E0D\u7136\u53EA\u8C03\u7528 await \u52A8\u4F5C\uFF0C\u7EBF\u7A0B\u5219\u4F1A\u4E00\u76F4\u7B49\u5F85\uFF0C\u9664\u975E\u7EBF\u7A0B\u88AB\u4E2D\u65AD\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,24),k={href:"https://jinglingwang.cn/archives/reentrantlock-condition",target:"_blank",rel:"noopener noreferrer"};function r(d,v){const a=l("ExternalLinkIcon");return e(),t("div",null,[u,n("p",null,[n("a",k,[p("\u6E90\u7801\u5206\u6790\uFF1A\u2461ReentrantLock\u4E4B\u6761\u4EF6\u9501Condition"),o(a)])])])}const h=s(i,[["render",r],["__file","java-thread-x-lock-reentrantlock-array-blocking-queue.html.vue"]]);export{h as default};
