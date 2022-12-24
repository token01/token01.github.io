const e=JSON.parse('{"key":"v-658bd0d5","path":"/arch/base/arch-y-ensure-high-availability.html","title":"\u67B6\u6784\u4E4B\u9AD8\u53EF\u7528: \u5982\u4F55\u4FDD\u8BC1\u9AD8\u53EF\u7528\u6027\uFF1F","lang":"zh-CN","frontmatter":{"order":90,"category":["\u67B6\u6784"],"summary":"\u67B6\u6784\u4E4B\u9AD8\u53EF\u7528: \u5982\u4F55\u4FDD\u8BC1\u9AD8\u53EF\u7528\u6027\uFF1F \\" \u9AD8\u53EF\u7528\u6027\u5BF9\u4E8E\u6211\u4EEC\u6765\u8BF4\u5E94\u8BE5\u5C5E\u4E8E\u7ECF\u5E38\u63D0\u5230\u7684\u540D\u8BCD\uFF0C\u672C\u6587\u6211\u4EEC\u5C06\u4ECB\u7ECD\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u4FDD\u8BC1\u9AD8\u53EF\u7528\u6027\u7684\u4E00\u4E9B\u5E38\u7528\u7ECF\u9A8C\u3002\u7CFB\u7EDF\u53EF\u7528\u6027\u6307\u6807\u7CFB\u7EDF\u53EF\u7528\u6027\u6307\u6807\u7B80\u5355\u6765\u5C06\u5C31\u662F\u7CFB\u7EDF\u53EF\u7528\u65F6\u95F4\u4E0E\u603B\u8FD0\u884C\u65F6\u95F4\u4E4B\u6BD4Availability=MTTF/(MTTF+MTTRMTTF)MTTF \u662F Mean Time To Failure\uFF0C\u6307\u5E73\u5747\u6545\u969C\u524D\u7684\u65F6\u95F4\uFF0C\u5373\u7CFB\u7EDF\u5E73\u5747","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/arch/base/arch-y-ensure-high-availability.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"\u67B6\u6784\u4E4B\u9AD8\u53EF\u7528: \u5982\u4F55\u4FDD\u8BC1\u9AD8\u53EF\u7528\u6027\uFF1F"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"0. \u5F71\u54CD\u53EF\u7528\u6027\u7684\u56E0\u7D20\u6709\u54EA\u4E9B","slug":"_0-\u5F71\u54CD\u53EF\u7528\u6027\u7684\u56E0\u7D20\u6709\u54EA\u4E9B","link":"#_0-\u5F71\u54CD\u53EF\u7528\u6027\u7684\u56E0\u7D20\u6709\u54EA\u4E9B","children":[]},{"level":2,"title":"1. \u7CFB\u7EDF\u53EF\u7528\u6027\u6307\u6807","slug":"_1-\u7CFB\u7EDF\u53EF\u7528\u6027\u6307\u6807","link":"#_1-\u7CFB\u7EDF\u53EF\u7528\u6027\u6307\u6807","children":[]},{"level":2,"title":"2. \u6545\u969C\u4E0D\u53EF\u907F\u514D","slug":"_2-\u6545\u969C\u4E0D\u53EF\u907F\u514D","link":"#_2-\u6545\u969C\u4E0D\u53EF\u907F\u514D","children":[]},{"level":2,"title":"3. \u6838\u5FC3\u5B9E\u73B0\u65B9\u6848","slug":"_3-\u6838\u5FC3\u5B9E\u73B0\u65B9\u6848","link":"#_3-\u6838\u5FC3\u5B9E\u73B0\u65B9\u6848","children":[{"level":3,"title":"3.1 \u5197\u4F59\u8BBE\u8BA1","slug":"_3-1-\u5197\u4F59\u8BBE\u8BA1","link":"#_3-1-\u5197\u4F59\u8BBE\u8BA1","children":[]},{"level":3,"title":"3.2 \u7194\u65AD\u8BBE\u8BA1","slug":"_3-2-\u7194\u65AD\u8BBE\u8BA1","link":"#_3-2-\u7194\u65AD\u8BBE\u8BA1","children":[]},{"level":3,"title":"3.3 \u9650\u6D41\u8BBE\u8BA1","slug":"_3-3-\u9650\u6D41\u8BBE\u8BA1","link":"#_3-3-\u9650\u6D41\u8BBE\u8BA1","children":[]}]},{"level":2,"title":"4. \u5176\u4ED6\u8BBE\u8BA1\u4E0E\u65B9\u6848","slug":"_4-\u5176\u4ED6\u8BBE\u8BA1\u4E0E\u65B9\u6848","link":"#_4-\u5176\u4ED6\u8BBE\u8BA1\u4E0E\u65B9\u6848","children":[{"level":3,"title":"4.1 \u964D\u7EA7\u8BBE\u8BA1","slug":"_4-1-\u964D\u7EA7\u8BBE\u8BA1","link":"#_4-1-\u964D\u7EA7\u8BBE\u8BA1","children":[]},{"level":3,"title":"4.2 \u65E0\u72B6\u6001\u8BBE\u8BA1","slug":"_4-2-\u65E0\u72B6\u6001\u8BBE\u8BA1","link":"#_4-2-\u65E0\u72B6\u6001\u8BBE\u8BA1","children":[]},{"level":3,"title":"4.3 \u5E42\u7B49\u6027\u8BBE\u8BA1","slug":"_4-3-\u5E42\u7B49\u6027\u8BBE\u8BA1","link":"#_4-3-\u5E42\u7B49\u6027\u8BBE\u8BA1","children":[]},{"level":3,"title":"4.4 \u91CD\u8BD5\u8BBE\u8BA1","slug":"_4-4-\u91CD\u8BD5\u8BBE\u8BA1","link":"#_4-4-\u91CD\u8BD5\u8BBE\u8BA1","children":[]},{"level":3,"title":"4.5 \u63A5\u53E3\u7F13\u5B58","slug":"_4-5-\u63A5\u53E3\u7F13\u5B58","link":"#_4-5-\u63A5\u53E3\u7F13\u5B58","children":[]},{"level":3,"title":"4.6 \u5B9E\u65F6\u76D1\u63A7\u548C\u5EA6\u91CF","slug":"_4-6-\u5B9E\u65F6\u76D1\u63A7\u548C\u5EA6\u91CF","link":"#_4-6-\u5B9E\u65F6\u76D1\u63A7\u548C\u5EA6\u91CF","children":[]},{"level":3,"title":"4.7 \u5E38\u89C4\u5212\u5316\u7EF4\u62A4","slug":"_4-7-\u5E38\u89C4\u5212\u5316\u7EF4\u62A4","link":"#_4-7-\u5E38\u89C4\u5212\u5316\u7EF4\u62A4","children":[]}]},{"level":2,"title":"5. \u603B\u7ED3","slug":"_5-\u603B\u7ED3","link":"#_5-\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":17.61,"words":5283},"filePathRelative":"arch/base/arch-y-ensure-high-availability.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
