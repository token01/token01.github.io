import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as r,f as i}from"./app.f6fb4051.js";const d={},h=i('<h1 id="redis\u7F13\u5B58\u7A7F\u900F" tabindex="-1"><a class="header-anchor" href="#redis\u7F13\u5B58\u7A7F\u900F" aria-hidden="true">#</a> Redis\u7F13\u5B58\u7A7F\u900F</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u4E00\u822C\u662F\u9ED1\u5BA2\u6545\u610F\u53BB\u8BF7\u6C42\u7F13\u5B58\u4E2D\u4E0D\u5B58\u5728\u7684\u6570\u636E\uFF0C\u5BFC\u81F4\u6240\u6709\u7684\u8BF7\u6C42\u90FD\u843D\u5230\u6570\u636E\u5E93\u4E0A\uFF0C\u9020\u6210\u6570\u636E\u5E93\u77ED\u65F6\u95F4\u5185\u627F\u53D7\u5927\u91CF\u8BF7\u6C42\u800C\u5D29\u6389</p><blockquote><p>\u6211\u4EECredis\u4E2D\u7684\u6570\u636E\u90FD\u662F\u4ECE\u6570\u636E\u5E93\u4E2D\u653E\u8FDB\u6765\u7684\uFF0C\u4ED6\u4E4B\u6240\u4EE5\u4F1A\u7A7F\u900F\u662F\u56E0\u4E3A\u5728redis\u91CC\u9762\u6CA1\u6709\u67E5\u5230\uFF0C\u5728\u6570\u636E\u5E93\u91CC\u4E5F\u6CA1\u6709\u67E5\u5230\u3002</p><p>\u8FD9\u6837\u6570\u636E\u5E93\u5C31\u4E0D\u80FD\u5427\u8FD9\u6761\u6570\u636E\u653E\u5230redis\u91CC\uFF0Credis\u5C31\u62FF\u4E0D\u5230\u90A3\u6761\u6570\u636E\u3002\u4F60\u6BCF\u6B21\u8981\u6765\u90A3\u6761\u6570\u636E\u7684\u65F6\u5019\uFF0C\u90FD\u8981\u53BB\u67E5\u6570\u636E\u5E93\uFF0C\u7136\u540E\u6570\u636E\u5E93\u8FD8\u6CA1\u6709\u4E00\u4E2A\u53CD\u9988\uFF0C\u8FD9\u6837\u5C31\u662F\u4E00\u4E2A\u6076\u6027\u5FAA\u73AF\u3002\u5BFC\u81F4\u4E86\u7F13\u5B58\u7A7F\u900F</p><p>\u5982\u679C\u5927\u91CF\u7684\u8BBF\u95EE\u6216\u8005\u6076\u610F\u7684\u653B\u51FB\uFF0C\u4F60\u76F4\u63A5\u53BB\u67E5\u4F60\u90A3\u6761\u6CA1\u6709\u7684\u6570\u636E\u3002\u4ED6\u4F1A\u7ED9\u4F60\u7684\u6570\u636E\u5E93\u9020\u6210\u5F88\u5927\u538B\u529B\u3002\u4E5F\u5C31\u662F\u8BF4\u4ED6\u8DF3\u8FC7\u4E86redis\u7F13\u5B58\u3002\u6211\u4EEC\u4F7F\u7528redis \u5C31\u662F\u4E3A\u4E86\u51CF\u5C11\u6570\u636E\u5E93\u538B\u529B\uFF0C\u4F46\u662F\u73B0\u5728redis \u5C31\u6CA1\u6709\u8D77\u5230\u76F8\u5E94\u7684\u4F5C\u7528\u3002\u8FD9\u6837\u5C31\u7ED9\u6570\u636E\u5E93\u9020\u6210\u4E86\u5F88\u5927\u538B\u529B</p></blockquote><h2 id="_2-\u89E3\u51B3\u529E\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u51B3\u529E\u6CD5" aria-hidden="true">#</a> 2. \u89E3\u51B3\u529E\u6CD5</h2><h3 id="\u65B9\u68481-\u5E03\u9686\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#\u65B9\u68481-\u5E03\u9686\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> \u65B9\u68481\uFF1A\u5E03\u9686\u8FC7\u6EE4\u5668</h3><p>\u5C06\u6240\u6709\u53EF\u80FD\u5B58\u5728\u7684\u6570\u636E\u54C8\u5E0C\u5230\u4E00\u4E2A\u8DB3\u591F\u5927\u7684bitmap\u4E2D\uFF0C\u4E00\u4E2A\u4E00\u5B9A\u4E0D\u5B58\u5728\u7684\u6570\u636E\u4F1A\u88AB \u8FD9\u4E2Abitmap\u62E6\u622A\u6389\u3002\u4ECE\u800C\u907F\u514D\u4E86\u5BF9\u5E95\u5C42\u5B58\u50A8\u7CFB\u7EDF\u7684\u67E5\u8BE2\u538B\u529B</p><h3 id="\u65B9\u68482-\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\u4E5F\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u65B9\u68482-\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\u4E5F\u7F13\u5B58" aria-hidden="true">#</a> \u65B9\u68482\uFF1A\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\u4E5F\u7F13\u5B58</h3><p>\u5982\u679C\u4E00\u4E2A\u67E5\u8BE2\u8FD4\u56DE\u7684\u6570\u636E\u4E3A\u7A7A\uFF08\u4E0D\u7BA1\u662F\u6570\u636E\u4E0D\u5B58\u5728\uFF0C\u8FD8\u662F\u7CFB\u7EDF\u6545\u969C\uFF09\uFF0C\u6211\u4EEC\u4ECD\u7136\u628A\u8FD9\u4E2A\u7A7A\u7ED3\u679C\u8FDB\u884C\u7F13\u5B58\uFF0C\u4F46\u5B83\u7684\u8FC7\u671F\u65F6\u95F4\u4F1A\u5F88\u77ED\uFF0C\u6700\u957F\u4E0D\u8D85\u8FC75\u5206\u949F</p><h3 id="\u65B9\u68483" tabindex="-1"><a class="header-anchor" href="#\u65B9\u68483" aria-hidden="true">#</a> \u65B9\u68483\uFF1A</h3><p>\u5982\u679C\u6570\u636E\u5E93\u6CA1\u6709\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A\u4ED6\u7684key\u5B58\u4E0A\uFF0C\u7ED9\u4ED6\u8FD4\u56DEnull\u3002\u7136\u540E\u628A\u8FD9\u4E2Anull \u5B58\u5728redis\u91CC\u9762</p><h3 id="\u65B9\u68484" tabindex="-1"><a class="header-anchor" href="#\u65B9\u68484" aria-hidden="true">#</a> \u65B9\u68484\uFF1A</h3><p>\u5982\u679C\u4E00\u4E2Aip\u9891\u7E41\u7684\u8BBF\u95EE\u4F60\u6570\u636E\u5E93\u91CC\u9762\u6CA1\u6709\u7684\u90A3\u4E2A\u5B57\u6BB5\uFF0C\u90A3\u4E48\u6211\u5C31\u8BA4\u5B9A\u8FD9\u662F\u4E00\u6761\u6076\u6027\u653B\u51FB\u884C\u4E3A\u3002\u6211\u4F1A\u9501\u5B9Aip</p>',13),t=[h];function s(n,c){return a(),r("div",null,t)}const l=e(d,[["render",s],["__file","redis-x-cache-penetration.html.vue"]]);export{l as default};
