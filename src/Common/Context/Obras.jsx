import { createContext, useContext, useState } from "react";
import obras from "../../Utils/obras.json"
import tiposTroncos from "../../Utils/tiposTroncos.json"

export const ObrasContext = createContext();
ObrasContext.displayName = "Obras";

export const ObrasProvider = ({ children }) => {
    const [obrasList, setObrasList] = useState(obras.gallery)
    const [stemType, setStemType] = useState(tiposTroncos.stemtypes)
    const [selectedFilter, setSelectedFilter] = useState('todos')
    const [currentPage, setCurrentPage] = useState(1)
    const [filteredObras, setFilteredObras] = useState([])
    const [openPopUp, setOpenPopUp] = useState(false);
    const [obraSelected, setObrasSelected] = useState({});
    const [obrasCarousel, setObrasCarousel] = useState([])
    const [contador, setContador] = useState(1)

    return (
        <ObrasContext.Provider
            value={{
                obrasList,
                setObrasList,
                stemType,
                setStemType,
                selectedFilter,
                setSelectedFilter,
                currentPage,
                setCurrentPage,
                filteredObras,
                setFilteredObras,
                openPopUp,
                setOpenPopUp,
                obraSelected,
                setObrasSelected,
                obrasCarousel,
                setObrasCarousel,
                contador,
                setContador
            }}
        >
            {children}
        </ObrasContext.Provider>
    )
}

export const useObrasContext = () => {
    const {
        obrasList,
        setObrasList,
        stemType,
        setStemType,
        selectedFilter,
        setSelectedFilter,
        currentPage,
        setCurrentPage,
        filteredObras,
        setFilteredObras,
        openPopUp,
        setOpenPopUp,
        obraSelected,
        setObrasSelected,
        obrasCarousel,
        setObrasCarousel,
        contador,
        setContador
    } = useContext(ObrasContext)

    const setStemTypes = () => {
        setStemType(tiposTroncos.stemtypes)
    }

    const formatTittle = (tittle, id) => {
        if (id == 0 || id == 1) {
            const [firstPart, secondPart] = tittle.split(' ')

            return (
                <>
                    <span className="titulo-part-1">
                        {firstPart}
                    </span>
                    <br />
                    <span className="titulo-part-2">
                        {secondPart}
                    </span>
                </>
            )
        } else {
            const [firstPart, secondPart] = tittle.split('  ')

            return (
                <>
                    <span className="titulo-part-1">
                        <strong>{firstPart}</strong>
                    </span >
                    <br />
                    <span className="titulo-part-2">
                        {secondPart}
                    </span>
                </>
            )
        }
    }

    const filterObras = () => {
        const obrasFiltradas = obrasList.filter(obra => {
            if (selectedFilter === 'todos') {
                return obra
            }
            return obra.type === selectedFilter
        })
        const randomObras = shuffleArray(obrasFiltradas)

        setFilteredObras(randomObras)
    }

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array
    }

    const checkerRandomListRepeat = () => {
        const randomCheckedList = filteredObras.filter(obra => obra.id !== obraSelected.id)

        setObrasCarousel([obraSelected, ...randomCheckedList])
    }

    const handleOpenPopUp = () => {
        setOpenPopUp(true);
    };
    const handleClosePopUp = () => {
        setOpenPopUp(false);
    };

    const allPages = Math.ceil(filteredObras.length / 20)
    const obrasPerPage = 20
    const startIndex = (currentPage - 1) * obrasPerPage
    const endIndex = startIndex + obrasPerPage
    const displayedObras = filteredObras.slice(startIndex, endIndex)


    return {
        obrasList,
        setObrasList,
        stemType,
        setStemType,
        setStemTypes,
        formatTittle,
        selectedFilter,
        setSelectedFilter,
        filteredObras,
        currentPage,
        setCurrentPage,
        filterObras,
        allPages,
        displayedObras,
        openPopUp,
        setOpenPopUp,
        handleOpenPopUp,
        handleClosePopUp,
        obraSelected,
        setObrasSelected,
        checkerRandomListRepeat,
        obrasCarousel,
        contador,
        setContador
    }
}