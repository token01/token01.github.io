const e=JSON.parse('{"key":"v-280c4921","path":"/java/thread/java-thread-y-threadlocal-interview.html","title":"Java \u5E76\u53D1 - ThreadLocal(\u9762\u8BD5\u573A\u666F)","lang":"zh-CN","frontmatter":{"order":46,"category":["Java","\u5E76\u53D1"],"summary":"Java \u5E76\u53D1 - ThreadLocal(\u9762\u8BD5\u573A\u666F) 1. \u8BB2\u8BB2 ThreadLocal \u5728\u4F60\u4EEC\u9879\u76EE\u4E2D\u7684\u7528\u6CD5\uFF1F \u9762\u8BD5\u5B98\uFF1A\u90A3\u4F60\u8DDF\u6211\u8BB2\u8BB2 ThreadLocal \u5728\u4F60\u4EEC\u9879\u76EE\u4E2D\u7684\u7528\u6CD5\u5427\u3002 \u5B89\u742A\u62C9\uFF1A\u4E3E\u4E2A\u6817\u5B50\uFF0C\u6211\u4EEC\u9879\u76EE\u6BCF\u79D2\u949F\u540C\u65F6\u4F1A\u6709\u5F88\u591A\u7528\u6237\u8BF7\u6C42\uFF0C\u90A3\u6BCF\u4E2A\u8BF7\u6C42\u90FD\u5E26\u6709\u7528\u6237\u4FE1\u606F\uFF0C\u6211\u4EEC\u77E5\u9053\u901A\u5E38\u90FD\u662F\u4E00\u4E2A\u7EBF\u7A0B\u5904\u7406\u4E00\u4E2A\u7528\u6237\u8BF7\u6C42\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A\u7528\u6237\u4FE1\u606F\u4E22\u5230Threadlocal\u91CC\u9762\uFF0C\u8BA9\u6BCF","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/java/thread/java-thread-y-threadlocal-interview.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"Java \u5E76\u53D1 - ThreadLocal(\u9762\u8BD5\u573A\u666F)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u8BB2\u8BB2 ThreadLocal \u5728\u4F60\u4EEC\u9879\u76EE\u4E2D\u7684\u7528\u6CD5\uFF1F","slug":"_1-\u8BB2\u8BB2-threadlocal-\u5728\u4F60\u4EEC\u9879\u76EE\u4E2D\u7684\u7528\u6CD5","link":"#_1-\u8BB2\u8BB2-threadlocal-\u5728\u4F60\u4EEC\u9879\u76EE\u4E2D\u7684\u7528\u6CD5","children":[]},{"level":2,"title":"2. Threadlocal \u662F\u5E72\u4EC0\u4E48\u7684\uFF1F","slug":"_2-threadlocal-\u662F\u5E72\u4EC0\u4E48\u7684","link":"#_2-threadlocal-\u662F\u5E72\u4EC0\u4E48\u7684","children":[]},{"level":2,"title":"3. Threadlocal \u600E\u4E48\u5B9E\u73B0\u7EBF\u7A0B\u53D8\u91CF\u7684\u9694\u79BB","slug":"_3-threadlocal-\u600E\u4E48\u5B9E\u73B0\u7EBF\u7A0B\u53D8\u91CF\u7684\u9694\u79BB","link":"#_3-threadlocal-\u600E\u4E48\u5B9E\u73B0\u7EBF\u7A0B\u53D8\u91CF\u7684\u9694\u79BB","children":[]},{"level":2,"title":"4.Thread \u7C7B\u6709\u4E2A ThreadlocalMap \u5C5E\u6027\u7684\u6210\u5458\u53D8\u91CF\uFF0C\u4F46\u662FThreadlocalMap \u7684\u5B9A\u4E49\u5374\u5728Threadlocal \u4E2D\uFF0C\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u505A\uFF1F","slug":"_4-thread-\u7C7B\u6709\u4E2A-threadlocalmap-\u5C5E\u6027\u7684\u6210\u5458\u53D8\u91CF-\u4F46\u662Fthreadlocalmap-\u7684\u5B9A\u4E49\u5374\u5728threadlocal-\u4E2D-\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u505A","link":"#_4-thread-\u7C7B\u6709\u4E2A-threadlocalmap-\u5C5E\u6027\u7684\u6210\u5458\u53D8\u91CF-\u4F46\u662Fthreadlocalmap-\u7684\u5B9A\u4E49\u5374\u5728threadlocal-\u4E2D-\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u505A","children":[]},{"level":2,"title":"5. \u4E3A\u4EC0\u4E48\u4E0D\u7528\u7EBF\u7A0B\u5BF9\u8C61\uFF08Thread\u5BF9\u8C61\uFF09\u4F5C\u4E3Akey?","slug":"_5-\u4E3A\u4EC0\u4E48\u4E0D\u7528\u7EBF\u7A0B\u5BF9\u8C61-thread\u5BF9\u8C61-\u4F5C\u4E3Akey","link":"#_5-\u4E3A\u4EC0\u4E48\u4E0D\u7528\u7EBF\u7A0B\u5BF9\u8C61-thread\u5BF9\u8C61-\u4F5C\u4E3Akey","children":[]},{"level":2,"title":"6. \u90A3\u65B0\u589E\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u5E94\u8BE5\u600E\u4E48\u505A?","slug":"_6-\u90A3\u65B0\u589E\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u5E94\u8BE5\u600E\u4E48\u505A","link":"#_6-\u90A3\u65B0\u589E\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u5E94\u8BE5\u600E\u4E48\u505A","children":[]},{"level":2,"title":"7. ThreadlocalMap \u662F\u4EC0\u4E48\u6570\u636E\u7ED3\u6784\u5B9E\u73B0\u7684\uFF1F","slug":"_7-threadlocalmap-\u662F\u4EC0\u4E48\u6570\u636E\u7ED3\u6784\u5B9E\u73B0\u7684","link":"#_7-threadlocalmap-\u662F\u4EC0\u4E48\u6570\u636E\u7ED3\u6784\u5B9E\u73B0\u7684","children":[]},{"level":2,"title":"8. ThreadlocalMap \u53D1\u751Fhash\u51B2\u7A81\u600E\u4E48\u529E?","slug":"_8-threadlocalmap-\u53D1\u751Fhash\u51B2\u7A81\u600E\u4E48\u529E","link":"#_8-threadlocalmap-\u53D1\u751Fhash\u51B2\u7A81\u600E\u4E48\u529E","children":[]},{"level":2,"title":"9. ThreadlocalMap \u4E2Dkey\u662F WeakReference\u7C7B\u578B\uFF0C\u80FD\u8BB2\u8BB2Java\u4E2D\u6709\u51E0\u79CD\u7C7B\u4F3C\u7684\u5F15\u7528\uFF0C\u4EC0\u4E48\u533A\u522B\u5417","slug":"_9-threadlocalmap-\u4E2Dkey\u662F-weakreference\u7C7B\u578B-\u80FD\u8BB2\u8BB2java\u4E2D\u6709\u51E0\u79CD\u7C7B\u4F3C\u7684\u5F15\u7528-\u4EC0\u4E48\u533A\u522B\u5417","link":"#_9-threadlocalmap-\u4E2Dkey\u662F-weakreference\u7C7B\u578B-\u80FD\u8BB2\u8BB2java\u4E2D\u6709\u51E0\u79CD\u7C7B\u4F3C\u7684\u5F15\u7528-\u4EC0\u4E48\u533A\u522B\u5417","children":[]},{"level":2,"title":"10. \u4E3A\u4EC0\u4E48ThreadlocalMap \u4E2Dkey \u8BBE\u8BA1\u6210 WeakReference\uFF08\u5F31\u5F15\u7528\uFF09\u7C7B\u578B","slug":"_10-\u4E3A\u4EC0\u4E48threadlocalmap-\u4E2Dkey-\u8BBE\u8BA1\u6210-weakreference-\u5F31\u5F15\u7528-\u7C7B\u578B","link":"#_10-\u4E3A\u4EC0\u4E48threadlocalmap-\u4E2Dkey-\u8BBE\u8BA1\u6210-weakreference-\u5F31\u5F15\u7528-\u7C7B\u578B","children":[]},{"level":2,"title":"11. ThreadLocal\u5BF9\u8C61\u6709\u5F3A\u5F15\u7528\uFF0C\u56DE\u6536\u4E0D\u6389\uFF0C\u5E72\u561B\u8FD8\u8981\u8BBE\u8BA1\u6210WeakReference\u7C7B\u578B","slug":"_11-threadlocal\u5BF9\u8C61\u6709\u5F3A\u5F15\u7528-\u56DE\u6536\u4E0D\u6389-\u5E72\u561B\u8FD8\u8981\u8BBE\u8BA1\u6210weakreference\u7C7B\u578B","link":"#_11-threadlocal\u5BF9\u8C61\u6709\u5F3A\u5F15\u7528-\u56DE\u6536\u4E0D\u6389-\u5E72\u561B\u8FD8\u8981\u8BBE\u8BA1\u6210weakreference\u7C7B\u578B","children":[]},{"level":2,"title":"12. \u90A3\u5982\u679CThreadlocal \u5BF9\u8C61\u4E00\u76F4\u6709\u5F3A\u5F15\u7528\uFF0C\u90A3\u600E\u4E48\u529E","slug":"_12-\u90A3\u5982\u679Cthreadlocal-\u5BF9\u8C61\u4E00\u76F4\u6709\u5F3A\u5F15\u7528-\u90A3\u600E\u4E48\u529E","link":"#_12-\u90A3\u5982\u679Cthreadlocal-\u5BF9\u8C61\u4E00\u76F4\u6709\u5F3A\u5F15\u7528-\u90A3\u600E\u4E48\u529E","children":[]},{"level":2,"title":"13. \u6709\u5F88\u591A\u53D8\u91CF\u90FD\u8981\u585E\u5230ThreadlocalMap\u4E2D,\u90A3\u5C82\u4E0D\u662F\u8981\u7533\u660E\u5F88\u591A\u4E2AThreadlocal \u5BF9\u8C61\uFF1F\u6709\u6CA1\u6709\u597D\u7684\u89E3\u51B3\u529E\u6CD5\u3002","slug":"_13-\u6709\u5F88\u591A\u53D8\u91CF\u90FD\u8981\u585E\u5230threadlocalmap\u4E2D-\u90A3\u5C82\u4E0D\u662F\u8981\u7533\u660E\u5F88\u591A\u4E2Athreadlocal-\u5BF9\u8C61-\u6709\u6CA1\u6709\u597D\u7684\u89E3\u51B3\u529E\u6CD5\u3002","link":"#_13-\u6709\u5F88\u591A\u53D8\u91CF\u90FD\u8981\u585E\u5230threadlocalmap\u4E2D-\u90A3\u5C82\u4E0D\u662F\u8981\u7533\u660E\u5F88\u591A\u4E2Athreadlocal-\u5BF9\u8C61-\u6709\u6CA1\u6709\u597D\u7684\u89E3\u51B3\u529E\u6CD5\u3002","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":13.42,"words":4027},"filePathRelative":"java/thread/java-thread-y-threadlocal-interview.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
