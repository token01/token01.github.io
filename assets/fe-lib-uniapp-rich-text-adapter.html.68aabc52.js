import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as r,a as e,b as n,d as l,f as d,r as s}from"./app.df1d0035.js";const c={},o=d(`<h1 id="uniapp\u5BCC\u6587\u672Crich-text\u56FE\u7247\u9002\u914D" tabindex="-1"><a class="header-anchor" href="#uniapp\u5BCC\u6587\u672Crich-text\u56FE\u7247\u9002\u914D" aria-hidden="true">#</a> uniapp\u5BCC\u6587\u672Crich-text\u56FE\u7247\u9002\u914D</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u6211\u4EEC\u5546\u54C1\u8BE6\u60C5\u9875\u7B49\u573A\u666F\uFF0C\u4F7F\u7528uniapp\u5BCC\u6587\u672Crich-text\u5C55\u793A\u65F6\uFF0C\u56FE\u7247\u53EF\u80FD\u4F1A\u56E0\u56FE\u7247\u539F\u59CB\u5C3A\u5BF8\u8FC7\u5927\uFF0C\u5BFC\u81F4\u65E0\u6CD5\u6B63\u5E38\u6E32\u67D3\u7B49\u95EE\u9898</p><h2 id="_2-\u89E3\u51B3\u529E\u6848" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u51B3\u529E\u6848" aria-hidden="true">#</a> 2. \u89E3\u51B3\u529E\u6848</h2><p>\u6211\u4EEC\u5C06img \u6807\u7B7E\u7684\u6837\u5F0F\u505A\u4E2A\u66FF\u6362\uFF0C\u8BBE\u7F6E\u6700\u5927\u5BBD\u5EA6\u4E3A100%</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>parsedHtml() {
				if (this.product.detailMobileHtml) {
					return this.product.detailMobileHtml.replace(/\\&lt;img/gi,&#39;&lt;img style=&quot;max-width:100%;height:auto;display:block;&quot;&#39;);
				} else {
					return this.product.detailHtml.replace(/\\&lt;img/gi,&#39;&lt;img style=&quot;max-width:100%;height:auto;display:block;&quot;&#39;);
				}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,7),h={href:"https://blog.csdn.net/qq_43468165/article/details/118787182",target:"_blank",rel:"noopener noreferrer"};function p(u,m){const t=s("ExternalLinkIcon");return i(),r("div",null,[o,e("p",null,[e("a",h,[n("uni-app\u4E2D\u4F7F\u7528rich-text\u5982\u4F55\u6DFB\u52A0\u6837\u5F0F\u63A7\u5236\u5BCC\u6587\u672C\u91CC\u9762\u7684\u5185\u5BB9"),l(t)])])])}const v=a(c,[["render",p],["__file","fe-lib-uniapp-rich-text-adapter.html.vue"]]);export{v as default};
