import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosaEscuro: '#E66767',
  rosaClaro: '#FFEBD9',
  branco: '#fff'
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
    background-color: ${cores.branco};
    color: ${cores.rosaEscuro};
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
