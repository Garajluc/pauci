/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // Roboto for both brands; the system stack stays as fallback while the
        // webfont loads or if it fails to.
        sans: [
          'Roboto',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
        ],
      },
      colors: {
        // Pauči (sub-brand) background
        cream: '#FEEDDB',

        // Shared accent — CTAs and highlights on both brands
        coral: {
          DEFAULT: '#FC7761',
          700: '#ea5b44',
        },

        // Shared brand blue — headings and body copy
        ink: {
          DEFAULT: '#2642CA',
          700: '#1d34a3',
          50: '#EEF1FD',
        },

        // Pouchy (main brand) — clean neutral backgrounds
        paper: '#FFFFFF',
        mist: '#F7F8FC',
      },
    },
  },
  plugins: [],
};
