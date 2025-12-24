<script setup>
import { Github, Linkedin, Mail } from 'lucide-vue-next'

const socialMedia = ref([
  {
    icon: Github,
    title: 'Github',
    username: '@vinj026',
    link: 'https://github.com/vinj026',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    username: 'Kevin Jonathan',
    link: 'https://linkedin.com/in/kevinjonathan26',
  },
  {
    icon: Mail,
    title: 'Email',
    username: 'vinjonathan26@gmail.com',
    link: 'mailto:vinjonathan26@gmail.com',
  },
  // {
  //   icon: FileText,
  //   title: 'FileText',
  //   username: '',
  //   link: '',
  // },
])
</script>

<template>
  <div class="relative overflow-hidden bg-card p-2 rounded-2xl border ">
    <div class="flex flex-col justify-center gap-4">
      <SocialButton
v-for="(item, i) in socialMedia" :key="i" :icon="item.icon" :title="item.title" :link="item.link"
        :username="item.username" />
    </div>

    <ClientOnly>
      <Meteors :count="50" />
    </ClientOnly>
  </div>
</template>
