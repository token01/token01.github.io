import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,f as e}from"./app.78cf000f.js";const t={},o=e(`<h1 id="\u5BF9\u8C61\u5DF2\u7ECF\u6B7B\u4EA1" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u5DF2\u7ECF\u6B7B\u4EA1" aria-hidden="true">#</a> \u5BF9\u8C61\u5DF2\u7ECF\u6B7B\u4EA1\uFF1F</h1><p>\u5806\u4E2D\u51E0\u4E4E\u653E\u7740\u6240\u6709\u7684\u5BF9\u8C61\u5B9E\u4F8B\uFF0C\u5BF9\u5806\u5783\u573E\u56DE\u6536\u524D\u7684\u7B2C\u4E00\u6B65\u5C31\u662F\u5224\u65AD\u54EA\u4E9B\u5BF9\u8C61\u5DF2\u7ECF\u6B7B\u4EA1\uFF08\u5373\u4E0D\u80FD\u518D\u88AB\u4EFB\u4F55\u9014\u5F84\u4F7F\u7528\u7684\u5BF9\u8C61\uFF09\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190925214601299.png" alt="image-20190925214601299"></p><h2 id="_1-\u5982\u4F55\u5224\u65AD\u5BF9\u8C61\u5DF2\u7ECF\u6B7B\u4EA1" tabindex="-1"><a class="header-anchor" href="#_1-\u5982\u4F55\u5224\u65AD\u5BF9\u8C61\u5DF2\u7ECF\u6B7B\u4EA1" aria-hidden="true">#</a> 1. \u5982\u4F55\u5224\u65AD\u5BF9\u8C61\u5DF2\u7ECF\u6B7B\u4EA1</h2><h3 id="_1-1-\u5F15\u7528\u8BA1\u6570\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5F15\u7528\u8BA1\u6570\u6CD5" aria-hidden="true">#</a> 1.1 \u5F15\u7528\u8BA1\u6570\u6CD5</h3><p><strong>\u7ED9\u5BF9\u8C61\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u5F15\u7528\u8BA1\u6570\u5668\uFF0C\u6BCF\u5F53\u6709\u4E00\u4E2A\u5730\u65B9\u5F15\u7528\u4ED6\u3002\u8BA1\u6570\u5668\u5C31+1\uFF0C\u5F53\u5F15\u7528\u5931\u6548\uFF0C\u8BA1\u6570\u5668\u5C31\u51CF1.\u4EFB\u4F55\u65F6\u5019\u8BA1\u6570\u5668\u4E3A0 \u7684\u5BF9\u8C61\u5C31\u662F\u4E0D\u53EF\u80FD\u518D\u88AB\u4F7F\u7528\u7684</strong></p><p><strong>\u8FD9\u4E2A\u65B9\u6CD5\u5B9E\u73B0\u7B80\u5355\uFF0C\u6548\u7387\u9AD8\uFF0C\u4F46\u662F\u76EE\u524D\u4E3B\u6D41\u7684\u865A\u62DF\u673A\u4E2D\u5E76\u6CA1\u6709\u9009\u62E9\u8FD9\u4E2A\u7B97\u6CD5\u6765\u7BA1\u7406\u5185\u5B58\uFF0C\u5176\u6700\u4E3B\u8981\u7684\u539F\u56E0\u662F\u5B83\u5F88\u96BE\u89E3\u51B3\u5BF9\u8C61\u4E4B\u95F4\u76F8\u4E92\u5FAA\u73AF\u5F15\u7528\u7684\u95EE\u9898</strong></p><p>\u6240\u8C13\u5BF9\u8C61\u4E4B\u95F4\u7684\u76F8\u4E92\u5F15\u7528\u95EE\u9898\uFF0C\u5982\u4E0B\u9762\u4EE3\u7801\u6240\u793A\uFF1A\u9664\u4E86\u5BF9\u8C61 objA \u548C objB \u76F8\u4E92\u5F15\u7528\u7740\u5BF9\u65B9\u4E4B\u5916\uFF0C\u8FD9\u4E24\u4E2A\u5BF9\u8C61\u4E4B\u95F4\u518D\u65E0\u4EFB\u4F55\u5F15\u7528\u3002\u4F46\u662F\u4ED6\u4EEC\u56E0\u4E3A\u4E92\u76F8\u5F15\u7528\u5BF9\u65B9\uFF0C\u5BFC\u81F4\u5B83\u4EEC\u7684\u5F15\u7528\u8BA1\u6570\u5668\u90FD\u4E0D\u4E3A 0\uFF0C\u4E8E\u662F\u5F15\u7528\u8BA1\u6570\u7B97\u6CD5\u65E0\u6CD5\u901A\u77E5 GC \u56DE\u6536\u5668\u56DE\u6536\u4ED6\u4EEC\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReferenceCountingGc</span> <span class="token punctuation">{</span>
    <span class="token class-name">Object</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">ReferenceCountingGc</span> objA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReferenceCountingGc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">ReferenceCountingGc</span> objB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReferenceCountingGc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		objA<span class="token punctuation">.</span>instance <span class="token operator">=</span> objB<span class="token punctuation">;</span>
		objB<span class="token punctuation">.</span>instance <span class="token operator">=</span> objA<span class="token punctuation">;</span>
		objA <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		objB <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-\u53EF\u8FBE\u6027\u5206\u6790\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-2-\u53EF\u8FBE\u6027\u5206\u6790\u7B97\u6CD5" aria-hidden="true">#</a> 1.2 \u53EF\u8FBE\u6027\u5206\u6790\u7B97\u6CD5</h3><p>\u8FD9\u4E2A\u7B97\u6CD5\u7684\u57FA\u672C\u601D\u60F3\u5C31\u662F\u901A\u8FC7\u4E00\u7CFB\u5217\u7684\u79F0\u4E3A <strong>\u201CGC Roots\u201D</strong> \u7684\u5BF9\u8C61\u4F5C\u4E3A\u8D77\u70B9\uFF0C\u4ECE\u8FD9\u4E9B\u8282\u70B9\u5F00\u59CB\u5411\u4E0B\u641C\u7D22\uFF0C\u8282\u70B9\u6240\u8D70\u8FC7\u7684\u8DEF\u5F84\u79F0\u4E3A\u5F15\u7528\u94FE\uFF0C\u5F53\u4E00\u4E2A\u5BF9\u8C61\u5230 GC Roots \u6CA1\u6709\u4EFB\u4F55\u5F15\u7528\u94FE\u76F8\u8FDE\u7684\u8BDD\uFF0C\u5219\u8BC1\u660E\u6B64\u5BF9\u8C61\u662F\u4E0D\u53EF\u7528\u7684\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190925215155911.png" alt="image-20190925215155911"></p><h2 id="_2-\u518D\u8C08\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u518D\u8C08\u5F15\u7528" aria-hidden="true">#</a> 2 \u518D\u8C08\u5F15\u7528</h2><p>\u65E0\u8BBA\u662F\u901A\u8FC7\u5F15\u7528\u8BA1\u6570\u6CD5\u5224\u65AD\u5BF9\u8C61\u5F15\u7528\u6570\u91CF\uFF0C\u8FD8\u662F\u901A\u8FC7\u53EF\u8FBE\u6027\u5206\u6790\u6CD5\u5224\u65AD\u5BF9\u8C61\u7684\u5F15\u7528\u94FE\u662F\u5426\u53EF\u8FBE\uFF0C\u5224\u5B9A\u5BF9\u8C61\u7684\u5B58\u6D3B\u90FD\u4E0E\u201C\u5F15\u7528\u201D\u6709\u5173\u3002</p><p>JDK1.2 \u4E4B\u524D\uFF0CJava \u4E2D\u5F15\u7528\u7684\u5B9A\u4E49\u5F88\u4F20\u7EDF\uFF1A\u5982\u679C reference \u7C7B\u578B\u7684\u6570\u636E\u5B58\u50A8\u7684\u6570\u503C\u4EE3\u8868\u7684\u662F\u53E6\u4E00\u5757\u5185\u5B58\u7684\u8D77\u59CB\u5730\u5740\uFF0C\u5C31\u79F0\u8FD9\u5757\u5185\u5B58\u4EE3\u8868\u4E00\u4E2A\u5F15\u7528\u3002</p><p>JDK1.2 \u4EE5\u540E\uFF0CJava \u5BF9\u5F15\u7528\u7684\u6982\u5FF5\u8FDB\u884C\u4E86\u6269\u5145\uFF0C\u5C06\u5F15\u7528\u5206\u4E3A\u5F3A\u5F15\u7528\u3001\u8F6F\u5F15\u7528\u3001\u5F31\u5F15\u7528\u3001\u865A\u5F15\u7528\u56DB\u79CD\uFF08\u5F15\u7528\u5F3A\u5EA6\u9010\u6E10\u51CF\u5F31\uFF09</p><h3 id="_2-1-\u5F3A\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5F3A\u5F15\u7528" aria-hidden="true">#</a> <strong>2.1\uFF0E\u5F3A\u5F15\u7528</strong></h3><p>\u4EE5\u524D\u6211\u4EEC\u4F7F\u7528\u7684\u5927\u90E8\u5206\u5F15\u7528\u5B9E\u9645\u4E0A\u90FD\u662F\u5F3A\u5F15\u7528\uFF0C\u8FD9\u662F\u4F7F\u7528\u6700\u666E\u904D\u7684\u5F15\u7528\u3002\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61\u5177\u6709\u5F3A\u5F15\u7528\uFF0C\u90A3\u5C31\u7C7B\u4F3C\u4E8E\u5FC5\u4E0D\u53EF\u5C11\u7684\u751F\u6D3B\u7528\u54C1\uFF0C\u5783\u573E\u56DE\u6536\u5668\u7EDD\u4E0D\u4F1A\u56DE\u6536\u5B83\u3002<strong>\u5F53\u5185\u5B58\u7A7A\u95F4\u4E0D\u8DB3\uFF0CJava \u865A\u62DF\u673A\u5B81\u613F\u629B\u51FA OutOfMemoryError</strong> \u9519\u8BEF\uFF0C\u4F7F\u7A0B\u5E8F\u5F02\u5E38\u7EC8\u6B62\uFF0C\u4E5F\u4E0D\u4F1A\u9760\u968F\u610F\u56DE\u6536\u5177\u6709\u5F3A\u5F15\u7528\u7684\u5BF9\u8C61\u6765\u89E3\u51B3\u5185\u5B58\u4E0D\u8DB3\u95EE\u9898\u3002</p><h3 id="_2-2-\u8F6F\u5F15\u7528-softreference" tabindex="-1"><a class="header-anchor" href="#_2-2-\u8F6F\u5F15\u7528-softreference" aria-hidden="true">#</a> 2.2 \u8F6F\u5F15\u7528\uFF08SoftReference\uFF09</h3><p>\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61\u53EA\u5177\u6709\u8F6F\u5F15\u7528\uFF0C\u90A3\u5C31\u7C7B\u4F3C\u4E8E<strong>\u53EF\u6709\u53EF\u65E0\u7684\u751F\u6D3B\u7528\u54C1</strong>\u3002\u5982\u679C\u5185\u5B58\u7A7A\u95F4\u8DB3\u591F\uFF0C\u5783\u573E\u56DE\u6536\u5668\u5C31\u4E0D\u4F1A\u56DE\u6536\u5B83\uFF0C\u5982\u679C<strong>\u5185\u5B58\u7A7A\u95F4\u4E0D\u8DB3\u4E86\uFF0C\u5C31\u4F1A\u56DE\u6536\u8FD9\u4E9B\u5BF9\u8C61\u7684\u5185\u5B58</strong>\u3002\u53EA\u8981\u5783\u573E\u56DE\u6536\u5668\u6CA1\u6709\u56DE\u6536\u5B83\uFF0C\u8BE5\u5BF9\u8C61\u5C31\u53EF\u4EE5\u88AB\u7A0B\u5E8F\u4F7F\u7528\u3002\u8F6F\u5F15\u7528\u53EF\u7528\u6765\u5B9E\u73B0\u5185\u5B58\u654F\u611F\u7684\u9AD8\u901F\u7F13\u5B58\u3002</p><p>\u8F6F\u5F15\u7528\u53EF\u4EE5\u548C\u4E00\u4E2A\u5F15\u7528\u961F\u5217\uFF08ReferenceQueue\uFF09\u8054\u5408\u4F7F\u7528\uFF0C\u5982\u679C\u8F6F\u5F15\u7528\u6240\u5F15\u7528\u7684\u5BF9\u8C61\u88AB\u5783\u573E\u56DE\u6536\uFF0CJAVA \u865A\u62DF\u673A\u5C31\u4F1A\u628A\u8FD9\u4E2A\u8F6F\u5F15\u7528\u52A0\u5165\u5230\u4E0E\u4E4B\u5173\u8054\u7684\u5F15\u7528\u961F\u5217\u4E2D\u3002</p><h3 id="_2-3-\u5F31\u5F15\u7528-weakreference" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5F31\u5F15\u7528-weakreference" aria-hidden="true">#</a> <strong>2.3 \u5F31\u5F15\u7528\uFF08WeakReference\uFF09</strong></h3><p>\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61\u53EA\u5177\u6709\u5F31\u5F15\u7528\uFF0C\u90A3\u5C31\u7C7B\u4F3C\u4E8E<strong>\u53EF\u6709\u53EF\u65E0\u7684\u751F\u6D3B\u7528\u54C1</strong>\u3002\u5F31\u5F15\u7528\u4E0E\u8F6F\u5F15\u7528\u7684\u533A\u522B\u5728\u4E8E\uFF1A\u53EA\u5177\u6709\u5F31\u5F15\u7528\u7684\u5BF9\u8C61\u62E5\u6709\u66F4\u77ED\u6682\u7684\u751F\u547D\u5468\u671F\u3002<strong>\u5728\u5783\u573E\u56DE\u6536\u5668\u7EBF\u7A0B\u626B\u63CF\u5B83\u6240\u7BA1\u8F96\u7684\u5185\u5B58\u533A\u57DF\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4E00\u65E6\u53D1\u73B0\u4E86\u53EA\u5177\u6709\u5F31\u5F15\u7528\u7684\u5BF9\u8C61\uFF0C\u4E0D\u7BA1\u5F53\u524D\u5185\u5B58\u7A7A\u95F4\u8DB3\u591F\u4E0E\u5426\uFF0C\u90FD\u4F1A\u56DE\u6536\u5B83\u7684\u5185\u5B58</strong>\u3002\u4E0D\u8FC7\uFF0C\u7531\u4E8E\u5783\u573E\u56DE\u6536\u5668\u662F\u4E00\u4E2A\u4F18\u5148\u7EA7\u5F88\u4F4E\u7684\u7EBF\u7A0B\uFF0C \u56E0\u6B64\u4E0D\u4E00\u5B9A\u4F1A\u5F88\u5FEB\u53D1\u73B0\u90A3\u4E9B\u53EA\u5177\u6709\u5F31\u5F15\u7528\u7684\u5BF9\u8C61\u3002</p><p>\u5F31\u5F15\u7528\u53EF\u4EE5\u548C\u4E00\u4E2A\u5F15\u7528\u961F\u5217\uFF08ReferenceQueue\uFF09\u8054\u5408\u4F7F\u7528\uFF0C\u5982\u679C\u5F31\u5F15\u7528\u6240\u5F15\u7528\u7684\u5BF9\u8C61\u88AB\u5783\u573E\u56DE\u6536\uFF0CJava \u865A\u62DF\u673A\u5C31\u4F1A\u628A\u8FD9\u4E2A\u5F31\u5F15\u7528\u52A0\u5165\u5230\u4E0E\u4E4B\u5173\u8054\u7684\u5F15\u7528\u961F\u5217\u4E2D\u3002</p><h3 id="_2-4-\u865A\u5F15\u7528-phantomreference" tabindex="-1"><a class="header-anchor" href="#_2-4-\u865A\u5F15\u7528-phantomreference" aria-hidden="true">#</a> <strong>2.4 \u865A\u5F15\u7528\uFF08PhantomReference\uFF09</strong></h3><p>&quot;\u865A\u5F15\u7528&quot;\u987E\u540D\u601D\u4E49\uFF0C\u5C31\u662F\u5F62\u540C\u865A\u8BBE\uFF0C\u4E0E\u5176\u4ED6\u51E0\u79CD\u5F15\u7528\u90FD\u4E0D\u540C\uFF0C\u865A\u5F15\u7528\u5E76\u4E0D\u4F1A\u51B3\u5B9A\u5BF9\u8C61\u7684\u751F\u547D\u5468\u671F\u3002\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61\u4EC5\u6301\u6709\u865A\u5F15\u7528\uFF0C\u90A3\u4E48\u5B83\u5C31\u548C\u6CA1\u6709\u4EFB\u4F55\u5F15\u7528\u4E00\u6837\uFF0C\u5728\u4EFB\u4F55\u65F6\u5019\u90FD\u53EF\u80FD\u88AB\u5783\u573E\u56DE\u6536\u3002</p><p><strong>\u865A\u5F15\u7528\u4E3B\u8981\u7528\u6765\u8DDF\u8E2A\u5BF9\u8C61\u88AB\u5783\u573E\u56DE\u6536\u7684\u6D3B\u52A8</strong>\u3002</p><p><strong>\u865A\u5F15\u7528\u4E0E\u8F6F\u5F15\u7528\u548C\u5F31\u5F15\u7528\u7684\u4E00\u4E2A\u533A\u522B\u5728\u4E8E\uFF1A</strong> \u865A\u5F15\u7528\u5FC5\u987B\u548C\u5F15\u7528\u961F\u5217\uFF08ReferenceQueue\uFF09\u8054\u5408\u4F7F\u7528\u3002\u5F53\u5783\u573E\u56DE\u6536\u5668\u51C6\u5907\u56DE\u6536\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u5982\u679C\u53D1\u73B0\u5B83\u8FD8\u6709\u865A\u5F15\u7528\uFF0C\u5C31\u4F1A\u5728\u56DE\u6536\u5BF9\u8C61\u7684\u5185\u5B58\u4E4B\u524D\uFF0C\u628A\u8FD9\u4E2A\u865A\u5F15\u7528\u52A0\u5165\u5230\u4E0E\u4E4B\u5173\u8054\u7684\u5F15\u7528\u961F\u5217\u4E2D\u3002\u7A0B\u5E8F\u53EF\u4EE5\u901A\u8FC7\u5224\u65AD\u5F15\u7528\u961F\u5217\u4E2D\u662F\u5426\u5DF2\u7ECF\u52A0\u5165\u4E86\u865A\u5F15\u7528\uFF0C\u6765\u4E86\u89E3\u88AB\u5F15\u7528\u7684\u5BF9\u8C61\u662F\u5426\u5C06\u8981\u88AB\u5783\u573E\u56DE\u6536\u3002\u7A0B\u5E8F\u5982\u679C\u53D1\u73B0\u67D0\u4E2A\u865A\u5F15\u7528\u5DF2\u7ECF\u88AB\u52A0\u5165\u5230\u5F15\u7528\u961F\u5217\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u5728\u6240\u5F15\u7528\u7684\u5BF9\u8C61\u7684\u5185\u5B58\u88AB\u56DE\u6536\u4E4B\u524D\u91C7\u53D6\u5FC5\u8981\u7684\u884C\u52A8\u3002</p><p>\u7279\u522B\u6CE8\u610F\uFF0C\u5728\u7A0B\u5E8F\u8BBE\u8BA1\u4E2D\u4E00\u822C\u5F88\u5C11\u4F7F\u7528\u5F31\u5F15\u7528\u4E0E\u865A\u5F15\u7528\uFF0C\u4F7F\u7528\u8F6F\u5F15\u7528\u7684\u60C5\u51B5\u8F83\u591A\uFF0C\u8FD9\u662F\u56E0\u4E3A<strong>\u8F6F\u5F15\u7528\u53EF\u4EE5\u52A0\u901F JVM \u5BF9\u5783\u573E\u5185\u5B58\u7684\u56DE\u6536\u901F\u5EA6\uFF0C\u53EF\u4EE5\u7EF4\u62A4\u7CFB\u7EDF\u7684\u8FD0\u884C\u5B89\u5168\uFF0C\u9632\u6B62\u5185\u5B58\u6EA2\u51FA\uFF08OutOfMemory\uFF09\u7B49\u95EE\u9898\u7684\u4EA7\u751F</strong>\u3002</p><h2 id="_3-\u4E0D\u53EF\u8FBE\u7684\u5BF9\u8C61\u5E76\u975E-\u975E\u6B7B\u4E0D\u53EF" tabindex="-1"><a class="header-anchor" href="#_3-\u4E0D\u53EF\u8FBE\u7684\u5BF9\u8C61\u5E76\u975E-\u975E\u6B7B\u4E0D\u53EF" aria-hidden="true">#</a> 3. \u4E0D\u53EF\u8FBE\u7684\u5BF9\u8C61\u5E76\u975E\u201C\u975E\u6B7B\u4E0D\u53EF\u201D</h2><p>\u5373\u4F7F\u5728\u53EF\u8FBE\u6027\u5206\u6790\u6CD5\u4E2D\u4E0D\u53EF\u8FBE\u7684\u5BF9\u8C61\uFF0C\u4E5F\u5E76\u975E\u662F\u201C\u975E\u6B7B\u4E0D\u53EF\u201D\u7684\uFF0C\u8FD9\u65F6\u5019\u5B83\u4EEC\u6682\u65F6\u5904\u4E8E\u201C\u7F13\u5211\u9636\u6BB5\u201D\uFF0C\u8981\u771F\u6B63\u5BA3\u544A\u4E00\u4E2A\u5BF9\u8C61\u6B7B\u4EA1\uFF0C\u81F3\u5C11\u8981\u7ECF\u5386\u4E24\u6B21\u6807\u8BB0\u8FC7\u7A0B\uFF1B\u53EF\u8FBE\u6027\u5206\u6790\u6CD5\u4E2D\u4E0D\u53EF\u8FBE\u7684\u5BF9\u8C61\u88AB\u7B2C\u4E00\u6B21\u6807\u8BB0\u5E76\u4E14\u8FDB\u884C\u4E00\u6B21\u7B5B\u9009\uFF0C\u7B5B\u9009\u7684\u6761\u4EF6\u662F\u6B64\u5BF9\u8C61\u662F\u5426\u6709\u5FC5\u8981\u6267\u884C finalize \u65B9\u6CD5\u3002\u5F53\u5BF9\u8C61\u6CA1\u6709\u8986\u76D6 finalize \u65B9\u6CD5\uFF0C\u6216 finalize \u65B9\u6CD5\u5DF2\u7ECF\u88AB\u865A\u62DF\u673A\u8C03\u7528\u8FC7\u65F6\uFF0C\u865A\u62DF\u673A\u5C06\u8FD9\u4E24\u79CD\u60C5\u51B5\u89C6\u4E3A\u6CA1\u6709\u5FC5\u8981\u6267\u884C\u3002</p><p>\u88AB\u5224\u5B9A\u4E3A\u9700\u8981\u6267\u884C\u7684\u5BF9\u8C61\u5C06\u4F1A\u88AB\u653E\u5728\u4E00\u4E2A\u961F\u5217\u4E2D\u8FDB\u884C\u7B2C\u4E8C\u6B21\u6807\u8BB0\uFF0C\u9664\u975E\u8FD9\u4E2A\u5BF9\u8C61\u4E0E\u5F15\u7528\u94FE\u4E0A\u7684\u4EFB\u4F55\u4E00\u4E2A\u5BF9\u8C61\u5EFA\u7ACB\u5173\u8054\uFF0C\u5426\u5219\u5C31\u4F1A\u88AB\u771F\u7684\u56DE\u6536\u3002</p><h2 id="_4-\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u5E38\u91CF\u662F\u5E9F\u5F03\u5E38\u91CF" tabindex="-1"><a class="header-anchor" href="#_4-\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u5E38\u91CF\u662F\u5E9F\u5F03\u5E38\u91CF" aria-hidden="true">#</a> 4. \u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u5E38\u91CF\u662F\u5E9F\u5F03\u5E38\u91CF</h2><p>\u8FD0\u884C\u65F6\u5E38\u91CF\u6C60\u4E3B\u8981\u56DE\u6536\u7684\u662F\u5E9F\u5F03\u7684\u5E38\u91CF\u3002\u90A3\u4E48\uFF0C\u6211\u4EEC\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u5E38\u91CF\u662F\u5E9F\u5F03\u5E38\u91CF\u5462\uFF1F</p><p>\u5047\u5982\u5728\u5E38\u91CF\u6C60\u4E2D\u5B58\u5728\u5B57\u7B26\u4E32 &quot;abc&quot;\uFF0C\u5982\u679C\u5F53\u524D\u6CA1\u6709\u4EFB\u4F55 String \u5BF9\u8C61\u5F15\u7528\u8BE5\u5B57\u7B26\u4E32\u5E38\u91CF\u7684\u8BDD\uFF0C\u5C31\u8BF4\u660E\u5E38\u91CF &quot;abc&quot; \u5C31\u662F\u5E9F\u5F03\u5E38\u91CF\uFF0C\u5982\u679C\u8FD9\u65F6\u53D1\u751F\u5185\u5B58\u56DE\u6536\u7684\u8BDD\u800C\u4E14\u6709\u5FC5\u8981\u7684\u8BDD\uFF0C&quot;abc&quot; \u5C31\u4F1A\u88AB\u7CFB\u7EDF\u6E05\u7406\u51FA\u5E38\u91CF\u6C60\u3002</p><h2 id="_5-\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u7C7B\u662F\u65E0\u7528\u7C7B" tabindex="-1"><a class="header-anchor" href="#_5-\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u7C7B\u662F\u65E0\u7528\u7C7B" aria-hidden="true">#</a> 5. \u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u7C7B\u662F\u65E0\u7528\u7C7B</h2><p>\u65B9\u6CD5\u533A\u4E3B\u8981\u56DE\u6536\u7684\u662F\u65E0\u7528\u7684\u7C7B\uFF0C\u90A3\u4E48\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u7C7B\u662F\u65E0\u7528\u7684\u7C7B\u7684\u5462\uFF1F</p><p>\u5224\u5B9A\u4E00\u4E2A\u5E38\u91CF\u662F\u5426\u662F\u201C\u5E9F\u5F03\u5E38\u91CF\u201D\u6BD4\u8F83\u7B80\u5355\uFF0C\u800C\u8981\u5224\u5B9A\u4E00\u4E2A\u7C7B\u662F\u5426\u662F\u201C\u65E0\u7528\u7684\u7C7B\u201D\u7684\u6761\u4EF6\u5219\u76F8\u5BF9\u82DB\u523B\u8BB8\u591A\u3002\u7C7B\u9700\u8981\u540C\u65F6\u6EE1\u8DB3\u4E0B\u9762 3 \u4E2A\u6761\u4EF6\u624D\u80FD\u7B97\u662F <strong>\u201C\u65E0\u7528\u7684\u7C7B\u201D</strong> \uFF1A</p><ul><li>\u8BE5\u7C7B\u6240\u6709\u7684\u5B9E\u4F8B\u90FD\u5DF2\u7ECF\u88AB\u56DE\u6536\uFF0C\u4E5F\u5C31\u662F Java \u5806\u4E2D\u4E0D\u5B58\u5728\u8BE5\u7C7B\u7684\u4EFB\u4F55\u5B9E\u4F8B\u3002</li><li>\u52A0\u8F7D\u8BE5\u7C7B\u7684 ClassLoader \u5DF2\u7ECF\u88AB\u56DE\u6536\u3002</li><li>\u8BE5\u7C7B\u5BF9\u5E94\u7684 java.lang.Class \u5BF9\u8C61\u6CA1\u6709\u5728\u4EFB\u4F55\u5730\u65B9\u88AB\u5F15\u7528\uFF0C\u65E0\u6CD5\u5728\u4EFB\u4F55\u5730\u65B9\u901A\u8FC7\u53CD\u5C04\u8BBF\u95EE\u8BE5\u7C7B\u7684\u65B9\u6CD5\u3002</li></ul><p>\u865A\u62DF\u673A\u53EF\u4EE5\u5BF9\u6EE1\u8DB3\u4E0A\u8FF0 3 \u4E2A\u6761\u4EF6\u7684\u65E0\u7528\u7C7B\u8FDB\u884C\u56DE\u6536\uFF0C\u8FD9\u91CC\u8BF4\u7684\u4EC5\u4EC5\u662F\u201C\u53EF\u4EE5\u201D\uFF0C\u800C\u5E76\u4E0D\u662F\u548C\u5BF9\u8C61\u4E00\u6837\u4E0D\u4F7F\u7528\u4E86\u5C31\u4F1A\u5FC5\u7136\u88AB\u56DE\u6536\u3002</p>`,40),p=[o];function r(c,i){return a(),s("div",null,p)}const u=n(t,[["render",r],["__file","java-jvm-gc-object-die.html.vue"]]);export{u as default};