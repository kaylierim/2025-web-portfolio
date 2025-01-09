/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'vanilla-ravioli': ['Vanilla Ravioli', 'serif'],
      'poppins': ['Poppins', 'sans serif']
    },
    extend: {},
  },
  plugins: [],
}

