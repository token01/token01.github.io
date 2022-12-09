import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,a as n,b as s,d as e,e as c,r as l}from"./app.1ee57811.js";const i={},u=n("p",null,"浅谈hyperledger fabric源码|交易广播",-1),r={href:"https://github.com/blockchainGuide/",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"分支：v1.1.0",-1),k=c(`<p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gmz2lvzbprj31ao0t6n61.jpg" alt="40fe3d4a84cc46e22caf5e06071c3aa7" loading="lazy"></p><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p><code>Hyperledger Fabric</code>提供了<code>Broadcast(srv ab.AtomicBroadcast_BroadcastServer)</code>交易广播服务接口，接收客户端提交的签名交易消息请求，交由共识组件链对象对交易进行排序与执行通道管理，按照交易出块规则切割打包，构造新区块并提交账本。同时，通过<code>Deliver()</code>区块分发服务接口，将区块数据发送给通道组织内发起请求的<code>Leader</code>主节点，再基于<code>Gossip</code>消息协议广播到组织内的其他节点上，从而实现广播交易消息的目的。</p><h2 id="broadcast服务消息处理" tabindex="-1"><a class="header-anchor" href="#broadcast服务消息处理" aria-hidden="true">#</a> Broadcast服务消息处理</h2><p><code>Orderer</code>节点启动时已经在本地的<code>gRPC</code>服务器上注册了<code>Orderer</code>排序服务器，并创建了<code>Broadcast</code>服务处理句柄。当客户端调用<code>Broadcast()</code>服务接口发起服务请求时，<code>Orderer</code>排序服务器会调用<code>Broadcast()→s.bh.Handle()</code>方法处理请求，流程如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>server<span class="token punctuation">)</span> <span class="token function">Broadcast</span><span class="token punctuation">(</span>srv ab<span class="token punctuation">.</span>AtomicBroadcast_BroadcastServer<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
<span class="token operator">...</span>
	<span class="token keyword">return</span> s<span class="token punctuation">.</span>bh<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>broadcastMsgTracer<span class="token punctuation">{</span>
	<span class="token operator">...</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>bh <span class="token operator">*</span>handlerImpl<span class="token punctuation">)</span> <span class="token function">Handle</span><span class="token punctuation">(</span>srv ab<span class="token punctuation">.</span>AtomicBroadcast_BroadcastServer<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要就是这个<code>Handle</code>的处理，分析如下：</p><p>①：等待接收处理消息</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>msg<span class="token punctuation">,</span> err <span class="token operator">:=</span> srv<span class="token punctuation">.</span><span class="token function">Recv</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>②：解析获取通道头部chdr、配置交易消息标志位isConfig、通道链支持对象（通道消息处理器）</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>chdr<span class="token punctuation">,</span> isConfig<span class="token punctuation">,</span> processor<span class="token punctuation">,</span> err <span class="token operator">:=</span> bh<span class="token punctuation">.</span>sm<span class="token punctuation">.</span><span class="token function">BroadcastChannelSupport</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>③：检查共识组件链对象是否准备好接收新的交易消息</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">if</span> err <span class="token operator">=</span> processor<span class="token punctuation">.</span><span class="token function">WaitReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>④：分类处理消息</p><p><strong>处理普通消息</strong></p><p>4.1 解析获取通道的最新配置序号</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>configSeq<span class="token punctuation">,</span> err <span class="token operator">:=</span> processor<span class="token punctuation">.</span><span class="token function">ProcessNormalMsg</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token operator">/</span>orderer<span class="token operator">/</span>common<span class="token operator">/</span>msgprocessor<span class="token operator">/</span>standardchannel<span class="token punctuation">.</span><span class="token keyword">go</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>StandardChannel<span class="token punctuation">)</span> <span class="token function">ProcessNormalMsg</span><span class="token punctuation">(</span>env <span class="token operator">*</span>cb<span class="token punctuation">.</span>Envelope<span class="token punctuation">)</span> <span class="token punctuation">(</span>configSeq <span class="token builtin">uint64</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	configSeq <span class="token operator">=</span> s<span class="token punctuation">.</span>support<span class="token punctuation">.</span><span class="token function">Sequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	err <span class="token operator">=</span> s<span class="token punctuation">.</span>filters<span class="token punctuation">.</span><span class="token function">Apply</span><span class="token punctuation">(</span>env<span class="token punctuation">)</span>
	<span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>configSeq是最新配置序号，默认初始值为0，新建应用通道后该配置序号自增为1，通过比较该序号就能判断当前通道配置版本是否发生了更新，从而确定当前交易消息是否需要重新过滤与重新排序。</p><p>接着就是使用自带的默认通道消息过滤器过滤消息，有以下过滤条件：</p><ul><li>验证不能为空</li><li>拒绝过期的签名者身份证书</li><li>消息最大字节数过滤器（98MB）</li><li>消息签名验证过滤器</li></ul><p>4.2 构造新的普通交易消息并发送到共识组件链对象请求处理</p><div class="language-GO line-numbers-mode" data-ext="GO"><pre class="language-GO"><code>err = processor.Order(msg, configSeq) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里我们只关注<code>kafka</code>的共识组件处理。</p><p>首先序列化消息，然后将该消息发送到<code>Kafka</code>集群的指定分区上请求排序，再转发给<code>Kafka</code>共识组件链对象请求打包出块。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token operator">/</span>orderer<span class="token operator">/</span>consensus<span class="token operator">/</span>kafka<span class="token operator">/</span>chain<span class="token punctuation">.</span><span class="token keyword">go</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来看看enqueue方法是如何做的：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>chain <span class="token operator">*</span>chainImpl<span class="token punctuation">)</span> <span class="token function">enqueue</span><span class="token punctuation">(</span>kafkaMsg <span class="token operator">*</span>ab<span class="token punctuation">.</span>KafkaMessage<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	logger<span class="token punctuation">.</span><span class="token function">Debugf</span><span class="token punctuation">(</span><span class="token string">&quot;[channel: %s] Enqueueing envelope...&quot;</span><span class="token punctuation">,</span> chain<span class="token punctuation">.</span><span class="token function">ChainID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">select</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token operator">&lt;-</span>chain<span class="token punctuation">.</span>startChan<span class="token punctuation">:</span> <span class="token comment">// // 共识组件在启动阶段启动完成</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>chain<span class="token punctuation">.</span>haltChan<span class="token punctuation">:</span> <span class="token comment">//  已经关闭chain.startChan通道</span>
		<span class="token operator">...</span>
			<span class="token punctuation">}</span>
			<span class="token comment">//// 创建Kafka生产者消息</span>
			message <span class="token operator">:=</span> <span class="token function">newProducerMessage</span><span class="token punctuation">(</span>chain<span class="token punctuation">.</span>channel<span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
			<span class="token comment">//// 发送消息到Kafka集群请求排序</span>
			<span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> chain<span class="token punctuation">.</span>producer<span class="token punctuation">.</span><span class="token function">SendMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token operator">...</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>处理通道配置交易消息</strong></p><p>4.3 获取配置交易消息与通道的最新配置序号</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>config<span class="token punctuation">,</span> configSeq<span class="token punctuation">,</span> err <span class="token operator">:=</span> processor<span class="token punctuation">.</span><span class="token function">ProcessConfigUpdateMsg</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代码位置：/orderer/common/msgprocessor/systemchannel.go/ProcessConfigUpdateMsg,大概做了以下事情：</p><ul><li><em>获取消息中的通道ID</em></li><li><em>检查消息中的通道ID与当前通道ID是否一致,一致的话交由标准通道处理器处理</em></li><li><em>创建新应用通道的通道配置实体Bundle结构对象</em></li><li><em>构造新的通道配置更新交易消息（ConfigEnvelope类型），注意将该消息的通道配置序号更新为1</em></li><li><em>创建内层的通道配置交易消息（CONFIG类型）</em></li><li><em>创建外层的配置交易消息（ORDERER_TRANSACTION类型）</em></li><li><em>应用系统通道的消息过滤器</em></li><li><em>返回新的通道配置交易消息与当前系统通道的配置序号</em></li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>SystemChannel<span class="token punctuation">)</span> <span class="token function">ProcessConfigUpdateMsg</span><span class="token punctuation">(</span>envConfigUpdate <span class="token operator">*</span>cb<span class="token punctuation">.</span>Envelope<span class="token punctuation">)</span> <span class="token punctuation">(</span>config <span class="token operator">*</span>cb<span class="token punctuation">.</span>Envelope<span class="token punctuation">,</span> configSeq <span class="token builtin">uint64</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	channelID<span class="token punctuation">,</span> err <span class="token operator">:=</span> utils<span class="token punctuation">.</span><span class="token function">ChannelID</span><span class="token punctuation">(</span>envConfigUpdate<span class="token punctuation">)</span> <span class="token comment">// 获取消息中的通道ID</span>
	<span class="token operator">...</span>
	<span class="token comment">//检查消息中的通道ID与当前通道ID是否一致</span>
	<span class="token keyword">if</span> channelID <span class="token operator">==</span> s<span class="token punctuation">.</span>support<span class="token punctuation">.</span><span class="token function">ChainID</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//// 交由标准通道处理器处理</span>
		<span class="token keyword">return</span> s<span class="token punctuation">.</span>StandardChannel<span class="token punctuation">.</span><span class="token function">ProcessConfigUpdateMsg</span><span class="token punctuation">(</span>envConfigUpdate<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token operator">...</span>
	<span class="token comment">// 创建新的应用通道，其通道配置序号默认初始化为0</span>
	<span class="token comment">// 创建新应用通道的通道配置实体Bundle结构对象</span>
	bundle<span class="token punctuation">,</span> err <span class="token operator">:=</span> s<span class="token punctuation">.</span>templator<span class="token punctuation">.</span><span class="token function">NewChannelConfig</span><span class="token punctuation">(</span>envConfigUpdate<span class="token punctuation">)</span>
	<span class="token operator">...</span>
	<span class="token comment">//构造新的通道配置更新交易消息（ConfigEnvelope类型），注意将该消息的通道配置序号更新为1</span>
	newChannelConfigEnv<span class="token punctuation">,</span> err <span class="token operator">:=</span> bundle<span class="token punctuation">.</span><span class="token function">ConfigtxValidator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ProposeConfigUpdate</span><span class="token punctuation">(</span>envConfigUpdate<span class="token punctuation">)</span>
	<span class="token operator">...</span>
	<span class="token comment">//创建内层的通道配置交易消息（CONFIG类型）</span>
	newChannelEnvConfig<span class="token punctuation">,</span> err <span class="token operator">:=</span> utils<span class="token punctuation">.</span><span class="token function">CreateSignedEnvelope</span><span class="token punctuation">(</span>cb<span class="token punctuation">.</span>HeaderType_CONFIG<span class="token punctuation">,</span> channelID<span class="token punctuation">,</span> s<span class="token punctuation">.</span>support<span class="token punctuation">.</span><span class="token function">Signer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> newChannelConfigEnv<span class="token punctuation">,</span> msgVersion<span class="token punctuation">,</span> epoch<span class="token punctuation">)</span>
	<span class="token operator">...</span>
	<span class="token comment">//创建外层的配置交易消息（ORDERER_TRANSACTION类型）</span>
	wrappedOrdererTransaction<span class="token punctuation">,</span> err <span class="token operator">:=</span> utils<span class="token punctuation">.</span><span class="token function">CreateSignedEnvelope</span><span class="token punctuation">(</span>cb<span class="token punctuation">.</span>HeaderType_ORDERER_TRANSACTION<span class="token punctuation">,</span> s<span class="token punctuation">.</span>support<span class="token punctuation">.</span><span class="token function">ChainID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>support<span class="token punctuation">.</span><span class="token function">Signer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> newChannelEnvConfig<span class="token punctuation">,</span> msgVersion<span class="token punctuation">,</span> epoch<span class="token punctuation">)</span>
	<span class="token operator">...</span>
	<span class="token comment">// 应用系统通道的消息过滤器</span>
	err <span class="token operator">=</span> s<span class="token punctuation">.</span>StandardChannel<span class="token punctuation">.</span>filters<span class="token punctuation">.</span><span class="token function">Apply</span><span class="token punctuation">(</span>wrappedOrdererTransaction<span class="token punctuation">)</span>
	<span class="token operator">...</span>
	<span class="token comment">//返回新的通道配置交易消息与当前系统通道的配置序号</span>
	<span class="token keyword">return</span> wrappedOrdererTransaction<span class="token punctuation">,</span> s<span class="token punctuation">.</span>support<span class="token punctuation">.</span><span class="token function">Sequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.4 构造新的配置交易消息发送到共识组件链对象请求排序</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>err <span class="token operator">=</span> processor<span class="token punctuation">.</span><span class="token function">Configure</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> configSeq<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里我们依旧只是考虑<code>kafka</code>共识组件，<code>processor.Configure()</code>方法实际上是调用<code>chainImpl.configure()</code>方法，同样构造<code>Kafka</code>常规消息（<code>KafkaMessageRegular</code>类型）。其中，<code>Class</code>消息类别属于<code>KafkaMessageRegular_CONFIG</code>类型，包含了通道配置交易消息、 通道配置序号<code>configSeq</code>与初始消息偏移量<code>originalOffset（0）</code>。接着，调用<code>chain.enqueue()</code>方法，将其发送到<code>Kafka</code>集群上指定主题（<code>chainID</code>）和分区号（0）的分区上，同时，由<code>Kafka</code>共识组件链对象分区消费者<code>channelConsumer</code>获取该消息，再交由给<code>Kafka</code>共识组件链对象请求打包出块。</p><p>⑤：发送成功处理状态响应消息</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>err <span class="token operator">=</span> srv<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>ab<span class="token punctuation">.</span>BroadcastResponse<span class="token punctuation">{</span>Status<span class="token punctuation">:</span> cb<span class="token punctuation">.</span>Status_SUCCESS<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>整个流程图如下：</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gmzs6ruy53j31860u0doq.jpg" alt="image-20210125112957202" loading="lazy"></p><hr><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,44),v={href:"https://github.com/blockchainGuide/",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"微信公众号：区块链技术栈",-1);function g(b,f){const a=l("ExternalLinkIcon");return p(),o("div",null,[n("blockquote",null,[u,n("p",null,[s("文章及代码："),n("a",r,[s("https://github.com/blockchainGuide/"),e(a)])]),d]),k,n("blockquote",null,[n("p",null,[n("a",v,[s("https://github.com/blockchainGuide/"),e(a)]),s(" (文章图片代码资料)")]),m])])}const _=t(i,[["render",g],["__file","3.hyperledger_fabric_source_radio.html.vue"]]);export{_ as default};