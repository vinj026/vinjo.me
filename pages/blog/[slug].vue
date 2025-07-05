<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(() =>
  queryCollection('blog').path(`/blog/${route.params.slug}`).first()
)

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description
})
</script>

<template>
  <ContentRenderer v-if="post" :value="post" />
  <p v-else>Post not found</p>
</template>
