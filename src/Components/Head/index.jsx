import { ConteinerInsideTitle, ConteinerOutTitle, HeaderStyled, ItensList, List, ListConteiner, LogoConteiner, MainTitle, Navbar, RedSquary } from "./styles";

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
                            <ItensList>SOBRE</ItensList>
                            <ItensList>OBRAS</ItensList>
                        </div>
                        <div>
                            <ItensList>PELO MUNDO</ItensList>
                            <ItensList>CONTATO</ItensList>
                        </div>
                    </List>
                </ListConteiner>
            </Navbar>
            <ConteinerOutTitle>
                <ConteinerInsideTitle>
                    <MainTitle>
                        O<br />
                        IMAGINÁ-<br />
                        RIO DE<br />
                        <span>VÉI<b>O</b></span>
                    </MainTitle>
                </ConteinerInsideTitle>
            </ConteinerOutTitle>
        </HeaderStyled>
    )
}