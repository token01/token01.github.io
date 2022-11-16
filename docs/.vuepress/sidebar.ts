import { sidebar } from "vuepress-theme-hope";
// https://emojipedia.org/
// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar([
  "/DailyRoutine",
  "/Read",
  {
    text: "🚀 编程技术",
    icon: "",
    prefix: "/code/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "🧰 软件应用",
    icon: "",
    prefix: "/apps/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "🌐 页面开发",
    icon: "",
    prefix: "/web/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "🏗️ 网站部署",
    icon: "",
    prefix: "/deploy/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "🐋 Linux 服务",
    icon: "",
    prefix: "/services/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "👥 系统问题",
    icon: "",
    prefix: "/windows/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: " 生活",
    icon: "",
    prefix: "/family/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "博客文章",
    icon: "blog",
    prefix: "/_posts/",
    link: "/blog",
    collapsable: true,
    children: "structure",
  },
  
]);
