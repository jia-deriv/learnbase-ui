/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'libs/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    join(__dirname, 'apps/**/*.{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary: '#6b7280',
        error: '#e3342f',
        success: '#38c172',
        warning: '#f39c12',
      },
      keyframes: {
        'zoom-in': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        'zoom-in': 'zoom-in 0.3s ease',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      borderWidth: {
        DEFAULT: '1px',
        6: '6px',
      },
    },
  },
};
