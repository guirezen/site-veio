import { Link } from "react-router-dom"
import { useObrasContext } from "../../Common/Context/Obras"
import { ButtonAllWorks, GridConteiner, GridObras, ImgObra, TitleConteiner } from "./styles"

export default function ObrasHome() {
    const { obrasList } = useObrasContext()

    return (
        <section>
            <div>
                <GridConteiner>
                    <TitleConteiner>
                        <h1>
                            <b>O</b>BRAS
                        </h1>
                    </TitleConteiner>
                    <GridObras>
                        {obrasList.slice(0, 8).map(obra => (
                            <ImgObra src={obra.url} />
                        ))}
                    </GridObras>
                    <div>
                        <Link to={'/obras'}>
                            <ButtonAllWorks>VER TODAS</ButtonAllWorks>
                        </Link>
                    </div>
                </GridConteiner>
            </div>
        </section>
    )
}