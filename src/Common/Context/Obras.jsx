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
                setFilteredObras
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
        setFilteredObras
    } = useContext(ObrasContext)

    const setStemTypes = () => {
        setStemType(obras.stemtypes)
        console.log(stemType)
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
        setFilteredObras(obrasFiltradas)
        console.log(filteredObras)
    }

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
        displayedObras
    }
}