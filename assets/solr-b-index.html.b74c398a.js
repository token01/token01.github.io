import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as a,a as e,b as n,d as r,f as s,r as o}from"./app.df1d0035.js";const t={},c=s(`<h1 id="solr\u5012\u6392\u7D22\u5F15\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#solr\u5012\u6392\u7D22\u5F15\u539F\u7406" aria-hidden="true">#</a> Solr\u5012\u6392\u7D22\u5F15\u539F\u7406</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>solr\u662F\u57FA\u4E8ELucence\u5F00\u53D1\u7684\u4F01\u4E1A\u7EA7\u641C\u7D22\u5F15\u64CE\u6280\u672F\uFF0C\u800Clucence\u7684\u539F\u7406\u662F\u5012\u6392\u7D22\u5F15\u3002\u90A3\u4E48\u4EC0\u4E48\u662F\u5012\u6392\u7D22\u5F15\u5462\uFF1F</p><h3 id="_1-1-\u6B63\u6392\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_1-1-\u6B63\u6392\u7D22\u5F15" aria-hidden="true">#</a> 1.1 \u6B63\u6392\u7D22\u5F15</h3><p>\u6211\u4EEC\u4F20\u7EDF\u7684\u65B9\u5F0F\uFF08\u6B63\u6392\u7D22\u5F15\uFF09\u662F\u4ECE\u5173\u952E\u70B9\u51FA\u53D1\uFF0C\u7136\u540E\u518D\u901A\u8FC7\u5173\u952E\u70B9\u627E\u5230\u5173\u952E\u70B9\u4EE3\u8868\u7684\u4FE1\u606F\u4E2D\u80FD\u591F\u6EE1\u8DB3\u641C\u7D22\u6761\u4EF6\u7684\u7279\u5B9A\u4FE1\u606F\uFF0C\u65E2\u901A\u8FC7<strong>KEY\u5BFB\u627EVALUE</strong>\u3002</p><p>\u4F8B\u5982\u6211\u4EECsql \u8BED\u53E5\uFF0C\u4ED6\u662F\u901A\u8FC7key ,\u6765\u627E\u503C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>where name like &#39;%\u5F20\u4E09%&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u6B63\u6392\u7D22\u5F15\u4ECE\u6587\u6863\u7F16\u53F7\u627E\u8BCD\uFF1A</strong></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220417133453806.png" alt="image-20220417133453806"></p><h3 id="_1-2-\u5012\u6392\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5012\u6392\u7D22\u5F15" aria-hidden="true">#</a> 1.2 \u5012\u6392\u7D22\u5F15</h3><p>\u800CLucene\u7684\u641C\u7D22\u5219\u662F\u91C7\u7528\u4E86\u5012\u6392\u7D22\u5F15\u7684\u65B9\u5F0F\uFF0C\u5373\u901A\u8FC7<strong>VALUE\u627EKEY</strong>\u3002\u800C\u5728\u4E2D\u6587\u5168\u6587\u641C\u7D22\u4E2DVALUE\u5C31\u662F\u6211\u4EEC\u8981\u641C\u7D22\u7684\u5355\u8BCD\uFF0C\u5B58\u653E\u6240\u6709\u5355\u8BCD\u7684\u5730\u65B9\u53EB\u8BCD\u5178\u3002KEY\u662F\u6587\u6863\u6807\u53F7\u5217\u8868\uFF08\u901A\u8FC7\u6587\u6863\u6807\u53F7\u5217\u8868\u6211\u4EEC\u53EF\u4EE5\u627E\u5230\u51FA\u73B0\u8FC7\u8981\u641C\u7D22\u5355\u8BCDVALUE\u7684\u6587\u6863\uFF09</p><p><strong>\u5012\u6392\u7D22\u5F15\u662F\u4ECE\u8BCD\u627E\u6587\u6863\u7F16\u53F7\uFF1A</strong></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220417133516596.png" alt="image-20220417133516596"></p><h2 id="_2-\u7D22\u5F15\u7684\u521B\u5EFA\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-\u7D22\u5F15\u7684\u521B\u5EFA\u8FC7\u7A0B" aria-hidden="true">#</a> 2. \u7D22\u5F15\u7684\u521B\u5EFA\u8FC7\u7A0B</h2><p>\u7D22\u5F15\u7684\u521B\u5EFA\u8FC7\u7A0B\u53EF\u4EE5\u5206\u4E3A\uFF1A<strong>1.\u5206\u8BCD\u7EC4\u4EF6\uFF0C2.\u8BED\u8A00\u5904\u7406\u7EC4\u4EF6\uFF0C2.\u7D22\u5F15\u7EC4\u4EF6</strong></p><h3 id="_2-1-\u5206\u8BCD\u7EC4\u4EF6-tokenizer" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5206\u8BCD\u7EC4\u4EF6-tokenizer" aria-hidden="true">#</a> 2.1 \u5206\u8BCD\u7EC4\u4EF6\uFF08Tokenizer\uFF09</h3><ul><li>\u5C06\u539F\u6587\u6863\u4EA4\u7ED9\u5206\u8BCD\u7EC4\u4EF6\uFF08Tokenizer\uFF09</li></ul><p>\u6B64\u8FC7\u7A0B\u53EB\u505ATokenize\uFF0C\u5F97\u5230\u7684\u7ED3\u679C\u79F0\u4E3AToken\u3002</p><p>\u5206\u8BCD\u7EC4\u4EF6\u7684\u4F5C\u7528</p><ol><li><p>\u5C06\u6570\u636E\u5206\u6210\u4E00\u4E2A\u4E2A\u8BCD\u6C47</p></li><li><p>\u53BB\u9664\u6807\u70B9\u7B26\u53F7</p></li><li><p>\u53BB\u9664\u505C\u8BCD(\u6BD4\u5982\u4E2D\u6587\u7684\u201C\u7684\u201D\uFF0C\u201C\u548C\u201D\uFF0C\u201C\u5566\u201D\u7B49\u7B49)</p></li></ol><h4 id="_2-1-1-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u793A\u4F8B" aria-hidden="true">#</a> 2.1.1 \u793A\u4F8B</h4><p>\u6BD4\u5982\u5B58\u5165\u201CStudents should be allowed to go out\uFF01\u201D</p><ol><li>\u5206\u8BCD\u7EC4\u4EF6\u4F1A\u5148\u5C06\u53E5\u5B50\u5206\u6210\u591A\u4E2A\u5355\u8BCD\u201CStudents\u201D\uFF0C\u201Cshould\u201D\uFF0C\u201Cbe\u201D \uFF0C\u201Callowed\u201D\uFF0C\u201Cto\u201D\uFF0C\u201Cgo\u201D\uFF0C\u201Cout\u201D,\u201C\uFF01\u201D\u3002</li><li>\u968F\u540E\u4F1A\u8FDB\u884C\u7B2C\u4E8C\u90E8\u5C06\u6807\u70B9\u7B26\u53F7\u201C\uFF01\u201D\u53BB\u6389\uFF0C</li><li>\u6700\u540E\u7B2C\u4E09\u6B65\u4F1A\u5C06\u201Cto\u201D,\u201Cbe\u201D\u53BB\u6389\u3002</li></ol><p>\u6700\u540E\u7559\u4E0B\u7684\u7ED3\u679C\u4E3A\uFF1A\u201CStudents\u201D\uFF0C\u201Cshould\u201D\uFF0C\u201Callowed\u201D\uFF0C\u201Cgo\u201D\uFF0C\u201Cout\u201D\u3002</p><h3 id="_2-2-\u8BED\u8A00\u5904\u7406\u7EC4\u4EF6-linguisticprocessor" tabindex="-1"><a class="header-anchor" href="#_2-2-\u8BED\u8A00\u5904\u7406\u7EC4\u4EF6-linguisticprocessor" aria-hidden="true">#</a> 2.2 \u8BED\u8A00\u5904\u7406\u7EC4\u4EF6\uFF08LinguisticProcessor\uFF09\uFF1A</h3><p>\u5C06\u5F97\u5230\u7684Token\u4EA4\u7ED9\u8BED\u8A00\u5904\u7406\u7EC4\u4EF6\uFF08LinguisticProcessor\uFF09</p><p>\u6B64\u8FC7\u7A0B\u5904\u7406\u7684\u7ED3\u679C\u662FTerm</p><p>\u8BED\u8A00\u5904\u7406\u7EC4\u4EF6\u7684\u4F5C\u7528\u5982\u4E0B\uFF1A</p><ol><li>\u53D8\u4E3A\u5C0F\u5199(Lowercase)\u3002</li><li>\u5C06\u5355\u8BCD\u7F29\u51CF\u4E3A\u8BCD\u6839\u5F62\u5F0F\uFF0C\u5982\u201Dcars\u201D\u5230\u201Dcar\u201D\u7B49\u3002\u8FD9\u79CD\u64CD\u4F5C\u79F0\u4E3A\uFF1Astemming\u3002</li><li>\u5C06\u5355\u8BCD\u8F6C\u53D8\u4E3A\u8BCD\u6839\u5F62\u5F0F\uFF0C\u5982\u201Ddrove\u201D\u5230\u201Ddrive\u201D\u7B49\u3002\u8FD9\u79CD\u64CD\u4F5C\u79F0\u4E3A\uFF1Alemmatization\u3002</li></ol><blockquote><p>\u6CE8\u610F\uFF1A\u81F3\u6B64\u7D22\u5F15\u521B\u5EFA\u5B8C\u6210\uFF0C\u641C\u7D22\u201Ddrive\u201D\u65F6\uFF0C\u201Ddriving\u201D\uFF0C\u201Ddrove\u201D\uFF0C\u201Ddriven\u201D\u4E5F\u80FD\u591F\u88AB\u641C\u5230\u3002\u56E0\u4E3A\u5728\u7D22\u5F15\u4E2D\uFF0C\u201Ddriving\u201D\uFF0C\u201Ddrove\u201D\uFF0C\u201Ddriven\u201D\u90FD\u4F1A\u7ECF\u8FC7\u8BED\u8A00\u5904\u7406\u800C\u53D8\u6210\u201Ddrive\u201D\uFF0C\u5728\u641C\u7D22\u65F6\uFF0C\u5982\u679C\u60A8\u8F93\u5165\u201Ddriving\u201D\uFF0C\u8F93\u5165\u7684\u67E5\u8BE2\u8BED\u53E5\u540C\u6837\u7ECF\u8FC7\u5206\u8BCD\u7EC4\u4EF6\u548C\u8BED\u8A00\u5904\u7406\u7EC4\u4EF6\u5904\u7406\u7684\u6B65\u9AA4\uFF0C\u53D8\u4E3A\u67E5\u8BE2\u201Ddrive\u201D\uFF0C\u4ECE\u800C\u53EF\u4EE5\u641C\u7D22\u5230\u60F3\u8981\u7684\u6587\u6863\u3002Lowercase\uFF0Cstemming\u540C\u7406</p></blockquote><h3 id="_2-4-\u7D22\u5F15\u7EC4\u4EF6-indexer" tabindex="-1"><a class="header-anchor" href="#_2-4-\u7D22\u5F15\u7EC4\u4EF6-indexer" aria-hidden="true">#</a> 2.4 <strong>\u7D22\u5F15\u7EC4\u4EF6\uFF08Indexer\uFF09</strong></h3><p>\u5C06\u5F97\u5230\u7684Term\u4EA4\u7ED9\u7D22\u5F15\u7EC4\u4EF6\uFF08Indexer\uFF09</p><ol><li>\u5C06\u5F97\u5230\u7684Term\u521B\u5EFA\u5B57\u5178</li><li>\u5BF9\u5B57\u5178\u6309\u5B57\u6BCD\u6392\u5E8F</li><li>\u5408\u5E76\u76F8\u540C\u7684Term\u4E3A\u5012\u6392\u7D22\u5F15\u8868</li></ol><p>\u5047\u8BBE\u73B0\u5728\u6709\u4E24\u4E2A\u6587\u6863\uFF1A</p><ul><li>\u6587\u6863\u4E00\uFF1AStudents should be allowed to go out with their friends, but not allowed to drink beer.</li><li>\u6587\u6863\u4E8C\uFF1AMy friend Jerry went to school to see his students but found them drunk which is not allowed</li></ul><p>\u7ECF\u8FC7\u524D\u4E24\u4E2A\u7EC4\u4EF6\u7684\u5904\u7406\u540E\u5F97\u5230\u5982\u4E0B\u7D22\u5F15\uFF1A</p><h4 id="_2-4-1-\u521D\u59CB\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_2-4-1-\u521D\u59CB\u7D22\u5F15" aria-hidden="true">#</a> 2.4.1 \u521D\u59CB\u7D22\u5F15</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Term Document ID
student 1
allow 1
go 1
their 1
friend 1
allow 1
drink 1
beer 1
my 2
friend 2
jerry 2
go 2
school 2
see 2
his 2
student 2
find 2
them 2
drink 2
allow 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-2-\u5BF9\u5B57\u5178\u6309\u5B57\u6BCD\u987A\u5E8F\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_2-4-2-\u5BF9\u5B57\u5178\u6309\u5B57\u6BCD\u987A\u5E8F\u6392\u5E8F" aria-hidden="true">#</a> 2.4.2 \u5BF9\u5B57\u5178\u6309\u5B57\u6BCD\u987A\u5E8F\u6392\u5E8F\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Term Document ID
allow 1
allow 1
allow 2
beer 1
drink 1
drink 2
find 2
friend 1
friend 2
go 1
go 2
his 2
jerry 2
my 2
school 2
see 2
student 1
student 2
their 1
them 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-3-\u5408\u5E76\u76F8\u540C\u7684\u8BCD-term-\u6210\u4E3A\u6587\u6863\u5012\u6392-posting-list-\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#_2-4-3-\u5408\u5E76\u76F8\u540C\u7684\u8BCD-term-\u6210\u4E3A\u6587\u6863\u5012\u6392-posting-list-\u94FE\u8868" aria-hidden="true">#</a> 2.4.3 \u5408\u5E76\u76F8\u540C\u7684\u8BCD(Term)\u6210\u4E3A\u6587\u6863\u5012\u6392(Posting List)\u94FE\u8868</h4><p>\u5408\u5E76\u76F8\u540C\u7684\u8BCD(Term)\u6210\u4E3A\u6587\u6863\u5012\u6392(Posting List)\u94FE\u8868</p><ul><li><p>Document Frequency\uFF1A\u6587\u6863\u9891\u6B21\uFF0C\u8868\u793A\u591A\u5C11\u6587\u6863\u51FA\u73B0\u8FC7\u6B64\u8BCD(Term)</p></li><li><p>Frequency\uFF1A\u8BCD\u9891\uFF0C\u8868\u793A\u67D0\u4E2A\u6587\u6863\u4E2D\u8BE5\u8BCD(Term)\u51FA\u73B0\u8FC7\u51E0\u6B21</p></li></ul><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220417131709282.png" alt="image-20220417131709282"></p><h2 id="_3-\u7D22\u5F15\u7684\u68C0\u7D22" tabindex="-1"><a class="header-anchor" href="#_3-\u7D22\u5F15\u7684\u68C0\u7D22" aria-hidden="true">#</a> 3. <strong>\u7D22\u5F15\u7684\u68C0\u7D22</strong></h2><p>\u901A\u8FC7\u524D\u51E0\u6B65\u7D22\u5F15\u7684\u521B\u5EFA\uFF0C\u73B0\u5728\u5C31\u53EF\u4EE5\u5BF9\u521B\u5EFA\u7684\u7D22\u5F15\u8FDB\u884C\u68C0\u7D22\u4E86\u3002</p><ol><li>\u5F53\u7528\u6237\u7684\u68C0\u7D22\u5173\u952E\u8BCD\u8FDB\u5165solr\u540E\uFF0Csolr\u4F1A\u5BF9\u4F20\u5165\u7684\u5173\u952E\u8BCD\u8FDB\u884C\u5904\u7406\uFF0C\u5177\u4F53\u5904\u7406\u8FC7\u7A0B\u7C7B\u4F3C\u521B\u5EFA\u7D22\u5F15\u65F6\u8BED\u8A00\u5904\u7406\u7EC4\u4EF6\u5BF9\u6587\u6863\u8BCD\u6C47\u7684\u5904\u7406\u8FC7\u7A0B\u3002</li><li>\u5C06\u5904\u7406\u540E\u7684\u8BCD\u5728\u8BCD\u5178\u4E2D\u641C\u7D22\u5F97\u5230\u4E00\u4E2A\u6587\u6863\u96C6\u3002</li><li>\u5C06\u6587\u6863\u96C6\u6839\u636E\u8BCD\u9891\u5C06\u6587\u6863\u96C6\u8FDB\u884C\u76F8\u5173\u6027\u6392\u5E8F\u3002</li><li>\u5C06\u7ED3\u679C\u96C6\u8FD4\u56DE\u7ED9\u7528\u6237\u3002</li></ol><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,48),u={href:"https://cloud.tencent.com/developer/article/1675434",target:"_blank",rel:"noopener noreferrer"},h={href:"https://blog.nowcoder.net/n/7806530b1e9343848024ec20e87ff8cf",target:"_blank",rel:"noopener noreferrer"};function v(m,p){const i=o("ExternalLinkIcon");return d(),a("div",null,[c,e("p",null,[e("a",u,[n("solr\u7D22\u5F15\u57FA\u672C\u539F\u7406"),r(i)])]),e("p",null,[e("a",h,[n("Solr\u5012\u6392\u7D22\u5F15\u539F\u7406"),r(i)])])])}const _=l(t,[["render",v],["__file","solr-b-index.html.vue"]]);export{_ as default};
