import { FooterStyled, ConteinerTitle, BackgroundTop } from "./styles"

const DESCRICAO = "© 2024 Site desenvolvido por Rafael Oliva e Guilherme."

export default function Footer() {

    return (
        <FooterStyled>
            <BackgroundTop />
            <ConteinerTitle>
                <h3>VÉI<b>O</b></h3>
                <span>{DESCRICAO}</span>
            </ConteinerTitle>
        </FooterStyled>
    )
}