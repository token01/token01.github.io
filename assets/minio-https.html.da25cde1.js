import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as l,a as n,b as s,d as e,f as i,r as c}from"./app.2a33308c.js";const p={},r=n("h1",{id:"minio\u90E8\u7F72-minio\u914D\u7F6Ehttps",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#minio\u90E8\u7F72-minio\u914D\u7F6Ehttps","aria-hidden":"true"},"#"),s(" Minio\u90E8\u7F72 - minio\u914D\u7F6EHTTPS")],-1),d=n("h2",{id:"_1-\u7B80\u4ECB",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u7B80\u4ECB","aria-hidden":"true"},"#"),s(" 1. \u7B80\u4ECB")],-1),u=n("p",null,"MinIO\u90E8\u7F72\u9ED8\u8BA4\u4EE5HTTP\u65B9\u5F0F\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\uFF0C\u5982\u679C\u6211\u4EEC\u9700\u8981\u652F\u6301https \u5E94\u8BE5\u600E\u4E48\u505A\u5462\uFF1F",-1),v=n("p",null,"\u4E3B\u8981\u601D\u8DEF\u5C31\u662F",-1),m=n("ul",null,[n("li",null,"\u4E07\u80FD\u5927\u6CD5\uFF0C\u901A\u8FC7nginx\u53CD\u5411\u4EE3\u7406\uFF0C\u5C06https\u914D\u7F6E\u5728nginx\u4FA7\uFF0C\u5185\u90E8\u7684MinIO\u8FD8\u662F\u4F7F\u7528HTTP\uFF1B"),n("li",null,"MinIO\u670D\u52A1\u7AEF\u76F4\u63A5\u914D\u7F6E\u6210HTTPS\uFF1B")],-1),k={href:"https://java.isture.com/problem&solve/https/%E4%BD%BF%E7%94%A8acme.sh%E7%94%9F%E6%88%90%E5%85%8D%E8%B4%B9%E7%9A%84SSL%E8%AF%81%E4%B9%A6.html",target:"_blank",rel:"noopener noreferrer"},h=i(`<h2 id="_2-nginx-\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_2-nginx-\u65B9\u6848" aria-hidden="true">#</a> 2. nginx \u65B9\u6848</h2><ol><li>\u4FEE\u6539nginx\u914D\u7F6E\u6587\u4EF6</li></ol><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code> <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>          <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>     minio.aaa.com</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">listen</span>  <span class="token number">443</span> ssl</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">ssl_certificate</span> /home/wwwroot/minio.aaa.com/cret/cert.pem</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">ssl_certificate_key</span> /home/wwwroot/minio.aaa.com/cret/key.pem</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
           <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
           <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
           <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>

           <span class="token directive"><span class="token keyword">proxy_connect_timeout</span>  <span class="token number">300</span></span><span class="token punctuation">;</span>
           <span class="token comment"># Default is HTTP/1, keepalive is only enabled in HTTP/1.1</span>
           <span class="token directive"><span class="token keyword">proxy_http_version</span> 1.1</span><span class="token punctuation">;</span>
           <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token string">&quot;&quot;</span></span><span class="token punctuation">;</span>

            <span class="token directive"><span class="token keyword">proxy_pass</span> http://47.119.1.1:9000</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>java \u8FDE\u63A5\u4E5F\u6539\u6210https</li></ol><h3 id="_3-1-\u9047\u5230\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_3-1-\u9047\u5230\u7684\u95EE\u9898" aria-hidden="true">#</a> 3.1 \u9047\u5230\u7684\u95EE\u9898</h3><h4 id="_3-1-1-\u63D0\u793A\u7B7E\u540D\u4E0D\u5BF9" tabindex="-1"><a class="header-anchor" href="#_3-1-1-\u63D0\u793A\u7B7E\u540D\u4E0D\u5BF9" aria-hidden="true">#</a> 3.1.1 \u63D0\u793A\u7B7E\u540D\u4E0D\u5BF9</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>io.minio.errors.ErrorResponseException: The request signature we calculated does not match the signature you provided. Check your key and signing method.
	at io.minio.S3Base.execute(S3Base.java:670)
	at io.minio.S3Base.getRegion(S3Base.java:694)
	at io.minio.S3Base.execute(S3Base.java:470)
	at io.minio.S3Base.executeHead(S3Base.java:728)
	at io.minio.S3Base.statObject(S3Base.java:1447)
	at io.minio.MinioClient.statObject(MinioClient.java:217)
	at com.fardu.file.service.impl.MinioFileServiceImpl.getStatInfo(MinioFileServiceImpl.java:283)
	at com.fardu.file.service.impl.MinioFileServiceImpl.exists(MinioFileServiceImpl.java:201)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u51B3</p><p>nginx \u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E</p><div class="language-ngx ext-ngx line-numbers-mode"><pre class="language-ngx"><code> proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_set_header Host $http_host;

           proxy_connect_timeout  300;
           # Default is HTTP/1, keepalive is only enabled in HTTP/1.1
           proxy_http_version 1.1;
           proxy_set_header Connection &quot;&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-minio\u670D\u52A1\u7AEF\u914D\u7F6E\u6210https" tabindex="-1"><a class="header-anchor" href="#_3-minio\u670D\u52A1\u7AEF\u914D\u7F6E\u6210https" aria-hidden="true">#</a> 3. MinIO\u670D\u52A1\u7AEF\u914D\u7F6E\u6210HTTPS</h2><h3 id="_3-1-\u8BC1\u4E66\u5B58\u653E" tabindex="-1"><a class="header-anchor" href="#_3-1-\u8BC1\u4E66\u5B58\u653E" aria-hidden="true">#</a> 3.1 \u8BC1\u4E66\u5B58\u653E</h3>`,12),b={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdocs.min.io%2Fdocs%2Fhow-to-secure-access-to-minio-server-with-tls.html",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"{{HOME}}/.minio/certs",-1),g=i(`<p><strong>\u6CE8\u610F\uFF1A</strong></p><ul><li>\u79C1\u94A5\u9700\u8981\u547D\u540D\u4E3A\uFF1Aprivate.key</li><li>\u516C\u94A5\u9700\u8981\u547D\u540D\u4E3A\uFF1Apublic.crt (\u5982\u679C\u516C\u94A5\u662F\u4EE5pem\u683C\u5F0F\u7ED3\u5C3E\uFF0C\u53EF\u76F4\u63A5\u6539\u4E3Acrt\u683C\u5F0F)</li></ul><blockquote><p>\u5982\u679C\u662F\u4E0B\u9762\u7684docker-compose \u5219\u653E\u5728\u5BF9\u5E94\u7684\u6620\u5C04\u76EE\u5F55\u4E0B</p></blockquote><h3 id="_3-2-docker-compose-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-2-docker-compose-\u914D\u7F6E" aria-hidden="true">#</a> 3.2 docker-compose \u914D\u7F6E</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">minio</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> minio/minio<span class="token punctuation">:</span>RELEASE.2021<span class="token punctuation">-</span>10<span class="token punctuation">-</span>27T16<span class="token punctuation">-</span>29<span class="token punctuation">-</span>42Z
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> minio
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token comment"># api \u7AEF\u53E3</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9000:9000&quot;</span>
      <span class="token comment"># \u63A7\u5236\u53F0\u7AEF\u53E3</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9001:9001&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token comment"># \u65F6\u533A\u4E0A\u6D77</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai
      <span class="token comment"># \u7BA1\u7406\u540E\u53F0\u7528\u6237\u540D</span>
      <span class="token key atrule">MINIO_ACCESS_KEY</span><span class="token punctuation">:</span> admin
      <span class="token comment"># \u7BA1\u7406\u540E\u53F0\u5BC6\u7801\uFF0C\u6700\u5C0F8\u4E2A\u5B57\u7B26</span>
      <span class="token key atrule">MINIO_SECRET_KEY</span><span class="token punctuation">:</span> zsz123456
      <span class="token comment"># https\u9700\u8981\u6307\u5B9A\u57DF\u540D</span>
      <span class="token key atrule">MINIO_SERVER_URL</span><span class="token punctuation">:</span> <span class="token string">&quot;https://minio.xxx.com:9000&quot;</span>
      <span class="token key atrule">MINIO_BROWSER_REDIRECT_URL</span><span class="token punctuation">:</span> <span class="token string">&quot;https://minio.xxx.com:9001&quot;</span>
      <span class="token comment"># \u5F00\u542F\u538B\u7F29 on \u5F00\u542F off \u5173\u95ED</span>
      <span class="token key atrule">MINIO_COMPRESS</span><span class="token punctuation">:</span> <span class="token string">&quot;off&quot;</span>
      <span class="token comment"># \u6269\u5C55\u540D .pdf,.doc \u4E3A\u7A7A \u6240\u6709\u7C7B\u578B\u5747\u538B\u7F29</span>
      <span class="token key atrule">MINIO_COMPRESS_EXTENSIONS</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token comment"># mime \u7C7B\u578B application/pdf \u4E3A\u7A7A \u6240\u6709\u7C7B\u578B\u5747\u538B\u7F29</span>
      <span class="token key atrule">MINIO_COMPRESS_MIME_TYPES</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token comment"># \u6620\u5C04\u5F53\u524D\u76EE\u5F55\u4E0B\u7684data\u76EE\u5F55\u81F3\u5BB9\u5668\u5185/data\u76EE\u5F55</span>
      <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/data
      <span class="token comment"># \u6620\u5C04\u914D\u7F6E\u76EE\u5F55</span>
      <span class="token punctuation">-</span> ./config<span class="token punctuation">:</span>/root/.minio
    <span class="token key atrule">command</span><span class="token punctuation">:</span> server <span class="token punctuation">-</span><span class="token punctuation">-</span>address &#39;<span class="token punctuation">:</span>9000&#39; <span class="token punctuation">-</span><span class="token punctuation">-</span>console<span class="token punctuation">-</span>address &#39;<span class="token punctuation">:</span>9001&#39; /data  <span class="token comment"># \u6307\u5B9A\u5BB9\u5668\u4E2D\u7684\u76EE\u5F55 /data</span>
    <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token comment"># restart: always</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-docker\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_3-3-docker\u542F\u52A8" aria-hidden="true">#</a> 3.3 docker\u542F\u52A8</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u65E5\u5FD7</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> logs <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220725233426822.png" alt="image-20220725233426822"></p><h2 id="_4-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_4-\u603B\u7ED3" aria-hidden="true">#</a> 4. \u603B\u7ED3</h2><p>\u76F8\u5BF9\u6765\u8BF4nginx \u4F1A\u66F4\u7075\u6D3B\u4E00\u70B9\uFF0C\u4EE5\u540E\u96C6\u7FA4\u5565\u7684\u90FD\u53EF\u4EE5\u901A\u8FC7nginx\u6765\u505A\uFF0C\u800Cminio\u670D\u52A1\u6539\u9020\u6210https \u5C31\u53EA\u80FD\u662Fminio\u670D\u52A1\u5355\u53F0\u5B9E\u4F8Bhttps\u4E86</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,13),x={href:"https://juejin.cn/post/7021057486404714532",target:"_blank",rel:"noopener noreferrer"};function y(f,S){const a=c("ExternalLinkIcon");return o(),l("div",null,[r,d,u,v,m,n("blockquote",null,[n("p",null,[s("\u5982\u4F55\u751F\u6210https\u8BC1\u4E66\uFF1A"),n("a",k,[s("\u4F7F\u7528acme.sh\u751F\u6210\u514D\u8D39\u7684SSL\u8BC1\u4E66"),e(a)])])]),h,n("p",null,[s("\u9996\u5148\uFF0C\u6839\u636E\u5B98\u7F51\u63CF\u8FF0\uFF08"),n("a",b,[s("How to secure access to MinIO server with TLS"),e(a)]),s("\uFF09\uFF0C\u5C06TLS\u7684\u516C\u79C1\u94A5\u653E\u5230\uFF1A"),_,s(" \u91CC")]),g,n("p",null,[n("a",x,[s("\u8E29\u5751\u8BB0\u5F55\u4E4BMinIO\u6DFB\u52A0HTTPS\u8BBF\u95EE"),e(a)])])])}const I=t(p,[["render",y],["__file","minio-https.html.vue"]]);export{I as default};
