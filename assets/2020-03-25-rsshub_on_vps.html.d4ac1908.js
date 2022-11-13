import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as r,a as e,b as t,d as l,e as i,r as a}from"./app.fc117130.js";const h={},u=e("p",null,[t("RSSHub 使用非常简单，但随着使用者增多，微博、知乎加大了反爬限制。目前大量源都无法直接使用，只能自建 RSSHub 来解决稳定性。部署前，准备好"),e("strong",null,"域名和服务器"),t("。")],-1),_=e("p",null,"新手使用 RSSHub 部署教程报错较多，本篇将使用宝塔 PM2 管理器进行部署。",-1),c=e("h2",{id:"部署步骤",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#部署步骤","aria-hidden":"true"},"#"),t(" 部署步骤")],-1),p=e("li",null,[e("p",null,[t("将 RSSHub 代码下载到根目录 root，执行命令 "),e("code",null,"git clone https://github.com/DIYgod/RSSHub.git"),t("。")])],-1),d={href:"https://www.bt.cn/bbs/thread-19376-1-1.html",target:"_blank",rel:"noopener noreferrer"},b=i('<li><p>登陆宝塔面板，点击「软件商店」-「运行环境」，安装<strong>PM2 管理器</strong>。</p><p><img src="http://tc.seoipo.com/20200325120705.png" alt="" loading="lazy"></p></li><li><p>点击 PM2 管理器右侧的设置，按图中红字添加项目路径，启动文件名称为 <code>lib</code>。</p><p><img src="http://tc.seoipo.com/20200325121639.png" alt="" loading="lazy"></p></li><li><p>添加后，点击项目中的「映射」，输入指定域名，如 <code>rsshub.xxx.com</code>，服务器的 1200 端口将指向该域名。映射域名需解析到服务器 IP。</p><p><img src="http://tc.seoipo.com/20200325121921.png" alt="" loading="lazy"></p></li>',3),S=e("p",null,[t("程序运行时，如果遇到报错，可以直接用命令运行 pm2，如 "),e("code",null,"pm2 start /root/RSSHub/lib/index.js --name rsshub"),t("。")],-1),m=e("h2",{id:"使用步骤",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用步骤","aria-hidden":"true"},"#"),t(" 使用步骤")],-1),g={href:"https://docs.rsshub.app/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://docs.rsshub.app/social-media.html#bilibili",target:"_blank",rel:"noopener noreferrer"},R=e("code",null,"https://rsshub.app/bilibili/bangumi/media/9192",-1),x=e("code",null,"https://rsshub.app",-1),H=e("code",null,"http://rsshub.xxx.com/bilibili/bangumi/media/9192",-1),k=e("code",null,"mode=fulltext",-1),v=e("code",null,"https://rsshub.xxx.com/guokr/scientific?mode=fulltext",-1),E={href:"https://docs.rsshub.app/parameter.html",target:"_blank",rel:"noopener noreferrer"},w=e("h2",{id:"rsshub-vs-huginn",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rsshub-vs-huginn","aria-hidden":"true"},"#"),t(" RSSHub VS. Huginn")],-1),N=e("ul",null,[e("li",null,"RSSHub：使用简单，使用现成的抓取规则，适用于国内主流网站；但无法抓取对小众网站，必须 RSSHub 官方定制订阅源。"),e("li",null,"Huginn：适用于所有网站，可设定抓取频率、内容结构、js 结果、输出样式等；但部署、配置复杂，入门门槛高，需要针对网站单独定制抓取规则。")],-1),P=e("h2",{id:"rss-合集",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rss-合集","aria-hidden":"true"},"#"),t(" RSS 合集")],-1),V=e("p",null,"汇总的 RSS 永久订阅 feeds，均通过 RSSHub 和 Huginn 制作。如果有兴趣自制 RSS，可参考以下教程。",-1),y={href:"https://abelsun.tech/_posts/2017-04-22-rss_feed43_feedex.html",target:"_blank",rel:"noopener noreferrer"},I={href:"https://abelsun.tech/_posts/2018-10-07-huginn_scraping_any_website.html",target:"_blank",rel:"noopener noreferrer"},z={href:"https://abelsun.tech/_posts/2019-04-01-rsshub_noob.html",target:"_blank",rel:"noopener noreferrer"},B={href:"https://abelsun.tech/_posts/2020-03-25-rsshub_on_vps.html",target:"_blank",rel:"noopener noreferrer"},M={href:"https://abelsun.tech/_posts/2021-10-23-nas_with_rsshub_and_huginn.html",target:"_blank",rel:"noopener noreferrer"},j={href:"https://abelsun.tech/_posts/2022-03-17-rss_persistent_link_collection.html",target:"_blank",rel:"noopener noreferrer"};function D(F,L){const n=a("ExternalLinkIcon");return o(),r("div",null,[u,_,c,e("ol",null,[p,e("li",null,[e("p",null,[t("安装宝塔面板，查看 "),e("a",d,[t("官方安装教程"),l(n)]),t("。")])]),b]),S,m,e("ol",null,[e("li",null,[e("p",null,[t("打开 "),e("a",g,[t("RSSHub 接口指南"),l(n)]),t("，搜索需要订阅的网站。RSSHub 支持国内大部分的主流网站。")])]),e("li",null,[e("p",null,[t("根据 "),e("a",f,[t("bilibili 番剧路由"),l(n)]),t("的文档，将生成源 "),R,t(" 其中的域名 "),x,t(" 替换为你自部署的域名，如 "),H,t("。")])])]),e("p",null,[t("另外 RSSHub 支持很多实用的参数，比如内容过滤、全文输出等。全文输出参数为 "),k,t("，应用举例：果壳科学人全文输出 "),v,t("。其他可以在 "),e("a",E,[t("通用参数"),l(n)]),t(" 官方文档了解具体使用方法。")]),w,N,P,V,e("ul",null,[e("li",null,[e("p",null,[e("a",y,[t("RSS 入门篇：FEED43&FeedEx-为静态网页定制 RSS 源"),l(n)])])]),e("li",null,[e("p",null,[e("a",I,[t("RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）"),l(n)])])]),e("li",null,[e("p",null,[e("a",z,[t("RSS 速成篇：RSSHub 捡现成的轮子"),l(n)])])]),e("li",null,[e("p",null,[e("a",B,[t("RSS 速成篇 2：RSSHub 自部署"),l(n)])])]),e("li",null,[e("p",null,[e("a",M,[t("RSS 完结篇：节省千元服务费，RSSHub、Huginn 转移 NAS"),l(n)])])]),e("li",null,[e("p",null,[e("a",j,[t("RSS 汇总篇：RSS 永久链接合集，拒绝 RSS 失效"),l(n)])])])])])}const J=s(h,[["render",D],["__file","2020-03-25-rsshub_on_vps.html.vue"]]);export{J as default};