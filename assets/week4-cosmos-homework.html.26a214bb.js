import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as i,f as s}from"./app.a0a3f66a.js";const l={},d=s(`<p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/202212282244825.png" alt="image.png"></p><h3 id="\u5177\u4F53\u6267\u884C\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u5177\u4F53\u6267\u884C\u6B65\u9AA4" aria-hidden="true">#</a> \u5177\u4F53\u6267\u884C\u6B65\u9AA4</h3><p><strong>1.</strong> \u6DFB\u52A0IBC\u53D1\u9001\u6570\u636E\u5305\u548C\u786E\u8BA4\u6570\u636E\u5305\u7684\u7ED3\u6784\u3002\u6DFB\u52A0\u5177\u4F53\u6267\u884C\u4FEE\u6539\u5185\u5BB9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ignite scaffold packet updatePost postID title content --ack postID --module blog

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u2192 ignite scaffold packet updatePost postID title content --ack postID --module blog
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

\u{1F389} Created a packet \`updatePost\`.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.</strong> \u5728proto/blog/packet.proto\u76EE\u5F55\u4E0B\u4FEE\u6539<code>IbcPostPacketData</code>\uFF0C\u6DFB\u52A0\u521B\u5EFA\u4EBAstring <code>Creator</code>=4\uFF0C \u5E76\u91CD\u65B0\u7F16\u8BD1proto\u6587\u4EF6\u3002 <img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/202212290015517.png" alt="image.png"></p><p>\u6267\u884C\u7F16\u8BD1\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2192 ignite chain build
Cosmos SDK&#39;s version is: v0.46.6

\u{1F5C3}  Installed. Use with: planetd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.</strong> \u4FEE\u6539keeper\u65B9\u6CD5\u4E2D\u7684<code>OnRecvIbcPostPacket </code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>id := k.AppendPost(
        ctx,
        types.Post{
            Creator: packet.SourcePort + &quot;-&quot; + packet.SourceChannel + &quot;-&quot; + data.Creator,
            Title:   data.Title,
            Content: data.Content,
        },
    )

    packetAck.PostID = strconv.FormatUint(id, 10)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/202212290017809.png" alt="image.png"></p><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h3><h3 id="\u542F\u52A8\u94FE\u547D\u4EE4-1" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u94FE\u547D\u4EE4-1" aria-hidden="true">#</a> \u542F\u52A8\u94FE\u547D\u4EE4\uFF081\uFF09</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Your saved project changes have not been committed.
To enable reverting to your current state, commit your saved changes.
Do you want to proceed without committing your saved changes: y

  Blockchain is running
  
  \u2714 Added account alice with address cosmos16atdm3d7ffafvxjsl7phw0j9cfu3q2e52jmfk5 and mnemonic:
    autumn sister just pumpkin unfold choose thumb club panther dutch unique spawn
    fun inch tell gauge neglect sniff proud oyster funny spike round side         
  
  \u2714 Added account bob with address cosmos1k9y55qjgtzq98km8f70hwqjzllga93e032t4sf and mnemonic:
    honey labor naive eight pupil false apology check body bid utility certain      
    pencil barrel drive library lesson response kidney egg stable enough ribbon talk
  
  \u{1F30D} Tendermint node: http://0.0.0.0:26657
  \u{1F30D} Blockchain API: http://0.0.0.0:1317
  \u{1F30D} Token faucet: http://0.0.0.0:4500
  
  \u22C6 Data directory: /Users/sunzhenya/.earth
  \u22C6 App binary: /Users/sunzhenya/Work/go/bin/planetd
  
  Press the &#39;q&#39; key to stop serve

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u542F\u52A8\u94FE\u547D\u4EE4-2" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u94FE\u547D\u4EE4-2" aria-hidden="true">#</a> \u542F\u52A8\u94FE\u547D\u4EE4\uFF082\uFF09</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2192 ignite chain serve -c mars.yml
Your blockchain config version is v0 and the latest is v1.
Would you like to upgrade your config file to v1: y
Your saved project changes have not been committed.
To enable reverting to your current state, commit your saved changes.
Do you want to proceed without committing your saved changes: y


  Blockchain is running
  
  \u2714 Added account alice with address cosmos1t4fmwaqwpvx572u5a5fsu8gmqrhz0qtca56kx3 and mnemonic:
    wall warfare route butter pulse double elevator chicken hero glad surge nice
    neglect unit twice plunge remain vital smoke sorry crumble sweet valve siren
  
  \u2714 Added account bob with address cosmos1z6xgskssdg5vwrzfmxdtmrv84rkdlt4eh9z0ww and mnemonic:
    auction maple couch brass chat finish visual repeat violin effort stuff toilet
    visit humor rival dress leave demand smooth retire scissors crisp mechanic    
    execute                                                                       
  
  \u{1F30D} Tendermint node: http://0.0.0.0:26659
  \u{1F30D} Blockchain API: http://0.0.0.0:1318
  \u{1F30D} Token faucet: http://0.0.0.0:4501
  
  \u22C6 Data directory: /Users/sunzhenya/.mars
  \u22C6 App binary: /Users/sunzhenya/Work/go/bin/planetd
  
  Press the &#39;q&#39; key to stop serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u542F\u52A8\u4E2D\u7EE7\u5668" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u4E2D\u7EE7\u5668" aria-hidden="true">#</a> \u542F\u52A8\u4E2D\u7EE7\u5668</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2192 ignite relayer configure -a \\
  --source-rpc &quot;http://0.0.0.0:26657&quot; \\
  --source-faucet &quot;http://0.0.0.0:4500&quot; \\
  --source-port &quot;blog&quot; \\
  --source-version &quot;blog-1&quot; \\
  --source-gasprice &quot;0.0000025stake&quot; \\
  --source-prefix &quot;cosmos&quot; \\
  --source-gaslimit 300000 \\
  --target-rpc &quot;http://0.0.0.0:26659&quot; \\
  --target-faucet &quot;http://0.0.0.0:4501&quot; \\
  --target-port &quot;blog&quot; \\
  --target-version &quot;blog-1&quot; \\
  --target-gasprice &quot;0.0000025stake&quot; \\
  --target-prefix &quot;cosmos&quot; \\
  --target-gaslimit 300000
------
Setting up chains
------

? Source Account default
? Target Account default

\u{1F510}  Account on &quot;source&quot; is default(cosmos16h0d04uum0d0kll26eh89gnu47qy84g7w6f69q)
 
 |\xB7 received coins from a faucet
 |\xB7 (balance: 100000stake,5token)

\u{1F510}  Account on &quot;target&quot; is default(cosmos16h0d04uum0d0kll26eh89gnu47qy84g7w6f69q)
 
 |\xB7 received coins from a faucet
 |\xB7 (balance: 100000stake,5token)

\u26D3  Configured chains: earth-mars
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4ECEearth\u94FE\u5411mars\u94FE\u53D1\u9001\u535A\u6587\u6570\u636E\u5305" tabindex="-1"><a class="header-anchor" href="#\u4ECEearth\u94FE\u5411mars\u94FE\u53D1\u9001\u535A\u6587\u6570\u636E\u5305" aria-hidden="true">#</a> \u4ECEearth\u94FE\u5411mars\u94FE\u53D1\u9001\u535A\u6587\u6570\u636E\u5305</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> planetd tx blog send-ibc-post blog channel-0 &quot;Hello&quot; &quot;Hello Mars, I&#39;m Alice from Earth&quot; --from alice --chain-id earth --home ~/.earth

auth_info:
  fee:
    amount: []
    gas_limit: &quot;200000&quot;
    granter: &quot;&quot;
    payer: &quot;&quot;
  signer_infos: []
  tip: null
body:
  extension_options: []
  memo: &quot;&quot;
  messages:
  - &#39;@type&#39;: /planet.blog.MsgSendIbcPost
    channelID: channel-0
    content: Hello Mars, I&#39;m Alice from Earth
    creator: cosmos1fckdn9vjxz6903xsp27tvtht5ckhkrvaydgtur
    port: blog
    timeoutTimestamp: &quot;1672237456070461000&quot;
    title: Hello
  non_critical_extension_options: []
  timeout_height: &quot;0&quot;
signatures: []
confirm transaction before signing and broadcasting [y/N]: y
code: 0
codespace: &quot;&quot;
data: 12250A232F706C616E65742E626C6F672E4D736753656E64496263506F7374526573706F6E7365
events:
- attributes:
  - index: true
    key: ZmVl
    value: &quot;&quot;
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
gas_used: &quot;65326&quot;
gas_wanted: &quot;200000&quot;
height: &quot;1096&quot;
info: &quot;&quot;
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
      value: &quot;\\x12X\\n\\x05Hello\\x12 Hello Mars, I&#39;m Alice from Earth\\x1A-cosmos1fckdn9vjxz6903xsp27tvtht5ckhkrvaydgtur&quot;
    - key: packet_data_hex
      value: 12580a0548656c6c6f122048656c6c6f204d6172732c2049276d20416c6963652066726f6d2045617274681a2d636f736d6f733166636b646e39766a787a363930337873703237747674687435636b686b727661796467747572
    - key: packet_timeout_height
      value: 0-0
    - key: packet_timeout_timestamp
      value: &quot;1672237456070461000&quot;
    - key: packet_sequence
      value: &quot;1&quot;
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
  log: &quot;&quot;
  msg_index: 0
raw_log: &#39;[{&quot;msg_index&quot;:0,&quot;events&quot;:[{&quot;type&quot;:&quot;message&quot;,&quot;attributes&quot;:[{&quot;key&quot;:&quot;action&quot;,&quot;value&quot;:&quot;/planet.blog.MsgSendIbcPost&quot;},{&quot;key&quot;:&quot;module&quot;,&quot;value&quot;:&quot;ibc_channel&quot;}]},{&quot;type&quot;:&quot;send_packet&quot;,&quot;attributes&quot;:[{&quot;key&quot;:&quot;packet_data&quot;,&quot;value&quot;:&quot;\\u0012X\\n\\u0005Hello\\u0012
  Hello Mars, I&#39;&#39;m Alice from Earth\\u001a-cosmos1fckdn9vjxz6903xsp27tvtht5ckhkrvaydgtur&quot;},{&quot;key&quot;:&quot;packet_data_hex&quot;,&quot;value&quot;:&quot;12580a0548656c6c6f122048656c6c6f204d6172732c2049276d20416c6963652066726f6d2045617274681a2d636f736d6f733166636b646e39766a787a363930337873703237747674687435636b686b727661796467747572&quot;},{&quot;key&quot;:&quot;packet_timeout_height&quot;,&quot;value&quot;:&quot;0-0&quot;},{&quot;key&quot;:&quot;packet_timeout_timestamp&quot;,&quot;value&quot;:&quot;1672237456070461000&quot;},{&quot;key&quot;:&quot;packet_sequence&quot;,&quot;value&quot;:&quot;1&quot;},{&quot;key&quot;:&quot;packet_src_port&quot;,&quot;value&quot;:&quot;blog&quot;},{&quot;key&quot;:&quot;packet_src_channel&quot;,&quot;value&quot;:&quot;channel-0&quot;},{&quot;key&quot;:&quot;packet_dst_port&quot;,&quot;value&quot;:&quot;blog&quot;},{&quot;key&quot;:&quot;packet_dst_channel&quot;,&quot;value&quot;:&quot;channel-0&quot;},{&quot;key&quot;:&quot;packet_channel_ordering&quot;,&quot;value&quot;:&quot;ORDER_UNORDERED&quot;},{&quot;key&quot;:&quot;packet_connection&quot;,&quot;value&quot;:&quot;connection-0&quot;}]}]}]&#39;
timestamp: &quot;&quot;
tx: null
txhash: B8D7BDD4F57062A9C63015B68216AF81792D32F737B5C6DB636D75DB0743B71A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u901A\u8FC7rpc\u67E5\u8BE2\u9A8C\u8BC1\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7rpc\u67E5\u8BE2\u9A8C\u8BC1\u7ED3\u679C" aria-hidden="true">#</a> \u901A\u8FC7rpc\u67E5\u8BE2\u9A8C\u8BC1\u7ED3\u679C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2192 planetd q blog list-post --node tcp://localhost:26659
Post:
- content: Hello Mars, I&#39;m Alice from Earth
  creator: blog-channel-0-cosmos1fckdn9vjxz6903xsp27tvtht5ckhkrvaydgtur
  id: &quot;0&quot;
  title: Hello
pagination:
  next_key: null
  total: &quot;0&quot;


\u2192 planetd q blog list-sent-post
SentPost:
- chain: blog-channel-0
  creator: cosmos1fckdn9vjxz6903xsp27tvtht5ckhkrvaydgtur
  id: &quot;0&quot;
  postID: &quot;0&quot;
  title: Hello
pagination:
  next_key: null
  total: &quot;0&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),a=[d];function t(u,v){return n(),i("div",null,a)}const o=e(l,[["render",t],["__file","week4-cosmos-homework.html.vue"]]);export{o as default};
