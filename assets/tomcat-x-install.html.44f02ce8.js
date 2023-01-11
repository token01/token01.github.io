import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as p,a as s,b as a,d as e,f as t,r as o}from"./app.ec51a1ed.js";const i={},r=t('<h1 id="tomcat\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#tomcat\u5B89\u88C5" aria-hidden="true">#</a> Tomcat\u5B89\u88C5</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u4F01\u4E1A\u4F7F\u7528\u8F83\u591A\u7684\u662FTomcat8</p><h2 id="_2-tomcat\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#_2-tomcat\u4E0B\u8F7D" aria-hidden="true">#</a> 2. Tomcat\u4E0B\u8F7D</h2>',4),u={href:"https://tomcat.apache.org/download-80.cgi",target:"_blank",rel:"noopener noreferrer"},d=t(`<p>Tomcat\u4E3B\u8981\u6709\u4E09\u4E2A\u5B89\u88C5\u7248\u672C</p><ul><li><p>tar.gz\uFF1ALinux\u73AF\u5883\u4E0B\u7684\u538B\u7F29\u5305\uFF0C\u514D\u5B89\u88C5</p></li><li><p>Windows.zip\uFF1AWindows\u538B\u7F29\u5305\uFF0C\u514D\u5B89\u88C5\uFF0C\u89E3\u538B\u5373\u7528\uFF0C\u540C\u65F6\u6CE8\u610F\u6839\u636E\u81EA\u5DF1\u7535\u8111\u662F64\u4F4D\u7CFB\u7EDF\u8FD8\u662F32\u4F4D\u7CFB\u7EDF\u4E0B\u8F7D\u5BF9\u5E94\u7684\u538B\u7F29\u5305</p></li><li><p>Windows Service Installer\uFF1AWindows\u5B89\u88C5\u5305\uFF0C32\u4F4D\u548C64\u4F4D\u7248\u672C\u7684Windows\u7CFB\u7EDF\u90FD\u9002\u7528</p></li></ul><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210728212527098.png" alt="image-20210728212527098"></p><h2 id="_3-\u5B89\u88C5tomcat" tabindex="-1"><a class="header-anchor" href="#_3-\u5B89\u88C5tomcat" aria-hidden="true">#</a> 3.\u5B89\u88C5Tomcat</h2><ol><li><p>\u5C06\u4E0B\u8F7D\u597D\u7684<code>apache-tomcat-8.5.47.tar.gz</code>\u653E\u5230\u6307\u5B9A\u76EE\u5F55\uFF0C\u6211\u8FD9\u91CC\u653E\u5230<code>/usr/local/tomcat</code>\uFF0C\u5982\u4E0B\u56FE\u6240\u793A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210728212849291.png" alt="image-20210728212849291"></p></li><li><p>\u8FDB\u5165<code>/usr/local/tomcat</code>\u76EE\u5F55\uFF0C\u89E3\u538BTomcat\u538B\u7F29\u5305</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165/usr/local/tomcat\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> /usr/local/tomcat
<span class="token comment"># \u89E3\u538BTomcat\u538B\u7F29\u5305</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span>  apache-tomcat-8.5.69.tar.gz 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u542F\u52A8Tomcat</p><p>\u8FDB\u5165Tomcat\u7684bin\u76EE\u5F55\uFF0C\u542F\u52A8Tomcat</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165Tomcat\u7684bin\u76EE\u5F55\uFF0C\u542F\u52A8Tomcat</span>
<span class="token builtin class-name">cd</span> apache-tomcat-8.5.69/bin/

<span class="token comment"># \u542F\u52A8Tomcat</span>
./startup.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u67E5\u770BTomcat\u662F\u5426\u542F\u52A8\u6210\u529F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770BTomcat\u662F\u5426\u542F\u52A8\u6210\u529F\u6267\u884C</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> tomcat
<span class="token comment"># \u5982\u679C\u8F93\u51FA\u5982\u4E0B\uFF0C\u8BF4\u660ETomcat\u5B89\u88C5\u6210\u529F</span>
root     <span class="token number">15254</span>     <span class="token number">1</span>  <span class="token number">9</span> <span class="token number">21</span>:30 pts/1    00:00:03 /usr/local/java/jdk1.8.0_181/jre/bin/java <span class="token parameter variable">-Djava.util.logging.config.file</span><span class="token operator">=</span>/usr/local/tomcat/apache-tomcat-8.5.69/conf/log
root     <span class="token number">15982</span> <span class="token number">13726</span>  <span class="token number">0</span> <span class="token number">21</span>:31 pts/1    00:00:00 <span class="token function">grep</span> <span class="token parameter variable">--color</span><span class="token operator">=</span>auto tomcat

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4F7F\u7528\u6D4F\u89C8\u5668\u8BBF\u95EETomcat</p><p>\u4F7F\u7528\u6D4F\u89C8\u5668\u8BBF\u95EETomcat\uFF0C\u5730\u5740Linux\u7684ip:8080\uFF0C\u6211\u8FD9\u91CC\u7684ip\u7AEF\u53E3\u662F<code>http://ip:8080/</code>\uFF0C\u5982\u4E0B\u56FE\u8BF4\u660E\u5728Linux\uFF08CentOS7\uFF09\u73AF\u5883\u5B89\u88C5\u542F\u52A8Tomcat\u6210\u529F</p><p><strong>\u6CE8\u610F\uFF1A\u5F00\u653E8080\u7AEF\u53E3\u6216\u8005\u5173\u95ED\u9632\u706B\u5899</strong></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210728214559556.png" alt="image-20210728214559556"></p></li></ol><p><strong>\u9644\u52A0\uFF1A\u5F00\u653E8080\u7AEF\u53E3\u6216\u8005\u5173\u95ED\u9632\u706B\u5899\uFF0C\u5982\u679C\u662F\u963F\u91CC\u4E91\u53EA\u80FD\u5728\u963F\u91CC\u4E91\u63A7\u5236\u53F0\u914D\u7F6E\u5F00\u653E\u7AEF\u53E3</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5F00\u542F8080\u7AEF\u53E3</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">8080</span>/tcp <span class="token parameter variable">--permanent</span>

<span class="token comment"># \u67E5\u8BE2\u7AEF\u53E3\u53F78080\u662F\u5426\u5F00\u542F</span>
firewall-cmd --query-port<span class="token operator">=</span><span class="token number">8080</span>/tcp

<span class="token comment"># \u91CD\u542F\u9632\u706B\u5899</span>
firewall-cmd <span class="token parameter variable">--reload</span>

<span class="token comment"># \u67E5\u770B\u5F00\u653E\u7AEF\u53E3\u5217\u8868</span>
firewall-cmd --list-port

<span class="token comment"># \u547D\u4EE4\u542B\u4E49</span>
<span class="token parameter variable">--zone</span> <span class="token comment">#\u4F5C\u7528\u57DF</span>
--add-port<span class="token operator">=</span><span class="token number">8080</span>/tcp <span class="token comment">#\u6DFB\u52A0\u7AEF\u53E3\uFF0C\u683C\u5F0F\u4E3A\uFF1A\u7AEF\u53E3/\u901A\u8BAF\u534F\u8BAE</span>
<span class="token parameter variable">--permanent</span> <span class="token comment">#\u6C38\u4E45\u751F\u6548\uFF0C\u6CA1\u6709\u6B64\u53C2\u6570\u91CD\u542F\u540E\u5931\u6548</span>

<span class="token comment"># \u5173\u95ED\u9632\u706B\u5899</span>
systemctl stop firewalld.service <span class="token comment">#\u505C\u6B62firewall</span>
systemctl disable firewalld.service <span class="token comment">#\u7981\u6B62firewall\u5F00\u673A\u542F\u52A8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u8BBE\u7F6Etomcat\u4E3A\u5F00\u673A\u542F\u52A8\u9879" tabindex="-1"><a class="header-anchor" href="#_4-\u8BBE\u7F6Etomcat\u4E3A\u5F00\u673A\u542F\u52A8\u9879" aria-hidden="true">#</a> 4. \u8BBE\u7F6ETomcat\u4E3A\u5F00\u673A\u542F\u52A8\u9879</h2><p>\u6309\u7167\u4E0A\u9762\u7684\u65B9\u5F0F\u542F\u52A8Tomcat\uFF0C\u5982\u679C\u6211\u4EEC\u7684\u865A\u62DF\u673A\u6216\u8005\u670D\u52A1\u5668\u5173\u95ED\u4E86\uFF0C\u91CD\u542F\u670D\u52A1\u5668\u540ETomcat\u662F\u5173\u95ED\u7684\uFF0C\u4F46\u662F\u6211\u4EEC\u5E0C\u671B\u865A\u62DF\u673A\u6216\u8005\u670D\u52A1\u5668\u91CD\u542F\u540E\uFF0CTomcat\u53EF\u4EE5\u81EA\u5DF1\u542F\u52A8\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u8BBE\u7F6ETomcat\u4E3A\u5F00\u673A\u542F\u52A8\u9879</p><p>\u521B\u5EFAsetenv.sh\u6587\u4EF6\uFF0C\u4E3ATomcat\u6DFB\u52A0\u542F\u52A8\u53C2\u6570</p><p>catalina.sh\u5728\u6267\u884C\u7684\u65F6\u5019\u4F1A\u8C03\u7528\u540C\u7EA7\u8DEF\u5F84\u4E0B\u7684setenv.sh\u6765\u8BBE\u7F6E\u989D\u5916\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u56E0\u6B64\u5728/usr/local/tomcat/apache-tomcat-8.5.69/bin\u8DEF\u5F84\u4E0B\u521B\u5EFAsetenv.sh\u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6ETomcat\u7684PID\u6587\u4EF6</span>
<span class="token assign-left variable">CATALINA_PID</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$CATALINA_BASE</span>/tomcat.pid&quot;</span>
<span class="token comment"># \u6DFB\u52A0JVM\u9009\u9879</span>
<span class="token assign-left variable">JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-server -XX:PermSize=256M -XX:MaxPermSize=1024m -Xms512M -Xmx1024M -XX:MaxNewSize=256m&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728<code>/usr/local/tomcat/apache-tomcat-8.5.69/bin/catalina.sh</code>\u6587\u4EF6\u5F00\u5934\u6DFB\u52A0<code>JAVA_HOME</code>\u548C<code>JRE_HOME</code>\uFF0C\u5176\u4E2D<code>/usr/local/jdk1.8.0_152</code>\u4E3Ajdk\u7684\u5B89\u88C5\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/jdk1.8.0_152
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JRE_HOME</span><span class="token operator">=</span>/usr/local/jdk1.8.0_152/jre
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u5728catalina.sh\u4E0D\u914D\u7F6EJAVA_HOME\u548CJRE_HOME\u5C31\u4F1A\u62A5\u5982\u4E0B\u7684\u9519\u8BEF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@JourWon ~<span class="token punctuation">]</span><span class="token comment"># systemctl status tomcat</span>
\u25CF tomcat.service - Tomcat
   Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/tomcat.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: disabled<span class="token punctuation">)</span>
   Active: failed <span class="token punctuation">(</span>Result: exit-code<span class="token punctuation">)</span> since Mon <span class="token number">2019</span>-10-21 <span class="token number">19</span>:54:54 CST<span class="token punctuation">;</span> 6s ago
  Process: <span class="token number">8746</span> <span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/tomcat/apache-tomcat-8.5.47/bin/startup.sh <span class="token punctuation">(</span>code<span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">1</span>/FAILURE<span class="token punctuation">)</span>

Oct <span class="token number">21</span> <span class="token number">19</span>:54:54 JourWon systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Starting Tomcat<span class="token punctuation">..</span>.
Oct <span class="token number">21</span> <span class="token number">19</span>:54:54 JourWon startup.sh<span class="token punctuation">[</span><span class="token number">8746</span><span class="token punctuation">]</span>: Neither the JAVA_HOME nor the JRE_<span class="token punctuation">..</span>.d
Oct <span class="token number">21</span> <span class="token number">19</span>:54:54 JourWon startup.sh<span class="token punctuation">[</span><span class="token number">8746</span><span class="token punctuation">]</span>: At least one of these environment <span class="token punctuation">..</span>.m
Oct <span class="token number">21</span> <span class="token number">19</span>:54:54 JourWon systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: tomcat.service: control process exited,<span class="token punctuation">..</span>.<span class="token operator">=</span><span class="token number">1</span>
Oct <span class="token number">21</span> <span class="token number">19</span>:54:54 JourWon systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Failed to start Tomcat.
Oct <span class="token number">21</span> <span class="token number">19</span>:54:54 JourWon systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Unit tomcat.service entered failed state.
Oct <span class="token number">21</span> <span class="token number">19</span>:54:54 JourWon systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: tomcat.service failed.
Hint: Some lines were ellipsized, use <span class="token parameter variable">-l</span> to show <span class="token keyword">in</span> full.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728/usr/lib/systemd/system\u8DEF\u5F84\u4E0B\u6DFB\u52A0tomcat.service\u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Tomcat
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target remote-fs.target nss-lookup.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">TimeoutSec</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/usr/local/tomcat/apache-tomcat-8.5.47/tomcat.pid
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/tomcat/apache-tomcat-8.5.47/bin/startup.sh
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/bin/kill <span class="token parameter variable">-s</span> HUP <span class="token variable">$MAINPID</span>
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/bin/kill <span class="token parameter variable">-s</span> QUIT <span class="token variable">$MAINPID</span>
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u5916service\u6587\u4EF6\u4FEE\u6539\u540E\u9700\u8981\u8C03\u7528<code>systemctl daemon-reload</code>\u547D\u4EE4\u91CD\u65B0\u52A0\u8F7D\u3002</p><p>\u914D\u7F6E<code>TimeoutSec=0</code>\u7684\u76EE\u7684\u662F\u8BA9\u5F00\u673A\u542F\u52A8\u4E0D\u5904\u7406tomcat\u542F\u52A8\u8D85\u65F6\uFF0C\u4FDD\u8BC1tomcat\u8017\u65F6\u8FC7\u957F\u65F6\u4E0D\u4F1A\u88AB\u7CFB\u7EDFterminating\uFF0C\u5982\u679C\u4E0D\u914D\u7F6E\u53EF\u80FD\u51FA\u73B0\u4E0B\u9762\u7684\u60C5\u51B5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Oct <span class="token number">21</span> <span class="token number">20</span>:26:37 JourWon startup.sh<span class="token punctuation">[</span><span class="token number">1634</span><span class="token punctuation">]</span>: Existing PID <span class="token function">file</span> found during start.
Oct <span class="token number">21</span> <span class="token number">20</span>:26:37 JourWon startup.sh<span class="token punctuation">[</span><span class="token number">1634</span><span class="token punctuation">]</span>: Removing/clearing stale PID file.
Oct <span class="token number">21</span> <span class="token number">20</span>:26:37 JourWon startup.sh<span class="token punctuation">[</span><span class="token number">1634</span><span class="token punctuation">]</span>: Tomcat started.
Oct <span class="token number">21</span> <span class="token number">20</span>:26:37 JourWon systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: PID <span class="token function">file</span> /usr/local/tomcat/apache-tomcat-8.5.47/tomcat.pid not readable <span class="token punctuation">(</span>yet?<span class="token punctuation">)</span> after start.
Oct <span class="token number">21</span> <span class="token number">20</span>:26:38 JourWon polkitd<span class="token punctuation">[</span><span class="token number">464</span><span class="token punctuation">]</span>: Unregistered Authentication Agent <span class="token keyword">for</span> unix-process:1628:19013 <span class="token punctuation">(</span>system bus name :1.23, object path /org/freedesktop/PolicyKit1/AuthenticationAgent, loca
Oct <span class="token number">21</span> <span class="token number">20</span>:28:07 JourWon systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: tomcat.service start operation timed out. Terminating.
Oct <span class="token number">21</span> <span class="token number">20</span>:28:07 JourWon systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Failed to start Tomcat.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u628ATomcat\u52A0\u5165\u5F00\u673A\u81EA\u542F\u52A8</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> tomcat.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u91CD\u542F\u670D\u52A1\u5668</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u518D\u6B21\u8FDE\u63A5\u540E\uFF0C\u67E5\u770B\u670D\u52A1\u72B6\u6001</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl status tomcat
\u25CF tomcat.service - Tomcat
   Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/tomcat.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: disabled<span class="token punctuation">)</span>
   Active: activating <span class="token punctuation">(</span>start<span class="token punctuation">)</span> since Mon <span class="token number">2019</span>-10-21 <span class="token number">20</span>:12:19 CST<span class="token punctuation">;</span> 8s ago
  Process: <span class="token number">9244</span> <span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/tomcat/apache-tomcat-8.5.47/bin/startup.sh <span class="token punctuation">(</span>code<span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">0</span>/SUCCESS<span class="token punctuation">)</span>
   CGroup: /system.slice/tomcat.service
           \u2514\u25009255 /usr/local/jdk1.8.0_152/jre/bin/java <span class="token parameter variable">-Djava.util.logging.config.file</span><span class="token operator">=</span>/usr/local/tomcat/apache-tomcat-8.5.47/conf/logging.properties <span class="token parameter variable">-Djava.util.logging.manager</span><span class="token operator">=</span>org.apac<span class="token punctuation">..</span>.

Oct <span class="token number">21</span> <span class="token number">20</span>:12:19 JourWon systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Starting Tomcat<span class="token punctuation">..</span>.
Oct <span class="token number">21</span> <span class="token number">20</span>:12:19 JourWon startup.sh<span class="token punctuation">[</span><span class="token number">9244</span><span class="token punctuation">]</span>: Existing PID <span class="token function">file</span> found during start.
Oct <span class="token number">21</span> <span class="token number">20</span>:12:19 JourWon startup.sh<span class="token punctuation">[</span><span class="token number">9244</span><span class="token punctuation">]</span>: Removing/clearing stale PID file.
Oct <span class="token number">21</span> <span class="token number">20</span>:12:19 JourWon startup.sh<span class="token punctuation">[</span><span class="token number">9244</span><span class="token punctuation">]</span>: Tomcat started.
Oct <span class="token number">21</span> <span class="token number">20</span>:12:19 JourWon systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: PID <span class="token function">file</span> /usr/local/tomcat/apache-tomcat-8.5.47/tomcat.pid not readable <span class="token punctuation">(</span>yet?<span class="token punctuation">)</span> after start.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u5F00\u673A\u542F\u52A8\u5217\u8868\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl list-unit-files <span class="token operator">|</span> <span class="token function">grep</span> enabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770BTomcat\u662F\u5426\u8BBE\u7F6E\u4E3A\u5F00\u673A\u542F\u52A8\u9879\uFF0C\u5982\u679C\u663E\u793A\u4E3Aenabled\uFF0C\u8BF4\u660E\u8BBE\u7F6E\u6210\u529F</p><p>\u53C2\u6570\u8BF4\u660E</p><ul><li>static\uFF1A\u8868\u793A\u8BE5\u670D\u52A1\u4E0E\u5176\u4ED6\u670D\u52A1\u76F8\u5173\u8054,\u4E0D\u80FD\u5355\u72EC\u8BBE\u7F6E\u8BE5\u670D\u52A1\u7684\u542F\u52A8\u72B6\u6001</li><li>disabled\uFF1A\u8868\u793A\u7981\u6B62\u5F00\u673A\u542F\u52A8</li><li>enabled\uFF1A\u8868\u793A\u5141\u8BB8\u5F00\u673A\u542F\u52A8</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl list-unit-files <span class="token operator">|</span> <span class="token function">grep</span> tomcat
tomcat.service                                enabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,34),m={href:"https://thinkwon.blog.csdn.net/article/details/102717537",target:"_blank",rel:"noopener noreferrer"};function v(b,k){const n=o("ExternalLinkIcon");return l(),p("div",null,[r,s("p",null,[s("a",u,[a("Tomcat8\u4E0B\u8F7D"),e(n)])]),d,s("p",null,[s("a",m,[a("Linux(CentOS7)\u5B89\u88C5Tomcat\u4E0E\u8BBE\u7F6ETomcat\u4E3A\u5F00\u673A\u542F\u52A8\u9879"),e(n)])])])}const f=c(i,[["render",v],["__file","tomcat-x-install.html.vue"]]);export{f as default};
