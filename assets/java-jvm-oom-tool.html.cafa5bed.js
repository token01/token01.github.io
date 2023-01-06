import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,a as e,b as a,d as t,f as l,r as p}from"./app.abe539cb.js";const r={},c=e("h1",{id:"\u8C03\u8BD5\u6392\u9519-java-\u95EE\u9898\u6392\u67E5\u4E4Bjvm\u53EF\u89C6\u5316\u5DE5\u5177",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8C03\u8BD5\u6392\u9519-java-\u95EE\u9898\u6392\u67E5\u4E4Bjvm\u53EF\u89C6\u5316\u5DE5\u5177","aria-hidden":"true"},"#"),a(" \u8C03\u8BD5\u6392\u9519 - Java \u95EE\u9898\u6392\u67E5\u4E4BJVM\u53EF\u89C6\u5316\u5DE5\u5177")],-1),m=e("blockquote",null,[e("p",null,"\u8FD9\u4E9B\u5DE5\u5177\u53EA\u662F\u4F60\u6392\u67E5\u95EE\u9898\u7684\u4EA7\u751F\u6570\u636E\uFF0C\u5E2E\u52A9\u4F60\u66F4\u597D\u7684\u5206\u6790\u95EE\u9898\u7684\u5DE5\u5177\uFF0C\u800C\u771F\u6B63\u5206\u6790\u8FD8\u662F\u9700\u8981\u4F60\u81EA\u5DF1\u7684\u7ECF\u9A8C\u603B\u7ED3\u3002\u5982OOM \u548C\u6B7B\u9501,\u4EC0\u4E48\u60C5\u51B5\u4F1A\u5BFC\u81F4OOM/\u6B7B\u9501\uFF0COOM/\u6B7B\u9501\u7684\u539F\u7406\u662F\u4EC0\u4E48?")],-1),g=e("blockquote",null,[e("p",null,"\u672C\u6587\u4E3B\u8981\u68B3\u7406\u5E38\u89C1\u7684JVM\u53EF\u89C6\u5316\u7684\u5206\u6790\u5DE5\u5177\uFF0C\u4E3B\u8981\u5305\u62ECJConsole, Visual VM, Vusial GC, JProfile \u548C MAT\u7B49\u3002")],-1),u=e("h2",{id:"_1-jconsole",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-jconsole","aria-hidden":"true"},"#"),a(" 1. JConsole")],-1),d={href:"https://docs.oracle.com/javase/8/docs/technotes/guides/management/jconsole.html",target:"_blank",rel:"noopener noreferrer"},h=l(`<ul><li><strong>\u627E\u5230jconsole\u5DE5\u5177</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pdai@MacBook-Pro bin % <span class="token function">ls</span>
jaotc		jcmd		jinfo		jshell		rmid
jar		jconsole<span class="token punctuation">(</span>\u8FD9\u91CC<span class="token punctuation">)</span>	jjs		jstack		rmiregistry
jarsigner	jdb		jlink		jstat		serialver
<span class="token function">java</span>		jdeprscan	jmap		jstatd		unpack200
javac		jdeps		jmod		keytool
javadoc		jhsdb		jps		pack200
javap		jimage		jrunscript	rmic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u6253\u5F00jconsole</strong></li></ul><p>\u9009\u62E9</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220826211042545.png" alt="image-20220826211042545"><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220826211105054.png" alt="image-20220826211105054"><ul><li><strong>\u67E5\u770B\u6982\u8FF0\u3001\u5185\u5B58\u3001\u7EBF\u7A0B\u3001\u7C7B\u3001VM\u6982\u8981\u3001MBean</strong></li></ul><p>\u6982\u8FF0</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826211138575.png" alt="image-20220826211138575"></p><p>\u5185\u5B58</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826211158645.png" alt="image-20220826211158645"></p><p>\u7EBF\u7A0B</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826211221102.png" alt="image-20220826211221102"></p><p>\u7C7B</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826211238946.png" alt="image-20220826211238946"></p><p>VM\u6982\u8981</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826211302951.png" alt="image-20220826211302951"></p><h2 id="_2-visual-vm" tabindex="-1"><a class="header-anchor" href="#_2-visual-vm" aria-hidden="true">#</a> 2. Visual VM</h2><blockquote><p>VisualVM \u662F\u4E00\u6B3E\u514D\u8D39\u7684\uFF0C\u96C6\u6210\u4E86\u591A\u4E2A JDK \u547D\u4EE4\u884C\u5DE5\u5177\u7684\u53EF\u89C6\u5316\u5DE5\u5177\uFF0C\u5B83\u80FD\u4E3A\u60A8\u63D0\u4F9B\u5F3A\u5927\u7684\u5206\u6790\u80FD\u529B\uFF0C\u5BF9 Java \u5E94\u7528\u7A0B\u5E8F\u505A\u6027\u80FD\u5206\u6790\u548C\u8C03\u4F18\u3002\u8FD9\u4E9B\u529F\u80FD\u5305\u62EC\u751F\u6210\u548C\u5206\u6790\u6D77\u91CF\u6570\u636E\u3001\u8DDF\u8E2A\u5185\u5B58\u6CC4\u6F0F\u3001\u76D1\u63A7\u5783\u573E\u56DE\u6536\u5668\u3001\u6267\u884C\u5185\u5B58\u548C CPU \u5206\u6790\uFF0C\u540C\u65F6\u5B83\u8FD8\u652F\u6301\u5728 MBeans \u4E0A\u8FDB\u884C\u6D4F\u89C8\u548C\u64CD\u4F5C\u3002</p></blockquote><p>Overview</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826211421295.png" alt="image-20220826211421295"></p><p>Monitor</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826211450960.png" alt="image-20220826211450960"></p><p>\u7EBF\u7A0B</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826211511264.png" alt="image-20220826211511264"></p><p>Sampler</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826211556683.png" alt="image-20220826211556683"></p><h2 id="_3-visual-gc" tabindex="-1"><a class="header-anchor" href="#_3-visual-gc" aria-hidden="true">#</a> 3. Visual GC</h2>`,28),b={href:"https://www.oracle.com/java/technologies/visual-garbage-collection-monitoring-tool.html",target:"_blank",rel:"noopener noreferrer"},j=l('<p>\u6BD4\u5982\u6211\u5728IDEA\u4E2D\u4F7F\u7528visual GC \u63D2\u4EF6\u6765\u770BGC\u72B6\u51B5\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826211647985.png" alt="image-20220826211647985"></p><h2 id="_4-jprofiler" tabindex="-1"><a class="header-anchor" href="#_4-jprofiler" aria-hidden="true">#</a> 4. JProfiler</h2><blockquote><p>Profiler \u662F\u4E00\u4E2A\u5546\u4E1A\u7684\u4E3B\u8981\u7528\u4E8E\u68C0\u67E5\u548C\u8DDF\u8E2A\u7CFB\u7EDF\uFF08\u9650\u4E8EJava\u5F00\u53D1\u7684\uFF09\u7684\u6027\u80FD\u7684\u5DE5\u5177\u3002JProfiler\u53EF\u4EE5\u901A\u8FC7\u65F6\u65F6\u7684\u76D1\u63A7\u7CFB\u7EDF\u7684\u5185\u5B58\u4F7F\u7528\u60C5\u51B5\uFF0C\u968F\u65F6\u76D1\u89C6\u5783\u573E\u56DE\u6536\uFF0C\u7EBF\u7A0B\u8FD0\u884C\u72B6\u51B5\u7B49\u624B\u6BB5\uFF0C\u4ECE\u800C\u5F88\u597D\u7684\u76D1\u89C6JVM\u8FD0\u884C\u60C5\u51B5\u53CA\u5176\u6027\u80FD\u3002</p></blockquote><p>JProfiler \u662F\u4E00\u4E2A\u5168\u529F\u80FD\u7684Java\u5256\u6790\u5DE5\u5177\uFF08profiler\uFF09\uFF0C\u4E13\u7528\u4E8E\u5206\u6790J2SE\u548CJ2EE\u5E94\u7528\u7A0B\u5E8F\u3002\u5B83\u628ACPU\u3001\u6267\u884C\u7EEA\u548C\u5185\u5B58\u7684\u5256\u6790\u7EC4\u5408\u5728\u4E00\u4E2A\u5F3A\u5927\u7684\u5E94\u7528\u4E2D\u3002 JProfiler\u53EF\u63D0\u4F9B\u8BB8\u591AIDE\u6574\u5408\u548C\u5E94\u7528\u670D\u52A1\u5668\u6574\u5408\u7528\u9014\u3002JProfiler\u76F4\u89C9\u5F0F\u7684GUI\u8BA9\u4F60\u53EF\u4EE5\u627E\u5230\u6548\u80FD\u74F6\u9888\u3001\u6293\u51FA\u5185\u5B58\u6F0F\u5931(memory leaks)\u3001\u5E76\u89E3\u51B3\u6267\u884C\u7EEA\u7684\u95EE\u9898\u3002\u5B83\u8BA9\u4F60\u5F97\u4EE5\u5BF9heap walker\u4F5C\u8D44\u6E90\u56DE\u6536\u5668\u7684root analysis\uFF0C\u53EF\u4EE5\u8F7B\u6613\u627E\u51FA\u5185\u5B58\u6F0F\u5931\uFF1Bheap\u5FEB\u7167\uFF08snapshot\uFF09\u6A21\u5F0F\u8BA9\u672A\u88AB\u53C2\u7167\uFF08reference\uFF09\u7684\u5BF9\u8C61\u3001\u7A0D\u5FAE\u88AB\u53C2\u7167\u7684\u5BF9\u8C61\u3001\u6216\u5728\u7EC8\u7ED3\uFF08finalization\uFF09\u961F\u5217\u7684\u5BF9\u8C61\u90FD\u4F1A\u88AB\u79FB\u9664\uFF1B\u6574\u5408\u7CBE\u7075\u4EE5\u4FBF\u5256\u6790\u6D4F\u89C8\u5668\u7684Java\u5916\u6302\u529F\u80FD\u3002</p><h3 id="_4-1-\u6838\u5FC3\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-1-\u6838\u5FC3\u7EC4\u4EF6" aria-hidden="true">#</a> 4.1 \u6838\u5FC3\u7EC4\u4EF6</h3><p>JProfiler \u5305\u542B\u7528\u4E8E\u91C7\u96C6\u76EE\u6807 JVM \u5206\u6790\u6570\u636E\u7684 JProfiler agent\u3001\u7528\u4E8E\u53EF\u89C6\u5316\u5206\u6790\u6570\u636E\u7684 JProfiler UI\u3001\u63D0\u4F9B\u5404\u79CD\u529F\u80FD\u7684\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u5B83\u4EEC\u4E4B\u95F4\u7684\u5173\u7CFB\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826212237379.png" alt="image-20220826212237379"></p><ul><li><strong>JProfiler agent</strong></li></ul>',9),_=e("code",null,"-agentpath:<path to native library>",-1),v={href:"http://lovestblog.cn/blog/2014/06/18/jvm-attach/",target:"_blank",rel:"noopener noreferrer"},f=l('<ul><li><strong>JProfiler UI</strong></li></ul><p>JProfiler UI \u662F\u4E00\u4E2A\u53EF\u72EC\u7ACB\u90E8\u7F72\u7684\u7EC4\u4EF6\uFF0C\u5B83\u901A\u8FC7 socket \u548C agent \u5EFA\u7ACB\u8FDE\u63A5\u3002\u8FD9\u610F\u5473\u7740\u4E0D\u8BBA\u76EE\u6807 JVM \u8FD0\u884C\u5728\u672C\u5730\u8FD8\u662F\u8FDC\u7AEF\uFF0CJProfiler UI \u548C agent \u95F4\u7684\u901A\u4FE1\u673A\u5236\u90FD\u662F\u4E00\u6837\u7684\u3002</p><p>JProfiler UI \u7684\u4E3B\u8981\u529F\u80FD\u662F\u5C55\u793A\u901A\u8FC7 agent \u91C7\u96C6\u4E0A\u6765\u7684\u5206\u6790\u6570\u636E\uFF0C\u6B64\u5916\u8FD8\u53EF\u4EE5\u901A\u8FC7\u5B83\u63A7\u5236 agent \u7684\u91C7\u96C6\u884C\u4E3A\uFF0C\u5C06\u5FEB\u7167\u4FDD\u5B58\u81F3\u78C1\u76D8\uFF0C\u5C55\u793A\u4FDD\u5B58\u7684\u5FEB\u7167\u3002</p><ul><li><strong>\u547D\u4EE4\u884C\u5DE5\u5177</strong></li></ul><p>JProfiler \u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u547D\u4EE4\u884C\u5DE5\u5177\u4EE5\u5B9E\u73B0\u4E0D\u540C\u7684\u529F\u80FD\u3002</p><ol><li>jpcontroller - \u7528\u4E8E\u63A7\u5236 agent \u7684\u91C7\u96C6\u884C\u4E3A\u3002\u5B83\u901A\u8FC7 agent \u6CE8\u518C\u7684 JProfiler MBean \u5411 agent \u4F20\u9012\u547D\u4EE4\u3002</li><li>jpenable - \u7528\u4E8E\u5C06 agent \u52A0\u8F7D\u5230\u4E00\u4E2A\u6B63\u5728\u8FD0\u884C\u7684 JVM \u4E0A\u3002</li><li>jpdump - \u7528\u4E8E\u83B7\u53D6\u6B63\u5728\u8FD0\u884C\u7684 JVM \u7684\u5806\u5FEB\u7167\u3002</li><li>jpexport &amp; jpcompare - \u7528\u4E8E\u4ECE\u4FDD\u5B58\u7684\u5FEB\u7167\u4E2D\u63D0\u53D6\u6570\u636E\u5E76\u521B\u5EFA HTML \u62A5\u544A\u3002</li></ol><h3 id="_4-2-\u8FD0\u884C\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_4-2-\u8FD0\u884C\u6D4B\u8BD5" aria-hidden="true">#</a> 4.2 \u8FD0\u884C\u6D4B\u8BD5</h3><p><strong>\u6211\u4EEC\u8FD0\u884C\u4E00\u4E2ASpringBoot\u6D4B\u8BD5\u5DE5\u7A0B\uFF0C\u9009\u62E9attach\u5230JVM</strong></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826212442277.png" alt="image-20220826212442277"></p><p>\u9009\u62E9\u6307\u5B9A\u7684\u8FDB\u7A0B</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826212509327.png" alt="image-20220826212509327"></p><p><strong>\u8BBE\u7F6E\u6570\u636E\u91C7\u96C6\u6A21\u5F0F</strong></p><p>JProfier \u63D0\u4F9B\u4E24\u79CD\u6570\u636E\u91C7\u96C6\u6A21\u5F0F Sampling \u548C Instrumentation\u3002</p><ul><li>Sampling - \u9002\u5408\u4E8E\u4E0D\u8981\u6C42\u6570\u636E\u5B8C\u5168\u7CBE\u786E\u7684\u573A\u666F\u3002\u4F18\u70B9\u662F\u5BF9\u7CFB\u7EDF\u6027\u80FD\u7684\u5F71\u54CD\u8F83\u5C0F\uFF0C\u7F3A\u70B9\u662F\u67D0\u4E9B\u7279\u6027\u4E0D\u652F\u6301\uFF08\u5982\u65B9\u6CD5\u7EA7\u522B\u7684\u7EDF\u8BA1\u4FE1\u606F\uFF09\u3002</li><li>Instrumentation - \u5B8C\u6574\u529F\u80FD\u6A21\u5F0F\uFF0C\u7EDF\u8BA1\u4FE1\u606F\u4E5F\u662F\u7CBE\u786E\u7684\u3002\u7F3A\u70B9\u662F\u5982\u679C\u9700\u8981\u5206\u6790\u7684\u7C7B\u6BD4\u8F83\u591A\uFF0C\u5BF9\u5E94\u7528\u6027\u80FD\u5F71\u54CD\u8F83\u5927\u3002\u4E3A\u4E86\u964D\u4F4E\u5F71\u54CD\uFF0C\u5F80\u5F80\u9700\u8981\u548C Filter \u4E00\u8D77\u4F7F\u7528\u3002</li></ul><p>\u7531\u4E8E\u6211\u4EEC\u9700\u8981\u83B7\u53D6\u65B9\u6CD5\u7EA7\u522B\u7684\u7EDF\u8BA1\u4FE1\u606F\uFF0C\u8FD9\u91CC\u9009\u62E9\u4E86 Instrumentation \u6A21\u5F0F\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826212729645.png" alt="image-20220826212729645"></p><p>\u6982\u89C8</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826212745879.png" alt="image-20220826212745879"></p><p>\u5185\u5B58</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826212806029.png" alt="image-20220826212806029"></p><p>\u5B9E\u65F6\u5185\u5B58\u5206\u5E03\uFF08\u7C7B\u5BF9\u8C61\uFF09</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826212834350.png" alt="image-20220826212834350"></p><p>dump \u5806\u5185\u5B58</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826212851940.png" alt="image-20220826212851940"></p><p>dump\u5B8C\u4F1A\u76F4\u63A5\u6253\u5F00\u663E\u793A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826212912268.png" alt="image-20220826212912268"></p><p>\u7EBF\u7A0B\u5B58\u50A8</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826212929892.png" alt="image-20220826212929892"></p><p>\u5BFC\u51FAHTML\u62A5\u544A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826212945966.png" alt="image-20220826212945966"></p><p>CPU \u8C03\u7528\u6811</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826213003289.png" alt="image-20220826213003289"></p><p>\u7EBF\u7A0B\u5386\u53F2</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826213020235.png" alt="image-20220826213020235"></p><p>JEE &amp; \u63A2\u9488</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826213038472.png" alt="image-20220826213038472"></p><p>MBeans</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826213101053.png" alt="image-20220826213101053"></p><h2 id="_5-eclipse-memory-analyzer-mat" tabindex="-1"><a class="header-anchor" href="#_5-eclipse-memory-analyzer-mat" aria-hidden="true">#</a> 5. Eclipse Memory Analyzer (MAT)</h2><blockquote><p>MAT \u662F\u4E00\u79CD\u5FEB\u901F\u4E14\u529F\u80FD\u4E30\u5BCC\u7684 Java \u5806\u5206\u6790\u5668\uFF0C\u53EF\u5E2E\u52A9\u4F60\u53D1\u73B0\u5185\u5B58\u6CC4\u6F0F\u5E76\u51CF\u5C11\u5185\u5B58\u6D88\u8017\u3002 MAT\u5728\u7684\u5806\u5185\u5B58\u5206\u6790\u95EE\u9898\u4F7F\u7528\u6781\u4E3A\u5E7F\u6CDB\uFF0C\u9700\u8981\u91CD\u70B9\u638C\u63E1\u3002</p></blockquote>',40),J={href:"https://www.eclipse.org/mat/",target:"_blank",rel:"noopener noreferrer"},y={href:"http://help.eclipse.org/latest/index.jsp?topic=/org.eclipse.mat.ui.help/welcome.html",target:"_blank",rel:"noopener noreferrer"},q=e("ul",null,[e("li",null,[e("strong",null,"Overview")])],-1),M=e("p",null,"\u5305\u542B\u5185\u5B58\u5206\u5E03\uFF0C\u4EE5\u53CA\u6F5C\u5728\u7684\u95EE\u9898\u63A8\u6D4B",-1),k=e("p",null,[e("img",{src:"https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826213253381.png",alt:"image-20220826213253381"})],-1),V=e("ul",null,[e("li",null,[e("strong",null,"Histogram")])],-1),P=e("p",null,"\u53EF\u4EE5\u5217\u51FA\u5185\u5B58\u4E2D\u7684\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u7684\u4E2A\u6570\u4EE5\u53CA\u5927\u5C0F\u3002",-1),x=e("p",null,[e("img",{src:"https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826213315424.png",alt:"image-20220826213315424"})],-1),w={href:"http://help.eclipse.org/latest/index.jsp?topic=/org.eclipse.mat.ui.help/welcome.html",target:"_blank",rel:"noopener noreferrer"},I=l('<ol><li>Shallow Heap \uFF1A\u4E00\u4E2A\u5BF9\u8C61\u5185\u5B58\u7684\u6D88\u8017\u5927\u5C0F\uFF0C\u4E0D\u5305\u542B\u5BF9\u5176\u4ED6\u5BF9\u8C61\u7684\u5F15\u7528</li><li>Retained Heap \uFF1A\u662Fshallow Heap\u7684\u603B\u548C\uFF0C\u4E5F\u5C31\u662F\u8BE5\u5BF9\u8C61\u88ABGC\u4E4B\u540E\u6240\u80FD\u56DE\u6536\u5230\u5185\u5B58\u7684\u603B\u548C</li></ol><ul><li><strong>Dominator Tree</strong></li></ul><p>\u53EF\u4EE5\u5217\u51FA\u90A3\u4E2A\u7EBF\u7A0B\uFF0C\u4EE5\u53CA\u7EBF\u7A0B\u4E0B\u9762\u7684\u90A3\u4E9B\u5BF9\u8C61\u5360\u7528\u7684\u7A7A\u95F4\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826213354422.png" alt="image-20220826213354422"></p><ul><li><strong>Top consumers</strong></li></ul><p>\u901A\u8FC7\u56FE\u5F62\u5217\u51FA\u6700\u5927\u7684object\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826213415340.png" alt="image-20220826213415340"></p><ul><li><strong>Leak Suspects</strong></li></ul><p>\u81EA\u52A8\u5206\u6790\u6F5C\u5728\u53EF\u80FD\u7684\u6CC4\u6F0F\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220826213433274.png" alt="image-20220826213433274"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',11),z={href:"https://pdai.tech/md/java/jvm/java-jvm-oom-tool.html",target:"_blank",rel:"noopener noreferrer"},C=e("strong",null,"\u8C03\u8BD5\u6392\u9519 - Java \u95EE\u9898\u6392\u67E5\u4E4BJVM\u53EF\u89C6\u5316\u5DE5\u5177",-1);function E(T,B){const i=p("ExternalLinkIcon");return n(),s("div",null,[c,m,g,u,e("blockquote",null,[e("p",null,[a("Jconsole \uFF08Java Monitoring and Management Console\uFF09\uFF0CJDK\u81EA\u5E26\u7684\u57FA\u4E8EJMX\u7684\u53EF\u89C6\u5316\u76D1\u89C6\u3001\u7BA1\u7406\u5DE5\u5177\u3002 \u5B98\u65B9\u6587\u6863\u53EF\u4EE5\u53C2\u8003"),e("a",d,[a("\u8FD9\u91CC"),t(i)])])]),h,e("blockquote",null,[e("p",null,[a("visual gc \u662F visualvm \u4E2D\u7684\u56FE\u5F62\u5316\u67E5\u770B gc \u72B6\u51B5\u7684\u63D2\u4EF6\u3002\u5B98\u65B9\u6587\u6863\u53EF\u4EE5\u53C2\u8003"),e("a",b,[a("\u8FD9\u91CC "),t(i)])])]),j,e("p",null,[a("JProfiler agent \u662F\u4E00\u4E2A\u672C\u5730\u5E93\uFF0C\u5B83\u53EF\u4EE5\u5728 JVM \u542F\u52A8\u65F6\u901A\u8FC7\u53C2\u6570"),_,a("\u8FDB\u884C\u52A0\u8F7D\u6216\u8005\u5728\u7A0B\u5E8F\u8FD0\u884C\u65F6\u901A\u8FC7"),e("a",v,[a("JVM Attach \u673A\u5236 (opens new window)"),t(i)]),a("\u8FDB\u884C\u52A0\u8F7D\u3002Agent \u88AB\u6210\u529F\u52A0\u8F7D\u540E\uFF0C\u4F1A\u8BBE\u7F6E JVMTI \u73AF\u5883\uFF0C\u76D1\u542C\u865A\u62DF\u673A\u4EA7\u751F\u7684\u4E8B\u4EF6\uFF0C\u5982\u7C7B\u52A0\u8F7D\u3001\u7EBF\u7A0B\u521B\u5EFA\u7B49\u3002\u4F8B\u5982\uFF0C\u5F53\u5B83\u76D1\u542C\u5230\u7C7B\u52A0\u8F7D\u4E8B\u4EF6\u540E\uFF0C\u4F1A\u7ED9\u8FD9\u4E9B\u7C7B\u6CE8\u5165\u7528\u4E8E\u6267\u884C\u5EA6\u91CF\u64CD\u4F5C\u7684\u5B57\u8282\u7801\u3002")]),f,e("p",null,[a("\u53EF\u4EE5\u5728"),e("a",J,[a("\u8FD9\u91CC"),t(i)]),a("\u4E0B\u8F7D\uFF0C \u5B98\u65B9\u6587\u6863\u53EF\u4EE5\u770B"),e("a",y,[a("\u8FD9\u91CC "),t(i)])]),q,M,k,V,P,x,e("p",null,[a("\u5177\u4F53\u9700\u8981\u91CD\u70B9\u7406\u89E3\u5982\u4E0B\u4E24\u4E2A\u6982\u5FF5\uFF0C\u53EF\u53C2\u8003"),e("a",w,[a("\u5B98\u7F51\u6587\u6863 "),t(i)]),a("\u7684\u89E3\u91CA")]),I,e("p",null,[e("a",z,[C,t(i)])])])}const A=o(r,[["render",E],["__file","java-jvm-oom-tool.html.vue"]]);export{A as default};
