<script setup>
// const route = useRoute()
// const { data: posts } = await useAsyncData(route.path, () => {
//   return queryCollection('blog').all()
// })
// console.log(posts.value)
</script>

<template>
  <ContentContainer title="Learning Journal">
    <div class="flex flex-col gap-4 w-full">
      <BlogContent />
    </div>
    <ContentCounter />
  </ContentContainer>

</template>
