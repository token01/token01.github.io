---
title: 区块链之联盟链知识
shortTitle: 区块链之联盟链知识 
category:
  - 区块链
tag:
  - 区块链基础知识
description: 凤凰涅槃进阶之路 web3.0 区块链 区块链基础知识 P2P网络 Solidity 联盟链
head:
  - - meta
    - name: keywords
      content: web3.0 区块链 基础知识 P2P网络 Solidity 联盟链
---
-----------

* BSN 区块链服务网络（Blockchain-based Service Network）
  > 是一个跨云服务、跨门户、跨底层框架，用于部署和运行区块链应用的全球性公共基础设施网络，由国家信息中心、中国移动通信集团公司、中国银联股份有限公司、北京红枣科技有限公司共同发起
  [BSN培训](http://kb.bsnbase.com/webdoc/view/Pub4028813e711a7c39017185cacb7b5640.html)

* Hyperledger Fabric (有国密版Fabric)
* FISCO BCOS （支持国密）
* [CITA](https://github.com/citahub/cita)
* 梧桐链
* Brochain
* [XuperChain](https://github.com/xuperchain/xuperchain)

## [FISCO BCOS](https://github.com/FISCO-BCOS/FISCO-BCOS)

* 保障信息保密性、认证性、完整性、不可抵赖性，需采用CA的准入机制，并支持任意多级的证书结构。  
  默认采用三级的证书结构，自上而下分别为链证书、机构证书、节点证书。  
  * 链证书: 联盟链拥有唯一的链证书
    > 证书`ca.crt` , 私钥`ca.key` , 签发证书的序列号记录文件`ca.srl`

  * 机构证书：
    > 机构证书`agency.crt` , 机构私钥`agency.key` , `agency.srl`

  * 节点证书：由机构自己生产，每个机构都可以拥有多个节点

* 引入多群组架构，支持区块链节点启动多个群组，群组间交易处理、数据存储、区块共识相互隔离，保障区块链系统隐私性的同时，降低了系统的运维复杂度
  > 机构A、B、C所有节点构成一个区块链网络，运行业务1；一段时间后，机构A、B启动业务2，且不希望该业务相关数据、交易处理被机构C感知，有何解？

  一般理解群组个数可以达到整数上限，但由于硬件的限制，应采用这种极端的设计，机构可以为不同的业务使用不同的节点去加了对应群组来解决多业务问题。
  > 100个群组都落在一个节点上可能需要。64核，128g内存，百兆外网带宽，4T硬盘以上。这是基本的。如果业务有上量还得加

### 节点准入机制

CA黑白名单

* 群组节点：共识节点，观察节点
* 游离节点：完成网络准入但没有加入群组的节点，不参与共识和同步

#### 网络准入机制

#### 群组准入机制

**交易流程**

* 用户通过操作SDK或直接编写curl命令向所连接的节点发起交易。
* 节点收到交易后，若当前交易池未满则将交易附加至TxPool中并向自己所连的节点广播该交易；否则丢弃交易并输出告警。
* Sealer(打包器)会不断从交易池中取出交易，并立即将收集到的交易打包为区块并发送至共识引擎。
* 共识引擎调用BlockVerifier对区块进行验证并在网络中进行共识，BlockVerifier调用Executor执行区块中的每笔交易。当区块验证无误且网络中节点达成一致后，共识引擎将区块发送至BlockChain。
* BlockChain收到区块，对区块信息（如块高等）进行检查，并将区块数据与表数据写入底层存储中，完成区块上链。

**交易同步**

* 一笔交易通过channel或RPC发送到某节点上
* 收到交易的节点全量广播此交易给其它节点
* 其它节点收到交易后，为了保险起见，选择25%的节点再广播一次
* 节点收到广播过的交易，不会再次广播

### 国密算法

| |标准版FISCO BCOS| 国密版FISCO BCOS|
|----|-----|----|
|SSL链接| Openssl TLSv1.2协议| 国密TLSv1.1协议|
|签名验证| ECDSA签名算法| SM2签名算法|
|消息摘要算法 |SHA-256 SHA-3| SM3消息摘要算法|
|落盘加密算法| AES-256加密算法| SM4加密算法|
|证书模式| OpenSSL证书模式| 国密双证书模式|
|合约编译器| 以太坊solidity编译器| 国密solidity编译器|

[详细](https://fisco-bcos-documentation.readthedocs.io/zh_CN/latest/docs/design/features/guomi.html)

### [WeBASE](https://github.com/WeBankFinTech/WeBASE)

### [WeIdentity](https://github.com/WeBankFinTech/WeIdentity)

### [WeDPR](https://github.com/WeBankBlockchain/WeDPR-Lab-Core)
