import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import { ConteinerArrowButton, ConteinerList, ConteinerOutCarousel, ConteinerSection, ItensList } from "./styles";
import { styled } from "@mui/material";
import { useObrasContext } from "../../Common/Context/Obras";
import { useEffect, useState } from "react";

const StyledIconBack = styled(ArrowBackIosNewOutlined)(() => ({
    fontSize: '35px',
    color: '#d2d2d2'
}))

const StyledIconForward = styled(ArrowForwardIosOutlined)(() => ({
    fontSize: '35px',
    color: '#d2d2d2'
}))

export default function CarouselObras() {
    const {
        checkerRandomListRepeat,
        handleOpenPopUp,
        setObrasSelected,
        obrasCarousel,
        contador,
        setContador,
        obraSelected
    } = useObrasContext()

    useEffect(() => {
        checkerRandomListRepeat()
    }, [obraSelected])

    const handleArrowBack = () => {
        if (contador > 1) {
            let contadorAtualizado = contador - 1
            setContador(contadorAtualizado)
            setObrasSelected(obrasCarousel[contadorAtualizado])
        }
    }

    const handleArrowForward = async () => {
        if (contador <= obrasCarousel.length) {
            let contadorAtualizado = contador + 1
            setContador(contadorAtualizado)
            setObrasSelected(obrasCarousel[contadorAtualizado])
        }
    }


    return (
        <ConteinerOutCarousel>
            <ConteinerArrowButton className="arrow-left">
                <button
                    type="button"
                    onClick={handleArrowBack}
                    disabled={contador === 0}
                >
                    <StyledIconBack />
                </button>
            </ConteinerArrowButton>
            <ConteinerSection>
                <h6>OUTRAS OBRAS</h6>
                <ConteinerList>
                    {obrasCarousel.slice(contador + 1, contador + 5).map(obra => (
                        <ItensList 
                            key={obra.id}
                            onClick={() => {
                                handleOpenPopUp()
                                setObrasSelected(obra)
                            }}
                        >
                            <img src={obra.url} />
                        </ItensList>
                    ))}
                </ConteinerList>
            </ConteinerSection>
            <ConteinerArrowButton className="arrow-right">
                <button
                    type="button"
                    onClick={handleArrowForward}
                >
                    <StyledIconForward />
                </button>
            </ConteinerArrowButton>
        </ConteinerOutCarousel>
    )
}