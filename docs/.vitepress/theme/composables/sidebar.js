// 기본 테마 composables/sidebar.js 의 사본. config.js 의 vite.resolve.alias 로
// 교체된다. 원본과의 차이는 useSidebarControl 의 collapsed 계산 한 곳뿐이다.
// VitePress 업그레이드 시 원본 변경사항을 다시 반영해야 한다.
import { useMediaQuery } from '@vueuse/core';
import { computed, onMounted, onUnmounted, ref, watch, watchEffect, watchPostEffect } from 'vue';
import { isActive } from 'vitepress/dist/client/shared';
import { hasActiveLink as containsActiveLink, getSidebar, getSidebarGroups } from 'vitepress/dist/client/theme-default/support/sidebar';
import { useData } from 'vitepress/dist/client/theme-default/composables/data';
export function useSidebar() {
    const { frontmatter, page, theme } = useData();
    const is960 = useMediaQuery('(min-width: 960px)');
    const isOpen = ref(false);
    const _sidebar = computed(() => {
        const sidebarConfig = theme.value.sidebar;
        const relativePath = page.value.relativePath;
        return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
    });
    const sidebar = ref(_sidebar.value);
    watch(_sidebar, (next, prev) => {
        if (JSON.stringify(next) !== JSON.stringify(prev))
            sidebar.value = _sidebar.value;
    });
    const hasSidebar = computed(() => {
        return (frontmatter.value.sidebar !== false &&
            sidebar.value.length > 0 &&
            frontmatter.value.layout !== 'home');
    });
    const leftAside = computed(() => {
        if (hasAside)
            return frontmatter.value.aside == null
                ? theme.value.aside === 'left'
                : frontmatter.value.aside === 'left';
        return false;
    });
    const hasAside = computed(() => {
        if (frontmatter.value.layout === 'home')
            return false;
        if (frontmatter.value.aside != null)
            return !!frontmatter.value.aside;
        return theme.value.aside !== false;
    });
    const isSidebarEnabled = computed(() => hasSidebar.value && is960.value);
    const sidebarGroups = computed(() => {
        return hasSidebar.value ? getSidebarGroups(sidebar.value) : [];
    });
    function open() {
        isOpen.value = true;
    }
    function close() {
        isOpen.value = false;
    }
    function toggle() {
        isOpen.value ? close() : open();
    }
    return {
        isOpen,
        sidebar,
        sidebarGroups,
        hasSidebar,
        hasAside,
        leftAside,
        isSidebarEnabled,
        open,
        close,
        toggle
    };
}
/**
 * a11y: cache the element that opened the Sidebar (the menu button) then
 * focus that button again when Menu is closed with Escape key.
 */
export function useCloseSidebarOnEscape(isOpen, close) {
    let triggerElement;
    watchEffect(() => {
        triggerElement = isOpen.value
            ? document.activeElement
            : undefined;
    });
    onMounted(() => {
        window.addEventListener('keyup', onEscape);
    });
    onUnmounted(() => {
        window.removeEventListener('keyup', onEscape);
    });
    function onEscape(e) {
        if (e.key === 'Escape' && isOpen.value) {
            close();
            triggerElement?.focus();
        }
    }
}
export function useSidebarControl(item) {
    const { page, hash } = useData();
    const collapsed = ref(false);
    const collapsible = computed(() => {
        return item.value.collapsed != null;
    });
    const isLink = computed(() => {
        return !!item.value.link;
    });
    const isActiveLink = ref(false);
    const updateIsActiveLink = () => {
        isActiveLink.value = isActive(page.value.relativePath, item.value.link);
    };
    watch([page, item, hash], updateIsActiveLink);
    onMounted(updateIsActiveLink);
    const hasActiveLink = computed(() => {
        if (isActiveLink.value) {
            return true;
        }
        return item.value.items
            ? containsActiveLink(page.value.relativePath, item.value.items)
            : false;
    });
    const hasChildren = computed(() => {
        return !!(item.value.items && item.value.items.length);
    });
    // [수정] 원본은 이펙트가 둘로 나뉘어 있고, 두 번째가 collapsed 를 false 로만
    // 바꾼다. 그래서 한 번 펼쳐진 항목은 다른 페이지로 이동해도 계속 펼쳐진 채
    // 남았다 (HamsterS → Hamster 로 가도 HamsterS 하위가 열려 있음).
    //
    // 하나로 합쳐 isActiveLink / hasActiveLink 변화에 따라 매번 다시 계산한다.
    // - 보고 있는 페이지의 항목만 펼쳐진다
    // - 벗어나면 설정된 기본값(item.collapsed)으로 되돌아가 접힌다
    // - 홈처럼 active 인 페이지가 없으면 전부 접힌다
    //
    // 부수효과: 사용자가 손으로 접은 카테고리도 페이지 이동 시 기본값으로
    // 돌아간다. 카테고리는 collapsed: false 로 설정되어 있어 다시 펼쳐진다.
    watchPostEffect(() => {
        if (!collapsible.value) {
            collapsed.value = false;
            return;
        }
        collapsed.value = (isActiveLink.value || hasActiveLink.value)
            ? false
            : !!item.value.collapsed;
    });
    function toggle() {
        if (collapsible.value) {
            collapsed.value = !collapsed.value;
        }
    }
    return {
        collapsed,
        collapsible,
        isLink,
        isActiveLink,
        hasActiveLink,
        hasChildren,
        toggle
    };
}
