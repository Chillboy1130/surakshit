/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        police: {
          blue: '#1a365d',
          gold: '#ffd700',
          red: '#dc2626',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1617625802912-cde586faf331?q=80&w=1932&auto=format&fit=crop')",
      },
    },
  },
  plugins: [],
};