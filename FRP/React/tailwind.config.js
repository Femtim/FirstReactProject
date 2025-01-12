/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Hero': "url('./asset/Home1.jpg')",
      }
    },
  },
  plugins: [],
}

