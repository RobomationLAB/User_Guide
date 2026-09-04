export default {
  label: 'Svenska',   // 언어 선택 메뉴 표기
  lang: 'sv',     // <html lang> 속성

  // 헤더 내비게이션 라벨
  nav: {
    guide: 'Guide',
  },

  // 사이드바 카테고리 이름. 키는 docs/sv/ 아래 디렉터리 이름과 같다.
  categories: {
    guide:       'Kodningsguide',
    program:     'Programmets komponenter och användning',
    common:      'Gemensamma block',
    roboids:     'Robotar',
    AI:          'AI-tillägg',
    CheeseStick: 'CheeseStick-tillägg',
  },

  // 기본 테마 UI 문자열. 채울 수 있는 키 목록은 locale/index.js 주석 참고.
  theme: {},
}
