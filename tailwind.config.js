/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        pink: "#F9F1E7",
        black: "#000000",
        background: "#FFFFFF",
      },

      colors:{
        grayFonte:"#9F9F9F",
        peach: "#FFF3E3",
        mustard: "#B88E2F",
        grayBackground:"#F4F5F7",
        blackhover:"#3A3A3A",
        pink: "#F9F1E7",

      },

      textColor:{
        mustard: "#B88E2F",
        grayFontHome:"#898989"
      },

      border:{
        mustard: "#B88E2F",
      },
        
      fontFamily:{
        Poppins: "Poppins",
      },

      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
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

      width:{
        217:"13.563rem",
        286:"17.875rem",
        643:"40.188rem",
        546:"34.125rem",
        220:"13.75rem",
        72:"4.5rem",
        1236:"77.25rem",
        285:"17.813rem",
        202:"12.625rem",
        245:"15.313rem",
        404:"25.25rem",
        176:"11rem",
        48:"3rem",
        876:"54.75rem"

      },

      height:{
        505: "31.563rem",
        72:"4.5rem",
        101:"6.313rem",
        443:"27.688rem",
        446:"27.875rem",
        670:"41.875rem",
        48:"3rem",
        582:"36.375rem",
        130:"8.125rem",
        270:"16.875rem",
      },

      margin:{
        10:"0.625rem",
        24:"1.5rem",
        32:"2rem",
        46:"2.875rem",
        47:"2.938rem",
        48:"3rem",
        56:"3.5rem",
        58:"3.625rem",
        69:"4.313",
        100:"6.25rem",
      },

      space:{
        46:"2.875rem",
        5:"0.313rem"
      },

      backgroundImage: {
        'img-header': "url('https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsHome/header.jpg')",
        'img-path': "url('https://mariaedurda-projetofurniro.s3.amazonaws.com/imgsComponents/img-path.png')"
      },

      padding:{
        67:"4.188rem",
        50:"3.125rem",
        69:"4.313rem"
      }


    },
  },
  plugins: [],
}

