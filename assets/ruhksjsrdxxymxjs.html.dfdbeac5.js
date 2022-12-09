import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as r,a as e,b as a,d as h,e as t,r as o}from"./app.c2a49a29.js";const s={},d=t('<blockquote><p>本文是学习颜群的《如何快速且深入的学习一门技术》的一篇记录文章，同时记录下我的一些个人感想，对方的很多观点让我很受启发，虽然自己平时对学习方法有些心得，但是真正去总结时间却很少。缺少盘点的结果就是任凭本能和生物钟状态，显然这种方法是不可持续的。为了提升个人或团队的学习效率，如何摸索一套针对技术类型的学习方法是非常值得每个技术人员去探索和总结的</p></blockquote><p>软件开发正处于快速发展的时代，新技术层出不穷，那么在这个日新月异的互联网时代作为软件开发者，我们应该如何保证自己的技术竞争力？我们今天就来聊一聊，如何快速且深入的学习一门新技术。</p><h2 id="观其大略" tabindex="-1"><a class="header-anchor" href="#观其大略" aria-hidden="true">#</a> 观其大略</h2><p>大家可能都知道，英语考试里面有一个经典的题目叫&quot;完形填空&quot;，老师经常告诉我们，在做完形填空之前，一定要先花一分钟的时间，整篇文章快速的阅读一下，对整篇文章有一个大致的了解之后，如果再去做题，准确率就会提高很多，那我认为这种做完形填空的方法也应该同样适用于软件学习。</p><p>我们在学习某一个软件新技术，也应该先快速的去浏览一下这个新技术的主要大致情况之后，再去研究每个新技术里边到底包含了哪些技术细节，遵循从整体到深入的过程。</p><h3 id="找出套路" tabindex="-1"><a class="header-anchor" href="#找出套路" aria-hidden="true">#</a> 找出套路</h3><p>各种技术都有自己的模板结构：</p><ul><li>HTML:代码结构固定</li><li>Netty:代码流程类似</li><li>JDBC:实现步骤固定</li></ul><p>不论是前端还是后端框架，这些技术都有一个共同的特点，就是他们有一定的套路可遵循，因此我认为一个比较好的学习方法应该是先不管三七二十一，先快速的去了解一下具体的套路到底是什么，然后再去深入研究套路里面的每一步到底是什么，那这样才能高效的学习一门新技术。</p><p>那么如何了解套路呢？</p><p>在学习新有之前我们一定得先宏观的全局性地快速地了解一下技术的全貌，那这样才能清晰的认识一下，技术里边哪些是套路，哪些是重点，那么这是你可能会继续问，到底应该如何的快速阅读技术的全貌呢？</p><p>这其实是快速阅读理论知识了，推荐大家可以以快速的跳跃性的方式来查阅一些资料，来看一下执行流程是怎样的，具体细节你可以查阅技术官网，看书看博客或看一些视频教程的。重点要看这些教程里边反复出现的重复代码，一般而言那些频繁出现的重复代码就是这个新技术的技术代码结构了。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>如何快速寻找新技术的代码结构：</p><ul><li>快速、跳跃查询资料（官网，看书，博客，视频）</li><li>出现频率较多的重复代码。</li></ul><blockquote><p>这种方法虽然自己了解，但是平时应用并不多，没有刻意练习，更没有形成本能的习惯。这种方法看似囫囵吞枣，其实从效果来看是非常科学的。高屋建瓴，快速的在脑中创建全景图，有了模糊的知识树导航，对后续的深入学习也好，耗费的时间成本也好，都会有一个初印象，一定程度上可以消除对新技术的陌生感和恐惧感。</p><p>既然是深入学习，到后期观其大略应该是不够的，脑图好比地图，如果不能深刻印在脑子里，实战必然无法做到熟练使用，如何能说是深入学习呢？</p><p>所以前期观其大略，后期必然是烂熟于心。比如学习 k8s，你如果不能很清楚的了解其中的 7 个大的组件用途和关联，那么在运维和开发过程必然会不自信。</p></blockquote><h2 id="深度学习" tabindex="-1"><a class="header-anchor" href="#深度学习" aria-hidden="true">#</a> 深度学习</h2><p>技术初体验仅仅只能算一个入门程序，要想真正的掌握，必然还得进行深入的学习，那该怎么深入呢？</p><p>我认为<strong>通过案例</strong>来倒逼对理论的理解应该是一个比较好的方法，比如 Netty 案例库的学习。按照下面步骤搭建完毕之后，我对他的掌握就已经很熟悉了。</p><p><img src="https://uploader.shimo.im/f/qOtBzbzYuLMYtqoh.png!thumbnail" alt="" loading="lazy"></p><ul><li>第 1 步，通过快速学习两个小时，了解了 Netty 的整体流程</li><li>第 2 步，从初体验的 hello world 开始，逐步积累 Netty 的案例库</li><li>第 3 步，当案例搭建完成，大脑已经建立了对 Netty 的思维框架图</li></ul><blockquote><p>深度学习并不容易，这是一个打怪升级的迭代过程，中间必然会因为细节栽倒，从坑里爬起来返回理论，再返回实践验证。这里与其说是深度学习，不如说是对毅力的考验，如果在韧劲上能加上一点兴趣，遇到问题的心态能够更加放松，并乐于挑战，那么这个阶段，估计会倒下一大批同学。</p></blockquote><h2 id="强化学习" tabindex="-1"><a class="header-anchor" href="#强化学习" aria-hidden="true">#</a> 强化学习</h2><p>相信通过前面的讲解，你已经清楚的知道如何快速掌握一门新技术，但是现在还有两个重要问题需要解决：</p><ul><li>一个是对知识的掌握足够吗？</li><li>另一个是刚才学到的新技术会不会很快忘掉？</li></ul><p>这里我建议一个方式就是做微服务案例，通过案例来滚动整合先前的技术。我们可以先用每一个技术搭建一个独立的服务，然后再把由不同技术搭建的微服务整合起来。</p><p><img src="https://uploader.shimo.im/f/EM9jsKBx1q0MSheF.png!thumbnail" alt="" loading="lazy"></p><p>举个例子，当你学完 ssh 的时候，就用 ssh 搭建一个用户管理的服务，学完 ssm 的时候就用 ssm 搭建一个支付结算的服务，学完 spring 后搭建一个购物服务，再通过 rpc 技术和其他服务整合起来。</p><p>这么做一方面可以通过动手开发的方式来做项目，让我们对已有的技术进行一个查漏补缺，因为在开发这些微服务案例的同时，你就会清晰的认识到这些技术里边哪些是重点，哪些又是自己当初在学习室给遗漏掉的。</p><p>另一方面，这种微服务项目可以保持我们对技术的一个新鲜度，比如说 ssh，可能是你半年前已经实现好了，现在和 spring 联调的过程中，你自然也会对半年前的 ssh 进行一次复习了，那可以解决刚才的第 2 个问题就是防止遗漏的问题了。</p><p>到这里相信大家已经掌握了一种持续学习的方法了，这里的持续本身包含迭代和复习巩固在里面。</p><blockquote><p>强化学习也可以理解为整合学习，是一种复习也是一种补漏，交叉螺旋上升，是在深度学习基础上的进一步巩固和强化，也是对知识的的一种水平延展。如果说深度学习目的是为了理解深刻，那么强化学习要达到的是持久化，因为别忘了记忆是有遗忘曲线的。强化得越多，基础也扎实，可能的创新也会更充分。</p></blockquote><h2 id="技术难点" tabindex="-1"><a class="header-anchor" href="#技术难点" aria-hidden="true">#</a> 技术难点</h2><p>最后再给大家讨论一下，如何学习技术难点，我们可以将技术难点分为两类：</p><ol><li>一类是偏理论的</li><li>一个是偏实战的</li></ol><h3 id="偏理论" tabindex="-1"><a class="header-anchor" href="#偏理论" aria-hidden="true">#</a> 偏理论</h3><p>像数据结构和算法、设计模式以及架构设计等一些技术，都是较为难以理解的偏理论型。这些技术也经常是处于开发者在进阶路上的绊脚石，那我应该如何才能顺利的跨越这些障碍呢？</p><p>我认为可以采用先拆解目标在集中消化的方式来学习，举个例子对于算法设计模式等一些难以理解的技术来说，尽量不要想着花一周或者一个月就把他们彻底搞定了，而应该先计算一下这些知识的数量，然后用碎片化的时间去学习。</p><p>举个例子，假设你想要学习算法，那首先要先计算一下这些算法一共有几个，比如说有 30 个，那就把这些算法再根据难易程度进行排序，有了这些难易排序之后，我们就可以用碎片化的时间将 30 个算法逐个进行攻破。</p><p>比如在上下班的地铁之上，在晚餐后的半小时，或者说在睡前的一段时间，利用一些碎片化的时间去学习某一个算法，如果能真正的加以高效利用起来，相信你一定能够在不知不觉里边克服很多难点，从而减少对难点的为难情绪。</p><p>如果难点攻克差不多了，那此时就可以采用一个比较集中的时间，将它彻底消化掉。</p><h3 id="偏实践" tabindex="-1"><a class="header-anchor" href="#偏实践" aria-hidden="true">#</a> 偏实践</h3><p>接下来我们再聊一聊，如何学习篇实践性的难点技术，这里称之为实践，是因为有些技术必须借助于开发工具来追踪代码或者调试才能掌握的，比如说阅读一个框架的源代码，就是学习偏实践型技术的一个典型代表了。</p><p>对于偏实践性的技术学习，最主要的就是要在实践之前，心里边已经对要实践的内容有了清晰的基础理论了，实践仅仅是一种揭晓谜底的过程。</p><p>这里给大家换一下我当时学 mybatis 框架时的一些情况吧，当时在我阅读 mybatis 框架源码之前，我已经对这个框架应用比较熟悉了，因此我清晰的知道 mybatis 执行的步骤和流程。</p><p>现在仅仅是想通过阅读源码，亲眼见证一下它的底层到底是怎么实现的而已，于是我通过开发工具，通过 debug 进入的源代码……</p><p>当然考虑到每个人对技术的基础掌握是不一样的，每门技术也有很大的不同，所以不同的人在不学习不同的技术可能会存在很多的差异，但我相信这个学习新技术的整体思路是一致的，就可以先通过快速的整体阅读，然后逐步积累逐步深入，可以说这应该是一个比较不错的学习方法吧</p><h2 id="学习气氛" tabindex="-1"><a class="header-anchor" href="#学习气氛" aria-hidden="true">#</a> 学习气氛</h2><h3 id="线下共同学习" tabindex="-1"><a class="header-anchor" href="#线下共同学习" aria-hidden="true">#</a> 线下共同学习</h3><p>在很多时候开发者的学习时间都是比较孤独的，都是一个人趴在电脑前，一定程度来讲，个人学习的气氛实际上是没有团体好的，大家可以回想一下是不是在高中的自习室，或在大学的图书馆里的学习系统就比较好呢？</p><p>所以如果你有很多志同道合的朋友，那么完全可以邀请他们来一同学习，所谓独学而无友则孤陋而寡闻。</p><h3 id="线上分享学习" tabindex="-1"><a class="header-anchor" href="#线上分享学习" aria-hidden="true">#</a> 线上分享学习</h3><p>如果不方便，你也可以注册一个微信公众号或者说技术博客，再或者也可以将自己学习的一些项目部署在云端，然后开放给大家一同来访问。</p><p>总之，重点就是要想办法将自己的学习成果分享出来，让大家一起来阅读一起来访问，一起来监督你的学习，并且你也可以通过留言功能与大家进行一个互动。</p><p>如果你是讲师，也可以把自己学到一些知识录成视频分享出去，我相信如果你坚持这么做，除了能够营造自学的气氛以外，还可以将自己学到的基础沉淀下来，慢慢的也会为自己吸引到一批技术爱好者，从而提升自己的影响力，是不是一举多得呢？</p><h2 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1" aria-hidden="true">#</a> 总结</h2><p>今天的分享到这里就结束，最后再总结一下：</p><ul><li>在学习新技术时我们可以先快速的了解一下技术的宏观内容，观其大略，找到其中的套路和代码流程或者模板。</li><li>然后从 hello world 开始，逐步搭建一个案例库，通过案例倒逼自己深入学习，从而掌握技术的广度和深度</li><li>当案例后搭建完毕以后，再通过微服务技术和其他服务进行一个整合，从而形成一张更大支持网络，不断让自己长期的可以接触到这些技术，防止遗漏</li><li>对于一些偏理论性的技术可以用碎片化的学习时间来逐个攻破，减少自己对难点技术的恐惧心理</li><li>对于一些偏实践性的基础来说，我们需要在实践之前，心里已经对事件的内容有了一定的了解</li><li>最后建议大家也可以将自己学到的技术分享出去，做好记录成长的同时，也能不断的提高自己的知名度。</li></ul>',58),n={href:"https://www.cnblogs.com/jackyfei/p/12313526.html",target:"_blank",rel:"noopener noreferrer"},c=e("hr",null,null,-1);function u(b,m){const i=o("ExternalLinkIcon");return p(),r("div",null,[d,e("blockquote",null,[e("p",null,[a("转载链接："),e("a",n,[a("https://www.cnblogs.com/jackyfei/p/12313526.html"),h(i)]),a("，整理：musk")])]),c])}const _=l(s,[["render",u],["__file","ruhksjsrdxxymxjs.html.vue"]]);export{_ as default};
