<script setup>
defineProps(
  {
    shownpost: Array,
    allpost: Array
  }
)
</script>

<template>
  <div class="flex flex-col items-center gap-2 mt-4 text-xs text-gray-400">
    <p>
      Displaying <span class="text-white font-semibold">{{ shownpost.length }}</span> of
      <span class="text-white font-semibold">{{ allpost.length }}</span> journal entries
    </p>
    <NuxtLink to="/blog" class="text-white text-xs hover:underline hover:text-blue-300 transition duration-200">
      See all posts →
    </NuxtLink>
  </div>
</template>
