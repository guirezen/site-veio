import { Link } from "react-router-dom";
import { HeaderStyled, ItensList, List, ListConteiner, LogoConteiner, Navbar, RedSquary } from "./styles";

export default function Header() {

    return (
        <HeaderStyled>
            <Navbar>
                <LogoConteiner>
                    <RedSquary>
                        <h4>
                            VÉI<b>O</b>
                        </h4>
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
                            <ItensList>PELO MUNDO</ItensList>
                            <ItensList>CONTATO</ItensList>
                        </div>
                    </List>
                </ListConteiner>
            </Navbar>
        </HeaderStyled>
    )
}