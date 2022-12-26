import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as n,b as p,d as i,f as o,r as l}from"./app.f90ce353.js";const c={},r=o(`<h1 id="springboot\u96C6\u6210rabbitmq-spring-boot-starter-amqp" tabindex="-1"><a class="header-anchor" href="#springboot\u96C6\u6210rabbitmq-spring-boot-starter-amqp" aria-hidden="true">#</a> SpringBoot\u96C6\u6210RabbitMQ\uFF08spring-boot-starter-amqp\uFF09</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p><strong>\u4E3B\u8981\u4F5C\u7528</strong>\uFF1A\u89E3\u8026</p><p><strong>\u6700\u6807\u51C6\u7684\u7528\u6CD5</strong>\uFF1A</p><ul><li>\u751F\u4EA7\u8005\u751F\u4EA7\u6D88\u606F\u961F\u5217</li><li>\u6D88\u8D39\u8005\u4ECE\u961F\u5217\u4E2D\u62FF\u53D6\u6D88\u606F\u5E76\u5904\u7406</li></ul><p>\u751F\u4EA7\u8005\u4E0D\u7528\u5173\u7CFB\u662F\u8C01\u6765\u6D88\u8D39\uFF0C\u6D88\u8D39\u8005\u4E0D\u7528\u5173\u5FC3\u8C01\u5728\u751F\u4EA7\u6D88\u606F\uFF0C\u4ECE\u800C\u8FBE\u5230\u89E3\u8026\u7684\u76EE\u7684</p><p>**\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u7684\u5E94\u7528\uFF1A**\u5206\u5E03\u5F0F\u4E8B\u52A1\u7684\u652F\u6301\uFF0CRPC\u7684\u8C03\u7528\u7B49\u7B49</p><h2 id="_2-spring-boot-\u96C6\u6210-rabbitmq" tabindex="-1"><a class="header-anchor" href="#_2-spring-boot-\u96C6\u6210-rabbitmq" aria-hidden="true">#</a> 2. Spring Boot \u96C6\u6210 RabbitMQ</h2><p>Spring Boot \u96C6\u6210 RabbitMQ \u975E\u5E38\u7B80\u5355\uFF0C\u5982\u679C\u53EA\u662F\u7B80\u5355\u7684\u4F7F\u7528\u914D\u7F6E\u975E\u5E38\u5C11\uFF0CSpring Boot \u63D0\u4F9B\u4E86<code>spring-boot-starter-amqp</code> \u9879\u76EE\u5BF9\u6D88\u606F\u5404\u79CD\u652F\u6301\u3002</p><h3 id="_2-1-\u7B80\u5355\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-1-\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a> 2.1 \u7B80\u5355\u4F7F\u7528</h3><p>1\u3001\u914D\u7F6E Pom \u5305\uFF0C\u4E3B\u8981\u662F\u6DFB\u52A0 <code>spring-boot-starter-amqp</code> \u7684\u652F\u6301</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-amqp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001\u914D\u7F6E\u6587\u4EF6</p><p>\u914D\u7F6E RabbitMQ \u7684\u5B89\u88C5\u5730\u5740\u3001\u7AEF\u53E3\u4EE5\u53CA\u8D26\u6237\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>spring.application.name=Spring-boot-rabbitmq
spring.rabbitmq.host=120.79.200.111
spring.rabbitmq.port=5672
spring.rabbitmq.username=febs
spring.rabbitmq.password=123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3001\u961F\u5217\u914D\u7F6E</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RabbitConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Queue</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4\u3001\u53D1\u9001\u8005</p><p>rabbitTemplate \u662F Spring Boot \u63D0\u4F9B\u7684\u9ED8\u8BA4\u5B9E\u73B0</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloSender</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Autowired</span>
	<span class="token keyword">private</span> <span class="token class-name">AmqpTemplate</span> rabbitTemplate<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">String</span> context <span class="token operator">=</span> <span class="token string">&quot;hello &quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Sender : &quot;</span> <span class="token operator">+</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5\u3001\u63A5\u6536\u8005</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queues <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloReceiver</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RabbitHandler</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">String</span> hello<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Receiver  : &quot;</span> <span class="token operator">+</span> hello<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6\u3001\u6D4B\u8BD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@RunWith(SpringRunner.class)
@SpringBootTest
public class RabbitMqHelloTest {

	@Autowired
	private HelloSender helloSender;

	@Test
	public void hello() throws Exception {
		helloSender.send();
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F\uFF0C\u53D1\u9001\u8005\u548C\u63A5\u6536\u8005\u7684 queue name \u5FC5\u987B\u4E00\u81F4\uFF0C\u4E0D\u7136\u4E0D\u80FD\u63A5\u6536</p></blockquote><p>\u591A\u5BF9\u591A\u53C2\u8003\u4EE5\u4E0B\u6587\u7AE0</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,27),u={href:"http://www.ityouknow.com/springboot/2016/11/30/spring-boot-rabbitMQ.html",target:"_blank",rel:"noopener noreferrer"};function d(v,b){const s=l("ExternalLinkIcon");return e(),t("div",null,[r,n("p",null,[n("a",u,[p("Spring Boot(\u516B)\uFF1ARabbitMQ \u8BE6\u89E3"),i(s)])])])}const g=a(c,[["render",d],["__file","rabbitmq-y-action-springboot.html.vue"]]);export{g as default};
