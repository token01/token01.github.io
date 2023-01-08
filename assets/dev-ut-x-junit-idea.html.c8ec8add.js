import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as e,a as n,d as t,f as o,r as c}from"./app.f386ac8b.js";const i={},l=o(`<h1 id="\u5355\u5143\u6D4B\u8BD5-idea\u4E0B\u5355\u5143\u6D4B\u8BD5\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#\u5355\u5143\u6D4B\u8BD5-idea\u4E0B\u5355\u5143\u6D4B\u8BD5\u8BE6\u89E3" aria-hidden="true">#</a> \u5355\u5143\u6D4B\u8BD5 - IDEA\u4E0B\u5355\u5143\u6D4B\u8BD5\u8BE6\u89E3</h1><blockquote><p>\u5DE5\u6B32\u5584\u5176\u4E8B\u5FC5\u5148\u5229\u5176\u5668\uFF0C\u6211\u4EEC\u5728\u5199\u5355\u5143\u6D4B\u8BD5\u4E00\u5B9A\u8981\u4F7F\u7528\u5DE5\u5177\uFF0C\u8FD9\u5C06\u80FD\u5927\u5E45\u5EA6\u63D0\u5347\u7F16\u7801\u7684\u6548\u7387\u3002\u672C\u6587\u4EE5IDEA\u4E3A\u4F8B\uFF0C\u770B\u770B\u5982\u4F55\u5229\u7528\u63D2\u4EF6\u63D0\u5347\u6548\u7387\u3002</p></blockquote><h2 id="_1-\u573A\u666F\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#_1-\u573A\u666F\u51C6\u5907" aria-hidden="true">#</a> 1. \u573A\u666F\u51C6\u5907</h2><p>\u51C6\u5907\u4E00\u4E2A\u5F85\u6D4B\u8BD5\u7684\u7C7B, \u5176\u4E2D\u8FD8\u5305\u542B\u7740\u9519\u8BEF\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">tech<span class="token punctuation">.</span>pdai<span class="token punctuation">.</span>junit4<span class="token punctuation">.</span>module</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * add.
     *
     * <span class="token keyword">@param</span> <span class="token parameter">operand1</span> first param
     * <span class="token keyword">@param</span> <span class="token parameter">operand2</span> second param
     * <span class="token keyword">@return</span> sum
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> operand1<span class="token punctuation">,</span> <span class="token keyword">int</span> operand2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> operand1 <span class="token operator">+</span> operand2<span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">subtract</span><span class="token punctuation">(</span><span class="token keyword">int</span> operand1<span class="token punctuation">,</span> <span class="token keyword">int</span> operand2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> operand1 <span class="token operator">-</span> operand2<span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">multiple</span><span class="token punctuation">(</span><span class="token keyword">int</span> operand1<span class="token punctuation">,</span> <span class="token keyword">int</span> operand2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> operand1 <span class="token operator">*</span> operand2<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> <span class="token punctuation">;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>                    <span class="token comment">//\u6B7B\u5FAA\u73AF</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">divide</span><span class="token punctuation">(</span><span class="token keyword">int</span> operand1<span class="token punctuation">,</span> <span class="token keyword">int</span> operand2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> operand1 <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u63D2\u4EF6\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u63D2\u4EF6\u4F7F\u7528" aria-hidden="true">#</a> 2. \u63D2\u4EF6\u4F7F\u7528</h2><h3 id="_2-1-\u81EA\u52A8\u751F\u6210\u5355\u5143\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_2-1-\u81EA\u52A8\u751F\u6210\u5355\u5143\u6D4B\u8BD5" aria-hidden="true">#</a> 2.1 \u81EA\u52A8\u751F\u6210\u5355\u5143\u6D4B\u8BD5</h3><p>\u7B2C\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u9996\u63A8\u7684\u662FJunitGeneratorV2.0</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220901210441494.png" alt="image-20220901210441494"></p><p>\u8BBE\u7F6E\u9ED8\u8BA4\u91C7\u7528Junit4</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220901210524521.png" alt="image-20220901210524521"></p><p>\u5982\u6709\u5FC5\u8981\u53EF\u4EE5\u8BBE\u7F6E\u751F\u6210\u7684\u6A21\u677F</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220901210553705.png" alt="image-20220901210553705"></p><p>\u6D4B\u8BD5\u4E0B</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220901210619275.png" alt="image-20220901210619275"></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220901210637466.png" alt="image-20220901210637466"></p><p>\u751F\u6210\u5355\u5143\u6D4B\u8BD5</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220901210703509.png" alt="image-20220901210703509"></p><p>\u8865\u5145\u5B8C\u6574\u4EE3\u7801</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">tech<span class="token punctuation">.</span>pdai<span class="token punctuation">.</span>junit4<span class="token punctuation">.</span>module</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">After</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Before</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Ignore</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token import static"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Assert</span><span class="token punctuation">.</span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CalculatorTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Calculator</span> cal<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Calculator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Before</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;before&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@After</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">tearDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;after&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cal<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span>cal<span class="token punctuation">.</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">subtract</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cal<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span>cal<span class="token punctuation">.</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Ignore</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">&quot;Not yet implemented&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span><span class="token punctuation">(</span>timeout <span class="token operator">=</span> <span class="token number">2000</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">divide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span><span class="token punctuation">(</span>expected <span class="token operator">=</span> <span class="token class-name">ArithmeticException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDivideByZero</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        cal<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u7ED3\u679C</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220901210749209.png" alt="image-20220901210749209"></p><h3 id="_2-2-\u5E76\u884C\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5E76\u884C\u6D4B\u8BD5" aria-hidden="true">#</a> 2.2 \u5E76\u884C\u6D4B\u8BD5</h3><p>\u5728\u5927\u91CF\u7684\u5355\u5143\u6D4B\u8BD5\u65F6\uFF0C\u5982\u4F55\u63D0\u5347\u6D4B\u8BD5\u7684\u6548\u7387\u5462\uFF1F\u80AF\u5B9A\u662F\u5E76\u884C\uFF0C\u6240\u4EE5\u4F60\u53EF\u4EE5\u7528\u5982\u4E0B\u7684\u63D2\u4EF6</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220901210830070.png" alt="image-20220901210830070"></p><p>\u770B\u4E0B\u76F8\u5173\u6D4B\u8BD5\u89E6\u53D1\u6309\u94AE\u548C\u8F93\u51FA\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220901210853830.png" alt="image-20220901210853830"></p><h3 id="_2-3-\u4EE3\u7801\u8986\u76D6\u7387" tabindex="-1"><a class="header-anchor" href="#_2-3-\u4EE3\u7801\u8986\u76D6\u7387" aria-hidden="true">#</a> 2.3 \u4EE3\u7801\u8986\u76D6\u7387</h3><p>\u5982\u4F55\u5FEB\u901F\u770B\u672C\u5730\u4EE3\u7801\u6D4B\u8BD5\u8986\u76D6\u7387\u5462\uFF1F</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220901210915853.png" alt="image-20220901210915853"></p><p>\u4EE3\u7801\u8986\u76D6\u7387</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220901210940253.png" alt="image-20220901210940253"></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220901210954286.png" alt="image-20220901210954286"></p><h3 id="_2-4-profile" tabindex="-1"><a class="header-anchor" href="#_2-4-profile" aria-hidden="true">#</a> 2.4 Profile</h3><ul><li><strong>CPU Profile</strong></li></ul><p>Flame Graph</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220901211027435.png" alt="image-20220901211027435"></p><p>Call Tree</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220901211044053.png" alt="image-20220901211044053"></p><p>Method List</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220901211101288.png" alt="image-20220901211101288"></p><ul><li><strong>Allocation Profile</strong></li></ul><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220901211126260.png" alt="image-20220901211126260"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,44),u={href:"https://pdai.tech/md/develop/ut/dev-ut-x-junit-idea.html",target:"_blank",rel:"noopener noreferrer"},r=n("strong",null,"\u5355\u5143\u6D4B\u8BD5 - IDEA\u4E0B\u5355\u5143\u6D4B\u8BD5\u8BE6\u89E3",-1);function d(k,m){const s=c("ExternalLinkIcon");return p(),e("div",null,[l,n("p",null,[n("a",u,[r,t(s)])])])}const g=a(i,[["render",d],["__file","dev-ut-x-junit-idea.html.vue"]]);export{g as default};
