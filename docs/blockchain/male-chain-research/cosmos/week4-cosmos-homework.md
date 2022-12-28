
源码地址：
### 具体执行步骤
**1.**  添加IBC发送数据包和确认数据包的结构。添加具体执行修改内容

```
ignite scaffold packet updatePost postID title content --ack postID --module blog

```

```

→ ignite scaffold packet updatePost postID title content --ack postID --module blog
Your saved project changes have not been committed.
To enable reverting to your current state, commit your saved changes.
Do you want to proceed without committing your saved changes: y

modify proto/planet/blog/packet.proto
modify proto/planet/blog/tx.proto
modify x/blog/client/cli/tx.go
create x/blog/client/cli/tx_update_post.go
create x/blog/keeper/msg_server_update_post.go
create x/blog/keeper/update_post.go
modify x/blog/module_ibc.go
modify x/blog/types/codec.go
modify x/blog/types/events_ibc.go
create x/blog/types/messages_update_post.go
create x/blog/types/messages_update_post_test.go
create x/blog/types/packet_update_post.go

🎉 Created a packet `updatePost`.
```


**2.** 在proto/blog/packet.proto目录下修改`IbcPostPacketData`，添加创建人string `Creator`=4， 并重新编译proto文件。
![image.png](https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/202212290015517.png)


执行编译器
```
→ ignite chain build
Cosmos SDK's version is: v0.46.6

🗃  Installed. Use with: planetd
```

**3.** 修改keeper方法中的`OnRecvIbcPostPacket `。

```
id := k.AppendPost(
        ctx,
        types.Post{
            Creator: packet.SourcePort + "-" + packet.SourceChannel + "-" + data.Creator,
            Title:   data.Title,
            Content: data.Content,
        },
    )

    packetAck.PostID = strconv.FormatUint(id, 10)

```


![image.png](https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/202212290017809.png)






### 配置文件

### 启动链命令（1）
```
Your saved project changes have not been committed.
To enable reverting to your current state, commit your saved changes.
Do you want to proceed without committing your saved changes: y

  Blockchain is running
  
  ✔ Added account alice with address cosmos16atdm3d7ffafvxjsl7phw0j9cfu3q2e52jmfk5 and mnemonic:
    autumn sister just pumpkin unfold choose thumb club panther dutch unique spawn
    fun inch tell gauge neglect sniff proud oyster funny spike round side         
  
  ✔ Added account bob with address cosmos1k9y55qjgtzq98km8f70hwqjzllga93e032t4sf and mnemonic:
    honey labor naive eight pupil false apology check body bid utility certain      
    pencil barrel drive library lesson response kidney egg stable enough ribbon talk
  
  🌍 Tendermint node: http://0.0.0.0:26657
  🌍 Blockchain API: http://0.0.0.0:1317
  🌍 Token faucet: http://0.0.0.0:4500
  
  ⋆ Data directory: /Users/sunzhenya/.earth
  ⋆ App binary: /Users/sunzhenya/Work/go/bin/planetd
  
  Press the 'q' key to stop serve

```

### 启动链命令（2）

```
→ ignite chain serve -c mars.yml
Your blockchain config version is v0 and the latest is v1.
Would you like to upgrade your config file to v1: y
Your saved project changes have not been committed.
To enable reverting to your current state, commit your saved changes.
Do you want to proceed without committing your saved changes: y


  Blockchain is running
  
  ✔ Added account alice with address cosmos1t4fmwaqwpvx572u5a5fsu8gmqrhz0qtca56kx3 and mnemonic:
    wall warfare route butter pulse double elevator chicken hero glad surge nice
    neglect unit twice plunge remain vital smoke sorry crumble sweet valve siren
  
  ✔ Added account bob with address cosmos1z6xgskssdg5vwrzfmxdtmrv84rkdlt4eh9z0ww and mnemonic:
    auction maple couch brass chat finish visual repeat violin effort stuff toilet
    visit humor rival dress leave demand smooth retire scissors crisp mechanic    
    execute                                                                       
  
  🌍 Tendermint node: http://0.0.0.0:26659
  🌍 Blockchain API: http://0.0.0.0:1318
  🌍 Token faucet: http://0.0.0.0:4501
  
  ⋆ Data directory: /Users/sunzhenya/.mars
  ⋆ App binary: /Users/sunzhenya/Work/go/bin/planetd
  
  Press the 'q' key to stop serve
```
### 启动中继器
```
→ ignite relayer configure -a \
  --source-rpc "http://0.0.0.0:26657" \
  --source-faucet "http://0.0.0.0:4500" \
  --source-port "blog" \
  --source-version "blog-1" \
  --source-gasprice "0.0000025stake" \
  --source-prefix "cosmos" \
  --source-gaslimit 300000 \
  --target-rpc "http://0.0.0.0:26659" \
  --target-faucet "http://0.0.0.0:4501" \
  --target-port "blog" \
  --target-version "blog-1" \
  --target-gasprice "0.0000025stake" \
  --target-prefix "cosmos" \
  --target-gaslimit 300000
------
Setting up chains
------

? Source Account default
? Target Account default

🔐  Account on "source" is default(cosmos16h0d04uum0d0kll26eh89gnu47qy84g7w6f69q)
 
 |· received coins from a faucet
 |· (balance: 100000stake,5token)

🔐  Account on "target" is default(cosmos16h0d04uum0d0kll26eh89gnu47qy84g7w6f69q)
 
 |· received coins from a faucet
 |· (balance: 100000stake,5token)

⛓  Configured chains: earth-mars
```

