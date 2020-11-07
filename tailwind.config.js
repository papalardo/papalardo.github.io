module.exports = {
    future: {},
    purge: [
      './src/**/*.html',
    ],
    theme: {
      fontFamily: {
        serif: ['"Frank Ruhl Libre"', 'serif'],
        // sans: ['"Josefin Sans"', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
      },
      extend: {
        colors: {
          primary: {
            '400': '#4e93e6',
            '300': '#252527'
          }
        }
      },
    },
    variants: {},
    plugins: [],
}