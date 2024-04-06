/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '550px',
      lg: '960px',
      xl: '1295px'
    },
    colors: {
      'default': '#212529',
      'black': '#000000',
      'black-light': '#131618',
      'gray': '#6C757D',
      'gray-1': '#F8F9FA',
      'gray-2': '#F5F7FA',
      'gray-3': '#B7BFCB',
      'gray-4': 'rgba(211, 216, 221, 0.5)',
      'blue': '#007BFF ',
      'white': '#ffffff',
      'red': '#DC3545'
    },
    fontFamily: {
      primaryRegular: ['FiraGO-Regular'],
      primaryMedium: ['FiraGO-Medium'],
      primarySemiBold: ['FiraGO-SemiBold']
    },
    extend: {
    }
  },
  plugins: [require("tw-elements/plugin.cjs")],
}