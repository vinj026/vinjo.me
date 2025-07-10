<script setup>
definePageMeta({
  layout: "default"
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
  <div class="flex flex-col items-center w-full gap-8 mt-16 ">
    <div class="w-full">
      <h1>My Journal</h1>
    </div>
    <div class="flex flex-col w-full gap-8">

      <div v-for="year in Object.keys(groupedByYear).sort((a, b) => b - a)" :key="year"
        class="flex flex-col w-full gap-2">
        <h2>{{ year }}</h2>

        <ul class="pl-5">
          <li v-for="post in groupedByYear[year]" :key="post.path" class="flex justify-between gap-10 ">
            <NuxtLink :to="post.path" class="hover:underline">
              {{ post.title }}
            </NuxtLink>
            <p>{{ post.date }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
