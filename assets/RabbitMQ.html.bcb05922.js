import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c,a as n,b as s,d as e,e as t,r as p}from"./app.48f1d0d6.js";const o={},u=t(`<h2 id="rabbit-mq" tabindex="-1"><a class="header-anchor" href="#rabbit-mq" aria-hidden="true">#</a> Rabbit MQ</h2><p>主要解决的系统中的：异步，解耦，缓冲，消息分发。</p><h2 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字" aria-hidden="true">#</a> 关键字</h2><ul><li><strong>Producer</strong>: 消息发送者，就是投递消息的程序。</li><li><strong>RabbitMQ</strong>: <ul><li>Vhost: 虚拟主机，相当于分组，每个vhost下数据是隔离的</li><li>Exchange: 消息交换机，接收消息，本根据RoutingKey分发消息 <ul><li>headers：消息头类型 路由器，内部应用</li><li>direct：精准匹配类型 路由器</li><li>topic：主题匹配类型 路由器，支持正则 模糊匹配</li><li>fanout：广播类型 路由器，RoutingKey无效</li></ul></li><li>RoutingKey: 路由规则，exchange根据这个关键字进行消息投递。</li><li>Queue: 队列，用于存储消息</li><li>Binding：绑定，它的作用就是把exchange和queue按照路由规则绑定起来。</li><li>Broker：即消息队列服务器实体</li><li>channel：消息通道，在客户端的每个连接里，可建立多个channel，每个channel代表一个会话任务。</li></ul></li><li><strong>Consumer</strong>: 消息消费者，就是接受消息的程序。</li></ul><h2 id="基本安装" tabindex="-1"><a class="header-anchor" href="#基本安装" aria-hidden="true">#</a> 基本安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> rabbitmq-server
<span class="token comment">#enable management UI</span>
rabbitmq-plugins <span class="token builtin class-name">enable</span> rabbitmq_management

systemctl restart rabbitmq-server

rabbitmqctl list_users
rabbitmqctl add_user username password
rabbitmqctl change_password username newpassword
rabbitmqctl delete_user username

rabbitmqctl list_permissions
rabbitmqctl set_permissions <span class="token parameter variable">-p</span> <span class="token string">&quot;/&quot;</span> username <span class="token string">&quot;.*&quot;</span> <span class="token string">&quot;.*&quot;</span> <span class="token string">&quot;.*&quot;</span>
rabbitmqctl set_permissions <span class="token parameter variable">-p</span> /vhost1  username <span class="token string">&#39;conf&#39;</span> <span class="token string">&#39;write&#39;</span> <span class="token string">&#39;read&#39;</span>
rabbitmqctl set_user_tags username administrator
  <span class="token comment"># Tag: none、management、policymaker、monitoring、administrator</span>


http://localhost:15672/
guest/guest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="消息确认-ack-机制" tabindex="-1"><a class="header-anchor" href="#消息确认-ack-机制" aria-hidden="true">#</a> 消息确认 ACK 机制</h2><ul><li>消息发送确认</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">rabbitmq</span><span class="token punctuation">:</span>
    <span class="token key atrule">publisher-confirms</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">publisher-returns</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RebbitConfig</span> <span class="token keyword">implements</span> <span class="token class-name">RabbitTemplate<span class="token punctuation">.</span>ReturnCallback</span><span class="token punctuation">,</span> <span class="token class-name">RabbitTemplate<span class="token punctuation">.</span>ConfirmCallback</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RabbitTemplate</span> rabbitTemplate<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@PostConstruct</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        rabbitTemplate<span class="token punctuation">.</span><span class="token function">setReturnCallback</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//消息从交换器发送到对应队列失败时触发</span>
        rabbitTemplate<span class="token punctuation">.</span><span class="token function">setConfirmCallback</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//消息发送到交换器Exchange后触发回调</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">returnedMessage</span><span class="token punctuation">(</span><span class="token class-name">Message</span> message<span class="token punctuation">,</span> <span class="token keyword">int</span> replyCode<span class="token punctuation">,</span> <span class="token class-name">String</span> replyText<span class="token punctuation">,</span> <span class="token class-name">String</span> exchange<span class="token punctuation">,</span> <span class="token class-name">String</span> routingKey<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//TODO</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">confirm</span><span class="token punctuation">(</span><span class="token class-name">CorrelationData</span> correlationData<span class="token punctuation">,</span> <span class="token keyword">boolean</span> ack<span class="token punctuation">,</span> <span class="token class-name">String</span> cause<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//TODO</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>消息送达确认</li></ul><p>AcknowledgeMode.NONE：不确认<br> AcknowledgeMode.AUTO：自动确认<br> AcknowledgeMode.MANUAL：手动确认</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">rabbitmq</span><span class="token punctuation">:</span>
    <span class="token key atrule">listener</span><span class="token punctuation">:</span>
      <span class="token key atrule">direct</span><span class="token punctuation">:</span>
        <span class="token key atrule">acknowledge-mode</span><span class="token punctuation">:</span> manual
      <span class="token key atrule">simple</span><span class="token punctuation">:</span>
        <span class="token key atrule">acknowledge-mode</span><span class="token punctuation">:</span> manual
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Producer Client</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queues <span class="token operator">=</span> <span class="token class-name">CustomCallbackVO</span><span class="token punctuation">.</span><span class="token constant">MQ_ROUTER_KEY</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Async</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">engineCallback</span><span class="token punctuation">(</span><span class="token class-name">Channel</span> channel
            <span class="token punctuation">,</span> <span class="token annotation punctuation">@Header</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token class-name">AmqpHeaders</span><span class="token punctuation">.</span><span class="token constant">DELIVERY_TAG</span><span class="token punctuation">)</span> <span class="token keyword">long</span> deliveryTag
            <span class="token punctuation">,</span> <span class="token class-name">CustomCallbackVO</span> vo<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
        * 可能会出现死循环：比如：一直无法正常处理抛出异常。
        * 可以考虑：
        * 1、异常类型来选择是否重新放入队列
        * 2、先成功确认，然后通过channel.basicPublish()重新发布这个消息，将消息放置队尾
        */</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>调用处理逻辑，正常处理<span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            channel<span class="token punctuation">.</span><span class="token function">basicAck</span><span class="token punctuation">(</span>deliveryTag<span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            channel<span class="token punctuation">.</span><span class="token function">basicReject</span><span class="token punctuation">(</span>deliveryTag<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="消息持久化" tabindex="-1"><a class="header-anchor" href="#消息持久化" aria-hidden="true">#</a> 消息持久化</h2><p>需要在崩溃的 RabbitMQ 中恢复消息，需要做消息持久化 需要分别持久化：交换器；队列；消息</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>channel<span class="token punctuation">.</span><span class="token function">exchangeDeclare</span><span class="token punctuation">(</span><span class="token constant">EXCHANGE_NAME</span><span class="token punctuation">,</span> <span class="token constant">EXCHANGE_TYPE</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token constant">QUEUE_NAME</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> queue_name<span class="token punctuation">,</span> <span class="token class-name">MessageProperties</span><span class="token punctuation">.</span><span class="token constant">PERSISTENT_TEXT_PLAIN</span><span class="token punctuation">,</span> message<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>org.springframework.boot:spring-boot-starter-amqp</code> 默认使用 rabbit</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">new</span> <span class="token class-name">TopicExchange</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> durable<span class="token punctuation">,</span> autoDelete<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> durable<span class="token punctuation">,</span> exclusive<span class="token punctuation">,</span> autoDelete<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Consumer client</span>
<span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>
            bindings <span class="token operator">=</span> <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span>
                    value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;zzz-queue&quot;</span><span class="token punctuation">,</span> durable <span class="token operator">=</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    exchange <span class="token operator">=</span> <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;zzz-exchange&quot;</span><span class="token punctuation">,</span> durable <span class="token operator">=</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token string">&quot;topic&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    key <span class="token operator">=</span> <span class="token string">&quot;routingkey-zzz&quot;</span>
            <span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
<span class="token annotation punctuation">@RabbitHandler</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">consumer</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Payload</span> <span class="token class-name">String</span> msg<span class="token punctuation">,</span> <span class="token class-name">Channel</span> channel<span class="token punctuation">,</span> <span class="token annotation punctuation">@Headers</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> headers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Long</span> tag <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Long</span><span class="token punctuation">)</span> headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">AmqpHeaders</span><span class="token punctuation">.</span><span class="token constant">DELIVERY_TAG</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高可用" tabindex="-1"><a class="header-anchor" href="#高可用" aria-hidden="true">#</a> 高可用</h2><ul><li>普通模式 <blockquote><p>默认的集群模式，以两个节点（rabbit01、rabbit02）为例来进行说明。对于 Queue 来说，消息实体只存在于其中一个节点 rabbit01（或者 rabbit02），rabbit01 和 rabbit02 两个节点仅有相同的元数据，即队列的结构。当消息进入 rabbit01 节点的 Queue 后，consumer 从 rabbit02 节点消费时，RabbitMQ 会临时在 rabbit01、rabbit02 间进行消息传输，把 A 中的消息实体取出并经过 B 发送给 consumer。所以 consumer 应尽量连接每一个节点，从中取消息。即对于同一个逻辑队列，要在多个节点建立物理 Queue。否则无论 consumer 连 rabbit01 或 rabbit02，出口总在 rabbit01，会产生瓶颈。当 rabbit01 节点故障后，rabbit02 节点无法取到 rabbit01 节点中还未消费的消息实体。如果做了消息持久化，那么得等 rabbit01 节点恢复，然后才可被消费；如果没有持久化的话，就会产生消息丢失的现象。</p></blockquote></li><li>镜像模式 <blockquote><p>将需要消费的队列变为镜像队列，存在于多个节点，这样就可以实现 RabbitMQ 的 HA 高可用性。作用就是消息实体会主动在镜像节点之间实现同步，而不是像普通模式那样，在 consumer 消费数据时临时读取。缺点就是，集群内部的同步通讯会占用大量的网络带宽。</p></blockquote></li></ul>`,22),r={href:"https://www.rabbitmq.com/ha.html",target:"_blank",rel:"noopener noreferrer"},d=t(`<p>server1</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># /etc/hosts
192.168.1.101 server1
192.168.1.102 server2

# /etc/rabbitmq/rabbitmq-env.conf
NODENAME=rabbit@server1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>server2</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># /etc/hosts
192.168.1.101 server1
192.168.1.102 server2

# /etc/rabbitmq/rabbitmq-env.conf
NODENAME=rabbit@server2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>z@zzz:~$ hostnamectl status
   Static hostname: zzz
         Icon name: computer-laptop
           Chassis: laptop
        Machine ID:
           Boot ID:
  Operating System: Ubuntu 18.04.3 LTS
            Kernel: Linux 4.15.0-71-generic
      Architecture: x86-64
z@zzz:~$ hostnamectl --static set-hostname node1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改所有节点的<code>/var/lib/rabbitmq/.erlang.cookie</code>内容一致。这是 RabbitMQ 集群通信的验证机制<br> 或创建 cookie 文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir ~/.erlang.cookie
echo &#39;SMQBUJBXOKFIOYUTPUDM&#39; &gt; ~/.erlang.cookie
chmod 400 ~/.erlang.cookie

chmod rabbitmq:rabbitmq .erlang.cookie
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rabbitmqctl stop
#后台启动服务
rabbitmq-server -detached

rabbitmqctl -n rabbit@server2 stop_app

# 重置元数据、集群配置等信息
#rabbitmqctl -n rabbit@server2 reset

# cluster2 加入到 server1 的集群中
# ram表示server2为RAM节点 默认为disc
rabbitmqctl -n rabbit@server2 join_cluster rabbit@server1 --ram

rabbitmqctl -n rabbit@server2 start_app

#查看集群状态
rabbitmqctl cluster_status

开启镜像集群策略
rabbitmqctl set_policy   ha-all &quot;^&quot; &#39;{&quot;ha-mode&quot;:&quot;all&quot;}&#39;
rabbitmqctl set_policy &lt;name&gt; [-p &lt;vhost&gt;] &lt;pattern&gt; &lt;definition&gt; [--apply-to &lt;apply-to&gt;]
    name: 策略名称
    vhost: 指定vhost, 默认值 /
    pattern: 需要镜像的正则
    definition:
        ha-mode: 指明镜像队列的模式，有效值为：
            all     表示在集群所有的节点上进行镜像，无需设置ha-params
            exactly 表示在指定个数的节点上进行镜像，节点的个数由ha-params指定
            nodes   表示在指定的节点上进行镜像，节点名称通过ha-params指定
        ha-params: ha-mode 模式需要用到的参数
        ha-sync-mode: 镜像队列中消息的同步方式，有效值为automatic，manually
    apply-to: 可选值3个，默认all
        exchanges 表示镜像 exchange
        queues    表示镜像 queue
        all       表示镜像 exchange和queue


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>RAM node：内存节点将所有的队列、交换机、绑定、用户、权限和 vhost 的元数据定义存储在内存中，好处是可以使得像交换机和队列声明等操作更加的快速。</li><li>Disk node：将元数据存储在磁盘中，单节点系统只允许磁盘类型的节点，防止重启 RabbitMQ 的时候，丢失系统的配置信息。<br> 推荐 2 RAM 1 DISC 集群搭建方式</li></ul><h3 id="spring-boot" tabindex="-1"><a class="header-anchor" href="#spring-boot" aria-hidden="true">#</a> Spring boot</h3><p>如果用 spring 的其实也可以直接配置</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">rabbitmq</span><span class="token punctuation">:</span>
    <span class="token key atrule">addresses</span><span class="token punctuation">:</span> amqp<span class="token punctuation">:</span>//username<span class="token punctuation">:</span>password@server1<span class="token punctuation">:</span><span class="token number">5672</span><span class="token punctuation">,</span>amqp<span class="token punctuation">:</span>//username<span class="token punctuation">:</span>password@server2<span class="token punctuation">:</span><span class="token number">5672</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">5672</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> your_username <span class="token comment">#用户名密码一样的话也可以在这配置(理论上是一样的，因为集群完后用户也会同步，所以在大多数情况下，addresses 只需要写ip地址用逗号分隔即可)</span>
    <span class="token key atrule">password</span><span class="token punctuation">:</span> your_password

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很多地方文档写的不是很清楚或不全，其实对于这些优秀的开源项目来说，源码就是最好的文档<br> 详细配置可以看<code>org.springframework.boot.autoconfigure.amqp.RabbitProperties.java</code></p><h3 id="haproxy" tabindex="-1"><a class="header-anchor" href="#haproxy" aria-hidden="true">#</a> HAProxy</h3><p>/etc/haproxy/haproxy.cfg</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>global
    log     127.0.0.1  local0 info
    log     127.0.0.1  local1 notice
    daemon
    maxconn 4096

defaults
    log     global
    mode    tcp
    option  tcplog
    option  dontlognull
    retries 3
    option  abortonclose
    maxconn 4096
    timeout connect  5000ms
    timeout client  3000ms
    timeout server  3000ms
    balance roundrobin

listen private_monitoring
    bind    0.0.0.0:8100
    mode    http
    option  httplog
    stats   refresh  5s
    stats   uri  /stats
    stats   realm   Haproxy
    stats   auth  admin:admin

listen rabbitmq_admin
    bind    0.0.0.0:8102
    server  server1 server1:15672
    server  server2 server2:15672

listen rabbitmq_cluster
    bind    0.0.0.0:8101
    mode    tcp
    option  tcplog
    balance roundrobin
    timeout client  3h
    timeout server  3h
    server  server1  server1:5672  check  inter  5000  rise  2  fall  3
    server  server2  server2:5672  check  inter  5000  rise  2  fall  3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),v={href:"http://localhost:8100/stats",target:"_blank",rel:"noopener noreferrer"},b={href:"http://localhost:8101",target:"_blank",rel:"noopener noreferrer"},m={href:"http://localhost:8102",target:"_blank",rel:"noopener noreferrer"};function k(g,h){const a=p("ExternalLinkIcon");return l(),c("div",null,[u,n("p",null,[s("Official Docs "),n("a",r,[s("Highly Available (Mirrored) Queues"),e(a)])]),d,n("ul",null,[n("li",null,[n("a",v,[s("http://localhost:8100/stats"),e(a)]),s(" HAProxy 负载均衡信息地址，账号密码：admin/admin。")]),n("li",null,[n("a",b,[s("http://localhost:8101"),e(a)]),s(" RabbitMQ Server Web 管理界面")]),n("li",null,[n("a",m,[s("http://localhost:8102"),e(a)]),s(" RabbitMQ Server 服务地址")])])])}const x=i(o,[["render",k],["__file","RabbitMQ.html.vue"]]);export{x as default};
