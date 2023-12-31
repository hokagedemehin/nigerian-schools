import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)"],
      },
      colors: {
        main: '#002D72',
        mainHover: '#002366',
        otherMain: '#001D49',
        dublicateContrib: '#7B7112',
        unverifiedContrib: '#6E101B',
        noUniBg: '#EEF4FF',
        noStateBg: '#FFF3D2',
        noPolyBg: '#FFE2E2',
      }
    },
  },
  plugins: [],
}
export default config
