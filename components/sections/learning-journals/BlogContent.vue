<script setup>

const route = useRoute()
const { data: posts } = await useAsyncData(route.path, () => {
  return queryCollection('blog')
    .order('date', 'DESC')
    .all()
})

</script>
<template>
  <div v-for="post in posts" :key="post.path">
    <div class="flex flex-col gap-4 w-full">
      <div class="lg:flex lg:flex-row lg:w-full lg:gap-5 ">
        <p class="text-xs lg:text-lg">{{ post.date }}</p>
        <div>
          <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
          <div class="flex gap-2">
            <p v-for="tag in post.tags" :key="tag" class="bg-zinc-900 px-2 rounded-sm text-xs"> #{{ tag }}</p>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>
