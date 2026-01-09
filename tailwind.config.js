/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Mario-inspired palette
        'mario-red': '#E52521',
        'mario-blue': '#049CD8',
        'mario-yellow': '#FBD000',
        'mario-green': '#43B047',
        'mario-brown': '#8B4513',
        'mario-orange': '#F5A623',
        // Pipe colors
        'pipe-green': '#2D8B4D',
        'pipe-light': '#5AC575',
        'pipe-dark': '#1A5C33',
        // Sky colors
        'sky-light': '#87CEEB',
        'sky-mid': '#5BA3D9',
        // Ground colors
        'ground-tan': '#D2B48C',
        'ground-dark': '#A0522D',
        // Classic mode colors
        'classic-bg': '#FAFAFA',
        'classic-text': '#1A1A2E',
        'classic-accent': '#4A90D9',
        'classic-muted': '#6B7280',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'display': ['"Archivo Black"', 'sans-serif'],
        'body': ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'bob': 'bob 2s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-subtle': 'bounce-subtle 1s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-5px) scale(1.02)' },
        },
        drift: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(67, 176, 71, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(67, 176, 71, 0.8)' },
        },
      },
      backgroundImage: {
        'pixel-grid': `
          linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'pixel-grid': '8px 8px',
      },
    },
  },
  plugins: [],
}
