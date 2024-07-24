import styled from "styled-components";

export const TitleConteiner = styled.div`
    max-width: 1088px;
    width: 100%;
    margin-bottom: 26px;

    h1 {
        font-weight: lighter;
        font-size: 29px;
        letter-spacing: 4px;
    }
`

export const GridConteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const GridObras = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 266px);
    grid-gap: 8px;
    max-width: 1088px;
    width: 100%;
    justify-content: center;
`

export const ImgObra = styled.img`
    width: 266px;
    height: 398px;
`

export const ButtonAllWorks = styled.button`
    border: 2px solid #303030;
    background-color: transparent;
    width: 212px;
    height: 43px;
    font-size: 13px;
    letter-spacing: 3px;
    margin-top: 36px;
    cursor: pointer;

    &:active {
        background-color: #303030;
        color: #724040;
        transform: scale(0.90);
    }
`