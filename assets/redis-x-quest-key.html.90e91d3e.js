import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as a,f as d}from"./app.f5d9e013.js";const o={},i=d('<h1 id="\u5982\u4F55\u89E3\u51B3-redis-\u7684\u5E76\u53D1\u7ADE\u4E89-key-\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u89E3\u51B3-redis-\u7684\u5E76\u53D1\u7ADE\u4E89-key-\u95EE\u9898" aria-hidden="true">#</a> \u5982\u4F55\u89E3\u51B3 Redis \u7684\u5E76\u53D1\u7ADE\u4E89 Key \u95EE\u9898</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u6240\u8C13 redis \u7684\u5E76\u53D1\u7ADE\u4E89 key \u7684\u95EE\u9898\u4E5F\u5C31\u662F\u591A\u4E2A\u7CFB\u7EDF\u540C\u65F6\u5BF9\u4E00\u4E2Akey \u8FDB\u884C\u64CD\u4F5C\uFF0C\u4F46\u662F\u6700\u540E\u6267\u884C\u7684\u987A\u5E8F\u548C\u6211\u4EEC\u671F\u671B\u7684\u987A\u5E8F\u4E0D\u540C\uFF0C\u8FD9\u6837\u4E5F\u5C31\u5BFC\u81F4\u4E86\u7ED3\u679C\u7684\u4E0D\u540C</p><h2 id="_2-\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 2.\u89E3\u51B3\u65B9\u6848</h2><h2 id="_2-1-\u5206\u5E03\u5F0F\u9501" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5206\u5E03\u5F0F\u9501" aria-hidden="true">#</a> 2.1 \u5206\u5E03\u5F0F\u9501</h2><p>\u5206\u5E03\u5F0F\u9501\uFF08zookeeper \u548C redis \u90FD\u53EF\u4EE5\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501\uFF09\u3002\uFF08\u5982\u679C\u4E0D\u5B58\u5728 Redis \u7684\u5E76\u53D1\u7ADE\u4E89 Key \u95EE\u9898\uFF0C\u4E0D\u8981\u4F7F\u7528\u5206\u5E03\u5F0F\u9501\uFF0C\u8FD9\u6837\u4F1A\u5F71\u54CD\u6027\u80FD\uFF09</p><blockquote><p>\u57FA\u4E8Ezookeeper\u4E34\u65F6\u6709\u5E8F\u8282\u70B9\u53EF\u4EE5\u5B9E\u73B0\u7684\u5206\u5E03\u5F0F\u9501\u3002\u5927\u81F4\u601D\u60F3\u4E3A\uFF1A\u6BCF\u4E2A\u5BA2\u6237\u7AEF\u5BF9\u67D0\u4E2A\u65B9\u6CD5\u52A0\u9501\u65F6\uFF0C\u5728zookeeper\u4E0A\u7684\u4E0E\u8BE5\u65B9\u6CD5\u5BF9\u5E94\u7684\u6307\u5B9A\u8282\u70B9\u7684\u76EE\u5F55\u4E0B\uFF0C\u751F\u6210\u4E00\u4E2A\u552F\u4E00\u7684\u77AC\u65F6\u6709\u5E8F\u8282\u70B9\u3002 \u5224\u65AD\u662F\u5426\u83B7\u53D6\u9501\u7684\u65B9\u5F0F\u5F88\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u5224\u65AD\u6709\u5E8F\u8282\u70B9\u4E2D\u5E8F\u53F7\u6700\u5C0F\u7684\u4E00\u4E2A\u3002 \u5F53\u91CA\u653E\u9501\u7684\u65F6\u5019\uFF0C\u53EA\u9700\u5C06\u8FD9\u4E2A\u77AC\u65F6\u8282\u70B9\u5220\u9664\u5373\u53EF\u3002\u540C\u65F6\uFF0C\u5176\u53EF\u4EE5\u907F\u514D\u670D\u52A1\u5B95\u673A\u5BFC\u81F4\u7684\u9501\u65E0\u6CD5\u91CA\u653E\uFF0C\u800C\u4EA7\u751F\u7684\u6B7B\u9501\u95EE\u9898\u3002\u5B8C\u6210\u4E1A\u52A1\u6D41\u7A0B\u540E\uFF0C\u5220\u9664\u5BF9\u5E94\u7684\u5B50\u8282\u70B9\u91CA\u653E\u9501\u3002</p><p>\u5728\u5B9E\u8DF5\u4E2D\uFF0C\u5F53\u7136\u662F\u4ECE\u4EE5\u53EF\u9760\u6027\u4E3A\u4E3B\u3002\u6240\u4EE5\u9996\u63A8Zookeeper\u3002</p></blockquote>',7),t=[i];function s(h,c){return r(),a("div",null,t)}const p=e(o,[["render",s],["__file","redis-x-quest-key.html.vue"]]);export{p as default};
