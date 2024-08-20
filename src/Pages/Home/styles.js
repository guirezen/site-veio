import styled from "styled-components"

export const BackgroundHome = styled.div`
    width: 100%;
    height: 849px;
    background-image: url('src/Assets/background/banner-image-veio_03.png');
    background-repeat: no-repeat;
    background-position: right center;
    position: absolute;
    top: -60px;
    z-index: 2;
`

export const ConteinerOutTitle = styled.div`
    width: 100%;
    height: 580px;
    display: flex;
    align-items: center;
`

export const ConteinerInsideTitle = styled.div`
    width: 40%;
`
export const MainTitle = styled.h1`
    letter-spacing: 3px;
    color: #D2D2D2;
    text-align: right;
    font-size: 39px;
    font-weight: lighter;

    span {
        color: #B85151;
    }
`