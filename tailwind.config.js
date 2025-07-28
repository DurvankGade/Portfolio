/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Poppins", "Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#7dd3fc",
          DEFAULT: "#3b82f6",
          dark: "#2563eb",
        },
        secondary: {
          light: "#f093fb",
          DEFAULT: "#a21caf",
          dark: "#701a75",
        },
        accent: {
          light: "#fcd34d",
          DEFAULT: "#f59e42",
          dark: "#b45309",
        },
        background: {
          light: "#f8fafc",
          DEFAULT: "#0f172a",
          dark: "#020617",
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
