<template>
  <div class="parent flex items-center flex-wrap text-gray-400 font-semibold">
    <div v-for="(item, index) in data" :key="index">{{ item }}</div>
  </div>
</template>

<script lang='ts' setup>
import type { TFormattedDataObject } from '../pre-assessment-task.d.ts'

const props = defineProps<{
  data: TFormattedDataObject
  separator?: string
}>()

const separator = props.separator?.startsWith('/src') ? `url('${props.separator}')` : `'${props.separator || '•'}'`
</script>

<style lang="scss">
.parent > div:not(:first-child)::before {
  content: v-bind(separator);
  @apply ml-1.5 mr-1.5;
}
</style>
