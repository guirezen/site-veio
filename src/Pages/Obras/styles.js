import styled from "styled-components";

export const ConteinerMain = styled.main`
    display: flex;
    justify-content: center;
    background-color: #fff;
    padding-bottom: 119px;
    padding-top: 145px;
`

export const ConteinerInMain = styled.div`
    max-width: 1094px;
    width: 70%;
`

export const ConteinerTitleFilter = styled.div`
    display: flex;
    width: 100%;
    min-width: 710px;
    margin-bottom: 64px;
    justify-content: space-between;
`

export const ConteinerTitle = styled.div`

    h1 {
        font-size: 29px;
        font-weight: 950;
        color: #bc5e5e;
        letter-spacing: 4px;
    }
`

export const ConteinerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 211px);
    gap: 8px;
    justify-content: center;

    img {
        width: 100%;
        height: 315px;
        cursor: pointer;
    }
`

export const ConteinerPagination = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
`