<script setup>
    import { reactive, onMounted } from 'vue';
    import axios from 'axios';
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue'; 
    import { useRoute } from 'vue-router';
    import PokemonInfo from '@/components/PokemonInfo.vue';

    //declaracion de el route para acceder a los parametos que se pasan a traves de la url
    const route = useRoute();
    const pokemonId = route.params.pokemonId;

    //creacion del estado para uso de diferentes propiedades dentro de la vista, en este caso almacenar datos del pokemon
    //como el tipo y sprite que por alguna razon no accede a esos datos, desde el objetivo ya recuperado de la promesa
    const state = reactive({
        pokemon: {},
        pokemonSprite: "",
        pokemonType: "",
        isLoading: true,
    })

    onMounted( 
        async () => {
          try {
              //Llamada a la pokeapi para obtener la informacion individual de cada pokemon
              const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
              //Recuperacion de todos los datos de un pokemon
              state.pokemon = response.data;
              //Recuperacion del sprite frontal del pokemon
              state.pokemonSprite = response.data.sprites.front_default;
              //Recuperacion del tipo principal del pokemon 
              state.pokemonType = response.data.types[0].type.name;
          } catch (error) {
              console.log(error)
          } finally {
            state.isLoading = false;
          }
        }
    );
</script>
<template>
    <div v-if="state.isLoading" class="text-center text-gray-800">
        <PulseLoader />
    </div>
    <div v-else>
        <PokemonInfo :pokemonName="state.pokemon.name" :pokemonId="pokemonId" :pokemonSprite="state.pokemonSprite" :pokemonType="state.pokemonType" :pokemonAbilities="state.pokemon.abilities" :pokemonTypes="state.pokemon.types" />
    </div>
</template>