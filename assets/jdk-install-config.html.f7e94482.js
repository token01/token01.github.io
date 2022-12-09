import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as d,a as e,b as a,d as o,e as n,r as i}from"./app.c2a49a29.js";const l={},s=n('<h1 id="安装java开发工具包jdk" tabindex="-1"><a class="header-anchor" href="#安装java开发工具包jdk" aria-hidden="true">#</a> 安装Java开发工具包JDK</h1><p>因为Java程序必须运行在JVM之上，所以我们 Java 程序员在学习 Java 之前，要做的第一件事情就是安装JDK。</p><p>什么？</p><p>又是 JVM 又是 JDK 的，能不能讲清楚一点。</p><p>要扯清楚这两者之间的关系，就必须得再扯出另外一个名词 JRE，哈哈哈。</p><p>它们之间的关系可以用这幅图来表示。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-6f6fdb4a-7a44-4e76-b4ea-71c070a5b220.png" alt="" loading="lazy"></p><p>真的是人生无常，大肠包小肠啊。</p><h2 id="jvm、jre、jdk-有什么关系" tabindex="-1"><a class="header-anchor" href="#jvm、jre、jdk-有什么关系" aria-hidden="true">#</a> JVM、JRE、JDK 有什么关系</h2><p>JDK（Java Development Kit）是用于开发 Java 应用程序的软件环境。里面包含运行时环境（JRE）和其他 Java 开发所需的工具，比如说解释器（java）、编译器（javac）、文档生成器（javadoc）等等。</p><p>JRE（Java Runtime Environment）是用于运行 Java 应用程序的软件环境。也就是说，如果只想运行 Java 程序而不需要开发 Java 程序的话，只需要安装 JRE 就可以了。</p><p>JVM (Java Virtual Machine) ，也就是 Java 虚拟机，由一套字节码指令集、一组寄存器、一个栈、一个垃圾回收堆和一个存储方法域等组成，屏蔽了不同操作系统（macOS、Windows、Linux）的差异性，使得Java能够“一次编译，到处运行”。</p><p>比如说我用 macOS 生成了一个 jar 包（里面是打包好的字节码——可以在Java虚拟机上运行的目标代码），可以丢给 Windows 用户直接运行，也可以直接上传到 Linux 服务器运行。</p><p>这是 Oracle 官方给出的 JDK、JRE、JVM 关系图。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-cbc87f87-6351-4356-936b-77850cc682d5.png" alt="" loading="lazy"></p><p>那针对不同的操作系统，官方也提供了不同的 JDK 安装包。如果你用谷歌去搜“JDK”关键字，能搜到官方的下载链接。</p>',16),p={href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"},b=n('<p>如果你用百度去搜，嗯。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-31e739ff-b69f-47b6-9db4-8843cd8a716a.png" alt="" loading="lazy"></p><p>总之，是把官方给吃了。</p><p>好，如果你想安装 JDK ，到官方下载。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-e5b91a70-2a23-4ebd-896a-5ff19f0075b1.png" alt="" loading="lazy"></p><p>最新版是 JDK 18（短期版本），上一个长期支持版本是 JDK 17，推荐安装 JDK 8，哈哈哈哈，它升任它升，我用 Java 8。往下翻就能找到了。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-a32db267-febe-4852-b528-deaacb43247d.png" alt="" loading="lazy"></p><p>下载完双击安装，然后配置环境变量就OK 了。</p><p>这没啥技术含量，所以下面我给大家推荐两种高级的：</p><h2 id="windows-用户" tabindex="-1"><a class="header-anchor" href="#windows-用户" aria-hidden="true">#</a> Windows 用户</h2><p>Windows 用户建议先安装 Chocolatey，这是一个Windows下的命令行软件管理器，可以方便开发者像在Linux下使用yum命令来安装软件，或者像在macOS下使用brew 命令来安装软件，非常酷炫。</p>',11),v={href:"https://tobebetterjavaer.com/tool/choco.html",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,[a("安装完成后，直接执行 "),e("code",null,"choco install jdk8"),a(" 就可以安装 JDK 8 了，并且会自动将Java加入到环境变量中，不用再去「我的电脑」「环境变量」中新建 JAVA_HOME 并复制 JDK 安装路径配置 PATH 变量了")],-1),h=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/tool/choco-80a6ced8-c25d-4371-8096-b95be48af768",alt:"",loading:"lazy"})],-1),g=e("h2",{id:"macos-用户",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#macos-用户","aria-hidden":"true"},"#"),a(" macOS 用户")],-1),u=e("p",null,"macOS 用户建议先安装 Homebrew，这是一个 macOS 下的命令行软件管理器，可以通过一行命令安装 Apple（或 Linux 系统）没有预装但你需要的软件。",-1),j={href:"https://tobebetterjavaer.com/tool/brew.html",target:"_blank",rel:"noopener noreferrer"},J=n(`<p>安装完成后，直接执行 <code>brew install openjdk@8</code> 就可以安装 JDK 8 了。</p><p>如果需要在 macOS 安装多个版本的 JDK ，比如说 JDK 17，多个版本的 JDK 怎么管理呢？可以安装一下 jEnv，一个帮助我们管理 JAVA_HOME 的命令行工具，在 GitHub 上已经收获 4.3k 的 star。</p><p>安装：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew install jenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo &#39;export PATH=&quot;$HOME/.jenv/bin:$PATH&quot;&#39; &gt;&gt; ~/.zshrc
echo &#39;eval &quot;$(jenv init -)&quot;&#39; &gt;&gt; ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>添加：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jenv add /usr/local/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/tool/brew-b126c35d-edab-48a9-9543-831cfd0a51c6.png" alt="" loading="lazy"></p><p>JDK 的安装路径可以通过下图的位置查找。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/tool/brew-a32accec-4044-480c-a8c8-3781bc5048b5.png" alt="" loading="lazy"></p><p>管理：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jenv versions
jenv global 17.0.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/tool/brew-cc01fad8-53e9-4474-8923-08e97ac7090a.png" alt="" loading="lazy"></p><p>是不是贼方便？再也不用整这 <code>echo &#39;export PATH=&quot;/usr/local/opt/openjdk@17/bin:$PATH&quot;&#39; &gt;&gt; ~/.zshrc</code> 玩意了！爽，实在是爽！</p><hr>`,16);function _(f,x){const t=i("ExternalLinkIcon");return c(),d("div",null,[s,e("blockquote",null,[e("p",null,[e("a",p,[a("https://www.oracle.com/java/technologies/downloads/"),o(t)])])]),b,e("p",null,[e("a",v,[a("Chocolatey：Windows的命令行软件管理神器"),o(t)])]),m,h,g,u,e("p",null,[e("a",j,[a("Homebrew：macOS的命令行软件管理神器"),o(t)])]),J])}const K=r(l,[["render",_],["__file","jdk-install-config.html.vue"]]);export{K as default};
