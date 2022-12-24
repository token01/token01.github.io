import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as e,a as n,b as s,d as t,f as c,r as l}from"./app.c3058df1.js";const u={},i=n("h1",{id:"springmongotemplate\u6279\u91CF\u64CD\u4F5C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#springmongotemplate\u6279\u91CF\u64CD\u4F5C","aria-hidden":"true"},"#"),s(" SpringMongoTemplate\u6279\u91CF\u64CD\u4F5C")],-1),k=n("h2",{id:"_1-\u7B80\u4ECB",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u7B80\u4ECB","aria-hidden":"true"},"#"),s(" 1. \u7B80\u4ECB")],-1),r={href:"https://so.csdn.net/so/search?q=MongoDB&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},d=c(`<h2 id="_2-\u6279\u91CF\u63D2\u5165" tabindex="-1"><a class="header-anchor" href="#_2-\u6279\u91CF\u63D2\u5165" aria-hidden="true">#</a> 2. \u6279\u91CF\u63D2\u5165</h2><h3 id="_2-1-\u65B9\u5F0F\u4E00-mongotemplate-insert" tabindex="-1"><a class="header-anchor" href="#_2-1-\u65B9\u5F0F\u4E00-mongotemplate-insert" aria-hidden="true">#</a> 2.1 \u65B9\u5F0F\u4E00\uFF1AmongoTemplate.insert</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
     * \u6279\u91CF\u65B0\u589E\u535A\u5BA2
     *
     * <span class="token keyword">@param</span> <span class="token parameter">addBatchParam</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">ApiResult</span> <span class="token function">addBatch</span><span class="token punctuation">(</span><span class="token class-name">BlogAddBatchParam</span> addBatchParam<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">BlogEntity</span><span class="token punctuation">&gt;</span></span> blogEntityList <span class="token operator">=</span> addBatchParam<span class="token punctuation">.</span><span class="token function">getBlogList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>blogAddParam <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">BlogEntity</span> blogEntity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BlogEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">BeanUtil</span><span class="token punctuation">.</span><span class="token function">copyProperties</span><span class="token punctuation">(</span>blogAddParam<span class="token punctuation">,</span> blogEntity<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> blogEntity<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mongoTemplate<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>blogEntityList<span class="token punctuation">,</span> <span class="token class-name">BlogEntity</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">ApiResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u65B9\u5F0F\u4E8C-bulkops" tabindex="-1"><a class="header-anchor" href="#_2-2-\u65B9\u5F0F\u4E8C-bulkops" aria-hidden="true">#</a> 2.2 \u65B9\u5F0F\u4E8C\uFF1AbulkOps</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">BulkOperations</span> operations <span class="token operator">=</span> mongoTemplate<span class="token punctuation">.</span><span class="token function">bulkOps</span><span class="token punctuation">(</span><span class="token class-name">BulkOperations<span class="token punctuation">.</span>BulkMode</span><span class="token punctuation">.</span><span class="token constant">UNORDERED</span><span class="token punctuation">,</span> collectionName<span class="token punctuation">)</span><span class="token punctuation">;</span>
operations<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>insertDataList<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BulkWriteResult</span> result <span class="token operator">=</span> operations<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u6279\u91CF\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#_3-\u6279\u91CF\u66F4\u65B0" aria-hidden="true">#</a> 3. \u6279\u91CF\u66F4\u65B0</h2><h3 id="_3-1-\u65B9\u5F0F\u4E00-bulkops" tabindex="-1"><a class="header-anchor" href="#_3-1-\u65B9\u5F0F\u4E00-bulkops" aria-hidden="true">#</a> 3.1 \u65B9\u5F0F\u4E00\uFF1AbulkOps</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token doc-comment comment">/**
     * \u6279\u91CF\u66F4\u65B0\u535A\u5BA2
     *
     * <span class="token keyword">@param</span> <span class="token parameter">updateBatchParam</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">ApiResult</span> <span class="token function">updateBatch</span><span class="token punctuation">(</span><span class="token class-name">BlogUpdateBatchParam</span> updateBatchParam<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">BlogEntity</span><span class="token punctuation">&gt;</span></span> blogEntityList <span class="token operator">=</span> updateBatchParam<span class="token punctuation">.</span><span class="token function">getBlogList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>blogUpdateParam <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">BlogEntity</span> blogEntity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BlogEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">BeanUtil</span><span class="token punctuation">.</span><span class="token function">copyProperties</span><span class="token punctuation">(</span>blogUpdateParam<span class="token punctuation">,</span> blogEntity<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> blogEntity<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BulkOperations</span> operations <span class="token operator">=</span> mongoTemplate<span class="token punctuation">.</span><span class="token function">bulkOps</span><span class="token punctuation">(</span><span class="token class-name">BulkOperations<span class="token punctuation">.</span>BulkMode</span><span class="token punctuation">.</span><span class="token constant">UNORDERED</span><span class="token punctuation">,</span> <span class="token class-name">BlogEntity</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">BlogEntity</span> blogEntity <span class="token operator">:</span> blogEntityList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Update</span> update <span class="token operator">=</span> <span class="token class-name">Update</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> blogEntity<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span> blogEntity<span class="token punctuation">.</span><span class="token function">getTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;content&quot;</span><span class="token punctuation">,</span> blogEntity<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;author&quot;</span><span class="token punctuation">,</span> blogEntity<span class="token punctuation">.</span><span class="token function">getAuthor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;countRead&quot;</span><span class="token punctuation">,</span> blogEntity<span class="token punctuation">.</span><span class="token function">getCountRead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;countLike&quot;</span><span class="token punctuation">,</span> blogEntity<span class="token punctuation">.</span><span class="token function">getCountLike</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;clientTimestamp&quot;</span><span class="token punctuation">,</span> blogEntity<span class="token punctuation">.</span><span class="token function">getClientTimestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            operations<span class="token punctuation">.</span><span class="token function">updateOne</span><span class="token punctuation">(</span><span class="token class-name">Query</span><span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">Criteria</span><span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>blogEntity<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        operations<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">ApiResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6279\u91CF\u66F4\u65B0\u7684\u64CD\u4F5C\u7A0D\u5FAE\u590D\u6742\u4E00\u70B9\uFF0C\u9700\u8981\u9488\u5BF9\u6BCF\u4E2A\u66F4\u65B0\u7684\u5C5E\u6027\u8FDB\u884C\u8D4B\u503C\u3002</p><h2 id="_4-\u6279\u91CF\u63D2\u5165\u6216\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#_4-\u6279\u91CF\u63D2\u5165\u6216\u66F4\u65B0" aria-hidden="true">#</a> 4. \u6279\u91CF\u63D2\u5165\u6216\u66F4\u65B0</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span> dataList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\uFF1B
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Pair</span><span class="token punctuation">&lt;</span><span class="token class-name">Query</span><span class="token punctuation">,</span> <span class="token class-name">Update</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> updateList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>dataList<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BulkOperations</span> operations <span class="token operator">=</span> mongoTemplate<span class="token punctuation">.</span><span class="token function">bulkOps</span><span class="token punctuation">(</span><span class="token class-name">BulkOperations<span class="token punctuation">.</span>BulkMode</span><span class="token punctuation">.</span><span class="token constant">UNORDERED</span><span class="token punctuation">,</span> collectionName<span class="token punctuation">)</span><span class="token punctuation">;</span>
dataList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>data <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>undefined
<span class="token class-name">Query</span> query <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Query</span><span class="token punctuation">(</span><span class="token keyword">new</span>
<span class="token class-name">Criteria</span><span class="token punctuation">(</span>field1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>value1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addCriteria</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Criteria</span><span class="token punctuation">(</span>field2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>value2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Update</span> update <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> dataList<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>undefined
<span class="token class-name">String</span> key <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> value <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
\u3000\u3000update<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Pair</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Query</span><span class="token punctuation">,</span> <span class="token class-name">Update</span><span class="token punctuation">&gt;</span></span> updatePair <span class="token operator">=</span> <span class="token class-name">Pair</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>query<span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>
updateList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>updatePair<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
operations<span class="token punctuation">.</span><span class="token function">upsert</span><span class="token punctuation">(</span>updateList<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BulkWriteResult</span> result <span class="token operator">=</span> operations<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,12),m={href:"https://blog.csdn.net/Mrqiang9001/article/details/121352249",target:"_blank",rel:"noopener noreferrer"},v={href:"https://blog.csdn.net/weixin_42554772/article/details/122437425",target:"_blank",rel:"noopener noreferrer"};function b(g,f){const a=l("ExternalLinkIcon");return o(),e("div",null,[i,k,n("p",null,[s("MongoTemplate \u4F5C\u4E3A Spring \u5BF9 "),n("a",r,[s("MongoDB"),t(a)]),s(" \u63D0\u4F9B\u7684\u64CD\u4F5C\u7C7B\uFF0C\u652F\u6301\u6570\u636E\u7684\u6279\u91CF\u64CD\u4F5C\u3002\u672C\u6587\u5C06\u4ECB\u7ECD\u4F7F\u7528 MongoTemplate \u5B9E\u73B0\u6279\u91CF\u63D2\u5165\u548C\u6279\u91CF\u66F4\u65B0\u7684\u529F\u80FD\u3002")]),d,n("p",null,[n("a",m,[s("Springboot 2.X MongoTemplate \u5B9E\u73B0\u6279\u91CF\u63D2\u5165\u4EE5\u53CA\u6279\u91CF\u66F4\u65B0"),t(a)])]),n("p",null,[n("a",v,[s("MongoTemplate\u6279\u91CF\u64CD\u4F5C"),t(a)])])])}const _=p(u,[["render",b],["__file","mongodb-action-bluk-operation.html.vue"]]);export{_ as default};