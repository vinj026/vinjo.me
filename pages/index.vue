<script setup>
definePageMeta({
  layout: 'default'
})
</script>
<template>
  <div class="flex flex-col gap-4 md:gap-6 w-full  ">
    <AppHeader />
    <AboutMe />
    <div class="grid grid-cols-[2fr_1fr] gap-4">
      <ClientOnly>
        <MapViewer />
      </ClientOnly>
      <SocialMedia />
    </div>
    <LearningJournals />

    <MyToolkit />
  </div>
</template>
