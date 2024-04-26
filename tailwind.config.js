/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{jsx,js,ts,tsx}'];
export const theme = {
  extend: {
    colors: {
      blue: {
        5: '#03153D',
        10: '#D0E9F2',
        15: '#ACD1F2',
        20: '#253B6E',
        25: '#CFEBF9',
        30: '#020659',
        40: '#2196F3',
        45: '#3F7EA3',
        60: '#3F51B5',
        80: '#89CFF0',
        90: '#01040F',
        110: '#041742',
        120: '#010614',
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
       'bg' : "url('/Backgroud1.jpg')",
       'bg2' : "url('/bg-2.jpg')",
       'bg3' : "url('/bg3.jpg')",
       'bg4' : "url('/bg--3.jpg')",
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

