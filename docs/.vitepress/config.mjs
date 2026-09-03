import { defineConfig } from 'vitepress'

// [디렉터리 키, 표시 이름, html lang 속성]
const LOCALES = [
  ['ko',      '한국어',             'ko'],
  ['en',      'English',          'en'],
  ['es',      'Español',          'es'],
  ['fr',      'Français',         'fr'],
  ['de',      'Deutsch',          'de'],
  ['it',      'Italiano',         'it'],
  ['pt',      'Português',        'pt'],
  ['ja',      '日本語',             'ja'],
  ['zh-hans', '简体中文',           'zh-Hans'],
  ['zh-hant', '繁體中文',           'zh-Hant'],
  ['nl',      'Nederlands',       'nl'],
  ['ru',      'Русский',          'ru'],
  ['sv',      'Svenska',          'sv'],
  ['pl',      'Polski',           'pl'],
  ['tr',      'Türkçe',           'tr'],
  ['id',      'Bahasa Indonesia', 'id'],
  ['vi',      'Tiếng Việt',       'vi'],
  ['th',      'ไทย',              'th'],
  ['da',      'Dansk',            'da'],
  ['fi',      'Suomi',            'fi'],
  ['no',      'Norsk',            'no'],
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RobomationLAB 사용 가이드",
  description: "RobomationLAB은 AI 로보틱스 SW 교육에 최적화된 플랫폼으로,초등/중학생 대상 로봇 코딩 교육을 위한 Chrome 웹 브라우저 기반의 통합 저작환경을 제공합니다.",
  locales: Object.fromEntries(
    LOCALES.map(([key, label, lang]) => [key, { label, lang }])
  ),
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: 'Examples',
        items: []
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/RobomationLAB/User_Guide' }
    ]
  }
})
