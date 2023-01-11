const e=JSON.parse('{"key":"v-f26d61f4","path":"/language/go/01.base/26.channel.html","title":"26.channel","lang":"zh-CN","frontmatter":{"summary":"26.channel goroutine\u8FD0\u884C\u5728\u76F8\u540C\u7684\u5730\u5740\u7A7A\u95F4\uFF0C\u56E0\u6B64\u8BBF\u95EE\u5171\u4EAB\u5185\u5B58\u5FC5\u987B\u505A\u597D\u540C\u6B65\u3002goroutine \u5949\u884C\u901A\u8FC7\u901A\u4FE1\u6765\u5171\u4EAB\u5185\u5B58\uFF0C\u800C\u4E0D\u662F\u5171\u4EAB\u5185\u5B58\u6765\u901A\u4FE1\u3002 \u5F15\u2F64\u7C7B\u578B channel \u662F CSP \u6A21\u5F0F\u7684\u5177\u4F53\u5B9E\u73B0\uFF0C\u7528\u4E8E\u591A\u4E2A goroutine \u901A\u8BAF\u3002\u5176\u5185\u90E8\u5B9E\u73B0\u4E86\u540C\u6B65\uFF0C\u786E\u4FDD\u5E76\u53D1\u5B89\u5168\u3002 1\uFF0Cchannel\u7C7B\u578B \u548Cmap\u7C7B\u4F3C\uFF0Cchannel\u4E5F\u4E00\u4E2A\u5BF9\u5E94make\u521B\u5EFA\u7684","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/language/go/01.base/26.channel.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"26.channel"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-06T15:36:10.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-01-06T15:36:10.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1\uFF0Cchannel\u7C7B\u578B","slug":"_1-channel\u7C7B\u578B","link":"#_1-channel\u7C7B\u578B","children":[]},{"level":2,"title":"2\uFF0C\u901A\u8FC7channel\u5B9E\u73B0\u540C\u6B65","slug":"_2-\u901A\u8FC7channel\u5B9E\u73B0\u540C\u6B65","link":"#_2-\u901A\u8FC7channel\u5B9E\u73B0\u540C\u6B65","children":[]},{"level":2,"title":"3\uFF0C\u901A\u8FC7channel\u5B9E\u73B0\u6570\u636E\u540C\u6B65","slug":"_3-\u901A\u8FC7channel\u5B9E\u73B0\u6570\u636E\u540C\u6B65","link":"#_3-\u901A\u8FC7channel\u5B9E\u73B0\u6570\u636E\u540C\u6B65","children":[]},{"level":2,"title":"4\uFF0C\u65E0\u7F13\u51B2\u7684channel","slug":"_4-\u65E0\u7F13\u51B2\u7684channel","link":"#_4-\u65E0\u7F13\u51B2\u7684channel","children":[]},{"level":2,"title":"5\uFF0C\u6709\u7F13\u51B2\u7684channel","slug":"_5-\u6709\u7F13\u51B2\u7684channel","link":"#_5-\u6709\u7F13\u51B2\u7684channel","children":[]},{"level":2,"title":"6\uFF0Cclose\u5173\u95EDchannel","slug":"_6-close\u5173\u95EDchannel","link":"#_6-close\u5173\u95EDchannel","children":[{"level":3,"title":"1\uFF0C\u4F7F\u7528range\u8FDB\u884C\u8FED\u4EE3","slug":"_1-\u4F7F\u7528range\u8FDB\u884C\u8FED\u4EE3","link":"#_1-\u4F7F\u7528range\u8FDB\u884C\u8FED\u4EE3","children":[]},{"level":3,"title":"2\uFF0C\u4E00\u4E2A\u793A\u4F8B","slug":"_2-\u4E00\u4E2A\u793A\u4F8B","link":"#_2-\u4E00\u4E2A\u793A\u4F8B","children":[]}]},{"level":2,"title":"7\uFF0C\u5355\u5411channel","slug":"_7-\u5355\u5411channel","link":"#_7-\u5355\u5411channel","children":[{"level":3,"title":"1\uFF0C\u5355\u5411channel\u7684\u5E94\u7528","slug":"_1-\u5355\u5411channel\u7684\u5E94\u7528","link":"#_1-\u5355\u5411channel\u7684\u5E94\u7528","children":[]}]},{"level":2,"title":"8\uFF0C\u5B9A\u65F6\u5668","slug":"_8-\u5B9A\u65F6\u5668","link":"#_8-\u5B9A\u65F6\u5668","children":[{"level":3,"title":"1\uFF0Ctimer","slug":"_1-timer","link":"#_1-timer","children":[]},{"level":3,"title":"2\uFF0CTicker","slug":"_2-ticker","link":"#_2-ticker","children":[]}]},{"level":2,"title":"9\uFF0Cwork pool","slug":"_9-work-pool","link":"#_9-work-pool","children":[]}],"git":{"createdTime":1673015309000,"updatedTime":1673019370000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":3}]},"readingTime":{"minutes":13.49,"words":4046},"filePathRelative":"language/go/01.base/26.channel.md","localizedDate":"2023\u5E741\u67086\u65E5"}');export{e as data};