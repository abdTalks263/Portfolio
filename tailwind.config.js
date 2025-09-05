/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00BFFF', // Electric Blue
        secondary: '#FF6B6B', // Coral Red
        background: '#0F0F0F', // Very Dark Gray
        'text-primary': '#FFFFFF', // Pure White
        'text-secondary': '#E0E0E0', // Light Gray
        'text-muted': '#B0B0B0', // Medium Gray
        'border-light': '#2A2A2A', // Dark Gray
        'border-medium': '#404040', // Medium Dark Gray
        'dark': '#0F0F0F', // Very Dark Gray
        'dark-light': '#1A1A1A', // Dark Gray
        'accent': '#00BFFF', // Electric Blue
        'accent-light': '#40CFFF', // Light Blue
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
