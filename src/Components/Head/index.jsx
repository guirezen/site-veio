import { Link, useLocation } from "react-router-dom";
import { HeaderStyled, ItensList, List, ListConteiner, LogoConteiner, Navbar, RedSquary } from "./styles";
import NavbarMenu from "../Navbar";
import LanguageSelect from "../LanguageSelect";
import { useTranslation } from "react-i18next";

export default function Header() {
    const param = useLocation().pathname
    const { t } = useTranslation()

    return (
        <HeaderStyled pathname={param}>
            <Navbar>
                <Link
                    className="botoes-menu-superior"
                    to={'/'}>
                    <LogoConteiner>
                        <RedSquary>
                            <img src="/Assets/logo_preta.png" />
                        </RedSquary>
                    </LogoConteiner>
                </Link>
                <ListConteiner>
                    <List pathname={param}>
                        <div>
                            <Link
                                className="botoes-menu-superior"
                                to={'/sobre'}
                            >
                                <ItensList>{t('optionsMenu1')}</ItensList>
                            </Link>
                            <Link
                                className="botoes-menu-superior"
                                to={'/obras'}
                            >
                                <ItensList>{t('optionsMenu2')}</ItensList>
                            </Link>
                        </div>
                        <div>
                            <Link
                                className="botoes-menu-superior"
                                to={'/pelomundo'}
                            >
                                <ItensList>{t('optionsMenu3')}</ItensList>
                            </Link>
                            <Link
                                className="botoes-menu-superior"
                                to={'/#ancoraContatos'}
                            >
                                <ItensList>{t('optionsMenu4')}</ItensList>
                            </Link>
                        </div>
                        <LanguageSelect />
                    </List>
                    <NavbarMenu />
                </ListConteiner>
            </Navbar>
        </HeaderStyled>
    )
}