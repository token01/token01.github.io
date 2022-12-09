import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as o,a as e,b as a,d as p,e as i,r as s}from"./app.c2a49a29.js";const l={},c=e("p",null,"浅谈共识算法|拜占庭将军问题",-1),h={href:"https://github.com/blockchainGuide/",target:"_blank",rel:"noopener noreferrer"},d=e("p",null,"写文不易，给个star，有什么问题可以指出，便于大家交流学习。",-1),g=i('<p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnbavodnjoj31hc0u0dqd.jpg" alt="src=http___pic1.win4000.com_wallpaper_2018-08-15_5b739514a72cf.jpg&amp;refer=http___pic1.win4000" loading="lazy"></p><h1 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述" aria-hidden="true">#</a> 问题描述</h1><p>拜占庭帝国想要进攻一个强大的敌人，为此派出了7支军队去包围这个敌人。这个敌人足以抵御3支常规拜占庭军队的同时袭击。基于一些原因，这支军队不能集合在一起单点突破，必须在分开的包围状态下同时攻击。他们任一支军队单独进攻都毫无胜算，除非有至少4支军队同时袭击才能攻下敌国。他们分散在敌国的四周，依靠通信兵相互通信来协商进攻意向及进攻时间。困扰这些将军的问题是，他们不确定他们中是否有<code>叛徒</code>，叛徒可能擅自变更进攻意向或者进攻时间。在这种状态下，拜占庭将军们能否找到一种<code>分布式的协议</code>来让他们能够远程协商，从而赢取战斗？这就是著名的拜占庭将军问题。</p><p>在拜占庭将军问题中并不去考虑通信兵是否会被截获或无法传达信息等问题，即消息传递的信道绝无问。<code>Lamport</code>已经证明了在消息可能丢失的不可靠信道上试图通过消息传递的方式达到一致性是不可能的。所以，在研究拜占庭将军问题的时候，我们已经<strong>假定了信道是没有问题</strong>的，并在这个前提下，去做一致性和容错性相关研究。</p><p>根据如下例子，大致的对问题有个形象的理解：</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnrrulf2kvj31gk0l2gn5.jpg" alt="image-20210218163356814" loading="lazy"></p><p>恶意将军分别发送进攻命令和撤退命令，进攻的善良将军则会以为是4票，大于撤退的3票，他们就会进攻，撤退的善良将军也会以为是4票，他们就会撤退，则导致了最终的任务失败。</p><h1 id="问题实质" tabindex="-1"><a class="header-anchor" href="#问题实质" aria-hidden="true">#</a> 问题实质</h1><p>首先我们明白一群<strong>忠实将军</strong>需要实现<strong>某一个目标</strong>（这里为一致进攻或者一致撤退）（最终的共识结果），这里两个侧重点，一个是某一个目标，第二个是忠实将军，这个目标讲述了两个特性：<strong>一致性</strong>和<strong>正确性</strong>。</p><ul><li>一致性：所有忠实将军们<code>基于相同的行动计划</code>（一致进攻或者一致撤退）都达成了一致性。</li><li>正确性：保证了一致性的前提下（只有进攻和撤退这两个选项），也要保证行动的正确性(即遵守<strong>忠实将军</strong>的命令)。</li></ul><p>那么拜占庭将军问题可以抽象如下：</p><p>设计一个协议，一个发送消息的将军（以下简称<strong>司令官</strong>）发送指令给所有其他将军，使得：</p><p>IC1. 所有<strong>忠诚的</strong>将军<strong>遵守同一个命令</strong>（一致性）</p><p>IC2. 假如<strong>司令官是忠诚的</strong>，则其他每个将军遵守他的命令（正确性）</p><p>约定：忠诚将军遵守协议，叛徒破坏协议，且叛徒是匿名的。</p><h1 id="口头协议" tabindex="-1"><a class="header-anchor" href="#口头协议" aria-hidden="true">#</a> 口头协议</h1><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>为定义口头消息，拜占庭将军消息系统具有以下假设：</p><p>A1. 每个被发送的消息能够被<strong>正确的</strong>发出</p><p>A2. 消息接收者知道谁发送的消息</p><p>A3. 能够知道缺少的消息</p><p>假设 A1和A2防止叛徒干扰其他将军的通信，假设 A3 防止叛徒通过不发消息干扰一致性达成 。</p><blockquote><p>先出结论，如果有m个叛军，必须至少有 3m+1位将军才能保证口头协议算法能解“拜占庭将军问题”。否则问题不可解。</p></blockquote><h2 id="口头协议算法om-m" tabindex="-1"><a class="header-anchor" href="#口头协议算法om-m" aria-hidden="true">#</a> 口头协议算法OM(m)</h2><p>假设有m个叛徒，n个将军</p><p>①：OM(m)算法，m=0</p><p>a. 一开始发送消息的将军（以下简称<strong>司令官</strong>）发送指令给所有其他将军;</p><p>b. 将军接受指令，或者用默认值如果消息未收到的话；</p><p>②：OM(m)算法，m&gt;0</p><p>a. 司令官发送指令给所有其他将军;</p><p>b. 对于每个将军i，Vi的值从司令官获得，并且将军i执行新一轮OM(m-1)算法，作为OM(m-1)算法中的司令官向剩下的n-2个将军发送Vi(除去OM(m)中司令官和自己)；或者用默认值如果消息未收到的话；</p><p>c.对于每个将军i (即收到指令的将军),并且j不等于i, Vj 的值从将军 j在上面 b 步骤中获得的值，或者用默认值如果未收到将军j的消息的话，这样就可以得到V1,...Vn-1个值，最后执行Majority(V1,...Vn-1)取得将军i的最终确认指令V；</p><p><strong>详细解释：</strong></p><p>OM算法里面有个Majority()函数，用来判断忠诚的将军最终应该是执行什么指令，逻辑为： 在输入的一系列V1,V2...Vn 中，找到最多相同数量的值作为输出，如果找不到，用默认值替代。 比如： V1=进攻，V2=进攻，V3=撤退，Majority(v1, V2, v3)=进攻。为什么要加这一步呢，由于司令官也有可能是叛军，所以单纯的把司令官的指令当做最终指令肯定是不行的。Vi代表从其他将军那里获得的关于司令官的指令，假设司令官告诉将军B的指令是&quot;进攻&quot;，如果将军B是忠诚的话，将军B会如实通知将军A“司令官告诉我的指令是进攻”，如果将军B是叛军的话，将军B可能会说“司令官告诉我的指令是撤退”或者干脆不发信息。通过Majority()函数，在忠诚的将军多于叛军（n&gt;=3m+1）的情况下，可以保证忠诚的将军得到相同的结论，即满足条件IC1。</p><h2 id="口头协议推演" tabindex="-1"><a class="header-anchor" href="#口头协议推演" aria-hidden="true">#</a> 口头协议推演</h2><p>OM(m)算法中的第b步使用了递归，这个确实很难理解，下面举实例来说明：</p><p>a. 当m=1,n=4并且叛军不是司令官时，根据OM(m)算法, 将军A的最终指令V = Majority(V1, V2, V3)= Majority(&quot;进攻&quot;，进攻，“撤退”）= 进攻，其中V1来自司令官的通知，V2来自将军B告诉将军A的司令官的指令，V3由于是叛军，其实发出什么指令已经无所谓，Majority函数必能让将军A和将军B获得一致的并且是正确的指令，即满足条件IC1和CI2;</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gns0cbjalxj31gs0m440w.jpg" alt="image-20210218212754971" loading="lazy"></p><p>b.<strong>当m=1,n=4，并且叛军是司令官时</strong>，每位将军的Majority(V1,V2,V3)=Majority(x,y,z)，满足条件IC1.</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gns0gzfmv2j31fw0k6aby.jpg" alt="image-20210218213214835" loading="lazy"></p><p>c. <strong>当m=2, n=7,并且司令官是忠诚</strong>，虽然只是多了一个叛徒，但是会出现递归过程</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gns1qbz617j31920rwq5t.jpg" alt="image-20210218221557148" loading="lazy"></p><p>上图描述了司令官发送进攻消息给其他6位将军，我们只讨论将军1的决策过程：</p><ol><li>首先将军1从司令官接收到 A 命令</li><li>将军1会询问 （3，4，5，6）关于2号将军接收的是什么命令</li><li>（3，4，5，6）中3和4会如实转述2号将军的命令是A，而5和 6号将军是作恶节点，会说2号将军告诉他们的是O命令，最后得出结论（A，A，A，O，O）（多数原则）,所以得出结论2号将军接收的是A命令，即V2=A</li><li>同理可得V3、V4、V5、V6</li><li>最后将军1知道了2、3、4、5、6的命令为（A，A，A，O，O），最后将军1会采取A命令策略</li></ol><p>同理可以得出2，3，4，5，6将军的策略分别为（A，A，A，O，O）,所以最终1-6的将军策略为（A，A，A，A，O，O）,所以忠诚的将军最终保持了一致性，同时选择了A，同时司令官是忠诚的，所有的将军都执行了司令官的命令，保证了准确性。</p><p>当m的值越大，这个算法的复杂度会越高。</p><h1 id="书面协议" tabindex="-1"><a class="header-anchor" href="#书面协议" aria-hidden="true">#</a> 书面协议</h1><h2 id="定义-1" tabindex="-1"><a class="header-anchor" href="#定义-1" aria-hidden="true">#</a> 定义</h2><p>口头协议中我们讨论了很多，揭示了口头协议的缺点是消息不能追本溯源，这使得口头协议必须在四模冗余的情况下才能保证正确。但是，若能引入一种方法让消息能够追本溯源，情况会不会有所改变呢？这就是书面协议引入的灵感。</p><p>这里通过签名就是为了防止说谎，可以追本溯源。除了满足口头消息A1-A3 三点要求外还应该满足下面A4:</p><p>a. 签名不可被伪造，一旦被篡改即可发现</p><p>b. 任何人都可以验证将军签名的可靠性</p><blockquote><p>结论：对于任意n ，最多只有m个背叛者情况下，算法SM(m)能解决拜占庭将军问题。也就是说，在使用签名的情况下，书面协议可以打破三模冗余的僵局，使用了签名的情况下，只要知道了叛徒数量，我们就可以利用SM(m)算法解决拜占庭将军问题</p></blockquote><h2 id="书面协议算法sm-m" tabindex="-1"><a class="header-anchor" href="#书面协议算法sm-m" aria-hidden="true">#</a> 书面协议算法SM(m)</h2><p>算法SM(m)，不管将军总数n和叛徒数量m，只要采用该算法，忠诚的将军总能达到一致（满足IC1和IC2）。</p><p>我们用集合Vi来表示i将军收到的命令集，这是一个集合，也就是满足互异性（没有重复的元素）。</p><p>我们定义choice(V)函数来决定各个将军的选择，这个函数可以有非常多种形式，他只要满足了以下两个条件：</p><ul><li>如果集合V只包含了一个元素v，那么choice(V)=v</li><li>choice(o)=RETREAT，其中o是空集</li></ul><p>算法解释如下：</p><p>初始化Vi=空集合。</p><p>①：司令官签署命令并发给每个将军</p><p>②：对于每个将军i :</p><p>​ A：如果将军i从发令者收到v:0的消息，且还没有收到其他命令序列，那么他</p><p>​ a:使Vi为{v}；</p><p>​ b:发送v:0:i给其他所有副官。</p><p>​ B：如果副官i收到了形如v:0:j1:...:jk的消息且v不在集合Vi中，那么他</p><p>​ a:添加v到Vi；</p><p>​ b:如果k&lt;m，那么发送v:0:j1:...:jk:i 给每个不在j1,..,jk 中的副官。</p><p>③：对于每个副官i，当他不再收到任何消息，则遵守命令choive(Vi)</p><p>值得注意的是，如果司令忠诚，由于其签名不可伪造，所有忠诚的副官都将得到一个单点集{v}，他们采用的命令集Vi相同，得到的choive(Vi)也为v，满足了IC1和IC2。</p><p>如果司令并非忠诚，只需要满足IC1，但是算法SM(m)使得所有忠诚的副官得到相同的Vi，使用choice()函数后采用的命令也就一定相同。</p><h2 id="书面协议推演" tabindex="-1"><a class="header-anchor" href="#书面协议推演" aria-hidden="true">#</a> 书面协议推演</h2><p>司令是叛徒的状况稍难想象，举个例子，n=3，m=1，其中司令是叛徒，这是口头协议不能解决的状况。</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnsks96hs5j31d40lgtai.jpg" alt="image-20210219091512270" loading="lazy"></p><p>很显然，副官1得到的V1={A,R}，副官2得到相同的V2={A,R}。他们采用choice函数后得到的命令一定相同。</p><p>n=4，m=2，其中司令是叛徒，这同样是口头协议不能解决的状况。</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnsl1kah3gj31ha0u0q6e.jpg" alt="image-20210219092409170" loading="lazy"></p><p>副官1和副官2得到的V1=V2={A,R}，他们采用choice函数后得到的命令也相同。</p><p>书面协议的本质就是引入了签名系统，这使得所有消息都可追本溯源。这一优势，大大节省了成本，他化解了口头协议中1/3要求，只要采用了书面协议，忠诚的将军就可以达到一致（实现IC1和IC2）。这个效果是惊人的，相较之下口头协议则明显有一些缺陷。</p><p>书面协议的结论非常令人兴奋，这不是解决了拜占庭将军问题了吗？但请注意我们在A1-A4中实际上是添加了一些条件的，这使得拜占庭将军问题在这些假设下能够解决，但是在实际状况中却会有一些问题。观察A1~A4，我们做了一些在现实中比较难以完成的假设，比如没考虑传输信息的延迟时间，书面协议的签名体系难以实现，而且签名消息记录的保存难以摆脱一个中心化机构而独立存在。事实上，存在能够完美解决书面协议实际局限的方法就是区块链。</p><h1 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h1>',81),m={href:"https://github.com/blockchainGuide",target:"_blank",rel:"noopener noreferrer"},u={href:"https://people.eecs.berkeley.edu/~luca/cs174/byzantine.pdf",target:"_blank",rel:"noopener noreferrer"},V={href:"http://pmg.csail.mit.edu/papers/osdi99.pdf",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.microsoft.com/en-us/research/wp-content/uploads/2017/01/thesis-mcastro.pdf",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.microsoft.com/en-us/research/uploads/prod/2016/12/The-Byzantine-Generals.pdf",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.bilibili.com/video/BV1yJ411v7xV?from=search&seid=15267710534844183735",target:"_blank",rel:"noopener noreferrer"};function A(j,y){const t=s("ExternalLinkIcon");return n(),o("div",null,[e("blockquote",null,[c,e("p",null,[a("配合以下代码进行阅读："),e("a",h,[a("https://github.com/blockchainGuide/"),p(t)])]),d]),g,e("blockquote",null,[e("p",null,[e("a",m,[a("https://github.com/blockchainGuide"),p(t)])]),e("p",null,[e("a",u,[a("https://people.eecs.berkeley.edu/~luca/cs174/byzantine.pdf"),p(t)])]),e("p",null,[e("a",V,[a("http://pmg.csail.mit.edu/papers/osdi99.pdf"),p(t)])]),e("p",null,[e("a",b,[a("https://www.microsoft.com/en-us/research/wp-content/uploads/2017/01/thesis-mcastro.pdf"),p(t)])]),e("p",null,[e("a",f,[a("https://www.microsoft.com/en-us/research/uploads/prod/2016/12/The-Byzantine-Generals.pdf"),p(t)])]),e("p",null,[e("a",_,[a("https://www.bilibili.com/video/BV1yJ411v7xV?from=search&seid=15267710534844183735"),p(t)])])])])}const w=r(l,[["render",A],["__file","7.Byzantine.html.vue"]]);export{w as default};
