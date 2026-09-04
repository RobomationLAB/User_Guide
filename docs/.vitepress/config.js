import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import LOCALES from './locale/index.js'

// docs/ 디렉터리 절대 경로 (이 파일은 docs/.vitepress/config.js)
const DOCS_ROOT = fileURLToPath(new URL('..', import.meta.url))

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

// 해당 언어에 실제로 존재하는 문서만으로 사이드바를 만든다.
// 번역이 아직 없는 언어는 빈 사이드바가 되고, md 파일을 추가하면 자동으로 나타난다.
function buildSidebar(locale) {
  const groups = []
  for (const { dir, items } of CATEGORIES) {
    const absDir = path.join(DOCS_ROOT, locale, dir)
    const present = entriesOf(absDir)
    const links = []
    for (const name of items) {
      if (!present.has(`${name}.md`)) continue
      links.push({
        text: readTitle(path.join(absDir, `${name}.md`)) ?? name,
        link: `/${locale}/${dir}/${name}`,
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
  // favicon. base 설정이 없고 루트(docs.robomationlab.com)로 배포되므로 절대경로.
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
  ],
  title: "ROBOMATION LAB",
  description: "RobomationLAB은 AI 로보틱스 SW 교육에 최적화된 플랫폼으로, 초등/중학생 대상 로봇 코딩 교육을 위한 Chrome 웹 브라우저 기반의 통합 저작환경을 제공합니다.",
  locales: Object.fromEntries(
    Object.entries(LOCALES).map(([key, { label, lang, nav, theme }]) => [
      key,
      {
        label,
        lang,
        themeConfig: {
          ...theme,
          nav: [{ text: nav.guide, link: '/' }],
          sidebar: { [`/${key}/`]: buildSidebar(key) },
        },
      },
    ])
  ),
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 헤더 좌측: 아이콘 + 사이트 제목 표시
    logo: { src: '/logo.png', alt: 'RobomationLAB' },
    // 루트(/)용 폴백. 각 로케일은 아래 locales 에서 자기 언어 라벨로 덮어쓴다.
    nav: [
      { text: LOCALES.ko.nav.guide, link: '/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/RobomationLAB/User_Guide' }
    ],
    outline: 2,
  }
})
