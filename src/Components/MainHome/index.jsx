import { useEffect } from "react"
import { useObrasContext } from "../../Common/Context/Obras"
import { ButtonAllWorks, GridConteiner, GridObras, ImgObra, TitleConteiner } from "./styles"

export default function MainHome() {
    const { obrasList, setObras } = useObrasContext()


    useEffect(() => {
        setObras()
    }, [])

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
                        {obrasList.map(obra => (
                            <ImgObra src={obra.url} />
                        ))}
                    </GridObras>
                    <div>
                        <ButtonAllWorks>VER TODAS</ButtonAllWorks>
                    </div>
                </GridConteiner>
            </div>
        </section>
    )
}