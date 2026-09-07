<script setup>
import { computed, nextTick, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import VPSwitchAppearance from 'vitepress/dist/client/theme-default/components/VPSwitchAppearance.vue'

// 모바일 드로어(사이드바) 최상단의 설정 블록.
// 헤더에서 내려온 언어 / 테마 / GitHub 을 '아이콘 + 라벨 + 우측 어포던스' 라는
// 동일한 행 모양으로 제공한다. 아이콘만 두면 무슨 버튼인지 알 수 없어서다.
const { site, localeIndex, page, theme, hash } = useData()

// 아래 링크 계산은 LanguageMenu.vue 와 같은 규칙이다.
// (기본 테마의 useLangs 는 현재 언어를 목록에서 빼기 때문에 직접 만든다)
const localeRoot = (key) =>
  site.value.locales[key]?.link || (key === 'root' ? '/' : `/${key}/`)

const currentKey = computed(() => localeIndex.value)
const currentLabel = computed(() => site.value.locales[currentKey.value]?.label)

const relPath = computed(() =>
  page.value.relativePath.slice(localeRoot(currentKey.value).length - 1))

const localeLinks = computed(() =>
  Object.keys(site.value.locales).map((key) => {
    const base = localeRoot(key)
    const link = theme.value.i18nRouting === false
      ? base
      : base.replace(/\/$/, '') + '/' + relPath.value
          .replace(/(^|\/)index\.md$/, '$1')
          .replace(/\.md$/, site.value.cleanUrls ? '' : '.html')
    return {
      key,
      text: site.value.locales[key].label,
      link: link.replace(/\/{2,}/g, '/') + hash.value,
      current: key === currentKey.value,
    }
  }))

const langOpen = ref(false)
const socialLinks = computed(() => theme.value.socialLinks ?? [])

// theme.socialLinks 의 icon 은 문자열('github') 또는 { svg } 객체다.
const socialIcon = (icon) =>
  typeof icon === 'object' ? icon.svg : `<span class="vpi-social-${icon}"></span>`
const socialLabel = (icon) =>
  typeof icon === 'object' ? '' : icon.charAt(0).toUpperCase() + icon.slice(1)

// vpi-social-* 아이콘은 CSS 마스크(--icon)로 그려지는데, 그 CSS 가 항상
// 생성되지는 않는다. 기본 테마의 VPSocialLink 도 같은 이유로 onMounted 에서
// iconify URL 을 --icon 에 넣어주는 폴백을 갖고 있다. 여기서도 같이 처리한다.
// (VPSocialLink 를 그대로 쓰면 <a> 안에 <a> 가 되어 쓸 수 없다)
const socialIconEls = ref([])
onMounted(async () => {
  await nextTick()
  for (const wrap of socialIconEls.value) {
    const el = wrap?.firstElementChild
    if (!(el instanceof HTMLElement)) continue
    if (!el.className.startsWith('vpi-social-')) continue
    const cs = getComputedStyle(el)
    if ((cs.maskImage || cs.webkitMaskImage) !== 'none') continue
    const name = el.className.replace('vpi-social-', '').trim()
    el.style.setProperty(
      '--icon',
      `url('https://api.iconify.design/simple-icons/${name}.svg')`
    )
  }
})
</script>

<template>
  <div class="DrawerControls">
    <!-- 언어: 현재 언어 이름이 라벨. 탭하면 전체 목록을 인라인으로 펼친다. -->
    <div class="row-group" :class="{ open: langOpen }">
      <button
        type="button"
        class="row"
        :aria-label="theme.langMenuLabel || 'Change language'"
        :aria-expanded="langOpen"
        @click="langOpen = !langOpen"
      >
        <span class="vpi-languages row-icon" />
        <span class="row-label">{{ currentLabel }}</span>
        <span class="vpi-chevron-down row-affordance chevron" />
      </button>

      <ul class="lang-list">
        <li v-for="l in localeLinks" :key="l.key">
          <!-- 현재 언어는 눌러도 이동하지 않는다 (LanguageMenu 와 동일) -->
          <span v-if="l.current" class="lang-link current" aria-current="true">
            {{ l.text }}
          </span>
          <a v-else class="lang-link" :href="l.link">{{ l.text }}</a>
        </li>
      </ul>
    </div>

    <!-- 테마: 라벨 + 스위치 -->
    <div class="row static">
      <span class="vpi-sun row-icon" />
      <span class="row-label">{{ theme.darkModeSwitchLabel || 'Appearance' }}</span>
      <VPSwitchAppearance class="row-affordance" />
    </div>

    <!-- GitHub 등 외부 링크: 아이콘 + 라벨 + 외부 링크 표시 -->
    <a
      v-for="s in socialLinks"
      :key="s.link"
      class="row"
      :href="s.link"
      target="_blank"
      rel="noopener"
    >
      <span ref="socialIconEls" class="row-icon social" v-html="socialIcon(s.icon)" />
      <span class="row-label">{{ s.ariaLabel || socialLabel(s.icon) }}</span>
    </a>
  </div>
</template>

<style scoped>
/* 960px 이상에서는 이 컨트롤들이 헤더에 그대로 있으므로 드로어에서는 숨긴다. */
.DrawerControls {
  display: none;
}

@media (max-width: 959px) {
  .DrawerControls {
    display: block;
    margin-bottom: 16px;
    /* 문서 목차와 시각적으로 분리 */
    border-bottom: 1px solid var(--vp-c-divider);
    padding-bottom: 12px;
  }
}

/* 세 행의 공통 모양: 아이콘 + 라벨 + 우측 어포던스 */
.row {
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 6px;
  padding: 0 8px;
  height: 36px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  text-align: left;
  transition: background-color 0.25s;
}

.row:not(.static):hover {
  background-color: var(--vp-c-default-soft);
}

.row-icon {
  flex-shrink: 0;
  margin-right: 10px;
  font-size: 16px;
  color: var(--vp-c-text-2);
}

.row-icon.social :deep(svg),
.row-icon.social :deep(span) {
  display: block;
  width: 16px;
  height: 16px;
  fill: currentColor;
}

.row-label {
  flex-grow: 1;
}

.row-affordance {
  flex-shrink: 0;
  color: var(--vp-c-text-3);
}

.chevron {
  font-size: 14px;
  transition: transform 0.25s;
}

.row-group.open .chevron {
  transform: rotate(180deg);
}

/* 언어 목록: 기본은 접힘 */
.lang-list {
  display: none;
  padding: 2px 0 6px 34px;
}

.row-group.open .lang-list {
  display: block;
}

.lang-link {
  display: block;
  border-radius: 6px;
  padding: 0 8px;
  line-height: 32px;
  font-size: 13px;
  color: var(--vp-c-text-1);
  transition: background-color 0.25s, color 0.25s;
}

.lang-link:hover {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-default-soft);
}

.lang-link.current {
  color: var(--vp-c-brand-1);
  cursor: default;
}

.lang-link.current:hover {
  background-color: transparent;
}
</style>
