/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "geist-mono-black": ["GeistMono-Black", "Roboto"],
        "geist-mono-light": ["GeistMono-Light", "Roboto"],
        "geist-mono-medium": ["GeistMono-Medium", "Roboto"]
      },
      colors: {
        primary: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
        },
        secondary: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
        tertiary: {
          50: "#fdf4f5",
          100: "#fce8eb",
          200: "#f8d0d7",
          300: "#f1a6b5",
          400: "#e87491",
          500: "#d93f6c",
          600: "#b83259",
          700: "#972846",
          800: "#7a1f39",
          900: "#61172d",
        },
      },
    },
  },
  plugins: [],
}