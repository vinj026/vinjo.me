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
let i = 0;

onMounted(() => {

  const interval = setInterval(() => {
    if (i > greetings.value.lang.length - 1) {
      i = 0
    } else {
      greetings.value.selectedLang = greetings.value.lang[i].text
      console.log(greetings.value.lang[i].text)
      ++i
    }
  }, 3000)
  onUnmounted(() => clearInterval(interval))
})



</script>
<template>
  <div class="flex flex-col gap-2 w-full">
    <h1 class="lg:text-2xl">
      {{ greetings.selectedLang }}
    </h1>

    <p class="text-justify leading-relaxed lg:text-base">

      This website is a personal initiative I built to explore the fundamentals of web
      development and better understand the technologies behind modern websites.
      Although my current focus is on frontend experiments, my main interest lies in pursuing a career in IT Support or
      Network Operations (NOC). I'm still early in my learning journey, but I'm committed to growing in that direction.

    </p>
  </div>
</template>
