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

export const LogoConteiner = styled.div`
    width: 20%;
`

export const RedSquary = styled.div`
    background-color: #b85151;
    width: 101px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: end;
    margin-left: 38px;

    h4 {
        font-weight: lighter;
        letter-spacing: 3px;
        font-size: 15px;
        margin-bottom: 17px;
    }
`

export const ListConteiner = styled.div`
    height: 100%;
    align-items: end;
    justify-content: end;
    display: flex;
    width: 100%;
    max-width: 670px;
    margin-right: 50px;
`

export const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: inherit;
    width: 100%;
    justify-content: space-between;

    div {
        display: inherit;
    }
`

export const ItensList = styled.li`
    font-size: 12px;
    padding: 10px 17px;
    margin-left: 42px;
    margin-bottom: 18px;
    letter-spacing: 2px;
    border: 1px solid transparent;
    cursor: pointer;

    &:hover {
        border: 1px solid #B85151;
    }
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
