import DefaultTheme from "vitepress/theme"
import XuYouElement from 'xuyou-element'
import '@xuyou-element/theme/index.scss'

export default {
  ...DefaultTheme,
  enhanceApp({app}) {
    app.use(XuYouElement)
  }
}