import styled from "styled-components";

export const ConteinerOutCarousel = styled.div`
    display: flex;
`

export const ConteinerArrowButton = styled.div`
    position: absolute;
    top: 50%;

    &.arrow-left {
        left: -224px;
    }

    &.arrow-right {
        right: -56px;
    }

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`

export const ConteinerSection = styled.section`
    width: 100%;
    max-width: 515px;

    h6 {
        font-size: 10px;
        font-family: 'Montserrat';
        height: 35px;
        text-align: center;
        color: #707070;
    }
`

export const ConteinerList = styled.ul`
    list-style: none;
    display: flex;
`

export const ItensList = styled.li`
    width: 119px;
    height: 178px;

    &:has(+ li) {
        margin-right: 13px;
    }

    img {
        width: 100%;
        height: 100%;
    }
`