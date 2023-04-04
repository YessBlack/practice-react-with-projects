/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        8: 'repeat(8, minmax(0, 1fr))'
      }
    },
    colors: {
      'primary-color': '#7945ff',
      'button-color': '#5c2cd7',
      'footer-color': '#5c2dd5',
      'player-one': '#ff6585',
      'player-two': '#fbce64',
      'color-turn': '#fd6687',
      'background-circle': '#7945ff',
      white: '#ffffff'
    }
  },
  plugins: []
}
