import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components";


export const GloboStyle = createGlobalStyle<{ theme?: DefaultTheme}>`
    body, html {
        background: ${(props) => props.theme};
        color: ${(props) => props.theme}; 
        margin: 0;
        padding: 0;
        font-family: "Inter", sans-serif;
    }
    h1, h2, p, ul, li {
        margin: 0;
        padding: 0;
    }
`