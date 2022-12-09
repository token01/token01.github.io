import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as t,a as n,b as e,d as s,e as a,r as u}from"./app.900d58e3.js";const r={},v=n("p",null,"俗话说了，“金无足赤人无完人”，HashMap 也不例外，有一种需求它就满足不了，假如我们需要一个按照插入顺序来排列的键值对集合，那 HashMap 就无能为力了。那该怎么办呢？必须得上今天这篇文章的主角：LinkedHashMap。",-1),c={href:"https://tobebetterjavaer.com/collection/hashmap.html",target:"_blank",rel:"noopener noreferrer"},o=n("p",null,"为了提高查找效率，HashMap 在插入的时候对键做了一次哈希算法，这就导致插入的元素是无序的。",-1),m={href:"https://tobebetterjavaer.com/collection/hashmap.html",target:"_blank",rel:"noopener noreferrer"},p=n("code",null,"put()",-1),b=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>final V putVal(int hash, K key, V value, boolean onlyIfAbsent,

               boolean evict) {
    HashMap.Node&lt;K,V&gt;[] tab; HashMap.Node&lt;K,V&gt; p; int n, i;
    // ①、数组 table 为 null 时，调用 resize 方法创建默认大小的数组
    if ((tab = table) == null || (n = tab.length) == 0)
        n = (tab = resize()).length;
    // ②、计算下标，如果该位置上没有值，则填充
    if ((p = tab[i = (n - 1) &amp; hash]) == null)
        tab[i] = newNode(hash, key, value, null);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个公式 <code>i = (n - 1) &amp; hash</code> 计算后的值并不是按照 0、1、2、3、4、5 这样有序的下标将键值对插入到数组当中的，而是有一定的随机性。</p><p>那 LinkedHashMap 就是为这个需求应运而生的。LinkedHashMap 继承了 HashMap，所以 HashMap 有的关于键值对的功能，它也有了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class LinkedHashMap&lt;K,V&gt;

    extends HashMap&lt;K,V&gt;

    implements Map&lt;K,V&gt;{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，LinkedHashMap 内部又追加了双向链表，来维护元素的插入顺序。注意下面代码中的 before 和 after，它俩就是用来维护当前元素的前一个元素和后一个元素的顺序的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>static class Entry&lt;K,V&gt; extends HashMap.Node&lt;K,V&gt; {
    LinkedHashMap.Entry&lt;K,V&gt; before, after;
    Entry(int hash, K key, V value, HashMap.Node&lt;K,V&gt; next) {
        super(hash, key, value, next);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),h={href:"https://tobebetterjavaer.com/collection/linkedlist.html",target:"_blank",rel:"noopener noreferrer"},k=n("h2",{id:"_01、插入顺序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_01、插入顺序","aria-hidden":"true"},"#"),e(" 01、插入顺序")],-1),g={href:"https://tobebetterjavaer.com/collection/hashmap.html",target:"_blank",rel:"noopener noreferrer"},q=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Map&lt;String, String&gt; hashMap = new HashMap&lt;&gt;();
hashMap.put(&quot;沉&quot;, &quot;musk&quot;);
hashMap.put(&quot;默&quot;, &quot;musk&quot;);
hashMap.put(&quot;王&quot;, &quot;musk&quot;);
hashMap.put(&quot;二&quot;, &quot;musk&quot;);
hashMap.put(null, null);

for (String key : hashMap.keySet()) {
    System.out.println(key + &quot; : &quot; + hashMap.get(key));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>null : null
默 : musk
沉 : musk
王 : musk
二 : musk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然 null 最后一位 put 进去的，但在遍历输出的时候，跑到了第一位。</p><p>那再来对比看一下 LinkedHashMap。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Map&lt;String, String&gt; linkedHashMap = new LinkedHashMap&lt;&gt;();
linkedHashMap.put(&quot;沉&quot;, &quot;musk&quot;);
linkedHashMap.put(&quot;默&quot;, &quot;musk&quot;);
linkedHashMap.put(&quot;王&quot;, &quot;musk&quot;);
linkedHashMap.put(&quot;二&quot;, &quot;musk&quot;);
linkedHashMap.put(null, null);

for (String key : linkedHashMap.keySet()) {
    System.out.println(key + &quot; : &quot; + linkedHashMap.get(key));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>沉 : musk
默 : musk
王 : musk
二 : musk
null : null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>null 在最后一位插入，在最后一位输出。</p><p>输出结果可以再次证明，HashMap 是无序的，LinkedHashMap 是可以维持插入顺序的。</p><p>那 LinkedHashMap 是如何做到这一点呢？我相信同学们和我一样，非常希望知道原因。</p><p>要想搞清楚，就需要深入研究一下 LinkedHashMap 的源码。LinkedHashMap 并未重写 HashMap 的 <code>put()</code> 方法，而是重写了 <code>put()</code> 方法需要调用的内部方法 <code>newNode()</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HashMap.Node&lt;K,V&gt; newNode(int hash, K key, V value, HashMap.Node&lt;K,V&gt; e) {
    LinkedHashMap.Entry&lt;K,V&gt; p =
            new LinkedHashMap.Entry&lt;&gt;(hash, key, value, e);
    linkNodeLast(p);
    return p;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前面说了，LinkedHashMap.Entry 继承了 HashMap.Node，并且追加了两个字段 before 和 after。</p><p>那，紧接着来看看 <code>linkNodeLast()</code> 方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>private void linkNodeLast(LinkedHashMap.Entry&lt;K,V&gt; p) {
    LinkedHashMap.Entry&lt;K,V&gt; last = tail;
    tail = p;
    if (last == null)
        head = p;
    else {
        p.before = last;
        last.after = p;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看到了吧，LinkedHashMap 在添加第一个元素的时候，会把 head 赋值为第一个元素，等到第二个元素添加进来的时候，会把第二个元素的 before 赋值为第一个元素，第一个元素的 afer 赋值为第二个元素。</p><p>这就保证了键值对是按照插入顺序排列的，明白了吧？</p><p><em>注：这篇文章当时用到的 JDK 版本为 14（当时的最新版，建议使用 Java8 或者 Java 13）</em>。</p><h2 id="_02、访问顺序" tabindex="-1"><a class="header-anchor" href="#_02、访问顺序" aria-hidden="true">#</a> 02、访问顺序</h2><p>LinkedHashMap 不仅能够维持插入顺序，还能够维持访问顺序。访问包括调用 <code>get()</code> 方法、<code>remove()</code> 方法和 <code>put()</code> 方法。</p><p>要维护访问顺序，需要我们在声明 LinkedHashMap 的时候指定三个参数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LinkedHashMap&lt;String, String&gt; map = new LinkedHashMap&lt;&gt;(16, .75f, true);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,23),M={href:"https://tobebetterjavaer.com/collection/hashmap.html",target:"_blank",rel:"noopener noreferrer"},x=a(`<p>第三个参数如果为 true 的话，就表示 LinkedHashMap 要维护访问顺序；否则，维护插入顺序。默认是 false。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Map&lt;String, String&gt; linkedHashMap = new LinkedHashMap&lt;&gt;(16, .75f, true);
linkedHashMap.put(&quot;沉&quot;, &quot;musk&quot;);
linkedHashMap.put(&quot;默&quot;, &quot;musk&quot;);
linkedHashMap.put(&quot;王&quot;, &quot;musk&quot;);
linkedHashMap.put(&quot;二&quot;, &quot;musk&quot;);

System.out.println(linkedHashMap);

linkedHashMap.get(&quot;默&quot;);
System.out.println(linkedHashMap);

linkedHashMap.get(&quot;王&quot;);
System.out.println(linkedHashMap);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{沉=musk, 默=musk, 王=musk, 二=musk}
{沉=musk, 王=musk, 二=musk, 默=musk}
{沉=musk, 二=musk, 默=musk, 王=musk}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们使用 <code>get()</code> 方法访问键位“默”的元素后，输出结果中，<code>默=musk</code> 在最后；当我们访问键位“王”的元素后，输出结果中，<code>王=musk</code> 在最后，<code>默=musk</code> 在倒数第二位。</p><p>也就是说，最不经常访问的放在头部，这就有意思了。有意思在哪呢？</p><p>我们可以使用 LinkedHashMap 来实现 LRU 缓存，LRU 是 Least Recently Used 的缩写，即最近最少使用，是一种常用的页面置换算法，选择最近最久未使用的页面予以淘汰。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class MyLinkedHashMap&lt;K, V&gt; extends LinkedHashMap&lt;K, V&gt; {

    private static final int MAX_ENTRIES = 5;

    public MyLinkedHashMap(

            int initialCapacity, float loadFactor, boolean accessOrder) {
        super(initialCapacity, loadFactor, accessOrder);
    }

    @Override
    protected boolean removeEldestEntry(Map.Entry eldest) {
        return size() &gt; MAX_ENTRIES;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MyLinkedHashMap 是一个自定义类，它继承了 LinkedHashMap，并且重写了 <code>removeEldestEntry()</code> 方法——使 Map 最多可容纳 5 个元素，超出后就淘汰。</p><p>我们来测试一下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MyLinkedHashMap&lt;String,String&gt; map = new MyLinkedHashMap&lt;&gt;(16,0.75f,true);
map.put(&quot;沉&quot;, &quot;musk&quot;);
map.put(&quot;默&quot;, &quot;musk&quot;);
map.put(&quot;王&quot;, &quot;musk&quot;);
map.put(&quot;二&quot;, &quot;musk&quot;);
map.put(&quot;一枚有趣的程序员&quot;, &quot;一枚有趣的程序员&quot;);

System.out.println(map);

map.put(&quot;一枚有颜值的程序员&quot;, &quot;一枚有颜值的程序员&quot;);
System.out.println(map);

map.put(&quot;一枚有才华的程序员&quot;,&quot;一枚有才华的程序员&quot;);
System.out.println(map);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{沉=musk, 默=musk, 王=musk, 二=musk, 一枚有趣的程序员=一枚有趣的程序员}
{默=musk, 王=musk, 二=musk, 一枚有趣的程序员=一枚有趣的程序员, 一枚有颜值的程序员=一枚有颜值的程序员}
{王=musk, 二=musk, 一枚有趣的程序员=一枚有趣的程序员, 一枚有颜值的程序员=一枚有颜值的程序员, 一枚有才华的程序员=一枚有才华的程序员}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>沉=musk</code> 和 <code>默=musk</code> 依次被淘汰出局。</p><p>假如在 put “一枚有才华的程序员”之前 get 了键位为“默”的元素：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MyLinkedHashMap&lt;String,String&gt; map = new MyLinkedHashMap&lt;&gt;(16,0.75f,true);
map.put(&quot;沉&quot;, &quot;musk&quot;);
map.put(&quot;默&quot;, &quot;musk&quot;);
map.put(&quot;王&quot;, &quot;musk&quot;);
map.put(&quot;二&quot;, &quot;musk&quot;);
map.put(&quot;一枚有趣的程序员&quot;, &quot;一枚有趣的程序员&quot;);

System.out.println(map);

map.put(&quot;一枚有颜值的程序员&quot;, &quot;一枚有颜值的程序员&quot;);
System.out.println(map);

map.get(&quot;默&quot;);
map.put(&quot;一枚有才华的程序员&quot;,&quot;一枚有才华的程序员&quot;);
System.out.println(map);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那输出结果就变了，对吧？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{沉=musk, 默=musk, 王=musk, 二=musk, 一枚有趣的程序员=一枚有趣的程序员}
{默=musk, 王=musk, 二=musk, 一枚有趣的程序员=一枚有趣的程序员, 一枚有颜值的程序员=一枚有颜值的程序员}
{二=musk, 一枚有趣的程序员=一枚有趣的程序员, 一枚有颜值的程序员=一枚有颜值的程序员, 默=musk, 一枚有才华的程序员=一枚有才华的程序员}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>沉=musk</code> 和 <code>王=musk</code> 被淘汰出局了。</p><p>那 LinkedHashMap 是如何来维持访问顺序呢？同学们感兴趣的话，可以研究一下下面这三个方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>void afterNodeAccess(Node&lt;K,V&gt; p) { }
void afterNodeInsertion(boolean evict) { }
void afterNodeRemoval(Node&lt;K,V&gt; p) { }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>afterNodeAccess()</code> 会在调用 <code>get()</code> 方法的时候被调用，<code>afterNodeInsertion()</code> 会在调用 <code>put()</code> 方法的时候被调用，<code>afterNodeRemoval()</code> 会在调用 <code>remove()</code> 方法的时候被调用。</p><p>我来以 <code>afterNodeAccess()</code> 为例来讲解一下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>void afterNodeAccess(HashMap.Node&lt;K,V&gt; e) { // move node to last
    LinkedHashMap.Entry&lt;K,V&gt; last;
    if (accessOrder &amp;&amp; (last = tail) != e) {
        LinkedHashMap.Entry&lt;K,V&gt; p =
                (LinkedHashMap.Entry&lt;K,V&gt;)e, b = p.before, a = p.after;
        p.after = null;
        if (b == null)
            head = a;
        else
            b.after = a;
        if (a != null)
            a.before = b;
        else
            last = b;
        if (last == null)
            head = p;
        else {
            p.before = last;
            last.after = p;
        }
        tail = p;
        ++modCount;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>哪个元素被 get 就把哪个元素放在最后。了解了吧？</p><p>那同学们可能还想知道，为什么 LinkedHashMap 能实现 LRU 缓存，把最不经常访问的那个元素淘汰？</p><p>在插入元素的时候，需要调用 <code>put()</code> 方法，该方法最后会调用 <code>afterNodeInsertion()</code> 方法，这个方法被 LinkedHashMap 重写了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>void afterNodeInsertion(boolean evict) { // possibly remove eldest
    LinkedHashMap.Entry&lt;K,V&gt; first;
    if (evict &amp;&amp; (first = head) != null &amp;&amp; removeEldestEntry(first)) {
        K key = first.key;
        removeNode(hash(key), key, null, false, true);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>removeEldestEntry()</code> 方法会判断第一个元素是否超出了可容纳的最大范围，如果超出，那就会调用 <code>removeNode()</code> 方法对最不经常访问的那个元素进行删除。</p><h2 id="_03、最后" tabindex="-1"><a class="header-anchor" href="#_03、最后" aria-hidden="true">#</a> 03、最后</h2><p>由于 LinkedHashMap 要维护双向链表，所以 LinkedHashMap 在插入、删除操作的时候，花费的时间要比 HashMap 多一些。</p><p>这也是没办法的事，对吧，欲戴皇冠必承其重嘛。既然想要维护元素的顺序，总要付出点代价才行。</p><hr>`,33);function H(f,y){const i=u("ExternalLinkIcon");return l(),t("div",null,[v,n("p",null,[e("同学们好啊，还记得 "),n("a",c,[e("HashMap"),s(i)]),e(" 那篇吗？我自己感觉写得非常棒啊，既通俗易懂，又深入源码，真的是分析得透透彻彻、清清楚楚、明明白白的。（一不小心又甩了三个成语，有文化吧？）HashMap 哪哪都好，真的，只要你想用键值对，第一时间就应该想到它。")]),o,n("p",null,[e("对这一点还不太明白的同学，可以再回到 "),n("a",m,[e("HashMap"),s(i)]),e(" 那一篇，看看我对 "),p,e(" 方法的讲解。")]),b,n("p",null,[e("关于双向链表，同学们可以回头看一遍我写的 "),n("a",h,[e("LinkedList"),s(i)]),e(" 那篇文章，会对理解本篇的 LinkedHashMap 有很大的帮助。")]),k,n("p",null,[e("在 "),n("a",g,[e("HashMap"),s(i)]),e(" 那篇文章里，我有讲解到一点，不知道同学们记不记得，就是 null 会插入到 HashMap 的第一位。")]),q,n("p",null,[e("第一个参数和第二个参数，看过 "),n("a",M,[e("HashMap"),s(i)]),e(" 的同学们应该很熟悉了，指的是初始容量和负载因子。")]),x])}const N=d(r,[["render",H],["__file","linkedhashmap.html.vue"]]);export{N as default};
