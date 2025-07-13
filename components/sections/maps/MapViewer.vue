<script setup>
const config = useRuntimeConfig()

const center = [-1.23919, 116.85869] // Balikpapan
const tileUrl = `https://api.maptiler.com/maps/streets-v2-dark/{z}/{x}/{y}.png?key=${config.public.MAPTILER_KEY}`
</script>

<template>
  <div class="relative h-full ">
    <div class="absolute z-10 left-3 bottom-3 bg-black-900  rounded-xl border border-black-600 ">
      <div class="flex px-2 py-1 justify-center items-center">

        <p class="text-xs text-zinc-400 font-bold">My Location</p>
      </div>
    </div>
    <LMap :zoom="15" :options="{
      zoomControl: false,
      attributionControl: false,
      dragging: false,
    }" :min-zoom="5" :max-zoom="20" :center="center" :scroll-wheel-zoom="true"
      class="grayscale brightness-[0.45] h-full min-h-full w-full rounded-2xl outline-none">
      <LTileLayer :url="tileUrl" />
    </LMap>
    <div className='absolute inset-0 flex items-center justify-center'>
      <span class="relative flex size-3"> <span
          class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /> <span
          class="relative inline-flex size-3 rounded-full bg-emerald-500 opacity-50" /></span>
    </div>
  </div>
</template>
