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

// Scroll detection
const isScrollingDown = ref(false)
const lastScrollY = ref(0)

function handleScroll() {
  const currentY = window.scrollY
  const delta = currentY - lastScrollY.value

  // muncul jika scroll turun lebih dari 10px
  if (Math.abs(delta) > 10) {
    isScrollingDown.value = currentY > 100 // muncul setelah scroll agak jauh
    lastScrollY.value = currentY
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="flex flex-col w-full gap-6 relative">
    <template v-if="post">
      <header class="flex flex-col gap-2">
        <h1 class="text-2xl font-bold">{{ post.title }}</h1>
        <p class="text-sm text-primary/50">
          {{ new Date(post.date).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }) }}
          · {{ post.readingTime }} min read
        </p>
        <div class="flex flex-wrap gap-2 mt-2">
          <span v-for="tag in post.tags" :key="tag" class="text-xs bg-accent px-2 py-0.5 rounded-sm">
            #{{ tag }}
          </span>
        </div>
        <hr class="border ">
      </header>

      <article class="prose prose-sm prose-pre:bg-card prose-hr:border-primary/20 prose-table:border prose-p:text-primary/75
               prose-th:border prose-th:p-2 prose-td:border prose-td:p-2
               dark:prose-invert max-w-none text-justify">
        <ContentRenderer :value="post" />
      </article>

      <!-- Back to top button -->
      <Transition enter-active-class="transition-opacity duration-300"
        leave-active-class="transition-opacity duration-300" enter-from-class="opacity-0" leave-to-class="opacity-0">
        <button v-if="isScrollingDown" class="fixed bottom-6 right-6 z-40 bg-card p-2 rounded-full border 
                 text-xs flex items-center gap-2 text-gray-400 hover:text-white 
                 shadow-md backdrop-blur" @click="scrollToTop">
          <LucideArrowUp class="w-4 h-4" />
        </button>
      </Transition>
    </template>

    <p v-else class="text-center text-sm text-gray-500">Post not found.</p>
  </div>
</template>
