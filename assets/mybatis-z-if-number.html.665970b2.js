import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,a,b as p,d as o,f as c,r as l}from"./app.837a781d.js";const i={},u=c(`<h1 id="mybatis\u4E2Dif\u5173\u4E8E\u6570\u5B57\u7684\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#mybatis\u4E2Dif\u5173\u4E8E\u6570\u5B57\u7684\u5224\u65AD" aria-hidden="true">#</a> mybatis\u4E2Dif\u5173\u4E8E\u6570\u5B57\u7684\u5224\u65AD</h1><p>mybatis \u4E2D\u5173\u4E8E\u6570\u5B57\u7684\u5224\u65AD\uFF0C\u5982\u679C\u76F4\u63A5\u5199<code>&lt;if test = &quot;xx == &#39;1&#39; &quot;&gt; &lt;/if&gt;</code>,\u8FD9\u6837\u5373\u4F7F\u662F<code>xx==\u20181\u2019</code>\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u4E5F\u4E0D\u4F1A\u8FDB\u5165\u5224\u65AD\u7684\u3002\u5FC5\u987B\u5982\u4E0B\u5199\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getByNameAndPwd<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>String<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>MemberResult<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        select
           *
        from \`member\`
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isMerch != &#39;&#39; and isMerch == &#39;1&#39;.toString() <span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
            where  \`mobile\` = #{name} 
            and \`password\` = #{password}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isMerch != &#39;&#39; and isMerch == &#39;2&#39;.toString() <span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
            where  \`name\` = #{name}
            and \`password\` = #{password}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>   
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,4),r={href:"https://blog.csdn.net/xinyuebaihe/article/details/86437431",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const n=l("ExternalLinkIcon");return t(),e("div",null,[u,a("p",null,[a("a",r,[p("mybatis \u4E2Dif\u5173\u4E8E\u6570\u5B57\u7684\u5224\u65AD"),o(n)])])])}const g=s(i,[["render",d],["__file","mybatis-z-if-number.html.vue"]]);export{g as default};
