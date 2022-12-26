import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as n,a as e,b as s,d as t,f as i,r as c}from"./app.33b1aeb5.js";const p={},l=i(`<h1 id="kafka-\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#kafka-\u67B6\u6784" aria-hidden="true">#</a> Kafka - \u67B6\u6784</h1><h2 id="_1-kafka\u7684\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#_1-kafka\u7684\u67B6\u6784" aria-hidden="true">#</a> 1. Kafka\u7684\u67B6\u6784</h2><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220921201525148.png" alt="image-20220921201525148"></p><p>\u5982\u4E0A\u56FE\u6240\u793A\uFF0C\u4E00\u4E2A\u5178\u578B\u7684Kafka\u96C6\u7FA4\u4E2D\u5305\u542B\u82E5\u5E72Producer\uFF08\u53EF\u4EE5\u662Fweb\u524D\u7AEF\u4EA7\u751F\u7684Page View\uFF0C\u6216\u8005\u662F\u670D\u52A1\u5668\u65E5\u5FD7\uFF0C\u7CFB\u7EDFCPU\u3001Memory\u7B49\uFF09\uFF0C\u82E5\u5E72broker\uFF08Kafka\u652F\u6301\u6C34\u5E73\u6269\u5C55\uFF0C\u4E00\u822Cbroker\u6570\u91CF\u8D8A\u591A\uFF0C\u96C6\u7FA4\u541E\u5410\u7387\u8D8A\u9AD8\uFF09\uFF0C\u82E5\u5E72Consumer Group\uFF0C\u4EE5\u53CA\u4E00\u4E2AZookeeper\u96C6\u7FA4\u3002Kafka\u901A\u8FC7Zookeeper\u7BA1\u7406\u96C6\u7FA4\u914D\u7F6E\uFF0C\u9009\u4E3Eleader\uFF0C\u4EE5\u53CA\u5728Consumer Group\u53D1\u751F\u53D8\u5316\u65F6\u8FDB\u884Crebalance\u3002Producer\u4F7F\u7528push\u6A21\u5F0F\u5C06\u6D88\u606F\u53D1\u5E03\u5230broker\uFF0CConsumer\u4F7F\u7528pull\u6A21\u5F0F\u4ECEbroker\u8BA2\u9605\u5E76\u6D88\u8D39\u6D88\u606F\u3002</p><h2 id="_2-topics\u548Cpartition" tabindex="-1"><a class="header-anchor" href="#_2-topics\u548Cpartition" aria-hidden="true">#</a> 2. Topics\u548CPartition</h2><p>Topic\u5728\u903B\u8F91\u4E0A\u53EF\u4EE5\u88AB\u8BA4\u4E3A\u662F\u4E00\u4E2Aqueue\uFF0C\u6BCF\u6761\u6D88\u8D39\u90FD\u5FC5\u987B\u6307\u5B9A\u5B83\u7684Topic\uFF0C\u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u4E3A\u5FC5\u987B\u6307\u660E\u628A\u8FD9\u6761\u6D88\u606F\u653E\u8FDB\u54EA\u4E2Aqueue\u91CC\u3002\u4E3A\u4E86\u4F7F\u5F97Kafka\u7684\u541E\u5410\u7387\u53EF\u4EE5\u7EBF\u6027\u63D0\u9AD8\uFF0C\u7269\u7406\u4E0A\u628ATopic\u5206\u6210\u4E00\u4E2A\u6216\u591A\u4E2APartition\uFF0C\u6BCF\u4E2APartition\u5728\u7269\u7406\u4E0A\u5BF9\u5E94\u4E00\u4E2A\u6587\u4EF6\u5939\uFF0C\u8BE5\u6587\u4EF6\u5939\u4E0B\u5B58\u50A8\u8FD9\u4E2APartition\u7684\u6240\u6709\u6D88\u606F\u548C\u7D22\u5F15\u6587\u4EF6\u3002\u521B\u5EFA\u4E00\u4E2Atopic\u65F6\uFF0C\u540C\u65F6\u53EF\u4EE5\u6307\u5B9A\u5206\u533A\u6570\u76EE\uFF0C\u5206\u533A\u6570\u8D8A\u591A\uFF0C\u5176\u541E\u5410\u91CF\u4E5F\u8D8A\u5927\uFF0C\u4F46\u662F\u9700\u8981\u7684\u8D44\u6E90\u4E5F\u8D8A\u591A\uFF0C\u540C\u65F6\u4E5F\u4F1A\u5BFC\u81F4\u66F4\u9AD8\u7684\u4E0D\u53EF\u7528\u6027\uFF0Ckafka\u5728\u63A5\u6536\u5230\u751F\u4EA7\u8005\u53D1\u9001\u7684\u6D88\u606F\u4E4B\u540E\uFF0C\u4F1A\u6839\u636E\u5747\u8861\u7B56\u7565\u5C06\u6D88\u606F\u5B58\u50A8\u5230\u4E0D\u540C\u7684\u5206\u533A\u4E2D\u3002\u56E0\u4E3A\u6BCF\u6761\u6D88\u606F\u90FD\u88ABappend\u5230\u8BE5Partition\u4E2D\uFF0C\u5C5E\u4E8E\u987A\u5E8F\u5199\u78C1\u76D8\uFF0C\u56E0\u6B64\u6548\u7387\u975E\u5E38\u9AD8\uFF08\u7ECF\u9A8C\u8BC1\uFF0C\u987A\u5E8F\u5199\u78C1\u76D8\u6548\u7387\u6BD4\u968F\u673A\u5199\u5185\u5B58\u8FD8\u8981\u9AD8\uFF0C\u8FD9\u662FKafka\u9AD8\u541E\u5410\u7387\u7684\u4E00\u4E2A\u5F88\u91CD\u8981\u7684\u4FDD\u8BC1\uFF09\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220921204223339.png" alt="image-20220921204223339"></p><p>\u5BF9\u4E8E\u4F20\u7EDF\u7684message queue\u800C\u8A00\uFF0C\u4E00\u822C\u4F1A\u5220\u9664\u5DF2\u7ECF\u88AB\u6D88\u8D39\u7684\u6D88\u606F\uFF0C\u800CKafka\u96C6\u7FA4\u4F1A\u4FDD\u7559\u6240\u6709\u7684\u6D88\u606F\uFF0C\u65E0\u8BBA\u5176\u88AB\u6D88\u8D39\u4E0E\u5426\u3002\u5F53\u7136\uFF0C\u56E0\u4E3A\u78C1\u76D8\u9650\u5236\uFF0C\u4E0D\u53EF\u80FD\u6C38\u4E45\u4FDD\u7559\u6240\u6709\u6570\u636E\uFF08\u5B9E\u9645\u4E0A\u4E5F\u6CA1\u5FC5\u8981\uFF09\uFF0C\u56E0\u6B64Kafka\u63D0\u4F9B\u4E24\u79CD\u7B56\u7565\u5220\u9664\u65E7\u6570\u636E\u3002\u4E00\u662F\u57FA\u4E8E\u65F6\u95F4\uFF0C\u4E8C\u662F\u57FA\u4E8EPartition\u6587\u4EF6\u5927\u5C0F\u3002\u4F8B\u5982\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E$KAFKA_HOME/config/server.properties\uFF0C\u8BA9Kafka\u5220\u9664\u4E00\u5468\u524D\u7684\u6570\u636E\uFF0C\u4E5F\u53EF\u5728Partition\u6587\u4EF6\u8D85\u8FC71GB\u65F6\u5220\u9664\u65E7\u6570\u636E\uFF0C\u914D\u7F6E\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token comment"># The minimum age of a log file to be eligible for deletion</span>
<span class="token key attr-name">log.retention.hours</span><span class="token punctuation">=</span><span class="token value attr-value">168</span>
<span class="token comment"># The maximum size of a log segment file. When this size is reached a new log segment will be created.</span>
<span class="token key attr-name">log.segment.bytes</span><span class="token punctuation">=</span><span class="token value attr-value">1073741824</span>
<span class="token comment"># The interval at which log segments are checked to see if they can be deleted according to the retention policies</span>
<span class="token key attr-name">log.retention.check.interval.ms</span><span class="token punctuation">=</span><span class="token value attr-value">300000</span>
<span class="token comment"># If log.cleaner.enable=true is set the cleaner will be enabled and individual logs can then be marked for log compaction.</span>
<span class="token key attr-name">log.cleaner.enable</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u4E3AKafka\u8BFB\u53D6\u7279\u5B9A\u6D88\u606F\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO(1)\uFF0C\u5373\u4E0E\u6587\u4EF6\u5927\u5C0F\u65E0\u5173\uFF0C\u6240\u4EE5\u8FD9\u91CC\u5220\u9664\u8FC7\u671F\u6587\u4EF6\u4E0E\u63D0\u9AD8Kafka\u6027\u80FD\u65E0\u5173\u3002\u9009\u62E9\u600E\u6837\u7684\u5220\u9664\u7B56\u7565\u53EA\u4E0E\u78C1\u76D8\u4EE5\u53CA\u5177\u4F53\u7684\u9700\u6C42\u6709\u5173\u3002\u53E6\u5916\uFF0CKafka\u4F1A\u4E3A\u6BCF\u4E00\u4E2AConsumer Group\u4FDD\u7559\u4E00\u4E9Bmetadata\u4FE1\u606F\u2014\u2014\u5F53\u524D\u6D88\u8D39\u7684\u6D88\u606F\u7684position\uFF0C\u4E5F\u5373offset\u3002\u8FD9\u4E2Aoffset\u7531Consumer\u63A7\u5236\u3002\u6B63\u5E38\u60C5\u51B5\u4E0BConsumer\u4F1A\u5728\u6D88\u8D39\u5B8C\u4E00\u6761\u6D88\u606F\u540E\u9012\u589E\u8BE5offset\u3002\u5F53\u7136\uFF0CConsumer\u4E5F\u53EF\u5C06offset\u8BBE\u6210\u4E00\u4E2A\u8F83\u5C0F\u7684\u503C\uFF0C\u91CD\u65B0\u6D88\u8D39\u4E00\u4E9B\u6D88\u606F\u3002\u56E0\u4E3Aoffet\u7531Consumer\u63A7\u5236\uFF0C\u6240\u4EE5Kafka broker\u662F\u65E0\u72B6\u6001\u7684\uFF0C\u5B83\u4E0D\u9700\u8981\u6807\u8BB0\u54EA\u4E9B\u6D88\u606F\u88AB\u54EA\u4E9B\u6D88\u8D39\u8FC7\uFF0C\u4E5F\u4E0D\u9700\u8981\u901A\u8FC7broker\u53BB\u4FDD\u8BC1\u540C\u4E00\u4E2AConsumer Group\u53EA\u6709\u4E00\u4E2AConsumer\u80FD\u6D88\u8D39\u67D0\u4E00\u6761\u6D88\u606F\uFF0C\u56E0\u6B64\u4E5F\u5C31\u4E0D\u9700\u8981\u9501\u673A\u5236\uFF0C\u8FD9\u4E5F\u4E3AKafka\u7684\u9AD8\u541E\u5410\u7387\u63D0\u4F9B\u4E86\u6709\u529B\u4FDD\u969C\u3002</p><h2 id="_3-producer\u6D88\u606F\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#_3-producer\u6D88\u606F\u8DEF\u7531" aria-hidden="true">#</a> 3. Producer\u6D88\u606F\u8DEF\u7531</h2><p>Producer\u53D1\u9001\u6D88\u606F\u5230broker\u65F6\uFF0C\u4F1A\u6839\u636EParitition\u673A\u5236\u9009\u62E9\u5C06\u5176\u5B58\u50A8\u5230\u54EA\u4E00\u4E2APartition\u3002\u5982\u679CPartition\u673A\u5236\u8BBE\u7F6E\u5408\u7406\uFF0C\u6240\u6709\u6D88\u606F\u53EF\u4EE5\u5747\u5300\u5206\u5E03\u5230\u4E0D\u540C\u7684Partition\u91CC\uFF0C\u8FD9\u6837\u5C31\u5B9E\u73B0\u4E86\u8D1F\u8F7D\u5747\u8861\u3002\u5982\u679C\u4E00\u4E2ATopic\u5BF9\u5E94\u4E00\u4E2A\u6587\u4EF6\uFF0C\u90A3\u8FD9\u4E2A\u6587\u4EF6\u6240\u5728\u7684\u673A\u5668I/O\u5C06\u4F1A\u6210\u4E3A\u8FD9\u4E2ATopic\u7684\u6027\u80FD\u74F6\u9888\uFF0C\u800C\u6709\u4E86Partition\u540E\uFF0C\u4E0D\u540C\u7684\u6D88\u606F\u53EF\u4EE5\u5E76\u884C\u5199\u5165\u4E0D\u540Cbroker\u7684\u4E0D\u540CPartition\u91CC\uFF0C\u6781\u5927\u7684\u63D0\u9AD8\u4E86\u541E\u5410\u7387\u3002\u53EF\u4EE5\u5728$KAFKA_HOME/config/server.properties\u4E2D\u901A\u8FC7\u914D\u7F6E\u9879num.partitions\u6765\u6307\u5B9A\u65B0\u5EFATopic\u7684\u9ED8\u8BA4Partition\u6570\u91CF\uFF0C\u4E5F\u53EF\u5728\u521B\u5EFATopic\u65F6\u901A\u8FC7\u53C2\u6570\u6307\u5B9A\uFF0C\u540C\u65F6\u4E5F\u53EF\u4EE5\u5728Topic\u521B\u5EFA\u4E4B\u540E\u901A\u8FC7Kafka\u63D0\u4F9B\u7684\u5DE5\u5177\u4FEE\u6539\u3002</p><p>\u5728\u53D1\u9001\u4E00\u6761\u6D88\u606F\u65F6\uFF0C\u53EF\u4EE5\u6307\u5B9A\u8FD9\u6761\u6D88\u606F\u7684key\uFF0CProducer\u6839\u636E\u8FD9\u4E2Akey\u548CPartition\u673A\u5236\u6765\u5224\u65AD\u5E94\u8BE5\u5C06\u8FD9\u6761\u6D88\u606F\u53D1\u9001\u5230\u54EA\u4E2AParition\u3002Paritition\u673A\u5236\u53EF\u4EE5\u901A\u8FC7\u6307\u5B9AProducer\u7684paritition. class\u8FD9\u4E00\u53C2\u6570\u6765\u6307\u5B9A\uFF0C\u8BE5class\u5FC5\u987B\u5B9E\u73B0kafka.producer.Partitioner\u63A5\u53E3\u3002</p><h2 id="_4-consumer-group" tabindex="-1"><a class="header-anchor" href="#_4-consumer-group" aria-hidden="true">#</a> 4. Consumer Group</h2><p>\u4F7F\u7528Consumer high level API\u65F6\uFF0C\u540C\u4E00Topic\u7684\u4E00\u6761\u6D88\u606F\u53EA\u80FD\u88AB\u540C\u4E00\u4E2AConsumer Group\u5185\u7684\u4E00\u4E2AConsumer\u6D88\u8D39\uFF0C\u4F46\u591A\u4E2AConsumer Group\u53EF\u540C\u65F6\u6D88\u8D39\u8FD9\u4E00\u6D88\u606F\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220921204823790.png" alt="image-20220921204823790"></p><p>\u8FD9\u662FKafka\u7528\u6765\u5B9E\u73B0\u4E00\u4E2ATopic\u6D88\u606F\u7684\u5E7F\u64AD\uFF08\u53D1\u7ED9\u6240\u6709\u7684Consumer\uFF09\u548C\u5355\u64AD\uFF08\u53D1\u7ED9\u67D0\u4E00\u4E2AConsumer\uFF09\u7684\u624B\u6BB5\u3002\u4E00\u4E2ATopic\u53EF\u4EE5\u5BF9\u5E94\u591A\u4E2AConsumer Group\u3002\u5982\u679C\u9700\u8981\u5B9E\u73B0\u5E7F\u64AD\uFF0C\u53EA\u8981\u6BCF\u4E2AConsumer\u6709\u4E00\u4E2A\u72EC\u7ACB\u7684Group\u5C31\u53EF\u4EE5\u4E86\u3002\u8981\u5B9E\u73B0\u5355\u64AD\u53EA\u8981\u6240\u6709\u7684Consumer\u5728\u540C\u4E00\u4E2AGroup\u91CC\u3002\u7528Consumer Group\u8FD8\u53EF\u4EE5\u5C06Consumer\u8FDB\u884C\u81EA\u7531\u7684\u5206\u7EC4\u800C\u4E0D\u9700\u8981\u591A\u6B21\u53D1\u9001\u6D88\u606F\u5230\u4E0D\u540C\u7684Topic\u3002</p><p>\u5B9E\u9645\u4E0A\uFF0CKafka\u7684\u8BBE\u8BA1\u7406\u5FF5\u4E4B\u4E00\u5C31\u662F\u540C\u65F6\u63D0\u4F9B\u79BB\u7EBF\u5904\u7406\u548C\u5B9E\u65F6\u5904\u7406\u3002\u6839\u636E\u8FD9\u4E00\u7279\u6027\uFF0C\u53EF\u4EE5\u4F7F\u7528Storm\u8FD9\u79CD\u5B9E\u65F6\u6D41\u5904\u7406\u7CFB\u7EDF\u5BF9\u6D88\u606F\u8FDB\u884C\u5B9E\u65F6\u5728\u7EBF\u5904\u7406\uFF0C\u540C\u65F6\u4F7F\u7528Hadoop\u8FD9\u79CD\u6279\u5904\u7406\u7CFB\u7EDF\u8FDB\u884C\u79BB\u7EBF\u5904\u7406\uFF0C\u8FD8\u53EF\u4EE5\u540C\u65F6\u5C06\u6570\u636E\u5B9E\u65F6\u5907\u4EFD\u5230\u53E6\u4E00\u4E2A\u6570\u636E\u4E2D\u5FC3\uFF0C\u53EA\u9700\u8981\u4FDD\u8BC1\u8FD9\u4E09\u4E2A\u64CD\u4F5C\u6240\u4F7F\u7528\u7684Consumer\u5C5E\u4E8E\u4E0D\u540C\u7684Consumer Group\u5373\u53EF\u3002</p><h2 id="_5-push-vs-pull" tabindex="-1"><a class="header-anchor" href="#_5-push-vs-pull" aria-hidden="true">#</a> 5. Push vs. Pull</h2><p>\u4F5C\u4E3A\u4E00\u4E2A\u6D88\u606F\u7CFB\u7EDF\uFF0CKafka\u9075\u5FAA\u4E86\u4F20\u7EDF\u7684\u65B9\u5F0F\uFF0C\u9009\u62E9\u7531Producer\u5411broker push\u6D88\u606F\u5E76\u7531Consumer\u4ECEbroker pull\u6D88\u606F\u3002\u4E00\u4E9Blogging-centric system\uFF0C\u6BD4\u5982Facebook\u7684Scribe\u548CCloudera\u7684Flume\uFF0C\u91C7\u7528push\u6A21\u5F0F\u3002\u4E8B\u5B9E\u4E0A\uFF0Cpush\u6A21\u5F0F\u548Cpull\u6A21\u5F0F\u5404\u6709\u4F18\u52A3\u3002</p><p>push\u6A21\u5F0F\u5F88\u96BE\u9002\u5E94\u6D88\u8D39\u901F\u7387\u4E0D\u540C\u7684\u6D88\u8D39\u8005\uFF0C\u56E0\u4E3A\u6D88\u606F\u53D1\u9001\u901F\u7387\u662F\u7531broker\u51B3\u5B9A\u7684\u3002push\u6A21\u5F0F\u7684\u76EE\u6807\u662F\u5C3D\u53EF\u80FD\u4EE5\u6700\u5FEB\u901F\u5EA6\u4F20\u9012\u6D88\u606F\uFF0C\u4F46\u662F\u8FD9\u6837\u5F88\u5BB9\u6613\u9020\u6210Consumer\u6765\u4E0D\u53CA\u5904\u7406\u6D88\u606F\uFF0C\u5178\u578B\u7684\u8868\u73B0\u5C31\u662F\u62D2\u7EDD\u670D\u52A1\u4EE5\u53CA\u7F51\u7EDC\u62E5\u585E\u3002\u800Cpull\u6A21\u5F0F\u5219\u53EF\u4EE5\u6839\u636EConsumer\u7684\u6D88\u8D39\u80FD\u529B\u4EE5\u9002\u5F53\u7684\u901F\u7387\u6D88\u8D39\u6D88\u606F\u3002</p><p>\u5BF9\u4E8EKafka\u800C\u8A00\uFF0Cpull\u6A21\u5F0F\u66F4\u5408\u9002\u3002pull\u6A21\u5F0F\u53EF\u7B80\u5316broker\u7684\u8BBE\u8BA1\uFF0CConsumer\u53EF\u81EA\u4E3B\u63A7\u5236\u6D88\u8D39\u6D88\u606F\u7684\u901F\u7387\uFF0C\u540C\u65F6Consumer\u53EF\u4EE5\u81EA\u5DF1\u63A7\u5236\u6D88\u8D39\u65B9\u5F0F\u2014\u2014\u5373\u53EF\u6279\u91CF\u6D88\u8D39\u4E5F\u53EF\u9010\u6761\u6D88\u8D39\uFF0C\u540C\u65F6\u8FD8\u80FD\u9009\u62E9\u4E0D\u540C\u7684\u63D0\u4EA4\u65B9\u5F0F\u4ECE\u800C\u5B9E\u73B0\u4E0D\u540C\u7684\u4F20\u8F93\u8BED\u4E49\u3002</p><h2 id="_6-kafka-delivery-guarantee" tabindex="-1"><a class="header-anchor" href="#_6-kafka-delivery-guarantee" aria-hidden="true">#</a> 6. Kafka delivery guarantee</h2><p>\u6709\u8FD9\u4E48\u51E0\u79CD\u53EF\u80FD\u7684delivery guarantee\uFF1A</p><blockquote><p>At most once \u3000\u3000\u6D88\u606F\u53EF\u80FD\u4F1A\u4E22\uFF0C\u4F46\u7EDD\u4E0D\u4F1A\u91CD\u590D\u4F20\u8F93</p><p>At least one \u3000\u3000 \u6D88\u606F\u7EDD\u4E0D\u4F1A\u4E22\uFF0C\u4F46\u53EF\u80FD\u4F1A\u91CD\u590D\u4F20\u8F93</p><p>Exactly once \u3000\u3000 \u6BCF\u6761\u6D88\u606F\u80AF\u5B9A\u4F1A\u88AB\u4F20\u8F93\u4E00\u6B21\u4E14\u4EC5\u4F20\u8F93\u4E00\u6B21\uFF0C\u5F88\u591A\u65F6\u5019\u8FD9\u662F\u7528\u6237\u6240\u60F3\u8981\u7684\u3002</p></blockquote><p>\u5F53Producer\u5411broker\u53D1\u9001\u6D88\u606F\u65F6\uFF0C\u4E00\u65E6\u8FD9\u6761\u6D88\u606F\u88ABcommit\uFF0C\u56E0\u6570replication\u7684\u5B58\u5728\uFF0C\u5B83\u5C31\u4E0D\u4F1A\u4E22\u3002\u4F46\u662F\u5982\u679CProducer\u53D1\u9001\u6570\u636E\u7ED9broker\u540E\uFF0C\u9047\u5230\u7F51\u7EDC\u95EE\u9898\u800C\u9020\u6210\u901A\u4FE1\u4E2D\u65AD\uFF0C\u90A3Producer\u5C31\u65E0\u6CD5\u5224\u65AD\u8BE5\u6761\u6D88\u606F\u662F\u5426\u5DF2\u7ECFcommit\u3002\u867D\u7136Kafka\u65E0\u6CD5\u786E\u5B9A\u7F51\u7EDC\u6545\u969C\u671F\u95F4\u53D1\u751F\u4E86\u4EC0\u4E48\uFF0C\u4F46\u662FProducer\u53EF\u4EE5\u751F\u6210\u4E00\u79CD\u7C7B\u4F3C\u4E8E\u4E3B\u952E\u7684\u4E1C\u897F\uFF0C\u53D1\u751F\u6545\u969C\u65F6\u5E42\u7B49\u6027\u7684\u91CD\u8BD5\u591A\u6B21\uFF0C\u8FD9\u6837\u5C31\u505A\u5230\u4E86Exactly once\u3002</p><p>\u63A5\u4E0B\u6765\u8BA8\u8BBA\u7684\u662F\u6D88\u606F\u4ECEbroker\u5230Consumer\u7684delivery guarantee\u8BED\u4E49\u3002\uFF08\u4EC5\u9488\u5BF9Kafka consumer high level API\uFF09\u3002Consumer\u5728\u4ECEbroker\u8BFB\u53D6\u6D88\u606F\u540E\uFF0C\u53EF\u4EE5\u9009\u62E9commit\uFF0C\u8BE5\u64CD\u4F5C\u4F1A\u5728Zookeeper\u4E2D\u4FDD\u5B58\u8BE5Consumer\u5728\u8BE5Partition\u4E2D\u8BFB\u53D6\u7684\u6D88\u606F\u7684offset\u3002\u8BE5Consumer\u4E0B\u4E00\u6B21\u518D\u8BFB\u8BE5Partition\u65F6\u4F1A\u4ECE\u4E0B\u4E00\u6761\u5F00\u59CB\u8BFB\u53D6\u3002\u5982\u672Acommit\uFF0C\u4E0B\u4E00\u6B21\u8BFB\u53D6\u7684\u5F00\u59CB\u4F4D\u7F6E\u4F1A\u8DDF\u4E0A\u4E00\u6B21commit\u4E4B\u540E\u7684\u5F00\u59CB\u4F4D\u7F6E\u76F8\u540C\u3002\u5F53\u7136\u53EF\u4EE5\u5C06Consumer\u8BBE\u7F6E\u4E3Aautocommit\uFF0C\u5373Consumer\u4E00\u65E6\u8BFB\u5230\u6570\u636E\u7ACB\u5373\u81EA\u52A8commit\u3002\u5982\u679C\u53EA\u8BA8\u8BBA\u8FD9\u4E00\u8BFB\u53D6\u6D88\u606F\u7684\u8FC7\u7A0B\uFF0C\u90A3Kafka\u662F\u786E\u4FDD\u4E86Exactly once\u3002\u4F46\u5B9E\u9645\u4F7F\u7528\u4E2D\u5E94\u7528\u7A0B\u5E8F\u5E76\u975E\u5728Consumer\u8BFB\u53D6\u5B8C\u6570\u636E\u5C31\u7ED3\u675F\u4E86\uFF0C\u800C\u662F\u8981\u8FDB\u884C\u8FDB\u4E00\u6B65\u5904\u7406\uFF0C\u800C\u6570\u636E\u5904\u7406\u4E0Ecommit\u7684\u987A\u5E8F\u5728\u5F88\u5927\u7A0B\u5EA6\u4E0A\u51B3\u5B9A\u4E86\u6D88\u606F\u4ECEbroker\u548Cconsumer\u7684delivery guarantee semantic\u3002</p><p><strong>Kafka\u9ED8\u8BA4\u4FDD\u8BC1At least once</strong>\uFF0C\u5E76\u4E14\u5141\u8BB8\u901A\u8FC7\u8BBE\u7F6EProducer\u5F02\u6B65\u63D0\u4EA4\u6765\u5B9E\u73B0At most once\u3002\u800CExactly once\u8981\u6C42\u4E0E\u5916\u90E8\u5B58\u50A8\u7CFB\u7EDF\u534F\u4F5C\uFF0C\u5E78\u8FD0\u7684\u662FKafka\u63D0\u4F9B\u7684offset\u53EF\u4EE5\u975E\u5E38\u76F4\u63A5\u975E\u5E38\u5BB9\u6613\u5F97\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,29),u={href:"https://www.cnblogs.com/qingyunzong/p/9004593.html",target:"_blank",rel:"noopener noreferrer"};function m(d,k){const a=c("ExternalLinkIcon");return o(),n("div",null,[l,e("p",null,[e("a",u,[s("Kafka\u5B66\u4E60\u4E4B\u8DEF \uFF08\u4E8C\uFF09Kafka\u7684\u67B6\u6784"),t(a)])])])}const g=r(p,[["render",m],["__file","kafka-x-arch.html.vue"]]);export{g as default};
