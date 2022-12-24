import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as t,a as e,b as r,d as n,f as s,r as h}from"./app.2a33308c.js";const l={},d=s('<h1 id="shallow-heap\u548Cretained-heap" tabindex="-1"><a class="header-anchor" href="#shallow-heap\u548Cretained-heap" aria-hidden="true">#</a> Shallow heap\u548CRetained heap</h1><p>\u6240\u6709\u5305\u542BHeap Proflin \u529F\u80FD\u7684\u5DE5\u5177\uFF08MAT\uFF0CTPTP\u7B49\uFF09\u90FD\u4F1A\u4F7F\u7528\u5230\u4E24\u4E2A\u540D\u8BCD\uFF0C\u4E00\u4E2A\u662FShallow Size\uFF0C\u53E6\u4E00\u4E2A\u662FRetained Size</p><h2 id="_1-\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-\u6982\u5FF5" aria-hidden="true">#</a> 1 \u6982\u5FF5</h2><h3 id="_1-1-shallow-size" tabindex="-1"><a class="header-anchor" href="#_1-1-shallow-size" aria-hidden="true">#</a> 1.1 Shallow Size</h3><p><strong>\u5BF9\u8C61\u81EA\u8EAB\u5360\u7528\u7684\u5185\u5B58\u5927\u5C0F\uFF0C\u4E0D\u5305\u62EC\u4ED6\u5F15\u7528\u7684\u5BF9\u8C61</strong></p><p>\u9488\u5BF9\u975E\u6570\u7EC4\u7C7B\u578B\u7684\u5BF9\u8C61\uFF0C\u5B83\u7684\u5927\u5C0F\u5C31\u662F\u5BF9\u8C61\u4E0E\u4ED6\u6240\u6709\u7684\u6210\u5458\u53D8\u91CF\u5927\u5C0F\u7684\u603B\u548C\u3002\u5F53\u7136\u8FD9\u91CC\u9762\u8FD8\u4F1A\u5305\u62EC\u4E00\u4E9Bjava\u8BED\u8A00\u7279\u6027\u7684\u6570\u636E\u5B58\u50A8\u5355\u5143\u3002 \u9488\u5BF9\u6570\u7EC4\u7C7B\u578B\u7684\u5BF9\u8C61\uFF0C\u5B83\u7684\u5927\u5C0F\u662F\u6570\u7EC4\u5143\u7D20\u5BF9\u8C61\u7684\u5927\u5C0F\u603B\u548C\u3002</p><h3 id="_1-2-retained-size" tabindex="-1"><a class="header-anchor" href="#_1-2-retained-size" aria-hidden="true">#</a> 1.2 Retained Size</h3><p>Retained Size= <strong>\u5F53\u524D\u5BF9\u8C61\u5927\u5C0F+\u5F53\u524D\u5BF9\u8C61\u53EF\u76F4\u63A5\u6216\u95F4\u63A5\u5F15\u7528\u5230\u7684\u5BF9\u8C61\u7684\u5927\u5C0F\u603B\u548C</strong>(\u95F4\u63A5\u5F15\u7528\u7684\u542B\u4E49\uFF1AA-&gt;B-&gt;C, C\u5C31\u662F\u95F4\u63A5\u5F15\u7528)</p><p>\u6362\u53E5\u8BDD\u8BF4\uFF0CRetained Size \u5C31\u662F\u5F53\u524D\u5BF9\u8C61\u88ABGC\u540E\uFF0C\u4ECEHeap \u4E0A\u603B\u5171\u80FD\u91CA\u653E\u6389\u7684\u5185\u5B58\uFF0C\u4ECEHeap \u4E0A\u603B\u5171\u80FD\u91CA\u653E\u6389\u7684\u5185\u5B58</p><p>\u4E0D\u8FC7\uFF0C\u91CA\u653E\u7684\u65F6\u5019\u8FD8\u8981\u6392\u9664\u88ABGC Roots\u76F4\u63A5\u6216\u95F4\u63A5\u5F15\u7528\u7684\u5BF9\u8C61\u3002\u4ED6\u4EEC\u6682\u65F6\u4E0D\u4F1A\u88AB\u88AB\u5F53\u505AGarbage\u3002</p><h2 id="_2-\u770B\u56FE\u7406\u89E3retained-size" tabindex="-1"><a class="header-anchor" href="#_2-\u770B\u56FE\u7406\u89E3retained-size" aria-hidden="true">#</a> 2. \u770B\u56FE\u7406\u89E3Retained Size</h2><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200107223438176.png" alt="image-20200107223438176"></p><p>\u4E0A\u56FE\u4E2D\uFF0CGC Roots\u76F4\u63A5\u5F15\u7528\u4E86A\u548CB \u4E24\u4E2A\u5BF9\u8C61</p><ul><li><p>A\u5BF9\u8C61\u7684Retained Size = A\u5BF9\u8C61Shallow Size</p></li><li><p>B\u5BF9\u8C61\u7684Reatined Size = B \u5BF9\u8C61\u7684Shallow Size + C\u5BF9\u8C61\u7684Shallow Size</p><p>ps:\u8FD9\u91CC\u4E0D\u5305\u542BD\u5BF9\u8C61\uFF0C\u56E0\u4E3AD\u5BF9\u8C61\u88ABGCroot\u76F4\u63A5\u5F15\u7528\u4E86</p></li></ul><h3 id="\u5982\u679Cgc-roots\u4E0D\u5F15\u7528d\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u5982\u679Cgc-roots\u4E0D\u5F15\u7528d\u5BF9\u8C61" aria-hidden="true">#</a> \u5982\u679CGC Roots\u4E0D\u5F15\u7528D\u5BF9\u8C61\uFF1F</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200107223805147.png" alt="image-20200107223805147"></p><p>\u6B64\u65F6\uFF0CB\u5BF9\u8C61\u7684Retained Size=B\u5BF9\u8C61\u7684Shallow Size + C\u5BF9\u8C61\u7684Shallow Size + D\u5BF9\u8C61\u7684Shallow Size</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',18),p={href:"https://www.iteye.com/blog/bjyzxxds-1532937",target:"_blank",rel:"noopener noreferrer"};function c(g,z){const a=h("ExternalLinkIcon");return o(),t("div",null,[d,e("p",null,[e("a",p,[r("Shallow heap & Retained heap"),n(a)])])])}const _=i(l,[["render",c],["__file","java-jvm-tools-mat-shallow.html.vue"]]);export{_ as default};
