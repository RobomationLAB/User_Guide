<!-- 기본 테마 Layout.vue 의 사본. theme/index.js 에서 이 파일을 Layout 으로 쓴다.
     원본과의 차이는 두 곳뿐이다:
       1) nav-bar-title-before 슬롯에 MenuButton (openSidebar 호출)
       2) sidebar-nav-before 슬롯에 DrawerControls (언어/테마/GitHub)
     슬롯 내용이 Layout 스코프에서 컴파일되기 때문에 openSidebar 에 접근할 수
     있고, 그래서 복사가 필요했다. theme/index.js 의 슬롯으로 넣으면 우리
     스코프에서 렌더되어 사이드바 상태에 닿지 못한다.
     VitePress 업그레이드 시 원본 변경사항을 다시 반영해야 한다. -->
<script setup lang="ts">
import { useRoute } from 'vitepress'
import { computed, provide, useSlots, watch } from 'vue'
import VPBackdrop from 'vitepress/dist/client/theme-default/components/VPBackdrop.vue'
import VPContent from 'vitepress/dist/client/theme-default/components/VPContent.vue'
import VPFooter from 'vitepress/dist/client/theme-default/components/VPFooter.vue'
import VPLocalNav from 'vitepress/dist/client/theme-default/components/VPLocalNav.vue'
import VPNav from 'vitepress/dist/client/theme-default/components/VPNav.vue'
import VPSidebar from 'vitepress/dist/client/theme-default/components/VPSidebar.vue'
import VPSkipLink from 'vitepress/dist/client/theme-default/components/VPSkipLink.vue'
import { useData } from 'vitepress/dist/client/theme-default/composables/data'
import { useCloseSidebarOnEscape, useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar'
import DrawerControls from './components/DrawerControls.vue'
import MenuButton from './components/MenuButton.vue'

const {
  isOpen: isSidebarOpen,
  open: openSidebar,
  close: closeSidebar,
  hasSidebar
} = useSidebar()

const route = useRoute()
watch(() => route.path, closeSidebar)

useCloseSidebarOnEscape(isSidebarOpen, closeSidebar)

const { frontmatter } = useData()

const slots = useSlots()
const heroImageSlotExists = computed(() => !!slots['home-hero-image'])

provide('hero-image-slot-exists', heroImageSlotExists)
</script>

<template>
  <!-- has-drawer: 이 페이지에 사이드바(= 모바일 드로어)가 있는지.
       문서가 아직 없는 언어는 사이드바가 렌더되지 않으므로(VPSidebar 의
       v-if="hasSidebar"), 언어/테마/GitHub 을 드로어로 옮기면 접근할 방법이
       없어진다. 그런 페이지에서는 헤더에 그대로 남겨둔다.
       VPNavBar 의 has-sidebar 클래스는 useMediaQuery 에 의존해 SSR 출력에
       없으므로 쓸 수 없다(로딩 시 깜빡임). -->
  <div
    v-if="frontmatter.layout !== false"
    class="Layout"
    :class="[frontmatter.pageClass, { 'has-drawer': hasSidebar }]"
  >
    <slot name="layout-top" />
    <VPSkipLink />
    <VPBackdrop class="backdrop" :show="isSidebarOpen" @click="closeSidebar" />
    <VPNav>
      <template #nav-bar-title-before><slot name="nav-bar-title-before" /></template>
      <template #nav-bar-title-after><slot name="nav-bar-title-after" /></template>
      <template #nav-bar-content-before><slot name="nav-bar-content-before" /></template>
      <template #nav-bar-content-after><slot name="nav-bar-content-after" /></template>
      <template #nav-screen-content-before><slot name="nav-screen-content-before" /></template>
      <template #nav-screen-content-after><slot name="nav-screen-content-after" /></template>
    </VPNav>

    <!-- 메뉴 버튼은 VPNav 의 형제로 둔다.
         nav-bar-title-before 슬롯은 VPNavBarTitle 의 <a href="/"> 내부에
         렌더되기 때문에, 거기에 넣으면 클릭이 홈 이동으로 먹히고 로고도
         버튼 옆으로 밀린다. 헤더 좌측에 겹쳐 놓는다 (MenuButton.vue 스타일). -->
    <MenuButton @click="openSidebar" />
    <VPLocalNav :open="isSidebarOpen" @open-menu="openSidebar" />

    <VPSidebar :open="isSidebarOpen">
      <template #sidebar-nav-before>
        <DrawerControls />
        <slot name="sidebar-nav-before" />
      </template>
      <template #sidebar-nav-after><slot name="sidebar-nav-after" /></template>
    </VPSidebar>

    <VPContent>
      <template #page-top><slot name="page-top" /></template>
      <template #page-bottom><slot name="page-bottom" /></template>

      <template #not-found><slot name="not-found" /></template>
      <template #home-hero-before><slot name="home-hero-before" /></template>
      <template #home-hero-info-before><slot name="home-hero-info-before" /></template>
      <template #home-hero-info><slot name="home-hero-info" /></template>
      <template #home-hero-info-after><slot name="home-hero-info-after" /></template>
      <template #home-hero-actions-after><slot name="home-hero-actions-after" /></template>
      <template #home-hero-image><slot name="home-hero-image" /></template>
      <template #home-hero-after><slot name="home-hero-after" /></template>
      <template #home-features-before><slot name="home-features-before" /></template>
      <template #home-features-after><slot name="home-features-after" /></template>

      <template #doc-footer-before><slot name="doc-footer-before" /></template>
      <template #doc-before><slot name="doc-before" /></template>
      <template #doc-after><slot name="doc-after" /></template>
      <template #doc-top><slot name="doc-top" /></template>
      <template #doc-bottom><slot name="doc-bottom" /></template>

      <template #aside-top><slot name="aside-top" /></template>
      <template #aside-bottom><slot name="aside-bottom" /></template>
      <template #aside-outline-before><slot name="aside-outline-before" /></template>
      <template #aside-outline-after><slot name="aside-outline-after" /></template>
      <template #aside-ads-before><slot name="aside-ads-before" /></template>
      <template #aside-ads-after><slot name="aside-ads-after" /></template>
    </VPContent>

    <VPFooter />
    <slot name="layout-bottom" />
  </div>
  <Content v-else />
</template>

<style scoped>
.Layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
