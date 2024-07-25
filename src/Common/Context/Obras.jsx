import { createContext, useContext, useState } from "react";
import obras from "../../Utils/obras.json"

export const ObrasContext = createContext();
ObrasContext.displayName = "Obras";

export const ObrasProvider = ({ children }) => {
    const [obrasList, setObrasList] = useState([])
    const [stemType, setStemType] = useState(obras.stemtypes)

    return (
        <ObrasContext.Provider
            value={{
                obrasList,
                setObrasList,
                stemType,
                setStemType
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
        setStemType

    } = useContext(ObrasContext)

    const setObras = async () => {
        await setObrasList(obras.gallery)
        console.log(obrasList)
    }

    const setStemTypes = async () => {
        await setStemType(obras.stemtypes)
        console.log(stemType)
    }

    const formatTittle = (tittle) => {
        const [firstPart, secondPart] = tittle.split(' ')

        return (
            <>
                {firstPart} <br /> {secondPart}
            </>
        )
    }


    return {
        obrasList,
        setObrasList,
        setObras,
        stemType,
        setStemType,
        setStemTypes,
        formatTittle
    }
}