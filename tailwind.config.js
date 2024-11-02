/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1dbcee',
        'lightBlue': "rgba(29, 188, 238, 0.1)"
      },
      screens: {
        'mobile':  "960px",
        '0.5xl': '1125px',
        '3xl': '2560px',
      },
      maxWidth: {
        'mainSection': 'calc(100% - 35rem)',
      },
    },
  },
  plugins: [],
}
