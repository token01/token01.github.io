import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as n,a as e,b as l,d as a,e as t,r as s}from"./app.1ee57811.js";const d={},c=e("blockquote",null,[e("p",null,"浅谈共识算法|Istanbul BFT算法")],-1),u=e("p",null,[e("img",{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gnximfy066j30oo0gs0vk.jpg",alt:"931c0c9307f4692d69da24b7fe6e0bf3",loading:"lazy"})],-1),p=e("h1",{id:"引言",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#引言","aria-hidden":"true"},"#"),l(" 引言")],-1),h={href:"https://github.com/ethereum/EIPs/issues/650",target:"_blank",rel:"noopener noreferrer"},E={href:"https://blog.csdn.net/dianyangshu0904/article/details/102195413#%E6%BD%9C%E5%9C%A8%E9%97%AE%E9%A2%98",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/jpmorganchase/quorum/tree/master/consensus/istanbul",target:"_blank",rel:"noopener noreferrer"},P=t(`<h1 id="术语" tabindex="-1"><a class="header-anchor" href="#术语" aria-hidden="true">#</a> 术语</h1><ul><li><strong>Validator</strong>：块的验证者</li><li><strong>Proposer</strong>：块验证者中被选择用来出块的</li><li><strong>Round</strong>: 共识的轮数。一轮中 Proposer 开始提出一个一个出块建议，然后以提交区块结束。</li><li><strong>Proposal</strong>：新的块生成提议</li><li><strong>Sequence</strong>：提议的序号。当前序列号大于先前的；块高就是此提议的序列号。</li><li><strong>Backlog</strong>：存储未来的共识消息</li><li><strong>Round state</strong>: 特定sequence和轮次的共识消息，包括 pre-prepare 消息, prepare 消息, and commit 消息.</li><li><strong>Consensus proof</strong>：用来证明块已经通过共识处理的块签名</li><li><strong>Snapshot</strong>：上一个时期的验证者投票状态</li></ul><h3 id="ibft共识细节" tabindex="-1"><a class="header-anchor" href="#ibft共识细节" aria-hidden="true">#</a> IBFT共识细节</h3><p>Proposer 必须在每个 round中连续不断的 生成 block prorosal。</p><p>istanbul BFT 包括 3 个阶段的共识：PRE-PREPARE，PREPARE，COMMIT。</p><p>容错机制： N = 3F +1 ；N表示验证节点，F表示错误节点。</p><p>在每轮之前将会以循环的方式选择一个 validator 作为 proposer. 接着 proposer将会提出一个新的 block proposal 并且广播通过 pre-prepare 消息。一旦接受到 pre-prepare消息 ，validators将会进入到 pre-prepared 阶段并且广播 prepare 消息。这个步骤是为了确保 validators 运行在相同的 sequence 和相同的 round 中。当接收到2F+1 的Prepare消息时，validators 进入到 prepared并且广播 commit 消息。此步骤是通知其它节点接受建议的块并将块插入链。 最后，validator等待2F + 1 COMMIT消息进入COMMITTED状态，然后将块插入链。</p><p>注意：<strong>Istanbul中 的块是最终的，没有分叉，任何有效的块必须位于主链的某个位置</strong>。</p><p>为了防止故障节点从主链生成完全不同的链，每个验证器将2F + 1个接收到的COMMIT签名附加到标头中的extraData字段，然后将其插入链中， 因此，块是可自我验证的，并且也可以支持轻客户端。但是，动态extraData会导致块哈希计算出现问题。由于来自不同验证器的相同块可以具有不同的COMMIT签名集，因此同一块也可以具有不同的块散列。 为了解决这个问题，我们通过排除COMMIT签名部分来计算块哈希。 因此，我们仍然可以保持块/块哈希一致性，并将共识证明放在块头中。</p><h4 id="共识状态" tabindex="-1"><a class="header-anchor" href="#共识状态" aria-hidden="true">#</a> 共识状态</h4><p>Istanbul BFT是一种状态机复制算法。 每个验证器都维护一个状态机副本，以达到块一致性。</p><p>一共有以下几种状态：</p><ul><li><code>NEW ROUND</code>: Proposer发送新的 block proposal。 Validator等待PRE-PREPARE消息。</li><li><code>PRE-PREPARED</code>:验证器已收到PRE-PREPARE消息并广播PREPARE消息。 然后它等待2F + 1 个PREFARE或COMMIT消息。</li><li><code>PREPARED</code>: 验证器已收到2F + 1个PREPARE消息并广播COMMIT消息。 然后它等待2F + 1 COMMIT消息。</li><li><code>COMMITTED</code>:验证器已收到2F + 1个COMMIT消息，并能够将建议的块插入区块链。</li><li><code>FINAL COMMITTED</code>:新块已成功插入区块链，validator 已准备好进入下一轮。</li><li><code>ROUND CHANGE</code>:验证器正在等待同一个建议的轮数上的2F + 1个ROUND CHANGE消息。</li></ul><h4 id="状态转换" tabindex="-1"><a class="header-anchor" href="#状态转换" aria-hidden="true">#</a> 状态转换</h4><p><img src="http://ww1.sinaimg.cn/large/006tNc79gy1g64qqy79jqj30z60najwf.jpg" alt="image-20190819094215511" loading="lazy"></p><ul><li><code>NEW ROUND</code> -&gt; <code>PRE-PREPARED</code>: <ul><li><strong>Proposer</strong> 从txpool 中收集交易</li><li><strong>Proposer</strong>生成块提议并将其广播给验证者。 然后它进入PRE-PREPARED状态。</li><li>每个validator在收到具有以下条件的PRE-PREPARE消息后进入PRE-PREPARED： <ul><li>块提案来自有效的proposer。</li><li>块头有效</li><li>block proposal的sequence和round匹配validator的状态</li></ul></li><li><strong>Validator</strong>广播<code>PREPARE</code>消息给其他validators</li></ul></li><li><code>PRE-PREPARED</code> -&gt; <code>PREPARED</code>: <ul><li>Validator接收2F + 1个有效的PREPARE消息以进入PREPARED状态。 有效消息符合以下条件： <ul><li>sequence 和 round匹配</li><li>block hash匹配</li><li>消息来自于已知 validators</li></ul></li></ul></li><li><code>COMMITTED</code> -&gt; <code>FINAL COMMITTED</code>: <ul><li>validator 将 2F+1 个提交的签名放到 extraData中并且尝试将区块上链</li><li>插入成功后，Validator进入FINAL COMMITTED状态。</li></ul></li><li><code>FINAL COMMITTED</code> -&gt; <code>NEW ROUND</code>: <ul><li>验证器选择一个新的提议器并启动一个新的round timer 。</li></ul></li></ul><h4 id="round-change-flow" tabindex="-1"><a class="header-anchor" href="#round-change-flow" aria-hidden="true">#</a> Round change flow</h4><ul><li>3 个条件将会触发 ROUND CHANGE <ul><li>Round change timer 过期</li><li>无效 <code>PREPREPARE</code> 消息</li><li>块插入失败</li></ul></li><li>当验证器注意到上述条件之一适用时，它会广播ROUND CHANGE消息以及建议的 round number，并等待来自其他验证器的ROUND CHANGE消息。 建议的round number 根据以下条件选择： <ul><li>如果验证器已从其peers接收到ROUND CHANGE消息，则它将选择具有F + 1个ROUND CHANGE消息的最大 round number。</li><li>否则，它会选择1 +当前的round number作为建议的轮数。</li></ul></li><li>每当验证器在同一个建议的轮数上收到F + 1个ROUND CHANGE消息时，它就会将收到的消息与它自己的一个进行比较。 如果接收的数量较大，验证器将再次使用收到的号码广播ROUND CHANGE消息。</li><li>在相同的建议round number上接收到2F + 1个ROUND CHANGE消息后，验证器退出round change loop，计算新的提议者，然后进入NEW ROUND状态。</li><li>验证器跳出round change loop的另一个条件是它通过对等同步接收验证的块。</li></ul><h4 id="proposer-选择策略" tabindex="-1"><a class="header-anchor" href="#proposer-选择策略" aria-hidden="true">#</a> Proposer 选择策略</h4><p>目前我们支持两种策略：<strong>round robin</strong> 和 <strong>sticky proposer</strong>.。</p><ul><li>Round robin:在循环设置中，提议者将在每个块和round change中进行更改</li><li>Sticky proposer: 在 sticky proposer中, proposal只有在发生一轮变更时才会改变。</li></ul><h4 id="validator-列表投票" tabindex="-1"><a class="header-anchor" href="#validator-列表投票" aria-hidden="true">#</a> Validator 列表投票</h4><p>使用与Clique类似的验证器投票机制，并复制Clique EIP的大部分内容。 每个epoch交易都会重置验证器投票，这意味着如果授权或取消授权投票仍在进行中，则投票过程将被终止。</p><p>对于所有交易块：</p><ul><li>Proposer可以投一票来建议更改验证人名单。</li><li>每个目标受益人的最新提案仅保留一个验证人。</li><li>随着链条的进展，投票将被实时统计（允许同时提议）。</li><li>达到多数共识的proposals ,VALIDATOR_LIMIT立即生效。</li><li>无效的提案不会因客户端实现简单而受到惩罚。</li><li>一项生效的提案需要放弃该提案的所有未决投票（赞成和反对），并以 clean state 开始</li></ul><h4 id="未来的消息和backlog" tabindex="-1"><a class="header-anchor" href="#未来的消息和backlog" aria-hidden="true">#</a> 未来的消息和backlog</h4><p>在异步网络环境中，可以接收将来无法在当前状态下处理的消息。 例如，验证器可以在NEW ROUND上接收COMMIT消息。 我们将此类消息称为“未来消息”。 当验证程序收到将来的消息时，它会将消息放入其待办事项中，并尽可能在稍后尝试处理。</p><h4 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h4><p>为了加速共识过程，在接收PREFARE消息的2F + 1之前接收到2F + 1 COMMIT消息的验证器将跳转到COMMITTED状态，这样就不必等待进一步的PREPARE消息。</p><h4 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h4><p>我们定义以下常量：</p><ul><li><code>EPOCH_LENGTH</code>:检查点和重置待处理投票之后的块数。 <ul><li>建议30000使testnet保持类似于主要网络ethash时代。</li></ul></li><li><code>REQUEST_TIMEOUT</code>: 在以毫秒为单位进行轮次更改之前，每个达成一致的超时。</li><li><code>BLOCK_PERIOD</code>: 两个连续块之间的最小时间戳差异（秒）。</li><li><code>PROPOSER_POLICY</code>:提议者选择策略，默认为round robin.。</li><li><code>ISTANBUL_DIGEST</code>:固定的 magic number， 0x63746963616c2062797a616e74696e65206661756c7420746f6c6572616e6365用于Istanbul块识别的块头中的mixDigest。</li><li><code>DEFAULT_DIFFICULTY</code>: 默认块难度，设置为0x0000000000000001。</li><li><code>EXTRA_VANITY</code>: 固定数量的额外数据前缀字节预留给提议者。 <ul><li>建议保留当前额外数据容量和/或使用的32个字节。</li></ul></li><li><code>NONCE_AUTH</code>: magic nonce number 0xffffffffffffffff投票添加验证器。</li><li><code>NONCE_DROP</code>:magic nonce number 0x0000000000000000 投票移除验证器</li><li><code>UNCLE_HASH</code>:总是Keccak256（RLP（[]））作为叔叔在PoW之外没有意义。</li><li><code>PREPREPARE_MSG_CODE</code>: 固定编号0. PREPREPARE消息的消息代码。</li><li><code>COMMIT_MSG_CODE</code>: 固定编号1. COMMIT消息的消息代码。</li><li><code>ROUND_CHANGE_MSG_CODE</code>:固定号码2. ROUND CHANGE消息的消息代码。</li></ul><p>我们还定义了以下每块常量：</p><ul><li><code>BLOCK_NUMBER</code>: 链中的块高度，其中生成块的高度为0。</li><li><code>N</code>: 授权验证人数。</li><li><code>F</code>:允许的错误验证器数量。</li><li><code>VALIDATOR_INDEX</code>:当前授权验证器的排序列表中的块验证器的索引。</li><li><code>VALIDATOR_LIMIT</code>: 传递授权或取消授权提议的验证者数量。 <ul><li>必须是最低限额（N / 2）+ 1才能对链条达成多数共识。</li></ul></li></ul><h4 id="块头" tabindex="-1"><a class="header-anchor" href="#块头" aria-hidden="true">#</a> 块头</h4><p>我们没有为伊斯坦布尔BFT发明新的块头。 相反，我们跟随Clique重新调整ethash标头字段，如下所示：</p><ul><li><p><code>beneficiary</code>: 建议修改验证器列表的地址。</p><ul><li>应该通常用零填充，仅在投票时修改。</li><li>尽管如此，允许使用任意值（即使是无意义的值，例如投票给非验证者），以避免投票机制实施中的额外复杂性。</li></ul></li><li><p><code>nonce</code>:关于受益人领域定义的帐户的提议者提案。</p><ul><li>应该是NONCE_DROP建议取消授权受益人作为现有验证人。</li><li>应该是NONCE_AUTH建议授权受益人作为新的验证人。</li><li>必须填充零，NONCE_DROP或NONCE_AUTH</li></ul></li><li><p><code>mixHash</code>: 固定 magic number 0x63746963616c2062797a616e74696e65206661756c7420746f6c6572616e6365 用于伊斯坦布尔区块识别</p></li><li><p><code>ommersHash</code>:必须是UNCLE_HASH，因为在PoW之外，叔叔没有意义。</p></li><li><p><code>timestamp</code>:必须至少是父时间戳+ BLOCK_PERIOD</p></li><li><p><code>difficulty</code>:必须填写0x0000000000000001。</p></li><li><p><code>extraData</code>: 签名者和RLP编码的伊斯坦布尔额外数据的组合字段，其中伊斯坦布尔额外数据包含验证器列表，proposer seal和 commit seal。 伊斯坦布尔的额外数据定义如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code> <span class="token keyword">type</span> IstanbulExtra <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  Validators    <span class="token punctuation">[</span><span class="token punctuation">]</span>common<span class="token punctuation">.</span>Address  <span class="token comment">//Validator addresses</span>
  Seal          <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>   <span class="token comment">//Proposer seal 65 bytes</span>
  CommittedSeal <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>   <span class="token comment">//Committed seal, 65 * len(Validators) bytes</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此extraData将采用EXTRA_VANITY |的形式 ISTANBUL_EXTRA其中| 表示用于分隔vanity和伊斯坦布尔额外数据的固定索引（不是分隔符的实际字符）。</p><ul><li>第一个EXTRA_VANITY字节（固定）可以包含任意提议者vanity数据。</li><li>ISTANBUL_EXTRA字节是从RLP（IstanbulExtra）计算的RLP编码的伊斯坦布尔额外数据，其中RLP（）是RLP编码功能，而IstanbulExtra是伊斯坦布尔额外数据。 <ul><li><code>Validators</code>: 验证器列表，必须按升序排序。</li><li><code>Seal</code>: 提议者的header seal 签名。</li><li><code>CommittedSeal</code>:提交的签名列表作为共识证明</li></ul></li></ul></li></ul><h3 id="block-hash-proposer-seal-and-committed-seals" tabindex="-1"><a class="header-anchor" href="#block-hash-proposer-seal-and-committed-seals" aria-hidden="true">#</a> Block hash, proposer seal, and committed seals</h3><p>由于以下原因，Istanbul块哈希计算与ethash块哈希计算不同：</p><ol><li>提议者需要将提议者密封在extraData中以证明该块由所选提议者签名。</li><li>验证者需要将2F + 1个已提交的密封作为extraData中的共识证明，以证明该块已经达成共识。</li></ol><p>计算仍然类似于ethash块哈希计算，但我们需要处理extraData。 我们按如下方式计算字段：</p><h5 id="计算提议者seal" tabindex="-1"><a class="header-anchor" href="#计算提议者seal" aria-hidden="true">#</a> 计算提议者seal</h5><p>在提议者密封计算时，committed的密封仍然是未知的，因此我们计算密封与那些未知的密封空。 计算如下：</p><ul><li><code>Proposer seal</code>: <code>SignECDSA(Keccak256(RLP(Header)), PrivateKey)</code></li><li><code>PrivateKey</code>: Proposer&#39;s的私钥</li><li><code>Header</code>: 和ethash 的header一样，只不过extradata不一样</li><li><code>extraData</code>: <code>vanity | RLP(IstanbulExtra)</code>, 在IstanbulExtra<code>,</code>CommittedSeal<code>and</code>Seal\` 是空数组.</li></ul><h5 id="计算块哈希" tabindex="-1"><a class="header-anchor" href="#计算块哈希" aria-hidden="true">#</a> 计算块哈希</h5><p>在计算块哈希时，我们需要排除已提交的密封，因为该数据在不同的验证器之间是动态的。 因此，我们在计算哈希时使CommittedSeal为空数组。 计算如下：</p><ul><li><code>Header</code>: 和ethash 的header一样，只不过extradata不一样</li><li><code>extraData</code>: <code>vanity | RLP(IstanbulExtra)</code>, 在IstanbulExtra<code>,</code>CommittedSeal<code>and</code>Seal\` 是空数组.</li></ul><h5 id="共识证明" tabindex="-1"><a class="header-anchor" href="#共识证明" aria-hidden="true">#</a> 共识证明</h5><p>在将块插入区块链之前，每个验证器需要从其他验证器收集2F + 1个已提交的密封以构成共识证明。 一旦它收到足够的提交密封，它将填充IstanbulExtra中的CommittedSeal，重新计算extraData，然后将块插入区块链。 请注意，由于已提交的密封可能因不同的来源而不同，因此我们会在计算块哈希时排除该部分，如上一节所述。</p><p>Committed seal calculation:</p><p>committed seal由每个签名哈希的验证器以及其私钥的COMMIT_MSG_CODE消息代码计算。 计算如下：</p><ul><li><code>Committed seal</code>: <code>SignECDSA(Keccak256(CONCAT(Hash, COMMIT_MSG_CODE)), PrivateKey)</code>.</li><li><code>CONCAT(Hash, COMMIT_MSG_CODE)</code>: 连接 block hash and <code>COMMIT_MSG_CODE</code> bytes.</li><li><code>PrivateKey</code>: 签署验证者的私钥。</li></ul><h3 id="块锁定机制" tabindex="-1"><a class="header-anchor" href="#块锁定机制" aria-hidden="true">#</a> 块锁定机制</h3><p>引入锁定机制以解决安全问题。 通常，当提议者用块B锁定在某个高度H时，它只能为高度H提出B.另一方面，当验证器被锁定时，它只能在B上投票选择高度H.</p><h4 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h4><p>锁定锁（B，H）包含一个块及其高度，这意味着它的所有验证器当前被锁定在某个块B和高度H.在下面，我们还使用+表示多于和 - 表示小于。 例如，+ 2/3验证器表示超过三分之二的验证器，而-1/3验证器表示不到三分之一的验证器。</p><h4 id="lock-and-unlock" tabindex="-1"><a class="header-anchor" href="#lock-and-unlock" aria-hidden="true">#</a> Lock and unlock</h4><ul><li>Lock:验证器在高度为“H”的块“B”上接收到“2F + 1”“PREPARE”消息时被锁定。</li><li>Unlock: 验证器在高度“H”处解锁，并在未能将块“B”插入块链时阻止“B”。</li></ul><h4 id="protocol-2-3-validators-are-locked-with-lock-b-h" tabindex="-1"><a class="header-anchor" href="#protocol-2-3-validators-are-locked-with-lock-b-h" aria-hidden="true">#</a> Protocol (<code>+2/3</code> validators are locked with <code>Lock(B,H)</code>)</h4><ul><li><p><code>PRE-PREPARE</code>:</p><ul><li><p><strong>Proposer</strong>:</p><ul><li><p>情况1，提议者被锁定：在B上广播PRE-PREPARE，并进入PREPARED状态。</p></li><li><p>情况2，提议者未被锁定：在块B&#39;上广播PRE-PREPARE。</p></li></ul></li><li><p><strong>Validator</strong>:</p><ul><li>情况1，在现有块上接收PRE-PREPARE：忽略。 <ul><li>注意：它最终会导致轮次更改，并且提议者将通过同步获得旧块。</li></ul></li><li>情况2，验证器被锁定： <ul><li>案例2.1，在B上收到PRE-PREPARE：在B上广播PREPARE</li><li>案例2.2，在B&#39;上接收PRE-PREPARE：广播ROUND CHANGE。</li></ul></li><li>情况3，验证器未锁定： <ul><li>情况3.1，在B上接收PRE-PREPARE：在B上广播PREPARE</li><li>案例3.2，在B&#39;上接收PRE-PREPARE：在B&#39;上广播PREPARE。 <ul><li>注意：由于+2/3被锁定在B并且这将导致全面更改，因此此共识轮将最终进行全面更改。</li></ul></li></ul></li></ul></li></ul></li><li><p><code>PREPARE</code>:</p><ul><li>案例1，验证器被锁定： <ul><li>情况1.1，在B上接收PREPARE：在B上广播COMMIT，并进入PREPARED状态。 <ul><li>注意：这不应该发生，它应该跳过这一步并在PRE-PREPARE阶段输入PREPARED。</li></ul></li><li>案例1.2，在B&#39;上收到PREPARE：忽略。 <ul><li>注意：B&#39;上不应该有+1/3 PREPARE，因为+2/3被锁定在B.因此B&#39;上的共识轮将导致轮次更改。 验证器不能直接在此广播ROUND CHANGE，因为此PREPARE消息可能来自故障节点。</li></ul></li></ul></li><li>情况2，验证器未锁定： <ul><li>情况2.1，在B上收到PREPARE：在B上等待2F + 1 PREPARE消息 <ul><li>注意：在接收2F + 1 PREPARE消息之前，它很可能会收到2F + 1 COMMIT消息，因为有+2/3验证器被锁定在B.在这种情况下，它将直接跳转到COMMITTED状态。</li></ul></li><li>情况2.2，在B&#39;上收到PREPARE：在B&#39;上等待2F + 1 PREPARE消息。 <ul><li>Note: This consensus will eventually get into round change since <code>+2/3</code> validators are locked on <code>B</code> and which would lead to round change.</li></ul></li></ul></li></ul></li><li><p><code>COMMIT</code>:</p><ul><li>验证者必须被锁定： <ul><li>情况1，在B上收到COMMIT：等待2F + 1 COMMIT消息。</li><li>案例2，B&#39;收到COMMIT：不应该发生。</li></ul></li></ul></li></ul><h4 id="锁定情况下" tabindex="-1"><a class="header-anchor" href="#锁定情况下" aria-hidden="true">#</a> 锁定情况下</h4><ul><li>Round change: <ul><li>Case 1, <code>+2/3</code> are locked: <ul><li>如果提议者被锁定，则建议B.</li><li>否则它会提出B&#39;，但这将导致另一轮变革。</li><li>结论：最终B将由诚实的验证者承诺。</li></ul></li><li>Case 2, <code>+1/3 ~ 2/3</code> are locked: <ul><li>如果提议者被锁定，则建议B.</li><li>否则它会提出B&#39;。 但是，由于+1 / 3被锁定在B，因此没有验证器可以在B&#39;上接收2F + 1 PREPARE，这意味着没有验证器可以锁定在B&#39;。 此外，那些+1 / 3锁定验证器将不会响应B&#39;并最终导致全面更改。</li><li>结论：最终B将由诚实的验证者承诺。</li></ul></li><li>Case 3, <code>-1/3</code> are locked: <ul><li>如果提议被锁定，则建议B.</li><li>否则它会提出B&#39;。 如果+2/3在B&#39;上达成共识，那些锁定的-1/3将通过同步获得B&#39;并移动到下一个高度。 否则，将会有另一轮变更。</li><li>结论：它可以是B或其他块B&#39;最终提交。</li></ul></li></ul></li><li>插入失败导致的round change： <ul><li>它将属于上述一轮变更案例之一。 <ul><li>如果块实际上是坏的（不能插入区块链），最终+2/3验证器将在H处解锁块B并尝试建议新的块B&#39;。</li><li>如果块是好的（可以插入区块链），那么它仍然是上述圆形更改案例之一。</li></ul></li></ul></li><li>-1/3验证器成功插入块，但其他验证器成功触发循环更改，这意味着+1 / 3仍锁定在锁定（B，H） <ul><li>案例1，提议者已插入B：提议者将在H&#39;提出B&#39;，但+1 / 3被锁定在B，因此B&#39;将不会通过共识，这最终将导致轮次更改。 其他验证器将对B执行共识或通过同步获得B.</li><li>案例2，提议者未插入B： <ul><li>案例2.1，提议者被锁定：提议者提出B.</li><li>案例2.2，提议者未被锁定：提议者将在H处提出B&#39;。其余与上述案例1相同。</li></ul></li></ul></li><li>+1/3验证器成功插入块，-2 / 3试图在H处触发圆形更改 <ul><li>案例1，提议者已插入B：提议者将在H&#39;提出B&#39;，但在+1/3通过同步获得B之前不会通过共识。</li><li>案例2，提议者未插入B： <ul><li>案例2.1，提议者被锁定：提议者提出B.</li><li>案例2.2，提议者未被锁定：提议者在H处提出B&#39;。其余与上述案例1相同。</li></ul></li></ul></li><li>+2/3验证器成功插入块，-1 / 3试图在H处触发圆形更改 <ul><li>案例1，提议者已插入B：提议者将在H&#39;提出B&#39;，这可能会导致成功的共识。 然后那些-1/3需要通过同步获得B.</li><li>案例2，提议者未插入B： <ul><li>案例2.1，提议者被锁定：提议者提出B.</li><li>案例2.2，提议者没有被锁定：提议者在H处建议B&#39;。因为+2/3已经在H处有B，所以这一轮将导致轮次改变。</li></ul></li></ul></li></ul><h1 id="存在的问题" tabindex="-1"><a class="header-anchor" href="#存在的问题" aria-hidden="true">#</a> 存在的问题</h1>`,63),b={href:"https://github.com/jpmorganchase/quorum/issues/305",target:"_blank",rel:"noopener noreferrer"},g={href:"https://arxiv.org/pdf/1901.07160.pdf",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,"没有激励机制",-1),_=e("p",null,"传统上，验证者需要紧密连接才能达到稳定的共识结果，这意味着所有验证者需要彼此直接连接; 但是，在实际的网络环境中，很难实现稳定和恒定的p2p连接。 为了解决这个问题，伊斯坦布尔BFT实施了八卦网络来克服这种限制。 在八卦网络环境中，所有验证器只需要弱连接，这意味着当它们直接连接或者它们之间连接有一个或多个验证器时，任何两个验证器都会被连接。 共识消息将在验证器之间中继。",-1),B=e("hr",null,null,-1),A=e("h1",{id:"参考",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),l(" 参考")],-1),C={href:"https://github.com/blockchainGuide",target:"_blank",rel:"noopener noreferrer"},f={href:"https://arxiv.org/pdf/1901.07160.pdf",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/ethereum/EIPs/issues/650",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/ConsenSys/quorum/issues/305",target:"_blank",rel:"noopener noreferrer"},O={href:"https://docs.goquorum.consensys.net/en/stable/Concepts/Consensus/IBFT/",target:"_blank",rel:"noopener noreferrer"};function k(N,M){const i=s("ExternalLinkIcon");return r(),n("div",null,[c,u,p,e("p",null,[e("a",h,[l("Istanbul BFT"),a(i)]),l("作为BFT类算法的一种已经有过在以太坊上的实践。虽然Istanbul目前还存在一些"),e("a",E,[l("潜在的问题"),a(i)]),l("，但其算法思想和实现还是值得学习和借鉴的。")]),e("blockquote",null,[e("p",null,[l("源代码："),e("a",R,[l("https://github.com/jpmorganchase/quorum/tree/master/consensus/istanbul"),a(i)])])]),P,e("ul",null,[e("li",null,[e("a",b,[l("Fail-Stop failures"),a(i)])]),e("li",null,[e("a",g,[l("这篇文章详细分析了IBFT"),a(i)])]),m]),_,B,A,e("blockquote",null,[e("p",null,[e("a",C,[l("https://github.com/blockchainGuide"),a(i)]),l(" （文章合集最终修订版，会因为文章内容勘误不断更新，建议关注）")]),e("p",null,[e("a",f,[l("https://arxiv.org/pdf/1901.07160.pdf"),a(i)]),l(" （IBFT论文）")]),e("p",null,[e("a",I,[l("https://github.com/ethereum/EIPs/issues/650"),a(i)])]),e("p",null,[e("a",T,[l("https://github.com/ConsenSys/quorum/issues/305"),a(i)])]),e("p",null,[e("a",O,[l("https://docs.goquorum.consensys.net/en/stable/Concepts/Consensus/IBFT/"),a(i)]),l(" （quorum的官方的文档）")])])])}const F=o(d,[["render",k],["__file","9.Istanbul_BFT.html.vue"]]);export{F as default};