import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as r,a as e,d as c,f as n,r as o}from"./app.ea05b52c.js";const l={},d=n('<h1 id="\u5206\u5E03\u5F0F\u7406\u8BBA-cap" tabindex="-1"><a class="header-anchor" href="#\u5206\u5E03\u5F0F\u7406\u8BBA-cap" aria-hidden="true">#</a> \u5206\u5E03\u5F0F\u7406\u8BBA-CAP</h1><h2 id="_1-cap-\u7406\u8BBA\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-cap-\u7406\u8BBA\u7B80\u4ECB" aria-hidden="true">#</a> 1. CAP \u7406\u8BBA\u7B80\u4ECB</h2><p>CAP\u7406\u8BBA\u662F\u5206\u5E03\u5F0F\u7CFB\u7EDF\u3001\u7279\u522B\u662F\u5206\u5E03\u5F0F\u5B58\u50A8\u9886\u57DF\u4E2D\u88AB\u8BA8\u8BBA\u7684\u6700\u591A\u7684\u7406\u8BBA\u3002\u5176\u4E2DC\u4EE3\u8868\u4E00\u81F4\u6027 (Consistency)\uFF0CA\u4EE3\u8868\u53EF\u7528\u6027 (Availability)\uFF0CP\u4EE3\u8868\u5206\u533A\u5BB9\u9519\u6027 (Partition tolerance)\u3002CAP\u7406\u8BBA\u544A\u8BC9\u6211\u4EECC\u3001A\u3001P\u4E09\u8005\u4E0D\u80FD\u540C\u65F6\u6EE1\u8DB3\uFF0C\u6700\u591A\u53EA\u80FD\u6EE1\u8DB3\u5176\u4E2D\u4E24\u4E2A\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/202212241416757.png" alt="image.png"></p><h3 id="_1-1-cap-\u4E09\u9009\u4E8C" tabindex="-1"><a class="header-anchor" href="#_1-1-cap-\u4E09\u9009\u4E8C" aria-hidden="true">#</a> 1.1 CAP \u4E09\u9009\u4E8C</h3><ul><li><code>\u4E00\u81F4\u6027 (Consistency)</code>: \u4E00\u4E2A\u5199\u64CD\u4F5C\u8FD4\u56DE\u6210\u529F\uFF0C\u90A3\u4E48\u4E4B\u540E\u7684\u8BFB\u8BF7\u6C42\u90FD\u5FC5\u987B\u8BFB\u5230\u8FD9\u4E2A\u65B0\u6570\u636E\uFF1B\u5982\u679C\u8FD4\u56DE\u5931\u8D25\uFF0C\u90A3\u4E48\u6240\u6709\u8BFB\u64CD\u4F5C\u90FD\u4E0D\u80FD\u8BFB\u5230\u8FD9\u4E2A\u6570\u636E\u3002\u6240\u6709\u8282\u70B9\u8BBF\u95EE\u540C\u4E00\u4EFD\u6700\u65B0\u7684\u6570\u636E\u3002</li><li><code>\u53EF\u7528\u6027 (Availability)</code>: \u5BF9\u6570\u636E\u66F4\u65B0\u5177\u5907\u9AD8\u53EF\u7528\u6027\uFF0C\u8BF7\u6C42\u80FD\u591F\u53CA\u65F6\u5904\u7406\uFF0C\u4E0D\u4F1A\u4E00\u76F4\u7B49\u5F85\uFF0C\u5373\u4F7F\u51FA\u73B0\u8282\u70B9\u5931\u6548\u3002</li><li><code>\u5206\u533A\u5BB9\u9519\u6027 (Partition tolerance)</code>: \u80FD\u5BB9\u5FCD\u7F51\u7EDC\u5206\u533A\uFF0C\u5728\u7F51\u7EDC\u65AD\u5F00\u7684\u60C5\u51B5\u4E0B\uFF0C\u88AB\u5206\u9694\u7684\u8282\u70B9\u4ECD\u80FD\u6B63\u5E38\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\u3002</li></ul><h2 id="_2-\u5BF9cap\u7406\u8BBA\u7684\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#_2-\u5BF9cap\u7406\u8BBA\u7684\u7406\u89E3" aria-hidden="true">#</a> 2. \u5BF9CAP\u7406\u8BBA\u7684\u7406\u89E3</h2><p>\u7406\u89E3CAP\u7406\u8BBA\u6700\u7B80\u5355\u7684\u65B9\u5F0F\u662F\u60F3\u8C61\u4E24\u4E2A\u526F\u672C\u5904\u4E8E\u5206\u533A\u4E24\u4FA7\uFF0C\u5373<strong>\u4E24\u4E2A\u526F\u672C\u4E4B\u95F4\u7684\u7F51\u7EDC\u65AD\u5F00\uFF0C\u4E0D\u80FD\u901A\u4FE1</strong>\u3002</p><ul><li>\u5982\u679C\u5141\u8BB8\u5176\u4E2D\u4E00\u4E2A\u526F\u672C\u66F4\u65B0\uFF0C\u5219\u4F1A\u5BFC\u81F4\u6570\u636E\u4E0D\u4E00\u81F4\uFF0C\u5373\u4E27\u5931\u4E86C\u6027\u8D28\u3002</li><li>\u5982\u679C\u4E3A\u4E86\u4FDD\u8BC1\u4E00\u81F4\u6027\uFF0C\u5C06\u5206\u533A\u67D0\u4E00\u4FA7\u7684\u526F\u672C\u8BBE\u7F6E\u4E3A\u4E0D\u53EF\u7528\uFF0C\u90A3\u4E48\u53C8\u4E27\u5931\u4E86A\u6027\u8D28\u3002</li><li>\u9664\u975E\u4E24\u4E2A\u526F\u672C\u53EF\u4EE5\u4E92\u76F8\u901A\u4FE1\uFF0C\u624D\u80FD\u65E2\u4FDD\u8BC1C\u53C8\u4FDD\u8BC1A\uFF0C\u8FD9\u53C8\u4F1A\u5BFC\u81F4\u4E27\u5931P\u6027\u8D28\u3002</li></ul><p>\u4E00\u822C\u6765\u8BF4\u4F7F\u7528\u7F51\u7EDC\u901A\u4FE1\u7684\u5206\u5E03\u5F0F\u7CFB\u7EDF\uFF0C\u65E0\u6CD5\u820D\u5F03P\u6027\u8D28\uFF0C\u90A3\u4E48\u5C31\u53EA\u80FD\u5728\u4E00\u81F4\u6027\u548C\u53EF\u7528\u6027\u4E0A\u505A\u4E00\u4E2A\u8270\u96BE\u7684\u9009\u62E9\u3002</p><blockquote><p>CAP\u7406\u8BBA\u7684\u8868\u8FF0\u5F88\u597D\u5730\u670D\u52A1\u4E86\u5B83\u7684\u76EE\u7684\uFF0C\u5F00\u9614\u4E86\u5206\u5E03\u5F0F\u7CFB\u7EDF\u8BBE\u8BA1\u8005\u7684\u601D\u8DEF\uFF0C\u5728\u591A\u6837\u5316\u7684\u53D6\u820D\u65B9\u6848\u4E0B\u8BBE\u8BA1\u51FA\u591A\u6837\u5316\u7684\u7CFB\u7EDF\u3002\u5728\u8FC7\u53BB\u7684\u5341\u51E0\u5E74\u91CC\u786E\u5B9E\u6D8C\u73B0\u4E86\u4E0D\u8BA1\u5176\u6570\u7684\u65B0\u7CFB\u7EDF\uFF0C\u4E5F\u968F\u4E4B\u5728\u4E00\u81F4\u6027\u548C\u53EF\u7528\u6027\u7684\u76F8\u5BF9\u5173\u7CFB\u4E0A\u4EA7\u751F\u4E86\u76F8\u5F53\u591A\u7684\u4E89\u8BBA\u3002</p></blockquote><h2 id="_3-cap\u7406\u8BBA\u6DF1\u5165\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#_3-cap\u7406\u8BBA\u6DF1\u5165\u7406\u89E3" aria-hidden="true">#</a> 3. CAP\u7406\u8BBA\u6DF1\u5165\u7406\u89E3</h2><p>\u5728CAP\u7406\u8BBA\u63D0\u51FA\u5341\u4E8C\u5E74\u4E4B\u540E\uFF0C\u5176\u4F5C\u8005\u53C8\u51FA\u6765\u8F9F\u8C23\u3002\u201C\u4E09\u9009\u4E8C\u201D\u7684\u516C\u5F0F\u4E00\u76F4\u5B58\u5728\u7740\u8BEF\u5BFC\u6027\uFF0C\u5B83\u4F1A\u8FC7\u5206\u7B80\u5355\u5316\u5404\u6027\u8D28\u4E4B\u95F4\u7684\u76F8\u4E92\u5173\u7CFB:</p><ul><li>\u9996\u5148\uFF0C\u7531\u4E8E\u5206\u533A\u5F88\u5C11\u53D1\u751F\uFF0C\u90A3\u4E48\u5728\u7CFB\u7EDF\u4E0D\u5B58\u5728\u5206\u533A\u7684\u60C5\u51B5\u4E0B\u6CA1\u4EC0\u4E48\u7406\u7531\u727A\u7272C\u6216A\u3002</li><li>\u5176\u6B21\uFF0CC\u4E0EA\u4E4B\u95F4\u7684\u53D6\u820D\u53EF\u4EE5\u5728\u540C\u4E00\u7CFB\u7EDF\u5185\u4EE5\u975E\u5E38\u7EC6\u5C0F\u7684\u7C92\u5EA6\u53CD\u590D\u53D1\u751F\uFF0C\u800C\u6BCF\u4E00\u6B21\u7684\u51B3\u7B56\u53EF\u80FD\u56E0\u4E3A\u5177\u4F53\u7684\u64CD\u4F5C\uFF0C\u4E43\u81F3\u56E0\u4E3A\u7275\u6D89\u5230\u7279\u5B9A\u7684\u6570\u636E\u6216\u7528\u6237\u800C\u6709\u6240\u4E0D\u540C\u3002</li><li>\u6700\u540E\uFF0C\u8FD9\u4E09\u79CD\u6027\u8D28\u90FD\u53EF\u4EE5\u5728\u7A0B\u5EA6\u4E0A\u8861\u91CF\uFF0C\u5E76\u4E0D\u662F\u975E\u9ED1\u5373\u767D\u7684\u6709\u6216\u65E0\u3002\u53EF\u7528\u6027\u663E\u7136\u662F\u57280%\u5230100%\u4E4B\u95F4\u8FDE\u7EED\u53D8\u5316\u7684\uFF0C\u4E00\u81F4\u6027\u5206\u5F88\u591A\u7EA7\u522B\uFF0C\u8FDE\u5206\u533A\u4E5F\u53EF\u4EE5\u7EC6\u5206\u4E3A\u4E0D\u540C\u542B\u4E49\uFF0C\u5982\u7CFB\u7EDF\u5185\u7684\u4E0D\u540C\u90E8\u5206\u5BF9\u4E8E\u662F\u5426\u5B58\u5728\u5206\u533A\u53EF\u4EE5\u6709\u4E0D\u4E00\u6837\u7684\u8BA4\u77E5\u3002</li></ul><p>\u6240\u4EE5\u4E00\u81F4\u6027\u548C\u53EF\u7528\u6027\u5E76\u4E0D\u662F\u6C34\u706B\u4E0D\u5BB9\uFF0C\u975E\u6B64\u5373\u5F7C\u7684\u3002Paxos\u3001Raft\u7B49\u5206\u5E03\u5F0F\u4E00\u81F4\u6027\u7B97\u6CD5\u5C31\u662F\u5728\u4E00\u81F4\u6027\u548C\u53EF\u7528\u6027\u4E4B\u95F4\u505A\u5230\u4E86\u5F88\u597D\u7684\u5E73\u8861\u7684\u89C1\u8BC1\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',16),s={href:"https://pdai.tech/md/dev-spec/spec/dev-th-cap.html",target:"_blank",rel:"noopener noreferrer"},h=e("strong",null,"\u5206\u5E03\u5F0F\u7406\u8BBA - CAP",-1);function p(_,u){const a=o("ExternalLinkIcon");return t(),r("div",null,[d,e("p",null,[e("a",s,[h,c(a)])])])}const f=i(l,[["render",p],["__file","distributed-cap.html.vue"]]);export{f as default};
