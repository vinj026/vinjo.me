<template>
  <main class="flex flex-col min-h-screen items-center px-4 w-full lg:max-w-3xl mx-auto">
    <AppNavbar class="min-h-[64px]" />
    <div class="flex-1 w-full">
      <slot />
    </div>
    <AppFooter class="min-h-[48px]" />
  </main>
</template>
