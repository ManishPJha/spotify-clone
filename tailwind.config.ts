import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './partials/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#00ccac',
          secondary: '#004aff',
          accent: '#00c4ab',
          neutral: '#29240b',
          'base-100': '#222222',
          info: '#00eeff',
          success: '#5d8600',
          warning: '#e35300',
          error: '#ff6976',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
export default config
