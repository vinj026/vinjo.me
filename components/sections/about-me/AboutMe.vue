<script setup>
const greetings = ref(
  {
    lang: [
      { language: "Japanese", code: "ja", text: "こんにちは、ケビンです。" },
      { language: "Korean", code: "ko", text: "안녕하세요, 케빈입니다." },
      { language: "Mandarin", code: "zh", text: "你好，我是凯文。" },
      { language: "Russian", code: "ru", text: "Привет, я Кевин." },
      { language: "Spanish", code: "es", text: "Hola, soy Kevin." },
      { language: "French", code: "fr", text: "Bonjour, je suis Kevin." },
      { language: "German", code: "de", text: "Hallo, ich bin Kevin." },
      { language: "Italian", code: "it", text: "Ciao, sono Kevin." },
      { language: "Indonesian", code: "id", text: "Halo, saya Kevin." },
      { language: "Portuguese", code: "pt", text: "Olá, eu sou o Kevin." },
      { language: "Dutch", code: "nl", text: "Hallo, ik ben Kevin." }
    ],
    selectedLang: "Hello, I'm Kevin",
  }
)

let i = 0
let interval

onMounted(() => {
  interval = setInterval(() => {
    greetings.value.selectedLang = greetings.value.lang[i].text
    i = (i + 1) % greetings.value.lang.length
  }, 3000)
})

onUnmounted(() => {
  clearInterval(interval)
})


</script>
<template>
  <ContentContainer>
    <h1>{{ greetings.selectedLang }}</h1>
    <p class="text-justify leading-relaxed lg:text-base">
      I use this site to keep track of my learning process — so I can see how far I’ve come and where I’m heading.
      No fancy goals, just a way to understand what I’m learning, and keep everything documented
      honestly.
      It’s not a polished skill showcase — it’s a growing record of the process itself. </p>

  </ContentContainer>

</template>
