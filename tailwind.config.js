/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        'Poppins':['Poppins','sans-serif'],
        'RedHatDisplay':['Red Hat Display','sans-serif'],
      }
      
    },
  },
  plugins: [ 
    require('tailwind-clip-path'),
  ],
}

