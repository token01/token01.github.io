import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as a,f as i}from"./app.2a33308c.js";const s={},l=i(`<h1 id="\u7EBF\u7A0B\u6C60\u7684\u5904\u7406\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B\u6C60\u7684\u5904\u7406\u6D41\u7A0B" aria-hidden="true">#</a> \u7EBF\u7A0B\u6C60\u7684\u5904\u7406\u6D41\u7A0B</h1><h2 id="_1-\u5904\u7406\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_1-\u5904\u7406\u6D41\u7A0B" aria-hidden="true">#</a> 1. \u5904\u7406\u6D41\u7A0B</h2><p>\u521B\u5EFA\u7EBF\u7A0B\u6C60\u9700\u8981\u4F7F\u7528ThreadPoolExecutor \u7C7B\uFF0C\u4ED6\u7684\u6784\u9020\u51FD\u6570\u53C2\u6570\u5982\u4E0B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token keyword">int</span> corePoolSize<span class="token punctuation">,</span>    <span class="token comment">//\u6838\u5FC3\u7EBF\u7A0B\u7684\u6570\u91CF</span>
                          <span class="token keyword">int</span> maximumPoolSize<span class="token punctuation">,</span>    <span class="token comment">//\u6700\u5927\u7EBF\u7A0B\u6570\u91CF</span>
                          <span class="token keyword">long</span> keepAliveTime<span class="token punctuation">,</span>    <span class="token comment">//\u8D85\u51FA\u6838\u5FC3\u7EBF\u7A0B\u6570\u91CF\u4EE5\u5916\u7684\u7EBF\u7A0B\u7A7A\u4F59\u5B58\u6D3B\u65F6\u95F4</span>
                          <span class="token class-name">TimeUnit</span> unit<span class="token punctuation">,</span>    <span class="token comment">//\u5B58\u6D3B\u65F6\u95F4\u7684\u5355\u4F4D</span>
                          <span class="token class-name">BlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">&gt;</span></span> workQueue<span class="token punctuation">,</span>    <span class="token comment">//\u4FDD\u5B58\u5F85\u6267\u884C\u4EFB\u52A1\u7684\u961F\u5217</span>
                          <span class="token class-name">ThreadFactory</span> threadFactory<span class="token punctuation">,</span>    <span class="token comment">//\u521B\u5EFA\u65B0\u7EBF\u7A0B\u4F7F\u7528\u7684\u5DE5\u5382</span>
                          <span class="token class-name">RejectedExecutionHandler</span> handler <span class="token comment">// \u5F53\u4EFB\u52A1\u65E0\u6CD5\u6267\u884C\u65F6\u7684\u5904\u7406\u5668</span>
                          <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C2\u6570\u4ECB\u7ECD\u5982\u6CE8\u91CA\u6240\u793A\uFF0C\u8981\u4E86\u89E3\u8FD9\u4E9B\u53C2\u6570\u5DE6\u53F3\u7740\u4EC0\u4E48\uFF0C\u5C31\u9700\u8981\u4E86\u89E3\u7EBF\u7A0B\u6C60\u5177\u4F53\u7684\u6267\u884C\u65B9\u6CD5<code>ThreadPoolExecutor.execute</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void execute(Runnable command) {
    if (command == null)
        throw new NullPointerException();

    int c = ctl.get();
    //1.\u5F53\u524D\u6C60\u4E2D\u7EBF\u7A0B\u6BD4\u6838\u5FC3\u6570\u5C11\uFF0C\u65B0\u5EFA\u4E00\u4E2A\u7EBF\u7A0B\u6267\u884C\u4EFB\u52A1
    if (workerCountOf(c) &lt; corePoolSize) {   
        if (addWorker(command, true))
            return;
        c = ctl.get();
    }
    //2.\u6838\u5FC3\u6C60\u5DF2\u6EE1\uFF0C\u4F46\u4EFB\u52A1\u961F\u5217\u672A\u6EE1\uFF0C\u6DFB\u52A0\u5230\u961F\u5217\u4E2D
    if (isRunning(c) &amp;&amp; workQueue.offer(command)) {   
        int recheck = ctl.get();
        if (! isRunning(recheck) &amp;&amp; remove(command))    //\u5982\u679C\u8FD9\u65F6\u88AB\u5173\u95ED\u4E86\uFF0C\u62D2\u7EDD\u4EFB\u52A1
            reject(command);
        else if (workerCountOf(recheck) == 0)    //\u5982\u679C\u4E4B\u524D\u7684\u7EBF\u7A0B\u5DF2\u88AB\u9500\u6BC1\u5B8C\uFF0C\u65B0\u5EFA\u4E00\u4E2A\u7EBF\u7A0B
            addWorker(null, false);
    }
    //3.\u6838\u5FC3\u6C60\u5DF2\u6EE1\uFF0C\u961F\u5217\u5DF2\u6EE1\uFF0C\u8BD5\u7740\u521B\u5EFA\u4E00\u4E2A\u65B0\u7EBF\u7A0B
    else if (!addWorker(command, false))
        reject(command);    //\u5982\u679C\u521B\u5EFA\u65B0\u7EBF\u7A0B\u5931\u8D25\u4E86\uFF0C\u8BF4\u660E\u7EBF\u7A0B\u6C60\u88AB\u5173\u95ED\u6216\u8005\u7EBF\u7A0B\u6C60\u5B8C\u5168\u6EE1\u4E86\uFF0C\u62D2\u7EDD\u4EFB\u52A1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D41\u7A0B\u56FE</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20200316223656604.png" alt="image-20200316223656604"></p><h2 id="_2-\u6784\u9020\u5668\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u6784\u9020\u5668\u7684\u4F5C\u7528" aria-hidden="true">#</a> 2. \u6784\u9020\u5668\u7684\u4F5C\u7528</h2><ul><li>corePoolSize\uFF1A\u6838\u5FC3\u7EBF\u7A0B\u6C60\u6570\u91CF <ul><li>\u5728\u7EBF\u7A0B\u6570\u5C11\u4E8E\u6838\u5FC3\u6570\u91CF\u65F6\uFF0C\u6709\u65B0\u4EFB\u52A1\u8FDB\u6765\u5C31\u65B0\u5EFA\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u5373\u4F7F\u6709\u7684\u7EBF\u7A0B\u6CA1\u4E8B\u5E72</li><li>\u7B49\u8D85\u51FA\u6838\u5FC3\u6570\u91CF\u540E\uFF0C\u5C31\u4E0D\u4F1A\u65B0\u5EFA\u7EBF\u7A0B\u4E86\uFF0C\u7A7A\u95F2\u7684\u7EBF\u7A0B\u5C31\u5F97\u53BB\u4EFB\u52A1\u961F\u5217\u91CC\u53D6\u4EFB\u52A1\u6267\u884C</li></ul></li><li>maximumPoolSize: \u6700\u5927\u7EBF\u7A0B\u6570\u91CF <ul><li>\u5305\u542B\u6838\u5FC3\u7EBF\u7A0B\u6C60\u6570\u91CF+\u6838\u5FC3\u4EE5\u4E3A\u7684\u6570\u91CF</li><li>\u5982\u679C\u4EFB\u52A1\u961F\u5217\u6EE1\u4E86\uFF0C\u5E76\u4E14\u6C60\u4E2D\u7EBF\u7A0B\u6570\u5C0F\u4E8E\u6700\u5927\u7EBF\u7A0B\u6570\uFF0C\u4F1A\u518D\u521B\u5EFA\u65B0\u7684\u7EBF\u7A0B\u6267\u884C\u4EFB\u52A1</li></ul></li><li><code>keepAliveTime</code>\uFF1A\u6838\u5FC3\u6C60\u4EE5\u5916\u7684\u7EBF\u7A0B\u5B58\u6D3B\u65F6\u95F4\uFF0C\u5373\u6CA1\u6709\u4EFB\u52A1\u7684\u5916\u5305\u7684\u5B58\u6D3B\u65F6\u95F4 <ul><li>\u5982\u679C\u7ED9\u7EBF\u7A0B\u6C60\u8BBE\u7F6E <code>allowCoreThreadTimeOut(true)</code>\uFF0C\u5219\u6838\u5FC3\u7EBF\u7A0B\u5728\u7A7A\u95F2\u65F6\u5934\u4E0A\u4E5F\u4F1A\u54CD\u8D77\u6B7B\u4EA1\u7684\u5012\u8BA1\u65F6</li><li>\u5982\u679C\u4EFB\u52A1\u662F\u591A\u800C\u5BB9\u6613\u6267\u884C\u7684\uFF0C\u53EF\u4EE5\u8C03\u5927\u8FD9\u4E2A\u53C2\u6570\uFF0C\u90A3\u6837\u7EBF\u7A0B\u5C31\u53EF\u4EE5\u5728\u5B58\u6D3B\u7684\u65F6\u95F4\u91CC\u6709\u66F4\u5927\u53EF\u80FD\u63A5\u53D7\u65B0\u4EFB\u52A1</li></ul></li><li><code>workQueue</code>\uFF1A\u4FDD\u5B58\u5F85\u6267\u884C\u4EFB\u52A1\u7684\u963B\u585E\u961F\u5217 <ul><li>ArrayBlockingQueue\uFF1A\u57FA\u4E8E\u6570\u7EC4\u3001\u6709\u754C\uFF0C\u6309 FIFO\uFF08\u5148\u8FDB\u5148\u51FA\uFF09\u539F\u5219\u5BF9\u5143\u7D20\u8FDB\u884C\u6392\u5E8F</li><li>LinkedBlockingQueue\uFF1A\u57FA\u4E8E\u94FE\u8868\uFF0C\u6309FIFO \uFF08\u5148\u8FDB\u5148\u51FA\uFF09 \u6392\u5E8F\u5143\u7D20 <ul><li>\u541E\u5410\u91CF\u901A\u5E38\u8981\u9AD8\u4E8E ArrayBlockingQueue</li><li>Executors.newFixedThreadPool() \u4F7F\u7528\u4E86\u8FD9\u4E2A\u961F\u5217</li></ul></li><li>SynchronousQueue\uFF1A\u4E0D\u5B58\u50A8\u5143\u7D20\u7684\u963B\u585E\u961F\u5217 <ul><li>\u6BCF\u4E2A\u63D2\u5165\u64CD\u4F5C\u5FC5\u987B\u7B49\u5230\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u8C03\u7528\u79FB\u9664\u64CD\u4F5C\uFF0C\u5426\u5219\u63D2\u5165\u64CD\u4F5C\u4E00\u76F4\u5904\u4E8E\u963B\u585E\u72B6\u6001</li><li>\u541E\u5410\u91CF\u901A\u5E38\u8981\u9AD8\u4E8E LinkedBlockingQueue</li><li>Executors.newCachedThreadPool\u4F7F\u7528\u4E86\u8FD9\u4E2A\u961F\u5217</li></ul></li><li>PriorityBlockingQueue\uFF1A\u5177\u6709\u4F18\u5148\u7EA7\u7684\u3001\u65E0\u9650\u963B\u585E\u961F\u5217</li></ul></li><li><code>threadFactory</code>\uFF1A\u6BCF\u4E2A\u7EBF\u7A0B\u521B\u5EFA\u7684\u5730\u65B9 <ul><li>\u53EF\u4EE5\u7ED9\u7EBF\u7A0B\u8D77\u4E2A\u597D\u542C\u7684\u540D\u5B57\uFF0C\u8BBE\u7F6E\u4E2A\u4F18\u5148\u7EA7\u5565\u7684</li></ul></li><li>handler\uFF1A\u9971\u548C\u7B56\u7565\uFF0C\u5927\u5BB6\u90FD\u5F88\u5FD9\uFF0C\u548B\u529E\u5462\uFF0C\u6709\u56DB\u79CD\u7B56\u7565 <ul><li>CallerRunsPolicy\uFF1A\u53EA\u8981\u7EBF\u7A0B\u6C60\u6CA1\u5173\u95ED\uFF0C\u5C31\u76F4\u63A5\u7528\u8C03\u7528\u8005\u6240\u5728\u7EBF\u7A0B\u6765\u8FD0\u884C\u4EFB\u52A1</li><li>AbortPolicy\uFF1A\u76F4\u63A5\u629B\u51FA RejectedExecutionException \u5F02</li><li>DiscardPolicy\uFF1A\u6084\u6084\u628A\u4EFB\u52A1\u653E\u751F\uFF0C\u4E0D\u505A\u4E86</li><li>DiscardOldestPolicy\uFF1A\u628A\u961F\u5217\u91CC\u5F85\u6700\u4E45\u7684\u90A3\u4E2A\u4EFB\u52A1\u6254\u4E86\uFF0C\u7136\u540E\u518D\u8C03\u7528 execute() \u8BD5\u8BD5\u770B\u80FD\u884C\u4E0D</li><li>\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u81EA\u5DF1\u7684 RejectedExecutionHandler \u63A5\u53E3\u81EA\u5B9A\u4E49\u7B56\u7565\uFF0C\u6BD4\u5982\u5982\u8BB0\u5F55\u65E5\u5FD7\u4EC0\u4E48\u7684</li></ul></li></ul>`,10),c=[l];function o(d,t){return e(),a("div",null,c)}const p=n(s,[["render",o],["__file","java-thread-y-threadpool-handler.html.vue"]]);export{p as default};
