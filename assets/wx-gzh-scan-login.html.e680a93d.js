import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,a,b as o,d as p,f as r,r as l}from"./app.333ff1c5.js";const i={},c=r(`<h1 id="tomcat\u4F18\u5316\u4E00-\u4F18\u5316\u81EA\u8EAB\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#tomcat\u4F18\u5316\u4E00-\u4F18\u5316\u81EA\u8EAB\u7684\u914D\u7F6E" aria-hidden="true">#</a> Tomcat\u4F18\u5316\u4E00\uFF1A\u4F18\u5316\u81EA\u8EAB\u7684\u914D\u7F6E</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>Tomcat\u670D\u52A1\u5668\u5728JavaEE\u9879\u76EE\u4E2D\u4F7F\u7528\u7387\u975E\u5E38\u9AD8\uFF0C\u6240\u4EE5\u5728\u751F\u4EA7\u73AF\u5883\u5BF9Tomcat\u7684\u4F18\u5316\u4E5F\u53D8\u5F97\u975E\u5E38\u91CD\u8981\u4E86\u3002</p><p>\u5BF9\u4E8ETomcat\u7684\u4F18\u5316\uFF0C\u4E3B\u8981\u662F\u4ECE2\u4E2A\u65B9\u9762\u5165\u624B\uFF0C\u4E00\u662F<strong>Tomcat\u81EA\u8EAB\u7684\u914D\u7F6E</strong>\uFF0C\u53E6\u4E00\u4E2A\u662F<strong>Tomcat\u6240\u8FD0\u884C\u7684jvm\u865A\u62DF\u673A\u7684\u8C03\u4F18</strong>\u3002</p><h2 id="_2-\u524D\u7F6E\u914D\u7F6E-\u767B\u5F55\u7CFB\u7EDF-\u914D\u7F6Etomcat\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#_2-\u524D\u7F6E\u914D\u7F6E-\u767B\u5F55\u7CFB\u7EDF-\u914D\u7F6Etomcat\u7528\u6237" aria-hidden="true">#</a> 2. \u524D\u7F6E\u914D\u7F6E\uFF1A\u767B\u5F55\u7CFB\u7EDF\uFF0C\u914D\u7F6Etomcat\u7528\u6237</h2><p>\u5982\u679C\u4E0D\u914D\u7F6Etomcat\u7528\u6237\uFF0C\u90A3\u4E48\u67E5\u770Btomcat\u72B6\u6001\u65F6\uFF0C\u5C06\u4F1A\u51FA\u73B0403\u9519\u8BEF</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210728220240999.png" alt="image-20210728220240999"></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210728220259132.png" alt="image-20210728220259132"></p><p>\u5982\u679C\u9700\u8981\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5FC5\u987B\u914D\u7F6Etomcat\u7528\u6237\uFF0C\u5728\u5B89\u88C5\u5B8CTomcat\u540E\uFF0C\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C</p><p>\u5728<code>/conf/tomcat-users.xml</code>\u6587\u4EF6\u4E2D\u7684<code>&lt;tomcat-users&gt;</code>\u6807\u7B7E\u91CC\u9762\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;</span><span class="token operator">!</span>-- \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF0C\u914D\u7F6Etomcat\u7684\u7BA1\u7406\u7528\u6237 --<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>role <span class="token assign-left variable">rolename</span><span class="token operator">=</span><span class="token string">&quot;manager&quot;</span>/<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>role <span class="token assign-left variable">rolename</span><span class="token operator">=</span><span class="token string">&quot;manager-gui&quot;</span>/<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>role <span class="token assign-left variable">rolename</span><span class="token operator">=</span><span class="token string">&quot;admin&quot;</span>/<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>role <span class="token assign-left variable">rolename</span><span class="token operator">=</span><span class="token string">&quot;admin-gui&quot;</span>/<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>user <span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token string">&quot;tomcat&quot;</span> <span class="token assign-left variable">password</span><span class="token operator">=</span><span class="token string">&quot;tomcat&quot;</span> <span class="token assign-left variable">roles</span><span class="token operator">=</span><span class="token string">&quot;admin-gui,admin,manager-gui,manager&quot;</span>/<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u662Ftomcat7\uFF0C\u914D\u7F6E\u4E86tomcat\u7528\u6237\u5C31\u53EF\u4EE5\u767B\u5F55\u7CFB\u7EDF\u4E86\uFF0C\u4F46\u662Ftomcat8\u4E2D\u4E0D\u884C\uFF0C\u8FD8\u9700\u8981\u4FEE\u6539\u53E6\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF0C\u5426\u5219\u8BBF\u95EE\u4E0D\u4E86\uFF0C\u63D0\u793A403\uFF0C\u6253\u5F00<code>webapps/manager/META-INF/context.xml</code>\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;</span><span class="token operator">!</span>-- \u5C06Valve\u6807\u7B7E\u7684\u5185\u5BB9\u6CE8\u91CA\u6389\uFF0C\u4FDD\u5B58\u9000\u51FA\u5373\u53EF --<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>?xml <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token string">&quot;1.0&quot;</span> <span class="token assign-left variable">encoding</span><span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span>?<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>Context <span class="token assign-left variable">antiResourceLocking</span><span class="token operator">=</span><span class="token string">&quot;false&quot;</span> <span class="token assign-left variable">privileged</span><span class="token operator">=</span><span class="token string">&quot;true&quot;</span> <span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">!</span>--<span class="token operator">&lt;</span>Valve <span class="token assign-left variable">className</span><span class="token operator">=</span><span class="token string">&quot;org.apache.catalina.valves.RemoteAddrValve&quot;</span>
         <span class="token assign-left variable">allow</span><span class="token operator">=</span><span class="token string">&quot;127\\.\\d+\\.\\d+\\.\\d+|::1|0:0:0:0:0:0:0:1&quot;</span> /<span class="token operator">&gt;</span>--<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>Manager <span class="token assign-left variable">sessionAttributeValueClassNameFilter</span><span class="token operator">=</span><span class="token string">&quot;java\\.lang\\.(?:Boolean|Integer|Long|Number|String)|org\\.apache\\.catalina\\.filters\\.CsrfPreventionFilter\\<span class="token variable">$LruCache</span>(?:\\<span class="token variable">$1</span>)?|java\\.util\\.(?:Linked)?HashMap&quot;</span>/<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/Context<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u6B21\u70B9\u51FB\u7684\u65F6\u5019\uFF0C\u5C31\u9700\u8981\u8F93\u5165\u8D26\u6237\u5BC6\u7801\u4E86\uFF1Atomcat/tomcat</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210728220849612.png" alt="image-20210728220849612"></p><p>\u767B\u5F55\u4E4B\u540E\u53EF\u4EE5\u770B\u5230\u670D\u52A1\u5668\u72B6\u6001\u7B49\u4FE1\u606F\uFF0C\u4E3B\u8981\u5305\u62EC\u670D\u52A1\u5668\u4FE1\u606F\uFF0CJVM\uFF0Cajp\u548Chttp\u4FE1\u606F</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210728220924142.png" alt="image-20210728220924142"></p><h2 id="_3-\u4F18\u53161-ajp\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#_3-\u4F18\u53161-ajp\u8FDE\u63A5" aria-hidden="true">#</a> 3. \u4F18\u53161\uFF1AAJP\u8FDE\u63A5</h2><blockquote><p>\u65B0\u7248tomcat8\uFF0C\u5DF2\u81EA\u52A8\u7981\u6B62</p></blockquote><p>\u5728\u670D\u52A1\u72B6\u6001\u9875\u9762\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0C\u9ED8\u8BA4\u72B6\u6001\u4E0B\u4F1A\u542F\u7528AJP\u670D\u52A1\uFF0C\u5E76\u4E14\u5360\u75288009\u7AEF\u53E3\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210728221223607.png" alt="image-20210728221223607"></p><h3 id="_3-1-\u4EC0\u4E48\u662Fajp" tabindex="-1"><a class="header-anchor" href="#_3-1-\u4EC0\u4E48\u662Fajp" aria-hidden="true">#</a> 3.1 \u4EC0\u4E48\u662FAJP</h3><p>AJP\uFF08Apache JServer Protocol\uFF09 AJPv13\u534F\u8BAE\u662F\u9762\u5411\u5305\u7684\u3002WEB\u670D\u52A1\u5668\u548CServlet\u5BB9\u5668\u901A\u8FC7TCP\u8FDE\u63A5\u6765\u4EA4\u4E92\uFF1B\u4E3A\u4E86\u8282\u7701SOCKET\u521B\u5EFA\u7684\u6602\u8D35\u4EE3\u4EF7\uFF0CWEB\u670D\u52A1\u5668\u4F1A\u5C1D\u8BD5\u7EF4\u62A4\u4E00\u4E2A\u6C38\u4E45TCP\u8FDE\u63A5\u5230servlet\u5BB9\u5668\uFF0C\u5E76\u4E14\u5728\u591A\u4E2A\u8BF7\u6C42\u548C\u54CD\u5E94\u5468\u671F\u8FC7\u7A0B\u4F1A\u91CD\u7528\u8FDE\u63A5\u3002 <img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210728221317207.png" alt="image-20210728221317207"></p><p>\u6211\u4EEC\u4E00\u822C\u662F\u4F7F\u7528Nginx+Tomcat\u7684\u67B6\u6784\uFF0C\u6240\u4EE5\u7528\u4E0D\u7740AJP\u534F\u8BAE\uFF0C\u628AAJP\u8FDE\u63A5\u5668\u7981\u7528\u3002</p><p>\u4FEE\u6539conf\u4E0B\u7684server.xml\u6587\u4EF6\uFF0C\u5C06AJP\u670D\u52A1\u7981\u7528\u6389\u5373\u53EF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;</span><span class="token operator">!</span>-- \u7981\u7528AJP\u8FDE\u63A5 --<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>-- <span class="token operator">&lt;</span>Connector <span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token string">&quot;8009&quot;</span> <span class="token assign-left variable">protocol</span><span class="token operator">=</span><span class="token string">&quot;AJP/1.3&quot;</span> <span class="token assign-left variable">redirectPort</span><span class="token operator">=</span><span class="token string">&quot;8443&quot;</span> /<span class="token operator">&gt;</span> --<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u91CD\u542Ftomcat\uFF0C\u67E5\u770B\u6548\u679C\u3002\u53EF\u4EE5\u770B\u5230AJP\u670D\u52A1\u5DF2\u7ECF\u4E0D\u5B58\u5728\u4E86\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210728221415136.png" alt="image-20210728221415136"></p><h2 id="_4-\u4F18\u53162-\u6267\u884C\u5668-\u7EBF\u7A0B\u6C60" tabindex="-1"><a class="header-anchor" href="#_4-\u4F18\u53162-\u6267\u884C\u5668-\u7EBF\u7A0B\u6C60" aria-hidden="true">#</a> 4. \u4F18\u53162\uFF1A\u6267\u884C\u5668\uFF08\u7EBF\u7A0B\u6C60\uFF09</h2><p>\u5728tomcat\u4E2D\u6BCF\u4E00\u4E2A\u7528\u6237\u8BF7\u6C42\u90FD\u662F\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u6240\u4EE5\u53EF\u4EE5\u4F7F\u7528\u7EBF\u7A0B\u6C60\u63D0\u9AD8\u6027\u80FD\u3002</p><p>\u4FEE\u6539server.xml\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;</span><span class="token operator">!</span>--\u5C06\u6CE8\u91CA\u6253\u5F00--<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>Executor <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;tomcatThreadPool&quot;</span> <span class="token assign-left variable">namePrefix</span><span class="token operator">=</span><span class="token string">&quot;catalina-exec-&quot;</span>
        <span class="token assign-left variable">maxThreads</span><span class="token operator">=</span><span class="token string">&quot;500&quot;</span> <span class="token assign-left variable">minSpareThreads</span><span class="token operator">=</span><span class="token string">&quot;50&quot;</span> <span class="token assign-left variable">prestartminSpareThreads</span><span class="token operator">=</span><span class="token string">&quot;true&quot;</span> <span class="token assign-left variable">maxQueueSize</span><span class="token operator">=</span><span class="token string">&quot;100&quot;</span>/<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">!</span>--
\u53C2\u6570\u8BF4\u660E\uFF1A
maxThreads\uFF1A\u6700\u5927\u5E76\u53D1\u6570\uFF0C\u9ED8\u8BA4\u8BBE\u7F6E <span class="token number">200</span>\uFF0C\u4E00\u822C\u5EFA\u8BAE\u5728 <span class="token number">500</span> ~ <span class="token number">1000</span>\uFF0C\u6839\u636E\u786C\u4EF6\u8BBE\u65BD\u548C\u4E1A\u52A1\u6765\u5224\u65AD
minSpareThreads\uFF1ATomcat \u521D\u59CB\u5316\u65F6\u521B\u5EFA\u7684\u7EBF\u7A0B\u6570\uFF0C\u9ED8\u8BA4\u8BBE\u7F6E <span class="token number">25</span>
prestartminSpareThreads\uFF1A \u5728 Tomcat \u521D\u59CB\u5316\u7684\u65F6\u5019\u5C31\u521D\u59CB\u5316 minSpareThreads \u7684\u53C2\u6570\u503C\uFF0C\u5982\u679C\u4E0D\u7B49\u4E8E true\uFF0CminSpareThreads \u7684\u503C\u5C31\u6CA1\u5565\u6548\u679C\u4E86
maxQueueSize\uFF0C\u6700\u5927\u7684\u7B49\u5F85\u961F\u5217\u6570\uFF0C\u8D85\u8FC7\u5219\u62D2\u7EDD\u8BF7\u6C42
--<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">!</span>--\u5728Connector\u4E2D\u8BBE\u7F6Eexecutor\u5C5E\u6027\u6307\u5411\u4E0A\u9762\u7684\u6267\u884C\u5668--<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>Connector <span class="token assign-left variable">executor</span><span class="token operator">=</span><span class="token string">&quot;tomcatThreadPool&quot;</span> <span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token string">&quot;8080&quot;</span> <span class="token assign-left variable">protocol</span><span class="token operator">=</span><span class="token string">&quot;HTTP/1.1&quot;</span>
               <span class="token assign-left variable">connectionTimeout</span><span class="token operator">=</span><span class="token string">&quot;20000&quot;</span>
               <span class="token assign-left variable">redirectPort</span><span class="token operator">=</span><span class="token string">&quot;8443&quot;</span> /<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FDD\u5B58\u9000\u51FA\uFF0C\u91CD\u542Ftomcat\uFF0C\u67E5\u770B\u6548\u679C\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210728222804439.png" alt="image-20210728222804439"></p><p>\u5728\u9875\u9762\u4E2D\u663E\u793A\u6700\u5927\u7EBF\u7A0B\u6570\u4E3A-1\uFF0C\u8FD9\u4E2A\u662F\u6B63\u5E38\u7684\uFF0C\u4EC5\u4EC5\u662F\u663E\u793A\u7684\u95EE\u9898\uFF0C\u5B9E\u9645\u4F7F\u7528\u7684\u662F\u6307\u5B9A\u7684\u503C\u3002\u5982\u679C\u914D\u7F6E\u4E86\u4E00\u4E2AExecutor\uFF0C\u5219\u8BE5\u5C5E\u6027\u7684\u4EFB\u4F55\u503C\u5C06\u88AB\u6B63\u786E\u8BB0\u5F55\uFF0C\u4F46\u662F\u5B83\u5C06\u88AB\u663E\u793A\u4E3A-1</p><h2 id="_5-\u4F18\u53163-3\u79CD\u8FD0\u884C\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_5-\u4F18\u53163-3\u79CD\u8FD0\u884C\u6A21\u5F0F" aria-hidden="true">#</a> 5. \u4F18\u53163\uFF1A3\u79CD\u8FD0\u884C\u6A21\u5F0F</h2><p>tomcat\u7684\u8FD0\u884C\u6A21\u5F0F\u67093\u79CD\uFF1A</p><ul><li><p>bio \u6027\u80FD\u975E\u5E38\u4F4E\u4E0B\uFF0C\u6CA1\u6709\u7ECF\u8FC7\u4EFB\u4F55\u4F18\u5316\u5904\u7406\u548C\u652F\u6301</p></li><li><p>nio nio(new I/O)\uFF0C\u662FJava SE 1.4\u53CA\u540E\u7EED\u7248\u672C\u63D0\u4F9B\u7684\u4E00\u79CD\u65B0\u7684I/O\u64CD\u4F5C\u65B9\u5F0F(\u5373java.nio\u5305\u53CA\u5176\u5B50\u5305)\u3002Java nio\u662F\u4E00\u4E2A\u57FA\u4E8E\u7F13\u51B2\u533A\u3001\u5E76\u80FD\u63D0\u4F9B\u975E\u963B\u585EI/O\u64CD\u4F5C\u7684Java API\uFF0C\u56E0\u6B64nio\u4E5F\u88AB\u770B\u6210\u662Fnon-blocking I/O\u7684\u7F29\u5199\u3002\u5B83\u62E5\u6709\u6BD4\u4F20\u7EDFI/O\u64CD\u4F5C(bio)\u66F4\u597D\u7684\u5E76\u53D1\u8FD0\u884C\u6027\u80FD\u3002Tomcat8\u9ED8\u8BA4\u4F7F\u7528nio\u8FD0\u884C\u6A21\u5F0F\u3002</p></li><li><p>apr \u5B89\u88C5\u8D77\u6765\u6700\u56F0\u96BE\uFF0C\u4F46\u662F\u4ECE\u64CD\u4F5C\u7CFB\u7EDF\u7EA7\u522B\u6765\u89E3\u51B3\u5F02\u6B65\u7684IO\u95EE\u9898\uFF0C\u5927\u5E45\u5EA6\u7684\u63D0\u9AD8\u6027\u80FD</p></li></ul><p>\u5BF9\u4E8E\u6BCF\u79CD\u534F\u8BAE\uFF0CTomcat\u90FD\u63D0\u4F9B\u4E86\u5BF9\u5E94\u7684I/O\u65B9\u5F0F\u7684\u5B9E\u73B0\uFF0C\u800C\u4E14Tomcat\u5B98\u65B9\u8FD8\u63D0\u4F9B\u4E86\u5728\u6BCF\u79CD\u534F\u8BAE\u4E0B\u6BCF\u79CDI/O\u5B9E\u73B0\u65B9\u6848\u7684\u5DEE\u5F02\uFF0C HTTP\u534F\u8BAE\u4E0B\u7684\u5904\u7406\u65B9\u5F0F\u5982\u4E0B\u8868\uFF0C\u8BE6\u60C5\u53EF\u67E5\u770BTomcat\u5B98\u7F51\u8BF4\u660E</p><table><thead><tr><th></th><th>BIO</th><th>NIO</th><th>NIO2</th><th>APR</th></tr></thead><tbody><tr><td>\u7C7B\u540D</td><td><code>Http11Protocol</code></td><td><code>Http11NioProtocol</code></td><td><code>Http11Nio2Protocol</code></td><td><code>Http11AprProtocol</code></td></tr><tr><td>\u5F15\u7528\u7248\u672C</td><td>\u22653.0</td><td>\u22656.0</td><td>\u22658.0</td><td>\u22655.5</td></tr><tr><td>\u8F6E\u8BE2\u652F\u6301</td><td>\u5426</td><td>\u662F</td><td>\u662F</td><td>\u662F</td></tr><tr><td>\u8F6E\u8BE2\u961F\u5217\u5927\u5C0F</td><td>N/A</td><td><code>maxConnections</code></td><td><code>maxConnections</code></td><td><code>maxConnections</code></td></tr><tr><td>\u8BFB\u8BF7\u6C42\u5934</td><td>\u963B\u585E</td><td>\u975E\u963B\u585E</td><td>\u975E\u963B\u585E</td><td>\u963B\u585E</td></tr><tr><td>\u8BFB\u8BF7\u6C42\u4F53</td><td>\u963B\u585E</td><td>\u963B\u585E</td><td>\u963B\u585E</td><td>\u963B\u585E</td></tr><tr><td>\u5199\u54CD\u5E94</td><td>\u963B\u585E</td><td>\u963B\u585E</td><td>\u963B\u585E</td><td></td></tr><tr><td>\u7B49\u5F85\u65B0\u8BF7\u6C42</td><td>\u963B\u585E</td><td>\u975E\u963B\u585E</td><td>\u975E\u963B\u585E</td><td>\u975E\u963B\u585E</td></tr><tr><td>SSL\u652F\u6301</td><td>Java SSL</td><td>Java SSL</td><td>Java SSL</td><td>Open SSL</td></tr><tr><td>SSL\u63E1\u624B</td><td>\u963B\u585E</td><td>\u975E\u963B\u585E</td><td>\u975E\u963B\u585E</td><td>\u963B\u585E</td></tr><tr><td>\u6700\u5927\u94FE\u63A5\u6570</td><td><code>maxConnections</code></td><td><code>maxConnections</code></td><td><code>maxConnections</code></td><td><code>maxConnections</code></td></tr></tbody></table><p>\u63A8\u8350\u4F7F\u7528nio\uFF0C\u5728tomcat8\u4E2D\u6709\u6700\u65B0\u7684nio2\uFF0C\u901F\u5EA6\u66F4\u5FEB\uFF0C\u5EFA\u8BAE\u4F7F\u7528nio2</p><p>\u8BBE\u7F6Enio2\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;</span>Connector <span class="token assign-left variable">executor</span><span class="token operator">=</span><span class="token string">&quot;tomcatThreadPool&quot;</span>  <span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token string">&quot;8080&quot;</span> <span class="token assign-left variable">protocol</span><span class="token operator">=</span><span class="token string">&quot;org.apache.coyote.http11.Http11Nio2Protocol&quot;</span>
               <span class="token assign-left variable">connectionTimeout</span><span class="token operator">=</span><span class="token string">&quot;20000&quot;</span>
               <span class="token assign-left variable">redirectPort</span><span class="token operator">=</span><span class="token string">&quot;8443&quot;</span> /<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210728223416722.png" alt="image-20210728223416722"></p><p>\u53EF\u4EE5\u770B\u5230\u5DF2\u7ECF\u8BBE\u7F6E\u4E3Anio2\u4E86\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,46),d={href:"https://blog.csdn.net/ThinkWon/article/details/102744033",target:"_blank",rel:"noopener noreferrer"};function m(g,u){const s=l("ExternalLinkIcon");return t(),e("div",null,[c,a("p",null,[a("a",d,[o("\u53F2\u4E0A\u6700\u5F3ATomcat8\u6027\u80FD\u4F18\u5316"),p(s)])])])}const b=n(i,[["render",m],["__file","wx-gzh-scan-login.html.vue"]]);export{b as default};
