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
    width: 80%;

    @media (max-width: 600px) {
        width: 100%;
    } 
`

export const ConteinerTitleFilter = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 64px;
    justify-content: space-between;

    @media (min-width: 900px) {
        min-width: 710px;
    } 

    @media (max-width: 600px) {
        padding: 0 20px 0 20px;
    } 
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
        object-fit: cover;
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(auto-fit, 100%);

            img {
                width: 100%;
                aspect-ratio: 266 / 398;
                height: auto;
            }
        }
`

export const ConteinerPagination = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
`