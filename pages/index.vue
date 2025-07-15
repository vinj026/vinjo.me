<script setup>
definePageMeta({
  layout: 'default'
})
</script>
<template>
  <div class="flex flex-col gap-4 md:gap-6 w-full  ">
    <AppHeader />
    <AboutMe />
    <div class="flex flex-col sm:grid sm:grid-cols-[2fr_1fr] gap-4">
      <ClientOnly>
        <MapViewer />
      </ClientOnly>
      <SocialMedia />
    </div>
    <MyToolkit />
    <LearningJournals />
  </div>
</template>
