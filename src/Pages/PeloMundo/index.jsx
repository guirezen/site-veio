import { ConteinerInConteudo, ConteudoConteiner, Image, Main, TitleConteiner } from "./styles";

export default function PeloMundo() {

    return (
        <div>
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
                            O apelido Véio, nasceu quando Cícero Alves dos Santos tinha apenas cinco anos de idade, devido a um interesse constante em estar entre os mais velhos e absorver todo o saber popular que o Sertão Sergipano tinha enraizado.
                        </p>
                        <Image
                            src="src/Assets/image.png"
                            alt="Imagem do véio em sua oficina"
                        />
                        <div>
                            <span>
                                Exposição fixa na Galeria MAM de Paris
                            </span>
                        </div>
                        <p className="p-margin-bt">
                            Diferente de todos os homens da sua geração que estavam predestinados a trabalhar na roça , o sábio Sertão traçou planos diferentes para Cícero, seu traço fino esculpiu um futuro bem diferente e marcou com o seu canivete toda a história de Nossa Senhora da Glória.
                        </p>
                        <p>
                            Sem nunca ter observado o trabalho de outros artistas, num ambiente rural, em que o único contato com o mundo exterior era feito através do rádio, a missão de Véio seria introduzir este novo conceito ao seu povo ( e ao mundo), o qual chamamos de “Arte”.
                        </p>
                        <Image
                            src="src/Assets/image.png"
                            alt="Imagem do véio em sua oficina"
                        />
                        <div>
                            <span>
                                Exposição fixa na Galeria MAM de Paris
                            </span>
                        </div>
                        <p>
                            Sem nunca ter observado o trabalho de outros artistas, num ambiente rural, em que o único contato com o mundo exterior era feito através do rádio, a missão de Véio seria introduzir este novo conceito ao seu povo ( e ao mundo), o qual chamamos de “Arte”.
                        </p>
                    </ConteinerInConteudo>
                </ConteudoConteiner>
            </Main>
        </div>
    )
}