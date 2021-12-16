module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      'mobile': {'max': '640px'},
      'desktop': {'min': '641px'}
    },
    colors: {
      'blue': '#1fb6ff',
      'primary': '#230041',
      'secondary': '#6100B4',
      'accent': '#FF3B3B'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
