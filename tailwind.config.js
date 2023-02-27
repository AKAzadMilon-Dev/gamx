/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1175px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#262626",
        textColor: "#01DACB",
        orange:"#FBB608",
        blue:"#4F06FD",
        red: "#FB5A08",
        green: "#D5E81A",
        purpole: "#FB06FC",
        roundBlack: "#141635"
      },
    },
  },
  plugins: [],
}
