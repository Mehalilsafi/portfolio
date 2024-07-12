/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
      textColor: {
        fontPrimary: 'var(--font-color)',
      },
      backgroundColor: {
        bgPrimary: 'var(--back-ground-coolor)',
        bgSecondary: 'var(--secondary-color)',
      },
      boxShadow: {
        'custom': '0 10px 20px -5px rgba(0, 0, 0, 0.6), 0 6px 10px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}

