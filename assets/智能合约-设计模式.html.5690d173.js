import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.48f1d0d6.js";const e="/assets/contract-oracle.d92a3039.png",p={},c=t(`<h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h2><p>《Design Patterns For Smart Contracts In the Ethereum Ecosystem》</p><h3 id="安全-security" tabindex="-1"><a class="header-anchor" href="#安全-security" aria-hidden="true">#</a> 安全 Security</h3><ul><li><p>Checks-Effects-Interaction 保证状态完整，再做外部调用</p><p>Checks：参数验证，Effects：修改合约状态，Interaction：外部交互 这个模式要求合约按照Checks-Effects-Interaction的顺序来组织代码。它的好处在于进行外部调用之前，Checks-Effects已完成合约自身状态所有相关工作，使得状态完整、逻辑自洽，这样外部调用就无法利用不完整的状态进行攻击</p></li><li><p>Mutex - 禁止递归</p><p>使用修饰符防止函数被递归调用。防止重放攻击</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  contract Mutex <span class="token punctuation">{</span>
    bool locked<span class="token punctuation">;</span>
    modifier <span class="token function">noReentrancy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//防止递归</span>
        <span class="token function">require</span><span class="token punctuation">(</span><span class="token operator">!</span>locked<span class="token punctuation">,</span> <span class="token string">&quot;Reentrancy detected&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        locked <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        _<span class="token punctuation">;</span>
        locked <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//调用该函数将会抛出Reentrancy detected错误</span>
    <span class="token keyword">function</span> <span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> noReentrancy<span class="token punctuation">{</span>
        <span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可维护性-maintaince" tabindex="-1"><a class="header-anchor" href="#可维护性-maintaince" aria-hidden="true">#</a> 可维护性 Maintaince</h3><p>高度模块化、高内聚低耦合</p><ul><li>Data segregation - 数据与逻辑相分离</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>contract DataRepository<span class="token punctuation">{</span>

    uint <span class="token keyword">private</span> _data<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">setData</span><span class="token punctuation">(</span><span class="token parameter">uint data</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        _data <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> view <span class="token function">returns</span><span class="token punctuation">(</span><span class="token parameter">uint</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> _data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
contract Computer<span class="token punctuation">{</span>
    DataRepository <span class="token keyword">private</span> _dataRepository<span class="token punctuation">;</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">address addr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        _dataRepository <span class="token operator">=</span> <span class="token function">DataRepository</span><span class="token punctuation">(</span>addr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//业务代码</span>
    <span class="token keyword">function</span> <span class="token function">compute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> view <span class="token function">returns</span><span class="token punctuation">(</span><span class="token parameter">uint</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> _dataRepository<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Satellite - 分解合约功能</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>contract Base <span class="token punctuation">{</span>
    uint <span class="token keyword">public</span> _variable<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">setVariable</span><span class="token punctuation">(</span><span class="token parameter">uint data</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        _variable <span class="token operator">=</span> _satellite<span class="token punctuation">.</span><span class="token function">compute</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

     Satellite _satellite<span class="token punctuation">;</span>
    <span class="token comment">//更新子合约（卫星合约）</span>
    <span class="token keyword">function</span> <span class="token function">updateSatellite</span><span class="token punctuation">(</span><span class="token parameter">address addr</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        _satellite <span class="token operator">=</span> <span class="token function">Satellite</span><span class="token punctuation">(</span>addr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
contract Satellite <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">compute</span><span class="token punctuation">(</span><span class="token parameter">uint a</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token function">returns</span><span class="token punctuation">(</span><span class="token parameter">uint</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span>        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Contract Registry - 跟踪最新合约</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>contract Registry<span class="token punctuation">{</span>

    address _current<span class="token punctuation">;</span>
    address<span class="token punctuation">[</span><span class="token punctuation">]</span> _previous<span class="token punctuation">;</span>

    <span class="token comment">//子合约升级了，就通过update函数更新地址</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Contract Relay - 代理调用最新合约</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>contract Base <span class="token punctuation">{</span>
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

    <span class="token comment">//子合约升级了，就通过update函数更新地址</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生命周期-lifecycle" tabindex="-1"><a class="header-anchor" href="#生命周期-lifecycle" aria-hidden="true">#</a> 生命周期 Lifecycle</h3><ul><li>Mortal - 允许合约自毁</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>contract Mortal<span class="token punctuation">{</span>
    <span class="token comment">//自毁</span>
    <span class="token keyword">function</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span><span class="token punctuation">{</span>
        <span class="token comment">//selfdestruct指令，用于销毁合约</span>
        <span class="token function">selfdestruct</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Automatic Deprecation - 允许合约自动停止服务</p><p>当用户调用service，notExpired修饰符会先进行日期检测，这样，一旦过了特定时间，调用就会因过期而被拦截在notExpired层。</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>contract AutoDeprecated<span class="token punctuation">{</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="权限-authorization" tabindex="-1"><a class="header-anchor" href="#权限-authorization" aria-hidden="true">#</a> 权限 Authorization</h3><ul><li>Ownership</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>contract Ownable <span class="token punctuation">{</span>
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
        _<span class="token punctuation">;</span><span class="token comment">//表示所修饰函数中的代码,也就是将这个 require 在最前面执行</span>
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
<span class="token comment">//继承并添加修饰器</span>
contract Biz is Owned<span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">manage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> onlyOwner<span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="行为控制-action-and-control" tabindex="-1"><a class="header-anchor" href="#行为控制-action-and-control" aria-hidden="true">#</a> 行为控制 Action And Control</h3><ul><li>Commit - Reveal - 延迟秘密泄露 Commit And Reveal模式允许用户将要保护的数据转换为不可识别数据，比如一串哈希值，直到某个时刻再揭示哈希值的含义，展露真正的原值。<br> 以投票场景举例，假设需要在所有参与者都完成投票后再揭示投票内容，以防这期间参与者受票数影响</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>contract CommitReveal <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Oracle - 读取链外数据 获取外部数据会通过名为Oracle的链外数据层来执行。当业务方的合约尝试获取外部数据时，会先将查询请求存入到某个Oracle专用合约内；Oracle会监听该合约，读取到这个查询请求后，执行查询，并调用业务合约响应接口使合约获取结果。 <img src="`+e+`" alt="oracle" loading="lazy"></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>contract Oracle <span class="token punctuation">{</span>
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

    <span class="token comment">//回调函数，由Oracle调用</span>
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

    <span class="token comment">//回调函数，用于读取响应</span>
    <span class="token keyword">function</span> <span class="token function">oracleResponse</span><span class="token punctuation">(</span><span class="token parameter">bytes response</span><span class="token punctuation">)</span> onlyByOracle <span class="token punctuation">{</span>
    <span class="token comment">// use the data</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="闪电网络" tabindex="-1"><a class="header-anchor" href="#闪电网络" aria-hidden="true">#</a> 闪电网络</h2><h3 id="rsmc" tabindex="-1"><a class="header-anchor" href="#rsmc" aria-hidden="true">#</a> RSMC</h3><p>Revocable Sequence Maturity Contract（序列到期可撤销合约）</p><h3 id="htlc" tabindex="-1"><a class="header-anchor" href="#htlc" aria-hidden="true">#</a> HTLC</h3><p>Hashed Timelock Contract（哈希时间锁定）</p>`,33),i=[c];function o(u,l){return s(),a("div",null,i)}const k=n(p,[["render",o],["__file","智能合约-设计模式.html.vue"]]);export{k as default};
