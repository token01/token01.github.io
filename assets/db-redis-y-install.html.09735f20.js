import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as n,a as i,b as e,d as l,f as a,r as c}from"./app.e9ea989c.js";const t={},o=a(`<h1 id="redis\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#redis\u5B89\u88C5" aria-hidden="true">#</a> Redis\u5B89\u88C5</h1><h2 id="_1-\u5177\u4F53\u5B89\u88C5\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_1-\u5177\u4F53\u5B89\u88C5\u6B65\u9AA4" aria-hidden="true">#</a> 1. \u5177\u4F53\u5B89\u88C5\u6B65\u9AA4</h2><h3 id="_1-1-\u4F7F\u7528wget\u547D\u4EE4\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4F7F\u7528wget\u547D\u4EE4\u4E0B\u8F7D" aria-hidden="true">#</a> 1.1 \u4F7F\u7528wget\u547D\u4EE4\u4E0B\u8F7D</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wget http://download.redis.io/releases/redis-5.0.5.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),u={href:"http://download.redis.io/releases/",target:"_blank",rel:"noopener noreferrer"},h=a(`<h3 id="_1-2-\u89E3\u538B\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#_1-2-\u89E3\u538B\u6E90\u7801" aria-hidden="true">#</a> 1.2 \u89E3\u538B\u6E90\u7801</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tar -zxvf redis-5.0.5.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3-\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#_1-3-\u7F16\u8BD1" aria-hidden="true">#</a> 1.3 \u7F16\u8BD1</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /usr/local/redis-5.0.5
make PREFIX=/usr/local/redis install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u8BD1\u540E\u7684redis\u5728 <code>/usr/local/redis</code>\u76EE\u5F55\u4E0B</p><h4 id="_1-3-1-\u5982\u9047\u5B89\u88C5\u5F02\u5E38cc-command-not-found" tabindex="-1"><a class="header-anchor" href="#_1-3-1-\u5982\u9047\u5B89\u88C5\u5F02\u5E38cc-command-not-found" aria-hidden="true">#</a> 1.3.1 \u5982\u9047\u5B89\u88C5\u5F02\u5E38cc: command not found</h4><p>/bin/sh: cc: command not found</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20191203115107725.png" alt="image-20191203115107725"></p><p>**\u89E3\u51B3\u65B9\u6848\uFF1A**\u5B89\u88C5gcc\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install gcc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-3-2-make\u65F6\u62A5\u5982\u4E0B\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#_1-3-2-make\u65F6\u62A5\u5982\u4E0B\u9519\u8BEF" aria-hidden="true">#</a> 1.3.2 make\u65F6\u62A5\u5982\u4E0B\u9519\u8BEF</h4><p>\u539F\u56E0\u662Fjemalloc\u91CD\u8F7D\u4E86Linux\u4E0B\u7684ANSI C\u7684malloc\u548Cfree\u51FD\u6570\u3002\u89E3\u51B3\u529E\u6CD5\uFF1Amake\u65F6\u6DFB\u52A0\u53C2\u6570\u3002</p><h3 id="_1-4-redis\u7684\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-4-redis\u7684\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 1.4 redis\u7684\u914D\u7F6E\u6587\u4EF6</h3><p>redis.conf\u662Fredis\u7684\u914D\u7F6E\u6587\u4EF6\uFF0Credis.conf\u5728redis\u6E90\u7801\u76EE\u5F55\u3002 \u62F7\u8D1D\u914D\u7F6E\u6587\u4EF6\u5230\u5B89\u88C5\u76EE\u5F55\u4E0B \u8FDB\u5165\u6E90\u7801\u76EE\u5F55\uFF0C\u91CC\u9762\u6709\u4E00\u4EFD\u914D\u7F6E\u6587\u4EF6 redis.conf\uFF0C\u7136\u540E\u5C06\u5176\u62F7\u8D1D\u5230\u5B89\u88C5\u8DEF\u5F84\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp redis.conf /usr/local/redis/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-bin\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_2-bin\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> 2. bin\u76EE\u5F55\u7ED3\u6784</h2><p>\u8FDB\u5165\u5B89\u88C5\u76EE\u5F55bin\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /usr/local/redis/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u76EE\u5F55\u7ED3\u6784</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190909112349183.png" alt="image-20190909112349183"></p><ul><li>redis-benchmark: redis \u6027\u80FD\u68C0\u6D4B\u5DE5\u5177</li><li>redis-check-aof\uFF1A AOF\u6587\u4EF6\u4FEE\u590D\u5DE5\u5177</li><li>redis-check-rdb\uFF1A RDB\u6587\u4EF6\u4FEE\u590D\u5DE5\u5177</li><li>redis-cli\uFF1A \u5BA2\u6237\u7AEF\u547D\u4EE4\u884C</li><li>redis.conf\uFF1A redis\u914D\u7F6E\u6587\u4EF6</li><li>redis-sentinel\uFF1A redis\u96C6\u7FA4</li><li>redis-server\uFF1A redis \u670D\u52A1\u8FDB\u7A0B</li></ul><h2 id="_3-\u542F\u52A8redis" tabindex="-1"><a class="header-anchor" href="#_3-\u542F\u52A8redis" aria-hidden="true">#</a> 3. \u542F\u52A8redis</h2><h3 id="_3-1-\u524D\u7AEF\u6A21\u5F0F\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_3-1-\u524D\u7AEF\u6A21\u5F0F\u542F\u52A8" aria-hidden="true">#</a> 3.1 \u524D\u7AEF\u6A21\u5F0F\u542F\u52A8</h3><p>\u76F4\u63A5\u8FD0\u884Credis-server\u5C06\u4EE5\u524D\u7AEF\u6A21\u5F0F\u542F\u52A8</p><p><strong>\u7F3A\u70B9</strong>\uFF1Assh\u547D\u4EE4\u7A97\u53E3\u5173\u95ED\u5219redis-server\u7A0B\u5E8F\u7ED3\u675F\uFF0C<strong>\u4E0D\u63A8\u8350</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./redis-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u56FE</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190909112943727.png" alt="image-20190909112943727"></p><h3 id="_3-2-\u540E\u7AEF\u6A21\u5F0F\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_3-2-\u540E\u7AEF\u6A21\u5F0F\u542F\u52A8" aria-hidden="true">#</a> 3.2 \u540E\u7AEF\u6A21\u5F0F\u542F\u52A8</h3><p>\u4FEE\u6539redis.conf \u914D\u7F6E\u6587\u4EF6\u3002daemonize yes \u4EE5\u540E\u7AEF\u6A21\u5F0F\u542F\u52A8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim /usr/local/redis/bin/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190909113153794.png" alt="image-20190909113153794"></p><p>\u6267\u884C\u5982\u4E0B\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u76F8\u5BF9\u8DEF\u5F84\u60C5\u51B5\u6267\u884C
./redis-server redis.conf

# \u5168\u8DEF\u5F84\u6267\u884C
/usr/local/redis/bin/redis-server /usr/local/redis/bin/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190909114017734.png" alt="image-20190909114017734"></p><h2 id="_4-\u8FDE\u63A5redis" tabindex="-1"><a class="header-anchor" href="#_4-\u8FDE\u63A5redis" aria-hidden="true">#</a> 4. \u8FDE\u63A5redis</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/usr/local/redis/bin/redis-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-\u5173\u95EDredis" tabindex="-1"><a class="header-anchor" href="#_5-\u5173\u95EDredis" aria-hidden="true">#</a> 5.\u5173\u95EDredis</h2><p>\u5F3A\u884C\u7EC8\u6B62redis\u8FDB\u7A0B\u53EF\u80FD\u4F1A\u5BFC\u81F4redis\u6301\u4E45\u5316\u6570\u636E\u4E22\u5931\u3002\u6B63\u786E\u505C\u6B62Redis\u7684\u65B9\u5F0F\u5E94\u8BE5\u662F\u5411Redis\u53D1\u9001SHUTDOWN\u547D\u4EE4\uFF0C\u547D\u4EE4\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /usr/local/redis
./bin/redis-cli shutdown
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-1-\u5F3A\u884C\u7EC8\u6B62redis-\u4E0D\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#_5-1-\u5F3A\u884C\u7EC8\u6B62redis-\u4E0D\u63A8\u8350" aria-hidden="true">#</a> 5.1 \u5F3A\u884C\u7EC8\u6B62redis(\u4E0D\u63A8\u8350)</h3><p>\u4F1A\u9020\u6210\u6570\u636E\u4E22\u5931</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pkill redis-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-\u5F00\u673A\u81EA\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_6-\u5F00\u673A\u81EA\u542F\u52A8" aria-hidden="true">#</a> 6. \u5F00\u673A\u81EA\u542F\u52A8</h2><p>\u5728<code>/etc/rc.local</code>\u7F16\u8F91</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim /etc/rc.local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6DFB\u52A0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># redis \u5F00\u673A\u81EA\u542F\u52A8
/usr/local/redis/bin/redis-server /usr/local/redis/etc/redis-conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,48);function m(v,g){const d=c("ExternalLinkIcon");return r(),n("div",null,[o,i("p",null,[e("\u5177\u4F53\u4E0B\u8F7D\u54EA\u4E2A\u7248\u672C\u53EF\u4EE5\u5728"),i("a",u,[e("redis\u5B98\u7F51"),l(d)]),e("\u4E0A\u9009\u62E9")]),h])}const x=s(t,[["render",m],["__file","db-redis-y-install.html.vue"]]);export{x as default};