module.exports = {
    content: ["./src/**/*.{html,js}"],

      theme: {
        extend: {
            screens: {
              sm: '480px',
              md: '768px',
              lg: '976px',
              xl: '1440px',
            },
            colors: {
            //   'blue': '#1fb6ff',
            //   'purple': '#7e5bef',
              'pink': '#ff49db',
              'orange': '#ff7849',
            //   'green': '#13ce66',
            //   'yellow': '#ffc82c',
              'gray-dark': '#273444',
            //   'gray': '#8492a6',
              'gray-light': '#d3dce6',
              'blue-light': '#f6f8fa'
            },
            fontFamily: {
              sans: ['Graphik', 'sans-serif'],
              serif: ['Merriweather', 'serif'],
            },
            spacing: {
              '128': '32rem',
              '144': '36rem',
              '304': '76rem'

            },
            borderRadius: {
              '4xl': '2rem',
            }
        }
      }
    }
