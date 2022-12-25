import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as t,a as e,b as n,d as s,f as o,r as p}from"./app.b657c1d1.js";const c={},d=o(`<h1 id="\u8BB0\u4E00\u6B21mat\u5206\u6790\u7EBF\u4E0A\u9879\u76EE\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u8BB0\u4E00\u6B21mat\u5206\u6790\u7EBF\u4E0A\u9879\u76EE\u8FC7\u7A0B" aria-hidden="true">#</a> \u8BB0\u4E00\u6B21MAT\u5206\u6790\u7EBF\u4E0A\u9879\u76EE\u8FC7\u7A0B</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u524D\u6BB5\u65F6\u95F4\u63A5\u624B\u4E86\u4E00\u4E2A\u9879\u76EE\uFF0C\u6B63\u5E38\u8FD0\u884C\u90FD\u6CA1\u6709\u95EE\u9898\u3002\u4F46\u662F<strong>\u8FD0\u884C\u4E2A\u51E0\u5929\u5C31\u4F1AOOM\u5F02\u5E38</strong>\uFF0C\u5BFC\u81F4\u670D\u52A1\u4E0D\u53EF\u7528\u3002\u6211\u4EEC\u9996\u5148\u7B2C\u4E00\u4E2A\u60F3\u5230\u7684\u5C31\u662F\u8BE5\u9879\u76EE\u5185\u5B58\u6CC4\u6F0F\u5BFC\u81F4\uFF0C\u4F46\u662F\u9879\u76EE\u672C\u8EAB\u5DF2\u7ECF\u6BD4\u8F83\u5E9E\u5927\uFF0C\u8981\u627E\u5230\u4E00\u4E2A\u5185\u5B58\u6CC4\u6F0F\u7684\u70B9\uFF0C\u8FD8\u662F\u6BD4\u8F83\u96BE\u5F97\u3002</p><p>\u6240\u4EE5\u6211\u4EEC\u4F7F\u7528MAT\u6765\u5206\u6790\u7EBF\u4E0A\u9879\u76EE\u7684\u8FD0\u884C\u60C5\u51B5</p><h2 id="_2-jmap-\u751F\u6210\u5806\u8F6C\u50A8\u5FEB\u7167" tabindex="-1"><a class="header-anchor" href="#_2-jmap-\u751F\u6210\u5806\u8F6C\u50A8\u5FEB\u7167" aria-hidden="true">#</a> 2. <code>jmap</code>:\u751F\u6210\u5806\u8F6C\u50A8\u5FEB\u7167</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>jmap -dump:format=b,file=./heap.hprof 19012
Dumping heap to /home/ftpuser/services/mywebsocket/heap.hprof ...
Heap dump file created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>19012 \u662F\u8FDB\u7A0B\u53F7</p><p>\u6211\u4EEC\u5C06heap.hprof \u5BFC\u51FA\u5230\u6211\u4EEC\u672C\u5730\uFF0C\u4F7F\u7528MAT\u6765\u5206\u6790</p><h2 id="_3-mat\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_3-mat\u5206\u6790" aria-hidden="true">#</a> 3. MAT\u5206\u6790</h2><h3 id="_3-1-\u67E5\u770B\u5185\u5B58\u6CC4\u6F0F\u7591\u70B9\u62A5\u544A" tabindex="-1"><a class="header-anchor" href="#_3-1-\u67E5\u770B\u5185\u5B58\u6CC4\u6F0F\u7591\u70B9\u62A5\u544A" aria-hidden="true">#</a> 3.1 \u67E5\u770B\u5185\u5B58\u6CC4\u6F0F\u7591\u70B9\u62A5\u544A</h3><p>\u8FD9\u662F\u6700\u7B80\u5355\u6709\u6548\u7684\u65B9\u5F0F\uFF0C\u6211\u4EEC\u6839\u636E\u62A5\u544A\u7684\u63D0\u793A\u6765\u8FDB\u884C\u5206\u6790</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20200107232248818.png" alt="image-20200107232248818"></p><p>\u6211\u4EEC\u70B9\u5F00\u62A5\u544A\u5F97\u5230</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20200107232335036.png" alt="image-20200107232335036"></p><p>\u6211\u4EEC\u6839\u636E\u62A5\u544A\u5F97\u77E5\uFF0C\u6709\u4E2A\u5BF9\u8C61\u5DF2\u7ECF\u5360\u7528\u4E8644.4 MB\u7684\u5185\u5B58\uFF0C\u4ED6\u6765\u6E90\u4E8E<strong>ConcurrentHashMap$Node[]</strong></p><h3 id="_3-2-\u67E5\u770Bhistogram" tabindex="-1"><a class="header-anchor" href="#_3-2-\u67E5\u770Bhistogram" aria-hidden="true">#</a> 3.2 \u67E5\u770BHistogram</h3><p>\u901A\u8FC7\u67E5\u770B<strong>Histogram</strong>\uFF0C\u5217\u51FA\u5185\u5B58\u4E2D\u7684\u5BF9\u8C61\u60C5\u51B5\uFF08\u4E2A\u6570\uFF0C\u5927\u5C0F\uFF09</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20200107233119349.png" alt="image-20200107233119349"></p><ul><li><p><strong>Class Name</strong> \uFF1A \u7C7B\u540D\u79F0\uFF0Cjava\u7C7B\u540D</p></li><li><p>**Objects **\uFF1A \u7C7B\u7684\u5BF9\u8C61\u7684\u6570\u91CF\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u88AB\u521B\u5EFA\u4E86\u591A\u5C11\u4E2A</p></li><li><p><strong>Shallow Heap \uFF1A\u4E00\u4E2A\u5BF9\u8C61\u5185\u5B58\u7684\u6D88\u8017\u5927\u5C0F\uFF0C\u4E0D\u5305\u542B\u5BF9\u5176\u4ED6\u5BF9\u8C61\u7684\u5F15\u7528</strong></p></li><li><p><strong>Retained Heap \uFF1A\u662Fshallow Heap\u7684\u603B\u548C\uFF0C\u4E5F\u5C31\u662F\u8BE5\u5BF9\u8C61\u88ABGC\u4E4B\u540E\u6240\u80FD\u56DE\u6536\u5230\u5185\u5B58\u7684\u603B\u548C</strong></p></li></ul><h4 id="_3-2-1-\u901A\u8FC7\u6B63\u5219\u67E5\u627E\u81EA\u5DF1\u7684\u7C7B" tabindex="-1"><a class="header-anchor" href="#_3-2-1-\u901A\u8FC7\u6B63\u5219\u67E5\u627E\u81EA\u5DF1\u7684\u7C7B" aria-hidden="true">#</a> 3.2.1 \u901A\u8FC7\u6B63\u5219\u67E5\u627E\u81EA\u5DF1\u7684\u7C7B</h4><p>\u8FD9\u513F\u501F\u52A9\u5DE5\u5177\u63D0\u4F9B\u7684regex\u6B63\u5219\u641C\u7D22\u4E00\u4E0B\u6211\u4EEC\u81EA\u5DF1\u7684\u7C7B\uFF0C\u6392\u5E8F\u540E\u770B\u770B\u54EA\u4E9B\u76F8\u5BF9\u662F\u5360\u7528\u6BD4\u8F83\u5927\u7684\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20200107233400178.png" alt="image-20200107233400178"></p><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA\u5185\u5B58\u6CC4\u6F0F\u662F\u6709EsscWebSocket\u5F00\u59CB\u7684</p><h3 id="_3-3-\u67E5\u770Bdominator-tree" tabindex="-1"><a class="header-anchor" href="#_3-3-\u67E5\u770Bdominator-tree" aria-hidden="true">#</a> 3.3 \u67E5\u770BDominator Tree</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20200107233826983.png" alt="image-20200107233826983"></p><h3 id="_3-4-top-consumers" tabindex="-1"><a class="header-anchor" href="#_3-4-top-consumers" aria-hidden="true">#</a> 3.4 Top consumers</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20200107233905138.png" alt="image-20200107233905138"></p><p><strong>\u8FD9\u5F20\u56FE\u5C55\u793A\u7684\u662F\u5360\u7528\u5185\u5B58\u6BD4\u8F83\u591A\u7684****\u5BF9\u8C61\u7684\u5206\u5E03\uFF0C\u4E0B\u9762\u662F\u5177\u4F53\u7684\u4E00\u4E9B\u7C7B\u548C\u5360\u7528\u3002</strong></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20200107234011953.png" alt="image-20200107234011953"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,30),h={href:"https://www.cnblogs.com/AloneSword/p/3821569.html",target:"_blank",rel:"noopener noreferrer"};function m(l,g){const a=p("ExternalLinkIcon");return i(),t("div",null,[d,e("p",null,[e("a",h,[n("Java\u7A0B\u5E8F\u5185\u5B58\u5206\u6790\uFF1A\u4F7F\u7528mat\u5DE5\u5177\u5206\u6790\u5185\u5B58\u5360\u7528"),s(a)])])])}const _=r(c,[["render",m],["__file","java-jvm-tools-mat-peoject.html.vue"]]);export{_ as default};
