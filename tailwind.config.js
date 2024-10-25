/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        "3000": "3000ms",
        "5000": "5000ms",
      },
    },
  },
  safelist: [
    {
      pattern: /from-(slate|blue|emerald|rose|violet|cyan|amber)-(800|900|950)/,
    },
    {
      pattern: /to-(slate|blue|emerald|rose|violet|cyan|amber)-(800|900|950)/,
    },
  ],
  plugins: [],
};
