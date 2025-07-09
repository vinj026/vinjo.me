<script setup>
definePageMeta({
  layout: 'home-layout'
})
</script>
<template>
  <div class="flex flex-col gap-4 md:gap-6  w-full md:grid md:grid-cols-[max-content_auto] ">
    <Profile />
    <div class="flex flex-col gap-4 md:gap-6">
      <AboutMe />
      <LearningJournals />
    </div>
  </div>
</template>
