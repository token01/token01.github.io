import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as s,b as n,d as e,e as t,r as i}from"./app.c2a49a29.js";const l={},u=t(`<blockquote><p>浅谈以太坊源码分析之EVM如何调用ABI编码的外部方法</p></blockquote><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gmma6b1e5zj312g0pmnpe.jpg" alt="image-20210113191423657" loading="lazy"></p><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>abi是什么？ 前面我们认识到的是智能合约直接在EVM上的表示方式，但是，比如我想用java端程序去访问智能合约的某个方法，难道让java开发人员琢磨透汇编和二进制的表示，再去对接？ 这明显是不可能的，为此abi产生了。这是一个通用可读的json格式的数据，任何别的客户端开发人员或者别的以太坊节点只要指定要调用的方法，通过abi将其解析为字节码并传递给evm，evm来计算处理该字节码并返回结果给前端。abi就起到这么一个作用，类似于传统的客户端和服务器端地址好交互规则，比如json格式的数据，然后进行交互。</p><p>在本系列的上一篇文章中我们看到了<code>Solidity</code>是如何在EVM存储器中表示复杂数据结构的。但是如果无法交互，数据就是没有意义的。智能合约就是数据和外界的中间体。</p><p>在这篇文章中我们将会看到<code>Solidity</code>和<code>EVM</code>可以让外部程序来调用合约的方法并改变它的状态。</p><p>“外部程序”不限于<code>DApp/JavaScript</code>。任何可以使用<code>HTTP RPC</code>与以太坊节点通信的程序，都可以通过创建一个交易与部署在区块链上的任何合约进行交互。</p><p>创建一个交易就像发送一个<code>HTTP</code>请求。<code>Web</code>的服务器会接收你的<code>HTTP</code>请求，然后改变数据库。交易会被网络接收，底层的区块链会扩展到包含改变的状态。</p><p>交易对于智能合约就像<code>HTTP</code>请求对于<code>Web</code>服务器。</p><h2 id="合约交易" tabindex="-1"><a class="header-anchor" href="#合约交易" aria-hidden="true">#</a> 合约交易</h2><p>让我们来看一下将状态变量设置在<code>0x1</code>位置上的交易。我们想要交互的合约有一个对变量<code>a</code>的设置者和获取者：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>pragma solidity <span class="token operator">^</span><span class="token number">0.4</span><span class="token number">.11</span><span class="token punctuation">;</span>
contract C <span class="token punctuation">{</span>
  uint256 a<span class="token punctuation">;</span>
  function <span class="token function">setA</span><span class="token punctuation">(</span>uint256 _a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">=</span> _a<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  function <span class="token function">getA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token function">returns</span><span class="token punctuation">(</span>uint256<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),d={href:"https://rinkeby.etherscan.io/address/0x62650ae5c5777d1660cc17fcd4f48f6a66b9a4c2#code",target:"_blank",rel:"noopener noreferrer"},r=s("code",null,"setA(1)",-1),k={href:"https://rinkeby.etherscan.io/tx/0x7db471e5792bbf38dc784a5b983ee6a7bbe3f1db85dd4daede9ee88ed88057a5",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>交易的输出数据是：</p><blockquote><p>0xee919d500000000000000000000000000000000000000000000000000000000000000001</p></blockquote><p>对于EVM而言，这只是36字节的元数据。它对元数据不会进行处理，会直接将元数据作为<code>calldata</code>传递给智能合约。如果智能合约是个Solidity程序，那么它会将这些输入字节解释为方法调用，并为<code>setA(1)</code>执行适当的汇编代码。</p><p>输入数据可以分成两个子部分：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code># 方法选择器<span class="token punctuation">(</span><span class="token number">4</span>字节<span class="token punctuation">)</span>
<span class="token number">0xee919d5</span>
#第一个参数<span class="token punctuation">(</span><span class="token number">32</span>字节<span class="token punctuation">)</span>
<span class="token number">00000000000000000000000000000000000000000000000000000000000000001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前面的4个字节是方法选择器，剩下的输入数据是方法的参数，32个字节的块。在这个例子中，只有一个参数，值是<code>0x1</code>。</p><p>方法选择器是方法签名的 kecccak256 哈希值。在这个例子中方法的签名是<code>setA(uint256)</code>，也就是方法名称和参数的类型。</p><p>让我们用Python来计算方法选择器。首先，哈希方法签名：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
# 安装pyethereum <span class="token punctuation">[</span>https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>ethereum<span class="token operator">/</span>pyethereum<span class="token operator">/</span>#installation<span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>ethereum<span class="token operator">/</span>pyethereum<span class="token operator">/</span>#installation<span class="token punctuation">)</span><span class="token operator">&gt;</span> from ethereum<span class="token punctuation">.</span>utils <span class="token keyword">import</span> sha3<span class="token operator">&gt;</span> <span class="token function">sha3</span><span class="token punctuation">(</span><span class="token string">&quot;setA(uint256)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hex</span><span class="token punctuation">(</span><span class="token punctuation">)</span>&#39;ee919d50445cd9f463621849366a537968fe1ce096894b0d0c001528383d4769&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后获取哈希值的前4字节：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token operator">&gt;</span> <span class="token function">sha3</span><span class="token punctuation">(</span><span class="token string">&quot;setA(uint256)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">hex</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token char">&#39;ee919d50&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用二进制接口-abi" tabindex="-1"><a class="header-anchor" href="#应用二进制接口-abi" aria-hidden="true">#</a> 应用二进制接口（ABI）</h2><p>对于EVM而言，交易的输入数据(<code>calldata</code>)只是一个字节序列。EVM内部不支持调用方法。</p><p>智能合约可以选择通过以结构化的方式处理输入数据来模拟方法调用，就像前面所说的那样。</p>`,14),v={href:"https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI#formal-specification-of-the-encoding",target:"_blank",rel:"noopener noreferrer"},b=t(`<p>我们已经看到了ABI是如何编码一个简单的方法调用，例如<code>SetA(1)</code>。在后面章节中我们将会看到方法调用和更复杂的参数是如何编码的。</p><h2 id="调用一个获取者" tabindex="-1"><a class="header-anchor" href="#调用一个获取者" aria-hidden="true">#</a> 调用一个获取者</h2><p>如果你调用的方法改变了状态，那么整个网络必须要同意。这就需要有交易，并消耗gas。</p><p>一个获取者如<code>getA()</code>不会改变任何东西。我们可以将方法调用发送到本地的以太坊节点，而不用请求整个网络来执行计算。一个<code>eth_call</code>RPC请求可以允许你在本地模拟交易。这对于只读方法或gas使用评估比较有帮助。</p><p>一个<code>eth_call</code>就像一个缓存的HTTP GET请求。</p><ul><li>它不改变全球的共识状态</li><li>本地区块链(“缓存”)可能会有点稍微过时</li></ul><p>制作一个<code>eth_call</code>来调用 <code>getA</code>方法，通过返回值来获取状态<code>a</code>。首先，计算方法选择器：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token function">sha3</span><span class="token punctuation">(</span><span class="token string">&quot;getA()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">hex</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token char">&#39;d46300fd&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>由于没有参数，输入数据就只有方法选择器了。我们可以发送一个<code>eth_call</code>请求给任意的以太坊节点。对于这个例子，我们依然将请求发送给 infura.io的公共以太坊节点：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>curl <span class="token operator">-</span>X POST \\<span class="token operator">-</span>H <span class="token string">&quot;Content-Type: application/json&quot;</span> \\&quot;<span class="token punctuation">[</span>https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>rinkeby<span class="token punctuation">.</span>infura<span class="token punctuation">.</span>io<span class="token operator">/</span>YOUR_INFURA_TOKEN<span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>rinkeby<span class="token punctuation">.</span>infura<span class="token punctuation">.</span>io<span class="token operator">/</span>YOUR_INFURA_TOKEN<span class="token punctuation">)</span><span class="token string">&quot; \\--data &#39;{&quot;</span>jsonrpc<span class="token string">&quot;: &quot;</span><span class="token number">2.0</span><span class="token string">&quot;,&quot;</span>id<span class="token string">&quot;: 1,&quot;</span>method<span class="token string">&quot;: &quot;</span>eth_call<span class="token string">&quot;,&quot;</span>params<span class="token string">&quot;: [{&quot;</span>to<span class="token string">&quot;: &quot;</span><span class="token number">0x62650ae5c5777d1660cc17fcd4f48f6a66b9a4c2</span><span class="token string">&quot;,&quot;</span>data<span class="token string">&quot;: &quot;</span><span class="token number">0xd46300fd</span><span class="token string">&quot;},&quot;</span>latest&quot;<span class="token punctuation">]</span><span class="token punctuation">}</span>&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根据ABI，该字节应该会解释为<code>0x1</code>数值。</p><h2 id="外部方法调用的汇编" tabindex="-1"><a class="header-anchor" href="#外部方法调用的汇编" aria-hidden="true">#</a> 外部方法调用的汇编</h2><p>现在来看看编译的合约是如何处理源输入数据的，并以此来制作一个方法调用。思考一个定义了<code>setA(uint256)</code>的合约：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>pragma solidity <span class="token operator">^</span><span class="token number">0.4</span><span class="token number">.11</span><span class="token punctuation">;</span>
contract C <span class="token punctuation">{</span>
  uint256 a<span class="token punctuation">;</span>
  <span class="token comment">// 注意: \`payable\` 让汇编简单一点点</span>
  function <span class="token function">setA</span><span class="token punctuation">(</span>uint256 _a<span class="token punctuation">)</span> payable <span class="token punctuation">{</span>
    a <span class="token operator">=</span> _a<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>solc <span class="token operator">--</span>bin <span class="token operator">--</span>asm <span class="token operator">--</span>optimize call<span class="token punctuation">.</span>sol
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>调用方法的汇编代码在合约内部，在<code>sub_0</code>标签下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>sub_0<span class="token punctuation">:</span> assembly <span class="token punctuation">{</span>
    <span class="token function">mstore</span><span class="token punctuation">(</span><span class="token number">0x40</span><span class="token punctuation">,</span> <span class="token number">0x60</span><span class="token punctuation">)</span>
    <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">div</span><span class="token punctuation">(</span><span class="token function">calldataload</span><span class="token punctuation">(</span><span class="token number">0x0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0x100000000000000000000000000000000000000000000000000000000</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0xffffffff</span><span class="token punctuation">)</span>
    <span class="token number">0xee919d50</span>
    dup2
    eq
    tag_2
    jumpi
  tag_1<span class="token punctuation">:</span>
    <span class="token number">0x0</span>
    dup1
    revert
  tag_2<span class="token punctuation">:</span>
    tag_3
    <span class="token function">calldataload</span><span class="token punctuation">(</span><span class="token number">0x4</span><span class="token punctuation">)</span>
    <span class="token function">jump</span><span class="token punctuation">(</span>tag_4<span class="token punctuation">)</span>
  tag_3<span class="token punctuation">:</span>
    stop
  tag_4<span class="token punctuation">:</span>
      <span class="token comment">/* &quot;call.sol&quot;:95:96  a */</span>
    <span class="token number">0x0</span>
      <span class="token comment">/* &quot;call.sol&quot;:95:101  a = _a */</span>
    dup2
    swap1
    sstore
  tag_5<span class="token punctuation">:</span>
    pop
    jump <span class="token comment">// 跳出</span>
auxdata<span class="token punctuation">:</span> <span class="token number">0xa165627a7a7230582016353b5ec133c89560dea787de20e25e96284d67a632e9df74dd981cc4db7a0a0029</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里有两个样板代码与此讨论是无关的，但是仅供参考：</p><ul><li>最上面的<code>mstore(0x40, 0x60)</code>为sha3哈希保留了内存中的前64个字节。不管合约是否需要，这个都会存在的。</li><li>最下面的<code>auxdata</code>用来验证发布的源码与部署的字节码是否相同的。这个是可选择的，但是嵌入到了编译器中</li></ul><p>将剩下的汇编代码分成两个部分，这样容易分析一点：</p><ul><li>匹配选择器并跳掉方法处</li><li>加载参数、执行方法，并从方法返回</li></ul><p>首先，匹配选择器的注释汇编代码：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 加载前4个字节作为方法选择器</span>
<span class="token function">and</span><span class="token punctuation">(</span><span class="token function">div</span><span class="token punctuation">(</span><span class="token function">calldataload</span><span class="token punctuation">(</span><span class="token number">0x0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0x100000000000000000000000000000000000000000000000000000000</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0xffffffff</span><span class="token punctuation">)</span>
<span class="token comment">//  如果选择器匹配\`0xee919d50\`, 跳转到 setA</span>
<span class="token number">0xee919d50</span>
dup2
eq
tag_2
jumpi
<span class="token comment">// 匹配失败，返回并还原</span>
tag_1<span class="token punctuation">:</span>
  <span class="token number">0x0</span>
  dup1
  revert
<span class="token comment">// setA函数</span>
tag_2<span class="token punctuation">:</span>
  <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了开始从调用数据里面加载4字节时的位转移，其他的都是非常清晰明朗的。为了清晰可见，给出了汇编逻辑的低级伪代码：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>methodSelector <span class="token operator">=</span> calldata<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">if</span> methodSelector <span class="token operator">==</span> <span class="token string">&quot;0xee919d50&quot;</span><span class="token punctuation">:</span>
  <span class="token keyword">goto</span> tag_2 <span class="token comment">// 跳转到setA</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
  <span class="token comment">// 匹配失败，返回并还原</span>
  revert
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际方法调用的注释汇编代码：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// setA</span>
tag_2<span class="token punctuation">:</span>
  <span class="token comment">// 方法调用之后跳转的地方</span>
  tag_3
  <span class="token comment">// 加载第一个参数(数值0x1).</span>
  <span class="token function">calldataload</span><span class="token punctuation">(</span><span class="token number">0x4</span><span class="token punctuation">)</span>
  <span class="token comment">// 执行方法</span>
  <span class="token function">jump</span><span class="token punctuation">(</span>tag_4<span class="token punctuation">)</span>
tag_4<span class="token punctuation">:</span>
  <span class="token comment">// sstore(0x0, 0x1)</span>
  <span class="token number">0x0</span>
  dup2
  swap1
  sstore
tag_5<span class="token punctuation">:</span>
  pop
  <span class="token comment">//程序的结尾，将会跳转到 tag_3并停止</span>
  jump
tag_3<span class="token punctuation">:</span>
  <span class="token comment">// 程序结尾</span>
  stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在进入方法体之前，汇编代码做了两件事情：</p><ol><li>保存了一个位置，方法调用之后返回此位置</li><li>从调用数据里面加载参数到栈中</li></ol><p>低级的伪代码：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 保存位置，方法调用结束后返回此位置</span>
@returnTo <span class="token operator">=</span> tag_3
tag_2<span class="token punctuation">:</span> <span class="token comment">// setA</span>
  <span class="token comment">// 从调用数据里面加载参数到栈中</span>
  @arg1 <span class="token operator">=</span> calldata<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token operator">+</span><span class="token number">32</span><span class="token punctuation">]</span>
tag_4<span class="token punctuation">:</span> <span class="token comment">// a = _a</span>
  <span class="token function">sstore</span><span class="token punctuation">(</span><span class="token number">0x0</span><span class="token punctuation">,</span> @arg1<span class="token punctuation">)</span>
tag_5 <span class="token comment">// 返回</span>
  <span class="token function">jump</span><span class="token punctuation">(</span>@returnTo<span class="token punctuation">)</span>
tag_3<span class="token punctuation">:</span>
  stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将这两部分组合起来：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>methodSelector <span class="token operator">=</span> calldata<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">if</span> methodSelector <span class="token operator">==</span> <span class="token string">&quot;0xee919d50&quot;</span><span class="token punctuation">:</span>
  <span class="token keyword">goto</span> tag_2 <span class="token comment">// goto setA</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
  <span class="token comment">// 无匹配方法。失败</span>
  revert
@returnTo <span class="token operator">=</span> tag_3
tag_2<span class="token punctuation">:</span> <span class="token comment">// setA(uint256 _a)</span>
  @arg1 <span class="token operator">=</span> calldata<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">:</span><span class="token number">36</span><span class="token punctuation">]</span>
tag_4<span class="token punctuation">:</span> <span class="token comment">// a = _a</span>
  <span class="token function">sstore</span><span class="token punctuation">(</span><span class="token number">0x0</span><span class="token punctuation">,</span> @arg1<span class="token punctuation">)</span>
tag_5 <span class="token comment">// 返回</span>
  <span class="token function">jump</span><span class="token punctuation">(</span>@returnTo<span class="token punctuation">)</span>
tag_3<span class="token punctuation">:</span>
  stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>有趣的小细节：<code>revert</code>的操作码是<code>fd</code>。但是在黄皮书中你不会找到它的详细说明，或者在代码中找到它的实现。实际上，<code>fd</code>不是确实存在的！这是个无效的操作。当EVM遇到了一个无效的操作，它会放弃并且会有还原状态的副作用。</p></blockquote><h2 id="处理多个方法" tabindex="-1"><a class="header-anchor" href="#处理多个方法" aria-hidden="true">#</a> 处理多个方法</h2><p>Solidity编译器是如何为有多个方法的合约产生汇编代码的？</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>pragma solidity <span class="token operator">^</span><span class="token number">0.4</span><span class="token number">.11</span><span class="token punctuation">;</span>
contract C <span class="token punctuation">{</span>
    uint256 a<span class="token punctuation">;</span>
    uint256 b<span class="token punctuation">;</span>
    function <span class="token function">setA</span><span class="token punctuation">(</span>uint256 _a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      a <span class="token operator">=</span> _a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    function <span class="token function">setB</span><span class="token punctuation">(</span>uint256 _b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      b <span class="token operator">=</span> _b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单，只要一些<code>if-else</code>分支就可以了：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// methodSelector = calldata[0:4]</span>
<span class="token function">and</span><span class="token punctuation">(</span><span class="token function">div</span><span class="token punctuation">(</span><span class="token function">calldataload</span><span class="token punctuation">(</span><span class="token number">0x0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0x100000000000000000000000000000000000000000000000000000000</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0xffffffff</span><span class="token punctuation">)</span>
<span class="token comment">// if methodSelector == 0x9cdcf9b</span>
<span class="token number">0x9cdcf9b</span>
dup2
eq
tag_2 <span class="token comment">// SetB</span>
jumpi
<span class="token comment">// elsif methodSelector == 0xee919d50</span>
dup1
<span class="token number">0xee919d50</span>
eq
tag_3 <span class="token comment">// SetA</span>
jumpi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>伪代码：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>methodSelector <span class="token operator">=</span> calldata<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">if</span> methodSelector <span class="token operator">==</span> <span class="token string">&quot;0x9cdcf9b&quot;</span><span class="token punctuation">:</span>
  <span class="token keyword">goto</span> tag_2
elsif methodSelector <span class="token operator">==</span> <span class="token string">&quot;0xee919d50&quot;</span><span class="token punctuation">:</span>
  <span class="token keyword">goto</span> tag_3
<span class="token keyword">else</span><span class="token punctuation">:</span>
  <span class="token comment">// Cannot find a matching method. Fail.</span>
  revert
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="abi为复杂方法调用进行编码" tabindex="-1"><a class="header-anchor" href="#abi为复杂方法调用进行编码" aria-hidden="true">#</a> ABI为复杂方法调用进行编码</h2>`,43),g={href:"https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/ethereum/pyethereum/blob/4e945e2a24554ec04eccb160cff689a82eed7e0d/ethereum/abi.py",target:"_blank",rel:"noopener noreferrer"},f=t(`<p>首先，导出<code>encode_abi</code>函数：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>from ethereum<span class="token punctuation">.</span>abi <span class="token keyword">import</span> encode_abi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对于一个有3个<code>uint256</code>类型参数的方法（例如<code>foo(uint256 a, uint256 b, uint256 c)</code>），编码参数只是简单的依次对<code>uint256</code>数值进行编码：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code># 第一个数组列出了参数的类型
# 第二个数组列出了参数的值
<span class="token operator">&gt;</span> <span class="token function">encode_abi</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;uint256&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;uint256&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;uint256&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hex</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000001</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000002</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000003</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>小于32字节的类型会被填充到32字节：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token operator">&gt;</span> <span class="token function">encode_abi</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;int8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;uint32&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;uint64&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hex</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000001</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000002</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000003</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于定长数组，元素还是32字节的块（如果必要的话会填充0），依次排列：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token operator">&gt;</span> <span class="token function">encode_abi</span><span class="token punctuation">(</span>
   <span class="token punctuation">[</span><span class="token string">&quot;int8[3]&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;int256[3]&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hex</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// int8[3]. Zero-padded to 32 bytes.</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000001</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000002</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000003</span>
<span class="token comment">// int256[3].</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000004</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000005</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000006</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="abi为动态数组编码" tabindex="-1"><a class="header-anchor" href="#abi为动态数组编码" aria-hidden="true">#</a> ABI为动态数组编码</h2>`,9),_={href:"https://github.com/ethereum/pyethereum/blob/4e945e2a24554ec04eccb160cff689a82eed7e0d/ethereum/abi.py#L735-L741",target:"_blank",rel:"noopener noreferrer"},x=t(`<p>该模式其实就是动态数组的元素被打包到交易的调用数据尾部，参数(“头”)会被引用到调用数据里，这里就是数组元素。</p><p>如果我们调用的方法有3个动态数组，参数的编码就会像这样（添加注释和换行为了更加的清晰）：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token operator">&gt;</span> <span class="token function">encode_abi</span><span class="token punctuation">(</span>
  <span class="token punctuation">[</span><span class="token string">&quot;uint256[]&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;uint256[]&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;uint256[]&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0xa1</span><span class="token punctuation">,</span> <span class="token number">0xa2</span><span class="token punctuation">,</span> <span class="token number">0xa3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0xb1</span><span class="token punctuation">,</span> <span class="token number">0xb2</span><span class="token punctuation">,</span> <span class="token number">0xb3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0xc1</span><span class="token punctuation">,</span> <span class="token number">0xc2</span><span class="token punctuation">,</span> <span class="token number">0xc3</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hex</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">/************* HEAD (32*3 bytes) *************/</span>
<span class="token comment">// 参数1: 数组数据在0x60位置</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000060</span>
<span class="token comment">// 参数2：数组数据在0xe0位置</span>
<span class="token number">00000000000000000000000000000000000000000000000000000000000000e0</span>
<span class="token comment">// 参数3： 数组数据在0x160位置 </span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000160</span>
<span class="token comment">/************* TAIL (128**3 bytes) *************/</span>
<span class="token comment">//  0x60位置。参数1的数据</span>
<span class="token comment">// 长度后跟这元素</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000003</span>
00000000000000000000000000000000000000000000000000000000000000a1
00000000000000000000000000000000000000000000000000000000000000a2
00000000000000000000000000000000000000000000000000000000000000a3
<span class="token comment">// 0xe0位置。参数2的数据</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000003</span>
00000000000000000000000000000000000000000000000000000000000000b1
00000000000000000000000000000000000000000000000000000000000000b2
00000000000000000000000000000000000000000000000000000000000000b3
<span class="token comment">//0x160位置。参数3的数据</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000003</span>
00000000000000000000000000000000000000000000000000000000000000c1
00000000000000000000000000000000000000000000000000000000000000c2
00000000000000000000000000000000000000000000000000000000000000c3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>HEAD</code>部分有32字节参数，指出<code>TAIL</code>部分的位置，<code>TAIL</code>部分包含了3个动态数组的实际数据。</p><p>举个例子，第一个参数是<code>0x60</code>，指出调用数据的第96个(<code>0x60</code>)字节。如果你看一下第96个字节，它是数组的开始地方。前32字节是长度，后面跟着的是3个元素。</p><p>混合动态和静态参数是可能的。这里有个(<code>static</code>，<code>dynamic</code>，<code>static</code>)参数。静态参数按原样编码，而第二个动态数组的数据放到了尾部：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token operator">&gt;</span> <span class="token function">encode_abi</span><span class="token punctuation">(</span>
  <span class="token punctuation">[</span><span class="token string">&quot;uint256&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;uint256[]&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;uint256&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">0xaaaa</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0xb1</span><span class="token punctuation">,</span> <span class="token number">0xb2</span><span class="token punctuation">,</span> <span class="token number">0xb3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0xbbbb</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hex</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">/************* HEAD (32*3 bytes) *************/</span>
<span class="token comment">// 参数1： 0xaaaa</span>
000000000000000000000000000000000000000000000000000000000000aaaa
<span class="token comment">// 参数2：数组数据在0x60位置</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000060</span>
<span class="token comment">// 参数3： 0xbbbb</span>
000000000000000000000000000000000000000000000000000000000000bbbb
<span class="token comment">/************* TAIL (128 bytes) *************/</span>
<span class="token comment">// 0x60位置。参数2的数据</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000003</span>
00000000000000000000000000000000000000000000000000000000000000b1
00000000000000000000000000000000000000000000000000000000000000b2
00000000000000000000000000000000000000000000000000000000000000b3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编码字节数组" tabindex="-1"><a class="header-anchor" href="#编码字节数组" aria-hidden="true">#</a> 编码字节数组</h2><p>字符串和字节数组同样是头尾编码。唯一的区别是字节数组会被紧密的打包成一个32字节的块，就像：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token operator">&gt;</span> <span class="token function">encode_abi</span><span class="token punctuation">(</span>
  <span class="token punctuation">[</span><span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">&quot;aaaa&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bbbb&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cccc&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hex</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 参数1： 字符串数据在0x60位置</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000060</span>
<span class="token comment">// 参数2：字符串数据在0xa0位置</span>
00000000000000000000000000000000000000000000000000000000000000a0
<span class="token comment">// 参数3：字符串数据在0xe0位置</span>
<span class="token number">00000000000000000000000000000000000000000000000000000000000000e0</span>
<span class="token comment">// 0x60 (96)。 参数1的数据</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000004</span>
<span class="token number">6161616100000000000000000000000000000000000000000000000000000000</span>
<span class="token comment">// 0xa0 (160)。参数2的数据</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000004</span>
<span class="token number">6262626200000000000000000000000000000000000000000000000000000000</span>
<span class="token comment">// 0xe0 (224)。参数3的数据</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000004</span>
<span class="token number">6363636300000000000000000000000000000000000000000000000000000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于每个字符串/字节数组，前面的32字节是编码长度，后面跟着才是字符串/字节数组的内容。</p><p>如果字符串大于32字节，那么多个32字节块就会被使用：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 编码字符串的48字节</span>
ethereum<span class="token punctuation">.</span>abi<span class="token punctuation">.</span><span class="token function">encode_abi</span><span class="token punctuation">(</span>
  <span class="token punctuation">[</span><span class="token string">&quot;string&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">32</span><span class="token operator">+</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hex</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token number">0000000000000000000000000000000000000000000000000000000000000020</span>
<span class="token comment">//字符串的长度为0x30 (48)</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000030</span>
<span class="token number">6161616161616161616161616161616161616161616161616161616161616161</span>
<span class="token number">6161616161616161616161616161616100000000000000000000000000000000</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="嵌套数组" tabindex="-1"><a class="header-anchor" href="#嵌套数组" aria-hidden="true">#</a> 嵌套数组</h2><p>嵌套数组中每个嵌套有一个间接寻址。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token operator">&gt;</span> <span class="token function">encode_abi</span><span class="token punctuation">(</span>
  <span class="token punctuation">[</span><span class="token string">&quot;uint256[][]&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0xa1</span><span class="token punctuation">,</span> <span class="token number">0xa2</span><span class="token punctuation">,</span> <span class="token number">0xa3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0xb1</span><span class="token punctuation">,</span> <span class="token number">0xb2</span><span class="token punctuation">,</span> <span class="token number">0xb3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0xc1</span><span class="token punctuation">,</span> <span class="token number">0xc2</span><span class="token punctuation">,</span> <span class="token number">0xc3</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hex</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//参数1：外层数组在0x20位置上</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000020</span>
<span class="token comment">// 0x20。每个元素都是里层数组的位置</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000003</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000060</span>
<span class="token number">00000000000000000000000000000000000000000000000000000000000000e0</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000160</span>
<span class="token comment">// array[0]在0x60位置上</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000003</span>
00000000000000000000000000000000000000000000000000000000000000a1
00000000000000000000000000000000000000000000000000000000000000a2
00000000000000000000000000000000000000000000000000000000000000a3
<span class="token comment">// array[1] 在0xe0位置上</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000003</span>
00000000000000000000000000000000000000000000000000000000000000b1
00000000000000000000000000000000000000000000000000000000000000b2
00000000000000000000000000000000000000000000000000000000000000b3
<span class="token comment">// array[2]在0x160位置上</span>
<span class="token number">0000000000000000000000000000000000000000000000000000000000000003</span>
00000000000000000000000000000000000000000000000000000000000000c1
00000000000000000000000000000000000000000000000000000000000000c2
00000000000000000000000000000000000000000000000000000000000000c3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gas成本和abi编码设计" tabindex="-1"><a class="header-anchor" href="#gas成本和abi编码设计" aria-hidden="true">#</a> Gas成本和ABI编码设计</h2><p>为什么ABI将方法选择器截断到4个字节？如果我们不使用sha256的整个32字节，会不会不幸的碰到不同方法发生冲突的情况？ 如果这个截断是为了节省成本，那么为什么在用更多的0来进行填充时，而仅仅只为了节省方法选择器中的28字节而截断呢？</p><p>这种设计看起来互相矛盾……直到我们考虑到一个交易的gas成本。</p><ul><li>每笔交易需要支付 21000 gas</li><li>每笔交易的0字节或代码需要支付 4 gas</li><li>每笔交易的非0字节或代码需要支付 68 gas</li></ul><p>啊哈！0要便宜17倍，0填充现在看起来没有那么不合理了。</p><p>方法选择器是一个加密哈希值，是个伪随机。一个随机的字符串倾向于拥有很多的非0字节，因为每个字节只有0.3%（1/255）的概率是0。</p><ul><li><code>0x1</code>填充到32字节成本是192 gas 4*31 (0字节) + 68 (1个非0字节)</li><li>sha256可能有32个非0字节，成本大概2176 gas 32 * 68</li><li>sha256截断到4字节，成本大概272 gas 32*4</li></ul><p>ABI展示了另外一个底层设计的奇特例子，通过gas成本结构进行激励。</p><blockquote><h3 id="负整数" tabindex="-1"><a class="header-anchor" href="#负整数" aria-hidden="true">#</a> 负整数…</h3></blockquote>`,25),q={href:"https://en.wikipedia.org/wiki/Two's_complement",target:"_blank",rel:"noopener noreferrer"},y=s("code",null,"int8",-1),A=s("code",null,"-1",-1),I=s("code",null,"1111 1111",-1),B=t(`<p>ABI用1来填充负整数，所以<code>-1</code>会被填充为：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>越大的负整数（<code>-1</code>大于<code>-2</code>）1越多，会花费相当多的gas。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>与智能合约交互，你需要发送原始字节。它会进行一些计算，可能会改变自己的状态，然后会返回给你原始字节。方法调用实际上不存在，这是ABI创造的集体假象。</p><p>ABI被指定为一个低级格式，但是在功能上更像一个跨语言RPC框架的序列化格式。</p><p>我们可以在DApp和Web App的架构层面之间进行类比：</p>`,7),w=s("li",null,"区块链就是一个备份数据库",-1),T=s("li",null,"合约就像web服务器",-1),E=s("li",null,"交易就像请求",-1),S={href:"https://en.wikipedia.org/wiki/Protocol_Buffers",target:"_blank",rel:"noopener noreferrer"},j={href:"https://medium.com/@hayeah/diving-into-the-ethereum-vm-part-2-storage-layout-bc5349cb11b7",target:"_blank",rel:"noopener noreferrer"};function V(P,C){const a=i("ExternalLinkIcon");return o(),c("div",null,[u,s("p",null,[n("这个合约部署在Rinkeby测试网上。可以随意使用Etherscan，并搜索地址 "),s("a",d,[n("0x62650ae5…"),e(a)]),n("进行查看。")]),s("p",null,[n("我创建了一个可以调用"),r,n("的交易，可以在地址"),s("a",k,[n("0x7db471e5…"),e(a)]),n("上查看该交易。")]),m,s("p",null,[n("如果EVM上的所有语言都同意相同的方式解释输入数据，那么它们就可以很容易进行交互。 "),s("a",v,[n("合约应用二进制接口"),e(a)]),n("（ABI）指定了一个通用的编码模式。")]),b,s("p",null,[n("对于一个方法调用，交易输入数据的前4个字节总是方法选择器。跟在后面的32字节块就是方法参数。 "),s("a",g,[n("ABI编码规范"),e(a)]),n("显示了更加复杂的参数类型是如何被编码的，但是阅读起来非常的痛苦。")]),s("p",null,[n("另一个学习ABI编码的方式是使用 "),s("a",h,[n("pyethereum的ABI编码函数"),e(a)]),n(" 来研究不同数据类型是如何编码的。我们会从简单的例子开始，然后建立更复杂的类型。")]),f,s("p",null,[n("ABI介绍了一种间接的编码动态数组的方法，遵循一个叫做"),s("a",_,[n("头尾编码"),e(a)]),n("的模式。")]),x,s("p",null,[n("一般使用叫做 "),s("a",q,[n("补码"),e(a)]),n("的方式来表达负整数。"),y,n("类型"),A,n("的数值编码会都是1。"),I,n("。")]),B,s("ul",null,[w,T,E,s("li",null,[n("ABI是数据交换格式，就像"),s("a",S,[n("Protocol Buffer"),e(a)]),n("。")])]),s("blockquote",null,[s("p",null,[n("翻译自 "),s("a",j,[n("https://medium.com/@hayeah/diving-into-the-ethereum-vm-part-2-storage-layout-bc5349cb11b7"),e(a)])])])])}const L=p(l,[["render",V],["__file","22.etheric_fang_EVM_entry_source_code_analysis_how_to_call_external_ABI_encoding_method.html.vue"]]);export{L as default};
