import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as l,a as e,b as n,d as a,f as d,r as t}from"./app.2a33308c.js";const c={},o=d(`<h1 id="linux\u5B89\u88C5nginx" tabindex="-1"><a class="header-anchor" href="#linux\u5B89\u88C5nginx" aria-hidden="true">#</a> Linux\u5B89\u88C5nginx</h1><h2 id="_1-\u5B89\u88C5\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5\u6B65\u9AA4" aria-hidden="true">#</a> 1. \u5B89\u88C5\u6B65\u9AA4</h2><h3 id="_1-1-\u5B89\u88C5\u4F9D\u8D56\u5305" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5B89\u88C5\u4F9D\u8D56\u5305" aria-hidden="true">#</a> 1.1 \u5B89\u88C5\u4F9D\u8D56\u5305</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u4E00\u952E\u5B89\u88C5\u4E0A\u9762\u56DB\u4E2A\u4F9D\u8D56
yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-\u4E0B\u8F7D\u5E76\u89E3\u538B\u5B89\u88C5\u5305" tabindex="-1"><a class="header-anchor" href="#_1-2-\u4E0B\u8F7D\u5E76\u89E3\u538B\u5B89\u88C5\u5305" aria-hidden="true">#</a> 1.2 \u4E0B\u8F7D\u5E76\u89E3\u538B\u5B89\u88C5\u5305</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u4E0B\u8F7Dtar\u5305
wget http://nginx.org/download/nginx-1.16.1.tar.gz
tar -xvf nginx-1.16.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),g={href:"https://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},u=d(`<h3 id="_1-3-\u5B89\u88C5nginx" tabindex="-1"><a class="header-anchor" href="#_1-3-\u5B89\u88C5nginx" aria-hidden="true">#</a> 1.3 \u5B89\u88C5nginx</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u8FDB\u5165nginx\u76EE\u5F55
cd nginx-1.16.1
//\u6267\u884C\u547D\u4EE4
./configure
//\u6267\u884Cmake\u547D\u4EE4
make
//\u6267\u884Cmake install\u547D\u4EE4
make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5\u5B8C\u6210\u4F1A\u5728/usr/local\u76EE\u5F55\u4E0B\u51FA\u73B0nginx</p><ul><li>\u6CE8\uFF1A\u5982\u679C\u9700\u8981\u652F\u6301http\u9700\u8981\u52A0\u5982\u4E0A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./configure  --with-http_ssl_module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-4-\u914D\u7F6Enginx-conf" tabindex="-1"><a class="header-anchor" href="#_1-4-\u914D\u7F6Enginx-conf" aria-hidden="true">#</a> 1.4 \u914D\u7F6Enginx.conf</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u6253\u5F00\u914D\u7F6E\u6587\u4EF6
vi /usr/local/nginx/conf/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6309\u9700\u4FEE\u6539\u914D\u7F6E</p><p>\u5982\u9ED8\u8BA4\u7AEF\u53E3\u4E3A80\uFF0C\u53EF\u4EE5\u4FEE\u6539\u6210\u60F3\u8981\u7684\u5730\u5740</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server {
        listen       80;
        server_name  localhost;
        ...
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-\u542F\u52A8nginx" tabindex="-1"><a class="header-anchor" href="#_1-5-\u542F\u52A8nginx" aria-hidden="true">#</a> 1.5 \u542F\u52A8nginx</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/usr/local/nginx/sbin/nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770Bnginx\u8FDB\u7A0B\u662F\u5426\u542F\u52A8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ps -ef | grep nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-6-\u6D4F\u89C8\u5668\u6253\u5F00" tabindex="-1"><a class="header-anchor" href="#_1-6-\u6D4F\u89C8\u5668\u6253\u5F00" aria-hidden="true">#</a> 1.6 \u6D4F\u89C8\u5668\u6253\u5F00</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190907221848439.png" alt="image-20190907221848439"></p><h2 id="_2-\u542F\u52A8\u53EF\u80FD\u9047\u5230\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-\u542F\u52A8\u53EF\u80FD\u9047\u5230\u7684\u95EE\u9898" aria-hidden="true">#</a> 2. \u542F\u52A8\u53EF\u80FD\u9047\u5230\u7684\u95EE\u9898</h2><h3 id="_2-1-logs-\u6587\u4EF6\u5939\u76EE\u5F55\u6CA1\u6709" tabindex="-1"><a class="header-anchor" href="#_2-1-logs-\u6587\u4EF6\u5939\u76EE\u5F55\u6CA1\u6709" aria-hidden="true">#</a> 2.1 logs \u6587\u4EF6\u5939\u76EE\u5F55\u6CA1\u6709</h3><p>\u9519\u8BEF\u63D0\u793A\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> [alert] could not open error log file: open() &quot;/usr/local/nginx/logs/error.log&quot; failed (2: No such file or directory)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u89E3\u51B3\u65B9\u6848\uFF1A\u5728\u63D0\u793A\u7684\u6307\u5B9A\u76EE\u5F55\u521B\u5EFAlogs\u6587\u4EF6\u5939</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-nginx-pid-\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#_2-2-nginx-pid-\u5F02\u5E38" aria-hidden="true">#</a> 2.2 nginx.pid \u5F02\u5E38</h3><p>\u9519\u8BEF\u63D0\u793A\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> [error] 21478#0: open() &quot;/usr/local/nginx/logs/nginx.pid&quot; failed (2: No such file or directory)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u89E3\u51B3\u65B9\u6848\uFF1A\u5148\u8BBE\u7F6E\u914D\u7F6E\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3-\u542F\u52A8\u65E0\u53CD\u5E94-error-log-\u75AF\u72C2\u6253\u5370-worker-process-22327-exited-on-signal" tabindex="-1"><a class="header-anchor" href="#_2-3-\u542F\u52A8\u65E0\u53CD\u5E94-error-log-\u75AF\u72C2\u6253\u5370-worker-process-22327-exited-on-signal" aria-hidden="true">#</a> 2.3 \u542F\u52A8\u65E0\u53CD\u5E94\uFF0Cerror.log \u75AF\u72C2\u6253\u5370 worker process 22327 exited on signal</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210115112252704.png" alt="image-20210115112252704"></p><p>\u56E0\u4E3Anginx\u5BF9fastdfs\u8FDB\u884C\u4E86\u4EE3\u7406,\u6211\u4EEC\u542F\u52A8fdfs \u5373\u53EF\u6062\u590D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/etc/init.d/fdfs_trackerd start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-nginx-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_3-nginx-\u547D\u4EE4" aria-hidden="true">#</a> 3. nginx \u547D\u4EE4</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./nginx \u542F\u52A8

./nginx -s stop \u5173\u95ED

./nginx -s reload \u91CD\u542F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u9644\u5F55" tabindex="-1"><a class="header-anchor" href="#_4-\u9644\u5F55" aria-hidden="true">#</a> 4. \u9644\u5F55</h2><h3 id="_4-1-rpm-\u7248\u672C-nginx-\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#_4-1-rpm-\u7248\u672C-nginx-\u90E8\u7F72" aria-hidden="true">#</a> 4.1 rpm \u7248\u672C Nginx \u90E8\u7F72</h3><ol><li><p>\u4E0A\u4F20nginx\u5BF9\u5E94\u7248\u672C\u7684rpm</p></li><li><p>\u5B89\u88C5rpm</p><p>rpm -ivh nginx-1.16.1-1.el6.ngx.x86_64.rpm</p></li><li><p>\u542F\u52A8nginx</p><p>service nginx start</p></li><li><p>\u521B\u5EFA\u524D\u7AEF\u5B58\u653E\u6587\u4EF6\u5939</p><p>mkdir /usr/share/nginx/html/frontend</p></li><li><p>\u66FF\u6362\u914D\u7F6E\u6587\u4EF6</p><p>\u66FF\u6362\u8986\u76D6nginx.conf \u5230/etc/nginx/\u76EE\u5F55\u4E0B</p></li></ol><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,37),x={href:"https://www.debugger.wiki/article/html/1575597633434520",target:"_blank",rel:"noopener noreferrer"};function h(v,m){const i=t("ExternalLinkIcon");return s(),l("div",null,[o,e("p",null,[n("wget \u4E0B\u8F7D\u7684tar\u5305\u7248\u672C\u53EF\u4EE5\u901A\u8FC7"),e("a",g,[n("nginx\u5B98\u7F51"),a(i)]),n("\u67E5\u770B")]),u,e("p",null,[e("a",x,[n("nginx\u91CD\u542F\u540E\uFF0C\u53CD\u5411\u4EE3\u7406\u5931\u8D25\u4E4B\u95EE\u9898\u6392\u67E5\u8BB0\u5F55"),a(i)])])])}const _=r(c,[["render",h],["__file","nginx-y-linux-install.html.vue"]]);export{_ as default};
