/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          300: "#E0E7F3",
          500: "#3E38A7",
          600: "#5046E4"
        },
        gray: {
          100: "#eeeeef",
          200: "#e6e9ed",
          600: "#95989c",
        }
      }
    },
  },
  plugins: [],
}

