import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as i,a as e,b as o,d as t,f as s,r as p}from"./app.33b1aeb5.js";const h={},l=s('<h1 id="mysql-\u5206\u8868\u5206\u5E93-\u9762\u8BD5\u573A\u666F\u5207\u5165" tabindex="-1"><a class="header-anchor" href="#mysql-\u5206\u8868\u5206\u5E93-\u9762\u8BD5\u573A\u666F\u5207\u5165" aria-hidden="true">#</a> MySQL - \u5206\u8868\u5206\u5E93\uFF08\u9762\u8BD5\u573A\u666F\u5207\u5165\uFF09</h1><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20221015102643032.png" alt="image-20221015102643032"></p><h2 id="_1-\u4E3A\u4EC0\u4E48\u8981\u8FDB\u884C\u5206\u5E93\u5206\u8868" tabindex="-1"><a class="header-anchor" href="#_1-\u4E3A\u4EC0\u4E48\u8981\u8FDB\u884C\u5206\u5E93\u5206\u8868" aria-hidden="true">#</a> 1. \u4E3A\u4EC0\u4E48\u8981\u8FDB\u884C\u5206\u5E93\u5206\u8868\uFF1F</h2><p><strong>\u9762\u8BD5\u5B98</strong>\uFF1A\u5C0F\u4F19\u5B50\uFF0C\u770B\u5230\u4F60\u7684\u7B80\u5386\u4E0A\u9762\u5199\u4E86\u9879\u76EE\u4E2D\u6709\u5BF9MySQL\u8FDB\u884C\u5206\u5E93\u5206\u8868\uFF0C\u4E3A\u4EC0\u4E48\u8981\u8FDB\u884C\u5206\u5E93\u5206\u8868\uFF1F</p><p><strong>\u6211</strong>\uFF1A\u5F53MySQL\u5355\u8868\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u6BD4\u5982\u8D85\u8FC75\u5343\u4E07\u6761\u7684\u65F6\u5019\uFF0C\u8BFB\u5199\u6027\u80FD\u53D8\u5F97\u5F88\u5DEE\u3002\u800C\u4E14\u5E38\u89C4\u7684\u4F18\u5316\u624B\u6BB5\u5DF2\u7ECF\u4E0D\u8D77\u4F5C\u7528\u4E86\uFF0C\u6BD4\u5982\uFF1ASQL\u8C03\u4F18\u3001\u6DFB\u52A0\u7D22\u5F15\u3001\u4E3B\u4ECE\u590D\u5236\u3001\u8BFB\u5199\u5206\u79BB\u3002\u8FD9\u65F6\u5019\u5C31\u9700\u8981\u7528\u5230MySQL\u7EC8\u6781\u4F18\u5316\u65B9\u6848 \u2014 \u5206\u5E93\u5206\u8868\u3002</p><h2 id="_2-\u600E\u4E48\u5224\u65AD\u9879\u76EE\u662F\u9700\u8981\u5206\u5E93\u8FD8\u662F\u8981\u5206\u8868" tabindex="-1"><a class="header-anchor" href="#_2-\u600E\u4E48\u5224\u65AD\u9879\u76EE\u662F\u9700\u8981\u5206\u5E93\u8FD8\u662F\u8981\u5206\u8868" aria-hidden="true">#</a> 2. \u600E\u4E48\u5224\u65AD\u9879\u76EE\u662F\u9700\u8981\u5206\u5E93\u8FD8\u662F\u8981\u5206\u8868\uFF1F</h2><p><strong>\u9762\u8BD5\u5B98</strong>\uFF1A\u4E0D\u9519\uFF0C\u6211\u8BE5\u600E\u4E48\u5224\u65AD\u9879\u76EE\u662F\u9700\u8981\u5206\u5E93\u8FD8\u662F\u8981\u5206\u8868\uFF1F\u662F\u5148\u5206\u5E93\u8FD8\u662F\u5148\u5206\u8868\uFF1F</p><p><strong>\u6211</strong>\uFF1A</p><ol><li>\u5F53\u6570\u636E\u5E93\u7684QPS\u8FC7\u9AD8\uFF0C\u6570\u636E\u5E93\u8FDE\u63A5\u6570\u4E0D\u8DB3\u7684\u65F6\u5019\uFF0C\u5C31\u9700\u8981\u5206\u5E93\u3002</li><li>\u5F53\u5355\u8868\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u8BFB\u5199\u6027\u80FD\u8F83\u5DEE\uFF0C\u5C31\u9700\u8981\u5206\u8868\u3002</li><li>\u5F53\u4E24\u8005\u90FD\u6709\u7684\u65F6\u5019\uFF0C\u5C31\u9700\u8981\u5206\u5E93\u5206\u8868\u3002</li></ol><p>\u81F3\u4E8E\u5148\u5206\u5E93\u8FD8\u662F\u5148\u5206\u8868\uFF1F\u5EFA\u8BAE\u5148\u5206\u8868\uFF0C\u5982\u679C\u5206\u8868\u80FD\u89E3\u51B3\u95EE\u9898\uFF0C\u5C31\u4E0D\u9700\u8981\u5206\u5E93\u4E86\uFF0C\u6BD5\u7ADF\u9700\u8981\u5355\u72EC\u670D\u52A1\u5668\u8D44\u6E90\uFF0C\u6210\u672C\u66F4\u9AD8\u3002</p><h2 id="_3-\u5206\u5E93\u5206\u8868\u6709\u54EA\u4E9B\u62C6\u5206\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_3-\u5206\u5E93\u5206\u8868\u6709\u54EA\u4E9B\u62C6\u5206\u65B9\u6848" aria-hidden="true">#</a> 3. \u5206\u5E93\u5206\u8868\u6709\u54EA\u4E9B\u62C6\u5206\u65B9\u6848\uFF1F</h2><p><strong>\u9762\u8BD5\u5B98</strong>\uFF1A\u5C0F\u4F19\u5B50\uFF0C\u603B\u7ED3\u7684\u633A\u5168\u3002\u5206\u5E93\u5206\u8868\u6709\u54EA\u4E9B\u62C6\u5206\u65B9\u6848\u5462\uFF1F</p><p><strong>\u6211</strong>\uFF1A\u5206\u5E93\u5206\u8868\u6709\u5782\u76F4\u62C6\u5206\u548C\u6C34\u5E73\u62C6\u5206\u3002\u5782\u76F4\u62C6\u5206\u53C8\u6709\u5782\u76F4\u5206\u5E93\u3001\u5782\u76F4\u5206\u8868\u3002</p><ol><li>\u5782\u76F4\u5206\u5E93\uFF0C\u4E0D\u540C\u7684\u4E1A\u52A1\u62C6\u5206\u5230\u4E0D\u540C\u7684\u6570\u636E\u5E93\u3002</li><li>\u5782\u76F4\u5206\u8868\uFF0C\u628A\u957F\u5EA6\u8F83\u5927\u6216\u8005\u8BBF\u95EE\u9891\u6B21\u8F83\u4F4E\u7684\u5B57\u6BB5\uFF0C\u62C6\u5206\u5230\u6269\u5C55\u8868\u4E2D\u3002</li><li>\u6C34\u5E73\u5206\u8868\uFF0C\u5355\u8868\u6570\u636E\u91CF\u8FC7\u5927\u65F6\uFF0C\u6309\u7167\u8BA2\u5355ID\u62C6\u5206\u5230\u591A\u5F20\u8868\u4E2D\u3002</li></ol><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20221015101757167.png" alt="image-20221015101757167"></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20221015101814377.png" alt="image-20221015101814377"></p><h2 id="_4-\u5206\u5E93\u5206\u8868\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_4-\u5206\u5E93\u5206\u8868\u7F3A\u70B9" aria-hidden="true">#</a> 4. \u5206\u5E93\u5206\u8868\u7F3A\u70B9\uFF1F</h2><p><strong>\u9762\u8BD5\u5B98</strong>\uFF1A\u5C0F\u4F19\u5B50\uFF0C\u6709\u70B9\u4E1C\u897F\u3002\u90FD\u77E5\u9053\u5206\u5E93\u5206\u8868\u597D\u4F7F\uFF0C\u5C31\u6CA1\u6709\u4EC0\u4E48\u7F3A\u70B9\u5417\uFF1F</p><p><strong>\u6211</strong>\uFF1A\u5206\u5E93\u5206\u8868\u5E26\u6765\u4E86\u4F4E\u8026\u5408\u3001\u9AD8\u6027\u80FD\u7684\u4F18\u70B9\uFF0C\u53EF\u662F\u7F3A\u70B9\u5374\u662F\u4E00\u5927\u5806\u3002</p><p><strong>\u5782\u76F4\u5206\u5E93</strong>\uFF1A \u4E0D\u540C\u5E93\u591A\u8868\u4E4B\u95F4\u65E0\u6CD5join\u5173\u8054\u67E5\u8BE2\uFF0C\u53EA\u80FD\u901A\u8FC7\u63A5\u53E3\u805A\u5408\uFF0C\u590D\u6742\u5EA6\u76F4\u7EBF\u4E0A\u5347\u3002 \u6A2A\u8DE8\u591A\u4E2A\u6570\u636E\u5E93\u5BFC\u81F4\u65E0\u6CD5\u4F7F\u7528\u672C\u5730\u4E8B\u52A1\uFF0C\u6570\u636E\u5F3A\u4E00\u81F4\u6027\u5C31\u522B\u60F3\u4E86\uFF0C\u53EA\u80FD\u5F15\u5165\u66F4\u4E3A\u590D\u6742\u7684\u5206\u5E03\u5F0F\u4E8B\u52A1\uFF0C\u52C9\u5F3A\u5B9E\u73B0\u6570\u636E\u7684\u6700\u7EC8\u4E00\u81F4\u6027\uFF0C\u53EF\u7528\u6027\u76F4\u7EBF\u4E0B\u964D\u3002</p><p><strong>\u5782\u76F4\u5206\u8868</strong>\uFF1A \u672C\u6765\u4E00\u5F20\u8868\u80FD\u67E5\u51FA\u6765\u7684\u6570\u636E\uFF0C\u73B0\u5728\u9700\u8981\u591A\u5F20\u8868join\u5173\u8054\u67E5\u8BE2\uFF0C\u8FD9\u4E0D\u778E\u803D\u8BEF\u4E8B\u3002</p><p><strong>\u6C34\u5E73\u5206\u8868</strong>\uFF1A \u591A\u5F20\u8868\u5173\u8054\u67E5\u8BE2\u65F6\uFF0C\u65E0\u6CD5\u5B9E\u73B0\u5206\u9875\u3001\u6392\u5E8F\u529F\u80FD\u3002</p><h2 id="_5-\u5206\u5E93\u5206\u8868\u95EE\u9898\u5982\u4F55\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#_5-\u5206\u5E93\u5206\u8868\u95EE\u9898\u5982\u4F55\u89E3\u51B3" aria-hidden="true">#</a> 5. \u5206\u5E93\u5206\u8868\u95EE\u9898\u5982\u4F55\u89E3\u51B3\uFF1F</h2><p><strong>\u9762\u8BD5\u5B98</strong>\uFF1A\u5206\u5E93\u5206\u8868\u5E26\u6765\u8FD9\u4E48\u591A\u95EE\u9898\uFF0C\u4F60\u6CA1\u6709\u6CA1\u8003\u8651\u8FC7\u76F8\u5E94\u7684\u89E3\u51B3\u65B9\u6848\uFF1F</p><blockquote><p>\u6211\u600E\u4E48\u53EF\u80FD\u6CA1\u6709\u89E3\u51B3\u65B9\u6848\uFF0C\u96BE\u9053\u6211\u63D0\u51FA\u95EE\u9898\u7ED9\u81EA\u5DF1\u6316\u5751\uFF1F</p></blockquote><p><strong>\u6211</strong>\uFF1A\u5F53\u7136\u6709\u8003\u8651\u8FC7\uFF0C\u201C\u6709\u95EE\u9898\u5C31\u4F1A\u6709\u7B54\u6848\u201D\u3002</p><h3 id="_5-1-\u8DE8\u5E93\u67E5\u8BE2\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_5-1-\u8DE8\u5E93\u67E5\u8BE2\u95EE\u9898" aria-hidden="true">#</a> 5.1 <strong>\u8DE8\u5E93\u67E5\u8BE2\u95EE\u9898\uFF1A</strong></h3><p>\u91C7\u7528<strong>\u5B57\u6BB5\u5197\u4F59</strong>\u65B9\u6848\uFF0C\u6BD4\u5982\u8BA2\u5355\u8868\u5B58\u50A8\u5E97\u94FAID\u3001\u5E97\u94FA\u540D\u79F0\uFF0C\u5C31\u4E0D\u9700\u8981\u518D\u67E5\u8BE2\u5546\u6237\u6570\u636E\u5E93\u4E86\u3002 \u4E0D\u8FC7\u8FD9\u79CD\u65B9\u6848\u8981\u6C42\u5197\u4F59\u5B57\u6BB5\u8981\u5F88\u5C11\u53D8\u52A8\uFF0C\u5C31\u7B97\u53D8\u52A8\u540E\uFF0C\u4E5F\u80FD\u5BB9\u5FCD\u8FD4\u56DE\u65E7\u6570\u636E\u3002</p><h3 id="_5-2-\u591A\u8868\u5206\u9875\u67E5\u8BE2\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_5-2-\u591A\u8868\u5206\u9875\u67E5\u8BE2\u95EE\u9898" aria-hidden="true">#</a> 5.2 <strong>\u591A\u8868\u5206\u9875\u67E5\u8BE2\u95EE\u9898\uFF1A</strong></h3><p>\u8FD9\u4E2A\u5904\u7406\u8D77\u6765\u5C31\u5F88\u9700\u8981\u6280\u672F\u542B\u91CF\u4E86\u3002 \u6BD4\u5982\uFF1A\u8BA2\u5355\u8868\u6309\u7167\u8BA2\u5355ID\u5206\u7247\uFF0C(order_id % 128)\uFF0C\u5206\u6210\u4E86128\u5F20\u8868\u3002 Leader\u770B\u4E86\u8BF4\uFF1A\u6BCF\u5F20\u8868\u7684\u6570\u636E\u91CF\u5DEE\u4E0D\u591A\uFF0C\u5206\u7684\u5F88\u5747\u5300\uFF0C\u4EE5\u540E\u4E0D\u8981\u518D\u5206\u4E86\u3002</p><p>\u540C\u4E00\u4E2A\u7528\u6237\u7684\u8BA2\u5355\u6563\u843D\u5728\u4E0D\u540C\u7684\u8868\uFF0C\u7528\u6237\u60F3\u67E5\u8BE2\u81EA\u5DF1\u7684\u8BA2\u5355\uFF0C\u6839\u672C\u65E0\u6CD5\u505A\u5230\u5206\u9875\u67E5\u8BE2\u3002\u96BE\u9053\u4E00\u6B21\u5168\u90E8\u67E5\u8BE2\u8BE5\u7528\u6237\u7684\u6240\u6709\u8BA2\u5355\uFF0C\u7136\u540E\u505A\u5185\u5B58\u5206\u9875\uFF0C\u591A\u5927\u7684\u673A\u5668\u5185\u5B58\u90FD\u8BA9\u4F60\u641E\u6302\u3002 \u60F3\u8981\u5B9E\u73B0\u7528\u6237\u8BA2\u5355\u5206\u9875\u67E5\u8BE2\uFF0C\u53EF\u4EE5\u91C7\u7528\u6309\u7167\u7528\u6237ID\u5206\u7247\uFF0C(user_id % 128)\uFF0C\u8FD9\u6837\u540C\u4E00\u4E2A\u7528\u6237\u7684\u8BA2\u5355\u53EA\u4F1A\u5B58\u50A8\u5728\u4E00\u5F20\u8868\u4E2D\uFF0C\u548B\u5206\u9875\u5C55\u793A\u90FD\u884C\u3002</p><blockquote><p><strong>\u6CA1\u6709\u5B8C\u7F8E\u7684\u5206\u7247\u65B9\u6848\uFF0C\u5982\u679C\u5546\u6237\u60F3\u8981\u5206\u9875\u67E5\u770B\u81EA\u5DF1\u5E97\u94FA\u7684\u8BA2\u5355\u600E\u4E48\u529E\uFF1F</strong> \u90A3\u5C31\u628A\u8BA2\u5355\u518D\u5197\u4F59\u5B58\u50A8\u4E00\u4EFD\uFF0C\u6309\u7167\u5E97\u94FAID\u5206\u7247\uFF0C(shop_id % 128)\u3002\u4E0D\u8FC7\u7531\u4E8E\u5546\u6237\u6570\u91CF\u8F83\u5C11\uFF0C\u53EF\u4EE5\u641E\u4E2A\u5F02\u6B65\u7EBF\u7A0B\u5F80\u5546\u6237\u8BA2\u5355\u5206\u7247\u8868\u540C\u6B65\u3002</p><p><strong>\u8BA2\u5355\u6309\u7167\u7528\u6237ID\u5206\u7247\u540E\uFF0C\u53D1\u751F\u6570\u636E\u503E\u659C\u600E\u4E48\u529E\uFF1F</strong> \u56E0\u4E3A\u4E0D\u540C\u7528\u6237\u7684\u8BA2\u5355\u91CF\u662F\u4E0D\u540C\u7684\uFF0C\u4E00\u4E2A\u7231\u597D\u8D2D\u7269\u7684\u5C0F\u59D0\u59D0\u7684\u8BA2\u5355\u91CF\u62B5\u5F97\u4E0A\u51E0\u5341\u4E2A\u8001\u7237\u4EEC\u3002\u5BFC\u81F4\u4E00\u5F20\u8868\u6570\u636E\u51E0\u767E\u6761\uFF0C\u53E6\u4E00\u5F20\u8868\u6570\u636E\u91CF\u5343\u4E07\u7EA7\uFF0C\u8FD9\u8BE5\u548B\u6574\uFF1F \u505A\u51B7\u70ED\u6570\u636E\u5206\u79BB\uFF0C\u57FA\u7840\u5E93\u53EA\u5B58\u50A83\u4E2A\u6708\u5185\u7684\u8BA2\u5355\uFF0C\u5176\u4ED6\u7684\u79FB\u52A8\u5230\u5386\u53F2\u8BA2\u5355\u5E93\u3002\u8FD9\u4E2A\u8981\u8DDF\u4EA7\u54C1\u5546\u91CF\u597D\uFF0C3\u4E2A\u6708\u524D\u7684\u8BA2\u5355\u9700\u8981\u5355\u72EC\u7684\u67E5\u8BE2\u9875\u9762\u3002</p></blockquote><h3 id="_5-3-\u8DE8\u5E93\u4E8B\u52A1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_5-3-\u8DE8\u5E93\u4E8B\u52A1\u95EE\u9898" aria-hidden="true">#</a> 5.3 <strong>\u8DE8\u5E93\u4E8B\u52A1\u95EE\u9898\uFF1A</strong></h3><p>\u8FD9\u4E2A\u95EE\u9898\u5C31\u66F4\u590D\u6742\u4E86\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20221015102445584.png" alt="image-20221015102445584"></p><p>\u4E0B\u4E00\u4E2A\u8BA2\u5355\u9700\u8981\u8C03\u7528\u591A\u4E2A\u670D\u52A1\uFF0C\u53EA\u80FD\u4F7F\u7528\u5206\u5E03\u5F0F\u4E8B\u52A1\u3002 \u5206\u5E03\u5F0F\u4E8B\u52A1\u7684\u5B9E\u73B0\u975E\u5E38\u590D\u6742\uFF0C\u5E38\u7528\u7684\u6709\u4EE5\u4E0B\u51E0\u79CD\u89E3\u51B3\u65B9\u6848\uFF1A</p><blockquote><ul><li><p>\u4E8C\u9636\u6BB5\u63D0\u4EA4</p></li><li><p>TCC</p></li><li><p>\u672C\u5730\u6D88\u606F\u8868</p></li><li><p>MQ\u4E8B\u52A1\u6D88\u606F</p></li><li><p>\u5206\u5E03\u5F0F\u4E8B\u52A1\u4E2D\u95F4\u4EF6</p></li></ul></blockquote><h2 id="_6-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_6-\u603B\u7ED3" aria-hidden="true">#</a> 6. \u603B\u7ED3</h2><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20221015102643032.png" alt="image-20221015102643032"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',40),d={href:"https://zhuanlan.zhihu.com/p/455694017",target:"_blank",rel:"noopener noreferrer"};function c(g,m){const a=p("ExternalLinkIcon");return n(),i("div",null,[l,e("p",null,[e("a",d,[o("\u9762\u8BD5\u5B98\u7ADF\u7136\u95EE\u6211\u600E\u4E48\u5206\u5E93\u5206\u8868\uFF1F\u5E78\u4E8F\u6211\u603B\u7ED3\u4E86\u4E00\u5957\u516B\u80A1\u6587"),t(a)])])])}const b=r(h,[["render",c],["__file","mysql-x-sharding-interview.html.vue"]]);export{b as default};
