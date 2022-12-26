import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as r,a as l,b as o,d as t,f as n,r as u}from"./app.33b1aeb5.js";const p={},s=n('<h1 id="\u8C03\u8BD5\u6392\u9519-jvm-\u8C03\u4F18\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u8C03\u8BD5\u6392\u9519-jvm-\u8C03\u4F18\u53C2\u6570" aria-hidden="true">#</a> \u8C03\u8BD5\u6392\u9519 - JVM \u8C03\u4F18\u53C2\u6570</h1><blockquote><p>\u672C\u6587\u5BF9JVM\u6D89\u53CA\u7684\u5E38\u89C1\u7684\u8C03\u4F18\u53C2\u6570\u548C\u5783\u573E\u56DE\u6536\u53C2\u6570\u8FDB\u884C\u9610\u8FF0\u3002</p></blockquote><h2 id="_1-jvm\u5E38\u7528\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_1-jvm\u5E38\u7528\u53C2\u6570" aria-hidden="true">#</a> 1. Jvm\u5E38\u7528\u53C2\u6570</h2><ul><li>-Xms</li></ul><p>\u5806\u6700\u5C0F\u503C</p><ul><li>-Xmx</li></ul><p>\u5806\u6700\u5927\u5806\u503C\u3002-Xms\u4E0E-Xmx \u7684\u5355\u4F4D\u9ED8\u8BA4\u5B57\u8282\u90FD\u662F\u4EE5k\u3001m\u505A\u5355\u4F4D\u7684\u3002</p><p>\u901A\u5E38\u8FD9\u4E24\u4E2A\u914D\u7F6E\u53C2\u6570\u76F8\u7B49\uFF0C\u907F\u514D\u6BCF\u6B21\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u52A8\u6001\u6269\u5BB9\u5E26\u6765\u7684\u5F71\u54CD\u3002</p><ul><li>-Xmn</li></ul><p>\u65B0\u751F\u4EE3\u5927\u5C0F</p><ul><li>-Xss</li></ul><p>\u6BCF\u4E2A\u7EBF\u7A0B\u6C60\u7684\u5806\u6808\u5927\u5C0F\u3002\u5728jdk5\u4EE5\u4E0A\u7684\u7248\u672C\uFF0C\u6BCF\u4E2A\u7EBF\u7A0B\u5806\u6808\u5927\u5C0F\u4E3A1m\uFF0Cjdk5\u4EE5\u524D\u7684\u7248\u672C\u662F\u6BCF\u4E2A\u7EBF\u7A0B\u6C60\u5927\u5C0F\u4E3A256k\u3002\u4E00\u822C\u5728\u76F8\u540C\u7269\u7406\u5185\u5B58\u4E0B\uFF0C\u5982\u679C\u51CF\u5C11\uFF0Dxss\u503C\u4F1A\u4EA7\u751F\u66F4\u5927\u7684\u7EBF\u7A0B\u6570\uFF0C\u4F46\u4E0D\u540C\u7684\u64CD\u4F5C\u7CFB\u7EDF\u5BF9\u8FDB\u7A0B\u5185\u7EBF\u7A0B\u6570\u662F\u6709\u9650\u5236\u7684\uFF0C\u662F\u4E0D\u80FD\u65E0\u9650\u751F\u6210\u3002</p><ul><li>-XX:NewRatio</li></ul><p>\u8BBE\u7F6E\u65B0\u751F\u4EE3\u4E0E\u8001\u5E74\u4EE3\u6BD4\u503C\uFF0C-XX:NewRatio=4 \u8868\u793A\u65B0\u751F\u4EE3\u4E0E\u8001\u5E74\u4EE3\u6240\u5360\u6BD4\u4F8B\u4E3A1:4 \uFF0C\u65B0\u751F\u4EE3\u5360\u6BD4\u6574\u4E2A\u5806\u7684\u4E94\u5206\u4E4B\u4E00\u3002\u5982\u679C\u8BBE\u7F6E\u4E86-Xmn\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u53C2\u6570\u662F\u4E0D\u9700\u8981\u5728\u8BBE\u7F6E\u7684\u3002</p><ul><li>-XX:PermSize</li></ul><p>\u8BBE\u7F6E\u6301\u4E45\u4EE3\u521D\u59CB\u503C\uFF0C\u9ED8\u8BA4\u662F\u7269\u7406\u5185\u5B58\u7684\u516D\u5341\u56DB\u5206\u4E4B\u4E00</p><ul><li>-XX:MaxPermSize</li></ul><p>\u8BBE\u7F6E\u6301\u4E45\u4EE3\u6700\u5927\u503C\uFF0C\u9ED8\u8BA4\u662F\u7269\u7406\u5185\u5B58\u7684\u56DB\u5206\u4E4B\u4E00</p><ul><li>-XX:MaxTenuringThreshold</li></ul><p>\u65B0\u751F\u4EE3\u4E2D\u5BF9\u8C61\u5B58\u6D3B\u6B21\u6570\uFF0C\u9ED8\u8BA415\u3002(\u82E5\u5BF9\u8C61\u5728eden\u533A\uFF0C\u7ECF\u5386\u4E00\u6B21MinorGC\u540E\u8FD8\u6D3B\u7740\uFF0C\u5219\u88AB\u79FB\u52A8\u5230Survior\u533A\uFF0C\u5E74\u9F84\u52A01\u3002\u4EE5\u540E\uFF0C\u5BF9\u8C61\u6BCF\u6B21\u7ECF\u5386MinorGC\uFF0C\u5E74\u9F84\u90FD\u52A01\u3002\u8FBE\u5230\u9600\u503C\uFF0C\u5219\u79FB\u5165\u8001\u5E74\u4EE3)</p><ul><li>-XX:SurvivorRatio</li></ul><p>Eden\u533A\u4E0ESubrvivor\u533A\u5927\u5C0F\u7684\u6BD4\u503C\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E3A8\uFF0C\u4E24\u4E2ASubrvivor\u533A\u4E0E\u4E00\u4E2AEden\u533A\u7684\u6BD4\u503C\u4E3A2:8\uFF0C\u4E00\u4E2ASurvivor\u533A\u5360\u6574\u4E2A\u65B0\u751F\u4EE3\u7684\u5341\u5206\u4E4B\u4E00</p><ul><li>-XX:+UseFastAccessorMethods</li></ul><p>\u539F\u59CB\u7C7B\u578B\u5FEB\u901F\u4F18\u5316</p><ul><li>-XX:+AggressiveOpts</li></ul><p>\u7F16\u8BD1\u901F\u5EA6\u52A0\u5FEB</p><ul><li>-XX:PretenureSizeThreshold</li></ul><p>\u5BF9\u8C61\u8D85\u8FC7\u591A\u5927\u503C\u65F6\u76F4\u63A5\u5728\u8001\u5E74\u4EE3\u4E2D\u5206\u914D</p><blockquote><p>\u8BF4\u660E: \u6574\u4E2A\u5806\u5927\u5C0F\u7684\u8BA1\u7B97\u516C\u5F0F: JVM \u5806\u5927\u5C0F \uFF1D \u5E74\u8F7B\u4EE3\u5927\u5C0F\uFF0B\u5E74\u8001\u4EE3\u5927\u5C0F\uFF0B\u6301\u4E45\u4EE3\u5927\u5C0F\u3002 \u589E\u5927\u65B0\u751F\u4EE3\u5927\u5C0F\u5C31\u4F1A\u51CF\u5C11\u5BF9\u5E94\u7684\u5E74\u8001\u4EE3\u5927\u5C0F\uFF0C\u8BBE\u7F6E-Xmn\u503C\u5BF9\u7CFB\u7EDF\u6027\u80FD\u5F71\u54CD\u8F83\u5927\uFF0C\u6240\u4EE5\u5982\u679C\u8BBE\u7F6E\u65B0\u751F\u4EE3\u5927\u5C0F\u7684\u8C03\u6574\uFF0C\u5219\u9700\u8981\u4E25\u683C\u7684\u6D4B\u8BD5\u8C03\u6574\u3002\u800C\u65B0\u751F\u4EE3\u662F\u7528\u6765\u5B58\u653E\u65B0\u521B\u5EFA\u7684\u5BF9\u8C61\uFF0C\u5927\u5C0F\u662F\u968F\u7740\u5806\u5927\u5C0F\u589E\u5927\u548C\u51CF\u5C11\u800C\u6709\u76F8\u5E94\u7684\u53D8\u5316\uFF0C\u9ED8\u8BA4\u503C\u662F\u4FDD\u6301\u5806\u5927\u5C0F\u7684\u5341\u4E94\u5206\u4E4B\u4E00\uFF0C-Xmn\u53C2\u6570\u5C31\u662F\u8BBE\u7F6E\u65B0\u751F\u4EE3\u7684\u5927\u5C0F\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7-XX:NewRatio\u6765\u8BBE\u7F6E\u65B0\u751F\u4EE3\u4E0E\u5E74\u8001\u4EE3\u7684\u6BD4\u4F8B\uFF0Cjava \u5B98\u65B9\u63A8\u8350\u914D\u7F6E\u4E3A3:8\u3002</p><p>\u65B0\u751F\u4EE3\u7684\u7279\u70B9\u5C31\u662F\u5185\u5B58\u4E2D\u7684\u5BF9\u8C61\u66F4\u65B0\u901F\u5EA6\u5FEB\uFF0C\u5728\u77ED\u65F6\u95F4\u5185\u5BB9\u6613\u4EA7\u751F\u5927\u91CF\u7684\u65E0\u7528\u5BF9\u8C61\uFF0C\u5982\u679C\u5728\u8FD9\u4E2A\u53C2\u6570\u65F6\u5C31\u9700\u8981\u8003\u8651\u5783\u573E\u56DE\u6536\u5668\u8BBE\u7F6E\u53C2\u6570\u4E5F\u9700\u8981\u8C03\u6574\u3002\u63A8\u8350\u4F7F\u7528: \u590D\u5236\u6E05\u9664\u7B97\u6CD5\u548C\u5E76\u884C\u6536\u96C6\u5668\u8FDB\u884C\u5783\u573E\u56DE\u6536\uFF0C\u800C\u65B0\u751F\u4EE3\u7684\u5783\u573E\u56DE\u6536\u53EB\u505A\u521D\u7EA7\u56DE\u6536\u3002</p></blockquote><blockquote><p>StackOverflowError\u548COutOfMemoryException\u3002\u5F53\u7EBF\u7A0B\u4E2D\u7684\u8BF7\u6C42\u7684\u6808\u7684\u6DF1\u5EA6\u5927\u4E8E\u6700\u5927\u53EF\u7528\u6DF1\u5EA6\uFF0C\u5C31\u4F1A\u629B\u51FA\u524D\u8005\uFF1B\u82E5\u5185\u5B58\u7A7A\u95F4\u4E0D\u591F\uFF0C\u65E0\u6CD5\u521B\u5EFA\u65B0\u7684\u7EBF\u7A0B\uFF0C\u5219\u4F1A\u629B\u51FA\u540E\u8005\u3002\u6808\u7684\u5927\u5C0F\u76F4\u63A5\u51B3\u5B9A\u4E86\u51FD\u6570\u7684\u8C03\u7528\u6700\u5927\u6DF1\u5EA6\uFF0C\u6808\u8D8A\u5927\uFF0C\u51FD\u6570\u5D4C\u5957\u53EF\u8C03\u7528\u6B21\u6570\u5C31\u8D8A\u591A\u3002</p></blockquote><h3 id="_1-1-\u7ECF\u9A8C" tabindex="-1"><a class="header-anchor" href="#_1-1-\u7ECF\u9A8C" aria-hidden="true">#</a> 1.1 <strong>\u7ECF\u9A8C</strong></h3><ol><li>Xmn\u7528\u4E8E\u8BBE\u7F6E\u65B0\u751F\u4EE3\u7684\u5927\u5C0F\u3002\u8FC7\u5C0F\u4F1A\u589E\u52A0Minor GC\u9891\u7387\uFF0C\u8FC7\u5927\u4F1A\u51CF\u5C0F\u8001\u5E74\u4EE3\u7684\u5927\u5C0F\u3002\u4E00\u822C\u8BBE\u4E3A\u6574\u4E2A\u5806\u7A7A\u95F4\u76841/4\u62161/3.</li><li>XX:SurvivorRatio\u7528\u4E8E\u8BBE\u7F6E\u65B0\u751F\u4EE3\u4E2Dsurvivor\u7A7A\u95F4(from/to)\u548Ceden\u7A7A\u95F4\u7684\u5927\u5C0F\u6BD4\u4F8B\uFF1B XX:TargetSurvivorRatio\u8868\u793A\uFF0C\u5F53\u7ECF\u5386Minor GC\u540E\uFF0Csurvivor\u7A7A\u95F4\u5360\u6709\u91CF(\u767E\u5206\u6BD4)\u8D85\u8FC7\u5B83\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u538B\u7F29\u8FDB\u5165\u8001\u5E74\u4EE3(\u5F53\u7136\uFF0C\u5982\u679Csurvivor\u7A7A\u95F4\u4E0D\u591F\uFF0C\u5219\u76F4\u63A5\u8FDB\u5165\u8001\u5E74\u4EE3)\u3002\u9ED8\u8BA4\u503C\u4E3A50%\u3002</li><li>\u4E3A\u4E86\u6027\u80FD\u8003\u8651\uFF0C\u4E00\u5F00\u59CB\u5C3D\u91CF\u5C06\u65B0\u751F\u4EE3\u5BF9\u8C61\u7559\u5728\u65B0\u751F\u4EE3\uFF0C\u907F\u514D\u65B0\u751F\u7684\u5927\u5BF9\u8C61\u76F4\u63A5\u8FDB\u5165\u8001\u5E74\u4EE3\u3002\u56E0\u4E3A\u65B0\u751F\u5BF9\u8C61\u5927\u90E8\u5206\u90FD\u662F\u77ED\u671F\u7684\uFF0C\u8FD9\u5C31\u9020\u6210\u4E86\u8001\u5E74\u4EE3\u7684\u5185\u5B58\u6D6A\u8D39\uFF0C\u5E76\u4E14\u56DE\u6536\u4EE3\u4EF7\u4E5F\u9AD8(Full GC\u53D1\u751F\u5728\u8001\u5E74\u4EE3\u548C\u65B9\u6CD5\u533APerm).</li><li>\u5F53Xms=Xmx\uFF0C\u53EF\u4EE5\u4F7F\u5F97\u5806\u76F8\u5BF9\u7A33\u5B9A\uFF0C\u907F\u514D\u4E0D\u505C\u9707\u8361</li><li>\u4E00\u822C\u6765\u8BF4\uFF0CMaxPermSize\u8BBE\u4E3A64MB\u53EF\u4EE5\u6EE1\u8DB3\u7EDD\u5927\u591A\u6570\u7684\u5E94\u7528\u4E86\u3002\u82E5\u4F9D\u7136\u51FA\u73B0\u65B9\u6CD5\u533A\u6EA2\u51FA\uFF0C\u5219\u53EF\u4EE5\u8BBE\u4E3A128MB\u3002\u82E5128MB\u8FD8\u4E0D\u80FD\u6EE1\u8DB3\u9700\u6C42\uFF0C\u90A3\u4E48\u5C31\u5E94\u8BE5\u8003\u8651\u7A0B\u5E8F\u4F18\u5316\u4E86\uFF0C\u51CF\u5C11<strong>\u52A8\u6001\u7C7B</strong>\u7684\u4EA7\u751F\u3002</li></ol><h2 id="_2-\u5783\u573E\u56DE\u6536" tabindex="-1"><a class="header-anchor" href="#_2-\u5783\u573E\u56DE\u6536" aria-hidden="true">#</a> 2. \u5783\u573E\u56DE\u6536</h2><h3 id="_2-1-\u5783\u573E\u56DE\u6536\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5783\u573E\u56DE\u6536\u7B97\u6CD5" aria-hidden="true">#</a> 2.1 <strong>\u5783\u573E\u56DE\u6536\u7B97\u6CD5</strong> :</h3><ul><li>\u5F15\u7528\u8BA1\u6570\u6CD5: \u4F1A\u6709\u5FAA\u73AF\u5F15\u7528\u7684\u95EE\u9898\uFF0C\u53E4\u8001\u7684\u65B9\u6CD5\uFF1B</li><li>Mark-Sweep: \u6807\u8BB0\u6E05\u9664\u3002\u6839\u53EF\u8FBE\u5224\u65AD\uFF0C\u6700\u5927\u7684\u95EE\u9898\u662F\u7A7A\u95F4\u788E\u7247(\u6E05\u9664\u5783\u573E\u4E4B\u540E\u5269\u4E0B\u4E0D\u8FDE\u7EED\u7684\u5185\u5B58\u7A7A\u95F4)\uFF1B</li><li>Copying: \u590D\u5236\u7B97\u6CD5\u3002\u5BF9\u4E8E\u77ED\u547D\u5BF9\u8C61\u6765\u8BF4\u6709\u7528\uFF0C\u5426\u5219\u9700\u8981\u590D\u5236\u5927\u91CF\u7684\u5BF9\u8C61\uFF0C\u6548\u7387\u4F4E\u3002<strong>\u5982Java\u7684\u65B0\u751F\u4EE3\u5806\u7A7A\u95F4\u4E2D\u5C31\u662F\u4F7F\u7528\u4E86\u5B83(survivor\u7A7A\u95F4\u7684from\u548Cto\u533A)\uFF1B</strong></li><li>Mark-Compact: \u6807\u8BB0\u6574\u7406\u3002\u5BF9\u4E8E\u8001\u5E74\u5BF9\u8C61\u6765\u8BF4\u6709\u7528\uFF0C\u65E0\u9700\u590D\u5236\uFF0C\u4E0D\u4F1A\u4EA7\u751F\u5185\u5B58\u788E\u7247</li></ul><h3 id="_2-2-gc\u8003\u8651\u7684\u6307\u6807" tabindex="-1"><a class="header-anchor" href="#_2-2-gc\u8003\u8651\u7684\u6307\u6807" aria-hidden="true">#</a> 2.2 <strong>GC\u8003\u8651\u7684\u6307\u6807</strong></h3><ul><li>\u541E\u5410\u91CF: \u5E94\u7528\u8017\u65F6\u548C\u5B9E\u9645\u8017\u65F6\u7684\u6BD4\u503C\uFF1B</li><li>\u505C\u987F\u65F6\u95F4: \u5783\u573E\u56DE\u6536\u7684\u65F6\u5019\uFF0C\u7531\u4E8EStop the World\uFF0C\u5E94\u7528\u7A0B\u5E8F\u7684\u6240\u6709\u7EBF\u7A0B\u4F1A\u6302\u8D77\uFF0C\u9020\u6210\u5E94\u7528\u505C\u987F\u3002</li></ul><blockquote><p>\u541E\u5410\u91CF\u548C\u505C\u987F\u65F6\u95F4\u662F\u4E92\u65A5\u7684\u3002 \u5BF9\u4E8E\u540E\u7AEF\u670D\u52A1(\u6BD4\u5982\u540E\u53F0\u8BA1\u7B97\u4EFB\u52A1)\uFF0C\u541E\u5410\u91CF\u4F18\u5148\u8003\u8651(\u5E76\u884C\u5783\u573E\u56DE\u6536)\uFF1B \u5BF9\u4E8E\u524D\u7AEF\u5E94\u7528\uFF0CRT\u54CD\u5E94\u65F6\u95F4\u4F18\u5148\u8003\u8651\uFF0C\u51CF\u5C11\u5783\u573E\u6536\u96C6\u65F6\u7684\u505C\u987F\u65F6\u95F4\uFF0C\u9002\u7528\u573A\u666F\u662FWeb\u7CFB\u7EDF(\u5E76\u53D1\u5783\u573E\u56DE\u6536)</p></blockquote><h3 id="_2-3-\u56DE\u6536\u5668\u7684jvm\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_2-3-\u56DE\u6536\u5668\u7684jvm\u53C2\u6570" aria-hidden="true">#</a> 2.3 <strong>\u56DE\u6536\u5668\u7684JVM\u53C2\u6570</strong></h3><ul><li>-XX:+UseSerialGC</li></ul><p>\u4E32\u884C\u5783\u573E\u56DE\u6536\uFF0C\u73B0\u5728\u57FA\u672C\u5F88\u5C11\u4F7F\u7528\u3002</p><ul><li>-XX:+UseParNewGC</li></ul><p>\u65B0\u751F\u4EE3\u4F7F\u7528\u5E76\u884C\uFF0C\u8001\u5E74\u4EE3\u4F7F\u7528\u4E32\u884C\uFF1B</p><ul><li>-XX:+UseConcMarkSweepGC</li></ul><p>\u65B0\u751F\u4EE3\u4F7F\u7528\u5E76\u884C\uFF0C\u8001\u5E74\u4EE3\u4F7F\u7528CMS(\u4E00\u822C\u90FD\u662F\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F)\uFF0CCMS\u662FConcurrent Mark Sweep\u7684\u7F29\u5199\uFF0C\u5E76\u53D1\u6807\u8BB0\u6E05\u9664\uFF0C\u4E00\u770B\u5C31\u662F\u8001\u5E74\u4EE3\u7684\u7B97\u6CD5\uFF0C\u6240\u4EE5\uFF0C\u5B83\u53EF\u4EE5\u4F5C\u4E3A\u8001\u5E74\u4EE3\u7684\u5783\u573E\u56DE\u6536\u5668\u3002CMS\u4E0D\u662F\u72EC\u5360\u5F0F\u7684\uFF0C\u5B83\u5173\u6CE8\u505C\u987F\u65F6\u95F4</p><ul><li>-XX:ParallelGCThreads</li></ul><p>\u6307\u5B9A\u5E76\u884C\u7684\u5783\u573E\u56DE\u6536\u7EBF\u7A0B\u7684\u6570\u91CF\uFF0C\u6700\u597D\u7B49\u4E8ECPU\u6570\u91CF</p><ul><li>-XX:+DisableExplicitGC</li></ul><p>\u7981\u7528System.gc()\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u89E6\u53D1Full GC\uFF0C\u8FD9\u662F\u5F88\u6D6A\u8D39\u6027\u80FD\u7684\uFF0CJVM\u4F1A\u5728\u9700\u8981GC\u7684\u65F6\u5019\u81EA\u5DF1\u89E6\u53D1GC\u3002</p><ul><li>-XX:CMSFullGCsBeforeCompaction</li></ul><p>\u5728\u591A\u5C11\u6B21GC\u540E\u8FDB\u884C\u5185\u5B58\u538B\u7F29\uFF0C\u8FD9\u4E2A\u662F\u56E0\u4E3A\u5E76\u884C\u6536\u96C6\u5668\u4E0D\u5BF9\u5185\u5B58\u7A7A\u95F4\u8FDB\u884C\u538B\u7F29\u7684\uFF0C\u6240\u4EE5\u8FD0\u884C\u4E00\u6BB5\u65F6\u95F4\u540E\u4F1A\u4EA7\u751F\u5F88\u591A\u788E\u7247\uFF0C\u4F7F\u5F97\u8FD0\u884C\u6548\u7387\u964D\u4F4E\u3002</p><ul><li>-XX:+CMSParallelRemarkEnabled</li></ul><p>\u964D\u4F4E\u6807\u8BB0\u505C\u987F</p><ul><li>-XX:+UseCMSCompactAtFullCollection</li></ul><p>\u5728\u6BCF\u4E00\u6B21Full GC\u65F6\u5BF9\u8001\u5E74\u4EE3\u533A\u57DF\u788E\u7247\u6574\u7406\uFF0C\u56E0\u4E3ACMS\u662F\u4E0D\u4F1A\u79FB\u52A8\u5185\u5B58\u7684\uFF0C\u56E0\u6B64\u4F1A\u975E\u5E38\u5BB9\u6613\u51FA\u73B0\u788E\u7247\u5BFC\u81F4\u5185\u5B58\u4E0D\u591F\u7528\u7684</p><ul><li>-XX:+UseCmsInitiatingOccupancyOnly</li></ul><p>\u4F7F\u7528\u624B\u52A8\u89E6\u53D1\u6216\u8005\u81EA\u5B9A\u4E49\u89E6\u53D1cms \u6536\u96C6\uFF0C\u540C\u65F6\u4E5F\u4F1A\u7981\u6B62hostspot \u81EA\u884C\u89E6\u53D1CMS GC</p><ul><li>-XX:CMSInitiatingOccupancyFraction</li></ul><p>\u4F7F\u7528CMS\u4F5C\u4E3A\u5783\u573E\u56DE\u6536\uFF0C\u4F7F\u752870%\u540E\u5F00\u59CBCMS\u6536\u96C6</p><ul><li>-XX:CMSInitiatingPermOccupancyFraction</li></ul><p>\u8BBE\u7F6Eperm gen\u4F7F\u7528\u8FBE\u5230\u591A\u5C11\uFF05\u6BD4\u65F6\u89E6\u53D1\u5783\u573E\u56DE\u6536\uFF0C\u9ED8\u8BA4\u662F92%</p><ul><li>-XX:+CMSIncrementalMode</li></ul><p>\u8BBE\u7F6E\u4E3A\u589E\u91CF\u6A21\u5F0F</p><ul><li>-XX:+CmsClassUnloadingEnabled</li></ul><p>CMS\u662F\u4E0D\u4F1A\u9ED8\u8BA4\u5BF9\u6C38\u4E45\u4EE3\u8FDB\u884C\u5783\u573E\u56DE\u6536\u7684\uFF0C\u8BBE\u7F6E\u6B64\u53C2\u6570\u5219\u662F\u5F00\u542F</p><ul><li>-XX:+PrintGCDetails</li></ul><p>\u5F00\u542F\u8BE6\u7EC6GC\u65E5\u5FD7\u6A21\u5F0F\uFF0C\u65E5\u5FD7\u7684\u683C\u5F0F\u662F\u548C\u6240\u4F7F\u7528\u7684\u7B97\u6CD5\u6709\u5173</p><ul><li>-XX:+PrintGCDateStamps</li></ul><p>\u5C06\u65F6\u95F4\u548C\u65E5\u671F\u4E5F\u52A0\u5165\u5230GC\u65E5\u5FD7\u4E2D</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',70),c={href:"https://pdai.tech/md/java/jvm/java-jvm-param.html",target:"_blank",rel:"noopener noreferrer"};function d(X,h){const e=u("ExternalLinkIcon");return a(),r("div",null,[s,l("p",null,[l("a",c,[o("\u8C03\u8BD5\u6392\u9519 - JVM \u8C03\u4F18\u53C2\u6570"),t(e)])])])}const v=i(p,[["render",d],["__file","java-jvm-param.html.vue"]]);export{v as default};
