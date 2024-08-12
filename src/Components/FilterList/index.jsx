import { useEffect } from "react"
import { useObrasContext } from "../../Common/Context/Obras"
import { ConteinerFilterList } from "./styles"

export default function FilterList() {
    const {
        selectedFilter,
        setSelectedFilter
    } = useObrasContext()

    useEffect(() => {
        console.log(selectedFilter)
    }, [selectedFilter])

    return (
        <ConteinerFilterList>
            <input
                type="radio"
                className="input-filter"
                id="todos"
                name="StemFilter"
                value='todos'
                checked={selectedFilter === 'todos'}
                onChange={(event) => setSelectedFilter(event.target.value)}
            />
            <label for='todos'>
                Todos
            </label>
            <input
                type="radio"
                className="input-filter"
                id="troncosFechados"
                name="StemFilter"
                value='fechado'
                checked={selectedFilter === 'fechado'}
                onChange={(event) => setSelectedFilter(event.target.value)}
            />
            <label for='troncosFechados'>
                Troncos Fechados
            </label>
            <input
                type="radio"
                className="input-filter"
                id="troncosAbertos"
                name="StemFilter"
                value='aberto'
                checked={selectedFilter === 'aberto'}
                onChange={(event) => setSelectedFilter(event.target.value)}
            />
            <label for='troncosAbertos'>
                Troncos Abertos
            </label>
        </ConteinerFilterList>
    )
}