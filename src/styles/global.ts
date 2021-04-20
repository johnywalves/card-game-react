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

    :root {
      --card-padding: 1rem;
      --card-width: 18rem;
      --card-height: 24rem;
      --card-height-deploy: 10rem;

      --battlefield-padding: 1rem;
      --battlefield-width: 101rem; // card-width * 5 + battlefield-padding * 5 + 1 border 
      --battlefield-height: 50rem; // card-height * 4 + battlefield-padding * 5 + 1 border

      --color-card: #ff00dd;
      --color-battlefield: #f3f3f3;
      --color-separation: #ffffff;
    }
`

export default GlobalStyles
