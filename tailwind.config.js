import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        'home-bg': 'url("/home-bg.webp")',
        'dark-bg': 'url("/dark-bg.webp")'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      "purple-dark": {
        extend: "dark",
        colors: {
          background: "#191119",
          foreground: "#ffffff",
          primary: {
            50: "#24002B",
            100: "#460051",
            200: "#580065",
            300: "#690079",
            400: "#8E05A2",
            500: "#9C20B0",
            600: "#A855F7",
            700: "#D75DE8",
            800: "#F27DFF",
            900: "#FFD6FD",
            DEFAULT: "#DD62ED",
            foreground: "#ffffff",
          },
          secondary: {
            50: "#1F0722",
            100: "#2B122E",
            200: "#361C38",
            300: "#422744",
            400: "#5A3D5B",
            500: "#735474",
            600: "#A985A8",
            700: "#C4A0C3",
            800: "#E1BADF",
            900: "#FED6FC",
            DEFAULT: "#F4AFF7"
          },
          focus: "#F182F6",
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
      'light': {
        extend: 'light'
      }
    },
  })],
}
