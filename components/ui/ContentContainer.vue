<script setup>
defineProps({
  title: String
})
</script>
<template>
  <div class="flex flex-col gap-3 w-full">
    <h2 class="underline">{{ title }}</h2>
    <slot />
  </div>
</template>
