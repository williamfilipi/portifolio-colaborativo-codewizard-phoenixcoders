/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    
    fontFamily:{
      'custom-inconsolata':'Inconsolata',
      'custom-zenDots':'Zen Dots'
    },
    screens: {
      'sm': {'max': '330px'},
      // => @media (max-width: 320px) { ... }

      'md': {'max': '420px'},
      // => @media (max-width: 420px) { ... }

      'lg': '1024px',
      // => @media (max-width: ##px) { ... }

      'xl': '1280px',
      // => @media (max-width: ##px) { ... }

      '2xl': '1536px',
      // => @media (max-width: ##px) { ... }
    },
    extend: {
      colors:{
        'dark-color-primary':'#0F0920',
        'dark-color-secondary':'#221C3E',
        'light-color':'#f1f1f1',
        'lime-primary':'#16c586',
        'emerald-primary':'#03FCFC',
        'light-color-primary':'#f2f0ff',
        'light-color-secondary':'#b5b3bc',
        'grenn-button':'#06b94e',
        'button-primary':'#0368ff'
      },
    },
  },
  plugins: [],
}

