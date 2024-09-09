import { BannerConteiner, ConteinerInConteudo, ConteudoConteiner, Image, Main, TitleConteiner } from "./styles";

export default function PageSobre() {

    return (
        <div>
            <BannerConteiner />
            <Main>
                <TitleConteiner>
                    <div>
                        <h1>A história do artista Cícero<br />Alves dos Santos, Véio!</h1>
                        <span>Por Julia Katiene</span>
                    </div>
                </TitleConteiner>
                <ConteudoConteiner>
                    <ConteinerInConteudo>
                        <p className="p-margin-bt">
                            O apelido Véio nasceu quando Cícero Alves dos Santos tinha apenas cinco anos de idade,
                            devido a um interesse constante em estar entre os mais velhos e absorver todo o saber
                            popular que o sertão sergipano tinha enraizado.
                        </p>
                        <div className="center-image">
                            <Image
                                src="./Assets/image.png"
                                alt="Imagem do véio em sua oficina"
                            />
                        </div>
                        <div>
                            <span>
                                Véio em sua oficina na cidade de Nossa Senhora da Glória/SE
                            </span>
                        </div>
                        <p className="p-margin-bt">
                            Diferente de todos os homens da sua geração que estavam predestinados a trabalhar na roça, o sábio sertão traçou planos diferentes para Cícero, seu traço fino esculpiu um futuro bem diferente e marcou com o seu canivete toda a história de Nossa Senhora da Glória.
                        </p>
                        <p className="p-margin-bt">
                            Sem nunca ter observado o trabalho de outros artistas, num ambiente rural, em que o único contato com o mundo exterior era feito através do rádio, ele começou a moldar primeiro em Cera de Abelha depois em madeira. A missão de Véio era introduzir este novo conceito ao seu povo, o qual chamamos de “Arte”.
                        </p>
                        <p className="p-margin-bt">
                            Hoje sua história já foi mostrada em  documentários, reportagens, livros, revistas, rodas de conversas. Recebeu o título de Mestre dos Saberes e Doutor Honoris Causa pela Universidade Federal de Sergipe, ocupa a Décima cadeira da Academia Gloriense de Letras e suas obras estão espalhadas  pelo Brasil e o mundo, na Pinacoteca de São Paulo, Museu do homem do nordeste em Recife, Museu de Belas Artes Rio de Janeiro, Fundação Cartier em Paris, The Armory Show New York, etc.
                        </p>
                    </ConteinerInConteudo>
                </ConteudoConteiner>
            </Main>
        </div>
    )
}