export default {
  label: 'Norsk',   // 언어 선택 메뉴 표기
  lang: 'no',     // <html lang> 속성

  // 헤더 내비게이션 라벨
  nav: {
    guide: 'Veiledning',
  },

  // 사이드바 카테고리 이름. 키는 docs/no/ 아래 디렉터리 이름과 같다.
  categories: {
    guide:       'Kodeveiledning',
    program:     'Programkomponenter og bruk',
    common:      'Felles blokker',
    roboids:     'Roboter',
    AI:          'AI-utvidelse',
    CheeseStick: 'CheeseStick-utvidelse',
  },

  // 기본 테마 UI 문자열. 채울 수 있는 키 목록은 locale/index.js 주석 참고.
  theme: {},
}
