<script setup>

const menu = ref([
  {
    name: "home",
    link: "/"
  },
  {
    name: "my journal",
    link: "/"
  },
  {
    name: "about",
    link: "/"
  }
])

</script>

<template>
  <nav class="sticky top-0 z-50 w-full backdrop-blur py-4">
    <div class="flex w-full max-w-6xl mx-auto px-4 justify-between items-center">
      <NuxtImg src="/images/kejo.svg" class="w-10" />

      <ul class="flex items-center gap-6">
        <li v-for="item in menu" :key="item.name" class="relative py-1">
          <NuxtLink :to="item.link"
            class="text-sm text-zinc-300 hover:text-white transition-colors duration-300 block relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
            {{ item.name }}
          </NuxtLink>
        </li>

        <!-- CV Button -->
        <li>
          <NuxtLink to="/files/cv.pdf" target="_blank" rel="noopener noreferrer"
            class="flex items-center gap-2 px-3 py-1 rounded text-sm text-white bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300">
            <LucideFileText class="w-4 h-4" />
            <span>My CV</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
