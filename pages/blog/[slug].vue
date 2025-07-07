<script setup>
definePageMeta({
  layout: 'home-layout'
})
const route = useRoute()

const { data: post } = await useAsyncData(() =>
  queryCollection('blog').path(`/blog/${route.params.slug}`).first()
)
useSeoMeta({
  title: post.value?.title,
  description: post.value?.description
})

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

</script>

<template>

  <div class="flex flex-col gap-2 w-full sm:max-w-2xl">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <h1 class="lg:text-4xl">{{ post.title }}</h1>
        <p class="text-gray-500 text-sm">
          Posted on {{ new Date(post.date).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }) }}
          - {{ post.readingTime }} Min Read
        </p>
      </div>
      <div class="flex gap-2">
        <p v-for="tag in post.tags" :key="tag" class="bg-zinc-700 px-2 rounded-sm text-sm"> #{{ tag }}</p>
      </div>
      <hr>
    </div>

    <div v-if="post" class="prose prose-sm lg:prose-base p-0 dark:prose-invert max-w-none">
      <ContentRenderer :value="post" class="text-justify" />
    </div>

    <p v-else>Post not found</p>

    <button class=" self-end" @click="scrollToTop">

      <p class="flex text-xs items-center gap-2">
        <LucideArrowUp class="w-4" />Back To Top
      </p>
    </button>
  </div>
</template>
