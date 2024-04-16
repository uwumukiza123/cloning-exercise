/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#072140',
        'secondary': '#3070b3'
      },
      width: {
        '84': '330px',
        '200': '650px'
      }
    },
  },
  plugins: [],
}

