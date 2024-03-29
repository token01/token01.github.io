---
title: 浅谈libp2p网络之multiAddress
shortTitle: 浅谈libp2p网络之multiAddress
category:
  - 区块链
tag:
  - 浅谈libp2p网络
description: 凤凰涅槃进阶之路 web3.0 区块链 区块链基础知识 P2P网络 以太坊白皮书
head:
- - meta
  - name: keywords
    content: web3.0 区块链 基础知识 P2P网络 以太坊白皮书
---

## 概念

libp2p区分了peer 的身份和位置。peer 的身份是稳定的、可验证的，并且在对等方的整个生命周期内有效， peer 身份源于对等id规范中描述的公钥。

在特定的网络上，在特定的时间点，peer可能有一个或多个位置，可以使用地址表示。例如，可以通过TCP端口1234上7.7.7.7的全局IPv4地址访问.

Libp2p 是不受传输限制的，不单单是只支持tcp/udp的网络。为了实现这个目标，而无需专门评估每个寻址方案，LIBP2P使用MultiaDDR以**自我描述方式**为所有受支持的传输协议编码网络地址。[multiaddr格式以及其实现](https://github.com/multiformats/multiaddr)，

多地址在整个libp2p中用于编码网络地址。当地址需要在进程之间共享或交换时，它们被编码为multiaddr的二进制表示。

当交换地址时，对等端发送一个包含其网络地址和对等端id的多地址，格式如下：

```
/ip4/7.7.7.7/tcp/1234/p2p/QmYyQSo1c1Ym7orWxLYvCrM2EmxFTANf8wXmmE7DWjhx5N
```

多地址是可以遍历到某个目标的指令序列。

例如，/ip4/7.7.7.7/tcp/1234多地址以ip4开头，这是需要地址的最低级别协议。tcp协议运行在ip4之上，所以它是下一个。

上面的multiaddr由两个组件组成，/ip4/7.7.7.7组件和/tcp/1234组件。不可能再分开一个/仅ip4是无效的多地址，因为ip4协议被定义为需要32位地址。同样，tcp需要16位端口号。

尽管我们将/ip4/7.7.7.7和/tcp/1234称为较大tcp/IP地址的“组件”，但根据multiaddr规范，它们实际上都是有效的多地址。然而，并非每个语法上有效的多址都是网络中进程的功能描述。正如我们所看到的，即使是一个简单的TCP/IP连接也需要将两个多地址合并为一个。有关如何组合多地址的信息，请参阅“组合多地址”一节，有关描述有效传输地址的组合，请参阅传输多地址一节。

multiaddr协议表包含所有当前定义的协议及其地址组件的长度。