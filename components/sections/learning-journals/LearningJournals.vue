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
  <ContentContainer title="Learning Journal">
    <BlogContent :shownpost="posts" />
    <ContentCounter :allpost="allPosts" :shownpost="posts" />
  </ContentContainer>

</template>
