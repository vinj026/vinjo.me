<script setup>

const route = useRoute()
const { data: posts } = await useAsyncData(route.path, () =>
  queryCollection('blog')
    .order('date', 'DESC').limit(3)
    .all()
)
const { data: allPosts } = await useAsyncData('total-posts', () =>
  queryCollection('blog').all()
)
</script>

<template>
  <div class="flex flex-col gap-2 px-4">
    <h1>My Journal</h1>
    <BlogContent :shownpost="posts" />
    <ContentCounter :allpost="allPosts" :shownpost="posts" />

  </div>
</template>
