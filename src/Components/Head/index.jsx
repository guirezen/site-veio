import { Link } from "react-router-dom";
import { HeaderStyled, ItensList, List, ListConteiner, LogoConteiner, Navbar, RedSquary } from "./styles";

export default function Header() {

    return (
        <HeaderStyled>
            <Navbar>
                <LogoConteiner>
                    <RedSquary>
                        <Link
                            className="botoes-menu-superior"
                            to={'/home'}>
                            <h4>
                                VÉI<b>O</b>
                            </h4>
                        </Link>
                    </RedSquary>
                </LogoConteiner>
                <ListConteiner>
                    <List>
                        <div>
                            <Link
                                className="botoes-menu-superior"
                                to={'/sobre'}
                            >
                                <ItensList>SOBRE</ItensList>
                            </Link>
                            <ItensList>OBRAS</ItensList>
                        </div>
                        <div>
                            <Link
                                className="botoes-menu-superior"
                                to={'/pelomundo'}
                            >
                                <ItensList>PELO MUNDO</ItensList>
                            </Link>
                            <ItensList>CONTATO</ItensList>
                        </div>
                    </List>
                </ListConteiner>
            </Navbar>
        </HeaderStyled>
    )
}