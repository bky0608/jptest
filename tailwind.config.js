/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        s: '12px',
        b: '14px',
        l: '16px',
        xl: '20px',
      },

      lineHeight: {
        s: '18px',
        b: '22px',
        l: '24px',
        xl: '30px',
      },

      colors: {
        gray01: '#323438',
        gray02: '#85878C',
        gray03: '#E5E6E9',
        white: '#686A6D',
        green: '#00C362',
        blue: '#2196F3',
      },

      boxShadow: {
        shadow01: '0px 1px 4px 0px rgba(30, 40, 58, 0.04)',
      },
    },
  },
  plugins: [],
};
