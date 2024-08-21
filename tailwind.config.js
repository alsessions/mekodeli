module.exports = {
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  content: ["./src/**/*.{md,njk,sass}"],
};
