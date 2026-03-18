import DefaultTheme from 'vitepress/theme'
import CustomFooter from './CustomFooter.vue'
import { h } from 'vue'
import './styles/vars.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(CustomFooter)
    })
  }
}
