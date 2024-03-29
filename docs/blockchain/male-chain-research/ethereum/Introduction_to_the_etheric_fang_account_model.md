---
title: 浅谈以太坊之账户模型
shortTitle: 浅谈以太坊之账户模型
category:
  - 区块链
tag:
  - 浅谈以太坊源码分析
description: 凤凰涅槃进阶之路 web3.0 区块链 区块链基础知识  
head:
- - meta
  - name: keywords
    content: web3.0 区块链 基础知识 P2P网络 
---
> 浅谈以太坊之账户模型

## 账户类型

### 外部账户

外部账户(`EOAs`)：通过独立私钥创建，无法进行多签。

外部账户是拥有以太币余额的，它是由自己的私钥控制，且可以发送交易以及执行合约代码，注意没有与之相关的代码，也可以进行多重签名。

### 合约账户

合约帐户(`contract account`)：由 **SHA3** 哈希算法生成。

合约账户是由合约创建或者外部账户创建，一旦创建成功会被分配一个账户地址。并且是只能通过外部账户来调用合约执行合约代码。

### 两者之间区别

|   item   | EOAs | contract account     |
| :------: | :--: | -------------------- |
| 私钥生成 |  √   | ×                    |
| 拥有余额 |  √   | √                    |
| 拥有代码 |  ×   | √                    |
| 多重签名 |  ×   | √                    |
| 控制方式 | 私钥 | 通过外部账户执行合约 |

-------

## 合约账户地址生成

合约地址生成算法有目前有两种：

①：通过创建者的地址和该交易的随机数进行哈希后截取生成

> `Keccak256(rlp([sender,nonce])[12:]`

```go
func CreateAddress(b common.Address, nonce uint64) common.Address {
    data, _ := rlp.EncodeToBytes([]interface{}{b, nonce})
    return common.BytesToAddress(Keccak256(data)[12:])
}
```

