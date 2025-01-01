/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about-banner': "url('./src/assets/images/desk-image.png')",
      },
      colors: {
        primary: '#d8e3f7',
        secondary: '#374151',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1200px',
        }
      },
      textColor: {
        primary: '#1a2435',
        secondary: '#d8e3f7',
      },
      boxShadow: {
        'inner-lg': 'inset 0px 4px 10px 0px rgba(0, 0, 0, 0.1)', 
        'inner-xl': 'inset 0px 6px 15px 0px rgba(0, 0, 0, 0.15)', 
      },
    },
  },
  plugins: [],
}