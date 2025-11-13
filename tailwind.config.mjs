/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Roboto', 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', 'Arial', 'sans-serif'],
        'mono': ['ui-monospace', 'Cascadia Code', 'Source Code Pro', 'Menlo', 'Consolas', 'DejaVu Sans Mono', 'monospace'],
      },
      colors: {
        'gray-900': '#111827',
        'gray-600': '#4b5563',
        'gray-500': 'rgb(78, 80, 86)',
        'gray-200': 'rgb(230, 230, 230)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
        '4xl': '100px',
      },
      screens: {
        'max-h-sm': {'raw': '(max-height: 368px)'},
      }
    },
  },
  plugins: [],
}
