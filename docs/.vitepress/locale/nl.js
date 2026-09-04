export default {
  label: 'Nederlands',   // 언어 선택 메뉴 표기
  lang: 'nl',     // <html lang> 속성

  // 헤더 내비게이션 라벨
  nav: {
    guide: 'Handleiding',
  },

  // 사이드바 카테고리 이름. 키는 docs/nl/ 아래 디렉터리 이름과 같다.
  categories: {
    guide:       'Programmeergids',
    program:     'Programmaonderdelen en gebruik',
    common:      'Algemene blokken',
    roboids:     'Robots',
    AI:          'AI-uitbreiding',
    CheeseStick: 'CheeseStick-uitbreiding',
  },

  // 기본 테마 UI 문자열. 채울 수 있는 키 목록은 locale/index.js 주석 참고.
  theme: {},
}
