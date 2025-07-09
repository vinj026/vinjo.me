<script setup>
defineProps({
  title: String,
  icon: Object,
})
</script>
<template>
  <div class="p-1 rounded-sm bg-gray-500 w-fit">
    <component :is="icon" class="w-4 h-4" />
  </div>
</template>
