import styled from "styled-components";

export const FooterStyled = styled.footer`
    width: 100%;
    display: flex;
    height: 311px;
    align-items: center;
    background-color: #303030;
    position: relative;
`

export const BackgroundTop = styled.div`
    width: 100%;
    height: 83px;
    position: absolute;
    z-index: 2;
    top: -40px;
    background-image: url('/Assets/background/recorte-madeira_down_maior.png');
    background-repeat: no-repeat;
`

export const ConteinerTitle = styled.div`
    width: 50%;
    display: grid;
    justify-content: center;

    h3 {
        font-size: 24px;
        color: #B85151;
        letter-spacing: 4.8px;
    }

    span {
        font-size: 13px;
        font-family: 'Noto Sans';
        font-weight: bold;
        color: #474747;
        letter-spacing: 0.52px;
    }

    @media (max-width: 1024px) {
        width: 65%;
        margin-left: 30px;
    }
`