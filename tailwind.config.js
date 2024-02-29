/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "3xs": "0px",
      "2xs": "280px",
      xs: "575px", // Mobile (iPhone 3 - iPhone XS Max).
      sm: "897px", // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      md: "1199px", // Tablet (matches max: iPad Pro @ 1112px).
      lg: "1258px", // Desktop smallest.
      xl: "1358px", // Desktop wide.
      "2xl": "1699px", // Desktop widescreen.
      "3xl": "1700px", // Desktop widest.
    },
    extend: {
      fontFamily: {
        Noto: ["Noto Sans", "sans-serif"],
        Cormorant: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
