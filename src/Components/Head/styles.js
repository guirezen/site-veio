import styled from "styled-components";

export const HeaderStyled = styled.header`
    width: 100%;
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

    .botoes-menu-superior {
        text-decoration: none;
        color: inherit;
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
