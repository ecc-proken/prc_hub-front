module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        custom: '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        'primary-blue': '#24AEDC',
        'noble-white': '#F8F8F8',
      },
      backgroundImage: {
        'bg-text': "url('/front/public/svg/bg_text.png')",
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
}
