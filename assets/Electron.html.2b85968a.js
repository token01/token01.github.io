import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as i,a as n,b as s,d as a,w as r,e as o,r as t}from"./app.ee7282c1.js";const u={},d={href:"https://www.electronjs.org/",target:"_blank",rel:"noopener noreferrer"},m=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 部署 electron，electron-builder</span>
<span class="token function">npm</span> i <span class="token parameter variable">-d</span> electron@latest <span class="token comment">#更新最新版 Electron，不能全局安装，否则 electron-builder 找不到</span>
<span class="token function">yarn</span> <span class="token function">add</span> electron-builder <span class="token parameter variable">--dev</span> <span class="token comment">#部署 electron-builder</span>

set-ExecutionPolicy RemoteSigned <span class="token comment">#若 yarn 命令报错，则管理员运行此命令</span>

<span class="token comment"># 全局安装时，去除^，手动指定 package.json 中的 electron 版本，然后运行下方打包命令</span>
<span class="token comment"># 将打包命令加入 package.json，直接使用打包命令</span>
<span class="token function">yarn</span> postinstall
<span class="token function">yarn</span> dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用问题" tabindex="-1"><a class="header-anchor" href="#使用问题" aria-hidden="true">#</a> 使用问题</h2>`,2),k=n("li",null,"electron cdn 需要连接网络，必须用本地环境安装。",-1),v=n("li",null,"Electron 定位的 location 为 窗口链接，而非网页链接。",-1),b={href:"https://imf.ms/web/2022/07/05/my-first-web-hybird-project-experience/#%E8%B7%A8%E5%9F%9F-cors-%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},h=o(`<h3 id="nsis-配置" tabindex="-1"><a class="header-anchor" href="#nsis-配置" aria-hidden="true">#</a> nsis 配置</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;nsis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;oneClick&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否一键安装</span>
  <span class="token property">&quot;allowElevation&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 允许请求提升。如果为 false，则用户必须使用提升的权限重新启动安装程序。</span>
  <span class="token property">&quot;allowToChangeInstallationDirectory&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 允许修改安装目录</span>
  <span class="token property">&quot;installerIcon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./build/icons/aaa.ico&quot;</span><span class="token punctuation">,</span><span class="token comment">// 安装图标</span>
  <span class="token property">&quot;uninstallerIcon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./build/icons/bbb.ico&quot;</span><span class="token punctuation">,</span><span class="token comment">//卸载图标</span>
  <span class="token property">&quot;installerHeaderIcon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./build/icons/aaa.ico&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 安装时头部图标</span>
  <span class="token property">&quot;createDesktopShortcut&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 创建桌面图标</span>
  <span class="token property">&quot;createStartMenuShortcut&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">// 创建开始菜单图标</span>
  <span class="token property">&quot;shortcutName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 图标名称</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token string">&quot;build/script/installer.nsh&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 包含的自定义 nsis 脚本 这个对于构建需求严格得安装过程相当有用。</span>
  <span class="token property">&quot;script&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;build/script/installer.nsh&quot;</span> <span class="token comment">// NSIS 脚本的路径，用于自定义安装程序。默认为 build / installer.nsi</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包报错" tabindex="-1"><a class="header-anchor" href="#打包报错" aria-hidden="true">#</a> 打包报错</h3><p>执行打包命令后，提示 <code>cannot unpack electron zip file, will be re-downloaded</code>。</p><p>手动下载对应版本 electron，然后将压缩包放置于 <code>C:\\Users\\用户名\\AppData\\Local\\electron\\Cache</code>。</p><h3 id="跨系统打包" tabindex="-1"><a class="header-anchor" href="#跨系统打包" aria-hidden="true">#</a> 跨系统打包</h3><p>electron 不允许跨系统打包，所以 Mac 打包需要在 iOS 环境，Linux 打包需在 Linux 环境。</p><p>Win11 可允许内建子系统，管理员身份运行 Powershell，输入 bash 即可进入 Linux 子系统。也可以直接打开在 Microsoft store 中下载的 Ubuntu 进入子系统，初次进入 Linux 子系统需要设置 Linux 的用户名及密码。</p><p>更多命令参考：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#安排装更新软件源，安装 node 和 npm 环境</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> nodejs
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">npm</span>

<span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> npm@latest <span class="token parameter variable">-g</span> <span class="token comment">#升级 npm</span>
<span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> n <span class="token comment">#安装用于安装 nodejs 的模块 n</span>
<span class="token function">sudo</span> n stable <span class="token comment">#通过 n 模块安装指定的 nodejs</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function f(q,_){const e=t("ExternalLinkIcon"),l=t("RouterLink");return c(),i("div",null,[n("p",null,[n("a",d,[s("Electron"),a(e)]),s(" 是使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序框架。Electron 兼容 Mac、Windows 和 Linux，可以构建出三个平台的应用程序。")]),n("p",null,[s("按 "),a(l,{to:"/deploy/VPS.html#%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2"},{default:r(()=>[s("环境部署教程")]),_:1}),s("，部署 npm 和 yarn，然后部署 electron 环境。")]),m,n("ul",null,[k,v,n("li",null,[n("a",b,[s("跨域 CORS 配置"),a(e)]),s("：有的应用需要访问的是本地 Web Server，与服务端接口在不同域")])]),h])}const y=p(u,[["render",f],["__file","Electron.html.vue"]]);export{y as default};
