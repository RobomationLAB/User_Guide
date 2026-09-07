import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import LOCALES from './locale/index.js'

// 문서 소스 디렉터리(srcDir)의 절대 경로. 
// 이 파일은 docs/.vitepress/config.js 이고 마크다운은 docs/pages/ 아래에 있다.
// buildSidebar 가 이 경로로 파일 존재를 확인한다.
const DOCS_ROOT = fileURLToPath(new URL('../pages/', import.meta.url))

// ─────────────────────────────────────────────────────────────────────────────
// 사이드바 구조 (정본): 카테고리 디렉터리 + 그 안의 모듈 나열 순서.
// 여기 적은 순서 그대로 모든 언어의 사이드바에 반영된다.
// 문서를 새로 추가할 때는 해당 카테고리 items 에 확장자 없는 파일명을 넣으면 된다.
// 파일명은 대소문자까지 실제 파일과 정확히 일치해야 한다.
// ─────────────────────────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    dir: 'guide',
    items: [
      'CodingGuide', 
      'CodingRules', 
    ]
  },
  {
    dir: 'program',
    items: [
      'Menu', 
      'Editor', 
      'Preview', 
    ],
  },
  {
    dir: 'common',
    items: [
      'Logic', 
      'Loops', 
      'Math', 
      'Text', 
      'Lists', 
      'Color', 
      'Audio', 
      'Control', 
      'Variables', 
      'Functions', 
      'Others',
    ],
  },
  {
    dir: 'roboids',
    items: [
      'HamsterS', 
      'Hamster', 
      'Pio', 
      'Turtle', 
      'Beagle', 
      'Raccoon4', 
      'CheeseStick',
    ],
  },
  {
    dir: 'AI',
    items: [
      'ASR', 
      'FaceDetection', 
      'DetailedFaceDetection', 
      'FaceExpression', 
      'HandDetection',
      'BodyDetection', 
      'ObjectDetection', 
      'ColorDetection', 
      'ArucoMarker',
      'SelfDriving',
    ],
  },
  {
    dir: 'CheeseStick',
    items: [
      'CSD01', 
      'CSD02', 
      'CSD03', 
      'CSD07', 
      'CSD09', 
      'CSD10',
      'HAT010', 
      'HAT022', 
      'PID13', 
      'PID26', 
      'NeoPixel',
    ],
  },
]

function categoryLabel(dir, locale) {
  return LOCALES[locale]?.categories?.[dir]
    ?? LOCALES.en.categories[dir]
    ?? dir
}

// 디렉터리 목록 캐시. macOS 는 파일시스템이 대소문자를 구분하지 않아
// fs.existsSync 만으로는 대소문자 오타를 잡지 못하고 Linux 빌드에서 깨진다.
// 실제 디렉터리 목록과 정확히 대조한다.
const dirCache = new Map()
function entriesOf(dir) {
  if (!dirCache.has(dir)) {
    let names
    try {
      names = fs.readdirSync(dir)
    } catch {
      names = []
    }
    dirCache.set(dir, new Set(names))
  }
  return dirCache.get(dir)
}

