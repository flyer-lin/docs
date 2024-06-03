import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs/',
  title: "林的学习笔记",
  description: "林的学习笔记",
  head: [['link', { rel: 'icon', href: '//vitepress.dev/vitepress-logo-mini.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '//vitepress.dev/vitepress-logo-mini.svg',
    nav: [
      { text: '前端', link: '/pages/class/class' },
      { text: '组件', link: '/pages/components/拖拽实现' },
      { text: '面试', link: '/pages/face/question' },
    ],

    sidebar: [
      {
        text: '前端',
        items: [
          { text: '类', link: '/pages/class/class' },
          { text: 'electron', link: '/pages/electron/electron' },
          { text: 'nodejs', link: '/pages/nodejs/nodejs' },
          { text: 'react', link: '/pages/react/react' },
          { text: 'ts', items: [
            { text: '接口', link: '/pages/ts/interface' }
          ] },
          { text: 'vue', items: [
            { text: 'vue3', link: '/pages/vue/vue3' },
            { text: 'vuex', link: '/pages/vue/vuex' },
          ] },
        ]
      },
      {
        text: '组件',
        items: [
          { text: '下拉树', link: '/pages/components/treeSelect' },
          { text: '拖拽实现', link: '/pages/components/拖拽实现' }
        ]
      },
      {
        text: '面试',
        items: [
          { text: '问题', link: '/pages/face/question' },
          { text: '知识点', link: '/pages/face/more' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
