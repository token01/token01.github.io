import { navbar } from "vuepress-theme-hope";
export default navbar([
  { 
    text: "博客",
    icon: "gaishu",
    link: "/blog.md" 
  },
  { 
    text: "Web2.0进阶之路", 
    icon: "lujing", 
    link: "/home.md" 
  },
  { 
    text: "Web3.0进阶之路", 
    icon: "lujing", 
    link: "/blockchain/" 
  },
  // { 
  //   text: "知识星球", 
  //   icon: "Artboard", 
  //   link: "/zhishixingqiu/" 
  // },
  {
    text: "学习路线",
    icon: "luxian",
    link: "/learningPath/"
  },
  {
    text: "珍藏资源",
    icon: "youzhi",
    children: [
      { 
        text: "面试逆袭", 
        icon: "zhunbei", 
        link: "/sidebar/sanfene/nixi.md" 
      },
      // { 
      //   text: "破解合集",
      //   icon: "zhongyaotishi",
      //   link: "/nice-article/itmind/" 
      // },
    ],
  },
  // {
  //   text: "B站视频",
  //   icon: "bzhan", 
  //   link: "https://space.bilibili.com/513340480"
  // },
]);
