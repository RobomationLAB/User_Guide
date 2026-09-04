---
# https://vitepress.dev/reference/default-theme-home-page
layout: page

hero:
  name: "RobomationLAB 사용 가이드"
  text: "RobomationLAB은 AI 로보틱스 SW 교육에 최적화된 플랫폼으로,초등/중학생 대상 로봇 코딩 교육을 위한 Chrome 웹 브라우저 기반의 통합 저작환경을 제공합니다."
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
import { onMounted } from 'vue'

const KEYS = [
  'ko','en','es','fr','de','it','pt','ja','zh-hans','zh-hant',
  'nl','ru','sv','pl','tr','id','vi','th','da','fi','no'
]
const ALIAS = { 
  zh: 'zh-hans', 'zh-cn': 'zh-hans', 'zh-tw': 'zh-hant', 'zh-hk': 'zh-hant',
  nb: 'no', nn: 'no', 
  in: 'id' 
}

function pick() {
  // 1순위: 브라우저 언어
  for (const tag of navigator.languages || []) {
    const t = tag.toLowerCase()
    for (const c of [t, t.split('-').slice(0,2).join('-'), t.split('-')[0]]) {
      if (ALIAS[c]) return ALIAS[c]
      if (KEYS.includes(c)) return c
    }
  }

  // 2순위: 기본 언어 'ko'
  return 'ko'
}

onMounted(() => { location.replace(`/${pick()}/`) })
</script>

<div style="padding:4rem;text-align:center">이동 중…</div>