import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,a as n,b as a,d as t,f as c,r as l}from"./app.31f1281d.js";const i={},u=c(`<h1 id="rabbitmq\u8FDB\u9636-\u8FC7\u671F\u65F6\u95F4ttl" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u8FDB\u9636-\u8FC7\u671F\u65F6\u95F4ttl" aria-hidden="true">#</a> RabbitMQ\u8FDB\u9636 - \u8FC7\u671F\u65F6\u95F4TTL</h1><p>Time to Live \u7B80\u79F0 TTL\uFF0C\u5373\u8FC7\u671F\u65F6\u95F4\u3002RabbitMQ \u53EF\u4EE5\u5BF9 <strong>\u6D88\u606F</strong> \u548C <strong>\u961F\u5217</strong> \u8BBE\u7F6E TTL\u3002</p><h2 id="_1-\u8BBE\u7F6E\u6D88\u606F\u7684-ttl" tabindex="-1"><a class="header-anchor" href="#_1-\u8BBE\u7F6E\u6D88\u606F\u7684-ttl" aria-hidden="true">#</a> 1. \u8BBE\u7F6E\u6D88\u606F\u7684 TTL</h2><ul><li>\u901A\u8FC7\u961F\u5217\u8BBE\u7F6E\uFF1A\u961F\u5217\u4E2D\u7684\u6D88\u606F\u90FD\u6709\u76F8\u540C\u7684\u8FC7\u671F\u65F6\u95F4</li><li>\u5BF9\u6D88\u606F\u672C\u8EAB\u8BBE\u7F6E\uFF1A\u6BCF\u6761\u6D88\u606F\u7684 TTL \u53EF\u4EE5\u4E0D\u540C</li></ul><p>\u5982\u679C\u4E24\u79CD\u4E00\u8D77\u8BBE\u7F6E\uFF0C\u5219\u4EE5\u6700\u5C0F\u7684 TTL \u751F\u6548\u3002</p><p>\u6D88\u606F\u5728\u961F\u5217\u4E2D\u751F\u5B58\u65F6\u95F4\u4E00\u65E6\u8D85\u8FC7 TTL\uFF0C\u5C31\u4F1A\u53D8\u6210\u300C\u6B7B\u4FE1\uFF08Dead Message\uFF09\u300D\uFF0C\u6D88\u8D39\u8005\u5C06\u65E0\u6CD5\u6536\u5230\u8BE5\u6D88\u606F\u3002\uFF08\u5177\u4F53\u7EC6\u8282\u540E\u7EED\u7AE0\u8282\u8BB2\u89E3\uFF09</p><h3 id="_1-1-\u5728\u961F\u5217\u4E0A\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5728\u961F\u5217\u4E0A\u8BBE\u7F6E" aria-hidden="true">#</a> 1.1 \u5728\u961F\u5217\u4E0A\u8BBE\u7F6E</h3><p>\u5B9A\u4E49\u961F\u5217\u65F6\uFF0C\u901A\u8FC7\u53C2\u6570 <code>x-message-ttl</code> \u8BBE\u7F6E\uFF0C\u5355\u4F4D\u662F <strong>\u6BEB\u79D2</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> arguments <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
arguments<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;x-message-ttl&quot;</span><span class="token punctuation">,</span> <span class="token number">6000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token constant">QUEUE_NAME</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TTL \u503C\u5F97\u51E0\u79CD\u60C5\u51B5\uFF1A</p><ul><li>\u503C\u4E3A 0 \uFF1A\u8868\u793A\uFF0C\u9664\u975E\u6B64\u65F6\u53EF\u4EE5\u76F4\u63A5\u5C06\u6D88\u606F\u6295\u9012\u5230\u6D88\u8D39\u8005\uFF0C\u5426\u5219\u8BE5\u6D88\u606F\u88AB\u7ACB\u5373\u4E22\u5F03</li><li>\u5927\u4E8E 0\uFF1A\u5C06\u5728\u8BE5\u65F6\u95F4\u5185\u8FC7\u671F\uFF0C</li></ul><h3 id="_1-2-\u5728\u6D88\u606F\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5728\u6D88\u606F\u8BBE\u7F6E" aria-hidden="true">#</a> 1.2 \u5728\u6D88\u606F\u8BBE\u7F6E</h3><p>\u901A\u8FC7 BasicProperties \u6765\u8BBE\u7F6E expiration \u5C5E\u6027\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties<span class="token punctuation">.</span>Builder</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
builder<span class="token punctuation">.</span><span class="token function">deliveryMode</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6301\u4E45\u5316\u6D88\u606F</span>
builder<span class="token punctuation">.</span><span class="token function">expiration</span><span class="token punctuation">(</span><span class="token string">&quot;60000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u8BBE\u7F6E\u6D88\u606F\u7684 ttl</span>
channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token constant">EXCHANGE_NAME</span><span class="token punctuation">,</span>
                     <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                     <span class="token boolean">true</span><span class="token punctuation">,</span>
                     builder<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                     <span class="token string">&quot;mandatory test&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u79CD\u65B9\u5F0F\u5F53\u8D85\u8FC7 TTL \u65F6\uFF0C\u5E76\u4E0D\u4F1A\u7ACB\u5373\u4ECE\u961F\u5217\u4E2D\u62B9\u53BB\uFF0C\u800C\u662F\u5728\u6295\u9012\u6D88\u8D39\u8005\u65F6\u5224\u5B9A\u7684\u3002\u800C\u5728\u961F\u5217\u4E0A\u4E00\u65E6\u8FC7\u671F\uFF0C\u5219\u7ACB\u5373\u4ECE\u961F\u5217\u4E2D\u62B9\u53BB\u3002</p><p>\u8FD9\u662F\u56E0\u4E3A\u5185\u90E8\u5B9E\u73B0\u7684\u539F\u56E0\u5BFC\u81F4\u7684\uFF1A</p><ul><li>\u961F\u5217\u4E2D\u5DF2\u8FC7\u671F\u7684\u6D88\u606F\u80AF\u5B9A\u5728\u961F\u5217\u5934\u90E8\uFF0C\u53EA\u8981\u5B9A\u671F\u4ECE\u961F\u5934\u5F00\u59CB\u626B\u63CF\u662F\u5426\u6709\u8FC7\u671F\u7684\u6D88\u606F\u5373\u53EF</li><li>\u5728\u6D88\u606F\u4E2D\u8BBE\u7F6E\u7684\u8FC7\u671F\uFF0C\u9700\u8981\u626B\u63CF\u6574\u4E2A\u961F\u5217\u3002</li></ul><blockquote><p>\u56E0\u4E3A\u7B2C\u4E00\u79CD\u65B9\u6CD5\u91CC\uFF0C\u961F\u5217\u4E2D\u5DF2\u8FC7\u671F\u7684\u6D88\u606F\u80AF\u5B9A\u5728\u961F\u5217\u5934\u90E8\uFF0CRabbitMQ\u53EA\u8981\u5B9A\u671F\u4ECE\u961F\u5934\u5F00\u59CB\u626B\u63CF\u662F\u5426\u6709\u8FC7\u671F\u6D88\u606F\u5373\u53EF\uFF0C\u800C\u7B2C\u4E8C\u79CD\u65B9\u6CD5\u91CC\uFF0C\u6BCF\u6761\u6D88\u606F\u7684\u8FC7\u671F\u65F6\u95F4\u4E0D\u540C\uFF0C\u5982\u679C\u8981\u5220\u9664\u6240\u6709\u8FC7\u671F\u6D88\u606F\uFF0C\u52BF\u5FC5\u8981\u626B\u63CF\u6574\u4E2A\u961F\u5217\uFF0C\u6240\u4EE5\u4E0D\u5982\u7B49\u5230\u6B64\u6D88\u606F\u5373\u5C06\u88AB\u6D88\u8D39\u65F6\u518D\u5224\u5B9A\u662F\u5426\u8FC7\u671F\uFF0C\u5982\u679C\u8FC7\u671F\uFF0C\u518D\u8FDB\u884C\u5220\u9664\u3002</p></blockquote><h2 id="_2-\u8BBE\u7F6E\u961F\u5217\u7684-ttl" tabindex="-1"><a class="header-anchor" href="#_2-\u8BBE\u7F6E\u961F\u5217\u7684-ttl" aria-hidden="true">#</a> 2. \u8BBE\u7F6E\u961F\u5217\u7684 TTL</h2><blockquote><p>\u6CE8\u610F\u8FD9\u662F\u961F\u5217TTL\uFF0C\u4E0A\u9762\u4E24\u4E2A\u90FD\u662F\u6D88\u606FTTL,\u53EA\u662F1.1 \u7684\u662F\u5728\u961F\u5217\u4E2D\u8BBE\u7F6E\u6D88\u606Fttl</p></blockquote><p>\u5B9A\u4E49\u961F\u5217\u65F6\u95F4\uFF0C\u901A\u8FC7\u53C2\u6570 <code>x-expires</code> \u53C2\u6570\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> arguments <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u8BE5\u53C2\u6570\u5FC5\u987B\u5927\u4E8E 0\uFF0C\u8981\u4E48\u5C31\u4E0D\u8BBE\u7F6E</span>
arguments<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;x-expires&quot;</span><span class="token punctuation">,</span> <span class="token number">6000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token constant">QUEUE_NAME</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">queueBind</span><span class="token punctuation">(</span><span class="token constant">QUEUE_NAME</span><span class="token punctuation">,</span> <span class="token constant">EXCHANGE_NAME</span><span class="token punctuation">,</span> <span class="token constant">ROUTING_KEY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u961F\u5217\u7684 TTL \u5176\u5B9E\u5C31\u662F\u5728\u58F0\u660E\uFF1A\u5F53\u961F\u5217\u7A7A\u95F2\u591A\u4E45\u65F6\uFF0C\u88AB\u81EA\u52A8\u5220\u9664\u3002</p><p><strong>\u7A7A\u95F2\u591A\u4E45\u6307\u7684\u662F</strong>\uFF1A\u961F\u5217\u4E0A\u6CA1\u6709\u4EFB\u4F55\u6D88\u8D39\u8005\u3001\u4E5F\u6CA1\u6709\u88AB\u91CD\u65B0\u58F0\u660E\u3001\u5E76\u4E14\u5728\u8FC7\u671F\u65F6\u95F4\u5185\u4E5F\u672A\u8C03\u7528\u8FC7 Basic.Get \u547D\u4EE4</p><p>\u9002\u5408\u4F7F\u7528\u7684\u573A\u666F\uFF1A\u53EF\u4EE5\u5E94\u7528\u5728\u7C7B\u4F3C RPC \u65B9\u5F0F\u7684\u56DE\u590D\u961F\u5217\uFF0C\u5728 RPC \u4E2D\uFF0C\u8BB8\u591A\u961F\u5217\u4F1A\u88AB\u521B\u5EFA\u51FA\u6765\uFF0C\u4F46\u662F\u672A\u88AB\u4F7F\u7528\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,26),r={href:"https://zq99299.github.io/mq-tutorial/rabbitmq-ac/04/02.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://hiddenpps.blog.csdn.net/article/details/54916011",target:"_blank",rel:"noopener noreferrer"},d={href:"https://juejin.cn/post/6844904002996404231",target:"_blank",rel:"noopener noreferrer"};function b(m,h){const s=l("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[n("a",r,[a("\u8FC7\u671F\u65F6\u95F4 TTL"),t(s)])]),n("p",null,[n("a",k,[a("RabbitMQ\u4E4BTTL\uFF08Time-To-Live \u8FC7\u671F\u65F6\u95F4\uFF09"),t(s)])]),n("p",null,[n("a",d,[a("RabbitMQ\u9AD8\u7EA7\u7279\u6027-TTL\u961F\u5217/\u6D88\u606F"),t(s)])])])}const f=e(i,[["render",b],["__file","rabbitmq-x-ttl.html.vue"]]);export{f as default};
