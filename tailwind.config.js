/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#F5F5F7',
          soft: '#EFEFF2',
          muted: '#E8E8ED',
        },
        ink: {
          DEFAULT: '#1D1D1F',
          secondary: '#424245',
          muted: '#6E6E73',
          faint: '#86868B',
        },
        accent: {
          DEFAULT: '#0071E3',
          light: '#2997FF',
          pale: '#E8F2FC',
          dark: '#0077ED',
        },
        border: {
          DEFAULT: '#D2D2D7',
          light: '#E8E8ED',
          dark: '#B0B0B5',
        },
        panel: {
          DEFAULT: '#FFFFFF',
          tint: '#FBFBFD',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(2.75rem, 8vw, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.045em', fontWeight: '600' }],
        'headline': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '600' }],
        'title': ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '128': '32rem',
      },
      maxWidth: {
        'content': '720px',
        'wide': '980px',
        'full-content': '1120px',
      },
      transitionTimingFunction: {
        apple: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'apple-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float-slow': 'float 10s ease-in-out infinite',
        'mesh': 'mesh 20s ease-in-out infinite',
        'bob': 'bob 2s ease-in-out infinite',
        'caret-blink': 'caretBlink 1s steps(1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)', filter: 'blur(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        mesh: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(2%, -3%) scale(1.05)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(5px)' },
        },
        caretBlink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)',
        'card-hover': '0 16px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)',
        'panel': '0 0 0 1px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)',
        'nav': '0 8px 30px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}
