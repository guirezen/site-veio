import { useEffect, useState } from "react"
import { useObrasContext } from "../../Common/Context/Obras"
import { ConteinerFilterList } from "./styles"
import { Box, FormControl, InputLabel, MenuItem, Select, styled } from "@mui/material";
import { useTranslation } from 'react-i18next';

const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
        display: 'none'
    }
}))

export default function FilterList() {
    const {
        selectedFilter,
        setSelectedFilter
    } = useObrasContext()
    const { t } = useTranslation();

    const handleChange = (event) => {
        setSelectedFilter(event.target.value);
    };

    return (
        <>
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
                <label htmlFor='todos'>{t('filtersStem')}</label>
                <input
                    type="radio"
                    className="input-filter"
                    id="troncosFechados"
                    name="StemFilter"
                    value='fechado'
                    checked={selectedFilter === 'fechado'}
                    onChange={(event) => setSelectedFilter(event.target.value)}
                />
                <label htmlFor='troncosFechados'>{t('filtersStem2')}</label>
                <input
                    type="radio"
                    className="input-filter"
                    id="troncosAbertos"
                    name="StemFilter"
                    value='aberto'
                    checked={selectedFilter === 'aberto'}
                    onChange={(event) => setSelectedFilter(event.target.value)}
                />
                <label htmlFor='troncosAbertos'>{t('filtersStem3')}</label>
            </ConteinerFilterList>
            <CustomBox sx={{ minWidth: 200 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tipo de Tronco</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedFilter}
                        label="Tipo de Tronco"
                        onChange={handleChange}
                    >
                        <MenuItem value={'todos'}>Todos</MenuItem>
                        <MenuItem value={'fechado'}>Troncos Fechados</MenuItem>
                        <MenuItem value={'aberto'}>Troncos Abertos</MenuItem>
                    </Select>
                </FormControl>
            </CustomBox>
        </>
    )
}