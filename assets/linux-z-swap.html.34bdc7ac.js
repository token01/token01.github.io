import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as i,a,b as r,d,f as p,r as t}from"./app.f5d9e013.js";const l={},c=p(`<h1 id="linux-swap\u4EA4\u6362\u5206\u533A" tabindex="-1"><a class="header-anchor" href="#linux-swap\u4EA4\u6362\u5206\u533A" aria-hidden="true">#</a> Linux Swap\u4EA4\u6362\u5206\u533A</h1><h2 id="_1-swap\u4EA4\u6362\u5206\u533A\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-swap\u4EA4\u6362\u5206\u533A\u6982\u5FF5" aria-hidden="true">#</a> 1. Swap\u4EA4\u6362\u5206\u533A\u6982\u5FF5</h2><p>Linux\u5185\u6838\u4E3A\u4E86\u63D0\u9AD8\u8BFB\u5199\u6548\u7387\u4E0E\u901F\u5EA6\uFF0C\u4F1A\u5C06\u6587\u4EF6\u5728\u5185\u5B58\u4E2D\u8FDB\u884C\u7F13\u5B58\uFF0C\u8FD9\u90E8\u5206\u5185\u5B58\u5C31\u662FCache Memory(\u7F13\u5B58\u5185\u5B58)\u3002<strong>\u5373\u4F7F\u4F60\u7684\u7A0B\u5E8F\u8FD0\u884C\u7ED3\u675F\u540E\uFF0CCache Memory\u4E5F\u4E0D\u4F1A\u81EA\u52A8\u91CA\u653E\u3002<strong>\u8FD9\u5C31\u4F1A\u5BFC\u81F4\u4F60\u518DLinux\u7CFB\u7EDF\u4E2D</strong>\u7A0B\u5E8F\u9891\u7E41\u8BFB\u5199\u6587\u4EF6</strong>\u540E\uFF0C\u4F60\u4F1A\u53D1\u73B0<strong>\u53EF\u7528\u5185\u5B58\u53D8\u5C11</strong>\u3002\u5F53\u7CFB\u7EDF\u7684\u65E0\u529B\u5185\u5B58\u4E0D\u591F\u7528\u7684\u65F6\u5019\uFF0C\u5C31\u9700\u8981\u5C06\u65E0\u529B\u5185\u5B58\u7684\u4E00\u90E8\u5206\u91CA\u653E\u51FA\u6765\uFF0C\u4EE5\u4F9B\u5F53\u524D\u8FD0\u884C\u7684\u7A0B\u5E8F\u4F7F\u7528\u3002</p><p>\u90A3\u4E9B\u88AB\u91CA\u653E\u7684\u7A7A\u95F4\u53EF\u80FD\u6765\u81EA\u4E00\u4E9B\u5F88\u957F\u65F6\u95F4\u6CA1\u6709\u4EC0\u4E48\u64CD\u4F5C\u7684\u7A0B\u5E8F\uFF0C\u8FD9\u4E9B**\u88AB\u91CA\u653E\u7684\u7A7A\u95F4\u88AB\u4E34\u65F6\u4FDD\u5B58\u5230Swap\u7A7A\u95F4\u4E2D\uFF0C**\u7B49\u5230\u90A3\u4E9B\u7A0B\u5E8F\u8981\u8FD0\u884C\u65F6\uFF0C\u518D\u4ECESwap\u5206\u533A\u4E2D\u6062\u590D\u4FDD\u5B58\u7684\u6570\u636E\u5230\u5185\u5B58\u4E2D\u3002\u8FD9\u6837\uFF0C\u7CFB\u7EDF\u603B\u662F\u5728\u7269\u7406\u5185\u5B58\u4E0D\u591F\u65F6\uFF0C\u624D\u8FDB\u884CSwap\u4EA4\u6362\u3002</p><h2 id="_2-\u67E5\u770Bswap\u5206\u533A\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#_2-\u67E5\u770Bswap\u5206\u533A\u5927\u5C0F" aria-hidden="true">#</a> 2. \u67E5\u770BSwap\u5206\u533A\u5927\u5C0F</h2><p>\u67E5\u770BSwap\u5206\u533A\u7684\u5927\u5C0F\u4EE5\u53CA\u4F7F\u7528\u60C5\u51B5\uFF0C\u4E00\u822C\u4F7F\u7528free\u547D\u4EE4\u3002\u5F53\u524D\u6211\u4EEC\u5E76\u6CA1\u8BBE\u7F6Eswap\u5206\u533A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20200206122221579.png" alt="image-20200206122221579"></p><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528swapon\u547D\u4EE4\u67E5\u770B\u5F53\u524Dswap\u76F8\u5173\u4FE1\u606F\uFF1A\u4F8B\u5982swap\u7A7A\u95F4\u662Fswap partition\uFF0CSwap size\uFF0C\u4F7F\u7528\u60C5\u51B5\u7B49\u8BE6\u7EC6\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>swapon -s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20200206130028437.png" alt="image-20200206130028437"></p><h2 id="_3-\u521B\u5EFAswap\u533A\u5206" tabindex="-1"><a class="header-anchor" href="#_3-\u521B\u5EFAswap\u533A\u5206" aria-hidden="true">#</a> 3. \u521B\u5EFAswap\u533A\u5206</h2><h3 id="_3-1-\u521B\u5EFAswap\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-1-\u521B\u5EFAswap\u6587\u4EF6" aria-hidden="true">#</a> 3.1 \u521B\u5EFAswap\u6587\u4EF6</h3><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code>cd <span class="token operator">/</span><span class="token keyword">var</span>
sudo mkdir swap
sudo dd <span class="token keyword">if</span><span class="token operator">=/</span>dev<span class="token operator">/</span>zero of<span class="token operator">=</span>swapfile bs<span class="token operator">=</span><span class="token number">1024</span> count<span class="token operator">=</span><span class="token number">2000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>count\u4EE3\u8868\u7684\u662F\u5927\u5C0F\uFF0C\u6211\u8FD9\u91CC\u662F2G\u3002</p><h3 id="_3-2-\u628A\u6587\u4EF6\u8F6C\u6362\u4E3Aswap\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-2-\u628A\u6587\u4EF6\u8F6C\u6362\u4E3Aswap\u6587\u4EF6" aria-hidden="true">#</a> 3.2 \u628A\u6587\u4EF6\u8F6C\u6362\u4E3Aswap\u6587\u4EF6</h3><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code> sudo mkswap swapfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20200206124047741.png" alt="image-20200206124047741"></p><h3 id="_3-3-\u6FC0\u6D3Bswap\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-3-\u6FC0\u6D3Bswap\u6587\u4EF6" aria-hidden="true">#</a> 3.3 \u6FC0\u6D3Bswap\u6587\u4EF6</h3><p>\u8FD9\u91CC\u53EF\u4EE5\u76F4\u63A5\u7528\u547D\u4EE4\u6302\u8F7D\u4E0A\u4E00\u4E2Aswap\u5206\u533A\uFF0C\u4F46\u662F\u91CD\u542F\u540E\u8981\u91CD\u65B0\u6302\u8F7D\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>\u6302\u8F7D\uFF1A sudo swapon <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>swapfile
\u5982\u679C\u4E0D\u9700\u8981\u4E86\uFF0C\u53EF\u4EE5\u4E5F\u53EF\u4EE5\u5378\u8F7D\uFF1A
\u5378\u8F7D\uFF1Asudo swapoff <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>swapfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-\u5F00\u673A\u542F\u52A8\u540E\u81EA\u52A8\u6302\u8F7D" tabindex="-1"><a class="header-anchor" href="#_3-4-\u5F00\u673A\u542F\u52A8\u540E\u81EA\u52A8\u6302\u8F7D" aria-hidden="true">#</a> 3.4 \u5F00\u673A\u542F\u52A8\u540E\u81EA\u52A8\u6302\u8F7D</h3><p>\u5982\u679C\u9700\u8981\u5F00\u673A\u542F\u52A8\u540E\u81EA\u52A8\u6302\u8F7D\u7684\u8BDD\uFF0C\u53EF\u4EE5\u628A\u5B83\u6DFB\u52A0\u5230/etc/fstab\u6587\u4EF6\u4E2D\u3002</p><p>\u5F00\u673A\u81EA\u52A8\u6302\u8F7DSWAP\u5206\u533A\uFF0C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim /etc/fstab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u6587\u4EF6\u672B\u5C3E\u6DFB\u52A0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/var/swapfile   swap  swap  defaults  0  0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-5-\u67E5\u770B\u4F7F\u7528\u6210\u529F" tabindex="-1"><a class="header-anchor" href="#_3-5-\u67E5\u770B\u4F7F\u7528\u6210\u529F" aria-hidden="true">#</a> 3.5 \u67E5\u770B\u4F7F\u7528\u6210\u529F</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20200206125218923.png" alt="image-20200206125218923"></p><h2 id="_4-swappiness\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_4-swappiness\u5C5E\u6027" aria-hidden="true">#</a> 4. swappiness\u5C5E\u6027</h2><h3 id="_4-1-swappiness\u5C5E\u6027\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_4-1-swappiness\u5C5E\u6027\u4ECB\u7ECD" aria-hidden="true">#</a> 4.1 swappiness\u5C5E\u6027\u4ECB\u7ECD</h3><p>swappiness\u7684\u503C\u5F97\u5927\u5C0F\u5BF9\u5982\u4F55\u4F7F\u7528swap\u5206\u533A\u662F\u6709\u5F88\u5927\u8054\u7CFB\u7684\u3002Linux\u4E0B\u8BBE\u7F6Eswappiness<strong>\u53C2\u6570\u6765\u914D\u7F6E\u5185\u5B58\u4F7F\u7528\u5230\u591A\u5C11\u624D\u5F00\u59CB\u4F7F\u7528swap\u5206\u533A</strong></p><ul><li>swappiness=0:\u8868\u793A\u6700\u5927\u9650\u5EA6\u4F7F\u7528\u7269\u7406\u5185\u5B58\uFF0C\u7136\u540E\u624D\u662Fswap\u7A7A\u95F4</li><li>swappiness\uFF1D100:\u8868\u793A\u79EF\u6781\u7684\u4F7F\u7528swap\u5206\u533A\uFF0C\u5E76\u4E14\u628A\u5185\u5B58\u4E0A\u7684\u6570\u636E\u53CA\u65F6\u7684\u642C\u8FD0\u5230swap\u7A7A\u95F4\u91CC\u9762</li></ul><h3 id="_4-2-\u6C38\u4E45\u66F4\u6539\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-2-\u6C38\u4E45\u66F4\u6539\u65B9\u6CD5" aria-hidden="true">#</a> 4.2 \u6C38\u4E45\u66F4\u6539\u65B9\u6CD5</h3><p>\u4FEE\u6539 /etc/sysctl.conf</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo vim /etc/sysctl.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u672B\u5C3E\u52A0\u4E0A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vm.swappiness = 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u751F\u6548</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo sysctl -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,40),o={href:"https://www.jianshu.com/p/04c7a9ab438c",target:"_blank",rel:"noopener noreferrer"};function u(h,m){const e=t("ExternalLinkIcon");return n(),i("div",null,[c,a("p",null,[a("a",o,[r("Linux \u5F00\u542F Swap\u5206\u533A \u6559\u7A0B"),d(e)])])])}const g=s(l,[["render",u],["__file","linux-z-swap.html.vue"]]);export{g as default};
