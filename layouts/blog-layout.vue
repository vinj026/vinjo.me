<template>
  <div class="flex flex-col min-h-screen items-center px-2 w-full lg:max-w-3xl mx-auto gap-4">
    <AppNavbar />
    <main class="flex-1 w-full px-4 md:p-2">
      <slot />
      <AppFooter/>
    </main>
  </div>
</template>
