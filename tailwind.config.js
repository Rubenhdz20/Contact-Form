/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'strong-grey': '#2A4144',
        'light-grey': '#86A2A5',
        'white': '#FFFFFF',
        'strong-green': '#0C7D69',
        'light-green': '#E0F1E8',
        'errors': '#D73C3C',
      },
      fontFamily: {
        serif: ["Karla", 'sans-serif'],
      },
      spacing: {
        '100': '.5rem',
        '150': '.75rem',
        '200': '1rem',
        '300': '1.5rem',
        '400': '2rem',
        '500': '2.5rem',
        '500': '8rem',
      },
    },
  },
  plugins: [],
}