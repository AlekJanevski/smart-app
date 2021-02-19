module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['Ubuntu']
      },
      colors: {
        'red': '#FF244C',
        'gray': '#797979',
        'lighter-gray': '#A8A8A8',
        'light-gray': '#F7F7F9',
        'medium-gray': '#A4A8AB',
        'dark-gray': '#535353',
        'action-icon-gray': '#E5E7EB',
        'brown': '#4F352F',
        'light-gray-border': '#E5E5E7'
      },
      maxWidth: {
        'btn': '15rem',
        'inc-dec-btns': '8.125rem'
      },
      minWidth: {
        'det-box': '130px'
      },
      backgroundSize: {
        '1': '1rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
