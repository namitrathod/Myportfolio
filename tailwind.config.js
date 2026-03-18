/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm off-white base
        canvas: {
          DEFAULT: '#F7F5F2',
          soft: '#F0EDE8',
          muted: '#E8E4DD',
        },
        // Charcoal text system
        ink: {
          DEFAULT: '#1C1C1C',
          secondary: '#4A4A4A',
          muted: '#6E6E6E',
          faint: '#9A9A9A',
        },
        // Single accent: deep forest green
        accent: {
          DEFAULT: '#2D6A4F',
          light: '#3D8B68',
          pale: '#E8F4EE',
          dark: '#1B4332',
        },
        // Neutral borders and panels
        border: {
          DEFAULT: '#DDD9D3',
          light: '#EAE7E2',
          dark: '#C4BFB8',
        },
        panel: {
          DEFAULT: '#EFECE7',
          tint: '#EAF1ED',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'headline': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'title': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '128': '32rem',
      },
      maxWidth: {
        'content': '720px',
        'wide': '960px',
        'full-content': '1200px',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.05)',
        'panel': '0 0 0 1px rgba(0,0,0,0.05), 0 2px 8px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
}
