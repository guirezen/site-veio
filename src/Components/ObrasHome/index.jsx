import { Link } from "react-router-dom"
import { useObrasContext } from "../../Common/Context/Obras"
import { ButtonAllWorks, ConteinerSection, GridConteiner, GridObras, ImgObra, TitleConteiner } from "./styles"
import PopupObra from "../PopupObra"

export default function ObrasHome() {
    const {
        filteredObras,
        handleOpenPopUp,
        obraSelected,
        setObrasSelected
    } = useObrasContext()

    return (
        <ConteinerSection>
            <div>
                <GridConteiner>
                    <TitleConteiner>
                        <h1>
                            <b>O</b>BRAS
                        </h1>
                    </TitleConteiner>
                    <GridObras>
                        {filteredObras.slice(0, 8).map(obra => (
                            <div onClick={() => {
                                handleOpenPopUp()
                                setObrasSelected(obra)
                            }}>
                                <ImgObra src={obra.url} />
                            </div>
                        ))}
                    </GridObras>
                    <div>
                        <Link to={'/obras'}>
                            <ButtonAllWorks>VER TODAS</ButtonAllWorks>
                        </Link>
                    </div>
                </GridConteiner>
            </div>
            <PopupObra />
        </ConteinerSection>
    )
}