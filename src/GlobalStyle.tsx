import styled, { createGlobalStyle } from 'styled-components'
import { fontFamily, bold, textColor } from './vars'

export default createGlobalStyle`

body, html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -ms-font-smoothing: antialiased;
    font-smoothing: antialiased;
    overscroll-behavior: none;
  

  font-family: ${fontFamily};
  line-height: 1.55;
  color:${textColor};
  font-size: 16px;
}

h1,h2, h3 {
  font-weight: ${bold};
}

h1 {
  font-size: 3.5rem;
  line-height: 1;
}

* {
    margin: 0;
    -webkit-font-smoothing: antialiased!important;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: geometricPrecision;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    outline:none;
    box-sizing: border-box;
}


`
