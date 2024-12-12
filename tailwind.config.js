// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'industrial': {
          'blue': '#1A5F7A',
          'dark': '#2C3E50',
          'orange': '#E67E22',
          'orange-dark': '#D35400',
          'gray-light': '#F4F6F7',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
