import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as e,a as n,b as s,d as o,e as c,r as l}from"./app.1ee57811.js";const i={},u=c(`<p>我花了几天去了解<strong>NIO的核心知识点</strong>，期间看了《Java 编程思想》和《疯狂Java 讲义》的nio模块。<strong>但是</strong>，会发现看完了之后还是很<strong>迷</strong>，不知道NIO这是干嘛用的，而网上的资料与书上的知识点没有很好地对应。</p><ul><li>网上的资料很多都以IO的五种模型为基础来讲解NIO，而IO这五种模型其中又涉及到了很多概念：<code>同步/异步/阻塞/非阻塞/多路复用</code>，<strong>而不同的人又有不同的理解方式</strong>。</li><li>还有涉及到了unix的<code>select/epoll/poll/pselect</code>，<code>fd</code>这些关键字，没有相关基础的人看起来简直是天书</li><li>这就导致了在初学时认为nio远不可及</li></ul><p>我在找资料的过程中也收藏了好多讲解NIO的资料，这篇文章就是<strong>以初学的角度来理解NIO</strong>。也算是我这两天看NIO的一个总结吧。</p><ul><li>希望大家可以看了之后知道什么是NIO，NIO的核心知识点是什么，会使用NIO~</li></ul><p>那么接下来就开始吧，如果文章有错误的地方请大家多多包涵，不吝在评论区指正哦~</p><blockquote><p>声明：本文使用JDK1.8</p></blockquote><p>JDK 1.4中的<code>java.nio.*包</code>中引入新的Java I/O库，其目的是<strong>提高速度</strong>。实际上，“旧”的I/O包已经使用NIO<strong>重新实现过，即使我们不显式的使用NIO编程，也能从中受益</strong>。</p><ul><li>nio翻译成 no-blocking io 或者 new io 都无所谓啦，都说得通~</li></ul><p>在《Java编程思想》读到**“即使我们不显式的使用NIO编程，也能从中受益”<strong>的时候，我是挺在意的，所以：我们</strong>测试**一下使用NIO复制文件和传统IO复制文件的性能：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span></span><span class="token class-name">ByteBuffer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span>channels<span class="token punctuation">.</span></span><span class="token class-name">FileChannel</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SimpleFileTransferTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">long</span> <span class="token function">transferFile</span><span class="token punctuation">(</span><span class="token class-name">File</span> source<span class="token punctuation">,</span> <span class="token class-name">File</span> des<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> startTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>des<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            des<span class="token punctuation">.</span><span class="token function">createNewFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">BufferedInputStream</span> bis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BufferedOutputStream</span> bos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>des<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//将数据源读到的内容写入目的地--使用数组         </span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> len<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> bis<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            bos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">long</span> endTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> endTime <span class="token operator">-</span> startTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">long</span> <span class="token function">transferFileWithNIO</span><span class="token punctuation">(</span><span class="token class-name">File</span> source<span class="token punctuation">,</span> <span class="token class-name">File</span> des<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> startTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>des<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            des<span class="token punctuation">.</span><span class="token function">createNewFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">RandomAccessFile</span> read <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RandomAccessFile</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> <span class="token string">&quot;rw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">RandomAccessFile</span> write <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RandomAccessFile</span><span class="token punctuation">(</span>des<span class="token punctuation">,</span> <span class="token string">&quot;rw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">FileChannel</span> readChannel <span class="token operator">=</span> read<span class="token punctuation">.</span><span class="token function">getChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FileChannel</span> writeChannel <span class="token operator">=</span> write<span class="token punctuation">.</span><span class="token function">getChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">ByteBuffer</span> byteBuffer <span class="token operator">=</span> <span class="token class-name">ByteBuffer</span><span class="token punctuation">.</span><span class="token function">allocate</span><span class="token punctuation">(</span><span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//1M缓冲区 </span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>readChannel<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>byteBuffer<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            byteBuffer<span class="token punctuation">.</span><span class="token function">flip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            writeChannel<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>byteBuffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
            byteBuffer<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        writeChannel<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        readChannel<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> endTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> endTime <span class="token operator">-</span> startTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">SimpleFileTransferTest</span> simpleFileTransferTest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleFileTransferTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">File</span> sourse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;F:\\\\电影\\\\[电影天堂www.dygod.cn]猜火车-cd1.rmvb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">File</span> des <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;X:\\\\Users\\\\ozc\\\\Desktop\\\\io.avi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">File</span> nio <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;X:\\\\Users\\\\ozc\\\\Desktop\\\\nio.avi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">long</span> time <span class="token operator">=</span> simpleFileTransferTest<span class="token punctuation">.</span><span class="token function">transferFile</span><span class="token punctuation">(</span>sourse<span class="token punctuation">,</span> des<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>time <span class="token operator">+</span> <span class="token string">&quot;：普通字节流时间&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">long</span> timeNio <span class="token operator">=</span> simpleFileTransferTest<span class="token punctuation">.</span><span class="token function">transferFileWithNIO</span><span class="token punctuation">(</span>sourse<span class="token punctuation">,</span> nio<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>timeNio <span class="token operator">+</span> <span class="token string">&quot;：NIO时间&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我分别测试了文件大小为13M，40M，200M的：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/why-d5118350-471f-4998-abb2-4e82c7a50344.jpg" alt="" loading="lazy"></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/why-ffcb8770-5f0a-41e9-8534-f92a6f931a49.jpg" alt="" loading="lazy"></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/why-0425087f-7878-466b-b02a-a802444e7405.jpg" alt="" loading="lazy"></p><p>为什么要使用NIO?</p><p>可以看到使用过NIO重新实现过的<strong>传统IO根本不虚</strong>，在大文件下效果还比NIO要好(当然了，个人几次的测试，或许不是很准)</p><ul><li>而NIO要有一定的学习成本，也没有传统IO那么好理解。</li></ul><p>那这意味着我们<strong>可以不使用/学习NIO了吗</strong>？</p><p>答案是<strong>否定</strong>的，IO操作往往在<strong>两个场景</strong>下会用到：</p><ul><li>文件IO</li><li>网络IO</li></ul><p>NIO的<strong>魅力：在网络中使用IO就可以体现出来了</strong>！</p><ul><li>后面会说到网络中使用NIO，不急哈~</li></ul>`,22),k={href:"https://www.zhihu.com/question/29005375/answer/667616386",target:"_blank",rel:"noopener noreferrer"},r=n("hr",null,null,-1);function d(m,v){const a=l("ExternalLinkIcon");return p(),e("div",null,[u,n("blockquote",null,[n("p",null,[s("参考链接："),n("a",k,[s("https://www.zhihu.com/question/29005375/answer/667616386"),o(a)]),s("，整理：musk")])]),r])}const f=t(i,[["render",d],["__file","why.html.vue"]]);export{f as default};