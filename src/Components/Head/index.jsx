import { Link, useLocation } from "react-router-dom";
import { HeaderStyled, ItensList, List, ListConteiner, LogoConteiner, Navbar, RedSquary } from "./styles";
import NavbarMenu from "../Navbar";

export default function Header() {
    const param = useLocation().pathname

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
                                <ItensList>SOBRE</ItensList>
                            </Link>
                            <Link
                                className="botoes-menu-superior"
                                to={'/obras'}
                            >
                                <ItensList>OBRAS</ItensList>
                            </Link>
                        </div>
                        <div>
                            <Link
                                className="botoes-menu-superior"
                                to={'/pelomundo'}
                            >
                                <ItensList>PELO MUNDO</ItensList>
                            </Link>
                            <Link
                                className="botoes-menu-superior"
                                to={'/#ancoraContatos'}
                            >
                                <ItensList>CONTATO</ItensList>
                            </Link>
                        </div>
                    </List>
                    <NavbarMenu />
                </ListConteiner>
            </Navbar>
        </HeaderStyled>
    )
}