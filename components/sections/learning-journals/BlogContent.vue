<script setup>

const route = useRoute()
const { data: posts } = await useAsyncData(route.path, () => {
  return queryCollection('blog')
    .order('date', 'DESC').limit(3)
    .all()
})

</script>

<template>
  <div>
    <template v-if="posts.length > 0">
      <div v-for="post in posts" :key="post.path" class="flex flex-col gap-4 w-full">
        <div class="flex flex-col">
          <p class="text-xs pt-2 sm:text-sm">{{ post.date }}</p>
          <NuxtLink :to="post.path" class="flex items-start justify-between text-lg text-gray-100 font-semibold">
            {{ post.title }}
            <LucideChevronRight class="mt-1" />
          </NuxtLink>
        </div>
        <div class="flex items-center gap-2">
          <p v-for="tag in post.tags" :key="tag" class="bg-zinc-900 px-2 h-fit rounded-sm text-xs">
            #{{ tag }}
          </p>
        </div>
        <hr class="text-zinc-800 mt-2">
      </div>
    </template>

    <template v-else>
      <div class="text-center text-sm text-zinc-500 py-10 italic">
        No posts found. Stay tuned for updates!
      </div>
    </template>
  </div>
</template>
