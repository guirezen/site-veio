import styled from "styled-components";

export const HeaderStyled = styled.header`
    width: 100%;
    height: 849px;
`

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
`

export const RedSquary = styled.div`
    background-color: #b85151;
    width: 101px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: end;
    margin-left: 38px;

    div {
        font-size: 20px;
        margin-bottom: 17px;
    }

    h4 {
        font-weight: lighter;
        letter-spacing: 3px;
        font-size: 15px;
    }
`

export const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;

    div {
        display: inherit;
    }
`

export const ItensList = styled.li`
    /* list-style: none; */
    margin: 10px;
    cursor: pointer;
`

export const ConteinerOutTitle = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    align-items: end;
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
