import { defineUserConfig, defaultTheme } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  lang: "zh-CN",
  title: "林的学习笔记",
  description: "泵gg的博客",
  head: [
    [
      "link",
      //要放在public文件夹下
      { rel: "icon", href: "/images/logo.png?v=230815" },
    ],
  ],
  theme: defaultTheme({
    // tab栏的图标; 图片 / 会自动去public文件夹里找图片
    logo: "/images/logo.png",
    logoDark: null,
    navbar: [
      {
        text: "介绍",
        link: "/",
      },
      {
        text: "前端",
        children: [
          {
            text: "面试",
            children: [
              {
                text: "常问面试问题",
                link: "/pages/face/question.md",
              },
              {
                text: "全部面试问题",
                link: "/pages/face/more.md",
              },
            ],
          },
          {
            text: "技术",
            children: [
              {
                text: "nodejs",
                link: "/pages/nodejs/nodeJS.md",
              },
              {
                text: "vuex",
                link: "/pages/vue/vuex.md",
              },
              {
                text: "vue3",
                link: "/pages/vue/vue3.md",
              },
              {
                text: "class",
                link: "/pages/ts/class.md",
              },
              {
                text: "ts",
                link: "/pages/ts/ts.md",
              },
              {
                text: "react",
                link: "/pages/react/react.md",
              },
              {
                text: "electron",
                link: "/pages/electron/electron.md",
              }
            ],
          },
          {
            text: "工具组件",
            children: [
              {
                text: "拖拽实现",
                link: "/pages/component/拖拽实现.md",
              },
              {
                text: "treeSelect",
                link: "/pages/component/treeSelect.md",
              }
            ],
          },
          {
            text: "杂",
            children: [
              {
                text: "待定...",
                link: "/pages/other/other.md",
              },
            ],
          },
        ],
      },
    ],
    sidebar: "auto",
    // sidebarDepth: 2,
    repo: "https://github.com/flyer-lin/vuepress",
    repoLabel: "Github",
    editLink: false,
    lastUpdated: true,
    lastUpdatedText: "上次更新",
    backToHome: "返回首页",
  }),
  plugins: [
    searchPlugin({
      // 配置项
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
      hotKeys: [
        {
          key: "f",
          ctrl: true,
        },
      ],
    }),
  ],
});
