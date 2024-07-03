<script setup lang="ts">
import { computed } from 'vue'

export type Props = {
  show: boolean,
  size: 'small' | 'medium' | 'large'
  text: string
  theme: 'light' | 'dark'
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
  size: 'medium',
  text: '',
  theme: 'light'
})

// TODO: Will be added px option
const spinnerSize = computed(() => {
  const sizes = {
    small: 10,
    medium: 12,
    large: 16
  }
  return sizes[props.size]
})

const textColor = computed(() => {
  return props.theme === 'light' ? 'black' : 'white'
})

</script>

<template>
  <div
    data-test="loader"
    v-if="show"
    class="flex flex-col items-center justify-center space-y-1"
  >
    <div
      data-test="spinner"
      class="border-4 border-t-4 border-t-primary rounded-full animate-spin ease-linear"
      :class="`w-${spinnerSize} h-${spinnerSize}`"
    />
    <div
      data-test="loader-text"
      v-if="!!text"
      :class="`text-${textColor}`"
    >
      {{ text }}
    </div>
  </div>
</template>