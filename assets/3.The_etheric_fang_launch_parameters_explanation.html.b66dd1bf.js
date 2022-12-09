import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as s,a as e,b as i,d as l,e as r,r as v}from"./app.8c636bb6.js";const t={},c=r(`<p>[TOC]</p><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>account    管理账户
attach     启动交互式JavaScript环境（连接到节点）
bug        上报bug Issues
console    启动交互式JavaScript环境
copydb     从文件夹创建本地链
dump       Dump（分析）一个特定的块存储
dumpconfig 显示配置值
export     导出区块链到文件
import     导入一个区块链文件
init       启动并初始化一个新的创世纪块
js         执行指定的JavaScript文件(多个)
license    显示许可信息
makecache  生成ethash验证缓存(用于测试)
makedag    生成ethash 挖矿DAG(用于测试)
monitor    监控和可视化节点指标
removedb   删除区块链和状态数据库
version    打印版本号
wallet     管理Ethereum预售钱包
help,h     显示一个命令或帮助一个命令列表

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ethereum-选项" tabindex="-1"><a class="header-anchor" href="#ethereum-选项" aria-hidden="true">#</a> ETHEREUM 选项</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--config value          TOML 配置文件
--datadir “xxx”         数据库和keystore密钥的数据目录
--keystore              keystore存放目录(默认在datadir内)
--nousb                 禁用监控和管理USB硬件钱包
--networkid value       网络标识符(整型, 1=Frontier, 2=Morden (弃用), 3=Ropsten, 4=Rinkeby) (默认: 1)
--testnet               Ropsten网络:预先配置的POW(proof-of-work)测试网络
--rinkeby               Rinkeby网络: 预先配置的POA(proof-of-authority)测试网络
--syncmode &quot;fast&quot;       同步模式 (&quot;fast&quot;, &quot;full&quot;, or &quot;light&quot;)
--ethstats value        上报ethstats service  URL (nodename:secret@host:port)
--identity value        自定义节点名
--lightserv value       允许LES请求时间最大百分比(0 – 90)(默认值:0) 
--lightpeers value      最大LES client peers数量(默认值:20)
--lightkdf              在KDF强度消费时降低key-derivation RAM&amp;CPU使用

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开发者模式" tabindex="-1"><a class="header-anchor" href="#开发者模式" aria-hidden="true">#</a> 开发者模式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--dev               使用POA共识网络，默认预分配一个开发者账户并且会自动开启挖矿。
--dev.period value  开发者模式下挖矿周期 (0 = 仅在交易时) (默认: 0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ethash选项" tabindex="-1"><a class="header-anchor" href="#ethash选项" aria-hidden="true">#</a> ETHASH选项</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--ethash.cachedir                        ethash验证缓存目录(默认 = datadir目录内)
--ethash.cachesinmem value               在内存保存的最近的ethash缓存个数  (每个缓存16MB ) (默认: 2)
--ethash.cachesondisk value              在磁盘保存的最近的ethash缓存个数 (每个缓存16MB) (默认: 3)
--ethash.dagdir &quot;&quot;                       存ethash DAGs目录 (默认 = 用户hom目录)
--ethash.dagsinmem value                 在内存保存的最近的ethash DAGs 个数 (每个1GB以上) (默认: 1)
--ethash.dagsondisk value                在磁盘保存的最近的ethash DAGs 个数 (每个1GB以上) (默认: 2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="交易池选项" tabindex="-1"><a class="header-anchor" href="#交易池选项" aria-hidden="true">#</a> 交易池选项</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--txpool.nolocals            为本地提交交易禁用价格豁免
--txpool.journal value       本地交易的磁盘日志：用于节点重启 (默认: &quot;transactions.rlp&quot;)
--txpool.rejournal value     重新生成本地交易日志的时间间隔 (默认: 1小时)
--txpool.pricelimit value    加入交易池的最小的[gas](https://learnblockchain.cn/2019/06/11/gas-mean/)价格限制(默认: 1)
--txpool.pricebump value     价格波动百分比（相对之前已有交易） (默认: 10)
--txpool.accountslots value  每个帐户保证可执行的最少交易槽数量  (默认: 16)
--txpool.globalslots value   所有帐户可执行的最大交易槽数量 (默认: 4096)
--txpool.accountqueue value  每个帐户允许的最多非可执行交易槽数量 (默认: 64)
--txpool.globalqueue value   所有帐户非可执行交易最大槽数量  (默认: 1024)
--txpool.lifetime value      非可执行交易最大入队时间(默认: 3小时)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="性能调优选项" tabindex="-1"><a class="header-anchor" href="#性能调优选项" aria-hidden="true">#</a> 性能调优选项</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--cache value                分配给内部缓存的内存MB数量，缓存值(最低16 mb /数据库强制要求)(默认:128)
--trie-cache-gens value      保持在内存中产生的trie node数量(默认:120)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="账户选项" tabindex="-1"><a class="header-anchor" href="#账户选项" aria-hidden="true">#</a> 账户选项</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--cache value                分配给内部缓存的内存MB数量，缓存值(最低16 mb /数据库强制要求)(默认:128)
--trie-cache-gens value      保持在内存中产生的trie node数量(默认:120)
allow-insecure-unlock     用于解锁账户
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api-和控制台选项" tabindex="-1"><a class="header-anchor" href="#api-和控制台选项" aria-hidden="true">#</a> API 和控制台选项</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--rpc                       启用HTTP-RPC服务器
--rpcaddr value             HTTP-RPC服务器接口地址(默认值:“localhost”)
--rpcport value             HTTP-RPC服务器监听端口(默认值:8545)
--rpcapi value              基于HTTP-RPC接口提供的API
--ws                        启用WS-RPC服务器
--wsaddr value              WS-RPC服务器监听接口地址(默认值:“localhost”)
--wsport value              WS-RPC服务器监听端口(默认值:8546)
--wsapi  value              基于WS-RPC的接口提供的API
--wsorigins value           websockets请求允许的源
--ipcdisable                禁用IPC-RPC服务器
--ipcpath                   包含在datadir里的IPC socket/pipe文件名(转义过的显式路径)
--rpccorsdomain value       允许跨域请求的域名列表(逗号分隔)(浏览器强制)
--jspath loadScript         JavaScript加载脚本的根路径(默认值:“.”)
--exec value                执行JavaScript语句(只能结合console/attach使用)
--preload value             预加载到控制台的JavaScript文件列表(逗号分隔)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网络选项" tabindex="-1"><a class="header-anchor" href="#网络选项" aria-hidden="true">#</a> 网络选项</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--bootnodes value    用于P2P发现引导的enode urls(逗号分隔)(对于light servers用v4+v5代替)
--bootnodesv4 value  用于P2P v4发现引导的enode urls(逗号分隔) (light server, 全节点)
--bootnodesv5 value  用于P2P v5发现引导的enode urls(逗号分隔) (light server, 轻节点)
--port value         网卡监听端口(默认值:30303)
--maxpeers value     最大的网络节点数量(如果设置为0，网络将被禁用)(默认值:25)
--maxpendpeers value    最大尝试连接的数量(如果设置为0，则将使用默认值)(默认值:0)
--nat value             NAT端口映射机制 (any|none|upnp|pmp|extip:&lt;IP&gt;) (默认: “any”)
--nodiscover            禁用节点发现机制(手动添加节点)
--v5disc                启用实验性的RLPx V5(Topic发现)机制
--nodekey value         P2P节点密钥文件
--nodekeyhex value      十六进制的P2P节点密钥(用于测试)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="矿工选项" tabindex="-1"><a class="header-anchor" href="#矿工选项" aria-hidden="true">#</a> 矿工选项</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--mine                  打开挖矿
--minerthreads value    挖矿使用的CPU线程数量(默认值:8)
--etherbase value       挖矿奖励地址(默认=第一个创建的帐户)(默认值:“0”)
--targetgaslimit value  目标gas限制：设置最低gas限制（低于这个不会被挖？） (默认值:“4712388”)
--gasprice value        挖矿接受交易的最低gas价格
--extradata value       矿工设置的额外块数据(默认=client version)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gas-价格选项" tabindex="-1"><a class="header-anchor" href="#gas-价格选项" aria-hidden="true">#</a> GAS 价格选项</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--gpoblocks value      用于检查gas价格的最近块的个数  (默认: 10)
--gpopercentile value  建议gas价参考最近交易的gas价的百分位数，(默认: 50)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="虚拟机的选项" tabindex="-1"><a class="header-anchor" href="#虚拟机的选项" aria-hidden="true">#</a> 虚拟机的选项</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--vmdebug        记录VM及合约调试信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="日志和调试选项" tabindex="-1"><a class="header-anchor" href="#日志和调试选项" aria-hidden="true">#</a> 日志和调试选项</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--metrics            启用metrics收集和报告
--fakepow            禁用proof-of-work验证
--verbosity value    日志详细度:0=silent, 1=error, 2=warn, 3=info, 4=debug, 5=detail (default: 3)
--vmodule value      每个模块详细度:以 &lt;pattern&gt;=&lt;level&gt;的逗号分隔列表 (比如 eth/*=6,p2p=5)
--backtrace value    请求特定日志记录堆栈跟踪 (比如 “block.go:271”)
--debug                     突出显示调用位置日志(文件名及行号)
--pprof                     启用pprof HTTP服务器
--pprofaddr value           pprof HTTP服务器监听接口(默认值:127.0.0.1)
--pprofport value           pprof HTTP服务器监听端口(默认值:6060)
--memprofilerate value      按指定频率打开memory profiling    (默认:524288)
--blockprofilerate value    按指定频率打开block profiling    (默认值:0)
--cpuprofile value          将CPU profile写入指定文件
--trace value               将execution trace写入指定文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="whisper-实验选项" tabindex="-1"><a class="header-anchor" href="#whisper-实验选项" aria-hidden="true">#</a> WHISPER 实验选项</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--shh                        启用Whisper
--shh.maxmessagesize value   可接受的最大的消息大小 (默认值: 1048576)
--shh.pow value              可接受的最小的POW (默认值: 0.2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="弃用选项" tabindex="-1"><a class="header-anchor" href="#弃用选项" aria-hidden="true">#</a> 弃用选项</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--fast     开启快速同步
--light    启用轻客户端模式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他选项" tabindex="-1"><a class="header-anchor" href="#其他选项" aria-hidden="true">#</a> 其他选项</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>–help, -h    显示帮助
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,33),u={href:"https://geth.ethereum.org/docs/interface/command-line-options",target:"_blank",rel:"noopener noreferrer"};function o(m,h){const a=v("ExternalLinkIcon");return d(),s("div",null,[c,e("blockquote",null,[e("p",null,[i("参考："),e("a",u,[i("https://geth.ethereum.org/docs/interface/command-line-options"),l(a)])])])])}const g=n(t,[["render",o],["__file","3.The_etheric_fang_launch_parameters_explanation.html.vue"]]);export{g as default};
