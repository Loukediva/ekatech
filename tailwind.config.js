/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.html", "./index.html"],
  theme: {
    extend: {
      colors: {
        'eka-blue': '#2563eb', // Le bleu pro d'EKA Tech
        'eka-orange': '#f97316', // L'orange créatif pour l'infographie
      },
    },
  },
  plugins: [],
}