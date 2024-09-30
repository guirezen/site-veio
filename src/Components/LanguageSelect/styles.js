import styled from "styled-components";

export const ContainerLanguage = styled.div`
    position: absolute;
    cursor: pointer;
    right: -80px;
    bottom: 5px;

    img {
        position: absolute;
        z-index: 0;
        filter: brightness(80);
    }
    
    select {
        /* visibility: hidden; */
        background-color: transparent;
        border: none;
        position: relative;
        z-index: 1;
        appearance: none;
        height: 22px;
        padding: 10px;
    }
    
    select:focus {
        outline: none; /* Remove o outline padrão ao focar */
        border-color: transparent; /* Remove a borda ou altera o estilo */
        box-shadow: none; 
    }

    select:hover {
        background-image: url('/Assets/linguagem-mouse.png');
        background-repeat: no-repeat;
        /* filter: brightness('none'); */
    }

    @media (max-width: 900px) {
        right: auto;
        left: 10px;
        top: 10px;
    }
`