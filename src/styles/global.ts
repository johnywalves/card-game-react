import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *,
    *:before,
    *:after {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    a,
    a:hover,
    a:visited {
      text-decoration: none;
      color: inherit;
    }
`

export default GlobalStyles
