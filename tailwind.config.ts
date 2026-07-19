import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primer: {
          bg: {
            default: '#ffffff',
            muted: '#f6f8fa',
            subtle: '#eaeef2',
            overlay: '#ffffff',
          },
          border: {
            default: '#d0d7de',
            muted: '#eaeef2',
          },
          fg: {
            default: '#24292f',
            muted: '#57606a',
            subtle: '#8b949e',
          },
          accent: {
            fg: '#238636',
            muted: '#94d82d',
          },
          success: {
            fg: '#1a7f37',
            emphasis: '#238636',
          },
          attention: {
            fg: '#9e6a03',
            subtle: '#fff8c5',
          },
          danger: {
            fg: '#da3633',
            muted: '#ffcccc',
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0, 0, 0, 0.08)',
        md: '0 3px 12px rgba(0, 0, 0, 0.12)',
        lg: '0 8px 24px rgba(0, 0, 0, 0.12)',
        inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.25)',
      },
    },
  },
  plugins: [],
}

export default config
