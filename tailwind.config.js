module.exports = {
  content: ["./src/Components/**/*.{html,jsx}", "./src/Pages/**/*.{html,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ["Poppins"],
    },
    width: {
      '128': '32rem',
    },
    boxShadow: {
      '3xl': '26px 26px 52px #bebebe, -26px -26px 52px #ffffff',
    }
  },
  plugins: [],
};
