/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent_screen: 'rgba(255, 255, 255, 0.1)',
      },

      boxShadow: {
        r_b_shadow: '1px 1px 1px 1px rgba(77, 40, 40, 0.212)',
      },

      borderColor: {
        input_border: 'rgba(77, 40, 40, 0.158)',
      },
    },
  },
  plugins: [],
}
