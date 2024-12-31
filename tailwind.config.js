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
      mawWidth: {
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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'color-base': '#1d1d1d', // SCSS 변수의 값을 여기에 입력
      },
      boxShadow: {
        'custom-bottom': '0 -5px 60px rgba(38, 89, 115, 0.11), 0 -1px rgba(38, 89, 115, 0.05)',
      },
      fontFamily: {
        paperlogy: ['Paperlogy', 'sans-serif'], // Paperlogy 폰트 추가
      },
      height: {
        'main-minus-header': 'calc(100svh - 56px)', // 첫 번째 값
        'main-minus-double-header': 'calc(100svh - 112px)', // 두 번째 값
      },
    },
  },
  plugins: [],
};
