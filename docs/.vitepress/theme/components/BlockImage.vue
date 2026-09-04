<script setup>
import { computed, ref, watch } from 'vue'
import { useData } from 'vitepress'

const props = defineProps({
  module: String,
  id: String,

  // 확장자. 문서 작성자가 아는 값이라 추측하지 않는다.
  ext: { type: String, default: 'png' },

  // 텍스트 중간에 끼우는 아이콘용. 기본은 문단 사이에 놓는 블록 이미지.
  inline: Boolean,

  // 여러 장을 한 줄에 나란히 놓을 때. 원본 크기를 그대로 유지한다.
  // (inline 은 글자 높이에 맞추는 아이콘용이라 스크린샷에는 맞지 않다)
  row: Boolean,
})

// lang 이 아니라 localeIndex 다.
// lang 은 BCP-47(zh-Hans)이고 이미지 디렉터리는 앱의 언어 코드(zh-hans)를 쓴다.
const { localeIndex } = useData()

// 앱의 MSG_FALLBACK_LANGS 와 같은 체인: 현재 → en → ko
const chain = computed(() => [...new Set([localeIndex.value, 'en', 'ko'])])
const step = ref(0)
watch(chain, () => { step.value = 0 })

const src = computed(() =>
  `/images/${chain.value[step.value]}/${props.module}/${props.id}.${props.ext}`)

// 그 언어 이미지가 없으면 다음 언어로. ko 까지 없으면 진짜 누락이다.
const onError = () => { if (step.value < chain.value.length - 1) step.value++ }
</script>

<template>
  <img
    :src="src"
    :alt="id"
    loading="lazy"
    :class="inline ? 'inline-icon' : row ? 'row' : 'image'"
    @error="onError"
  />
</template>

<style scoped>
.image { display: block; margin: 0.6rem 0; max-width: 100%; height: auto; }

/* 여러 장을 한 줄에. 원본 크기를 유지하면서 가로로 흐르게 하고,
 * 폭이 넘치면 다음 줄로 접힌다.
 */
.row {
  display: inline-block;
  margin: 0.6rem 6px 0.6rem 0;
  max-width: 100%;
  height: auto;
  vertical-align: top;
}

/* 텍스트 중간에 끼우는 아이콘. 높이를 em 으로 둬서 주변 글자 크기를 따라가고,
 * vertical-align 로 베이스라인을 보정한다. 
 */
.inline-icon {
  display: inline-block;
  height: 1.2em;
  vertical-align: -0.2em;
  margin: 0 2px;
}
</style>
