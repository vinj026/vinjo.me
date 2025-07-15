<script setup>
const center = [-1.23919, 116.85869] // Balikpapan
</script>


<template>

  <div class="relative h-64 md:h-full group ">
    <div class="absolute z-10 left-3 bottom-3 flex items-center gap-1">
      <div class="p-2 bg-black-900 rounded-2xl border border-black-600">
        <LucideMapPin class="w-3 h-3 text-zinc-300" />
      </div>

      <div
class="bg-black-900 text-xs text-zinc-300 font-medium px-3 py-1 rounded-xl border border-black-600 
               opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 
               transition-all duration-300">
        Balikpapan, Indonesia
      </div>
    </div>

    <LMap
:zoom="5" :center="center" :use-global-leaflet="false"
      :options="{ zoomControl: false, attributionControl: false, dragging: false, touchZoom: false }"
      class="grayscale brightness-[0.45]  h-full min-h-full w-full rounded-2xl outline-none">
      <LTileLayer
:url="'/api/maptile/{z}/{x}/{y}.webp'" layer-type="base"
        :options="{ tileSize: 512, directRetina: true, zoomOffset: -1 }" />
    </LMap>
    <div className='absolute inset-0 flex items-center justify-center'>
      <span class="relative flex size-3"> <span
          class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-55" /> <span
          class="relative inline-flex size-3 rounded-full bg-emerald-500 opacity-35" /></span>
    </div>
  </div>

</template>
