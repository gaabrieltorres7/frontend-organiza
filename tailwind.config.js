/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },

      fontSize: {
        '64': '4rem',
      },

      width: {
        '1040': '65rem',
      },

      height: {
        '688': '43rem',
      },

      textColor: {
        'custom-green': '#218460',
        'cor-fundo': '#002216',
      },

      backgroundColor: {
        'cor-button': '#3B9373',
        'cor-fundo': '#002216',
        'custom-green': '#218460',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      gradientColorStops: {
        'custom1-green': '#218460',
        'custom2-green': '#1BC149',
        'custom3-green': '#115267',
      },
    },
  },
  plugins: [],
}
