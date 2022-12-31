import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as r,a as e,b as o,d as n,f as h,r as p}from"./app.78cf000f.js";const s={},c=h('<h1 id="mat\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#mat\u4F7F\u7528" aria-hidden="true">#</a> MAT\u4F7F\u7528</h1><h2 id="_1-mat\u4E3B\u754C\u9762\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-mat\u4E3B\u754C\u9762\u4ECB\u7ECD" aria-hidden="true">#</a> 1 MAT\u4E3B\u754C\u9762\u4ECB\u7ECD</h2><h3 id="_1-1-\u5BFC\u5165hprof\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5BFC\u5165hprof\u6587\u4EF6" aria-hidden="true">#</a> 1.1 \u5BFC\u5165hprof\u6587\u4EF6</h3><p>\u5BFC\u5165\u6587\u4EF6\u4E4B\u540E\uFF0C\u663E\u793AOverView\u754C\u9762</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190930142515380.png" alt="image-20190930142515380"></p><p>\u5982\u679C\u9009\u62E9\u4E86\u7B2C\u4E00\u4E2A\uFF0C\u5219\u4F1A\u751F\u6210\u4E00\u4E2A\u62A5\u544A</p><h2 id="_1-2-overview-\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#_1-2-overview-\u754C\u9762" aria-hidden="true">#</a> 1.2 OverView \u754C\u9762</h2><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190930142814638.png" alt="image-20190930142814638"></p><p>\u9700\u8981\u5173\u6CE8\u7684\u662F\u4E0B\u9762\u7684Actions\u533A\u57DF</p><ul><li><p>Histogram: \u5217\u51FA\u5185\u5B58\u4E2D\u7684\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u7684\u4E2A\u4EBA\u4EE5\u53CA\u5927\u5C0F</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190930143023139.png" alt="image-20190930143023139"></p></li><li><p>Dominator Tree: \u5217\u51FA\u6700\u5927\u7684\u5BF9\u8C61\u4EE5\u53CA\u5176\u4F9D\u8D56\u5B58\u6D3B\u7684Object\uFF08\u5927\u5C0F\u4EE5Retained Heap\u4E3A\u6807\u51C6\u7684\u6392\u5E8F\uFF09</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190930143324484.png" alt="image-20190930143324484"></p></li><li><p>Top Consumers: \u901A\u8FC7\u56FE\u5F62\u5217\u51FA\u6700\u5927\u7684Object</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190930143408220.png" alt="image-20190930143408220"></p><p>\u4E00\u822CHistogram\u548C Dominator Tree\u662F\u6700\u5E38\u7528\u7684\u3002</p></li></ul><h2 id="_2-mat-\u4E2D\u4E00\u4E9B\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_2-mat-\u4E2D\u4E00\u4E9B\u6982\u5FF5" aria-hidden="true">#</a> 2. MAT \u4E2D\u4E00\u4E9B\u6982\u5FF5</h2><p>\u8981\u770B\u61C2MAT\u7684\u5217\u8868\u4FE1\u606F\uFF0CShallow heap\u3001Retained Heap\u3001GC Root\u8FD9\u51E0\u4E2A\u6982\u5FF5\u4E00\u5B9A\u8981\u5F04\u61C2\u3002</p><h3 id="_2-1-shallow-heap" tabindex="-1"><a class="header-anchor" href="#_2-1-shallow-heap" aria-hidden="true">#</a> 2.1 Shallow heap</h3><p>Shallow size \u5C31\u662F\u5BF9\u8C61\u672C\u8EAB\u5360\u7528\u5185\u5B58\u7684\u5927\u5C0F\uFF0C\u4E0D\u5305\u542B\u5176\u5F15\u7528\u7684\u5BF9\u8C61</p><ul><li>\u5E38\u89C4\u5BF9\u8C61\uFF08\u975E\u6570\u7EC4\uFF09\u7684Shallow size\u6709\u5176\u6210\u5458\u53D8\u91CF\u7684\u6570\u91CF\u548C\u7C7B\u578B\u51B3\u5B9A</li><li>\u6570\u7EC4\u7684shallow size \u6709\u6570\u7EC4\u5143\u7D20\u7684\u7C7B\u578B\uFF08\u5BF9\u8C61\u7C7B\u578B\uFF0C\u57FA\u672C\u7C7B\u578B\uFF09\u548C\u6570\u7EC4\u957F\u5EA6\u51B3\u5B9A</li></ul><p>\u56E0\u4E3A\u4E0D\u50CFc++\u7684\u5BF9\u8C61\u672C\u8EAB\u53EF\u4EE5\u5B58\u653E\u5927\u91CF\u5185\u5B58\uFF0Cjava\u7684\u5BF9\u8C61\u6210\u5458\u90FD\u662F\u4E9B\u5F15\u7528\u3002\u771F\u6B63\u7684\u5185\u5B58\u90FD\u5728\u5806\u4E0A\uFF0C\u770B\u8D77\u6765\u662F\u4E00\u5806\u539F\u751F\u7684byte[], char[], int[]\uFF0C\u6240\u4EE5\u6211\u4EEC\u5982\u679C\u53EA\u770B\u5BF9\u8C61\u672C\u8EAB\u7684\u5185\u5B58\uFF0C\u90A3\u4E48\u6570\u91CF\u90FD\u5F88\u5C0F\u3002\u6240\u4EE5\u6211\u4EEC\u770B\u5230Histogram\u56FE\u662F\u4EE5Shallow size\u8FDB\u884C\u6392\u5E8F\u7684\uFF0C\u6392\u5728\u7B2C\u4E00\u4F4D\u7B2C\u4E8C\u4F4D\u7684\u662Fbyte\uFF0Cchar \u3002</p><h3 id="_2-2-retained-heap" tabindex="-1"><a class="header-anchor" href="#_2-2-retained-heap" aria-hidden="true">#</a> 2.2 Retained Heap</h3><p>Retained Heap\u7684\u6982\u5FF5\uFF0C\u5B83\u8868\u793A\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61\u88AB\u91CA\u653E\u6389\uFF0C\u90A3\u4F1A\u56E0\u4E3A\u8BE5\u5BF9\u8C61\u7684\u91CA\u653E\u800C\u51CF\u5C11\u5F15\u7528\u8FDB\u800C\u88AB\u91CA\u653E\u7684\u6240\u6709\u7684\u5BF9\u8C61\uFF08\u5305\u62EC\u88AB\u9012\u5F52\u91CA\u653E\u7684\uFF09\u6240\u5360\u7528\u7684heap\u5927\u5C0F\u3002\u4E8E\u662F\uFF0C\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61\u7684\u67D0\u4E2A\u6210\u5458new\u4E86\u4E00\u5927\u5757int\u6570\u7EC4\uFF0C\u90A3\u8FD9\u4E2Aint\u6570\u7EC4\u4E5F\u53EF\u4EE5\u8BA1\u7B97\u5230\u8FD9\u4E2A\u5BF9\u8C61\u4E2D\u3002\u76F8\u5BF9\u4E8Eshallow heap\uFF0CRetained heap\u53EF\u4EE5\u66F4\u7CBE\u786E\u7684\u53CD\u6620\u4E00\u4E2A\u5BF9\u8C61\u5B9E\u9645\u5360\u7528\u7684\u5927\u5C0F\uFF08\u56E0\u4E3A\u5982\u679C\u8BE5\u5BF9\u8C61\u91CA\u653E\uFF0Cretained heap\u90FD\u53EF\u4EE5\u88AB\u91CA\u653E\uFF09\u3002</p><p>\u8FD9\u91CC\u8981\u8BF4\u4E00\u4E0B\u7684\u662F\uFF0CRetained Heap\u5E76\u4E0D\u603B\u662F\u90A3\u4E48\u6709\u6548\u3002\u4F8B\u5982\u6211\u5728A\u91CCnew\u4E86\u4E00\u5757\u5185\u5B58\uFF0C\u8D4B\u503C\u7ED9A\u7684\u4E00\u4E2A\u6210\u5458\u53D8\u91CF\u3002\u6B64\u65F6\u6211\u8BA9B\u4E5F\u6307\u5411\u8FD9\u5757\u5185\u5B58\u3002\u6B64\u65F6\uFF0C\u56E0\u4E3AA\u548CB\u90FD\u5F15\u7528\u5230\u8FD9\u5757\u5185\u5B58\uFF0C\u6240\u4EE5A\u91CA\u653E\u65F6\uFF0C\u8BE5\u5185\u5B58\u4E0D\u4F1A\u88AB\u91CA\u653E\u3002\u6240\u4EE5\u8FD9\u5757\u5185\u5B58\u4E0D\u4F1A\u88AB\u8BA1\u7B97\u5230A\u6216\u8005B\u7684Retained Heap\u4E2D\u3002\u4E3A\u4E86\u7EA0\u6B63\u8FD9\u70B9\uFF0CMAT\u4E2D\u7684Leading Object\uFF08\u4F8B\u5982A\u6216\u8005B\uFF09\u4E0D\u4E00\u5B9A\u53EA\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u662F\u591A\u4E2A\u5BF9\u8C61\u3002\u6B64\u65F6\uFF0C(A, B)\u8FD9\u4E2A\u7EC4\u5408\u7684Retained Set\u5C31\u5305\u542B\u90A3\u5757\u5927\u5185\u5B58\u4E86\u3002\u5BF9\u5E94\u5230MAT\u7684UI\u4E2D\uFF0C\u5728Histogram\u4E2D\uFF0C\u53EF\u4EE5\u9009\u62E9Group By class, superclass or package\u6765\u9009\u62E9\u8FD9\u4E2A\u7EC4\u3002</p><p>\u4E3A\u4E86\u8BA1\u7B97Retained Memory\uFF0CMAT\u5F15\u5165\u4E86Dominator Tree\u3002\u52A0\u5165\u5BF9\u8C61A\u5F15\u7528B\u548CC\uFF0CB\u548CC\u53C8\u90FD\u5F15\u7528\u5230D\uFF08\u4E00\u4E2A\u83F1\u5F62\uFF09\u3002\u6B64\u65F6\u8981\u8BA1\u7B97Retained Memory\uFF0CA\u7684\u5305\u62ECA\u672C\u8EAB\u548CB\uFF0CC\uFF0CD\u3002B\u548CC\u56E0\u4E3A\u5171\u540C\u5F15\u7528D\uFF0C\u6240\u4EE5\u4ED6\u4FE9\u7684Retained Memory\u90FD\u53EA\u662F\u4ED6\u4EEC\u672C\u8EAB\u3002D\u5F53\u7136\u4E5F\u53EA\u662F\u81EA\u5DF1\u3002\u6211\u89C9\u5F97\u662F\u4E3A\u4E86\u52A0\u5FEB\u8BA1\u7B97\u7684\u901F\u5EA6\uFF0CMAT\u6539\u53D8\u4E86\u5BF9\u8C61\u5F15\u7528\u56FE\uFF0C\u800C\u8F6C\u6362\u6210\u4E00\u4E2A\u5BF9\u8C61\u5F15\u7528\u6811\u3002\u5728\u8FD9\u91CC\u4F8B\u5B50\u4E2D\uFF0C\u6811\u6839\u662FA\uFF0C\u800CB\uFF0CC\uFF0CD\u662F\u4ED6\u7684\u4E09\u4E2A\u513F\u5B50\u3002B\uFF0CC\uFF0CD\u4E0D\u518D\u6709\u76F8\u4E92\u5173\u7CFB\u3002\u628A\u5F15\u7528\u56FE\u53D8\u6210\u5F15\u7528\u6811\uFF0C\u8BA1\u7B97Retained Heap\u5C31\u4F1A\u975E\u5E38\u65B9\u4FBF\uFF0C\u663E\u793A\u4E5F\u975E\u5E38\u65B9\u4FBF\u3002\u5BF9\u5E94\u5230MAT UI\u4E0A\uFF0C\u5728dominator tree\u8FD9\u4E2Aview\u4E2D\uFF0C\u663E\u793A\u4E86\u6BCF\u4E2A\u5BF9\u8C61\u7684shallow heap\u548Cretained heap\u3002\u7136\u540E\u53EF\u4EE5\u4EE5\u8BE5\u8282\u70B9\u4F4D\u6811\u6839\uFF0C\u4E00\u6B65\u6B65\u7684\u7EC6\u5316\u770B\u770Bretained heap\u5230\u5E95\u662F\u7528\u5728\u4EC0\u4E48\u5730\u65B9\u4E86\u3002\u8981\u8BF4\u4E00\u4E0B\u7684\u662F\uFF0C\u8FD9\u79CD\u4ECE\u56FE\u5230\u6811\u7684\u8F6C\u6362\u786E\u5B9E\u65B9\u4FBF\u4E86\u5185\u5B58\u5206\u6790\uFF0C\u4F46\u6709\u65F6\u5019\u4F1A\u8BA9\u4EBA\u6709\u4E9B\u7591\u60D1\u3002\u672C\u6765\u5BF9\u8C61B\u662F\u5BF9\u8C61A\u7684\u4E00\u4E2A\u6210\u5458\uFF0C\u4F46\u56E0\u4E3AB\u8FD8\u88ABC\u5F15\u7528\uFF0C\u6240\u4EE5B\u5728\u6811\u4E2D\u5E76\u4E0D\u5728A\u4E0B\u9762\uFF0C\u800C\u5F88\u53EF\u80FD\u662F\u5E73\u7EA7\u3002</p><p>\u4E3A\u4E86\u7EA0\u6B63\u8FD9\u70B9\uFF0CMAT\u4E2D\u70B9\u51FB\u53F3\u952E\uFF0C\u53EF\u4EE5List objects\u4E2D\u9009\u62E9with outgoing references\u548Cwith incoming references\u3002\u8FD9\u662F\u4E2A\u771F\u6B63\u7684\u5F15\u7528\u56FE\u7684\u6982\u5FF5\uFF0C</p><ul><li>outgoing references \uFF1A\u8868\u793A\u8BE5\u5BF9\u8C61\u7684\u51FA\u8282\u70B9\uFF08\u88AB\u8BE5\u5BF9\u8C61\u5F15\u7528\u7684\u5BF9\u8C61\uFF09\u3002</li><li>incoming references \uFF1A\u8868\u793A\u8BE5\u5BF9\u8C61\u7684\u5165\u8282\u70B9\uFF08\u5F15\u7528\u5230\u8BE5\u5BF9\u8C61\u7684\u5BF9\u8C61\uFF09\u3002</li></ul><p>\u4E3A\u4E86\u66F4\u597D\u5730\u7406\u89E3Retained Heap\uFF0C\u4E0B\u9762\u5F15\u7528\u4E00\u4E2A\u4F8B\u5B50\u6765\u8BF4\u660E\uFF1A</p><p>\u628A\u5185\u5B58\u4E2D\u7684\u5BF9\u8C61\u770B\u6210\u4E0B\u56FE\u4E2D\u7684\u8282\u70B9\uFF0C\u5E76\u4E14\u5BF9\u8C61\u548C\u5BF9\u8C61\u4E4B\u95F4\u4E92\u76F8\u5F15\u7528\u3002\u8FD9\u91CC\u6709\u4E00\u4E2A\u7279\u6B8A\u7684\u8282\u70B9GC Roots\uFF0C\u8FD9\u5C31\u662Freference chain(\u5F15\u7528\u94FE)\u7684\u8D77\u70B9:</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190930144701785.png" alt="image-20190930144701785"></p><h3 id="_2-3-gc-root" tabindex="-1"><a class="header-anchor" href="#_2-3-gc-root" aria-hidden="true">#</a> 2.3 GC Root</h3><p>GC\u53D1\u73B0\u901A\u8FC7\u4EFB\u4F55reference chain(\u5F15\u7528\u94FE)\u65E0\u6CD5\u8BBF\u95EE\u67D0\u4E2A\u5BF9\u8C61\u7684\u65F6\u5019\uFF0C\u8BE5\u5BF9\u8C61\u5373\u88AB\u56DE\u6536\u3002\u540D\u8BCDGC Roots\u6B63\u662F\u5206\u6790\u8FD9\u4E00\u8FC7\u7A0B\u7684\u8D77\u70B9\uFF0C\u4F8B\u5982JVM\u81EA\u5DF1\u786E\u4FDD\u4E86\u5BF9\u8C61\u7684\u53EF\u5230\u8FBE\u6027(\u90A3\u4E48JVM\u5C31\u662FGC Roots)\uFF0C\u6240\u4EE5GC Roots\u5C31\u662F\u8FD9\u6837\u5728\u5185\u5B58\u4E2D\u4FDD\u6301\u5BF9\u8C61\u53EF\u5230\u8FBE\u6027\u7684\uFF0C\u4E00\u65E6\u4E0D\u53EF\u5230\u8FBE\uFF0C\u5373\u88AB\u56DE\u6536\u3002\u901A\u5E38GC Roots\u662F\u4E00\u4E2A\u5728current thread(\u5F53\u524D\u7EBF\u7A0B)\u7684call stack(\u8C03\u7528\u6808)\u4E0A\u7684\u5BF9\u8C61\uFF08\u4F8B\u5982\u65B9\u6CD5\u53C2\u6570\u548C\u5C40\u90E8\u53D8\u91CF\uFF09\uFF0C\u6216\u8005\u662F\u7EBF\u7A0B\u81EA\u8EAB\u6216\u8005\u662Fsystem class loader(\u7CFB\u7EDF\u7C7B\u52A0\u8F7D\u5668)\u52A0\u8F7D\u7684\u7C7B\u4EE5\u53CAnative code(\u672C\u5730\u4EE3\u7801)\u4FDD\u7559\u7684\u6D3B\u52A8\u5BF9\u8C61\u3002\u6240\u4EE5GC Roots\u662F\u5206\u6790\u5BF9\u8C61\u4E3A\u4F55\u8FD8\u5B58\u6D3B\u4E8E\u5185\u5B58\u4E2D\u7684\u5229\u5668\u3002</p><h2 id="_3-mat-\u4E2D\u4E00\u4E9B\u6709\u7528\u7684\u89C6\u56FE" tabindex="-1"><a class="header-anchor" href="#_3-mat-\u4E2D\u4E00\u4E9B\u6709\u7528\u7684\u89C6\u56FE" aria-hidden="true">#</a> 3. MAT \u4E2D\u4E00\u4E9B\u6709\u7528\u7684\u89C6\u56FE</h2><h3 id="_3-1-thread-ovewview" tabindex="-1"><a class="header-anchor" href="#_3-1-thread-ovewview" aria-hidden="true">#</a> 3.1 Thread OvewView</h3><p>Thread OvewView\u53EF\u4EE5\u67E5\u770B\u8FD9\u4E2A\u5E94\u7528\u7684Thread\u4FE1\u606F\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190930145046069.png" alt="image-20190930145046069"></p><h3 id="_3-2-group" tabindex="-1"><a class="header-anchor" href="#_3-2-group" aria-hidden="true">#</a> 3.2 Group</h3><p>\u5728Histogram\u548CDomiantor Tree\u754C\u9762\uFF0C\u53EF\u4EE5\u9009\u62E9\u5C06\u7ED3\u679C\u7528\u53E6\u4E00\u79CDGroup\u7684\u65B9\u5F0F\u663E\u793A\uFF08\u9ED8\u8BA4\u662FGroup by Object\uFF09\uFF0C\u5207\u6362\u5230Group by package\uFF0C\u53EF\u4EE5\u66F4\u597D\u5730\u67E5\u770B\u5177\u4F53\u662F\u54EA\u4E2A\u5305\u91CC\u7684\u7C7B\u5360\u7528\u5185\u5B58\u5927\uFF0C\u4E5F\u5F88\u5BB9\u6613\u5B9A\u4F4D\u5230\u81EA\u5DF1\u7684\u5E94\u7528\u7A0B\u5E8F\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190930145128425.png" alt="image-20190930145128425"></p><h3 id="_3-3-path-to-gc-root" tabindex="-1"><a class="header-anchor" href="#_3-3-path-to-gc-root" aria-hidden="true">#</a> 3.3 Path to GC Root</h3><p>\u5728Histogram\u6216\u8005Domiantor Tree\u7684\u67D0\u4E00\u4E2A\u6761\u76EE\u4E0A\uFF0C\u53F3\u952E\u53EF\u4EE5\u67E5\u770B\u5176GC Root Path\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190930145214577.png" alt="image-20190930145214577"></p><p>\u8FD9\u91CC\u4E5F\u8981\u8BF4\u660E\u4E00\u4E0BJava\u7684\u5F15\u7528\u89C4\u5219\uFF1A \u4ECE\u6700\u5F3A\u5230\u6700\u5F31\uFF0C\u4E0D\u540C\u7684\u5F15\u7528\uFF08\u53EF\u5230\u8FBE\u6027\uFF09\u7EA7\u522B\u53CD\u6620\u4E86\u5BF9\u8C61\u7684\u751F\u547D\u5468\u671F\u3002</p><ul><li>Strong Ref(\u5F3A\u5F15\u7528)\uFF1A\u901A\u5E38\u6211\u4EEC\u7F16\u5199\u7684\u4EE3\u7801\u90FD\u662FStrong Ref\uFF0C\u4E8E\u6B64\u5BF9\u5E94\u7684\u662F\u5F3A\u53EF\u8FBE\u6027\uFF0C\u53EA\u6709\u53BB\u6389\u5F3A\u53EF\u8FBE\uFF0C\u5BF9\u8C61\u624D\u88AB\u56DE\u6536\u3002</li><li>Soft Ref(\u8F6F\u5F15\u7528)\uFF1A\u5BF9\u5E94\u8F6F\u53EF\u8FBE\u6027\uFF0C\u53EA\u8981\u6709\u8DB3\u591F\u7684\u5185\u5B58\uFF0C\u5C31\u4E00\u76F4\u4FDD\u6301\u5BF9\u8C61\uFF0C\u76F4\u5230\u53D1\u73B0\u5185\u5B58\u5403\u7D27\u4E14\u6CA1\u6709Strong Ref\u65F6\u624D\u56DE\u6536\u5BF9\u8C61\u3002\u4E00\u822C\u53EF\u7528\u6765\u5B9E\u73B0\u7F13\u5B58\uFF0C\u901A\u8FC7java.lang.ref.SoftReference\u7C7B\u5B9E\u73B0\u3002</li><li>Weak Ref(\u5F31\u5F15\u7528)\uFF1A\u6BD4Soft Ref\u66F4\u5F31\uFF0C\u5F53\u53D1\u73B0\u4E0D\u5B58\u5728Strong Ref\u65F6\uFF0C\u7ACB\u523B\u56DE\u6536\u5BF9\u8C61\u800C\u4E0D\u5FC5\u7B49\u5230\u5185\u5B58\u5403\u7D27\u7684\u65F6\u5019\u3002\u901A\u8FC7java.lang.ref.WeakReference\u548Cjava.util.WeakHashMap\u7C7B\u5B9E\u73B0\u3002</li><li>Phantom Ref(\u865A\u5F15\u7528)\uFF1A\u6839\u672C\u4E0D\u4F1A\u5728\u5185\u5B58\u4E2D\u4FDD\u6301\u4EFB\u4F55\u5BF9\u8C61\uFF0C\u4F60\u53EA\u80FD\u4F7F\u7528Phantom Ref\u672C\u8EAB\u3002\u4E00\u822C\u7528\u4E8E\u5728\u8FDB\u5165finalize()\u65B9\u6CD5\u540E\u8FDB\u884C\u7279\u6B8A\u7684\u6E05\u7406\u8FC7\u7A0B\uFF0C\u901A\u8FC7 java.lang.ref.PhantomReference\u5B9E\u73B0\u3002</li></ul><p>\u70B9\u51FBPath To GC Roots \u2013&gt; with all references</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190930145257990.png" alt="image-20190930145257990"></p><h3 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h3>',42),l={href:"http://ju.outofmemory.cn/entry/172684",target:"_blank",rel:"noopener noreferrer"};function d(m,g){const a=p("ExternalLinkIcon");return t(),r("div",null,[c,e("p",null,[e("a",l,[o("Android\u5185\u5B58\u4F18\u5316\u4E4B\u4E00\uFF1AMAT\u4F7F\u7528\u5165\u95E8"),n(a)])])])}const b=i(s,[["render",d],["__file","java-jvm-tools-mat-use.html.vue"]]);export{b as default};