import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,a as n,b as p,d as c,f as o,r as l}from"./app.ec219279.js";const i={},u=o(`<h1 id="reentrantlock\u6E90\u7801\u5206\u6790-\u4E09-\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#reentrantlock\u6E90\u7801\u5206\u6790-\u4E09-\u5E94\u7528" aria-hidden="true">#</a> ReentrantLock\u6E90\u7801\u5206\u6790(\u4E09)-\u5E94\u7528</h1><h2 id="_1-aqs\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_1-aqs\u5E94\u7528" aria-hidden="true">#</a> 1. AQS\u5E94\u7528</h2><p>**ReentrantLock\u7684\u53EF\u91CD\u5165\u5E94\u7528\uFF1A**ReentrantLock\u7684\u53EF\u91CD\u5165\u6027\u662F AQS\u5F88\u597D\u7684\u5E94\u7528\u4E4B\u4E00\uFF0C\u5728\u4E86\u89E3\u5B8C\u4E0A\u8FF0\u77E5\u8BC6\u70B9\u4EE5\u540E\uFF0C\u6211\u4EEC\u5F88\u5BB9\u6613\u5F97\u77E5ReentrantLock\u5B9E\u73B0\u53EF\u91CD\u5165\u7684\u65B9\u6CD5\u3002\u5728ReentrantLock\u91CC\u9762\uFF0C\u4E0D\u7BA1\u662F\u516C\u5E73\u9501\u8FD8\u662F\u975E\u516C\u5E73\u9501\uFF0C\u90FD\u6709\u4E00\u6BB5\u903B\u8F91\u3002</p><p>\u516C\u5E73\u9501\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.ReentrantLock.FairSync#tryAcquire</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">hasQueuedPredecessors</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">compareAndSetState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> acquires<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setExclusiveOwnerThread</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">==</span> <span class="token function">getExclusiveOwnerThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> nextc <span class="token operator">=</span> c <span class="token operator">+</span> acquires<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nextc <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Maximum lock count exceeded&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setState</span><span class="token punctuation">(</span>nextc<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u975E\u516C\u5E73\u9501\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.ReentrantLock.Sync#nonfairTryAcquire</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndSetState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> acquires<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">setExclusiveOwnerThread</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">==</span> <span class="token function">getExclusiveOwnerThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> nextc <span class="token operator">=</span> c <span class="token operator">+</span> acquires<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nextc <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// overflow</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Maximum lock count exceeded&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setState</span><span class="token punctuation">(</span>nextc<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4E0A\u9762\u8FD9\u4E24\u6BB5\u90FD\u53EF\u4EE5\u770B\u5230\uFF0C\u6709\u4E00\u4E2A\u540C\u6B65\u72B6\u6001State\u6765\u63A7\u5236\u6574\u4F53\u53EF\u91CD\u5165\u7684\u60C5\u51B5\u3002State\u662FVolatile\u4FEE\u9970\u7684\uFF0C\u7528\u4E8E\u4FDD\u8BC1\u4E00\u5B9A\u7684\u53EF\u89C1\u6027\u548C\u6709\u5E8F\u6027\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span>
<span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> state<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-state\u8FD9\u4E2A\u5B57\u6BB5\u4E3B\u8981\u7684\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_1-1-state\u8FD9\u4E2A\u5B57\u6BB5\u4E3B\u8981\u7684\u8FC7\u7A0B" aria-hidden="true">#</a> 1.1 State\u8FD9\u4E2A\u5B57\u6BB5\u4E3B\u8981\u7684\u8FC7\u7A0B</h3><p>\u63A5\u4E0B\u6765\u770BState\u8FD9\u4E2A\u5B57\u6BB5\u4E3B\u8981\u7684\u8FC7\u7A0B\uFF1A</p><ol><li>State\u521D\u59CB\u5316\u7684\u65F6\u5019\u4E3A0\uFF0C\u8868\u793A\u6CA1\u6709\u4EFB\u4F55\u7EBF\u7A0B\u6301\u6709\u9501\u3002</li><li>\u5F53\u6709\u7EBF\u7A0B\u6301\u6709\u8BE5\u9501\u65F6\uFF0C\u503C\u5C31\u4F1A\u5728\u539F\u6765\u7684\u57FA\u7840\u4E0A+1\uFF0C\u540C\u4E00\u4E2A\u7EBF\u7A0B\u591A\u6B21\u83B7\u5F97\u9501\u662F\uFF0C\u5C31\u4F1A\u591A\u6B21+1\uFF0C\u8FD9\u91CC\u5C31\u662F\u53EF\u91CD\u5165\u7684\u6982\u5FF5\u3002</li><li>\u89E3\u9501\u4E5F\u662F\u5BF9\u8FD9\u4E2A\u5B57\u6BB5-1\uFF0C\u4E00\u76F4\u52300\uFF0C\u6B64\u7EBF\u7A0B\u5BF9\u9501\u91CA\u653E\u3002</li></ol><h3 id="_1-2-juc\u4E2D\u7684\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_1-2-juc\u4E2D\u7684\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> 1.2 <strong>JUC\u4E2D\u7684\u5E94\u7528\u573A\u666F</strong></h3><p>JUC\u4E2D\u7684\u5E94\u7528\u573A\u666F\uFF1A\u9664\u4E86\u4E0A\u8FB9ReentrantLock\u7684\u53EF\u91CD\u5165\u6027\u7684\u5E94\u7528\uFF0CAQS\u4F5C\u4E3A\u5E76\u53D1\u7F16\u7A0B\u7684\u6846\u67B6\uFF0C\u4E3A\u5F88\u591A\u5176\u4ED6\u540C\u6B65\u5DE5\u5177\u63D0\u4F9B\u4E86\u826F\u597D\u7684\u89E3\u51B3\u65B9\u6848\u3002\u4E0B\u9762\u5217\u51FA\u4E86JUC\u4E2D\u7684\u51E0\u79CD\u540C\u6B65\u5DE5\u5177\uFF0C\u5927\u4F53\u4ECB\u7ECD\u4E00\u4E0BAQS\u7684\u5E94\u7528\u573A\u666F\uFF1A</p><table><thead><tr><th>\u540C\u6B65\u5DE5\u5177</th><th>\u540C\u6B65\u5DE5\u5177\u4E0EAQS\u7684\u5173\u8054</th></tr></thead><tbody><tr><td>ReentrantLock</td><td>\u4F7F\u7528AQS\u4FDD\u5B58\u9501\u91CD\u590D\u6301\u6709\u7684\u6B21\u6570\u3002\u5F53\u4E00\u4E2A\u7EBF\u7A0B\u83B7\u53D6\u9501\u65F6\uFF0CReentrantLock\u8BB0\u5F55\u5F53\u524D\u83B7\u5F97\u9501\u7684\u7EBF\u7A0B\u6807\u8BC6\uFF0C\u7528\u4E8E\u68C0\u6D4B\u662F\u5426\u91CD\u590D\u83B7\u53D6\uFF0C\u4EE5\u53CA\u9519\u8BEF\u7EBF\u7A0B\u8BD5\u56FE\u89E3\u9501\u64CD\u4F5C\u65F6\u5F02\u5E38\u60C5\u51B5\u7684\u5904\u7406\u3002</td></tr><tr><td>Semaphore</td><td>\u4F7F\u7528AQS\u540C\u6B65\u72B6\u6001\u6765\u4FDD\u5B58\u4FE1\u53F7\u91CF\u7684\u5F53\u524D\u8BA1\u6570\u3002tryRelease\u4F1A\u589E\u52A0\u8BA1\u6570\uFF0CacquireShared\u4F1A\u51CF\u5C11\u8BA1\u6570\u3002</td></tr><tr><td>CountDownLatch</td><td>\u4F7F\u7528AQS\u540C\u6B65\u72B6\u6001\u6765\u8868\u793A\u8BA1\u6570\u3002\u8BA1\u6570\u4E3A0\u65F6\uFF0C\u6240\u6709\u7684Acquire\u64CD\u4F5C\uFF08CountDownLatch\u7684await\u65B9\u6CD5\uFF09\u624D\u53EF\u4EE5\u901A\u8FC7\u3002</td></tr><tr><td>ReentrantReadWriteLock</td><td>\u4F7F\u7528AQS\u540C\u6B65\u72B6\u6001\u4E2D\u768416\u4F4D\u4FDD\u5B58\u5199\u9501\u6301\u6709\u7684\u6B21\u6570\uFF0C\u5269\u4E0B\u768416\u4F4D\u7528\u4E8E\u4FDD\u5B58\u8BFB\u9501\u7684\u6301\u6709\u6B21\u6570\u3002</td></tr><tr><td>ThreadPoolExecutor</td><td>Worker\u5229\u7528AQS\u540C\u6B65\u72B6\u6001\u5B9E\u73B0\u5BF9\u72EC\u5360\u7EBF\u7A0B\u53D8\u91CF\u7684\u8BBE\u7F6E\uFF08tryAcquire\u548CtryRelease\uFF09\u3002</td></tr></tbody></table><h2 id="_2-\u81EA\u5B9A\u4E49\u540C\u6B65\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_2-\u81EA\u5B9A\u4E49\u540C\u6B65\u5DE5\u5177" aria-hidden="true">#</a> 2. \u81EA\u5B9A\u4E49\u540C\u6B65\u5DE5\u5177</h2><hr><p>\u4E86\u89E3 AQS\u57FA\u672C\u539F\u7406\u4EE5\u540E\uFF0C\u6309\u7167\u4E0A\u9762\u6240\u8BF4\u7684 AQS\u77E5\u8BC6\u70B9\uFF0C\u81EA\u5DF1\u5B9E\u73B0\u4E00\u4E2A\u540C\u6B65\u5DE5\u5177\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LeeLock</span>  <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Sync</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractQueuedSynchronizer</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">protected</span> <span class="token keyword">boolean</span> tryAcquire <span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">compareAndSetState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">protected</span> <span class="token keyword">boolean</span> tryRelease <span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">setState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">protected</span> <span class="token keyword">boolean</span> isHeldExclusively <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">private</span> <span class="token class-name">Sync</span> sync <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> lock <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sync<span class="token punctuation">.</span><span class="token function">acquire</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> unlock <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sync<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u6211\u4EEC\u81EA\u5DF1\u5B9A\u4E49\u7684Lock\u5B8C\u6210\u4E00\u5B9A\u7684\u540C\u6B65\u529F\u80FD\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LeeMain</span> <span class="token punctuation">{</span>

    <span class="token keyword">static</span> <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token class-name">LeeLock</span> leeLock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LeeLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> main <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>

        <span class="token class-name">Runnable</span> runnable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> run <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    leeLock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        count<span class="token operator">++</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                    leeLock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> thread1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>runnable<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> thread2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>runnable<span class="token punctuation">)</span><span class="token punctuation">;</span>
        thread1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        thread2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        thread1<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        thread2<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u6BCF\u6B21\u8FD0\u884C\u7ED3\u679C\u90FD\u4F1A\u662F20000\u3002\u901A\u8FC7\u7B80\u5355\u7684\u51E0\u884C\u4EE3\u7801\u5C31\u80FD\u5B9E\u73B0\u540C\u6B65\u529F\u80FD\uFF0C\u8FD9\u5C31\u662FAQS\u7684\u5F3A\u5927\u4E4B\u5904\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,23),r={href:"https://blog.csdn.net/zhengzhaoyang122/article/details/110847701",target:"_blank",rel:"noopener noreferrer"};function k(d,v){const s=l("ExternalLinkIcon");return t(),e("div",null,[u,n("p",null,[n("a",r,[p("ReentrantLock \u9501\u8BE6\u89E3"),c(s)])])])}const y=a(i,[["render",k],["__file","java-thread-x-lock-reentrantlock-source3.html.vue"]]);export{y as default};
