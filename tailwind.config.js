/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hijau : "#347928",
        putih : "#FFFBE6",
        kuning : "#FCCD2A",
        mint : "#C0EBA6",
        hitam : "#333333",
        abu : "#6D6D6D",
        biru : "#15646e",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out",
        fadeInDown: "fadeInDown 0.8s ease-out",
        "slide-in": "slideIn 1.5s ease-out forwards",
        "gradient-move": "gradient-move 8s infinite linear",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "gradient-move": {
          "0%": { "background-position": "0% 45%" },
          "100%": { "background-position": "100% 75%" },
        },
        
      },
    },
  },
  plugins: [
    "tailwindcss: {}",
    "autoprefixer: {}",
  ],
}

