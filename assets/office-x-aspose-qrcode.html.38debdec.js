import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as p}from"./app.333ff1c5.js";const t={},e=p(`<h1 id="asposeword\u4E3A\u6BCF\u9875\u5934\u90E8\u6DFB\u52A0\u4E8C\u7EF4\u7801\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#asposeword\u4E3A\u6BCF\u9875\u5934\u90E8\u6DFB\u52A0\u4E8C\u7EF4\u7801\u4FE1\u606F" aria-hidden="true">#</a> asposeword\u4E3A\u6BCF\u9875\u5934\u90E8\u6DFB\u52A0\u4E8C\u7EF4\u7801\u4FE1\u606F</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u5728\u751F\u6210word\u7684\u65F6\u5019\u9700\u8981\u5728\u6BCF\u9875\u5934\u90E8\u65B0\u589E\u4E00\u4E2A\u4E8C\u7EF4\u7801\u56FE\u7247\uFF0C\u91CC\u9762\u5E26\u4E86\u8BE5\u6587\u6863\u7684\u4FE1\u606F</p><h2 id="_2-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9E\u73B0" aria-hidden="true">#</a> 2. \u5B9E\u73B0</h2><p>\u6838\u5FC3\u903B\u8F91\u5982\u4E0B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
    <span class="token doc-comment comment">/**
     * \u6DFB\u52A0\u4E8C\u7EF4\u7801\u4FE1\u606F
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Document</span> <span class="token function">addQrInfo</span><span class="token punctuation">(</span><span class="token class-name">GenTemplateDocDto<span class="token punctuation">.</span>QrInfo</span> qrInfo<span class="token punctuation">,</span> <span class="token class-name">Document</span> doc<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Document</span> myDoc <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>qrInfo <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">String</span> qrContent <span class="token operator">=</span> qrInfo<span class="token punctuation">.</span><span class="token function">getQrContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">double</span> width <span class="token operator">=</span> qrInfo<span class="token punctuation">.</span><span class="token function">getWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">double</span> height <span class="token operator">=</span> qrInfo<span class="token punctuation">.</span><span class="token function">getHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>width <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                width <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>height <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                height <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">int</span> pageCount <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">getPageCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>pageCount<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// \u8FD9\u91CC\u91C7\u7528\u63D0\u53D6\u9875\u9762\u7684\u65B9\u5F0F\uFF0C\u6240\u4EE5\u8981\u5EFA\u7ACB\u5728\u65B0\u6587\u6863\u4E4B\u4E0A</span>
                <span class="token class-name">Document</span> pageDoc <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">extractPages</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">DocumentBuilder</span> pageDocBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DocumentBuilder</span><span class="token punctuation">(</span>pageDoc<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">// \u751F\u6210\u4E8C\u7EF4\u7801</span>
                <span class="token class-name">String</span> qrPath <span class="token operator">=</span> <span class="token function">genQrCode</span><span class="token punctuation">(</span>qrContent<span class="token punctuation">,</span>pageCount<span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">// \u6DFB\u52A0\u4E8C\u7EF4\u7801</span>
                <span class="token class-name">Shape</span> shape <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Shape</span><span class="token punctuation">(</span>pageDoc<span class="token punctuation">,</span> <span class="token class-name">ShapeType</span><span class="token punctuation">.</span><span class="token constant">IMAGE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                shape<span class="token punctuation">.</span><span class="token function">getImageData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setImage</span><span class="token punctuation">(</span>qrPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// \u8BBE\u7F6E\u56FE\u7247\u5BBD\u9AD8</span>
                shape<span class="token punctuation">.</span><span class="token function">setWidth</span><span class="token punctuation">(</span>width<span class="token punctuation">)</span><span class="token punctuation">;</span>
                shape<span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// \u8BBE\u7F6E\u56FE\u7247\u504F\u79FB\u91CF</span>
                shape<span class="token punctuation">.</span><span class="token function">setTop</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//\u5D4C\u5165\u65B9\u5F0F</span>
                shape<span class="token punctuation">.</span><span class="token function">setWrapType</span><span class="token punctuation">(</span><span class="token class-name">WrapType</span><span class="token punctuation">.</span><span class="token constant">NONE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                shape<span class="token punctuation">.</span><span class="token function">setHorizontalAlignment</span><span class="token punctuation">(</span><span class="token class-name">HorizontalAlignment</span><span class="token punctuation">.</span><span class="token constant">LEFT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                pageDocBuilder<span class="token punctuation">.</span><span class="token function">moveToHeaderFooter</span><span class="token punctuation">(</span><span class="token class-name">HeaderFooterType</span><span class="token punctuation">.</span><span class="token constant">HEADER_PRIMARY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                pageDocBuilder<span class="token punctuation">.</span><span class="token function">insertNode</span><span class="token punctuation">(</span>shape<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>myDoc <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    myDoc <span class="token operator">=</span> pageDoc<span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                    myDoc<span class="token punctuation">.</span><span class="token function">appendDocument</span><span class="token punctuation">(</span>pageDoc<span class="token punctuation">,</span><span class="token class-name">ImportFormatMode</span><span class="token punctuation">.</span><span class="token constant">KEEP_SOURCE_FORMATTING</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>myDoc <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            doc <span class="token operator">=</span> myDoc<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> doc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u751F\u6210\u4E8C\u7EF4\u7801
     * <span class="token keyword">@param</span> <span class="token parameter">qrContent</span>
     * <span class="token keyword">@param</span> <span class="token parameter">zys</span>
     * <span class="token keyword">@param</span> <span class="token parameter">dqy</span>
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">genQrCode</span><span class="token punctuation">(</span><span class="token class-name">String</span> qrContent<span class="token punctuation">,</span><span class="token keyword">int</span> zys<span class="token punctuation">,</span><span class="token keyword">int</span> dqy<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> basePath <span class="token operator">=</span> <span class="token class-name">FdConfig</span><span class="token punctuation">.</span><span class="token function">getProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token class-name">FdConfig</span><span class="token punctuation">.</span><span class="token function">getProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            basePath <span class="token operator">=</span> <span class="token string">&quot;/Users/zsz/Project/fadu/21_fd_report/fd_report_server/doc/temp&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">String</span> qrPath <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;%s/qr_%s.png&quot;</span><span class="token punctuation">,</span>basePath<span class="token punctuation">,</span> <span class="token class-name">IdUtils</span><span class="token punctuation">.</span><span class="token function">fastSimpleUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> valuesMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        valuesMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;qrContent&quot;</span><span class="token punctuation">,</span> qrContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
        valuesMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;zys&quot;</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>zys<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        valuesMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;dqy&quot;</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>dqy<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> templte <span class="token operator">=</span> <span class="token string">&quot;{qrContent}\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot; \u603B\u9875\u6570\uFF1A{zys} \u5F53\u524D\u9875\uFF1A{dqy}&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> content <span class="token operator">=</span> <span class="token class-name">StrFormatter</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>templte<span class="token punctuation">,</span> valuesMap<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">QrUtil</span><span class="token punctuation">.</span><span class="token function">createQr</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span><span class="token number">168</span><span class="token punctuation">,</span><span class="token number">168</span><span class="token punctuation">,</span><span class="token string">&quot;png&quot;</span><span class="token punctuation">,</span>qrPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> qrPath<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","office-x-aspose-qrcode.html.vue"]]);export{r as default};
