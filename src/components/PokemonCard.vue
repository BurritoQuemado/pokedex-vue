<script setup>
    //importacion de vue router para reemplazar el uso del tad <a>
    import { RouterLink } from 'vue-router';

    defineProps({
        pokemon: Object
    })

    //Funcion para aplicacion de estilos dinamicos con base en el tipo del pokemon
    const getClass = (type) => {
      switch (type) {
        case 'fire':
          return "bg-fire-primary text-fire-secondary/80 border-fire-secondary";
        case 'water':
          return "bg-water-primary text-water-secondary/80 border-water-secondary";
        case 'grass':
          return "bg-grass-primary text-grass-secondary/80 border-grass-secondary";
        case 'electric':
          return "bg-electric-primary text-electric-secondary/80 border-electric-secondary";
        case 'ice':
          return "bg-ice-primary text-ice-secondary/80 border-ice-secondary";
        case 'fighting':
          return "bg-fighting-primary text-fighting-secondary/80 border-fighting-secondary";
        case 'poison':
          return "bg-poison-primary text-poison-secondary/80 border-poison-secondary";
        case 'ground':
          return "bg-ground-primary text-ground-secondary/80 border-ground-secondary";
        case 'flying':
          return "bg-flying-primary text-flying-secondary/80 border-flying-secondary";
        case 'psychic':
          return "bg-psychic-primary text-psychic-secondary/80 border-psychic-secondary";
        case 'bug':
          return "bg-bug-primary text-bug-secondary/80 border-bug-secondary";
        case 'rock':
          return "bg-rock-primary text-rock-secondary/80 border-rock-secondary";
        case 'ghost':
          return "bg-ghost-primary text-ghost-secondary/80 border-ghost-secondary";
        case 'steel':
          return "bg-steel-primary text-steel-secondary/80 border-steel-secondary";
        case 'dragon':
          return "bg-dragon-primary text-dragon-secondary/80 border-dragon-secondary";
        case 'dark':
          return "bg-dark-primary text-dark-secondary/80 border-dark-secondary";
        case 'fairy':
          return "bg-fairy-primary text-fairy-secondary/80 border-fairy-secondary";
        case 'normal':
          return "bg-normal-primary text-normal-secondary/80 border-normal-secondary";
      }
    };
</script>

<template>
    <RouterLink :to="'/pokemon/'+pokemon.id">
        <div :class="[
        'rounded-2xl border-2 text-center px-8 py-4 flex flex-col justify-center align-middle',
        getClass(pokemon.type)
        ]
        ">
            <img class="mx-auto h-24 w-24 rounded-full" :src="pokemon.sprite" alt="" />
            <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{{ pokemon.name }}</h3>
            <p class="text-sm leading-6 text-gray-800/95">#{{ pokemon.id }}</p>
        </div>
    </RouterLink>
</template>