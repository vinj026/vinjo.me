<template>
  <footer class="w-full py-6 text-center   mt-16 ">
    <p class="text-xs">&copy; {{ currentYear }} Kevin Jonathan. All rights reserved.</p>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
