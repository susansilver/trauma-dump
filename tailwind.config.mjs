/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "white-50": "#FAFAFA",
        "black-950": "#212121",
        "yellow-brand": "#fd6f01",
        "blue-brand": "#12082d",
        secondary: {
          50: "#fff9ec",
          100: "#fff1d3",
          200: "#ffdfa6",
          300: "#ffc86d",
          400: "#ffa433",
          500: "#ff880b",
          600: "#fd6f01",
          700: "#cb5003",
          800: "#a13f0b",
          900: "#81350d",
          950: "#461804",
        },
        primary: {
          50: "#eaecff",
          100: "#d9dbff",
          200: "#babcff",
          300: "#9190ff",
          400: "#7364ff",
          500: "#6441ff",
          600: "#5b20ff",
          700: "#5215ed",
          800: "#4314bf",
          900: "#381a95",
          950: "#12082d",
        },
        accent: {
          50: "#fff0f2",
          100: "#ffe3e7",
          200: "#ffcbd5",
          300: "#ffa0b3",
          400: "#ff6b8a",
          500: "#fc3767",
          600: "#ec205b",
          700: "#c60a45",
          800: "#a60b41",
          900: "#8d0e3e",
          950: "#4f021d",
        },
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
