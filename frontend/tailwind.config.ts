import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#071a2b',
        panel: '#0d2138',
        accent: '#38bdf8',
        cyansoft: '#67e8f9',
        success: '#34d399',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(56,189,248,0.4), 0 18px 40px rgba(8,145,178,0.25)',
      },
    },
  },
  plugins: [],
}

export default config
