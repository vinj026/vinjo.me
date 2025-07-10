<script setup>
import type { componentNames } from 'components';
import { Github, Linkedin, FileText, Mail } from 'lucide-vue-next'

const socialMedia = ref(
  {
  {
    componentName: Github,
    title: Github,
    username: "@vinj026",
    link: "https://github.com/vinj026",
  }
}
)
</script>

<template>
  <ContentContainer title="Let's Connect">
    <div class="flex gap-2">
      <div v-for="(Icon, i) in socialIcons" :key="i">
        <SocialButton :icon="Icon" />
      </div>
    </div>
  </ContentContainer>
</template>
