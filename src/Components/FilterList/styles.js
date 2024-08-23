import styled from "styled-components";

export const ConteinerFilterList = styled.div`
    list-style: none;
    display: flex;

    .input-filter {
        display: none;
    }

    label {
        width: 173px;
        height: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-family: 'Montserrat';
        letter-spacing: 2px;
        color: #7b7b7b;
        opacity: 1;
        border: 1px solid transparent;
        cursor: pointer;
    }

    .input-filter:checked + label {
        background: #B85151 0% 0% no-repeat padding-box;
        color: #FFFFFF;
        font-size: 10px;
        text-transform: uppercase;
    }

    .input-filter:hover + label {
        border: 1px solid #B85151;
    }

    label:nth-of-type(2) {
        margin: 0 9px;
    }

    @media(max-width: 900px) {
        display: none;
    }
`