import styled from "styled-components"

export const BackgroundHome = styled.div`
    width: 100%;
    height: 869px;
    background-image: url('./Assets/background/banner-image-veio_maior.png');
    background-repeat: no-repeat;
    background-position: right 60%;
    position: absolute;
    top: -60px;
    z-index: 2;

    @media (max-width: 900px) {
        background-position: 78% 50%;
    }
`

export const ConteinerOutTitle = styled.div`
    width: 100%;
    height: 580px;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 3;
`

export const ConteinerInsideTitle = styled.div`
    width: 40%;

    @media (max-width: 510px) {
        width: 60%;
    }
`
export const MainTitle = styled.h1`
    letter-spacing: 8px;
    color: #D2D2D2;
    text-align: right;
    font-size: 39px;
    font-weight: lighter;
    line-height: 1.1;

    span {
        color: #B85151;
    }

    @media (max-width: 1024px) {
        margin-left: 20px;
    }
`