import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as d,a as e,b as i,d as l,f as r,r as v}from"./app.e173e6f3.js";const t={},c=r(`<p>[TOC]</p><h2 id="\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a> \u547D\u4EE4</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>account    \u7BA1\u7406\u8D26\u6237
attach     \u542F\u52A8\u4EA4\u4E92\u5F0FJavaScript\u73AF\u5883\uFF08\u8FDE\u63A5\u5230\u8282\u70B9\uFF09
bug        \u4E0A\u62A5bug Issues
console    \u542F\u52A8\u4EA4\u4E92\u5F0FJavaScript\u73AF\u5883
copydb     \u4ECE\u6587\u4EF6\u5939\u521B\u5EFA\u672C\u5730\u94FE
dump       Dump\uFF08\u5206\u6790\uFF09\u4E00\u4E2A\u7279\u5B9A\u7684\u5757\u5B58\u50A8
dumpconfig \u663E\u793A\u914D\u7F6E\u503C
export     \u5BFC\u51FA\u533A\u5757\u94FE\u5230\u6587\u4EF6
import     \u5BFC\u5165\u4E00\u4E2A\u533A\u5757\u94FE\u6587\u4EF6
init       \u542F\u52A8\u5E76\u521D\u59CB\u5316\u4E00\u4E2A\u65B0\u7684\u521B\u4E16\u7EAA\u5757
js         \u6267\u884C\u6307\u5B9A\u7684JavaScript\u6587\u4EF6(\u591A\u4E2A)
license    \u663E\u793A\u8BB8\u53EF\u4FE1\u606F
makecache  \u751F\u6210ethash\u9A8C\u8BC1\u7F13\u5B58(\u7528\u4E8E\u6D4B\u8BD5)
makedag    \u751F\u6210ethash \u6316\u77FFDAG(\u7528\u4E8E\u6D4B\u8BD5)
monitor    \u76D1\u63A7\u548C\u53EF\u89C6\u5316\u8282\u70B9\u6307\u6807
removedb   \u5220\u9664\u533A\u5757\u94FE\u548C\u72B6\u6001\u6570\u636E\u5E93
version    \u6253\u5370\u7248\u672C\u53F7
wallet     \u7BA1\u7406Ethereum\u9884\u552E\u94B1\u5305
help,h     \u663E\u793A\u4E00\u4E2A\u547D\u4EE4\u6216\u5E2E\u52A9\u4E00\u4E2A\u547D\u4EE4\u5217\u8868

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ethereum-\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#ethereum-\u9009\u9879" aria-hidden="true">#</a> ETHEREUM \u9009\u9879</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--config value          TOML \u914D\u7F6E\u6587\u4EF6
--datadir \u201Cxxx\u201D         \u6570\u636E\u5E93\u548Ckeystore\u5BC6\u94A5\u7684\u6570\u636E\u76EE\u5F55
--keystore              keystore\u5B58\u653E\u76EE\u5F55(\u9ED8\u8BA4\u5728datadir\u5185)
--nousb                 \u7981\u7528\u76D1\u63A7\u548C\u7BA1\u7406USB\u786C\u4EF6\u94B1\u5305
--networkid value       \u7F51\u7EDC\u6807\u8BC6\u7B26(\u6574\u578B, 1=Frontier, 2=Morden (\u5F03\u7528), 3=Ropsten, 4=Rinkeby) (\u9ED8\u8BA4: 1)
--testnet               Ropsten\u7F51\u7EDC:\u9884\u5148\u914D\u7F6E\u7684POW(proof-of-work)\u6D4B\u8BD5\u7F51\u7EDC
--rinkeby               Rinkeby\u7F51\u7EDC: \u9884\u5148\u914D\u7F6E\u7684POA(proof-of-authority)\u6D4B\u8BD5\u7F51\u7EDC
--syncmode &quot;fast&quot;       \u540C\u6B65\u6A21\u5F0F (&quot;fast&quot;, &quot;full&quot;, or &quot;light&quot;)
--ethstats value        \u4E0A\u62A5ethstats service  URL (nodename:secret@host:port)
--identity value        \u81EA\u5B9A\u4E49\u8282\u70B9\u540D
--lightserv value       \u5141\u8BB8LES\u8BF7\u6C42\u65F6\u95F4\u6700\u5927\u767E\u5206\u6BD4(0 \u2013 90)(\u9ED8\u8BA4\u503C:0) 
--lightpeers value      \u6700\u5927LES client peers\u6570\u91CF(\u9ED8\u8BA4\u503C:20)
--lightkdf              \u5728KDF\u5F3A\u5EA6\u6D88\u8D39\u65F6\u964D\u4F4Ekey-derivation RAM&amp;CPU\u4F7F\u7528

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5F00\u53D1\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u8005\u6A21\u5F0F" aria-hidden="true">#</a> \u5F00\u53D1\u8005\u6A21\u5F0F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--dev               \u4F7F\u7528POA\u5171\u8BC6\u7F51\u7EDC\uFF0C\u9ED8\u8BA4\u9884\u5206\u914D\u4E00\u4E2A\u5F00\u53D1\u8005\u8D26\u6237\u5E76\u4E14\u4F1A\u81EA\u52A8\u5F00\u542F\u6316\u77FF\u3002
--dev.period value  \u5F00\u53D1\u8005\u6A21\u5F0F\u4E0B\u6316\u77FF\u5468\u671F (0 = \u4EC5\u5728\u4EA4\u6613\u65F6) (\u9ED8\u8BA4: 0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ethash\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#ethash\u9009\u9879" aria-hidden="true">#</a> ETHASH\u9009\u9879</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--ethash.cachedir                        ethash\u9A8C\u8BC1\u7F13\u5B58\u76EE\u5F55(\u9ED8\u8BA4 = datadir\u76EE\u5F55\u5185)
--ethash.cachesinmem value               \u5728\u5185\u5B58\u4FDD\u5B58\u7684\u6700\u8FD1\u7684ethash\u7F13\u5B58\u4E2A\u6570  (\u6BCF\u4E2A\u7F13\u5B5816MB ) (\u9ED8\u8BA4: 2)
--ethash.cachesondisk value              \u5728\u78C1\u76D8\u4FDD\u5B58\u7684\u6700\u8FD1\u7684ethash\u7F13\u5B58\u4E2A\u6570 (\u6BCF\u4E2A\u7F13\u5B5816MB) (\u9ED8\u8BA4: 3)
--ethash.dagdir &quot;&quot;                       \u5B58ethash DAGs\u76EE\u5F55 (\u9ED8\u8BA4 = \u7528\u6237hom\u76EE\u5F55)
--ethash.dagsinmem value                 \u5728\u5185\u5B58\u4FDD\u5B58\u7684\u6700\u8FD1\u7684ethash DAGs \u4E2A\u6570 (\u6BCF\u4E2A1GB\u4EE5\u4E0A) (\u9ED8\u8BA4: 1)
--ethash.dagsondisk value                \u5728\u78C1\u76D8\u4FDD\u5B58\u7684\u6700\u8FD1\u7684ethash DAGs \u4E2A\u6570 (\u6BCF\u4E2A1GB\u4EE5\u4E0A) (\u9ED8\u8BA4: 2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EA4\u6613\u6C60\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u4EA4\u6613\u6C60\u9009\u9879" aria-hidden="true">#</a> \u4EA4\u6613\u6C60\u9009\u9879</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--txpool.nolocals            \u4E3A\u672C\u5730\u63D0\u4EA4\u4EA4\u6613\u7981\u7528\u4EF7\u683C\u8C41\u514D
--txpool.journal value       \u672C\u5730\u4EA4\u6613\u7684\u78C1\u76D8\u65E5\u5FD7\uFF1A\u7528\u4E8E\u8282\u70B9\u91CD\u542F (\u9ED8\u8BA4: &quot;transactions.rlp&quot;)
--txpool.rejournal value     \u91CD\u65B0\u751F\u6210\u672C\u5730\u4EA4\u6613\u65E5\u5FD7\u7684\u65F6\u95F4\u95F4\u9694 (\u9ED8\u8BA4: 1\u5C0F\u65F6)
--txpool.pricelimit value    \u52A0\u5165\u4EA4\u6613\u6C60\u7684\u6700\u5C0F\u7684[gas](https://learnblockchain.cn/2019/06/11/gas-mean/)\u4EF7\u683C\u9650\u5236(\u9ED8\u8BA4: 1)
--txpool.pricebump value     \u4EF7\u683C\u6CE2\u52A8\u767E\u5206\u6BD4\uFF08\u76F8\u5BF9\u4E4B\u524D\u5DF2\u6709\u4EA4\u6613\uFF09 (\u9ED8\u8BA4: 10)
--txpool.accountslots value  \u6BCF\u4E2A\u5E10\u6237\u4FDD\u8BC1\u53EF\u6267\u884C\u7684\u6700\u5C11\u4EA4\u6613\u69FD\u6570\u91CF  (\u9ED8\u8BA4: 16)
--txpool.globalslots value   \u6240\u6709\u5E10\u6237\u53EF\u6267\u884C\u7684\u6700\u5927\u4EA4\u6613\u69FD\u6570\u91CF (\u9ED8\u8BA4: 4096)
--txpool.accountqueue value  \u6BCF\u4E2A\u5E10\u6237\u5141\u8BB8\u7684\u6700\u591A\u975E\u53EF\u6267\u884C\u4EA4\u6613\u69FD\u6570\u91CF (\u9ED8\u8BA4: 64)
--txpool.globalqueue value   \u6240\u6709\u5E10\u6237\u975E\u53EF\u6267\u884C\u4EA4\u6613\u6700\u5927\u69FD\u6570\u91CF  (\u9ED8\u8BA4: 1024)
--txpool.lifetime value      \u975E\u53EF\u6267\u884C\u4EA4\u6613\u6700\u5927\u5165\u961F\u65F6\u95F4(\u9ED8\u8BA4: 3\u5C0F\u65F6)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6027\u80FD\u8C03\u4F18\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u6027\u80FD\u8C03\u4F18\u9009\u9879" aria-hidden="true">#</a> \u6027\u80FD\u8C03\u4F18\u9009\u9879</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--cache value                \u5206\u914D\u7ED9\u5185\u90E8\u7F13\u5B58\u7684\u5185\u5B58MB\u6570\u91CF\uFF0C\u7F13\u5B58\u503C(\u6700\u4F4E16 mb /\u6570\u636E\u5E93\u5F3A\u5236\u8981\u6C42)(\u9ED8\u8BA4:128)
--trie-cache-gens value      \u4FDD\u6301\u5728\u5185\u5B58\u4E2D\u4EA7\u751F\u7684trie node\u6570\u91CF(\u9ED8\u8BA4:120)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8D26\u6237\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u8D26\u6237\u9009\u9879" aria-hidden="true">#</a> \u8D26\u6237\u9009\u9879</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--cache value                \u5206\u914D\u7ED9\u5185\u90E8\u7F13\u5B58\u7684\u5185\u5B58MB\u6570\u91CF\uFF0C\u7F13\u5B58\u503C(\u6700\u4F4E16 mb /\u6570\u636E\u5E93\u5F3A\u5236\u8981\u6C42)(\u9ED8\u8BA4:128)
--trie-cache-gens value      \u4FDD\u6301\u5728\u5185\u5B58\u4E2D\u4EA7\u751F\u7684trie node\u6570\u91CF(\u9ED8\u8BA4:120)
allow-insecure-unlock     \u7528\u4E8E\u89E3\u9501\u8D26\u6237
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api-\u548C\u63A7\u5236\u53F0\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#api-\u548C\u63A7\u5236\u53F0\u9009\u9879" aria-hidden="true">#</a> API \u548C\u63A7\u5236\u53F0\u9009\u9879</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--rpc                       \u542F\u7528HTTP-RPC\u670D\u52A1\u5668
--rpcaddr value             HTTP-RPC\u670D\u52A1\u5668\u63A5\u53E3\u5730\u5740(\u9ED8\u8BA4\u503C:\u201Clocalhost\u201D)
--rpcport value             HTTP-RPC\u670D\u52A1\u5668\u76D1\u542C\u7AEF\u53E3(\u9ED8\u8BA4\u503C:8545)
--rpcapi value              \u57FA\u4E8EHTTP-RPC\u63A5\u53E3\u63D0\u4F9B\u7684API
--ws                        \u542F\u7528WS-RPC\u670D\u52A1\u5668
--wsaddr value              WS-RPC\u670D\u52A1\u5668\u76D1\u542C\u63A5\u53E3\u5730\u5740(\u9ED8\u8BA4\u503C:\u201Clocalhost\u201D)
--wsport value              WS-RPC\u670D\u52A1\u5668\u76D1\u542C\u7AEF\u53E3(\u9ED8\u8BA4\u503C:8546)
--wsapi  value              \u57FA\u4E8EWS-RPC\u7684\u63A5\u53E3\u63D0\u4F9B\u7684API
--wsorigins value           websockets\u8BF7\u6C42\u5141\u8BB8\u7684\u6E90
--ipcdisable                \u7981\u7528IPC-RPC\u670D\u52A1\u5668
--ipcpath                   \u5305\u542B\u5728datadir\u91CC\u7684IPC socket/pipe\u6587\u4EF6\u540D(\u8F6C\u4E49\u8FC7\u7684\u663E\u5F0F\u8DEF\u5F84)
--rpccorsdomain value       \u5141\u8BB8\u8DE8\u57DF\u8BF7\u6C42\u7684\u57DF\u540D\u5217\u8868(\u9017\u53F7\u5206\u9694)(\u6D4F\u89C8\u5668\u5F3A\u5236)
--jspath loadScript         JavaScript\u52A0\u8F7D\u811A\u672C\u7684\u6839\u8DEF\u5F84(\u9ED8\u8BA4\u503C:\u201C.\u201D)
--exec value                \u6267\u884CJavaScript\u8BED\u53E5(\u53EA\u80FD\u7ED3\u5408console/attach\u4F7F\u7528)
--preload value             \u9884\u52A0\u8F7D\u5230\u63A7\u5236\u53F0\u7684JavaScript\u6587\u4EF6\u5217\u8868(\u9017\u53F7\u5206\u9694)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7F51\u7EDC\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u9009\u9879" aria-hidden="true">#</a> \u7F51\u7EDC\u9009\u9879</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--bootnodes value    \u7528\u4E8EP2P\u53D1\u73B0\u5F15\u5BFC\u7684enode urls(\u9017\u53F7\u5206\u9694)(\u5BF9\u4E8Elight servers\u7528v4+v5\u4EE3\u66FF)
--bootnodesv4 value  \u7528\u4E8EP2P v4\u53D1\u73B0\u5F15\u5BFC\u7684enode urls(\u9017\u53F7\u5206\u9694) (light server, \u5168\u8282\u70B9)
--bootnodesv5 value  \u7528\u4E8EP2P v5\u53D1\u73B0\u5F15\u5BFC\u7684enode urls(\u9017\u53F7\u5206\u9694) (light server, \u8F7B\u8282\u70B9)
--port value         \u7F51\u5361\u76D1\u542C\u7AEF\u53E3(\u9ED8\u8BA4\u503C:30303)
--maxpeers value     \u6700\u5927\u7684\u7F51\u7EDC\u8282\u70B9\u6570\u91CF(\u5982\u679C\u8BBE\u7F6E\u4E3A0\uFF0C\u7F51\u7EDC\u5C06\u88AB\u7981\u7528)(\u9ED8\u8BA4\u503C:25)
--maxpendpeers value    \u6700\u5927\u5C1D\u8BD5\u8FDE\u63A5\u7684\u6570\u91CF(\u5982\u679C\u8BBE\u7F6E\u4E3A0\uFF0C\u5219\u5C06\u4F7F\u7528\u9ED8\u8BA4\u503C)(\u9ED8\u8BA4\u503C:0)
--nat value             NAT\u7AEF\u53E3\u6620\u5C04\u673A\u5236 (any|none|upnp|pmp|extip:&lt;IP&gt;) (\u9ED8\u8BA4: \u201Cany\u201D)
--nodiscover            \u7981\u7528\u8282\u70B9\u53D1\u73B0\u673A\u5236(\u624B\u52A8\u6DFB\u52A0\u8282\u70B9)
--v5disc                \u542F\u7528\u5B9E\u9A8C\u6027\u7684RLPx V5(Topic\u53D1\u73B0)\u673A\u5236
--nodekey value         P2P\u8282\u70B9\u5BC6\u94A5\u6587\u4EF6
--nodekeyhex value      \u5341\u516D\u8FDB\u5236\u7684P2P\u8282\u70B9\u5BC6\u94A5(\u7528\u4E8E\u6D4B\u8BD5)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u77FF\u5DE5\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u77FF\u5DE5\u9009\u9879" aria-hidden="true">#</a> \u77FF\u5DE5\u9009\u9879</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--mine                  \u6253\u5F00\u6316\u77FF
--minerthreads value    \u6316\u77FF\u4F7F\u7528\u7684CPU\u7EBF\u7A0B\u6570\u91CF(\u9ED8\u8BA4\u503C:8)
--etherbase value       \u6316\u77FF\u5956\u52B1\u5730\u5740(\u9ED8\u8BA4=\u7B2C\u4E00\u4E2A\u521B\u5EFA\u7684\u5E10\u6237)(\u9ED8\u8BA4\u503C:\u201C0\u201D)
--targetgaslimit value  \u76EE\u6807gas\u9650\u5236\uFF1A\u8BBE\u7F6E\u6700\u4F4Egas\u9650\u5236\uFF08\u4F4E\u4E8E\u8FD9\u4E2A\u4E0D\u4F1A\u88AB\u6316\uFF1F\uFF09 (\u9ED8\u8BA4\u503C:\u201C4712388\u201D)
--gasprice value        \u6316\u77FF\u63A5\u53D7\u4EA4\u6613\u7684\u6700\u4F4Egas\u4EF7\u683C
--extradata value       \u77FF\u5DE5\u8BBE\u7F6E\u7684\u989D\u5916\u5757\u6570\u636E(\u9ED8\u8BA4=client version)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gas-\u4EF7\u683C\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#gas-\u4EF7\u683C\u9009\u9879" aria-hidden="true">#</a> GAS \u4EF7\u683C\u9009\u9879</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--gpoblocks value      \u7528\u4E8E\u68C0\u67E5gas\u4EF7\u683C\u7684\u6700\u8FD1\u5757\u7684\u4E2A\u6570  (\u9ED8\u8BA4: 10)
--gpopercentile value  \u5EFA\u8BAEgas\u4EF7\u53C2\u8003\u6700\u8FD1\u4EA4\u6613\u7684gas\u4EF7\u7684\u767E\u5206\u4F4D\u6570\uFF0C(\u9ED8\u8BA4: 50)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u865A\u62DF\u673A\u7684\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF\u673A\u7684\u9009\u9879" aria-hidden="true">#</a> \u865A\u62DF\u673A\u7684\u9009\u9879</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--vmdebug        \u8BB0\u5F55VM\u53CA\u5408\u7EA6\u8C03\u8BD5\u4FE1\u606F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u65E5\u5FD7\u548C\u8C03\u8BD5\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u548C\u8C03\u8BD5\u9009\u9879" aria-hidden="true">#</a> \u65E5\u5FD7\u548C\u8C03\u8BD5\u9009\u9879</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--metrics            \u542F\u7528metrics\u6536\u96C6\u548C\u62A5\u544A
--fakepow            \u7981\u7528proof-of-work\u9A8C\u8BC1
--verbosity value    \u65E5\u5FD7\u8BE6\u7EC6\u5EA6:0=silent, 1=error, 2=warn, 3=info, 4=debug, 5=detail (default: 3)
--vmodule value      \u6BCF\u4E2A\u6A21\u5757\u8BE6\u7EC6\u5EA6:\u4EE5 &lt;pattern&gt;=&lt;level&gt;\u7684\u9017\u53F7\u5206\u9694\u5217\u8868 (\u6BD4\u5982 eth/*=6,p2p=5)
--backtrace value    \u8BF7\u6C42\u7279\u5B9A\u65E5\u5FD7\u8BB0\u5F55\u5806\u6808\u8DDF\u8E2A (\u6BD4\u5982 \u201Cblock.go:271\u201D)
--debug                     \u7A81\u51FA\u663E\u793A\u8C03\u7528\u4F4D\u7F6E\u65E5\u5FD7(\u6587\u4EF6\u540D\u53CA\u884C\u53F7)
--pprof                     \u542F\u7528pprof HTTP\u670D\u52A1\u5668
--pprofaddr value           pprof HTTP\u670D\u52A1\u5668\u76D1\u542C\u63A5\u53E3(\u9ED8\u8BA4\u503C:127.0.0.1)
--pprofport value           pprof HTTP\u670D\u52A1\u5668\u76D1\u542C\u7AEF\u53E3(\u9ED8\u8BA4\u503C:6060)
--memprofilerate value      \u6309\u6307\u5B9A\u9891\u7387\u6253\u5F00memory profiling    (\u9ED8\u8BA4:524288)
--blockprofilerate value    \u6309\u6307\u5B9A\u9891\u7387\u6253\u5F00block profiling    (\u9ED8\u8BA4\u503C:0)
--cpuprofile value          \u5C06CPU profile\u5199\u5165\u6307\u5B9A\u6587\u4EF6
--trace value               \u5C06execution trace\u5199\u5165\u6307\u5B9A\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="whisper-\u5B9E\u9A8C\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#whisper-\u5B9E\u9A8C\u9009\u9879" aria-hidden="true">#</a> WHISPER \u5B9E\u9A8C\u9009\u9879</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--shh                        \u542F\u7528Whisper
--shh.maxmessagesize value   \u53EF\u63A5\u53D7\u7684\u6700\u5927\u7684\u6D88\u606F\u5927\u5C0F (\u9ED8\u8BA4\u503C: 1048576)
--shh.pow value              \u53EF\u63A5\u53D7\u7684\u6700\u5C0F\u7684POW (\u9ED8\u8BA4\u503C: 0.2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5F03\u7528\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u5F03\u7528\u9009\u9879" aria-hidden="true">#</a> \u5F03\u7528\u9009\u9879</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--fast     \u5F00\u542F\u5FEB\u901F\u540C\u6B65
--light    \u542F\u7528\u8F7B\u5BA2\u6237\u7AEF\u6A21\u5F0F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u4ED6\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u9009\u9879" aria-hidden="true">#</a> \u5176\u4ED6\u9009\u9879</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2013help, -h    \u663E\u793A\u5E2E\u52A9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,33),u={href:"https://geth.ethereum.org/docs/interface/command-line-options",target:"_blank",rel:"noopener noreferrer"};function o(m,h){const n=v("ExternalLinkIcon");return s(),d("div",null,[c,e("blockquote",null,[e("p",null,[i("\u53C2\u8003\uFF1A"),e("a",u,[i("https://geth.ethereum.org/docs/interface/command-line-options"),l(n)])])])])}const g=a(t,[["render",o],["__file","3.The_etheric_fang_launch_parameters_explanation.html.vue"]]);export{g as default};
