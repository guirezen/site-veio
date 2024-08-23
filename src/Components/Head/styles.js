import styled from "styled-components";

export const HeaderStyled = styled.header`
    width: 100%;
    background-color: transparent;
    background: ${({ pathname }) =>
      pathname !== "/"
        ? "linear-gradient(to right, #b85151 0%, #b85151 100%)"
        : "linear-gradient(to left, #b85151 100%, #b85151 0%)"};
    background-size: ${({ pathname }) =>
      pathname !== "/" ? "100% 100%" : "0 100%"};
    background-repeat: no-repeat;
    transition: background-size 1s cubic-bezier(0.33, 1, 0.68, 1) 0s;
    position: relative;
    z-index: 3;
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
    max-width: 880px;
    margin-right: 100px;

    @media (max-width: 900px) {
        margin-right: 0px;
    }
`

export const List = styled.ul`
    list-style-type: none;
    margin-bottom: 11px;
    padding: 0;
    display: inherit;
    width: 100%;
    justify-content: right;

    div {
        display: inherit;

        &:nth-of-type(1) {
            margin-right: ${({pathname}) => (pathname == '/' && '283px')};
        }
    }

    @media (max-width: 900px) {
        display: none;
    }
`

export const ItensList = styled.li`
    font-size: 10px;
    letter-spacing: 2px;
    width: 90px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    border: 1px solid transparent;
    cursor: pointer;
    color: #FFFFFF;

    &:has(+ li) {
        margin-right: 13px;
    }

    &:hover {
        border: 1px solid ${({pathname}) => (pathname == '/' & '#b85151')};
    }
`
