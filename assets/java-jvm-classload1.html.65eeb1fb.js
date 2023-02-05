import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,f as t}from"./app.df1d0035.js";const e={},p=t(`<h1 id="\u7C7B\u52A0\u8F7D\u5668" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u52A0\u8F7D\u5668" aria-hidden="true">#</a> \u7C7B\u52A0\u8F7D\u5668</h1><h2 id="_1-\u56DE\u987E\u7C7B\u52A0\u8F7D\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_1-\u56DE\u987E\u7C7B\u52A0\u8F7D\u8FC7\u7A0B" aria-hidden="true">#</a> 1. \u56DE\u987E\u7C7B\u52A0\u8F7D\u8FC7\u7A0B</h2><p>\u7C7B\u52A0\u8F7D\u8FC7\u7A0B\uFF1A<strong>\u52A0\u8F7D-&gt;\u8FDE\u63A5-&gt;\u521D\u59CB\u5316</strong>\u3002\u8FDE\u63A5\u8FC7\u7A0B\u7531\u53EF\u4EE5\u5206\u6210\u4E09\u6B65\uFF1A<strong>\u9A8C\u8BC1-&gt;\u51C6\u5907-&gt;\u89E3\u6790</strong></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190929170059337.png" alt="image-20190929170059337"></p><p>\u4E00\u4E2A\u975E\u6570\u7EC4\u7C7B\u7684\u52A0\u8F7D\u9636\u6BB5\uFF08\u52A0\u8F7D\u9636\u6BB5\u83B7\u53D6\u7C7B\u7684\u4E8C\u8FDB\u5236\u5B57\u8282\u6D41\u7684\u52A8\u4F5C\uFF09\u662F\u53EF\u63A7\u6700\u5F3A\u7684\u9636\u6BB5\uFF0C\u8FD9\u4E00\u6B65\u6211\u4EEC\u53EF\u4EE5\u53BB\u5B8C\u6210\u8FD8\u53EF\u4EE5\u81EA\u5B9A\u4E49\u7C7B\u52A0\u8F7D\u5668\u53BB\u63A7\u5236\u5B57\u8282\u6D41\u7684\u83B7\u53D6\u65B9\u5F0F\uFF08\u91CD\u5199\u4E00\u4E2A\u7C7B\u52A0\u8F7D\u5668\u7684 <code>loadClass()</code> \u65B9\u6CD5\uFF09\u3002\u6570\u7EC4\u7C7B\u578B\u4E0D\u901A\u8FC7\u7C7B\u52A0\u8F7D\u5668\u521B\u5EFA\uFF0C\u4ED6\u7531Java\u865A\u62DF\u673A\u76F4\u63A5\u521B\u5EFA</p><p>\u6240\u6709\u7684\u7C7B\u90FD\u662F\u7531\u7C7B\u52A0\u8F7D\u5668\u52A0\u8F7D\uFF0C\u52A0\u8F7D\u7684\u4F5C\u7528\u5C31\u662F\u5C06.class\u6587\u4EF6\u52A0\u8F7D\u5230\u5185\u5B58</p><h2 id="_2-\u7C7B\u52A0\u8F7D\u5668\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_2-\u7C7B\u52A0\u8F7D\u5668\u603B\u7ED3" aria-hidden="true">#</a> 2. \u7C7B\u52A0\u8F7D\u5668\u603B\u7ED3</h2><p>JVM\u4E2D\u5185\u7F6E\u4E86\u4E09\u4E2A\u91CD\u8981\u7684ClassLoader\uFF0C\u9664\u4E86BootstrapClassLoader \u5176\u4ED6\u7C7B\u52A0\u8F7D\u5668\u5747\u6709 Java \u5B9E\u73B0\u4E14\u5168\u90E8\u7EE7\u627F\u81EA<code>java.lang.ClassLoader</code>\uFF1A</p><ul><li><strong>BootstrapClassLoader(\u542F\u52A8\u7C7B\u52A0\u8F7D\u5668)</strong>\uFF1A\u6700\u9876\u5C42\u7684\u52A0\u8F7D\u7C7B\uFF0C\u7531C++\u5B9E\u73B0\u3002\u8D1F\u8D23\u52A0\u8F7D<code>%JAVA_HOME%/lib</code>\u76EE\u5F55\u4E0B\u7684jar\u5305\u548C\u7C7B\u6216\u8005\u6216\u88AB <code>-Xbootclasspath</code>\u53C2\u6570\u6307\u5B9A\u7684\u8DEF\u5F84\u4E2D\u7684\u6240\u6709\u7C7B\u3002</li><li><strong>ExtClassLoader\uFF08\u6269\u5C55\u7C7B\u52A0\u8F7D\u5668\uFF09</strong>\uFF1A\u4E3B\u8981\u8D1F\u8D23\u52A0\u8F7D\u76EE\u5F55 <code>%JRE_HOME%/lib/ext</code> \u76EE\u5F55\u4E0B\u7684jar\u5305\u548C\u7C7B\uFF0C\u6216\u88AB <code>java.ext.dirs</code> \u7CFB\u7EDF\u53D8\u91CF\u6240\u6307\u5B9A\u7684\u8DEF\u5F84\u4E0B\u7684jar\u5305\u3002</li><li><strong>AppClassLoader(\u5E94\u7528\u7A0B\u5E8F\u7C7B\u52A0\u8F7D\u5668)</strong> \uFF1A\u9762\u5411\u6211\u4EEC\u7528\u6237\u7684\u52A0\u8F7D\u5668\uFF0C\u8D1F\u8D23\u52A0\u8F7D\u5F53\u524D\u5E94\u7528classpath\u4E0B\u7684\u6240\u6709jar\u5305\u548C\u7C7B</li></ul><h2 id="_3-\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#_3-\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B" aria-hidden="true">#</a> 3. \u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B</h2><h3 id="_3-1-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_3-1-\u4ECB\u7ECD" aria-hidden="true">#</a> 3.1 \u4ECB\u7ECD</h3><p>\u6BCF\u4E00\u4E2A\u7C7B\u90FD\u6709\u4E00\u4E2A\u5BF9\u5E94\u4ED6\u7684\u7C7B\u52A0\u8F7D\u5668\u3002\u7CFB\u7EDF\u4E2D\u7684ClassLoader \u5728\u534F\u540C\u5DE5\u4F5C\u7684\u65F6\u5019\u4F1A\u9ED8\u8BA4\u4F7F\u7528 <strong>\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B</strong>\u3002\u65E2\u5728\u7C7B\u52A0\u8F7D\u7684\u65F6\u5019\uFF0C\u7CFB\u7EDF\u4F1A\u9996\u5148\u5224\u65AD\u5F53\u524D\u7C7B\u662F\u5426\u88AB\u52A0\u8F7D\u8FC7\u3002\u5DF2\u7ECF\u88AB\u52A0\u8F7D\u7684\u7C7B\u4F1A\u76F4\u63A5\u8FD4\u56DE\uFF0C\u5426\u5219\u624D\u4F1A\u5C1D\u8BD5\u52A0\u8F7D\u3002\u52A0\u8F7D\u7684\u65F6\u5019\uFF0C\u9996\u5148\u4F1A\u628A\u8BE5\u8BF7\u6C42\u59D4\u6D3E\u8BE5\u7236\u7C7B\u52A0\u8F7D\u5668\u7684 <code>loadClass()</code> \u5904\u7406\uFF0C\u56E0\u6B64\u6240\u6709\u7684\u8BF7\u6C42\u6700\u7EC8\u90FD\u5E94\u8BE5\u4F20\u9001\u5230\u9876\u5C42\u7684\u542F\u52A8\u7C7B\u52A0\u8F7D\u5668 <code>BootstrapClassLoader</code> \u4E2D\u3002\u5F53\u7236\u7C7B\u52A0\u8F7D\u5668\u65E0\u6CD5\u5904\u7406\u65F6\uFF0C\u624D\u7531\u81EA\u5DF1\u6765\u5904\u7406\u3002\u5F53\u7236\u7C7B\u52A0\u8F7D\u5668\u4E3Anull\u65F6\uFF0C\u4F1A\u4F7F\u7528\u542F\u52A8\u7C7B\u52A0\u8F7D\u5668 <code>BootstrapClassLoader</code> \u4F5C\u4E3A\u7236\u7C7B\u52A0\u8F7D\u5668\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190929215241442.png" alt="image-20190929215241442"></p><p>\u6BCF\u4E2A\u7C7B\u52A0\u8F7D\u90FD\u6709\u4E00\u4E2A\u7236\u7C7B\u52A0\u8F7D\u5668\uFF0C\u6211\u4EEC\u901A\u8FC7\u4E0B\u9762\u7684\u7A0B\u5E8F\u6765\u9A8C\u8BC1\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClassLoaderDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ClassLodarDemo&#39;s ClassLoader is &quot;</span> <span class="token operator">+</span> <span class="token class-name">ClassLoaderDemo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;The Parent of ClassLodarDemo&#39;s ClassLoader is &quot;</span> <span class="token operator">+</span> <span class="token class-name">ClassLoaderDemo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;The GrandParent of ClassLodarDemo&#39;s ClassLoader is &quot;</span> <span class="token operator">+</span> <span class="token class-name">ClassLoaderDemo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ClassLodarDemo&#39;s ClassLoader is sun.misc.Launcher$AppClassLoader@18b4aac2
The Parent of ClassLodarDemo&#39;s ClassLoader is sun.misc.Launcher$ExtClassLoader@1b6d3586
The GrandParent of ClassLodarDemo&#39;s ClassLoader is null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>AppClassLoader</code>\u7684\u7236\u7C7B\u52A0\u8F7D\u5668\u4E3A<code>ExtClassLoader</code> <code>ExtClassLoader</code>\u7684\u7236\u7C7B\u52A0\u8F7D\u5668\u4E3Anull\uFF0C<strong>null\u5E76\u4E0D\u4EE3\u8868ExtClassLoader\u6CA1\u6709\u7236\u7C7B\u52A0\u8F7D\u5668\uFF0C\u800C\u662F BootstrapClassLoader</strong> \u3002</p><p>\u5176\u5B9E\u8FD9\u4E2A\u53CC\u4EB2\u7FFB\u8BD1\u7684\u5BB9\u6613\u8BA9\u522B\u4EBA\u8BEF\u89E3\uFF0C\u6211\u4EEC\u4E00\u822C\u7406\u89E3\u7684\u53CC\u4EB2\u90FD\u662F\u7236\u6BCD\uFF0C\u8FD9\u91CC\u7684\u53CC\u4EB2\u66F4\u591A\u5730\u8868\u8FBE\u7684\u662F\u201C\u7236\u6BCD\u8FD9\u4E00\u8F88\u201D\u7684\u4EBA\u800C\u5DF2\uFF0C\u5E76\u4E0D\u662F\u8BF4\u771F\u7684\u6709\u4E00\u4E2A Mother ClassLoader \u548C\u4E00\u4E2A Father ClassLoader \u3002\u53E6\u5916\uFF0C\u7C7B\u52A0\u8F7D\u5668\u4E4B\u95F4\u7684\u201C\u7236\u5B50\u201D\u5173\u7CFB\u4E5F\u4E0D\u662F\u901A\u8FC7\u7EE7\u627F\u6765\u4F53\u73B0\u7684\uFF0C\u662F\u7531\u201C\u4F18\u5148\u7EA7\u201D\u6765\u51B3\u5B9A\u3002\u5B98\u65B9API\u6587\u6863\u5BF9\u8FD9\u90E8\u5206\u7684\u63CF\u8FF0\u5982\u4E0B:</p><blockquote><p>The Java platform uses a delegation model for loading classes. <strong>The basic idea is that every class loader has a &quot;parent&quot; class loader.</strong> When loading a class, a class loader first &quot;delegates&quot; the search for the class to its parent class loader before attempting to find the class itself.</p></blockquote><h3 id="_3-2-\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u6E90\u7801\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_3-2-\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u6E90\u7801\u5206\u6790" aria-hidden="true">#</a> 3.2 \u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u6E90\u7801\u5206\u6790</h3><p>\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u7684\u5B9E\u73B0\u4EE3\u7801\u975E\u5E38\u7B80\u5355\uFF0C\u903B\u8F91\u975E\u5E38\u6E05\u6670\uFF0C\u90FD\u96C6\u4E2D\u5728 <code>java.lang.ClassLoader</code> \u7684 <code>loadClass()</code> \u4E2D\uFF0C\u76F8\u5173\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ClassLoader</span> parent<span class="token punctuation">;</span> 
<span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">loadClass</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">boolean</span> resolve<span class="token punctuation">)</span>
        <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token function">getClassLoadingLock</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u9996\u5148\uFF0C\u68C0\u67E5\u8BF7\u6C42\u7684\u7C7B\u662F\u5426\u5DF2\u7ECF\u88AB\u52A0\u8F7D\u8FC7</span>
            <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> c <span class="token operator">=</span> <span class="token function">findLoadedClass</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">long</span> t0 <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>parent <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//\u7236\u52A0\u8F7D\u5668\u4E0D\u4E3A\u7A7A\uFF0C\u8C03\u7528\u7236\u52A0\u8F7D\u5668loadClass()\u65B9\u6CD5\u5904\u7406</span>
                        c <span class="token operator">=</span> parent<span class="token punctuation">.</span><span class="token function">loadClass</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">//\u7236\u52A0\u8F7D\u5668\u4E3A\u7A7A\uFF0C\u4F7F\u7528\u542F\u52A8\u7C7B\u52A0\u8F7D\u5668 BootstrapClassLoader \u52A0\u8F7D</span>
                        c <span class="token operator">=</span> <span class="token function">findBootstrapClassOrNull</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                   <span class="token comment">//\u629B\u51FA\u5F02\u5E38\u8BF4\u660E\u7236\u7C7B\u52A0\u8F7D\u5668\u65E0\u6CD5\u5B8C\u6210\u52A0\u8F7D\u8BF7\u6C42</span>
                <span class="token punctuation">}</span>
                
                <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">long</span> t1 <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">//\u81EA\u5DF1\u5C1D\u8BD5\u52A0\u8F7D</span>
                    c <span class="token operator">=</span> <span class="token function">findClass</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

                    <span class="token comment">// this is the defining class loader; record the stats</span>
                    <span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>PerfCounter</span><span class="token punctuation">.</span><span class="token function">getParentDelegationTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTime</span><span class="token punctuation">(</span>t1 <span class="token operator">-</span> t0<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>PerfCounter</span><span class="token punctuation">.</span><span class="token function">getFindClassTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addElapsedTimeFrom</span><span class="token punctuation">(</span>t1<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>PerfCounter</span><span class="token punctuation">.</span><span class="token function">getFindClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">resolveClass</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> c<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u7684\u597D\u5904" tabindex="-1"><a class="header-anchor" href="#_3-3-\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u7684\u597D\u5904" aria-hidden="true">#</a> 3.3 \u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u7684\u597D\u5904</h3><ul><li><p>\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u4FDD\u8BC1\u4E86Java\u7A0B\u5E8F\u7684\u7A33\u5B9A\u8FD0\u884C\uFF0C\u53EF\u4EE5\u907F\u514D\u7C7B\u7684\u91CD\u590D\u52A0\u8F7D</p><p>\uFF08JVM \u533A\u5206\u4E0D\u540C\u7C7B\u7684\u65B9\u5F0F\u4E0D\u4EC5\u4EC5\u6839\u636E\u7C7B\u540D\uFF0C\u76F8\u540C\u7684\u7C7B\u6587\u4EF6\u88AB\u4E0D\u540C\u7684\u7C7B\u52A0\u8F7D\u5668\u52A0\u8F7D\u4EA7\u751F\u7684\u662F\u4E24\u4E2A\u4E0D\u540C\u7684\u7C7B\uFF09</p></li><li><p>\u4FDD\u8BC1\u4E86 Java \u7684\u6838\u5FC3 API \u4E0D\u88AB\u7BE1\u6539</p><p>\u5982\u679C\u6CA1\u6709\u4F7F\u7528\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\uFF0C\u800C\u662F\u6BCF\u4E2A\u7C7B\u52A0\u8F7D\u5668\u52A0\u8F7D\u81EA\u5DF1\u7684\u8BDD\u5C31\u4F1A\u51FA\u73B0\u4E00\u4E9B\u95EE\u9898\uFF0C\u6BD4\u5982\u6211\u4EEC\u7F16\u5199\u4E00\u4E2A\u79F0\u4E3A <code>java.lang.Object</code> \u7C7B\u7684\u8BDD\uFF0C\u90A3\u4E48\u7A0B\u5E8F\u8FD0\u884C\u7684\u65F6\u5019\uFF0C\u7CFB\u7EDF\u5C31\u4F1A\u51FA\u73B0\u591A\u4E2A\u4E0D\u540C\u7684 <code>Object</code> \u7C7B\u3002</p></li></ul><h2 id="_4-\u4E0D\u4F7F\u7528\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#_4-\u4E0D\u4F7F\u7528\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B" aria-hidden="true">#</a> 4. \u4E0D\u4F7F\u7528\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B</h2><h3 id="\u5982\u679C\u6211\u4EEC\u4E0D\u60F3\u7528\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u600E\u4E48\u529E" tabindex="-1"><a class="header-anchor" href="#\u5982\u679C\u6211\u4EEC\u4E0D\u60F3\u7528\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u600E\u4E48\u529E" aria-hidden="true">#</a> \u5982\u679C\u6211\u4EEC\u4E0D\u60F3\u7528\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u600E\u4E48\u529E\uFF1F</h3><p>\u4E3A\u4E86\u907F\u514D\u53CC\u4EB2\u59D4\u6258\u673A\u5236\uFF0C\u6211\u4EEC\u53EF\u4EE5\u81EA\u5DF1\u5B9A\u4E49\u4E00\u4E2A\u7C7B\u52A0\u8F7D\u5668\uFF0C\u7136\u540E\u91CD\u8F7D <code>loadClass()</code> \u5373\u53EF\u3002</p><h2 id="_5-\u81EA\u5B9A\u4E49\u7C7B\u52A0\u8F7D\u5668" tabindex="-1"><a class="header-anchor" href="#_5-\u81EA\u5B9A\u4E49\u7C7B\u52A0\u8F7D\u5668" aria-hidden="true">#</a> 5. \u81EA\u5B9A\u4E49\u7C7B\u52A0\u8F7D\u5668</h2><p>\u9664\u4E86 <code>BootstrapClassLoader</code> \u5176\u4ED6\u7C7B\u52A0\u8F7D\u5668\u5747\u7531 Java \u5B9E\u73B0\u4E14\u5168\u90E8\u7EE7\u627F\u81EA<code>java.lang.ClassLoader</code>\u3002\u5982\u679C\u6211\u4EEC\u8981\u81EA\u5B9A\u4E49\u81EA\u5DF1\u7684\u7C7B\u52A0\u8F7D\u5668\uFF0C\u5F88\u660E\u663E\u9700\u8981\u7EE7\u627F <code>ClassLoader</code>\u3002</p>`,30),o=[p];function c(l,i){return n(),a("div",null,o)}const r=s(e,[["render",c],["__file","java-jvm-classload1.html.vue"]]);export{r as default};
