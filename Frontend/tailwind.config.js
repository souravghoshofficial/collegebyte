/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-lg': "url('./assets/backgrond-lg.svg')",
        'background-sm': "url('./assets/backgrond-sm.svg')",
        'login-background': "url('./assets/login-bg-desktop.jpg')",
        'login-background-sm': "url('./assets/login-bg-mobile.jpeg')",
      }
    },
  },
  plugins: [],
}

