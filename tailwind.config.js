/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textDecoration: ['hover', 'focus', 'active'],
    },
  },
  plugins: [],
}
