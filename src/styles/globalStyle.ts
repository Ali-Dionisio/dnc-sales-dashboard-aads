import { createGlobalStyle, DefaultTheme } from 'styled-components'

// declare module 'styled-components' {
//   export interface DefaultTheme {
//     appBackground: string
//     appColor: string
//   }
// }

export const GloboStyle = createGlobalStyle<{ theme?: DefaultTheme }>`
    body, html {
        background: ${(props) => props.theme.appBackground};
        color: ${(props) => props.theme.appColor};
        font-family: "Inter", sans-serif;
        margin: 0;
        padding: 0;
    }
    h1, h2, p, ul, li, figure {
        margin: 0;
        padding: 0;
    }
`
