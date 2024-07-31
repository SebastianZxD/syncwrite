import type { Config } from 'tailwindcss';

const { fontFamily } = require('tailwindcss/defaultTheme');

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
        xs: '360px',
      },
    },
    extend: {
      colors: {
        blue: {
          100: '#FADADD', // Light Pink
          400: '#F9B7C3', // Medium Light Pink
          500: '#F8A3AF', // Medium Pink
        },
        red: {
          400: '#FD5E53', // Sunset Orange
          500: '#FC4A37', // Deep Sunset Orange
        },
        dark: {
          100: '#1A1410', // Darker with a hint of orange
          200: '#18120E', // Even darker with a hint of orange
          300: '#16100C', // Dark medium with a hint of orange
          350: '#140E0A', // Dark with a stronger hint of orange
          400: '#120C08', // Very dark with a stronger hint of orange
          500: '#100A06', // Darkest with a noticeable hint of orange
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      backgroundImage: {
        doc: 'url(/assets/images/doc.png)',
        modal: 'url(/assets/images/modal.png)',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;