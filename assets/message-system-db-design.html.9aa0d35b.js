import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,a as s,b as t,d as o,f as c,r as l}from"./app.ec219279.js";const i={},r=c(`<h1 id="\u6D88\u606F\u4E2D\u5FC3\u6570\u636E\u5E93\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F\u4E2D\u5FC3\u6570\u636E\u5E93\u8BBE\u8BA1" aria-hidden="true">#</a> \u6D88\u606F\u4E2D\u5FC3\u6570\u636E\u5E93\u8BBE\u8BA1</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u6D88\u606F\u4E2D\u5FC3\u662F\u5927\u90E8\u5206\u7CFB\u7EDF\u90FD\u6709\u7684\u529F\u80FD\uFF0C\u5982\u4F55\u8BBE\u8BA1\u4E00\u4E2A\u5408\u7406\u7684\u6D88\u606F\u7CFB\u7EDF\u5462\uFF1F</p><p>\u9700\u6C42\uFF1A</p><ul><li>\u6BCF\u4E2A\u7528\u6237\u6536\u5230\u6D88\u606F\u90FD\u5E94\u8BE5\u77E5\u9053\uFF0C\u8BE5\u6D88\u606F\u7684\u5DF2\u8BFB\u672A\u8BFB\u72B6\u6001</li></ul><h2 id="_2-\u6570\u636E\u5E93\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_2-\u6570\u636E\u5E93\u8BBE\u8BA1" aria-hidden="true">#</a> 2. \u6570\u636E\u5E93\u8BBE\u8BA1</h2><h3 id="_2-1-\u6D88\u606F\u8868" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6D88\u606F\u8868" aria-hidden="true">#</a> 2.1 \u6D88\u606F\u8868</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> T_SYS_NOTIFY<span class="token punctuation">(</span>
    ID <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span>  <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u4E3B\u952E&#39;</span> <span class="token punctuation">,</span>
    <span class="token keyword">TYPE</span> <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>    <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u64CD\u4F5C\u7C7B\u578B\uFF0C1 \u7CFB\u7EDF\u901A\u77E5\uFF0C2\uFF0C\u7528\u6237\u6D88\u606F&#39;</span> <span class="token punctuation">,</span>
    TITLE <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span>    <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u6807\u9898&#39;</span> <span class="token punctuation">,</span>
    CONTENT <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">512</span><span class="token punctuation">)</span>    <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u901A\u77E5\u5185\u5BB9&#39;</span> <span class="token punctuation">,</span>
    CREATE_BY <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">)</span>    <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u521B\u5EFA\u4EBA&#39;</span> <span class="token punctuation">,</span>
    CREATE_TIME <span class="token keyword">DATETIME</span>    <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u521B\u5EFA\u65F6\u95F4&#39;</span> <span class="token punctuation">,</span>
    REMARK <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span>    <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u5907\u6CE8&#39;</span> <span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>ID<span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">COMMENT</span> <span class="token operator">=</span> <span class="token string">&#39;\u7CFB\u7EDF\u6D88\u606F\u8868 &#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u57FA\u7840\u7684\u6D88\u606F\u8868\u5982\u4E0A</p><h4 id="_2-1-1-\u6D88\u606F\u8868\u8865\u5145" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u6D88\u606F\u8868\u8865\u5145" aria-hidden="true">#</a> 2.1.1 \u6D88\u606F\u8868\u8865\u5145</h4><p>\u5982\u679C\u9700\u8981\u8BB0\u5F55</p><ul><li><p>\u8BE5\u6761\u63D0\u9192<strong>\u6240\u5173\u8054\u7684\u5BF9\u8C61</strong></p></li><li><p>\u8BE5\u6761\u63D0\u9192<strong>\u6240\u5173\u8054\u7684\u52A8\u4F5C</strong></p></li></ul><p>\u4F8B\u5982</p><ul><li>\u5C0F\u660E\u559C\u6B22\u4E86\u6587\u7AE0\uFF0C <ul><li>\u559C\u6B22\u662F\uFF1Aaction</li><li>\u90A3\u7BC7\u6587\u7AE0\uFF1Atarget\uFF0CtargetType</li></ul></li></ul><p>\u5219\u9700\u8981\u65B0\u589E<code>target</code>\u3001<code>targetType</code>\u3001<code>action</code>\u5B57\u6BB5\u3002</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> T_SYS_NOTIFY <span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> target <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span>     <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u76EE\u6807\u7684ID&#39;</span> <span class="token keyword">AFTER</span> CONTENT<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> T_SYS_NOTIFY <span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> targetType <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span>     <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u76EE\u6807\u7684\u7C7B\u578B&#39;</span> <span class="token keyword">AFTER</span> target<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> T_SYS_NOTIFY <span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> <span class="token keyword">action</span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span>     <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u63D0\u9192\u4FE1\u606F\u7684\u52A8\u4F5C\u7C7B\u578B&#39;</span> <span class="token keyword">AFTER</span> targetType<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u7528\u6237\u6D88\u606F\u8868" tabindex="-1"><a class="header-anchor" href="#_2-2-\u7528\u6237\u6D88\u606F\u8868" aria-hidden="true">#</a> 2.2 \u7528\u6237\u6D88\u606F\u8868</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> T_SYS_USER_NOTIFY<span class="token punctuation">(</span>
    ID <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span>  <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u4E3B\u952E&#39;</span> <span class="token punctuation">,</span>
    NOTIFY_ID <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">)</span>    <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u901A\u77E5id&#39;</span> <span class="token punctuation">,</span>
    USER_ID <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">)</span>    <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u7528\u6237id&#39;</span> <span class="token punctuation">,</span>
    IS_READ <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>    <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u662F\u5426\u5DF2\u8BFB&#39;</span> <span class="token punctuation">,</span>
    CREATE_TIME <span class="token keyword">DATETIME</span>    <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u521B\u5EFA\u65F6\u95F4&#39;</span> <span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>ID<span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">COMMENT</span> <span class="token operator">=</span> <span class="token string">&#39;\u7528\u6237\u6D88\u606F\u8868 &#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,19),k={href:"https://www.jianshu.com/p/6bf8166b291c",target:"_blank",rel:"noopener noreferrer"};function d(u,T){const n=l("ExternalLinkIcon");return e(),p("div",null,[r,s("p",null,[s("a",k,[t("\u6D88\u606F\u7CFB\u7EDF\u8BBE\u8BA1\u4E0E\u5B9E\u73B0\u300C\u4E0B\u7BC7\u300D"),o(n)])])])}const E=a(i,[["render",d],["__file","message-system-db-design.html.vue"]]);export{E as default};
