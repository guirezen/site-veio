import { BackgroundTop, ContainerImgObra, ConteinerCarousel, ConteinerConteudo, ConteinerDescricao, ConteinerIndicadores, ConteinerSeta, ConteinerTitulo, OutDescribeConteiner, Section } from "./styles";
import { IconButton, MobileStepper, styled } from "@mui/material";
import { ArrowBackIos, ArrowBackIosNew, ArrowForwardIos, Height } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useObrasContext } from "../../Common/Context/Obras";

const CustomMobileStepper = styled(MobileStepper)(() => ({
    '& .MuiMobileStepper-dot': {
        backgroundColor: 'transparent',
        border: '1px solid #747474',
        width: '7px',
        height: '7px'
    },
    '& .MuiMobileStepper-dotActive': {
        backgroundColor: '#B85151',
    },
}));

export default function DescriptionStem() {
    const [activateStep, setActivateStep] = useState(0)
    const {
        stemType,
        setStemTypes,
        formatTittle
    } = useObrasContext()

    useEffect(() => {
        setStemTypes()
    }, [])

    return (
        <Section>
            <BackgroundTop />
            <div className="flex-center">
                <ConteinerCarousel>
                    <ConteinerSeta>
                        <IconButton
                            aria-label="previous"
                            onClick={() => setActivateStep(prevStep => prevStep > 0 && prevStep - 1)}
                            disabled={activateStep === 0}
                        >
                            <ArrowBackIosNew className="botao-seta" fontSize="large" />
                        </IconButton>
                    </ConteinerSeta>
                    <ConteinerConteudo>
                        <ContainerImgObra>
                            <img src={stemType[activateStep]?.imagem} />
                        </ContainerImgObra>
                        <OutDescribeConteiner>
                            <ConteinerTitulo>
                                <h1>{formatTittle(stemType[activateStep]?.tipoTronco, stemType[activateStep]?.id)}</h1>
                            </ConteinerTitulo>
                            <ConteinerDescricao>
                                <p>{stemType[activateStep]?.descricao}</p>
                            </ConteinerDescricao>
                            <ConteinerIndicadores>
                                <CustomMobileStepper
                                    className="indicadores"
                                    variant="dots"
                                    steps={6}
                                    position="static"
                                    activeStep={activateStep}
                                />
                            </ConteinerIndicadores>
                        </OutDescribeConteiner>
                    </ConteinerConteudo>
                    <ConteinerSeta>
                        <IconButton
                            aria-label="forward"
                            onClick={() => setActivateStep(prevStep => prevStep < 6 ? prevStep + 1 : prevStep)}
                            disabled={activateStep === 5}
                        >
                            <ArrowForwardIos className="botao-seta" fontSize="large" />
                        </IconButton>
                    </ConteinerSeta>
                </ConteinerCarousel>
            </div>
            <BackgroundTop />
        </Section>
    )
}