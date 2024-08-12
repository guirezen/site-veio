import styled from "styled-components";

export const HeaderStyled = styled.header`
    width: 100%;
    background: ${({ pathname }) =>
      pathname !== "/home"
        ? "linear-gradient(to right, #b85151 0%, #b85151 100%)"
        : "linear-gradient(to left, #b85151 100%, #b85151 0%)"};
    background-size: ${({ pathname }) =>
      pathname !== "/home" ? "100% 100%" : "0 100%"};
    background-repeat: no-repeat;
    transition: background-size 1s cubic-bezier(0.33, 1, 0.68, 1) 0s;
`

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;

    .botoes-menu-superior {
        text-decoration: none;
        color: inherit;
    }
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
    cursor: pointer;

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
    justify-content: ${({pathname}) => (pathname == '/home' ? 'space-between' : 'center')};

    div {
        display: inherit;
    }
`

export const ItensList = styled.li`
    font-size: 10px;
    padding: 10px 17px;
    margin-left: 42px;
    margin-bottom: 18px;
    letter-spacing: 2px;
    border: 1px solid transparent;
    cursor: pointer;
    color: #fff;

    &:hover {
        border: 1px solid ${({pathname}) => (pathname == '/home' ? '#B85151' : '#4d4d4d')};
    }
`
