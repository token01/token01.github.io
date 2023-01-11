import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as n,b as p,d as o,f as c,r as l}from"./app.ec51a1ed.js";const i={},u=c(`<h1 id="rabbitmq\u7684\u6D88\u8D39\u7AEF\u81EA\u5B9A\u4E49\u76D1\u542C" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u7684\u6D88\u8D39\u7AEF\u81EA\u5B9A\u4E49\u76D1\u542C" aria-hidden="true">#</a> RabbitMQ\u7684\u6D88\u8D39\u7AEF\u81EA\u5B9A\u4E49\u76D1\u542C</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u6211\u4EEC\u4E00\u822C\u5728\u4EE3\u7801\u4E2D\u7F16\u5199while\u5FAA\u73AF\uFF0C\u8FDB\u884Cconsumer.nextDelivery\u65B9\u6CD5\u8FDB\u884C\u83B7\u53D6\u4E0B\u4E00\u6761\u6D88\u606F\uFF0C\u7136\u540E\u8FDB\u884C\u6D88\u8D39\u5904\u7406\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token comment">// \u63A5\u6536\u6D88\u606F</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">QueueingConsumer<span class="token punctuation">.</span>Delivery</span> delivery <span class="token operator">=</span> consumer<span class="token punctuation">.</span><span class="token function">nextDelivery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>delivery<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684Consumer\u66F4\u52A0\u7684\u65B9\u4FBF\uFF0C\u89E3\u8026\u6027\u66F4\u5F3A\uFF0C\u4E5F\u5728\u5B9E\u9645\u5DE5\u4F5C\u4E2D\u6700\u5E38\u7528\u3002</p><h2 id="_2-\u4EE3\u7801\u6F14\u793A" tabindex="-1"><a class="header-anchor" href="#_2-\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a> 2. \u4EE3\u7801\u6F14\u793A</h2><h3 id="_2-1-\u751F\u4EA7\u7AEF" tabindex="-1"><a class="header-anchor" href="#_2-1-\u751F\u4EA7\u7AEF" aria-hidden="true">#</a> <strong>2.1 \u751F\u4EA7\u7AEF</strong></h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>kaven<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>api<span class="token punctuation">.</span>consumer</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeoutException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Producer</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u81EA\u5DF1\u670D\u52A1\u5668\u7684IP</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> ip <span class="token operator">=</span> <span class="token string">&quot;IP&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// RabbitMQ\u542F\u52A8\u7684\u9ED8\u8BA4\u7AEF\u53E3\uFF0C\u4E5F\u662F\u5E94\u7528\u7A0B\u5E8F\u8FDB\u884C\u8FDE\u63A5RabbitMQ\u7684\u7AEF\u53E3</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> port <span class="token operator">=</span> <span class="token number">5672</span><span class="token punctuation">;</span>
    <span class="token comment">// RabbitMQ\u6709\u4E00\u4E2A &quot;/&quot; \u7684\u865A\u62DF\u4E3B\u673A</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> virtualHost <span class="token operator">=</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">// default exchange</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> exchange <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// default exchange \u7684\u8DEF\u7531\u89C4\u5219\uFF1A routingKey\uFF08test\uFF09 \u5C06\u5339\u914D\u540C\u540D\u7684 queue(test)</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> routingKey <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">TimeoutException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1 \u521B\u5EFAConnectionFactory</span>
        <span class="token class-name">ConnectionFactory</span> connectionFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setVirtualHost</span><span class="token punctuation">(</span>virtualHost<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2 \u521B\u5EFAConnection</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> connectionFactory<span class="token punctuation">.</span><span class="token function">newConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 3 \u521B\u5EFAChannel</span>
        <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// 4 \u53D1\u9001\u6D88\u606F</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">&quot;RabbitMQ: consumer message&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">;</span>
            channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span>exchange <span class="token punctuation">,</span> routingKey <span class="token punctuation">,</span> <span class="token keyword">null</span> <span class="token punctuation">,</span> msg<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 5 \u5173\u95ED\u8FDE\u63A5</span>
        channel<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u6D88\u8D39\u7AEF" tabindex="-1"><a class="header-anchor" href="#_2-2-\u6D88\u8D39\u7AEF" aria-hidden="true">#</a> <strong>2.2 \u6D88\u8D39\u7AEF</strong></h3><p>\u91CD\u70B9\u662F<code>MyConsumer</code>\u7C7B\uFF0C\u5B83\u6765\u7EE7\u627F<code>DefaultConsumer</code>\u7C7B\uFF0C\u5B9E\u73B0\u6D88\u8D39\u7AEF\u81EA\u5B9A\u4E49\u76D1\u542C\u7684\u903B\u8F91\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>kaven<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>api<span class="token punctuation">.</span>consumer</span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">AMQP</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">Channel</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">DefaultConsumer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">Envelope</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyConsumer</span> <span class="token keyword">extends</span> <span class="token class-name">DefaultConsumer</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">MyConsumer</span><span class="token punctuation">(</span><span class="token class-name">Channel</span> channel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleDelivery</span><span class="token punctuation">(</span><span class="token class-name">String</span> consumerTag<span class="token punctuation">,</span> <span class="token class-name">Envelope</span> envelope<span class="token punctuation">,</span>
                               <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties</span> properties<span class="token punctuation">,</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> body<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------ consumer message -----------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;consumerTag\uFF1A&quot;</span> <span class="token operator">+</span> consumerTag<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;envelope\uFF1A&quot;</span> <span class="token operator">+</span> envelope<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;properties\uFF1A&quot;</span> <span class="token operator">+</span> properties<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;body\uFF1A&quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>kaven<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>api<span class="token punctuation">.</span>consumer</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">Channel</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">ConnectionFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">QueueingConsumer</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeoutException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Consumer</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u81EA\u5DF1\u670D\u52A1\u5668\u7684IP</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> ip <span class="token operator">=</span> <span class="token string">&quot;IP&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// RabbitMQ\u542F\u52A8\u7684\u9ED8\u8BA4\u7AEF\u53E3\uFF0C\u4E5F\u662F\u5E94\u7528\u7A0B\u5E8F\u8FDB\u884C\u8FDE\u63A5RabbitMQ\u7684\u7AEF\u53E3</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> port <span class="token operator">=</span> <span class="token number">5672</span><span class="token punctuation">;</span>
    <span class="token comment">// RabbitMQ\u6709\u4E00\u4E2A &quot;/&quot; \u7684\u865A\u62DF\u4E3B\u673A</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> virtualHost <span class="token operator">=</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">// default exchange</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> exchange <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// \u961F\u5217\u540D</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> queueName <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">TimeoutException</span><span class="token punctuation">,</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1 \u521B\u5EFAConnectionFactory</span>
        <span class="token class-name">ConnectionFactory</span> connectionFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setVirtualHost</span><span class="token punctuation">(</span>virtualHost<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2 \u521B\u5EFAConnection</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> connectionFactory<span class="token punctuation">.</span><span class="token function">newConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 3 \u521B\u5EFAChannel</span>
        <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 4 \u521B\u5EFAQueue</span>
        channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span>queueName <span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 5 \u6D88\u8D39\u7AEF\u5F00\u59CB\u6D88\u8D39\u4FE1\u606F</span>
        channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span>queueName <span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">MyConsumer</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_2-3-\u6D4B\u8BD5" aria-hidden="true">#</a> <strong>2.3 \u6D4B\u8BD5</strong></h3><p>\u542F\u52A8\u751F\u4EA7\u7AEF\u548C\u6D88\u8D39\u7AEF\uFF0C\u6D88\u8D39\u7AEF\u53EF\u4EE5\u63A5\u6536\u5230\u6D88\u606F\uFF0C\u6D88\u606F\u5728<code>body</code>\u5C5E\u6027\u91CC\u9762\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>------------ consumer message -----------
consumerTag\uFF1Aamq.ctag-CebIvWwveIxajYqFBqoZmA
envelope\uFF1AEnvelope(deliveryTag=1, redeliver=false, exchange=, routingKey=test)
properties\uFF1A#contentHeader&lt;basic&gt;(content-type=null, content-encoding=null, headers=null, delivery-mode=null, priority=null, correlation-id=null, reply-to=null, expiration=null, message-id=null, timestamp=null, type=null, user-id=null, app-id=null, cluster-id=null)
body\uFF1ARabbitMQ: consumer message0
------------ consumer message -----------
consumerTag\uFF1Aamq.ctag-CebIvWwveIxajYqFBqoZmA
envelope\uFF1AEnvelope(deliveryTag=2, redeliver=false, exchange=, routingKey=test)
properties\uFF1A#contentHeader&lt;basic&gt;(content-type=null, content-encoding=null, headers=null, delivery-mode=null, priority=null, correlation-id=null, reply-to=null, expiration=null, message-id=null, timestamp=null, type=null, user-id=null, app-id=null, cluster-id=null)
body\uFF1ARabbitMQ: consumer message1
------------ consumer message -----------
consumerTag\uFF1Aamq.ctag-CebIvWwveIxajYqFBqoZmA
envelope\uFF1AEnvelope(deliveryTag=3, redeliver=false, exchange=, routingKey=test)
properties\uFF1A#contentHeader&lt;basic&gt;(content-type=null, content-encoding=null, headers=null, delivery-mode=null, priority=null, correlation-id=null, reply-to=null, expiration=null, message-id=null, timestamp=null, type=null, user-id=null, app-id=null, cluster-id=null)
body\uFF1ARabbitMQ: consumer message2
------------ consumer message -----------
consumerTag\uFF1Aamq.ctag-CebIvWwveIxajYqFBqoZmA
envelope\uFF1AEnvelope(deliveryTag=4, redeliver=false, exchange=, routingKey=test)
properties\uFF1A#contentHeader&lt;basic&gt;(content-type=null, content-encoding=null, headers=null, delivery-mode=null, priority=null, correlation-id=null, reply-to=null, expiration=null, message-id=null, timestamp=null, type=null, user-id=null, app-id=null, cluster-id=null)
body\uFF1ARabbitMQ: consumer message3
------------ consumer message -----------
consumerTag\uFF1Aamq.ctag-CebIvWwveIxajYqFBqoZmA
envelope\uFF1AEnvelope(deliveryTag=5, redeliver=false, exchange=, routingKey=test)
properties\uFF1A#contentHeader&lt;basic&gt;(content-type=null, content-encoding=null, headers=null, delivery-mode=null, priority=null, correlation-id=null, reply-to=null, expiration=null, message-id=null, timestamp=null, type=null, user-id=null, app-id=null, cluster-id=null)
body\uFF1ARabbitMQ: consumer message4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>RabbitMQ Management</code>\u4E5F\u6709\u53CD\u5E94\u3002 <img src="http://img.voycn.com/images/2020/02/31f33511e86c629b0297932f38b20a06.png" alt="Java\u521D\u8BC6RabbitMQ\u4E00\u6D88\u8D39\u7AEF\u81EA\u5B9A\u4E49\u76D1\u542C"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,16),r={href:"http://www.voycn.com/article/javachushirabbitmqyixiaofeiduanzidingyijianting",target:"_blank",rel:"noopener noreferrer"};function k(d,m){const s=l("ExternalLinkIcon");return e(),t("div",null,[u,n("p",null,[n("a",r,[p("Java\u521D\u8BC6RabbitMQ\u4E00\u6D88\u8D39\u7AEF\u81EA\u5B9A\u4E49\u76D1\u542C"),o(s)])])])}const y=a(i,[["render",k],["__file","rabbitmq-i-listener.html.vue"]]);export{y as default};
