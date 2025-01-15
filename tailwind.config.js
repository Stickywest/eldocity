/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',  // Ensure it matches the file structure of your project
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#e1dfe0',
        darkGray: '#323233',
        pink: '#db6676',
        blue: '#5a79a7',
      },
    },
  },
  plugins: [],
}
