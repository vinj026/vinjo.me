<template>
  <div class="flex flex-col gap-6 w-full  ">
    <AboutMe />
    <div class="flex flex-col sm:grid sm:grid-cols-[2fr_1fr] gap-4 ">
      <ClientOnly>
        <MapViewer />
      </ClientOnly>
      <SocialMedia />
    </div>
    <MyToolkit />
    <LearningJournals />
  </div>


</template>
