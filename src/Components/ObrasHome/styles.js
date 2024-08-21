import styled from "styled-components";

export const ConteinerSection = styled.section`
    background-color: #b85151;
    padding-top: 125px;
    position: relative;
    z-index: 1;
`

export const GridConteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 104px;
`

export const TitleConteiner = styled.div`
    max-width: 1088px;
    width: 100%;
    margin-bottom: 26px;

    h1 {
        font-weight: 300;
        font-size: 29px;
        letter-spacing: 3px;
        color: #303030;
    }
`

export const GridObras = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 266px);
    grid-gap: 8px;
    max-width: 1088px;
    width: 100%;
    justify-content: center;

    div {
        width: 266px;
        height: 398px;
        overflow: hidden;
    }
`

export const ImgObra = styled.img`
    width: 266px;
    height: 398px;
    filter: brightness(53%);
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
        filter: brightness(100%);
        transform: scale(1.1);
    }
`

export const ButtonAllWorks = styled.button`
    border: 2px solid #303030;
    background-color: transparent;
    width: 212px;
    height: 43px;
    font-size: 13px;
    color: #303030;
    letter-spacing: 3px;
    margin-top: 36px;
    cursor: pointer;

    &:active {
        background-color: #303030;
        color: #724040;
        transform: scale(0.90);
    }
`