②：为了不与第一种发生地址冲突，部署合约前就可以知道确切的合约地址 ，详情请查看 [EIP1014](https://eips.ethereum.org/EIPS/eip-1014)

> `keccak256( 0xff ++ address ++ salt ++ keccak256(init_code))[12:]`

```go
func CreateAddress2(b common.Address, salt [32]byte, inithash []byte) common.Address {
    return common.BytesToAddress(Keccak256([]byte{0xff}, b.Bytes(), salt[:], inithash)[12:])
}
```

### 简单应用

```go
var util = require('ethereumjs-util');

//根据发送者地址和nonce求取生成的新合约的地址

//方法一：先RLP编码，再Hash，截取Hash值的后20个字节
var sender = "a990077c3205cbDf861e17Fa532eeB069cE9fF96";
var nonce = 0;   

//由于RLP编码规则，当nonce==0时，RLP编码要使用null
var buf = [Buffer.from(sender, "hex"), nonce == 0 ? null : nonce];
var addr1 = util.sha3(util.rlp.encode(buf)).toString("hex").slice(-40);

console.log(addr1);

//方法二
var addr2 = util.generateAddress(Buffer.from(sender, "hex"), nonce).toString("hex");
console.log(addr2);
```

当我们想把一个合约部署到一个固定的地址上时，我们可以通过使用指定的`sender`和`nonce`就可以做得到。比如：[EIP1820](https://eips.ethereum.org/EIPS/eip-1820)和[EIP 2470](https://eips.ethereum.org/EIPS/eip-2470)正是这么做的。

------

## 如何判断一个地址为合约地址

`EVM` 提供了一个操作码 `EXTCODESIZE`，用来获取地址相关联的代码长度，若是外部账号地址，则没有代码返回。

```go
function isContract(address addr) internal view returns (bool) {
    uint256 size;
    assembly { size := extcodesize(addr) }
    return size > 0;
  }
```

若是在合约外部判断，则可以使用以下方式判断：

①：web3

```go
web3.eth.getCode("0x8415A51d68e80aebb916A6f5Dafb8af18bFE2F9d")
"0x"
```

②:JSON-RPC

```go
eth_getcode
```

`getCode`用来获取参数地址所对应合约的代码，若参数是外部账号地址，则返回**0x,** 若参数是合约，则返回对应的**字节码**。

注意：如果一个地址没有代码关联，并不能肯定这个地址是外部账户地址还是合约地址，因为有可能代码还没有部署上链。如果一个地址关联有代码，那它肯定是合约地址。

### 常见需求解决

> 只允许外部账户调用我们的合约，不允许合约账户调用我们的合约??

解决方式：

```go
require(tx.origin == msg.sender)
```

-----

## 账户数据结构

不管是外部账户还是合约账户均是采取此结构。但是外部账户无内部存储数据和合约代码，即 `CodeHash` 为空值。

```go
type Account struct {
 Nonce    uint64
 Balance  *big.Int
 Root     common.Hash 
 CodeHash []byte
}
```

- Nonce：如果是外部账户，`nonce`代表从此账户地址发送的**交易序号**。如果是合约账户，nonce代表此账户创建的**合约序号**
- Balance：此地址拥有`Wei`的数量, *1Ether=10^18Wei*
- Root: `Merkle Patricia Tree` 的根节点`Hash`值,默认空值。
- CodeHash：此账户`EVM`代码的`hash`值。对于合约账户，就是被`Hash`的代码；对于外部拥有账户，c是一个空字符串的`Hash`值

## 账户数据存储

```go
import(...)
var toAddr =common.HexToAddress
var toHash =common.BytesToHash

func main()  {
    statadb, _ := state.New(common.Hash{},
        state.NewDatabase(rawdb.NewMemoryDatabase()))// ❶

    acct1:=toAddr("0x0bB141C2F7d4d12B1D27E62F86254e6ccEd5FF9a")// ❷
    acct2:=toAddr("0x77de172A492C40217e48Ebb7EEFf9b2d7dF8151B")

    statadb.AddBalance(acct1,big.NewInt(100))
    statadb.AddBalance(acct2,big.NewInt(888))

    contract:=crypto.CreateAddress(acct1,statadb.GetNonce(acct1))//❸
    statadb.CreateAccount(contract)
    statadb.SetCode(contract,[]byte("contract code bytes"))//❹

    statadb.SetNonce(contract,1)
    statadb.SetState(contract,toHash([]byte("owner")),toHash(acct1.Bytes()))//❺
    statadb.SetState(contract,toHash([]byte("name")),toHash([]byte("ysqi")))

    statadb.SetState(contract,toHash([]byte("online")),toHash([]byte{1})
    statadb.SetState(contract,toHash([]byte("online")),toHash([]byte{}))//❻

    statadb.Commit(true)//❼
    fmt.Println(string(statadb.Dump()))//❽
}
```

上面代码中，我们创建了三个账户，并且提交到数据库中。最终打印出当前数据中所有账户的数据信息：

- ❶ 一行代码涉及多个操作。首先是创建一个内存KV数据库，再包装为 stata 数据库实例， 最后利用一个空的DB级的`StateRoot`，初始化一个以太坊 statadb。
- ❷ 定义两个账户 acct1和acct2，并分别添加100和888到账户余额。
- ❸ 模拟合约账户的创建过程，由外部账户 acct1 创建合约账户地址，并将此地址载入 statadb。
- ❹ 在将合约代码加入刚刚创建的合约账户中，在写入合约代码的同时， 会利用`crypto.Keccak256Hash(code)`计算合约代码哈希，保留在账户数据中。
- ❺ 模拟合约执行过程，涉及修改合约状态，新增三项状态数据`owner`,`name`和`online`，分别对应不同值。
- ❻ 这里和前面不同的是，是给状态`online`赋值为空`[]byte{}`，因为所有状态的默认值均是`[]byte{}`， 在提交到数据库时，如Leveldb 认为这些状态无有效值，会从数据库文件中删除此记录。 因此，此操作实际是一个删除状态`online`操作。
- ❼ 上面所有操作，还都只是发生在 statdb 内存中，并未真正的写入数据库文件。 执行`Commit`，才会将关于 statadb 的所有变更更新到数据库文件中。
- ❽ 一旦提交数据，则可以使用 `Dump` 命令从数据库中查找此 stata 相关的所有数据，包括所有账户。 并以 JSON 格式返还。这里，我们将返还结果直接打印输出。

代码执行输出结果如下:

```go
{
    "root": "3a25b0816cf007c0b878ca7a62ba35ee0337fa53703f281c41a791a137519f00",
    "accounts": {
        "0bb141c2f7d4d12b1d27e62f86254e6cced5ff9a": {
            "balance": "100",
            "nonce": 0,
            "root": "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
            "codeHash": "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
            "code": "",
            "storage": {}
        },
        "77de172a492c40217e48ebb7eeff9b2d7df8151b": {
            "balance": "888",
            "nonce": 0,
            "root": "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
            "codeHash": "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
            "code": "",
            "storage": {}
        },
        "80580f576731dc1e1dcc53d80b261e228c447cdd": {
            "balance": "0",
            "nonce": 1,
            "root": "1f6d937817f2ac217d8b123c4983c45141e50bd0c358c07f3c19c7b526dd4267",
            "codeHash": "c668dac8131a99c411450ba912234439ace20d1cc1084f8e198fee0a334bc592",
            "code": "636f6e747261637420636f6465206279746573",
            "storage": {
                "000000000000000000000000000000000000000000000000000000006e616d65": "8479737169",
                "0000000000000000000000000000000000000000000000000000006f776e6572": "940bb141c2f7d4d12b1d27e62f86254e6cced5ff9a"
            }
        }
    }
}
```

我们看到这些显示数据，直接对应我们刚刚的所有操作。 也只有合约账户才有 `storage` 和 `code`。而外部账户的`codeHash`和`root`值相同，是一个默认值。

## 账户模型的优缺点

优点：

1. 合约以代码形式保存在 `Account` 中，并且 `Account` 拥有自身状态。这种模型具有更好的可编程性。
2. 批量交易的成本较低。设想矿池向矿工支付手续费，`Account` 模型可以通过合约的方式降低成本。

缺点：

1. `Account` 模型交易之间没有依赖性，需要解决重放问题。
2. 对于实现闪电网络/雷电网络，`Plasma` 等，用户举证需要更复杂的 `Proof` 证明机制，子链向主链进行状态迁移需要更复杂的协议。

## 参考

> <https://mindcarver.cn/>
>
> < />
>
> <https://learnblockchain.cn/books/geth/part/account.html>
