import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.31f1281d.js";const p={},e=t(`<h1 id="list\u7684contains\u5BFC\u81F4cpu100" tabindex="-1"><a class="header-anchor" href="#list\u7684contains\u5BFC\u81F4cpu100" aria-hidden="true">#</a> List\u7684contains\u5BFC\u81F4cpu100%</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u7528\u5230\u4E86List\uFF0C\u968F\u7740\u4E1A\u52A1\u9700\u6C42\u7684\u53D8\u5316\uFF0C\u9700\u8981\u53BB\u91CD\u3002\u5F53\u65F6\u76F4\u63A5\u5C31\u5728\u4EE3\u7801\u4E2D\u5224\u65AD\u662F\u5426\u5305\u542B <code>list.contains(&quot;a&quot;)</code> \uFF0C\u5305\u542B\u5219\u4E0D\u6DFB\u52A0</p><p>\u4EE3\u7801\u5927\u4F53\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token comment">// \u83B7\u53D6\u6240\u6709\u7528\u6237</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> allIdnos <span class="token operator">=</span> <span class="token function">getAllIdnos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u5339\u914D\u7684\u5217\u8868</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> matchList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> idno<span class="token operator">:</span>allIdnos<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// ...\u7701\u7565\u3002isMatch </span>
            <span class="token comment">// \u5339\u914D\u5217\u8868\u4E0D\u5305\u542B\u7528\u6237id\uFF0C\u624D\u6DFB\u52A0\u8FDB\u5339\u914D\u5217\u8868\u4E2D</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span>matchList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>idno<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                matchList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>idno<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> 
        <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4EE3\u7801\u5728\u672C\u5730\u662F\u6CA1\u6709\u4EFB\u4F55\u95EE\u9898\u7684\uFF0C\u5F53\u90E8\u7F72\u5230\u751F\u6210\u73AF\u5883\u65F6CPU100%\u4E86\u3002</p><h2 id="_2-\u95EE\u9898\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#_2-\u95EE\u9898\u89E3\u6790" aria-hidden="true">#</a> 2. \u95EE\u9898\u89E3\u6790</h2><p>\u7531\u4E8EgetAllIdnos() \u83B7\u53D6\u5230\u7684\u7528\u6237\u6570\u636E\u91CF\u8FC7\u4E8E\u5E9E\u5927\uFF0C\u5927\u698280w\u5DE6\u53F3\u7684\u6570\u636E\u3002\u5F53\u8FD980w\u6BCF\u6DFB\u52A0\u4E00\u4E2A\u90FD\u8981\u505A\u4E00\u4FBFcontains \u64CD\u4F5C\u7684\u65F6\u5019\uFF0C\u5176\u5B9E\u4ED6\u76F8\u5F53\u4E8E\u505A\u4E86\u4E00\u6B21\u904D\u5386\u3002\u65F6\u95F4\u590D\u6742\u5EA6\u662FO\uFF08n\uFF09\u3002\u90A3\u4E48\u8981\u67E5\u627E80w\u4E2A\u6570\u636E\u662F\u5426\u5305\u542B\u7684\u8BDD\uFF0C\u5C31\u9700\u898180w*80w\u6B21\u64CD\u4F5C\u3002\u6700\u7EC8\u5BFC\u81F4CPU100%</p><h2 id="_3-\u6539\u8FDB" tabindex="-1"><a class="header-anchor" href="#_3-\u6539\u8FDB" aria-hidden="true">#</a> 3. \u6539\u8FDB</h2><p>\u6539\u7528set,set\u67E5\u627E\u67D0\u4E00\u4E2A\u5143\u7D20\u7684\u590D\u6742\u5EA6\u4E3AO\uFF081\uFF09\uFF0C\u6B64\u95EE\u9898\u987A\u5229\u89E3\u51B3</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>   <span class="token comment">// \u83B7\u53D6\u6240\u6709\u7528\u6237</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> allIdnos <span class="token operator">=</span> <span class="token function">getAllIdnos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u5339\u914D\u7684\u5217\u8868</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> matchSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> idno<span class="token operator">:</span>allIdnos<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span>matchSet<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>idno<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                matchSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>idno<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_4-\u603B\u7ED3" aria-hidden="true">#</a> 4. \u603B\u7ED3</h2><p>\u5199\u4EE3\u7801\u7684\u65F6\u5019\u8981\u9009\u62E9\u5408\u9002\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u8003\u8651\u7B97\u6CD5\u590D\u6742\u5EA6\u3002\u5728\u6570\u636E\u91CF\u5927\u7684\u65F6\u5019\u5C31\u5DEE\u522B\u975E\u5E38\u660E\u663E\u4E86</p><ul><li><p>ArrayList\u672C\u8D28\u5C31\u662F\u901A\u8FC7\u6570\u7EC4\u5B9E\u73B0\u7684\uFF0C\u67E5\u627E\u4E00\u4E2A\u5143\u7D20\u662F\u5426\u5305\u542B\u8981\u7528\u5230\u904D\u5386\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u662FO\uFF08n\uFF09</p></li><li><p>HashSetHashSet\u7684\u67E5\u627E\u662F\u901A\u8FC7HashMap\u7684KeySet\u6765\u5B9E\u73B0\u7684\uFF0C\u5224\u65AD\u662F\u5426\u5305\u542B\u67D0\u4E2A\u5143\u7D20\u7684\u5B9E\u73B0\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u662FO\uFF081\uFF09</p></li></ul>`,14),c=[e];function o(i,l){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","list-contains-cpu100.html.vue"]]);export{r as default};
