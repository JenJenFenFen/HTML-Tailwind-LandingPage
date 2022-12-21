tailwind.config = {
  content: [],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down-text1': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },

        'fade-in-down-text2': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down1': 'fade-in-down-text1 1s ease-out',
        'fade-in-down2': 'fade-in-down-text2 1s ease-out',
        'fade-in-down3': 'fade-in-down 3s ease-out',
        'fade-in-down4': 'fade-in-down 4s ease-out'
      }
    },
  },
  variants: {},
  plugins: [],
}