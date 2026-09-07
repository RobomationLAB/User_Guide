export default {
  label: 'Tiếng Việt',   // 언어 선택 메뉴 표기
  lang: 'vi',     // <html lang> 속성


  // 사이드바 카테고리 이름. 키는 docs/vi/ 아래 디렉터리 이름과 같다.
  categories: {
    guide:       'Hướng dẫn lập trình',
    program:     'Thành phần chương trình và cách sử dụng',
    common:      'Khối chung',
    roboids:     'Robot',
    AI:          'Phần mở rộng AI',
    CheeseStick: 'Phần mở rộng CheeseStick',
  },

  // 기본 테마 UI 문자열. 채울 수 있는 키 목록은 locale/index.js 주석 참고.
  theme: {
    // 드로어 상단 '테마' 행의 라벨
    darkModeSwitchLabel: 'Giao diện',

    // 헤더 메뉴 버튼 / 언어 행의 스크린리더 라벨
    sidebarMenuLabel: 'Menu',
    langMenuLabel: 'Đổi ngôn ngữ',
  },
}
