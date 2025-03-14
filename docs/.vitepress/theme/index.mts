import DefaultTheme from "vitepress/theme"
import XuYouElement from 'xuyou-element'
import '@xuyou-element/theme/index.scss'

export default {
  ...DefaultTheme,
  ignoreDeadLinks: true,
  enhanceApp({app}) {
    app.use(XuYouElement)
  }
}