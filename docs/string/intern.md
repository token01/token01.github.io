---
title: 深入解析String.intern()方法
shortTitle: 深入解析String.intern()方法
category:
  - Java核心
tag:
  - 数组&字符串
description: 架构师进阶之路，小白的零基础Java教程，从入门到进阶，深入解析String.intern()方法
head:
  - - meta
    - name: keywords
      content: Java,Java SE,Java基础,Java教程,架构师进阶之路,Java入门,教程,java字符串,String,intern
---


“哥，你发给我的那篇文章我看了，结果直接把我给看得不想学 Java 了！”三妹气冲冲地说。

“哪一篇啊？”看着三妹面色沉重，我关心地问到。

“就是[美团技术团队深入解析 `String.intern()` 那篇](https://tech.meituan.com/2014/03/06/in-depth-understanding-string-intern.html)啊！”三妹回答。

“哦，我想起来了，不挺好一篇文章嘛，深入浅出，精品中的精品，看完后你应该对 String 的 intern 方法彻底理解了才对呀。”

“好是好，但我就是看不懂！”三妹委屈地说，“哥，还是你亲自给我讲讲吧？”

“好吧，上次学的[字符串常量池](https://tobebetterjavaer.com/string/constant-pool.html)你都搞清楚了吧？”

“嗯。”三妹微微的点了点头。

要理解美团技术团队的这篇文章，你只需要记住这几点内容：

第一，使用双引号声明的字符串对象会保存在字符串常量池中。

第二，使用 new 关键字创建的字符串对象会先从字符串常量池中找，如果没找到就创建一个，然后再在堆中创建字符串对象；如果找到了，就直接在堆中创建字符串对象。

第三，针对没有使用双引号声明的字符串对象来说，就像下面代码中的 s1 那样：

```java
String s1 = new String("二哥") + new String("三妹");
```

如果想把 s1 的内容也放入字符串常量池的话，可以调用 `intern()` 方法来完成。

不过，需要注意的是，Java 7 的时候，字符串常量池从永久代中移动到了堆中，虽然此时永久代还没有完全被移除。Java 8 的时候，永久代被彻底移除。

这个变化也直接影响了  `String.intern()` 方法在执行时的策略，Java 7 之前，执行 `String.intern()` 方法的时候，不管对象在堆中是否已经创建，字符串常量池中仍然会创建一个内容完全相同的新对象； Java 7 之后呢，由于字符串常量池放在了堆中，执行 `String.intern()` 方法的时候，如果对象在堆中已经创建了，字符串常量池中就不需要再创建新的对象了，而是直接保存堆中对象的引用，也就节省了一部分的内存空间。

“三妹，来猜猜这段代码输出的结果吧。”我说。

```java
String s1 = new String("二哥三妹");
String s2 = s1.intern();
System.out.println(s1 == s2);
```

“哥，这我完全猜不出啊，还是你直接解释吧。”三妹说。

“好吧。”

第一行代码，字符串常量池中会先创建一个“二哥三妹”的对象，然后堆中会再创建一个“二哥三妹”的对象，s1 引用的是堆中的对象。

第二行代码，对 s1 执行 `intern()` 方法，该方法会从字符串常量池中查找“二哥三妹”这个字符串是否存在，此时是存在的，所以 s2 引用的是字符串常量池中的对象。

也就意味着 s1 和 s2 的引用地址是不同的，一个来自堆，一个来自字符串常量池，所以输出的结果为 false。

“来看一下运行结果。”我说。

```
false
```

“我来画幅图，帮助你理解下。”看到三妹惊讶的表情，我耐心地说。

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/string/intern-01.png)

“这下理解了吧？”我问三妹。

“嗯嗯，一下子就豁然开朗了！”三妹说。

“好，我们再来看下面这段代码。”

```java
String s1 = new String("二哥") + new String("三妹");
String s2 = s1.intern();
System.out.println(s1 == s2);
```

“难道也输出 false ？”三妹有点不确定。

“不，这段代码会输出 true。”我否定了三妹的猜测。

“为啥呀？”三妹迫切地想要知道答案。

第一行代码，会在字符串常量池中创建两个对象，一个是“二哥”，一个是“三妹”，然后在堆中会创建两个匿名对象“二哥”和“三妹”（可以暂时忽略），最后还有一个“二哥三妹”的对象，s1 引用的是堆中“二哥三妹”这个对象。

第二行代码，对 s1 执行 `intern()` 方法，该方法会从字符串常量池中查找“二哥三妹”这个对象是否存在，此时不存在的，但堆中已经存在了，所以字符串常量池中保存的是堆中这个“二哥三妹”对象的引用，也就是说，s2 和 s1 的引用地址是相同的，所以输出的结果为 true。

“来看一下运行结果。”我胸有成竹地说。

```
true
```

“我再来画幅图，帮助你理解下。”

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/string/intern-02.png)

“哇，我明白了！”三妹长舒一口气，大有感慨 intern 也没什么难理解的意味。

不过需要注意的是，尽管 intern 可以确保所有具有相同内容的字符串共享相同的内存空间，但也不要烂用 intern，因为任何的缓存池都是有大小限制的，不能无缘无故就占用了相对稀缺的缓存空间，导致其他字符串没有坑位可占。

另外，字符串常量池本质上是一个固定大小的 StringTable，如果放进去的字符串过多，就会造成严重的哈希冲突，从而导致链表变长，链表变长也就意味着字符串常量池的性能会大幅下降，因为要一个一个找是需要花费时间的。

“好了，三妹，关于 String 的 intern 就讲到这吧，这次理解了吧？”我问。

“哥，你真棒！”

看到三妹一点一滴的进步，我也感到由衷的开心。

---

最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 **数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关** 等等等等……详情戳：[可以说是2022年全网最全的学习和找工作的PDF资源了](https://tobebetterjavaer.com/pdf/programmer-111.html)

关注二哥的原创公众号 **沉默王二**，回复**111** 即可免费领取。

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png)