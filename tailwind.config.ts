import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgdark: '#0D062D',
        grey: '#262626',
        darkcard: '#171717',
        bgwhite: '#FAFAFA',
        sidebar: '#F7F8FA',
        primary: '#34CAA5',
        divider: '#E5EAEF',
        dividerdark: '#404040',
        gray: {
          100: '#DADDDD',
          200: '#EDF2F7',
          250: '#EDF2F6',
          300: '#E1DFDF',
          400: '#E6E6E6',
          500: '#F5F5F5'
        },
        textlight: {
          60: '#9CA4AB',
          100: '#787486',
          200: '#26282C',
          300: '#3A3F51',
          400: '#898989',
          500: '#606060',
          550: '#525252',
          600: '#22242C'
        },
        textdark: {
          100: '#B2ABAB',
          200: '#737373'
        },
        error: '#ED544E'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        'phones': '500px',
        'tab': '600px',
        'mids': '1000px',
        'desktop': '1270px'
      },
    },
  },
  plugins: [],
};
export default config;
