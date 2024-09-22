<script setup>
    import { RouterLink } from 'vue-router';
    import PokemonAbilityPill from './PokemonAbilityPill.vue';
    import PokemonTypePill from './PokemonTypePill.vue';
    import PokemonHero from './PokemonHero.vue';

    defineProps({
        pokemonName: String,
        pokemonSprite: String,
        pokemonId: String,
        pokemonType: String,
        pokemonAbilities: Array,
        pokemonTypes: Array,
    })


</script>
<template>
    <div class="flex flex-col px-10">
        <div class="max-w-xl lg:order-2 text-base leading-7 text-gray-700 lg:max-w-none flex flex-col lg:flex-row justify-evenly">
            <div class="flex justify-center">
                <PokemonHero :pokemonName="pokemonName" :pokemonId="pokemonId" :pokemonSprite="pokemonSprite" :pokemonType="pokemonType"/>
            </div>
            <div class="flex flex-col justify-center">
                <div class="bg-gameboy border-2 max-w-xl border-gray-900 rounded-xl py-6 mx-10 my-10 sm:py-22">
                    <h2 v-if="pokemonTypes.length == 1" class="text-center md:text-left  md:ml-12 lg:ml-4">Type:</h2>
                    <h2 v-else class="text-center md:text-left  md:ml-12 lg:ml-4">Types:</h2>
                    <div class="mx-auto max-w-7xl py-6 px-6 lg:px-8">
                        <PokemonTypePill :types="pokemonTypes" />
                    </div>
                </div>
                <div class="bg-gameboy border-2 max-w-xl border-gray-900 rounded-xl py-6 mx-10 my-10 sm:py-22">
                    <h2 v-if="pokemonAbilities.length == 1" class="text-center md:text-left  md:ml-12 lg:ml-4" >Ability:</h2>
                    <h2 v-else class="text-center md:text-left  md:ml-12 lg:ml-4">Abilities:</h2>
                    <div class="mx-auto max-w-7xl py-6 px-6 lg:px-8">
                        <PokemonAbilityPill :abilities="pokemonAbilities" />
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center lg:justify-end">
            <RouterLink class="block lg:order-1 mt-10 px-4 py-2 text-base leading-7 rounded-xl border-2 bg-red-500/75 text-red-600 border-red-600" to="/">
                Regresar
            </RouterLink>
        </div>
    </div>
</template>