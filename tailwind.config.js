/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      maxWidth: {
        DEFAULT: '1340px',
      },
      px: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '4rem',
        lg: '6rem',
        xl: '8rem',
      },
    },
    extend: {
      colors: {
        white: 'var(--white)',
        black: 'var(--black)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'color-base': 'var(--font-color-base)',
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
        paperlogy: ['Paperlogy', 'sans-serif'],
      },
      boxShadow: {
        'custom-bottom': '0 -5px 60px rgba(38, 89, 115, 0.11), 0 -1px rgba(38, 89, 115, 0.05)',
      },
      height: {
        'main-minus-header': 'calc(100svh - 56px)',
        'main-minus-double-header': 'calc(100svh - 112px)',
      },
    },
  },
  plugins: [],
};
