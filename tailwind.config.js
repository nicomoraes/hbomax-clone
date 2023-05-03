const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#030328",
        "violet-800": "#310E54",
        "violet-500": "#8529DE",
        "violet-400": "#9E84E3",
        "violet-200": "#9482FF",
        "pink-500": "#FF00E5",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
      },
      fontSize: {
        "2xs": "8.8px",
      },
      backgroundImage: {
        "secondary-button-gradient":
          "linear-gradient(345deg, #490cb0 0%, #9b34ef 33%, rgba(255, 255, 255, 0) 66%, rgba(255, 255, 255, 0) 100% )",
        "hero-video-gradient":
          "linear-gradient( 180deg, rgba(3, 3, 40, 0) 0%, rgba(3, 3, 40, 1) 100% )",
        "payment-plans-image":
          "url(https://hbomax-images.warnermediacdn.com/2022-06/plans_background.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com)",
        "payment-plans-card-gradient":
          "linear-gradient(180deg,rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)",
        "payment-plan-featured-card-before-gradient":
          "linear-gradient(46deg, #5b16bd, #b908f6)",
        "new-releases-gradient":
          "linear-gradient(0, rgb(62 17 96), rgb(3 3 40))",
        "new-releases-date-gradient":
          "linear-gradient(to left, rgba(116, 9, 121, 1), rgba(185, 8, 246, 1), rgba(91, 28, 230, 1) )",
        "new-releases-gradient-mobile":
          "radial-gradient( 50% 66.6% at 50% 20.45%, rgba(196, 6, 154, 0.65) 0%, rgb(62 17 96) 100% )",
        "featured-releases-navigation-background-mobile":
          "linear-gradient(180deg, rgb(62 17 96), rgba(3, 3, 40, 0.4))",
      },
      backgroundSize: {
        "secondary-button-size": "300% 100%",
      },
      backgroundPosition: {
        "secondary-button-position": "100% 0",
        "secondary-button-hover-position": "0",
      },
      keyframes: {
        "slide-down": {
          from: {
            height: 0,
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "slide-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: 0,
          },
        },
      },
      animation: {
        "accordion-content-slide-down":
          "slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        "accordion-content-slide-up":
          "slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [],
};
