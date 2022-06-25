module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      '_purple'   : '#091924',
      '_darkblue' : '#F7E2E2',
      '_blue'     : '#16C0C7',
      '_lightblue': '#C0D2D9',
      '_red'      : '#E65650',
      // '_lightblue': '#61A4BC',
      // '_blue'     : '#5B7DB1',
      // '_darkblue' : '#1A132F',
      // '_palewhite': '#F7E2E2',
      // '_white'    : '#ffffff'
    },
    fontFamily: {
      'sans': [ '"Poppins"','"DM Sans"', 'sans-serif'], 
      'mono': ['"IBM Plex Mono"', 'monospace'],
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
