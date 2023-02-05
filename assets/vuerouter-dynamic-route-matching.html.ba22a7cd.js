import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a,b as r,d as o,f as p,r as i}from"./app.df1d0035.js";const c={},l=p(`<h1 id="vue-router\u52A8\u6001\u8DEF\u7531\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#vue-router\u52A8\u6001\u8DEF\u7531\u5339\u914D" aria-hidden="true">#</a> Vue Router\u52A8\u6001\u8DEF\u7531\u5339\u914D</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><blockquote><p>\u6211\u4EEC\u7ECF\u5E38\u9700\u8981\u628A\u67D0\u79CD\u6A21\u5F0F\u5339\u914D\u5230\u7684\u6240\u6709\u8DEF\u7531\uFF0C<strong>\u5168\u90FD\u6620\u5C04\u5230\u540C\u4E2A\u7EC4\u4EF6</strong></p></blockquote><p>n \u4E2Aurl\u5730\u5740\uFF0C\u6620\u5C04\u5230\u901A\u8FC7\u7EC4\u4EF6</p><h2 id="_2-\u52A8\u6001\u8DEF\u5F84\u53C2\u6570-\u5192\u53F7\u5F00\u5934" tabindex="-1"><a class="header-anchor" href="#_2-\u52A8\u6001\u8DEF\u5F84\u53C2\u6570-\u5192\u53F7\u5F00\u5934" aria-hidden="true">#</a> 2. \u52A8\u6001\u8DEF\u5F84\u53C2\u6570\uFF08\u5192\u53F7\u5F00\u5934\uFF09</h2><p>\u6211\u4EEC\u6709\u4E00\u4E2A <code>User</code> \u7EC4\u4EF6\uFF0C\u5BF9\u4E8E\u6240\u6709 ID \u5404\u4E0D\u76F8\u540C\u7684\u7528\u6237\uFF0C\u90FD\u8981\u4F7F\u7528\u8FD9\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\u3002\u90A3\u4E48\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728 <code>vue-router</code> \u7684\u8DEF\u7531\u8DEF\u5F84\u4E2D\u4F7F\u7528\u201C\u52A8\u6001\u8DEF\u5F84\u53C2\u6570\u201D(dynamic segment) \u6765\u8FBE\u5230\u8FD9\u4E2A\u6548\u679C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;User&lt;/div&gt;&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// \u52A8\u6001\u8DEF\u5F84\u53C2\u6570 \u4EE5\u5192\u53F7\u5F00\u5934</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> User <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u5462\uFF0C\u50CF <code>/user/foo</code> \u548C <code>/user/bar</code> \u90FD\u5C06\u6620\u5C04\u5230\u76F8\u540C\u7684\u8DEF\u7531\u3002</p><h3 id="_2-1-\u83B7\u53D6\u8DEF\u5F84\u53C2\u6570-route-params" tabindex="-1"><a class="header-anchor" href="#_2-1-\u83B7\u53D6\u8DEF\u5F84\u53C2\u6570-route-params" aria-hidden="true">#</a> 2.1 \u83B7\u53D6\u8DEF\u5F84\u53C2\u6570\uFF08$route.params\uFF09</h3><p>\u4E00\u4E2A\u201C\u8DEF\u5F84\u53C2\u6570\u201D\u4F7F\u7528\u5192\u53F7 <code>:</code> \u6807\u8BB0\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/user/:id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5F53\u5339\u914D\u5230\u4E00\u4E2A\u8DEF\u7531\u65F6\uFF0C\u53C2\u6570\u503C\u4F1A\u88AB\u8BBE\u7F6E\u5230 <code>this.$route.params</code>\uFF0C\u53EF\u4EE5\u5728\u6BCF\u4E2A\u7EC4\u4EF6\u5185\u4F7F\u7528\u3002\u4E8E\u662F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u66F4\u65B0 <code>User</code> \u7684\u6A21\u677F\uFF0C\u8F93\u51FA\u5F53\u524D\u7528\u6237\u7684 ID\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;User {{ $route.params.id }}&lt;/div&gt;&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u83B7\u53D6url\u67E5\u8BE2\u53C2\u6570-route-query" tabindex="-1"><a class="header-anchor" href="#_2-2-\u83B7\u53D6url\u67E5\u8BE2\u53C2\u6570-route-query" aria-hidden="true">#</a> 2.2 \u83B7\u53D6URL\u67E5\u8BE2\u53C2\u6570($route.query)</h3><p>\u4F8B\u5982</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/user?id=zsz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u83B7\u53D6\u53C2\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$route.query.id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3-\u83B7\u53D6hash\u503C-route-hash" tabindex="-1"><a class="header-anchor" href="#_2-3-\u83B7\u53D6hash\u503C-route-hash" aria-hidden="true">#</a> 2.3 \u83B7\u53D6hash\u503C\uFF08$route.hash\uFF09</h3><p>\u7528\u5F97\u504F\u5C11</p><h2 id="_3-\u54CD\u5E94-\u76D1\u542C-\u8DEF\u7531\u53C2\u6570\u7684\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#_3-\u54CD\u5E94-\u76D1\u542C-\u8DEF\u7531\u53C2\u6570\u7684\u53D8\u5316" aria-hidden="true">#</a> 3. \u54CD\u5E94\uFF08\u76D1\u542C\uFF09\u8DEF\u7531\u53C2\u6570\u7684\u53D8\u5316</h2><p>\u5F53\u4F7F\u7528\u8DEF\u7531\u53C2\u6570\u65F6\uFF0C\u4F8B\u5982\u4ECE <code>/user/foo</code> \u5BFC\u822A\u5230 <code>/user/bar</code>\uFF0C<strong>\u539F\u6765\u7684\u7EC4\u4EF6\u5B9E\u4F8B\u4F1A\u88AB\u590D\u7528</strong>\u3002\u56E0\u4E3A\u4E24\u4E2A\u8DEF\u7531\u90FD\u6E32\u67D3\u540C\u4E2A\u7EC4\u4EF6\uFF0C\u6BD4\u8D77\u9500\u6BC1\u518D\u521B\u5EFA\uFF0C\u590D\u7528\u5219\u663E\u5F97\u66F4\u52A0\u9AD8\u6548\u3002</p><p><strong>\u4E0D\u8FC7\uFF0C\u8FD9\u4E5F\u610F\u5473\u7740\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\u4E0D\u4F1A\u518D\u88AB\u8C03\u7528\uFF01\uFF01\uFF01</strong>\u3002</p><h3 id="_3-1-\u65B9\u68481-watch-\u76D1\u6D4B\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#_3-1-\u65B9\u68481-watch-\u76D1\u6D4B\u53D8\u5316" aria-hidden="true">#</a> 3.1 \u65B9\u68481\uFF1Awatch (\u76D1\u6D4B\u53D8\u5316\uFF09</h3><p>\u590D\u7528\u7EC4\u4EF6\u65F6\uFF0C\u60F3\u5BF9\u8DEF\u7531\u53C2\u6570\u7684\u53D8\u5316\u4F5C\u51FA\u54CD\u5E94\u7684\u8BDD\uFF0C\u4F60\u53EF\u4EE5\u7B80\u5355\u5730 watch (\u76D1\u6D4B\u53D8\u5316) <code>$route</code> \u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">$route</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5BF9\u8DEF\u7531\u53D8\u5316\u4F5C\u51FA\u54CD\u5E94...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-\u65B9\u68482-beforerouteupdate-\u5BFC\u822A\u5B88\u536B" tabindex="-1"><a class="header-anchor" href="#_3-2-\u65B9\u68482-beforerouteupdate-\u5BFC\u822A\u5B88\u536B" aria-hidden="true">#</a> 3.2 \u65B9\u68482\uFF1A<code>beforeRouteUpdate</code> \u5BFC\u822A\u5B88\u536B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span>
  <span class="token function">beforeRouteUpdate</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// react to route changes...</span>
    <span class="token comment">// don&#39;t forget to call next()</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u5339\u914D\u4EFB\u610F\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#_4-\u5339\u914D\u4EFB\u610F\u8DEF\u5F84" aria-hidden="true">#</a> 4. \u5339\u914D\u4EFB\u610F\u8DEF\u5F84</h2><p>\u5E38\u89C4\u53C2\u6570\u53EA\u4F1A\u5339\u914D\u88AB <code>/</code> \u5206\u9694\u7684 URL \u7247\u6BB5\u4E2D\u7684\u5B57\u7B26\u3002\u5982\u679C\u60F3\u5339\u914D<strong>\u4EFB\u610F\u8DEF\u5F84</strong>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26 (<code>*</code>)\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// \u4F1A\u5339\u914D\u6240\u6709\u8DEF\u5F84</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;*&#39;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token comment">// \u4F1A\u5339\u914D\u4EE5 \`/user-\` \u5F00\u5934\u7684\u4EFB\u610F\u8DEF\u5F84</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user-*&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528<em>\u901A\u914D\u7B26</em>\u8DEF\u7531\u65F6\uFF0C\u8BF7\u786E\u4FDD\u8DEF\u7531\u7684\u987A\u5E8F\u662F\u6B63\u786E\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\u542B\u6709<em>\u901A\u914D\u7B26</em>\u7684\u8DEF\u7531\u5E94\u8BE5\u653E\u5728\u6700\u540E\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,33),d={href:"https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96",target:"_blank",rel:"noopener noreferrer"};function u(v,m){const n=i("ExternalLinkIcon");return e(),t("div",null,[l,a("p",null,[a("a",d,[r("Vue\u5B98\u65B9\u6587\u6863"),o(n)])])])}const b=s(c,[["render",u],["__file","vuerouter-dynamic-route-matching.html.vue"]]);export{b as default};
