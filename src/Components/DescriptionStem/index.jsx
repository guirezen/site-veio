import { BackgroundTop, ConteinerCarousel, ConteinerConteudo, ConteinerDescricao, ConteinerIndicadores, ConteinerSeta, ConteinerTitulo, ImgObra, OutDescribeConteiner, Section } from "./styles";
import obra from "../../Assets/Iranian_handicraft.jpg"
import { IconButton, MobileStepper, styled } from "@mui/material";
import { ArrowBackIos, ArrowBackIosNew, ArrowForwardIos, Height } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useObrasContext } from "../../Common/Context/Obras";

const descricao = "Sua obras movimentam-se em duas direções : as obras de troncos fechados e as de troncos abertos. As de troncos fechados, geralmente maiores, são provenientes da vegetação morta, galhos ou raízes, os quais são feitas pequenas intervenções, com a intenção de preservar da natureza o seu caráter expressivo, surgindo assim, formas de animais, homens e figuras nunca vistas."

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
                            onClick={() => setActivateStep(0)}
                            disabled={activateStep === 0}
                        >
                            <ArrowBackIosNew className="botao-seta" fontSize="large" />
                        </IconButton>
                    </ConteinerSeta>
                    <ConteinerConteudo>
                        <div>
                            <ImgObra src={stemType[activateStep]?.imagem} />
                        </div>
                        <OutDescribeConteiner>
                            <ConteinerTitulo>
                                <h1>{formatTittle(stemType[activateStep]?.tipoTronco)}</h1>
                            </ConteinerTitulo>
                            <ConteinerDescricao>
                                <p>{stemType[activateStep]?.descricao}</p>
                            </ConteinerDescricao>
                            <ConteinerIndicadores>
                                <CustomMobileStepper
                                    className="indicadores"
                                    variant="dots"
                                    steps={2}
                                    position="static"
                                    activeStep={activateStep}
                                />
                            </ConteinerIndicadores>
                        </OutDescribeConteiner>
                    </ConteinerConteudo>
                    <ConteinerSeta>
                        <IconButton
                            aria-label="forward"
                            onClick={() => setActivateStep(1)}
                            disabled={activateStep === 1}
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