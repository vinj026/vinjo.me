<script setup>
const route = useRoute()
const { data: posts } = await useAsyncData(route.path, () => {
  return queryCollection('blog')
    .order('date', 'DESC')
    .all()
})
</script>

<template>
  <div class="flex flex-col md:flex-row gap-8 p-6">
    <main class="flex-1">
      <h1 class="text-2xl font-bold mb-4">📝 Semua Post</h1>
      <ul class="space-y-3">
        <li v-for="post in posts" :key="post.path">
          <NuxtLink :to="post.path" class="text-lg text-blue-700 hover:underline">
            {{ post.title }}
          </NuxtLink>
          <img :src="post.img" alt="" class="w-lg">
          <p class="text-sm text-gray-500">{{ post.description }}</p>
        </li>
      </ul>
    </main>
  </div>
</template>
