<script setup>

</script>
<template>

  <section>
    <div class="rounded-lg overflow-hidden border border-zinc-800">
      <div class="flex justify-between items-center bg-zinc-900 px-3 py-2">
        <div class="flex gap-2">
          <span class="w-3 h-3 bg-red-400 rounded-full" />
          <span class="w-3 h-3 bg-yellow-400 rounded-full" />
          <span class="w-3 h-3 bg-green-400 rounded-full" />
        </div>
        <p class="text-xs text-zinc-300 font-mono">My Toolkit</p>
        <div class="w-12" />
      </div>

      <div class="flex flex-col gap-4 bg-[#111111] text-zinc-300 font-mono leading-relaxed px-5 py-4 space-y-1">
        <p class=" text-sm">
          <span class="text-green-400">kevin@localhost</span>
          <span class="text-white">:~$</span>
          <span class="ml-1">echo $TOOLS_I_USE</span>
        </p>
        <div class="flex flex-col gap-2 ">
          <p class="text-sm">🖥️ <span class="text-sky-400">Terminal</span> : Kitty + Zsh</p>
          <p class="text-sm">🧠 <span class="text-pink-400">Editor</span> : Neovim</p>
          <p class="text-sm">💾 <span class="text-indigo-300">OS</span> : EndeavourOS</p>
          <p class="text-sm">🪟 <span class="text-emerald-400">WM</span> : Hyprland (Wayland)</p>
          <p class="text-sm">🕸️ <span class="text-amber-400">Web Stack</span> : HTML, CSS, JavaScript, Talwind, Vue,
            Nuxt, GIT</p>

        </div>
      </div>
    </div>

  </section>


</template>
