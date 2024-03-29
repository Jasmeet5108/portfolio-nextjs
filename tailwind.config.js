/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'ph': '300px', // => @media (min-width: 300px) { ... }

      'pad': '450px', // (min-width: 450px) 

      'b-pad': '550px', // (min-width: 550px) 

      'sm': '640px', // (min-width: 640px) 

      'md': '768px', // (min-width: 768px) 

      'bmd': '950px', // (min-width: 950px) 

      'lg': '1024px', // (min-width: 1024px) 

      'blg': '1170px', // (min-width: 1170px) 

      'xl': '1280px', // (min-width: 1280px) 

      '2xl': '1536px', // (min-width: 1536px) 
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
