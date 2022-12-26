import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as o,a as e,b as t,d as p,f as r,r as i}from"./app.f90ce353.js";const c={},l=r(`<h1 id="redis\u8FDB\u9636-redis\u70EDkey\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#redis\u8FDB\u9636-redis\u70EDkey\u95EE\u9898" aria-hidden="true">#</a> Redis\u8FDB\u9636 - Redis\u70EDkey\u95EE\u9898</h1><h2 id="_0-\u5F15\u8A00" tabindex="-1"><a class="header-anchor" href="#_0-\u5F15\u8A00" aria-hidden="true">#</a> 0. \u5F15\u8A00</h2><p>\u5176\u5B9E\u70EDkey\u95EE\u9898\u8BF4\u6765\u4E5F\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u77AC\u95F4\u6709\u51E0\u5341\u4E07\u7684\u8BF7\u6C42\u53BB\u8BBF\u95EEredis\u4E0A\u67D0\u4E2A\u56FA\u5B9A\u7684key\uFF0C\u4ECE\u800C\u538B\u57AE\u7F13\u5B58\u670D\u52A1\u7684\u60C5\u60C5\u51B5\u3002 \u5176\u5B9E\u751F\u6D3B\u4E2D\u4E5F\u662F\u6709\u4E0D\u5C11\u8FD9\u6837\u7684\u4F8B\u5B50\u3002\u6BD4\u5982XX\u660E\u661F\u7ED3\u5A5A\u3002\u90A3\u4E48\u5173\u4E8EXX\u660E\u661F\u7684Key\u5C31\u4F1A\u77AC\u95F4\u589E\u5927\uFF0C\u5C31\u4F1A\u51FA\u73B0\u70ED\u6570\u636E\u95EE\u9898\u3002</p><blockquote><p><code>ps:</code>hot key\u548Cbig key\u95EE\u9898\uFF0C\u5927\u5BB6\u4E00\u5B9A\u8981\u6709\u6240\u4E86\u89E3\u3002</p></blockquote><p>\u672C\u6587\u9884\u8BA1\u5206\u4E3A\u5982\u4E0B\u51E0\u4E2A\u90E8\u5206</p><ul><li>\u70EDkey\u95EE\u9898</li><li>\u5982\u4F55\u53D1\u73B0</li><li>\u4E1A\u5185\u65B9\u6848</li></ul><h2 id="_1-\u70EDkey\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_1-\u70EDkey\u95EE\u9898" aria-hidden="true">#</a> 1. \u70EDKey\u95EE\u9898</h2><p>\u4E0A\u9762\u63D0\u5230\uFF0C\u6240\u8C13\u70EDkey\u95EE\u9898\u5C31\u662F\uFF0C\u7A81\u7136\u6709\u51E0\u5341\u4E07\u7684\u8BF7\u6C42\u53BB\u8BBF\u95EEredis\u4E0A\u7684\u67D0\u4E2A\u7279\u5B9Akey\u3002\u90A3\u4E48\uFF0C\u8FD9\u6837\u4F1A\u9020\u6210\u6D41\u91CF\u8FC7\u4E8E\u96C6\u4E2D\uFF0C\u8FBE\u5230\u7269\u7406\u7F51\u5361\u4E0A\u9650\uFF0C\u4ECE\u800C\u5BFC\u81F4\u8FD9\u53F0redis\u7684\u670D\u52A1\u5668\u5B95\u673A\u3002 \u90A3\u63A5\u4E0B\u6765\u8FD9\u4E2Akey\u7684\u8BF7\u6C42\uFF0C\u5C31\u4F1A\u76F4\u63A5\u603C\u5230\u4F60\u7684\u6570\u636E\u5E93\u4E0A\uFF0C\u5BFC\u81F4\u4F60\u7684\u670D\u52A1\u4E0D\u53EF\u7528\u3002</p><h2 id="_2-\u600E\u4E48\u53D1\u73B0\u70EDkey" tabindex="-1"><a class="header-anchor" href="#_2-\u600E\u4E48\u53D1\u73B0\u70EDkey" aria-hidden="true">#</a> 2. \u600E\u4E48\u53D1\u73B0\u70EDkey</h2><ul><li><em>\u65B9\u6CD5\u4E00:\u51ED\u501F\u4E1A\u52A1\u7ECF\u9A8C\uFF0C\u8FDB\u884C\u9884\u4F30\u54EA\u4E9B\u662F\u70EDkey</em> \u5176\u5B9E\u8FD9\u4E2A\u65B9\u6CD5\u8FD8\u662F\u633A\u6709\u53EF\u884C\u6027\u7684\u3002\u6BD4\u5982\u67D0\u5546\u54C1\u5728\u505A\u79D2\u6740\uFF0C\u90A3\u8FD9\u4E2A\u5546\u54C1\u7684key\u5C31\u53EF\u4EE5\u5224\u65AD\u51FA\u662F\u70EDkey\u3002\u7F3A\u70B9\u5F88\u660E\u663E\uFF0C\u5E76\u975E\u6240\u6709\u4E1A\u52A1\u90FD\u80FD\u9884\u4F30\u51FA\u54EA\u4E9Bkey\u662F\u70EDkey\u3002</li><li><em>\u65B9\u6CD5\u4E8C:\u5728\u5BA2\u6237\u7AEF\u8FDB\u884C\u6536\u96C6</em> \u8FD9\u4E2A\u65B9\u5F0F\u5C31\u662F\u5728\u64CD\u4F5Credis\u4E4B\u524D\uFF0C\u52A0\u5165\u4E00\u884C\u4EE3\u7801\u8FDB\u884C\u6570\u636E\u7EDF\u8BA1\u3002\u90A3\u4E48\u8FD9\u4E2A\u6570\u636E\u7EDF\u8BA1\u7684\u65B9\u5F0F\u6709\u5F88\u591A\u79CD\uFF0C\u4E5F\u53EF\u4EE5\u662F\u7ED9\u5916\u90E8\u7684\u901A\u8BAF\u7CFB\u7EDF\u53D1\u9001\u4E00\u4E2A\u901A\u77E5\u4FE1\u606F\u3002\u7F3A\u70B9\u5C31\u662F\u5BF9\u5BA2\u6237\u7AEF\u4EE3\u7801\u9020\u6210\u5165\u4FB5\u3002</li><li><em>\u65B9\u6CD5\u4E09:\u5728Proxy\u5C42\u505A\u6536\u96C6</em> \u6709\u4E9B\u96C6\u7FA4\u67B6\u6784\u662F\u4E0B\u9762\u8FD9\u6837\u7684\uFF0CProxy\u53EF\u4EE5\u662FTwemproxy\uFF0C\u662F\u7EDF\u4E00\u7684\u5165\u53E3\u3002\u53EF\u4EE5\u5728Proxy\u5C42\u505A\u6536\u96C6\u4E0A\u62A5\uFF0C\u4F46\u662F\u7F3A\u70B9\u5F88\u660E\u663E\uFF0C\u5E76\u975E\u6240\u6709\u7684redis\u96C6\u7FA4\u67B6\u6784\u90FD\u6709proxy\u3002</li></ul><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20221128232245563.png" alt="image-20221128232245563"></p><ul><li><em>\u65B9\u6CD5\u56DB:\u7528redis\u81EA\u5E26\u547D\u4EE4</em> (1)monitor\u547D\u4EE4\uFF0C\u8BE5\u547D\u4EE4\u53EF\u4EE5\u5B9E\u65F6\u6293\u53D6\u51FAredis\u670D\u52A1\u5668\u63A5\u6536\u5230\u7684\u547D\u4EE4\uFF0C\u7136\u540E\u5199\u4EE3\u7801\u7EDF\u8BA1\u51FA\u70EDkey\u662F\u5565\u3002\u5F53\u7136\uFF0C\u4E5F\u6709\u73B0\u6210\u7684\u5206\u6790\u5DE5\u5177\u53EF\u4EE5\u7ED9\u4F60\u4F7F\u7528\uFF0C\u6BD4\u5982<code>redis-faina</code>\u3002\u4F46\u662F\u8BE5\u547D\u4EE4\u5728\u9AD8\u5E76\u53D1\u7684\u6761\u4EF6\u4E0B\uFF0C\u6709\u5185\u5B58\u589E\u66B4\u589E\u7684\u9690\u60A3\uFF0C\u8FD8\u4F1A\u964D\u4F4Eredis\u7684\u6027\u80FD\u3002 (2)hotkeys\u53C2\u6570\uFF0Credis 4.0.3\u63D0\u4F9B\u4E86redis-cli\u7684\u70ED\u70B9key\u53D1\u73B0\u529F\u80FD\uFF0C\u6267\u884Credis-cli\u65F6\u52A0\u4E0A\u2013hotkeys\u9009\u9879\u5373\u53EF\u3002\u4F46\u662F\u8BE5\u53C2\u6570\u5728\u6267\u884C\u7684\u65F6\u5019\uFF0C\u5982\u679Ckey\u6BD4\u8F83\u591A\uFF0C\u6267\u884C\u8D77\u6765\u6BD4\u8F83\u6162\u3002</li><li><em>\u65B9\u6CD5\u4E94:\u81EA\u5DF1\u6293\u5305\u8BC4\u4F30</em> Redis\u5BA2\u6237\u7AEF\u4F7F\u7528TCP\u534F\u8BAE\u4E0E\u670D\u52A1\u7AEF\u8FDB\u884C\u4EA4\u4E92\uFF0C\u901A\u4FE1\u534F\u8BAE\u91C7\u7528\u7684\u662FRESP\u3002\u81EA\u5DF1\u5199\u7A0B\u5E8F\u76D1\u542C\u7AEF\u53E3\uFF0C\u6309\u7167RESP\u534F\u8BAE\u89C4\u5219\u89E3\u6790\u6570\u636E\uFF0C\u8FDB\u884C\u5206\u6790\u3002\u7F3A\u70B9\u5C31\u662F\u5F00\u53D1\u6210\u672C\u9AD8\uFF0C\u7EF4\u62A4\u56F0\u96BE\uFF0C\u6709\u4E22\u5305\u53EF\u80FD\u6027\u3002</li></ul><p>\u4EE5\u4E0A\u4E94\u79CD\u65B9\u6848\uFF0C\u5404\u6709\u4F18\u7F3A\u70B9\u3002\u6839\u636E\u81EA\u5DF1\u4E1A\u52A1\u573A\u666F\u8FDB\u884C\u6289\u62E9\u5373\u53EF\u3002\u90A3\u4E48\u53D1\u73B0\u70EDkey\u540E\uFF0C\u5982\u4F55\u89E3\u51B3\u5462\uFF1F</p><h2 id="_3-\u5982\u4F55\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#_3-\u5982\u4F55\u89E3\u51B3" aria-hidden="true">#</a> 3. \u5982\u4F55\u89E3\u51B3</h2><p>\u76EE\u524D\u4E1A\u5185\u7684\u65B9\u6848\u6709\u4E24\u79CD</p><h3 id="_3-1-\u5229\u7528\u4E8C\u7EA7\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5229\u7528\u4E8C\u7EA7\u7F13\u5B58" aria-hidden="true">#</a> <em>3.1 \u5229\u7528\u4E8C\u7EA7\u7F13\u5B58</em></h3><p>\u6BD4\u5982\u5229\u7528<code>ehcache</code>\uFF0C\u6216\u8005\u4E00\u4E2A<code>HashMap</code>\u90FD\u53EF\u4EE5\u3002\u5728\u4F60\u53D1\u73B0\u70EDkey\u4EE5\u540E\uFF0C\u628A\u70EDkey\u52A0\u8F7D\u5230\u7CFB\u7EDF\u7684JVM\u4E2D\u3002 \u9488\u5BF9\u8FD9\u79CD\u70EDkey\u8BF7\u6C42\uFF0C\u4F1A\u76F4\u63A5\u4ECEjvm\u4E2D\u53D6\uFF0C\u800C\u4E0D\u4F1A\u8D70\u5230redis\u5C42\u3002 \u5047\u8BBE\u6B64\u65F6\u6709\u5341\u4E07\u4E2A\u9488\u5BF9\u540C\u4E00\u4E2Akey\u7684\u8BF7\u6C42\u8FC7\u6765,\u5982\u679C\u6CA1\u6709\u672C\u5730\u7F13\u5B58\uFF0C\u8FD9\u5341\u4E07\u4E2A\u8BF7\u6C42\u5C31\u76F4\u63A5\u603C\u5230\u540C\u4E00\u53F0redis\u4E0A\u4E86\u3002 \u73B0\u5728\u5047\u8BBE\uFF0C\u4F60\u7684\u5E94\u7528\u5C42\u670950\u53F0\u673A\u5668\uFF0COK\uFF0C\u4F60\u4E5F\u6709jvm\u7F13\u5B58\u4E86\u3002\u8FD9\u5341\u4E07\u4E2A\u8BF7\u6C42\u5E73\u5747\u5206\u6563\u5F00\u6765\uFF0C\u6BCF\u4E2A\u673A\u5668\u67092000\u4E2A\u8BF7\u6C42\uFF0C\u4F1A\u4ECEJVM\u4E2D\u53D6\u5230value\u503C\uFF0C\u7136\u540E\u8FD4\u56DE\u6570\u636E\u3002\u907F\u514D\u4E86\u5341\u4E07\u4E2A\u8BF7\u6C42\u603C\u5230\u540C\u4E00\u53F0redis\u4E0A\u7684\u60C5\u5F62\u3002</p><h3 id="_3-2-\u5907\u4EFD\u70EDkey" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5907\u4EFD\u70EDkey" aria-hidden="true">#</a> <em>3.2 \u5907\u4EFD\u70EDkey</em></h3><p>\u8FD9\u4E2A\u65B9\u6848\u4E5F\u5F88\u7B80\u5355\u3002\u4E0D\u8981\u8BA9key\u8D70\u5230\u540C\u4E00\u53F0redis\u4E0A\u4E0D\u5C31\u884C\u4E86\u3002\u6211\u4EEC\u628A\u8FD9\u4E2Akey\uFF0C\u5728\u591A\u4E2Aredis\u4E0A\u90FD\u5B58\u4E00\u4EFD\u4E0D\u5C31\u597D\u4E86\u3002\u63A5\u4E0B\u6765\uFF0C\u6709\u70EDkey\u8BF7\u6C42\u8FDB\u6765\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5C31\u5728\u6709\u5907\u4EFD\u7684redis\u4E0A\u968F\u673A\u9009\u53D6\u4E00\u53F0\uFF0C\u8FDB\u884C\u8BBF\u95EE\u53D6\u503C\uFF0C\u8FD4\u56DE\u6570\u636E\u3002 \u5047\u8BBEredis\u7684\u96C6\u7FA4\u6570\u91CF\u4E3AN\uFF0C\u6B65\u9AA4\u5982\u4E0B\u56FE\u6240\u793A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20221128232534600.png" alt="image-20221128232534600"></p><p>\u6CE8:\u4E0D\u4E00\u5B9A\u662F2N\uFF0C\u4F60\u60F3\u53D63N\uFF0C4N\u90FD\u53EF\u4EE5\uFF0C\u770B\u8981\u6C42\u3002 \u4F2A\u4EE3\u7801\u5982\u4E0B</p><div class="language-haskell ext-haskell line-numbers-mode"><pre class="language-haskell"><code><span class="token builtin">const</span> <span class="token constant">M</span> <span class="token operator">=</span> <span class="token constant">N</span> <span class="token operator">*</span> <span class="token number">2</span>
<span class="token operator">//</span>\u751F\u6210\u968F\u673A\u6570
<span class="token hvariable">random</span> <span class="token operator">=</span> <span class="token constant">GenRandom</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token constant">M</span><span class="token punctuation">)</span>
<span class="token operator">//</span>\u6784\u9020\u5907\u4EFD\u65B0<span class="token hvariable">key</span>
<span class="token hvariable">bakHotKey</span> <span class="token operator">=</span> <span class="token hvariable">hotKey</span> <span class="token operator">+</span> \u201C<span class="token hvariable">_</span>\u201D <span class="token operator">+</span> <span class="token hvariable">random</span>
<span class="token keyword">data</span> <span class="token operator">=</span> <span class="token hvariable">redis</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">(</span><span class="token hvariable">bakHotKey</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token keyword">data</span> <span class="token operator">==</span> <span class="token constant">NULL</span> <span class="token punctuation">{</span>
    <span class="token keyword">data</span> <span class="token operator">=</span> <span class="token constant">GetFromDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token hvariable">redis</span><span class="token punctuation">.</span><span class="token constant">SET</span><span class="token punctuation">(</span><span class="token hvariable">bakHotKey</span><span class="token punctuation">,</span> <span class="token hvariable">expireTime</span> <span class="token operator">+</span> <span class="token constant">GenRandom</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u4E1A\u5185\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_4-\u4E1A\u5185\u65B9\u6848" aria-hidden="true">#</a> 4. \u4E1A\u5185\u65B9\u6848</h2><p>OK\uFF0C\u5176\u5B9E\u770B\u5B8C\u4E0A\u9762\u7684\u5185\u5BB9\uFF0C\u5927\u5BB6\u53EF\u80FD\u4F1A\u6709\u4E00\u4E2A\u7591\u95EE\u3002</p><blockquote><p><strong>\u6709\u529E\u6CD5\u5728\u9879\u76EE\u8FD0\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u81EA\u52A8\u53D1\u73B0\u70EDkey\uFF0C\u7136\u540E\u7A0B\u5E8F\u81EA\u52A8\u5904\u7406\u4E48\uFF1F</strong></p></blockquote><p>\u55EF\uFF0C\u597D\u95EE\u9898\uFF0C\u90A3\u6211\u4EEC\u6765\u8BB2\u8BB2\u4E1A\u5185\u600E\u4E48\u505A\u7684\u3002\u5176\u5B9E\u53EA\u6709\u4E24\u6B65 (1)\u76D1\u63A7\u70EDkey (2)\u901A\u77E5\u7CFB\u7EDF\u505A\u5904\u7406 \u6B63\u5DE7\uFF0C\u524D\u51E0\u5929\u6709\u8D5E\u51FA\u4E86\u4E00\u7BC7\u300A\u6709\u8D5E\u900F\u660E\u591A\u7EA7\u7F13\u5B58\u89E3\u51B3\u65B9\u6848\uFF08TMC\uFF09\u300B\uFF0C\u91CC\u5934\u4E5F\u6709\u63D0\u5230\u70ED\u70B9key\u95EE\u9898\uFF0C\u6211\u4EEC\u521A\u597D\u501F\u6B64\u8BF4\u660E</p><h3 id="_4-1-\u76D1\u63A7\u70EDkey" tabindex="-1"><a class="header-anchor" href="#_4-1-\u76D1\u63A7\u70EDkey" aria-hidden="true">#</a> 4.1 \u76D1\u63A7\u70EDkey</h3><p>\u5728\u76D1\u63A7\u70EDkey\u65B9\u9762\uFF0C\u6709\u8D5E\u7528\u7684\u662F\u65B9\u5F0F\u4E8C\uFF1A<strong>\u5728\u5BA2\u6237\u7AEF\u8FDB\u884C\u6536\u96C6</strong>\u3002 \u5728\u300A\u6709\u8D5E\u900F\u660E\u591A\u7EA7\u7F13\u5B58\u89E3\u51B3\u65B9\u6848\uFF08TMC\uFF09\u300B\u4E2D\u6709\u4E00\u53E5\u8BDD\u63D0\u5230</p><blockquote><p><strong>TMC \u5BF9\u539F\u751Fjedis\u5305\u7684JedisPool\u548CJedis\u7C7B\u505A\u4E86\u6539\u9020\uFF0C\u5728JedisPool\u521D\u59CB\u5316\u8FC7\u7A0B\u4E2D\u96C6\u6210TMC\u201C\u70ED\u70B9\u53D1\u73B0\u201D+\u201C\u672C\u5730\u7F13\u5B58\u201D\u529F\u80FDHermes-SDK\u5305\u7684\u521D\u59CB\u5316\u903B\u8F91\u3002</strong></p></blockquote><p>\u4E5F\u5C31\u8BF4\u4EBA\u5BB6\u6539\u5199\u4E86jedis\u539F\u751F\u7684jar\u5305\uFF0C\u52A0\u5165\u4E86Hermes-SDK\u5305\u3002 \u90A3Hermes-SDK\u5305\u7528\u6765\u5E72\u561B\uFF1F OK\uFF0C\u5C31\u662F\u505A<strong>\u70ED\u70B9\u53D1\u73B0</strong>\u548C<strong>\u672C\u5730\u7F13\u5B58</strong>\u3002 \u4ECE\u76D1\u63A7\u7684\u89D2\u5EA6\u770B\uFF0C\u8BE5\u5305\u5BF9\u4E8EJedis-Client\u7684\u6BCF\u6B21key\u503C\u8BBF\u95EE\u8BF7\u6C42\uFF0CHermes-SDK \u90FD\u4F1A\u901A\u8FC7\u5176\u901A\u4FE1\u6A21\u5757\u5C06key\u8BBF\u95EE\u4E8B\u4EF6\u5F02\u6B65\u4E0A\u62A5\u7ED9Hermes\u670D\u52A1\u7AEF\u96C6\u7FA4\uFF0C\u4EE5\u4FBF\u5176\u6839\u636E\u4E0A\u62A5\u6570\u636E\u8FDB\u884C\u201C\u70ED\u70B9\u63A2\u6D4B\u201D\u3002</p><p>\u5F53\u7136\uFF0C\u8FD9\u53EA\u662F\u5176\u4E2D\u4E00\u79CD\u65B9\u5F0F\uFF0C\u6709\u7684\u516C\u53F8\u5728\u76D1\u63A7\u65B9\u9762\u7528\u7684\u662F\u65B9\u5F0F\u4E94:<strong>\u81EA\u5DF1\u6293\u5305\u8BC4\u4F30</strong>\u3002 \u5177\u4F53\u662F\u8FD9\u4E48\u505A\u7684\uFF0C\u5148\u5229\u7528flink\u642D\u5EFA\u4E00\u5957\u6D41\u5F0F\u8BA1\u7B97\u7CFB\u7EDF\u3002\u7136\u540E\u81EA\u5DF1\u5199\u4E00\u4E2A\u6293\u5305\u7A0B\u5E8F\u6293redis\u76D1\u542C\u7AEF\u53E3\u7684\u6570\u636E\uFF0C\u6293\u5230\u6570\u636E\u540E\u5F80kafka\u91CC\u4E22\u3002 \u63A5\u4E0B\u6765\uFF0C\u6D41\u5F0F\u8BA1\u7B97\u7CFB\u7EDF\u6D88\u8D39kafka\u91CC\u7684\u6570\u636E\uFF0C\u8FDB\u884C\u6570\u636E\u7EDF\u8BA1\u5373\u53EF\uFF0C\u4E5F\u80FD\u8FBE\u5230\u76D1\u63A7\u70EDkey\u7684\u76EE\u7684\u3002</p><h3 id="_4-2-\u901A\u77E5\u7CFB\u7EDF\u505A\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_4-2-\u901A\u77E5\u7CFB\u7EDF\u505A\u5904\u7406" aria-hidden="true">#</a> 4.2 \u901A\u77E5\u7CFB\u7EDF\u505A\u5904\u7406</h3><p>\u5728\u8FD9\u4E2A\u89D2\u5EA6\uFF0C\u6709\u8D5E\u7528\u7684\u662F\u4E0A\u9762\u7684\u89E3\u51B3\u65B9\u6848\u4E00:\u5229\u7528\u4E8C\u7EA7\u7F13\u5B58\u8FDB\u884C\u5904\u7406\u3002 \u6709\u8D5E\u5728\u76D1\u63A7\u5230\u70EDkey\u540E\uFF0CHermes\u670D\u52A1\u7AEF\u96C6\u7FA4\u4F1A\u901A\u8FC7\u5404\u79CD\u624B\u6BB5\u901A\u77E5\u5404\u4E1A\u52A1\u7CFB\u7EDF\u91CC\u7684Hermes-SDK\uFF0C\u544A\u8BC9\u4ED6\u4EEC:&quot;\u8001\u5F1F\uFF0C\u8FD9\u4E2Akey\u662F\u70EDkey\uFF0C\u8BB0\u5F97\u505A\u672C\u5730\u7F13\u5B58\u3002&quot; \u4E8E\u662FHermes-SDK\u5C31\u4F1A\u5C06\u8BE5key\u7F13\u5B58\u5728\u672C\u5730\uFF0C\u5BF9\u4E8E\u540E\u9762\u7684\u8BF7\u6C42\u3002Hermes-SDK\u53D1\u73B0\u8FD9\u4E2A\u662F\u4E00\u4E2A\u70EDkey\uFF0C\u76F4\u63A5\u4ECE\u672C\u5730\u4E2D\u62FF\uFF0C\u800C\u4E0D\u4F1A\u53BB\u8BBF\u95EE\u96C6\u7FA4\u3002</p><p>\u9664\u4E86\u8FD9\u79CD\u901A\u77E5\u65B9\u5F0F\u4EE5\u5916\u3002\u6211\u4EEC\u4E5F\u53EF\u4EE5\u8FD9\u4E48\u505A\uFF0C\u6BD4\u5982\u4F60\u7684\u6D41\u5F0F\u8BA1\u7B97\u7CFB\u7EDF\u76D1\u63A7\u5230\u70EDkey\u4E86\uFF0C\u5F80zookeeper\u91CC\u5934\u7684\u67D0\u4E2A\u8282\u70B9\u91CC\u5199\u3002\u7136\u540E\u4F60\u7684\u4E1A\u52A1\u7CFB\u7EDF\u76D1\u542C\u8BE5\u8282\u70B9\uFF0C\u53D1\u73B0\u8282\u70B9\u6570\u636E\u53D8\u5316\u4E86\uFF0C\u5C31\u4EE3\u8868\u53D1\u73B0\u70EDkey\u3002\u6700\u540E\u5F80\u672C\u5730\u7F13\u5B58\u91CC\u5199\uFF0C\u4E5F\u662F\u53EF\u4EE5\u7684\u3002</p><p>\u901A\u77E5\u65B9\u5F0F\u5404\u79CD\u5404\u6837\uFF0C\u5927\u5BB6\u53EF\u4EE5\u81EA\u7531\u53D1\u6325\u3002\u672C\u6587\u53EA\u662F\u63D0\u4F9B\u4E00\u4E2A\u601D\u8DEF\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,36),d={href:"https://www.cnblogs.com/rjzheng/p/10874537.html",target:"_blank",rel:"noopener noreferrer"};function k(h,u){const a=i("ExternalLinkIcon");return n(),o("div",null,[l,e("p",null,[e("a",d,[t("\u8C08\u8C08redis\u7684\u70EDkey\u95EE\u9898\u5982\u4F55\u89E3\u51B3 "),p(a)])])])}const b=s(c,[["render",k],["__file","db-redis-x-hot-key.html.vue"]]);export{b as default};
