/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend:{
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      }
    },
    screens: {
      sm: {max: '650px'},
      xs: {max: '425px'},
    }
  },
  presets: [
    require('tailwindcss-preset-email'),
  ],
  content: [
    './components/**/*.html',
    './emails/**/*.html',
    './layouts/**/*.html',
  ],
}
