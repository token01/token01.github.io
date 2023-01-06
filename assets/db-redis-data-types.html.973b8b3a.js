import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as o,a as s,b as a,d as t,f as e,r as p}from"./app.abe539cb.js";const l={},d=e(`<h1 id="redis\u5165\u95E8-\u6570\u636E\u7C7B\u578B-5\u79CD\u57FA\u7840\u6570\u636E\u7C7B\u578B\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#redis\u5165\u95E8-\u6570\u636E\u7C7B\u578B-5\u79CD\u57FA\u7840\u6570\u636E\u7C7B\u578B\u8BE6\u89E3" aria-hidden="true">#</a> Redis\u5165\u95E8 - \u6570\u636E\u7C7B\u578B\uFF1A5\u79CD\u57FA\u7840\u6570\u636E\u7C7B\u578B\u8BE6\u89E3</h1><h2 id="_1-redis\u6570\u636E\u7ED3\u6784\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-redis\u6570\u636E\u7ED3\u6784\u7B80\u4ECB" aria-hidden="true">#</a> 1. Redis\u6570\u636E\u7ED3\u6784\u7B80\u4ECB</h2><p>\u9996\u5148\u5BF9redis\u6765\u8BF4\uFF0C\u6240\u6709\u7684key\uFF08\u952E\uFF09\u90FD\u662F\u5B57\u7B26\u4E32\u3002\u6211\u4EEC\u5728\u8C08\u57FA\u7840\u6570\u636E\u7ED3\u6784\u65F6\uFF0C\u8BA8\u8BBA\u7684\u662F\u5B58\u50A8\u503C\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u4E3B\u8981\u5305\u62EC\u5E38\u89C1\u76845\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u5206\u522B\u662F\uFF1AString\u3001List\u3001Set\u3001Zset\u3001Hash\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220622210134108.png" alt="image-20220622210134108"></p><table><thead><tr><th>\u7ED3\u6784\u7C7B\u578B</th><th>\u7ED3\u6784\u5B58\u50A8\u7684\u503C</th><th>\u7ED3\u6784\u7684\u8BFB\u5199\u80FD\u529B</th></tr></thead><tbody><tr><td><strong>String\u5B57\u7B26\u4E32</strong></td><td>\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u3001\u6574\u6570\u6216\u6D6E\u70B9\u6570</td><td>\u5BF9\u6574\u4E2A\u5B57\u7B26\u4E32\u6216\u5B57\u7B26\u4E32\u7684\u4E00\u90E8\u5206\u8FDB\u884C\u64CD\u4F5C\uFF1B\u5BF9\u6574\u6570\u6216\u6D6E\u70B9\u6570\u8FDB\u884C\u81EA\u589E\u6216\u81EA\u51CF\u64CD\u4F5C\uFF1B</td></tr><tr><td><strong>List\u5217\u8868</strong></td><td>\u4E00\u4E2A\u94FE\u8868\uFF0C\u94FE\u8868\u4E0A\u7684\u6BCF\u4E2A\u8282\u70B9\u90FD\u5305\u542B\u4E00\u4E2A\u5B57\u7B26\u4E32</td><td>\u5BF9\u94FE\u8868\u7684\u4E24\u7AEF\u8FDB\u884Cpush\u548Cpop\u64CD\u4F5C\uFF0C\u8BFB\u53D6\u5355\u4E2A\u6216\u591A\u4E2A\u5143\u7D20\uFF1B\u6839\u636E\u503C\u67E5\u627E\u6216\u5220\u9664\u5143\u7D20\uFF1B</td></tr><tr><td><strong>Set\u96C6\u5408</strong></td><td>\u5305\u542B\u5B57\u7B26\u4E32\u7684\u65E0\u5E8F\u96C6\u5408</td><td>\u5B57\u7B26\u4E32\u7684\u96C6\u5408\uFF0C\u5305\u542B\u57FA\u7840\u7684\u65B9\u6CD5\u6709\u770B\u662F\u5426\u5B58\u5728\u6DFB\u52A0\u3001\u83B7\u53D6\u3001\u5220\u9664\uFF1B\u8FD8\u5305\u542B\u8BA1\u7B97\u4EA4\u96C6\u3001\u5E76\u96C6\u3001\u5DEE\u96C6\u7B49</td></tr><tr><td><strong>Hash\u6563\u5217</strong></td><td>\u5305\u542B\u952E\u503C\u5BF9\u7684\u65E0\u5E8F\u6563\u5217\u8868</td><td>\u5305\u542B\u65B9\u6CD5\u6709\u6DFB\u52A0\u3001\u83B7\u53D6\u3001\u5220\u9664\u5355\u4E2A\u5143\u7D20</td></tr><tr><td><strong>Zset\u6709\u5E8F\u96C6\u5408</strong></td><td>\u548C\u6563\u5217\u4E00\u6837\uFF0C\u7528\u4E8E\u5B58\u50A8\u952E\u503C\u5BF9</td><td>\u5B57\u7B26\u4E32\u6210\u5458\u4E0E\u6D6E\u70B9\u6570\u5206\u6570\u4E4B\u95F4\u7684\u6709\u5E8F\u6620\u5C04\uFF1B\u5143\u7D20\u7684\u6392\u5217\u987A\u5E8F\u7531\u5206\u6570\u7684\u5927\u5C0F\u51B3\u5B9A\uFF1B\u5305\u542B\u65B9\u6CD5\u6709\u6DFB\u52A0\u3001\u83B7\u53D6\u3001\u5220\u9664\u5355\u4E2A\u5143\u7D20\u4EE5\u53CA\u6839\u636E\u5206\u503C\u8303\u56F4\u6216\u6210\u5458\u6765\u83B7\u53D6\u5143\u7D20</td></tr></tbody></table><h2 id="_2-\u57FA\u7840\u6570\u636E\u7ED3\u6784\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#_2-\u57FA\u7840\u6570\u636E\u7ED3\u6784\u8BE6\u89E3" aria-hidden="true">#</a> 2. \u57FA\u7840\u6570\u636E\u7ED3\u6784\u8BE6\u89E3</h2><h3 id="_2-1-string\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_2-1-string\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 2.1 String\u5B57\u7B26\u4E32</h3><blockquote><p>String\u662Fredis\u4E2D\u6700\u57FA\u672C\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u4E00\u4E2Akey\u5BF9\u5E94\u4E00\u4E2Avalue\u3002</p></blockquote><p><strong>String\u7C7B\u578B\u662F\u4E8C\u8FDB\u5236\u5B89\u5168\u7684</strong>\uFF0C\u610F\u601D\u662F redis \u7684 string \u53EF\u4EE5\u5305\u542B\u4EFB\u4F55\u6570\u636E\u3002\u5982\u6570\u5B57\uFF0C\u5B57\u7B26\u4E32\uFF0Cjpg\u56FE\u7247\u6216\u8005\u5E8F\u5217\u5316\u7684\u5BF9\u8C61\u3002</p><h4 id="_2-1-1-\u56FE\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u56FE\u4F8B" aria-hidden="true">#</a> 2.1.1 <strong>\u56FE\u4F8B</strong></h4><p>\u4E0B\u56FE\u662F\u4E00\u4E2AString\u7C7B\u578B\u7684\u5B9E\u4F8B\uFF0C\u5176\u4E2D\u952E\u4E3Ahello\uFF0C\u503C\u4E3Aworld</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622210653978.png" alt="image-20220622210653978"><h4 id="_2-1-2-\u547D\u4EE4\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-1-2-\u547D\u4EE4\u4F7F\u7528" aria-hidden="true">#</a> 2.1.2 <strong>\u547D\u4EE4\u4F7F\u7528</strong></h4><table><thead><tr><th>\u547D\u4EE4</th><th>\u7B80\u8FF0</th><th>\u4F7F\u7528</th></tr></thead><tbody><tr><td>GET</td><td>\u83B7\u53D6\u5B58\u50A8\u5728\u7ED9\u5B9A\u952E\u4E2D\u7684\u503C</td><td>GET name</td></tr><tr><td>SET</td><td>\u8BBE\u7F6E\u5B58\u50A8\u5728\u7ED9\u5B9A\u952E\u4E2D\u7684\u503C</td><td>SET name value</td></tr><tr><td>DEL</td><td>\u5220\u9664\u5B58\u50A8\u5728\u7ED9\u5B9A\u952E\u4E2D\u7684\u503C</td><td>DEL name</td></tr><tr><td>INCR</td><td>\u5C06\u952E\u5B58\u50A8\u7684\u503C\u52A01</td><td>INCR key</td></tr><tr><td>DECR</td><td>\u5C06\u952E\u5B58\u50A8\u7684\u503C\u51CF1</td><td>DECR key</td></tr><tr><td>INCRBY</td><td>\u5C06\u952E\u5B58\u50A8\u7684\u503C\u52A0\u4E0A\u6574\u6570</td><td>INCRBY key amount</td></tr><tr><td>DECRBY</td><td>\u5C06\u952E\u5B58\u50A8\u7684\u503C\u51CF\u53BB\u6574\u6570</td><td>DECRBY key amount</td></tr></tbody></table><h4 id="_2-1-3-\u547D\u4EE4\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#_2-1-3-\u547D\u4EE4\u6267\u884C" aria-hidden="true">#</a> 2.1.3 <strong>\u547D\u4EE4\u6267\u884C</strong></h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> hello world
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get hello
<span class="token string">&quot;world&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> del hello
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get hello
<span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> counter <span class="token number">2</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get counter
<span class="token string">&quot;2&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> incr counter
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get counter
<span class="token string">&quot;3&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> incrby counter <span class="token number">100</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">103</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get counter
<span class="token string">&quot;103&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> decr counter
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">102</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get counter
<span class="token string">&quot;102&quot;</span>

  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-3-\u5B9E\u6218\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_2-1-3-\u5B9E\u6218\u573A\u666F" aria-hidden="true">#</a> 2.1.3 \u5B9E\u6218\u573A\u666F</h4><ul><li><strong>\u7F13\u5B58</strong>\uFF1A \u7ECF\u5178\u4F7F\u7528\u573A\u666F\uFF0C\u628A\u5E38\u7528\u4FE1\u606F\uFF0C\u5B57\u7B26\u4E32\uFF0C\u56FE\u7247\u6216\u8005\u89C6\u9891\u7B49\u4FE1\u606F\u653E\u5230redis\u4E2D\uFF0Credis\u4F5C\u4E3A\u7F13\u5B58\u5C42\uFF0Cmysql\u505A\u6301\u4E45\u5316\u5C42\uFF0C\u964D\u4F4Emysql\u7684\u8BFB\u5199\u538B\u529B\u3002</li><li><strong>\u8BA1\u6570\u5668</strong>\uFF1Aredis\u662F\u5355\u7EBF\u7A0B\u6A21\u578B\uFF0C\u4E00\u4E2A\u547D\u4EE4\u6267\u884C\u5B8C\u624D\u4F1A\u6267\u884C\u4E0B\u4E00\u4E2A\uFF0C\u540C\u65F6\u6570\u636E\u53EF\u4EE5\u4E00\u6B65\u843D\u5730\u5230\u5176\u4ED6\u7684\u6570\u636E\u6E90\u3002</li><li><strong>session</strong>\uFF1A\u5E38\u89C1\u65B9\u6848spring session + redis\u5B9E\u73B0session\u5171\u4EAB</li></ul><h3 id="_2-2-list\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_2-2-list\u5217\u8868" aria-hidden="true">#</a> 2.2 List\u5217\u8868</h3><blockquote><p>Redis\u4E2D\u7684List\u5176\u5B9E\u5C31\u662F\u94FE\u8868\uFF08Redis\u7528\u53CC\u7AEF\u94FE\u8868\u5B9E\u73B0List\uFF09\u3002</p></blockquote><p>\u4F7F\u7528List\u7ED3\u6784\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8F7B\u677E\u5730\u5B9E\u73B0\u6700\u65B0\u6D88\u606F\u6392\u961F\u529F\u80FD\uFF08\u6BD4\u5982\u65B0\u6D6A\u5FAE\u535A\u7684TimeLine\uFF09\u3002List\u7684\u53E6\u4E00\u4E2A\u5E94\u7528\u5C31\u662F\u6D88\u606F\u961F\u5217\uFF0C\u53EF\u4EE5\u5229\u7528List\u7684 PUSH \u64CD\u4F5C\uFF0C\u5C06\u4EFB\u52A1\u5B58\u653E\u5728List\u4E2D\uFF0C\u7136\u540E\u5DE5\u4F5C\u7EBF\u7A0B\u518D\u7528 POP \u64CD\u4F5C\u5C06\u4EFB\u52A1\u53D6\u51FA\u8FDB\u884C\u6267\u884C\u3002</p><h4 id="_2-2-1-\u56FE\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u56FE\u4F8B" aria-hidden="true">#</a> 2.2.1 <strong>\u56FE\u4F8B</strong></h4><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622211206945.png" alt="image-20220622211206945"><h4 id="_2-2-2-\u547D\u4EE4\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-2-2-\u547D\u4EE4\u4F7F\u7528" aria-hidden="true">#</a> 2.2.2 <strong>\u547D\u4EE4\u4F7F\u7528</strong></h4><table><thead><tr><th>\u547D\u4EE4</th><th>\u7B80\u8FF0</th><th>\u4F7F\u7528</th></tr></thead><tbody><tr><td>RPUSH</td><td>\u5C06\u7ED9\u5B9A\u503C\u63A8\u5165\u5230\u5217\u8868\u53F3\u7AEF</td><td>RPUSH key value</td></tr><tr><td>LPUSH</td><td>\u5C06\u7ED9\u5B9A\u503C\u63A8\u5165\u5230\u5217\u8868\u5DE6\u7AEF</td><td>LPUSH key value</td></tr><tr><td>RPOP</td><td>\u4ECE\u5217\u8868\u7684\u53F3\u7AEF\u5F39\u51FA\u4E00\u4E2A\u503C\uFF0C\u5E76\u8FD4\u56DE\u88AB\u5F39\u51FA\u7684\u503C</td><td>RPOP key</td></tr><tr><td>LPOP</td><td>\u4ECE\u5217\u8868\u7684\u5DE6\u7AEF\u5F39\u51FA\u4E00\u4E2A\u503C\uFF0C\u5E76\u8FD4\u56DE\u88AB\u5F39\u51FA\u7684\u503C</td><td>LPOP key</td></tr><tr><td>LRANGE</td><td>\u83B7\u53D6\u5217\u8868\u5728\u7ED9\u5B9A\u8303\u56F4\u4E0A\u7684\u6240\u6709\u503C</td><td>LRANGE key 0 -1</td></tr><tr><td>LINDEX</td><td>\u901A\u8FC7\u7D22\u5F15\u83B7\u53D6\u5217\u8868\u4E2D\u7684\u5143\u7D20\u3002\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u8D1F\u6570\u4E0B\u6807\uFF0C\u4EE5 -1 \u8868\u793A\u5217\u8868\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C -2 \u8868\u793A\u5217\u8868\u7684\u5012\u6570\u7B2C\u4E8C\u4E2A\u5143\u7D20\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</td><td>LINDEX key index</td></tr></tbody></table><h4 id="_2-2-3-\u4F7F\u7528\u5217\u8868\u7684\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#_2-2-3-\u4F7F\u7528\u5217\u8868\u7684\u6280\u5DE7" aria-hidden="true">#</a> 2.2.3 \u4F7F\u7528\u5217\u8868\u7684\u6280\u5DE7</h4><ul><li>lpush+lpop=Stack(\u6808)</li><li>lpush+rpop=Queue\uFF08\u961F\u5217\uFF09</li><li>lpush+ltrim=Capped Collection\uFF08\u6709\u9650\u96C6\u5408\uFF09</li><li>lpush+brpop=Message Queue\uFF08\u6D88\u606F\u961F\u5217\uFF09</li></ul><h4 id="_2-2-4-\u547D\u4EE4\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#_2-2-4-\u547D\u4EE4\u6267\u884C" aria-hidden="true">#</a> 2.2.4 <strong>\u547D\u4EE4\u6267\u884C</strong></h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lpush mylist <span class="token number">1</span> <span class="token number">2</span> ll <span class="token function">ls</span> mem
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange mylist <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;mem&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;ls&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;ll&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lindex mylist <span class="token parameter variable">-1</span>
<span class="token string">&quot;1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lindex mylist <span class="token number">10</span>        <span class="token comment"># index\u4E0D\u5728 mylist \u7684\u533A\u95F4\u8303\u56F4\u5185</span>
<span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-5-\u5B9E\u6218\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_2-2-5-\u5B9E\u6218\u573A\u666F" aria-hidden="true">#</a> 2.2.5 \u5B9E\u6218\u573A\u666F</h4><ul><li><strong>\u5FAE\u535ATimeLine</strong>: \u6709\u4EBA\u53D1\u5E03\u5FAE\u535A\uFF0C\u7528lpush\u52A0\u5165\u65F6\u95F4\u8F74\uFF0C\u5C55\u793A\u65B0\u7684\u5217\u8868\u4FE1\u606F\u3002</li><li><strong>\u6D88\u606F\u961F\u5217</strong></li></ul><h3 id="_2-3-set\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#_2-3-set\u96C6\u5408" aria-hidden="true">#</a> 2.3. Set\u96C6\u5408</h3><blockquote><p>Redis \u7684 Set \u662F String \u7C7B\u578B\u7684\u65E0\u5E8F\u96C6\u5408\u3002\u96C6\u5408\u6210\u5458\u662F\u552F\u4E00\u7684\uFF0C\u8FD9\u5C31\u610F\u5473\u7740\u96C6\u5408\u4E2D\u4E0D\u80FD\u51FA\u73B0\u91CD\u590D\u7684\u6570\u636E\u3002</p></blockquote><p>Redis \u4E2D\u96C6\u5408\u662F\u901A\u8FC7\u54C8\u5E0C\u8868\u5B9E\u73B0\u7684\uFF0C\u6240\u4EE5\u6DFB\u52A0\uFF0C\u5220\u9664\uFF0C\u67E5\u627E\u7684\u590D\u6742\u5EA6\u90FD\u662F O(1)\u3002</p><h4 id="_2-3-1-\u56FE\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-3-1-\u56FE\u4F8B" aria-hidden="true">#</a> 2.3.1 <strong>\u56FE\u4F8B</strong></h4><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622211817956.png" alt="image-20220622211817956"><h4 id="_2-3-2-\u547D\u4EE4\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-3-2-\u547D\u4EE4\u4F7F\u7528" aria-hidden="true">#</a> 2.3.2 \u547D\u4EE4\u4F7F\u7528</h4><table><thead><tr><th>\u547D\u4EE4</th><th>\u7B80\u8FF0</th><th>\u4F7F\u7528</th></tr></thead><tbody><tr><td>SADD</td><td>\u5411\u96C6\u5408\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u6210\u5458</td><td>SADD key value</td></tr><tr><td>SCARD</td><td>\u83B7\u53D6\u96C6\u5408\u7684\u6210\u5458\u6570</td><td>SCARD key</td></tr><tr><td>SMEMBERS</td><td>\u8FD4\u56DE\u96C6\u5408\u4E2D\u7684\u6240\u6709\u6210\u5458</td><td>SMEMBERS key member</td></tr><tr><td>SISMEMBER</td><td>\u5224\u65AD member \u5143\u7D20\u662F\u5426\u662F\u96C6\u5408 key \u7684\u6210\u5458</td><td>SISMEMBER key member</td></tr></tbody></table>`,38),c={href:"https://www.runoob.com/redis/redis-sets.html",target:"_blank",rel:"noopener noreferrer"},u=e(`<h4 id="_2-3-3-\u547D\u4EE4\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#_2-3-3-\u547D\u4EE4\u6267\u884C" aria-hidden="true">#</a> 2.3.3 <strong>\u547D\u4EE4\u6267\u884C</strong></h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> sadd myset hao hao1 xiaohao hao
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> smembers myset
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;xiaohao&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;hao1&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;hao&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> sismember myset hao
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>

  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-4-\u5B9E\u6218\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_2-3-4-\u5B9E\u6218\u573A\u666F" aria-hidden="true">#</a> 2.3.4 \u5B9E\u6218\u573A\u666F</h4><ul><li><strong>\u6807\u7B7E</strong>\uFF08tag\uFF09,\u7ED9\u7528\u6237\u6DFB\u52A0\u6807\u7B7E\uFF0C\u6216\u8005\u7528\u6237\u7ED9\u6D88\u606F\u6DFB\u52A0\u6807\u7B7E\uFF0C\u8FD9\u6837\u6709\u540C\u4E00\u6807\u7B7E\u6216\u8005\u7C7B\u4F3C\u6807\u7B7E\u7684\u53EF\u4EE5\u7ED9\u63A8\u8350\u5173\u6CE8\u7684\u4E8B\u6216\u8005\u5173\u6CE8\u7684\u4EBA\u3002</li><li><strong>\u70B9\u8D5E\uFF0C\u6216\u70B9\u8E29\uFF0C\u6536\u85CF\u7B49</strong>\uFF0C\u53EF\u4EE5\u653E\u5230set\u4E2D\u5B9E\u73B0</li></ul><h3 id="_2-4-hash\u6563\u5217" tabindex="-1"><a class="header-anchor" href="#_2-4-hash\u6563\u5217" aria-hidden="true">#</a> 2.4 Hash\u6563\u5217</h3><p>Redis hash \u662F\u4E00\u4E2A string \u7C7B\u578B\u7684 field\uFF08\u5B57\u6BB5\uFF09 \u548C value\uFF08\u503C\uFF09 \u7684\u6620\u5C04\u8868\uFF0Chash \u7279\u522B\u9002\u5408\u7528\u4E8E\u5B58\u50A8\u5BF9\u8C61\u3002</p><h4 id="_2-4-1-\u56FE\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-4-1-\u56FE\u4F8B" aria-hidden="true">#</a> 2.4.1 <strong>\u56FE\u4F8B</strong></h4><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622212202064.png" alt="image-20220622212202064"><h4 id="_2-4-2-\u547D\u4EE4\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-4-2-\u547D\u4EE4\u4F7F\u7528" aria-hidden="true">#</a> 2.4.2 <strong>\u547D\u4EE4\u4F7F\u7528</strong></h4><table><thead><tr><th>\u547D\u4EE4</th><th>\u7B80\u8FF0</th><th>\u4F7F\u7528</th></tr></thead><tbody><tr><td>HSET</td><td>\u6DFB\u52A0\u952E\u503C\u5BF9</td><td>HSET hash-key sub-key1 value1</td></tr><tr><td>HGET</td><td>\u83B7\u53D6\u6307\u5B9A\u6563\u5217\u952E\u7684\u503C</td><td>HGET hash-key key1</td></tr><tr><td>HGETALL</td><td>\u83B7\u53D6\u6563\u5217\u4E2D\u5305\u542B\u7684\u6240\u6709\u952E\u503C\u5BF9</td><td>HGETALL hash-key</td></tr><tr><td>HDEL</td><td>\u5982\u679C\u7ED9\u5B9A\u952E\u5B58\u5728\u4E8E\u6563\u5217\u4E2D\uFF0C\u90A3\u4E48\u5C31\u79FB\u9664\u8FD9\u4E2A\u952E</td><td>HDEL hash-key sub-key1</td></tr></tbody></table><h4 id="_2-4-3-\u547D\u4EE4\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#_2-4-3-\u547D\u4EE4\u6267\u884C" aria-hidden="true">#</a> 2.4.3 <strong>\u547D\u4EE4\u6267\u884C</strong></h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hset user name1 hao
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hset user email1 hao@163.com
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hgetall user
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;name1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;hao&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;email1&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;hao@163.com&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hget user user
<span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hget user name1
<span class="token string">&quot;hao&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hset user name2 xiaohao
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hset user email2 xiaohao@163.com
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hgetall user
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;name1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;hao&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;email1&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;hao@163.com&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;name2&quot;</span>
<span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;xiaohao&quot;</span>
<span class="token number">7</span><span class="token punctuation">)</span> <span class="token string">&quot;email2&quot;</span>
<span class="token number">8</span><span class="token punctuation">)</span> <span class="token string">&quot;xiaohao@163.com&quot;</span>

  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-4-\u5B9E\u6218\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_2-4-4-\u5B9E\u6218\u573A\u666F" aria-hidden="true">#</a> 2.4.4 \u5B9E\u6218\u573A\u666F</h4><ul><li><strong>\u7F13\u5B58</strong>\uFF1A \u76F8\u6BD4string\u66F4\u8282\u7701\u7A7A\u95F4\uFF0C\u80FD\u76F4\u89C2\u7684\u7EF4\u62A4\u7F13\u5B58\u4FE1\u606F\uFF0C\u5982\u7528\u6237\u4FE1\u606F\uFF0C\u89C6\u9891\u4FE1\u606F\u7B49\u3002</li></ul><h3 id="_2-5-zset\u6709\u5E8F\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#_2-5-zset\u6709\u5E8F\u96C6\u5408" aria-hidden="true">#</a> 2.5 Zset\u6709\u5E8F\u96C6\u5408</h3><blockquote><p>Redis \u6709\u5E8F\u96C6\u5408\u548C\u96C6\u5408\u4E00\u6837\u4E5F\u662F string \u7C7B\u578B\u5143\u7D20\u7684\u96C6\u5408,\u4E14\u4E0D\u5141\u8BB8\u91CD\u590D\u7684\u6210\u5458\u3002\u4E0D\u540C\u7684\u662F\u6BCF\u4E2A\u5143\u7D20\u90FD\u4F1A\u5173\u8054\u4E00\u4E2A double \u7C7B\u578B\u7684\u5206\u6570\u3002redis \u6B63\u662F\u901A\u8FC7\u5206\u6570\u6765\u4E3A\u96C6\u5408\u4E2D\u7684\u6210\u5458\u8FDB\u884C\u4ECE\u5C0F\u5230\u5927\u7684\u6392\u5E8F\u3002</p></blockquote><p>\u6709\u5E8F\u96C6\u5408\u7684\u6210\u5458\u662F\u552F\u4E00\u7684, \u4F46\u5206\u6570(score)\u5374\u53EF\u4EE5\u91CD\u590D\u3002\u6709\u5E8F\u96C6\u5408\u662F\u901A\u8FC7\u4E24\u79CD\u6570\u636E\u7ED3\u6784\u5B9E\u73B0\uFF1A</p><ol><li><strong>\u538B\u7F29\u5217\u8868(ziplist)</strong>: ziplist\u662F\u4E3A\u4E86\u63D0\u9AD8\u5B58\u50A8\u6548\u7387\u800C\u8BBE\u8BA1\u7684\u4E00\u79CD\u7279\u6B8A\u7F16\u7801\u7684\u53CC\u5411\u94FE\u8868\u3002\u5B83\u53EF\u4EE5\u5B58\u50A8\u5B57\u7B26\u4E32\u6216\u8005\u6574\u6570\uFF0C\u5B58\u50A8\u6574\u6570\u65F6\u662F\u91C7\u7528\u6574\u6570\u7684\u4E8C\u8FDB\u5236\u800C\u4E0D\u662F\u5B57\u7B26\u4E32\u5F62\u5F0F\u5B58\u50A8\u3002\u5B83\u80FD\u5728O(1)\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E0B\u5B8C\u6210list\u4E24\u7AEF\u7684push\u548Cpop\u64CD\u4F5C\u3002\u4F46\u662F\u56E0\u4E3A\u6BCF\u6B21\u64CD\u4F5C\u90FD\u9700\u8981\u91CD\u65B0\u5206\u914Dziplist\u7684\u5185\u5B58\uFF0C\u6240\u4EE5\u5B9E\u9645\u590D\u6742\u5EA6\u548Cziplist\u7684\u5185\u5B58\u4F7F\u7528\u91CF\u76F8\u5173</li><li><strong>\u8DF3\u8DC3\u8868\uFF08zSkiplist)</strong>: \u8DF3\u8DC3\u8868\u7684\u6027\u80FD\u53EF\u4EE5\u4FDD\u8BC1\u5728\u67E5\u627E\uFF0C\u5220\u9664\uFF0C\u6DFB\u52A0\u7B49\u64CD\u4F5C\u7684\u65F6\u5019\u5728\u5BF9\u6570\u671F\u671B\u65F6\u95F4\u5185\u5B8C\u6210\uFF0C\u8FD9\u4E2A\u6027\u80FD\u662F\u53EF\u4EE5\u548C\u5E73\u8861\u6811\u6765\u76F8\u6BD4\u8F83\u7684\uFF0C\u800C\u4E14\u5728\u5B9E\u73B0\u65B9\u9762\u6BD4\u5E73\u8861\u6811\u8981\u4F18\u96C5\uFF0C\u8FD9\u662F\u91C7\u7528\u8DF3\u8DC3\u8868\u7684\u4E3B\u8981\u539F\u56E0\u3002\u8DF3\u8DC3\u8868\u7684\u590D\u6742\u5EA6\u662FO(log(n))\u3002</li></ol><h4 id="_2-5-1-\u56FE\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-5-1-\u56FE\u4F8B" aria-hidden="true">#</a> 2.5.1 <strong>\u56FE\u4F8B</strong></h4><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622212618638.png" alt="image-20220622212618638"><h4 id="_2-5-2-\u547D\u4EE4\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-5-2-\u547D\u4EE4\u4F7F\u7528" aria-hidden="true">#</a> 2.5.2 <strong>\u547D\u4EE4\u4F7F\u7528</strong></h4><table><thead><tr><th>\u547D\u4EE4</th><th>\u7B80\u8FF0</th><th>\u4F7F\u7528</th></tr></thead><tbody><tr><td>ZADD</td><td>\u5C06\u4E00\u4E2A\u5E26\u6709\u7ED9\u5B9A\u5206\u503C\u7684\u6210\u5458\u6DFB\u52A0\u5230\u6709\u5E8F\u96C6\u5408\u91CC\u9762</td><td>ZADD zset-key 178 member1</td></tr><tr><td>ZRANGE</td><td>\u6839\u636E\u5143\u7D20\u5728\u6709\u5E8F\u96C6\u5408\u4E2D\u6240\u5904\u7684\u4F4D\u7F6E\uFF0C\u4ECE\u6709\u5E8F\u96C6\u5408\u4E2D\u83B7\u53D6\u591A\u4E2A\u5143\u7D20</td><td>ZRANGE zset-key 0-1 withccores</td></tr><tr><td>ZREM</td><td>\u5982\u679C\u7ED9\u5B9A\u5143\u7D20\u6210\u5458\u5B58\u5728\u4E8E\u6709\u5E8F\u96C6\u5408\u4E2D\uFF0C\u90A3\u4E48\u5C31\u79FB\u9664\u8FD9\u4E2A\u5143\u7D20</td><td>ZREM zset-key member1</td></tr></tbody></table><h4 id="_2-5-3-\u547D\u4EE4\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#_2-5-3-\u547D\u4EE4\u6267\u884C" aria-hidden="true">#</a> 2.5.3 <strong>\u547D\u4EE4\u6267\u884C</strong></h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zadd myscoreset <span class="token number">100</span> hao <span class="token number">90</span> xiaohao
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ZRANGE myscoreset <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;xiaohao&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;hao&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ZSCORE myscoreset hao
<span class="token string">&quot;100&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-4-\u5B9E\u6218\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_2-5-4-\u5B9E\u6218\u573A\u666F" aria-hidden="true">#</a> 2.5.4 \u5B9E\u6218\u573A\u666F</h4><ul><li><strong>\u6392\u884C\u699C</strong>\uFF1A\u6709\u5E8F\u96C6\u5408\u7ECF\u5178\u4F7F\u7528\u573A\u666F\u3002\u4F8B\u5982\u5C0F\u8BF4\u89C6\u9891\u7B49\u7F51\u7AD9\u9700\u8981\u5BF9\u7528\u6237\u4E0A\u4F20\u7684\u5C0F\u8BF4\u89C6\u9891\u505A\u6392\u884C\u699C\uFF0C\u699C\u5355\u53EF\u4EE5\u6309\u7167\u7528\u6237\u5173\u6CE8\u6570\uFF0C\u66F4\u65B0\u65F6\u95F4\uFF0C\u5B57\u6570\u7B49\u6253\u5206\uFF0C\u505A\u6392\u884C\u3002</li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,27),h={href:"https://pdai.tech/md/db/nosql-redis/db-redis-data-types.html",target:"_blank",rel:"noopener noreferrer"},m=s("strong",null,"Redis\u5165\u95E8 - \u6570\u636E\u7C7B\u578B\uFF1A5\u79CD\u57FA\u7840\u6570\u636E\u7C7B\u578B\u8BE6\u89E3",-1);function b(k,g){const n=p("ExternalLinkIcon");return r(),o("div",null,[d,s("p",null,[a("\u5176\u5B83\u4E00\u4E9B\u96C6\u5408\u64CD\u4F5C\uFF0C\u8BF7\u53C2\u8003\u8FD9\u91CC"),s("a",c,[a("https://www.runoob.com/redis/redis-sets.html"),t(n)])]),u,s("p",null,[s("a",h,[m,t(n)])])])}const f=i(l,[["render",b],["__file","db-redis-data-types.html.vue"]]);export{f as default};