### 从earth链向mars链发送博文数据包


```
 planetd tx blog send-ibc-post blog channel-0 "Hello" "Hello Mars, I'm Alice from Earth" --from alice --chain-id earth --home ~/.earth

auth_info:
  fee:
    amount: []
    gas_limit: "200000"
    granter: ""
    payer: ""
  signer_infos: []
  tip: null
body:
  extension_options: []
  memo: ""
  messages:
  - '@type': /planet.blog.MsgSendIbcPost
    channelID: channel-0
    content: Hello Mars, I'm Alice from Earth
    creator: cosmos1fckdn9vjxz6903xsp27tvtht5ckhkrvaydgtur
    port: blog
    timeoutTimestamp: "1672237456070461000"
    title: Hello
  non_critical_extension_options: []
  timeout_height: "0"
signatures: []
confirm transaction before signing and broadcasting [y/N]: y
code: 0
codespace: ""
data: 12250A232F706C616E65742E626C6F672E4D736753656E64496263506F7374526573706F6E7365
events:
- attributes:
  - index: true
    key: ZmVl
    value: ""
  - index: true
    key: ZmVlX3BheWVy
    value: Y29zbW9zMWZja2RuOXZqeHo2OTAzeHNwMjd0dnRodDVja2hrcnZheWRndHVy
  type: tx
- attributes:
  - index: true
    key: YWNjX3NlcQ==
    value: Y29zbW9zMWZja2RuOXZqeHo2OTAzeHNwMjd0dnRodDVja2hrcnZheWRndHVyLzE=
  type: tx
- attributes:
  - index: true
    key: c2lnbmF0dXJl
    value: ZzZZdlpFVCsydlhDZ1pIaE81ZnZlT0F4SmVxVTJ0U01Yb3RVZTh0QXFNMG4vbVF3aXhCSExrS0JEMjdtNVlFZVlQWVFxdjVHaWhwZjF5dWdTK01ZekE9PQ==
  type: tx
- attributes:
  - index: true
    key: YWN0aW9u
    value: L3BsYW5ldC5ibG9nLk1zZ1NlbmRJYmNQb3N0
  type: message
- attributes:
  - index: true
    key: cGFja2V0X2RhdGE=
    value: ElgKBUhlbGxvEiBIZWxsbyBNYXJzLCBJJ20gQWxpY2UgZnJvbSBFYXJ0aBotY29zbW9zMWZja2RuOXZqeHo2OTAzeHNwMjd0dnRodDVja2hrcnZheWRndHVy
  - index: true
    key: cGFja2V0X2RhdGFfaGV4
    value: MTI1ODBhMDU0ODY1NmM2YzZmMTIyMDQ4NjU2YzZjNmYyMDRkNjE3MjczMmMyMDQ5Mjc2ZDIwNDE2YzY5NjM2NTIwNjY3MjZmNmQyMDQ1NjE3Mjc0NjgxYTJkNjM2ZjczNmQ2ZjczMzE2NjYzNmI2NDZlMzk3NjZhNzg3YTM2MzkzMDMzNzg3MzcwMzIzNzc0NzY3NDY4NzQzNTYzNmI2ODZiNzI3NjYxNzk2NDY3NzQ3NTcy
  - index: true
    key: cGFja2V0X3RpbWVvdXRfaGVpZ2h0
    value: MC0w
  - index: true
    key: cGFja2V0X3RpbWVvdXRfdGltZXN0YW1w
    value: MTY3MjIzNzQ1NjA3MDQ2MTAwMA==
  - index: true
    key: cGFja2V0X3NlcXVlbmNl
    value: MQ==
  - index: true
    key: cGFja2V0X3NyY19wb3J0
    value: YmxvZw==
  - index: true
    key: cGFja2V0X3NyY19jaGFubmVs
    value: Y2hhbm5lbC0w
  - index: true
    key: cGFja2V0X2RzdF9wb3J0
    value: YmxvZw==
  - index: true
    key: cGFja2V0X2RzdF9jaGFubmVs
    value: Y2hhbm5lbC0w
  - index: true
    key: cGFja2V0X2NoYW5uZWxfb3JkZXJpbmc=
    value: T1JERVJfVU5PUkRFUkVE
  - index: true
    key: cGFja2V0X2Nvbm5lY3Rpb24=
    value: Y29ubmVjdGlvbi0w
  type: send_packet
- attributes:
  - index: true
    key: bW9kdWxl
    value: aWJjX2NoYW5uZWw=
  type: message
gas_used: "65326"
gas_wanted: "200000"
height: "1096"
info: ""
logs:
- events:
  - attributes:
    - key: action
      value: /planet.blog.MsgSendIbcPost
    - key: module
      value: ibc_channel
    type: message
  - attributes:
    - key: packet_data
      value: "\x12X\n\x05Hello\x12 Hello Mars, I'm Alice from Earth\x1A-cosmos1fckdn9vjxz6903xsp27tvtht5ckhkrvaydgtur"
    - key: packet_data_hex
      value: 12580a0548656c6c6f122048656c6c6f204d6172732c2049276d20416c6963652066726f6d2045617274681a2d636f736d6f733166636b646e39766a787a363930337873703237747674687435636b686b727661796467747572
    - key: packet_timeout_height
      value: 0-0
    - key: packet_timeout_timestamp
      value: "1672237456070461000"
    - key: packet_sequence
      value: "1"
    - key: packet_src_port
      value: blog
    - key: packet_src_channel
      value: channel-0
    - key: packet_dst_port
      value: blog
    - key: packet_dst_channel
      value: channel-0
    - key: packet_channel_ordering
      value: ORDER_UNORDERED
    - key: packet_connection
      value: connection-0
    type: send_packet
  log: ""
  msg_index: 0
raw_log: '[{"msg_index":0,"events":[{"type":"message","attributes":[{"key":"action","value":"/planet.blog.MsgSendIbcPost"},{"key":"module","value":"ibc_channel"}]},{"type":"send_packet","attributes":[{"key":"packet_data","value":"\u0012X\n\u0005Hello\u0012
  Hello Mars, I''m Alice from Earth\u001a-cosmos1fckdn9vjxz6903xsp27tvtht5ckhkrvaydgtur"},{"key":"packet_data_hex","value":"12580a0548656c6c6f122048656c6c6f204d6172732c2049276d20416c6963652066726f6d2045617274681a2d636f736d6f733166636b646e39766a787a363930337873703237747674687435636b686b727661796467747572"},{"key":"packet_timeout_height","value":"0-0"},{"key":"packet_timeout_timestamp","value":"1672237456070461000"},{"key":"packet_sequence","value":"1"},{"key":"packet_src_port","value":"blog"},{"key":"packet_src_channel","value":"channel-0"},{"key":"packet_dst_port","value":"blog"},{"key":"packet_dst_channel","value":"channel-0"},{"key":"packet_channel_ordering","value":"ORDER_UNORDERED"},{"key":"packet_connection","value":"connection-0"}]}]}]'
timestamp: ""
tx: null
txhash: B8D7BDD4F57062A9C63015B68216AF81792D32F737B5C6DB636D75DB0743B71A
```

### 通过rpc查询验证结果

```
→ planetd q blog list-post --node tcp://localhost:26659
Post:
- content: Hello Mars, I'm Alice from Earth
  creator: blog-channel-0-cosmos1fckdn9vjxz6903xsp27tvtht5ckhkrvaydgtur
  id: "0"
  title: Hello
pagination:
  next_key: null
  total: "0"


→ planetd q blog list-sent-post
SentPost:
- chain: blog-channel-0
  creator: cosmos1fckdn9vjxz6903xsp27tvtht5ckhkrvaydgtur
  id: "0"
  postID: "0"
  title: Hello
pagination:
  next_key: null
  total: "0"

```
