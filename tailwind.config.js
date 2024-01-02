/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#A6ABC8",
        primary: "#082431",
        grey100: "F1F2F7",
        bluePrimary: "#5A6ACF",
        blue100: "#707FDD",
      },
    },
  },
  plugins: [],
};
