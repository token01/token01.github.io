import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,a as n,b as s,d as e,f as c,r as u}from"./app.55a3f9ac.js";const l={},i=n("h1",{id:"mall\u4E2D\u5546\u54C1\u8BBE\u8BA1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mall\u4E2D\u5546\u54C1\u8BBE\u8BA1","aria-hidden":"true"},"#"),s(" mall\u4E2D\u5546\u54C1\u8BBE\u8BA1")],-1),k={href:"http://www.macrozheng.com/#/README",target:"_blank",rel:"noopener noreferrer"},r=c(`<h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><h2 id="_2-\u63A5\u53E3\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_2-\u63A5\u53E3\u8BBE\u8BA1" aria-hidden="true">#</a> 2. \u63A5\u53E3\u8BBE\u8BA1</h2><h3 id="_2-1-\u83B7\u53D6\u5546\u54C1\u8BE6\u60C5" tabindex="-1"><a class="header-anchor" href="#_2-1-\u83B7\u53D6\u5546\u54C1\u8BE6\u60C5" aria-hidden="true">#</a> 2.1 \u83B7\u53D6\u5546\u54C1\u8BE6\u60C5</h3><ol><li>\u83B7\u53D6\u5546\u54C1\u7684\u57FA\u7840\u4FE1\u606F</li><li>\u83B7\u53D6\u54C1\u724C\u4FE1\u606F</li><li>\u83B7\u53D6\u5546\u54C1\u5C5E\u6027\u4FE1\u606F</li><li>\u83B7\u53D6\u5546\u54C1SKU\u5E93\u5B58\u4FE1\u606F</li><li>\u5546\u54C1\u9636\u68AF\u4EF7\u683C\u8BBE\u7F6E</li><li>\u5546\u54C1\u6EE1\u51CF\u4EF7\u683C\u8BBE\u7F6E</li><li>\u5546\u54C1\u53EF\u7528\u4F18\u60E0\u5238</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">PmsPortalProductDetail</span> <span class="token function">detail</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">PmsPortalProductDetail</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PmsPortalProductDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//\u83B7\u53D6\u5546\u54C1\u4FE1\u606F</span>
    <span class="token class-name">PmsProduct</span> product <span class="token operator">=</span> productMapper<span class="token punctuation">.</span><span class="token function">selectByPrimaryKey</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    result<span class="token punctuation">.</span><span class="token function">setProduct</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//\u83B7\u53D6\u54C1\u724C\u4FE1\u606F</span>
    <span class="token class-name">PmsBrand</span> brand <span class="token operator">=</span> brandMapper<span class="token punctuation">.</span><span class="token function">selectByPrimaryKey</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getBrandId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    result<span class="token punctuation">.</span><span class="token function">setBrand</span><span class="token punctuation">(</span>brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//\u83B7\u53D6\u5546\u54C1\u5C5E\u6027\u4FE1\u606F</span>
    <span class="token class-name">Long</span> productAttributeCategoryId <span class="token operator">=</span> product<span class="token punctuation">.</span><span class="token function">getProductAttributeCategoryId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>productAttributeCategoryId <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">PmsProductAttributeExample</span> attributeExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PmsProductAttributeExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        attributeExample<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">andProductAttributeCategoryIdEqualTo</span><span class="token punctuation">(</span>productAttributeCategoryId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PmsProductAttribute</span><span class="token punctuation">&gt;</span></span> productAttributeList <span class="token operator">=</span> productAttributeMapper<span class="token punctuation">.</span><span class="token function">selectByExample</span><span class="token punctuation">(</span>attributeExample<span class="token punctuation">)</span><span class="token punctuation">;</span>
        result<span class="token punctuation">.</span><span class="token function">setProductAttributeList</span><span class="token punctuation">(</span>productAttributeList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u83B7\u53D6\u5546\u54C1\u5C5E\u6027\u503C\u4FE1\u606F</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">CollUtil</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>productAttributeList<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> attributeIds <span class="token operator">=</span> productAttributeList<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">PmsProductAttribute</span><span class="token operator">::</span><span class="token function">getId</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">PmsProductAttributeValueExample</span> attributeValueExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PmsProductAttributeValueExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            attributeValueExample<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">andProductIdEqualTo</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">andProductAttributeIdIn</span><span class="token punctuation">(</span>attributeIds<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PmsProductAttributeValue</span><span class="token punctuation">&gt;</span></span> productAttributeValueList <span class="token operator">=</span> productAttributeValueMapper<span class="token punctuation">.</span><span class="token function">selectByExample</span><span class="token punctuation">(</span>attributeValueExample<span class="token punctuation">)</span><span class="token punctuation">;</span>
            result<span class="token punctuation">.</span><span class="token function">setProductAttributeValueList</span><span class="token punctuation">(</span>productAttributeValueList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  

        <span class="token comment">//\u83B7\u53D6\u5546\u54C1SKU\u5E93\u5B58\u4FE1\u606F</span>
        <span class="token class-name">PmsSkuStockExample</span> skuExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PmsSkuStockExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        skuExample<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">andProductIdEqualTo</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PmsSkuStock</span><span class="token punctuation">&gt;</span></span> skuStockList <span class="token operator">=</span> skuStockMapper<span class="token punctuation">.</span><span class="token function">selectByExample</span><span class="token punctuation">(</span>skuExample<span class="token punctuation">)</span><span class="token punctuation">;</span>
        result<span class="token punctuation">.</span><span class="token function">setSkuStockList</span><span class="token punctuation">(</span>skuStockList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5546\u54C1\u9636\u68AF\u4EF7\u683C\u8BBE\u7F6E</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getPromotionType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">PmsProductLadderExample</span> ladderExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PmsProductLadderExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ladderExample<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">andProductIdEqualTo</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PmsProductLadder</span><span class="token punctuation">&gt;</span></span> productLadderList <span class="token operator">=</span> productLadderMapper<span class="token punctuation">.</span><span class="token function">selectByExample</span><span class="token punctuation">(</span>ladderExample<span class="token punctuation">)</span><span class="token punctuation">;</span>
            result<span class="token punctuation">.</span><span class="token function">setProductLadderList</span><span class="token punctuation">(</span>productLadderList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u5546\u54C1\u6EE1\u51CF\u4EF7\u683C\u8BBE\u7F6E</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getPromotionType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">PmsProductFullReductionExample</span> fullReductionExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PmsProductFullReductionExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            fullReductionExample<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">andProductIdEqualTo</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PmsProductFullReduction</span><span class="token punctuation">&gt;</span></span> productFullReductionList <span class="token operator">=</span> productFullReductionMapper<span class="token punctuation">.</span><span class="token function">selectByExample</span><span class="token punctuation">(</span>fullReductionExample<span class="token punctuation">)</span><span class="token punctuation">;</span>
            result<span class="token punctuation">.</span><span class="token function">setProductFullReductionList</span><span class="token punctuation">(</span>productFullReductionList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u5546\u54C1\u53EF\u7528\u4F18\u60E0\u5238</span>
        result<span class="token punctuation">.</span><span class="token function">setCouponList</span><span class="token punctuation">(</span>portalProductDao<span class="token punctuation">.</span><span class="token function">getAvailableCouponList</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>product<span class="token punctuation">.</span><span class="token function">getProductCategoryId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-1-\u83B7\u53D6\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u83B7\u53D6\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868" aria-hidden="true">#</a> 2.1.1 \u83B7\u53D6\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868</h4><p>\u83B7\u53D6\u5177\u4F53\u5546\u54C1\u7684\u53EF\u7528\u4F18\u60E0\u5238\uFF0C</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token operator">&lt;</span><span class="token keyword">select</span> id<span class="token operator">=</span><span class="token string">&quot;getAvailableCouponList&quot;</span> resultMap<span class="token operator">=</span><span class="token string">&quot;com.macro.mall.mapper.SmsCouponMapper.BaseResultMap&quot;</span><span class="token operator">&gt;</span>
    <span class="token keyword">SELECT</span> <span class="token operator">*</span>
    <span class="token keyword">FROM</span> sms_coupon
    <span class="token keyword">WHERE</span> use_type <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token operator">AND</span> start_time <span class="token operator">&amp;</span>lt<span class="token punctuation">;</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token operator">AND</span> end_time <span class="token operator">&amp;</span>gt<span class="token punctuation">;</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">UNION</span>
    <span class="token punctuation">(</span>
        <span class="token keyword">SELECT</span> c<span class="token punctuation">.</span><span class="token operator">*</span>
        <span class="token keyword">FROM</span> sms_coupon_product_category_relation cpc
                 <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> sms_coupon c <span class="token keyword">ON</span> cpc<span class="token punctuation">.</span>coupon_id <span class="token operator">=</span> c<span class="token punctuation">.</span>id
        <span class="token keyword">WHERE</span> c<span class="token punctuation">.</span>use_type <span class="token operator">=</span> <span class="token number">1</span>
          <span class="token operator">AND</span> c<span class="token punctuation">.</span>start_time <span class="token operator">&amp;</span>lt<span class="token punctuation">;</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token operator">AND</span> c<span class="token punctuation">.</span>end_time <span class="token operator">&amp;</span>gt<span class="token punctuation">;</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token operator">AND</span> cpc<span class="token punctuation">.</span>product_category_id <span class="token operator">=</span> <span class="token comment">#{productCategoryId}</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">UNION</span>
    <span class="token punctuation">(</span>
        <span class="token keyword">SELECT</span> c<span class="token punctuation">.</span><span class="token operator">*</span>
        <span class="token keyword">FROM</span> sms_coupon_product_relation cp
                 <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> sms_coupon c <span class="token keyword">ON</span> cp<span class="token punctuation">.</span>coupon_id <span class="token operator">=</span> c<span class="token punctuation">.</span>id
        <span class="token keyword">WHERE</span> c<span class="token punctuation">.</span>use_type <span class="token operator">=</span> <span class="token number">2</span>
          <span class="token operator">AND</span> c<span class="token punctuation">.</span>start_time <span class="token operator">&amp;</span>lt<span class="token punctuation">;</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token operator">AND</span> c<span class="token punctuation">.</span>end_time <span class="token operator">&amp;</span>gt<span class="token punctuation">;</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token operator">AND</span> cp<span class="token punctuation">.</span>product_id <span class="token operator">=</span> <span class="token comment">#{productId}</span>
    <span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">select</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function d(m,v){const a=u("ExternalLinkIcon");return p(),o("div",null,[i,n("blockquote",null,[n("p",null,[s("\u8BE5\u7BC7\u6587\u7AE0\u4E3B\u8981\u53C2\u8003"),n("a",k,[s("mall\u5B98\u65B9\u6587\u6863"),e(a)]),s("\uFF0C\u5E76\u7ED3\u5408\u81EA\u5DF1\u7684\u4F7F\u7528\u611F\u53D7\u505A\u7684\u4E00\u4E9B\u7B14\u8BB0")])]),r])}const P=t(l,[["render",d],["__file","mall-product.html.vue"]]);export{P as default};
