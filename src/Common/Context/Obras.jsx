import { createContext, useContext, useState } from "react";
import obras from "../../Utils/obras.json"

export const ObrasContext = createContext();
ObrasContext.displayName = "Obras";

export const ObrasProvider = ({ children }) => {
    const [obrasList, setObrasList] = useState(obras.gallery)
    const [stemType, setStemType] = useState(obras.stemtypes)
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
        setStemType(obras.stemtypes)
    }

    const formatTittle = (tittle) => {
        const [firstPart, secondPart] = tittle.split(' ')

        return (
            <>
                <span className="titulo-part-1">
                    <strong>{firstPart.slice(0, 3)}</strong>{firstPart.slice(3)}
                </span>
                <br />
                <span className="titulo-part-2">
                    {secondPart.slice(0, secondPart.length - 2)}<strong>{secondPart.slice(-4, -2)}</strong>{secondPart.slice(-2)}
                </span>
            </>
        )
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