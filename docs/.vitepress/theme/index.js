import DefaultTheme from 'vitepress/theme'
import BlockImage from './components/BlockImage.vue'
import Layout from './Layout.vue'
import './custom.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  // 기본 Layout 의 사본. 헤더 메뉴 버튼과 드로어 설정 블록을 넣기 위해
  // Layout 스코프의 openSidebar 에 접근해야 해서 교체했다.
  Layout,
  enhanceApp({ app }) {
    app.component('BlockImage', BlockImage)
  }
}
