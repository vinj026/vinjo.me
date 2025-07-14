<script setup>
defineProps(
  {
    shownpost: Array,
    allpost: Array
  }
)
</script>

<template>
  <div class="flex flex-col items-center gap-2 mt-4 text-xs text-zinc-400">
    <p class="text-xs">
      Displaying <span class=" text-zinc-200  font-black">{{ shownpost.length }}</span> of
      <span class=" text-zinc-200 font-black">{{ allpost.length }}</span> journal entries
    </p>
    <NuxtLink to="/blog" class=" hover:underline hover:text-blue-300 transition duration-200">
      See all posts →
    </NuxtLink>
  </div>
</template>
