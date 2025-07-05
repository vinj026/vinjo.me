<template>
  <aside class="flex flex-col w-full h-fit border border-zinc-800 p-2 rounded-2xl md:max-w-[250px]">
    <div class="relative">
      <div class="w-full relative">
        <NuxtImg
src="/images/banner1.png" alt="Banner"
          class="h-[100px] w-full object-cover object-center rounded-2xl border-white-700" />
      </div>
    </div>
    <div class="flex flex-col justify-between">
      <div class="relative">
        <NuxtImg
src="/images/profilepic.png" alt="Profile Picture"
          class="absolute bottom-0 left-5 translate-y-[30%] w-[100px] h-[100px] object-cover object-center rounded-full border-1 border-white-700" />
      </div>
      <div class="h-[48px]" />
      <div class="flex flex-col w-full">
        <h1 class="lg:text-xl">Kevin Jonathan</h1>
        <p class="lg:text-sm">IT Support | Helpdesk & Desktop Support | Network Operations</p>
        <div class="flex items-center mt-4 gap-1 ">
          <LucideMapPin class="w-3 text-gray-400" />
          <p class="text-xs text-gray-400 ">Balikpapan, Indonesia</p>
        </div>
      </div>
    </div>
  </aside>
</template>
