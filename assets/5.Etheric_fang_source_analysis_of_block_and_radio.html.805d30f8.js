import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as e,a as n,b as s,d as p,e as c,r as l}from"./app.1ee57811.js";const u={},i=c(`<blockquote><p>浅谈以太坊源码分析之区块和交易广播</p></blockquote><h2 id="protocolmanager详解" tabindex="-1"><a class="header-anchor" href="#protocolmanager详解" aria-hidden="true">#</a> ProtocolManager详解</h2><p><code>ProtocolManager</code>，从字面上看是协议管理器，负责着<code>p2p</code>通信协议的管理。它连接了<code>p2p</code>的逻辑层<code>peer</code>与顶层<code>peer</code>之间的调用，从顶层将协议传递至逻辑层，再从逻辑层得到<code>message</code>传递到顶层。</p><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1gl9hs30wqfj30zw0rodox.jpg" alt="image-20201202142450663" loading="lazy"></p><ol><li><code>fastSync</code>规定了同步的模式 ；</li><li><code>acceptTxs</code>是节点是否接受交易的阀门，只有当<code>pm.acceptTxs == 1</code>时，节点才会接受交易。这个操作只会在同步结束后再开始，即同步的时候节点是不会接受交易的；</li><li><code>SubProtocols</code>中是以太坊的通讯协议，通常只有一个值，即<code>eth63</code>。</li><li><code>downloader</code>是一个下载器，用于主动从远程节点中获取<code>hashes</code>和<code>blocks</code>。</li><li><code>fetcher</code>则被动的收集网络其他以太坊节点发过来的同步通知，进行验证，并做出相应的处理。</li></ol><hr><p><code>ProtocolManager.Start()</code>启动了四条<code>go</code>程，分别是交易订阅广播协程（<code>txBroadcastLoop</code>）、挖矿订阅协程（<code>minedBroadcastLoop</code>）、节点定期同步协程（<code>syncer</code>）和交易同步协程（txsyncLoop）</p><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1gl9hyirjjaj31io0rck40.jpg" alt="image-20201202143101376" loading="lazy"></p><ol><li><mark>txBroadcastLoop</mark>:广播新出现的交易对象。<code>txBroadcastLoop()</code>会在<code>txCh</code>通道的收端持续等待，一旦接收到有关新交易的事件，会立即调用<code>BroadcastTx()</code>函数广播给那些尚无该交易对象的相邻个体。</li><li><mark>minedBroadcastLoop</mark>:广播新挖掘出的区块。<code>minedBroadcastLoop()</code>持续等待本节点的新挖掘出区块事件，然后立即广播给需要的相邻个体。当不再订阅新挖掘区块事件时，这个函数才会结束等待并返回。</li><li><mark>syncer</mark>:<strong>定时的和网络其他节点同步，并处理网络节点的相关通知</strong>。定时与相邻个体进行区块全链的强制同步。syncer()首先启动fetcher成员，然后进入一个无限循环，每次循环中都会向相邻peer列表中“最优”的那个peer作一次区块全链同步。发起上述同步的理由分两种：如果有新登记(加入)的相邻个体，则在整个peer列表数目大于5时，发起之；如果没有新peer到达，则以10s为间隔定时的发起之。这里所谓&quot;最优&quot;指的是peer中所维护区块链的TotalDifficulty(td)最高，由于Td是全链中从创世块到最新头块的Difficulty值总和，所以Td值最高就意味着它的区块链是最新的，跟这样的peer作区块全链同步，显然改动量是最小的，此即&quot;最优&quot;。</li><li><mark>txsyncLoop</mark>：<strong>把新的交易均匀的同步给网路节点</strong>。</li></ol><hr><h2 id="广播的情形" tabindex="-1"><a class="header-anchor" href="#广播的情形" aria-hidden="true">#</a> 广播的情形</h2><ol><li><code>minedBroadcastLoop()</code>监听到新区块事件后，把新区块和区块<code>hash</code>分别广播出去；</li><li>从远程节点同步完成后，将<code>CurrentBlock</code>广播出去，此时广播的是区块<code>hash</code>；</li><li><code>txBlockcastLoop()</code>监听到区块池的新增交易事件时会广播交易；</li></ol><hr><h2 id="广播区块及区块哈希" tabindex="-1"><a class="header-anchor" href="#广播区块及区块哈希" aria-hidden="true">#</a> 广播区块及区块哈希</h2><p>广播区块的入口在<code>pm.minedBroadcastLoop()</code>,进入到<code>BroadcastBlock</code>,这里的参数为<code>bool</code>值，如果传入的为true，则将区块block和总难度td发送给一部分节点，节点数为根号n；如果传入的为false，则将区块的hash发送给所有的节点。<strong>需要注意的是两个广播函数都执行</strong>。</p><p>进入到<code>true</code>分支：<strong>代表只传播区块给一部分节点</strong></p><p>①：首先计算一个临时的TD</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">if</span> parent <span class="token operator">:=</span> pm<span class="token punctuation">.</span>blockchain<span class="token punctuation">.</span><span class="token function">GetBlock</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span><span class="token function">ParentHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> block<span class="token punctuation">.</span><span class="token function">NumberU64</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> parent <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   td <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>big<span class="token punctuation">.</span>Int<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span><span class="token function">Difficulty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> pm<span class="token punctuation">.</span>blockchain<span class="token punctuation">.</span><span class="token function">GetTd</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span><span class="token function">ParentHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> block<span class="token punctuation">.</span><span class="token function">NumberU64</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>②：发送块到peers的子集</p><p>对节点数进行开方，16开方得4，然后取前4个节点。</p><div class="language-GO line-numbers-mode" data-ext="GO"><pre class="language-GO"><code>transferLen := int(math.Sqrt(float64(len(peers))))
  if transferLen &lt; minBroadcastPeers {
   transferLen = minBroadcastPeers
  }
  if transferLen &gt; len(peers) {
   transferLen = len(peers)
  }
  transfer := peers[:transferLen]
  for _, peer := range transfer {
   peer.AsyncSendNewBlock(block, td) // 块传播
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行完之后直接return出去，再次执行此函数，此时不会走ture分支，直接判断判断本地是否有区块，如果有则发送区区块哈希给剩下的节点，如果没有，则不做发送哈希的操作。</p><blockquote><p>如果本地存在这个要广播的区块(很可能就是出块节点，或者接受块的节点已经插入到区块链中),那就还要像其他没有被广播到区块的节点发送区块哈希。</p></blockquote><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1gl1fp0u7e3j31bw0hkthh.jpg" alt="image-20201125150810051" loading="lazy"></p><blockquote><p>如果本地不存在这个要广播的区块哈希(应该是还没接收到区块或者区块哈希的节点)，那它只要向它的节点列表里发送区块即可。</p></blockquote><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1gl1fwwxfh2j31bi0e4tfv.jpg" alt="image-20201125151546035" loading="lazy"></p><hr><p>接下来就是重点分析<code>AsyncSendNewBlock</code>和<code>AsyncSendNewBlockHash</code>两个函数了。</p><h3 id="asyncsendnewblock" tabindex="-1"><a class="header-anchor" href="#asyncsendnewblock" aria-hidden="true">#</a> AsyncSendNewBlock</h3><blockquote><p>发送块到需要广播的节点的广播队列中</p></blockquote><div class="language-GO line-numbers-mode" data-ext="GO"><pre class="language-GO"><code>select {
 case p.queuedProps &lt;- &amp;propEvent{block: block, td: td}:
  p.knownBlocks.Add(block.Hash())
  for p.knownBlocks.Cardinality() &gt;= maxKnownBlocks {
   p.knownBlocks.Pop()
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的<code>queuedProps</code>是用来存放要广播的块的队列，同时，要把广播的块标记为已知，还不能超过1024（<strong>maxKnownBlocks</strong>）个。超过就会弹出队列第一个<code>propEvent()</code> 。接下来就是处理队列中的块了。</p><p>在<code>eth/peer.go</code>中，有个专门处理广播的循环<code>brodcast</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>peer<span class="token punctuation">)</span> <span class="token function">broadcast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">for</span> <span class="token punctuation">{</span>
  <span class="token keyword">select</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> txs <span class="token operator">:=</span> <span class="token operator">&lt;-</span>p<span class="token punctuation">.</span>queuedTxs<span class="token punctuation">:</span>
   <span class="token keyword">if</span> err <span class="token operator">:=</span> p<span class="token punctuation">.</span><span class="token function">SendTransactions</span><span class="token punctuation">(</span>txs<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
   p<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Trace</span><span class="token punctuation">(</span><span class="token string">&quot;Broadcast transactions&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;count&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>txs<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">case</span> prop <span class="token operator">:=</span> <span class="token operator">&lt;-</span>p<span class="token punctuation">.</span>queuedProps<span class="token punctuation">:</span>
   <span class="token keyword">if</span> err <span class="token operator">:=</span> p<span class="token punctuation">.</span><span class="token function">SendNewBlock</span><span class="token punctuation">(</span>prop<span class="token punctuation">.</span>block<span class="token punctuation">,</span> prop<span class="token punctuation">.</span>td<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
   p<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Trace</span><span class="token punctuation">(</span><span class="token string">&quot;Propagated block&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span> prop<span class="token punctuation">.</span>block<span class="token punctuation">.</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;hash&quot;</span><span class="token punctuation">,</span> prop<span class="token punctuation">.</span>block<span class="token punctuation">.</span><span class="token function">Hash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;td&quot;</span><span class="token punctuation">,</span> prop<span class="token punctuation">.</span>td<span class="token punctuation">)</span>

  <span class="token keyword">case</span> block <span class="token operator">:=</span> <span class="token operator">&lt;-</span>p<span class="token punctuation">.</span>queuedAnns<span class="token punctuation">:</span>
   <span class="token keyword">if</span> err <span class="token operator">:=</span> p<span class="token punctuation">.</span><span class="token function">SendNewBlockHashes</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>common<span class="token punctuation">.</span>Hash<span class="token punctuation">{</span>block<span class="token punctuation">.</span><span class="token function">Hash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">uint64</span><span class="token punctuation">{</span>block<span class="token punctuation">.</span><span class="token function">NumberU64</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
   p<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Trace</span><span class="token punctuation">(</span><span class="token string">&quot;Announced block&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span> block<span class="token punctuation">.</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;hash&quot;</span><span class="token punctuation">,</span> block<span class="token punctuation">.</span><span class="token function">Hash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">case</span> <span class="token operator">&lt;-</span>p<span class="token punctuation">.</span>term<span class="token punctuation">:</span>
   <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>广播新块到远程节点</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>p<span class="token punctuation">.</span><span class="token function">SendNewBlock</span><span class="token punctuation">(</span>prop<span class="token punctuation">.</span>block<span class="token punctuation">,</span> prop<span class="token punctuation">.</span>td<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>远程节点收到块后同样也会标记哈希存入队列，并且不会超过最大，同时发送一个<code>NewBlockMsg</code>，<code>msgcode</code>为<code>0x07</code>,同时数据会被RLP编码。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>p<span class="token punctuation">.</span>knownBlocks<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span><span class="token function">Hash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> p<span class="token punctuation">.</span>knownBlocks<span class="token punctuation">.</span><span class="token function">Cardinality</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> maxKnownBlocks <span class="token punctuation">{</span>
  p<span class="token punctuation">.</span>knownBlocks<span class="token punctuation">.</span><span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> p2p<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>rw<span class="token punctuation">,</span> NewBlockMsg<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span>block<span class="token punctuation">,</span> td<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Send</span><span class="token punctuation">(</span>w MsgWriter<span class="token punctuation">,</span> msgcode <span class="token builtin">uint64</span><span class="token punctuation">,</span> data <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
 size<span class="token punctuation">,</span> r<span class="token punctuation">,</span> err <span class="token operator">:=</span> rlp<span class="token punctuation">.</span><span class="token function">EncodeToReader</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> err
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> w<span class="token punctuation">.</span><span class="token function">WriteMsg</span><span class="token punctuation">(</span>Msg<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> msgcode<span class="token punctuation">,</span> Size<span class="token punctuation">:</span> <span class="token function">uint32</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">,</span> Payload<span class="token punctuation">:</span> r<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到此广播区块的过程结束，交由远程节点去处理<code>NewBlockMsg</code>消息。</p><hr><h3 id="asyncsendnewblockhash" tabindex="-1"><a class="header-anchor" href="#asyncsendnewblockhash" aria-hidden="true">#</a> AsyncSendNewBlockHash</h3><p>广播哈希的过程跟广播区块的过程非常的类似，最终是由远程节点去处理<code>NewBlockHashesMsg</code>消息。</p><p>广播区块的过程完毕之后，会直接进入下一个阶段，调用<code>fetcher</code>模块去同步这些广播的区块，接下的文章会讲到。</p><hr><h2 id="广播交易" tabindex="-1"><a class="header-anchor" href="#广播交易" aria-hidden="true">#</a> 广播交易</h2><p>广播交易的入口在<code>pm.txBroadcastLoop()</code>，直接进入到<code>pm.BroadcastTxs(event.Txs)</code>，大概做了以下几件事：</p><p>①：将交易广播给一批没有这个交易的节点</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> tx <span class="token operator">:=</span> <span class="token keyword">range</span> txs <span class="token punctuation">{</span>
  peers <span class="token operator">:=</span> pm<span class="token punctuation">.</span>peers<span class="token punctuation">.</span><span class="token function">PeersWithoutTx</span><span class="token punctuation">(</span>tx<span class="token punctuation">.</span><span class="token function">Hash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> peer <span class="token operator">:=</span> <span class="token keyword">range</span> peers <span class="token punctuation">{</span>
   txset<span class="token punctuation">[</span>peer<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>txset<span class="token punctuation">[</span>peer<span class="token punctuation">]</span><span class="token punctuation">,</span> tx<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  log<span class="token punctuation">.</span><span class="token function">Trace</span><span class="token punctuation">(</span><span class="token string">&quot;Broadcast transaction&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hash&quot;</span><span class="token punctuation">,</span> tx<span class="token punctuation">.</span><span class="token function">Hash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;recipients&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>peers<span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>②：异步发送交易给这些节点</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> peer<span class="token punctuation">,</span> txs <span class="token operator">:=</span> <span class="token keyword">range</span> txset <span class="token punctuation">{</span>
  peer<span class="token punctuation">.</span><span class="token function">AsyncSendTransactions</span><span class="token punctuation">(</span>txs<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着进入到<code>AsyncSendTransactions</code>:</p><p>将所有交易标记为已知交易，同时还要保证没有超过最大的已知交易（32768笔）</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">case</span> p<span class="token punctuation">.</span>queuedTxs <span class="token operator">&lt;-</span> txs<span class="token punctuation">:</span>
  <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> tx <span class="token operator">:=</span> <span class="token keyword">range</span> txs <span class="token punctuation">{</span>
   p<span class="token punctuation">.</span>knownTxs<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>tx<span class="token punctuation">.</span><span class="token function">Hash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> p<span class="token punctuation">.</span>knownTxs<span class="token punctuation">.</span><span class="token function">Cardinality</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> maxKnownTxs <span class="token punctuation">{</span>
   p<span class="token punctuation">.</span>knownTxs<span class="token punctuation">.</span><span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code> <span class="token keyword">case</span> txs <span class="token operator">:=</span> <span class="token operator">&lt;-</span>p<span class="token punctuation">.</span>queuedTxs<span class="token punctuation">:</span>
   <span class="token keyword">if</span> err <span class="token operator">:=</span> p<span class="token punctuation">.</span><span class="token function">SendTransactions</span><span class="token punctuation">(</span>txs<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>peer<span class="token punctuation">)</span> <span class="token function">SendTransactions</span><span class="token punctuation">(</span>txs types<span class="token punctuation">.</span>Transactions<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
<span class="token operator">...</span>
  <span class="token keyword">return</span> p2p<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>rw<span class="token punctuation">,</span> TxMsg<span class="token punctuation">,</span> txs<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发送交易最终会发送一个<code>TxMsg</code>消息，接收到这个消息的节点会通过<code>pm.txpool.AddRemotes(txs)</code>处理交易。</p><hr><h2 id="消息处理-handlemsg" tabindex="-1"><a class="header-anchor" href="#消息处理-handlemsg" aria-hidden="true">#</a> 消息处理（handleMsg）</h2><p><code>handleMsg</code>从对方连接中读取消息，根据消息码的不同进行处理,从而将广播和同步之间来回的消息进行处理。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>pm <span class="token operator">*</span>ProtocolManager<span class="token punctuation">)</span> <span class="token function">handleMsg</span><span class="token punctuation">(</span>p <span class="token operator">*</span>peer<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    msg<span class="token punctuation">,</span> err <span class="token operator">:=</span> p<span class="token punctuation">.</span>rw<span class="token punctuation">.</span><span class="token function">ReadMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> err
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> msg<span class="token punctuation">.</span>Size <span class="token operator">&gt;</span> ProtocolMaxMsgSize <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">errResp</span><span class="token punctuation">(</span>ErrMsgTooLarge<span class="token punctuation">,</span> <span class="token string">&quot;%v &gt; %v&quot;</span><span class="token punctuation">,</span> msg<span class="token punctuation">.</span>Size<span class="token punctuation">,</span> ProtocolMaxMsgSize<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> msg<span class="token punctuation">.</span><span class="token function">Discard</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">switch</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> msg<span class="token punctuation">.</span>Code <span class="token operator">==</span> StatusMsg<span class="token punctuation">:</span> <span class="token operator">...</span><span class="token operator">...</span>
    <span class="token keyword">case</span> msg<span class="token punctuation">.</span>Code <span class="token operator">==</span> GetBlockHeadersMsg<span class="token punctuation">:</span> <span class="token operator">...</span><span class="token operator">...</span>
    <span class="token keyword">case</span> msg<span class="token punctuation">.</span>Code <span class="token operator">==</span> BlockHeadersMsg<span class="token punctuation">:</span> <span class="token operator">...</span><span class="token operator">...</span>
    <span class="token keyword">case</span> msg<span class="token punctuation">.</span>Code <span class="token operator">==</span> GetBlockBodiesMsg<span class="token punctuation">:</span> <span class="token operator">...</span><span class="token operator">...</span>
    <span class="token keyword">case</span> msg<span class="token punctuation">.</span>Code <span class="token operator">==</span> BlockBodiesMsg<span class="token punctuation">:</span> <span class="token operator">...</span><span class="token operator">...</span>
    <span class="token keyword">case</span> p<span class="token punctuation">.</span>version <span class="token operator">&gt;=</span> eth63 <span class="token operator">&amp;&amp;</span> msg<span class="token punctuation">.</span>Code <span class="token operator">==</span> GetNodeDataMsg<span class="token punctuation">:</span> <span class="token operator">...</span><span class="token operator">...</span>
    <span class="token keyword">case</span> p<span class="token punctuation">.</span>version <span class="token operator">&gt;=</span> eth63 <span class="token operator">&amp;&amp;</span> msg<span class="token punctuation">.</span>Code <span class="token operator">==</span> NodeDataMsg<span class="token punctuation">:</span> <span class="token operator">...</span><span class="token operator">...</span>
    <span class="token keyword">case</span> p<span class="token punctuation">.</span>version <span class="token operator">&gt;=</span> eth63 <span class="token operator">&amp;&amp;</span> msg<span class="token punctuation">.</span>Code <span class="token operator">==</span> GetReceiptsMsg<span class="token punctuation">:</span> <span class="token operator">...</span><span class="token operator">...</span>
    <span class="token keyword">case</span> p<span class="token punctuation">.</span>version <span class="token operator">&gt;=</span> eth63 <span class="token operator">&amp;&amp;</span> msg<span class="token punctuation">.</span>Code <span class="token operator">==</span> ReceiptsMsg<span class="token punctuation">:</span> <span class="token operator">...</span><span class="token operator">...</span>
    <span class="token keyword">case</span> msg<span class="token punctuation">.</span>Code <span class="token operator">==</span> NewBlockHashesMsg<span class="token punctuation">:</span> <span class="token operator">...</span><span class="token operator">...</span>
    <span class="token keyword">case</span> msg<span class="token punctuation">.</span>Code <span class="token operator">==</span> NewBlockMsg<span class="token punctuation">:</span> <span class="token operator">...</span><span class="token operator">...</span>
    <span class="token keyword">case</span> msg<span class="token punctuation">.</span>Code <span class="token operator">==</span> TxMsg<span class="token punctuation">:</span> <span class="token operator">...</span><span class="token operator">...</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token function">errResp</span><span class="token punctuation">(</span>ErrInvalidMsgCode<span class="token punctuation">,</span> <span class="token string">&quot;%v&quot;</span><span class="token punctuation">,</span> msg<span class="token punctuation">.</span>Code<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,63),r={href:"https://mindcarver.cn",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/blockchainGuide/",target:"_blank",rel:"noopener noreferrer"};function d(v,m){const a=l("ExternalLinkIcon");return o(),e("div",null,[i,n("blockquote",null,[n("p",null,[n("a",r,[s("https://mindcarver.cn"),p(a)]),s(" 最新发布")]),n("p",null,[n("a",k,[s("https://github.com/blockchainGuide/"),p(a)]),s(" 资料更新")])])])}const h=t(u,[["render",d],["__file","5.Etheric_fang_source_analysis_of_block_and_radio.html.vue"]]);export{h as default};