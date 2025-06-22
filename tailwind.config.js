/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
      colors: {
        "very-dark-blue": "hsl(224, 14%, 12%,1)",
        "dark-grey": "hsl(226, 6%, 40%)",
        "medium-gey": "hsl(223, 7%, 53%)",
        "light-grey": "hsl(225, 17%, 82%)",
        "very-light-grey": "hsl(230, 21%, 95%)",
        "error-red": "hsl(0, 68%, 61%)",
        white: "#ffffff",
        "link-color": "hsla(224, 8%, 53%, 1)",
        "heading-color": "hsla(224, 23%, 94%, 1)",
      },

      backgroundImage: {
        "hero-bg": "url('/src/assets/images/image-hero-mobile.png')",
        "hero-bg-medium": "url('/src/assets/images/image-hero-desktop.png')",
      },
    },
  },
  plugins: [],
};
