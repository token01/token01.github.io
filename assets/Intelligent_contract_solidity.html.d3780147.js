import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as l,a as n,b as s,d as a,w as r,f as t,r as o}from"./app.33b1aeb5.js";const d={},u={href:"https://solidity.readthedocs.io/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://solidity.readthedocs.io/",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),m={href:"https://learnblockchain.cn/docs/solidity/",target:"_blank",rel:"noopener noreferrer"},h=n("br",null,null,-1),b={href:"https://github.com/OpenZeppelin/openzeppelin-contracts",target:"_blank",rel:"noopener noreferrer"},g=t(`<blockquote><p>\u4EE5\u592A\u574A\u865A\u62DF\u673A\uFF08EVM\uFF09\u662F\u4E00\u4E2A \u201CThe World Machine\u201D \u6240\u4EE5\u8BF7\u539F\u8C05\u5B83\u7B80\u964B\u7684\u8BED\u6CD5\u7279\u6027\u3001\u4EE4\u4EBA\u6293\u72C2\u7684debug\u4F53\u9A8C\u3001\u8FD1\u4E4E\u8D2B\u7620\u7684\u7C7B\u5E93\u652F\u6301\u3001\u52A8\u4E0D\u52A8\u5C31\u9700\u8981\u63D2\u5165\u6C47\u7F16\u8BED\u53E5\u6765\u89E3\u51B3\u4E00\u4E0B\u95EE\u9898\u3002Solidity \u8BED\u8A00\u5728\u8FD9\u79CD\u73AF\u5883\u4E0B\u5FC5\u987B\u4E25\u683C\u9075\u5FAA\u7684\u8BBE\u8BA1\u539F\u5219\u4EE5\u53CA\u6743\u8861\u540E\u5FC5\u987B\u4ED8\u51FA\u7684\u4EE3\u4EF7\u3002</p></blockquote><h2 id="abi" tabindex="-1"><a class="header-anchor" href="#abi" aria-hidden="true">#</a> ABI</h2><p>Application Binary Interface(ABI)</p><h2 id="\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#\u5B58\u50A8" aria-hidden="true">#</a> \u5B58\u50A8</h2><p><strong>\u6808</strong> \u7528\u4E8E\u5B58\u50A8\u5B57\u8282\u7801\u6307\u4EE4\u7684\u64CD\u4F5C\u6570\u3002\u5728Solidity\u4E2D\uFF0C\u5C40\u90E8\u53D8\u91CF\u82E5\u662F\u6574\u578B\u3001\u5B9A\u957F\u5B57\u8282\u6570\u7EC4\u7B49\u7C7B\u578B\uFF0C\u5C31\u4F1A\u968F\u7740\u6307\u4EE4\u7684\u8FD0\u884C\u5165\u6808\u3001\u51FA\u6808\u3002\u5BF9\u4E8E\u8FD9\u7C7B\u53D8\u91CF\uFF0C\u65E0\u6CD5\u5F3A\u884C\u6539\u53D8\u5B83\u4EEC\u7684\u5B58\u50A8\u65B9\u5F0F\uFF0C\u5982\u679C\u5728\u5B83\u4EEC\u4E4B\u524D\u653E\u7F6Ememory\u4FEE\u9970\u7B26\uFF0C\u7F16\u8BD1\u4F1A\u62A5\u9519\u3002<br><strong>\u5185\u5B58</strong> \u7C7B\u4F3Cjava\u4E2D\u7684\u5806\uFF0C\u5B83\u7528\u4E8E\u50A8\u5B58&quot;\u5BF9\u8C61&quot;\u3002\u5728Solidity\u7F16\u7A0B\u4E2D\uFF0C\u5982\u679C\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF\u5C5E\u4E8E\u53D8\u957F\u5B57\u8282\u6570\u7EC4\u3001\u5B57\u7B26\u4E32\u3001\u7ED3\u6784\u4F53\u7B49\u7C7B\u578B\uFF0C\u5176\u901A\u5E38\u4F1A\u88ABmemory\u4FEE\u9970\u7B26\u4FEE\u9970\uFF0C\u4EE5\u8868\u660E\u5B58\u50A8\u5728\u5185\u5B58\u4E2D\u3002<br><strong>\u72B6\u6001\u5B58\u50A8</strong> \u7528\u4E8E\u5B58\u50A8\u5408\u7EA6\u7684\u72B6\u6001\u5B57\u6BB5\u3002\u4ECE\u5B9E\u73B0\u800C\u8A00\uFF0C\u4E0D\u540C\u7684\u94FE\u53EF\u80FD\u91C7\u7528\u4E0D\u540C\u5B9E\u73B0\uFF0C\u6BD4\u8F83\u7ECF\u5178\u7684\u662F\u4EE5\u592A\u574A\u6240\u91C7\u7528\u7684MPT\u6811\u3002\u7531\u4E8EMPT\u6811\u6027\u80FD\u3001\u6269\u5C55\u6027\u7B49\u95EE\u9898\uFF0CFISCO BCOS\u653E\u5F03\u4E86\u8FD9\u4E00\u7ED3\u6784\uFF0C\u800C\u91C7\u7528\u4E86\u5206\u5E03\u5F0F\u5B58\u50A8\uFF0C\u901A\u8FC7rocksdb\u6216mysql\u6765\u5B58\u50A8\u72B6\u6001\u6570\u636E\uFF0C\u4F7F\u5B58\u50A8\u7684\u6027\u80FD\u3001\u53EF\u6269\u5C55\u6027\u5F97\u5230\u63D0\u9AD8\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>contract Demo<span class="token punctuation">{</span>
    <span class="token comment">//\u72B6\u6001\u5B58\u50A8</span>
    uint <span class="token keyword">private</span> _state<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token parameter">uint state</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u6808\u5B58\u50A8</span>
        uint i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5185\u5B58\u5B58\u50A8</span>
        string memory str <span class="token operator">=</span> <span class="token string">&quot;aaa&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="event-log" tabindex="-1"><a class="header-anchor" href="#event-log" aria-hidden="true">#</a> Event/Log</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
pragma solidity <span class="token operator">&gt;=</span><span class="token number">0.4</span><span class="token number">.21</span> <span class="token operator">&lt;</span><span class="token number">0.7</span><span class="token number">.0</span><span class="token punctuation">;</span>
contract Demo <span class="token punctuation">{</span>
  <span class="token comment">// \u5B9A\u4E49\u4E8B\u4EF6</span>
  event <span class="token function">Transfer</span><span class="token punctuation">(</span>address indexed from<span class="token punctuation">,</span> address indexed to<span class="token punctuation">,</span> uint256 value<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">bid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> payable <span class="token punctuation">{</span>
    <span class="token comment">//\u89E6\u53D1\u4E8B\u4EF6</span>
    emit <span class="token function">Transfer</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> _to<span class="token punctuation">,</span> _value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u591A\u4E09\u4E2A\u53C2\u6570\u53EF\u4EE5\u4F7F\u7528 <code>indexed</code> \u5C5E\u6027</p><ul><li>\u8FD9\u4E9B\u53C2\u6570\u4F1A\u4F7F\u7528 <code>keccak-256</code> \u54C8\u5E0C\u540E\u5F97\u5230\u503C\u88AB\u4F5C\u4E3A <code>topic</code> \u4FDD\u5B58\u5728\u533A\u5757\u7684 Event \u91CC</li><li>API\u8C03\u7528\u65F6\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E9B <code>indexed</code> \u53C2\u6570\u7684\u7279\u5B9A\u503C\u6765\u8FDB\u884C\u8FC7\u6EE4</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> event <span class="token operator">=</span> demoContract<span class="token punctuation">.</span><span class="token function">Transfer</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;xxxxx&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9AD8\u6548\u4F7F\u7528\uFF1A</p><ul><li>\u5F02\u6B65\u83B7\u53D6\u6267\u884C\u7ED3\u679C\uFF0C\u5E76\u53EF\u63D0\u4F9B\u8FC7\u6EE4\u5668\uFF0C\u652F\u6301\u53C2\u6570\u7684\u68C0\u7D22\u548C\u8FC7\u6EE4\u3002</li><li>\u63D0\u4F9B\u4E00\u79CD\u56DE\u8C03\u673A\u5236\uFF0C\u5728\u4E8B\u4EF6\u6267\u884C\u6210\u529F\u540E\uFF0C\u7531\u8282\u70B9\u5411\u6CE8\u518C\u76D1\u542C\u7684SDK\u53D1\u9001\u56DE\u8C03\u901A\u77E5\uFF0C\u89E6\u53D1\u56DE\u8C03\u51FD\u6570\u88AB\u6267\u884C\u3002Oracle \u7684\u539F\u7406</li><li>\u5B58\u50A8\u5408\u7EA6\u6570\u636E\uFF0C\u5DE7\u7528\u65E5\u5FD7\u53BB\u5B58\u50A8\u6570\u636E\uFF0C\u53EF\u4EE5\u5927\u5927\u51CF\u5C11\u4EA4\u6613\u8D39\u7528 <blockquote><p>storage\u5B58\u50A8\u7684\u5927\u6982\u4EF7\u683C\u4E3A\uFF1A\u6BCF32\u5B57\u8282\u9700\u8981\u6D88\u801720000Gas\uFF0C\u800C\u65E5\u5FD7\u5B58\u50A8\u4EF7\u683C\u5927\u6982\u4E3A\u6BCF\u5B57\u82828Gas</p></blockquote></li></ul><h2 id="\u4FEE\u9970\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u9970\u7B26" aria-hidden="true">#</a> \u4FEE\u9970\u7B26</h2><p><strong>\u4FEE\u9970\u51FD\u6570</strong></p><ul><li><code>pure</code> - \u4E0D\u5141\u8BB8\u4FEE\u6539\u548C\u8BBF\u95EE\u72B6\u6001</li><li><code>view</code> - \u4E0D\u5141\u8BB8\u4FEE\u6539\u72B6\u6001</li><li><code>payable</code> - \u5141\u8BB8\u8C03\u7528\u63A5\u6536 \u4EE5\u592A\u5E01</li></ul><p><strong>\u4FEE\u9970\u51FD\u6570\u548C\u53D8\u91CF</strong></p><ul><li><p><code>constant</code></p><p>\u51FD\u6570\uFF1A\u4E0E<code>view</code>\u7B49\u4EF7\u3002<br> \u53D8\u91CF\uFF1A\u4E0D\u5141\u8BB8\u8D4B\u503C\uFF08\u521D\u59CB\u5316\u9664\u5916\uFF09\uFF0C\u5B83\u4E0D\u4F1A\u5360\u636E <code>storage slot</code></p></li><li><p><code>external</code> - \u53EF\u4EE5\u4ECE\u5176\u4ED6\u5408\u7EA6\u548C\u4EA4\u6613\u4E2D\u8C03\u7528\uFF0C\u4E0D\u53EF\u5185\u90E8\u8C03\u7528\uFF0C\u5728\u63A5\u6536\u5927\u91CF\u6570\u636E\u65F6\u66F4\u4E3A\u9AD8\u6548\u3002</p><p>\u5F53\u51FD\u6570\u7684\u67D0\u4E2A\u53C2\u6570\u975E\u5E38\u5927\u65F6\uFF0C\u5982\u679C\u663E\u5F0F\u5730\u5C06\u51FD\u6570\u6807\u8BB0\u4E3Aexternal\uFF0C\u53EF\u4EE5\u5F3A\u5236\u5C06\u51FD\u6570\u5B58\u50A8\u7684\u4F4D\u7F6E\u8BBE\u7F6E\u4E3A <code>calldata</code>\uFF0C\u8FD9\u4F1A\u8282\u7EA6\u51FD\u6570\u6267\u884C\u65F6\u6240\u9700\u5B58\u50A8\u6216\u8BA1\u7B97\u8D44\u6E90\u3002</p></li><li><p><code>public</code> - \u53EF\u4EE5\u5728\u5185\u90E8\u6216\u901A\u8FC7\u6D88\u606F\u8C03\u7528\u3002\u6CA1\u6307\u5B9A\u9ED8\u8BA4\u4E3A public</p><p>\u53D8\u91CF\uFF1A\u4F1A\u81EA\u52A8\u751F\u6210\u4E00\u4E2A <code>getter</code> \u51FD\u6570</p></li><li><p><code>internal</code> - \u53EA\u80FD\u662F\u5185\u90E8\u8BBF\u95EE</p><p>\u53D8\u91CF\uFF1A\u72B6\u6001\u53D8\u91CF\u7684\u4FEE\u9970\u7B26\u9ED8\u8BA4\u662F<code>internal</code></p></li><li><p><code>private</code> - \u4EC5\u5728\u5F53\u524D\u5B9A\u4E49\u5B83\u4EEC\u7684\u5408\u7EA6\u4E2D\u4F7F\u7528\uFF0C\u5E76\u4E14\u4E0D\u80FD\u88AB\u6D3E\u751F\u5408\u7EA6\u4F7F\u7528</p></li></ul><p><strong>\u4FEE\u9970\u4E8B\u4EF6\u53C2\u6570</strong></p><ul><li><code>indexed</code> - \u53EF\u4F5C\u4E3A\u7D22\u5F15</li><li><code>anonymous</code> - \u4E8B\u4EF6\u7B7E\u540D\u7684\u54C8\u5E0C\u503C\u4E0D\u4F1A\u5728 <code>topic</code> \u4E2D\u5B58\u50A8</li></ul><p><strong>\u4FEE\u9970\u5668</strong></p>`,21),_=n("code",null,"modifier",-1),f={href:"https://solidity-cn.readthedocs.io/zh/develop/contracts.html#modifier",target:"_blank",rel:"noopener noreferrer"},x=n("p",null,"\u6709\u70B9\u9762\u5411\u5207\u9762\u7F16\u7A0B\u7684\u611F\u89C9\u3002",-1),y=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>event <span class="token function">LogStartMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
