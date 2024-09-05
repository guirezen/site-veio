import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;

        a {
            color: inherit;
        }
    }

    body {
        font-family: 'Nunito Sans';
    }
`