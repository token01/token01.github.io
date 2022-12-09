const n=JSON.parse('{"key":"v-785d7983","path":"/interview/nginx-40.html","title":"40 道 Nginx 精选面试题👍","lang":"zh-CN","frontmatter":{"title":"40 道 Nginx 精选面试题👍","shortTitle":"40 道 Nginx 精选面试题👍","category":["求职面试"],"tag":["面试题&八股文"],"description":"凤凰涅槃进阶之路，小白的零基础Java教程，40 道 Nginx 精选面试题👍","head":[["meta",{"name":"keywords","content":"Nginx,nginx,面试题,八股文"}],["meta",{"property":"og:url","content":"https://bytecodes.tech/interview/nginx-40.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"40 道 Nginx 精选面试题👍"}],["meta",{"property":"og:description","content":"凤凰涅槃进阶之路，小白的零基础Java教程，40 道 Nginx 精选面试题👍"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-09T07:23:26.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"面试题&八股文"}],["meta",{"property":"article:modified_time","content":"2022-12-09T07:23:26.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"什么是Nginx？","slug":"什么是nginx","link":"#什么是nginx","children":[]},{"level":2,"title":"Nginx 有哪些优点？","slug":"nginx-有哪些优点","link":"#nginx-有哪些优点","children":[]},{"level":2,"title":"Nginx应用场景？","slug":"nginx应用场景","link":"#nginx应用场景","children":[]},{"level":2,"title":"Nginx怎么处理请求的？","slug":"nginx怎么处理请求的","link":"#nginx怎么处理请求的","children":[]},{"level":2,"title":"Nginx 是如何实现高并发的？","slug":"nginx-是如何实现高并发的","link":"#nginx-是如何实现高并发的","children":[]},{"level":2,"title":"什么是正向代理？","slug":"什么是正向代理","link":"#什么是正向代理","children":[]},{"level":2,"title":"什么是反向代理？","slug":"什么是反向代理","link":"#什么是反向代理","children":[]},{"level":2,"title":"反向代理服务器的优点是什么?","slug":"反向代理服务器的优点是什么","link":"#反向代理服务器的优点是什么","children":[]},{"level":2,"title":"Nginx目录结构有哪些？","slug":"nginx目录结构有哪些","link":"#nginx目录结构有哪些","children":[]},{"level":2,"title":"Nginx配置文件nginx.conf有哪些属性模块?","slug":"nginx配置文件nginx-conf有哪些属性模块","link":"#nginx配置文件nginx-conf有哪些属性模块","children":[]},{"level":2,"title":"cookie和session区别？","slug":"cookie和session区别","link":"#cookie和session区别","children":[]},{"level":2,"title":"为什么 Nginx 不使用多线程？","slug":"为什么-nginx-不使用多线程","link":"#为什么-nginx-不使用多线程","children":[]},{"level":2,"title":"nginx和apache的区别","slug":"nginx和apache的区别","link":"#nginx和apache的区别","children":[]},{"level":2,"title":"什么是动态资源、静态资源分离？","slug":"什么是动态资源、静态资源分离","link":"#什么是动态资源、静态资源分离","children":[]},{"level":2,"title":"为什么要做动、静分离？","slug":"为什么要做动、静分离","link":"#为什么要做动、静分离","children":[]},{"level":2,"title":"什么叫 CDN 服务？","slug":"什么叫-cdn-服务","link":"#什么叫-cdn-服务","children":[]},{"level":2,"title":"Nginx怎么做的动静分离？","slug":"nginx怎么做的动静分离","link":"#nginx怎么做的动静分离","children":[]},{"level":2,"title":"Nginx负载均衡的算法怎么实现的?策略有哪些?","slug":"nginx负载均衡的算法怎么实现的-策略有哪些","link":"#nginx负载均衡的算法怎么实现的-策略有哪些","children":[]},{"level":2,"title":"如何用Nginx解决前端跨域问题？","slug":"如何用nginx解决前端跨域问题","link":"#如何用nginx解决前端跨域问题","children":[]},{"level":2,"title":"Nginx虚拟主机怎么配置?","slug":"nginx虚拟主机怎么配置","link":"#nginx虚拟主机怎么配置","children":[]},{"level":2,"title":"location的作用是什么？","slug":"location的作用是什么","link":"#location的作用是什么","children":[]},{"level":2,"title":"限流怎么做的？","slug":"限流怎么做的","link":"#限流怎么做的","children":[]},{"level":2,"title":"漏桶流算法和令牌桶算法知道？","slug":"漏桶流算法和令牌桶算法知道","link":"#漏桶流算法和令牌桶算法知道","children":[]},{"level":2,"title":"Nginx配置高可用性怎么配置？","slug":"nginx配置高可用性怎么配置","link":"#nginx配置高可用性怎么配置","children":[]},{"level":2,"title":"Nginx怎么判断别IP不可访问？","slug":"nginx怎么判断别ip不可访问","link":"#nginx怎么判断别ip不可访问","children":[]},{"level":2,"title":"在nginx中，如何使用未定义的服务器名称来阻止处理请求？","slug":"在nginx中-如何使用未定义的服务器名称来阻止处理请求","link":"#在nginx中-如何使用未定义的服务器名称来阻止处理请求","children":[]},{"level":2,"title":"怎么限制浏览器访问？","slug":"怎么限制浏览器访问","link":"#怎么限制浏览器访问","children":[]},{"level":2,"title":"Rewrite全局变量是什么？","slug":"rewrite全局变量是什么","link":"#rewrite全局变量是什么","children":[]},{"level":2,"title":"Nginx 如何实现后端服务的健康检查？","slug":"nginx-如何实现后端服务的健康检查","link":"#nginx-如何实现后端服务的健康检查","children":[]},{"level":2,"title":"Nginx 如何开启压缩？","slug":"nginx-如何开启压缩","link":"#nginx-如何开启压缩","children":[]},{"level":2,"title":"ngx_http_upstream_module的作用是什么?","slug":"ngx-http-upstream-module的作用是什么","link":"#ngx-http-upstream-module的作用是什么","children":[]},{"level":2,"title":"什么是C10K问题?","slug":"什么是c10k问题","link":"#什么是c10k问题","children":[]},{"level":2,"title":"Nginx是否支持将请求压缩到上游?","slug":"nginx是否支持将请求压缩到上游","link":"#nginx是否支持将请求压缩到上游","children":[]},{"level":2,"title":"如何在Nginx中获得当前的时间?","slug":"如何在nginx中获得当前的时间","link":"#如何在nginx中获得当前的时间","children":[]},{"level":2,"title":"用Nginx服务器解释-s的目的是什么?","slug":"用nginx服务器解释-s的目的是什么","link":"#用nginx服务器解释-s的目的是什么","children":[]},{"level":2,"title":"如何在Nginx服务器上添加模块?","slug":"如何在nginx服务器上添加模块","link":"#如何在nginx服务器上添加模块","children":[]},{"level":2,"title":"生产中如何设置worker进程的数量呢？","slug":"生产中如何设置worker进程的数量呢","link":"#生产中如何设置worker进程的数量呢","children":[]},{"level":2,"title":"nginx状态码","slug":"nginx状态码","link":"#nginx状态码","children":[]}],"git":{"createdTime":1669017288000,"updatedTime":1670570606000,"contributors":[{"name":"Kong Ming(空明)","email":"token01@126.com","commits":11}]},"readingTime":{"minutes":26.93,"words":8078},"filePathRelative":"interview/nginx-40.md","localizedDate":"2022年11月21日"}');export{n as data};
