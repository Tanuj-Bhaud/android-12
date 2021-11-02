module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'android-green': '#EFF7CF',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
