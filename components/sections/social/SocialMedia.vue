<script setup>
import { Github, Linkedin, FileText, Mail } from 'lucide-vue-next'

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
    username: 'vinjonathan@gmail.com',
    link: 'mailto:vinj026@email.com',
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
  <ContentContainer title="Let's Connect">
    <div class="flex flex-col gap-2">
      <SocialButton
v-for="(item, i) in socialMedia" :key="i" :icon="item.icon" :title="item.title" :link="item.link"
        :username="item.username" />
    </div>
  </ContentContainer>
</template>
