import { defineUserConfig } from "vuepress";
// import { webpackBundler } from "@vuepress/bundler-webpack";
// import { defineUserConfig } from "@vuepress/cli";
import { pwaPlugin } from "vuepress-plugin-pwa2";
import { searchPlugin } from "@vuepress/plugin-search";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { path } from "@vuepress/utils";
import theme from "./theme";

export default defineUserConfig({
  // 网站语言，默认为中文
  lang: "zh-CN",
  // 网站标题
  title: "凤凰涅槃进阶之路",
  // 网站描述
  description: "开源工具、效率方法、心理学探索的自我提升笔记，记录并输出一切能让自己提升的知识。",

  // 网站路径默认为主域名。如果网站部署在子路径下，比如 xxx.com/yyy，那么 base 应该被设置为 "/yyy/"
  base: "/",

  theme,
  // 是否开启页面预拉取，如果服务器宽带足够，可改为 true，会提升其他页面加载速度
  shouldPrefetch: false,

  // 修改页面模板，@vuepress-theme-hope/templates/index.build.html
  // 配置参考：https://vuepress.github.io/zh/reference/theme-api.html#templatebuild
  templateBuild: path.resolve(__dirname, "templateBuild.html"),

  // 禁止文件夹生成静态文件，参考 [VuePress 文档]（https://v2.vuepress.vuejs.org/zh/guide/page.html#routing）
  pagePatterns: ["**/*.md", "!_temp", "!.vuepress", "!node_modules"],

  head: [
    // meta
    ["meta", { name: "robots", content: "all" }],
    ["meta", { name: "author", content: "Abelsun" }],
    [
      "meta",
      {
        "http-equiv": "Cache-Control",
        content: "no-cache, no-store, must-revalidate",
      },
    ],
    ["meta", { "http-equiv": "Pragma", content: "no-cache" }],
    ["meta", { "http-equiv": "Expires", content: "0" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "Java, Java基础, 并发编程, JVM, 虚拟机, 数据库, MySQL, Spring, Redis, MyBatis, SpringBoot, IDEA, 求职面试, 面试逆袭, 学习路线",
      },
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "script",{},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?5230ac143650bf5eb3c14f3fb9b1d3ec";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_3180624_7cy10l7jqqh.css",
      },
    ],
  ],
  plugins: [
    // Progressive Web app，即渐进式网络应用程序，
    // 允许网站通过支持该特性的浏览器将网站作为 App 安装在对应平台上。
    pwaPlugin({
      // favicon.ico一般用于作为缩略的网站标志,它显示位于浏览器的地址栏或者在标签上,用于显示网站的logo,
      favicon: "/favicon.ico",
      // 主题色
      themeColor: "#096dd9",
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
    // algolia 全文搜索：没设置爬虫的话，需删除 docsearchPlugin 区块以使用节点搜索
    docsearchPlugin({
      indexName: "abelsun",
      appId: "3Q3Y5F76JF",
      apiKey: "f02d241305ced2b4554200beaeb3d369",
    }),
    // 本地搜索：默认情况下，该插件会将页面标题和小标题作为搜索索引。
    searchPlugin({
      // 你的选项
    }),
    // 谷歌分析 ID
    googleAnalyticsPlugin({
      id: "G-RWKZTY2P9R",
    }),
   
  ],
});
