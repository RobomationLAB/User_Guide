export default {
  label: '繁體中文',   // 언어 선택 메뉴 표기
  lang: 'zh-Hant',     // <html lang> 속성


  // 사이드바 카테고리 이름. 키는 docs/zh-hant/ 아래 디렉터리 이름과 같다.
  categories: {
    guide:       '程式設計指南',
    program:     '程式組成與使用方法',
    common:      '通用積木',
    roboids:     '機器人',
    AI:          'AI 擴充',
    CheeseStick: 'CheeseStick 擴充',
  },

  // 기본 테마 UI 문자열. 채울 수 있는 키 목록은 locale/index.js 주석 참고.
  theme: {
    // 드로어 상단 '테마' 행의 라벨
    darkModeSwitchLabel: '外觀',

    // 헤더 메뉴 버튼 / 언어 행의 스크린리더 라벨
    sidebarMenuLabel: '選單',
    langMenuLabel: '切換語言',
  },
}
