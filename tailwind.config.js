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
      animation: {
        'fade-out': 'fadeOut 3s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
