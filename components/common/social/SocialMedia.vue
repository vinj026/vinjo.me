<script setup>
import { Github, Linkedin, FileText } from 'lucide-vue-next'

const socialIcons = [Github, Linkedin, FileText]
</script>

<template>
  <div class="flex gap-2">
    <div v-for="(Icon, i) in socialIcons" :key="i">
      <SocialButton :icon="Icon" />
    </div>
  </div>
</template>
