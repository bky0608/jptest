/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        h1: ['1.25rem', { lineHeight: '1.875rem', fontWeight: '700' }],
        h2: ['1rem', { lineHeight: '1.5rem', fontWeight: '700' }],
        h3: ['0.875rem', { lineHeight: '1.375rem', fontWeight: '700' }],
        body1: ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        body2: ['0.875rem', { lineHeight: '1.375rem', fontWeight: '400' }],
        body3: ['0.75rem', { lineHeight: '1.125rem', fontWeight: '400' }],
      },

      width: {
        wrap: '954px',
        box: '294px',
      },

      height: {
        box: '378px',
      },

      height: {
        180: '180px',
      },

      padding: {
        4.5: '1.125rem',
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
