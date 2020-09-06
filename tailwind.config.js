module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: ["./src/**/*.html"],
  },
  theme: {
    colors: {
      white: "#FEFEFE",
      witchcraft: "#9477E0",
      cloud: "#EBECF5",
      slate: "#262535",
      purple: "#e4ddf7",
    },
    fontFamily: {
      body: ["Nunito", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  variants: {},
  plugins: [],
}
