/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend:{
      colors: {
        alphaWhite: '#FFFFFF',
        alphaBlue500: '#11366B',
        alphaBlue400: '#2A4B8C',
        bonusGreyBg: '#efefef',
      },
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
