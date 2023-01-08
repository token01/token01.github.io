import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as r,a as e,d as s,f as l,r as t}from"./app.f386ac8b.js";const o={},h=l('<h1 id="redis\u5165\u95E8-redis\u6982\u5FF5\u548C\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#redis\u5165\u95E8-redis\u6982\u5FF5\u548C\u57FA\u7840" aria-hidden="true">#</a> Redis\u5165\u95E8 - Redis\u6982\u5FF5\u548C\u57FA\u7840</h1><h2 id="_1-\u4EC0\u4E48\u662Fredis" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662Fredis" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662Fredis</h2><p>Redis\u662F\u4E00\u6B3E\u5185\u5B58\u9AD8\u901F\u7F13\u5B58\u6570\u636E\u5E93\u3002Redis\u5168\u79F0\u4E3A\uFF1A<strong>Remote Dictionary Server</strong>\uFF08\u8FDC\u7A0B\u6570\u636E(\u5B57\u5178)\u670D\u52A1\uFF09\uFF0C\u4F7F\u7528C\u8BED\u8A00\u7F16\u5199\uFF0CRedis\u662F\u4E00\u4E2Akey-value\u5B58\u50A8\u7CFB\u7EDF\uFF08\u952E\u503C\u5B58\u50A8\u7CFB\u7EDF\uFF09\uFF0C\u652F\u6301\u4E30\u5BCC\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u5982\uFF1AString\u3001list\u3001set\u3001zset\u3001hash\u3002</p><p>Redis\u662F\u4E00\u79CD\u652F\u6301key-value\u7B49\u591A\u79CD\u6570\u636E\u7ED3\u6784\u7684\u5B58\u50A8\u7CFB\u7EDF\u3002\u53EF\u7528\u4E8E\u7F13\u5B58\uFF0C\u4E8B\u4EF6\u53D1\u5E03\u6216\u8BA2\u9605\uFF0C\u9AD8\u901F\u961F\u5217\u7B49\u573A\u666F\u3002\u652F\u6301\u7F51\u7EDC\uFF0C\u63D0\u4F9B\u5B57\u7B26\u4E32\uFF0C\u54C8\u5E0C\uFF0C\u5217\u8868\uFF0C\u961F\u5217\uFF0C\u96C6\u5408\u7ED3\u6784\u76F4\u63A5\u5B58\u53D6\uFF0C\u57FA\u4E8E\u5185\u5B58\uFF0C\u53EF\u6301\u4E45\u5316\u3002</p><h2 id="_2-\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528redis" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528redis" aria-hidden="true">#</a> 2. \u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528Redis</h2><blockquote><p>\u4E00\u4E2A\u4EA7\u54C1\u7684\u4F7F\u7528\u573A\u666F\u80AF\u5B9A\u662F\u9700\u8981\u6839\u636E\u4EA7\u54C1\u7684\u7279\u6027\uFF0C\u5148\u5217\u4E3E\u4E00\u4E0BRedis\u7684\u7279\u70B9\uFF1A</p></blockquote><ul><li>\u8BFB\u5199\u6027\u80FD\u4F18\u5F02 <ul><li>Redis\u80FD\u8BFB\u7684\u901F\u5EA6\u662F110000\u6B21/s,\u5199\u7684\u901F\u5EA6\u662F81000\u6B21/s \uFF08\u6D4B\u8BD5\u6761\u4EF6\u89C1\u4E0B\u4E00\u8282\uFF09\u3002</li></ul></li><li>\u6570\u636E\u7C7B\u578B\u4E30\u5BCC <ul><li>Redis\u652F\u6301\u4E8C\u8FDB\u5236\u6848\u4F8B\u7684 Strings, Lists, Hashes, Sets \u53CA Ordered Sets \u6570\u636E\u7C7B\u578B\u64CD\u4F5C\u3002</li></ul></li><li>\u539F\u5B50\u6027 <ul><li>Redis\u7684\u6240\u6709\u64CD\u4F5C\u90FD\u662F\u539F\u5B50\u6027\u7684\uFF0C\u540C\u65F6Redis\u8FD8\u652F\u6301\u5BF9\u51E0\u4E2A\u64CD\u4F5C\u5408\u5E76\u540E\u7684\u539F\u5B50\u6027\u6267\u884C\u3002</li></ul></li><li>\u4E30\u5BCC\u7684\u7279\u6027 <ul><li>Redis\u652F\u6301 publish/subscribe, \u901A\u77E5, key \u8FC7\u671F\u7B49\u7279\u6027\u3002</li></ul></li><li>\u6301\u4E45\u5316 <ul><li>Redis\u652F\u6301RDB, AOF\u7B49\u6301\u4E45\u5316\u65B9\u5F0F</li></ul></li><li>\u53D1\u5E03\u8BA2\u9605 <ul><li>Redis\u652F\u6301\u53D1\u5E03/\u8BA2\u9605\u6A21\u5F0F</li></ul></li><li>\u5206\u5E03\u5F0F <ul><li>Redis Cluster</li></ul></li></ul><h2 id="_3-redis\u7684\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_3-redis\u7684\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> 3. Redis\u7684\u4F7F\u7528\u573A\u666F</h2><blockquote><p>redis\u5E94\u7528\u573A\u666F\u603B\u7ED3redis\u5E73\u65F6\u6211\u4EEC\u7528\u5230\u7684\u5730\u65B9\u86EE\u591A\u7684\uFF0C\u4E0B\u9762\u5C31\u4E86\u89E3\u7684\u5E94\u7528\u573A\u666F\u505A\u4E2A\u603B\u7ED3\uFF1A</p></blockquote><h3 id="_3-1-\u70ED\u70B9\u6570\u636E\u7684\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_3-1-\u70ED\u70B9\u6570\u636E\u7684\u7F13\u5B58" aria-hidden="true">#</a> 3.1 \u70ED\u70B9\u6570\u636E\u7684\u7F13\u5B58</h3><p>\u7F13\u5B58\u662FRedis\u6700\u5E38\u89C1\u7684\u5E94\u7528\u573A\u666F\uFF0C\u4E4B\u6240\u6709\u8FD9\u4E48\u4F7F\u7528\uFF0C\u4E3B\u8981\u662F\u56E0\u4E3ARedis\u8BFB\u5199\u6027\u80FD\u4F18\u5F02\u3002\u800C\u4E14\u9010\u6E10\u6709\u53D6\u4EE3memcached\uFF0C\u6210\u4E3A\u9996\u9009\u670D\u52A1\u7AEF\u7F13\u5B58\u7684\u7EC4\u4EF6\u3002\u800C\u4E14\uFF0CRedis\u5185\u90E8\u662F\u652F\u6301\u4E8B\u52A1\u7684\uFF0C\u5728\u4F7F\u7528\u65F6\u5019\u80FD\u6709\u6548\u4FDD\u8BC1\u6570\u636E\u7684\u4E00\u81F4\u6027\u3002</p><p>\u4F5C\u4E3A\u7F13\u5B58\u4F7F\u7528\u65F6\uFF0C\u4E00\u822C\u6709\u4E24\u79CD\u65B9\u5F0F\u4FDD\u5B58\u6570\u636E\uFF1A</p><h4 id="_3-1-1-\u5199\u5165\u6570\u636E\u65F6\u673A-\u65B9\u6848\u4E00" tabindex="-1"><a class="header-anchor" href="#_3-1-1-\u5199\u5165\u6570\u636E\u65F6\u673A-\u65B9\u6848\u4E00" aria-hidden="true">#</a> 3.1.1 \u5199\u5165\u6570\u636E\u65F6\u673A--\u65B9\u6848\u4E00\uFF1A</h4><p><strong>\u8BFB\u53D6\u524D\uFF0C\u5148\u53BB\u8BFBRedis\uFF0C\u5982\u679C\u6CA1\u6709\u6570\u636E\uFF0C\u8BFB\u53D6\u6570\u636E\u5E93\uFF0C\u5C06\u6570\u636E\u62C9\u5165Redis\u3002</strong></p><p>\u5B9E\u65BD\u8D77\u6765\u7B80\u5355\uFF0C\u4F46\u662F\u6709\u4E24\u4E2A\u9700\u8981\u6CE8\u610F\u7684\u5730\u65B9\uFF1A</p><ul><li>\u907F\u514D\u7F13\u5B58\u51FB\u7A7F\u3002\uFF08\u6570\u636E\u5E93\u6CA1\u6709\u5C31\u9700\u8981\u547D\u4E2D\u7684\u6570\u636E\uFF0C\u5BFC\u81F4Redis\u4E00\u76F4\u6CA1\u6709\u6570\u636E\uFF0C\u800C\u4E00\u76F4\u547D\u4E2D\u6570\u636E\u5E93\u3002\uFF09</li><li>\u6570\u636E\u7684\u5B9E\u65F6\u6027\u76F8\u5BF9\u4F1A\u5DEE\u4E00\u70B9\u3002</li></ul><h4 id="_3-1-2-\u5199\u5165\u6570\u636E\u65F6\u673A-\u65B9\u6848\u4E8C" tabindex="-1"><a class="header-anchor" href="#_3-1-2-\u5199\u5165\u6570\u636E\u65F6\u673A-\u65B9\u6848\u4E8C" aria-hidden="true">#</a> 3.1.2 \u5199\u5165\u6570\u636E\u65F6\u673A--\u65B9\u6848\u4E8C\uFF1A</h4><p><strong>\u63D2\u5165\u6570\u636E\u65F6\uFF0C\u540C\u65F6\u5199\u5165Redis\u3002</strong></p><p>\u6570\u636E\u5B9E\u65F6\u6027\u5F3A\uFF0C\u4F46\u662F\u5F00\u53D1\u65F6\u4E0D\u4FBF\u4E8E\u7EDF\u4E00\u5904\u7406\u3002</p><h4 id="_3-1-3-\u4E24\u79CD\u5199\u5165\u65B9\u6848\u5982\u4F55\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#_3-1-3-\u4E24\u79CD\u5199\u5165\u65B9\u6848\u5982\u4F55\u9009\u62E9" aria-hidden="true">#</a> 3.1.3 \u4E24\u79CD\u5199\u5165\u65B9\u6848\u5982\u4F55\u9009\u62E9</h4><p>\u5F53\u7136\uFF0C\u4E24\u79CD\u65B9\u5F0F\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u6765\u9002\u7528\u3002\u5982\uFF1A</p><ul><li>\u65B9\u6848\u4E00\u9002\u7528\u4E8E\u5BF9\u4E8E\u6570\u636E\u5B9E\u65F6\u6027\u8981\u6C42\u4E0D\u662F\u7279\u522B\u9AD8\u7684\u573A\u666F\u3002</li><li>\u65B9\u6848\u4E8C\u9002\u7528\u4E8E\u5B57\u5178\u8868\u3001\u6570\u636E\u91CF\u4E0D\u5927\u7684\u6570\u636E\u5B58\u50A8\u3002</li></ul><blockquote><p>\u5728\u9879\u76EE\u4E2D\u4E00\u822C\u4E24\u79CD\u63D2\u5165\u65F6\u673A\u90FD\u7528\uFF0C\u589E\u5220\u6539\u5B8C\u6210\u540E\u90FD\u5199\u5165\u7F13\u5B58\u3002</p><p>\u67E5\u7684\u65F6\u5019\u65E0\u6570\u636E\uFF0C\u67E5\u5B8C\u6570\u636E\u5E93\u540E\u8FD8\u8981\u518D\u5199\u5165\u7F13\u5B58</p></blockquote><h3 id="_3-2-\u9650\u65F6\u4E1A\u52A1\u7684\u8FD0\u7528" tabindex="-1"><a class="header-anchor" href="#_3-2-\u9650\u65F6\u4E1A\u52A1\u7684\u8FD0\u7528" aria-hidden="true">#</a> 3.2 \u9650\u65F6\u4E1A\u52A1\u7684\u8FD0\u7528</h3><p>redis\u4E2D\u53EF\u4EE5\u4F7F\u7528expire\u547D\u4EE4\u8BBE\u7F6E\u4E00\u4E2A\u952E\u7684\u751F\u5B58\u65F6\u95F4\uFF0C\u5230\u65F6\u95F4\u540Eredis\u4F1A\u5220\u9664\u5B83\u3002\u5229\u7528\u8FD9\u4E00\u7279\u6027\u53EF\u4EE5\u8FD0\u7528\u5728\u9650\u65F6\u7684\u4F18\u60E0\u6D3B\u52A8\u4FE1\u606F\u3001\u624B\u673A\u9A8C\u8BC1\u7801\uFF0C\u767B\u5F55token \u8FC7\u671F\u65F6\u95F4\u7B49\u4E1A\u52A1\u573A\u666F\u3002</p><blockquote><p>\u5728\u82E5\u4F9D\u4E2D\u4E3B\u8981\u5E94\u7528\u4E8E</p><ul><li>\u767B\u5F55\u7684token\u8FC7\u671F</li><li>\u56FE\u7247\u9A8C\u8BC1\u7801</li><li>\u9650\u6D41\u7B97\u6CD5\u4E5F\u6709\u7528\u5230</li></ul></blockquote><h3 id="_3-3-\u8BA1\u6570\u5668\u76F8\u5173\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_3-3-\u8BA1\u6570\u5668\u76F8\u5173\u95EE\u9898" aria-hidden="true">#</a> 3.3 \u8BA1\u6570\u5668\u76F8\u5173\u95EE\u9898</h3><p>redis\u7531\u4E8Eincrby\u547D\u4EE4\u53EF\u4EE5\u5B9E\u73B0\u539F\u5B50\u6027\u7684\u9012\u589E\uFF0C\u6240\u4EE5\u53EF\u4EE5\u8FD0\u7528\u4E8E\u9AD8\u5E76\u53D1\u7684\u79D2\u6740\u6D3B\u52A8\u3001\u5206\u5E03\u5F0F\u5E8F\u5217\u53F7\u7684\u751F\u6210\u3001\u5177\u4F53\u4E1A\u52A1\u8FD8\u4F53\u73B0\u5728\u6BD4\u5982\u9650\u5236\u4E00\u4E2A\u624B\u673A\u53F7\u53D1\u591A\u5C11\u6761\u77ED\u4FE1\u3001\u4E00\u4E2A\u63A5\u53E3\u4E00\u5206\u949F\u9650\u5236\u591A\u5C11\u8BF7\u6C42\u3001\u4E00\u4E2A\u63A5\u53E3\u4E00\u5929\u9650\u5236\u8C03\u7528\u591A\u5C11\u6B21\u7B49\u7B49\u3002</p><blockquote><p>\u82E5\u4F9D\u4E2D</p><ul><li>\u9650\u6D41\uFF1A\u4F7F\u7528reids lua \u811A\u672C\u9012\u589E\u8BBF\u95EE\u6B21\u6570</li></ul><p>\u81EA\u5DF1\u9879\u76EE\u4E2D</p><ul><li>\u5206\u5E03\u5F0F\u5E8F\u5217\u53F7\u751F\u6210/ \u5546\u57CE\u8BA2\u5355id</li></ul></blockquote><h3 id="_3-4-\u5206\u5E03\u5F0F\u9501" tabindex="-1"><a class="header-anchor" href="#_3-4-\u5206\u5E03\u5F0F\u9501" aria-hidden="true">#</a> 3.4 \u5206\u5E03\u5F0F\u9501</h3><p>\u8FD9\u4E2A\u4E3B\u8981\u5229\u7528redis\u7684setnx\u547D\u4EE4\u8FDB\u884C\uFF0Csetnx\uFF1A&quot;set if not exists&quot;\u5C31\u662F\u5982\u679C\u4E0D\u5B58\u5728\u5219\u6210\u529F\u8BBE\u7F6E\u7F13\u5B58\u540C\u65F6\u8FD4\u56DE1\uFF0C\u5426\u5219\u8FD4\u56DE0 \uFF0C\u8FD9\u4E2A\u7279\u6027\u5728\u5F88\u591A\u540E\u53F0\u4E2D\u90FD\u6709\u6240\u8FD0\u7528\uFF0C\u56E0\u4E3A\u6211\u4EEC\u670D\u52A1\u5668\u662F\u96C6\u7FA4\u7684\uFF0C\u5B9A\u65F6\u4EFB\u52A1\u53EF\u80FD\u5728\u4E24\u53F0\u673A\u5668\u4E0A\u90FD\u4F1A\u8FD0\u884C\uFF0C\u6240\u4EE5\u5728\u5B9A\u65F6\u4EFB\u52A1\u4E2D\u9996\u5148 \u901A\u8FC7setnx\u8BBE\u7F6E\u4E00\u4E2Alock\uFF0C \u5982\u679C\u6210\u529F\u8BBE\u7F6E\u5219\u6267\u884C\uFF0C\u5982\u679C\u6CA1\u6709\u6210\u529F\u8BBE\u7F6E\uFF0C\u5219\u8868\u660E\u8BE5\u5B9A\u65F6\u4EFB\u52A1\u5DF2\u6267\u884C\u3002 \u5F53\u7136\u7ED3\u5408\u5177\u4F53\u4E1A\u52A1\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7ED9\u8FD9\u4E2Alock\u52A0\u4E00\u4E2A\u8FC7\u671F\u65F6\u95F4\uFF0C\u6BD4\u5982\u8BF430\u5206\u949F\u6267\u884C\u4E00\u6B21\u7684\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u8FC7\u671F\u65F6\u95F4\u8BBE\u7F6E\u4E3A\u5C0F\u4E8E30\u5206\u949F\u7684\u4E00\u4E2A\u65F6\u95F4\u5C31\u53EF\u4EE5\uFF0C\u8FD9\u4E2A\u4E0E\u5B9A\u65F6\u4EFB\u52A1\u7684\u5468\u671F\u4EE5\u53CA\u5B9A\u65F6\u4EFB\u52A1\u6267\u884C\u6D88\u8017\u65F6\u95F4\u76F8\u5173\u3002</p><p>\u5728\u5206\u5E03\u5F0F\u9501\u7684\u573A\u666F\u4E2D\uFF0C\u4E3B\u8981\u7528\u5728\u6BD4\u5982\u79D2\u6740\u7CFB\u7EDF\u7B49\u3002</p><blockquote><p>\u82E5\u4F9D\u4E2D\u672C\u8EAB\u5BF9\u5206\u5E03\u5F0F\u652F\u6301\u662F\u6BD4\u8F83\u5DEE\u7684\uFF0C\u5E76\u6CA1\u6709\u5206\u5E03\u5F0F\u9501\u7684\u5E94\u7528</p><p>\u5B9E\u9645\u81EA\u5DF1\u9879\u76EE\u4E2D</p><ul><li>\u591A\u4EBA\u540C\u65F6\u5904\u7406\u540C\u4E00\u4E2A\u5DE5\u4F5C\u6D41\u8282\u70B9\u95EE\u9898</li><li>\u5B9A\u65F6\u4EFB\u52A1\u91CD\u590D\u6267\u884C\u95EE\u9898\u7B49</li></ul></blockquote><h3 id="_3-5-\u5EF6\u65F6\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_3-5-\u5EF6\u65F6\u64CD\u4F5C" aria-hidden="true">#</a> 3.5 \u5EF6\u65F6\u64CD\u4F5C</h3><p>\u6BD4\u5982\u5728\u8BA2\u5355\u751F\u4EA7\u540E\u6211\u4EEC\u5360\u7528\u4E86\u5E93\u5B58\uFF0C10\u5206\u949F\u540E\u53BB\u68C0\u9A8C\u7528\u6237\u662F\u5426\u771F\u6B63\u8D2D\u4E70\uFF0C\u5982\u679C\u6CA1\u6709\u8D2D\u4E70\u5C06\u8BE5\u5355\u636E\u8BBE\u7F6E\u65E0\u6548\uFF0C\u540C\u65F6\u8FD8\u539F\u5E93\u5B58\u3002 \u7531\u4E8Eredis\u81EA2.8.0\u4E4B\u540E\u7248\u672C\u63D0\u4F9BKeyspace Notifications\u529F\u80FD\uFF0C\u5141\u8BB8\u5BA2\u6237\u8BA2\u9605Pub/Sub\u9891\u9053\uFF0C\u4EE5\u4FBF\u4EE5\u67D0\u79CD\u65B9\u5F0F\u63A5\u6536\u5F71\u54CDRedis\u6570\u636E\u96C6\u7684\u4E8B\u4EF6\u3002 \u6240\u4EE5\u6211\u4EEC\u5BF9\u4E8E\u4E0A\u9762\u7684\u9700\u6C42\u5C31\u53EF\u4EE5\u7528\u4EE5\u4E0B\u89E3\u51B3\u65B9\u6848\uFF0C\u6211\u4EEC\u5728\u8BA2\u5355\u751F\u4EA7\u65F6\uFF0C\u8BBE\u7F6E\u4E00\u4E2Akey\uFF0C\u540C\u65F6\u8BBE\u7F6E10\u5206\u949F\u540E\u8FC7\u671F\uFF0C \u6211\u4EEC\u5728\u540E\u53F0\u5B9E\u73B0\u4E00\u4E2A\u76D1\u542C\u5668\uFF0C\u76D1\u542Ckey\u7684\u5B9E\u6548\uFF0C\u76D1\u542C\u5230key\u5931\u6548\u65F6\u5C06\u540E\u7EED\u903B\u8F91\u52A0\u4E0A\u3002</p><p>\u5F53\u7136\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5229\u7528rabbitmq\u3001activemq\u7B49\u6D88\u606F\u4E2D\u95F4\u4EF6\u7684\u5EF6\u8FDF\u961F\u5217\u670D\u52A1\u5B9E\u73B0\u8BE5\u9700\u6C42\u3002</p><blockquote><p>\u5728\u9879\u76EE\u4E2D\u5F88\u5C11\u4F7F\u7528</p></blockquote><h3 id="_3-6-\u6392\u884C\u699C\u76F8\u5173\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_3-6-\u6392\u884C\u699C\u76F8\u5173\u95EE\u9898" aria-hidden="true">#</a> 3.6 \u6392\u884C\u699C\u76F8\u5173\u95EE\u9898</h3><p>\u5173\u7CFB\u578B\u6570\u636E\u5E93\u5728\u6392\u884C\u699C\u65B9\u9762\u67E5\u8BE2\u901F\u5EA6\u666E\u904D\u504F\u6162\uFF0C\u6240\u4EE5\u53EF\u4EE5\u501F\u52A9redis\u7684SortedSet\u8FDB\u884C\u70ED\u70B9\u6570\u636E\u7684\u6392\u5E8F\u3002</p><p>\u6BD4\u5982\u70B9\u8D5E\u6392\u884C\u699C\uFF0C\u505A\u4E00\u4E2ASortedSet, \u7136\u540E\u4EE5\u7528\u6237\u7684openid\u4F5C\u4E3A\u4E0A\u9762\u7684username, \u4EE5\u7528\u6237\u7684\u70B9\u8D5E\u6570\u4F5C\u4E3A\u4E0A\u9762\u7684score, \u7136\u540E\u9488\u5BF9\u6BCF\u4E2A\u7528\u6237\u505A\u4E00\u4E2Ahash, \u901A\u8FC7zrangebyscore\u5C31\u53EF\u4EE5\u6309\u7167\u70B9\u8D5E\u6570\u83B7\u53D6\u6392\u884C\u699C\uFF0C\u7136\u540E\u518D\u6839\u636Eusername\u83B7\u53D6\u7528\u6237\u7684hash\u4FE1\u606F\uFF0C\u8FD9\u4E2A\u5F53\u65F6\u5728\u5B9E\u9645\u8FD0\u7528\u4E2D\u6027\u80FD\u4F53\u9A8C\u4E5F\u86EE\u4E0D\u9519\u7684\u3002</p><blockquote><p>\u6CA1\u5728\u9879\u76EE\u4E2D\u4F7F\u7528\u8FC7\uFF0C\u53EF\u4EE5\u5C1D\u8BD5</p></blockquote><h3 id="_3-7-\u70B9\u8D5E\u3001\u597D\u53CB\u7B49\u76F8\u4E92\u5173\u7CFB\u7684\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#_3-7-\u70B9\u8D5E\u3001\u597D\u53CB\u7B49\u76F8\u4E92\u5173\u7CFB\u7684\u5B58\u50A8" aria-hidden="true">#</a> 3.7 \u70B9\u8D5E\u3001\u597D\u53CB\u7B49\u76F8\u4E92\u5173\u7CFB\u7684\u5B58\u50A8</h3><p>Redis \u5229\u7528\u96C6\u5408\u7684\u4E00\u4E9B\u547D\u4EE4\uFF0C\u6BD4\u5982\u6C42\u4EA4\u96C6\u3001\u5E76\u96C6\u3001\u5DEE\u96C6\u7B49\u3002</p><p>\u5728\u5FAE\u535A\u5E94\u7528\u4E2D\uFF0C\u6BCF\u4E2A\u7528\u6237\u5173\u6CE8\u7684\u4EBA\u5B58\u5728\u4E00\u4E2A\u96C6\u5408\u4E2D\uFF0C\u5C31\u5F88\u5BB9\u6613\u5B9E\u73B0\u6C42\u4E24\u4E2A\u4EBA\u7684\u5171\u540C\u597D\u53CB\u529F\u80FD\u3002</p><blockquote><p>\u6CA1\u5728\u9879\u76EE\u4E2D\u4F7F\u7528\u8FC7\uFF0C\u53EF\u4EE5\u5C1D\u8BD5</p></blockquote><h3 id="_3-8-\u7B80\u5355\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#_3-8-\u7B80\u5355\u961F\u5217" aria-hidden="true">#</a> 3.8 \u7B80\u5355\u961F\u5217</h3><p>\u7531\u4E8ERedis\u6709list push\u548Clist pop\u8FD9\u6837\u7684\u547D\u4EE4\uFF0C\u6240\u4EE5\u80FD\u591F\u5F88\u65B9\u4FBF\u7684\u6267\u884C\u961F\u5217\u64CD\u4F5C\u3002</p><blockquote><p>\u5728redis\u5BA2\u6237\u7AEFredisson\u4E2D\uFF0C\u5DF2\u7ECF\u5B9E\u73B0\u5404\u79CD\u96C6\u5408\u548C\u5206\u5E03\u5F0F\u961F\u5217</p></blockquote><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',49),n={href:"https://pdai.tech/md/db/nosql-redis/db-redis-introduce.html",target:"_blank",rel:"noopener noreferrer"},c=e("strong",null,"Redis\u5165\u95E8 - Redis\u6982\u5FF5\u548C\u57FA\u7840",-1);function u(p,b){const i=t("ExternalLinkIcon");return d(),r("div",null,[h,e("p",null,[e("a",n,[c,s(i)])])])}const R=a(o,[["render",u],["__file","db-redis-introduce.html.vue"]]);export{R as default};
