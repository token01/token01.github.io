import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as s,b as n,d as t,f as e,r as u}from"./app.837a781d.js";const i={},l=e(`<h1 id="rabbitmq\u8FDB\u9636-\u6D88\u8D39\u7AEF\u8981\u70B9\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u8FDB\u9636-\u6D88\u8D39\u7AEF\u8981\u70B9\u4ECB\u7ECD" aria-hidden="true">#</a> RabbitMQ\u8FDB\u9636 - \u6D88\u8D39\u7AEF\u8981\u70B9\u4ECB\u7ECD</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u6D88\u8D39\u8005\u5BA2\u6237\u7AEF\u53EF\u4EE5\u901A\u8FC7 <strong>\u63A8\u6A21\u5F0F</strong> \u548C <strong>\u62C9\u6A21\u5F0F</strong> \u6765\u83B7\u53D6\u5E76\u6D88\u8D39\u6D88\u606F\uFF0CRabbitMQ \u628A\u6D88\u606F\u63A8\u9001\u540E\uFF08\u6216\u5BA2\u6237\u7AEF\u4E3B\u52A8 ACK\uFF09\u540E\uFF0CRabbitMQ \u628A\u5F53\u524D\u6D88\u606F\u4ECE\u961F\u5217\u4E2D\u6807\u8BB0\u6E05\u9664\u3002\u5982\u679C\u7531\u4E8E\u67D0\u4E9B\u539F\u56E0\u65E0\u6CD5\u5904\u7406\u5F53\u524D\u63A5\u53D7\u5230\u7684\u4FE1\u606F\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>channel.basicNack</code> \u6216\u5219 <code>channel.basicReject</code> \u6765\u62D2\u7EDD\u6389\u3002</p><p>\u5BF9\u4E8E\u6D88\u8D39\u8005\u6765\u8BF4\uFF0C\u8FD8\u6709\u51E0\u70B9\u9700\u8981\u6CE8\u610F\uFF1A</p><ul><li>\u6D88\u606F\u5206\u53D1</li><li>\u6D88\u606F\u987A\u5E8F\u6027</li><li>\u5F03\u7528 QueueingConsumer</li></ul><h2 id="_2-\u6D88\u606F\u5206\u53D1" tabindex="-1"><a class="header-anchor" href="#_2-\u6D88\u606F\u5206\u53D1" aria-hidden="true">#</a> 2. \u6D88\u606F\u5206\u53D1</h2><p>\u5F53 RabbitMQ <strong>\u961F\u5217\u6709\u591A\u4E2A\u6D88\u8D39\u8005</strong> \u65F6\uFF0C\u961F\u5217\u6536\u5230\u7684\u6D88\u606F\u5C06\u4EE5 <strong>\u8F6E\u8BE2\uFF08round-robin\uFF09</strong> \u65B9\u5F0F\u5206\u53D1\u7ED9\u6D88\u8D39\u8005\uFF0C\u6BCF\u6761\u6D88\u606F\u53EA\u4F1A\u53D1\u9001\u7ED9\u8BA2\u9605\u5217\u8868\u91CC\u7684 <strong>\u4E00\u4E2A\u6D88\u8D39\u8005</strong>\u3002\u8FD9\u79CD\u65B9\u5F0F\u662F\u4E13\u95E8\u4E3A\u5E76\u53D1\u7A0B\u5E8F\u8BBE\u8BA1\u7684\uFF0C\u5982\u679C\u7A0B\u5E8F\u5904\u7406\u4E0D\u8FC7\u6765\uFF0C\u53EA\u8981\u589E\u52A0\u66F4\u591A\u7684\u6D88\u8D39\u8005\u6765\u5904\u7406\u6D88\u606F\u5373\u53EF\u3002</p><p>\u5F88\u591A\u65F6\u5019\u8F6E\u8BE2\u7684\u5206\u53D1\u673A\u5236\u4E5F\u6709\u95EE\u9898\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u6709 n \u4E2A\u6D88\u8D39\u8005\uFF0CRabbitMQ \u4F1A\u5C06\u7B2C m \u6761\u6D88\u606F\u5206\u53D1\u7ED9\u7B2C <code>m%n</code> (\u53D6\u4F59) \u4E2A\u6D88\u8D39\u8005\u3002RabbitMQ <strong>\u4E0D\u7BA1\u6D88\u8D39\u8005\u662F\u5426\u6D88\u8D39\u5E76\u5DF2\u7ECF\u786E\u8BA4</strong>\uFF08Basic.Ack\uFF09\u6D88\u606F\u3002\u5C31\u53EF\u80FD\u4F1A\u5BFC\u81F4\uFF1A\u67D0\u4E9B\u6D88\u8D39\u8005\u6765\u4E0D\u53CA\u5904\u7406\u6D88\u606F\uFF0C\u6709\u4E9B\u5904\u7406\u5F97\u5F88\u5FEB\u7684\u60C5\u51B5\u3002</p><p>\u8FD9\u79CD\u60C5\u51B5\uFF0C\u9700\u8981 <strong>\u9650\u5236\u4FE1\u9053\u4E0A</strong> \u7684\u6D88\u8D39\u8005\u6240\u80FD <strong>\u4FDD\u6301\u7684\u6700\u5927\u672A\u786E\u8BA4\u6D88\u606F\u7684\u6570\u91CF</strong>\uFF0C\u901A\u8FC7 <code>channel.basicQos(int prefetchCount)</code> \u65B9\u6CD5\u3002</p><p>\u4E3E\u4F8B\u8BF4\u660E\uFF1A\u5728\u8BA2\u9605\u961F\u5217\u4E4B\u524D\uFF0C\u6D88\u8D39\u8005\u8BBE\u7F6E <code>channel.basicQos(5)</code>\uFF0C\u518D\u8BA2\u9605\u961F\u5217\u3002 RabbitMQ \u4F1A\u4FDD\u5B58\u4E00\u4E2A\u6D88\u8D39\u8005\u7684\u5217\u8868\uFF0C\u6BCF\u53D1\u9001\u4E00\u6761\u6D88\u606F\u90FD\u4F1A\u4E3A\u5BF9\u5E94\u7684\u6D88\u8D39\u8005\u8BA1\u6570\uFF0C\u5982\u679C\u5230\u8FBE\u4E86\u8BBE\u7F6E\u4E0A\u9650\uFF0C\u5C31\u4E0D\u4F1A\u5411\u8FD9\u4E2A\u6D88\u8D39\u8005\u518D\u53D1\u9001\u4EFB\u4F55\u6D88\u606F\u3002\u76F4\u5230\u6D88\u8D39\u8005\u786E\u8BA4\u4E86\u67D0\u6761\u6D88\u8D39\u8005\u4E4B\u540E\uFF0CRabbitMQ \u628A\u5BF9\u5E94\u7684\u8BA1\u6570\u5668 -1\uFF0C\u7EE7\u7EED\u5206\u53D1\u6D88\u606F\u3002</p><p>\u6CE8\u610F\u8981\u70B9\uFF1A<code>Basic.Qos</code> \u5BF9\u62C9\u6A21\u5F0F\u65E0\u6548</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">basicQos</span><span class="token punctuation">(</span><span class="token keyword">int</span> prefetchSize<span class="token punctuation">,</span> <span class="token keyword">int</span> prefetchCount<span class="token punctuation">,</span> <span class="token keyword">boolean</span> global<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>prefetchSize\uFF1A\u6D88\u8D39\u8005\u6240\u80FD\u63A5\u53D7\u672A\u786E\u8BA4\u6D88\u606F\u7684\u603B\u4F53\u5927\u5C0F\u7684\u4E0A\u9650\uFF08\u5355\u4F4D\u4E3A B\uFF09\uFF0C\u8BBE\u7F6E\u4E3A 0 \u65F6\uFF0C\u8868\u793A\u65E0\u4E0A\u9650</p></li><li><p>prefetchCount\uFF1A\u6D88\u8D39\u8005\u6240\u80FD\u63A5\u53D7\u6700\u5927\u672A\u786E\u8BA4\u6D88\u606F\u7684\u6570\u91CF</p></li><li><p>global\uFF1A</p><p>\u4E00\u4E2A\u4FE1\u9053\u53EF\u4EE5\u6D88\u8D39\u591A\u4E2A\u961F\u5217</p><p>\u5F53\u8BE5\u503C\u5927\u4E8E 0 \u65F6\uFF0C\u8FD9\u4E2A\u4FE1\u9053\u9700\u8981\u548C\u5404\u4E2A\u961F\u5217\u534F\u8C03\uFF0C\u786E\u4FDD\u53D1\u9001\u7684\u6D88\u606F\u90FD\u6CA1\u6709\u8D85\u8FC7\u6240\u9650\u5B9A\u7684 prefetchCount\u3002\u8FD9\u4F1A\u8BA9 RabbitMQ \u7684\u6027\u80FD\u964D\u4F4E\uFF0C\u5C24\u5176\u5F53\u8FD9\u4E9B\u961F\u5217\u5206\u6563\u5728\u96C6\u7FA4\u4E2D\u7684\u591A\u4E2A Broker \u8282\u70B9\u4E4B\u4E2D\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u6027\u80FD\u95EE\u9898\uFF0C\u5B9A\u4E49\u4E86 global \u53C2\u6570</p><table><thead><tr><th style="text-align:center;">global \u53C2\u6570</th><th>AMQP 0-9-1</th><th>RabbitMQ</th></tr></thead><tbody><tr><td style="text-align:center;">false</td><td>\u4FE1\u9053\u4E0A\u6240\u6709\u7684\u6D88\u8D39\u8005\u90FD\u8981\u9075\u4ECE prefetchCount \u7684\u9650\u5236</td><td>\u4FE1\u9053\u4E0A\u6240\u6709\u7684\u6D88\u8D39\u8005\u90FD\u8981\u9075\u4ECE prefetchCount \u7684\u9650\u5236</td></tr><tr><td style="text-align:center;">true</td><td>\u5F53\u524D\u901A\u4FE1\u94FE\u8DEF\uFF08Connection\uFF09\u4E0A\u6240\u6709\u7684\u6D88\u8D39\u8005\u9700\u8981\u9075\u5FAA\u4ECE prefetchCount \u7684\u9650\u5236</td><td>\u4FE1\u9053\u4E0A\u6240\u6709\u7684\u6D88\u8D39\u8005\u90FD\u8981\u9075\u4ECE prefetchCount \u7684\u9650\u5236\uFF08\u8FD9\u91CC\u4E0D\u77E5\u9053\u4E66\u4E0A\u662F\u4E0D\u662F\u5199\u9519\u4E86\uFF1F\uFF09</td></tr></tbody></table><p>channel.basicQos \u53EA\u9488\u5BF9\u5355\u4E2A\u6D88\u8D39\u8005\u7684\u3002\u5BF9\u4E8E\u540C\u4E00\u4E2A\u4FE1\u9053\u4E0A\u7684\u591A\u4E2A\u6D88\u8D39\u8005\u800C\u8A00\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E86 prefetchCount \uFF0C\u5219\u90FD\u4F1A\u751F\u6548\u3002</p><p>\u5982\u4E0B\u4EE3\u7801\uFF0C\u5404\u81EA\u7684\u80FD\u63A5\u6536\u5230\u7684\u672A\u786E\u8BA4\u6D88\u606F\u4E0A\u9650\u90FD\u662F 10</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>channel<span class="token punctuation">.</span><span class="token function">basicQos</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span><span class="token string">&quot;queue1&quot;</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span>consumerl1<span class="token punctuation">)</span>
channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span><span class="token string">&quot;queue2&quot;</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span>consumerl2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u540C\u65F6\u8BBE\u7F6E\u4E86 global \u4E3A false \u548C true \u5462\uFF1F\u4ED6\u4EEC\u4E24\u4E2A\u7684\u9650\u5236\u90FD\u6709\u6548\u679C\uFF1A\u5982\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>channel<span class="token punctuation">.</span><span class="token function">basicQos</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">basicQos</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span><span class="token string">&quot;queue1&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> consumerl1<span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span><span class="token string">&quot;queue2&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> consumerl2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u4E48\u751F\u6548\u60C5\u51B5\u5982\u4E0B\uFF1A</p><ul><li>\u6BCF\u4E2A\u6D88\u8D39\u8005\u6700\u591A\u53EF\u6536\u5230 3 \u4E2A\u672A\u786E\u8BA4\u7684\u6D88\u606F</li><li>\u4E24\u4E2A\u6D88\u8D39\u8005\u6700\u591A\u53EF\u6536\u5230 5 \u4E2A\u672A\u786E\u8BA4\u7684\u6D88\u606F</li></ul><p>\u8FD9\u79CD\u8BBE\u7F6E\u65B9\u5F0F\uFF0C\u4F1A\u589E\u52A0 RabbitMQ \u7684\u8D1F\u8F7D\uFF0C\u4F1A\u4F7F\u7528\u66F4\u591A\u7684\u8D44\u6E90\u6765\u534F\u8C03\u5B8C\u6210\u8FD9\u4E9B\u9650\u5236\u3002\u5EFA\u8BAE\u7528\u9ED8\u8BA4\u503C\u7684 false\u3002</p></li></ul><h2 id="_3-\u6D88\u606F\u987A\u5E8F\u6027" tabindex="-1"><a class="header-anchor" href="#_3-\u6D88\u606F\u987A\u5E8F\u6027" aria-hidden="true">#</a> 3. \u6D88\u606F\u987A\u5E8F\u6027</h2><p>\u6307\uFF1A\u6D88\u8D39\u8005 <strong>\u6D88\u8D39\u5230\u7684\u6D88\u606F</strong> \u548C\u53D1\u9001\u8005 <strong>\u53D1\u5E03\u7684\u6D88\u606F</strong> \u987A\u5E8F\u662F\u4E00\u81F4\u7684\u3002</p><p>\u5982\uFF1A\u53D1\u5E03 <code>1,2,3</code> \u90A3\u4E48\u6D88\u8D39\u7684\u987A\u5E8F\u4E5F\u662F <code>1,2,3</code></p><p>\u5728 <strong>\u5355\u4E2A\u751F\u4EA7\u8005\u548C\u5355\u4E2A\u6D88\u8D39\u8005\u7684\u60C5\u51B5\u4E0B\uFF0C\u6D88\u606F\u7684\u6709\u5E8F\u6027\u662F\u80FD\u4FDD\u8BC1\u7684</strong>\uFF0C\u4E5F\u662F\u53EF\u9A8C\u8BC1\u7684\u3002\u5728\u591A\u6D88\u8D39\u8005\u548C\u591A\u751F\u4EA7\u8005\u7684\u60C5\u51B5\u4E0B\uFF0C\u65E0\u6CD5\u786E\u5B9A\u6D88\u606F\u5230\u8FBE Broker \u7684\u524D\u540E\u987A\u5E8F\uFF0C\u4E5F\u65E0\u6CD5\u786E\u5B9A\u5BA2\u6237\u7AEF\u6D88\u8D39\u7684\u987A\u5E8F\uFF0C\u8FD9\u4E2A\u5176\u5B9E\u662F\u6B63\u5E38\u73B0\u8C61\u3002\u5206\u5E03\u5F0F\u4E2D\u672C\u6765\u5C31\u5B58\u5728\u8FD9\u6837\u7684\u73B0\u8C61\u3002</p><p>\u6709\u5982\u4E0B\u51E0\u79CD\u60C5\u51B5\uFF0C\u6D88\u606F\u7684\u987A\u5E8F\u6027\u4F1A\u88AB\u6253\u7834\uFF1A\u4F46\u90FD\u662F\u6B63\u5E38\u73B0\u8C61\uFF1A</p><ul><li>\u4F7F\u7528\u4E8B\u7269\u673A\u5236\u65F6\uFF0C\u53D1\u9001\u5931\u8D25\uFF0C\u4F7F\u7528\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u8865\u53D1\u6B64\u6D88\u606F\u3002\u6B64\u65F6\u6D88\u606F\u5C31\u4E0D\u80FD\u4FDD\u8BC1\u6309\u7167 <code>1,2,3,4</code> \u7684\u987A\u5E8F\u5230\u8FBE Broker \u4E86</li><li>\u4F7F\u7528\u4E0D\u540C\u7684\u6D88\u606F\u8FC7\u671F\u65F6\u95F4\uFF0C\u5148\u8FC7\u671F\u7684\u5148\u88AB\u6D88\u8D39</li><li>\u4F7F\u7528\u4F18\u5148\u7EA7\u6D88\u606F\uFF0C\u4F18\u5148\u7EA7\u9AD8\u7684\u5148\u88AB\u6D88\u8D39</li><li>\u5BA2\u6237\u7AEF\u4F7F\u7528 <code>Basic.Nack/.Reject</code> \u5C06\u6D88\u606F\u62D2\u7EDD\u65F6\uFF0C\u540C\u65F6 requeue= true\uFF0C \u6D88\u606F\u91CD\u5165\u961F\u5217\u540E\uFF0C\u4E5F\u65E0\u6CD5\u4FDD\u8BC1\u6D88\u606F\u987A\u5E8F\u8FD8\u548C\u53D1\u9001\u7684\u65F6\u5019\u662F\u4E00\u81F4\u7684</li></ul><p>\u4ECE\u4EE5\u4E0A\u70B9\u53EF\u4EE5\u770B\u5230\uFF0C\u5728\u5F88\u591A\u573A\u666F\u4E0B\uFF0C\u5E76\u4E0D\u80FD\u4FDD\u8BC1\u6D88\u606F\u7684\u987A\u5E8F\u6027\u3002</p><p>\u5982\u679C\u60F3\u8981\u5B9E\u73B0\u6D88\u606F\u7684\u6709\u5E8F\u6027\uFF0C\u5219\u53EF\u4EE5\u901A\u8FC7\u5728\u6D88\u606F\u4F53\u5185\u589E\u52A0\u5168\u90E8\u6709\u5E8F\u6807\u8BC6\uFF0C\u7A0B\u5E8F\u7AEF\u81EA\u5DF1\u5B9E\u73B0\u903B\u8F91\u5224\u5B9A</p><h2 id="_4-\u542F\u7528-queuingconsumer" tabindex="-1"><a class="header-anchor" href="#_4-\u542F\u7528-queuingconsumer" aria-hidden="true">#</a> 4. \u542F\u7528 QueuingConsumer</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    queueingConsumer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueueingConsumer</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span><span class="token punctuation">;</span>
    channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span>replyQueue<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> queueingConsumer<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">String</span> corrid <span class="token operator">=</span> <span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">correlationId</span><span class="token punctuation">(</span>corrid<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">replyTo</span><span class="token punctuation">(</span>replyQueue<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> requestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u60F3\u670D\u52A1\u7AEF\u53D1\u9001\u540E\uFF0C\u8F6E\u8BE2\uFF0C\u77E5\u9053\u56DE\u53BB\u5230\u670D\u52A1\u7AEF\u7684\u54CD\u5E94\u4E3A\u6B62</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">QueueingConsumer<span class="token punctuation">.</span>Delivery</span> delivery <span class="token operator">=</span> queueingConsumer<span class="token punctuation">.</span><span class="token function">nextDelivery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>delivery<span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCorrelationId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>corrid<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>delivery<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),r={href:"https://zq99299.github.io/mq-tutorial/rabbitmq-ac/04/06.html",target:"_blank",rel:"noopener noreferrer"},k=s("code",null,"@Deprecated",-1),d=e('<p>\u662F\u56E0\u4E3A\u8BE5\u7C7B\u6709\u51E0\u4E2A\u5927\u7F3A\u9677\uFF1A\u6BD4\u5982\u5185\u5B58\u6EA2\u51FA\u95EE\u9898\uFF0C\u7531\u4E8E\u67D0\u4E9B\u539F\u56E0\uFF0C\u961F\u5217\u4E2D\u5806\u79EF\u4E86\u6BD4\u8F83\u591A\u7684\u6D88\u606F\uFF0C\u53EF\u80FD\u5BFC\u81F4\u6D88\u8D39\u8005\u5BA2\u6237\u7AEF\u5185\u5B58\u6EA2\u51FA\u5047\u6B7B\uFF0C\u4E8E\u662F\u53D1\u751F\u6076\u6027\u5FAA\u73AF\uFF0C\u961F\u5217\u6D88\u606F\u4E0D\u65AD\u5806\u79EF\u800C\u5F97\u4E0D\u5230\u6D88\u8D39\u3002</p><p>\u5BFC\u81F4\u5185\u5B58\u6EA2\u51FA\u7684\u539F\u56E0\u662F\uFF1AQueuingConsumer \u5185\u90E8\u4F7F\u7528 LinkedBlockingQueue \u6765\u7F13\u5B58\u6D88\u606F\uFF0C\u5F53\u8BBE\u7F6E\u7684 <code>Basic.Qos</code> \u6570\u91CF\u592A\u5927\u7684\u65F6\u5019\uFF0C\u6D88\u606F\u4F53\u4E5F\u5F88\u5927\uFF08\u5982\u4E00\u4E2A\u6D88\u606F 200M\uFF09\uFF0C\u90A3\u4E48\u5C31\u4F1A\u5BFC\u81F4\u5185\u5B58\u6EA2\u51FA\u3002\u53EF\u901A\u8FC7\u9650\u5236 qos \u7684\u6570\u91CF\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4F46\u662F\u4E00\u5B9A <strong>\u8981\u5728\u8BA2\u9605\u4E4B\u524D\u8BBE\u7F6E</strong></p><p>QueuingConsumer \u8FD8\u5305\u62EC\u4EE5\u4E0B\u7F3A\u9677\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF09\uFF1A</p><ul><li>\u4F1A\u62D6\u7D2F\u540C\u4E00\u4E2A Connection \u4E0B\u7684\u6240\u6709\u901A\u9053\uFF0C\u4F7F\u5176\u6027\u80FD\u964D\u4F4E</li><li>\u540C\u6B65\u9012\u5F52\u8C03\u7528 QueuingConsumer \u4F1A\u4EA7\u751F\u6B7B\u9501</li><li>RabbitMQ \u7684\u81EA\u52A8\u8FDE\u63A5\u6062\u590D\u673A\u5236\uFF08automatic Connection recovery\uFF09 \u4E0D\u652F\u6301 QueuingConsumer \u7684\u8FD9\u79CD\u5F62\u5F0F</li><li>QueuingConsumer \u4E0D\u662F\u4E8B\u4EF6\u9A71\u52A8\u7684</li></ul><p>\u6240\u4EE5\u8FD8\u662F\u4F7F\u7528 <code>DefaultConsumer</code> \u4E4B\u7C7B\u7684\u6765\u8BA2\u9605\u961F\u5217\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',6),b={href:"https://zq99299.github.io/mq-tutorial/rabbitmq-ac/04/09.html",target:"_blank",rel:"noopener noreferrer"};function m(v,h){const a=u("ExternalLinkIcon");return o(),c("div",null,[l,s("p",null,[n("\u524D\u9762\u8BB2\u89E3 "),s("a",r,[n("RPC \u5B9E\u73B0"),t(a)]),n(" \u4E2D\u7528\u5230\u8FC7\u8FD9\u4E2A\u7C7B\uFF0C\u5982\u4E0A\u7684\u4EE3\u7801\u7247\u6BB5\u3002\u5728 RabbitMQ 4.x \u4E2D\u88AB\u6807\u8BB0\u4E3A "),k,n(" \u4E86\u3002")]),d,s("p",null,[s("a",b,[n("\u6D88\u8D39\u7AEF\u8981\u70B9\u4ECB\u7ECD"),t(a)])])])}const Q=p(i,[["render",m],["__file","rabbitmq-x-consumer.html.vue"]]);export{Q as default};
