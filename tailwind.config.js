const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#030328',
        'violet-500': '#8529DE',
        'violet-400': '#9E84E3',
        'violet-200': '#9482FF',
        'pink-500': '#FF00E5',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans],
      },
      backgroundImage: {
        'secondary-button-gradient':
          'linear-gradient(345deg, #490cb0 0%, #9b34ef 33%, rgba(255, 255, 255, 0) 66%, rgba(255, 255, 255, 0) 100% )',
      },
      backgroundSize: {
        'secondary-button-size': '300% 100%',
      },
      backgroundPosition: {
        'secondary-button-position': '100% 0',
        'secondary-button-hover-position': '0',
      },
    },
  },
  plugins: [],
};
