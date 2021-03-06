var html = require('choo/html')
var gr8 = require('gr8')
var recsst = require('recsst')
var lilcss = require('lilcss')

var gr8css = gr8({
  breakpoints: {
    md: '100px',
    sm: '650px'
  },
  lineHeight: [1, 1.5].map(size => {
    return { [size.toString().replace('.', '-')]: size * 1.1 }
  }),
  fontSize: [1],
  spacing: [0, 0.5, 1, 1.5, 2, 3, 4].map(size => {
    return { [size.toString().replace('.', '-')]: (size * 1.1 * 1.5) / 2 }
  }),
  responsive: true
})

var type = {
  sans: '"Lars Sans", sans-serif',
  mono: '"Lars Mono", menlo, monaco, monospace'
}

var colors = {
  white: '#000',
  black: '#fff',
  grey: '#ccc',
  greylight: '#eee',
  greydark: '#999'
}

// fonts
gr8css.add({
  prop: 'font-family',
  vals: type
})

// backgrounds
gr8css.add({
  prop: 'background-color',
  prefix: 'bg',
  hyphenate: true,
  vals: colors
})

// colors
gr8css.add({
  prop: 'color',
  prefix: 'tc',
  hyphenate: true,
  vals: colors
})

// rag widths
gr8css.add({
  prop: 'width',
  prefix: 'wr',
  unit: 'rem',
  vals: [0, 5, 10, 15, 20]
})

gr8css.add({
  prop: 'width',
  prefix: 'w',
  unit: '%',
  vals: [20]
})

// viewport min heights
gr8css.add({
  prop: 'min-height',
  prefix: 'vhmn',
  unit: 'vh',
  vals: [0, 25, 33, 50, 66, 75]
})

var custom = `
  html {
    font-size: 100% ;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings:"kern" 1; 
    -ms-font-feature-settings:"kern" 1; 
    -o-font-feature-settings:"kern" 1; 
    -webkit-font-feature-settings:"kern" 1; 
    font-feature-settings:"kern" 1;
    font-kerning: normal;
  }

  html, body { overflow-x: hidden }

  ::-moz-selection { background: rgba(127, 127, 127, 0.5) }
  ::selection { background: rgba(127, 127, 127, 0.5) }

  .copy-links a {
    color: ${colors.white};
    text-decoration: none;
  }

  .copy a {
    color: ${colors.white};
    text-decoration: none;
    border-bottom: 1px solid ${colors.white};
    padding-bottom: 0.2rem;
  }

  figure {
    margin: 0;
  }

  .copy figure, .copy .embed-responsive { width: 100%; max-width: 100%; }
  .copy img { max-width: 100%; display: block; }

  .embed-responsive { position: relative }
  .embed-responsive > * {
    position: absolute;
    top: 0;
    left: 0; 
    width: 100%;
    height: 100%;
  }

  .embed-responsive-16by9 {
    padding-bottom: 56.25%
  }

  .copy figure a { border: none }

  hr {
    height: 1px;
    width: 100%;
    background: ${colors.white};
    border: 0;
    margin: 0;
  }

  h1, h2 {
    font-weight: normal;
    font-size: 1rem;
  }

  .tch-parent:hover .tch-white {
    color: ${colors.white};
  }

  code, pre {
    font-size: 1rem;
    font-family: 'Lars Mono', menlo, monaco, monospace;
  }

  code {
    background: ${colors.greylight};
    border-radius: 3px;
    padding: 0.2em;
  }

  .copy > pre,
  pre {
    background: ${colors.greylight};
    padding: 1rem 1.5rem;
    border-radius: 3px;
    overflow: scroll;
    max-width: 100%;
    width: auto;
  }

  pre code {
    background: none;
    padding: 0;
  }

  li {
    list-style: none;
    position: relative;
  }

  .ti2 {
    text-indent: -2rem;
    padding-left: 2rem;
  }

  .circle {
    display: inline-block;
    margin: 0 0.5rem;
    height: 0.75rem;
    width: 0.75rem;
    border-radius: 50%;
    background: ${colors.white};
  }

  ul li:before {
    content: '';
    position: absolute;
    top: 0.5rem;
    left: 0;
    height: 0.75rem;
    width: 0.75rem;
    border-radius: 50%;
    background: ${colors.white};
  }

  ul li {
    padding-left: 2rem;
  }

  ol li {
    position: relative;
    padding-left: 2rem;
    list-style: none;
  }

  ol li:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
  }

  ol li:nth-child(1):before { content: '1' }
  ol li:nth-child(2):before { content: '2' }
  ol li:nth-child(3):before { content: '3' }
  ol li:nth-child(4):before { content: '4' }
  ol li:nth-child(5):before { content: '5' }
  ol li:nth-child(6):before { content: '6' }

  ul.list-horiz { border-top: 1px solid ${colors.white} }
  ul.list-horiz li:before { display: none; }
  ul.list-horiz li { padding: 0; text-indent: 0; }
  ul.list-horiz li a {
    color: ${colors.white};
    text-indent: 0;
    border-top: 1px solid transparent;
    border-bottom: 1px solid ${colors.white};
    margin-top: -1px;
  }
  ul.list-horiz li a:hover {
    border-top: 1px solid ${colors.white};
    border-bottom: 1px solid ${colors.white};
    position: relative;
    z-index: 2;
  }

  .wwbw { word-wrap: break-word }
`

var typography = `
  .copy > * {
    margin-top: 1.5rem;
    margin-bottom: 1.53rem;
  }

  .copy {
    letter-spacing: 0.01rem;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  .copy > * {
    width: 100%;
    max-width: 32rem;
  }

  h2 {
    border-bottom: 1px solid ${colors.grey};
    padding-bottom: 0.5em;
    padding-top: 1.5em;
  }

  .back {
    display: inline-block;
    position: absolute;
    left: 1.5rem;
  }

  .back a {
    border-bottom: 0;
  }

  .copy > *:first-child { margin-top: 0 }
  .copy > *:last-child { margin-bottom: 0 }

  /*
  .copy a[href*="//"] {
    margin-right: 1rem;
  }

  .copy a[href*="//"]:after {
    content: '→';
    display: inline-block;
    vertical-align: bottom;
    margin-right: -1rem;
    transform: rotate(-45deg);
  }
  */

  @font-face {
    font-family: 'Lars Sans';
    src: url('/assets/Lars-Light.eot');
    src: url('/assets/Lars-Light.eot?#iefix') format('embedded-opentype'),
         url('/assets/Lars-Light.woff2') format('woff2'),
         url('/assets/Lars-Light.woff') format('woff');
  }

  @font-face {
    font-family: 'Lars Mono';
    src: url('/assets/Lars-Mono.eot');
    src: url('/assets/Lars-Mono.eot?#iefix') format('embedded-opentype'),
         url('/assets/Lars-Mono.woff2') format('woff2'),
         url('/assets/Lars-Mono.woff') format('woff');
  }
`

var lilsrc = [
  'containers/*.js',
  'components/*.js',
  'views/*.js',
  'index.js'
].map(p => 'site/' + p)

var lilopts = {
  ignore: ['psa', 'psr', 't0', 'b0', 'l0', 'r0', 'h100', 'w100', 'curp']
}

var lilgr8 = lilcss(gr8css.toString(), lilsrc, lilopts)

var built = [
  recsst.toString(),
  // lilgr8,
  gr8css.toString(),
  custom,
  typography
].join(' ')

process.stdout.write(built)
