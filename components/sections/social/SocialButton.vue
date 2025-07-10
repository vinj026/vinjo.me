<script setup>
defineProps({
  title: String,
  icon: Object,
  username: String,
  link: String
})
</script>
<template>

  <div class="relative w-fit">
    <a
:href="link" target="_blank" rel="noopener noreferrer"
      class="relative inline-block rounded-md py-1 px-2 group overflow-hidden">
      <span class="absolute inset-0 w-0 bg-black-800 transition-all duration-300 ease-out group-hover:w-full z-0" />

      <div class="relative z-10 flex items-center gap-2 text-white group-hover:text-white">
        <component :is="icon" class="w-5 h-5" />
        <p>{{ username }}</p>
      </div>
    </a>
  </div>

</template>
