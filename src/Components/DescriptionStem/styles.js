import { makeStyles } from "@mui/material";
import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: 465px;
    background-color: #303030;
    position: relative;

    .flex-center {
        display: flex;
        justify-content: center;
        height: 100%;
    }

    @media (max-width: 1024px) {
        height: 870px;
    }
`

export const BackgroundTop = styled.div`
    width: 100%;
    height: 83px;
    position: absolute;
    z-index: 2;
    top: -40px;
    background-image: url('src/Assets/background/recorte-madeira_down_maior.png');
    background-repeat: no-repeat;

    &:nth-of-type(3) {
        top: 450px;
        background-image: url('src/Assets/background/recorte-madeira_top_maior.png');

        @media (max-width: 1024px) {
            top: 869px;
        }
    }
`

export const ConteinerCarousel = styled.div`
    display: flex;
    width: 100%;
    max-width: 1500px;
    z-index: 3;
`

export const ConteinerConteudo = styled.div`
    width: 80%;
    display: inherit;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`

export const ConteinerSeta = styled.div`
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: end;

    &:nth-of-type(3) {
        justify-content: start;
    }

    .botao-seta {
        @media (max-width: 600px) {
            width: 25px;
        }
    }

    .botao-seta:hover {
        color: #ad4e4e;
    }
`

export const ImgObra = styled.img`
    width: 288px;
    height: 371px;

    @media (min-width: 1024px) {
        margin-right: 97px;
    }

    @media (max-width: 1024px) {
        margin-bottom: 20px;
    }
`

export const OutDescribeConteiner = styled.div`
    @media (min-width: 1024px) {
        padding: 0 15px;
    }

    @media (max-width: 1024px) {
        padding: 0 20px;
    }
`

export const ConteinerTitulo = styled.div`
    margin-bottom: 16px;

    h1 {
        font-size: 23px;
        font-weight: lighter;
        letter-spacing: 3px;
    }

    .titulo-part-1 {
        color: #fff;
    }

    .titulo-part-2 {
        color: #b55150;
    }
`

export const ConteinerDescricao = styled.div`
    max-width: 417px;
    font-size: 18px;
    font-family: 'Montserrat';
    color: #7b7b7b;

    @media (max-width: 1024px) {
        max-width: 485px;
    }
`

export const ConteinerIndicadores = styled.div`
    .indicadores {
        display: flex;
        justify-content: end;
        background-color: transparent;
    }
`