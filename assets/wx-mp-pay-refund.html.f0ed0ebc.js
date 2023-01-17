import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as e,a as n,b as c,d as o,f as s,r as l}from"./app.f5d9e013.js";const u={},i=s(`<h1 id="\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u9000\u6B3E\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u9000\u6B3E\u5B9E\u73B0" aria-hidden="true">#</a> \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u9000\u6B3E\u5B9E\u73B0</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u5546\u57CE\u4E2D\u6709\u4EA4\u6613\uFF0C\u5C31\u6709\u9000\u8D27\u3002\u90A3\u4E48\u9000\u8D27\u5B8C\u6210\u540E\uFF0C\u6211\u4EEC\u5982\u4F55\u5B9E\u73B0\u9000\u6B3E\u5462\uFF1F</p><h2 id="_2-\u9000\u8D27\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-\u9000\u8D27\u6D41\u7A0B" aria-hidden="true">#</a> 2. \u9000\u8D27\u6D41\u7A0B</h2><ol><li><p>\u7528\u6237\u5728\u8BA2\u5355\u4E2D\u9009\u62E9\u8981\u9000\u8D27\u7684\u8BA2\u5355</p></li><li><p>\u9009\u62E9\u8981\u9000\u8D27\u7684\u5546\u54C1\uFF0C\u586B\u5199\u9000\u8D27\u57FA\u672C\u4FE1\u606F\uFF08\u9000\u8D27\u5546\u54C1id\uFF0C\u9000\u8D27\u6570\u91CF\uFF0C\u4EF7\u683C\uFF09</p></li><li><p>\u540E\u53F0\u5BF9\u9000\u8D27\u5546\u54C1\u8FDB\u884C\u5BA1\u6279</p></li><li><p>\u5BA1\u6279\u901A\u8FC7\uFF0C\u7528\u6237\u5C06\u5546\u54C1\u8FDB\u884C\u9000\u8D27</p><ol><li>\u8BBE\u7F6E\u9000\u6B3E\u91D1\u989D\uFF08\u5E76\u4E0D\u4E00\u5B9A\u662F\u8BA2\u5355\u539F\u4EF7\uFF0C\u53EA\u8981\u5C0F\u4E8E\u652F\u4ED8\u603B\u4EF7\u5C31\u53EF\u4EE5\uFF09</li></ol></li><li><p>\u7528\u6237\u5C06\u5546\u54C1\u9000\u56DE\u540E\uFF0C\u540E\u53F0\u64CD\u4F5C\u5B8C\u6210\u9000\u8D27</p><ol><li>\u6B64\u65F6\u5C06\u89E6\u53D1\u5FAE\u4FE1\u9000\u6B3E</li></ol></li></ol><h2 id="_3-\u5FAE\u4FE1\u9000\u8D27\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_3-\u5FAE\u4FE1\u9000\u8D27\u5B9E\u73B0" aria-hidden="true">#</a> 3. \u5FAE\u4FE1\u9000\u8D27\u5B9E\u73B0</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
            <span class="token comment">// \u5FAE\u4FE1\u9000\u6B3E</span>
            <span class="token class-name">OmsOrderReturnApplyResult</span> item <span class="token operator">=</span> <span class="token function">getItem</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">BigDecimal</span> returnAmount <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">getReturnAmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">BigDecimal</span> totalFee <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">getProductRealPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">getProductCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">WxPayService</span> wxPayService <span class="token operator">=</span> <span class="token class-name">WxPayConfiguration</span><span class="token punctuation">.</span><span class="token function">getPayService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">WxPayRefundRequest</span> refundRequest <span class="token operator">=</span> <span class="token class-name">WxPayRefundRequest</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">outRefundNo</span><span class="token punctuation">(</span>id<span class="token operator">+</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">outTradeNo</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">getOrderSn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">totalFee</span><span class="token punctuation">(</span>totalFee<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">refundFee</span><span class="token punctuation">(</span>returnAmount<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">WxPayRefundResult</span> refund <span class="token operator">=</span> wxPayService<span class="token punctuation">.</span><span class="token function">refund</span><span class="token punctuation">(</span>refundRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
                log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;\u9000\u6B3E\u7ED3\u679C\uFF1A&quot;</span><span class="token operator">+</span>refund<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">WxPayException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;\u9000\u6B3E\u5931\u8D25\uFF0C{}&quot;</span><span class="token operator">+</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u76F8\u5173\u914D\u7F6E-\u524D\u7F6E\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-\u76F8\u5173\u914D\u7F6E-\u524D\u7F6E\u6761\u4EF6" aria-hidden="true">#</a> 4. \u76F8\u5173\u914D\u7F6E\uFF08\u524D\u7F6E\u6761\u4EF6\uFF09</h2><h3 id="_4-1-\u8BC1\u4E66\u6587\u4EF6\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#_4-1-\u8BC1\u4E66\u6587\u4EF6\u4E0B\u8F7D" aria-hidden="true">#</a> 4.1 \u8BC1\u4E66\u6587\u4EF6\u4E0B\u8F7D</h3>`,9),k={href:"https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=4_3",target:"_blank",rel:"noopener noreferrer"},r=s(`<p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220327221200412.png" alt="image-20220327221200412"></p><p>\u672A\u6B63\u786E\u914D\u7F6E\u4F1A\u51FA\u73B0\u5982\u4E0B\u63D0\u793A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>\u3010\u8BF7\u6C42\u5730\u5740\u3011\uFF1Ahttps://api.mch.weixin.qq.com/secapi/pay/refund
\u3010\u8BF7\u6C42\u6570\u636E\u3011\uFF1A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xml</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appid</span><span class="token punctuation">&gt;</span></span>wxcf0e67a387408a94<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appid</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mch_id</span><span class="token punctuation">&gt;</span></span>1623109465<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mch_id</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nonce_str</span><span class="token punctuation">&gt;</span></span>1648388313318<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nonce_str</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sign</span><span class="token punctuation">&gt;</span></span>E0CCE2B1BC9ECC8C8FC8BC756D817547<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sign</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>out_trade_no</span><span class="token punctuation">&gt;</span></span>2022032701null000002<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>out_trade_no</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>out_refund_no</span><span class="token punctuation">&gt;</span></span>29test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>out_refund_no</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>total_fee</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>total_fee</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>refund_fee</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>refund_fee</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>op_user_id</span><span class="token punctuation">&gt;</span></span>1623109465<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>op_user_id</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>xml</span><span class="token punctuation">&gt;</span></span>
\u3010\u5F02\u5E38\u4FE1\u606F\u3011\uFF1A\u8BF7\u786E\u4FDD\u8BC1\u4E66\u6587\u4EF6\u5730\u5740keyPath\u5DF2\u914D\u7F6E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220328202045671.png" alt="image-20220328202045671"></p>`,4);function d(m,g){const a=l("ExternalLinkIcon");return p(),e("div",null,[i,n("p",null,[n("a",k,[c("\u5FAE\u4FE1\u652F\u4ED8\u5B98\u65B9\u6587\u6863"),o(a)])]),r])}const h=t(u,[["render",d],["__file","wx-mp-pay-refund.html.vue"]]);export{h as default};
