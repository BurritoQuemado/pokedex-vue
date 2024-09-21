import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home.vue"
import PokemonView from "@/views/Pokemon.vue"

//Configuracion basica de un router con vue router, para poder usar diferentes vistas dependiendo la ruta
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        //creacion de la ruta que recibe como parametro el id del pokemon para hacer la consulta individual
        {
            path: '/pokemon/:pokemonId',
            name: 'Pokemon',
            component: PokemonView
        }
    ]
});

export default router;