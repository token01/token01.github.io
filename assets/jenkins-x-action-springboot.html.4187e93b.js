const e=JSON.parse('{"key":"v-4fec56d2","path":"/deploy/jenkins/jenkins-x-action-springboot.html","title":"Jenkins\u6253\u5305\u90E8\u7F72SpringBoot\u5E94\u7528","lang":"zh-CN","frontmatter":{"summary":"Jenkins\u6253\u5305\u90E8\u7F72SpringBoot\u5E94\u7528 \\"\u8DDF\u539F\u6587\u7684\u4E3B\u8981\u533A\u522B\u662F\uFF0C\u4ED6\u7528docker\u90E8\u7F72\uFF0C\u6211\u662F\u4F20\u7EDF\u7684\u6587\u4EF6\u4E0A\u4F20\u5F62\u5F0F\uFF0C\u547D\u4EE4\u6267\u884C\\" 1. \u51C6\u5907\u9879\u76EE \\" \u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528mall-learning\u9879\u76EE\u4E2D\u7684mall-tiny-jenkins\u6A21\u5757\u4EE3\u7801\u6765\u6F14\u793A\u4E0B\u5982\u4F55\u4F7FJenkins\u4E00\u952E\u6253\u5305\u90E8\u7F72SpringBoot\u5E94\u7528\u3002\\" mall-tiny-jenkins\u9879\u76EE\u6E90\u7801\u5730\u5740\uFF1Agit","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/deploy/jenkins/jenkins-x-action-springboot.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"Jenkins\u6253\u5305\u90E8\u7F72SpringBoot\u5E94\u7528"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T11:56:34.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T11:56:34.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u51C6\u5907\u9879\u76EE","slug":"_1-\u51C6\u5907\u9879\u76EE","link":"#_1-\u51C6\u5907\u9879\u76EE","children":[]},{"level":2,"title":"2. \u8865\u5145\u63D2\u4EF6 Publish Over SSH","slug":"_2-\u8865\u5145\u63D2\u4EF6-publish-over-ssh","link":"#_2-\u8865\u5145\u63D2\u4EF6-publish-over-ssh","children":[{"level":3,"title":"2.1 \u80CC\u666F","slug":"_2-1-\u80CC\u666F","link":"#_2-1-\u80CC\u666F","children":[]},{"level":3,"title":"2.2 \u89E3\u51B3","slug":"_2-2-\u89E3\u51B3","link":"#_2-2-\u89E3\u51B3","children":[]},{"level":3,"title":"2.3 \u914D\u7F6E SSH Servers","slug":"_2-3-\u914D\u7F6E-ssh-servers","link":"#_2-3-\u914D\u7F6E-ssh-servers","children":[]},{"level":3,"title":"2.4  \u6D4B\u8BD5\u8FDE\u63A5","slug":"_2-4-\u6D4B\u8BD5\u8FDE\u63A5","link":"#_2-4-\u6D4B\u8BD5\u8FDE\u63A5","children":[]}]},{"level":2,"title":"3. \u811A\u672C\u8BBE\u7F6E","slug":"_3-\u811A\u672C\u8BBE\u7F6E","link":"#_3-\u811A\u672C\u8BBE\u7F6E","children":[]},{"level":2,"title":"4. \u5728Jenkins\u4E2D\u521B\u5EFA\u6267\u884C\u4EFB\u52A1","slug":"_4-\u5728jenkins\u4E2D\u521B\u5EFA\u6267\u884C\u4EFB\u52A1","link":"#_4-\u5728jenkins\u4E2D\u521B\u5EFA\u6267\u884C\u4EFB\u52A1","children":[{"level":3,"title":"4.1 \u521B\u5EFA\u65B0\u4EFB\u52A1","slug":"_4-1-\u521B\u5EFA\u65B0\u4EFB\u52A1","link":"#_4-1-\u521B\u5EFA\u65B0\u4EFB\u52A1","children":[]},{"level":3,"title":"4.2 \u914D\u7F6E\u4ED3\u5E93\u5730\u5740","slug":"_4-2-\u914D\u7F6E\u4ED3\u5E93\u5730\u5740","link":"#_4-2-\u914D\u7F6E\u4ED3\u5E93\u5730\u5740","children":[]},{"level":3,"title":"4.3 \u6784\u5EFA\u6253\u5305","slug":"_4-3-\u6784\u5EFA\u6253\u5305","link":"#_4-3-\u6784\u5EFA\u6253\u5305","children":[]},{"level":3,"title":"4.4 \u6784\u5EFA\u540E\u7EED\u6B65\u9AA4\uFF08\u5C06\u6587\u4EF6\u53D1\u9001\u5230\u670D\u52A1\u7AEF\uFF09","slug":"_4-4-\u6784\u5EFA\u540E\u7EED\u6B65\u9AA4-\u5C06\u6587\u4EF6\u53D1\u9001\u5230\u670D\u52A1\u7AEF","link":"#_4-4-\u6784\u5EFA\u540E\u7EED\u6B65\u9AA4-\u5C06\u6587\u4EF6\u53D1\u9001\u5230\u670D\u52A1\u7AEF","children":[]},{"level":3,"title":"4.5 \u6784\u5EFA\u73AF\u5883\uFF08\u6784\u5EFA\u5B8C\u540E\u6267\u884C\uFF09","slug":"_4-5-\u6784\u5EFA\u73AF\u5883-\u6784\u5EFA\u5B8C\u540E\u6267\u884C","link":"#_4-5-\u6784\u5EFA\u73AF\u5883-\u6784\u5EFA\u5B8C\u540E\u6267\u884C","children":[]},{"level":3,"title":"4.6 \u6267\u884C\u4EFB\u52A1","slug":"_4-6-\u6267\u884C\u4EFB\u52A1","link":"#_4-6-\u6267\u884C\u4EFB\u52A1","children":[]},{"level":3,"title":"4.7 \u67E5\u770B\u63A7\u5236\u53F0","slug":"_4-7-\u67E5\u770B\u63A7\u5236\u53F0","link":"#_4-7-\u67E5\u770B\u63A7\u5236\u53F0","children":[]},{"level":3,"title":"4.8 \u67E5\u770B\u9879\u76EE\u6548\u679C","slug":"_4-8-\u67E5\u770B\u9879\u76EE\u6548\u679C","link":"#_4-8-\u67E5\u770B\u9879\u76EE\u6548\u679C","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1672055794000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":3}]},"readingTime":{"minutes":3.31,"words":992},"filePathRelative":"deploy/jenkins/jenkins-x-action-springboot.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};