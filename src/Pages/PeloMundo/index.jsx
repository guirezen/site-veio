import { BannerConteiner, ConteinerInConteudo, ConteudoConteiner, Image, Main, TitleConteiner } from "./styles";

export default function PeloMundo() {

    return (
        <div>
            <BannerConteiner />
            <Main>
                <TitleConteiner>
                    <div>
                        <h1>A obra de Véio em cartaz no<br /> brasil e no mundo</h1>
                        <span>Por Julia Katiene</span>
                    </div>
                </TitleConteiner>
                <ConteudoConteiner>
                    <ConteinerInConteudo>
                        <p className="p-margin-bt">
                            A primeira exposição de Véio aconteceu em 1982 em sua cidade natal Nossa
                            Senhora da Glória/SE, depois disso começou a desbravar o Brasil: São Paulo,
                            Minas Gerais, Bahia, Rio de Janeiro, Brasília, Recife, etc.
                            Muitos anos depois sua arte era admirada pelo mundo: França, Itália, Suiça,
                            Estados Unidos e Londres.
                        </p>
                        <div className="center-image">
                            <Image
                                src="./Assets/image.png"
                                alt="Imagem do véio em sua oficina"
                            />
                        </div>
                        <div>
                            <span>
                                Exposição fixa na Galeria MAM de Paris
                            </span>
                        </div>
                        {/* <p className="p-margin-bt">
                            Diferente de todos os homens da sua geração que estavam predestinados a trabalhar na roça , o sábio Sertão traçou planos diferentes para Cícero, seu traço fino esculpiu um futuro bem diferente e marcou com o seu canivete toda a história de Nossa Senhora da Glória.
                        </p>
                        <p>
                            Sem nunca ter observado o trabalho de outros artistas, num ambiente rural, em que o único contato com o mundo exterior era feito através do rádio, a missão de Véio seria introduzir este novo conceito ao seu povo ( e ao mundo), o qual chamamos de “Arte”.
                        </p> */}
                        <div className="center-image">
                            <Image
                                src="./Assets/image.png"
                                alt="Imagem do véio em sua oficina"
                            />
                        </div>
                        <div>
                            <span>
                                Exposição fixa na Galeria MAM de Paris
                            </span>
                        </div>
                        {/* <p>
                            Sem nunca ter observado o trabalho de outros artistas, num ambiente rural, em que o único contato com o mundo exterior era feito através do rádio, a missão de Véio seria introduzir este novo conceito ao seu povo ( e ao mundo), o qual chamamos de “Arte”.
                        </p> */}
                    </ConteinerInConteudo>
                </ConteudoConteiner>
            </Main>
        </div>
    )
}