// 문서의 frontmatter title 을 읽는다. 없으면 첫 h1, 그것도 없으면 null.
function readTitle(file) {
  let src
  try {
    src = fs.readFileSync(file, 'utf-8')
  } catch {
    return null
  }
  const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---/.exec(src)
  if (frontmatter) {
    const title = /^title:[ \t]*(.+)$/m.exec(frontmatter[1])
    if (title) return title[1].trim().replace(/^['"]|['"]$/g, '')
  }
  const heading = /^#[ \t]+(.+)$/m.exec(src)
  return heading ? heading[1].trim() : null
}

// 렌더된 페이지 HTML 에서 검색 인덱싱용 순수 텍스트를 뽑는다.
function htmlToText(html) {
  return html
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#x200B;|&ZeroWidthSpace;/g, ' ')
    .replace(/\u200b/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()
}

// 해당 언어에 실제로 존재하는 문서만으로 사이드바를 만든다.
// 번역이 아직 없는 언어는 빈 사이드바가 되고, md 파일을 추가하면 자동으로 나타난다.
// 문서의 ## 제목을 사이드바 하위 항목으로 쓰기 위해 읽는다.
// 명시적 {#id} 가 있는 것만 대상으로 한다. 
// 자동 생성 id 는 한글일 때 NFD(자모 분해)로 나와 손으로 만든 링크와 어긋나므로 추측하지 않는다.
// 코드펜스 안의 '#' 주석은 제목이 아니므로 건너뛴다.
function readHeadings(file) {
  let src
  try {
    src = fs.readFileSync(file, 'utf-8')
  } catch {
    return []
  }
  const out = []
  let fence = false
  for (const line of src.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) {
      fence = !fence
      continue
    }
    if (fence) continue
    const m = /^##\s+(.*?)\s*\{#([^}]+)\}\s*$/.exec(line)
    if (m) out.push({ text: m[1].trim(), anchor: m[2].trim() })
  }
  return out
}

function buildSidebar(locale) {
  const groups = []
  for (const { dir, items } of CATEGORIES) {
    const absDir = path.join(DOCS_ROOT, locale, dir)
    const present = entriesOf(absDir)
    const links = []
    for (const name of items) {
      if (!present.has(`${name}.md`)) continue
      const file = path.join(absDir, `${name}.md`)
      const link = `/${locale}/${dir}/${name}`
      const headings = readHeadings(file)
      links.push({
        text: readTitle(file) ?? name,
        link,
        // 우측 'On this page' 를 없애고 그 내용을 사이드바 하위로 옮겼다.
        // collapsed: true 여야 접히는 그룹이 된다. 
        // VitePress 는 현재 보고 있는 페이지의 그룹만 자동으로 펼친다.
        ...(headings.length > 0
          ? {
              collapsed: true,
              items: headings.map((h) => ({
                text: h.text,
                link: `${link}#${h.anchor}`,
              })),
            }
          : {}),
      })
    }
    if (links.length > 0) {
      groups.push({ text: categoryLabel(dir, locale), collapsed: false, items: links })
    }
  }
  return groups
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 마크다운은 docs/pages/ 아래에 둔다.
  // 라우트는 srcDir 기준 상대경로로 만들어지므로 URL 에 'pages' 가 나타나지 않는다.
  // .vitepress 와 public 은 프로젝트 루트(docs/)에 남는다.
  srcDir: 'pages',

  // 기본 테마의 언어 메뉴를 교체한다. 
  // 기본 컴포넌트는 현재 언어를 목록에서 제외하는데, 현재 언어까지 버튼으로 보여주려면 컴포넌트를 갈아야 한다.
  vite: {
    // public/ 을 docs/ 루트에 남기기 위한 지정.
    // VitePress 는 publicDir 을 srcDir 기준으로 계산하는데(`resolve(srcDir, 'public')`)
    // srcDir 을 'pages' 로 바꾸면 docs/pages/public 을 찾아 자산이 하나도
    // 복사되지 않는다 (logo.png · 이미지 · CNAME 전부 누락).
    // publicDir 은 VitePress 의 공개 옵션이 아니라서 Vite 쪽으로 지정한다.
    publicDir: fileURLToPath(new URL('../public/', import.meta.url)),

    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBarTranslations\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/LanguageMenu.vue', import.meta.url)
          ),
        },
        // 페이지를 이동하면 이전 페이지의 하위 목록이 접히도록 고친 사본.
        // 원본은 한 번 펼친 항목을 다시 접지 않는다.
        {
          find: /^.*composables\/sidebar$/,
          replacement: fileURLToPath(
            new URL('./theme/composables/sidebar.js', import.meta.url)
          ),
        },
        // 검색 결과를 페이지 단위 그룹 헤더로 묶는다. 기본 컴포넌트의 사본이다.
        {
          find: /^.*\/VPLocalSearchBox\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/SearchBox.vue', import.meta.url)
          ),
        },
      ],
    },
  },
  // favicon. base 설정이 없고 루트(docs.robomationlab.com)로 배포되므로 절대경로.
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
  ],
  title: "ROBOMATION LAB",
  description: "RobomationLAB은 AI 로보틱스 SW 교육에 최적화된 플랫폼으로, 초등/중학생 대상 로봇 코딩 교육을 위한 Chrome 웹 브라우저 기반의 통합 저작환경을 제공합니다.",
  locales: Object.fromEntries(
    Object.entries(LOCALES).map(([key, { label, lang, theme }]) => [
      key,
      {
        label,
        lang,
        themeConfig: {
          ...theme,
          sidebar: { [`/${key}/`]: buildSidebar(key) },
        },
      },
    ])
  ),
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 헤더 좌측: 아이콘 + 사이트 제목 표시
    logo: { src: '/logo.png', alt: 'RobomationLAB' },

    // 우측 'On this page' 영역을 없앤다. 각 문서의 ## 목록은 buildSidebar 가
    // 사이드바 하위 항목으로 넣으므로 기능은 사이드바로 옮겨간 셈이다.
    aside: false,
    outline: false,
    // 로컬 검색. 빌드 시 MiniSearch 인덱스를 만들어 외부 서비스 없이 동작한다.
    search: {
      provider: 'local',
      options: {
        // 한글은 공백 단위로 끊기므로 접두사 검색을 켜야 '시작' 이 '시작하기' 를 찾는다.
        miniSearch: {
          options: {
            // MiniSearch 는 토큰의 '접두사' 까지만 매칭한다.
            // 기본 설정으로는'블록' 으로 '블록코딩' 은 찾지만 '코딩' 으로는 못 찾는다.
            // 한글·한자·가나 토큰을 문자 bigram 으로 쪼개 넣어 토큰 중간도 매칭되게 한다 (CJK 검색의 통상적인 방식).
            // 색인·질의에 같은 토크나이저가 쓰이므로 '코딩' → ['코딩'] 이 '블록코딩' → ['블록코딩','블록','록코','코딩'] 과 맞는다.
            // 한 글자 질의는 prefix: true 가 bigram 의 앞글자를 잡아 처리된다.
            tokenize: (text) =>
              (String(text).toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? []).flatMap((tok) =>
                /[\u3131-\uD79D\u4E00-\u9FFF\u3040-\u30FF]/.test(tok)
                  ? [tok, ...Array.from({ length: Math.max(tok.length - 1, 0) },
                                        (_, i) => tok.slice(i, i + 2))]
                  : [tok]
              ),
          },

          searchOptions: {
            prefix: true,
            fuzzy: 0.2,
            boost: { title: 4, titles: 2, text: 1 },
          },

          // 검색 결과 제목을 ## 단위로만 만든다. 
          // ### 이하는 별도 결과로 나오지 않고 상위 ## 섹션의 본문에 포함되므로,
          // ### 안의 텍스트로 검색해도 그 ## 결과가 나온다.
          _splitIntoSections(file, html) {
            const pageTitle = readTitle(file) ?? path.basename(file, '.md')
            const sections = []
            const re = /<h2[^>]*\bid="([^"]*)"[^>]*>([\s\S]*?)<\/h2>/g
            let last = 0
            let prev = null
            let m
            while ((m = re.exec(html)) !== null) {
              if (prev) {
                prev.text = htmlToText(html.slice(last, m.index))
              } else {
                // 첫 ## 앞의 도입부(h1 + 리드 문단)는 페이지 자체를 가리키는 결과로 하나 만든다.
                const intro = htmlToText(html.slice(0, m.index))
                if (intro) sections.push({ titles: [pageTitle], text: intro })
              }
              prev = { anchor: m[1], titles: [pageTitle, htmlToText(m[2])], text: '' }
              sections.push(prev)
              last = re.lastIndex
            }
            if (prev) prev.text = htmlToText(html.slice(last))
            else sections.push({ titles: [pageTitle], text: htmlToText(html) })
            return sections
          },
        },
        locales: {
          ko: {
            translations: {
              button: { buttonText: '검색', buttonAriaLabel: '검색' },
              modal: {
                displayDetails: '상세 보기',
                resetButtonTitle: '검색어 지우기',
                backButtonTitle: '닫기',
                noResultsText: '검색 결과가 없습니다',
                footer: {
                  selectText: '선택',
                  selectKeyAriaLabel: '엔터',
                  navigateText: '이동',
                  navigateUpKeyAriaLabel: '위쪽 화살표',
                  navigateDownKeyAriaLabel: '아래쪽 화살표',
                  closeText: '닫기',
                  closeKeyAriaLabel: 'esc',
                },
              },
            },
          },
        },
      },
    },

    // 사이드바가 있는 페이지에서도 보이게 하는 CSS 는 custom.css §8 참고.
    footer: {
      copyright: '© 2026 Robomation. All rights reserved.',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/RobomationLAB/User_Guide' }
    ],
  }
})
