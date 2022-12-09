import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c,a as n,b as s,d as i,e as t,r as o}from"./app.8c636bb6.js";const l={},d=n("blockquote",null,[n("p",null,"浅谈以太坊源码分析之EVM固定长度数据类型表示")],-1),u={href:"https://medium.com/@hayeah/diving-into-the-ethereum-vm-part-2-storage-layout-bc5349cb11b7",target:"_blank",rel:"noopener noreferrer"},r=t(`<p>我们先看一个简单的<code>Solidity</code>合约的汇编代码：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>contract C <span class="token punctuation">{</span>
    uint256 a<span class="token punctuation">;</span>
    function <span class="token function">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该合约归结于<code>sstore</code>指令的调用：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// a = 1</span>
<span class="token function">sstore</span><span class="token punctuation">(</span><span class="token number">0x0</span><span class="token punctuation">,</span> <span class="token number">0x1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>EVM将<code>0x1</code>数值存储在<code>0x0</code>的位置上</li><li>每个存储槽可以存储正好<strong>32</strong>字节(或<strong>256</strong>位)</li></ul><p>在本文中我们将会开始研究<code>Solidity</code>如何使用<code>32</code>字节的块来表示更加复杂的数据类型如结构体和数组。我们也将会看到存储是如何被优化的，以及优化是如何失败的。</p><p>在典型编程语言中理解数据类型在底层是如何表示的没有太大的作用。但是在<code>Solidity</code>(或其他的EVM语言)中，这个知识点是非常重要的，因为存储的访问是非常昂贵的：</p><ul><li><code>sstore</code>指令成本是20000 gas，或比基本的算术指令要贵~5000x</li><li><code>sload</code>指令成本是 200 gas，或比基本的算术指令要贵~100x</li></ul><p>这里说的成本，就是真正的金钱，而不仅仅是毫秒级别的性能。运行和使用合约的成本基本上是由<code>sstore</code>指令和<code>sload</code>指令来主导的！</p><h2 id="parsecs磁带上的parsecs" tabindex="-1"><a class="header-anchor" href="#parsecs磁带上的parsecs" aria-hidden="true">#</a> Parsecs磁带上的Parsecs</h2><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gmm7k9gjm5j31e80mqh7z.jpg" alt="image-20210113174357355" loading="lazy"></p><p>构建一个通用计算机器需要两个基本要素：</p><ul><li>一种循环的方式，无论是跳转还是递归</li><li>无限量的内存</li></ul><p><code>EVM</code>的汇编代码有跳转，<code>EVM</code>的存储器提供无限的内存。这对于一切就已经足够了，包括模拟一个运行以太坊的世界，这个世界本身就是一个模拟运行以太坊的世界.........</p><p>EVM的存储器对于合约来说就像一个无限的自动收报机磁带，磁带上的每个槽都能存储32个字节，就像这样：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>[32 bytes][32 bytes][32 bytes]...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们将会看到数据是如何在无限的磁带中生存的。</p><blockquote><p>磁带的长度是2²⁵⁶，或者每个合约~10⁷⁷存储槽。可观测的宇宙粒子数是10⁸⁰。大概1000个合约就可以容纳所有的质子、中子和电子。不要相信营销炒作，因为它比无穷大要短的多。</p></blockquote><h2 id="空磁带" tabindex="-1"><a class="header-anchor" href="#空磁带" aria-hidden="true">#</a> 空磁带</h2><p>存储器初始的时候是空白的，默认是0。拥有无限的磁带不需要任何的成本。</p><p>以一个简单的合约来演示一下0值的行为：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>pragma solidity <span class="token operator">^</span><span class="token number">0.4</span><span class="token number">.11</span><span class="token punctuation">;</span>
contract <span class="token constant">C</span> <span class="token punctuation">{</span>
    uint256 a<span class="token punctuation">;</span>
    uint256 b<span class="token punctuation">;</span>
    uint256 c<span class="token punctuation">;</span>
    uint256 d<span class="token punctuation">;</span>
    uint256 e<span class="token punctuation">;</span>
    uint256 f<span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token constant">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      f <span class="token operator">=</span> <span class="token number">0xc0fefe</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>存储器中的布局很简单。</p><ul><li>变量<code>a</code>在<code>0x0</code>的位置上</li><li>变量<code>b</code>在<code>0x1</code>的位置上</li><li>以此类推.........</li></ul><p>关键问题是：如果我们只使用<code>f</code>，我们需要为<code>a</code>，<code>b</code>，<code>c</code>，<code>d</code>，<code>e</code>支付多少成本？</p><p>编译一下再看：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>solc <span class="token operator">--</span>bin <span class="token operator">--</span><span class="token keyword">asm</span> <span class="token operator">--</span>optimize c<span class="token operator">-</span>many<span class="token operator">-</span>variables<span class="token punctuation">.</span>sol
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>汇编代码：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// sstore(0x5, 0xc0fefe)</span>
tag_2<span class="token operator">:</span>
  <span class="token number">0xc0fefe</span>
  <span class="token number">0x5</span>
  sstore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以一个存储变量的声明不需要任何成本，因为没有初始化的必要。Solidity为存储变量保留了位置，但是只有当你存储数据进去的时候才需要进行付费。</p><p>这样的话，我们只需要为存储<code>0x5</code>进行付费。</p><p>如果我们手动编写汇编代码的话，我们可以选择任意的存储位置，而用不着&quot;扩展&quot;存储器：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 编写一个任意的存储位置</span>
<span class="token function">sstore</span><span class="token punctuation">(</span><span class="token number">0xc0fefe</span><span class="token punctuation">,</span> <span class="token number">0x42</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="读取零" tabindex="-1"><a class="header-anchor" href="#读取零" aria-hidden="true">#</a> 读取零</h2><p>你不仅可以写在存储器的任意位置，你还可以立刻读取任意的位置。从一个未初始化的位置读取只会返回<code>0x0</code>。</p><p>让我们看看一个合约从一个未初始化的位置<code>a</code>读取数据：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>pragma solidity <span class="token operator">^</span><span class="token number">0.4</span><span class="token number">.11</span><span class="token punctuation">;</span>
contract <span class="token constant">C</span> <span class="token punctuation">{</span>
    uint256 a<span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token constant">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      a <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>solc <span class="token operator">--</span>bin <span class="token operator">--</span><span class="token keyword">asm</span> <span class="token operator">--</span>optimize c<span class="token operator">-</span>zero<span class="token operator">-</span>value<span class="token punctuation">.</span>sol
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>汇编代码：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>tag_2<span class="token punctuation">:</span>
  <span class="token comment">// sload(0x0) returning 0x0</span>
  <span class="token number">0x0</span>
  dup1
  sload
  <span class="token comment">// a + 1; where a == 0</span>
  <span class="token number">0x1</span>
  <span class="token keyword">add</span>
  <span class="token comment">// sstore(0x0, a + 1)</span>
  swap1
  sstore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意生成从一个未初始化的位置<code>sload</code>的代码是无效的。</p><p>然而，我们可以比Solidity编译器聪明。既然我们知道<code>tag_2</code>是构造器，而且<code>a</code>从未被写入过数据，那么我们可以用<code>0x0</code>替换掉<code>sload</code>，以此节省5000 gas。</p><h2 id="结构体的表示" tabindex="-1"><a class="header-anchor" href="#结构体的表示" aria-hidden="true">#</a> 结构体的表示</h2><p>来看一下我们的第一个复杂数据类型，一个拥有 6 个域的结构体：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>pragma solidity <span class="token operator">^</span><span class="token number">0.4</span><span class="token punctuation">.</span><span class="token number">11</span><span class="token punctuation">;</span>
contract C <span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Tuple</span> <span class="token punctuation">{</span>
      uint256 a<span class="token punctuation">;</span>
      uint256 b<span class="token punctuation">;</span>
      uint256 c<span class="token punctuation">;</span>
      uint256 d<span class="token punctuation">;</span>
      uint256 e<span class="token punctuation">;</span>
      uint256 f<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    Tuple t<span class="token punctuation">;</span>
    function <span class="token function">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      t<span class="token punctuation">.</span>f <span class="token operator">=</span> <span class="token number">0xC0FEFE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>存储器中的布局和状态变量是一样的：</p><ul><li><code>t.a</code>域在<code>0x0</code>的位置上</li><li><code>t.b</code>域在<code>0x1</code>的位置上</li><li>以此类推.........</li></ul><p>就像之前一样，我们可以直接写入<code>t.f</code>而不用为初始化付费。</p><p>编译一下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>solc <span class="token operator">--</span>bin <span class="token operator">--</span><span class="token keyword">asm</span> <span class="token operator">--</span>optimize c<span class="token operator">-</span><span class="token keyword">struct</span><span class="token operator">-</span>fields<span class="token punctuation">.</span>sol
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后我们看见一模一样的汇编代码：</p><div class="language-undefined line-numbers-mode" data-ext="undefined"><pre class="language-undefined"><code>tag_2:
  0xc0fefe
  0x5
  sstore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="固定长度数组" tabindex="-1"><a class="header-anchor" href="#固定长度数组" aria-hidden="true">#</a> 固定长度数组</h3><p>让我们来声明一个定长数组：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>pragma solidity <span class="token operator">^</span><span class="token number">0.4</span><span class="token number">.11</span><span class="token punctuation">;</span>
contract <span class="token constant">C</span> <span class="token punctuation">{</span>
    uint256<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> numbers<span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token constant">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      numbers<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0xC0FEFE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为编译器知道这里到底有几个<code>uint256</code>(32字节)类型的数值，所以它可以很容易让数组里面的元素依次存储起来，就像它存储变量和结构体一样。</p><p>在这个合约中，我们再次存储到<code>0x5</code>的位置上。</p><p>编译：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>solc <span class="token operator">--</span>bin <span class="token operator">--</span><span class="token keyword">asm</span> <span class="token operator">--</span>optimize c<span class="token operator">-</span><span class="token keyword">static</span><span class="token operator">-</span>array<span class="token punctuation">.</span>sol
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>汇编代码：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>tag_2<span class="token punctuation">:</span>
  <span class="token number">0xc0fefe</span>
  <span class="token number">0x0</span>
  <span class="token number">0x5</span>
tag_4<span class="token punctuation">:</span>
  <span class="token keyword">add</span>
  <span class="token number">0x0</span>
tag_5<span class="token punctuation">:</span>
  pop
  sstore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个稍微长一点，但是如果你仔细一点，你会看见它们其实是一样的。我们手动的来优化一下：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>tag_2<span class="token punctuation">:</span>
  <span class="token number">0xc0fefe</span>
  <span class="token comment">// 0+5. 替换为0x5</span>
  <span class="token number">0x0</span>
  <span class="token number">0x5</span>
  <span class="token keyword">add</span>
  <span class="token comment">// 压入栈中然后立刻出栈。没有作用，只是移除</span>
  <span class="token number">0x0</span>
  pop
  sstore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>移除掉标记和伪指令之后，我们再次得到相同的字节码序列：</p><div class="language-undefined line-numbers-mode" data-ext="undefined"><pre class="language-undefined"><code>tag_2:
  0xc0fefe
  0x5
  sstore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组边界检查" tabindex="-1"><a class="header-anchor" href="#数组边界检查" aria-hidden="true">#</a> 数组边界检查</h2><p>我们看到了定长数组、结构体和状态变量在存储器中的布局是一样的，但是产生的汇编代码是不同的。这是因为<code>Solidity</code>为数组的访问产生了边界检查代码。</p><p>让我们再次编译数组合约，这次去掉优化的选项：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>solc <span class="token operator">--</span>bin <span class="token operator">--</span><span class="token keyword">asm</span> c<span class="token operator">-</span><span class="token keyword">static</span><span class="token operator">-</span>array<span class="token punctuation">.</span>sol
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>汇编代码在下面已经注释了，并且打印出每条指令的机器状态：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>tag_2<span class="token punctuation">:</span>
  <span class="token number">0xc0fefe</span>
    <span class="token punctuation">[</span><span class="token number">0xc0fefe</span><span class="token punctuation">]</span>
  <span class="token number">0x5</span>
    <span class="token punctuation">[</span><span class="token number">0x5</span> <span class="token number">0xc0fefe</span><span class="token punctuation">]</span>
  dup1
  <span class="token comment">/* 数组边界检查代码 */</span>
  <span class="token comment">// 5 &lt; 6</span>
  <span class="token number">0x6</span>
    <span class="token punctuation">[</span><span class="token number">0x6</span> <span class="token number">0x5</span> <span class="token number">0xc0fefe</span><span class="token punctuation">]</span>
  dup2
    <span class="token punctuation">[</span><span class="token number">0x5</span> <span class="token number">0x6</span> <span class="token number">0x5</span> <span class="token number">0xc0fefe</span><span class="token punctuation">]</span>
  lt
    <span class="token punctuation">[</span><span class="token number">0x1</span> <span class="token number">0x5</span> <span class="token number">0xc0fefe</span><span class="token punctuation">]</span>
  <span class="token comment">// bound_check_ok = 1 (TRUE)</span>
  <span class="token comment">// if(bound_check_ok) { goto tag5 } else { invalid }</span>
  tag_5
    <span class="token punctuation">[</span>tag_5 <span class="token number">0x1</span> <span class="token number">0x5</span> <span class="token number">0xc0fefe</span><span class="token punctuation">]</span>
  jumpi
    <span class="token comment">// 测试条件为真，跳转到 tag_5.</span>
    <span class="token comment">//  \`jumpi\` 从栈中消耗两项数据</span>
    <span class="token punctuation">[</span><span class="token number">0x5</span> <span class="token number">0xc0fefe</span><span class="token punctuation">]</span>
  invalid
<span class="token comment">// 数据访问有效，继续执行</span>
<span class="token comment">// stack: [0x5 0xc0fefe]</span>
tag_5<span class="token punctuation">:</span>
  <span class="token class-name">sstore
    <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
    storage<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token number">0x5</span> <span class="token operator">=&gt;</span> <span class="token number">0xc0fefe</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们现在已经看见了边界检查代码。我们也看见了编译器可以对这类东西进行一些优化，但是不是非常完美。</p><p>在本文的后面我们将会看到数组的边界检查是如何干扰编译器优化的，比起存储变量和结构体，定长数组的效率更低。</p><h2 id="打包行为" tabindex="-1"><a class="header-anchor" href="#打包行为" aria-hidden="true">#</a> 打包行为</h2><p>存储是非常昂贵的。一个关键的优化就是尽可能的将数据打包成一个32字节数值。</p><p>考虑一个有 4 个存储变量的合约，每个变量都是 64 位，全部加起来就是 256 位（32字节）：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>pragma solidity <span class="token operator">^</span><span class="token number">0.4</span><span class="token number">.11</span><span class="token punctuation">;</span>
contract C <span class="token punctuation">{</span>
    <span class="token builtin">uint64</span> a<span class="token punctuation">;</span>
    <span class="token builtin">uint64</span> b<span class="token punctuation">;</span>
    <span class="token builtin">uint64</span> c<span class="token punctuation">;</span>
    <span class="token builtin">uint64</span> d<span class="token punctuation">;</span>
    function <span class="token function">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      a <span class="token operator">=</span> <span class="token number">0xaaaa</span><span class="token punctuation">;</span>
      b <span class="token operator">=</span> <span class="token number">0xbbbb</span><span class="token punctuation">;</span>
      c <span class="token operator">=</span> <span class="token number">0xcccc</span><span class="token punctuation">;</span>
      d <span class="token operator">=</span> <span class="token number">0xdddd</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们期望（希望）编译器使用一个<code>sstore</code>指令将这些数据存放到同一个存储槽中。</p><p>编译：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>solc <span class="token operator">--</span>bin <span class="token operator">--</span><span class="token keyword">asm</span> <span class="token operator">--</span>optimize c<span class="token operator">-</span>many<span class="token operator">-</span>variables<span class="token operator">--</span>packing<span class="token punctuation">.</span>sol
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>汇编代码：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>tag_2<span class="token operator">:</span>
    <span class="token comment">/* &quot;c-many-variables--packing.sol&quot;:121:122  a */</span>
  <span class="token number">0x0</span>
    <span class="token comment">/* &quot;c-many-variables--packing.sol&quot;:121:131  a = 0xaaaa */</span>
  dup1
  sload
    <span class="token comment">/* &quot;c-many-variables--packing.sol&quot;:125:131  0xaaaa */</span>
  <span class="token number">0xaaaa</span>
  <span class="token function">not</span><span class="token punctuation">(</span><span class="token number">0xffffffffffffffff</span><span class="token punctuation">)</span>
    <span class="token comment">/* &quot;c-many-variables--packing.sol&quot;:121:131  a = 0xaaaa */</span>
  swap1
  swap2
  <span class="token operator">and</span>
  <span class="token operator">or</span>
  <span class="token function">not</span><span class="token punctuation">(</span><span class="token function">sub</span><span class="token punctuation">(</span><span class="token function">exp</span><span class="token punctuation">(</span><span class="token number">0x2</span><span class="token punctuation">,</span> <span class="token number">0x80</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">exp</span><span class="token punctuation">(</span><span class="token number">0x2</span><span class="token punctuation">,</span> <span class="token number">0x40</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">/* &quot;c-many-variables--packing.sol&quot;:139:149  b = 0xbbbb */</span>
  <span class="token operator">and</span>
  <span class="token number">0xbbbb0000000000000000</span>
  <span class="token operator">or</span>
  <span class="token function">not</span><span class="token punctuation">(</span><span class="token function">sub</span><span class="token punctuation">(</span><span class="token function">exp</span><span class="token punctuation">(</span><span class="token number">0x2</span><span class="token punctuation">,</span> <span class="token number">0xc0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">exp</span><span class="token punctuation">(</span><span class="token number">0x2</span><span class="token punctuation">,</span> <span class="token number">0x80</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">/* &quot;c-many-variables--packing.sol&quot;:157:167  c = 0xcccc */</span>
  <span class="token operator">and</span>
  <span class="token number">0xcccc00000000000000000000000000000000</span>
  <span class="token operator">or</span>
  <span class="token function">sub</span><span class="token punctuation">(</span><span class="token function">exp</span><span class="token punctuation">(</span><span class="token number">0x2</span><span class="token punctuation">,</span> <span class="token number">0xc0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0x1</span><span class="token punctuation">)</span>
    <span class="token comment">/* &quot;c-many-variables--packing.sol&quot;:175:185  d = 0xdddd */</span>
  <span class="token operator">and</span>
  <span class="token number">0xdddd000000000000000000000000000000000000000000000000</span>
  <span class="token operator">or</span>
  swap1
  sstore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里还是有很多的位转移我没能弄明白，但是无所谓。最关键事情是这里只有一个<code>sstore</code>指令。</p><p>这样优化就成功！</p><h2 id="干扰优化器" tabindex="-1"><a class="header-anchor" href="#干扰优化器" aria-hidden="true">#</a> 干扰优化器</h2><p>优化器并不能一直工作的这么好。让我们来干扰一下优化器。唯一的改变就是使用协助函数来设置存储变量：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>pragma solidity <span class="token operator">^</span><span class="token number">0.4</span><span class="token number">.11</span><span class="token punctuation">;</span>
contract <span class="token constant">C</span> <span class="token punctuation">{</span>
    uint64 a<span class="token punctuation">;</span>
    uint64 b<span class="token punctuation">;</span>
    uint64 c<span class="token punctuation">;</span>
    uint64 d<span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token constant">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setAB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setCD</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">setAB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> internal <span class="token punctuation">{</span>
      a <span class="token operator">=</span> <span class="token number">0xaaaa</span><span class="token punctuation">;</span>
      b <span class="token operator">=</span> <span class="token number">0xbbbb</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">setCD</span><span class="token punctuation">(</span><span class="token punctuation">)</span> internal <span class="token punctuation">{</span>
      c <span class="token operator">=</span> <span class="token number">0xcccc</span><span class="token punctuation">;</span>
      d <span class="token operator">=</span> <span class="token number">0xdddd</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>solc <span class="token operator">--</span>bin <span class="token operator">--</span><span class="token keyword">asm</span> <span class="token operator">--</span>optimize c<span class="token operator">-</span>many<span class="token operator">-</span>variables<span class="token operator">--</span>packing<span class="token operator">-</span>helpers<span class="token punctuation">.</span>sol
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出的汇编代码太多了，我们忽略了大多数的细节，只关注结构体：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 构造器函数</span>
tag_2<span class="token operator">:</span>
  <span class="token comment">// ...</span>
  <span class="token comment">// 通过跳到tag_5来调用setAB()</span>
  jump
tag_4<span class="token operator">:</span>
  <span class="token comment">// ...</span>
  <span class="token comment">//通过跳到tag_7来调用setCD() </span>
  jump
<span class="token comment">// setAB()函数</span>
tag_5<span class="token operator">:</span>
  <span class="token comment">// 进行位转移和设置a，b</span>
  <span class="token comment">// ...</span>
  sstore
tag_9<span class="token operator">:</span>
  jump  <span class="token comment">// 返回到调用setAB()的地方</span>
<span class="token comment">//setCD()函数</span>
tag_7<span class="token operator">:</span>
  <span class="token comment">// 进行位转移和设置c，d</span>
  <span class="token comment">// ...</span>
  sstore
tag_10<span class="token operator">:</span>
  jump  <span class="token comment">// 返回到调用setCD()的地方</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在这里有两个<code>sstore</code>指令而不是一个。Solidity编译器可以优化一个标签内的东西，但是无法优化跨标签的。</p><p>调用函数会让你消耗更多的成本，不是因为函数调用昂贵（他们只是一个跳转指令），而是因为<code>sstore</code>指令的优化可能会失败。</p><p>为了解决这个问题，Solidity编译器应该学会如何內联函数，本质上就是不用调用函数也能得到相同的代码：</p><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code>a <span class="token operator">=</span> <span class="token number">0xaaaa</span><span class="token punctuation">;</span>
b <span class="token operator">=</span> <span class="token number">0xbbbb</span><span class="token punctuation">;</span>
c <span class="token operator">=</span> <span class="token number">0xcccc</span><span class="token punctuation">;</span>
d <span class="token operator">=</span> <span class="token number">0xdddd</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果我们仔细阅读输出的完整汇编代码，我们会看见<code>setAB()</code>和<code>setCD()</code>函数的汇编代码被包含了两次，不仅使代码变得臃肿了，并且还需要花费额外的gas来部署合约。在学习合约的生命周期时我们再来谈谈这个问题。</p></blockquote><h2 id="为什么优化器会被干扰" tabindex="-1"><a class="header-anchor" href="#为什么优化器会被干扰" aria-hidden="true">#</a> 为什么优化器会被干扰？</h2><p>因为优化器不会跨标签进行优化。思考一下&quot;1+1&quot;，在同一个标签下，它会被优化成<code>0x2</code>:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 优化成功！</span>
tag_0<span class="token punctuation">:</span>
  <span class="token number">0x1</span>
  <span class="token number">0x1</span>
  <span class="token keyword">add</span>
  <span class="token range operator">..</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是如果指令被标签分开的话就不会被优化了：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 优化失败！</span>
tag_0<span class="token punctuation">:</span>
  <span class="token number">0x1</span>
  <span class="token number">0x1</span>
tag_1<span class="token punctuation">:</span>
  <span class="token keyword">add</span>
  <span class="token range operator">..</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在0.4.13版本中上面的行为都是真实的。也许未来会改变。</p><h2 id="再次干扰优化器" tabindex="-1"><a class="header-anchor" href="#再次干扰优化器" aria-hidden="true">#</a> 再次干扰优化器</h2><p>让我们看看优化器失败的另一种方式，打包适用于定长数组吗？思考一下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>pragma solidity <span class="token operator">^</span><span class="token number">0.4</span><span class="token number">.11</span><span class="token punctuation">;</span>
contract <span class="token constant">C</span> <span class="token punctuation">{</span>
    uint64<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> numbers<span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token constant">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      numbers<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0x0</span><span class="token punctuation">;</span>
      numbers<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0x1111</span><span class="token punctuation">;</span>
      numbers<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0x2222</span><span class="token punctuation">;</span>
      numbers<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0x3333</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再一次，这里有4个64位的数值我们希望能打包成一个32位的数值，只使用一个<code>sstore</code>指令。</p><p>编译的汇编代码太长了，我们就数数<code>sstore</code>和<code>sload</code>指令的条数：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>$ solc <span class="token operator">--</span>bin <span class="token operator">--</span>asm <span class="token operator">--</span>optimize c<span class="token operator">-</span><span class="token keyword">static</span><span class="token operator">-</span><span class="token keyword type-declaration">array</span><span class="token operator">--</span>packing<span class="token operator">.</span><span class="token class-name">sol</span> <span class="token operator">|</span> <span class="token class-name">grep</span> <span class="token operator">-</span><span class="token constant">E</span> <span class="token string single-quoted-string">&#39;(sstore|sload)&#39;</span>
  sload
  sstore
  sload
  sstore
  sload
  sstore
  sload
  sstore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>哦，不！即使定长数组与等效的结构体和存储变量的存储布局是一样的，优化也失败了。现在需要4对<code>sload</code>和<code>sstore</code>指令。</p><p>快速的看一下汇编代码，可以发现每个数组的访问都有一个边界检查代码，它们在不同的标签下被组织起来。优化无法跨标签，所以优化失败。</p><p>不过有个小安慰。其他额外的3个<code>sstore</code>指令比第一个要便宜：</p><ul><li><code>sstore</code>指令第一次写入一个新位置需要花费 20000 gas</li><li><code>sstore</code>指令后续写入一个已存在的位置需要花费 5000 gas</li></ul><p>所以这个特殊的优化失败会花费我们35000 gas而不是20000 gas，多了额外的75%。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>如果Solidity编译器能弄清楚存储变量的大小，它就会将这些变量依次的放入存储器中。如果可能的话，编译器会将数据紧密的打包成32字节的块。</p><p>总结一下目前我们见到的打包行为：</p><ul><li>存储变量：打包</li><li>结构体：打包</li><li>定长数组：不打包。在理论上应该是打包的</li></ul><p>因为存储器访问的成本较高，所以你应该将存储变量作为自己的数据库模式。当写一个合约时，做一个小实验是比较有用的，检测汇编代码看看编译器是否进行了正确的优化。</p><p>我们可以肯定Solidity编译器在未来肯定会改良。对于现在而言，很不幸，我们不能盲目的相信它的优化器。</p><p>它需要你真正的理解存储变量。</p>`,121);function v(m,k){const a=o("ExternalLinkIcon");return p(),c("div",null,[d,n("blockquote",null,[n("p",null,[s("翻译自 "),n("a",u,[s("https://medium.com/@hayeah/diving-into-the-ethereum-vm-part-2-storage-layout-bc5349cb11b7"),i(a)])])]),r])}const x=e(l,[["render",v],["__file","20.etheric_fang_source_analysis_of_EVM_entry_fixed_length_data_types.html.vue"]]);export{x as default};
