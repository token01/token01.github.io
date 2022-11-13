import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as i,a as o,b as e,d as r,w as a,e as l,r as c}from"./app.ee7282c1.js";const k={},u=o("p",null,"Docker 是一个开源的应用容器引擎，可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。借助 Docker，您可以与管理应用程序相同的方式来管理基础架构。简单点说，用 Docker 你不懂太多代码知识，直接用其他人的打包容器，小白也可以部署复杂的服务应用。",-1),_=o("h2",{id:"docker-命令",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#docker-命令","aria-hidden":"true"},"#"),e(" Docker 命令")],-1),p={href:"https://yeasy.gitbook.io/docker_practice/introduction/what",target:"_blank",rel:"noopener noreferrer"},h=l('<ul><li>列出所有容器：<code>sudo docker ps -a</code>。</li><li>停止容器运行：<code>sudo docker stop &lt;CONTAINER ID/NAME&gt;</code>。部分容器名有可能无法识别，最好在容器名称中添加数字。</li><li>删除指定容器：<code>sudo docker rm &lt;CONTAINER ID/NAME&gt;</code>，删除前需先停止容器。</li><li>清理容器（慎重）：<code>sudo docker system prune -a</code>，用于清理磁盘，删除关闭的容器、无用的数据卷和网络，以及无 tag 和没使用的镜像。</li><li>清理数据卷（慎重）：<code>sudo docker volume prune</code>，关闭的容器数据卷会被删除，有可能破坏有用数据，需极度谨慎。</li></ul><h2 id="windows-docker" tabindex="-1"><a class="header-anchor" href="#windows-docker" aria-hidden="true">#</a> Windows Docker</h2>',2),m={href:"https://www.runoob.com/docker/windows-docker-install.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://newzone.top/_posts/2022-09-05-stable_diffusion_ai_painting.html#docker-%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},D=o("p",null,[e("WSL 本地路径为 "),o("code",null,"\\\\wsl.localhost\\"),e("。Windows 本地磁盘挂载在 Linux 的 mnt 目录下，因此 WSL 调用 Windows 文件需先添加 "),o("code",null,"/mnt/"),e(" 前缀，然后把磁盘符号改为小写，并将反斜扛 "),o("code",null,"\\"),e(" 替换为 "),o("code",null,"/"),e("。假设 Windows 文件位于「D:\\Backup\\Libraries\\Desktop\\stable-diffusion-webui-docker」，转换为 Linux 路径则是「/mnt/d/Backup/Libraries/Desktop/stable-diffusion-webui-docker」。")],-1);function w(b,E){const n=c("RouterLink"),t=c("ExternalLinkIcon");return d(),i("div",null,[u,o("p",null,[e("Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来管理多个 Docker 容器，并配置应用程序需要的所有服务。在配置文件中，所有的容器通过 services 来定义，然后使用 docker-compose 脚本来启动，停止和重启应用，和应用中的服务以及所有依赖服务的容器，非常适合组合使用多个容器进行开发的场景。强烈推荐使用 Compose 搭建所有 Docker，流程参考 "),r(n,{to:"/services/NAS.html#nas-docker"},{default:a(()=>[e("NAS 上搭建 Docker")]),_:1}),e("。")]),_,o("p",null,[e("Docker 使用查看 "),o("a",p,[e("Docker — 从入门到实践"),r(t)]),e("。")]),h,o("p",null,[e("Windows 使用 "),o("a",m,[e("Docker Desktop"),r(t)]),e(" 来管理容器，方式参考 "),o("a",f,[e("Windows Docker 环境配置"),r(t)]),e("。")]),D])}const N=s(k,[["render",w],["__file","Docker.html.vue"]]);export{N as default};
