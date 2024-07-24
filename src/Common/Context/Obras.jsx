import { createContext, useContext, useState } from "react";
import obras from "../../Utils/obras.json"

export const ObrasContext = createContext();
ObrasContext.displayName = "Obras";

export const ObrasProvider = ({ children }) => {
    const [obrasList, setObrasList] = useState([])

    return (
        <ObrasContext.Provider
            value={{
                obrasList,
                setObrasList
            }}
        >
            {children}
        </ObrasContext.Provider>
    )
}

export const useObrasContext = () => {
    const {
        obrasList,
        setObrasList
    } = useContext(ObrasContext)

    const setObras = async () => {
        await setObrasList(obras.gallery)
        console.log(obrasList)
    }


    return {
        obrasList,
        setObrasList,
        setObras
    }
}