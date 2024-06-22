/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      "dark-grey" : "#1A1A1A",
      "light-grey" : "#242424",
      "black": "#000000"

    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #33CAFF 0%, #3D2D86 100%)',
      },
    },
  },
  plugins: [],
}

