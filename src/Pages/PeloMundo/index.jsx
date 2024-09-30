import ImageDescription from "../../Components/ImageDescription";
import { BannerConteiner, ConteinerInConteudo, ConteudoConteiner, Main, TitleConteiner } from "./styles";
import pelomundo from "../../Utils/pelomundo.json"
import { useTranslation } from "react-i18next";

export default function PeloMundo() {
    const gallery = pelomundo.gallery;
    const { t } = useTranslation();

    return (
        <div>
            <BannerConteiner />
            <Main>
                <TitleConteiner>
                    <div>
                        <h1>{t('titleForWorld')}</h1>
                        <span>{t('about')}</span>
                    </div>
                </TitleConteiner>
                <ConteudoConteiner>
                    <ConteinerInConteudo>
                        <p className="p-margin-bt">{t('world1')}</p>
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