import { FooterStyled, ConteinerTitle, BackgroundTop } from "./styles"

const DESCRICAO = "© 2024 Site desenvolvido por Rafael Oliva e Guilherme Rezende."

export default function Footer() {

    return (
        <FooterStyled>
            <BackgroundTop />
            <ConteinerTitle>
                <img src="\Assets\logo_vermelha.png" />
                <span>{DESCRICAO}</span>
            </ConteinerTitle>
        </FooterStyled>
    )
}