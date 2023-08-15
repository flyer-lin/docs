export const siteData = JSON.parse("{\"base\":\"/doc/\",\"lang\":\"zh-CN\",\"title\":\"林的学习笔记\",\"description\":\"泵gg的博客\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/images/logo.png?v=230815\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
