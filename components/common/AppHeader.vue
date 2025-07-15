<template>
  <header class="w-full">
    <div class="flex flex-col w-full h-fit ">
      <ClientOnly>
        <div class="relative size-48 w-full overflow-hidden rounded-lg border bg-background">
          <FlickeringGrid
            class="relative inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
            :square-size="4" :grid-gap="6" color="#6a6a6a" :max-opacity="0.5" :flicker-chance="0.2" :width="800"
            :height="800" />
        </div>
      </ClientOnly>
      <div class="flex flex-col justify-between p-2">
        <div class="relative">
          <NuxtImg format="webp" src="/images/profilepic.png" alt="Profile Picture"
            class="absolute bottom-0 left-4 translate-y-[30%] w-[120px] h-[120px] object-cover object-center rounded-full border-2 border" />
        </div>
      </div>
      <div class="h-[40px]" />
      <div class="flex flex-col w-full">
        <div class="flex items-center gap-2">
          <h1 class="">Kevin Jonathan</h1>
          <LucideBadgeCheck class="w-6" />
        </div>
        <p class>IT Support | Helpdesk & Desktop Support | Network Operations</p>
      </div>
    </div>
  </header>
</template>
