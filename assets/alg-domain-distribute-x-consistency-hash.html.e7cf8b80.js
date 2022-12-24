import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as i,a,b as t,d as p,f as l,r as o}from"./app.2a33308c.js";const c={},h=l(`<h1 id="\u5206\u5E03\u5F0F\u7B97\u6CD5-\u4E00\u81F4\u6027hash\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5206\u5E03\u5F0F\u7B97\u6CD5-\u4E00\u81F4\u6027hash\u7B97\u6CD5" aria-hidden="true">#</a> \u5206\u5E03\u5F0F\u7B97\u6CD5-\u4E00\u81F4\u6027Hash\u7B97\u6CD5</h1><blockquote><p>\u4E00\u81F4\u6027Hash\u7B97\u6CD5\u662F\u4E2A\u7ECF\u5178\u7B97\u6CD5\uFF0CHash\u73AF\u7684\u5F15\u5165\u662F\u4E3A\u89E3\u51B3<code>\u5355\u8C03\u6027(Monotonicity)</code>\u7684\u95EE\u9898\uFF1B\u865A\u62DF\u8282\u70B9\u7684\u5F15\u5165\u662F\u4E3A\u4E86\u89E3\u51B3<code>\u5E73\u8861\u6027(Balance)</code>\u95EE\u9898\u3002</p></blockquote><h2 id="_1-\u4E00\u81F4\u6027hash\u7B97\u6CD5\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#_1-\u4E00\u81F4\u6027hash\u7B97\u6CD5\u5F15\u5165" aria-hidden="true">#</a> 1. \u4E00\u81F4\u6027Hash\u7B97\u6CD5\u5F15\u5165</h2><p>\u5728\u5206\u5E03\u5F0F\u96C6\u7FA4\u4E2D\uFF0C\u5BF9\u673A\u5668\u7684\u6DFB\u52A0\u5220\u9664\uFF0C\u6216\u8005\u673A\u5668\u6545\u969C\u540E\u81EA\u52A8\u8131\u79BB\u96C6\u7FA4\u8FD9\u4E9B\u64CD\u4F5C\u662F\u5206\u5E03\u5F0F\u96C6\u7FA4\u7BA1\u7406\u6700\u57FA\u672C\u7684\u529F\u80FD\u3002\u5982\u679C\u91C7\u7528\u5E38\u7528\u7684hash(object)%N\u7B97\u6CD5\uFF0C\u90A3\u4E48\u5728\u6709\u673A\u5668\u6DFB\u52A0\u6216\u8005\u5220\u9664\u540E\uFF0C\u5F88\u591A\u539F\u6709\u7684\u6570\u636E\u5C31\u65E0\u6CD5\u627E\u5230\u4E86\uFF0C\u8FD9\u6837\u4E25\u91CD\u7684\u8FDD\u53CD\u4E86\u5355\u8C03\u6027\u539F\u5219\u3002</p><h2 id="_2-\u4E00\u81F4\u6027hash\u7B97\u6CD5\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_2-\u4E00\u81F4\u6027hash\u7B97\u6CD5\u7B80\u4ECB" aria-hidden="true">#</a> 2.\u4E00\u81F4\u6027Hash\u7B97\u6CD5\u7B80\u4ECB</h2><p>\u4E00\u81F4\u6027\u54C8\u5E0C\u7B97\u6CD5\u57281997\u5E74\u7531\u9EBB\u7701\u7406\u5DE5\u5B66\u9662\u63D0\u51FA\u7684\u4E00\u79CD\u5206\u5E03\u5F0F\u54C8\u5E0C(DHT)\u5B9E\u73B0\u7B97\u6CD5\uFF0C\u8BBE\u8BA1\u76EE\u6807\u662F\u4E3A\u4E86\u89E3\u51B3\u56E0\u7279\u7F51\u4E2D\u7684\u70ED\u70B9(Hot spot)\u95EE\u9898\uFF0C\u521D\u8877\u548CCARP\u5341\u5206\u7C7B\u4F3C\u3002\u4E00\u81F4\u6027\u54C8\u5E0C\u4FEE\u6B63\u4E86CARP\u4F7F\u7528\u7684\u7B80 \u5355\u54C8\u5E0C\u7B97\u6CD5\u5E26\u6765\u7684\u95EE\u9898\uFF0C\u4F7F\u5F97\u5206\u5E03\u5F0F\u54C8\u5E0C(DHT)\u53EF\u4EE5\u5728P2P\u73AF\u5883\u4E2D\u771F\u6B63\u5F97\u5230\u5E94\u7528\u3002</p><p>\u4E00\u81F4\u6027hash\u7B97\u6CD5\u63D0\u51FA\u4E86\u5728\u52A8\u6001\u53D8\u5316\u7684Cache\u73AF\u5883\u4E2D\uFF0C\u5224\u5B9A\u54C8\u5E0C\u7B97\u6CD5\u597D\u574F\u7684\u56DB\u4E2A\u5B9A\u4E49:</p><ul><li><code>\u5E73\u8861\u6027(Balance)</code>: \u5E73\u8861\u6027\u662F\u6307\u54C8\u5E0C\u7684\u7ED3\u679C\u80FD\u591F\u5C3D\u53EF\u80FD\u5206\u5E03\u5230\u6240\u6709\u7684\u7F13\u51B2\u4E2D\u53BB\uFF0C\u8FD9\u6837\u53EF\u4EE5\u4F7F\u5F97\u6240\u6709\u7684\u7F13\u51B2\u7A7A\u95F4\u90FD\u5F97\u5230\u5229\u7528\u3002\u5F88\u591A\u54C8\u5E0C\u7B97\u6CD5\u90FD\u80FD\u591F\u6EE1\u8DB3\u8FD9\u4E00\u6761\u4EF6\u3002</li><li><code>\u5355\u8C03\u6027(Monotonicity)</code>: \u5355\u8C03\u6027\u662F\u6307\u5982\u679C\u5DF2\u7ECF\u6709\u4E00\u4E9B\u5185\u5BB9\u901A\u8FC7\u54C8\u5E0C\u5206\u6D3E\u5230\u4E86\u76F8\u5E94\u7684\u7F13\u51B2\u4E2D\uFF0C\u53C8\u6709\u65B0\u7684\u7F13\u51B2\u52A0\u5165\u5230\u7CFB\u7EDF\u4E2D\u3002\u54C8\u5E0C\u7684\u7ED3\u679C\u5E94\u80FD\u591F\u4FDD\u8BC1\u539F\u6709\u5DF2\u5206\u914D\u7684\u5185\u5BB9\u53EF\u4EE5\u88AB\u6620\u5C04\u5230\u539F\u6709\u7684\u6216\u8005\u65B0\u7684\u7F13\u51B2\u4E2D\u53BB\uFF0C\u800C\u4E0D\u4F1A\u88AB\u6620\u5C04\u5230\u65E7\u7684\u7F13\u51B2\u96C6\u5408\u4E2D\u7684\u5176\u4ED6\u7F13\u51B2\u533A\u3002</li><li><code>\u5206\u6563\u6027(Spread)</code>: \u5728\u5206\u5E03\u5F0F\u73AF\u5883\u4E2D\uFF0C\u7EC8\u7AEF\u6709\u53EF\u80FD\u770B\u4E0D\u5230\u6240\u6709\u7684\u7F13\u51B2\uFF0C\u800C\u662F\u53EA\u80FD\u770B\u5230\u5176\u4E2D\u7684\u4E00\u90E8\u5206\u3002\u5F53\u7EC8\u7AEF\u5E0C\u671B\u901A\u8FC7\u54C8\u5E0C\u8FC7\u7A0B\u5C06\u5185\u5BB9\u6620\u5C04\u5230\u7F13\u51B2\u4E0A\u65F6\uFF0C\u7531\u4E8E\u4E0D\u540C\u7EC8\u7AEF\u6240\u89C1\u7684\u7F13\u51B2\u8303\u56F4\u6709\u53EF\u80FD\u4E0D\u540C\uFF0C\u4ECE\u800C\u5BFC\u81F4\u54C8\u5E0C\u7684\u7ED3\u679C\u4E0D\u4E00\u81F4\uFF0C\u6700\u7EC8\u7684\u7ED3\u679C\u662F\u76F8\u540C\u7684\u5185\u5BB9\u88AB\u4E0D\u540C\u7684\u7EC8\u7AEF\u6620\u5C04\u5230\u4E0D\u540C\u7684\u7F13\u51B2\u533A\u4E2D\u3002\u8FD9\u79CD\u60C5\u51B5\u663E\u7136\u662F\u5E94\u8BE5\u907F\u514D\u7684\uFF0C\u56E0\u4E3A\u5B83\u5BFC\u81F4\u76F8\u540C\u5185\u5BB9\u88AB\u5B58\u50A8\u5230\u4E0D\u540C\u7F13\u51B2\u4E2D\u53BB\uFF0C\u964D\u4F4E\u4E86\u7CFB\u7EDF\u5B58\u50A8\u7684\u6548\u7387\u3002\u5206\u6563\u6027\u7684\u5B9A\u4E49\u5C31\u662F\u4E0A\u8FF0\u60C5\u51B5\u53D1\u751F\u7684\u4E25\u91CD\u7A0B\u5EA6\u3002\u597D\u7684\u54C8\u5E0C\u7B97\u6CD5\u5E94\u80FD\u591F\u5C3D\u91CF\u907F\u514D\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5\u53D1\u751F\uFF0C\u4E5F\u5C31\u662F\u5C3D\u91CF\u964D\u4F4E\u5206\u6563\u6027\u3002</li><li><code>\u8D1F\u8F7D(Load)</code>: \u8D1F\u8F7D\u95EE\u9898\u5B9E\u9645\u4E0A\u662F\u4ECE\u53E6\u4E00\u4E2A\u89D2\u5EA6\u770B\u5F85\u5206\u6563\u6027\u95EE\u9898\u3002\u65E2\u7136\u4E0D\u540C\u7684\u7EC8\u7AEF\u53EF\u80FD\u5C06\u76F8\u540C\u7684\u5185\u5BB9\u6620\u5C04\u5230\u4E0D\u540C\u7684\u7F13\u51B2\u533A\u4E2D\uFF0C\u90A3\u4E48\u5BF9\u4E8E\u4E00\u4E2A\u7279\u5B9A\u7684\u7F13\u51B2\u533A\u800C\u8A00\uFF0C\u4E5F\u53EF\u80FD\u88AB\u4E0D\u540C\u7684\u7528\u6237\u6620\u5C04\u4E3A\u4E0D\u540C \u7684\u5185\u5BB9\u3002\u4E0E\u5206\u6563\u6027\u4E00\u6837\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E5F\u662F\u5E94\u5F53\u907F\u514D\u7684\uFF0C\u56E0\u6B64\u597D\u7684\u54C8\u5E0C\u7B97\u6CD5\u5E94\u80FD\u591F\u5C3D\u91CF\u964D\u4F4E\u7F13\u51B2\u7684\u8D1F\u8377\u3002</li></ul><h2 id="_3-\u4E00\u81F4\u6027hash\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-\u4E00\u81F4\u6027hash\u7B97\u6CD5" aria-hidden="true">#</a> 3. \u4E00\u81F4\u6027Hash\u7B97\u6CD5</h2><h3 id="_3-1-hash\u73AF" tabindex="-1"><a class="header-anchor" href="#_3-1-hash\u73AF" aria-hidden="true">#</a> 3.1 Hash\u73AF</h3><p>\u4F7F\u7528\u5E38\u89C1\u7684hash\u7B97\u6CD5\u53EF\u4EE5\u628A\u4E00\u4E2Akey\u503C\u54C8\u5E0C\u5230\u4E00\u4E2A\u5177\u67092^32\u4E2A\u6876\u7684\u7A7A\u95F4\u4E2D\u3002\u4E5F\u53EF\u4EE5\u7406\u89E3\u6210\uFF0C\u5C06key\u503C\u54C8\u5E0C\u5230 [0, 2^32) \u7684\u4E00\u4E2A\u6570\u5B57\u7A7A\u95F4\u4E2D\u3002 \u6211\u4EEC\u5047\u8BBE\u8FD9\u4E2A\u662F\u4E2A\u9996\u5C3E\u8FDE\u63A5\u7684\u73AF\u5F62\u7A7A\u95F4\u3002\u5982\u4E0B\u56FE:</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618205553148.png" alt="image-20220618205553148"><p>\u5047\u8BBE\u6211\u4EEC\u73B0\u5728\u6709key1,key2,key3,key4 4\u4E2Akey\u503C\uFF0C\u6211\u4EEC\u901A\u8FC7\u4E00\u5B9A\u7684hash\u7B97\u6CD5\uFF0C\u5C06\u5176\u5BF9\u5E94\u5230\u4E0A\u9762\u7684\u73AF\u5F62hash\u7A7A\u95F4\u4E2D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">k1</span><span class="token operator">=</span>hash<span class="token punctuation">(</span>key1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token assign-left variable">k2</span><span class="token operator">=</span>hash<span class="token punctuation">(</span>key2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token assign-left variable">k3</span><span class="token operator">=</span>hash<span class="token punctuation">(</span>key3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token assign-left variable">k4</span><span class="token operator">=</span>hash<span class="token punctuation">(</span>key4<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618205634068.png" alt="image-20220618205634068"><p>\u540C\u6837\u7684\uFF0C\u5047\u8BBE\u6211\u4EEC\u67093\u53F0cache\u670D\u52A1\u5668\uFF0C\u628A\u7F13\u5B58\u670D\u52A1\u5668\u901A\u8FC7hash\u7B97\u6CD5\uFF0C\u52A0\u5165\u5230\u4E0A\u8FF0\u7684\u73AF\u4E2D\u3002\u4E00\u822C\u60C5\u51B5\u4E0B\u662F\u6839\u636E\u673A\u5668\u7684IP\u5730\u5740\u6216\u8005\u552F\u4E00\u7684\u8BA1\u7B97\u673A\u522B\u540D\u8FDB\u884C\u54C8\u5E0C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">c1</span><span class="token operator">=</span>hash<span class="token punctuation">(</span>cache1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token assign-left variable">c2</span><span class="token operator">=</span>hash<span class="token punctuation">(</span>cache2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token assign-left variable">c3</span><span class="token operator">=</span>hash<span class="token punctuation">(</span>cache3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618205731230.png" alt="image-20220618205731230"><p>\u63A5\u4E0B\u6765\u5C31\u662F\u6570\u636E\u5982\u4F55\u5B58\u50A8\u5230cache\u670D\u52A1\u5668\u4E0A\u4E86\uFF0Ckey\u503C\u54C8\u5E0C\u4E4B\u540E\u7684\u7ED3\u679C\u987A\u65F6\u9488\u627E\u4E0A\u8FF0\u73AF\u5F62hash\u7A7A\u95F4\u4E2D\uFF0C\u8DDD\u79BB\u81EA\u5DF1\u6700\u8FD1\u7684\u673A\u5668\u8282\u70B9\uFF0C\u7136\u540E\u5C06\u6570\u636E\u5B58\u50A8\u5230\u4E0A\u9762\uFF0C \u5982\u4E0A\u56FE\u6240\u793A\uFF0Ck1 \u5B58\u50A8\u5230 c3 \u670D\u52A1\u5668\u4E0A\uFF0C k4,k3\u5B58\u50A8\u5230c1\u670D\u52A1\u5668\u4E0A\uFF0C k2\u5B58\u50A8\u5728c2\u670D\u52A1\u5668\u4E0A\u3002\u7528\u56FE\u8868\u793A\u5982\u4E0B:</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220618205821327.png" alt="image-20220618205821327"></p><h3 id="_3-2-\u5220\u9664\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5220\u9664\u8282\u70B9" aria-hidden="true">#</a> 3.2 \u5220\u9664\u8282\u70B9</h3><p>\u5047\u8BBEcache3\u670D\u52A1\u5668\u5B95\u673A\uFF0C\u8FD9\u65F6\u5019\u9700\u8981\u4ECE\u96C6\u7FA4\u4E2D\u5C06\u5176\u6458\u9664\u3002\u90A3\u4E48\uFF0C\u4E4B\u524D\u5B58\u50A8\u518Dc3\u4E0A\u7684k1\uFF0C\u5C06\u4F1A\u987A\u65F6\u9488\u5BFB\u627E\u8DDD\u79BB\u5B83\u6700\u8FD1\u7684\u4E00\u4E2A\u8282\u70B9\uFF0C\u4E5F\u5C31\u662Fc1\u8282\u70B9\uFF0C\u8FD9\u6837\uFF0Ck1\u5C31\u4F1A\u5B58\u50A8\u5230c1\u4E0A\u4E86\uFF0C\u770B\u4E00\u770B\u4E0B\u4E0B\u9762\u7684\u56FE\uFF0C\u6BD4\u8F83\u6E05\u6670\u3002</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618205958465.png" alt="image-20220618205958465"><p>\u6458\u9664c3\u8282\u70B9\u4E4B\u540E\uFF0C\u53EA\u5F71\u54CD\u5230\u4E86\u539F\u5148\u5B58\u50A8\u518Dc3\u4E0A\u7684k1\uFF0C\u800Ck3\u3001k4\u3001k2\u90FD\u6CA1\u6709\u53D7\u5230\u5F71\u54CD\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u89E3\u51B3\u4E86\u6700\u5F00\u59CB\u7684\u89E3\u51B3\u65B9\u6848(hash(key)%N)\u4E2D\u53EF\u80FD\u5E26\u6765\u7684\u96EA\u5D29\u95EE\u9898\u3002</p><h3 id="_3-3-\u589E\u52A0\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_3-3-\u589E\u52A0\u8282\u70B9" aria-hidden="true">#</a> 3.3 \u589E\u52A0\u8282\u70B9</h3><p>\u65B0\u589EC4\u8282\u70B9\u4E4B\u540E\uFF0C\u539F\u5148\u5B58\u50A8\u5230C1\u7684k4\uFF0C\u8FC1\u79FB\u5230\u4E86C4\uFF0C\u5206\u62C5\u4E86C1\u4E0A\u7684\u5B58\u50A8\u538B\u529B\u548C\u6D41\u91CF\u538B\u529B\u3002</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618210103372.png" alt="image-20220618210103372"><h3 id="_3-4-\u4E0D\u5E73\u8861\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_3-4-\u4E0D\u5E73\u8861\u7684\u95EE\u9898" aria-hidden="true">#</a> 3.4 \u4E0D\u5E73\u8861\u7684\u95EE\u9898</h3><p>\u4E0A\u9762\u7684\u7B80\u5355\u7684\u4E00\u81F4\u6027hash\u7684\u65B9\u6848\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4F46\u4F9D\u65E7\u5B58\u5728\u95EE\u9898: \u4E00\u4E2A\u8282\u70B9\u5B95\u673A\u4E4B\u540E\uFF0C\u6570\u636E\u9700\u8981\u843D\u5230\u8DDD\u79BB\u4ED6\u6700\u8FD1\u7684\u8282\u70B9\u4E0A\uFF0C\u4F1A\u5BFC\u81F4\u4E0B\u4E2A\u8282\u70B9\u7684\u538B\u529B\u7A81\u7136\u589E\u5927\uFF0C\u53EF\u80FD\u5BFC\u81F4\u96EA\u5D29\uFF0C\u6574\u4E2A\u670D\u52A1\u6302\u6389\u3002</p><p>\u5982\u4E0B\u56FE\u6240\u793A:</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618210148722.png" alt="image-20220618210148722"><p>\u5F53\u8282\u70B9C3\u6458\u9664\u4E4B\u540E\uFF0C\u4E4B\u524D\u518DC3\u4E0A\u7684k1\u5C31\u8981\u8FC1\u79FB\u5230C1\u4E0A\uFF0C\u8FD9\u65F6\u5019\u5E26\u6765\u4E86\u4E24\u90E8\u5206\u7684\u538B\u529B:</p><ul><li>\u4E4B\u524D\u8BF7\u6C42\u5230C3\u4E0A\u7684\u6D41\u91CF\u8F6C\u5AC1\u5230\u4E86C1\u4E0A,\u4F1A\u5BFC\u81F4C1\u7684\u6D41\u91CF\u589E\u52A0\uFF0C\u5982\u679C\u4E4B\u524DC3\u4E0A\u5B58\u5728\u70ED\u70B9\u6570\u636E\uFF0C\u5219\u53EF\u80FD\u5BFC\u81F4C1\u625B\u4E0D\u4F4F\u538B\u529B\u6302\u6389\u3002</li><li>\u4E4B\u524D\u5B58\u50A8\u5230C3\u4E0A\u7684key\u503C\u8F6C\u4E49\u5230\u4E86C1\uFF0C\u4F1A\u5BFC\u81F4C1\u7684\u5185\u5BB9\u5360\u7528\u91CF\u589E\u52A0\uFF0C\u53EF\u80FD\u5B58\u5728\u74F6\u9888\u3002</li></ul><p>\u5F53\u4E0A\u9762\u4E24\u4E2A\u538B\u529B\u53D1\u751F\u7684\u65F6\u5019\uFF0C\u53EF\u80FD\u5BFC\u81F4C1\u8282\u70B9\u4E5F\u5B95\u673A\u4E86\u3002\u90A3\u4E48\u538B\u529B\u4FBF\u4F1A\u4F20\u9012\u5230C2\u4E0A\uFF0C\u53C8\u51FA\u73B0\u4E86\u7C7B\u4F3C\u6EDA\u96EA\u7403\u7684\u60C5\u51B5\uFF0C\u670D\u52A1\u538B\u529B\u51FA\u73B0\u4E86\u96EA\u5D29\uFF0C\u5BFC\u81F4\u6574\u4E2A\u670D\u52A1\u4E0D\u53EF\u7528\u3002\u8FD9\u4E00\u70B9\u8FDD\u80CC\u4E86\u6700\u5F00\u59CB\u63D0\u5230\u7684\u56DB\u4E2A\u539F\u5219\u4E2D\u7684 <code>\u5E73\u8861\u6027</code>\uFF0C \u8282\u70B9\u5B95\u673A\u4E4B\u540E\uFF0C\u6D41\u91CF\u53CA\u5185\u5B58\u7684\u5206\u914D\u65B9\u5F0F\u6253\u7834\u4E86\u539F\u6709\u7684\u5E73\u8861\u3002</p><h3 id="_3-5-\u865A\u62DF\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_3-5-\u865A\u62DF\u8282\u70B9" aria-hidden="true">#</a> 3.5 \u865A\u62DF\u8282\u70B9</h3><p>\u201C\u865A\u62DF\u8282\u70B9\u201D( virtual node )\u662F\u5B9E\u9645\u8282\u70B9(\u673A\u5668)\u5728 hash \u7A7A\u95F4\u7684\u590D\u5236\u54C1( replica )\uFF0C\u4E00\u5B9E\u9645\u4E2A\u8282\u70B9(\u673A\u5668)\u5BF9\u5E94\u4E86\u82E5\u5E72\u4E2A\u201C\u865A\u62DF\u8282\u70B9\u201D\uFF0C\u8FD9\u4E2A\u5BF9\u5E94\u4E2A\u6570\u4E5F\u79F0\u4E3A\u201C\u590D\u5236\u4E2A\u6570\u201D\uFF0C\u201C\u865A\u62DF\u8282\u70B9\u201D\u5728 hash \u7A7A\u95F4\u4E2D\u4EE5hash\u503C\u6392\u5217\u3002</p><p>\u4F9D\u65E7\u7528\u56FE\u7247\u6765\u89E3\u91CA\uFF0C\u5047\u8BBE\u5B58\u5728\u4EE5\u4E0B\u7684\u771F\u5B9E\u8282\u70B9\u548C\u865A\u62DF\u8282\u70B9\u7684\u5BF9\u5E94\u5173\u7CFB\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Visual100\u2014<span class="token operator">&gt;</span> Real1
Visual101\u2014<span class="token operator">&gt;</span> Real1
Visual200\u2014<span class="token operator">&gt;</span> Real2
Visual201\u2014<span class="token operator">&gt;</span> Real2
Visual300\u2014<span class="token operator">&gt;</span> Real3
Visual301\u2014<span class="token operator">&gt;</span> Real3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u6837\u7684\uFF0Chash\u4E4B\u540E\u7684\u7ED3\u679C\u5982\u4E0B:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>hash<span class="token punctuation">(</span>Visual100<span class="token punctuation">)</span>\u2014<span class="token operator">&gt;</span> V100  \u2014<span class="token operator">&gt;</span> Real1
hash<span class="token punctuation">(</span>Visual101<span class="token punctuation">)</span>\u2014<span class="token operator">&gt;</span> V101  \u2014<span class="token operator">&gt;</span> Real1
hash<span class="token punctuation">(</span>Visual200<span class="token punctuation">)</span>\u2014<span class="token operator">&gt;</span> V200  \u2014<span class="token operator">&gt;</span> Real2
hash<span class="token punctuation">(</span>Visual201<span class="token punctuation">)</span>\u2014<span class="token operator">&gt;</span> V201  \u2014<span class="token operator">&gt;</span> Real2
hash<span class="token punctuation">(</span>Visual300<span class="token punctuation">)</span>\u2014<span class="token operator">&gt;</span> V300  \u2014<span class="token operator">&gt;</span> Real3
hash<span class="token punctuation">(</span>Visual301<span class="token punctuation">)</span>\u2014<span class="token operator">&gt;</span> V301  \u2014<span class="token operator">&gt;</span> Real3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>key\u503C\u7684hash\u7ED3\u679C\u5982\u4E0A\uFF0C\u8FD9\u91CC\u6682\u65F6\u4E0D\u5199\u4E86\u3002</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618210446327.png" alt="image-20220618210446327"><p>\u548C\u4E4B\u524D\u4ECB\u7ECD\u7684\u4E0D\u6DFB\u52A0\u865A\u62DF\u8282\u70B9\u7684\u7C7B\u4F3C\uFF0C\u4E3B\u8981\u804A\u4E0B\u5982\u679C\u5B95\u673A\u4E4B\u540E\u7684\u60C5\u51B5\u3002</p><p>\u5047\u8BBEReal1\u673A\u5668\u5B95\u673A\uFF0C\u5219\u4F1A\u53D1\u751F\u4E00\u4E0B\u60C5\u51B5\u3002</p><ul><li>\u539F\u5148\u5B58\u50A8\u5728\u865A\u62DF\u8282\u70B9V100\u4E0A\u7684k1\u6570\u636E\u5C06\u8FC1\u79FB\u5230V301\u4E0A\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u8FC1\u79FB\u5230\u4E86Real3\u673A\u5668\u4E0A\u3002</li><li>\u539F\u5148\u5B58\u50A8\u518D\u865A\u62DF\u8282\u70B9V101\u4E0A\u7684k4\u6570\u636E\u5C06\u8FC1\u79FB\u5230V200\u4E0A\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u8FC1\u79FB\u5230\u4E86Real2\u673A\u5668\u4E0A\u3002</li></ul><p>\u7ED3\u679C\u5982\u4E0B\u56FE:</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618210602989.png" alt="image-20220618210602989"><p>\u8FD9\u4E2A\u5C31\u89E3\u51B3\u4E4B\u524D\u7684\u95EE\u9898\u4E86\uFF0C\u67D0\u4E2A\u8282\u70B9\u5B95\u673A\u4E4B\u540E\uFF0C\u5B58\u50A8\u53CA\u6D41\u91CF\u538B\u529B\u5E76\u6CA1\u6709\u5168\u90E8\u8F6C\u79FB\u5230\u67D0\u53F0\u673A\u5668\u4E0A\uFF0C\u800C\u662F\u5206\u6563\u5230\u4E86\u591A\u53F0\u8282\u70B9\u4E0A\u3002\u89E3\u51B3\u4E86\u8282\u70B9\u5B95\u673A\u53EF\u80FD\u5B58\u5728\u7684\u96EA\u5D29\u95EE\u9898\u3002</p><p>\u5F53\u7269\u7406\u8282\u70B9\u591A\u7684\u65F6\u5019\uFF0C\u865A\u62DF\u8282\u70B9\u591A\uFF0C\u8FD9\u4E2A\u7684\u96EA\u5D29\u53EF\u80FD\u5C31\u8D8A\u5C0F\u3002</p><h2 id="_4-\u4E00\u81F4\u6027hash\u7684\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_4-\u4E00\u81F4\u6027hash\u7684\u5E94\u7528" aria-hidden="true">#</a> 4. \u4E00\u81F4\u6027Hash\u7684\u5E94\u7528</h2><h3 id="_4-1-nginx\u8D1F\u8F7D\u5747\u8861" tabindex="-1"><a class="header-anchor" href="#_4-1-nginx\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a> 4.1 nginx\u8D1F\u8F7D\u5747\u8861</h3><blockquote><p>\u4E00\u81F4\u6027Hash\u662F\u4E00\u79CD\u7279\u6B8A\u7684Hash\u7B97\u6CD5\uFF0C\u7531\u4E8E\u5176\u5747\u8861\u6027\u3001\u6301\u4E45\u6027\u7684\u6620\u5C04\u7279\u70B9\uFF0C\u88AB\u5E7F\u6CDB\u7684\u5E94\u7528\u4E8E\u8D1F\u8F7D\u5747\u8861\u9886\u57DF\uFF0C\u5982nginx\u548Cmemcached\u90FD\u91C7\u7528\u4E86\u4E00\u81F4\u6027Hash\u6765\u4F5C\u4E3A\u96C6\u7FA4\u8D1F\u8F7D\u5747\u8861\u7684\u65B9\u6848\u3002</p></blockquote><h3 id="_4-2-redis\u96C6\u7FA4\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4-2-redis\u96C6\u7FA4\u6A21\u5F0F" aria-hidden="true">#</a> 4.2 Redis\u96C6\u7FA4\u6A21\u5F0F</h3><blockquote><p>Redis\u96C6\u7FA4\u6A21\u5F0F\u4E5F\u4F7F\u7528\u4E86\u4E00\u81F4\u6027hash\u7B97\u6CD5\uFF1A</p></blockquote><ol><li><p>\u6240\u6709\u7684redis\u8282\u70B9\u5F7C\u6B64\u4E92\u8054(PING-PONG\u673A\u5236),\u5185\u90E8\u4F7F\u7528\u4E8C\u8FDB\u5236\u534F\u8BAE\u4F18\u5316\u4F20\u8F93\u901F\u5EA6\u548C\u5E26\u5BBD.</p></li><li><p>\u8282\u70B9\u7684fail\u662F\u901A\u8FC7\u96C6\u7FA4\u4E2D\u8D85\u8FC7\u534A\u6570\u7684\u8282\u70B9\u68C0\u6D4B\u5931\u6548\u65F6\u624D\u751F\u6548.</p></li><li><p>\u5BA2\u6237\u7AEF\u4E0Eredis\u8282\u70B9\u76F4\u8FDE,\u4E0D\u9700\u8981\u4E2D\u95F4proxy\u5C42.\u5BA2\u6237\u7AEF\u4E0D\u9700\u8981\u8FDE\u63A5\u96C6\u7FA4\u6240\u6709\u8282\u70B9,\u8FDE\u63A5\u96C6\u7FA4\u4E2D\u4EFB\u4F55\u4E00\u4E2A\u53EF\u7528\u8282\u70B9\u5373\u53EF</p></li><li><p>redis-cluster\u628A\u6240\u6709\u7684\u7269\u7406\u8282\u70B9\u6620\u5C04\u5230[0-16383]slot\uFF08\u63D2\u69FD\uFF09\u4E0A,cluster \u8D1F\u8D23\u7EF4\u62A4node&lt;-&gt;slot&lt;-&gt;value</p></li></ol><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,56),r={href:"https://pdai.tech/md/algorithm/alg-domain-distribute-x-consistency-hash.html",target:"_blank",rel:"noopener noreferrer"};function d(u,g){const s=o("ExternalLinkIcon");return e(),i("div",null,[h,a("p",null,[a("a",r,[t("\u5206\u5E03\u5F0F\u7B97\u6CD5 - \u4E00\u81F4\u6027Hash\u7B97\u6CD5"),p(s)])])])}const m=n(c,[["render",d],["__file","alg-domain-distribute-x-consistency-hash.html.vue"]]);export{m as default};
