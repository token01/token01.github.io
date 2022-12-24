const e=JSON.parse('{"key":"v-0f6991c1","path":"/deploy/mq-kafka/kafka-x-overview.html","title":"Kafka - \u7B80\u4ECB","lang":"zh-CN","frontmatter":{"order":20,"category":["kafka","MQ"],"summary":"Kafka - \u7B80\u4ECB 1. \u7B80\u4ECB 1.1 \u6982\u8FF0 Kafka\u662F\u6700\u521D\u7531Linkedin\u516C\u53F8\u5F00\u53D1\uFF0C\u662F\u4E00\u4E2A\u5206\u5E03\u5F0F\u3001\u5206\u533A\u7684\u3001\u591A\u526F\u672C\u7684\u3001\u591A\u8BA2\u9605\u8005\uFF0C\u57FA\u4E8Ezookeeper\u534F\u8C03\u7684\u5206\u5E03\u5F0F\u65E5\u5FD7\u7CFB\u7EDF\uFF08\u4E5F\u53EF\u4EE5\u5F53\u505AMQ\u7CFB\u7EDF\uFF09\uFF0C\u5E38\u89C1\u53EF\u4EE5\u7528\u4E8Eweb/nginx\u65E5\u5FD7\u3001\u8BBF\u95EE\u65E5\u5FD7\uFF0C\u6D88\u606F\u670D\u52A1\u7B49\u7B49\uFF0CLinkedin\u4E8E2010\u5E74\u8D21\u732E\u7ED9\u4E86Apache\u57FA\u91D1\u4F1A\u5E76\u6210\u4E3A\u9876\u7EA7\u5F00\u6E90\u9879\u76EE\u3002 \u4E3B\u8981\u5E94\u7528\u573A\u666F\u662F\uFF1A\u89E3\u51B3\u5E94\u7528","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/deploy/mq-kafka/kafka-x-overview.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"Kafka - \u7B80\u4ECB"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u7B80\u4ECB","slug":"_1-\u7B80\u4ECB","link":"#_1-\u7B80\u4ECB","children":[{"level":3,"title":"1.1 \u6982\u8FF0","slug":"_1-1-\u6982\u8FF0","link":"#_1-1-\u6982\u8FF0","children":[]},{"level":3,"title":"1.2 \u6D88\u606F\u7CFB\u7EDF\u4ECB\u7ECD","slug":"_1-2-\u6D88\u606F\u7CFB\u7EDF\u4ECB\u7ECD","link":"#_1-2-\u6D88\u606F\u7CFB\u7EDF\u4ECB\u7ECD","children":[]},{"level":3,"title":"1.3 \u70B9\u5BF9\u70B9\u6D88\u606F\u4F20\u9012\u6A21\u5F0F","slug":"_1-3-\u70B9\u5BF9\u70B9\u6D88\u606F\u4F20\u9012\u6A21\u5F0F","link":"#_1-3-\u70B9\u5BF9\u70B9\u6D88\u606F\u4F20\u9012\u6A21\u5F0F","children":[]},{"level":3,"title":"1.4 \u53D1\u5E03-\u8BA2\u9605\u6D88\u606F\u4F20\u9012\u6A21\u5F0F","slug":"_1-4-\u53D1\u5E03-\u8BA2\u9605\u6D88\u606F\u4F20\u9012\u6A21\u5F0F","link":"#_1-4-\u53D1\u5E03-\u8BA2\u9605\u6D88\u606F\u4F20\u9012\u6A21\u5F0F","children":[]}]},{"level":2,"title":"2. Kafka\u7684\u4F18\u70B9","slug":"_2-kafka\u7684\u4F18\u70B9","link":"#_2-kafka\u7684\u4F18\u70B9","children":[{"level":3,"title":"2.1 \u89E3\u8026","slug":"_2-1-\u89E3\u8026","link":"#_2-1-\u89E3\u8026","children":[]},{"level":3,"title":"2.2 \u5197\u4F59\uFF08\u526F\u672C\uFF09","slug":"_2-2-\u5197\u4F59-\u526F\u672C","link":"#_2-2-\u5197\u4F59-\u526F\u672C","children":[]},{"level":3,"title":"2.3 \u6269\u5C55\u6027","slug":"_2-3-\u6269\u5C55\u6027","link":"#_2-3-\u6269\u5C55\u6027","children":[]},{"level":3,"title":"2.4 \u7075\u6D3B\u6027&\u5CF0\u503C\u5904\u7406\u80FD\u529B","slug":"_2-4-\u7075\u6D3B\u6027-\u5CF0\u503C\u5904\u7406\u80FD\u529B","link":"#_2-4-\u7075\u6D3B\u6027-\u5CF0\u503C\u5904\u7406\u80FD\u529B","children":[]},{"level":3,"title":"2.5 \u53EF\u6062\u590D\u6027","slug":"_2-5-\u53EF\u6062\u590D\u6027","link":"#_2-5-\u53EF\u6062\u590D\u6027","children":[]},{"level":3,"title":"2.6 \u987A\u5E8F\u4FDD\u8BC1","slug":"_2-6-\u987A\u5E8F\u4FDD\u8BC1","link":"#_2-6-\u987A\u5E8F\u4FDD\u8BC1","children":[]},{"level":3,"title":"2.7 \u7F13\u51B2","slug":"_2-7-\u7F13\u51B2","link":"#_2-7-\u7F13\u51B2","children":[]},{"level":3,"title":"2.8 \u5F02\u6B65\u901A\u4FE1","slug":"_2-8-\u5F02\u6B65\u901A\u4FE1","link":"#_2-8-\u5F02\u6B65\u901A\u4FE1","children":[]}]},{"level":2,"title":"3. Kafka\u4E2D\u7684\u672F\u8BED\u89E3\u91CA","slug":"_3-kafka\u4E2D\u7684\u672F\u8BED\u89E3\u91CA","link":"#_3-kafka\u4E2D\u7684\u672F\u8BED\u89E3\u91CA","children":[{"level":3,"title":"3.1 \u6982\u8FF0","slug":"_3-1-\u6982\u8FF0","link":"#_3-1-\u6982\u8FF0","children":[]},{"level":3,"title":"3.2 broker","slug":"_3-2-broker","link":"#_3-2-broker","children":[]},{"level":3,"title":"3.3 Topic","slug":"_3-3-topic","link":"#_3-3-topic","children":[]},{"level":3,"title":"3.4 Partition","slug":"_3-4-partition","link":"#_3-4-partition","children":[]},{"level":3,"title":"3.5 Producer","slug":"_3-5-producer","link":"#_3-5-producer","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":7.36,"words":2208},"filePathRelative":"deploy/mq-kafka/kafka-x-overview.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
