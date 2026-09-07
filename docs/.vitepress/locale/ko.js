export default {
  label: '한국어',   // 언어 선택 메뉴 표기
  lang: 'ko',     // <html lang> 속성


  // 사이드바 카테고리 이름. 키는 docs/ko/ 아래 디렉터리 이름과 같다.
  categories: {
    guide:       '코딩 가이드',
    program:     '프로그램 구성 요소 및 사용 방법',
    common:      '공통 블록',
    roboids:     '로봇',
    AI:          'AI 확장모듈',
    CheeseStick: '치즈스틱 확장모듈',
  },

  // 기본 테마 UI 문자열. 채울 수 있는 키 목록은 locale/index.js 주석 참고.
  theme: {
    // 드로어 상단 '테마' 행의 라벨
    darkModeSwitchLabel: '테마',

    // 헤더 메뉴 버튼 / 언어 행의 스크린리더 라벨
    sidebarMenuLabel: '메뉴',
    langMenuLabel: '언어 변경',
  },
}
