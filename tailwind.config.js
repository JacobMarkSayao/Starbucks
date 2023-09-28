/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light__green' : '#f1f8f5',
        'dark__green' : '#d4e9e2',

      }
    },
  },
  plugins: [],
}