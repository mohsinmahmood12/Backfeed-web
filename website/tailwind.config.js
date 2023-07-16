const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{css,ts}"
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        }
    },
  },
  plugins: [],
}

