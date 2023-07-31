/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      "colors": {
        mblue: "hsl(238, 40%, 52%)",
        sred: "hsl(358, 79%, 66%)",
        lgblue: "hsl(239, 57%, 85%)",
        pred: "hsl(357, 100%, 86%)",
        dblue: "hsl(212, 24%, 26%)",
        gblue: "hsl(211, 10%, 45%)",
        lgray: "hsl(223, 19%, 93%)",
        vlgray: "hsl(228, 33%, 97%)"
      },
      "fontSize": {
        rem: "16px"
      },
      "fontFamily": {
        rubik: ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}

