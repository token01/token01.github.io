import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.33b1aeb5.js";const p={},t=e(`<blockquote><p>\u6D45\u8C08hyperledger fabric\u6E90\u7801|\u4EA4\u6613\u5E7F\u64AD</p><p>\u6587\u7AE0\u53CA\u4EE3\u7801\uFF1A /</p><p>\u5206\u652F\uFF1Av1.1.0</p></blockquote><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gmz2lvzbprj31ao0t6n61.jpg" alt="40fe3d4a84cc46e22caf5e06071c3aa7"></p><h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p><code>Hyperledger Fabric</code>\u63D0\u4F9B\u4E86<code>Broadcast(srv ab.AtomicBroadcast_BroadcastServer)</code>\u4EA4\u6613\u5E7F\u64AD\u670D\u52A1\u63A5\u53E3\uFF0C\u63A5\u6536\u5BA2\u6237\u7AEF\u63D0\u4EA4\u7684\u7B7E\u540D\u4EA4\u6613\u6D88\u606F\u8BF7\u6C42\uFF0C\u4EA4\u7531\u5171\u8BC6\u7EC4\u4EF6\u94FE\u5BF9\u8C61\u5BF9\u4EA4\u6613\u8FDB\u884C\u6392\u5E8F\u4E0E\u6267\u884C\u901A\u9053\u7BA1\u7406\uFF0C\u6309\u7167\u4EA4\u6613\u51FA\u5757\u89C4\u5219\u5207\u5272\u6253\u5305\uFF0C\u6784\u9020\u65B0\u533A\u5757\u5E76\u63D0\u4EA4\u8D26\u672C\u3002\u540C\u65F6\uFF0C\u901A\u8FC7<code>Deliver()</code>\u533A\u5757\u5206\u53D1\u670D\u52A1\u63A5\u53E3\uFF0C\u5C06\u533A\u5757\u6570\u636E\u53D1\u9001\u7ED9\u901A\u9053\u7EC4\u7EC7\u5185\u53D1\u8D77\u8BF7\u6C42\u7684<code>Leader</code>\u4E3B\u8282\u70B9\uFF0C\u518D\u57FA\u4E8E<code>Gossip</code>\u6D88\u606F\u534F\u8BAE\u5E7F\u64AD\u5230\u7EC4\u7EC7\u5185\u7684\u5176\u4ED6\u8282\u70B9\u4E0A\uFF0C\u4ECE\u800C\u5B9E\u73B0\u5E7F\u64AD\u4EA4\u6613\u6D88\u606F\u7684\u76EE\u7684\u3002</p><h2 id="broadcast\u670D\u52A1\u6D88\u606F\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#broadcast\u670D\u52A1\u6D88\u606F\u5904\u7406" aria-hidden="true">#</a> Broadcast\u670D\u52A1\u6D88\u606F\u5904\u7406</h2><p><code>Orderer</code>\u8282\u70B9\u542F\u52A8\u65F6\u5DF2\u7ECF\u5728\u672C\u5730\u7684<code>gRPC</code>\u670D\u52A1\u5668\u4E0A\u6CE8\u518C\u4E86<code>Orderer</code>\u6392\u5E8F\u670D\u52A1\u5668\uFF0C\u5E76\u521B\u5EFA\u4E86<code>Broadcast</code>\u670D\u52A1\u5904\u7406\u53E5\u67C4\u3002\u5F53\u5BA2\u6237\u7AEF\u8C03\u7528<code>Broadcast()</code>\u670D\u52A1\u63A5\u53E3\u53D1\u8D77\u670D\u52A1\u8BF7\u6C42\u65F6\uFF0C<code>Orderer</code>\u6392\u5E8F\u670D\u52A1\u5668\u4F1A\u8C03\u7528<code>Broadcast()\u2192s.bh.Handle()</code>\u65B9\u6CD5\u5904\u7406\u8BF7\u6C42\uFF0C\u6D41\u7A0B\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>server<span class="token punctuation">)</span> <span class="token function">Broadcast</span><span class="token punctuation">(</span>srv ab<span class="token punctuation">.</span>AtomicBroadcast_BroadcastServer<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
<span class="token operator">...</span>
	<span class="token keyword">return</span> s<span class="token punctuation">.</span>bh<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>broadcastMsgTracer<span class="token punctuation">{</span>
	<span class="token operator">...</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>bh <span class="token operator">*</span>handlerImpl<span class="token punctuation">)</span> <span class="token function">Handle</span><span class="token punctuation">(</span>srv ab<span class="token punctuation">.</span>AtomicBroadcast_BroadcastServer<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3B\u8981\u5C31\u662F\u8FD9\u4E2A<code>Handle</code>\u7684\u5904\u7406\uFF0C\u5206\u6790\u5982\u4E0B\uFF1A</p><p>\u2460\uFF1A\u7B49\u5F85\u63A5\u6536\u5904\u7406\u6D88\u606F</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>msg<span class="token punctuation">,</span> err <span class="token operator">:=</span> srv<span class="token punctuation">.</span><span class="token function">Recv</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u2461\uFF1A\u89E3\u6790\u83B7\u53D6\u901A\u9053\u5934\u90E8chdr\u3001\u914D\u7F6E\u4EA4\u6613\u6D88\u606F\u6807\u5FD7\u4F4DisConfig\u3001\u901A\u9053\u94FE\u652F\u6301\u5BF9\u8C61\uFF08\u901A\u9053\u6D88\u606F\u5904\u7406\u5668\uFF09</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>chdr<span class="token punctuation">,</span> isConfig<span class="token punctuation">,</span> processor<span class="token punctuation">,</span> err <span class="token operator">:=</span> bh<span class="token punctuation">.</span>sm<span class="token punctuation">.</span><span class="token function">BroadcastChannelSupport</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u2462\uFF1A\u68C0\u67E5\u5171\u8BC6\u7EC4\u4EF6\u94FE\u5BF9\u8C61\u662F\u5426\u51C6\u5907\u597D\u63A5\u6536\u65B0\u7684\u4EA4\u6613\u6D88\u606F</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">if</span> err <span class="token operator">=</span> processor<span class="token punctuation">.</span><span class="token function">WaitReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u2463\uFF1A\u5206\u7C7B\u5904\u7406\u6D88\u606F</p><p><strong>\u5904\u7406\u666E\u901A\u6D88\u606F</strong></p><p>4.1 \u89E3\u6790\u83B7\u53D6\u901A\u9053\u7684\u6700\u65B0\u914D\u7F6E\u5E8F\u53F7</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>configSeq<span class="token punctuation">,</span> err <span class="token operator">:=</span> processor<span class="token punctuation">.</span><span class="token function">ProcessNormalMsg</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token operator">/</span>orderer<span class="token operator">/</span>common<span class="token operator">/</span>msgprocessor<span class="token operator">/</span>standardchannel<span class="token punctuation">.</span><span class="token keyword">go</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>StandardChannel<span class="token punctuation">)</span> <span class="token function">ProcessNormalMsg</span><span class="token punctuation">(</span>env <span class="token operator">*</span>cb<span class="token punctuation">.</span>Envelope<span class="token punctuation">)</span> <span class="token punctuation">(</span>configSeq <span class="token builtin">uint64</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	configSeq <span class="token operator">=</span> s<span class="token punctuation">.</span>support<span class="token punctuation">.</span><span class="token function">Sequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	err <span class="token operator">=</span> s<span class="token punctuation">.</span>filters<span class="token punctuation">.</span><span class="token function">Apply</span><span class="token punctuation">(</span>env<span class="token punctuation">)</span>
	<span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>configSeq\u662F\u6700\u65B0\u914D\u7F6E\u5E8F\u53F7\uFF0C\u9ED8\u8BA4\u521D\u59CB\u503C\u4E3A0\uFF0C\u65B0\u5EFA\u5E94\u7528\u901A\u9053\u540E\u8BE5\u914D\u7F6E\u5E8F\u53F7\u81EA\u589E\u4E3A1\uFF0C\u901A\u8FC7\u6BD4\u8F83\u8BE5\u5E8F\u53F7\u5C31\u80FD\u5224\u65AD\u5F53\u524D\u901A\u9053\u914D\u7F6E\u7248\u672C\u662F\u5426\u53D1\u751F\u4E86\u66F4\u65B0\uFF0C\u4ECE\u800C\u786E\u5B9A\u5F53\u524D\u4EA4\u6613\u6D88\u606F\u662F\u5426\u9700\u8981\u91CD\u65B0\u8FC7\u6EE4\u4E0E\u91CD\u65B0\u6392\u5E8F\u3002</p><p>\u63A5\u7740\u5C31\u662F\u4F7F\u7528\u81EA\u5E26\u7684\u9ED8\u8BA4\u901A\u9053\u6D88\u606F\u8FC7\u6EE4\u5668\u8FC7\u6EE4\u6D88\u606F\uFF0C\u6709\u4EE5\u4E0B\u8FC7\u6EE4\u6761\u4EF6\uFF1A</p><ul><li>\u9A8C\u8BC1\u4E0D\u80FD\u4E3A\u7A7A</li><li>\u62D2\u7EDD\u8FC7\u671F\u7684\u7B7E\u540D\u8005\u8EAB\u4EFD\u8BC1\u4E66</li><li>\u6D88\u606F\u6700\u5927\u5B57\u8282\u6570\u8FC7\u6EE4\u5668\uFF0898MB\uFF09</li><li>\u6D88\u606F\u7B7E\u540D\u9A8C\u8BC1\u8FC7\u6EE4\u5668</li></ul><p>4.2 \u6784\u9020\u65B0\u7684\u666E\u901A\u4EA4\u6613\u6D88\u606F\u5E76\u53D1\u9001\u5230\u5171\u8BC6\u7EC4\u4EF6\u94FE\u5BF9\u8C61\u8BF7\u6C42\u5904\u7406</p><div class="language-GO ext-GO line-numbers-mode"><pre class="language-GO"><code>err = processor.Order(msg, configSeq) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u53EA\u5173\u6CE8<code>kafka</code>\u7684\u5171\u8BC6\u7EC4\u4EF6\u5904\u7406\u3002</p><p>\u9996\u5148\u5E8F\u5217\u5316\u6D88\u606F\uFF0C\u7136\u540E\u5C06\u8BE5\u6D88\u606F\u53D1\u9001\u5230<code>Kafka</code>\u96C6\u7FA4\u7684\u6307\u5B9A\u5206\u533A\u4E0A\u8BF7\u6C42\u6392\u5E8F\uFF0C\u518D\u8F6C\u53D1\u7ED9<code>Kafka</code>\u5171\u8BC6\u7EC4\u4EF6\u94FE\u5BF9\u8C61\u8BF7\u6C42\u6253\u5305\u51FA\u5757\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token operator">/</span>orderer<span class="token operator">/</span>consensus<span class="token operator">/</span>kafka<span class="token operator">/</span>chain<span class="token punctuation">.</span><span class="token keyword">go</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>chain <span class="token operator">*</span>chainImpl<span class="token punctuation">)</span> <span class="token function">order</span><span class="token punctuation">(</span>env <span class="token operator">*</span>cb<span class="token punctuation">.</span>Envelope<span class="token punctuation">,</span> configSeq <span class="token builtin">uint64</span><span class="token punctuation">,</span> originalOffset <span class="token builtin">int64</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	marshaledEnv<span class="token punctuation">,</span> err <span class="token operator">:=</span> utils<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>env<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;cannot enqueue, unable to marshal envelope because = %s&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token operator">!</span>chain<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token function">newNormalMessage</span><span class="token punctuation">(</span>marshaledEnv<span class="token punctuation">,</span> configSeq<span class="token punctuation">,</span> originalOffset<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;cannot enqueue&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u6765\u770B\u770Benqueue\u65B9\u6CD5\u662F\u5982\u4F55\u505A\u7684\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>chain <span class="token operator">*</span>chainImpl<span class="token punctuation">)</span> <span class="token function">enqueue</span><span class="token punctuation">(</span>kafkaMsg <span class="token operator">*</span>ab<span class="token punctuation">.</span>KafkaMessage<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	logger<span class="token punctuation">.</span><span class="token function">Debugf</span><span class="token punctuation">(</span><span class="token string">&quot;[channel: %s] Enqueueing envelope...&quot;</span><span class="token punctuation">,</span> chain<span class="token punctuation">.</span><span class="token function">ChainID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">select</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token operator">&lt;-</span>chain<span class="token punctuation">.</span>startChan<span class="token punctuation">:</span> <span class="token comment">// // \u5171\u8BC6\u7EC4\u4EF6\u5728\u542F\u52A8\u9636\u6BB5\u542F\u52A8\u5B8C\u6210</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>chain<span class="token punctuation">.</span>haltChan<span class="token punctuation">:</span> <span class="token comment">//  \u5DF2\u7ECF\u5173\u95EDchain.startChan\u901A\u9053</span>
		<span class="token operator">...</span>
			<span class="token punctuation">}</span>
			<span class="token comment">//// \u521B\u5EFAKafka\u751F\u4EA7\u8005\u6D88\u606F</span>
			message <span class="token operator">:=</span> <span class="token function">newProducerMessage</span><span class="token punctuation">(</span>chain<span class="token punctuation">.</span>channel<span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
			<span class="token comment">//// \u53D1\u9001\u6D88\u606F\u5230Kafka\u96C6\u7FA4\u8BF7\u6C42\u6392\u5E8F</span>
			<span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> chain<span class="token punctuation">.</span>producer<span class="token punctuation">.</span><span class="token function">SendMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token operator">...</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5904\u7406\u901A\u9053\u914D\u7F6E\u4EA4\u6613\u6D88\u606F</strong></p><p>4.3 \u83B7\u53D6\u914D\u7F6E\u4EA4\u6613\u6D88\u606F\u4E0E\u901A\u9053\u7684\u6700\u65B0\u914D\u7F6E\u5E8F\u53F7</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>config<span class="token punctuation">,</span> configSeq<span class="token punctuation">,</span> err <span class="token operator">:=</span> processor<span class="token punctuation">.</span><span class="token function">ProcessConfigUpdateMsg</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4EE3\u7801\u4F4D\u7F6E\uFF1A/orderer/common/msgprocessor/systemchannel.go/ProcessConfigUpdateMsg,\u5927\u6982\u505A\u4E86\u4EE5\u4E0B\u4E8B\u60C5\uFF1A</p><ul><li><em>\u83B7\u53D6\u6D88\u606F\u4E2D\u7684\u901A\u9053ID</em></li><li><em>\u68C0\u67E5\u6D88\u606F\u4E2D\u7684\u901A\u9053ID\u4E0E\u5F53\u524D\u901A\u9053ID\u662F\u5426\u4E00\u81F4,\u4E00\u81F4\u7684\u8BDD\u4EA4\u7531\u6807\u51C6\u901A\u9053\u5904\u7406\u5668\u5904\u7406</em></li><li><em>\u521B\u5EFA\u65B0\u5E94\u7528\u901A\u9053\u7684\u901A\u9053\u914D\u7F6E\u5B9E\u4F53Bundle\u7ED3\u6784\u5BF9\u8C61</em></li><li><em>\u6784\u9020\u65B0\u7684\u901A\u9053\u914D\u7F6E\u66F4\u65B0\u4EA4\u6613\u6D88\u606F\uFF08ConfigEnvelope\u7C7B\u578B\uFF09\uFF0C\u6CE8\u610F\u5C06\u8BE5\u6D88\u606F\u7684\u901A\u9053\u914D\u7F6E\u5E8F\u53F7\u66F4\u65B0\u4E3A1</em></li><li><em>\u521B\u5EFA\u5185\u5C42\u7684\u901A\u9053\u914D\u7F6E\u4EA4\u6613\u6D88\u606F\uFF08CONFIG\u7C7B\u578B\uFF09</em></li><li><em>\u521B\u5EFA\u5916\u5C42\u7684\u914D\u7F6E\u4EA4\u6613\u6D88\u606F\uFF08ORDERER_TRANSACTION\u7C7B\u578B\uFF09</em></li><li><em>\u5E94\u7528\u7CFB\u7EDF\u901A\u9053\u7684\u6D88\u606F\u8FC7\u6EE4\u5668</em></li><li><em>\u8FD4\u56DE\u65B0\u7684\u901A\u9053\u914D\u7F6E\u4EA4\u6613\u6D88\u606F\u4E0E\u5F53\u524D\u7CFB\u7EDF\u901A\u9053\u7684\u914D\u7F6E\u5E8F\u53F7</em></li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>SystemChannel<span class="token punctuation">)</span> <span class="token function">ProcessConfigUpdateMsg</span><span class="token punctuation">(</span>envConfigUpdate <span class="token operator">*</span>cb<span class="token punctuation">.</span>Envelope<span class="token punctuation">)</span> <span class="token punctuation">(</span>config <span class="token operator">*</span>cb<span class="token punctuation">.</span>Envelope<span class="token punctuation">,</span> configSeq <span class="token builtin">uint64</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	channelID<span class="token punctuation">,</span> err <span class="token operator">:=</span> utils<span class="token punctuation">.</span><span class="token function">ChannelID</span><span class="token punctuation">(</span>envConfigUpdate<span class="token punctuation">)</span> <span class="token comment">// \u83B7\u53D6\u6D88\u606F\u4E2D\u7684\u901A\u9053ID</span>
	<span class="token operator">...</span>
	<span class="token comment">//\u68C0\u67E5\u6D88\u606F\u4E2D\u7684\u901A\u9053ID\u4E0E\u5F53\u524D\u901A\u9053ID\u662F\u5426\u4E00\u81F4</span>
	<span class="token keyword">if</span> channelID <span class="token operator">==</span> s<span class="token punctuation">.</span>support<span class="token punctuation">.</span><span class="token function">ChainID</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//// \u4EA4\u7531\u6807\u51C6\u901A\u9053\u5904\u7406\u5668\u5904\u7406</span>
		<span class="token keyword">return</span> s<span class="token punctuation">.</span>StandardChannel<span class="token punctuation">.</span><span class="token function">ProcessConfigUpdateMsg</span><span class="token punctuation">(</span>envConfigUpdate<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token operator">...</span>
	<span class="token comment">// \u521B\u5EFA\u65B0\u7684\u5E94\u7528\u901A\u9053\uFF0C\u5176\u901A\u9053\u914D\u7F6E\u5E8F\u53F7\u9ED8\u8BA4\u521D\u59CB\u5316\u4E3A0</span>
	<span class="token comment">// \u521B\u5EFA\u65B0\u5E94\u7528\u901A\u9053\u7684\u901A\u9053\u914D\u7F6E\u5B9E\u4F53Bundle\u7ED3\u6784\u5BF9\u8C61</span>
	bundle<span class="token punctuation">,</span> err <span class="token operator">:=</span> s<span class="token punctuation">.</span>templator<span class="token punctuation">.</span><span class="token function">NewChannelConfig</span><span class="token punctuation">(</span>envConfigUpdate<span class="token punctuation">)</span>
	<span class="token operator">...</span>
	<span class="token comment">//\u6784\u9020\u65B0\u7684\u901A\u9053\u914D\u7F6E\u66F4\u65B0\u4EA4\u6613\u6D88\u606F\uFF08ConfigEnvelope\u7C7B\u578B\uFF09\uFF0C\u6CE8\u610F\u5C06\u8BE5\u6D88\u606F\u7684\u901A\u9053\u914D\u7F6E\u5E8F\u53F7\u66F4\u65B0\u4E3A1</span>
	newChannelConfigEnv<span class="token punctuation">,</span> err <span class="token operator">:=</span> bundle<span class="token punctuation">.</span><span class="token function">ConfigtxValidator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ProposeConfigUpdate</span><span class="token punctuation">(</span>envConfigUpdate<span class="token punctuation">)</span>
	<span class="token operator">...</span>
	<span class="token comment">//\u521B\u5EFA\u5185\u5C42\u7684\u901A\u9053\u914D\u7F6E\u4EA4\u6613\u6D88\u606F\uFF08CONFIG\u7C7B\u578B\uFF09</span>
	newChannelEnvConfig<span class="token punctuation">,</span> err <span class="token operator">:=</span> utils<span class="token punctuation">.</span><span class="token function">CreateSignedEnvelope</span><span class="token punctuation">(</span>cb<span class="token punctuation">.</span>HeaderType_CONFIG<span class="token punctuation">,</span> channelID<span class="token punctuation">,</span> s<span class="token punctuation">.</span>support<span class="token punctuation">.</span><span class="token function">Signer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> newChannelConfigEnv<span class="token punctuation">,</span> msgVersion<span class="token punctuation">,</span> epoch<span class="token punctuation">)</span>
	<span class="token operator">...</span>
	<span class="token comment">//\u521B\u5EFA\u5916\u5C42\u7684\u914D\u7F6E\u4EA4\u6613\u6D88\u606F\uFF08ORDERER_TRANSACTION\u7C7B\u578B\uFF09</span>
	wrappedOrdererTransaction<span class="token punctuation">,</span> err <span class="token operator">:=</span> utils<span class="token punctuation">.</span><span class="token function">CreateSignedEnvelope</span><span class="token punctuation">(</span>cb<span class="token punctuation">.</span>HeaderType_ORDERER_TRANSACTION<span class="token punctuation">,</span> s<span class="token punctuation">.</span>support<span class="token punctuation">.</span><span class="token function">ChainID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>support<span class="token punctuation">.</span><span class="token function">Signer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> newChannelEnvConfig<span class="token punctuation">,</span> msgVersion<span class="token punctuation">,</span> epoch<span class="token punctuation">)</span>
	<span class="token operator">...</span>
	<span class="token comment">// \u5E94\u7528\u7CFB\u7EDF\u901A\u9053\u7684\u6D88\u606F\u8FC7\u6EE4\u5668</span>
	err <span class="token operator">=</span> s<span class="token punctuation">.</span>StandardChannel<span class="token punctuation">.</span>filters<span class="token punctuation">.</span><span class="token function">Apply</span><span class="token punctuation">(</span>wrappedOrdererTransaction<span class="token punctuation">)</span>
	<span class="token operator">...</span>
	<span class="token comment">//\u8FD4\u56DE\u65B0\u7684\u901A\u9053\u914D\u7F6E\u4EA4\u6613\u6D88\u606F\u4E0E\u5F53\u524D\u7CFB\u7EDF\u901A\u9053\u7684\u914D\u7F6E\u5E8F\u53F7</span>
	<span class="token keyword">return</span> wrappedOrdererTransaction<span class="token punctuation">,</span> s<span class="token punctuation">.</span>support<span class="token punctuation">.</span><span class="token function">Sequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.4 \u6784\u9020\u65B0\u7684\u914D\u7F6E\u4EA4\u6613\u6D88\u606F\u53D1\u9001\u5230\u5171\u8BC6\u7EC4\u4EF6\u94FE\u5BF9\u8C61\u8BF7\u6C42\u6392\u5E8F</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>err <span class="token operator">=</span> processor<span class="token punctuation">.</span><span class="token function">Configure</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> configSeq<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u4F9D\u65E7\u53EA\u662F\u8003\u8651<code>kafka</code>\u5171\u8BC6\u7EC4\u4EF6\uFF0C<code>processor.Configure()</code>\u65B9\u6CD5\u5B9E\u9645\u4E0A\u662F\u8C03\u7528<code>chainImpl.configure()</code>\u65B9\u6CD5\uFF0C\u540C\u6837\u6784\u9020<code>Kafka</code>\u5E38\u89C4\u6D88\u606F\uFF08<code>KafkaMessageRegular</code>\u7C7B\u578B\uFF09\u3002\u5176\u4E2D\uFF0C<code>Class</code>\u6D88\u606F\u7C7B\u522B\u5C5E\u4E8E<code>KafkaMessageRegular_CONFIG</code>\u7C7B\u578B\uFF0C\u5305\u542B\u4E86\u901A\u9053\u914D\u7F6E\u4EA4\u6613\u6D88\u606F\u3001 \u901A\u9053\u914D\u7F6E\u5E8F\u53F7<code>configSeq</code>\u4E0E\u521D\u59CB\u6D88\u606F\u504F\u79FB\u91CF<code>originalOffset\uFF080\uFF09</code>\u3002\u63A5\u7740\uFF0C\u8C03\u7528<code>chain.enqueue()</code>\u65B9\u6CD5\uFF0C\u5C06\u5176\u53D1\u9001\u5230<code>Kafka</code>\u96C6\u7FA4\u4E0A\u6307\u5B9A\u4E3B\u9898\uFF08<code>chainID</code>\uFF09\u548C\u5206\u533A\u53F7\uFF080\uFF09\u7684\u5206\u533A\u4E0A\uFF0C\u540C\u65F6\uFF0C\u7531<code>Kafka</code>\u5171\u8BC6\u7EC4\u4EF6\u94FE\u5BF9\u8C61\u5206\u533A\u6D88\u8D39\u8005<code>channelConsumer</code>\u83B7\u53D6\u8BE5\u6D88\u606F\uFF0C\u518D\u4EA4\u7531\u7ED9<code>Kafka</code>\u5171\u8BC6\u7EC4\u4EF6\u94FE\u5BF9\u8C61\u8BF7\u6C42\u6253\u5305\u51FA\u5757\u3002</p><p>\u2464\uFF1A\u53D1\u9001\u6210\u529F\u5904\u7406\u72B6\u6001\u54CD\u5E94\u6D88\u606F</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>err <span class="token operator">=</span> srv<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>ab<span class="token punctuation">.</span>BroadcastResponse<span class="token punctuation">{</span>Status<span class="token punctuation">:</span> cb<span class="token punctuation">.</span>Status_SUCCESS<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6574\u4E2A\u6D41\u7A0B\u56FE\u5982\u4E0B\uFF1A</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gmzs6ruy53j31860u0doq.jpg" alt="image-20210125112957202"></p><hr><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><blockquote><p>/ (\u6587\u7AE0\u56FE\u7247\u4EE3\u7801\u8D44\u6599)</p><p>\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF1AAbel sun</p></blockquote>`,46),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","3.hyperledger_fabric_source_radio.html.vue"]]);export{d as default};
