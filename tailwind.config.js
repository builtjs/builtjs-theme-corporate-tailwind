const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: 'class',
  theme: {
      colors: {
        'primary': 'var(--clr-primary)',
        'secondary': 'var(--clr-secondary)',
        'secondary-light': 'var(--clr-secondary-light)',
        'secondary-dark': 'var(--clr-secondary-dark)',
        'light': 'var(--clr-light)',
        'lightest': 'var(--clr-lightest)',
        'darkest': 'var(--clr-darkest)',
        'gray': colors.gray
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
