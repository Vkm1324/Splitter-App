/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { "text": ["Space Mono"] },
      colors: {
   "base-green": "#9FE8DF", /* hsl(173, 61%, 77%) */
   "dark-green": "#00474B",/* hsl(183, 100%, 15%)  */
   "bg-shade": "#F3F8FB",/* hsl(202, 50%, 97%)    */
   "text-color": "#5D6B6C",/* hsl(184, 7%, 39%)  */
   "text-color-light": "#9FB3B2",/* hsl(177, 12%, 66%) */
   "error": "#B47C6D",/* hsl(13, 32%, 57%)        */
   "white": "#FEFFFF",/* hsl(180, 100%, 100%)        */
   "stroke-green": "#5BABA2",/* hsl(173, 32%, 51%)  */
      },
      screens: {
        
      }
    },
  },
  plugins: [],
}
