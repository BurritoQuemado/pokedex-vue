<script setup>
    import { RouterLink } from "vue-router"; 
    import PokeApiIMG from "@/assets/img/pokeapi.png"
</script>
<template>
    <header class="bg-red-600">
    <nav class="mx-auto flex max-w-7xl justify-center items-center p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="-m-1.5 p-1.5">
          <img class="h-20 w-auto" :src="PokeApiIMG" alt="pokeapi" />
        </RouterLink>
      </div>
    </nav>
  </header>
</template>