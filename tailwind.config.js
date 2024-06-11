/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}',
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#B1CBFB',
          100: '#8BB1F9',
          200: '#6E9EF7',
          300: '#4784F5',
          400: '#2A71F4',
          500: '#0B52D5',
          600: '#083C9B',
          700: '#062B6F',
          800: '#052257',
          900: '#03163A',
        },
        secondary: {
          50: '#FFE2AD',
          100: '#FFD485',
          200: '#FFCA66',
          300: '#FFBB3D',
          400: '#FFB11F',
          500: '#E09200',
          600: '#A36A00',
          700: '#754C00',
          800: '#5C3C00',
          900: '#523500',
        },
        tertiary: {
          50: '#F4B8C2',
          100: '#EF95A4',
          200: '#EB7A8D',
          300: '#E6566E',
          400: '#E23C57',
          500: '#C31D39',
          600: '#8E1529',
          700: '#731122',
          800: '#550C18',
          900: '#3E0912',
        },
      },
      fontSize: {
        'display': ['3rem', '3.5rem'],
        'h1': ['2.75rem', '3.25rem'],
        'h2': ['2.25rem', '2.75rem'],
        'h3': ['1.75rem', '2.25rem'],
        'h4': ['1.5rem', '2rem'],
        'h5': ['1.25rem', '1.75rem'],
        'p18': ['1.125rem', '1.625rem'],
        'p16': ['1rem', '1.5rem'],
        'p12': ['0.75rem', '1.125rem'],
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.btn': {
          display: 'flex',
          borderRadius: '5px',
          alignItems: 'center',
          fontWeight: '500'
        },
        '.btn-lg': {
          height: '2.5rem',
          gap: '0.5rem',
          padding: '0 1rem',
        },
        '.btn-md': {
          height: '2rem',
          gap: '0.5rem',
          padding: '0 1rem',
        },
        '.btn-sm': {
          height: '1.75rem',
          gap: '0.25rem',
          padding: '0 0.5rem',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover', 'focus', 'active']);
    },
  ],
};
