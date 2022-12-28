import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as l,a,b as s,d as e,f as t,r as c}from"./app.837a781d.js";const r={},i=t('<h1 id="solr\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#solr\u5165\u95E8" aria-hidden="true">#</a> Solr\u5165\u95E8</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>Solr\u662F\u57FA\u4E8ELucene\u5168\u6587\u641C\u7D22\u5F15\u64CE</p><h2 id="_2-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5" aria-hidden="true">#</a> 2. \u5B89\u88C5</h2>',4),u=a("p",null,"\u4E0B\u8F7D\u5B89\u88C5\uFF08\u6211\u4E0B\u8F7D\u7684\u662F7.7.3\u7248\u672C\uFF09",-1),d={href:"https://lucene.apache.org/solr/downloads.html",target:"_blank",rel:"noopener noreferrer"},h=a("blockquote",null,[a("p",null,"\u4E0B\u8F7D\u4E8C\u8FDB\u5236\u5305\uFF08Binary releases\uFF09 \u4E0D\u8981\u4E0B\u8F7D\u6E90\u7801\u5305\uFF08Source release\uFF09 \u5426\u5219\u542F\u52A8\u53EF\u80FD\u9047\u5230\u95EE\u9898")],-1),m=a("li",null,[a("p",null,"\u76EE\u5F55\u7ED3\u6784"),a("p",null,[a("img",{src:"https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210301153307778.png",alt:"image-20210301153307778"})]),a("ul",null,[a("li",null,"bin\uFF1A \u542F\u52A8\u548C\u505C\u6B62\u670D\u52A1\u5668\u7684\u811A\u672C"),a("li",null,"example\uFF1A\u793A\u4F8B"),a("li",null,"server/logs \u6587\u4EF6\u5939\uFF1A \u6240\u6709solr \u65E5\u5FD7\u90FD\u5199\u5165\u8BE5\u6587\u4EF6\u5939"),a("li",null,"server/solr \u6587\u4EF6\u5939\uFF1A\u5305\u542B\u4E0D\u540C\u7684\u96C6\u5408\u6216\u6838\u5FC3\uFF08core/collection\uFF09\u3002\u5BF9\u4E8E\u5404\u96C6\u5408\u6216\u6838\u5FC3\u7684\u914D\u7F6E\u548C\u6570\u636E\u90FD\u5B58\u50A8\u5728\u76F8\u5E94\u7684\u96C6\u5408\u6216\u6838\u5FC3\u6587\u4EF6\u5939\u3001")])],-1),g=t(`<h2 id="_3-\u542F\u52A8solr" tabindex="-1"><a class="header-anchor" href="#_3-\u542F\u52A8solr" aria-hidden="true">#</a> 3. \u542F\u52A8Solr</h2><p>solr \u5185\u7F6E <code>Jetty</code>\u670D\u52A1\u5668 \uFF0C\u53EF\u4EE5\u76F4\u63A5\u542F\u52A8</p><p>\u5728bin\u76EE\u5F55\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>solr start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210301153900527.png" alt="image-20210301153900527"></p><p>\u9ED8\u8BA4\u7AEF\u53E3\u4E3A8983</p>`,6),k={href:"http://localhost:8983/solr/",target:"_blank",rel:"noopener noreferrer"},b=t(`<p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210301154015030.png" alt="image-20210301154015030"></p><h2 id="_4-\u914D\u7F6Esolr" tabindex="-1"><a class="header-anchor" href="#_4-\u914D\u7F6Esolr" aria-hidden="true">#</a> 4. \u914D\u7F6ESolr</h2><h3 id="_4-1-\u5EFA\u7ACB\u6838\u5FC3-core" tabindex="-1"><a class="header-anchor" href="#_4-1-\u5EFA\u7ACB\u6838\u5FC3-core" aria-hidden="true">#</a> 4.1 \u5EFA\u7ACB\u6838\u5FC3\uFF08core\uFF09</h3><h4 id="_4-1-1-\u65B9\u5F0F1-\u547D\u4EE4\u884C\u5EFAcore" tabindex="-1"><a class="header-anchor" href="#_4-1-1-\u65B9\u5F0F1-\u547D\u4EE4\u884C\u5EFAcore" aria-hidden="true">#</a> 4.1.1 \u65B9\u5F0F1\uFF1A\u547D\u4EE4\u884C\u5EFAcore</h4><blockquote><p>\u6838\u5FC3\uFF1A\u72EC\u7ACB\u6A21\u5F0F\u4E0B\u542F\u52A8\u7684\u914D\u7F6E\u79F0\u4E3A\u6838\u5FC3</p><p>\u96C6\u5408\uFF1A\u5728SolrCloud\u6A21\u5F0F\u542F\u52A8\u7684\u914D\u7F6E\u79F0\u4E3A\u96C6\u5408</p></blockquote><p>\u9996\u5148\uFF0C\u521B\u5EFA\u4E00\u4E2A\u6838\u5FC3\u7684\u7D22\u5F15\u6570\u636E</p><p><code>solr create</code>\uFF1A <code>-c &lt;name&gt;</code>:\u8981\u521B\u5EFA\u7684\u6838\u5FC3\u6216\u96C6\u5408\u7684\u540D\u79F0\uFF08\u5FC5\u9700\uFF09\u3002 <code>-d &lt;confdir&gt;</code>:\u914D\u7F6E\u76EE\u5F55\uFF0C\u5728SolrCloud\u6A21\u5F0F\u975E\u5E38\u6709\u7528\u3002 <code>-n &lt;configName&gt;</code>:\u914D\u7F6E\u540D\u79F0\u3002\u8FD9\u5C06\u9ED8\u8BA4\u4E3A\u6838\u5FC3\u6216\u96C6\u5408\u7684\u540D\u79F0\u3002 <code>-p &lt;port&gt;</code>:\u672C\u5730Solr\u7684\u5B9E\u4F8B\u7684\u7AEF\u53E3\u53D1\u9001<code>create</code>\u547D\u4EE4; \u9ED8\u8BA4\u811A\u672C\u8BD5\u56FE\u901A\u8FC7\u5BFB\u627E\u8FD0\u884CSolr\u7684\u5B9E\u4F8B\u6765\u68C0\u6D4B\u7AEF\u53E3\u3002 <code>-s &lt;shards&gt;</code>:Number of shards to split a collection into, default is 1. <code>-rf &lt;replicas&gt;</code>:\u96C6\u5408\u4E2D\u7684\u6BCF\u4E2A\u6587\u4EF6\u7684\u4EFD\u6570\u3002\u9ED8\u8BA4\u503C\u662F1\u3002</p><p>\u4F7F\u7528\u6838\u5FC3\u540D\u79F0<code>-c</code>\u53C2\u6570\u3002\u5BF9\u4E8E\u6240\u6709\u5176\u5B83\u53C2\u6570\u4F7F\u7528\u9ED8\u8BA4\u8BBE\u7F6E\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>solr create <span class="token parameter variable">-c</span> jcg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210301155837877.png" alt="image-20210301155837877"></p><p>JCG\u6838\u5FC3\u88AB\u586B\u5145\u5728\u6838\u5FC3\u9009\u62E9\u5668\u4E0A\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210301160034928.png" alt="image-20210301160034928"></p><h4 id="_4-1-2-\u65B9\u5F0F\u4E8C-\u754C\u9762\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_4-1-2-\u65B9\u5F0F\u4E8C-\u754C\u9762\u64CD\u4F5C" aria-hidden="true">#</a> 4.1.2 \u65B9\u5F0F\u4E8C\uFF1A\u754C\u9762\u64CD\u4F5C</h4><ol><li><p>\u5728core admin\u4E0A\u70B9\u51FBnew core\u65B0\u5EFA</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210304151629768.png" alt="image-20210304151629768"></p></li><li><p>\u6B64\u65F6\u4F1A\u63D0\u793A**&#39;solrconfig.xml** \u6587\u4EF6\u627E\u4E0D\u5230</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210304151726594.png" alt="image-20210304151726594"></p></li><li><p>\u6B64\u65F6\u6211\u4EEC\u53BB\u5B89\u88C5\u76EE\u5F55\u4E0B\uFF0C\u53EF\u4EE5\u770B\u5230\u5DF2\u7ECF\u65B0\u5EFA\u4E86\u4E00\u4E2Acore\u76EE\u5F55\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210304151943980.png" alt="image-20210304151943980"></p><ol start="4"><li><p>\u62A5\u9519\u662F\u56E0\u4E3A\u9700\u8981\u7684\u914D\u7F6E\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u6211\u4EEC\u53BB\u62F7\u8D1D\u8FC7\u6765\u5373\u53EF\u3002</p><p>\u8FDB\u5165F:\\solr-7.7.3\\server\\solr\\configsets_default \u76EE\u5F55\u4E0B\uFF0C\u628Aconf\u6587\u4EF6\u5939copy\u5230</p><p>F:\\solr-7.7.3\\server\\solr\\new_core \u76EE\u5F55\u4E0B\uFF0C\u7136\u540E\u518D\u6267\u884CAdd core\u3002</p><p>\u7136\u540E\u7B49\u5F851-2s\uFF0C\u4F1A\u8FDB\u5165\u4EE5\u4E0B\u754C\u9762\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210304152230352.png" alt="image-20210304152230352"></p></li></ol></li></ol><h3 id="_4-2-\u4FEE\u6539schema-xml-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-2-\u4FEE\u6539schema-xml-\u6587\u4EF6" aria-hidden="true">#</a> 4.2 \u4FEE\u6539Schema.xml \u6587\u4EF6</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210301160308308.png" alt="image-20210301160308308"></p><ul><li>conf \uFF1A \u4FDD\u5B58\u6838\u5FC3\u914D\u7F6E</li><li>data\uFF1A \u7D22\u5F15\u6570\u636E</li></ul><p>solr-7.7.3\\server\\solr\\jcg\\conf\\managed-schema\u4E2D\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>field</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cat<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text_general<span class="token punctuation">&quot;</span></span> <span class="token attr-name">indexed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stored</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>field</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text_general<span class="token punctuation">&quot;</span></span> <span class="token attr-name">indexed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stored</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>field</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>price<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>double<span class="token punctuation">&quot;</span></span> <span class="token attr-name">indexed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stored</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>field</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inStock<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>boolean<span class="token punctuation">&quot;</span></span> <span class="token attr-name">indexed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stored</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>field</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>author<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text_general<span class="token punctuation">&quot;</span></span> <span class="token attr-name">indexed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stored</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>indexed</code>: \u4E3A<code>true</code>\u6307\u5B9A\u5B57\u6BB5\u88AB\u7D22\u5F15\u3002</li><li><code>stored</code>\u6307\u5B9A\u5B57\u6BB5\u662F\u5426\u88AB\u5B58\u50A8\u3002</li></ul><h3 id="_4-3-\u91CD\u542F\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#_4-3-\u91CD\u542F\u670D\u52A1\u5668" aria-hidden="true">#</a> 4.3 \u91CD\u542F\u670D\u52A1\u5668</h3><p>\u4FEE\u6539\u914D\u7F6E\u5FC5\u987B\u91CD\u542F\u670D\u52A1\u5668</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>solr stop <span class="token parameter variable">-all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u91CD\u542F\u670D\u52A1\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>solr start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-4-\u7D22\u5F15\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_4-4-\u7D22\u5F15\u6570\u636E" aria-hidden="true">#</a> 4.4 \u7D22\u5F15\u6570\u636E</h3><p>Apache Solr\u81EA\u5E26SimplePostTool\u7684\u7A0B\u5E8F\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210301163115327.png" alt="image-20210301163115327"></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>java <span class="token operator">-</span>jar post<span class="token punctuation">.</span>jar <span class="token operator">-</span>h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210301163318496.png" alt="image-20210301163318496"></p><p>\u7D22\u5F15\u6570\u636E\uFF1A</p><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code>java <span class="token operator">-</span>Dtype<span class="token operator">=</span>text<span class="token operator">/</span>csv <span class="token operator">-</span>Durl<span class="token operator">=</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">8983</span><span class="token operator">/</span>solr<span class="token operator">/</span>jcg<span class="token operator">/</span>update  <span class="token operator">-</span>jar post<span class="token punctuation">.</span>jar   books<span class="token punctuation">.</span>csv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>-Dtype</p><p>\u6570\u636E\u6587\u4EF6\u7684\u7C7B\u578B\u3002</p></li><li><p>-Durl</p><p>JCG\u6838\u5FC3\u7684\u5730\u5740\u3002</p></li></ul><p>\u5BFC\u822A\u5230\u4EE5\u4E0B\u7F51\u5740\u5E76\u9009\u62E9\u6838\u5FC3JCG:</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210301163549574.png" alt="image-20210301163549574"></p><h2 id="_5-\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#_5-\u641C\u7D22" aria-hidden="true">#</a> 5. \u641C\u7D22</h2><h3 id="_5-1-\u6309\u540D\u79F0\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#_5-1-\u6309\u540D\u79F0\u641C\u7D22" aria-hidden="true">#</a> 5.1 \u6309\u540D\u79F0\u641C\u7D22</h3>`,37),_={href:"https://link.jianshu.com/?t=http://localhost:8983/solr/jcg/select?q=name",target:"_blank",rel:"noopener noreferrer"},q=a("p",null,[a("img",{src:"https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210301163908343.png",alt:"image-20210301163908343"})],-1),v=a("h3",{id:"_5-2-\u9996\u5B57\u6BCD\u641C\u7D22",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_5-2-\u9996\u5B57\u6BCD\u641C\u7D22","aria-hidden":"true"},"#"),s(" 5.2 \u9996\u5B57\u6BCD\u641C\u7D22")],-1),f={href:"https://link.jianshu.com/?t=http://localhost:8983/solr/jcg/select?q=name",target:"_blank",rel:"noopener noreferrer"},x=a("p",null,[a("img",{src:"https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210301164023760.png",alt:"image-20210301164023760"})],-1),j=a("h3",{id:"_5-3-\u4F7F\u7528\u901A\u914D\u7B26",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_5-3-\u4F7F\u7528\u901A\u914D\u7B26","aria-hidden":"true"},"#"),s(" 5.3 \u4F7F\u7528\u901A\u914D\u7B26")],-1),y={href:"https://link.jianshu.com/?t=http://localhost:8983/solr/jcg/select?q=name",target:"_blank",rel:"noopener noreferrer"},S=a("p",null,[a("img",{src:"https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210301164102113.png",alt:"image-20210301164102113"})],-1),C=a("h3",{id:"_5-4-\u4F7F\u7528\u6761\u4EF6",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_5-4-\u4F7F\u7528\u6761\u4EF6","aria-hidden":"true"},"#"),s(" 5.4 \u4F7F\u7528\u6761\u4EF6")],-1),w=a("p",null,"\u5982\u4F55\u67E5\u8BE2\u4EF7\u683C\u4F4E\u4E8E\uFFE56\u7684\u4E66\u3002",-1),A={href:"http://localhost:8983/solr/jcg/select?q=*&fq=price:",target:"_blank",rel:"noopener noreferrer"},N=t('<p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210301164140115.png" alt="image-20210301164140115"></p><h2 id="_6-solr-\u9875\u9762\u8FDB\u884C\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_6-solr-\u9875\u9762\u8FDB\u884C\u67E5\u8BE2" aria-hidden="true">#</a> 6. Solr \u9875\u9762\u8FDB\u884C\u67E5\u8BE2</h2><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210301164448216.png" alt="image-20210301164448216"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',4),B={href:"https://www.jianshu.com/p/1b725a783d50",target:"_blank",rel:"noopener noreferrer"};function D(J,V){const n=c("ExternalLinkIcon");return p(),l("div",null,[i,a("ol",null,[a("li",null,[u,a("p",null,[a("a",d,[s("\u4E0B\u8F7Dsolr"),e(n)])]),h]),m]),g,a("p",null,[a("a",k,[s("http://localhost:8983/solr/"),e(n)])]),b,a("p",null,[a("a",_,[s("http://localhost:8983/solr/jcg/select?q=name"),e(n)]),s(':"A Clash of Kings"')]),q,v,a("p",null,[a("a",f,[s("http://localhost:8983/solr/jcg/select?q=name"),e(n)]),s(':"A"')]),x,j,a("p",null,[a("a",y,[s("http://localhost:8983/solr/jcg/select?q=name"),e(n)]),s(':"*of"')]),S,C,w,a("p",null,[a("a",A,[s("http://localhost:8983/solr/jcg/select?q=*&fq=price:"),e(n)]),s("[0 TO 6]")]),N,a("p",null,[a("a",B,[s("Apache Solr\u5165\u95E8\u6559\u7A0B"),e(n)])])])}const L=o(r,[["render",D],["__file","solr-a-satrted.html.vue"]]);export{L as default};
