import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as a,f as s}from"./app.89148984.js";const o={},l=s(`<h1 id="\u7EBF\u7A0B\u6C60\u7684\u5177\u4F53\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B\u6C60\u7684\u5177\u4F53\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> \u7EBF\u7A0B\u6C60\u7684\u5177\u4F53\u5B9E\u73B0\u539F\u7406</h1><p>\u5728\u4E0A\u4E00\u8282\u6211\u4EEC\u4ECE\u5B8F\u89C2\u4E0A\u4ECB\u7ECD\u4E86ThreadPoolExecutor\uFF0C\u4E0B\u9762\u6211\u4EEC\u6765\u6DF1\u5165\u89E3\u6790\u4E00\u4E0B\u7EBF\u7A0B\u6C60\u7684\u5177\u4F53\u5B9E\u73B0\u539F\u7406\uFF0C\u5C06\u4ECE\u4E0B\u9762\u51E0\u4E2A\u65B9\u9762\u8BB2\u89E3\uFF1A</p><p><strong>1.\u7EBF\u7A0B\u6C60\u72B6\u6001</strong></p><p><strong>2.\u4EFB\u52A1\u7684\u6267\u884C</strong></p><p><strong>3.\u7EBF\u7A0B\u6C60\u4E2D\u7684\u7EBF\u7A0B\u521D\u59CB\u5316</strong></p><p><strong>4.\u4EFB\u52A1\u7F13\u5B58\u961F\u5217\u53CA\u6392\u961F\u7B56\u7565</strong></p><p><strong>5.\u4EFB\u52A1\u62D2\u7EDD\u7B56\u7565</strong></p><p><strong>6.\u7EBF\u7A0B\u6C60\u7684\u5173\u95ED</strong></p><p><strong>7.\u7EBF\u7A0B\u6C60\u5BB9\u91CF\u7684\u52A8\u6001\u8C03\u6574</strong></p><h2 id="_1-\u7EBF\u7A0B\u6C60\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_1-\u7EBF\u7A0B\u6C60\u72B6\u6001" aria-hidden="true">#</a> 1. \u7EBF\u7A0B\u6C60\u72B6\u6001</h2><p>\u5728ThreadPoolExecutor\u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E2Avolatile\u53D8\u91CF\uFF0C\u53E6\u5916\u5B9A\u4E49\u4E86\u51E0\u4E2Astatic final\u53D8\u91CF\u8868\u793A\u7EBF\u7A0B\u6C60\u7684\u5404\u4E2A\u72B6\u6001\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">volatile</span> <span class="token keyword">int</span> runState<span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">RUNNING</span>    <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">SHUTDOWN</span>   <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">STOP</span>       <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">TERMINATED</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>runState\u8868\u793A\u5F53\u524D\u7EBF\u7A0B\u6C60\u7684\u72B6\u6001\uFF0C\u5B83\u662F\u4E00\u4E2Avolatile\u53D8\u91CF\u7528\u6765\u4FDD\u8BC1\u7EBF\u7A0B\u4E4B\u95F4\u7684\u53EF\u89C1\u6027\uFF1B</p><p>\u4E0B\u9762\u7684\u51E0\u4E2Astatic final\u53D8\u91CF\u8868\u793ArunState\u53EF\u80FD\u7684\u51E0\u4E2A\u53D6\u503C\u3002</p><ul><li>\u5F53\u521B\u5EFA\u7EBF\u7A0B\u6C60\u540E\uFF0C\u521D\u59CB\u65F6\uFF0C\u7EBF\u7A0B\u6C60\u5904\u4E8ERUNNING\u72B6\u6001\uFF1B</li><li>\u5982\u679C\u8C03\u7528\u4E86shutdown()\u65B9\u6CD5\uFF0C\u5219\u7EBF\u7A0B\u6C60\u5904\u4E8ESHUTDOWN\u72B6\u6001\uFF0C<strong>\u6B64\u65F6\u7EBF\u7A0B\u6C60\u4E0D\u80FD\u591F\u63A5\u53D7\u65B0\u7684\u4EFB\u52A1\uFF0C\u5B83\u4F1A\u7B49\u5F85\u6240\u6709\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5</strong>\uFF1B</li><li>\u5982\u679C\u8C03\u7528\u4E86shutdownNow()\u65B9\u6CD5\uFF0C\u5219\u7EBF\u7A0B\u6C60\u5904\u4E8ESTOP\u72B6\u6001\uFF0C<strong>\u6B64\u65F6\u7EBF\u7A0B\u6C60\u4E0D\u80FD\u63A5\u53D7\u65B0\u7684\u4EFB\u52A1\uFF0C\u5E76\u4E14\u4F1A\u53BB\u5C1D\u8BD5\u7EC8\u6B62\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1</strong>\uFF1B</li><li>\u5F53\u7EBF\u7A0B\u6C60<strong>\u5904\u4E8ESHUTDOWN\u6216STOP\u72B6\u6001</strong>\uFF0C\u5E76\u4E14<strong>\u6240\u6709\u5DE5\u4F5C\u7EBF\u7A0B\u5DF2\u7ECF\u9500\u6BC1</strong>\uFF0C<strong>\u4EFB\u52A1\u7F13\u5B58\u961F\u5217\u5DF2\u7ECF\u6E05\u7A7A\u6216\u6267\u884C\u7ED3\u675F\u540E\uFF0C\u7EBF\u7A0B\u6C60\u88AB\u8BBE\u7F6E\u4E3ATERMINATED\u72B6\u6001</strong>\u3002</li></ul><h2 id="_2-\u4EFB\u52A1\u7684\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#_2-\u4EFB\u52A1\u7684\u6267\u884C" aria-hidden="true">#</a> 2. \u4EFB\u52A1\u7684\u6267\u884C</h2><p>\u5728\u4E86\u89E3\u5C06\u4EFB\u52A1\u63D0\u4EA4\u7ED9\u7EBF\u7A0B\u6C60\u5230\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u6574\u4E2A\u8FC7\u7A0B\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E0BThreadPoolExecutor\u7C7B\u4E2D\u5176\u4ED6\u7684\u4E00\u4E9B\u6BD4\u8F83\u91CD\u8981\u6210\u5458\u53D8\u91CF\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">BlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">&gt;</span></span> workQueue<span class="token punctuation">;</span>              <span class="token comment">//\u4EFB\u52A1\u7F13\u5B58\u961F\u5217\uFF0C\u7528\u6765\u5B58\u653E\u7B49\u5F85\u6267\u884C\u7684\u4EFB\u52A1</span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ReentrantLock</span> mainLock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//\u7EBF\u7A0B\u6C60\u7684\u4E3B\u8981\u72B6\u6001\u9501\uFF0C\u5BF9\u7EBF\u7A0B\u6C60\u72B6\u6001\uFF08\u6BD4\u5982\u7EBF\u7A0B\u6C60\u5927\u5C0F</span>
                                                              <span class="token comment">//\u3001runState\u7B49\uFF09\u7684\u6539\u53D8\u90FD\u8981\u4F7F\u7528\u8FD9\u4E2A\u9501</span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Worker</span><span class="token punctuation">&gt;</span></span> workers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Worker</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u7528\u6765\u5B58\u653E\u5DE5\u4F5C\u96C6</span>
 
<span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">long</span>  keepAliveTime<span class="token punctuation">;</span>    <span class="token comment">//\u7EBF\u7A0B\u5B58\u8D27\u65F6\u95F4   </span>
<span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">boolean</span> allowCoreThreadTimeOut<span class="token punctuation">;</span>   <span class="token comment">//\u662F\u5426\u5141\u8BB8\u4E3A\u6838\u5FC3\u7EBF\u7A0B\u8BBE\u7F6E\u5B58\u6D3B\u65F6\u95F4</span>
<span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span>   corePoolSize<span class="token punctuation">;</span>     <span class="token comment">//\u6838\u5FC3\u6C60\u7684\u5927\u5C0F\uFF08\u5373\u7EBF\u7A0B\u6C60\u4E2D\u7684\u7EBF\u7A0B\u6570\u76EE\u5927\u4E8E\u8FD9\u4E2A\u53C2\u6570\u65F6\uFF0C\u63D0\u4EA4\u7684\u4EFB\u52A1\u4F1A\u88AB\u653E\u8FDB\u4EFB\u52A1\u7F13\u5B58\u961F\u5217\uFF09</span>
<span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span>   maximumPoolSize<span class="token punctuation">;</span>   <span class="token comment">//\u7EBF\u7A0B\u6C60\u6700\u5927\u80FD\u5BB9\u5FCD\u7684\u7EBF\u7A0B\u6570</span>
 
<span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span>   poolSize<span class="token punctuation">;</span>       <span class="token comment">//\u7EBF\u7A0B\u6C60\u4E2D\u5F53\u524D\u7684\u7EBF\u7A0B\u6570</span>
 
<span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token class-name">RejectedExecutionHandler</span> handler<span class="token punctuation">;</span> <span class="token comment">//\u4EFB\u52A1\u62D2\u7EDD\u7B56\u7565</span>
 
<span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token class-name">ThreadFactory</span> threadFactory<span class="token punctuation">;</span>   <span class="token comment">//\u7EBF\u7A0B\u5DE5\u5382\uFF0C\u7528\u6765\u521B\u5EFA\u7EBF\u7A0B</span>
 
<span class="token keyword">private</span> <span class="token keyword">int</span> largestPoolSize<span class="token punctuation">;</span>   <span class="token comment">//\u7528\u6765\u8BB0\u5F55\u7EBF\u7A0B\u6C60\u4E2D\u66FE\u7ECF\u51FA\u73B0\u8FC7\u7684\u6700\u5927\u7EBF\u7A0B\u6570</span>
 
<span class="token keyword">private</span> <span class="token keyword">long</span> completedTaskCount<span class="token punctuation">;</span>   <span class="token comment">//\u7528\u6765\u8BB0\u5F55\u5DF2\u7ECF\u6267\u884C\u5B8C\u6BD5\u7684\u4EFB\u52A1\u4E2A\u6570</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BCF\u4E2A\u53D8\u91CF\u7684\u4F5C\u7528\u90FD\u5DF2\u7ECF\u6807\u660E\u51FA\u6765\u4E86\uFF0C\u8FD9\u91CC\u8981\u91CD\u70B9\u89E3\u91CA\u4E00\u4E0BcorePoolSize\u3001maximumPoolSize\u3001largestPoolSize\u4E09\u4E2A\u53D8\u91CF\u3002</p><h3 id="_2-1-\u7EBF\u7A0B\u6C60\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#_2-1-\u7EBF\u7A0B\u6C60\u4F8B\u5B50" aria-hidden="true">#</a> 2.1 \u7EBF\u7A0B\u6C60\u4F8B\u5B50</h3><p>corePoolSize\u5728\u5F88\u591A\u5730\u65B9\u88AB\u7FFB\u8BD1\u6210\u6838\u5FC3\u6C60\u5927\u5C0F\uFF0C\u5176\u5B9E\u6211\u7684\u7406\u89E3\u8FD9\u4E2A\u5C31\u662F\u7EBF\u7A0B\u6C60\u7684\u5927\u5C0F\u3002\u4E3E\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A</p><p>\u5047\u5982\u6709\u4E00\u4E2A\u5DE5\u5382\uFF0C\u5DE5\u5382\u91CC\u9762\u670910\u4E2A\u5DE5\u4EBA\uFF0C\u6BCF\u4E2A\u5DE5\u4EBA\u540C\u65F6\u53EA\u80FD\u505A\u4E00\u4EF6\u4EFB\u52A1\u3002</p><p>\u56E0\u6B64\u53EA\u8981\u5F5310\u4E2A\u5DE5\u4EBA\u4E2D\u6709\u5DE5\u4EBA\u662F\u7A7A\u95F2\u7684\uFF0C\u6765\u4E86\u4EFB\u52A1\u5C31\u5206\u914D\u7ED9\u7A7A\u95F2\u7684\u5DE5\u4EBA\u505A\uFF1B</p><p>\u5F5310\u4E2A\u5DE5\u4EBA\u90FD\u6709\u4EFB\u52A1\u5728\u505A\u65F6\uFF0C\u5982\u679C\u8FD8\u6765\u4E86\u4EFB\u52A1\uFF0C\u5C31\u628A\u4EFB\u52A1\u8FDB\u884C\u6392\u961F\u7B49\u5F85\uFF1B</p><p>\u5982\u679C\u8BF4\u65B0\u4EFB\u52A1\u6570\u76EE\u589E\u957F\u7684\u901F\u5EA6\u8FDC\u8FDC\u5927\u4E8E\u5DE5\u4EBA\u505A\u4EFB\u52A1\u7684\u901F\u5EA6\uFF0C\u90A3\u4E48\u6B64\u65F6\u5DE5\u5382\u4E3B\u7BA1\u53EF\u80FD\u4F1A\u60F3\u8865\u6551\u63AA\u65BD\uFF0C\u6BD4\u5982\u91CD\u65B0\u62DB4\u4E2A\u4E34\u65F6\u5DE5\u4EBA\u8FDB\u6765\uFF1B</p><p>\u7136\u540E\u5C31\u5C06\u4EFB\u52A1\u4E5F\u5206\u914D\u7ED9\u8FD94\u4E2A\u4E34\u65F6\u5DE5\u4EBA\u505A\uFF1B</p><p>\u5982\u679C\u8BF4\u774014\u4E2A\u5DE5\u4EBA\u505A\u4EFB\u52A1\u7684\u901F\u5EA6\u8FD8\u662F\u4E0D\u591F\uFF0C\u6B64\u65F6\u5DE5\u5382\u4E3B\u7BA1\u53EF\u80FD\u5C31\u8981\u8003\u8651\u4E0D\u518D\u63A5\u6536\u65B0\u7684\u4EFB\u52A1\u6216\u8005\u629B\u5F03\u524D\u9762\u7684\u4E00\u4E9B\u4EFB\u52A1\u4E86\u3002</p><p>\u5F53\u8FD914\u4E2A\u5DE5\u4EBA\u5F53\u4E2D\u6709\u4EBA\u7A7A\u95F2\u65F6\uFF0C\u800C\u65B0\u4EFB\u52A1\u589E\u957F\u7684\u901F\u5EA6\u53C8\u6BD4\u8F83\u7F13\u6162\uFF0C\u5DE5\u5382\u4E3B\u7BA1\u53EF\u80FD\u5C31\u8003\u8651\u8F9E\u63894\u4E2A\u4E34\u65F6\u5DE5\u4E86\uFF0C\u53EA\u4FDD\u6301\u539F\u6765\u768410\u4E2A\u5DE5\u4EBA\uFF0C\u6BD5\u7ADF\u8BF7\u989D\u5916\u7684\u5DE5\u4EBA\u662F\u8981\u82B1\u94B1\u7684\u3002</p><p>\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u7684corePoolSize\u5C31\u662F10\uFF0C\u800CmaximumPoolSize\u5C31\u662F14\uFF0810+4\uFF09</p><p>\u4E5F\u5C31\u662F\u8BF4corePoolSize\u5C31\u662F\u7EBF\u7A0B\u6C60\u5927\u5C0F\uFF0CmaximumPoolSize\u5728\u6211\u770B\u6765\u662F\u7EBF\u7A0B\u6C60\u7684\u4E00\u79CD\u8865\u6551\u63AA\u65BD\uFF0C\u5373\u4EFB\u52A1\u91CF\u7A81\u7136\u8FC7\u5927\u65F6\u7684\u4E00\u79CD\u8865\u6551\u63AA\u65BD\u3002</p><p>\u4E0D\u8FC7\u4E3A\u4E86\u65B9\u4FBF\u7406\u89E3\uFF0C\u5728\u672C\u6587\u540E\u9762\u8FD8\u662F\u5C06corePoolSize\u7FFB\u8BD1\u6210\u6838\u5FC3\u6C60\u5927\u5C0F\u3002</p><p>largestPoolSize\u53EA\u662F\u4E00\u4E2A\u7528\u6765\u8D77\u8BB0\u5F55\u4F5C\u7528\u7684\u53D8\u91CF\uFF0C\u7528\u6765\u8BB0\u5F55\u7EBF\u7A0B\u6C60\u4E2D\u66FE\u7ECF\u6709\u8FC7\u7684\u6700\u5927\u7EBF\u7A0B\u6570\u76EE\uFF0C\u8DDF\u7EBF\u7A0B\u6C60\u7684\u5BB9\u91CF\u6CA1\u6709\u4EFB\u4F55\u5173\u7CFB\u3002</p><h3 id="_2-2-\u63D0\u4EA4\u5230\u6700\u7EC8\u6267\u884C\u5B8C\u6BD5\u7ECF\u5386\u4E86\u54EA\u4E9B\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-2-\u63D0\u4EA4\u5230\u6700\u7EC8\u6267\u884C\u5B8C\u6BD5\u7ECF\u5386\u4E86\u54EA\u4E9B\u8FC7\u7A0B" aria-hidden="true">#</a> 2.2 \u63D0\u4EA4\u5230\u6700\u7EC8\u6267\u884C\u5B8C\u6BD5\u7ECF\u5386\u4E86\u54EA\u4E9B\u8FC7\u7A0B</h3><p>\u5728ThreadPoolExecutor\u7C7B\u4E2D\uFF0C<strong>\u6700\u6838\u5FC3\u7684\u4EFB\u52A1\u63D0\u4EA4\u65B9\u6CD5\u662Fexecute()\u65B9\u6CD5</strong>\uFF0C\u867D\u7136\u901A\u8FC7submit\u4E5F\u53EF\u4EE5\u63D0\u4EA4\u4EFB\u52A1\uFF0C\u4F46\u662F\u5B9E\u9645\u4E0Asubmit\u65B9\u6CD5\u91CC\u9762\u6700\u7EC8\u8C03\u7528\u7684\u8FD8\u662Fexecute()\u65B9\u6CD5\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EA\u9700\u8981\u7814\u7A76execute()\u65B9\u6CD5\u7684\u5B9E\u73B0\u539F\u7406\u5373\u53EF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void execute(Runnable command) {
    if (command == null)
        throw new NullPointerException();
    if (poolSize &gt;= corePoolSize || !addIfUnderCorePoolSize(command)) {
        if (runState == RUNNING &amp;&amp; workQueue.offer(command)) {
            if (runState != RUNNING || poolSize == 0)
                ensureQueuedTaskHandled(command);
        }
        else if (!addIfUnderMaximumPoolSize(command))
            reject(command); // is shutdown or saturated
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9996\u5148\uFF0C\u5224\u65AD\u63D0\u4EA4\u7684\u4EFB\u52A1command\u662F\u5426\u4E3Anull\uFF0C\u82E5\u662Fnull\uFF0C\u5219\u629B\u51FA\u7A7A\u6307\u9488\u5F02\u5E38\uFF1B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if (poolSize &gt;= corePoolSize || !addIfUnderCorePoolSize(command))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7531\u4E8E\u662F\u6216\u6761\u4EF6\u8FD0\u7B97\u7B26\uFF0C\u6240\u4EE5\u5148\u8BA1\u7B97\u524D\u534A\u90E8\u5206\u7684\u503C\uFF0C\u5982\u679C\u7EBF\u7A0B\u6C60\u4E2D\u5F53\u524D\u7EBF\u7A0B\u6570\u4E0D\u5C0F\u4E8E\u6838\u5FC3\u6C60\u5927\u5C0F\uFF0C\u90A3\u4E48\u5C31\u4F1A\u76F4\u63A5\u8FDB\u5165\u4E0B\u9762\u7684if\u8BED\u53E5\u5757\u4E86\u3002</p><p>\u5982\u679C\u7EBF\u7A0B\u6C60\u4E2D\u5F53\u524D\u7EBF\u7A0B\u6570\u5C0F\u4E8E\u6838\u5FC3\u6C60\u5927\u5C0F\uFF0C\u5219\u63A5\u7740\u6267\u884C\u540E\u534A\u90E8\u5206\uFF0C\u4E5F\u5C31\u662F\u6267\u884C</p><p>\u5982\u679C\u6267\u884C\u5B8CaddIfUnderCorePoolSize\u8FD9\u4E2A\u65B9\u6CD5\u8FD4\u56DEfalse\uFF0C\u5219\u7EE7\u7EED\u6267\u884C\u4E0B\u9762\u7684if\u8BED\u53E5\u5757\uFF0C\u5426\u5219\u6574\u4E2A\u65B9\u6CD5\u5C31\u76F4\u63A5\u6267\u884C\u5B8C\u6BD5\u4E86\u3002</p><p>\u5982\u679C\u6267\u884C\u5B8CaddIfUnderCorePoolSize\u8FD9\u4E2A\u65B9\u6CD5\u8FD4\u56DEfalse\uFF0C\u7136\u540E\u63A5\u7740\u5224\u65AD\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\`if\` \`(runState == RUNNING &amp;&amp; workQueue.offer(command))\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u5F53\u524D\u7EBF\u7A0B\u6C60\u5904\u4E8ERUNNING\u72B6\u6001\uFF0C\u5219\u5C06\u4EFB\u52A1\u653E\u5165\u4EFB\u52A1\u7F13\u5B58\u961F\u5217\uFF1B\u5982\u679C\u5F53\u524D\u7EBF\u7A0B\u6C60\u4E0D\u5904\u4E8ERUNNING\u72B6\u6001\u6216\u8005\u4EFB\u52A1\u653E\u5165\u7F13\u5B58\u961F\u5217\u5931\u8D25\uFF0C\u5219\u6267\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\`addIfUnderMaximumPoolSize(command)\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u6267\u884CaddIfUnderMaximumPoolSize\u65B9\u6CD5\u5931\u8D25\uFF0C\u5219\u6267\u884Creject()\u65B9\u6CD5\u8FDB\u884C\u4EFB\u52A1\u62D2\u7EDD\u5904\u7406\u3002</p><p>\u56DE\u5230\u524D\u9762\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\`if\` \`(runState == RUNNING &amp;&amp; workQueue.offer(command))\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u53E5\u7684\u6267\u884C\uFF0C\u5982\u679C\u8BF4\u5F53\u524D\u7EBF\u7A0B\u6C60\u5904\u4E8ERUNNING\u72B6\u6001\u4E14\u5C06\u4EFB\u52A1\u653E\u5165\u4EFB\u52A1\u7F13\u5B58\u961F\u5217\u6210\u529F\uFF0C\u5219\u7EE7\u7EED\u8FDB\u884C\u5224\u65AD\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\`if\` \`(runState != RUNNING || poolSize == \`\`0\`\`)\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u53E5\u5224\u65AD\u662F\u4E3A\u4E86\u9632\u6B62\u5728\u5C06\u6B64\u4EFB\u52A1\u6DFB\u52A0\u8FDB\u4EFB\u52A1\u7F13\u5B58\u961F\u5217\u7684\u540C\u65F6\u5176\u4ED6\u7EBF\u7A0B\u7A81\u7136\u8C03\u7528shutdown\u6216\u8005shutdownNow\u65B9\u6CD5\u5173\u95ED\u4E86\u7EBF\u7A0B\u6C60\u7684\u4E00\u79CD\u5E94\u6025\u63AA\u65BD\u3002\u5982\u679C\u662F\u8FD9\u6837\u5C31\u6267\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\`ensureQueuedTaskHandled(command)\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FDB\u884C\u5E94\u6025\u5904\u7406\uFF0C\u4ECE\u540D\u5B57\u53EF\u4EE5\u770B\u51FA\u662F\u4FDD\u8BC1 \u6DFB\u52A0\u5230\u4EFB\u52A1\u7F13\u5B58\u961F\u5217\u4E2D\u7684\u4EFB\u52A1\u5F97\u5230\u5904\u7406\u3002</p><p>...</p><h3 id="_2-3-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_2-3-\u603B\u7ED3" aria-hidden="true">#</a> 2.3 \u603B\u7ED3</h3><p>1\uFF09\u9996\u5148\uFF0C\u8981\u6E05\u695AcorePoolSize\u548CmaximumPoolSize\u7684\u542B\u4E49\uFF1B</p><p>2\uFF09\u5176\u6B21\uFF0C\u8981\u77E5\u9053Worker\u662F\u7528\u6765\u8D77\u5230\u4EC0\u4E48\u4F5C\u7528\u7684\uFF1B</p><p>3\uFF09\u8981\u77E5\u9053\u4EFB\u52A1\u63D0\u4EA4\u7ED9\u7EBF\u7A0B\u6C60\u4E4B\u540E\u7684\u5904\u7406\u7B56\u7565\uFF0C\u8FD9\u91CC\u603B\u7ED3\u4E00\u4E0B\u4E3B\u8981\u67094\u70B9\uFF1A</p><ul><li>\u5982\u679C\u5F53\u524D\u7EBF\u7A0B\u6C60\u4E2D\u7684\u7EBF\u7A0B\u6570\u76EE\u5C0F\u4E8EcorePoolSize\uFF0C\u5219\u6BCF\u6765\u4E00\u4E2A\u4EFB\u52A1\uFF0C\u5C31\u4F1A\u521B\u5EFA\u4E00\u4E2A\u7EBF\u7A0B\u53BB\u6267\u884C\u8FD9\u4E2A\u4EFB\u52A1\uFF1B</li><li>\u5982\u679C\u5F53\u524D\u7EBF\u7A0B\u6C60\u4E2D\u7684\u7EBF\u7A0B\u6570\u76EE&gt;=corePoolSize\uFF0C\u5219\u6BCF\u6765\u4E00\u4E2A\u4EFB\u52A1\uFF0C\u4F1A\u5C1D\u8BD5\u5C06\u5176\u6DFB\u52A0\u5230\u4EFB\u52A1\u7F13\u5B58\u961F\u5217\u5F53\u4E2D\uFF0C\u82E5\u6DFB\u52A0\u6210\u529F\uFF0C\u5219\u8BE5\u4EFB\u52A1\u4F1A\u7B49\u5F85\u7A7A\u95F2\u7EBF\u7A0B\u5C06\u5176\u53D6\u51FA\u53BB\u6267\u884C\uFF1B\u82E5\u6DFB\u52A0\u5931\u8D25\uFF08\u4E00\u822C\u6765\u8BF4\u662F\u4EFB\u52A1\u7F13\u5B58\u961F\u5217\u5DF2\u6EE1\uFF09\uFF0C\u5219\u4F1A\u5C1D\u8BD5\u521B\u5EFA\u65B0\u7684\u7EBF\u7A0B\u53BB\u6267\u884C\u8FD9\u4E2A\u4EFB\u52A1\uFF1B</li><li>\u5982\u679C\u5F53\u524D\u7EBF\u7A0B\u6C60\u4E2D\u7684\u7EBF\u7A0B\u6570\u76EE\u8FBE\u5230maximumPoolSize\uFF0C\u5219\u4F1A\u91C7\u53D6\u4EFB\u52A1\u62D2\u7EDD\u7B56\u7565\u8FDB\u884C\u5904\u7406\uFF1B</li><li>\u5982\u679C\u7EBF\u7A0B\u6C60\u4E2D\u7684\u7EBF\u7A0B\u6570\u91CF\u5927\u4E8E corePoolSize\u65F6\uFF0C\u5982\u679C\u67D0\u7EBF\u7A0B\u7A7A\u95F2\u65F6\u95F4\u8D85\u8FC7keepAliveTime\uFF0C\u7EBF\u7A0B\u5C06\u88AB\u7EC8\u6B62\uFF0C\u76F4\u81F3\u7EBF\u7A0B\u6C60\u4E2D\u7684\u7EBF\u7A0B\u6570\u76EE\u4E0D\u5927\u4E8EcorePoolSize\uFF1B\u5982\u679C\u5141\u8BB8\u4E3A\u6838\u5FC3\u6C60\u4E2D\u7684\u7EBF\u7A0B\u8BBE\u7F6E\u5B58\u6D3B\u65F6\u95F4\uFF0C\u90A3\u4E48\u6838\u5FC3\u6C60\u4E2D\u7684\u7EBF\u7A0B\u7A7A\u95F2\u65F6\u95F4\u8D85\u8FC7keepAliveTime\uFF0C\u7EBF\u7A0B\u4E5F\u4F1A\u88AB\u7EC8\u6B62\u3002</li></ul><h2 id="_3-\u7EBF\u7A0B\u6C60\u4E2D\u7684\u7EBF\u7A0B\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#_3-\u7EBF\u7A0B\u6C60\u4E2D\u7684\u7EBF\u7A0B\u521D\u59CB\u5316" aria-hidden="true">#</a> 3. \u7EBF\u7A0B\u6C60\u4E2D\u7684\u7EBF\u7A0B\u521D\u59CB\u5316</h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u521B\u5EFA\u7EBF\u7A0B\u6C60\u4E4B\u540E\uFF0C\u7EBF\u7A0B\u6C60\u4E2D\u662F\u6CA1\u6709\u7EBF\u7A0B\u7684\uFF0C\u9700\u8981\u63D0\u4EA4\u4EFB\u52A1\u4E4B\u540E\u624D\u4F1A\u521B\u5EFA\u7EBF\u7A0B\u3002</p><p>\u5728\u5B9E\u9645\u4E2D\u5982\u679C\u9700\u8981\u7EBF\u7A0B\u6C60\u521B\u5EFA\u4E4B\u540E\u7ACB\u5373\u521B\u5EFA\u7EBF\u7A0B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4E24\u4E2A\u65B9\u6CD5\u529E\u5230\uFF1A</p><ul><li>prestartCoreThread()\uFF1A\u521D\u59CB\u5316\u4E00\u4E2A\u6838\u5FC3\u7EBF\u7A0B\uFF1B</li><li>prestartAllCoreThreads()\uFF1A\u521D\u59CB\u5316\u6240\u6709\u6838\u5FC3\u7EBF\u7A0B</li></ul><p>\u4E0B\u9762\u662F\u8FD92\u4E2A\u65B9\u6CD5\u7684\u5B9E\u73B0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public boolean prestartCoreThread() {
    return addIfUnderCorePoolSize(null); //\u6CE8\u610F\u4F20\u8FDB\u53BB\u7684\u53C2\u6570\u662Fnull
}
 
public int prestartAllCoreThreads() {
    int n = 0;
    while (addIfUnderCorePoolSize(null))//\u6CE8\u610F\u4F20\u8FDB\u53BB\u7684\u53C2\u6570\u662Fnull
        ++n;
    return n;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u4E0A\u9762\u4F20\u8FDB\u53BB\u7684\u53C2\u6570\u662Fnull\uFF0C\u6839\u636E\u7B2C2\u5C0F\u8282\u7684\u5206\u6790\u53EF\u77E5\u5982\u679C\u4F20\u8FDB\u53BB\u7684\u53C2\u6570\u4E3Anull\uFF0C\u5219\u6700\u540E\u6267\u884C\u7EBF\u7A0B\u4F1A\u963B\u585E\u5728getTask\u65B9\u6CD5\u4E2D\u7684</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	r = workQueue.take();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5373\u7B49\u5F85\u4EFB\u52A1\u961F\u5217\u4E2D\u6709\u4EFB\u52A1\u3002</p><h2 id="_4-\u4EFB\u52A1\u7F13\u5B58\u961F\u5217\u53CA\u6392\u961F\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#_4-\u4EFB\u52A1\u7F13\u5B58\u961F\u5217\u53CA\u6392\u961F\u7B56\u7565" aria-hidden="true">#</a> 4. <strong>\u4EFB\u52A1\u7F13\u5B58\u961F\u5217\u53CA\u6392\u961F\u7B56\u7565</strong></h2><p>\u5728\u524D\u9762\u6211\u4EEC\u591A\u6B21\u63D0\u5230\u4E86\u4EFB\u52A1\u7F13\u5B58\u961F\u5217\uFF0C\u5373workQueue\uFF0C\u5B83\u7528\u6765\u5B58\u653E\u7B49\u5F85\u6267\u884C\u7684\u4EFB\u52A1\u3002</p><p>workQueue\u7684\u7C7B\u578B\u4E3A<code>BlockingQueue&lt;Runnable&gt;</code>\uFF0C\u901A\u5E38\u53EF\u4EE5\u53D6\u4E0B\u9762\u4E09\u79CD\u7C7B\u578B\uFF1A</p><ul><li><p>ArrayBlockingQueue\uFF1A\u57FA\u4E8E\u6570\u7EC4\u7684\u5148\u8FDB\u5148\u51FA\u961F\u5217\uFF0C\u6B64\u961F\u5217\u521B\u5EFA\u65F6\u5FC5\u987B\u6307\u5B9A\u5927\u5C0F\uFF1B</p></li><li><p>LinkedBlockingQueue\uFF1A\u57FA\u4E8E\u94FE\u8868\u7684\u5148\u8FDB\u5148\u51FA\u961F\u5217\uFF0C\u5982\u679C\u521B\u5EFA\u65F6\u6CA1\u6709\u6307\u5B9A\u6B64\u961F\u5217\u5927\u5C0F\uFF0C\u5219\u9ED8\u8BA4\u4E3AInteger.MAX_VALUE\uFF1B</p></li><li><p>synchronousQueue\uFF1A\u8FD9\u4E2A\u961F\u5217\u6BD4\u8F83\u7279\u6B8A\uFF0C\u5B83\u4E0D\u4F1A\u4FDD\u5B58\u63D0\u4EA4\u7684\u4EFB\u52A1\uFF0C\u800C\u662F\u5C06\u76F4\u63A5\u65B0\u5EFA\u4E00\u4E2A\u7EBF\u7A0B\u6765\u6267\u884C\u65B0\u6765\u7684\u4EFB\u52A1\u3002</p></li></ul><h2 id="_5-\u4EFB\u52A1\u62D2\u7EDD\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#_5-\u4EFB\u52A1\u62D2\u7EDD\u7B56\u7565" aria-hidden="true">#</a> 5. \u4EFB\u52A1\u62D2\u7EDD\u7B56\u7565</h2><p>\u5F53\u7EBF\u7A0B\u6C60\u7684\u4EFB\u52A1\u7F13\u5B58\u961F\u5217\u5DF2\u6EE1\u5E76\u4E14\u7EBF\u7A0B\u6C60\u4E2D\u7684\u7EBF\u7A0B\u6570\u76EE\u8FBE\u5230maximumPoolSize\uFF0C\u5982\u679C\u8FD8\u6709\u4EFB\u52A1\u5230\u6765\u5C31\u4F1A\u91C7\u53D6\u4EFB\u52A1\u62D2\u7EDD\u7B56\u7565\uFF0C\u901A\u5E38\u6709\u4EE5\u4E0B\u56DB\u79CD\u7B56\u7565\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ThreadPoolExecutor.AbortPolicy:\u4E22\u5F03\u4EFB\u52A1\u5E76\u629B\u51FARejectedExecutionException\u5F02\u5E38\u3002
ThreadPoolExecutor.DiscardPolicy\uFF1A\u4E5F\u662F\u4E22\u5F03\u4EFB\u52A1\uFF0C\u4F46\u662F\u4E0D\u629B\u51FA\u5F02\u5E38\u3002
ThreadPoolExecutor.DiscardOldestPolicy\uFF1A\u4E22\u5F03\u961F\u5217\u6700\u524D\u9762\u7684\u4EFB\u52A1\uFF0C\u7136\u540E\u91CD\u65B0\u5C1D\u8BD5\u6267\u884C\u4EFB\u52A1\uFF08\u91CD\u590D\u6B64\u8FC7\u7A0B\uFF09
ThreadPoolExecutor.CallerRunsPolicy\uFF1A\u7531\u8C03\u7528\u7EBF\u7A0B\u5904\u7406\u8BE5\u4EFB\u52A1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-\u7EBF\u7A0B\u6C60\u7684\u5173\u95ED" tabindex="-1"><a class="header-anchor" href="#_6-\u7EBF\u7A0B\u6C60\u7684\u5173\u95ED" aria-hidden="true">#</a> 6. <strong>\u7EBF\u7A0B\u6C60\u7684\u5173\u95ED</strong></h2><p>ThreadPoolExecutor\u63D0\u4F9B\u4E86\u4E24\u4E2A\u65B9\u6CD5\uFF0C\u7528\u4E8E\u7EBF\u7A0B\u6C60\u7684\u5173\u95ED\uFF0C\u5206\u522B\u662Fshutdown()\u548CshutdownNow()\uFF0C\u5176\u4E2D\uFF1A</p><ul><li>shutdown()\uFF1A\u4E0D\u4F1A\u7ACB\u5373\u7EC8\u6B62\u7EBF\u7A0B\u6C60\uFF0C\u800C\u662F\u8981\u7B49\u6240\u6709\u4EFB\u52A1\u7F13\u5B58\u961F\u5217\u4E2D\u7684\u4EFB\u52A1\u90FD\u6267\u884C\u5B8C\u540E\u624D\u7EC8\u6B62\uFF0C\u4F46\u518D\u4E5F\u4E0D\u4F1A\u63A5\u53D7\u65B0\u7684\u4EFB\u52A1</li><li>shutdownNow()\uFF1A\u7ACB\u5373\u7EC8\u6B62\u7EBF\u7A0B\u6C60\uFF0C\u5E76\u5C1D\u8BD5\u6253\u65AD\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u5E76\u4E14\u6E05\u7A7A\u4EFB\u52A1\u7F13\u5B58\u961F\u5217\uFF0C\u8FD4\u56DE\u5C1A\u672A\u6267\u884C\u7684\u4EFB\u52A1</li></ul><h2 id="_7-\u7EBF\u7A0B\u6C60\u5BB9\u91CF\u7684\u52A8\u6001\u8C03\u6574" tabindex="-1"><a class="header-anchor" href="#_7-\u7EBF\u7A0B\u6C60\u5BB9\u91CF\u7684\u52A8\u6001\u8C03\u6574" aria-hidden="true">#</a> 7. <strong>\u7EBF\u7A0B\u6C60\u5BB9\u91CF\u7684\u52A8\u6001\u8C03\u6574</strong></h2><p>ThreadPoolExecutor\u63D0\u4F9B\u4E86\u52A8\u6001\u8C03\u6574\u7EBF\u7A0B\u6C60\u5BB9\u91CF\u5927\u5C0F\u7684\u65B9\u6CD5\uFF1AsetCorePoolSize()\u548CsetMaximumPoolSize()\uFF0C</p><ul><li>setCorePoolSize\uFF1A\u8BBE\u7F6E\u6838\u5FC3\u6C60\u5927\u5C0F</li><li>setMaximumPoolSize\uFF1A\u8BBE\u7F6E\u7EBF\u7A0B\u6C60\u6700\u5927\u80FD\u521B\u5EFA\u7684\u7EBF\u7A0B\u6570\u76EE\u5927\u5C0F</li></ul><p>\u5F53\u4E0A\u8FF0\u53C2\u6570\u4ECE\u5C0F\u53D8\u5927\u65F6\uFF0CThreadPoolExecutor\u8FDB\u884C\u7EBF\u7A0B\u8D4B\u503C\uFF0C\u8FD8\u53EF\u80FD\u7ACB\u5373\u521B\u5EFA\u65B0\u7684\u7EBF\u7A0B\u6765\u6267\u884C\u4EFB\u52A1\u3002</p>`,81),i=[l];function t(r,p){return e(),a("div",null,i)}const u=n(o,[["render",t],["__file","java-thread-y-threadpool-principle.html.vue"]]);export{u as default};
