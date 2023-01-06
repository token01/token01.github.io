import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.7c2c1c79.js";const e={},p=t(`<h2 id="\u8BBE\u8BA1\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u8BA1\u6A21\u5F0F" aria-hidden="true">#</a> \u8BBE\u8BA1\u6A21\u5F0F</h2><p>\u300ADesign Patterns For Smart Contracts In the Ethereum Ecosystem\u300B</p><h3 id="\u5B89\u5168-security" tabindex="-1"><a class="header-anchor" href="#\u5B89\u5168-security" aria-hidden="true">#</a> \u5B89\u5168 Security</h3><ul><li><p>Checks-Effects-Interaction \u4FDD\u8BC1\u72B6\u6001\u5B8C\u6574\uFF0C\u518D\u505A\u5916\u90E8\u8C03\u7528</p><p>Checks\uFF1A\u53C2\u6570\u9A8C\u8BC1\uFF0CEffects\uFF1A\u4FEE\u6539\u5408\u7EA6\u72B6\u6001\uFF0CInteraction\uFF1A\u5916\u90E8\u4EA4\u4E92 \u8FD9\u4E2A\u6A21\u5F0F\u8981\u6C42\u5408\u7EA6\u6309\u7167Checks-Effects-Interaction\u7684\u987A\u5E8F\u6765\u7EC4\u7EC7\u4EE3\u7801\u3002\u5B83\u7684\u597D\u5904\u5728\u4E8E\u8FDB\u884C\u5916\u90E8\u8C03\u7528\u4E4B\u524D\uFF0CChecks-Effects\u5DF2\u5B8C\u6210\u5408\u7EA6\u81EA\u8EAB\u72B6\u6001\u6240\u6709\u76F8\u5173\u5DE5\u4F5C\uFF0C\u4F7F\u5F97\u72B6\u6001\u5B8C\u6574\u3001\u903B\u8F91\u81EA\u6D3D\uFF0C\u8FD9\u6837\u5916\u90E8\u8C03\u7528\u5C31\u65E0\u6CD5\u5229\u7528\u4E0D\u5B8C\u6574\u7684\u72B6\u6001\u8FDB\u884C\u653B\u51FB</p></li><li><p>Mutex - \u7981\u6B62\u9012\u5F52</p><p>\u4F7F\u7528\u4FEE\u9970\u7B26\u9632\u6B62\u51FD\u6570\u88AB\u9012\u5F52\u8C03\u7528\u3002\u9632\u6B62\u91CD\u653E\u653B\u51FB</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>contract Mutex <span class="token punctuation">{</span>
  bool locked<span class="token punctuation">;</span>
  modifier <span class="token function">noReentrancy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u9632\u6B62\u9012\u5F52</span>
      <span class="token function">require</span><span class="token punctuation">(</span><span class="token operator">!</span>locked<span class="token punctuation">,</span> <span class="token string">&quot;Reentrancy detected&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      locked <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      _<span class="token punctuation">;</span>
      locked <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//\u8C03\u7528\u8BE5\u51FD\u6570\u5C06\u4F1A\u629B\u51FAReentrancy detected\u9519\u8BEF</span>
  <span class="token keyword">function</span> <span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> noReentrancy<span class="token punctuation">{</span>
      <span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>}</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
### \u53EF\u7EF4\u62A4\u6027 Maintaince

\u9AD8\u5EA6\u6A21\u5757\u5316\u3001\u9AD8\u5185\u805A\u4F4E\u8026\u5408

* Data segregation - \u6570\u636E\u4E0E\u903B\u8F91\u76F8\u5206\u79BB
\`\`\`javascript
contract DataRepository{

  uint private _data;

  function setData(uint data) public {
      _data = data;
  }

  function getData() public view returns(uint){
      return _data;
  }
}
contract Computer{
  DataRepository private _dataRepository;
  constructor(address addr){
      _dataRepository = DataRepository(addr);
  }

  //\u4E1A\u52A1\u4EE3\u7801
  function compute() public view returns(uint){
      return _dataRepository.getData() * 10;
  }    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Satellite - \u5206\u89E3\u5408\u7EA6\u529F\u80FD</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>contract Base <span class="token punctuation">{</span>
    uint <span class="token keyword">public</span> _variable<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">setVariable</span><span class="token punctuation">(</span><span class="token parameter">uint data</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        _variable <span class="token operator">=</span> _satellite<span class="token punctuation">.</span><span class="token function">compute</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

     Satellite _satellite<span class="token punctuation">;</span>
    <span class="token comment">//\u66F4\u65B0\u5B50\u5408\u7EA6\uFF08\u536B\u661F\u5408\u7EA6\uFF09</span>
    <span class="token keyword">function</span> <span class="token function">updateSatellite</span><span class="token punctuation">(</span><span class="token parameter">address addr</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        _satellite <span class="token operator">=</span> <span class="token function">Satellite</span><span class="token punctuation">(</span>addr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
contract Satellite <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">compute</span><span class="token punctuation">(</span><span class="token parameter">uint a</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token function">returns</span><span class="token punctuation">(</span><span class="token parameter">uint</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span>        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Contract Registry - \u8DDF\u8E2A\u6700\u65B0\u5408\u7EA6</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>contract Registry<span class="token punctuation">{</span>

    address _current<span class="token punctuation">;</span>
    address<span class="token punctuation">[</span><span class="token punctuation">]</span> _previous<span class="token punctuation">;</span>

    <span class="token comment">//\u5B50\u5408\u7EA6\u5347\u7EA7\u4E86\uFF0C\u5C31\u901A\u8FC7update\u51FD\u6570\u66F4\u65B0\u5730\u5740</span>
    <span class="token keyword">function</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">address newAddress</span><span class="token punctuation">)</span> <span class="token keyword">public</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>newAddress <span class="token operator">!=</span> _current<span class="token punctuation">)</span><span class="token punctuation">{</span>
            _previous<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>_current<span class="token punctuation">)</span><span class="token punctuation">;</span>
            _current <span class="token operator">=</span> newAddress<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">getCurrent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> view <span class="token function">returns</span><span class="token punctuation">(</span><span class="token parameter">address</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> _current<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
contract Base <span class="token punctuation">{</span>
    uint <span class="token keyword">public</span> _variable<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">setVariable</span><span class="token punctuation">(</span><span class="token parameter">uint data</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        Satellite satellite <span class="token operator">=</span> <span class="token function">Satellite</span><span class="token punctuation">(</span>_registry<span class="token punctuation">.</span><span class="token function">getCurrent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        _variable <span class="token operator">=</span> satellite<span class="token punctuation">.</span><span class="token function">compute</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    Registry <span class="token keyword">private</span> _registry <span class="token operator">=</span> <span class="token comment">//...;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Contract Relay - \u4EE3\u7406\u8C03\u7528\u6700\u65B0\u5408\u7EA6</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>contract Base <span class="token punctuation">{</span>
    uint <span class="token keyword">public</span> _variable<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">setVariable</span><span class="token punctuation">(</span><span class="token parameter">uint data</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        _variable <span class="token operator">=</span> _proxy<span class="token punctuation">.</span><span class="token function">compute</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    SatelliteProxy <span class="token keyword">private</span> _proxy <span class="token operator">=</span> <span class="token comment">//...;</span>
<span class="token punctuation">}</span>
contract SatelliteProxy<span class="token punctuation">{</span>
    address _current<span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">compute</span><span class="token punctuation">(</span><span class="token parameter">uint a</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token function">returns</span><span class="token punctuation">(</span><span class="token parameter">uint</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        Satellite satellite <span class="token operator">=</span> <span class="token function">Satellite</span><span class="token punctuation">(</span>_current<span class="token punctuation">)</span><span class="token punctuation">;</span>   
        <span class="token keyword">return</span> satellite<span class="token punctuation">.</span><span class="token function">compute</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u5B50\u5408\u7EA6\u5347\u7EA7\u4E86\uFF0C\u5C31\u901A\u8FC7update\u51FD\u6570\u66F4\u65B0\u5730\u5740</span>
    <span class="token keyword">function</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">address newAddress</span><span class="token punctuation">)</span> <span class="token keyword">public</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>newAddress <span class="token operator">!=</span> _current<span class="token punctuation">)</span><span class="token punctuation">{</span>
            _current <span class="token operator">=</span> newAddress<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>   
<span class="token punctuation">}</span>
contract Satellite <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">compute</span><span class="token punctuation">(</span><span class="token parameter">uint a</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token function">returns</span><span class="token punctuation">(</span><span class="token parameter">uint</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span>        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u751F\u547D\u5468\u671F-lifecycle" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F-lifecycle" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F Lifecycle</h3><ul><li>Mortal - \u5141\u8BB8\u5408\u7EA6\u81EA\u6BC1</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>contract Mortal<span class="token punctuation">{</span>
    <span class="token comment">//\u81EA\u6BC1</span>
    <span class="token keyword">function</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span><span class="token punctuation">{</span>
        <span class="token comment">//selfdestruct\u6307\u4EE4\uFF0C\u7528\u4E8E\u9500\u6BC1\u5408\u7EA6</span>
        <span class="token function">selfdestruct</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Automatic Deprecation - \u5141\u8BB8\u5408\u7EA6\u81EA\u52A8\u505C\u6B62\u670D\u52A1</p><p>\u5F53\u7528\u6237\u8C03\u7528service\uFF0CnotExpired\u4FEE\u9970\u7B26\u4F1A\u5148\u8FDB\u884C\u65E5\u671F\u68C0\u6D4B\uFF0C\u8FD9\u6837\uFF0C\u4E00\u65E6\u8FC7\u4E86\u7279\u5B9A\u65F6\u95F4\uFF0C\u8C03\u7528\u5C31\u4F1A\u56E0\u8FC7\u671F\u800C\u88AB\u62E6\u622A\u5728notExpired\u5C42\u3002</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>contract AutoDeprecated<span class="token punctuation">{</span>

    uint <span class="token keyword">private</span> _deadline<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">setDeadline</span><span class="token punctuation">(</span><span class="token parameter">uint time</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        _deadline <span class="token operator">=</span> time<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    modifier <span class="token function">notExpired</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">require</span><span class="token punctuation">(</span>now <span class="token operator">&lt;=</span> _deadline<span class="token punctuation">)</span><span class="token punctuation">;</span>
        _<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> notExpired<span class="token punctuation">{</span>
        <span class="token comment">//some code    </span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6743\u9650-authorization" tabindex="-1"><a class="header-anchor" href="#\u6743\u9650-authorization" aria-hidden="true">#</a> \u6743\u9650 Authorization</h3><ul><li>Ownership</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>contract Ownable <span class="token punctuation">{</span>
    address <span class="token keyword">public</span> owner<span class="token punctuation">;</span>

    event <span class="token function">OwnershipRenounced</span><span class="token punctuation">(</span>address indexed previousOwner<span class="token punctuation">)</span><span class="token punctuation">;</span>
    event <span class="token function">OwnershipTransferred</span><span class="token punctuation">(</span>
        address indexed previousOwner<span class="token punctuation">,</span>
        address indexed newOwner
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        owner <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    modifier <span class="token function">onlyOwner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> owner<span class="token punctuation">)</span><span class="token punctuation">;</span>
        _<span class="token punctuation">;</span><span class="token comment">//\u8868\u793A\u6240\u4FEE\u9970\u51FD\u6570\u4E2D\u7684\u4EE3\u7801,\u4E5F\u5C31\u662F\u5C06\u8FD9\u4E2A require \u5728\u6700\u524D\u9762\u6267\u884C</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">transferOwnership</span><span class="token punctuation">(</span><span class="token parameter">address newOwner</span><span class="token punctuation">)</span> <span class="token keyword">public</span> onlyOwner <span class="token punctuation">{</span>
        <span class="token function">require</span><span class="token punctuation">(</span>newOwner <span class="token operator">!=</span> <span class="token function">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        emit <span class="token function">OwnershipTransferred</span><span class="token punctuation">(</span>owner<span class="token punctuation">,</span> newOwner<span class="token punctuation">)</span><span class="token punctuation">;</span>
        owner <span class="token operator">=</span> newOwner<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">renounceOwnership</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> onlyOwner <span class="token punctuation">{</span>
        emit <span class="token function">OwnershipRenounced</span><span class="token punctuation">(</span>owner<span class="token punctuation">)</span><span class="token punctuation">;</span>
        owner <span class="token operator">=</span> <span class="token function">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u7EE7\u627F\u5E76\u6DFB\u52A0\u4FEE\u9970\u5668</span>
contract Biz is Owned<span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">manage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> onlyOwner<span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u884C\u4E3A\u63A7\u5236-action-and-control" tabindex="-1"><a class="header-anchor" href="#\u884C\u4E3A\u63A7\u5236-action-and-control" aria-hidden="true">#</a> \u884C\u4E3A\u63A7\u5236 Action And Control</h3><ul><li>Commit - Reveal - \u5EF6\u8FDF\u79D8\u5BC6\u6CC4\u9732 Commit And Reveal\u6A21\u5F0F\u5141\u8BB8\u7528\u6237\u5C06\u8981\u4FDD\u62A4\u7684\u6570\u636E\u8F6C\u6362\u4E3A\u4E0D\u53EF\u8BC6\u522B\u6570\u636E\uFF0C\u6BD4\u5982\u4E00\u4E32\u54C8\u5E0C\u503C\uFF0C\u76F4\u5230\u67D0\u4E2A\u65F6\u523B\u518D\u63ED\u793A\u54C8\u5E0C\u503C\u7684\u542B\u4E49\uFF0C\u5C55\u9732\u771F\u6B63\u7684\u539F\u503C\u3002<br> \u4EE5\u6295\u7968\u573A\u666F\u4E3E\u4F8B\uFF0C\u5047\u8BBE\u9700\u8981\u5728\u6240\u6709\u53C2\u4E0E\u8005\u90FD\u5B8C\u6210\u6295\u7968\u540E\u518D\u63ED\u793A\u6295\u7968\u5185\u5BB9\uFF0C\u4EE5\u9632\u8FD9\u671F\u95F4\u53C2\u4E0E\u8005\u53D7\u7968\u6570\u5F71\u54CD</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>contract CommitReveal <span class="token punctuation">{</span>
    struct Commit <span class="token punctuation">{</span>
        string choice<span class="token punctuation">;</span>
        string secret<span class="token punctuation">;</span>
        uint status<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">mapping</span><span class="token punctuation">(</span><span class="token parameter">address</span> <span class="token operator">=&gt;</span> <span class="token function">mapping</span><span class="token punctuation">(</span><span class="token parameter">bytes32</span> <span class="token operator">=&gt;</span> Commit<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">public</span> userCommits<span class="token punctuation">;</span>
    event <span class="token function">LogCommit</span><span class="token punctuation">(</span>bytes32<span class="token punctuation">,</span> address<span class="token punctuation">)</span><span class="token punctuation">;</span>
    event <span class="token function">LogReveal</span><span class="token punctuation">(</span>bytes32<span class="token punctuation">,</span> address<span class="token punctuation">,</span> string<span class="token punctuation">,</span> string<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">commit</span><span class="token punctuation">(</span><span class="token parameter">bytes32 commit</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        Commit storage userCommit <span class="token operator">=</span> userCommits<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span><span class="token punctuation">[</span>commit<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token function">require</span><span class="token punctuation">(</span>userCommit<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userCommit<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// comitted</span>
        emit <span class="token function">LogCommit</span><span class="token punctuation">(</span>commit<span class="token punctuation">,</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">reveal</span><span class="token punctuation">(</span><span class="token parameter">string choice<span class="token punctuation">,</span> string secret<span class="token punctuation">,</span> bytes32 commit</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        Commit storage userCommit <span class="token operator">=</span> userCommits<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span><span class="token punctuation">[</span>commit<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token function">require</span><span class="token punctuation">(</span>userCommit<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">require</span><span class="token punctuation">(</span>commit <span class="token operator">==</span> <span class="token function">keccak256</span><span class="token punctuation">(</span>choice<span class="token punctuation">,</span> secret<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userCommit<span class="token punctuation">.</span>choice <span class="token operator">=</span> choice<span class="token punctuation">;</span>
        userCommit<span class="token punctuation">.</span>secret <span class="token operator">=</span> secret<span class="token punctuation">;</span>
        userCommit<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        emit <span class="token function">LogReveal</span><span class="token punctuation">(</span>commit<span class="token punctuation">,</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> choice<span class="token punctuation">,</span> secret<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Oracle - \u8BFB\u53D6\u94FE\u5916\u6570\u636E \u83B7\u53D6\u5916\u90E8\u6570\u636E\u4F1A\u901A\u8FC7\u540D\u4E3AOracle\u7684\u94FE\u5916\u6570\u636E\u5C42\u6765\u6267\u884C\u3002\u5F53\u4E1A\u52A1\u65B9\u7684\u5408\u7EA6\u5C1D\u8BD5\u83B7\u53D6\u5916\u90E8\u6570\u636E\u65F6\uFF0C\u4F1A\u5148\u5C06\u67E5\u8BE2\u8BF7\u6C42\u5B58\u5165\u5230\u67D0\u4E2AOracle\u4E13\u7528\u5408\u7EA6\u5185\uFF1BOracle\u4F1A\u76D1\u542C\u8BE5\u5408\u7EA6\uFF0C\u8BFB\u53D6\u5230\u8FD9\u4E2A\u67E5\u8BE2\u8BF7\u6C42\u540E\uFF0C\u6267\u884C\u67E5\u8BE2\uFF0C\u5E76\u8C03\u7528\u4E1A\u52A1\u5408\u7EA6\u54CD\u5E94\u63A5\u53E3\u4F7F\u5408\u7EA6\u83B7\u53D6\u7ED3\u679C\u3002 <img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/contract-oracle.png" alt="oracle"></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>contract Oracle <span class="token punctuation">{</span>
    address oracleSource <span class="token operator">=</span> <span class="token number">0x123</span><span class="token punctuation">;</span> <span class="token comment">// known source</span>

    struct Request <span class="token punctuation">{</span>
        bytes data<span class="token punctuation">;</span>
        <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">bytes memory</span><span class="token punctuation">)</span> external callback<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    Request<span class="token punctuation">[</span><span class="token punctuation">]</span> requests<span class="token punctuation">;</span>
    event <span class="token function">NewRequest</span><span class="token punctuation">(</span>uint<span class="token punctuation">)</span><span class="token punctuation">;</span>
    modifier <span class="token function">onlyByOracle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> oracleSource<span class="token punctuation">)</span><span class="token punctuation">;</span> _<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token parameter">bytes data<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">bytes memory</span><span class="token punctuation">)</span> external callback</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        requests<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">Request</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        emit <span class="token function">NewRequest</span><span class="token punctuation">(</span>requests<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u56DE\u8C03\u51FD\u6570\uFF0C\u7531Oracle\u8C03\u7528</span>
    <span class="token keyword">function</span> <span class="token function">reply</span><span class="token punctuation">(</span><span class="token parameter">uint requestID<span class="token punctuation">,</span> bytes response</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token function">onlyByOracle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        requests<span class="token punctuation">[</span>requestID<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">callback</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
contract BizContract <span class="token punctuation">{</span>
    Oracle _oracle<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">address oracle</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        _oracle <span class="token operator">=</span> <span class="token function">Oracle</span><span class="token punctuation">(</span>oracle<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    modifier <span class="token function">onlyByOracle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> <span class="token function">address</span><span class="token punctuation">(</span>_oracle<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        _<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">updateExchangeRate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        _oracle<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&quot;USD&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>oracleResponse<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u56DE\u8C03\u51FD\u6570\uFF0C\u7528\u4E8E\u8BFB\u53D6\u54CD\u5E94</span>
    <span class="token keyword">function</span> <span class="token function">oracleResponse</span><span class="token punctuation">(</span><span class="token parameter">bytes response</span><span class="token punctuation">)</span> onlyByOracle <span class="token punctuation">{</span>
    <span class="token comment">// use the data</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u95EA\u7535\u7F51\u7EDC" tabindex="-1"><a class="header-anchor" href="#\u95EA\u7535\u7F51\u7EDC" aria-hidden="true">#</a> \u95EA\u7535\u7F51\u7EDC</h2><h3 id="rsmc" tabindex="-1"><a class="header-anchor" href="#rsmc" aria-hidden="true">#</a> RSMC</h3><p>Revocable Sequence Maturity Contract\uFF08\u5E8F\u5217\u5230\u671F\u53EF\u64A4\u9500\u5408\u7EA6\uFF09</p><h3 id="htlc" tabindex="-1"><a class="header-anchor" href="#htlc" aria-hidden="true">#</a> HTLC</h3><p>Hashed Timelock Contract\uFF08\u54C8\u5E0C\u65F6\u95F4\u9501\u5B9A\uFF09</p>`,30),c=[p];function i(o,l){return s(),a("div",null,c)}const d=n(e,[["render",i],["__file","Smart_contracts_design_pattern.html.vue"]]);export{d as default};
