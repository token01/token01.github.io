---
title: 区块链与随机数
shortTitle: 区块链与随机数 
category:
  - 区块链
tag:
  - 区块链基础知识
description: 凤凰涅槃进阶之路 web3.0 区块链 区块链基础知识
head:
  - - meta
    - name: keywords
      content: web3.0 区块链 基础知识
---
## 计算机的随机数

理论上计算机是无法真正生成随机数的，给它相同的输入，它都应该是同样的输出。  
为了生成随机数(Random numbers)，计算机将依赖于 seed (种子)：用于获取输出的输入 (input)。  
种子可以是:  
    **屏幕上鼠标光标的移动的像素位置** (在500万像素屏幕中，需要重复完全一样的鼠标运动轨迹，这种任务对于人类完成度几乎是不可能的);
    大气的噪音、宇宙背景辐射、放射物的衰变期、量子塌缩现象熔岩灯。  
在种子之上，计算机将执行数学运算并最终得出一个人类无法预测的数字。  

> [BitAddress](https://www.bitaddress.org/) 一个开源的比特币钱包工具，他的 seed 值就是采集鼠标轨迹来完成  
> [random.org](https://www.random.org/)大气噪音生成随机数,他用录音设备获得大气中的声波，再检测其细微变化作为生成随机数的熵源  
> [Cloudflare](https://gizmodo.com/one-of-the-secrets-guarding-the-secure-internet-is-a-wa-1820188866) 内部不定形状的蜡滴的缓慢流动。[Cloudflare](https://www.cloudflare.com/zh-cn/learning/ssl/lava-lamp-encryption/) 利用摄像头监视熔岩灯，拍摄视频和照片，然后将其转变成无法预测的随机比特流，再用它生成密钥  

区块链中没有鼠标、传感器或者运动比赛结果预测。更重要的是，即使一个节点到达某个随机数，但该随机数必须与区块链的所有其他节点的随机数相同(必须产生具有一致性的随机性)，不然无法验证。  

## 区块链中的随机数

> 区块链中随机数的应用场景：  
>
> - 公平的决定出块权力，维持一致性共识。部分PoW与PoS机制下，依靠随机数选定出块者或者出块组的，包括DPoS机制下的循环出块的顺序，也是依靠随机数决定  
> - 私钥的生成。目前私钥只要由各钱包自定随机数方法生成，存在较大安全隐患  
> - 链上应用的随机数源。保证博彩、游戏、抽奖、分发、调查等应用的公平公正，此类容易被黑客攻击  
> - 数据加密。链上数据因为是公开审查的，需要强度较高的加密，通过足够强的随机数确保链上数据的隐私与安全
>
### 区块哈希

依赖区块哈希 (block hash) 来处理随机性。因为哈希值是未知的、随机的，但在所有节点上都是相同的，所以对于基本可证明公平的赌博来说，哈希值可以作为随机性的来源。

但是如果操作区块 hash 的利益大于旷工挖到区块后的奖励，那么旷工完全就有动机进行恶意行为。更严重的是，在权益证明 (PoS) 系统中，由于生成一个区块几乎不需要计算时间或能量，矿工 (验证者) 可以很容易地继续生成数千个区块，直到获得一个他们喜欢的哈希值，并将这个哈希值进行提交。  
这也适用于验证者的选择。如果当前负责生产某个区块的验证者能够通过某种方式进行操纵，使得该区块哈希成为一个能够再次选中该验证者 (或者由该验证控制的另一个验证者客户端) 的种子，使该验证者继续成为提议区块的验证者，那么该验证者就可以一直提议区块，将其他的验证者挡在主要的利润之外！  

### 可验证随机函数 VRF

Verifiable Random Function
> 生成一对公私钥，分别为pri_key和pub_key  
> 计算hash_value=VRF_HASH(pri_key, message)  
> 计算proof_value=VRF_PROOF(pri_key, message)  
> 现在将hash_value和proof_value提供给验证者  
> 验证者拿到hash_value和proof_value计算hash_value=VRF_P2H(proof_value)  
> 如果成功，则验证者计算VRF_VERIFY(pub_key, message, proof)  
> 如果返回true则表示验证通过，否则验证失败

就是在不暴露私钥的情况下，验证hash_value和message是否匹配

#### 案例分析

* [可信预言机Truora VRF](https://mp.weixin.qq.com/s/6v-PCIEpspfUX8sqS6mq6w)
- [可信预言机Truora](https://mp.weixin.qq.com/s/5ZYKv0BBX1j18H6AAePZaQ)
- [Truora](https://truora.readthedocs.io/)
- [Truora Github](https://github.com/WeBankBlockchain/Truora-Service)

### ETH2.0 方案 RANDAO + VDF

**RANDAO** 是一个基于以太坊的项目，可以理解是一个智能合约，简单理解一下：当用户通过储存质押（m个ETH）成为验证者之，该用户将选择一个由自己选择的随机数。当需要为某个区块公布其随机数时，将系统中所有随机数加起来就可以得到一个全新的随机数。  
但即使在这种情况下，最后公布的数字对最终的随机数也会有一定程度的影响。房间里的最后一个人会记住之前每个人公布的数字，如此一来，就可以知道加上 (或者不加上) 他提供的数字之后的最终随机数的结果。  
这里只是快速了解`randao`项目，他其中还包含有经济惩罚等的各种措施保证，更具体的设计可以找白皮书。

**VDF** (可验证延迟函数) Verifiable Delay Function  
它具有几个特性：
- 串行性，抗矿池，任务不可分配。矿池将任务合理的分配给每个加入矿池的旷工，以达到并行计算的能力，大大提高解题速度。而VDF，如果要计算出第三级结果，那就必须先计算出第一级和第二级的结果，无法在多台计算机上并行地进行此计算，因为每个新的输入都依赖于之前的输出。
- 计算难度高，结果有延迟，预先确定的计算时间。每个输出都需要预先确定的计算时间。以太坊2.0阶段，这个 VDF 被定义为102分钟，通过引入这种延迟，并使计算的时间要长于验证者可以通过影响某个随机数而获得利益的时间，我们就可以消除最后一级的随机性偏差。
- 验证简单。VDF的运行过程可以是困难且耗时的，但是检验结果时是足够快的

### 其他随机数项目

* Algorand
- Cardano
- Dfinity
