<template>
  <header class="w-full">
    <div class="flex flex-col w-full h-fit ">
      <div class="relative">
        <NuxtImg src="/images/banner1.png" alt="Banner"
          class="h-[150px] w-full object-cover object-center rounded-b-2xl border-white-700" />
      </div>
      <div class="flex flex-col justify-between p-2">
        <div class="relative">
          <NuxtImg src="/images/profilepic.png" alt="Profile Picture"
            class="absolute bottom-0 left-4 translate-y-[30%] w-[120px] h-[120px] object-cover object-center rounded-full border-4 border-[#080808]" />
        </div>
      </div>
      <div class="h-[40px]" />
      <div class="flex flex-col w-full">
        <div class="flex items-center gap-2">
          <h1 class="">Kevin Jonathan</h1>
          <LucideBadgeCheck class="w-6" />
        </div>
        <p class="">IT Support | Helpdesk & Desktop Support | Network Operations</p>
        <div class="flex w-full items-center mt-4 gap-1 ">
          <LucideMapPin class="w-3 text-gray-400" />
          <p class="text-gray-400 ">Balikpapan, Indonesia</p>
        </div>
      </div>
    </div>
  </header>
</template>
