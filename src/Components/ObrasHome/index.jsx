import { Link } from "react-router-dom"
import { useObrasContext } from "../../Common/Context/Obras"
import { ButtonAllWorks, ConteinerSection, GridConteiner, GridObras, ImgObra, TitleConteiner } from "./styles"
import PopupObra from "../PopupObra"
import { useTranslation } from "react-i18next"

export default function ObrasHome() {
    const {
        filteredObras,
        handleOpenPopUp,
        obraSelected,
        setObrasSelected
    } = useObrasContext()
    const { t } = useTranslation()

    return (
        <ConteinerSection>
            <div>
                <GridConteiner>
                    <TitleConteiner>
                        <h1>
                            {/* <b>O</b>BRAS */}
                            {t('titleWorksHome')}
                        </h1>
                    </TitleConteiner>
                    <GridObras>
                        {filteredObras.slice(0, 8).map(obra => (
                            <div
                                key={obra.id}
                                onClick={() => {
                                    handleOpenPopUp()
                                    setObrasSelected(obra)
                                }}
                            >
                                <ImgObra src={obra.url} />
                            </div>
                        ))}
                    </GridObras>
                    <div>
                        <Link to={'/obras'}>
                            <ButtonAllWorks>{t('buttonSeeAllsWorks')}</ButtonAllWorks>
                        </Link>
                    </div>
                </GridConteiner>
            </div>
            <PopupObra />
        </ConteinerSection>
    )
}