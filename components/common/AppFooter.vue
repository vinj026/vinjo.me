<template>
  <footer class="w-full py-6 text-center text-xs text-black-700 mt-16">
    <p>&copy; {{ currentYear }} Kevin Jonathan. All rights reserved.</p>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
