/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{jsx,js,ts,tsx}'];
export const theme = {
  extend: {
    colors: {
      blue: {
        10: '#D0E9F2',
        15: '#ACD1F2',
        20: '#253B6E',
        25: '#CFEBF9',
        30: '#020659',
        40: '#2196F3',
        60: '#3F51B5',
        80: '#89CFF0',
      },
      green: {
        5:  '#9AD2EE',
        10: '#C9EEF2',
        30: '#0FA68A',
        50: '#127361',
        60: "#078B9B",
        70: "#0A8378",
      },
      grey: {
        40: '#E4E7EB',
        60: '#666666',
      },
    },
    backgroundImage:{
      'logo-img': "url('/logo-img.png')",
      'menu':"url('/menu.svg')",
    },
    screens:{
      xs: '400px',
      '3xl': '1680px',
      '4xl': '2200px',
    },
    maxWidth:{
      '10xl': '1512px',
    },
    borderRadius:{
      '5xl': '40px',
    },
  },
};
export const plugins = [];

