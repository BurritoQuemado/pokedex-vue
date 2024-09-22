<script setup>
    import { RouterLink } from 'vue-router';
</script>
<template>
    <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-2xl font-semibold text-red-600">404</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Pagina no encontrada</h1>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <RouterLink to="/" class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Regresar a la pagina principal</RouterLink>
        </div>
      </div>
    </main>
  </template>