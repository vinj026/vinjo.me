<script setup>
defineProps({
  title: String
})
</script>
<template>
  <div class="flex flex-col gap-2 w-full">
    <h1>{{ title }}</h1>
    <slot />
  </div>
</template>
