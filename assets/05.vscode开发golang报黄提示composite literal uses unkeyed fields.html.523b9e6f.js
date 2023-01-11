import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as l,a as e,b as s,d as a,f as p,r as c}from"./app.0eb3f08c.js";const i={},r=p(`<h1 id="_05-vscode\u5F00\u53D1golang\u62A5\u9EC4\u63D0\u793Acomposite-literal-uses-unkeyed-fields" tabindex="-1"><a class="header-anchor" href="#_05-vscode\u5F00\u53D1golang\u62A5\u9EC4\u63D0\u793Acomposite-literal-uses-unkeyed-fields" aria-hidden="true">#</a> 05.vscode\u5F00\u53D1golang\u62A5\u9EC4\u63D0\u793Acomposite literal uses unkeyed fields</h1><p>Golang \u4E2D\u4F7F\u7528 Mongo \u65F6\u7ECF\u5E38\u4F1A\u5199</p><p>::: v-pre <code>bson.D{{&quot;key&quot;, &quot;value&quot;}}</code> \u8FD9\u79CD\u5185\u5BB9\uFF0C\u7136\u540E VS Code \u4E2D\u5C31\u4F1A\u5F97\u5230\u5927\u91CFPROBLEMS\uFF0C\u5E76\u4E14\u8001\u6709\u6CE2\u6D6A\u7EBF\u7684\u63D0\u793A\uFF0C\u6709\u4E24\u79CD\u65B9\u5F0F\u80FD\u591F\u89E3\u51B3\uFF0C\u4E00\u79CD\u662F\u5C06\u7ED3\u6784\u4F53\u8865\u5168\uFF0C\u4E00\u79CD\u662F\u7981\u7528\u6389\u8FD9\u79CD\u68C0\u6D4B\u3002</p><h2 id="\u8865\u5168\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#\u8865\u5168\u7ED3\u6784\u4F53" aria-hidden="true">#</a> \u8865\u5168\u7ED3\u6784\u4F53</h2><p>\u8865\u5168\u7ED3\u6784\u4F53\u5C31\u662F\u5C06\u5982\u4E0A\u7684bson\u5199\u6210\u5982\u4E0B\u65B9\u5F0F\u5C31\u4E0D\u4F1A\u62A5\u4E86\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>bson<span class="token punctuation">.</span>D<span class="token punctuation">{</span><span class="token punctuation">{</span>Key<span class="token punctuation">:</span> <span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> Value<span class="token punctuation">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::</p><p>\u8FD9\u79CD\u5199\u6CD5\u56FA\u7136\u53EF\u4EE5\uFF0C\u4E0D\u8FC7\u5F53\u5D4C\u5957\u591A\u7684\u65F6\u5019\uFF0C\u5199\u8D77\u6765\u4F1A\u6BD4\u8F83\u8D39\u52B2\u513F\uFF0C\u56E0\u6B64\u8FD9\u91CC\u63A8\u8350\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u3002</p><h2 id="\u5173\u95ED\u68C0\u6D4B" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED\u68C0\u6D4B" aria-hidden="true">#</a> \u5173\u95ED\u68C0\u6D4B</h2><p>\u901A\u8FC7\u547D\u4EE4\u884C\u6253\u5F00<code>setting.json</code>\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2022/01/d6fa4a9f2f285f91.png" alt="imags"></p><p>\u7136\u540E\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code> <span class="token property">&quot;gopls&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;analyses&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;composites&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span> <span class="token comment">// \u5173\u95EDMongoDB\u7684composites\u5206\u6790</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u518D\u56DE\u6765\u770B\u68C0\u6D4B\u5C31\u4E0D\u4F1A\u6709\u8FD9\u4E2A\u63D0\u793A\u4E86\u3002</p>`,14),u={href:"https://blog.51cto.com/u_15310543/4753519",target:"_blank",rel:"noopener noreferrer"},d={href:"https://stackoverflow.com/questions/54548441/composite-literal-uses-unkeyed-fields",target:"_blank",rel:"noopener noreferrer"};function k(_,m){const n=c("ExternalLinkIcon");return t(),l("div",null,[r,e("ul",null,[e("li",null,[s("\u53C2\u8003\uFF1A "),e("ul",null,[e("li",null,[e("a",u,[s("https://blog.51cto.com/u_15310543/4753519"),a(n)])]),e("li",null,[e("a",d,[s("Composite literal uses unkeyed fields"),a(n)])])])])])])}const f=o(i,[["render",k],["__file","05.vscode\u5F00\u53D1golang\u62A5\u9EC4\u63D0\u793Acomposite literal uses unkeyed fields.html.vue"]]);export{f as default};
