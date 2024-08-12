import { Pagination } from "@mui/material";
import { ConteinerGrid, ConteinerInMain, ConteinerMain, ConteinerPagination, ConteinerTitle, ConteinerTitleFilter } from "./styles";
import FilterList from "../../Components/FilterList";
import { useEffect } from "react";
import { useObrasContext } from "../../Common/Context/Obras";
export default function ObrasPage() {
    const {
        displayedObras,
        currentPage,
        setCurrentPage,
        filterObras,
        allPages,
        selectedFilter
    } = useObrasContext()

    useEffect(() => {
        filterObras()
        setCurrentPage(1)
    }, [selectedFilter])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [displayedObras])

    return (
        <ConteinerMain>
            <ConteinerInMain>
                <ConteinerTitleFilter>
                    <ConteinerTitle>
                        <h1>
                            OBRAS
                        </h1>
                    </ConteinerTitle>
                    <div>
                        <FilterList />
                    </div>
                </ConteinerTitleFilter>
                <div>
                    <ConteinerGrid>
                        {
                            displayedObras.map(obra => (
                                <img src={obra.url} alt="Imagem de uma obra"/>
                            ))
                        }
                    </ConteinerGrid>
                </div>
                <ConteinerPagination>
                    <Pagination
                        count={allPages}
                        shape="rounded"
                        page={currentPage}
                        onChange={(event, value) => setCurrentPage(value)}
                    />
                </ConteinerPagination>
            </ConteinerInMain>
        </ConteinerMain>
    )
}