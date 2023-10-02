/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
<<<<<<< HEAD
      backgroundColor: {
        'bg-logado': '#EDEDED', // Adicione a cor de fundo personalizada aqui
      },

      colors: {
        'text-error': '#933B3B',
        'color-p2': '#00482E',
      },

=======
>>>>>>> 774bc20 (parte de notificacao)
    },
  },
  plugins: [],
}
