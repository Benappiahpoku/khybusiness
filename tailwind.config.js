/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Updated brand colors with full scale - Khy theme
        primary: {
          50: '#F8F9FA',
          100: '#F1F3F4',
          200: '#E8EAED',
          300: '#DADCE0',
          400: '#BDC1C6',
          500: '#9AA0A6',
          600: '#FFFFFF',
          700: '#F8F9FA',
          800: '#E8EAED',
          900: '#DADCE0',
          DEFAULT: '#FFFFFF'
        },
        secondary: {
          50: '#F8F9FA',
          100: '#F1F3F4',
          200: '#E8EAED',
          300: '#DADCE0',
          400: '#9AA0A6',
          500: '#888888', // Updated to new secondary base color
          600: '#000000',
          700: '#1F2937',
          800: '#111827',
          900: '#030712',
          DEFAULT: '#888888' // Updated from black to #888888
        },
        // Additional utility colors
        'bg-light': '#F9FAFB',
        'text-main': '#1F2937',
        'border-gray': '#E5E7EB',
        success: '#10B981',
        danger: '#EF4444',
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827'
        }
      },
      spacing: {
        'touch-min': '3rem',
        'touch-safe': '4rem'
      },
      borderRadius: {
        khy: '0.375rem'
      }
    }
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms')]
}
