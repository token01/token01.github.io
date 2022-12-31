import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as d,a as e,b as s,d as u,f as l,r as a}from"./app.002b82c0.js";const o={},v=l(`<blockquote><p>\u6D45\u8C08\u4EE5\u592A\u574A\u6E90\u7801\u5206\u6790\u4E4BEVM\u6307\u4EE4\u96C6</p><p>\u4EE5\u4E0B\u6307\u4EE4\u96C6\u6301\u7EED\u66F4\u65B0\uFF0C\u6700\u65B0\u6587\u7AE0\u8BF7\u53C2\u8003\u4E0A\u9762</p></blockquote><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gn1z0rqeqaj31c00u0k20.jpg" alt="f4a720afd869d70c3d1d2149980ba0e9"></p><h2 id="evm-\u6307\u4EE4\u96C6\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#evm-\u6307\u4EE4\u96C6\u6982\u5FF5" aria-hidden="true">#</a> EVM \u6307\u4EE4\u96C6\u6982\u5FF5</h2><p><strong>EVM\u6267\u884C\u7684\u662F\u5B57\u8282\u7801</strong>\u3002\u7531\u4E8E\u64CD\u4F5C\u7801\u88AB\u9650\u5236\u5728\u4E00\u4E2A\u5B57\u8282\u4EE5\u5185\uFF0C\u6240\u4EE5EVM\u6307\u4EE4\u96C6\u6700\u591A\u53EA\u80FD\u5BB9\u7EB3<strong>256</strong>\u6761\u6307\u4EE4\u3002\u76EE\u524DEVM\u5DF2\u7ECF\u5B9A\u4E49\u4E86<code>100</code>\u591A\u6761\u6307\u4EE4\uFF0C\u8FD8\u6709<strong>100</strong>\u591A\u6761\u6307\u4EE4\u53EF\u4F9B\u4EE5\u540E\u6269\u5C55\u3002<strong>\u8FD9100\u591A\u6761\u6307\u4EE4\u5305\u62EC\u7B97\u672F\u8FD0\u7B97\u6307\u4EE4\uFF0C\u6BD4\u8F83\u64CD\u4F5C\u6307\u4EE4\uFF0C\u6309\u4F4D\u8FD0\u7B97\u6307\u4EE4\uFF0C\u5BC6\u7801\u5B66\u8BA1\u7B97\u6307\u4EE4\uFF0C\u6808\u3001memory\u3001storage\u64CD\u4F5C\u6307\u4EE4\uFF0C\u8DF3\u8F6C\u6307\u4EE4\uFF0C\u533A\u5757\u3001\u667A\u80FD\u5408\u7EA6\u76F8\u5173\u6307\u4EE4\u7B49</strong>\u3002</p><h2 id="evm\u6307\u4EE4\u96C6" tabindex="-1"><a class="header-anchor" href="#evm\u6307\u4EE4\u96C6" aria-hidden="true">#</a> EVM\u6307\u4EE4\u96C6</h2><h3 id="\u7B97\u6570\u8FD0\u7B97\u6307\u4EE4\u96C6" tabindex="-1"><a class="header-anchor" href="#\u7B97\u6570\u8FD0\u7B97\u6307\u4EE4\u96C6" aria-hidden="true">#</a> \u7B97\u6570\u8FD0\u7B97\u6307\u4EE4\u96C6</h3><blockquote><p><em>0x0</em></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	STOP:       &quot;STOP&quot;,
	ADD:        &quot;ADD&quot;, //\u52A0\u6CD5\u8FD0\u7B97
	MUL:        &quot;MUL&quot;, //\u4E58\u6CD5\u8FD0\u7B97
	SUB:        &quot;SUB&quot;, //\u51CF\u6CD5\u8FD0\u7B97
	DIV:        &quot;DIV&quot;, //\u65E0\u7B26\u53F7\u6574\u9664\u8FD0\u7B97
	SDIV:       &quot;SDIV&quot;, //\u6709\u7B26\u53F7\u6574\u9664\u8FD0\u7B97
	MOD:        &quot;MOD&quot;, //\u65E0\u7B26\u53F7\u53D6\u6A21\u8FD0\u7B97
	SMOD:       &quot;SMOD&quot;, //\u6709\u7B26\u53F7\u53D6\u6A21\u8FD0\u7B97
	EXP:        &quot;EXP&quot;,  //\u6307\u6570\u8FD0\u7B97
	NOT:        &quot;NOT&quot;,
	
	//\u4ECE\u6808\u9876\u5F39\u51FA\u4E24\u4E2A\u5143\u7D20\uFF0C\u8FDB\u884C\u6BD4\u8F83\uFF0C
	//\u7136\u540E\u628A\u7ED3\u679C\uFF081\u8868\u793Atrue\uFF0C0\u8868\u793Afalse\uFF09\u63A8\u5165\u6808\u9876\u3002
	//\u5176\u4E2DLT\u548CGT\u628A\u5F39\u51FA\u7684\u5143\u7D20\u89E3\u91CA\u4E3A\u65E0\u7B26\u53F7\u6574\u6570\u8FDB\u884C\u6BD4\u8F83\uFF0C
	//SLT\u548CSGT\u628A\u5F39\u51FA\u7684\u5143\u7D20\u89E3\u91CA\u4E3A\u6709\u7B26\u53F7\u6570\u8FDB\u884C\u6BD4\u8F83\uFF0CEQ\u4E0D\u5173\u5FC3\u7B26\u53F7
	LT:         &quot;LT&quot;,  //\u65E0\u7B26\u53F7\u5C0F\u4E8E\u6BD4\u8F83
	GT:         &quot;GT&quot;, //\u65E0\u7B26\u53F7\u5927\u4E8E\u6BD4\u8F83
	SLT:        &quot;SLT&quot;, //\u6709\u7B26\u53F7\u5C0F\u4E8E\u6BD4\u8F83
	SGT:        &quot;SGT&quot;, //\u6709\u7B26\u53F7\u5927\u4E8E\u6BD4\u8F83
	EQ:         &quot;EQ&quot;,  // \u7B49\u4E8E\u6BD4\u8F83
	
	//SZERO\u6307\u4EE4\u4ECE\u6808\u9876\u5F39\u51FA\u4E00\u4E2A\u5143\u7D20\uFF0C\u5224\u65AD\u5B83\u662F\u5426\u4E3A0\uFF0C\u5982\u679C\u662F\uFF0C\u5219\u628A1\u63A8\u5165\u6808\u9876\uFF0C\u5426\u5219\u628A0\u63A8\u5165\u6808\u9876
	ISZERO:     &quot;ISZERO&quot;, //\u5E03\u5C14\u53D6\u53CD
	
	//SIGNEXTEND\u6307\u4EE4\u4ECE\u6808\u9876\u4F9D\u6B21\u5F39\u51FAk\u548Cx\uFF0C\u5E76
	//\u628Ax\u89E3\u91CA\u4E3Ak+1\uFF080 &lt;= k &lt;= 31\uFF09\u5B57\u8282\u6709\u7B26\u53F7\u6574\u6570\uFF0C\u7136
	//\u540E\u628Ax\u7B26\u53F7\u6269\u5C55\u81F332\u5B57\u8282\u3002\u6BD4\u5982x\u662F\u4E8C\u8FDB\u523610000000\uFF0Ck\u662F0\uFF0C
	//\u5219\u7B26\u53F7\u6269\u5C55\u4E4B\u540E\uFF0C\u7ED3\u679C\u4E3A\u4E8C\u8FDB\u52361111\u202610000000\uFF08\u5171249\u4E2A1\uFF09
	SIGNEXTEND: &quot;SIGNEXTEND&quot; //\u7B26\u53F7\u4F4D\u6269\u5C55
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F4D\u8FD0\u7B97\u6307\u4EE4\u96C6" tabindex="-1"><a class="header-anchor" href="#\u4F4D\u8FD0\u7B97\u6307\u4EE4\u96C6" aria-hidden="true">#</a> \u4F4D\u8FD0\u7B97\u6307\u4EE4\u96C6</h3><blockquote><p><em>0x10</em></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	//AND\u3001OR\u3001XOR\u6307\u4EE4\u4ECE\u6808\u9876\u5F39\u51FA\u4E24\u4E2A\u5143\u7D20\uFF0C\u8FDB\u884C\u6309\u4F4D\u8FD0\u7B97\uFF0C\u7136\u540E\u628A\u7ED3\u679C\u63A8\u5165\u6808\u9876
	AND:    &quot;AND&quot;,
	OR:     &quot;OR&quot;,
	XOR:    &quot;XOR&quot;,
	
	//BYTE\u6307\u4EE4\u5148\u540E\u4ECE\u6808\u9876\u5F39\u51FAn\u548Cx\uFF0C\u53D6x\u7684\u7B2Cn\u4E2A\u5B57\u8282\u5E76\u63A8\u5165\u6808\u9876\u3002
	//\u7531\u4E8EEVM\u7684\u5B57\u957F\u662F32\u4E2A\u5B57\u8282\uFF0C\u6240\u4EE5n\u5728[0, 31]\u533A\u95F4\u5185\u624D\u6709\u610F\u4E49\uFF0C
	//\u5426\u5219BYTE\u7684\u8FD0\u7B97\u7ED3\u679C\u5C31\u662F0\u3002\u53E6\u5916\uFF0C\u5B57\u8282\u662F\u4ECE\u5DE6\u5230\u53F3\u6570\u7684\uFF0C\u56E0\u6B64\u7B2C0\u4E2A\u5B57\u8282\u5360\u636E\u5B57\u7684\u6700\u9AD8\u4F4D8\u4E2A\u6BD4\u7279
	BYTE:   &quot;BYTE&quot;, 
	
	//\u8FD9\u4E09\u6761\u6307\u4EE4\u90FD\u662F\u5148\u540E\u4ECE\u6808\u9876\u5F39\u51FA\u4E24\u4E2A\u6570n\u548Cx\uFF0C
	//\u5176\u4E2Dx\u662F\u8981\u8FDB\u884C\u4F4D\u79FB\u64CD\u4F5C\u9876\u6570\uFF0Cn\u662F\u4F4D\u79FB\u6BD4\u7279\u6570\uFF0C\u7136\u540E\u628A\u7ED3\u679C\u63A8\u5165\u6808\u9876
	SHL:    &quot;SHL&quot;,
	//SHR\u548CSAR\u7684\u533A\u522B\u5728\u4E8E\uFF0C\u524D\u8005\u6267\u884C\u903B\u8F91\u53F3\u79FB\uFF08\u7A7A\u7F3A\u88650\uFF09\uFF0C\u540E\u8005\u6267\u884C\u7B97\u672F\u53F3\u79FB\uFF08\u7A7A\u7F3A\u8865\u7B26\u53F7\u4F4D\uFF09
	SHR:    &quot;SHR&quot;,
	SAR:    &quot;SAR&quot;,
	
	ADDMOD: &quot;ADDMOD&quot;,
	
	//MULMOD\u6307\u4EE4\u4F9D\u6B21\u4ECE\u6808\u9876\u5F39\u51FAx\u3001y\u3001z\u4E09\u4E2A\u6570\uFF0C
	//\u5148\u8BA1\u7B97x\u548Cy\u7684\u4E58\u79EF\uFF08\u4E0D\u53D7\u6EA2\u51FA\u9650\u5236\uFF09\uFF0C\u518D\u8BA1\u7B97\u4E58\u79EF\u548Cz\u7684\u6A21\uFF0C\u6700\u540E\u628A\u7ED3\u679C\u63A8\u5165\u6808\u9876
	//\u5047\u5B9A\u4E58\u79EF\u4E0D\u4F1A\u6EA2\u51FA\uFF0C\u90A3\u4E48MULMOD(x, y, z)\u7B49\u4EF7\u4E8Ex * y % z
	MULMOD: &quot;MULMOD&quot;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u52A0\u5BC6\u6307\u4EE4\u96C6" tabindex="-1"><a class="header-anchor" href="#\u52A0\u5BC6\u6307\u4EE4\u96C6" aria-hidden="true">#</a> \u52A0\u5BC6\u6307\u4EE4\u96C6</h3><blockquote><p><em>0x20</em></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SHA3: &quot;SHA3&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5173\u95ED\u72B6\u6001\u6307\u4EE4\u96C6" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED\u72B6\u6001\u6307\u4EE4\u96C6" aria-hidden="true">#</a> \u5173\u95ED\u72B6\u6001\u6307\u4EE4\u96C6</h3><blockquote><p><em>0x30</em></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   ADDRESS:        &quot;ADDRESS&quot;,
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5757\u64CD\u4F5C\u6307\u4EE4\u96C6" tabindex="-1"><a class="header-anchor" href="#\u5757\u64CD\u4F5C\u6307\u4EE4\u96C6" aria-hidden="true">#</a> \u5757\u64CD\u4F5C\u6307\u4EE4\u96C6</h3><blockquote><p><em>0x40</em></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	BLOCKHASH:   &quot;BLOCKHASH&quot;,
	COINBASE:    &quot;COINBASE&quot;,
	TIMESTAMP:   &quot;TIMESTAMP&quot;,
	NUMBER:      &quot;NUMBER&quot;,
	DIFFICULTY:  &quot;DIFFICULTY&quot;,
	GASLIMIT:    &quot;GASLIMIT&quot;,
	CHAINID:     &quot;CHAINID&quot;,
	SELFBALANCE: &quot;SELFBALANCE&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B58\u50A8\u548C\u6267\u884C\u6307\u4EE4\u96C6" tabindex="-1"><a class="header-anchor" href="#\u5B58\u50A8\u548C\u6267\u884C\u6307\u4EE4\u96C6" aria-hidden="true">#</a> \u5B58\u50A8\u548C\u6267\u884C\u6307\u4EE4\u96C6</h3><blockquote><p><em>0x50</em></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	POP: &quot;POP&quot;,  // \u6808\u9876\u5F39\u51FA\u5143\u7D20
	MLOAD:    &quot;MLOAD&quot;,
	MSTORE:   &quot;MSTORE&quot;,
	MSTORE8:  &quot;MSTORE8&quot;,
	SLOAD:    &quot;SLOAD&quot;, //\u5148\u53D6\u51FA\u6808\u9876\u5143\u7D20x\uFF0C\u7136\u540E\u5728storage\u4E2D\u53D6\u4EE5x\u4E3A\u952E\u7684\u503C\uFF08storage[x]\uFF09\u5B58\u5165\u6808\u9876
	SSTORE:   &quot;SSTORE&quot;, //\u5B58\u50A8storage\u662F\u4E00\u4E2A\u952E\u503C\u5B58\u50A8\uFF0C\u53EF\u5C06256\u4F4D\u5B57\u6620\u5C04\u5230256\u4F4D\u5B57
	JUMP:     &quot;JUMP&quot;,
	JUMPI:    &quot;JUMPI&quot;,
	PC:       &quot;PC&quot;,
	MSIZE:    &quot;MSIZE&quot;,
	GAS:      &quot;GAS&quot;,
	JUMPDEST: &quot;JUMPDEST&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="push\u6307\u4EE4\u96C6" tabindex="-1"><a class="header-anchor" href="#push\u6307\u4EE4\u96C6" aria-hidden="true">#</a> Push\u6307\u4EE4\u96C6</h3><blockquote><p><em>0x60</em></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	// PUSH\u7CFB\u5217\u6307\u4EE4\u628A\u7D27\u8DDF\u5728\u6307\u4EE4\u540E\u9762\u7684N\uFF081 \uFF5E 32\uFF09\u5B57\u8282\u5143\u7D20\u63A8\u5165\u6808\u9876
	PUSH1:  &quot;PUSH1&quot;,
	...
	PUSH32: &quot;PUSH32&quot;,

    //DUP\u7CFB\u5217\u6307\u4EE4\u590D\u5236\u4ECE\u6808\u9876\u5F00\u59CB\u6570\u7684\u7B2CN\uFF081 \uFF5E 16\uFF09\u4E2A\u5143\u7D20\uFF0C\u5E76\u628A\u590D\u5236\u540E\u7684\u5143\u7D20\u63A8\u5165\u6808\u9876
	DUP1:  &quot;DUP1&quot;,
	DUP2:  &quot;DUP2&quot;,
	...
	DUP16: &quot;DUP16&quot;,

	//SWAP\u7CFB\u5217\u6307\u4EE4\u628A\u6808\u9876\u5143\u7D20\u548C\u4ECE\u6808\u9876\u5F00\u59CB\u6570\u7684\u7B2CN\uFF081 \uFF5E 16\uFF09+ 1 \u4E2A\u5143\u7D20\u8FDB\u884C\u4EA4\u6362\u3002
	SWAP1:  &quot;SWAP1&quot;,
	...
	SWAP16: &quot;SWAP16&quot;,
	
	LOG0:   &quot;LOG0&quot;,
	...
	LOG4:   &quot;LOG4&quot;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,27),r={href:"https://mindcarver.cn",target:"_blank",rel:"noopener noreferrer"};function c(m,q){const n=a("ExternalLinkIcon");return t(),d("div",null,[v,e("blockquote",null,[e("p",null,[e("a",r,[s("https://mindcarver.cn"),u(n)])])])])}const S=i(o,[["render",c],["__file","19.etheric_fang_evm_Instruction_set.html.vue"]]);export{S as default};
