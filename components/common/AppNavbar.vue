<script setup>
import { ref } from 'vue'
import { LucideFileText, LucideMenu } from 'lucide-vue-next'

const isOpen = ref(false)

const menu = ref([
  { name: 'home', link: '/' },
  { name: 'my journal', link: '/blog' },
  { name: 'about', link: '/' }
])

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <nav class="sticky top-0 z-50 w-full backdrop-blur py-4 bg-background/70">
    <div class="flex w-full max-w-6xl mx-auto px-4 justify-between items-center">
      <!-- Logo -->
      <NuxtImg src="/images/kejo.svg" class="w-10" />

      <!-- Burger (mobile) -->
      <button class="sm:hidden text-zinc-300 hover:text-white" aria-label="Toggle Menu" @click="isOpen = !isOpen">
        <LucideMenu :class="['w-6 h-6', isOpen && 'text-white']" />
      </button>

      <!-- Menu (desktop) -->
      <ul class="hidden sm:flex items-center gap-6">
        <li v-for="item in menu" :key="item.name" class="relative py-1">
          <NuxtLink :to="item.link"
            class="text-sm text-zinc-300 hover:text-white transition-colors duration-300 block relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
            {{ item.name }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/files/cv.pdf" target="_blank" rel="noopener noreferrer"
            class="flex items-center gap-2 px-3 py-1 rounded text-sm text-white bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300">
            <LucideFileText class="w-4 h-4" />
            <span>My CV</span>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Menu (mobile) -->
    <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
      <ul v-if="isOpen" class="sm:hidden flex flex-col gap-3 px-6 mt-4">
        <li v-for="item in menu" :key="item.name" @click="closeMenu">
          <NuxtLink :to="item.link" class="block text-zinc-200 hover:text-white text-sm py-1">
            {{ item.name }}
          </NuxtLink>
        </li>
        <li @click="closeMenu">
          <NuxtLink to="/files/cv.pdf" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-3 py-1 rounded text-sm text-white bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300">
            <LucideFileText class="w-4 h-4" />
            <span>My CV</span>
          </NuxtLink>
        </li>
      </ul>
    </Transition>
  </nav>
</template>
