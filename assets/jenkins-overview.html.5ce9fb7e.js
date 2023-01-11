const e=JSON.parse('{"key":"v-21e1fe3e","path":"/deploy/jenkins/jenkins-overview.html","title":"Jenkins\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":10,"category":["kenkins"],"summary":"Jenkins\u8BE6\u89E3 1. \u7B80\u4ECB 1.1 jenkins\u662F\u4EC0\u4E48? Jenkins\u662F\u4E00\u6B3E\u5F00\u6E90\u6301\u7EED\u96C6\u6210(CI&CD ) \u5DE5\u5177\u8F6F\u4EF6\uFF0C\u7528\u4E8E\u81EA\u52A8\u5316\u5404\u79CD\u4EFB\u52A1\uFF0C\u5305\u62EC\u6784\u5EFA\u3001\u6D4B\u8BD5\u548C\u90E8\u7F72\u8F6F\u4EF6\u3002 CI \u6301\u7EED\u96C6\u6210: \u662F\u501F\u52A9\u5DE5\u5177\u5BF9\u8F6F\u4EF6\u9879\u76EE\u8FDB\u884C\u6301\u7EED\u7684\u81EA\u52A8\u5316\u7684\u7F16\u8BD1\u6253\u5305\u6784\u5EFA\u6D4B\u8BD5\u53D1\u5E03\uFF0C\u6765\u68C0\u67E5\u8F6F\u4EF6\u4EA4\u4ED8\u8D28\u91CF\u7684\u4E00\u79CD\u884C\u4E3A\u3002; CD\u6301\u7EED\u90E8\u7F72: \u662F\u57FA\u4E8E\u6301\u7EED\u4EA4\u4ED8\u7684\u4F18\u52BF\u81EA\u52A8\u5C06\u7ECF\u8FC7\u6D4B\u8BD5\u7684\u4EE3\u7801\u63A8\u5165\u751F\u4EA7\u73AF\u5883\u7684\u8FC7\u7A0B\u3002","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/deploy/jenkins/jenkins-overview.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"Jenkins\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T11:56:34.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T11:56:34.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u7B80\u4ECB","slug":"_1-\u7B80\u4ECB","link":"#_1-\u7B80\u4ECB","children":[{"level":3,"title":"1.1 jenkins\u662F\u4EC0\u4E48?","slug":"_1-1-jenkins\u662F\u4EC0\u4E48","link":"#_1-1-jenkins\u662F\u4EC0\u4E48","children":[]},{"level":3,"title":"1.2 \u53D1\u5C55\u5386\u53F2","slug":"_1-2-\u53D1\u5C55\u5386\u53F2","link":"#_1-2-\u53D1\u5C55\u5386\u53F2","children":[]},{"level":3,"title":"1.3 \u6301\u7EED\u96C6\u6210(CI&CD )","slug":"_1-3-\u6301\u7EED\u96C6\u6210-ci-cd","link":"#_1-3-\u6301\u7EED\u96C6\u6210-ci-cd","children":[]}]},{"level":2,"title":"2. \u5B89\u88C5\u4E0E\u914D\u7F6E","slug":"_2-\u5B89\u88C5\u4E0E\u914D\u7F6E","link":"#_2-\u5B89\u88C5\u4E0E\u914D\u7F6E","children":[{"level":3,"title":"2.1 docker \u4E2D\u5B89\u88C5Jenkins","slug":"_2-1-docker-\u4E2D\u5B89\u88C5jenkins","link":"#_2-1-docker-\u4E2D\u5B89\u88C5jenkins","children":[]},{"level":3,"title":"2.2 Jenkins \u521D\u59CB\u5316\u914D\u7F6E","slug":"_2-2-jenkins-\u521D\u59CB\u5316\u914D\u7F6E","link":"#_2-2-jenkins-\u521D\u59CB\u5316\u914D\u7F6E","children":[]},{"level":3,"title":"2.3 \u89D2\u8272\u6743\u9650\u7BA1\u7406","slug":"_2-3-\u89D2\u8272\u6743\u9650\u7BA1\u7406","link":"#_2-3-\u89D2\u8272\u6743\u9650\u7BA1\u7406","children":[]},{"level":3,"title":"2.4 \u51ED\u636E\u7BA1\u7406","slug":"_2-4-\u51ED\u636E\u7BA1\u7406","link":"#_2-4-\u51ED\u636E\u7BA1\u7406","children":[]},{"level":3,"title":"2.5 \u6784\u5EFA\u5DE5\u5177\u96C6\u6210","slug":"_2-5-\u6784\u5EFA\u5DE5\u5177\u96C6\u6210","link":"#_2-5-\u6784\u5EFA\u5DE5\u5177\u96C6\u6210","children":[]}]},{"level":2,"title":"3. \u6784\u5EFA\u9879\u76EE","slug":"_3-\u6784\u5EFA\u9879\u76EE","link":"#_3-\u6784\u5EFA\u9879\u76EE","children":[{"level":3,"title":"3.1 \u6784\u5EFA\u7C7B\u578B","slug":"_3-1-\u6784\u5EFA\u7C7B\u578B","link":"#_3-1-\u6784\u5EFA\u7C7B\u578B","children":[]}]},{"level":2,"title":"4. \u6784\u5EFA - \u81EA\u7531\u98CE\u683C\u9879\u76EE\u6784\u5EFA","slug":"_4-\u6784\u5EFA-\u81EA\u7531\u98CE\u683C\u9879\u76EE\u6784\u5EFA","link":"#_4-\u6784\u5EFA-\u81EA\u7531\u98CE\u683C\u9879\u76EE\u6784\u5EFA","children":[{"level":3,"title":"4.1 General \uFF08\u57FA\u7840\u914D\u7F6E\uFF09","slug":"_4-1-general-\u57FA\u7840\u914D\u7F6E","link":"#_4-1-general-\u57FA\u7840\u914D\u7F6E","children":[]},{"level":3,"title":"4.2 Source Code Management\uFF08\u6E90\u7801\u7BA1\u7406\uFF09","slug":"_4-2-source-code-management-\u6E90\u7801\u7BA1\u7406","link":"#_4-2-source-code-management-\u6E90\u7801\u7BA1\u7406","children":[]},{"level":3,"title":"4.3 Build Triggers \uFF08\u6784\u5EFA\u89E6\u53D1\u5668\uFF09","slug":"_4-3-build-triggers-\u6784\u5EFA\u89E6\u53D1\u5668","link":"#_4-3-build-triggers-\u6784\u5EFA\u89E6\u53D1\u5668","children":[]},{"level":3,"title":"4.4 Build Environment (\u6784\u5EFA\u73AF\u5883)","slug":"_4-4-build-environment-\u6784\u5EFA\u73AF\u5883","link":"#_4-4-build-environment-\u6784\u5EFA\u73AF\u5883","children":[]},{"level":3,"title":"4.5 Build (\u6784\u5EFA)","slug":"_4-5-build-\u6784\u5EFA","link":"#_4-5-build-\u6784\u5EFA","children":[]},{"level":3,"title":"4.6 Post-build Actions (\u6784\u5EFA\u540E\u64CD\u4F5C)","slug":"_4-6-post-build-actions-\u6784\u5EFA\u540E\u64CD\u4F5C","link":"#_4-6-post-build-actions-\u6784\u5EFA\u540E\u64CD\u4F5C","children":[]}]},{"level":2,"title":"5. \u6784\u5EFA - maven\u9879\u76EE","slug":"_5-\u6784\u5EFA-maven\u9879\u76EE","link":"#_5-\u6784\u5EFA-maven\u9879\u76EE","children":[]},{"level":2,"title":"6. \u6784\u5EFA - \u6D41\u6C34\u7EBF\u9879\u76EE\uFF08 Pipeline Project\uFF09","slug":"_6-\u6784\u5EFA-\u6D41\u6C34\u7EBF\u9879\u76EE-pipeline-project","link":"#_6-\u6784\u5EFA-\u6D41\u6C34\u7EBF\u9879\u76EE-pipeline-project","children":[{"level":3,"title":"6.1 \u4F7F\u7528Pipeline\u6709\u4EC0\u4E48\u597D\u5904\uFF1A","slug":"_6-1-\u4F7F\u7528pipeline\u6709\u4EC0\u4E48\u597D\u5904","link":"#_6-1-\u4F7F\u7528pipeline\u6709\u4EC0\u4E48\u597D\u5904","children":[]},{"level":3,"title":"6.2 \u5982\u4F55\u521B\u5EFA Jenkins Pipeline\u5462","slug":"_6-2-\u5982\u4F55\u521B\u5EFA-jenkins-pipeline\u5462","link":"#_6-2-\u5982\u4F55\u521B\u5EFA-jenkins-pipeline\u5462","children":[]},{"level":3,"title":"6.3 \u4E09\u4E2A\u6838\u5FC3\u6982\u5FF5","slug":"_6-3-\u4E09\u4E2A\u6838\u5FC3\u6982\u5FF5","link":"#_6-3-\u4E09\u4E2A\u6838\u5FC3\u6982\u5FF5","children":[]},{"level":3,"title":"6.4 Pipeline\u7684\u57FA\u7840\u8BED\u6CD5","slug":"_6-4-pipeline\u7684\u57FA\u7840\u8BED\u6CD5","link":"#_6-4-pipeline\u7684\u57FA\u7840\u8BED\u6CD5","children":[]}]},{"level":2,"title":"7. \u6784\u5EFA - \u591A\u5206\u652F\u6D41\u6C34\u7EBF","slug":"_7-\u6784\u5EFA-\u591A\u5206\u652F\u6D41\u6C34\u7EBF","link":"#_7-\u6784\u5EFA-\u591A\u5206\u652F\u6D41\u6C34\u7EBF","children":[{"level":3,"title":"7.1 \u5E38\u89C1\u95EE\u9898","slug":"_7-1-\u5E38\u89C1\u95EE\u9898","link":"#_7-1-\u5E38\u89C1\u95EE\u9898","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1672055794000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":3}]},"readingTime":{"minutes":15.33,"words":4599},"filePathRelative":"deploy/jenkins/jenkins-overview.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};