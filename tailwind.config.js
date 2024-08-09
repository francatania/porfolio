/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBlue:'#1B264F',
        oceanBlue: '#274690',
        cyanBlue: '#08B2E3',
        whiteMag: '#EFE9F4',
        blackJet: '#302B27'

      }
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}

