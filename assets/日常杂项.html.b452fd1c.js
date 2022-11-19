import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as r,a as n,b as s,d as e,e as i,r as c}from"./app.37c9a343.js";const o="/assets/git.7dd518f8.png",p={},d=i('<h2 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h2><h3 id="系统" tabindex="-1"><a class="header-anchor" href="#系统" aria-hidden="true">#</a> 系统</h3><h4 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h4>',3),u=n("li",null,"SysBench CPU压测",-1),m=n("li",null,"iperf3 带宽性能测量",-1),v={href:"https://mp.weixin.qq.com/s/eSa5kYJiZvVC06AzepeT-g",target:"_blank",rel:"noopener noreferrer"},b=i(`<h4 id="查看系统" tabindex="-1"><a class="header-anchor" href="#查看系统" aria-hidden="true">#</a> 查看系统</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/lsb-release <span class="token comment"># ubuntu发行版</span>
<span class="token function">cat</span> /etc/debian_version <span class="token comment"># debian发行版</span>
<span class="token function">cat</span> /proc/version
<span class="token function">uname</span> <span class="token parameter variable">-a</span>  <span class="token comment">#内核</span>

<span class="token function">df</span> <span class="token parameter variable">-h</span>  <span class="token comment"># 系统硬盘使用情况</span>
<span class="token function">du</span> <span class="token parameter variable">-hd</span> <span class="token number">1</span> <span class="token builtin class-name">.</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-n</span> <span class="token comment"># 各文件夹占硬盘情况</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设置时区" tabindex="-1"><a class="header-anchor" href="#设置时区" aria-hidden="true">#</a> 设置时区</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>timedatectl set-timezone Asia/Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="编辑" tabindex="-1"><a class="header-anchor" href="#编辑" aria-hidden="true">#</a> 编辑</h3><h4 id="vim" tabindex="-1"><a class="header-anchor" href="#vim" aria-hidden="true">#</a> VIM</h4><h5 id="中文乱码" tabindex="-1"><a class="header-anchor" href="#中文乱码" aria-hidden="true">#</a> 中文乱码</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/vim/vimrc
<span class="token builtin class-name">set</span> <span class="token assign-left variable">fileencodings</span><span class="token operator">=</span>utf-8,ucs-bom,gb18030,gbk,gb2312,cp936
<span class="token builtin class-name">set</span> <span class="token assign-left variable">termencoding</span><span class="token operator">=</span>utf-8
<span class="token builtin class-name">set</span> <span class="token assign-left variable">encoding</span><span class="token operator">=</span>utf-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="实用操作" tabindex="-1"><a class="header-anchor" href="#实用操作" aria-hidden="true">#</a> 实用操作</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>i → Insert 模式，按 ESC 回到 Normal 模式.
x → 删当前光标所在的一个字符。
:wq → 存盘 + 退出 (:w 存盘, :q 退出)   （陈皓注：:w 后可以跟文件名）
dd → 删除当前行，并把删除的行存到剪贴板里
p → 粘贴剪贴板
:n → :5跳到第五行
ctrl+v → 开始块操作，hjkl或方向键选取块，
	按 i 或 A 插入 输了字符后 按 ESC 为每行生效
	按 = 可自动缩进
ctrl+p | ctrl+n → 自动补齐

:set number 显示行号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="批量" tabindex="-1"><a class="header-anchor" href="#批量" aria-hidden="true">#</a> 批量</h5><p>一、control+V进入VISUAL BLOCK模式，按j或k选中多行<br> 二、按shift+i（大写I），输入注释符（#或//），按一下或者两下Esc，完成注释。 二、按x或者d删除注释。</p><h4 id="sed" tabindex="-1"><a class="header-anchor" href="#sed" aria-hidden="true">#</a> sed</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s#需要替换的文字#替换后的文字#g&#39;</span> config.js
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/需要替换的文字/替换后的文字/g&#39;</span> config.js <span class="token comment"># 同上</span>

<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;/匹配文字/ a换行后需要添加的文字&quot;</span> config.js

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安全" tabindex="-1"><a class="header-anchor" href="#安全" aria-hidden="true">#</a> 安全</h3><p>登录日志<code>/var/log/auth.log</code><br> 尽量屏蔽密码登录，使用秘钥登录。安全性好，<code>auth.log</code>文件清晰</p><h4 id="nmap" tabindex="-1"><a class="header-anchor" href="#nmap" aria-hidden="true">#</a> nmap</h4><p>nmap是一个网络连接端扫描软件，用来扫描网上电脑开放的网络连接端。确定哪些服务运行在哪些连接端，并且推断计算机运行哪个操作系统（这是亦称 fingerprinting）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nmap baidu.com

<span class="token comment"># scripts 还包括非常多的脚本，其中就有暴力破解mysql</span>
<span class="token function">ls</span> <span class="token parameter variable">-al</span> /usr/share/nmap/scripts/mysql*
nmap <span class="token parameter variable">-p3306</span> <span class="token parameter variable">--script</span><span class="token operator">=</span>mysql-brute.nse <span class="token number">192.168</span>.1.100

~$ <span class="token function">sudo</span> nmap <span class="token parameter variable">-O</span> <span class="token parameter variable">-Pn</span> X.X.X.X

Starting Nmap <span class="token number">7.60</span> <span class="token punctuation">(</span> https://nmap.org <span class="token punctuation">)</span> at <span class="token number">2019</span>-12-01 <span class="token number">21</span>:46 CST
Nmap scan report <span class="token keyword">for</span> X.X.X.X
Host is up <span class="token punctuation">(</span><span class="token number">0</span>.0035s latency<span class="token punctuation">)</span>.
Not shown: <span class="token number">996</span> filtered ports
PORT     STATE  SERVICE
<span class="token number">22</span>/tcp   <span class="token function">open</span>   <span class="token function">ssh</span>
<span class="token number">80</span>/tcp   <span class="token function">open</span>   http
<span class="token number">3389</span>/tcp closed ms-wbt-server
<span class="token number">8081</span>/tcp <span class="token function">open</span>   blackice-icecap
Device type: general purpose
Running: Linux <span class="token number">3</span>.X<span class="token operator">|</span><span class="token number">4</span>.X
OS CPE: cpe:/o:linux:linux_kernel:3 cpe:/o:linux:linux_kernel:4
OS details: Linux <span class="token number">3.10</span> - <span class="token number">4.8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优秀文章</p>`,20),h={href:"https://bastian.rieck.me/blog/posts/2019/ssh_incidents/",target:"_blank",rel:"noopener noreferrer"},k=n("h4",{id:"目录扫描工具",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录扫描工具","aria-hidden":"true"},"#"),s(" 目录扫描工具")],-1),g={href:"https://github.com/H4ckForJob/dirmap",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/TuuuNya/webdirscan",target:"_blank",rel:"noopener noreferrer"},_=n("h4",{id:"暴力破解",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#暴力破解","aria-hidden":"true"},"#"),s(" 暴力破解")],-1),x={href:"https://hashcat.net/hashcat/",target:"_blank",rel:"noopener noreferrer"},y=i(`<h2 id="openssl" tabindex="-1"><a class="header-anchor" href="#openssl" aria-hidden="true">#</a> OpenSSL</h2><ul><li>.key格式：私有的密钥</li><li>.csr格式：证书签名请求（证书请求文件），含有公钥信息，certificate signing request的缩写</li><li>.crt格式：证书文件，certificate的缩写</li><li>.srl格式：签发证书的序列号记录文件，Serial的缩写</li><li>.crl格式：证书吊销列表，Certificate Revocation List的缩写</li><li>.pem格式：用于导出，导入证书(.crt)时候的证书的格式，有证书开头，结尾的格式</li></ul><h3 id="生成rsa秘钥对" tabindex="-1"><a class="header-anchor" href="#生成rsa秘钥对" aria-hidden="true">#</a> 生成RSA秘钥对</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>openssl genrsa <span class="token parameter variable">-out</span> private.pem <span class="token number">1024</span>   <span class="token comment">#RSA 1024 ,RSA2 2048</span>
openssl rsa <span class="token parameter variable">-in</span> private.pem <span class="token parameter variable">-pubout</span> <span class="token parameter variable">-out</span> public.pem
<span class="token comment"># 私钥转pksc8格式</span>
openssl pkcs8 <span class="token parameter variable">-topk8</span> <span class="token parameter variable">-inform</span> PEM <span class="token parameter variable">-in</span> private.pem <span class="token parameter variable">-outform</span> PEM <span class="token parameter variable">-nocrypt</span> <span class="token operator">&gt;</span> rsa_private_key_pkcs8.pem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成mac地址" tabindex="-1"><a class="header-anchor" href="#生成mac地址" aria-hidden="true">#</a> 生成mac地址</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>openssl rand <span class="token parameter variable">-hex</span> <span class="token number">6</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/\\(..\\)/\\1:/g; s/.$//&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h2><h3 id="github-tips" tabindex="-1"><a class="header-anchor" href="#github-tips" aria-hidden="true">#</a> Github Tips</h3><ul><li><p>Clone 太慢超时</p><p>使用<code>cnpmjs.org</code> CND</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/ifuture-pro/developer-notes
<span class="token comment">#替换成,体验非一般的感觉</span>
<span class="token function">git</span> clone https://github.com.cnpmjs.org/ifuture-pro/developer-notes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),E=n("p",null,"图片都裂了",-1),S=n("br",null,null,-1),q={href:"https://www.ipaddress.com/",target:"_blank",rel:"noopener noreferrer"},w=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/hosts
<span class="token comment">##添加记录</span>
<span class="token number">199.232</span>.68.133 raw.githubusercontent.com
<span class="token number">199.232</span>.68.133 camo.githubusercontent.com
<span class="token number">199.232</span>.69.194 github.global.ssl.fastly.net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),A=n("p",null,"图床",-1),O={href:"https://www.jsdelivr.com/?docs=gh",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"githubusercontent.com",-1),D=n("p",null,"在线阅读",-1),N=n("br",null,null,-1),R={href:"https://github.dev/jupyterhub/jupyterhub",target:"_blank",rel:"noopener noreferrer"},j={href:"https://gitpod.io/#",target:"_blank",rel:"noopener noreferrer"},I=n("br",null,null,-1),T={href:"https://gitpod.io/#/github.com/jupyterhub/jupyterhub",target:"_blank",rel:"noopener noreferrer"},L=i(`<h3 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;# Hello World&quot;</span> <span class="token operator">&gt;&gt;</span> README.md
<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> README.md
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;first commit&quot;</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;提交多行备注 title
&gt;
&gt; commit description&quot;</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/<span class="token operator">&lt;</span>USERNAME<span class="token operator">&gt;</span>/<span class="token operator">&lt;</span>REPO-NAME<span class="token operator">&gt;</span>.git
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master

<span class="token comment"># TOKEN 暴力(force)提交</span>
<span class="token function">git</span> push https://actions:<span class="token variable">\${GITHUB_TOKEN}</span>@github.com/<span class="token operator">&lt;</span>USERNAME<span class="token operator">&gt;</span>/<span class="token operator">&lt;</span>REPOSITORY<span class="token operator">&gt;</span>.git HEAD:<span class="token operator">&lt;</span>BRANCH<span class="token operator">&gt;</span> <span class="token parameter variable">--force</span>

<span class="token function">git</span> remote <span class="token parameter variable">-v</span> <span class="token comment"># 查看远程版本信息</span>

<span class="token function">git</span> checkout <span class="token parameter variable">--theirs</span> filename.java  <span class="token comment"># 保留远端的</span>
<span class="token function">git</span> checkout <span class="token parameter variable">--ours</span> filename.java <span class="token comment"># 保留本地的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 提交所有文件但排除某些文件的方案</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> reset -- manifest.json <span class="token comment"># Unstaged changes 撤出缓冲器。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除远端文件/夹</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">--cached</span>  */src/<span class="token punctuation">\\</span>*      //-n：加上这个参数，执行命令时，是不会删除任何文件，而是展示此命令要删除的文件列表预览。
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span>  */src/<span class="token punctuation">\\</span>*      //最终执行命令.
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;移除src目录下所有文件的版本控制&quot;</span>    //提交
<span class="token function">git</span> push origin master   //提交到远程服务器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看所有分支-包括远程" tabindex="-1"><a class="header-anchor" href="#查看所有分支-包括远程" aria-hidden="true">#</a> 查看所有分支(包括远程)</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除分支" tabindex="-1"><a class="header-anchor" href="#删除分支" aria-hidden="true">#</a> 删除分支</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#删除本地分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>branchname<span class="token punctuation">]</span>
<span class="token comment">#删除远程分支</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> <span class="token punctuation">[</span>branchname<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="新建分支" tabindex="-1"><a class="header-anchor" href="#新建分支" aria-hidden="true">#</a> 新建分支</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#新建分支并切换到指定分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> 本地分支名 origin/远程分支名

<span class="token comment">#新建本地远程分支，并关联</span>
<span class="token function">git</span> branch 本地分支名
<span class="token function">git</span> push origin 本地分支名:远程分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tags" tabindex="-1"><a class="header-anchor" href="#tags" aria-hidden="true">#</a> tags</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看tag，创建tag</span>
<span class="token function">git</span> tag
<span class="token function">git</span> tag v0.0.1
<span class="token function">git</span> push origin v0.0.1

<span class="token comment">#删除tag</span>
<span class="token function">git</span> tag <span class="token parameter variable">-d</span> v0.0.1
<span class="token function">git</span> push origin :refs/tags/v0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子项目" tabindex="-1"><a class="header-anchor" href="#子项目" aria-hidden="true">#</a> 子项目</h3><p>添加子项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> submodule <span class="token function">add</span> https://github.com/ethereum/evmc.git evmc
<span class="token comment">#git会在项目下生成.gitmodule</span>
<span class="token function">cat</span> .gitmodule

<span class="token punctuation">[</span>submodule <span class="token string">&quot;evmc&quot;</span><span class="token punctuation">]</span>
	path <span class="token operator">=</span> evmc
	url <span class="token operator">=</span> https://github.com/ethereum/evmc.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下载子项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token parameter variable">--recursive</span> giturl

<span class="token comment"># 如果已经 clone 到本地</span>
<span class="token builtin class-name">cd</span> repository
<span class="token function">git</span> submodule init
<span class="token function">git</span> submodule update

<span class="token comment"># 更新所有子项目</span>
<span class="token function">git</span> submodule foreach <span class="token function">git</span> pull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="保存密码" tabindex="-1"><a class="header-anchor" href="#保存密码" aria-hidden="true">#</a> 保存密码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> credential.helper store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19),M={href:"https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line",target:"_blank",rel:"noopener noreferrer"},z={href:"https://$GITHUB_ACTOR:$GH_TOKEN@github.com/owner/repo.git",target:"_blank",rel:"noopener noreferrer"},P=n("p",null,"或使用 ssh",-1),X=n("h3",{id:"github",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#github","aria-hidden":"true"},"#"),s(" Github")],-1),B={href:"https://help.github.com/articles/guide-to-submitting-a-dmca-takedown-notice/",target:"_blank",rel:"noopener noreferrer"},G=n("h3",{id:"其他",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#其他","aria-hidden":"true"},"#"),s(" 其他")],-1),H={href:"https://www.gerritcodereview.com/",target:"_blank",rel:"noopener noreferrer"},U={href:"http://gitstats.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/521xueweihan/git-tips",target:"_blank",rel:"noopener noreferrer"},$=n("img",{src:o,alt:"",loading:"lazy"},null,-1),K=i(`<h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h2><h3 id="基础安装" tabindex="-1"><a class="header-anchor" href="#基础安装" aria-hidden="true">#</a> 基础安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 卸载</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> remove <span class="token function">docker</span> docker-engine docker.io containerd runc

<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> get.docker.com <span class="token parameter variable">-o</span> get-docker.sh
<span class="token function">sudo</span> <span class="token function">sh</span> get-docker.sh <span class="token parameter variable">--mirror</span> Aliyun

<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
<span class="token function">sudo</span> systemctl start <span class="token function">docker</span>

<span class="token comment"># 建立docker组</span>
<span class="token function">sudo</span> <span class="token function">groupadd</span> <span class="token function">docker</span>
<span class="token comment"># 将当前用户加入docker组</span>
<span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> <span class="token environment constant">$USER</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>阿里DOCKER镜像加速</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker

<span class="token comment"># &quot;https://registry.docker-cn.com&quot;</span>
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://slot7tfp.mirror.aliyuncs.com&quot;]
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>阿里云私有Docker Registry</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> login <span class="token parameter variable">--username</span><span class="token operator">=</span>mobilenumber registry.cn-hangzhou.aliyuncs.com     //password:123123
<span class="token function">docker</span> tag <span class="token punctuation">[</span>ImageId<span class="token punctuation">]</span> registry.cn-hangzhou.aliyuncs.com/<span class="token punctuation">[</span>namespaces阿里云中创建<span class="token punctuation">]</span>/<span class="token punctuation">[</span>镜像名<span class="token punctuation">]</span>:<span class="token punctuation">[</span>镜像版本号<span class="token punctuation">]</span>
<span class="token function">docker</span> push registry.cn-hangzhou.aliyuncs.com/<span class="token punctuation">[</span>namespaces阿里云中创建<span class="token punctuation">]</span>/<span class="token punctuation">[</span>镜像名<span class="token punctuation">]</span>:<span class="token punctuation">[</span>镜像版本号<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> zzz/docker-mysql <span class="token builtin class-name">.</span>

<span class="token comment"># 设置存储大小--storage-opt size=200G 需要overlay2引擎 https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-storage-driver</span>
<span class="token function">docker</span> run <span class="token parameter variable">-ti</span> <span class="token parameter variable">--name</span> mysql_test <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token parameter variable">-p3306:3306</span> <span class="token parameter variable">-idt</span> zzz/docker-mysql:latest

<span class="token function">docker</span> logs <span class="token parameter variable">-f</span> mysql_test

<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql_test /bin/bash

mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p123456</span>

<span class="token comment"># 上传下载文件</span>
<span class="token function">docker</span> <span class="token function">cp</span> /root/test.txt <span class="token variable">\${CONTAINER_ID}</span>:/root/
<span class="token function">docker</span> <span class="token function">cp</span> <span class="token variable">\${CONTAINER_ID}</span>:/root/test.txt /root/

<span class="token comment"># 获得host权限</span>
<span class="token comment"># --privileged=true 使用该参数，container内的root拥有真正的root权限，否则，container内的root只是外部的一个普通用户权限。可以看到很多host上的设备，并且可以执行mount。</span>
<span class="token comment"># Enter into Docker VM in mac</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--privileged</span> <span class="token parameter variable">--pid</span><span class="token operator">=</span>host debian nsenter <span class="token parameter variable">-t</span> <span class="token number">1</span> <span class="token parameter variable">-m</span> <span class="token parameter variable">-u</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-i</span> <span class="token function">sh</span>
<span class="token function">ls</span> <span class="token parameter variable">-lah</span> /var/lib/docker/volumes/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用目录位置" tabindex="-1"><a class="header-anchor" href="#常用目录位置" aria-hidden="true">#</a> 常用目录位置</h2><ul><li><p>系统自启动</p><ul><li>MAC <code>~/Library/LaunchAgents</code><ul><li>/Library/StartupItems</li><li>/System/Library/StartupItems</li></ul></li></ul></li><li><p>Lantern</p><ul><li>MAC <code>~/Library/Application\\ Support/Lantern/settings.yaml</code></li></ul></li><li><p>Docker</p><ul><li>Ubuntu: /var/lib/docker/</li><li>Fedora: /var/lib/docker/</li><li>Debian: /var/lib/docker/</li><li>Windows: C:\\ProgramData\\DockerDesktop</li><li>MacOS: ~/Library/Containers/com.docker.docker/Data/vms/0/</li></ul></li><li><p>Xcode</p><ul><li>xcarchive: ~/Library/Developer/Xcode/Archives</li></ul></li></ul>`,10);function F(W,Y){const a=c("ExternalLinkIcon");return l(),r("div",null,[d,n("ul",null,[u,m,n("li",null,[s("iozone 文件系统IO测试 "),n("a",v,[s("云主机大PK"),e(a)])])]),b,n("ul",null,[n("li",null,[n("a",h,[s("https://bastian.rieck.me/blog/posts/2019/ssh_incidents/"),e(a)]),s(" 分析恶意的SSH访问尝试")])]),k,n("p",null,[n("a",g,[s("dirmap"),e(a)]),s("、"),n("a",f,[s("webdirscan"),e(a)]),s("、DirBuster、Dirsearch、cansina")]),_,n("p",null,[s("hydra，Bruter，Medusa，"),n("a",x,[s("hashcat"),e(a)])]),y,n("ul",null,[n("li",null,[E,n("p",null,[s("基本是都是被 DNS 污染了"),S,n("a",q,[s("查询域名指向的IP地址"),e(a)]),s(" 修改 hosts 文件")]),w]),n("li",null,[A,n("p",null,[s("基于"),n("a",O,[s("jsdelivr CDN"),e(a)]),s(" 可实现无差异访问,不担心"),C,s(" 无法访问问题")])]),n("li",null,[D,n("p",null,[s("直接按【.】建将打开web vscode在线阅读代码。"),N,n("a",R,[s("https://github.dev/jupyterhub/jupyterhub"),e(a)])])]),n("li",null,[n("p",null,[s("在线运行 在地址前面输入"),n("a",j,[s("https://gitpod.io/#"),e(a)]),s(" 将打开一个在线的vscode及linux容器"),I,n("a",T,[s("https://gitpod.io/#/github.com/jupyterhub/jupyterhub"),e(a)])])])]),L,n("p",null,[n("a",M,[s("https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line"),e(a)]),s(" 建议使用token作为密码")]),n("p",null,[s("或使用带 token url "),n("a",z,[s("https://$GITHUB_ACTOR:$GH_TOKEN@github.com/owner/repo.git"),e(a)])]),P,X,n("p",null,[n("a",B,[s("Github DMCA"),e(a)]),s("数字千年版权法")]),G,n("p",null,[n("a",H,[s("codereview"),e(a)]),n("a",U,[s("git stats"),e(a)])]),n("p",null,[n("a",V,[$,e(a)])]),K])}const Z=t(p,[["render",F],["__file","日常杂项.html.vue"]]);export{Z as default};
