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
      ++i
    }
  }, 3000)
  onUnmounted(() => clearInterval(interval))
})



</script>
<template>
  <div class="flex flex-col gap-2 w-full">
    <Transition enter-active-class="transition duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] transform"
      enter-from-class="opacity-0 translate-y-2" enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-2" mode="out-in">
      <h1 :key="greetings.selectedLang" class="min-h-1 font-bold tracking-tight">
        {{ greetings.selectedLang }}
      </h1>
    </Transition>

    <p class="text-justify leading-relaxed ">
      I use this site to keep track of my learning process — so I can see how far I’ve come and where I’m heading.
      No fancy goals, just a way to understand what I’m learning, and keep everything documented
      honestly.
      It’s not a polished skill showcase — it’s a growing record of the process itself. </p>
  </div>
</template>
