import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,a as n,b as p,d as o,f as c,r as l}from"./app.abe539cb.js";const u={},i=c(`<h1 id="rabbitmq\u8FDB\u9636-\u6B7B\u4FE1\u961F\u5217dlx" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u8FDB\u9636-\u6B7B\u4FE1\u961F\u5217dlx" aria-hidden="true">#</a> RabbitMQ\u8FDB\u9636 - \u6B7B\u4FE1\u961F\u5217DLX</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>Dead Letter Exchange \u7B80\u79F0 DLX\uFF0C\u53EF\u79F0\u4E3A\u6B7B\u4FE1\u4EA4\u6362\u5668\uFF0C\u5F53\u6D88\u606F\u5728\u4E00\u4E2A <strong>\u961F\u5217\u4E2D\u53D8\u6210\u6B7B\u4FE1\uFF08dead message\uFF09<strong>\u4E4B\u540E\uFF0C\u5B83\u80FD</strong>\u88AB\u91CD\u65B0\u53D1\u9001\u5230\u53E6\u4E00\u4E2A\u4EA4\u6362\u5668\u4E2D</strong>\uFF0C\u8FD9\u4E2A\u4EA4\u6362\u5668\u5C31\u662F <strong>DLX</strong>\uFF0C\u7ED1\u5B9A\u5728 DLX \u4E0A\u7684\u961F\u5217\u5C31\u79F0\u4E3A <strong>\u6B7B\u4FE1\u961F\u5217</strong>\u3002</p><p>\u6D88\u606F\u53D8\u6210\u6B7B\u4FE1\u4E00\u822C\u6709\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5\uFF1A</p><ul><li><p>\u6D88\u606F\u88AB\u62D2\u7EDD\uFF0C\u5E76\u8BBE\u7F6E requeue \u53C2\u6570\u4E3A false</p><p><code>Basic.Reject \u6216 Basic.Nack</code></p></li><li><p>\u6D88\u606F\u8FC7\u671F</p></li><li><p>\u961F\u5217\u8FBE\u5230\u6700\u5927\u957F\u5EA6</p></li></ul><h2 id="_2-\u4E3A\u4EC0\u4E48\u9700\u8981\u6B7B\u4FE1\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3A\u4EC0\u4E48\u9700\u8981\u6B7B\u4FE1\u961F\u5217" aria-hidden="true">#</a> 2. \u4E3A\u4EC0\u4E48\u9700\u8981\u6B7B\u4FE1\u961F\u5217</h2><p>\u4E3A\u4E86\u4FDD\u8BC1\u8BA2\u5355\u4E1A\u52A1\u7684\u6D88\u606F\u6570\u636E\u4E0D\u4E22\u5931\uFF0C\u9700\u8981\u4F7F\u7528\u5230RabbitMQ\u7684\u6B7B\u4FE1\u961F\u5217\u673A\u5236\uFF0C\u5F53\u6D88\u606F\u6D88\u8D39\u53D1\u751F\u5F02\u5E38\u65F6\uFF0C\u5C06\u6D88\u606F\u6295\u5165\u6B7B\u4FE1\u961F\u5217\u4E2D\u3002</p><h2 id="_3-\u5982\u4F55\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-\u5982\u4F55\u8BBE\u7F6E" aria-hidden="true">#</a> 3. \u5982\u4F55\u8BBE\u7F6E</h2><p>DLX \u662F\u4E00\u4E2A\u666E\u901A\u7684\u4EA4\u6362\u5668\uFF0C\u53EF\u4EE5\u5728\u4EFB\u4F55\u961F\u5217\u4E0A\u8BBE\u7F6E\uFF0C\u5F53\u6B7B\u4FE1\u6D88\u606F\u51FA\u73B0\u65F6\uFF0CRabbitMQ \u81EA\u52A8\u5C06\u8FD9\u4E2A <strong>\u6D88\u606F\u91CD\u65B0\u53D1\u5E03\u5230\u8BBE\u7F6E\u7684 DLX \u4E0A</strong>\uFF0C\u4ECE\u800C\u88AB\u8DEF\u7531\u5230\u53E6\u4E00\u4E2A\u961F\u5217\uFF0C\u5373 <strong>\u6B7B\u4FE1\u961F\u5217</strong></p><p>\u5728\u961F\u5217\u5B9A\u4E49\u65F6\uFF0C\u4F7F\u7528 <code>x-dead-letter-exchange</code> \u53C2\u6570\u6765\u4E3A\u8FD9\u4E2A\u961F\u5217\u6DFB\u52A0 DLX</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5B9A\u4E49 dlx</span>
channel<span class="token punctuation">.</span><span class="token function">exchangeDeclare</span><span class="token punctuation">(</span><span class="token string">&quot;exchange.dlx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;direct&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5B9A\u4E49 dlx queue</span>
channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token string">&quot;queue.dlx&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">queueBind</span><span class="token punctuation">(</span><span class="token string">&quot;queue.dlx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;exchange.dlx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dlx-routing-key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B9A\u4E49\u6B63\u5E38\u7684\u4EA4\u6362\u5668</span>
channel<span class="token punctuation">.</span><span class="token function">exchangeDeclare</span><span class="token punctuation">(</span><span class="token string">&quot;exchange.normal&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;fanout&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">final</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> arguments <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5B9A\u4E49\u961F\u5217\u4E8B\uFF0C\u901A\u8FC7\u8BE5\u5C5E\u6027\u7ED9\u8BE5\u961F\u5217\u8BBE\u7F6E DLX</span>
arguments<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;x-dead-letter-exchange&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;exchange.dlx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u8FD8\u53EF\u4EE5\u901A\u8FC7\u8BE5\u5C5E\u6027\u91CD\u65B0\u6D88\u606F\u7684\u8DEF\u7531\u952E\uFF0C\u5426\u5219\u4F7F\u7528\u539F\u6D88\u606F\u7684\u8DEF\u7531\u952E</span>
arguments<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;x-dead-letter-routing-key&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dlx-routing-key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u8BBE\u7F6E\u8BE5\u961F\u5217\u7684 ttl</span>
arguments<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;x-message-ttl&quot;</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token string">&quot;queue.normal&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">queueBind</span><span class="token punctuation">(</span><span class="token string">&quot;queue.normal&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;exchange.normal&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE3\u7801\u5206\u4E3A\u4E24\u90E8\u5206\uFF1A</p><ol><li><p>\u5B9A\u4E49\u4E00\u4E2A DLX\uFF08\u5176\u5B9E\u5C31\u662F\u666E\u901A\u7684\u4EA4\u6362\u5668\uFF09\uFF0C\u4F46\u662F\u4F1A\u628A\u4ED6\u7ED1\u5B9A\u5728\u6B63\u5E38\u7684\u4EA4\u6362\u5668\u4E0A\uFF1B</p><p>\u4E3A\u8BE5 DLX \u7ED1\u5B9A\u4E00\u4E2A\u961F\u5217\uFF0C\u7528\u6765\u63A5\u6536\u6B7B\u4FE1\u6D88\u606F</p></li><li><p>\u5B9A\u4E49\u6B63\u5E38\u7684\u4EA4\u6362\u5668\uFF0C\u5E76\u8BBE\u7F6E DLX \u4EA4\u6362\u5668\u4E0E\u8DEF\u7531\u952E</p></li></ol><p>\u5728 web \u7BA1\u7406\u754C\u9762\u4E2D\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220923202344462.png" alt="image-20220923202344462"></p><ul><li>D\uFF1Adurable \u6301\u4E45\u5316\u961F\u5217</li><li>TTL\uFF1A\u6D88\u606F\u6709\u8FC7\u671F\u65F6\u95F4</li><li>DLX\uFF1A\u7ED1\u5B9A\u4E86\u6B7B\u4FE1\u4EA4\u6362\u5668</li><li>DLK\uFF1A\u662F\u8FD9\u4E2A <code>x-dead-letter-routing-key</code> \u6B7B\u4FE1\u4EA4\u6362\u5668\u8BBE\u7F6E\u4E86\u8DEF\u7531\u952E</li></ul><h2 id="_4-\u6B7B\u4FE1\u6D88\u606F\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_4-\u6B7B\u4FE1\u6D88\u606F\u6D41\u7A0B" aria-hidden="true">#</a> 4. \u6B7B\u4FE1\u6D88\u606F\u6D41\u7A0B</h2><p>\u4E00\u6761\u6D88\u606F\u8FC7\u671F\u65F6\uFF0C\u5C31\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u88AB\u8F6C\u53D1\u5230 DLX \u4EA4\u6362\u5668\u4E2D</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220923202651510.png" alt="image-20220923202651510"></p><p>\u5BF9\u4E8E RabbitMQ \u6765\u8BF4\uFF0C DLX \u662F\u975E\u5E38\u6709\u7528\u7684\u4E00\u4E2A\u7279\u6027\u3002\u8FD8\u53EF\u4EE5\u914D\u5408 TTL \u5B9E\u73B0\u5EF6\u8FDF\u961F\u5217\u7684\u529F\u80FD\u3002\u4E0B\u4E00\u8282\u8BB2\u89E3</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,21),r={href:"https://zq99299.github.io/mq-tutorial/rabbitmq-ac/04/03.html",target:"_blank",rel:"noopener noreferrer"};function k(d,m){const a=l("ExternalLinkIcon");return t(),e("div",null,[i,n("p",null,[n("a",r,[p("\u6B7B\u4FE1\u961F\u5217"),o(a)])])])}const b=s(u,[["render",k],["__file","rabbitmq-x-dead-letter.html.vue"]]);export{b as default};
