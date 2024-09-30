import { useTranslation } from "react-i18next"
import { FooterStyled, ConteinerTitle, BackgroundTop } from "./styles"

const DESCRICAO = "© 2024 Site desenvolvido por Rafael Oliva e Guilherme Rezende."

export default function Footer() {
    const { t } = useTranslation();

    return (
        <FooterStyled>
            <BackgroundTop />
            <ConteinerTitle>
                <img src="\Assets\logo_vermelha.png" />
                <span>© 2024 {t('footerDescription')}</span>
            </ConteinerTitle>
        </FooterStyled>
    )
}