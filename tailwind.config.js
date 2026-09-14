/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7F58FA',
          hover: '#6C44E8',
          light: '#F3EFFF',
        },
        secondary: {
          DEFAULT: '#60D6A7',
          light: '#E9FBF3',
        },
        accent: {
          DEFAULT: '#FFB3C7',
          light: '#FFF0F4',
        },
        info: {
          DEFAULT: '#93C5FD',
          light: '#EFF6FF',
        },
        warning: {
          DEFAULT: '#FDE68A',
          light: '#FEF9C3',
        },
        danger: {
          DEFAULT: '#F87171',
          light: '#FEE2E2',
        },
        'page-bg': '#FDFAFF',
        surface: '#FFFFFF',
        'border-subtle': '#E5E7EB',
        'text-main': '#1F2937',
        'text-muted': '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(127, 88, 250, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        card: '0 6px 24px -4px rgba(127, 88, 250, 0.09), 0 2px 8px -2px rgba(31, 41, 55, 0.03)',
        pop: '0 12px 36px -6px rgba(127, 88, 250, 0.16), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
