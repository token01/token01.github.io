import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as u,a as e,b as i,d as t,e as l,r as a}from"./app.11a9ee6c.js";const o={},r=l(`<blockquote><p>浅谈以太坊源码分析之EVM指令集</p><p>以下指令集持续更新，最新文章请参考上面</p></blockquote><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gn1z0rqeqaj31c00u0k20.jpg" alt="f4a720afd869d70c3d1d2149980ba0e9" loading="lazy"></p><h2 id="evm-指令集概念" tabindex="-1"><a class="header-anchor" href="#evm-指令集概念" aria-hidden="true">#</a> EVM 指令集概念</h2><p><strong>EVM执行的是字节码</strong>。由于操作码被限制在一个字节以内，所以EVM指令集最多只能容纳<strong>256</strong>条指令。目前EVM已经定义了<code>100</code>多条指令，还有<strong>100</strong>多条指令可供以后扩展。<strong>这100多条指令包括算术运算指令，比较操作指令，按位运算指令，密码学计算指令，栈、memory、storage操作指令，跳转指令，区块、智能合约相关指令等</strong>。</p><h2 id="evm指令集" tabindex="-1"><a class="header-anchor" href="#evm指令集" aria-hidden="true">#</a> EVM指令集</h2><h3 id="算数运算指令集" tabindex="-1"><a class="header-anchor" href="#算数运算指令集" aria-hidden="true">#</a> 算数运算指令集</h3><blockquote><p><em>0x0</em></p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	STOP:       &quot;STOP&quot;,
	ADD:        &quot;ADD&quot;, //加法运算
	MUL:        &quot;MUL&quot;, //乘法运算
	SUB:        &quot;SUB&quot;, //减法运算
	DIV:        &quot;DIV&quot;, //无符号整除运算
	SDIV:       &quot;SDIV&quot;, //有符号整除运算
	MOD:        &quot;MOD&quot;, //无符号取模运算
	SMOD:       &quot;SMOD&quot;, //有符号取模运算
	EXP:        &quot;EXP&quot;,  //指数运算
	NOT:        &quot;NOT&quot;,
	
	//从栈顶弹出两个元素，进行比较，
	//然后把结果（1表示true，0表示false）推入栈顶。
	//其中LT和GT把弹出的元素解释为无符号整数进行比较，
	//SLT和SGT把弹出的元素解释为有符号数进行比较，EQ不关心符号
	LT:         &quot;LT&quot;,  //无符号小于比较
	GT:         &quot;GT&quot;, //无符号大于比较
	SLT:        &quot;SLT&quot;, //有符号小于比较
	SGT:        &quot;SGT&quot;, //有符号大于比较
	EQ:         &quot;EQ&quot;,  // 等于比较
	
	//SZERO指令从栈顶弹出一个元素，判断它是否为0，如果是，则把1推入栈顶，否则把0推入栈顶
	ISZERO:     &quot;ISZERO&quot;, //布尔取反
	
	//SIGNEXTEND指令从栈顶依次弹出k和x，并
	//把x解释为k+1（0 &lt;= k &lt;= 31）字节有符号整数，然
	//后把x符号扩展至32字节。比如x是二进制10000000，k是0，
	//则符号扩展之后，结果为二进制1111…10000000（共249个1）
	SIGNEXTEND: &quot;SIGNEXTEND&quot; //符号位扩展
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="位运算指令集" tabindex="-1"><a class="header-anchor" href="#位运算指令集" aria-hidden="true">#</a> 位运算指令集</h3><blockquote><p><em>0x10</em></p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	//AND、OR、XOR指令从栈顶弹出两个元素，进行按位运算，然后把结果推入栈顶
	AND:    &quot;AND&quot;,
	OR:     &quot;OR&quot;,
	XOR:    &quot;XOR&quot;,
	
	//BYTE指令先后从栈顶弹出n和x，取x的第n个字节并推入栈顶。
	//由于EVM的字长是32个字节，所以n在[0, 31]区间内才有意义，
	//否则BYTE的运算结果就是0。另外，字节是从左到右数的，因此第0个字节占据字的最高位8个比特
	BYTE:   &quot;BYTE&quot;, 
	
	//这三条指令都是先后从栈顶弹出两个数n和x，
	//其中x是要进行位移操作顶数，n是位移比特数，然后把结果推入栈顶
	SHL:    &quot;SHL&quot;,
	//SHR和SAR的区别在于，前者执行逻辑右移（空缺补0），后者执行算术右移（空缺补符号位）
	SHR:    &quot;SHR&quot;,
	SAR:    &quot;SAR&quot;,
	
	ADDMOD: &quot;ADDMOD&quot;,
	
	//MULMOD指令依次从栈顶弹出x、y、z三个数，
	//先计算x和y的乘积（不受溢出限制），再计算乘积和z的模，最后把结果推入栈顶
	//假定乘积不会溢出，那么MULMOD(x, y, z)等价于x * y % z
	MULMOD: &quot;MULMOD&quot;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加密指令集" tabindex="-1"><a class="header-anchor" href="#加密指令集" aria-hidden="true">#</a> 加密指令集</h3><blockquote><p><em>0x20</em></p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHA3: &quot;SHA3&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="关闭状态指令集" tabindex="-1"><a class="header-anchor" href="#关闭状态指令集" aria-hidden="true">#</a> 关闭状态指令集</h3><blockquote><p><em>0x30</em></p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   ADDRESS:        &quot;ADDRESS&quot;,
	BALANCE:        &quot;BALANCE&quot;,
	ORIGIN:         &quot;ORIGIN&quot;,
	CALLER:         &quot;CALLER&quot;,
	CALLVALUE:      &quot;CALLVALUE&quot;,
	CALLDATALOAD:   &quot;CALLDATALOAD&quot;,
	CALLDATASIZE:   &quot;CALLDATASIZE&quot;,
	CALLDATACOPY:   &quot;CALLDATACOPY&quot;,
	CODESIZE:       &quot;CODESIZE&quot;,
	CODECOPY:       &quot;CODECOPY&quot;,
	GASPRICE:       &quot;GASPRICE&quot;,
	EXTCODESIZE:    &quot;EXTCODESIZE&quot;,
	EXTCODECOPY:    &quot;EXTCODECOPY&quot;,
	RETURNDATASIZE: &quot;RETURNDATASIZE&quot;,
	RETURNDATACOPY: &quot;RETURNDATACOPY&quot;,
	EXTCODEHASH:    &quot;EXTCODEHASH&quot;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="块操作指令集" tabindex="-1"><a class="header-anchor" href="#块操作指令集" aria-hidden="true">#</a> 块操作指令集</h3><blockquote><p><em>0x40</em></p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	BLOCKHASH:   &quot;BLOCKHASH&quot;,
	COINBASE:    &quot;COINBASE&quot;,
	TIMESTAMP:   &quot;TIMESTAMP&quot;,
	NUMBER:      &quot;NUMBER&quot;,
	DIFFICULTY:  &quot;DIFFICULTY&quot;,
	GASLIMIT:    &quot;GASLIMIT&quot;,
	CHAINID:     &quot;CHAINID&quot;,
	SELFBALANCE: &quot;SELFBALANCE&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="存储和执行指令集" tabindex="-1"><a class="header-anchor" href="#存储和执行指令集" aria-hidden="true">#</a> 存储和执行指令集</h3><blockquote><p><em>0x50</em></p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	POP: &quot;POP&quot;,  // 栈顶弹出元素
	MLOAD:    &quot;MLOAD&quot;,
	MSTORE:   &quot;MSTORE&quot;,
	MSTORE8:  &quot;MSTORE8&quot;,
	SLOAD:    &quot;SLOAD&quot;, //先取出栈顶元素x，然后在storage中取以x为键的值（storage[x]）存入栈顶
	SSTORE:   &quot;SSTORE&quot;, //存储storage是一个键值存储，可将256位字映射到256位字
	JUMP:     &quot;JUMP&quot;,
	JUMPI:    &quot;JUMPI&quot;,
	PC:       &quot;PC&quot;,
	MSIZE:    &quot;MSIZE&quot;,
	GAS:      &quot;GAS&quot;,
	JUMPDEST: &quot;JUMPDEST&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="push指令集" tabindex="-1"><a class="header-anchor" href="#push指令集" aria-hidden="true">#</a> Push指令集</h3><blockquote><p><em>0x60</em></p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	// PUSH系列指令把紧跟在指令后面的N（1 ～ 32）字节元素推入栈顶
	PUSH1:  &quot;PUSH1&quot;,
	...
	PUSH32: &quot;PUSH32&quot;,

    //DUP系列指令复制从栈顶开始数的第N（1 ～ 16）个元素，并把复制后的元素推入栈顶
	DUP1:  &quot;DUP1&quot;,
	DUP2:  &quot;DUP2&quot;,
	...
	DUP16: &quot;DUP16&quot;,

	//SWAP系列指令把栈顶元素和从栈顶开始数的第N（1 ～ 16）+ 1 个元素进行交换。
	SWAP1:  &quot;SWAP1&quot;,
	...
	SWAP16: &quot;SWAP16&quot;,
	
	LOG0:   &quot;LOG0&quot;,
	...
	LOG4:   &quot;LOG4&quot;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,27),v={href:"https://mindcarver.cn",target:"_blank",rel:"noopener noreferrer"},c={href:"https://github.com/blockchainGuide",target:"_blank",rel:"noopener noreferrer"};function m(q,b){const n=a("ExternalLinkIcon");return s(),u("div",null,[r,e("blockquote",null,[e("p",null,[e("a",v,[i("https://mindcarver.cn"),t(n)])]),e("p",null,[e("a",c,[i("https://github.com/blockchainGuide"),t(n)])])])])}const S=d(o,[["render",m],["__file","19.etheric_fang_evm_Instruction_set.html.vue"]]);export{S as default};
