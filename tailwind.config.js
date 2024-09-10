module.exports = {
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ['Roboto', 'sans-serif'],
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
  content: ["./src/**/*.{md,njk,sass,html}"],
};
