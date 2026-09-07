<script setup>
import { useData } from 'vitepress'
import { useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar'

// 헤더 좌측 메뉴 버튼. 클릭 핸들러는 부모(Layout)가 붙인다.
// 루트가 <button> 이라 @click 이 그대로 여기로 떨어진다.
const { theme } = useData()

// 열 드로어가 없는 페이지(문서가 없는 언어 등)에서는 버튼 자체를 두지 않는다.
// hasSidebar 는 페이지 데이터만으로 계산되어 SSR 에서도 정확하다.
const { hasSidebar } = useSidebar()
</script>

<template>
  <button
    v-if="hasSidebar"
    type="button"
    class="MenuButton"
    :aria-label="theme.sidebarMenuLabel || 'Menu'"
    aria-controls="VPSidebarNav"
  >
    <span class="vpi-align-left icon" />
  </button>
</template>

<style scoped>
/* 960px 이상에서는 사이드바가 항상 보이므로 이 버튼이 필요 없다. */
.MenuButton {
  display: none;
}

@media (max-width: 959px) {
  /* 헤더 좌측에 겹쳐 놓는다. VPNav(z-index 30) 위에 와야 클릭이 먹는다.
   * 모바일에서 VPNav 는 sticky 로 상단에 고정되므로 fixed 와 위치가 맞는다. */
  .MenuButton {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: calc((var(--vp-nav-height) - 36px) / 2);
    left: 14px;
    z-index: 31;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    color: var(--vp-c-text-1);
    transition: background-color 0.25s;
  }

  .MenuButton:hover {
    background-color: var(--vp-c-default-soft);
  }
}

.icon {
  font-size: 20px;
}
</style>
