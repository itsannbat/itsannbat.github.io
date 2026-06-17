import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0d0d0d',
        surface: '#161616',
        border: '#2a2a2a',
        text: '#e8e8e8',
        muted: '#888888',
        accent: '#7c9ef5',
        pill: '#1e1e1e',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1100px',
      },
    },
  },
  plugins: [],
} satisfies Config;
