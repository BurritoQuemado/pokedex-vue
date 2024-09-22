/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        gameboy: "#9ca04c",
        fire: {
          primary: "#FFA07A ",
          secondary: "#FF0000"
        },
        water: {
          primary: "#0075BE",
          secondary: "#004d7d"
        },
        grass: {
          primary: "#34C759",
          secondary: "#23883C"
        },
        electric: {
          primary: "#FFFF00",
          secondary: "#0075BE"
        },
        ice: {
          primary: "#0075BE",
          secondary: "#FFFFFF"
        },
        fighting: {
          primary: "#FF0000",
          secondary: "#964B00"
        },
        poison: {
          primary: "#7A288A",
          secondary: "#34C759"
        },
        ground: {
          primary: "#964B00",
          secondary: "#5B2D00FF"
        },
        flying: {
          primary: "#0075BE",
          secondary: "#FFFFFF"
        },
        psychic: {
          primary: "#FFC0CB",
          secondary: "#7A288A"
        },
        bug: {
          primary: "#34C759",
          secondary: "#964B00"
        },
        rock: {
          primary: "#964B00",
          secondary: "#808080"
        },
        ghost: {
          primary: "#7A288A",
          secondary: "#FFFFFF"
        },
        steel: {
          primary: "#808080",
          secondary: "#B1B1B1"
        },
        dragon: {
          primary: "#FF0000",
          secondary: "#FFD700" 
        },
        dark: {
          primary: "#000000",
          secondary: "#808080"
        },
        fairy: {
          primary: "#FFC0CB",
          secondary: "#FFFFFF"
        },
        normal: {
          primary: "#A8A77A",
          secondary: "#000000"
        }
      }
    },
  },
  plugins: [],
}

