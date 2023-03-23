import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@tailwind base;
@tailwind components;
@tailwind utilities;


  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    background-color: #2c2c2c;
    color: white;
  }
  textarea {
    font-size: 20px;
    margin-left: 60px !important;
    height: 99vh !important;
    background-color: #2c2c2c;
    color: white;
  }

  body::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
