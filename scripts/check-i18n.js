// 번역본 정합성 점검. `npm run check:i18n [언어…]`
//
// npm run docs:build 가 잡는 것은 죽은 문서 링크와 중복 앵커 id 뿐이다.
// 이 스크립트는 빌드가 잡지 못하는 5가지를 본다. 자세한 배경은 docs/TRANSLATION.md.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import LOCALES from '../docs/.vitepress/locale/index.js'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const PAGES = path.join(ROOT, 'docs/pages')
const IMAGES = path.join(ROOT, 'docs/public/images')
const REF = 'ko' // 기준 언어

// ── 유틸 ─────────────────────────────────────────────────────────────────────
const walk = (dir, base = dir, out = []) => {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const e of entries) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p, base, out)
    else if (e.name.endsWith('.md')) out.push(path.relative(base, p))
  }
  return out
}

// 코드펜스 안의 '#' 은 제목이 아니다
const eachLine = (src, fn) => {
  let fence = false
  src.split('\n').forEach((line, i) => {
    if (/^\s*(```|~~~)/.test(line)) {
      fence = !fence
      return
    }
    fn(line, i + 1, fence)
  })
}

const anchorsOf = (src) => {
  const out = new Set()
  eachLine(src, (line, _n, fence) => {
    if (fence) return
    const m = /^#{1,6}\s+.*\{#([^}]+)\}\s*$/.exec(line)
    if (m) out.add(m[1].trim())
  })
  return out
}

const read = (f) => fs.readFileSync(f, 'utf-8')

// ── 점검 ─────────────────────────────────────────────────────────────────────
function check(lang) {
  const errors = []
  const refFiles = walk(path.join(PAGES, REF))
  const langDir = path.join(PAGES, lang)
  const langFiles = walk(langDir)
  const refSet = new Set(refFiles)
  const langSet = new Set(langFiles)

  // ① 파일명 집합이 기준 언어와 같은가 (대소문자 포함)
  //    macOS 는 대소문자를 구분하지 않아 오타가 로컬에서 통과하고 Linux 빌드에서 깨진다.
  const missing = refFiles.filter((f) => !langSet.has(f))
  const stray = langFiles.filter((f) => !refSet.has(f))
  for (const f of stray) errors.push(['①파일명', `${lang}/${f} — ${REF} 에 없는 파일`])
  // 대소문자만 다른 경우를 따로 집어낸다
  const lowerRef = new Map(refFiles.map((f) => [f.toLowerCase(), f]))
  for (const f of stray) {
    const hit = lowerRef.get(f.toLowerCase())
    if (hit) errors.push(['①파일명', `${lang}/${f} — 대소문자 불일치 (기준: ${hit})`])
  }

  const both = refFiles.filter((f) => langSet.has(f))
  const anchorMap = new Map() // 상대경로(확장자 없음) → 앵커 Set

  for (const rel of both) {
    const refSrc = read(path.join(PAGES, REF, rel))
    const src = read(path.join(langDir, rel))
    const a = anchorsOf(src)
    anchorMap.set(rel.replace(/\.md$/, ''), a)

    // ② 앵커 id 집합이 기준 언어와 동일한가
    const refA = anchorsOf(refSrc)
    for (const id of refA) if (!a.has(id)) errors.push(['②앵커', `${lang}/${rel} — 앵커 누락 {#${id}}`])
    for (const id of a) if (!refA.has(id)) errors.push(['②앵커', `${lang}/${rel} — ${REF} 에 없는 앵커 {#${id}}`])

    // ④ BlockImage 가 가리키는 이미지가 이 언어에 실제로 있는가
    //    없으면 BlockImage 가 en → ko 로 폴백해 조용히 다른 언어 이미지를 보여준다.
    for (const m of src.matchAll(/<BlockImage\s+module="([^"]+)"\s+id="([^"]+)"(?:[^>]*?\bext="([^"]+)")?/g)) {
      const file = path.join(IMAGES, lang, m[1], `${m[2]}.${m[3] || 'png'}`)
      if (!fs.existsSync(file))
        errors.push(['④이미지', `${lang}/${rel} — images/${lang}/${m[1]}/${m[2]}.${m[3] || 'png'} 없음`])
    }

    // ⑤ 번역 누락 한글 (기준 언어 자체는 제외)
    if (lang !== REF) {
      eachLine(src, (line, n) => {
        if (/[가-힣]/.test(line)) errors.push(['⑤한글', `${lang}/${rel}:${n} — ${line.trim().slice(0, 60)}`])
      })
    }
  }

  // ③ ](파일#앵커) 의 앵커가 실제 id 로 해석되는가
  //    VitePress 는 '#' 뒤를 검증하지 않는다.
  for (const rel of both) {
    const src = read(path.join(langDir, rel))
    const dir = path.dirname(rel) === '.' ? '' : path.dirname(rel)
    for (const m of src.matchAll(/\]\(([^)#\s]*)#([^)\s]+)\)/g)) {
      const [, target, anchor] = m
      if (/^(https?:)?\/\//.test(target)) continue
      const key = target
        ? path.normalize(path.join(dir, target)).replace(/\\/g, '/')
        : rel.replace(/\.md$/, '')
      const set = anchorMap.get(key)
      if (!set) errors.push(['③링크', `${lang}/${rel} — 대상 문서 없음: ${target}`])
      else if (!set.has(anchor)) errors.push(['③링크', `${lang}/${rel} — #${anchor} 가 ${target || '이 문서'} 에 없음`])
    }
  }

  return { errors, missing: missing.length, checked: both.length }
}

// ── 실행 ─────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2)
const targets = args.length ? args : Object.keys(LOCALES)
let failed = 0

const explicit = args.length > 0
const summary = []

for (const lang of targets) {
  if (!(lang in LOCALES)) {
    console.log(`⚠ ${lang}: locale/index.js 에 없는 언어`)
    failed = 1
    continue
  }
  const { errors, missing, checked } = check(lang)
  const head = `${lang.padEnd(8)} 점검 ${String(checked).padStart(3)}개 · 미번역 ${String(missing).padStart(3)}개`

  // 아직 번역을 시작하지 않은 언어(index.md 스텁만 있는 상태)는 문제가 나오는 게
  // 당연하므로 한 줄로만 알린다. 언어를 직접 지정하면 상세를 보여준다.
  if (!explicit && checked <= 1 && missing > 0) {
    console.log(`· ${head} · 미착수`)
    summary.push(`${lang}:미착수`)
    continue
  }

  if (errors.length === 0) {
    console.log(`✓ ${head}`)
    summary.push(`${lang}:정상`)
    continue
  }
  failed = 1
  summary.push(`${lang}:문제${errors.length}`)
  console.log(`✗ ${head} · 문제 ${errors.length}건`)
  const byKind = new Map()
  for (const [kind, msg] of errors) {
    if (!byKind.has(kind)) byKind.set(kind, [])
    byKind.get(kind).push(msg)
  }
  for (const [kind, msgs] of byKind) {
    console.log(`    [${kind}] ${msgs.length}건`)
    for (const m of msgs.slice(0, 5)) console.log(`      - ${m}`)
    if (msgs.length > 5) console.log(`      … ${msgs.length - 5}건 더`)
  }
}

console.log()
console.log(summary.join('  '))
process.exit(failed)
