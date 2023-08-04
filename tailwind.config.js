/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      rotate: {
        '270': '270deg',
      },
      fontSize:{
        'xxs': '10px'
      }
    }
  },
  plugins: []
}
