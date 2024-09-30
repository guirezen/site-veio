import { useTranslation } from "react-i18next";
import { BannerConteiner, ConteinerInConteudo, ConteudoConteiner, Image, Main, TitleConteiner } from "./styles";

export default function PageSobre() {
    const { t } = useTranslation();

    return (
        <div>
            <BannerConteiner />
            <Main>
                <TitleConteiner>
                    <div>
                        <h1>{t('titleAbout')}</h1>
                        <span>{t('about')}</span>
                    </div>
                </TitleConteiner>
                <ConteudoConteiner>
                    <ConteinerInConteudo>
                        <p className="p-margin-bt">{t('about1')}</p>
                        <div className="center-image">
                            <Image
                                src="./Assets/image.png"
                                alt="Imagem do véio em sua oficina"
                            />
                        </div>
                        <div>
                            <span>{t('about2')}</span>
                        </div>
                        <p className="p-margin-bt">{t('about3')}</p>
                        <p className="p-margin-bt">{t('about4')}</p>
                        <p className="p-margin-bt">{t('about5')}</p>
                    </ConteinerInConteudo>
                </ConteudoConteiner>
            </Main>
        </div>
    )
}