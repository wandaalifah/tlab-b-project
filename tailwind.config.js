/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        domine: ['Domine'],
        poppins: ['Poppins']
      },
      colors: {
        primary: {
          0: '#D7D1BD',
          50: '#FFFEFB',
          100: '#FCF9EE',
          200: '#F9F3DD',
          300: '#EFE4C7',
          400: '#CCB893',
          500: '#AF956B',
          600: '#92744A',
          700: '#76552E',
          800: '#613F1C',
          900: '#5F360C'
        },
        grey: {
          500: '#857F72',
          800: '#423D33',
          900: '#27241D'
        },
        background: {
          0: '#F2F2EF',
          50: '#F8F9F4'
        },
        base: {
          500: '#25282B'
        },
        red: {
          500: '#E12D39'
        }
      }
    },
  },
  plugins: [
  ],
}

