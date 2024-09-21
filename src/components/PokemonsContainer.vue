<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
    import PokemonCard from '@/components/PokemonCard.vue';
    
    //Lista donde se guardaran los pokemons como objetos
    const pokemons = ref([]);
    const isLoading = ref(true);

    //Numero maximo de pokemons de los cuales se obtendra la informacion en este caso 50
    const MAX_POKEMONS = 50

    //Funcion onMounted para obtener los datos de los pokemons
    onMounted(
        async () => {
          try {
                //For loop para obtener los datos de los pokemons ya que la pokeapi al hacer un request de N pokemons solo regresa el nombre y el url individual 
                //el for es hasta el maximo mas uno porque se inicia en 1 ya que los pokemons empiezan desde el 1 y no del 0
                for (let i = 1; i < MAX_POKEMONS + 1; i++){
                //Llamada a la pokeapi para obtener la informacion individual de cada pokemon
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const data = response.data;
                //Destructuring de los datos que regresa la pokeapi ya que para la pagina principal solo me interesa tener el nombre, la imagen del sprite frontal default 
                //(para identificar al pokemon) y el id para indicar su numero en la pokedex y se pase este como prop para su informacion mas completa
                let pokemon_data = {
                    id: data.id,
                    name: data.name,
                    sprite: data.sprites.front_default,
                    type: data.types[0].type.name,
                }
                //funcion push para agregar el objeto de cada pokemon a la lista de pokemons y se puedan renderizar
                pokemons.value.push(pokemon_data)
                
              }

          } catch (error) {
            console.log(error)
          } finally {
            isLoading.value = false;
          }
        }
    );
</script>
<template>
  <div v-if="isLoading" class="text-center text-gray-800">
    <PulseLoader />
  </div>
  <ul v-else role="list" class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-5">
    <li v-for="pokemon in pokemons" :key="pokemon.name">
      <PokemonCard :pokemon="pokemon" />
    </li>
  </ul>  
</template>