import { FormControl, MenuItem, Select, styled } from "@mui/material";
import { ContainerLanguage } from "./styles";
import { useState } from "react";
import i18n from "../../Utils/traducoes";

const CustomSelect = styled(Select)(() => ({
    display: 'none',
}))

const LanguageSelect = () => {
    const [language, setLanguage] = useState('pt');

    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        setLanguage(selectedLanguage);
        i18n.changeLanguage(selectedLanguage); // Função para alterar o idioma
    };

    return (
        <ContainerLanguage colorLanguage={'#fff'}>
            <label htmlFor="demo-simple-select">
                <img src="/Assets/linguagem.png" />
            </label>
            <select
                id="demo-simple-select"
                value={' '}
                onChange={handleLanguageChange}
            >
                <option value={''}></option>
                <option value="en">Inglês</option>
                <option value={'es'}>Espanhol</option>
                <option value={'pt'}>Português</option>
            </select>
        </ContainerLanguage>
    )
}

export default LanguageSelect;