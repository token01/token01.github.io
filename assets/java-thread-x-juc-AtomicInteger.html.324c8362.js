import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as t,a as n,b as e,d as o,f as c,r as l}from"./app.59d8da70.js";const i={},u=c(`<h1 id="juc\u539F\u5B50\u7C7B-cas-unsafe\u548C\u539F\u5B50\u7C7B\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#juc\u539F\u5B50\u7C7B-cas-unsafe\u548C\u539F\u5B50\u7C7B\u8BE6\u89E3" aria-hidden="true">#</a> JUC\u539F\u5B50\u7C7B: CAS, Unsafe\u548C\u539F\u5B50\u7C7B\u8BE6\u89E3</h1><blockquote><p>Java\u539F\u5B50\u7C7B\u662F\u901A\u8FC7UnSafe\u7C7B\u5B9E\u73B0\u7684\uFF0C\u8FD9\u8282\u4E3B\u8981\u5206\u6790\u4E0BUnSafe\u7C7B\u3002UnSafe\u7C7B\u5728J.U.C\u4E2DCAS\u64CD\u4F5C\u6709\u5F88\u5E7F\u6CDB\u7684\u5E94\u7528\u3002</p></blockquote><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>Unsafe\u662F\u4F4D\u4E8Esun.misc\u5305\u4E0B\u7684\u4E00\u4E2A\u7C7B\uFF0C<strong>\u4E3B\u8981\u63D0\u4F9B\u4E00\u4E9B\u7528\u4E8E\u6267\u884C\u4F4E\u7EA7\u522B\u3001\u4E0D\u5B89\u5168\u64CD\u4F5C\u7684\u65B9\u6CD5</strong>\uFF0C</p><ul><li>\u5982\u76F4\u63A5\u8BBF\u95EE\u7CFB\u7EDF\u5185\u5B58\u8D44\u6E90</li><li>\u81EA\u4E3B\u7BA1\u7406\u5185\u5B58\u8D44\u6E90\u7B49</li></ul><p>\u8FD9\u4E9B\u65B9\u6CD5\u5728\u63D0\u5347Java\u8FD0\u884C\u6548\u7387\u3001\u589E\u5F3AJava\u8BED\u8A00\u5E95\u5C42\u8D44\u6E90\u64CD\u4F5C\u80FD\u529B\u65B9\u9762\u8D77\u5230\u4E86\u5F88\u5927\u7684\u4F5C\u7528\u3002</p><h3 id="_1-1-unsafe\u7C7B\u7684\u6307\u9488\u98CE\u9669" tabindex="-1"><a class="header-anchor" href="#_1-1-unsafe\u7C7B\u7684\u6307\u9488\u98CE\u9669" aria-hidden="true">#</a> 1.1 Unsafe\u7C7B\u7684\u6307\u9488\u98CE\u9669</h3><p>\u4F46\u7531\u4E8EUnsafe\u7C7B<strong>\u4F7FJava\u8BED\u8A00\u62E5\u6709\u4E86\u7C7B\u4F3CC\u8BED\u8A00\u6307\u9488\u4E00\u6837\u64CD\u4F5C\u5185\u5B58\u7A7A\u95F4\u7684\u80FD\u529B\uFF0C\u8FD9\u65E0\u7591\u4E5F\u589E\u52A0\u4E86\u7A0B\u5E8F\u53D1\u751F\u76F8\u5173\u6307\u9488\u95EE\u9898\u7684\u98CE\u9669</strong>\u3002\u5728\u7A0B\u5E8F\u4E2D\u8FC7\u5EA6\u3001\u4E0D\u6B63\u786E\u4F7F\u7528Unsafe\u7C7B\u4F1A\u4F7F\u5F97\u7A0B\u5E8F\u51FA\u9519\u7684\u6982\u7387\u53D8\u5927\uFF0C\u4F7F\u5F97Java\u8FD9\u79CD\u5B89\u5168\u7684\u8BED\u8A00\u53D8\u5F97\u4E0D\u518D\u201C\u5B89\u5168\u201D\uFF0C\u56E0\u6B64\u5BF9Unsafe\u7684\u4F7F\u7528\u4E00\u5B9A\u8981\u614E\u91CD\u3002</p><h3 id="_1-2-unsafe-\u7C7B\u7684\u4F7F\u7528\u53D7\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#_1-2-unsafe-\u7C7B\u7684\u4F7F\u7528\u53D7\u9650\u5236" aria-hidden="true">#</a> 1.2 Unsafe \u7C7B\u7684\u4F7F\u7528\u53D7\u9650\u5236</h3><p>\u8FD9\u4E2A\u7C7B\u5C3D\u7BA1\u91CC\u9762\u7684\u65B9\u6CD5\u90FD\u662F public \u7684\uFF0C\u4F46\u662F\u5E76\u6CA1\u6709\u529E\u6CD5\u4F7F\u7528\u5B83\u4EEC\uFF0CJDK API \u6587\u6863\u4E5F\u6CA1\u6709\u63D0\u4F9B\u4EFB\u4F55\u5173\u4E8E\u8FD9\u4E2A\u7C7B\u7684\u65B9\u6CD5\u7684\u89E3\u91CA\u3002\u603B\u800C\u8A00\u4E4B\uFF0C\u5BF9\u4E8E Unsafe \u7C7B\u7684\u4F7F\u7528\u90FD\u662F\u53D7\u9650\u5236\u7684\uFF0C\u53EA\u6709\u6388\u4FE1\u7684\u4EE3\u7801\u624D\u80FD\u83B7\u5F97\u8BE5\u7C7B\u7684\u5B9E\u4F8B\uFF0C\u5F53\u7136 JDK \u5E93\u91CC\u9762\u7684\u7C7B\u662F\u53EF\u4EE5\u968F\u610F\u4F7F\u7528\u7684\u3002</p><h2 id="_2-unsafe-\u603B\u4F53\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#_2-unsafe-\u603B\u4F53\u529F\u80FD" aria-hidden="true">#</a> 2. Unsafe \u603B\u4F53\u529F\u80FD</h2><p>\u5148\u6765\u770B\u4E0B\u8FD9\u5F20\u56FE\uFF0C\u5BF9UnSafe\u7C7B\u603B\u4F53\u529F\u80FD\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220523213917758.png" alt="image-20220523213917758"></p><p>\u5982\u4E0A\u56FE\u6240\u793A\uFF0CUnsafe\u63D0\u4F9B\u7684API\u5927\u81F4\u53EF\u5206\u4E3A\u5185\u5B58\u64CD\u4F5C\u3001CAS\u3001Class\u76F8\u5173\u3001\u5BF9\u8C61\u64CD\u4F5C\u3001\u7EBF\u7A0B\u8C03\u5EA6\u3001\u7CFB\u7EDF\u4FE1\u606F\u83B7\u53D6\u3001\u5185\u5B58\u5C4F\u969C\u3001\u6570\u7EC4\u64CD\u4F5C\u7B49\u51E0\u7C7B\uFF0C\u4E0B\u9762\u5C06\u5BF9\u5176\u76F8\u5173\u65B9\u6CD5\u548C\u5E94\u7528\u573A\u666F\u8FDB\u884C\u8BE6\u7EC6\u4ECB\u7ECD\u3002</p><h2 id="_3-unsafe\u4E0Ecas" tabindex="-1"><a class="header-anchor" href="#_3-unsafe\u4E0Ecas" aria-hidden="true">#</a> 3. Unsafe\u4E0ECAS</h2><p>\u53CD\u7F16\u8BD1\u51FA\u6765\u7684\u4EE3\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getAndAddInt</span><span class="token punctuation">(</span><span class="token class-name">Object</span> paramObject<span class="token punctuation">,</span> <span class="token keyword">long</span> paramLong<span class="token punctuation">,</span> <span class="token keyword">int</span> paramInt<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">do</span>
      i <span class="token operator">=</span> <span class="token function">getIntVolatile</span><span class="token punctuation">(</span>paramObject<span class="token punctuation">,</span> paramLong<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">compareAndSwapInt</span><span class="token punctuation">(</span>paramObject<span class="token punctuation">,</span> paramLong<span class="token punctuation">,</span> i<span class="token punctuation">,</span> i <span class="token operator">+</span> paramInt<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">long</span> <span class="token function">getAndAddLong</span><span class="token punctuation">(</span><span class="token class-name">Object</span> paramObject<span class="token punctuation">,</span> <span class="token keyword">long</span> paramLong1<span class="token punctuation">,</span> <span class="token keyword">long</span> paramLong2<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">long</span> l<span class="token punctuation">;</span>
    <span class="token keyword">do</span>
      l <span class="token operator">=</span> <span class="token function">getLongVolatile</span><span class="token punctuation">(</span>paramObject<span class="token punctuation">,</span> paramLong1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">compareAndSwapLong</span><span class="token punctuation">(</span>paramObject<span class="token punctuation">,</span> paramLong1<span class="token punctuation">,</span> l<span class="token punctuation">,</span> l <span class="token operator">+</span> paramLong2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> l<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getAndSetInt</span><span class="token punctuation">(</span><span class="token class-name">Object</span> paramObject<span class="token punctuation">,</span> <span class="token keyword">long</span> paramLong<span class="token punctuation">,</span> <span class="token keyword">int</span> paramInt<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">do</span>
      i <span class="token operator">=</span> <span class="token function">getIntVolatile</span><span class="token punctuation">(</span>paramObject<span class="token punctuation">,</span> paramLong<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">compareAndSwapInt</span><span class="token punctuation">(</span>paramObject<span class="token punctuation">,</span> paramLong<span class="token punctuation">,</span> i<span class="token punctuation">,</span> paramInt<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">long</span> <span class="token function">getAndSetLong</span><span class="token punctuation">(</span><span class="token class-name">Object</span> paramObject<span class="token punctuation">,</span> <span class="token keyword">long</span> paramLong1<span class="token punctuation">,</span> <span class="token keyword">long</span> paramLong2<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">long</span> l<span class="token punctuation">;</span>
    <span class="token keyword">do</span>
      l <span class="token operator">=</span> <span class="token function">getLongVolatile</span><span class="token punctuation">(</span>paramObject<span class="token punctuation">,</span> paramLong1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">compareAndSwapLong</span><span class="token punctuation">(</span>paramObject<span class="token punctuation">,</span> paramLong1<span class="token punctuation">,</span> l<span class="token punctuation">,</span> paramLong2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> l<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token class-name">Object</span> <span class="token function">getAndSetObject</span><span class="token punctuation">(</span><span class="token class-name">Object</span> paramObject1<span class="token punctuation">,</span> <span class="token keyword">long</span> paramLong<span class="token punctuation">,</span> <span class="token class-name">Object</span> paramObject2<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token class-name">Object</span> localObject<span class="token punctuation">;</span>
    <span class="token keyword">do</span>
      localObject <span class="token operator">=</span> <span class="token function">getObjectVolatile</span><span class="token punctuation">(</span>paramObject1<span class="token punctuation">,</span> paramLong<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">compareAndSwapObject</span><span class="token punctuation">(</span>paramObject1<span class="token punctuation">,</span> paramLong<span class="token punctuation">,</span> localObject<span class="token punctuation">,</span> paramObject2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> localObject<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u6E90\u7801\u4E2D\u53D1\u73B0\uFF0C\u5185\u90E8\u4F7F\u7528\u81EA\u65CB\u7684\u65B9\u5F0F\u8FDB\u884CCAS\u66F4\u65B0(while\u5FAA\u73AF\u8FDB\u884CCAS\u66F4\u65B0\uFF0C\u5982\u679C\u66F4\u65B0\u5931\u8D25\uFF0C\u5219\u5FAA\u73AF\u518D\u6B21\u91CD\u8BD5)\u3002</p><p>\u53C8\u4ECEUnsafe\u7C7B\u4E2D\u53D1\u73B0\uFF0C\u539F\u5B50\u64CD\u4F5C\u5176\u5B9E\u53EA\u652F\u6301\u4E0B\u9762\u4E09\u4E2A\u65B9\u6CD5\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSwapObject</span><span class="token punctuation">(</span><span class="token class-name">Object</span> paramObject1<span class="token punctuation">,</span> <span class="token keyword">long</span> paramLong<span class="token punctuation">,</span> <span class="token class-name">Object</span> paramObject2<span class="token punctuation">,</span> <span class="token class-name">Object</span> paramObject3<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSwapInt</span><span class="token punctuation">(</span><span class="token class-name">Object</span> paramObject<span class="token punctuation">,</span> <span class="token keyword">long</span> paramLong<span class="token punctuation">,</span> <span class="token keyword">int</span> paramInt1<span class="token punctuation">,</span> <span class="token keyword">int</span> paramInt2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSwapLong</span><span class="token punctuation">(</span><span class="token class-name">Object</span> paramObject<span class="token punctuation">,</span> <span class="token keyword">long</span> paramLong1<span class="token punctuation">,</span> <span class="token keyword">long</span> paramLong2<span class="token punctuation">,</span> <span class="token keyword">long</span> paramLong3<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53D1\u73B0Unsafe\u53EA\u63D0\u4F9B\u4E863\u79CDCAS\u65B9\u6CD5\uFF1AcompareAndSwapObject\u3001compareAndSwapInt\u548CcompareAndSwapLong\u3002\u90FD\u662Fnative\u65B9\u6CD5</p><h2 id="_4-unsafe\u5E95\u5C42compareandswap-\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_4-unsafe\u5E95\u5C42compareandswap-\u7684\u5B9E\u73B0" aria-hidden="true">#</a> 4. Unsafe\u5E95\u5C42compareAndSwap \u7684\u5B9E\u73B0</h2><p>\u4E0D\u59A8\u518D\u770B\u770BUnsafe\u7684compareAndSwap \u65B9\u6CD5\u6765\u5B9E\u73B0CAS\u64CD\u4F5C\uFF0C\u5B83\u662F\u4E00\u4E2A\u672C\u5730\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u4F4D\u4E8Eunsafe.cpp\u4E2D\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token function">UNSAFE_ENTRY</span><span class="token punctuation">(</span>jboolean<span class="token punctuation">,</span> <span class="token function">Unsafe_CompareAndSwapInt</span><span class="token punctuation">(</span>JNIEnv <span class="token operator">*</span>env<span class="token punctuation">,</span> jobject unsafe<span class="token punctuation">,</span> jobject obj<span class="token punctuation">,</span> jlong offset<span class="token punctuation">,</span> jint e<span class="token punctuation">,</span> jint x<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token function">UnsafeWrapper</span><span class="token punctuation">(</span><span class="token string">&quot;Unsafe_CompareAndSwapInt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  oop p <span class="token operator">=</span> JNIHandles<span class="token operator">::</span><span class="token function">resolve</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  jint<span class="token operator">*</span> addr <span class="token operator">=</span> <span class="token punctuation">(</span>jint <span class="token operator">*</span><span class="token punctuation">)</span> <span class="token function">index_oop_from_field_offset_long</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> offset<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>jint<span class="token punctuation">)</span><span class="token punctuation">(</span>Atomic<span class="token operator">::</span><span class="token function">cmpxchg</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> addr<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> e<span class="token punctuation">;</span>
UNSAFE_END
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u5B83\u901A\u8FC7 <code>Atomic::cmpxchg</code> \u6765\u5B9E\u73B0\u6BD4\u8F83\u548C\u66FF\u6362\u64CD\u4F5C\u3002\u5176\u4E2D\u53C2\u6570x\u662F\u5373\u5C06\u66F4\u65B0\u7684\u503C\uFF0C\u53C2\u6570e\u662F\u539F\u5185\u5B58\u7684\u503C\u3002</p><p>\u5982\u679C\u662FLinux\u7684x86\uFF0C<code>Atomic::cmpxchg</code>\u65B9\u6CD5\u7684\u5B9E\u73B0\u5982\u4E0B\uFF1A</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">inline</span> jint Atomic<span class="token operator">::</span><span class="token function">cmpxchg</span> <span class="token punctuation">(</span>jint exchange_value<span class="token punctuation">,</span> <span class="token keyword">volatile</span> jint<span class="token operator">*</span> dest<span class="token punctuation">,</span> jint compare_value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> mp <span class="token operator">=</span> os<span class="token operator">::</span><span class="token function">is_MP</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  __asm__ <span class="token keyword">volatile</span> <span class="token punctuation">(</span><span class="token function">LOCK_IF_MP</span><span class="token punctuation">(</span><span class="token operator">%</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;cmpxchgl %1,(%3)&quot;</span>
                    <span class="token operator">:</span> <span class="token string">&quot;=a&quot;</span> <span class="token punctuation">(</span>exchange_value<span class="token punctuation">)</span>
                    <span class="token operator">:</span> <span class="token string">&quot;r&quot;</span> <span class="token punctuation">(</span>exchange_value<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span> <span class="token punctuation">(</span>compare_value<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span> <span class="token punctuation">(</span>dest<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span> <span class="token punctuation">(</span>mp<span class="token punctuation">)</span>
                    <span class="token operator">:</span> <span class="token string">&quot;cc&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;memory&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> exchange_value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u800Cwindows\u7684x86\u7684\u5B9E\u73B0\u5982\u4E0B\uFF1A</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">inline</span> jint Atomic<span class="token operator">::</span><span class="token function">cmpxchg</span> <span class="token punctuation">(</span>jint exchange_value<span class="token punctuation">,</span> <span class="token keyword">volatile</span> jint<span class="token operator">*</span> dest<span class="token punctuation">,</span> jint compare_value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> mp <span class="token operator">=</span> os<span class="token operator">::</span><span class="token function">isMP</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5224\u65AD\u662F\u5426\u662F\u591A\u5904\u7406\u5668</span>
    _asm <span class="token punctuation">{</span>
        mov edx<span class="token punctuation">,</span> dest
        mov ecx<span class="token punctuation">,</span> exchange_value
        mov eax<span class="token punctuation">,</span> compare_value
        <span class="token function">LOCK_IF_MP</span><span class="token punctuation">(</span>mp<span class="token punctuation">)</span>
        cmpxchg dword ptr <span class="token punctuation">[</span>edx<span class="token punctuation">]</span><span class="token punctuation">,</span> ecx
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Adding a lock prefix to an instruction on MP machine</span>
<span class="token comment">// VC++ doesn&#39;t like the lock prefix to be on a single line</span>
<span class="token comment">// so we can&#39;t insert a label after the lock prefix.</span>
<span class="token comment">// By emitting a lock prefix, we can define a label after it.</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">LOCK_IF_MP</span><span class="token expression"><span class="token punctuation">(</span>mp<span class="token punctuation">)</span> __asm cmp mp<span class="token punctuation">,</span> <span class="token number">0</span>  </span><span class="token punctuation">\\</span>
                       <span class="token expression">__asm je L0      </span><span class="token punctuation">\\</span>
                       <span class="token expression">__asm _emit <span class="token number">0xF0</span> </span><span class="token punctuation">\\</span>
                       <span class="token expression">__asm L0<span class="token operator">:</span></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u662F\u591A\u5904\u7406\u5668\uFF0C\u4E3Acmpxchg\u6307\u4EE4\u6DFB\u52A0lock\u524D\u7F00\u3002\u53CD\u4E4B\uFF0C\u5C31\u7701\u7565lock\u524D\u7F00(\u5355\u5904\u7406\u5668\u4F1A\u4E0D\u9700\u8981lock\u524D\u7F00\u63D0\u4F9B\u7684\u5185\u5B58\u5C4F\u969C\u6548\u679C)\u3002\u8FD9\u91CC\u7684lock\u524D\u7F00\u5C31\u662F\u4F7F\u7528\u4E86\u5904\u7406\u5668\u7684\u603B\u7EBF\u9501(\u6700\u65B0\u7684\u5904\u7406\u5668\u90FD\u4F7F\u7528\u7F13\u5B58\u9501\u4EE3\u66FF\u603B\u7EBF\u9501\u6765\u63D0\u9AD8\u6027\u80FD)\u3002</p><blockquote><p>cmpxchg(void* ptr, int old, int new)\uFF0C\u5982\u679Cptr\u548Cold\u7684\u503C\u4E00\u6837\uFF0C\u5219\u628Anew\u5199\u5230ptr\u5185\u5B58\uFF0C\u5426\u5219\u8FD4\u56DEptr\u7684\u503C\uFF0C\u6574\u4E2A\u64CD\u4F5C\u662F\u539F\u5B50\u7684\u3002\u5728Intel\u5E73\u53F0\u4E0B\uFF0C\u4F1A\u7528lock cmpxchg\u6765\u5B9E\u73B0\uFF0C\u4F7F\u7528lock\u89E6\u53D1\u7F13\u5B58\u9501\uFF0C\u8FD9\u6837\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u60F3\u8BBF\u95EEptr\u7684\u5185\u5B58\uFF0C\u5C31\u4F1A\u88ABblock\u4F4F\u3002</p></blockquote><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,32),r={href:"https://pdai.tech/md/java/thread/java-thread-x-juc-AtomicInteger.html",target:"_blank",rel:"noopener noreferrer"};function k(d,m){const a=l("ExternalLinkIcon");return p(),t("div",null,[u,n("p",null,[n("a",r,[e("JUC\u539F\u5B50\u7C7B: CAS, Unsafe\u548C\u539F\u5B50\u7C7B\u8BE6\u89E3"),o(a)])])])}const g=s(i,[["render",k],["__file","java-thread-x-juc-AtomicInteger.html.vue"]]);export{g as default};
