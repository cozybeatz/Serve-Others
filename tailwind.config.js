/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        scratch: "url('../public/scratch.png)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        main: "url('../public/scratch.png')",
      },
      fontFamily: {
        jarkata: ["var(--font-plus_jarkata)"],
        grotesque: ["var(--font-grotesque)"],
        manrope: ["var(--font-manrope)"],
      },
    },
  },
  plugins: [],
};
