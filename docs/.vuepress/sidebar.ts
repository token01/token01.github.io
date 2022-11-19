import { sidebar } from "vuepress-theme-hope";
// https://emojipedia.org/
// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar(
  [
  "/DailyRoutine",
  "/Read",
  {
    text: "😅 技术周刊",
    icon: "",
    prefix: "/letter/",
    link: "",
    collapsable: true,
    children: "structure",    
  },
  {
    text: "🚀 基础编程",
    icon: "",
    prefix: "/code/",
    link: "",
    collapsable: true,
    children: "structure",    
  },
  {
    text: "🤳 JAVA语言",
    icon: "",
    prefix: "/java/",
    link: "",
    collapsable: true,
    children: "structure",    
  },
  {
    text: "😂 Python语言",
    icon: "",
    prefix: "/python/",
    link: "",
    collapsable: true,
    children: "structure",    
  },
  {
    text: "👹 文本文档",
    icon: "",
    prefix: "/notpad/",
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
    text: "🏗️ 网站部署",
    icon: "",
    prefix: "/deploy/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "🐋 生活记录",
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
]

);
