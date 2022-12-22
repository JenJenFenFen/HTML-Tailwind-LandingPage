tailwind.config = {
  content: [],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 1s ease-out'
      },
      margin: {
        '630px': '630px',
        '200px': '200px'
      }
    },
  },
  variants: {},
  plugins: [],
}