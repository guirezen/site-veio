import styled from "styled-components";

export const ConteinerPopupObra = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: 647px;

    @media (max-width: 900px) {
        height: auto;
        flex-direction: column;
        padding: 25px 0;
    }

    @media (max-width: 600px) {
        margin-top: 30px;
    }
`

export const ConteinerImage = styled.div`
    width: 30%;
    position: relative;
    right: 20%;
    overflow: visible;

    img {  
        width: 351px;
        height: 527px;
        background: #303030 0% 0% no-repeat padding-box;
        -webkit-box-shadow: 10px 10px 23px -17px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 23px -17px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 23px -17px rgba(0,0,0,0.75);
    }

    @media (max-width: 900px) {
        width: 100%;
        right: 0;
        text-align: center;
        margin-bottom: 20px;
    }

    @media (max-width: 1125px) and (min-width: 900px) {
        width: 41%;
        right: 5%;
        img {
            width: 281px;
            height: 427px;
        }
    }
` 

export const ConteinerDetalhesObra = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .background-red {
        font-size: 10px;
        font-family: 'Montserrat';
        font-weight: normal;
        letter-spacing: 3.17px;
        color: #FFFFFF;
        width: 74px;
        height: 23px;
        background: #B85151 0% 0% no-repeat padding-box;
        text-align: center;
        line-height: 23px;
        margin-bottom: 19px;
    }

    h1 {
        font-size: 40px;
        font-family: 'Montserrat';
        color: #3D3D3D;
        opacity: 1;
        margin-bottom: 36px;
    }

    h5 {
        font-size: 14px;
        font-weight: normal;
        font-family: 'Montserrat';
        color: #B85151;
        margin-bottom: 8px;
    }

    @media (min-width: 900px) {
        height: 527px;
    }
`

export const ConteinerCaracteristicasObra = styled.dl`

    div {
        display: flex;
        align-items: center;
        margin-bottom: 6px;
    }

    dt {
        font-size: 15px;
        font-weight: bold;
        font-family: 'Montserrat';
        color: #303030;
        margin-right: 5px;
    }

    dd {
        font-size: 15px;
        font-family: 'Montserrat';
        color: #303030;
    }
`