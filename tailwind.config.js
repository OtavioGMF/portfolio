/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-100': '#0a5bd3',
        'primary-300': '#084dc0',
        'primary-500': '#053eae',
        'primary-700': '#03309b',
        'primary-900': '#002188',

        'secundary-100':'#ffc27b',
        'secundary-300':'#fca963',
        'secundary-500':'#fa904c',
        'secundary-700':'#f77634',
        'secundary-900':'#f45d1c'
      },
      fontFamily:{
        'jet': '"JetBrains Mono", monospace;'
      },
    },
  },
  plugins: [],
}

