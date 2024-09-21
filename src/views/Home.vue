<script setup>
  import PokemonsContainer from '@/components/PokemonsContainer.vue';
</script>

<template>
  <div class="bg-gray-200 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <p class="text-base md:text-xl">Prueba tecnica de consumo de la PokeApi, en la cual se muestran 50 pokemones, elaborada con VueJS y TailwinsCSS.</p>
      <p class="text-sm md:text-md py-10">Elaborada por Diego Andrés Flores Monroy</p>
      <PokemonsContainer />
    </div>
  </div>
</template>