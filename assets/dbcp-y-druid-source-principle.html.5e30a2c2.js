const e=JSON.parse('{"key":"v-7af73097","path":"/dependencies/database-connection-pool/dbcp-y-druid-source-principle.html","title":"Druid\u6E90\u7801\u5B66\u4E60\uFF08\u4E09\uFF09-DruidDataSource\u8FDE\u63A5\u6C60\u7684\u57FA\u672C\u539F\u7406\uFF08\u91CD\u70B9\uFF09","lang":"zh-CN","frontmatter":{"summary":"Druid\u6E90\u7801\u5B66\u4E60\uFF08\u4E09\uFF09-DruidDataSource\u8FDE\u63A5\u6C60\u7684\u57FA\u672C\u539F\u7406\uFF08\u91CD\u70B9\uFF09 1. \u7B80\u4ECB DruidDataSource \u6570\u636E\u5E93\u8FDE\u63A5\u6C60 \u7684\u7684\u672C\u8D28\uFF0C\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u5229\u7528ReentrentLock\u548C\u4E24\u4E2ACondition\u7EC4\u6210\u7684\u751F\u4EA7\u8005\u548C\u6D88\u8D39\u8005\u6A21\u578B\u3002 2. DruidDataSource\u4E2D\u7684\u9501 \u5728DruidAbstractDataSource\u7C7B\u4E2D\uFF0C\u5B9A\u4E49\u4E86\u4E00\u4E2A\u975E\u5E38\u91CD\u8981","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/dependencies/database-connection-pool/dbcp-y-druid-source-principle.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"Druid\u6E90\u7801\u5B66\u4E60\uFF08\u4E09\uFF09-DruidDataSource\u8FDE\u63A5\u6C60\u7684\u57FA\u672C\u539F\u7406\uFF08\u91CD\u70B9\uFF09"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T12:45:53.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T12:45:53.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u7B80\u4ECB","slug":"_1-\u7B80\u4ECB","link":"#_1-\u7B80\u4ECB","children":[]},{"level":2,"title":"2. DruidDataSource\u4E2D\u7684\u9501","slug":"_2-druiddatasource\u4E2D\u7684\u9501","link":"#_2-druiddatasource\u4E2D\u7684\u9501","children":[]},{"level":2,"title":"3.DruidDataSource\u4E2D\u7684\u7EBF\u7A0B","slug":"_3-druiddatasource\u4E2D\u7684\u7EBF\u7A0B","link":"#_3-druiddatasource\u4E2D\u7684\u7EBF\u7A0B","children":[{"level":3,"title":"3.1 CreateConnectionThread(\u521B\u5EFA\u8FDE\u63A5,\u751F\u4EA7\u8005)","slug":"_3-1-createconnectionthread-\u521B\u5EFA\u8FDE\u63A5-\u751F\u4EA7\u8005","link":"#_3-1-createconnectionthread-\u521B\u5EFA\u8FDE\u63A5-\u751F\u4EA7\u8005","children":[]},{"level":3,"title":"3.2 DestroyConnectionThread\uFF08\u9500\u6BC1\u8FDE\u63A5\uFF0C\u6D88\u8D39\u8005\uFF09","slug":"_3-2-destroyconnectionthread-\u9500\u6BC1\u8FDE\u63A5-\u6D88\u8D39\u8005","link":"#_3-2-destroyconnectionthread-\u9500\u6BC1\u8FDE\u63A5-\u6D88\u8D39\u8005","children":[]},{"level":3,"title":"3.3 LogStatsThread","slug":"_3-3-logstatsthread","link":"#_3-3-logstatsthread","children":[]},{"level":3,"title":"3.4 CreateConnectionTask","slug":"_3-4-createconnectiontask","link":"#_3-4-createconnectiontask","children":[]},{"level":3,"title":"3.5 DestroyTask","slug":"_3-5-destroytask","link":"#_3-5-destroytask","children":[]},{"level":3,"title":"3.6 \u7528\u6237\u7EBF\u7A0B","slug":"_3-6-\u7528\u6237\u7EBF\u7A0B","link":"#_3-6-\u7528\u6237\u7EBF\u7A0B","children":[]}]},{"level":2,"title":"4. DruidDataSource\u7684\u57FA\u672C\u539F\u7406","slug":"_4-druiddatasource\u7684\u57FA\u672C\u539F\u7406","link":"#_4-druiddatasource\u7684\u57FA\u672C\u539F\u7406","children":[]},{"level":2,"title":"\u53C2\u8003\u95EE\u9898","slug":"\u53C2\u8003\u95EE\u9898","link":"#\u53C2\u8003\u95EE\u9898","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1672058753000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":3}]},"readingTime":{"minutes":6.24,"words":1871},"filePathRelative":"dependencies/database-connection-pool/dbcp-y-druid-source-principle.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};