import { FooterStyled, ConteinerTitle } from "./styles"

const DESCRICAO = "© 2024 Site desenvolvido por Rafael Oliva e Guilherme."

export default function Footer() {

    return (
        <FooterStyled>
            <ConteinerTitle>
                <h3>VÉI<b>O</b></h3>
                <span>{DESCRICAO}</span>
            </ConteinerTitle>
            <div>

            </div>
        </FooterStyled>
    )
}