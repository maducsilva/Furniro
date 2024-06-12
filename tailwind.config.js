/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        mustard: "#B88E2F",
        peach: "#FFF3E3",
        pink: "#F9F1E7",
        black: "#000000",
        background: "#FFFFFF",
      },
        
      fontFamily:{
        Poppins: "Poppins",
      },

      fontSize:{
        16:"1rem",
        34:"2.125rem",
        52:"3.25rem",
        18:"1.125rem",
        32:"2rem",
        20:"1.25rem",
        24:"1.5rem",
        40:"2.5rem",
        14:"0.875",
        42:"2.625rem",
        13:"2.625rem",
        12:"0.75rem",
        48:"3rem",
        25:"1.563rem",
        36:"1.563rem"
      },


    },
  },
  plugins: [],
}

