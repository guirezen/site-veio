import { Link, useLocation } from "react-router-dom";
import { HeaderStyled, ItensList, List, ListConteiner, LogoConteiner, Navbar, RedSquary } from "./styles";
import NavbarMenu from "../Navbar";

export default function Header() {
    const param = useLocation().pathname

    return (
        <HeaderStyled pathname={param}>
            <Navbar>
                <LogoConteiner>
                    <RedSquary>
                        <Link
                            className="botoes-menu-superior"
                            to={'/'}>
                            <h4>
                                VÉI<b>O</b>
                            </h4>
                        </Link>
                    </RedSquary>
                </LogoConteiner>
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