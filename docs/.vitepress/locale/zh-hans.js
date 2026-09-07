export default {
  label: '简体中文',   // 언어 선택 메뉴 표기
  lang: 'zh-Hans',     // <html lang> 속성


  // 사이드바 카테고리 이름. 키는 docs/zh-hans/ 아래 디렉터리 이름과 같다.
  categories: {
    guide:       '编程指南',
    program:     '程序组成与使用方法',
    common:      '通用积木',
    roboids:     '机器人',
    AI:          'AI 扩展',
    CheeseStick: 'CheeseStick 扩展',
  },

  // 기본 테마 UI 문자열. 채울 수 있는 키 목록은 locale/index.js 주석 참고.
  theme: {
    // 드로어 상단 '테마' 행의 라벨
    darkModeSwitchLabel: '外观',

    // 헤더 메뉴 버튼 / 언어 행의 스크린리더 라벨
    sidebarMenuLabel: '菜单',
    langMenuLabel: '切换语言',
  },
}
