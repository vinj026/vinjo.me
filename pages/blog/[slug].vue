<script setup>
definePageMeta({ layout: 'default' })

const route = useRoute()

const { data: post } = await useAsyncData(() =>
  queryCollection('blog').path(`/blog/${route.params.slug}`).first()
)

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="flex flex-col w-full gap-6">
    <template v-if="post">
      <header class="flex flex-col gap-2">
        <h1 class="text-2xl lg:text-4xl font-semibold">{{ post.title }}</h1>
        <p class="text-sm text-gray-500">
          {{ new Date(post.date).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }) }}
          · {{ post.readingTime }} min read
        </p>
        <div class="flex flex-wrap gap-2 mt-2">
          <span v-for="tag in post.tags" :key="tag" class="text-xs bg-zinc-700 px-2 py-0.5 rounded-sm">
            #{{ tag }}
          </span>
        </div>
        <hr class="border-zinc-700 mt-4">
      </header>



      <article class="prose prose-sm lg:prose-sm 
  prose-pre:bg-black-950 
  prose-hr:border-black-800
  prose-table:border prose-table:border-black-800
  prose-th:border prose-th:border-black-800 prose-th:p-2
  prose-td:border prose-td:border-black-800 prose-td:p-2
  dark:prose-invert max-w-none text-justify">
        <ContentRenderer :value="post" />
      </article>

      <button class="self-end text-xs flex items-center gap-2 text-gray-400 hover:text-white" @click="scrollToTop">
        <LucideArrowUp class="w-4 h-4" />Back to top
      </button>
    </template>

    <p v-else class="text-center text-sm text-gray-500">Post not found.</p>
  </div>
</template>
