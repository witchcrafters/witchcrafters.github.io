module.exports = {
  purge: {
    mode: 'production',
    content: ['./src/**/*.html'],
  },
  theme: {
    colors: {
      white: '#fefefe',
      purple: '#9477E0',
      cloud: '#EBECF5',
      slate: '#262535',
    },
    fontFamily: {
      body: ['Nunito', 'sans-serif']
    },
    container: {
      center: true,
      padding: '1rem'
    },
  },
  variants: {},
  plugins: [],
}
