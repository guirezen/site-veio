import { Pagination, styled } from "@mui/material";
import { ConteinerGrid, ConteinerInMain, ConteinerMain, ConteinerPagination, ConteinerTitle, ConteinerTitleFilter } from "./styles";
import FilterList from "../../Components/FilterList";
import { useEffect } from "react";
import { useObrasContext } from "../../Common/Context/Obras";
import PopupObra from "../../Components/PopupObra";

const CustomPagination = styled(Pagination)(() => ({
    '.MuiButtonBase-root': {
        color: '#7a7a7a',
        fontSize: '19px',
        fontWeight: 'bold',
    },
    '.Mui-selected': {
        backgroundColor: '#be5353!important',
        color: '#fff',
    },
}))

export default function ObrasPage() {
    const {
        displayedObras,
        currentPage,
        setCurrentPage,
        filterObras,
        allPages,
        selectedFilter,
        handleOpenPopUp,
        setObrasSelected
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
                                <img
                                    key={obra.id}
                                    src={obra.url}
                                    alt="Imagem de uma obra"
                                    onClick={() => {
                                        handleOpenPopUp()
                                        setObrasSelected(obra)
                                    }}
                                />
                            ))
                        }
                    </ConteinerGrid>
                </div>
                <ConteinerPagination>
                    <CustomPagination
                        count={allPages}
                        shape="rounded"
                        page={currentPage}
                        onChange={(event, value) => setCurrentPage(value)}
                    />
                </ConteinerPagination>
            </ConteinerInMain>
            <PopupObra />
        </ConteinerMain>
    )
}