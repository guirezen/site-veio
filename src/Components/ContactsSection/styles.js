import styled from "styled-components";

export const TitleConteiner = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 131px;

    h1 {
        font-weight: lighter;
        font-size: 29px;
    }
`

export const ButtonsConteiner = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

export const Buttons = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    width: 352px;
    height: 147px;
    border: 3px solid #303030;
    border-radius: 74px;
    opacity: 1;
    cursor: pointer;

    &:nth-of-type(1) {
        margin-right: 37px;
    }

    .icon-button {
        transform: scaleX(-1);
    }

    &:hover {
        background-color: #303030;

        .label-contact, .icon-button {
            color: #a44c4c;
        }
    }

    &:active {
        width: 340px;
        height: 141px;
    }
`

export const ContactConteiner = styled.div`
    display: flex;
    flex-direction: column;
    height: 47px;
    justify-content: space-between;
    margin-left: 30px;
    text-align: left;

    .label-contact {
        font-size: 15px;
    }

    .information-contacts {
        font-size: 18px;
        color: #fff;
    }
`