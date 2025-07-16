<script setup>
definePageMeta({
  layout: "blog-layout"
})

const { data: posts } = await useAsyncData(() => queryCollection('blog').all())
console.log(posts.value)


const groupedByYear = computed(() => {
  if (!posts.value) return {}

  return posts.value.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear()
    acc[year] = acc[year] || []
    acc[year].push(post)
    return acc
  }, {})
})

console.log(groupedByYear.value)
</script>


<template>
  <div class="flex flex-col items-center w-full gap- mt-16">
    <div class="w-full">
      <h1 class="text-2xl font-semibold">My Journal</h1>
    </div>

    <div class="flex flex-col w-full gap-8">
      <template v-if="Object.keys(groupedByYear).length > 0">
        <div
v-for="year in Object.keys(groupedByYear).sort((a, b) => b - a)" :key="year"
          class="flex flex-col w-full gap-2">
          <h2 class="text-lg font-medium text-zinc-100">{{ year }}</h2>
          <ul class="pl-4">
            <li v-for="post in groupedByYear[year]" :key="post.path" class="flex justify-between gap-4 py-1 text-sm">
              <NuxtLink :to="post.path">
                {{ post.title }}
              </NuxtLink>
              <p class="text-zinc-500">{{ post.date }}</p>
            </li>
          </ul>
        </div>
      </template>

      <template v-else>
        <div class="w-full py-16 text-center text-zinc-500 italic text-sm">
          No journal entries found yet.
        </div>
      </template>
    </div>
  </div>
</template>
