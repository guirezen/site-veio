import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Neoris';
        src: url('/fonts/neoris/TT Neoris Trial ExtraLight.ttf');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Neoris';
        src: url('/fonts/neoris/TT Neoris Trial ExtraBold.ttf');
        font-weight: bold;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Neoris';
    }
`