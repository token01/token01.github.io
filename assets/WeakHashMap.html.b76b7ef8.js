import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,a as s,b as n,d as p,e as c,r as l}from"./app.c2a49a29.js";const i={},u={href:"https://tobebetterjavaer.com/collection/hashmap.html",target:"_blank",rel:"noopener noreferrer"},k=c(`<p>WeakHashMap其实和HashMap大多数行为是一样的，只是WeakHashMap不会阻止GC回收key对象（不是value），那么WeakHashMap是怎么做到的呢，这就是我们研究的主要问题。</p><p>在开始WeakHashMap之前，我们先要对弱引用有一定的了解。</p><p>在Java中，有四种引用类型</p><ul><li>强引用(Strong Reference)，我们正常编码时默认的引用类型，强应用之所以为强，是因为如果一个对象到GC Roots强引用可到达，就可以阻止GC回收该对象</li><li>软引用（Soft Reference）阻止GC回收的能力相对弱一些，如果是软引用可以到达，那么这个对象会停留在内存更时间上长一些。当内存不足时垃圾回收器才会回收这些软引用可到达的对象</li><li>弱引用（WeakReference）无法阻止GC回收，如果一个对象时弱引用可到达，那么在下一个GC回收执行时，该对象就会被回收掉。</li><li>虚引用（Phantom Reference）十分脆弱，它的唯一作用就是当其指向的对象被回收之后，自己被加入到引用队列，用作记录该引用指向的对象已被销毁</li></ul><p>这其中还有一个概念叫做引用队列(Reference Queue)</p><ul><li>一般情况下，一个对象标记为垃圾（并不代表回收了）后，会加入到引用队列。</li><li>对于虚引用来说，它指向的对象会只有被回收后才会加入引用队列，所以可以用作记录该引用指向的对象是否回收。</li></ul><h2 id="weakhashmap如何不阻止对象回收呢" tabindex="-1"><a class="header-anchor" href="#weakhashmap如何不阻止对象回收呢" aria-hidden="true">#</a> WeakHashMap如何不阻止对象回收呢</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">WeakReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span>
  <span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> hash<span class="token punctuation">;</span>
  <span class="token keyword">boolean</span> isNull<span class="token punctuation">;</span>
  <span class="token class-name">V</span> value<span class="token punctuation">;</span>
  <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> next<span class="token punctuation">;</span>
  <span class="token keyword">interface</span> <span class="token class-name">Type</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">R</span><span class="token punctuation">,</span> <span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token class-name">R</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> entry<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token class-name">Entry</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> object<span class="token punctuation">,</span> <span class="token class-name">ReferenceQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">&gt;</span></span> queue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> queue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  isNull <span class="token operator">=</span> key <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  hash <span class="token operator">=</span> isNull <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> key<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  value <span class="token operator">=</span> object<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如源码所示，</p><ul><li>WeakHashMap的Entry继承了WeakReference。</li><li>其中Key作为了WeakReference指向的对象</li><li>因此WeakHashMap利用了WeakReference的机制来实现不阻止GC回收Key</li></ul><h2 id="如何删除被回收的key数据呢" tabindex="-1"><a class="header-anchor" href="#如何删除被回收的key数据呢" aria-hidden="true">#</a> 如何删除被回收的key数据呢</h2><p>在Javadoc中关于WeakHashMap有这样的描述，当key不再引用时，其对应的key/value也会被移除。</p><p>那么是如何移除的呢，这里我们通常有两种假设策略</p><ul><li>当对象被回收的时候，进行通知</li><li>WeakHashMap轮询处理时效的Entry</li></ul><p>而WeakHashMap采用的是轮询的形式，在其put/get/size等方法调用的时候都会预先调用一个poll的方法，来检查并删除失效的Entry</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> toRemove<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>toRemove <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> referenceQueue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">removeEntry</span><span class="token punctuation">(</span>toRemove<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span><span class="token constant">LOGTAG</span><span class="token punctuation">,</span> <span class="token string">&quot;removeEntry=&quot;</span> <span class="token operator">+</span> toRemove<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么没有使用看似更好的通知呢，我想是因为在Java中没有一个可靠的通知回调，比如大家常说的finalize方法，其实也不是标准的，不同的JVM可以实现不同，甚至是不调用这个方法。</p><p>当然除了单纯的看源码，进行合理的验证是检验分析正确的一个重要方法。</p><p>这里首先，我们定义一个MyObject类，处理一下finalize方法（在我的测试机上可以正常调用，仅仅做为辅助验证手段）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">MyObject</span><span class="token punctuation">(</span>val id<span class="token operator">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token class-name">Any</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">protected</span> fun <span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">i</span><span class="token punctuation">(</span><span class="token string">&quot;MainActivity&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Object($id) finalize method is called&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后是调用者的代码，如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> val weakHashMap <span class="token operator">=</span> <span class="token class-name">WeakHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Any</span><span class="token punctuation">,</span> <span class="token class-name">Int</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token keyword">var</span> count <span class="token operator">:</span> <span class="token class-name">Int</span> <span class="token operator">=</span> <span class="token number">0</span>
 override fun <span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token operator">:</span> <span class="token class-name">Bundle</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token punctuation">)</span>
  <span class="token function">setContentView</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>layout<span class="token punctuation">.</span>activity_main<span class="token punctuation">)</span>
  <span class="token function">setSupportActionBar</span><span class="token punctuation">(</span>toolbar<span class="token punctuation">)</span>
  <span class="token function">dumpWeakInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  fab<span class="token punctuation">.</span>setOnClickListener <span class="token punctuation">{</span> view <span class="token operator">-&gt;</span>
  <span class="token comment">//System.gc()// this seldom works use Android studio force gc stop</span>
  weakHashMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">MyObject</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
  count <span class="token operator">++</span>
  <span class="token function">dumpWeakInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token class-name">Snackbar</span><span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span>view<span class="token punctuation">,</span> <span class="token string">&quot;Replace with your own action&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Snackbar</span><span class="token punctuation">.</span><span class="token constant">LENGTH_LONG</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">setAction</span><span class="token punctuation">(</span><span class="token string">&quot;Action&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
  fun <span class="token function">dumpWeakInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">i</span><span class="token punctuation">(</span><span class="token string">&quot;MainActivity&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dumpWeakInfo weakInfo.size=\${weakHashMap.size}&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们按照如下操作</p><ul><li>点击fab控件，每次对WeakhashMap对象增加一个Entry，并打印WeakHashMap的size 执行3此</li><li>在没有强制触发GC时，WeakHashMap对象size一直会增加</li><li>手动出发Force GC，我们会看到MyObject有finalize方法被调用</li><li>再次点击fab空间，然后输出的WeakHashMap size急剧减少。</li><li>同样我们收到在WeakHashMap增加的日志也会输出</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">I</span><span class="token operator">/</span><span class="token class-name">MainActivity</span><span class="token punctuation">(</span><span class="token number">10202</span><span class="token punctuation">)</span><span class="token operator">:</span> dumpWeakInfo weakInfo<span class="token punctuation">.</span>size<span class="token operator">=</span><span class="token number">1</span>
 <span class="token class-name">I</span><span class="token operator">/</span><span class="token class-name">MainActivity</span><span class="token punctuation">(</span><span class="token number">10202</span><span class="token punctuation">)</span><span class="token operator">:</span> dumpWeakInfo weakInfo<span class="token punctuation">.</span>size<span class="token operator">=</span><span class="token number">2</span>
 <span class="token class-name">I</span><span class="token operator">/</span><span class="token class-name">MainActivity</span><span class="token punctuation">(</span><span class="token number">10202</span><span class="token punctuation">)</span><span class="token operator">:</span> dumpWeakInfo weakInfo<span class="token punctuation">.</span>size<span class="token operator">=</span><span class="token number">3</span>
 <span class="token class-name">I</span><span class="token operator">/</span><span class="token class-name">MainActivity</span><span class="token punctuation">(</span><span class="token number">10202</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> finalize method is called
 <span class="token class-name">I</span><span class="token operator">/</span><span class="token class-name">MainActivity</span><span class="token punctuation">(</span><span class="token number">10202</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> finalize method is called
 <span class="token class-name">I</span><span class="token operator">/</span><span class="token class-name">MainActivity</span><span class="token punctuation">(</span><span class="token number">10202</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> finalize method is called
 <span class="token class-name">I</span><span class="token operator">/</span><span class="token class-name">WeakHashMap</span><span class="token punctuation">(</span><span class="token number">10202</span><span class="token punctuation">)</span><span class="token operator">:</span> removeEntry<span class="token operator">=</span><span class="token number">2</span>
 <span class="token class-name">I</span><span class="token operator">/</span><span class="token class-name">WeakHashMap</span><span class="token punctuation">(</span><span class="token number">10202</span><span class="token punctuation">)</span><span class="token operator">:</span> removeEntry<span class="token operator">=</span><span class="token number">0</span>
 <span class="token class-name">I</span><span class="token operator">/</span><span class="token class-name">WeakHashMap</span><span class="token punctuation">(</span><span class="token number">10202</span><span class="token punctuation">)</span><span class="token operator">:</span> removeEntry<span class="token operator">=</span><span class="token number">1</span>
 <span class="token class-name">I</span><span class="token operator">/</span><span class="token class-name">MainActivity</span><span class="token punctuation">(</span><span class="token number">10202</span><span class="token punctuation">)</span><span class="token operator">:</span> dumpWeakInfo weakInfo<span class="token punctuation">.</span>size<span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：System.gc()并不一定可以工作,建议使用Android Studio的Force GC</p>`,26),r={href:"https://github.com/androidyue/WeakHashMapSample",target:"_blank",rel:"noopener noreferrer"},d=s("hr",null,null,-1);function m(v,b){const a=l("ExternalLinkIcon");return t(),o("div",null,[s("p",null,[n("在Java中，我们一般都会使用到Map，比如"),s("a",u,[n("HashMap"),p(a)]),n("这样的具体实现。更高级一点，我们可能会使用WeakHashMap。")]),k,s("p",null,[n("完整的测试代码可以访问这里 "),s("a",r,[n("https://github.com/androidyue/WeakHashMapSample"),p(a)])]),d])}const y=e(i,[["render",m],["__file","WeakHashMap.html.vue"]]);export{y as default};
