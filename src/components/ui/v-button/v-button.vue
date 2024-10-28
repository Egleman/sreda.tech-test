<script setup lang="ts">
interface Props {
  color?: string
}
const props = withDefaults(defineProps<Props>(), {
  color: ''
})
const { color } = toRefs(props);
</script>
<template>
  <button :class="`${$style.button} ${color ? $style[`button_${color}`] : ''}`">
    <slot/>
  </button>
</template>
<style module scoped>
@import './v-button.css';
</style>