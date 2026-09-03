import DefaultTheme from 'vitepress/theme'
import BlockImage from './components/BlockImage.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('BlockImage', BlockImage)
  }
}