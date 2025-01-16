/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        '3xl': '2560px',
        "screen": "1920px",
      },
      colors: {
        'custom-blue': '#083143', // Define a custom name for the color
        "custom-first": "#153646",
        "custom-second": "#183949",
        "custom-third": "#1c3d4c",
        "custom-fourth": "#224353",
        "button-c": "#41e2b8",
        "custom-cyan": "#f3fcf9",
        "custom-red": "#FF0000",
        "soft-blue": "#5F9EA0",
        "light-green": "#98FB98",
        "custom-orange": "#fd7e14",
        "custom-red": "#dc3545"

      },
    },
    fontFamily: {
      sans: ["Roboto Slab", "serif"],
    },
  },
  plugins: [],
}

