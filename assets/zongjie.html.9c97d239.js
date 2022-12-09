import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as s,a,b as e,d as i,e as r,r as l}from"./app.c2a49a29.js";const c={},d=r(`<h1 id="jvm-核心知识点总结" tabindex="-1"><a class="header-anchor" href="#jvm-核心知识点总结" aria-hidden="true">#</a> JVM 核心知识点总结</h1><h2 id="一、基本概念" tabindex="-1"><a class="header-anchor" href="#一、基本概念" aria-hidden="true">#</a> 一、基本概念</h2><h3 id="_1-1-openjdk" tabindex="-1"><a class="header-anchor" href="#_1-1-openjdk" aria-hidden="true">#</a> 1.1 OpenJDK</h3><p>自 1996 年 <code>JDK 1.0</code> 发布以来，Sun 公司在大版本上发行了 <code>JDK 1.1</code>、<code>JDK 1.2</code>、<code>JDK 1.3</code>、<code>JDK 1.4</code>、<code>JDK 5</code>，<code>JDK 6</code> ，这些版本的 JDK 都可以统称为 SunJDK 。之后在 2006 年的 JavaOne 大会上，Sun 公司宣布将 Java 开源，在随后的一年多里，它陆续将 JDK 的各个部分在 GPL v2（GNU General Public License，version 2）协议下开源，并建立了 OpenJDK 组织来对这些代码进行独立的管理，这就是 OpenJDK 的来源，此时的 OpenJDK 拥有当时 sunJDK 7 的几乎全部代码。</p><h3 id="_1-2-oraclejdk" tabindex="-1"><a class="header-anchor" href="#_1-2-oraclejdk" aria-hidden="true">#</a> 1.2 OracleJDK</h3><p>在 JDK 7 的开发期间，由于各种原因的影响 Sun 公司市值一路下跌，已无力推进 JDK 7 的开发，JDK 7 的发布一直被推迟。之后在 2009 年 Sun 公司被 Oracle 公司所收购，为解决 JDK 7 长期跳票的问题，Oracle 将 JDK 7 中大部分未能完成的项目推迟到 JDK 8 ，并于 2011 年发布了JDK 7，在这之后由 Oracle 公司正常发行的 JDK 版本就由 SunJDK 改称为 Oracle JDK。</p><p>在 2017 年 JDK 9 发布后，Oracle 公司宣布从此以后 JDK 将会在每年的 3 月和 9 月各发布一个大版本，即半年发行一个大版本，目的是为了避免众多功能被捆绑到一个 JDK 版本上而引发的无法交付的风险。</p><p>在 JDK 11 发布后，Oracle 同步调整了 JDK 的商业授权，宣布从 JDK 11 起将以前的商业特性全部开源给 OpenJDK ，这样 OpenJDK 11 和 OracleJDK 11 的代码和功能，在本质上就完全相同了。同时还宣布以后都会发行两个版本的 JDK ：</p><ul><li>一个是在 GPLv2 + CE 协议下由 Oracle 开源的 OpenJDK；</li><li>一个是在 OTN 协议下正常发行的 OracleJDK。</li></ul><p>两者共享大部分源码，在功能上几乎一致。唯一的区别是 Oracle OpenJDK 可以在开发、测试或者生产环境中使用，但只有半年的更新支持；而 OracleJDK 对个人免费，但在生产环境中商用收费，可以有三年时间的更新支持。</p><h3 id="_1-3-hotspot-vm" tabindex="-1"><a class="header-anchor" href="#_1-3-hotspot-vm" aria-hidden="true">#</a> 1.3 HotSpot VM</h3><p>它是 Sun/Oracle JDK 和 OpenJDK 中默认的虚拟机，也是目前使用最为广泛的虚拟机。最初由 Longview Technologies 公司设计发明，该公司在 1997 年被 Sun 公司收购，随后 Sun 公司在 2006 年开源 SunJDK 时也将 HotSpot 虚拟机一并进行了开源。之后 Oracle 收购 Sun 以后，建立了 HotRockit 项目，并将其收购的另外一家公司（BEA）的 JRockit 虚拟机中的优秀特性集成到 HotSpot 中。HotSpot 在这个过程里面移除掉永久代，并吸收了 JRockit 的 Java Mission Control 监控工具等功能。到 JDK 8 发行时，采用的就是集两者之长的 HotSpot VM 。</p><p>我们可以在自己的电脑上使用 <code>java -version</code> 来获得 JDK 的信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Users<span class="token operator">&gt;</span> <span class="token function">java</span> <span class="token parameter variable">-version</span>
<span class="token function">java</span> version <span class="token string">&quot;1.8.0_171&quot;</span>   <span class="token comment"># 如果是openJDK, 则这里会显示：openjdk version</span>
Java<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> SE Runtime Environment <span class="token punctuation">(</span>build <span class="token number">1.8</span>.0_171-b11<span class="token punctuation">)</span>
Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">25.171</span>-b11, mixed mode<span class="token punctuation">)</span> <span class="token comment"># 使用的是HotSpot虚拟机，默认为服务端模式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、java-内存区域" tabindex="-1"><a class="header-anchor" href="#二、java-内存区域" aria-hidden="true">#</a> 二、Java 内存区域</h2><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/zongjie-1d779fca-b6a4-4982-b746-2a8db7805645.png" alt="" loading="lazy"></p><h3 id="_2-1-程序计数器" tabindex="-1"><a class="header-anchor" href="#_2-1-程序计数器" aria-hidden="true">#</a> 2.1 程序计数器</h3><p>程序计数器（Program Counter Register）是一块较小的内存空间，它可以看做是当前线程所执行的字节码的行号指示器。字节码解释器通过改变程序计数器的值来选取下一条需要执行的字节码指令，分支、循环、跳转、异常处理、线程恢复等基础功能都需要该计数器来完成。每条线程都拥有一个独立的程序计数器，各条线程之间的计数器互不影响，独立存储。</p><h3 id="_2-2-java虚拟机栈" tabindex="-1"><a class="header-anchor" href="#_2-2-java虚拟机栈" aria-hidden="true">#</a> 2.2 Java虚拟机栈</h3><p>Java 虚拟机栈（Java Virtual Machine Stack）也为线程私有，它描述的是 Java 方法执行的线程内存模型：每个方法被执行的时候，Java 虚拟机都会同步创建一个栈帧，用于存储局部变量表、操作数栈、动态连接、方法出口等信息。方法从调用到结束就对应着一个栈帧从入栈到出栈的过程。在《Java 虚拟机规范》中，对该内存区域规定了两类异常：</p><ul><li>如果线程请求的栈深度大于虚拟机所允许的栈深度，将抛出 <code>StackOverflowError</code> 异常；</li><li>如果 Java 虚拟机栈的容量允许动态扩展，当栈扩展时如果无法申请到足够的内存会抛出 <code>OutOfMemoryError</code> 异常。</li></ul><h3 id="_2-3-本地方法栈" tabindex="-1"><a class="header-anchor" href="#_2-3-本地方法栈" aria-hidden="true">#</a> 2.3 本地方法栈</h3><p>本地方法栈（Native Method Stacks）与虚拟机栈类似，其区别在于：Java 虚拟机栈是为虚拟机执行 Java 方法（也就是字节码）服务，而本地方法栈则是为虚拟机使用到的本地（Native）方法服务。</p><h3 id="_2-4-java堆" tabindex="-1"><a class="header-anchor" href="#_2-4-java堆" aria-hidden="true">#</a> 2.4 Java堆</h3><p>Java 堆（Java Heap）是虚拟机所管理的最大一块的内存空间，它被所有线程所共享，用于存放对象实例。Java 堆可以处于物理上不连续的内存空间中，但在逻辑上它应该被视为是连续的。Java 堆可以被实现成固定大小的，也可以是可扩展的，当前大多数主流的虚拟机都是按照可扩展来实现的，即可以通过最大值参数 <code>-Xmx</code> 和最小值参数 <code>-Xms</code> 进行设定。如果 Java 堆中没有足够的内存来完成实例分配，并且堆也无法再扩展时，Java 虚拟机将会抛出 <code>OutOfMemoryError</code> 异常。</p><h3 id="_2-5-方法区" tabindex="-1"><a class="header-anchor" href="#_2-5-方法区" aria-hidden="true">#</a> 2.5 方法区</h3><p>方法区（Method Area）也是各个线程共享的内存区域，它用于存储已被虚拟机加载的类型信息、常量、静态变量、即时编译器编译后的代码缓存等数据。方法区也被称为 “非堆”，目的是与 Java 堆进行区分。《Java 虚拟机规范》规定，如果方法区无法满足新的内存分配需求时，将会抛出 <code>OutOfMemoryError</code> 异常。</p><p>运行时常量池（Runtime Constant Pool）是方法区的一部分，用于存放常量池表（Constant Pool Table），常量池表中存放了编译期生成的各种符号字面量和符号引用。</p><h2 id="三、对象" tabindex="-1"><a class="header-anchor" href="#三、对象" aria-hidden="true">#</a> 三、对象</h2><h3 id="_3-1-对象的创建" tabindex="-1"><a class="header-anchor" href="#_3-1-对象的创建" aria-hidden="true">#</a> 3.1 对象的创建</h3><p>当我们在代码中使用 <code>new</code> 关键字创建一个对象时，其在虚拟机中需要经过以下步骤：</p><p><strong>1. 类加载过程</strong></p><p>当虚拟机遇到一条字节码 <code>new</code> 指令时，首先将去检查这个指令的参数是否能在常量池中定位到一个符号引用，并且检查这个符号引用代表的类是否已被加载、解析和初始化过。如果没有，就必须先执行相应的类加载过程。</p><p><strong>2. 分配内存</strong></p><p>在类加载检查通过后，虚拟机需要新生对象分配内存空间。根据 Java 堆是否规整，可以有以下两种分配方案：</p><ul><li><strong>指针碰撞</strong>：假设 Java 堆中内存是绝对规整的，所有使用的内存放在一边，所有未被使用的内存放在另外一边，中间以指针作为分界点指示器。此时内存分配只是将指针向空闲方向偏移出对象大小的空间即可，这种方式被称为指针碰撞。</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/zongjie-afb11e2b-f457-4a19-bb21-f659756061ec.png" alt="" loading="lazy"></p><ul><li><strong>空闲列表</strong>：如果 Java 堆不是规整的，此时虚拟机需要维护一个列表，记录哪些内存块是可用的，哪些是不可用的。在进行内存分配时，只需要从该列表中选取出一块足够的内存空间划分给对象实例即可。</li></ul><blockquote><p>注：Java 堆是否规整取决于其采用的垃圾收集器是否带有空间压缩整理能力，后文将会介绍。</p></blockquote><p>除了分配方式外，由于对象创建在虚拟机中是一个非常频繁的行为，此时需要保证在并发环境下的线程安全：如果一个线程给对象 A 分配了内存空间，但指针还没来得及修改，此时就可能出现另外一个线程使用原来的指针来给对象 B 分配内存空间的情况。想要解决这个问题有两个方案：</p><ul><li><strong>方式一</strong>：采用同步锁定，或采用 CAS 配上失败重试的方式来保证更新操作的原子性。</li><li><strong>方式二</strong>：为每个线程在 Java 堆中预先分配一块内存，称为本地线程分配缓冲（Thread Local Allocation Buffer，TLAB）。线程在进行内存分配时优先使用本地缓冲，当本地缓冲使用完成后，再向 Java 堆申请分配，此时 Java 堆采用同步锁定的方式来保证分配行为的线程安全。</li></ul><p><strong>3. 对象头设置</strong></p><p>将对象有关的元数据信息、对象的哈希码、分代年龄等信息存储到对象头中。</p><p><strong>4. 对象初始化</strong></p><p>调用对象的构造函数，即 Class 文件中的 <code>&lt;init&gt;()</code> 来初始化对象，为相关字段赋值。</p><h3 id="_3-2-对象的内存布局" tabindex="-1"><a class="header-anchor" href="#_3-2-对象的内存布局" aria-hidden="true">#</a> 3.2 对象的内存布局</h3><p>在 HotSpot 虚拟机中，对象在堆内存中的存储布局可以划分为以下三个部分：</p><p><strong>1. 对象头 (Header)</strong></p><p>对象头包括两部分信息：</p><ul><li><strong>Mark Word</strong>：对象自身的运行时数据，如哈希码、GC 分代年龄、锁状态标志、线程持有的锁、偏向线程 ID、偏向时间戳等，官方统称为 Mark Word 。</li><li><strong>类型指针</strong>：对象指向它类型元数据的指针，Java 虚拟机通过这个指针来确定该对象是哪个类的示例。需要说明的是并非所有的虚拟机都必须要在对象数据上保留类型指针，这取决于对象的访问定位方式（详见下文）。</li></ul><p><strong>2. 实例数据 (Instance Data)</strong></p><p>即我们在程序代码中定义的各种类型的字段的内容，无论是从父类继承而来，还是子类中定义的都需要记录。</p><p><strong>3. 对齐填充 (Padding)</strong></p><p>主要起占位符的作用。HotSpot 虚拟机要求对象起始地址必须是 8 字节的整倍数，即间接要求了任何对象的大小都必须是 8 字节的整倍数。对象头部分在设计上就是 8 字节的整倍数，如果对象的实例数据不是 8 字节的整倍数，则由对齐填充进行补全。</p><h3 id="_3-3-对象的访问定位" tabindex="-1"><a class="header-anchor" href="#_3-3-对象的访问定位" aria-hidden="true">#</a> 3.3 对象的访问定位</h3><p>对象创建后，Java 程序就可以通过栈上的 <code>reference</code> 来操作堆上的具体对象。《Java 虚拟机规范》规定 <code>reference</code> 是一个指向对象的引用，但并未规定其具体实现方式。主流的方式方式有以下两种：</p><ul><li><strong>句柄访问</strong>：Java 堆将划分出一块内存来作为句柄池， <code>reference</code> 中存储的是对象的句柄地址，而句柄则包含了对象实例数据和类型数据的地址信息。</li><li><strong>指针访问</strong>：<code>reference</code> 中存储的直接就是对象地址，而对象的类型数据则由上文介绍的对象头中的类型指针来指定。</li></ul><p>通过句柄访问对象：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/zongjie-f6b5eb22-a5af-40c0-8c80-00fdd6d16b1d.png" alt="" loading="lazy"></p><p>通过直接指针访问对象：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/zongjie-f696f4a8-af51-4e28-9d72-c2f6b1e5b3db.png" alt="" loading="lazy"></p><p>句柄访问的优点在于对象移动时（垃圾收集时移动对象是非常普遍的行为）只需要改变句柄中实例数据的指针，而 <code>reference</code> 本生并不需要修改；指针访问则反之，由于其 <code>reference</code> 中存储的直接就是对象地址，所以当对象移动时， <code>reference</code> 需要被修改。但针对只需要访问对象本身的场景，指针访问则可以减少一次定位开销。由于对象访问是一项非常频繁的操作，所以这类减少的效果会非常显著，基于这个原因，HotSpot 主要使用的是指针访问的方式。</p><h2 id="四、垃圾收集算法" tabindex="-1"><a class="header-anchor" href="#四、垃圾收集算法" aria-hidden="true">#</a> 四、垃圾收集算法</h2><p>在 Java 虚拟机内存模型中，程序计数器、虚拟机栈、本地方法栈这 3 个区域都是线程私有的，会随着线程的结束而销毁，因此在这 3 个区域当中，无需过多考虑垃圾回收问题。垃圾回收问题主要发生在 Java 堆和方法区上。</p><h3 id="_4-1-java-堆回收" tabindex="-1"><a class="header-anchor" href="#_4-1-java-堆回收" aria-hidden="true">#</a> 4.1 Java 堆回收</h3><p>在 Java 堆上，垃圾回收的主要内容是死亡对象（不可能再被任何途径使用的对象）。而判断对象是否死亡有以下两种方法：</p><h4 id="_1-引用计数法" tabindex="-1"><a class="header-anchor" href="#_1-引用计数法" aria-hidden="true">#</a> 1. 引用计数法</h4><p>在对象中添加一个引用计数器，对象每次被引用时，该计数器加一；当引用失效时，计数器的值减一；只要计数器的值为零，则代表对应的对象不可能再被使用。该方法的缺点在于无法避免相互循环引用的问题：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>objA<span class="token punctuation">.</span>instance <span class="token operator">=</span> objB
objB<span class="token punctuation">.</span>instance <span class="token operator">=</span> objA    
objA <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
objB <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">gc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上所示，此时两个对象已经不能再被访问，但其互相持有对对方的引用，如果采用引用计数法，则两个对象都无法被回收。</p><h4 id="_2-可达性分析" tabindex="-1"><a class="header-anchor" href="#_2-可达性分析" aria-hidden="true">#</a> 2. 可达性分析</h4><p>上面的代码在大多数虚拟机中都能被正确的回收，因为大多数主流的虚拟机都是采用的可达性分析方法来判断对象是否死亡。可达性分析是通过一系列被称为 <code>GC Roots</code> 的根对象作为起始节点集，从这些节点开始，根据引用关系向下搜索，搜索过程所走过的路径被称为引用链（Reference Chain），如果某个对象到 <code>GC Roots</code> 间没有任何引用链相连，这代表 <code>GC Roots</code> 到该对象不可达， 此时证明此该对象不可能再被使用。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/zongjie-f1325549-5689-4398-a39c-c0a6836f6077.png" alt="" loading="lazy"></p><p>在 Java 语言中，固定可作为 <code>GC Roots</code> 的对象包括以下几种：</p><ul><li>在虚拟机栈（栈帧中的本地变量表）中引用的对象，譬如各个线程被调用的方法堆栈中使用到的参数、局部变量、临时变量等；</li><li>在方法区中类静态属性引用的对象，譬如 Java 类中引用类型的静态变量；</li><li>在方法区中常量引用的对象，譬如字符串常量池（String Table）里的引用；</li><li>在本地方法栈中的 JNI（即 Native 方法）引用的对象；</li><li>Java 虚拟机内部的引用，如基本数据类型对应的 Class 对象，一些常驻的异常对象（如 NullPointException，OutOfMemoryError 等）及系统类加载器；</li><li>所有被同步锁（synchronized 关键字）持有的对象；</li><li>反应 Java 虚拟机内部情况的 JMXBean，JVMTI 中注册的回调，本地代码缓存等。</li></ul><p>除了这些固定的 <code>GC Roots</code> 集合以外，根据用户所选用的垃圾收集器以及当前回收的内存区域的不同，还可能会有其他对象 “临时性” 地加入，共同构成完整的 <code>GC Roots</code> 集合。</p><h4 id="_3-对象引用" tabindex="-1"><a class="header-anchor" href="#_3-对象引用" aria-hidden="true">#</a> 3. 对象引用</h4><p>可达性分析是基于引用链进行判断的，在 JDK 1.2 之后，Java 将引用关系分为以下四类：</p><ul><li><strong>强引用 (Strongly Reference)</strong> ：最传统的引用，如 <code>Object obj = new Object()</code> 。无论任何情况下，只要强引用关系还存在，垃圾收集器就永远不会回收掉被引用的对象。</li><li><strong>软引用 (Soft Reference)</strong> ：用于描述一些还有用，但非必须的对象。只被软引用关联着的对象，在系统将要发生内存溢出异常之前，会被列入回收范围内进行第二次回收，如果这次回收后还没有足够的内存，才会抛出内存溢出异常。</li><li><strong>弱引用 (Weak Reference)</strong> ：用于描述那些非必须的对象，强度比软引用弱。被弱引用关联对象只能生存到下一次垃圾收集发生时，无论当前内存是否足够，弱引用对象都会被回收。</li><li><strong>虚引用 (Phantom Reference)</strong> ：最弱的引用关系。为一个对象设置虚引用关联的唯一目的只是为了能在这个对象被回收时收到一个系统通知。</li></ul><h4 id="_4-对象真正死亡" tabindex="-1"><a class="header-anchor" href="#_4-对象真正死亡" aria-hidden="true">#</a> 4. 对象真正死亡</h4><p>要真正宣告一个对象死亡，需要经过至少两次标记过程：</p><ul><li>如果对象在进行可达性分析后发现 <code>GC Roots</code> 不可达，将会进行第一次标记；</li><li>随后进行一次筛选，筛选的条件是此对象是否有必要执行 <code>finalized()</code> 方法。如果对象没有覆盖 <code>finalized()</code> 方法，或者 <code>finalized()</code> 已经被虚拟机调用过，这两种情况都会视为没有必要执行。如果判定结果是有必要执行，此时对象会被放入名为 <code>F-Queue</code> 的队列，等待 Finalizer 线程执行其 <code>finalized()</code> 方法。在这个过程中，收集器会进行第二次小规模的标记，如果对象在 <code>finalized()</code> 方法中重新将自己与引用链上的任何一个对象进行了关联，如将自己（this 关键字）赋值给某个类变量或者对象的成员变量，此时它就实现了自我拯救，则第二次标记会将其移除 “即将回收” 的集合，否则该对象就将被真正回收，走向死亡。</li></ul><h3 id="_4-2-方法区回收" tabindex="-1"><a class="header-anchor" href="#_4-2-方法区回收" aria-hidden="true">#</a> 4.2 方法区回收</h3><p>在 Java 堆上进行对象回收的性价比通常比较高，因为大多数对象都是朝生夕灭的。而方法区由于回收条件比较苛刻，对应的回收性价比通常比较低，主要回收两部分内容：废弃的常量和不再使用的类型。</p><h3 id="_4-3-垃圾收集算法" tabindex="-1"><a class="header-anchor" href="#_4-3-垃圾收集算法" aria-hidden="true">#</a> 4.3 垃圾收集算法</h3><h4 id="_1-分代收集理论" tabindex="-1"><a class="header-anchor" href="#_1-分代收集理论" aria-hidden="true">#</a> 1. 分代收集理论</h4><p>当前大多数虚拟机都遵循 “分代收集” 的理论进行设计，它建立在强弱两个分代假说下：</p><ul><li><strong>弱分代假说 (Weak Generational Hypothesis)</strong>：绝大多数对象都是朝生夕灭的。</li><li><strong>强分代假说 (Strong Generational Hypothesis)</strong>：熬过越多次垃圾收集过程的对象就越难以消亡。</li><li><strong>跨带引用假说 (Intergenerational Reference Hypothesis)</strong>：基于上面两条假说还可以得出的一条隐含推论：存在相互引用关系的两个对象，应该倾向于同时生存或者同时消亡。</li></ul><p>强弱分代假说奠定了垃圾收集器的设计原则：收集器应该将 Java 堆划分出不同的区域，然后将回收对象依据其年龄（年龄就是对象经历垃圾收集的次数）分配到不同的区域中进行存储。之后如果一个区域中的对象都是朝生夕灭的，那么收集器只需要关注少量对象的存活而不是去标记那些大量将要被回收的对象，此时就能以较小的代价获取较大的空间。最后再将难以消亡的对象集中到一块，根据强分代假说，它们是很难消亡的，因此虚拟机可以使用较低的频率进行回收，这就兼顾了时间和内存空间的开销。</p><h4 id="_2-回收类型" tabindex="-1"><a class="header-anchor" href="#_2-回收类型" aria-hidden="true">#</a> 2. 回收类型</h4><p>根据分代收集理论，收集范围可以分为以下几种类型：</p><ul><li><strong>部分收集 (Partial GC)</strong>：具体分为： <ul><li>新生代收集（Minor GC / Young GC）：只对新生代进行垃圾收集；</li><li>老年代收集（Major GC / Old GC）：只对老年代进行垃圾收集。需要注意的是 Major GC 在有的语境中也用于指代整堆收集；</li><li>混合收集（Mixed GC）：对整个新生代和部分老年代进行垃圾收集。</li></ul></li><li><strong>整堆收集 (Full GC)</strong>：收集整个 Java 堆和方法区。</li></ul><h4 id="_3-标记-清除算法" tabindex="-1"><a class="header-anchor" href="#_3-标记-清除算法" aria-hidden="true">#</a> 3. 标记-清除算法</h4><p>它是最基础的垃圾收集算法，收集过程分为两个阶段：首先标记出所有需要回收的对象，在标记完成后，统一回收掉所有被标记的对象；也可以反过来，标记存活对象，统一回收所有未被标记的对象。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/zongjie-7d489254-f1e0-4feb-bd4a-af129767a787.png" alt="" loading="lazy"></p><p>它主要有以下两个缺点：</p><ul><li>执行效率不稳定：如果 Java 堆上包含大量需要回收的对象，则需要进行大量标记和清除动作；</li><li>内存空间碎片化：标记清除后会产生大量不连续的空间，从而可能导致无法为大对象分配足够的连续内存。</li></ul><h4 id="_4-标记-复制算法" tabindex="-1"><a class="header-anchor" href="#_4-标记-复制算法" aria-hidden="true">#</a> 4. 标记-复制算法</h4><p>标记-复制算法基于 ”半区复制“ 算法：它将可用内存按容量划分为大小相等的两块，每次只使用其中一块，当这一块的内存使用完了，就将还存活着的对象复制到另外一块上面，然后再把已经使用过的那块内存空间一次性清理掉。其优点在于避免了内存空间碎片化的问题，其缺点如下：</p><ul><li>如果内存中多数对象都是存活的，这种算法将产生大量的复制开销；</li><li>浪费内存空间，内存空间变为了原有的一半。</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/zongjie-f4572b93-f7f3-41cc-9901-93816e79c789.png" alt="" loading="lazy"></p><p>基于新生代 “朝生夕灭” 的特点，大多数虚拟机都不会按照 1:1 的比例来进行内存划分，例如 HotSpot 虚拟机会将内存空间划分为一块较大的 <code>Eden</code> 和 两块较小的 <code>Survivor</code> 空间，它们之间的比例是 8:1:1 。 每次分配时只会使用 <code>Eden</code> 和其中的一块 <code>Survivor</code> ，发生垃圾回收时，只需要将存活的对象一次性复制到另外一块 <code>Survivor</code> 上，这样只有 10% 的内存空间会被浪费掉。当 <code>Survivor</code> 空间不足以容纳一次 <code>Minor GC</code> 时，此时由其他内存区域（通常是老年代）来进行分配担保。</p><h4 id="_5-标记-整理算法" tabindex="-1"><a class="header-anchor" href="#_5-标记-整理算法" aria-hidden="true">#</a> 5. 标记-整理算法</h4><p>标记-整理算法是在标记完成后，让所有存活对象都向内存的一端移动，然后直接清理掉边界以外的内存。其优点在于可以避免内存空间碎片化的问题，也可以充分利用内存空间；其缺点在于根据所使用的收集器的不同，在移动存活对象时可能要全程暂停用户程序：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/zongjie-e674c49f-c55b-4eba-95ea-34be62d55a78.png" alt="" loading="lazy"></p><h2 id="五、经典垃圾收集器" tabindex="-1"><a class="header-anchor" href="#五、经典垃圾收集器" aria-hidden="true">#</a> 五、经典垃圾收集器</h2><p>并行与并发是并发编程中的专有名词，在谈论垃圾收集器的上下文语境中，它们的含义如下：</p><ul><li><p><strong>并行 (Parallel)</strong>：并行描述的是多条垃圾收集器线程之间的关系，说明同一时间有多条这样的线程在协同工作，此时通常默认用户线程是处于等待状态。</p></li><li><p><strong>并发 (Concurrent)</strong>：并发描述的是垃圾收集器线程与用户线程之间的关系，说明同一时间垃圾收集器线程与用户线程都在运行。但由于垃圾收集器线程会占用一部分系统资源，所以程序的吞吐量依然会受到一定影响。</p></li></ul><p>HotSpot 虚拟机中一共存在七款经典的垃圾收集器：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/zongjie-1fa20f99-d203-42d6-982c-f1bd66a0c929.png" alt="" loading="lazy"></p><blockquote><p>注：收集器之间存在连线，则代表它们可以搭配使用。</p></blockquote><h3 id="_5-1-serial-收集器" tabindex="-1"><a class="header-anchor" href="#_5-1-serial-收集器" aria-hidden="true">#</a> 5.1 Serial 收集器</h3><p>Serial 收集器是最基础、历史最悠久的收集器，它是一个单线程收集器，在进行垃圾回收时，必须暂停其他所有的工作线程，直到收集结束，这是其主要缺点。它的优点在于单线程避免了多线程复杂的上下文切换，因此在单线程环境下收集效率非常高，由于这个优点，迄今为止，其仍然是 HotSpot 虚拟机在客户端模式下默认的新生代收集器：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/zongjie-ec6ec994-6fe4-4d5b-890c-7f31b5a607a0.png" alt="" loading="lazy"></p><h3 id="_5-2-parnew-收集器" tabindex="-1"><a class="header-anchor" href="#_5-2-parnew-收集器" aria-hidden="true">#</a> 5.2 ParNew 收集器</h3><p>他是 Serial 收集器的多线程版本，可以使用多条线程进行垃圾回收：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/zongjie-ae8c47c7-538b-426a-85e4-d422d1c37683.png" alt="" loading="lazy"></p><h3 id="_5-3-parallel-scavenge-收集器" tabindex="-1"><a class="header-anchor" href="#_5-3-parallel-scavenge-收集器" aria-hidden="true">#</a> 5.3 Parallel Scavenge 收集器</h3><p>Parallel Scavenge 也是新生代收集器，基于 标记-复制 算法进行实现，它的目标是达到一个可控的吞吐量。这里的吞吐量指的是处理器运行用户代码的时间与处理器总消耗时间的比值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>吞吐量 = 运行用户代码时间 \\ (运行用户代码时间 + 运行垃圾收集时间)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Parallel Scavenge 收集器提供两个参数用于精确控制吞吐量：</p><ul><li><strong>-XX:MaxGCPauseMillis</strong>：控制最大垃圾收集时间，假设需要回收的垃圾总量不变，那么降低垃圾收集的时间就会导致收集频率变高，所以需要将其设置为合适的值，不能一味减小。</li><li><strong>-XX:MaxGCTimeRatio</strong>：直接用于设置吞吐量大小，它是一个大于 0 小于 100 的整数。假设把它设置为 19，表示此时允许的最大垃圾收集时间占总时间的 5%（即 1/(1+19) ）；默认值为 99 ，即允许最大 1%（ 1/(1+99) ）的垃圾收集时间。</li></ul><h3 id="_5-4-serial-old-收集器" tabindex="-1"><a class="header-anchor" href="#_5-4-serial-old-收集器" aria-hidden="true">#</a> 5.4 Serial Old 收集器</h3><p>从名字也可以看出来，它是 Serial 收集器的老年代版本，同样是一个单线程收集器，采用 标记-整理 算法，主要用于给客户端模式下的 HotSpot 虚拟机使用：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/zongjie-b199ece2-8de2-4f24-b50a-ea0c0d16bd7b.png" alt="" loading="lazy"></p><h3 id="_5-5-paralled-old-收集器" tabindex="-1"><a class="header-anchor" href="#_5-5-paralled-old-收集器" aria-hidden="true">#</a> 5.5 Paralled Old 收集器</h3><p>Paralled Old 是 Parallel Scavenge 收集器的老年代版本，支持多线程并发收集，采用 标记-整理 算法实现：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/zongjie-30dd34d5-27df-4a6f-b391-5a7928dfb3ab.png" alt="" loading="lazy"></p><h3 id="_5-6-cms-收集器" tabindex="-1"><a class="header-anchor" href="#_5-6-cms-收集器" aria-hidden="true">#</a> 5.6 CMS 收集器</h3><p>CMS（Concurrent Mark Sweep）收集器是一种以获取最短回收停顿时间为目标的收集器，基于 标记-清除 算法实现，整个收集过程分为以下四个阶段：</p><ol><li><strong>初始标记 (inital mark)</strong>：标记 <code>GC Roots</code> 能直接关联到的对象，耗时短但需要暂停用户线程；</li><li><strong>并发标记 (concurrent mark)</strong>：从 <code>GC Roots</code> 能直接关联到的对象开始遍历整个对象图，耗时长但不需要暂停用户线程；</li><li><strong>重新标记 (remark)</strong>：采用增量更新算法，对并发标记阶段因为用户线程运行而产生变动的那部分对象进行重新标记，耗时比初始标记稍长且需要暂停用户线程；</li><li><strong>并发清除 (inital sweep)</strong>：并发清除掉已经死亡的对象，耗时长但不需要暂停用户线程。</li></ol><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/zongjie-7ad8d755-53f2-422a-9cea-c792b0579d8b.png" alt="" loading="lazy"></p><p>其优点在于耗时长的 并发标记 和 并发清除 阶段都不需要暂停用户线程，因此其停顿时间较短，其主要缺点如下：</p><ul><li>由于涉及并发操作，因此对处理器资源比较敏感。</li><li>由于是基于 标记-清除 算法实现的，因此会产生大量空间碎片。</li><li>无法处理浮动垃圾（Floating Garbage）：由于并发清除时用户线程还是在继续，所以此时仍然会产生垃圾，这些垃圾就被称为浮动垃圾，只能等到下一次垃圾收集时再进行清理。</li></ul><h3 id="_5-7-garbage-first-收集器" tabindex="-1"><a class="header-anchor" href="#_5-7-garbage-first-收集器" aria-hidden="true">#</a> 5.7 Garbage First 收集器</h3><p>Garbage First（简称 G1）是一款面向服务端的垃圾收集器，也是 JDK 9 服务端模式下默认的垃圾收集器，它的诞生具有里程碑式的意义。G1 虽然也遵循分代收集理论，但不再以固定大小和固定数量来划分分代区域，而是把连续的 Java 堆划分为多个大小相等的独立区域（Region）。每一个 Region 都可以根据不同的需求来扮演新生代的 <code>Eden</code> 空间、<code>Survivor</code> 空间或者老年代空间，收集器会根据其扮演角色的不同而采用不同的收集策略。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/zongjie-e0f5da26-6e46-4f9d-bfcc-0842cc7079e7.png" alt="" loading="lazy"></p><p>上面还有一些 Region 使用 H 进行标注，它代表 Humongous，表示这些 Region 用于存储大对象（humongous object，H-obj），即大小大于等于 region 一半的对象。G1 收集器的运行大致可以分为以下四个步骤：</p><ol><li><strong>初始标记 (Inital Marking)</strong>：标记 <code>GC Roots</code> 能直接关联到的对象，并且修改 TAMS（Top at Mark Start）指针的值，让下一阶段用户线程并发运行时，能够正确的在 Reigin 中分配新对象。G1 为每一个 Reigin 都设计了两个名为 TAMS 的指针，新分配的对象必须位于这两个指针位置以上，位于这两个指针位置以上的对象默认被隐式标记为存活的，不会纳入回收范围；</li><li><strong>并发标记 (Concurrent Marking)</strong>：从 <code>GC Roots</code> 能直接关联到的对象开始遍历整个对象图。遍历完成后，还需要处理 SATB 记录中变动的对象。SATB（snapshot-at-the-beginning，开始阶段快照）能够有效的解决并发标记阶段因为用户线程运行而导致的对象变动，其效率比 CMS 重新标记阶段所使用的增量更新算法效率更高；</li><li><strong>最终标记 (Final Marking)</strong>：对用户线程做一个短暂的暂停，用于处理并发阶段结束后仍遗留下来的少量的 STAB 记录。虽然并发标记阶段会处理 SATB 记录，但由于处理时用户线程依然是运行中的，因此依然会有少量的变动，所以需要最终标记来处理；</li><li><strong>筛选回收 (Live Data Counting and Evacuation)</strong>：负责更新 Regin 统计数据，按照各个 Regin 的回收价值和成本进行排序，在根据用户期望的停顿时间进行来指定回收计划，可以选择任意多个 Regin 构成回收集。然后将回收集中 Regin 的存活对象复制到空的 Regin 中，再清理掉整个旧的 Regin 。此时因为涉及到存活对象的移动，所以需要暂停用户线程，并由多个收集线程并行执行。</li></ol><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/zongjie-3cf7a78a-d541-49af-929a-4bf8f4f0edd9.png" alt="" loading="lazy"></p><h3 id="_5-8-内存分配原则" tabindex="-1"><a class="header-anchor" href="#_5-8-内存分配原则" aria-hidden="true">#</a> 5.8 内存分配原则</h3><h4 id="_1-对象优先在-eden-分配" tabindex="-1"><a class="header-anchor" href="#_1-对象优先在-eden-分配" aria-hidden="true">#</a> 1. 对象优先在 Eden 分配</h4><p>大多数情况下，对象在新生代的 <code>Eden</code> 区中进行分配，当 <code>Eden</code> 区没有足够空间时，虚拟机将进行一次 Minor GC。</p><h4 id="_2-大对象直接进入老年代" tabindex="-1"><a class="header-anchor" href="#_2-大对象直接进入老年代" aria-hidden="true">#</a> 2. 大对象直接进入老年代</h4><p>大对象就是指需要大量连续内存空间的 Java 对象，最典型的就是超长的字符串或者元素数量很多的数组，它们将直接进入老年代。主要是因为如果在新生代分配，因为其需要大量连续的内存空间，可能会导致提前触发垃圾回收；并且由于新生代的垃圾回收本身就很频繁，此时复制大对象也需要额外的性能开销。</p><h4 id="_3-长期存活的对象将进入老年代" tabindex="-1"><a class="header-anchor" href="#_3-长期存活的对象将进入老年代" aria-hidden="true">#</a> 3. 长期存活的对象将进入老年代</h4><p>虚拟机会给每个对象在其对象头中定义一个年龄计数器。对象通常在 <code>Eden</code> 区中诞生，如果经历第一次 Minor GC 后仍然存活，并且能够被 Survivor 容纳的话，该对象就会被移动到 Survivor 中，并将其年龄加 1。对象在 Survivor 中每经过一次 Minor GC，年龄就加 1，当年龄达到一定程度后（由 <code>-XX:MaxTenuringThreshold</code> 设置，默认值为 15）就会进入老年代中。</p><h4 id="_4-动态年龄判断" tabindex="-1"><a class="header-anchor" href="#_4-动态年龄判断" aria-hidden="true">#</a> 4. 动态年龄判断</h4><p>如果在 Survivor 空间中相同年龄的所有对象大小的总和大于 Survivor 空间的一半，那么年龄大于或等于该年龄的对象就可以直接进入老年代，而无需等待年龄到达 <code>-XX:MaxTenuringThreshold</code> 设置的值。</p><h4 id="_5-空间担保分配" tabindex="-1"><a class="header-anchor" href="#_5-空间担保分配" aria-hidden="true">#</a> 5. 空间担保分配</h4><p>在发生 Minor GC 之前，虚拟机必须先检查老年代最大可用的连续空间是否大于新生代所有对象的总空间，如果条件成立，那么这一次的 Minor GC 可以确认是安全的。如果不成立，虚拟机会查看 <code>-XX:HandlePromotionFailure</code> 的值是否允许担保失败，如果允许那么就会继续检查老年代最大可用的连续空间是否大于历次晋升到老年代对象的平均大小，如果大于，将尝试着进行一次 Minor GC；如果小于或者 <code>-XX:HandlePromotionFailure</code> 的值设置不允许冒险，那么就要改为进行一次 Full GC 。</p><h2 id="六、虚拟机类加载机制" tabindex="-1"><a class="header-anchor" href="#六、虚拟机类加载机制" aria-hidden="true">#</a> 六、虚拟机类加载机制</h2><p>Java 虚拟机把描述类的数据从 Class 文件加载到内存，并对数据进行校验、转换解析和初始化，最终形成可以被虚拟机直接使用的 Java 类型，这个过程被称为虚拟机的类加载机制。</p><h3 id="_6-1-类加载时机" tabindex="-1"><a class="header-anchor" href="#_6-1-类加载时机" aria-hidden="true">#</a> 6.1 类加载时机</h3><p>一个类型从被加载到虚拟机内存中开始，到卸载出内存为止，它的整个生命周期将会经历加载、验证、准备、卸载、解析、初始化、使用、卸载七个阶段，其中验证、准备、解析三个部分统称为连接：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/zongjie-e154964a-9a0a-46de-bf37-75b483956d6c.png" alt="" loading="lazy"></p><p>《Java 虚拟机规范》严格规定了有且只有六种情况必须立即对类进行初始化：</p><ol><li>遇到 <code>new</code>、 <code>getstatic</code>、 <code>putstatic</code>、 <code>invokestatic</code> 这四条字节码指令，如果类型进行过初始化，则需要先触发其进行初始化，能够生成这四条指令码的典型 Java 代码场景有： <ul><li>使用 <code>new</code> 关键字实例化对象时；</li><li>读取或设置一个类型的静态字段时（被 final 修饰，已在编译期把结果放入常量池的静态字段除外）；</li><li>调用一个类型的静态方法时。</li></ul></li><li>使用 <code>java.lang.reflect</code> 包的方法对类型进行反射调用时，如果类型没有进行过初始化、则需要触发其初始化；</li><li>当初始化类时，如发现其父类还没有进行过初始化、则需要触发其父类进行初始化；</li><li>当虚拟机启动时，用户需要指定一个要执行的主类（包含 main() 方法的那个类），虚拟机会先初始化这个主类；</li><li>当使用 JDK 7 新加入的动态语言支持时，如果一个 <code>java.lang.invoke.MethodHandle</code> 实例最后解析的结果为 <code>REF_getStatic</code> ， <code>REF_putStatic</code> ， <code>REF_invokeStatic</code> ， <code>REF_newInvokeSpecial</code> 四种类型的方法句柄，并且这个方法句柄对应的类没有进行过初始化，则需要先触发其初始化；</li><li>当一个接口中定义了 JDK 8 新加入的默认方法（被 default 关键字修饰的接口方法）时，如果有这个接口的实现类发生了初始化，那么该接口要在其之前被初始化。</li></ol><h3 id="_6-2-类加载过程" tabindex="-1"><a class="header-anchor" href="#_6-2-类加载过程" aria-hidden="true">#</a> 6.2 类加载过程</h3><h4 id="_1-加载" tabindex="-1"><a class="header-anchor" href="#_1-加载" aria-hidden="true">#</a> 1. 加载</h4><p>在加载阶段，虚拟机需要完成以下三件事：</p><ul><li>通过一个类的全限定名来获取定义此类的二进制字节流 ；</li><li>将这个字节流所代表的静态存储结构转换为方法区的运行时数据结构；</li><li>在内存中生成一个代表这个类的 <code>java.lang.Class</code> 对象，作为方法区这个类的各种数据的访问入口。</li></ul><p>《Java 虚拟机规范》并没有限制从何处获取二进制流，因此可以从 JAR 包、WAR 包获取，也可以从 JSP 生成的 Class 文件等处获取。</p><h4 id="_2-验证" tabindex="-1"><a class="header-anchor" href="#_2-验证" aria-hidden="true">#</a> 2. 验证</h4><p>这一阶段的目的是确保 Class 文件的字节流中包含的信息符合《Java 虚拟机规范》的全部约束要求，从而保证这些信息被当做代码运行后不会危害虚拟机自身的安全。验证阶段大致会完成下面四项验证：</p><ul><li><strong>文件格式验证</strong>：验证字节流是否符合 Class 文件格式的规范；</li><li><strong>元数据验证</strong>：对字节码描述的信息进行语义分析，以保证其描述的信息符合《Java 语言规范》的要求（如除了 <code>java.lang.Object</code> 外，所有的类都应该有父类）；</li><li><strong>字节码验证</strong>：通过数据流分析和控制流分析，确定程序语义是合法的，符合逻辑的（如允许把子类对象赋值给父类数据类型，但不能把父类对象赋值给子类数据类型）；</li><li><strong>符号引用验证</strong>：验证类是否缺少或者被禁止访问它依赖的某些外部类、方法、字段等资源。如果无法验证通过，则会抛出一个<code>java.lang.IncompatibleClassChangeError</code> 的子类异常，如 <code>java.lang.NoSuchFieldError</code> 、 <code>java.lang.NoSuchMethodError</code> 等。</li></ul><h4 id="_3-准备" tabindex="-1"><a class="header-anchor" href="#_3-准备" aria-hidden="true">#</a> 3. 准备</h4><p>准备阶段是正式为类中定义的变量（即静态变量，被 static 修饰的变量）分配内存并设置类变量初始值的阶段。</p><h4 id="_4-解析" tabindex="-1"><a class="header-anchor" href="#_4-解析" aria-hidden="true">#</a> 4. 解析</h4><p>解析是 Java 虚拟机将常量池内的符号引用替换为直接引用的过程：</p><ul><li><strong>符号引用</strong>：符号引用用一组符号来描述所引用的目标，符号可以是任何形式的字面量，只要使用时能无歧义地定位到目标即可。</li><li><strong>直接引用</strong>：直接引用是指可以直接指向目标的指针、相对偏移量或者一个能间接定位到目标的句柄。</li></ul><p>整个解析动作主要针对类或接口、字段、类方法、接口方法、方法类型、方法句柄和调用点限定符这 7 类符号引用进行解析。</p><h4 id="_5-初始化" tabindex="-1"><a class="header-anchor" href="#_5-初始化" aria-hidden="true">#</a> 5. 初始化</h4><p>初始化阶段就是执行类构造器的 <code>&lt;clinit&gt;()</code> 方法的过程，该方法具有以下特点：</p><ul><li><code>&lt;clinit&gt;()</code> 方法由编译器自动收集类中所有类变量的赋值动作和静态语句块中的语句合并产生，编译器收集顺序由语句在源文件中出现的顺序决定。</li><li><code>&lt;clinit&gt;()</code> 方法与类的构造器函数（即在虚拟机视角中的实例构造器 <code>&lt;init&gt;()</code>方法）不同，它不需要显示的调用父类的构造器，Java 虚拟机会保证在子类的 <code>&lt;clinit&gt;()</code> 方法执行前，父类的 <code>&lt;clinit&gt;()</code> 方法已经执行完毕。</li><li>由于父类的 <code>&lt;clinit&gt;()</code> 方法先执行，也就意味着父类中定义的静态语句块要优先于子类变量的赋值操作。</li><li><code>&lt;clinit&gt;()</code> 方法对于类或者接口不是必须的，如果一个类中没有静态语句块，也没有对变量进行赋值操作，那么编译器可以不为这个类生成 <code>&lt;clinit&gt;()</code> 方法。</li><li>接口中不能使用静态语句块，但仍然有变量初始化的赋值操作，因此接口与类一样都会生成 <code>&lt;clinit&gt;()</code> 方法。</li><li>Java 虚拟机必须保证一个类的 <code>&lt;clinit&gt;()</code> 方法在多线程环境中被正确的加锁同步，如果多个线程同时去初始化一个类，那么只会有其中一个线程去执行这个类的 <code>&lt;clinit&gt;()</code> 方法，其他线程都需要阻塞等待。</li></ul><h3 id="_6-3-类加载器" tabindex="-1"><a class="header-anchor" href="#_6-3-类加载器" aria-hidden="true">#</a> 6.3 类加载器</h3><p>能够通过一个类的全限定名来获取描述该类的二进制字节流的工具称为类加载器。每一个类加载器都拥有一个独立的类名空间，因此对于任意一个类，都必须由加载它的类加载器和这个类本身来共同确立其在 Java 虚拟机中的唯一性。这意味着要想比较两个类是否相等，必须在同一类加载器加载的前提下；如果两个类的类加载器不同，则它们一定不相等。</p><h3 id="_6-4-双亲委派模型" tabindex="-1"><a class="header-anchor" href="#_6-4-双亲委派模型" aria-hidden="true">#</a> 6.4 双亲委派模型</h3><p>从 Java 虚拟机角度而言，类加载器可以分为以下两类：</p><ul><li><strong>启动类加载器</strong>：启动类加载器（Bootstrap ClassLoader）由 C++ 语言实现（以 HotSpot 为例），它是虚拟机自身的一部分；</li><li><strong>其他所有类的类加载器</strong>：由 Java 语言实现，独立存在于虚拟机外部，并且全部继承自 <code>java.lang.ClassLoader</code> 。</li></ul><p>从开发人员角度而言，类加载器可以分为以下三类：</p><ul><li><strong>启动类加载器 (Boostrap Class Loader)</strong>：负责把存放在 <code>&lt;JAVA_HOME&gt;\\lib</code> 目录中，或被 <code>-Xbootclasspath</code> 参数所指定的路径中存放的能被 Java 虚拟机识别的类库加载到虚拟机的内存中；</li><li><strong>扩展类加载器 (Extension Class Loader)</strong>：负责加载 <code>&lt;JAVA_HOME&gt;\\lib\\ext</code> 目录中，或被 <code>java.ext.dirs</code> 系统变量所指定的路径中的所有类库。</li><li><strong>应用程序类加载器 (Application Class Loader)</strong>：负责加载用户类路径（ClassPath）上的所有的类库。</li></ul><p>JDK 9 之前的 Java 应用都是由这三种类加载器相互配合来完成加载：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/zongjie-c1fcdc37-4e5a-4ed3-94b1-ad4afa2dba7c.png" alt="" loading="lazy"></p><p>上图所示的各种类加载器之间的层次关系被称为类加载器的 “双亲委派模型”，“双亲委派模型” 要求除了顶层的启动类加载器外，其余的类加载器都应该有自己的父类加载器，需要注意的是这里的加载器之间的父子关系一般不是以继承关系来实现的，而是使用组合关系来复用父类加载器的代码。</p><p>双亲委派模型的工作过程如下：如果一个类加载器收到了类加载的请求，它首先不会自己去尝试加载这个类，而是把这个请求委派给父类加载器去完成，每一个层次的类加载器都是如此，因此所有的加载请求最终都应该传送到最顶层的启动类加载器，只有当父加载器反馈自己无法完成这个加载请求（它的搜索范围中没有找到所需的类）时，子加载器才会尝试自己去完成加载。基于双亲委派模型可以保证程序中的类在各种类加载器环境中都是同一个类，否则就有可能出现一个程序中存在两个不同的 <code>java.lang.Object</code> 的情况。</p><h3 id="_6-5-模块化下的类加载器" tabindex="-1"><a class="header-anchor" href="#_6-5-模块化下的类加载器" aria-hidden="true">#</a> 6.5 模块化下的类加载器</h3><p>JDK 9 之后为了适应模块化的发展，类加载器做了如下变化：</p><ul><li>仍维持三层类加载器和双亲委派的架构，但扩展类加载器被平台类加载器所取代；</li><li>当平台及应用程序类加载器收到类加载请求时，要首先判断该类是否能够归属到某一个系统模块中，如果可以找到这样的归属关系，就要优先委派给负责那个模块的加载器完成加载；</li><li>启动类加载器、平台类加载器、应用程序类加载器全部继承自 <code>java.internal.loader.BuiltinClassLoader</code> ，BuiltinClassLoader 中实现了新的模块化架构下类如何从模块中加载的逻辑，以及模块中资源可访问性的处理。</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/zongjie-04b18ddb-3457-4e46-ba53-78237d234e37.png" alt="" loading="lazy"></p><h2 id="七、程序编译" tabindex="-1"><a class="header-anchor" href="#七、程序编译" aria-hidden="true">#</a> 七、程序编译</h2><h3 id="_7-1-编译器分类" tabindex="-1"><a class="header-anchor" href="#_7-1-编译器分类" aria-hidden="true">#</a> 7.1 编译器分类</h3><ul><li><strong>前端编译器</strong>：把 <code>*.java</code> 文件转变成 <code>.class</code> 文件的过程；如 JDK 的 Javac，Eclipse JDT 中的增量式编译器。</li><li><strong>即时编译器</strong>：常称为 JIT 编译器（Just In Time Complier），在运行期把字节码转变成本地机器码的过程；如 HotSpot 虚拟机中的 C1、C2 编译器，Graal 编译器。</li><li><strong>提前编译器</strong>：直接把程序编译成目标机器指令集相关的二进制代码的过程。如 JDK 的 jaotc，GUN Compiler for the Java（GCJ），Excelsior JET 。</li></ul><h3 id="_7-2-解释器与编译器" tabindex="-1"><a class="header-anchor" href="#_7-2-解释器与编译器" aria-hidden="true">#</a> 7.2 解释器与编译器</h3><p>在 HotSpot 虚拟机中，Java 程序最初都是通过解释器（Interpreter）进行解释执行的，其优点在于可以省去编译时间，让程序快速启动。当程序启动后，如果虚拟机发现某个方法或代码块的运行特别频繁，就会使用编译器将其编译为本地机器码，并使用各种手段进行优化，从而提高执行效率，这就是即时编译器。HotSpot 内置了两个（或三个）即时编译器：</p><ul><li><strong>客户端编译器 (Client Complier)</strong>：简称 C1；</li><li><strong>服务端编译器 (Servier Complier)</strong>：简称 C2，在有的资料和 JDK 源码中也称为 Opto 编译器；</li><li><strong>Graal 编译器</strong>：在 JDK 10 时才出现，长期目标是替代 C2。</li></ul><p>在分层编译的工作模式出现前，采用客户端编译器还是服务端编译器完全取决于虚拟机是运行在客户端模式还是服务端模式下，可以在启动时通过 <code>-client</code> 或 <code>-server</code> 参数进行指定，也可以让虚拟机根据自身版本和宿主机性能来自主选择。</p><h3 id="_7-3-分层编译" tabindex="-1"><a class="header-anchor" href="#_7-3-分层编译" aria-hidden="true">#</a> 7.3 分层编译</h3><p>要编译出优化程度越高的代码通常都需要越长的编译时间，为了在程序启动速度与运行效率之间达到最佳平衡，HotSpot 虚拟机在编译子系统中加入了分层编译（Tiered Compilation）：</p><ul><li><strong>第 0 层</strong>：程序纯解释执行，并且解释器不开启性能监控功能；</li><li><strong>第 1 层</strong>：使用客户端编译器将字节码编译为本地代码来运行，进行简单可靠的稳定优化，不开启性能监控功能；</li><li><strong>第 2 层</strong>：仍然使用客户端编译执行，仅开启方法及回边次数统计等有限的性能监控；</li><li><strong>第 3 层</strong>：仍然使用客户端编译执行，开启全部性能监控；</li><li><strong>第 4 层</strong>：使用服务端编译器将字节码编译为本地代码，其耗时更长，并且会根据性能监控信息进行一些不可靠的激进优化。</li></ul><p>以上层次并不是固定不变的，根据不同的运行参数和版本，虚拟机可以调整分层的数量。各层次编译之间的交互转换关系如下图所示：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/zongjie-2188c350-fdb8-4fee-b2f0-5311795f386b.png" alt="" loading="lazy"></p><p>实施分层编译后，解释器、客户端编译器和服务端编译器就会同时工作，可以用客户端编译器获取更高的编译速度、用服务端编译器来获取更好的编译质量。</p><h3 id="_7-4-热点探测" tabindex="-1"><a class="header-anchor" href="#_7-4-热点探测" aria-hidden="true">#</a> 7.4 热点探测</h3><p>即时编译器编译的目标是 “热点代码”，它主要分为以下两类：</p><ul><li>被多次调用的方法。</li><li>被多次执行循环体。这里指的是一个方法只被少量调用过，但方法体内部存在循环次数较多的循环体，此时也认为是热点代码。但编译器编译的仍然是循环体所在的方法，而不会单独编译循环体。</li></ul><p>判断某段代码是否是热点代码的行为称为 “热点探测” （Hot Spot Code Detection），主流的热点探测方法有以下两种：</p><ul><li><strong>基于采样的热点探测 (Sample Based Hot Spot Code Detection)</strong>：采用这种方法的虚拟机会周期性地检查各个线程的调用栈顶，如果发现某个（或某些）方法经常出现在栈顶，那么就认为它是 “热点方法”。</li><li><strong>基于计数的热点探测 (Counter Based Hot Spot Code Detection)</strong>：采用这种方法的虚拟机会为每个方法（甚至是代码块）建立计数器，统计方法的执行次数，如果执行次数超过一定的阈值就认为它是 “热点方法”。</li></ul><h2 id="八、代码优化" tabindex="-1"><a class="header-anchor" href="#八、代码优化" aria-hidden="true">#</a> 八、代码优化</h2><p>即时编译器除了将字节码编译为本地机器码外，还会对代码进行一定程度的优化，它包含多达几十种优化技术，这里选取其中代表性的四种进行介绍：</p><h3 id="_8-1-方法内联" tabindex="-1"><a class="header-anchor" href="#_8-1-方法内联" aria-hidden="true">#</a> 8.1 方法内联</h3><p>最重要的优化手段，它会将目标方法中的代码原封不动地 “复制” 到发起调用的方法之中，避免发生真实的方法调用，并采用名为类型继承关系分析（Class Hierarchy Analysis，CHA）的技术来解决虚方法（Java 语言中默认的实例方法都是虚方法）的内联问题。</p><h3 id="_8-2-逃逸分析" tabindex="-1"><a class="header-anchor" href="#_8-2-逃逸分析" aria-hidden="true">#</a> 8.2 逃逸分析</h3><p>逃逸行为主要分为以下两类：</p><ul><li><strong>方法逃逸</strong>：当一个对象在方法里面被定义后，它可能被外部方法所引用，例如作为调用参数传递到其他方法中，此时称为方法逃逸；</li><li><strong>线程逃逸</strong>：当一个对象在方法里面被定义后，它可能被外部线程所访问，例如赋值给可以在其他线程中访问的实例变量，此时称为线程，其逃逸程度高于方法逃逸。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">StringBuilder</span> <span class="token function">concat</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> strings<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> string <span class="token operator">:</span> strings<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sb<span class="token punctuation">;</span> <span class="token comment">// 发生了方法逃逸</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">concat</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> strings<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> string <span class="token operator">:</span> strings<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 没有发生方法逃逸</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果能证明一个对象不会逃逸到方法或线程之外，或者逃逸程度比较低（只逃逸出方法而不会逃逸出线程），则可以为这个对象实例采取不同程序的优化：</p><ul><li><strong>栈上分配 (Stack Allocations)</strong>：如果一个对象不会逃逸到线程外，那么将会在栈上分配内存来创建这个对象，而不是 Java 堆上，此时对象所占用的内存空间就会随着栈帧的出栈而销毁，从而可以减轻垃圾回收的压力。</li><li><strong>标量替换 (Scalar Replacement)</strong>：如果一个数据已经无法再分解成为更小的数据类型，那么这些数据就称为标量（如 int、long 等数值类型及 reference 类型等）；反之，如果一个数据可以继续分解，那它就被称为聚合量（如对象）。如果一个对象不会逃逸外方法外，那么就可以将其改为直接创建若干个被这个方法使用的成员变量来替代，从而减少内存占用。</li><li><strong>同步消除 (Synchronization Elimination)</strong>：如果一个变量不会逃逸出线程，那么对这个变量实施的同步措施就可以消除掉。</li></ul><h3 id="_8-3-公共子表达式消除" tabindex="-1"><a class="header-anchor" href="#_8-3-公共子表达式消除" aria-hidden="true">#</a> 8.3 公共子表达式消除</h3><p>如果一个表达式 E 之前已经被计算过了，并且从先前的计算到现在 E 中所有变量的值都没有发生过变化，那么 E 这次的出现就称为公共子表达式。对于这种表达式，无需再重新进行计算，只需要直接使用前面的计算结果即可。</p><h3 id="_8-4-数组边界检查消除" tabindex="-1"><a class="header-anchor" href="#_8-4-数组边界检查消除" aria-hidden="true">#</a> 8.4 数组边界检查消除</h3><p>对于虚拟机执行子系统来说，每次数组元素的读写都带有一次隐含的上下文检查以避免访问越界。如果数组的访问发生在循环之中，并且使用循环变量来访问数据，即循环变量的取值永远在 [0，list.length) 之间，那么此时就可以消除整个循环的数据边界检查，从而避免多次无用的判断。</p>`,222),p={href:"https://github.com/heibaiying/Full-Stack-Notes",target:"_blank",rel:"noopener noreferrer"},h=a("li",null,"整理：musk",-1),u=a("hr",null,null,-1);function g(v,b){const n=l("ExternalLinkIcon");return o(),s("div",null,[d,a("blockquote",null,[a("ul",null,[a("li",null,[e("原文链接："),a("a",p,[e("https://github.com/heibaiying/Full-Stack-Notes"),i(n)])]),h])]),u])}const k=t(c,[["render",g],["__file","zongjie.html.vue"]]);export{k as default};
