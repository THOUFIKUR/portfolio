/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1F5D2B',
          dark: '#16431F',
          light: '#287737',
          muted: '#2a6a38',
        },
        sand: {
          DEFAULT: '#E8DCC4',
          light: '#F3ECE0',
          dark: '#D8C7A5',
        },
        purple: {
          electric: '#8B5CF6',
          light: '#A78BFA',
          dark: '#7C3AED',
          glow: 'rgba(139, 92, 246, 0.25)',
        },
        charcoal: {
          DEFAULT: '#20231F',
          muted: '#343833',
          light: '#4B504A',
        },
        ivory: {
          DEFAULT: '#F8F5ED',
          pure: '#FBF9F4',
        }
      },
      fontFamily: {
        sans: ['"Times New Roman"', 'Times', 'Georgia', 'serif'],
        display: ['"Syne"', '"Space Grotesk"', 'sans-serif'],
        editorial: ['"Times New Roman"', '"Cormorant Garamond"', 'Times', 'Georgia', 'serif'],
        serif: ['"Times New Roman"', '"Cormorant Garamond"', 'Times', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(32, 35, 31, 0.05)',
        'card': '0 10px 30px -10px rgba(31, 93, 43, 0.08)',
        'elevated': '0 20px 40px -15px rgba(32, 35, 31, 0.12)',
        'purple-glow': '0 0 25px rgba(139, 92, 246, 0.35)',
      }
    },
  },
  plugins: [],
}

