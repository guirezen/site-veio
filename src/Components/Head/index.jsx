import { ConteinerInsideTitle, ConteinerOutTitle, HeaderStyled, ItensList, List, MainTitle, Navbar, RedSquary } from "./styles";

export default function Header() {

    return (
        <HeaderStyled>
            <Navbar>
                <RedSquary>
                    <div className="red-square">
                        <h4>
                            VÉI<b>O</b>
                        </h4>
                    </div>
                </RedSquary>
                <div>
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
                </div>
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