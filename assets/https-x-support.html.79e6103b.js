import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as d,a as e,b as a,d as s,f as t,r as l}from"./app.ec51a1ed.js";const c={},o=t('<h1 id="\u7F51\u7AD9\u652F\u6301https" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7AD9\u652F\u6301https" aria-hidden="true">#</a> \u7F51\u7AD9\u652F\u6301https</h1><h2 id="_1-\u4F7F\u7528\u514D\u8D39\u7684-let-s-encrypt-\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_1-\u4F7F\u7528\u514D\u8D39\u7684-let-s-encrypt-\u8BC1\u4E66" aria-hidden="true">#</a> 1. \u4F7F\u7528\u514D\u8D39\u7684 Let&#39;s Encrypt \u8BC1\u4E66</h2><p>Let&#39;s Encrypt \u80FD\u591F\u514D\u8D39\u7B7E\u540D\u4E00\u4E2A\u8BC1\u4E66\uFF0C\u6240\u4EE5\u5047\u5982\u8981\u6C42\u4E0D\u9AD8\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5B83\u7B7E\u540D\u7684\u8BC1\u4E66\uFF0C\u4F7F\u7528\u4E5F\u975E\u5E38\u7684\u7B80\u5355\uFF0C\u53EA\u8981\u9A8C\u8BC1\u90AE\u7BB1\u5730\u5740\u5C31\u80FD\u4F7F\u7528\u4E86\uFF0C\u4E0D\u8FC7\u6709 90 \u5929\u7684\u6709\u6548\u671F\uFF08\u5230\u671F\u524D\u53EF\u4EE5\u7EED\uFF09\u3002</p><p>\u4E3A\u4E86\u751F\u6210\u8BC1\u4E66\uFF0CLet&#39;s Encrypt \u63D0\u4F9B\u4E86\u4E00\u4E2A\u8F6F\u4EF6 Certbot \u6765\u8FDB\u884C\u7BA1\u7406\uFF0C\u8FD9\u4E2A\u8F6F\u4EF6\u6709\u5F88\u591A\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u751F\u6210\u8BC1\u4E66\u5E76\u81EA\u52A8\u5316\u914D\u7F6E Nginx/Apache \uFF0C\u4E0D\u8FC7\u6211\u8FD8\u662F\u9009\u62E9\u4F7F\u7528\u5B83\u751F\u6210\u5BC6\u94A5\u5BF9\u548C\u8BC1\u4E66\uFF0C\u7136\u540E\u81EA\u5DF1\u5728 WEB \u670D\u52A1\u5668\u4E0A\u8FDB\u884C\u914D\u7F6E\uFF0C\u4F7F\u7528\u5F88\u7B80\u5355\u3002</p><h2 id="_2-\u5B89\u88C5certbot" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5certbot" aria-hidden="true">#</a> 2. \u5B89\u88C5certbot</h2><h3 id="_2-1-\u5B98\u7F51\u9009\u62E9\u5BF9\u5E94\u7CFB\u7EDF\u4E0E\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5B98\u7F51\u9009\u62E9\u5BF9\u5E94\u7CFB\u7EDF\u4E0E\u73AF\u5883" aria-hidden="true">#</a> 2.1 \u5B98\u7F51\u9009\u62E9\u5BF9\u5E94\u7CFB\u7EDF\u4E0E\u73AF\u5883</h3>',6),p={href:"https://certbot.eff.org/",target:"_blank",rel:"noopener noreferrer"},u=t(`<p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210220092815155.png" alt="image-20210220092815155"></p><h3 id="_2-2-\u5B89\u88C5snapd" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5B89\u88C5snapd" aria-hidden="true">#</a> 2.2 \u5B89\u88C5snapd</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo yum install snapd
sudo systemctl enable --now snapd.socket
sudo ln -s /var/lib/snapd/snap /snap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u68C0\u67E5\u5FEB\u7167" tabindex="-1"><a class="header-anchor" href="#_2-3-\u68C0\u67E5\u5FEB\u7167" aria-hidden="true">#</a> 2.3 \u68C0\u67E5\u5FEB\u7167</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo snap install core; sudo snap refresh core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-4-\u5B89\u88C5certbot" tabindex="-1"><a class="header-anchor" href="#_2-4-\u5B89\u88C5certbot" aria-hidden="true">#</a> 2.4 \u5B89\u88C5certbot</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> snap <span class="token function">install</span> <span class="token parameter variable">--classic</span> certbot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-5-\u6DFB\u52A0certbot-\u547D\u4EE4\u7684\u8F6F\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#_2-5-\u6DFB\u52A0certbot-\u547D\u4EE4\u7684\u8F6F\u94FE\u63A5" aria-hidden="true">#</a> 2.5 \u6DFB\u52A0certbot \u547D\u4EE4\u7684\u8F6F\u94FE\u63A5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo ln -s /snap/bin/certbot /usr/bin/certbot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-\u7533\u8BF7\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_2-\u7533\u8BF7\u8BC1\u4E66" aria-hidden="true">#</a> 2. \u7533\u8BF7\u8BC1\u4E66</h2><h3 id="_2-1-certbot-\u547D\u4EE4\u521D\u6B21\u7533\u8BF7\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_2-1-certbot-\u547D\u4EE4\u521D\u6B21\u7533\u8BF7\u8BC1\u4E66" aria-hidden="true">#</a> 2.1 <strong>certbot</strong> \u547D\u4EE4\u521D\u6B21\u7533\u8BF7\u8BC1\u4E66</h3><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u8981\u4F7F\u7528 <strong>certbot</strong> \u547D\u4EE4\u521D\u6B21\u7533\u8BF7\u8BC1\u4E66\uFF0C\u547D\u4EE4\u683C\u5F0F\u5982\u4E0B\uFF1A</p><blockquote><p>certbot certonly --webroot -w [Web\u7AD9\u70B9\u76EE\u5F55] -d [\u7AD9\u70B9\u57DF\u540D] -m [\u8054\u7CFB\u4EBAemail\u5730\u5740] --agree-tos</p></blockquote><p>\u5B9E\u9645\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>certbot certonly --webroot -w /usr/local/nginx/html -d www.isture.com -m 312905679@qq.com --agree-tos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210220115219947.png" alt="image-20210220115219947"></p><h3 id="_2-2-\u8BC1\u4E66\u4FDD\u5B58\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-2-\u8BC1\u4E66\u4FDD\u5B58\u4F4D\u7F6E" aria-hidden="true">#</a> 2.2 \u8BC1\u4E66\u4FDD\u5B58\u4F4D\u7F6E</h3><p>/etc/letsencrypt/live/</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210220115330635.png" alt="image-20210220115330635"></p><h3 id="_2-3-\u8BC1\u4E66\u6709\u6548\u671F" tabindex="-1"><a class="header-anchor" href="#_2-3-\u8BC1\u4E66\u6709\u6548\u671F" aria-hidden="true">#</a> 2.3 \u8BC1\u4E66\u6709\u6548\u671F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>openssl x509 -noout -dates -in /etc/letsencrypt/live/www.isture.com/cert.pem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210220115440070.png" alt="image-20210220115440070"></p><h2 id="_3-\u66F4\u65B0\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_3-\u66F4\u65B0\u8BC1\u4E66" aria-hidden="true">#</a> 3. \u66F4\u65B0\u8BC1\u4E66</h2><h3 id="_3-1-\u624B\u52A8\u66F4\u65B0\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_3-1-\u624B\u52A8\u66F4\u65B0\u8BC1\u4E66" aria-hidden="true">#</a> 3.1 \u624B\u52A8\u66F4\u65B0\u8BC1\u4E66</h3><p><strong>Let&#39;s Encrypt</strong> \u8BC1\u4E66\u7684\u6709\u6548\u671F\u662F <strong>90</strong> \u5929\uFF0C\u9700\u8981\u957F\u671F\u4F7F\u7528\u7684\u8BDD\uFF0C\u9700\u8981\u5728\u5931\u6548\u524D\u8FDB\u884C\u5EF6\u957F\u7533\u8BF7\u3002\u6211\u4EEC\u53EF\u4EE5\u6267\u884C\u5982\u4E0B\u547D\u4EE4\u53BB\u66F4\u65B0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u66F4\u65B0\u8BC1\u4E66
certbot renew --dry-run
 
//\u5982\u679C\u4E0D\u9700\u8981\u8FD4\u56DE\u7684\u4FE1\u606F\uFF0C\u53EF\u4EE5\u7528\u9759\u9ED8\u65B9\u5F0F
certbot renew --quiet

// \u66F4\u65B0\u6307\u5B9A\u57DF\u540D\u8BC1\u4E66
 certbot certonly -d www.isture.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-\u5B9A\u65F6\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5B9A\u65F6\u66F4\u65B0" aria-hidden="true">#</a> 3.2 \u5B9A\u65F6\u66F4\u65B0</h3><ol><li>\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5C06\u66F4\u65B0\u8BC1\u4E66\u7684\u811A\u672C\u5199\u5230\u5B9A\u65F6\u4EFB\u52A1\u6765\u81EA\u52A8\u5B8C\u6210\uFF0C\u514D\u5F97\u6211\u4EEC\u624B\u52A8\u64CD\u4F5C\u3002\u9996\u5148\u6267\u884C\u5982\u4E0B\u547D\u4EE4\u5F00\u59CB\u7F16\u8F91\u5B9A\u65F6\u4EFB\u52A1\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>crontab -e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u6B64\u65F6\u4F1A\u8FDB\u5165 <strong>vi</strong> \u7684\u7F16\u8F91\u754C\u9762\u8BA9\u4F60\u7F16\u8F91\u5DE5\u4F5C\uFF08\u6BCF\u9879\u5DE5\u4F5C\u90FD\u662F\u4E00\u884C\uFF09\u3002\u6211\u4EEC\u5728\u672B\u5C3E\u6DFB\u52A0\u5982\u4E0B\u4E00\u884C\u5185\u5BB9\uFF0C\u8868\u793A\u6BCF\u6708 <strong>1</strong> \u53F7 <strong>5</strong> \u65F6\u4F1A\u6267\u884C\u6267\u884C\u4E00\u6B21\u66F4\u65B0\uFF0C\u5E76\u91CD\u542F <strong>nginx</strong> \u670D\u52A1\u5668\uFF1A</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>00 05 01 * * /usr/bin/certbot renew <span class="token parameter variable">--quiet</span> <span class="token operator">&amp;&amp;</span> /bin/systemctl restart nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li><p>\u4FDD\u5B58\u540E\u9000\u51FA\uFF0C\u6267\u884C <strong>crontab -l</strong> \u547D\u4EE4\u53EF\u4EE5\u67E5\u770B <strong>crontab</strong> \u670D\u52A1\u662F\u5426\u521B\u5EFA\u6210\u529F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>crontab -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210220115814879.png" alt="image-20210220115814879"></p></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>certbot certonly <span class="token parameter variable">--email</span> <span class="token number">312905679</span>@qq.com <span class="token parameter variable">-d</span> test.isture.com 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20201110230101897.png" alt="image-20201110230101897"></p><p>\u8FD9\u91CC\u9009\u62E9\u7B2C\u4E8C\u9879</p><p><strong>\u8F93\u5165\u7F51\u5740\u6839\u76EE\u5F55</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Requesting a certificate for test.isture.com
Performing the following challenges:
http-01 challenge for test.isture.com
Input the webroot for test.isture.com: (Enter &#39;c&#39; to cancel): /home/test-portal

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-nginx\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-2-nginx\u7684\u914D\u7F6E" aria-hidden="true">#</a> 2.2 nginx\u7684\u914D\u7F6E</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> server <span class="token punctuation">{</span>
    listen          <span class="token number">80</span><span class="token punctuation">;</span>
    listen  <span class="token number">443</span> ssl<span class="token punctuation">;</span>
    server_name     test.isture.com<span class="token punctuation">;</span>
    ssl_certificate /etc/letsencrypt/live/test.isture.com/fullchain.pem<span class="token punctuation">;</span>
    ssl_certificate_key /etc/letsencrypt/live/test.isture.com/privkey.pem<span class="token punctuation">;</span>
    location / <span class="token punctuation">{</span>
            proxy_pass http://localhost:8085<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-certbot-\u5E38\u7528\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#_3-certbot-\u5E38\u7528\u6307\u4EE4" aria-hidden="true">#</a> 3. certbot \u5E38\u7528\u6307\u4EE4</h2><h3 id="_3-1-\u5217\u51FA\u8BC1\u4E66\u548C\u5230\u671F\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5217\u51FA\u8BC1\u4E66\u548C\u5230\u671F\u65F6\u95F4" aria-hidden="true">#</a> 3.1 \u5217\u51FA\u8BC1\u4E66\u548C\u5230\u671F\u65F6\u95F4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>certbot certificates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20201110225053075.png" alt="image-20201110225053075"></p><p>\u4EE5\u4E0A\u53EF\u4EE5\u770B\u51FA\u6B64https \u8BC1\u4E66\u5DF2\u7ECF\u8FC7\u671F\u4E86</p><h3 id="_3-2-\u6D4B\u8BD5\u662F\u5426\u80FD\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#_3-2-\u6D4B\u8BD5\u662F\u5426\u80FD\u66F4\u65B0" aria-hidden="true">#</a> 3.2 \u6D4B\u8BD5\u662F\u5426\u80FD\u66F4\u65B0</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>certbot renew --dry-run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-3-\u624B\u52A8\u7ACB\u5373\u66F4\u65B0ssl\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_3-3-\u624B\u52A8\u7ACB\u5373\u66F4\u65B0ssl\u8BC1\u4E66" aria-hidden="true">#</a> 3.3 \u624B\u52A8\u7ACB\u5373\u66F4\u65B0SSL\u8BC1\u4E66</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>certbot renew 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-\u96C6\u6210\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_4-\u96C6\u6210\u95EE\u9898" aria-hidden="true">#</a> 4. \u96C6\u6210\u95EE\u9898</h2>`,49),h={id:"_4-1-let-s-encrypt-\u914D\u7F6E-ssl-\u8BC1\u4E66\u7684\u65F6\u5019-\u63D0\u793Adns-problem-nxdomain-looking-up-a-for-xxx-com",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_4-1-let-s-encrypt-\u914D\u7F6E-ssl-\u8BC1\u4E66\u7684\u65F6\u5019-\u63D0\u793Adns-problem-nxdomain-looking-up-a-for-xxx-com","aria-hidden":"true"},"#",-1),b={href:"http://xxx.com",target:"_blank",rel:"noopener noreferrer"},g=t('<p>\u95EE\u9898\u6807\u7684\u6BD4\u8F83\u660E\u786E\uFF1A DNS Problem .</p><p>ping \u4E0D\u901A\u8BE5\u57DF\u540D\uFF0C\u53EF\u80FD\u662F\u57DF\u540D\u89E3\u6790\u6CA1\u6709\u914D\u7F6E</p><h3 id="_4-2-\u6700\u8FD1\u6388\u6743\u592A\u591A\u6B21" tabindex="-1"><a class="header-anchor" href="#_4-2-\u6700\u8FD1\u6388\u6743\u592A\u591A\u6B21" aria-hidden="true">#</a> 4.2 \u6700\u8FD1\u6388\u6743\u592A\u591A\u6B21</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20201110233310535.png" alt="image-20201110233310535"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',5),v={href:"https://learnku.com/laravel/t/2525/using-certbot-lets-encrypt-small-step-run-towards-https",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.hangge.com/blog/cache/detail_3054.html",target:"_blank",rel:"noopener noreferrer"};function _(f,k){const n=l("ExternalLinkIcon");return r(),d("div",null,[o,e("p",null,[e("a",p,[a("\u5B98\u7F51\u5730\u5740https://certbot.eff.org/"),s(n)])]),u,e("h3",h,[m,a(" 4.1 Let's Encrypt \u914D\u7F6E SSL \u8BC1\u4E66\u7684\u65F6\u5019\uFF0C\u63D0\u793ADNS problem: NXDOMAIN looking up A for "),e("a",b,[a("xxx.com"),s(n)])]),g,e("p",null,[e("a",v,[a("\u4F7F\u7528Certot"),s(n)])]),e("p",null,[e("a",x,[a("CentOS\u4E0B\u81EA\u52A8\u7533\u8BF7\u3001\u90E8\u7F72Let's Encrypt\u514D\u8D39SSL\u8BC1\u4E66\u6559\u7A0B\uFF08Nginx\u670D\u52A1\u5668\uFF09"),s(n)])])])}const q=i(c,[["render",_],["__file","https-x-support.html.vue"]]);export{q as default};
