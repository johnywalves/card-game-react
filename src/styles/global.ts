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

    html,
    body,
    #__next { 
      min-height: 100vh;
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
      --card-width: 20.25rem;
      --card-height: 27rem;
      --card-height-deploy: 8rem;

      --commander-width: 30rem;
      --commander-height: 20rem;

      --battlefield-padding: 0.75rem;
      --battlefield-width: calc(var(--card-width) * 5 + var(--battlefield-padding) * 5 + 1rem);
      --battlefield-height: calc(var(--card-height-deploy) * 4 + var(--battlefield-padding) * 5 + 1rem); 

      --color-card: #eee;
      --color-card-holder: #ccc;
      --color-battlefield: #585858;
      --color-separation: #ffffff;
      --color-text: #333;
      --color-description: #282828;
    }

    body {
      color: var(--color-text);
    }
`

export default GlobalStyles
