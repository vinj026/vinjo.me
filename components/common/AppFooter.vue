<template>
  <div class="w-full py-6 text-center   mt-16 ">
    <p class="text-xs">&copy; {{ currentYear }} Kevin Jonathan. All rights reserved.</p>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
