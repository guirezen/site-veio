import ImageDescription from "../../Components/ImageDescription";
import { BannerConteiner, ConteinerInConteudo, ConteudoConteiner, Main, TitleConteiner } from "./styles";
import pelomundo from "../../Utils/pelomundo.json"

export default function PeloMundo() {
    const gallery = pelomundo.gallery;

    return (
        <div>
            <BannerConteiner />
            <Main>
                <TitleConteiner>
                    <div>
                        <h1>A obra de Véio em cartaz no Brasil e no mundo</h1>
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
                        {gallery.map(viagem => (
                            <ImageDescription 
                                urlImage={viagem.urlImage}
                                alt={"Foto de véio"}
                                descricao={viagem.descricao}
                                key={viagem.id}
                            />
                        ))}
                    </ConteinerInConteudo>
                </ConteudoConteiner>
            </Main>
        </div>
    )
}