<template>
  <li>
    <span class="mb-4 font-bold text-gray-600">{{ node.email }}</span>
    <ul v-if="node.children && node.children.length" class="ml-16 list-disc">
      <TreeNode
        v-for="child in node.children"
        :key="child.id"
        :node="child"
      />
    </ul>
  </li>
</template>

<script lang="ts" setup>
defineProps<{
  node: any
}>()
</script>
