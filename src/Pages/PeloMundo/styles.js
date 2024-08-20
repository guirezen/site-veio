import styled from "styled-components";

export const Main = styled.main`
    background-color: #e8e8e8;
    padding-bottom: 170px;
    position: relative;
`

export const BannerConteiner = styled.div`
    height: 874px;
    width: 100%;
    position: absolute;
    background-image: url('src/Assets/background/mundo.png');
    background-repeat: no-repeat;
    top: -100px;
    z-index: 2;
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
        width: 710px;
    }

    h1 {
        font-size: 40px;
        color: #b85151;
        margin-bottom: 11px;
        font-family: 'Montserrat';
    }

    span {
        font-size: 16px;
        font-family: 'Noto Sans';
        font-weight: bold;
        letter-spacing: 0px;
        color: #3D3D3D;
        opacity: 1;
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
    width: 710px;

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

export const Image = styled.img`
    width: 710px;
`