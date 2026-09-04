<script setup>
import { computed, ref, watch } from 'vue'
import { useData } from 'vitepress'

const props = defineProps({ module: String, id: String })

// lang 이 아니라 localeIndex 다.
// lang 은 BCP-47(zh-Hans)이고 이미지 디렉터리는 앱의 언어 코드(zh-hans)를 쓴다.
const { localeIndex } = useData()

// 앱의 MSG_FALLBACK_LANGS 와 같은 체인: 현재 → en → ko
const chain = computed(() => [...new Set([localeIndex.value, 'en', 'ko'])])
const step = ref(0)
watch(chain, () => { step.value = 0 })

const src = computed(() =>
  `/images/${chain.value[step.value]}/${props.module}/${props.id}.png`)

// 그 언어 이미지가 없으면 다음 언어로. ko 까지 없으면 진짜 누락이다.
const onError = () => { if (step.value < chain.value.length - 1) step.value++ }
</script>

<template>
  <img :src="src" :alt="id" loading="lazy" class="image" @error="onError" />
</template>

<style scoped>
.image { display: block; margin: 0.6rem 0; max-width: 100%; height: auto; }
</style>