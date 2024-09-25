import styled from "styled-components";

export const Main = styled.main`
    background-color: #e8e8e8;
    padding: 0 30px;
    padding-bottom: 170px;
    position: relative;
    margin-top: 100px;
`

export const BannerConteiner = styled.div`
    height: 874px;
    width: 100%;
    position: absolute;
    background-image: url('./Assets/background/mundo_maior.png');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    top: 0px;
    z-index: 2;

    /* @media (max-width: 1400px) {
        background-position: 50% 50%;
    }*/

    @media (max-width: 600px) {
        background-position: 28% 50%;
    }
`

export const TitleConteiner = styled.div`
    padding-top: 591px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;

    div {
        text-align: left;

        @media (min-width: 900px) {
            width: 710px; 
        }
    }

    h1 {
        font-size: 40px;
        color: #b85151;
        margin-bottom: 11px;
        font-family: 'Montserrat';

        @media (max-width: 900px) {
            font-size: 30px;
        }
    }

    span {
        font-size: 16px;
        font-family: 'Noto Sans';
        font-weight: bold;
        letter-spacing: 0px;
        color: #3D3D3D;
        opacity: 1;
    }

    @media (max-width: 900px) {
        align-items: start;
    }
`

export const ConteudoConteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;

    p {
        font-size: 18px;
        color: #898989;
        font-family: 'Montserrat';
    }

    .p-margin-bt {
        margin-bottom: 40px;
    }
`

export const ConteinerInConteudo = styled.div`
    @media (min-width: 900px) {
        width: 710px; 
    }

    div {
        width: 100%;
        text-align: center;
        margin-top: 16px;
        margin-bottom: 50px;
    }

    span {
        color: #707070;
        font-style: italic;
        font-family: 'Montserrat';
        font-size: 18px;
    }

    p {
        font-family: 'Montserrat';
    }
`