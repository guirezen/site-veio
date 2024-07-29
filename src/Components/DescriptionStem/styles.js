import { makeStyles } from "@mui/material";
import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const ConteinerCarousel = styled.div`
    display: flex;
    width: 100%;
    max-width: 1500px;
    margin-top: 131px;
`

export const ConteinerConteudo = styled.div`
    width: 60%;
    display: inherit;
    align-items: center;
    justify-content: center;
`
export const ConteinerSeta = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: end;

    &:nth-of-type(3) {
        justify-content: start;
    }

    .botao-seta:hover {
        color: #ad4e4e;
    }
`

export const ImgObra = styled.img`
    width: 288px;
    height: 371px;
    margin-right: 97px;
`

export const OutDescribeConteiner = styled.div`
    height: 250px;
`

export const ConteinerTitulo = styled.div`
    margin-bottom: 16px;

    h1 {
        font-size: 23px;
        font-weight: lighter;
    }
`

export const ConteinerDescricao = styled.div`
    max-width: 417px;
    font-size: 18px;
    font-family: Montserrat;
    color: #7b7b7b;
`

export const ConteinerIndicadores = styled.div`
    margin-top: 48px;

    .indicadores {
        display: flex;
        justify-content: end;
        background-color: transparent;
    }
`