import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Lulu One';
        src: url('/fonts/lulu-one.ttf');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Ariane Coachella';
        src: url(/fonts/ArianeCoachella-Regular.ttf);
        font-weight: normal;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Ariane Coachella';
    }
`