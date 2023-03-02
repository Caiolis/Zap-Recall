// All global styles go in this file
// Reset Css is in here

import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        transition: all 0.3s ease-in-out;
    }

    body {
        background-color: #FB6B6B;
    }
`

export default GlobalStyle;