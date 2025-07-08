<script setup>

</script>
<template>
  <nav class="sticky top-0 py-4 w-full backdrop-blur ">
    <div class="flex w-full justify-between items-center">
      <NuxtImg src="/images/kejo.svg" class="w-10" />
      <ul class="flex gap-4 rounded-xl text-zinc-300">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog">writing</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">about</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
