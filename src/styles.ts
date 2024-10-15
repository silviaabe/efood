import { createGlobalStyle } from 'styled-components'

export const colors = {
  darkPink: '#E66767',
  lightPink: '#FFEBD9',
  white: '#fff'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '767px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.white};
    color: ${colors.darkPink};
  }


  .cabecalho {
    justify-content: center;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
