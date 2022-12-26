import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.ea05b52c.js";const p={},e=t(`<h1 id="vuerouter\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#vuerouter\u6982\u5FF5" aria-hidden="true">#</a> VueRouter\u6982\u5FF5</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u5B98\u65B9\u6587\u6863\u4ECB\u7ECD\u5982\u4E0B</p><blockquote><p>Vue Router \u662F Vue.js \u5B98\u65B9\u7684\u8DEF\u7531\u7BA1\u7406\u5668\uFF0C\u9002\u5408\u7528\u4E8E\u6784\u5EFA\u5355\u9875\u9762\u5E94\u7528\u3002\u5305\u542B\u7684\u529F\u80FD\u6709\uFF1A</p><ul><li>\u5D4C\u5957\u7684\u8DEF\u7531/\u89C6\u56FE\u8868</li><li>\u6A21\u5757\u5316\u7684\u3001\u57FA\u4E8E\u7EC4\u4EF6\u7684\u8DEF\u7531\u914D\u7F6E</li><li>\u8DEF\u7531\u53C2\u6570\u3001\u67E5\u8BE2\u3001\u901A\u914D\u7B26</li><li>\u57FA\u4E8E Vue.js \u8FC7\u6E21\u7CFB\u7EDF\u7684\u89C6\u56FE\u8FC7\u6E21\u6548\u679C</li><li>\u7EC6\u7C92\u5EA6\u7684\u5BFC\u822A\u63A7\u5236</li><li>\u5E26\u6709\u81EA\u52A8\u6FC0\u6D3B\u7684 CSS class \u7684\u94FE\u63A5</li><li>HTML5 \u5386\u53F2\u6A21\u5F0F\u6216 hash \u6A21\u5F0F\uFF0C\u5728 IE9 \u4E2D\u81EA\u52A8\u964D\u7EA7</li><li>\u81EA\u5B9A\u4E49\u7684\u6EDA\u52A8\u6761\u884C\u4E3A</li></ul></blockquote><p>\u7B80\u800C\u8A00\u4E4B\uFF0C\u5C31\u662Fvue\u7684\u5B98\u65B9\u8DEF\u7531\u63D2\u4EF6\uFF0C\u7528\u4E8E\u6784\u5EFA\u5355\u9875\u9762\u5E94\u7528\u3002</p><h3 id="_1-1-\u8DEF\u7531\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_1-1-\u8DEF\u7531\u7684\u4F5C\u7528" aria-hidden="true">#</a> 1.1 \u8DEF\u7531\u7684\u4F5C\u7528</h3><p>vue\u7684\u5355\u9875\u9762\u5E94\u7528\u662F\u57FA\u4E8E\u8DEF\u7531\u548C\u7EC4\u4EF6\u7684\uFF0C\u8DEF\u7531\u7528\u4E8E<strong>\u8BBE\u5B9A\u8BBF\u95EE\u8DEF\u5F84\uFF0C\u5E76\u5C06\u8DEF\u5F84\u548C\u7EC4\u4EF6\u6620\u5C04\u8D77\u6765</strong>\u3002</p><blockquote><p>\u4F20\u7EDF\u7684\u9875\u9762\u5E94\u7528\uFF0C\u662F\u7528\u4E00\u4E9B\u8D85\u94FE\u63A5\u6765\u5B9E\u73B0\u9875\u9762\u5207\u6362\u548C\u8DF3\u8F6C\u7684\u3002<strong>\u5728vue-router\u5355\u9875\u9762\u5E94\u7528\u4E2D\uFF0C\u5219\u662F\u8DEF\u5F84\u4E4B\u95F4\u7684\u5207\u6362\uFF0C\u4E5F\u5C31\u662F\u7EC4\u4EF6\u7684\u5207\u6362</strong>\u3002</p></blockquote><h3 id="_1-2-\u5355\u9875\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5355\u9875\u5E94\u7528" aria-hidden="true">#</a> 1.2 \u5355\u9875\u5E94\u7528</h3><p>\u76F8\u6BD4\u8D77\u591A\u9875\u5E94\u7528\uFF0C\u5355\u9875\u5E94\u7528\u6709\u5982\u4E0B\u8FD9\u4E9B\u597D\u5904\uFF1A</p><ul><li>\u65E0\u9700\u91CD\u590D\u52A0\u8F7D\u516C\u5171\u8D44\u6E90</li><li>\u9875\u9762\u5207\u6362\u901F\u5EA6\u5FEB\uFF0C\u7528\u6237\u4F53\u9A8C\u597D</li><li>\u9875\u9762\u5207\u6362\u53EF\u4EE5\u5B9E\u73B0\u8F6C\u573A\u52A8\u753B</li></ul><p>\u867D\u7136\u5355\u9875\u5E94\u7528\u6709\u7740\u96BE\u4EE5SEO\u3001\u5F00\u53D1\u96BE\u5EA6\u66F4\u52A0\u5927\u7684\u7F3A\u70B9\uFF0C\u4F46\u662F\u76F8\u6BD4\u4E8E\u4F20\u7EDF\u7684\u591A\u9875\u5E94\u7528\u6709\u7740\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\u4E0A\uFF0C\u76EE\u524D\u5355\u9875\u5E94\u7528\u5DF2\u7ECF\u662FWeb\u5E94\u7528\u5F00\u53D1\u7684\u6F6E\u6D41</p><h2 id="_2-\u57FA\u7840\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a> 2. \u57FA\u7840\u4F7F\u7528</h2><ol><li><p>\u65B0\u5EFAvue\u5E94\u7528</p></li><li><p>\u65B0\u5EFAview\u6587\u4EF6\u5939\uFF0C\u5E76\u6DFB\u52A0login.vue\u548Chome.vue\u4E24\u4E2A\u6587\u4EF6</p><ol><li><p>login.vue</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8BF7\u8F93\u5165\u7528\u6237\u540D<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8BF7\u8F93\u5165\u5BC6\u7801<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>login<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u767B\u5F55<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8BBE\u7F6E\u767B\u5F55\u6210\u529F\u72B6\u6001</span>
      sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;login&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u8DEF\u7531\u8DF3\u8F6C</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;home&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Home.vue</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\u9996\u9875<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>\u65B0\u5EFArouter/index.js\uFF0C\u5E76\u6DFB\u52A0\u5982\u4E0B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> home <span class="token keyword">from</span> <span class="token string">&quot;../view/home.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> login <span class="token keyword">from</span> <span class="token string">&quot;../view/login.vue&quot;</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Router<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;history&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u914D\u7F6E\u5BF9\u5E94\u8DEF\u5F84\u4E0B\u5E94\u8BE5\u52A0\u8F7D\u7684\u7EC4\u4EF6</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> login
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/login&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;login&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> login
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/home&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;home&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> home
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6DFB\u52A0\u8DEF\u7531\u5B88\u536B\uFF0C\u5728\u8DEF\u7531\u8DF3\u8F6C\u4E4B\u524D\u6267\u884C</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5982\u679C\u662F\u8981\u53BB\u767B\u5F55\u9875\u9762\uFF0C\u5219\u76F4\u63A5\u5141\u8BB8</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token string">&quot;&quot;</span> <span class="token operator">||</span> to<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sessionStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&quot;login&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> isLogin <span class="token operator">=</span> sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;login&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5224\u65AD\u7528\u6237\u662F\u5426\u767B\u5F55</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isLogin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6CA1\u767B\u5F55\u5219\u8DF3\u8F6C\u767B\u5F55\u9875</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/login&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5141\u8BB8\u8DF3\u8F6C</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5728main.js\u4E2D\u5F15\u5165router</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&quot;./router&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5728App.vue\u4E2D\u5F15\u5165Vue-router\u7EC4\u4EF6</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5F53\u6211\u4EEC\u5728\u53F3\u4FA7\u76F4\u63A5\u8F93\u5165/home\u8DEF\u5F84\u8BBF\u95EE\u65F6\uFF0C\u7531\u4E8E\u6CA1\u6709\u767B\u5F55\uFF0C\u76F4\u63A5\u8DF3\u8F6C\u5230\u4E86\u767B\u5F55\u9875\u9762</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210527191603740.png" alt="image-20210527191603740"></p></li><li><p>\u5F53\u8F93\u5165\u7528\u6237\u540D\u3001\u5BC6\u7801\u767B\u5F55\u540E\uFF0C\u5219\u8DF3\u8F6C\u5230\u4E86\u9996\u9875</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210527191625999.png" alt="image-20210527191625999"></p></li></ol>`,14),o=[e];function l(c,i){return s(),a("div",null,o)}const k=n(p,[["render",l],["__file","vuerouter-overview.html.vue"]]);export{k as default};
