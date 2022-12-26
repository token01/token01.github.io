import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,a,d as t,f as o,r as c}from"./app.f90ce353.js";const l={},i=o(`<h1 id="jvm-\u57FA\u7840-java-\u5185\u5B58\u6A21\u578B\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#jvm-\u57FA\u7840-java-\u5185\u5B58\u6A21\u578B\u5F15\u5165" aria-hidden="true">#</a> JVM \u57FA\u7840 - Java \u5185\u5B58\u6A21\u578B\u5F15\u5165</h1><blockquote><p>\u5F88\u591A\u4EBA\u90FD\u65E0\u6CD5\u533A\u5206Java\u5185\u5B58\u6A21\u578B\u548CJVM\u5185\u5B58\u7ED3\u6784\uFF0C\u4EE5\u53CAJava\u5185\u5B58\u6A21\u578B\u4E0E\u7269\u7406\u5185\u5B58\u4E4B\u95F4\u7684\u5173\u7CFB\u3002\u672C\u6587\u4ECE\u5806\u6808\u89D2\u5EA6\u5F15\u5165JMM\uFF0C\u7136\u540E\u4ECB\u7ECDJMM\u548C\u7269\u7406\u5185\u5B58\u4E4B\u95F4\u7684\u5173\u7CFB, \u4E3A\u540E\u9762<code>JMM\u8BE6\u89E3</code>, <code>JVM \u5185\u5B58\u7ED3\u6784\u8BE6\u89E3</code>, <code>Java \u5BF9\u8C61\u6A21\u578B\u8BE6\u89E3</code>\u7B49\u94FA\u57AB\u3002</p></blockquote><h2 id="_0-java\u5185\u5B58\u6A21\u578B\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_0-java\u5185\u5B58\u6A21\u578B\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 0. Java\u5185\u5B58\u6A21\u578B\u662F\u4EC0\u4E48</h2><p>Java\u5185\u5B58\u6A21\u578B\u89C4\u5B9A\u4E86<strong>\u6240\u6709\u7684\u53D8\u91CF\u90FD\u5B58\u50A8\u5728\u4E3B\u5185\u5B58</strong>\u4E2D\uFF0C<strong>\u6BCF\u6761\u7EBF\u7A0B\u8FD8\u6709\u81EA\u5DF1\u7684\u5DE5\u4F5C\u5185\u5B58</strong>\uFF0C\u7EBF\u7A0B\u7684<strong>\u5DE5\u4F5C\u5185\u5B58\u4E2D\u4FDD\u5B58\u4E86\u8BE5\u7EBF\u7A0B\u4E2D\u662F\u7528\u5230\u7684\u53D8\u91CF\u7684\u4E3B\u5185\u5B58\u526F\u672C\u62F7\u8D1D</strong>\uFF0C\u7EBF\u7A0B\u5BF9\u53D8\u91CF\u7684\u6240\u6709\u64CD\u4F5C\u90FD\u5FC5\u987B\u5728\u5DE5\u4F5C\u5185\u5B58\u4E2D\u8FDB\u884C\uFF0C\u800C\u4E0D\u80FD\u76F4\u63A5\u8BFB\u5199\u4E3B\u5185\u5B58\u3002\u4E0D\u540C\u7684\u7EBF\u7A0B\u4E4B\u95F4\u4E5F\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\u5BF9\u65B9\u5DE5\u4F5C\u5185\u5B58\u4E2D\u7684\u53D8\u91CF\uFF0C<strong>\u7EBF\u7A0B\u95F4\u53D8\u91CF\u7684\u4F20\u9012\u5747\u9700\u8981\u81EA\u5DF1\u7684\u5DE5\u4F5C\u5185\u5B58\u548C\u4E3B\u5B58\u4E4B\u95F4\u8FDB\u884C\u6570\u636E\u540C\u6B65\u8FDB\u884C</strong>\u3002\u6240\u4EE5\uFF0C\u5C31<strong>\u53EF\u80FD\u51FA\u73B0\u7EBF\u7A0B1\u6539\u4E86\u67D0\u4E2A\u53D8\u91CF\u7684\u503C\uFF0C\u4F46\u662F\u7EBF\u7A0B2\u4E0D\u53EF\u89C1\u7684\u60C5\u51B5</strong>\u3002</p><h2 id="_1-jmm\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#_1-jmm\u5F15\u5165" aria-hidden="true">#</a> 1. JMM\u5F15\u5165</h2><h3 id="_1-1-\u4ECE\u5806\u6808\u8BF4\u8D77" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4ECE\u5806\u6808\u8BF4\u8D77" aria-hidden="true">#</a> 1.1 \u4ECE\u5806\u6808\u8BF4\u8D77</h3><p>JVM\u5185\u90E8\u4F7F\u7528\u7684Java\u5185\u5B58\u6A21\u578B\u5728\u7EBF\u7A0B\u6808\u548C\u5806\u4E4B\u95F4\u5212\u5206\u5185\u5B58\u3002 \u6B64\u56FE\u4ECE\u903B\u8F91\u89D2\u5EA6\u8BF4\u660E\u4E86Java\u5185\u5B58\u6A21\u578B\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220821094940201.png" alt="image-20220821094940201"></p><h3 id="_1-2-\u5806\u6808\u91CC\u9762\u653E\u4E86\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5806\u6808\u91CC\u9762\u653E\u4E86\u4EC0\u4E48" aria-hidden="true">#</a> 1.2 \u5806\u6808\u91CC\u9762\u653E\u4E86\u4EC0\u4E48?</h3><p>\u7EBF\u7A0B\u5806\u6808\u8FD8\u5305\u542B\u6B63\u5728\u6267\u884C\u7684\u6BCF\u4E2A\u65B9\u6CD5\u7684\u6240\u6709\u5C40\u90E8\u53D8\u91CF(\u8C03\u7528\u5806\u6808\u4E0A\u7684\u6240\u6709\u65B9\u6CD5)\u3002 \u7EBF\u7A0B\u53EA\u80FD\u8BBF\u95EE\u5B83\u81EA\u5DF1\u7684\u7EBF\u7A0B\u5806\u6808\u3002 \u7531\u7EBF\u7A0B\u521B\u5EFA\u7684\u5C40\u90E8\u53D8\u91CF\u5BF9\u4E8E\u521B\u5EFA\u5B83\u7684\u7EBF\u7A0B\u4EE5\u5916\u7684\u6240\u6709\u5176\u4ED6\u7EBF\u7A0B\u662F\u4E0D\u53EF\u89C1\u7684\u3002 \u5373\u4F7F\u4E24\u4E2A\u7EBF\u7A0B\u6B63\u5728\u6267\u884C\u5B8C\u5168\u76F8\u540C\u7684\u4EE3\u7801\uFF0C\u4E24\u4E2A\u7EBF\u7A0B\u4ECD\u5C06\u5728\u6BCF\u4E2A\u81EA\u5DF1\u7684\u7EBF\u7A0B\u5806\u6808\u4E2D\u521B\u5EFA\u8BE5\u4EE3\u7801\u7684\u5C40\u90E8\u53D8\u91CF\u3002 \u56E0\u6B64\uFF0C\u6BCF\u4E2A\u7EBF\u7A0B\u90FD\u6709\u81EA\u5DF1\u7684\u6BCF\u4E2A\u5C40\u90E8\u53D8\u91CF\u7684\u7248\u672C\u3002</p><p>\u57FA\u672C\u7C7B\u578B\u7684\u6240\u6709\u5C40\u90E8\u53D8\u91CF(boolean\uFF0Cbyte\uFF0Cshort\uFF0Cchar\uFF0Cint\uFF0Clong\uFF0Cfloat\uFF0Cdouble)\u5B8C\u5168\u5B58\u50A8\u5728\u7EBF\u7A0B\u5806\u6808\u4E2D\uFF0C\u56E0\u6B64\u5BF9\u5176\u4ED6\u7EBF\u7A0B\u4E0D\u53EF\u89C1\u3002 \u4E00\u4E2A\u7EBF\u7A0B\u53EF\u4EE5\u5C06\u4E00\u4E2A\u57FA\u672C\u7C7B\u578B\u53D8\u91CF\u7684\u526F\u672C\u4F20\u9012\u7ED9\u53E6\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u4F46\u5B83\u4E0D\u80FD\u5171\u4EAB\u539F\u59CB\u5C40\u90E8\u53D8\u91CF\u672C\u8EAB\u3002</p><p>\u5806\u5305\u542B\u4E86\u5728Java\u5E94\u7528\u7A0B\u5E8F\u4E2D\u521B\u5EFA\u7684\u6240\u6709\u5BF9\u8C61\uFF0C\u65E0\u8BBA\u521B\u5EFA\u8BE5\u5BF9\u8C61\u7684\u7EBF\u7A0B\u662F\u4EC0\u4E48\u3002 \u8FD9\u5305\u62EC\u57FA\u672C\u7C7B\u578B\u7684\u5305\u88C5\u7C7B(\u4F8B\u5982Byte\uFF0CInteger\uFF0CLong\u7B49)\u3002 \u65E0\u8BBA\u662F\u521B\u5EFA\u5BF9\u8C61\u5E76\u5C06\u5176\u5206\u914D\u7ED9\u5C40\u90E8\u53D8\u91CF\uFF0C\u8FD8\u662F\u521B\u5EFA\u4E3A\u53E6\u4E00\u4E2A\u5BF9\u8C61\u7684\u6210\u5458\u53D8\u91CF\uFF0C\u8BE5\u5BF9\u8C61\u4ECD\u7136\u5B58\u50A8\u5728\u5806\u4E0A\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220821095216100.png" alt="image-20220821095216100"></p><p>\u5C40\u90E8\u53D8\u91CF\u53EF\u4EE5\u662F\u57FA\u672C\u7C7B\u578B\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5B83\u5B8C\u5168\u4FDD\u7559\u5728\u7EBF\u7A0B\u5806\u6808\u4E0A\u3002</p><p>\u5C40\u90E8\u53D8\u91CF\u4E5F\u53EF\u4EE5\u662F\u5BF9\u8C61\u7684\u5F15\u7528\u3002 \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5F15\u7528(\u5C40\u90E8\u53D8\u91CF)\u5B58\u50A8\u5728\u7EBF\u7A0B\u5806\u6808\u4E2D\uFF0C\u4F46\u662F\u5BF9\u8C61\u672C\u8EAB\u5B58\u50A8\u5728\u5806(Heap)\u4E0A\u3002</p><p>\u5BF9\u8C61\u7684\u6210\u5458\u53D8\u91CF\u4E0E\u5BF9\u8C61\u672C\u8EAB\u4E00\u8D77\u5B58\u50A8\u5728\u5806\u4E0A\u3002 \u5F53\u6210\u5458\u53D8\u91CF\u662F\u57FA\u672C\u7C7B\u578B\u65F6\uFF0C\u4EE5\u53CA\u5B83\u662F\u5BF9\u8C61\u7684\u5F15\u7528\u65F6\u90FD\u662F\u5982\u6B64\u3002</p><p>\u9759\u6001\u7C7B\u53D8\u91CF\u4E5F\u4E0E\u7C7B\u5B9A\u4E49\u4E00\u8D77\u5B58\u50A8\u5728\u5806\u4E0A\u3002</p><h3 id="_1-3-\u7EBF\u7A0B\u6808\u5982\u4F55\u8BBF\u95EE\u5806\u4E0A\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_1-3-\u7EBF\u7A0B\u6808\u5982\u4F55\u8BBF\u95EE\u5806\u4E0A\u5BF9\u8C61" aria-hidden="true">#</a> 1.3 \u7EBF\u7A0B\u6808\u5982\u4F55\u8BBF\u95EE\u5806\u4E0A\u5BF9\u8C61?</h3><p>\u6240\u6709\u5177\u6709\u5BF9\u8C61\u5F15\u7528\u7684\u7EBF\u7A0B\u90FD\u53EF\u4EE5\u8BBF\u95EE\u5806\u4E0A\u7684\u5BF9\u8C61\u3002 \u5F53\u4E00\u4E2A\u7EBF\u7A0B\u6709\u6743\u8BBF\u95EE\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u5B83\u4E5F\u53EF\u4EE5\u8BBF\u95EE\u8BE5\u5BF9\u8C61\u7684\u6210\u5458\u53D8\u91CF\u3002 <strong>\u5982\u679C\u4E24\u4E2A\u7EBF\u7A0B\u540C\u65F6\u5728\u540C\u4E00\u4E2A\u5BF9\u8C61\u4E0A\u8C03\u7528\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5B83\u4EEC\u90FD\u53EF\u4EE5\u8BBF\u95EE\u8BE5\u5BF9\u8C61\u7684\u6210\u5458\u53D8\u91CF\uFF0C\u4F46\u6BCF\u4E2A\u7EBF\u7A0B\u90FD\u6709\u81EA\u5DF1\u7684\u5C40\u90E8\u53D8\u91CF\u526F\u672C\u3002</strong></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220821095443653.png" alt="image-20220821095443653"></p><p>\u4E24\u4E2A\u7EBF\u7A0B\u6709\u4E00\u7EC4\u5C40\u90E8\u53D8\u91CF\u3002 \u5176\u4E2D\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF(\u5C40\u90E8\u53D8\u91CF2)\u6307\u5411\u5806\u4E0A\u7684\u5171\u4EAB\u5BF9\u8C61(\u5BF9\u8C613)\u3002 \u4E24\u4E2A\u7EBF\u7A0B\u5404\u81EA\u5BF9\u540C\u4E00\u5BF9\u8C61\u5177\u6709\u4E0D\u540C\u7684\u5F15\u7528\u3002 \u5B83\u4EEC\u7684\u5F15\u7528\u662F\u5C40\u90E8\u53D8\u91CF\uFF0C\u56E0\u6B64\u5B58\u50A8\u5728\u6BCF\u4E2A\u7EBF\u7A0B\u7684\u7EBF\u7A0B\u5806\u6808\u4E2D(\u5728\u6BCF\u4E2A\u7EBF\u7A0B\u5806\u6808\u4E0A)\u3002 \u4F46\u662F\uFF0C\u8FD9\u4E24\u4E2A\u4E0D\u540C\u7684\u5F15\u7528\u6307\u5411\u5806\u4E0A\u7684\u540C\u4E00\u4E2A\u5BF9\u8C61\u3002</p><p>\u6CE8\u610F\u5171\u4EAB\u5BF9\u8C61(\u5BF9\u8C613)\u5982\u4F55\u5C06\u5BF9\u8C612\u548C\u5BF9\u8C614\u4F5C\u4E3A\u6210\u5458\u53D8\u91CF\u5F15\u7528(\u7531\u5BF9\u8C613\u5230\u5BF9\u8C612\u548C\u5BF9\u8C614\u7684\u7BAD\u5934\u6240\u793A)\u3002 \u901A\u8FC7\u5BF9\u8C613\u4E2D\u7684\u8FD9\u4E9B\u6210\u5458\u53D8\u91CF\u5F15\u7528\uFF0C\u4E24\u4E2A\u7EBF\u7A0B\u53EF\u4EE5\u8BBF\u95EE\u5BF9\u8C612\u548C\u5BF9\u8C614.</p><p>\u8BE5\u56FE\u8FD8\u663E\u793A\u4E86\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF\uFF0C\u8BE5\u53D8\u91CF\u6307\u5411\u5806\u4E0A\u7684\u4E24\u4E2A\u4E0D\u540C\u5BF9\u8C61\u3002 \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5F15\u7528\u6307\u5411\u4E24\u4E2A\u4E0D\u540C\u7684\u5BF9\u8C61(\u5BF9\u8C611\u548C\u5BF9\u8C615)\uFF0C\u800C\u4E0D\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61\u3002 \u7406\u8BBA\u4E0A\uFF0C\u5982\u679C\u4E24\u4E2A\u7EBF\u7A0B\u90FD\u5F15\u7528\u4E86\u4E24\u4E2A\u5BF9\u8C61\uFF0C\u5219\u4E24\u4E2A\u7EBF\u7A0B\u90FD\u53EF\u4EE5\u8BBF\u95EE\u5BF9\u8C611\u548C\u5BF9\u8C615\u3002 \u4F46\u662F\u5728\u4E0A\u56FE\u4E2D\uFF0C\u6BCF\u4E2A\u7EBF\u7A0B\u53EA\u5F15\u7528\u4E86\u4E24\u4E2A\u5BF9\u8C61\u4E2D\u7684\u4E00\u4E2A\u3002</p><h3 id="_1-4-\u7EBF\u7A0B\u6808\u8BBF\u95EE\u5806\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_1-4-\u7EBF\u7A0B\u6808\u8BBF\u95EE\u5806\u793A\u4F8B" aria-hidden="true">#</a> 1.4 \u7EBF\u7A0B\u6808\u8BBF\u95EE\u5806\u793A\u4F8B</h3><p>\u90A3\u4E48\uFF0C\u4EC0\u4E48\u6837\u7684Java\u4EE3\u7801\u53EF\u4EE5\u5BFC\u81F4\u4E0A\u9762\u7684\u5185\u5B58\u56FE? \u597D\u5427\uFF0C\u4EE3\u7801\u5C31\u50CF\u4E0B\u9762\u7684\u4EE3\u7801\u4E00\u6837\u7B80\u5355\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyRunnable</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">methodOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> localVariable1 <span class="token operator">=</span> <span class="token number">45</span><span class="token punctuation">;</span>

        <span class="token class-name">MySharedObject</span> localVariable2 <span class="token operator">=</span>
            <span class="token class-name">MySharedObject</span><span class="token punctuation">.</span>sharedInstance<span class="token punctuation">;</span>

        <span class="token comment">//... do more with local variables.</span>

        <span class="token function">methodTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Integer</span> localVariable1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//... do more with local variable.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MySharedObject</span> <span class="token punctuation">{</span>

    <span class="token comment">//static variable pointing to instance of MySharedObject</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">MySharedObject</span> sharedInstance <span class="token operator">=</span>
        <span class="token keyword">new</span> <span class="token class-name">MySharedObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token comment">//member variables pointing to two objects on the heap</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> object2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> object4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">44</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">long</span> member1 <span class="token operator">=</span> <span class="token number">12345</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> member1 <span class="token operator">=</span> <span class="token number">67890</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4E24\u4E2A\u7EBF\u7A0B\u6B63\u5728\u6267\u884Crun()\u65B9\u6CD5\uFF0C\u5219\u524D\u9762\u663E\u793A\u7684\u56FE\u8868\u5C06\u662F\u7ED3\u679C\u3002 run()\u65B9\u6CD5\u8C03\u7528methodOne()\uFF0CmethodOne()\u8C03\u7528methodTwo()\u3002</p><p>methodOne()\u58F0\u660E\u4E00\u4E2A\u5C40\u90E8\u57FA\u672C\u7C7B\u578B\u53D8\u91CF(\u7C7B\u578B\u4E3Aint\u7684localVariable1)\u548C\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF\uFF0C\u5B83\u662F\u4E00\u4E2A\u5BF9\u8C61\u5F15\u7528(localVariable2)\u3002</p><p>\u6267\u884CmethodOne()\u7684\u6BCF\u4E2A\u7EBF\u7A0B\u5C06\u5728\u5404\u81EA\u7684\u7EBF\u7A0B\u5806\u6808\u4E0A\u521B\u5EFA\u81EA\u5DF1\u7684localVariable1\u548ClocalVariable2\u526F\u672C\u3002 localVariable1\u53D8\u91CF\u5C06\u5B8C\u5168\u76F8\u4E92\u5206\u79BB\uFF0C\u53EA\u5B58\u5728\u4E8E\u6BCF\u4E2A\u7EBF\u7A0B\u7684\u7EBF\u7A0B\u5806\u6808\u4E2D\u3002 \u4E00\u4E2A\u7EBF\u7A0B\u65E0\u6CD5\u770B\u5230\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u5BF9\u5176localVariable1\u526F\u672C\u6240\u505A\u7684\u66F4\u6539\u3002</p><p>\u6267\u884CmethodOne()\u7684\u6BCF\u4E2A\u7EBF\u7A0B\u4E5F\u5C06\u521B\u5EFA\u81EA\u5DF1\u7684localVariable2\u526F\u672C\u3002 \u4F46\u662F\uFF0ClocalVariable2\u7684\u4E24\u4E2A\u4E0D\u540C\u526F\u672C\u6700\u7EC8\u90FD\u6307\u5411\u5806\u4E0A\u7684\u540C\u4E00\u4E2A\u5BF9\u8C61\u3002 \u4EE3\u7801\u5C06localVariable2\u8BBE\u7F6E\u4E3A\u6307\u5411\u9759\u6001\u53D8\u91CF\u5F15\u7528\u7684\u5BF9\u8C61\u3002 \u9759\u6001\u53D8\u91CF\u53EA\u6709\u4E00\u4E2A\u526F\u672C\uFF0C\u6B64\u526F\u672C\u5B58\u50A8\u5728\u5806\u4E0A\u3002 \u56E0\u6B64\uFF0ClocalVariable2\u7684\u4E24\u4E2A\u526F\u672C\u6700\u7EC8\u90FD\u6307\u5411\u9759\u6001\u53D8\u91CF\u6307\u5411\u7684MySharedObject\u7684\u540C\u4E00\u4E2A\u5B9E\u4F8B\u3002 MySharedObject\u5B9E\u4F8B\u4E5F\u5B58\u50A8\u5728\u5806\u4E0A\u3002 \u5B83\u5BF9\u5E94\u4E8E\u4E0A\u56FE\u4E2D\u7684\u5BF9\u8C613\u3002</p><p>\u6CE8\u610FMySharedObject\u7C7B\u8FD8\u5305\u542B\u4E24\u4E2A\u6210\u5458\u53D8\u91CF\u3002 \u6210\u5458\u53D8\u91CF\u672C\u8EAB\u4E0E\u5BF9\u8C61\u4E00\u8D77\u5B58\u50A8\u5728\u5806\u4E0A\u3002 \u4E24\u4E2A\u6210\u5458\u53D8\u91CF\u6307\u5411\u53E6\u5916\u4E24\u4E2AInteger\u5BF9\u8C61\u3002 \u8FD9\u4E9BInteger\u5BF9\u8C61\u5BF9\u5E94\u4E8E\u4E0A\u56FE\u4E2D\u7684Object 2\u548CObject 4\u3002</p><p>\u53E6\u8BF7\u6CE8\u610FmethodTwo()\u5982\u4F55\u521B\u5EFA\u540D\u4E3AlocalVariable1\u7684\u5C40\u90E8\u53D8\u91CF\u3002 \u6B64\u5C40\u90E8\u53D8\u91CF\u662F\u5BF9Integer\u5BF9\u8C61\u7684\u5BF9\u8C61\u5F15\u7528\u3002 \u8BE5\u65B9\u6CD5\u5C06localVariable1\u5F15\u7528\u8BBE\u7F6E\u4E3A\u6307\u5411\u65B0\u7684Integer\u5B9E\u4F8B\u3002 localVariable1\u5F15\u7528\u5C06\u5B58\u50A8\u5728\u6267\u884CmethodTwo()\u7684\u6BCF\u4E2A\u7EBF\u7A0B\u7684\u4E00\u4E2A\u526F\u672C\u4E2D\u3002 \u5B9E\u4F8B\u5316\u7684\u4E24\u4E2AInteger\u5BF9\u8C61\u5C06\u5B58\u50A8\u5728\u5806\u4E0A\uFF0C\u4F46\u7531\u4E8E\u8BE5\u65B9\u6CD5\u6BCF\u6B21\u6267\u884C\u8BE5\u65B9\u6CD5\u65F6\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684Integer\u5BF9\u8C61\uFF0C\u56E0\u6B64\u6267\u884C\u6B64\u65B9\u6CD5\u7684\u4E24\u4E2A\u7EBF\u7A0B\u5C06\u521B\u5EFA\u5355\u72EC\u7684Integer\u5B9E\u4F8B\u3002 \u5728methodTwo()\u4E2D\u521B\u5EFA\u7684Integer\u5BF9\u8C61\u5BF9\u5E94\u4E8E\u4E0A\u56FE\u4E2D\u7684Object 1\u548CObject 5\u3002</p><p>\u53E6\u8BF7\u6CE8\u610F\u7C7B\u578B\u4E3Along\u7684MySharedObject\u7C7B\u4E2D\u7684\u4E24\u4E2A\u6210\u5458\u53D8\u91CF\uFF0C\u5B83\u4EEC\u662F\u57FA\u672C\u7C7B\u578B\u3002 \u7531\u4E8E\u8FD9\u4E9B\u53D8\u91CF\u662F\u6210\u5458\u53D8\u91CF\uFF0C\u56E0\u6B64\u5B83\u4EEC\u4ECD\u4E0E\u5BF9\u8C61\u4E00\u8D77\u5B58\u50A8\u5728\u5806\u4E0A\u3002 \u53EA\u6709\u5C40\u90E8\u53D8\u91CF\u5B58\u50A8\u5728\u7EBF\u7A0B\u5806\u6808\u4E2D\u3002</p><h2 id="_2-jmm\u4E0E\u786C\u4EF6\u5185\u5B58\u7ED3\u6784\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_2-jmm\u4E0E\u786C\u4EF6\u5185\u5B58\u7ED3\u6784\u5173\u7CFB" aria-hidden="true">#</a> 2. JMM\u4E0E\u786C\u4EF6\u5185\u5B58\u7ED3\u6784\u5173\u7CFB</h2><h3 id="_2-1-\u786C\u4EF6\u5185\u5B58\u7ED3\u6784\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_2-1-\u786C\u4EF6\u5185\u5B58\u7ED3\u6784\u7B80\u4ECB" aria-hidden="true">#</a> 2.1 \u786C\u4EF6\u5185\u5B58\u7ED3\u6784\u7B80\u4ECB</h3><p>\u73B0\u4EE3\u786C\u4EF6\u5185\u5B58\u67B6\u6784\u4E0E\u5185\u90E8Java\u5185\u5B58\u6A21\u578B\u7565\u6709\u4E0D\u540C\u3002 \u4E86\u89E3\u786C\u4EF6\u5185\u5B58\u67B6\u6784\u4E5F\u5F88\u91CD\u8981\uFF0C\u4EE5\u4E86\u89E3Java\u5185\u5B58\u6A21\u578B\u5982\u4F55\u4E0E\u5176\u4E00\u8D77\u5DE5\u4F5C\u3002 \u672C\u8282\u4ECB\u7ECD\u4E86\u5E38\u89C1\u7684\u786C\u4EF6\u5185\u5B58\u67B6\u6784\uFF0C\u540E\u9762\u7684\u90E8\u5206\u5C06\u4ECB\u7ECDJava\u5185\u5B58\u6A21\u578B\u5982\u4F55\u4E0E\u5176\u914D\u5408\u4F7F\u7528\u3002</p><p>\u8FD9\u662F\u73B0\u4EE3\u8BA1\u7B97\u673A\u786C\u4EF6\u67B6\u6784\u7684\u7B80\u5316\u56FE\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220821100042636.png" alt="image-20220821100042636"></p><p>\u73B0\u4EE3\u8BA1\u7B97\u673A\u901A\u5E38\u67092\u4E2A\u6216\u66F4\u591ACPU\u3002 \u5176\u4E2D\u4E00\u4E9BCPU\u4E5F\u53EF\u80FD\u6709\u591A\u4E2A\u5185\u6838\u3002 \u5173\u952E\u662F\uFF0C\u5728\u5177\u67092\u4E2A\u6216\u66F4\u591ACPU\u7684\u73B0\u4EE3\u8BA1\u7B97\u673A\u4E0A\uFF0C\u53EF\u4EE5\u540C\u65F6\u8FD0\u884C\u591A\u4E2A\u7EBF\u7A0B\u3002 \u6BCF\u4E2ACPU\u90FD\u80FD\u591F\u5728\u4EFB\u4F55\u7ED9\u5B9A\u65F6\u95F4\u8FD0\u884C\u4E00\u4E2A\u7EBF\u7A0B\u3002 \u8FD9\u610F\u5473\u7740\u5982\u679C\u60A8\u7684Java\u5E94\u7528\u7A0B\u5E8F\u662F\u591A\u7EBF\u7A0B\u7684\uFF0C\u7EBF\u7A0B\u771F\u7684\u5728\u53EF\u80FD\u540C\u65F6\u8FD0\u884C.</p><p>\u6BCF\u4E2ACPU\u57FA\u672C\u4E0A\u90FD\u5305\u542B\u4E00\u7EC4\u5728CPU\u5185\u5B58\u4E2D\u7684\u5BC4\u5B58\u5668\u3002 CPU\u53EF\u4EE5\u5728\u8FD9\u4E9B\u5BC4\u5B58\u5668\u4E0A\u6267\u884C\u7684\u64CD\u4F5C\u6BD4\u5728\u4E3B\u5B58\u50A8\u5668\u4E2D\u5BF9\u53D8\u91CF\u6267\u884C\u7684\u64CD\u4F5C\u5FEB\u5F97\u591A\u3002 \u8FD9\u662F\u56E0\u4E3ACPU\u53EF\u4EE5\u6BD4\u8BBF\u95EE\u4E3B\u5B58\u50A8\u5668\u66F4\u5FEB\u5730\u8BBF\u95EE\u8FD9\u4E9B\u5BC4\u5B58\u5668\u3002</p><p>\u6BCF\u4E2ACPU\u8FD8\u53EF\u4EE5\u5177\u6709CPU\u9AD8\u901F\u7F13\u5B58\u5B58\u50A8\u5668\u5C42\u3002 \u4E8B\u5B9E\u4E0A\uFF0C\u5927\u591A\u6570\u73B0\u4EE3CPU\u90FD\u6709\u4E00\u4E9B\u5927\u5C0F\u7684\u7F13\u5B58\u5B58\u50A8\u5C42\u3002 CPU\u53EF\u4EE5\u6BD4\u4E3B\u5B58\u50A8\u5668\u66F4\u5FEB\u5730\u8BBF\u95EE\u5176\u9AD8\u901F\u7F13\u5B58\u5B58\u50A8\u5668\uFF0C\u4F46\u901A\u5E38\u4E0D\u4F1A\u50CF\u8BBF\u95EE\u5176\u5185\u90E8\u5BC4\u5B58\u5668\u90A3\u6837\u5FEB\u3002 \u56E0\u6B64\uFF0CCPU\u9AD8\u901F\u7F13\u5B58\u5B58\u50A8\u5668\u4ECB\u4E8E\u5185\u90E8\u5BC4\u5B58\u5668\u548C\u4E3B\u5B58\u50A8\u5668\u7684\u901F\u5EA6\u4E4B\u95F4\u3002 \u67D0\u4E9BCPU\u53EF\u80FD\u6709\u591A\u4E2A\u7F13\u5B58\u5C42(\u7EA7\u522B1\u548C\u7EA7\u522B2)\uFF0C\u4F46\u8981\u4E86\u89E3Java\u5185\u5B58\u6A21\u578B\u5982\u4F55\u4E0E\u5185\u5B58\u4EA4\u4E92\uFF0C\u8FD9\u4E00\u70B9\u5E76\u4E0D\u91CD\u8981\u3002 \u91CD\u8981\u7684\u662F\u8981\u77E5\u9053CPU\u53EF\u4EE5\u6709\u67D0\u79CD\u7F13\u5B58\u5B58\u50A8\u5C42\u3002</p><p>\u8BA1\u7B97\u673A\u8FD8\u5305\u542B\u4E3B\u5B58\u50A8\u533A(RAM)\u3002 \u6240\u6709CPU\u90FD\u53EF\u4EE5\u8BBF\u95EE\u4E3B\u5185\u5B58\u3002 \u4E3B\u5B58\u50A8\u533A\u901A\u5E38\u6BD4CPU\u7684\u9AD8\u901F\u7F13\u5B58\u5B58\u50A8\u5668\u5927\u5F97\u591A\u3002\u540C\u65F6\u8BBF\u95EE\u901F\u5EA6\u4E5F\u5C31\u8F83\u6162.</p><p>\u901A\u5E38\uFF0C\u5F53CPU\u9700\u8981\u8BBF\u95EE\u4E3B\u5B58\u50A8\u5668\u65F6\uFF0C\u5B83\u4F1A\u5C06\u90E8\u5206\u4E3B\u5B58\u50A8\u5668\u8BFB\u5165\u5176CPU\u7F13\u5B58\u3002 \u5B83\u751A\u81F3\u53EF\u4EE5\u5C06\u90E8\u5206\u7F13\u5B58\u8BFB\u5165\u5176\u5185\u90E8\u5BC4\u5B58\u5668\uFF0C\u7136\u540E\u5BF9\u5176\u6267\u884C\u64CD\u4F5C\u3002 \u5F53CPU\u9700\u8981\u5C06\u7ED3\u679C\u5199\u56DE\u4E3B\u5B58\u50A8\u5668\u65F6\uFF0C\u5B83\u4F1A\u5C06\u503C\u4ECE\u5176\u5185\u90E8\u5BC4\u5B58\u5668\u5237\u65B0\u5230\u9AD8\u901F\u7F13\u51B2\u5B58\u50A8\u5668\uFF0C\u5E76\u5728\u67D0\u4E9B\u65F6\u5019\u5C06\u503C\u5237\u65B0\u56DE\u4E3B\u5B58\u50A8\u5668\u3002</p><h3 id="_2-2-jmm\u4E0E\u786C\u4EF6\u5185\u5B58\u8FDE\u63A5-\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#_2-2-jmm\u4E0E\u786C\u4EF6\u5185\u5B58\u8FDE\u63A5-\u5F15\u5165" aria-hidden="true">#</a> 2.2 JMM\u4E0E\u786C\u4EF6\u5185\u5B58\u8FDE\u63A5 - \u5F15\u5165</h3><p>\u5982\u524D\u6240\u8FF0\uFF0CJava\u5185\u5B58\u6A21\u578B\u548C\u786C\u4EF6\u5185\u5B58\u67B6\u6784\u662F\u4E0D\u540C\u7684\u3002 \u786C\u4EF6\u5185\u5B58\u67B6\u6784\u4E0D\u533A\u5206\u7EBF\u7A0B\u5806\u6808\u548C\u5806\u3002 \u5728\u786C\u4EF6\u4E0A\uFF0C\u7EBF\u7A0B\u5806\u6808\u548C\u5806\u90FD\u4F4D\u4E8E\u4E3B\u5B58\u50A8\u5668\u4E2D\u3002 \u7EBF\u7A0B\u5806\u6808\u548C\u5806\u7684\u4E00\u90E8\u5206\u6709\u65F6\u53EF\u80FD\u5B58\u5728\u4E8ECPU\u9AD8\u901F\u7F13\u5B58\u548C\u5185\u90E8CPU\u5BC4\u5B58\u5668\u4E2D\u3002 \u8FD9\u5728\u56FE\u4E2D\u8BF4\u660E\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220821100529578.png" alt="image-20220821100529578"></p><p>\u5F53\u5BF9\u8C61\u548C\u53D8\u91CF\u53EF\u4EE5\u5B58\u50A8\u5728\u8BA1\u7B97\u673A\u7684\u5404\u79CD\u4E0D\u540C\u5B58\u50A8\u533A\u57DF\u4E2D\u65F6\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u67D0\u4E9B\u95EE\u9898\u3002 \u4E24\u4E2A\u4E3B\u8981\u95EE\u9898\u662F\uFF1A</p><ul><li>Visibility of thread updates (writes) to shared variables.</li><li>Race conditions when reading, checking and writing shared variables. \u4EE5\u4E0B\u5404\u8282\u5C06\u89E3\u91CA\u8FD9\u4E24\u4E2A\u95EE\u9898\u3002</li></ul><h3 id="_2-3-jmm\u4E0E\u786C\u4EF6\u5185\u5B58\u8FDE\u63A5-\u5BF9\u8C61\u5171\u4EAB\u540E\u7684\u53EF\u89C1\u6027" tabindex="-1"><a class="header-anchor" href="#_2-3-jmm\u4E0E\u786C\u4EF6\u5185\u5B58\u8FDE\u63A5-\u5BF9\u8C61\u5171\u4EAB\u540E\u7684\u53EF\u89C1\u6027" aria-hidden="true">#</a> 2.3 JMM\u4E0E\u786C\u4EF6\u5185\u5B58\u8FDE\u63A5 - \u5BF9\u8C61\u5171\u4EAB\u540E\u7684\u53EF\u89C1\u6027</h3><p>\u5982\u679C\u4E24\u4E2A\u6216\u591A\u4E2A\u7EBF\u7A0B\u5171\u4EAB\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u800C\u6CA1\u6709\u6B63\u786E\u4F7F\u7528volatile\u58F0\u660E\u6216\u540C\u6B65\uFF0C\u5219\u4E00\u4E2A\u7EBF\u7A0B\u5BF9\u5171\u4EAB\u5BF9\u8C61\u7684\u66F4\u65B0\u53EF\u80FD\u5BF9\u5176\u4ED6\u7EBF\u7A0B\u4E0D\u53EF\u89C1\u3002</p><p>\u60F3\u8C61\u4E00\u4E0B\uFF0C\u5171\u4EAB\u5BF9\u8C61\u6700\u521D\u5B58\u50A8\u5728\u4E3B\u5B58\u50A8\u5668\u4E2D\u3002 \u7136\u540E\uFF0C\u5728CPU\u4E0A\u8FD0\u884C\u7684\u7EBF\u7A0B\u5C06\u5171\u4EAB\u5BF9\u8C61\u8BFB\u5165\u5176CPU\u7F13\u5B58\u4E2D\u3002 \u5B83\u5728\u90A3\u91CC\u5BF9\u5171\u4EAB\u5BF9\u8C61\u8FDB\u884C\u4E86\u66F4\u6539\u3002 \u53EA\u8981CPU\u7F13\u5B58\u5C1A\u672A\u5237\u65B0\u56DE\u4E3B\u5185\u5B58\uFF0C\u5171\u4EAB\u5BF9\u8C61\u7684\u66F4\u6539\u7248\u672C\u5BF9\u4E8E\u5728\u5176\u4ED6CPU\u4E0A\u8FD0\u884C\u7684\u7EBF\u7A0B\u662F\u4E0D\u53EF\u89C1\u7684\u3002 \u8FD9\u6837\uFF0C\u6BCF\u4E2A\u7EBF\u7A0B\u6700\u7EC8\u90FD\u53EF\u80FD\u62E5\u6709\u81EA\u5DF1\u7684\u5171\u4EAB\u5BF9\u8C61\u526F\u672C\uFF0C\u6BCF\u4E2A\u526F\u672C\u90FD\u4F4D\u4E8E\u4E0D\u540C\u7684CPU\u7F13\u5B58\u4E2D\u3002</p><p>\u4E0B\u56FE\u63CF\u7ED8\u4E86\u8BE5\u60C5\u51B5\u3002 \u5728\u5DE6CPU\u4E0A\u8FD0\u884C\u7684\u4E00\u4E2A\u7EBF\u7A0B\u5C06\u5171\u4EAB\u5BF9\u8C61\u590D\u5236\u5230\u5176CPU\u7F13\u5B58\u4E2D\uFF0C\u5E76\u5C06\u5176count\u53D8\u91CF\u66F4\u6539\u4E3A2.\u5BF9\u4E8E\u5728\u53F3\u8FB9\u7684CPU\u4E0A\u8FD0\u884C\u7684\u5176\u4ED6\u7EBF\u7A0B\uFF0C\u6B64\u66F4\u6539\u4E0D\u53EF\u89C1\uFF0C\u56E0\u4E3A\u8BA1\u6570\u66F4\u65B0\u5C1A\u672A\u5237\u65B0\u56DE\u4E3B\u5185\u5B58\u4E2D.</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220821100739376.png" alt="image-20220821100739376"></p><p>\u8981\u89E3\u51B3\u6B64\u95EE\u9898\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528Java\u7684volatile\u5173\u952E\u5B57\u3002 volatile\u5173\u952E\u5B57\u53EF\u4EE5\u786E\u4FDD\u76F4\u63A5\u4ECE\u4E3B\u5185\u5B58\u8BFB\u53D6\u7ED9\u5B9A\u53D8\u91CF\uFF0C\u5E76\u5728\u66F4\u65B0\u65F6\u59CB\u7EC8\u5199\u56DE\u4E3B\u5185\u5B58\u3002</p><h3 id="_2-4-jmm\u4E0E\u786C\u4EF6\u5185\u5B58\u8FDE\u63A5-\u7ADE\u6001\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-4-jmm\u4E0E\u786C\u4EF6\u5185\u5B58\u8FDE\u63A5-\u7ADE\u6001\u6761\u4EF6" aria-hidden="true">#</a> 2.4 JMM\u4E0E\u786C\u4EF6\u5185\u5B58\u8FDE\u63A5 - \u7ADE\u6001\u6761\u4EF6</h3><p>\u5982\u679C\u4E24\u4E2A\u6216\u591A\u4E2A\u7EBF\u7A0B\u5171\u4EAB\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5E76\u4E14\u591A\u4E2A\u7EBF\u7A0B\u66F4\u65B0\u8BE5\u5171\u4EAB\u5BF9\u8C61\u4E2D\u7684\u53D8\u91CF\uFF0C\u5219\u53EF\u80FD\u4F1A\u51FA\u73B0\u7ADE\u6001\u3002</p><p>\u60F3\u8C61\u4E00\u4E0B\uFF0C\u5982\u679C\u7EBF\u7A0BA\u5C06\u5171\u4EAB\u5BF9\u8C61\u7684\u53D8\u91CF\u8BA1\u6570\u8BFB\u5165\u5176CPU\u7F13\u5B58\u4E2D\u3002 \u60F3\u8C61\u4E00\u4E0B\uFF0C\u7EBF\u7A0BB\u4E5F\u505A\u540C\u6837\u7684\u4E8B\u60C5\uFF0C\u4F46\u662F\u8FDB\u5165\u4E0D\u540C\u7684CPU\u7F13\u5B58\u3002 \u73B0\u5728\uFF0C\u7EBF\u7A0BA\u5C06\u4E00\u4E2A\u6DFB\u52A0\u5230count\uFF0C\u800C\u7EBF\u7A0BB\u6267\u884C\u76F8\u540C\u7684\u64CD\u4F5C\u3002 \u73B0\u5728var1\u5DF2\u7ECF\u589E\u52A0\u4E86\u4E24\u6B21\uFF0C\u6BCF\u4E2ACPU\u7F13\u5B58\u4E00\u6B21\u3002</p><p>\u5982\u679C\u8FD9\u4E9B\u589E\u91CF\u662F\u6309\u5148\u540E\u987A\u5E8F\u6267\u884C\u7684\uFF0C\u5219\u53D8\u91CF\u8BA1\u6570\u5C06\u589E\u52A0\u4E24\u6B21\u5E76\u5C06\u539F\u59CB\u503C+ 2\u5199\u56DE\u4E3B\u5B58\u50A8\u5668\u3002</p><p>\u4F46\u662F\uFF0C\u4E24\u4E2A\u589E\u91CF\u540C\u65F6\u6267\u884C\u800C\u6CA1\u6709\u9002\u5F53\u7684\u540C\u6B65\u3002 \u65E0\u8BBA\u7EBF\u7A0BA\u548CB\u4E2D\u54EA\u4E00\u4E2A\u5C06\u5176\u66F4\u65B0\u540E\u7684\u8BA1\u6570\u7248\u672C\u5199\u56DE\u4E3B\u5B58\u50A8\u5668\uFF0C\u66F4\u65B0\u7684\u503C\u5C06\u4EC5\u6BD4\u539F\u59CB\u503C\u9AD81\uFF0C\u5C3D\u7BA1\u6709\u4E24\u4E2A\u589E\u91CF\u3002</p><p>\u8BE5\u56FE\u8BF4\u660E\u4E86\u5982\u4E0A\u6240\u8FF0\u7684\u7ADE\u4E89\u6761\u4EF6\u95EE\u9898\u7684\u53D1\u751F\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220825210029757.png" alt="image-20220825210029757"></p><p>\u8981\u89E3\u51B3\u6B64\u95EE\u9898\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528Java synchronized\u5757\u3002 \u540C\u6B65\u5757\u4FDD\u8BC1\u5728\u4EFB\u4F55\u7ED9\u5B9A\u65F6\u95F4\u53EA\u6709\u4E00\u4E2A\u7EBF\u7A0B\u53EF\u4EE5\u8FDB\u5165\u4EE3\u7801\u7684\u7ED9\u5B9A\u5173\u952E\u90E8\u5206\u3002 \u540C\u6B65\u5757\u8FD8\u4FDD\u8BC1\u5728\u540C\u6B65\u5757\u5185\u8BBF\u95EE\u7684\u6240\u6709\u53D8\u91CF\u90FD\u5C06\u4ECE\u4E3B\u5B58\u50A8\u5668\u4E2D\u8BFB\u5165\uFF0C\u5F53\u7EBF\u7A0B\u9000\u51FA\u540C\u6B65\u5757\u65F6\uFF0C\u6240\u6709\u66F4\u65B0\u7684\u53D8\u91CF\u5C06\u518D\u6B21\u5237\u65B0\u56DE\u4E3B\u5B58\u50A8\u5668\uFF0C\u65E0\u8BBA\u53D8\u91CF\u662F\u4E0D\u662F\u58F0\u660E\u4E3Avolatile</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,63),r={href:"https://pdai.tech/md/java/jvm/java-jvm-x-introduce.html",target:"_blank",rel:"noopener noreferrer"},d=a("strong",null,"JVM \u57FA\u7840 - Java \u5185\u5B58\u6A21\u578B\u5F15\u5165",-1);function u(m,v){const n=c("ExternalLinkIcon");return e(),p("div",null,[i,a("p",null,[a("a",r,[d,t(n)])])])}const h=s(l,[["render",u],["__file","java-jvm-tools-mat-use.html.vue"]]);export{h as default};
