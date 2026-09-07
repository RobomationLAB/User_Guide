<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import VPFlyout from 'vitepress/dist/client/theme-default/components/VPFlyout.vue'

// 기본 테마의 VPNavBarTranslations 를 대체한다 (config.js 의 vite.resolve.alias).
//
// 기본 동작: 현재 언어는 클릭 불가한 제목으로만 표시되고, 목록에는 나머지 언어만
// 나온다 (useLangs 가 현재 언어를 제외한다).
// 원하는 동작: 제목 + 구분선 아래에 현재 언어를 포함한 전체 목록을 두고,
// 현재 언어를 누르면 아무 일도 일어나지 않게 한다.
//
// useLangs 에 현재 언어를 포함시키는 옵션이 없어 링크 계산을 다시 구현했다.
const { site, localeIndex, page, theme, hash } = useData()

const currentKey = computed(() => localeIndex.value)
const currentLabel = computed(() => site.value.locales[currentKey.value]?.label)

// 로케일 루트 경로 (예: '/ko/')
const localeRoot = (key) =>
  site.value.locales[key]?.link || (key === 'root' ? '/' : `/${key}/`)

// 현재 문서의 로케일 루트 기준 상대 경로 (예: 'common/Logic.md')
const relPath = computed(() =>
  page.value.relativePath.slice(localeRoot(currentKey.value).length - 1))

const links = computed(() =>
  Object.keys(site.value.locales).map((key) => {
    const base = localeRoot(key)
    // i18nRouting 이 꺼져 있으면 각 언어의 첫 페이지로 보낸다 (기본 테마와 동일)
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
</script>

<template>
  <VPFlyout
    v-if="links.length > 1 && currentLabel"
    class="VPNavBarTranslations"
    icon="vpi-languages"
    :button="currentLabel"
    :label="theme.langMenuLabel || 'Change language'"
  >
    <div class="items">
      <!-- 현재 언어 이름은 버튼(:button)에 표시하므로 여기 제목은 두지 않는다.
           단, 목록 안의 현재 언어 항목은 유지한다 (선택 목록의 완결성). -->
      <template v-for="l in links" :key="l.key">
        <!-- 현재 언어: 같은 페이지로 다시 이동하는 것을 막는다 -->
        <button v-if="l.current" class="item current" type="button" aria-current="true">
          {{ l.text }}
        </button>
        <a v-else class="item" :href="l.link">{{ l.text }}</a>
      </template>
    </div>
  </VPFlyout>
</template>

<style scoped>
/* 지구 아이콘과 언어 이름 사이 여백.
 * VPFlyout 이 `.option-icon { margin-right: 0 }` 을 명시하고 있어 그대로 두면
 * 둘이 딱 붙는다 (chevron 쪽은 margin-left: 4px 가 있어 여백이 있다).
 * :deep() 로 자식 컴포넌트 내부를 지정한다. */
.VPNavBarTranslations :deep(.option-icon) {
  margin-right: 6px;
}

/* 모든 폭에서 표시한다.
 * 기본 테마는 1280px 미만에서 이걸 감추고 '...'(VPNavBarExtra) 나 햄버거
 * 메뉴로 몰아넣지만, 이 사이트는 언어/테마/깃허브를 항상 아이콘으로 노출한다.
 * (custom.css §9 에서 '...' 와 햄버거를 감춘다) */
.VPNavBarTranslations {
  display: flex;
  align-items: center;
}



/* VPMenuLink 의 .link 스타일과 맞춘다 */
.item {
  display: block;
  width: 100%;
  border-radius: 6px;
  padding: 0 12px;
  line-height: 32px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  text-align: left;
  white-space: nowrap;
  transition: background-color 0.25s, color 0.25s;
}

.item:hover {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-default-soft);
}

/* 현재 언어는 눌러도 동작하지 않으므로 커서로도 알려준다 */
.item.current {
  color: var(--vp-c-brand-1);
  cursor: default;
}

.item.current:hover {
  background-color: transparent;
}
</style>
