import  {hopeTheme}  from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  // 主题选项：https://vuepress-theme-hope.github.io/v2/zh/config/theme/layout.html
  hostname: "https://bytecodes.tech", // 全局默认作者
  
  author: {
    name: "Abel sun",
    url: "/about-the-author/",
  },

  iconAssets: "iconfont",
  // 网站图标
  logo: "assets/icon/logo.png",
  // Git 仓库和编辑链接
  repo: "https://github.com/token01/token01.github.io",
  repoLabel: "GitHub",
  docsDir: "docs",
  // 以前的默认仓库分支名，方便提交 pr 和 issue
  docsBranch: "master",

  // 是否全局启用路径导航
  breadcrumb: false,

  // 页面元数据：贡献者，最后修改时间，编辑链接
  contributors: false,
  lastUpdated: true,
  editLink: true,

  // 深色模式配置
  // darkmode: "disable",
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  fullscreen: true,

  // navbar
  navbar: navbar,
  // 导航栏布局
  navbarLayout: {
    left: ["Brand"],
    center: ["Links"],
    right: ["Repo", "Outlook", "Search"],
  },
  // 是否在向下滚动时自动隐藏导航栏
  // navbarAutoHide: "always",

  // sidebar
  sidebar: sidebar,
  // 侧边栏排序规则
  // sidebarSorter: ['readme', 'order', 'title'],

  // footer: "默认页脚",
  // displayFooter: true,

  // 页面布局 Frontmatter 配置：https://vuepress-theme-hope.github.io/v2/zh/config/frontmatter/layout.html#pageinfo
  displayFooter: true,

  // 文章信息，可以填入数组，数组的顺序是各条目显示的顺序
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "Word","ReadingTime"],

  // 主题功能选项：https://vuepress-theme-hope.github.io/v2/zh/config/theme/feature.html
  blog: {
    // 个人介绍页地址
    intro: "/about-the-author/",
    sidebarDisplay: "mobile",
    // 博主头像
    avatar: "/assets/icon/itwanger-282.png",
    // 圆角
    roundAvatar: true,
    // 座右铭
    description:"没有什么使我停留——除了目的，纵然岸旁有玫瑰、有绿荫、有宁静的港湾，我是不系之舟。",
    medias: {
      Zhihu: "https://www.zhihu.com/people/abel-48",
      CSDN: "https://blog.csdn.net/kongmingdaoshi",
      Github: "https://github.com/token01",
      Gitee: "https://gitee.com/token01",
    },
  },

  plugins: {
    blog: {
      // 自动摘要
      autoExcerpt: true,
    },

    // 评论配置（仅做样例，记得更换）
    comment: {
      provider: "Waline",
      serverURL: "https://waline.abelsun.tech",
      // 部署 Waline：https://waline.js.org/guide/get-started.html
      // pageview: true, // 浏览量统计
      // Waline 等级标签
      walineLocales: {
        "/": {
          admin: "盛年不重来，一日难再晨",
          level0: "锻体",
          level1: "炼气",
          level2: "筑基",
          level3: "金丹",
          level4: "元婴",
          level5: "化神",
        },
      },

      // Giscus 备用配置
      /*
      provider: "Giscus",
      repo: "rockbenben/LearnData",
      repoId: "R_kgDOHdfk6Q",
      category: "Comments",
      categoryId: "DIC_kwDOHdfk6c4CQYNn",
      */
    },


    // 禁用不需要的配置
    mdEnhance: {
      align: true,
      attrs: true, // 使用特殊标记为 Markdown 元素添加属性
      // chart: true,
      // codetabs: true, // 代码块分组
      container: true,
      // demo: true, //代码演示
      // echarts: true,
      // flowchart: true,
      gfm: true,
      // imageMark: true,
      imageSize: true,
      include: true, //导入文件
      // katex: true,
      mark: true,
      // mermaid: true,
      footnote: true,
      tasklist: true,
      sub: true, // 上下角标
      sup: true,
      // tabs: true, // 选项卡
      // vpre: true,
      // vuePlayground: true, // Vue 交互演示
    },

    // rss 属性
    feed: {
      rss: true,
      count: 10,
    },
  },
});