event <span class="token function">LogEndMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
modifier logMethod <span class="token punctuation">{</span>
    emit <span class="token function">LogStartMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    _<span class="token punctuation">;</span><span class="token comment">//\u8868\u793A\u6240\u4FEE\u9970\u51FD\u6570\u4E2D\u7684\u4EE3\u7801,\u4E5F\u5C31\u662F\u5728\u51FD\u6570\u7684\u6700\u524D\u4E0E\u6700\u540E\u63D2\u5165\u4EE3\u7801</span>
    emit <span class="token function">LogEndMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">doing</span><span class="token punctuation">(</span><span class="token parameter">address _owner</span><span class="token punctuation">)</span> <span class="token keyword">public</span> logMethod <span class="token punctuation">{</span>
    <span class="token comment">// something...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u62BD\u8C61\u7C7B\u4E0E\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u7C7B\u4E0E\u63A5\u53E3" aria-hidden="true">#</a> \u62BD\u8C61\u7C7B\u4E0E\u63A5\u53E3</h2>`,2),j={href:"https://solidity-cn.readthedocs.io/zh/develop/contracts.html#index-17",target:"_blank",rel:"noopener noreferrer"},q=t(`<h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2><ul><li>\u4E00\u4E2A\u5408\u7EA6\u4E2D\uFF0C\u5165\u53C2\u3001\u8FD4\u56DE\u503C\u3001\u5185\u90E8\u53D8\u91CF\u4E0D\u80FD\u8D85\u8FC7\u4E8616\u4E2A</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Compiler error<span class="token operator">:</span> Stack too deep<span class="token punctuation">,</span> <span class="token keyword">try</span> removing local variables<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>EVM\u6240\u8BBE\u8BA1\u7528\u4E8E\u6700\u5927\u7684\u6808\u6DF1\u5EA6\u4E3A16\u3002\u6240\u6709\u7684\u8BA1\u7B97\u90FD\u5728\u4E00\u4E2A\u6808\u5185\u6267\u884C\uFF0C\u5BF9\u6808\u7684\u8BBF\u95EE\u53EA\u9650\u4E8E\u5176\u9876\u7AEF\uFF0C\u9650\u5236\u65B9\u5F0F\u4E3A\uFF1A\u5141\u8BB8\u62F7\u8D1D\u6700\u9876\u7AEF16\u4E2A\u5143\u7D20\u4E2D\u7684\u4E00\u4E2A\u5230\u6808\u9876\uFF0C\u6216\u8005\u5C06\u6808\u9876\u5143\u7D20\u548C\u4E0B\u976216\u4E2A\u5143\u7D20\u4E2D\u7684\u4E00\u4E2A\u4EA4\u6362\u3002\u6240\u6709\u5176\u4ED6\u64CD\u4F5C\u90FD\u53EA\u80FD\u53D6\u6700\u9876\u7684\u51E0\u4E2A\u5143\u7D20\uFF0C\u8FD0\u7B97\u540E\uFF0C\u628A\u7ED3\u679C\u538B\u5165\u6808\u9876\u3002\u5F53\u7136\u53EF\u4EE5\u628A\u6808\u4E0A\u7684\u5143\u7D20\u653E\u5230\u5B58\u50A8\u6216\u5185\u5B58\u4E2D\u3002\u4F46\u65E0\u6CD5\u53EA\u8BBF\u95EE\u6808\u4E0A\u6307\u5B9A\u6DF1\u5EA6\u7684\u90A3\u4E2A\u5143\u7D20\uFF0C\u9664\u975E\u5148\u4ECE\u6808\u9876\u79FB\u9664\u5176\u4ED6\u5143\u7D20\u3002</p>`,4),w=n("strong",null,"\u5EFA\u8BAE",-1);function M(S,E){const e=o("ExternalLinkIcon"),i=o("RouterLink");return p(),l("div",null,[n("p",null,[n("a",u,[s("Solidity"),a(e)]),s(" \u662F\u4E00\u95E8\u9762\u5411\u5408\u7EA6\u7684\u3001\u4E3A\u5B9E\u73B0\u667A\u80FD\u5408\u7EA6\u800C\u521B\u5EFA\u7684\u9AD8\u7EA7\u7F16\u7A0B\u8BED\u8A00\uFF0C\u8FD0\u4F5C\u5728\u4EE5\u592A\u574A\u865A\u62DF\u673A\uFF08EVM\uFF09\u4E0A\u3002")]),n("p",null,[n("a",k,[s("\u5B98\u65B9\u6587\u6863"),a(e)]),v,n("a",m,[s("\u975E\u5B98\u65B9\u4E2D\u6587\u6587\u6863"),a(e)]),h,n("a",b,[s("Openzeppelin\u5408\u7EA6\u7C7B\u5E93"),a(e)])]),g,n("ul",null,[n("li",null,[n("p",null,[_,s(" - "),n("a",f,[s("\u4FEE\u9970\u5668"),a(e)])]),x])]),y,n("p",null,[n("a",j,[s("docs"),a(e)]),s(" \u4E0E\u5176\u4ED6\u8BED\u8A00\u7C7B\u4F3C\u3002\u4F46\u9700\u8981\u6CE8\u610F\u5408\u9002\u5730\u4F7F\u7528\u63A5\u53E3\u6216\u62BD\u8C61\u5408\u7EA6\u6709\u52A9\u4E8E\u589E\u5F3A\u5408\u7EA6\u8BBE\u8BA1\u7684\u53EF\u6269\u5C55\u6027\u3002\u4F46\u662F\uFF0C\u7531\u4E8E\u533A\u5757\u94FEEVM\u4E0A\u8BA1\u7B97\u548C\u5B58\u50A8\u8D44\u6E90\u7684\u9650\u5236\uFF0C\u5207\u5FCC\u8FC7\u5EA6\u8BBE\u8BA1\uFF0C\u8FD9\u4E5F\u662F\u4ECE\u9AD8\u7EA7\u8BED\u8A00\u6280\u672F\u6808\u8F6C\u5230Solidity\u5F00\u53D1\u7684\u8001\u53F8\u673A\u5E38\u5E38\u4F1A\u9677\u5165\u7684\u5929\u5751\u3002")]),q,n("p",null,[w,s(" \u4F7F\u7528\u7ED3\u6784\u4F53\u6216\u6570\u7EC4\u6765\u5C01\u88C5\u5165\u53C2\u6216\u8FD4\u56DE\u503C\uFF0C\u8FBE\u5230\u51CF\u5C11\u6808\u9876\u5143\u7D20\u4F7F\u7528\u7684\u76EE\u7684\uFF0C\u4ECE\u800C\u907F\u514D\u6B64\u9519\u8BEF\u3002\u5BF9\u4E8E\u667A\u80FD\u5408\u7EA6\u4E5F\u5E94\u8BE5"),a(i,{to:"/blockchain/basic-logic/Smart_contracts_design_pattern.html"},{default:r(()=>[s("\u907F\u514D\u8FC7\u591A\u7684\u8BBE\u8BA1")]),_:1}),s("\u3002\u9700\u8981\u5206\u5E03\u5F0F\u534F\u4F5C\u7684\u91CD\u8981\u6570\u636E\u624D\u4E0A\u94FE\uFF0C\u975E\u5FC5\u9700\u6570\u636E\u4E0D\u4E0A\u94FE\uFF1B\u94FE\u4E0A\u9A8C\u8BC1\uFF0C\u94FE\u4E0B\u6388\u6743\u3002")])])}const V=c(d,[["render",M],["__file","Intelligent_contract_solidity.html.vue"]]);export{V as default};
