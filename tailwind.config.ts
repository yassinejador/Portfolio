import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#cef4fc',
          100: '#cef4fc',
          200: '#cef4fc',
          300: '#cef4fc',
          400: '#cef4fc',
          500: '#cef4fc',
          600: '#cef4fc',
          700: '#cef4fc',
          800: '#cef4fc', 
          900: '#cef4fc',
        },
        secondary: {
          50: '#cef4fc',
          100: '#cef4fc',
          200: '#cef4fc',
          300: '#cef4fc',
          400: '#cef4fc',
          500: '#cef4fc',
          600: '#cef4fc',
          700: '#cef4fc',
          800: '#cef4fc',
          900: '#cef4fc',
        },
        custom: {
          black: '#000000',
          white: '#ffffff',
          blue: '#cef4fc',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

