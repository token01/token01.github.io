const l=JSON.parse('{"key":"v-2a5d74b3","path":"/develop/devlibrary/p6spy-monitor-sql.html","title":"\u5E38\u7528\u5F00\u53D1\u5E93-Lombok\u5DE5\u5177\u5E93\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":10,"category":["Lib"],"summary":"\u5E38\u7528\u5F00\u53D1\u5E93-Lombok\u5DE5\u5177\u5E93\u8BE6\u89E3 \\"Lombok\u662F\u4E00\u6B3E\u975E\u5E38\u5B9E\u7528Java\u5DE5\u5177\uFF0C\u53EF\u7528\u6765\u5E2E\u52A9\u5F00\u53D1\u4EBA\u5458\u6D88\u9664Java\u7684\u5197\u957F\u4EE3\u7801\uFF0C\u5C24\u5176\u662F\u5BF9\u4E8E\u7B80\u5355\u7684Java\u5BF9\u8C61\uFF08POJO\uFF09\u3002\u5B9E\u9645\u4E0A\u6211\u5E76\u4E0D\u63A8\u8350\u4F7F\u7528Lombok\uFF08\u4E0D\u4E3B\u52A8\u4F7F\u7528\u5B83\uFF09, \u4F46\u662F\u56E0\u4E3A\u5B83\u6709\u7740\u5F88\u5927\u7684\u4F7F\u7528\u91CF\uFF0C\u6211\u4EEC\u4ECD\u7136\u6709\u5FC5\u8981\u638C\u63E1\u5B83\uFF0C\u4E0D\u4EC5\u77E5\u9053\u5982\u4F55\u4F7F\u7528\u548C\u5B83\u89E3\u51B3\u7684\u95EE\u9898\uFF0C\u8FD8\u8981\u77E5\u9053\u5B83\u7684\u5751\u3002\\" 1. Lombok\u7684\u5F15\u5165 \u6211\u4EEC\u901A\u5E38\u9700\u8981\u7F16\u5199\u5927","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/develop/devlibrary/p6spy-monitor-sql.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"\u5E38\u7528\u5F00\u53D1\u5E93-Lombok\u5DE5\u5177\u5E93\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. Lombok\u7684\u5F15\u5165","slug":"_1-lombok\u7684\u5F15\u5165","link":"#_1-lombok\u7684\u5F15\u5165","children":[{"level":3,"title":"1.1 \u5728\u5F15\u5165Lombok\u4E4B\u524D\u6211\u4EEC\u662F\u600E\u4E48\u505A\u7684","slug":"_1-1-\u5728\u5F15\u5165lombok\u4E4B\u524D\u6211\u4EEC\u662F\u600E\u4E48\u505A\u7684","link":"#_1-1-\u5728\u5F15\u5165lombok\u4E4B\u524D\u6211\u4EEC\u662F\u600E\u4E48\u505A\u7684","children":[]}]},{"level":2,"title":"2. Lombok\u7684\u5B89\u88C5\u548C\u4F7F\u7528","slug":"_2-lombok\u7684\u5B89\u88C5\u548C\u4F7F\u7528","link":"#_2-lombok\u7684\u5B89\u88C5\u548C\u4F7F\u7528","children":[{"level":3,"title":"2.1 Lombok\u5B98\u7F51","slug":"_2-1-lombok\u5B98\u7F51","link":"#_2-1-lombok\u5B98\u7F51","children":[]},{"level":3,"title":"2.2 Lombok\u5B89\u88C5","slug":"_2-2-lombok\u5B89\u88C5","link":"#_2-2-lombok\u5B89\u88C5","children":[]},{"level":3,"title":"2.3 Lombok\u6CE8\u89E3\u8BF4\u660E","slug":"_2-3-lombok\u6CE8\u89E3\u8BF4\u660E","link":"#_2-3-lombok\u6CE8\u89E3\u8BF4\u660E","children":[]}]},{"level":2,"title":"3. Lombok\u4EE3\u7801\u793A\u4F8B","slug":"_3-lombok\u4EE3\u7801\u793A\u4F8B","link":"#_3-lombok\u4EE3\u7801\u793A\u4F8B","children":[{"level":3,"title":"3.1 val\u793A\u4F8B","slug":"_3-1-val\u793A\u4F8B","link":"#_3-1-val\u793A\u4F8B","children":[]},{"level":3,"title":"3.2 @NonNull\u793A\u4F8B","slug":"_3-2-nonnull\u793A\u4F8B","link":"#_3-2-nonnull\u793A\u4F8B","children":[]},{"level":3,"title":"3.3 @Cleanup\u793A\u4F8B","slug":"_3-3-cleanup\u793A\u4F8B","link":"#_3-3-cleanup\u793A\u4F8B","children":[]},{"level":3,"title":"3.4 @Getter/@Setter\u793A\u4F8B","slug":"_3-4-getter-setter\u793A\u4F8B","link":"#_3-4-getter-setter\u793A\u4F8B","children":[]},{"level":3,"title":"3.5 @ToString\u793A\u4F8B","slug":"_3-5-tostring\u793A\u4F8B","link":"#_3-5-tostring\u793A\u4F8B","children":[]},{"level":3,"title":"3.6 @EqualsAndHashCode\u793A\u4F8B","slug":"_3-6-equalsandhashcode\u793A\u4F8B","link":"#_3-6-equalsandhashcode\u793A\u4F8B","children":[]},{"level":3,"title":"3.7 @NoArgsConstructor, @RequiredArgsConstructor and @AllArgsConstructor\u793A\u4F8B","slug":"_3-7-noargsconstructor-requiredargsconstructor-and-allargsconstructor\u793A\u4F8B","link":"#_3-7-noargsconstructor-requiredargsconstructor-and-allargsconstructor\u793A\u4F8B","children":[]},{"level":3,"title":"3.8 @Data\u793A\u4F8B","slug":"_3-8-data\u793A\u4F8B","link":"#_3-8-data\u793A\u4F8B","children":[]},{"level":3,"title":"3.9 @Value\u793A\u4F8B","slug":"_3-9-value\u793A\u4F8B","link":"#_3-9-value\u793A\u4F8B","children":[]},{"level":3,"title":"3.10 @Builder\u793A\u4F8B","slug":"_3-10-builder\u793A\u4F8B","link":"#_3-10-builder\u793A\u4F8B","children":[]},{"level":3,"title":"3.11 @SneakyThrows\u793A\u4F8B","slug":"_3-11-sneakythrows\u793A\u4F8B","link":"#_3-11-sneakythrows\u793A\u4F8B","children":[]},{"level":3,"title":"3.12 @Synchronized\u793A\u4F8B","slug":"_3-12-synchronized\u793A\u4F8B","link":"#_3-12-synchronized\u793A\u4F8B","children":[]},{"level":3,"title":"3.12 @Getter(lazy = true)\u793A\u4F8B","slug":"_3-12-getter-lazy-true-\u793A\u4F8B","link":"#_3-12-getter-lazy-true-\u793A\u4F8B","children":[]}]},{"level":2,"title":"4. Lombok\u6DF1\u5165\u7406\u89E3","slug":"_4-lombok\u6DF1\u5165\u7406\u89E3","link":"#_4-lombok\u6DF1\u5165\u7406\u89E3","children":[{"level":3,"title":"4.1 Lombok\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898","slug":"_4-1-lombok\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898","link":"#_4-1-lombok\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898","children":[]},{"level":3,"title":"4.2 Lombok\u7684\u539F\u7406","slug":"_4-2-lombok\u7684\u539F\u7406","link":"#_4-2-lombok\u7684\u539F\u7406","children":[]},{"level":3,"title":"4.3 Lombok\u7C7B\u4F3C\u539F\u7406\u5DE5\u5177\u6709\u4EC0\u4E48","slug":"_4-3-lombok\u7C7B\u4F3C\u539F\u7406\u5DE5\u5177\u6709\u4EC0\u4E48","link":"#_4-3-lombok\u7C7B\u4F3C\u539F\u7406\u5DE5\u5177\u6709\u4EC0\u4E48","children":[]},{"level":3,"title":"4.4 Lombok\u6CA1\u6709\u672A\u6765 - Java14 Record\u4E86\u89E3\u4E0B","slug":"_4-4-lombok\u6CA1\u6709\u672A\u6765-java14-record\u4E86\u89E3\u4E0B","link":"#_4-4-lombok\u6CA1\u6709\u672A\u6765-java14-record\u4E86\u89E3\u4E0B","children":[]}]},{"level":2,"title":"5. Lombok\u6709\u4EC0\u4E48\u5751","slug":"_5-lombok\u6709\u4EC0\u4E48\u5751","link":"#_5-lombok\u6709\u4EC0\u4E48\u5751","children":[{"level":3,"title":"5.1 @Data\u7684\u5751","slug":"_5-1-data\u7684\u5751","link":"#_5-1-data\u7684\u5751","children":[]},{"level":3,"title":"5.2 \u4EE3\u7801\u53EF\u8BFB\u6027\uFF0C\u53EF\u8C03\u8BD5\u6027\u4F4E","slug":"_5-2-\u4EE3\u7801\u53EF\u8BFB\u6027-\u53EF\u8C03\u8BD5\u6027\u4F4E","link":"#_5-2-\u4EE3\u7801\u53EF\u8BFB\u6027-\u53EF\u8C03\u8BD5\u6027\u4F4E","children":[]},{"level":3,"title":"5.3 Lombok\u6709\u5F88\u5F3A\u7684\u4FB5\u5165\u6027","slug":"_5-3-lombok\u6709\u5F88\u5F3A\u7684\u4FB5\u5165\u6027","link":"#_5-3-lombok\u6709\u5F88\u5F3A\u7684\u4FB5\u5165\u6027","children":[]},{"level":3,"title":"5.4 Lombok\u7834\u574F\u4E86\u5C01\u88C5\u6027","slug":"_5-4-lombok\u7834\u574F\u4E86\u5C01\u88C5\u6027","link":"#_5-4-lombok\u7834\u574F\u4E86\u5C01\u88C5\u6027","children":[]}]},{"level":2,"title":"6. \u603B\u7ED3","slug":"_6-\u603B\u7ED3","link":"#_6-\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":15.76,"words":4729},"filePathRelative":"develop/devlibrary/p6spy-monitor-sql.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{l as data};
