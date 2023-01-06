import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as l,a,b as e,d as n,f as s,r as t}from"./app.ec219279.js";const c={},r=s(`<h1 id="io-\u6A21\u578B-unix-io-\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#io-\u6A21\u578B-unix-io-\u6A21\u578B" aria-hidden="true">#</a> IO \u6A21\u578B - Unix IO \u6A21\u578B</h1><blockquote><p>\u672C\u6587\u4E3B\u8981\u7B80\u8981\u4ECB\u7ECD Unix I/O 5\u79CD\u6A21\u578B\uFF0C\u5E76\u5BF95\u5927\u6A21\u578B\u6BD4\u8F83\uFF0C\u5E76\u91CD\u70B9\u4E3A\u540E\u7EED\u7AE0\u8282\u89E3\u91CAIO\u591A\u8DEF\u590D\u7528\u505A\u94FA\u57AB\u3002</p></blockquote><h2 id="_1-unix-io-\u6A21\u578B\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-unix-io-\u6A21\u578B\u7B80\u4ECB" aria-hidden="true">#</a> 1. Unix IO \u6A21\u578B\u7B80\u4ECB</h2><p>\u4E00\u4E2A\u8F93\u5165\u64CD\u4F5C\u901A\u5E38\u5305\u62EC\u4E24\u4E2A\u9636\u6BB5:</p><ul><li>\u7B49\u5F85\u6570\u636E\u51C6\u5907\u597D</li><li>\u4ECE\u5185\u6838\u5411\u8FDB\u7A0B\u590D\u5236\u6570\u636E</li></ul><p>\u5BF9\u4E8E\u4E00\u4E2A\u5957\u63A5\u5B57\u4E0A\u7684\u8F93\u5165\u64CD\u4F5C\uFF0C\u7B2C\u4E00\u6B65\u901A\u5E38\u6D89\u53CA\u7B49\u5F85\u6570\u636E\u4ECE\u7F51\u7EDC\u4E2D\u5230\u8FBE\u3002\u5F53\u6240\u7B49\u5F85\u5206\u7EC4\u5230\u8FBE\u65F6\uFF0C\u5B83\u88AB\u590D\u5236\u5230\u5185\u6838\u4E2D\u7684\u67D0\u4E2A\u7F13\u51B2\u533A\u3002\u7B2C\u4E8C\u6B65\u5C31\u662F\u628A\u6570\u636E\u4ECE\u5185\u6838\u7F13\u51B2\u533A\u590D\u5236\u5230\u5E94\u7528\u8FDB\u7A0B\u7F13\u51B2\u533A\u3002</p><p>Unix \u4E0B\u6709\u4E94\u79CD I/O \u6A21\u578B:</p><ul><li>\u963B\u585E\u5F0F I/O</li><li>\u975E\u963B\u585E\u5F0F I/O</li><li>I/O \u590D\u7528(select \u548C poll)</li><li>\u4FE1\u53F7\u9A71\u52A8\u5F0F I/O(SIGIO)</li><li>\u5F02\u6B65 I/O(AIO)</li></ul><h3 id="_1-1-\u963B\u585E\u5F0F-i-o" tabindex="-1"><a class="header-anchor" href="#_1-1-\u963B\u585E\u5F0F-i-o" aria-hidden="true">#</a> 1.1 \u963B\u585E\u5F0F I/O</h3><p>\u5E94\u7528\u8FDB\u7A0B\u88AB\u963B\u585E\uFF0C\u76F4\u5230\u6570\u636E\u590D\u5236\u5230\u5E94\u7528\u8FDB\u7A0B\u7F13\u51B2\u533A\u4E2D\u624D\u8FD4\u56DE\u3002</p><p>\u5E94\u8BE5\u6CE8\u610F\u5230\uFF0C\u5728\u963B\u585E\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5176\u5B83\u7A0B\u5E8F\u8FD8\u53EF\u4EE5\u6267\u884C\uFF0C\u56E0\u6B64\u963B\u585E\u4E0D\u610F\u5473\u7740\u6574\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u90FD\u88AB\u963B\u585E\u3002\u56E0\u4E3A\u5176\u4ED6\u7A0B\u5E8F\u8FD8\u53EF\u4EE5\u6267\u884C\uFF0C\u56E0\u6B64\u4E0D\u6D88\u8017 CPU \u65F6\u95F4\uFF0C\u8FD9\u79CD\u6A21\u578B\u7684\u6267\u884C\u6548\u7387\u4F1A\u6BD4\u8F83\u9AD8\u3002</p><p>\u4E0B\u56FE\u4E2D\uFF0Crecvfrom \u7528\u4E8E\u63A5\u6536 Socket \u4F20\u6765\u7684\u6570\u636E\uFF0C\u5E76\u590D\u5236\u5230\u5E94\u7528\u8FDB\u7A0B\u7684\u7F13\u51B2\u533A buf \u4E2D\u3002\u8FD9\u91CC\u628A recvfrom() \u5F53\u6210\u7CFB\u7EDF\u8C03\u7528\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token class-name">ssize_t</span> <span class="token function">recvfrom</span><span class="token punctuation">(</span><span class="token keyword">int</span> sockfd<span class="token punctuation">,</span> <span class="token keyword">void</span> <span class="token operator">*</span>buf<span class="token punctuation">,</span> <span class="token class-name">size_t</span> len<span class="token punctuation">,</span> <span class="token keyword">int</span> flags<span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">sockaddr</span> <span class="token operator">*</span>src_addr<span class="token punctuation">,</span> <span class="token class-name">socklen_t</span> <span class="token operator">*</span>addrlen<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220830212837589.png" alt="image-20220830212837589"></p><p>\u6216\u8005\u7F51\u53CB\u63D0\u4F9B\u7684</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220830212901021.png" alt="image-20220830212901021"></p><h3 id="_1-2-\u975E\u963B\u585E\u5F0F-i-o" tabindex="-1"><a class="header-anchor" href="#_1-2-\u975E\u963B\u585E\u5F0F-i-o" aria-hidden="true">#</a> 1.2 \u975E\u963B\u585E\u5F0F I/O</h3><p>\u5E94\u7528\u8FDB\u7A0B\u6267\u884C\u7CFB\u7EDF\u8C03\u7528\u4E4B\u540E\uFF0C\u5185\u6838\u8FD4\u56DE\u4E00\u4E2A\u9519\u8BEF\u7801\u3002\u5E94\u7528\u8FDB\u7A0B\u53EF\u4EE5\u7EE7\u7EED\u6267\u884C\uFF0C\u4F46\u662F\u9700\u8981\u4E0D\u65AD\u7684\u6267\u884C\u7CFB\u7EDF\u8C03\u7528\u6765\u83B7\u77E5 I/O \u662F\u5426\u5B8C\u6210\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u79F0\u4E3A\u8F6E\u8BE2(polling)\u3002</p><p>\u7531\u4E8E CPU \u8981\u5904\u7406\u66F4\u591A\u7684\u7CFB\u7EDF\u8C03\u7528\uFF0C\u56E0\u6B64\u8FD9\u79CD\u6A21\u578B\u662F\u6BD4\u8F83\u4F4E\u6548\u7684\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220830213005982.png" alt="image-20220830213005982"></p><p>\u6216\u8005\u7F51\u53CB\u63D0\u4F9B\u7684</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220830213019907.png" alt="image-20220830213019907"></p><h3 id="_1-3-i-o-\u590D\u7528" tabindex="-1"><a class="header-anchor" href="#_1-3-i-o-\u590D\u7528" aria-hidden="true">#</a> 1.3 I/O \u590D\u7528</h3><p>\u4F7F\u7528 select \u6216\u8005 poll \u7B49\u5F85\u6570\u636E\uFF0C\u5E76\u4E14\u53EF\u4EE5\u7B49\u5F85\u591A\u4E2A\u5957\u63A5\u5B57\u4E2D\u7684\u4EFB\u4F55\u4E00\u4E2A\u53D8\u4E3A\u53EF\u8BFB\uFF0C\u8FD9\u4E00\u8FC7\u7A0B\u4F1A\u88AB\u963B\u585E\uFF0C\u5F53\u67D0\u4E00\u4E2A\u5957\u63A5\u5B57\u53EF\u8BFB\u65F6\u8FD4\u56DE\u3002\u4E4B\u540E\u518D\u4F7F\u7528 recvfrom \u628A\u6570\u636E\u4ECE\u5185\u6838\u590D\u5236\u5230\u8FDB\u7A0B\u4E2D\u3002</p><p>\u5B83\u53EF\u4EE5\u8BA9\u5355\u4E2A\u8FDB\u7A0B\u5177\u6709\u5904\u7406\u591A\u4E2A I/O \u4E8B\u4EF6\u7684\u80FD\u529B\u3002\u53C8\u88AB\u79F0\u4E3A Event Driven I/O\uFF0C\u5373\u4E8B\u4EF6\u9A71\u52A8 I/O\u3002</p><p>\u5982\u679C\u4E00\u4E2A Web \u670D\u52A1\u5668\u6CA1\u6709 I/O \u590D\u7528\uFF0C\u90A3\u4E48\u6BCF\u4E00\u4E2A Socket \u8FDE\u63A5\u90FD\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u7EBF\u7A0B\u53BB\u5904\u7406\u3002\u5982\u679C\u540C\u65F6\u6709\u51E0\u4E07\u4E2A\u8FDE\u63A5\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u521B\u5EFA\u76F8\u540C\u6570\u91CF\u7684\u7EBF\u7A0B\u3002\u5E76\u4E14\u76F8\u6BD4\u4E8E\u591A\u8FDB\u7A0B\u548C\u591A\u7EBF\u7A0B\u6280\u672F\uFF0CI/O \u590D\u7528\u4E0D\u9700\u8981\u8FDB\u7A0B\u7EBF\u7A0B\u521B\u5EFA\u548C\u5207\u6362\u7684\u5F00\u9500\uFF0C\u7CFB\u7EDF\u5F00\u9500\u66F4\u5C0F\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220830213352173.png" alt="image-20220830213352173"></p><p>\u6216\u8005\u7F51\u53CB\u63D0\u4F9B\u7684</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220830213407568.png" alt="image-20220830213407568"></p><h3 id="_1-4-\u4FE1\u53F7\u9A71\u52A8-i-o" tabindex="-1"><a class="header-anchor" href="#_1-4-\u4FE1\u53F7\u9A71\u52A8-i-o" aria-hidden="true">#</a> 1.4 \u4FE1\u53F7\u9A71\u52A8 I/O</h3><p>\u5E94\u7528\u8FDB\u7A0B\u4F7F\u7528 sigaction \u7CFB\u7EDF\u8C03\u7528\uFF0C\u5185\u6838\u7ACB\u5373\u8FD4\u56DE\uFF0C\u5E94\u7528\u8FDB\u7A0B\u53EF\u4EE5\u7EE7\u7EED\u6267\u884C\uFF0C\u4E5F\u5C31\u662F\u8BF4\u7B49\u5F85\u6570\u636E\u9636\u6BB5\u5E94\u7528\u8FDB\u7A0B\u662F\u975E\u963B\u585E\u7684\u3002\u5185\u6838\u5728\u6570\u636E\u5230\u8FBE\u65F6\u5411\u5E94\u7528\u8FDB\u7A0B\u53D1\u9001 SIGIO \u4FE1\u53F7\uFF0C\u5E94\u7528\u8FDB\u7A0B\u6536\u5230\u4E4B\u540E\u5728\u4FE1\u53F7\u5904\u7406\u7A0B\u5E8F\u4E2D\u8C03\u7528 recvfrom \u5C06\u6570\u636E\u4ECE\u5185\u6838\u590D\u5236\u5230\u5E94\u7528\u8FDB\u7A0B\u4E2D\u3002</p><p>\u76F8\u6BD4\u4E8E\u975E\u963B\u585E\u5F0F I/O \u7684\u8F6E\u8BE2\u65B9\u5F0F\uFF0C\u4FE1\u53F7\u9A71\u52A8 I/O \u7684 CPU \u5229\u7528\u7387\u66F4\u9AD8\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220830213543801.png" alt="image-20220830213543801"></p><p>\u6216\u8005\u7F51\u53CB\u63D0\u4F9B\u7684</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220830213557200.png" alt="image-20220830213557200"></p><h3 id="_1-5-\u5F02\u6B65-i-o" tabindex="-1"><a class="header-anchor" href="#_1-5-\u5F02\u6B65-i-o" aria-hidden="true">#</a> 1.5 \u5F02\u6B65 I/O</h3><p>\u8FDB\u884C aio_read \u7CFB\u7EDF\u8C03\u7528\u4F1A\u7ACB\u5373\u8FD4\u56DE\uFF0C\u5E94\u7528\u8FDB\u7A0B\u7EE7\u7EED\u6267\u884C\uFF0C\u4E0D\u4F1A\u88AB\u963B\u585E\uFF0C\u5185\u6838\u4F1A\u5728\u6240\u6709\u64CD\u4F5C\u5B8C\u6210\u4E4B\u540E\u5411\u5E94\u7528\u8FDB\u7A0B\u53D1\u9001\u4FE1\u53F7\u3002</p><p>\u5F02\u6B65 I/O \u4E0E\u4FE1\u53F7\u9A71\u52A8 I/O \u7684\u533A\u522B\u5728\u4E8E\uFF0C\u5F02\u6B65 I/O \u7684\u4FE1\u53F7\u662F\u901A\u77E5\u5E94\u7528\u8FDB\u7A0B I/O \u5B8C\u6210\uFF0C\u800C\u4FE1\u53F7\u9A71\u52A8 I/O \u7684\u4FE1\u53F7\u662F\u901A\u77E5\u5E94\u7528\u8FDB\u7A0B\u53EF\u4EE5\u5F00\u59CB I/O\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220830213739485.png" alt="image-20220830213739485"></p><p>\u6216\u8005\u7F51\u53CB\u63D0\u4F9B\u7684</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220830213757293.png" alt="image-20220830213757293"></p><h2 id="_2-i-o-\u6A21\u578B\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#_2-i-o-\u6A21\u578B\u6BD4\u8F83" aria-hidden="true">#</a> 2. I/O \u6A21\u578B\u6BD4\u8F83</h2><h3 id="_2-1-\u540C\u6B65-i-o-\u4E0E\u5F02\u6B65-i-o" tabindex="-1"><a class="header-anchor" href="#_2-1-\u540C\u6B65-i-o-\u4E0E\u5F02\u6B65-i-o" aria-hidden="true">#</a> 2.1 \u540C\u6B65 I/O \u4E0E\u5F02\u6B65 I/O</h3><ul><li>\u540C\u6B65 I/O: \u5E94\u7528\u8FDB\u7A0B\u5728\u8C03\u7528 recvfrom \u64CD\u4F5C\u65F6\u4F1A\u963B\u585E\u3002</li><li>\u5F02\u6B65 I/O: \u4E0D\u4F1A\u963B\u585E\u3002</li></ul><p>\u963B\u585E\u5F0F I/O\u3001\u975E\u963B\u585E\u5F0F I/O\u3001I/O \u590D\u7528\u548C\u4FE1\u53F7\u9A71\u52A8 I/O \u90FD\u662F\u540C\u6B65 I/O\uFF0C\u867D\u7136\u975E\u963B\u585E\u5F0F I/O \u548C\u4FE1\u53F7\u9A71\u52A8 I/O \u5728\u7B49\u5F85\u6570\u636E\u9636\u6BB5\u4E0D\u4F1A\u963B\u585E\uFF0C\u4F46\u662F\u5728\u4E4B\u540E\u7684\u5C06\u6570\u636E\u4ECE\u5185\u6838\u590D\u5236\u5230\u5E94\u7528\u8FDB\u7A0B\u8FD9\u4E2A\u64CD\u4F5C\u4F1A\u963B\u585E\u3002</p><h3 id="_2-2-\u4E94\u5927-i-o-\u6A21\u578B\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#_2-2-\u4E94\u5927-i-o-\u6A21\u578B\u6BD4\u8F83" aria-hidden="true">#</a> 2.2 \u4E94\u5927 I/O \u6A21\u578B\u6BD4\u8F83</h3><p>\u524D\u56DB\u79CD I/O \u6A21\u578B\u7684\u4E3B\u8981\u533A\u522B\u5728\u4E8E\u7B2C\u4E00\u4E2A\u9636\u6BB5\uFF0C\u800C\u7B2C\u4E8C\u4E2A\u9636\u6BB5\u662F\u4E00\u6837\u7684: \u5C06\u6570\u636E\u4ECE\u5185\u6838\u590D\u5236\u5230\u5E94\u7528\u8FDB\u7A0B\u8FC7\u7A0B\u4E2D\uFF0C\u5E94\u7528\u8FDB\u7A0B\u4F1A\u88AB\u963B\u585E\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220830214003251.png" alt="image-20220830214003251"></p><h2 id="_3-io\u591A\u8DEF\u590D\u7528" tabindex="-1"><a class="header-anchor" href="#_3-io\u591A\u8DEF\u590D\u7528" aria-hidden="true">#</a> 3. IO\u591A\u8DEF\u590D\u7528</h2>`,49),d={href:"https://pdai.tech/md/java/io/java-io-nio-select-epoll.html",target:"_blank",rel:"noopener noreferrer"},h=s('<p>\u8FD9\u91CC\u4E3B\u8981\u6982\u8981\u6027\u7684\u7406\u89E3: IO\u591A\u8DEF\u590D\u7528\u5DE5\u4F5C\u6A21\u5F0F\u548C\u5E94\u7528\u3002</p><h3 id="_3-1-io\u591A\u8DEF\u590D\u7528\u5DE5\u4F5C\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-1-io\u591A\u8DEF\u590D\u7528\u5DE5\u4F5C\u6A21\u5F0F" aria-hidden="true">#</a> 3.1 IO\u591A\u8DEF\u590D\u7528\u5DE5\u4F5C\u6A21\u5F0F</h3><p>epoll \u7684\u63CF\u8FF0\u7B26\u4E8B\u4EF6\u6709\u4E24\u79CD\u89E6\u53D1\u6A21\u5F0F: LT(level trigger)\u548C ET(edge trigger)\u3002</p><h4 id="_3-1-1-lt-\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-1-1-lt-\u6A21\u5F0F" aria-hidden="true">#</a> 3.1.1 LT \u6A21\u5F0F</h4><p>\u5F53 epoll_wait() \u68C0\u6D4B\u5230\u63CF\u8FF0\u7B26\u4E8B\u4EF6\u5230\u8FBE\u65F6\uFF0C\u5C06\u6B64\u4E8B\u4EF6\u901A\u77E5\u8FDB\u7A0B\uFF0C\u8FDB\u7A0B\u53EF\u4EE5\u4E0D\u7ACB\u5373\u5904\u7406\u8BE5\u4E8B\u4EF6\uFF0C\u4E0B\u6B21\u8C03\u7528 epoll_wait() \u4F1A\u518D\u6B21\u901A\u77E5\u8FDB\u7A0B\u3002\u662F\u9ED8\u8BA4\u7684\u4E00\u79CD\u6A21\u5F0F\uFF0C\u5E76\u4E14\u540C\u65F6\u652F\u6301 Blocking \u548C No-Blocking\u3002</p><h4 id="_3-1-2-et-\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-1-2-et-\u6A21\u5F0F" aria-hidden="true">#</a> 3.1.2 ET \u6A21\u5F0F</h4><p>\u548C LT \u6A21\u5F0F\u4E0D\u540C\u7684\u662F\uFF0C\u901A\u77E5\u4E4B\u540E\u8FDB\u7A0B\u5FC5\u987B\u7ACB\u5373\u5904\u7406\u4E8B\u4EF6\uFF0C\u4E0B\u6B21\u518D\u8C03\u7528 epoll_wait() \u65F6\u4E0D\u4F1A\u518D\u5F97\u5230\u4E8B\u4EF6\u5230\u8FBE\u7684\u901A\u77E5\u3002</p><p>\u5F88\u5927\u7A0B\u5EA6\u4E0A\u51CF\u5C11\u4E86 epoll \u4E8B\u4EF6\u88AB\u91CD\u590D\u89E6\u53D1\u7684\u6B21\u6570\uFF0C\u56E0\u6B64\u6548\u7387\u8981\u6BD4 LT \u6A21\u5F0F\u9AD8\u3002\u53EA\u652F\u6301 No-Blocking\uFF0C\u4EE5\u907F\u514D\u7531\u4E8E\u4E00\u4E2A\u6587\u4EF6\u53E5\u67C4\u7684\u963B\u585E\u8BFB/\u963B\u585E\u5199\u64CD\u4F5C\u628A\u5904\u7406\u591A\u4E2A\u6587\u4EF6\u63CF\u8FF0\u7B26\u7684\u4EFB\u52A1\u997F\u6B7B\u3002</p><h3 id="_3-2-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> 3.2 \u5E94\u7528\u573A\u666F</h3><p>\u5F88\u5BB9\u6613\u4EA7\u751F\u4E00\u79CD\u9519\u89C9\u8BA4\u4E3A\u53EA\u8981\u7528 epoll \u5C31\u53EF\u4EE5\u4E86\uFF0Cselect \u548C poll \u90FD\u5DF2\u7ECF\u8FC7\u65F6\u4E86\uFF0C\u5176\u5B9E\u5B83\u4EEC\u90FD\u6709\u5404\u81EA\u7684\u4F7F\u7528\u573A\u666F\u3002</p><h4 id="_3-2-1-select-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_3-2-1-select-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> 3.2.1. select \u5E94\u7528\u573A\u666F</h4><p>select \u7684 timeout \u53C2\u6570\u7CBE\u5EA6\u4E3A 1ns\uFF0C\u800C poll \u548C epoll \u4E3A 1ms\uFF0C\u56E0\u6B64 select \u66F4\u52A0\u9002\u7528\u4E8E\u5B9E\u65F6\u8981\u6C42\u66F4\u9AD8\u7684\u573A\u666F\uFF0C\u6BD4\u5982\u6838\u53CD\u5E94\u5806\u7684\u63A7\u5236\u3002</p><p>select \u53EF\u79FB\u690D\u6027\u66F4\u597D\uFF0C\u51E0\u4E4E\u88AB\u6240\u6709\u4E3B\u6D41\u5E73\u53F0\u6240\u652F\u6301\u3002</p><h4 id="_3-2-2-poll-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_3-2-2-poll-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> 3.2.2 poll \u5E94\u7528\u573A\u666F</h4><p>poll \u6CA1\u6709\u6700\u5927\u63CF\u8FF0\u7B26\u6570\u91CF\u7684\u9650\u5236\uFF0C\u5982\u679C\u5E73\u53F0\u652F\u6301\u5E76\u4E14\u5BF9\u5B9E\u65F6\u6027\u8981\u6C42\u4E0D\u9AD8\uFF0C\u5E94\u8BE5\u4F7F\u7528 poll \u800C\u4E0D\u662F select\u3002</p><p>\u9700\u8981\u540C\u65F6\u76D1\u63A7\u5C0F\u4E8E 1000 \u4E2A\u63CF\u8FF0\u7B26\uFF0C\u5C31\u6CA1\u6709\u5FC5\u8981\u4F7F\u7528 epoll\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u5E94\u7528\u573A\u666F\u4E0B\u5E76\u4E0D\u80FD\u4F53\u73B0 epoll \u7684\u4F18\u52BF\u3002</p><p>\u9700\u8981\u76D1\u63A7\u7684\u63CF\u8FF0\u7B26\u72B6\u6001\u53D8\u5316\u591A\uFF0C\u800C\u4E14\u90FD\u662F\u975E\u5E38\u77ED\u6682\u7684\uFF0C\u4E5F\u6CA1\u6709\u5FC5\u8981\u4F7F\u7528 epoll\u3002\u56E0\u4E3A epoll \u4E2D\u7684\u6240\u6709\u63CF\u8FF0\u7B26\u90FD\u5B58\u50A8\u5728\u5185\u6838\u4E2D\uFF0C\u9020\u6210\u6BCF\u6B21\u9700\u8981\u5BF9\u63CF\u8FF0\u7B26\u7684\u72B6\u6001\u6539\u53D8\u90FD\u9700\u8981\u901A\u8FC7 epoll_ctl() \u8FDB\u884C\u7CFB\u7EDF\u8C03\u7528\uFF0C\u9891\u7E41\u7CFB\u7EDF\u8C03\u7528\u964D\u4F4E\u6548\u7387\u3002\u5E76\u4E14epoll \u7684\u63CF\u8FF0\u7B26\u5B58\u50A8\u5728\u5185\u6838\uFF0C\u4E0D\u5BB9\u6613\u8C03\u8BD5\u3002</p><h4 id="_3-2-3-epoll-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_3-2-3-epoll-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> 3.2.3 epoll \u5E94\u7528\u573A\u666F</h4><p>\u53EA\u9700\u8981\u8FD0\u884C\u5728 Linux \u5E73\u53F0\u4E0A\uFF0C\u5E76\u4E14\u6709\u975E\u5E38\u5927\u91CF\u7684\u63CF\u8FF0\u7B26\u9700\u8981\u540C\u65F6\u8F6E\u8BE2\uFF0C\u800C\u4E14\u8FD9\u4E9B\u8FDE\u63A5\u6700\u597D\u662F\u957F\u8FDE\u63A5\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',20),m={href:"https://pdai.tech/md/java/io/java-io-model.html",target:"_blank",rel:"noopener noreferrer"},u=a("strong",null,"IO \u6A21\u578B - Unix IO \u6A21\u578B",-1);function g(_,I){const i=t("ExternalLinkIcon");return p(),l("div",null,[r,a("blockquote",null,[a("p",null,[e("IO\u591A\u8DEF\u590D\u7528\u6700\u4E3A\u91CD\u8981\uFF0C\u540E\u9762\u7684\u6587\u7AE0"),a("a",d,[e("Java NIO - IO\u591A\u8DEF\u590D\u7528\u8BE6\u89E3"),n(i)]),e("\u5C06\u5BF9IO\u591A\u8DEF\u590D\u7528\uFF0CRactor\u6A21\u578B\u4EE5\u53CAJava NIO\u5BF9\u5176\u7684\u652F\u6301\u4F5C\u8BE6\u89E3\u3002")])]),h,a("p",null,[a("a",m,[u,n(i)])])])}const f=o(c,[["render",g],["__file","java-io-model.html.vue"]]);export{f as default};
