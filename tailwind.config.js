module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'hsl(0, 94%, 66%)',
        check: 'hsl(228, 45%, 44%)',
        darkblue: ' hsl(229, 31%, 21%)',
        softblue: 'hsl(231, 69%, 60%)',
        grayblue: 'hsl(229, 8%, 60%)',
        softred: ' hsl(0, 94%, 66%)',
        black: 'rgb(66, 65, 65)',

        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        FFamily: ['Rubik']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
