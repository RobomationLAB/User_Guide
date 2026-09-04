export default {
  label: '日本語',   // 언어 선택 메뉴 표기
  lang: 'ja',     // <html lang> 속성

  // 헤더 내비게이션 라벨
  nav: {
    guide: 'ガイド',
  },

  // 사이드바 카테고리 이름. 키는 docs/ja/ 아래 디렉터리 이름과 같다.
  categories: {
    guide:       'コーディングガイド',
    program:     'プログラムの構成要素と使い方',
    common:      '共通ブロック',
    roboids:     'ロボット',
    AI:          'AI拡張',
    CheeseStick: 'CheeseStick拡張',
  },

  // 기본 테마 UI 문자열. 채울 수 있는 키 목록은 locale/index.js 주석 참고.
  theme: {},
}
