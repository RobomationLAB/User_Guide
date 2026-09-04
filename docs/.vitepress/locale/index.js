// 언어별 번역 데이터. 구조(CATEGORIES)는 config.js 에 있고 여기에는 언어 데이터만 둔다.
// 언어를 추가할 때: <키>.js 를 만들고 아래 두 곳에 한 줄씩 추가한다.
import ko     from './ko.js'
import en     from './en.js'
import es     from './es.js'
import fr     from './fr.js'
import de     from './de.js'
import it     from './it.js'
import pt     from './pt.js'
import ja     from './ja.js'
import zhHans from './zh-hans.js'
import zhHant from './zh-hant.js'
import nl     from './nl.js'
import ru     from './ru.js'
import sv     from './sv.js'
import pl     from './pl.js'
import tr     from './tr.js'
import id     from './id.js'
import vi     from './vi.js'
import th     from './th.js'
import da     from './da.js'
import fi     from './fi.js'
import no     from './no.js'

// 이 객체의 순서가 헤더 언어 선택 메뉴의 순서가 된다.
export default {
  ko,
  en,
  es,
  fr,
  de,
  it,
  pt,
  ja,
  'zh-hans': zhHans,
  'zh-hant': zhHant,
  nl,
  ru,
  sv,
  pl,
  tr,
  id,
  vi,
  th,
  da,
  fi,
  no,
}

/*
각 언어 파일의 theme 는 기본 테마 UI 문자열을 덮어쓴다. 지금은 비어 있고,
번역할 때 아래 키들을 채우면 config.js 가 그대로 실어 보낸다 (VitePress 1.6.4):

  outline: { label }                        'On this page'
  docFooter: { prev, next }                 'Previous page' / 'Next page'
  sidebarMenuLabel                          'Menu'
  returnToTopLabel                          'Return to top'
  langMenuLabel                             'Change language'
  skipToContentLabel                        'Skip to content'
  darkModeSwitchLabel                       'Appearance'
  lightModeSwitchTitle / darkModeSwitchTitle
  notFound: { title, quote, linkLabel, linkText, code }

주의: themeConfig.outline 은 목차 레벨 설정과 라벨을 같은 키로 받는다.
      전역 레벨까지 지정하려면 { label: '...', level: [2, 3] } 처럼 합쳐야 한다.
*/