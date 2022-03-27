module.exports = {
  theme: {
    colors: {
      background: 'red',
      'gray-line': '#E0E0E0',
      'color-primary': '#21243D',
      'color-secondary': '#FF6464',
      'color-light': '#8695A4',
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
};