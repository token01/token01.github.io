import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as p,a as n,b as s,d as t,e as a,r as c}from"./app.d3a29ae6.js";const o={},u=a('<blockquote><p>限流一般是一种保护系统稳定性的一种措施。在开放API中比较常见。<br> 对某一用户，或指定IP，或具体到某个API，在一个具体的时间里限制请求次数。</p></blockquote><p>关键词</p><ul><li>熔断</li><li>服务降级</li><li>延迟处理</li><li>特权处理</li></ul><h2 id="主流框架的实现" tabindex="-1"><a class="header-anchor" href="#主流框架的实现" aria-hidden="true">#</a> 主流框架的实现</h2><p>首先看看主要的框架是使用，再讨论自己怎么实现</p><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h3><p>Nginx 自带的两个限流模块</p>',7),r=n("li",null,"ngx_http_limit_conn_module 连接数限流模块",-1),d=n("li",null,"ngx_http_limit_req_module 请求数限流模块",-1),v=n("li",null,"ngx_lua",-1),k=n("li",null,"ngx_lua_waf模块",-1),m={href:"https://openresty.org/",target:"_blank",rel:"noopener noreferrer"},b=a(`<p>ngx_http_limit_conn_module</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http {
    limit_conn_zone $binary_remote_addr zone=addr:10m;
    limit_conn_log_level error;
    limit_conn_status 503;
    ...
    server {
        ...
        location /download/ {
            limit_conn addr 1;
        }

ab test
ab -n10 -c3 https://ifuture.pro/test/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>limit_conn_zone: 配置限流的key以及存储这些key共用的共享内存的大小； <ul><li>key 是$binary_remote_addr，表示IP地址，如果如果需要对总域名进行限流，key就应该使用 $server_name $host等等，能唯一表示该域名的Nginx变量；</li><li>zone=addr:10m中，addr表示连接数限流的区域名称，10m表示可以分配的共享空间的大小。</li></ul></li><li>binary_remote_addr变量在64位平台中占用64字节。1M共享空间可以保存1.6万个64位的，10m就可以保存16万个。如果超过16万个，共享空间被用完，服务器将会对后续所有的请求返回 503。</li><li>limit_conn:配置指定key的最大连接数。样例中指定的最大连接数是1，表示Nginx最多同时允许1个连接进行location /limit 的行为操作。</li><li>limit_conn_status:配置被限流后返回的状态码，样例中设置的是503.</li><li>limit_conn_log_level:配置被限流后的日志级别，设置的是error级别</li></ul><p>ngx_http_limit_req_module</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http {
    limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;
    limit_req_log_level error;
    limit_req_status 503;
    ...
    server {
        ...
        location /search/ {
            limit_req zone=one burst=5;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rate=1r/s 固定请求速率设置，每秒1个请求。</p>`,6),g={href:"https://www.nenew.net/use-nginx-configure-to-protect-cc-attack.html",target:"_blank",rel:"noopener noreferrer"},h=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http{
    ...
    limit_req_zone $cookie_token zone=session_limit:3m rate=1r/s;
    limit_req_zone $binary_remote_addr $uri zone=auth_limit:3m rate=1r/m;
}
location /{
limit_req zone=session_limit burst=5;
rewrite_by_lua &#39;
    local random = ngx.var.cookie_random
    if (random == nil) then
    return ngx.redirect(&quot;/auth?url=&quot; .. ngx.var.request_uri)
    end
    local token = ngx.md5(&quot;opencdn&quot; .. ngx.var.remote_addr .. random)
    if (ngx.var.cookie_token ~= token) then
    return ngx.redirect(&quot;/auth?url=&quot;.. ngx.var.request_uri)
    end
&#39;;
}
location /auth {
limit_req zone=auth_limit burst=1;
if ($arg_url = &quot;&quot;)
{
return403;
}
access_by_lua &#39;
local random = math.random(9999)
local token = ngx.md5(&quot;opencdn&quot; .. ngx.var.remote_addr .. random)
if (ngx.var.cookie_token ~= token) then
ngx.header[&quot;Set-Cookie&quot;] = {
    &quot;token=&quot; .. token, &quot;random=&quot; .. random
}
return ngx.redirect(ngx.var.arg_url)
end
&#39;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spring-cloud-gateway" tabindex="-1"><a class="header-anchor" href="#spring-cloud-gateway" aria-hidden="true">#</a> spring-cloud-gateway</h3><p>maven <code>pom.xml</code></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-gateway<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-redis-reactive<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>appliaction.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">gateway</span><span class="token punctuation">:</span>
      <span class="token key atrule">routes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> zzz<span class="token punctuation">-</span>transfer
        <span class="token key atrule">uri</span><span class="token punctuation">:</span> lb<span class="token punctuation">:</span>//zzz<span class="token punctuation">-</span>transfer
        <span class="token key atrule">order</span><span class="token punctuation">:</span> <span class="token number">8002</span>
        <span class="token key atrule">predicates</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> Path=/api/tengine/<span class="token important">**</span>
        <span class="token punctuation">-</span> CacheBody=<span class="token punctuation">{</span>*<span class="token punctuation">}</span>
        <span class="token key atrule">filters</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> StripPrefix=2
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> RequestRateLimiter
            <span class="token key atrule">args</span><span class="token punctuation">:</span>
              <span class="token key atrule">redis-rate-limiter.replenishRate</span><span class="token punctuation">:</span> <span class="token number">1</span>  <span class="token comment"># 允许用户每秒处理多少个请求</span>
              <span class="token key atrule">redis-rate-limiter.burstCapacity</span><span class="token punctuation">:</span> <span class="token number">3</span>  <span class="token comment"># 令牌桶的容量，允许在一秒钟内完成的最大请求数</span>
              <span class="token key atrule">key-resolver</span><span class="token punctuation">:</span> <span class="token string">&quot;#{@hostNameKeyResolver}&quot;</span> <span class="token comment">#SPEL表达式去的对应的bean</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>REDIS_HOST<span class="token punctuation">:</span>localhost<span class="token punctuation">}</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>REDIS_PORT<span class="token punctuation">:</span><span class="token number">6379</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * IP 限流
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@Primary</span>
    <span class="token class-name">KeyResolver</span> <span class="token function">hostNameKeyResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> exchange <span class="token operator">-&gt;</span> <span class="token class-name">Mono</span><span class="token punctuation">.</span><span class="token function">just</span><span class="token punctuation">(</span>exchange<span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getRemoteAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getHostName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * API 地址限流
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token class-name">KeyResolver</span> <span class="token function">apiKeyResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> exchange <span class="token operator">-&gt;</span> <span class="token class-name">Mono</span><span class="token punctuation">.</span><span class="token function">just</span><span class="token punctuation">(</span>exchange<span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="alibaba-sentinel" tabindex="-1"><a class="header-anchor" href="#alibaba-sentinel" aria-hidden="true">#</a> Alibaba Sentinel</h3>`,8),_={href:"https://spring.io/projects/spring-cloud-alibaba",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/alibaba/spring-cloud-alibaba#components",target:"_blank",rel:"noopener noreferrer"},x=a(`<p>pom.xml</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-nacos-discovery<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-nacos-config<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-sentinel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置方式" tabindex="-1"><a class="header-anchor" href="#配置方式" aria-hidden="true">#</a> 配置方式</h4>`,3),f=n("p",null,"基于sentinel-dashboard 界面化配置",-1),q={href:"https://github.com/alibaba/Sentinel/releases",target:"_blank",rel:"noopener noreferrer"},I=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> sentinel-dashboard.jar <span class="token parameter variable">--server.port</span><span class="token operator">=</span><span class="token number">8080</span>

可能在sentinel dashboard上不显示，请求一下个个服务试试
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>application.yml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring:
  application:
    name: zzz-gateway
  cloud:
    nacos:
      discovery:
        server-addr: z.com:8848
    sentinel:
      transport:
        dashboard: z.com:8080
      enabled: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),w=a(`<li><p>基于nacos config</p><p>application.yml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring:
  application:
    name: zzz-gateway
  cloud:
    nacos:
      discovery:
        server-addr: ifuture.pro:8848
      config:
        server-addr: ifuture.pro:8848
        file-extension: yaml
    sentinel:
      transport:
        dashboard: ifuture.pro:8080
      datasource:
          ds:
            nacos:
              server-addr: ifuture.pro:8848
              dataId: spring-cloud-sentinel-nacos
              groupId: DEFAULT_GROUP
              rule-type: flow
              namespace: zzzgateway
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">resource</span><span class="token punctuation">:</span> <span class="token string">&quot;/api&quot;</span>
  <span class="token key atrule">limitApp</span><span class="token punctuation">:</span> default
  <span class="token key atrule">grade</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">count</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">strategy</span><span class="token punctuation">:</span> <span class="token number">0</span>
  <span class="token key atrule">controlBehavior</span><span class="token punctuation">:</span> <span class="token number">0</span>
  <span class="token key atrule">clusterMode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

  resource：资源名，即限流规则的作用对象。
  limitApp：流控针对的调用来源，若为 default 则不区分调用来源。
  grade：限流阈值类型，QPS 或线程数模式，0代表根据并发数量来限流，1代表根据QPS来进行流量控制。
  count：限流阈值
  strategy：判断的根据是资源自身，还是根据其它关联资源 (refResource)，还是根据链路入口
  controlBehavior：流控效果（直接拒绝 / 排队等待 / 慢启动模式）
  clusterMode：是否为集群模式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),z={href:"https://github.com/alibaba/Sentinel/wiki/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},S=a(`<h2 id="自己实现" tabindex="-1"><a class="header-anchor" href="#自己实现" aria-hidden="true">#</a> 自己实现</h2><h3 id="计数器" tabindex="-1"><a class="header-anchor" href="#计数器" aria-hidden="true">#</a> 计数器</h3><p>系统维护一个计数器，来一个请求就加1，请求处理完成就减1，当计数器大于指定的阈值，就拒绝新的请求。<br> 基于这个简单的方法，可以再延伸出一些高级功能，比如阈值可以不是固定值，是动态调整的。另外，还可以有多组计数器分别管理不同的服务，以保证互不影响等。</p><h3 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h3><p>就是基于FIFO队列，所有请求都进入队列，后端程序从队列中取出待处理的请求依次处理。<br> 基于队列的方法，也可以延伸出更多的玩法来，比如可以设置多个队列以配置不同的优先级。</p><h3 id="令牌桶" tabindex="-1"><a class="header-anchor" href="#令牌桶" aria-hidden="true">#</a> <strong>令牌桶</strong></h3><p>首先还是要基于一个队列，请求放到队列里面。但除了队列以外，还要设置一个令牌桶，另外有一个脚本以持续恒定的速度往令牌桶里面放令牌，后端处理程序每处理一个请求就必须从桶里拿出一个令牌，如果令牌拿完了，那就不能处理请求了。我们可以控制脚本放令牌的速度来达到控制后端处理的速度，以实现动态流控。</p><ul><li>一个固定容量的桶。如：每分钟能请求的最大量</li><li>一个永续线程以匀速的方式将令牌放入桶中，超过容量丢弃</li><li>有请求了，将桶内令牌取出，如果没有足够的令牌则限流</li></ul><h3 id="spring-redis-lua" tabindex="-1"><a class="header-anchor" href="#spring-redis-lua" aria-hidden="true">#</a> Spring Redis Lua</h3><p><code>Spring Cloud Gateway</code> 就是基于 <code>Redis + Lua</code> 的方式实现限流的，主要是减少网络开销，使用Lua脚本，无需向Redis 发送多次请求，执行一次即可。</p><p>Lua 脚本位置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring-cloud-gateway-core-2.1.0.RELEASE.jar/META-INF/scripts/request_rate_limiter.lua
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以使用<code>DefaultRedisScript</code> 去调用。模仿spring cloud gateway 自己写一个限流吧</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> luaScript <span class="token operator">=</span> <span class="token function">getLuaScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">RedisScript</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span> redisScript <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultRedisScript</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>luaScript<span class="token punctuation">,</span> <span class="token class-name">Number</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Number</span> count <span class="token operator">=</span> limitRedisTemplate<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>redisScript<span class="token punctuation">,</span> keys<span class="token punctuation">,</span> limitCount<span class="token punctuation">,</span> limitPeriod<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function R(N,P){const e=c("ExternalLinkIcon");return l(),p("div",null,[u,n("ul",null,[r,d,v,k,n("li",null,[n("a",m,[s("OpenResty"),t(e)])])]),b,n("p",null,[n("a",g,[s("抵御CC攻击"),t(e)])]),h,n("p",null,[s("Spring Cloud Netflix 诸多组件不在更新维护后 Spring Cloud也正式加入了"),n("a",_,[s("spring-cloud-alibaba"),t(e)]),n("a",y,[s("Sentinel"),t(e)]),s("就是其中一员，它把流量作为切入点，从流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性")]),x,n("ul",null,[n("li",null,[f,n("p",null,[s("下载 sentinel-dashboard "),n("a",q,[s("https://github.com/alibaba/Sentinel/releases"),t(e)])]),I]),w,n("li",null,[n("p",null,[s("基于代码 "),n("a",z,[s("https://github.com/alibaba/Sentinel/wiki/如何使用"),t(e)])])])]),S])}const A=i(o,[["render",R],["__file","如何限流.html.vue"]]);export{A as default};
