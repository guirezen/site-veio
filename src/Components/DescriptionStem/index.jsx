import { ConteinerCarousel, ConteinerConteudo, ConteinerDescricao, ConteinerSeta, ConteinerTitulo, ImgObra, Section } from "./styles";
import obra from "../../Assets/Iranian_handicraft.jpg"
import { IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const descricao = "Sua obras movimentam-se em duas direções : as obras de troncos fechados e as de troncos abertos. As de troncos fechados, geralmente maiores, são provenientes da vegetação morta, galhos ou raízes, os quais são feitas pequenas intervenções, com a intenção de preservar da natureza o seu caráter expressivo, surgindo assim, formas de animais, homens e figuras nunca vistas."

export default function DescriptionStem() {

    return (
        <Section>
            <ConteinerCarousel>
                <ConteinerSeta>
                    <IconButton aria-label="previous">
                        <ArrowBackIos className="botao-seta" fontSize="large"  />
                    </IconButton>
                </ConteinerSeta>
                <ConteinerConteudo>
                    <div>
                        <ImgObra src={obra} />
                    </div>
                    <div>
                        <ConteinerTitulo>
                            <h1>TRONCOS<br/>FECHADOS</h1>
                        </ConteinerTitulo>
                        <ConteinerDescricao>
                            <p>{descricao}</p>
                        </ConteinerDescricao>
                        <div>
                            indicadores
                        </div>
                    </div>
                </ConteinerConteudo>
                <ConteinerSeta>
                    <IconButton aria-label="previous">
                        <ArrowForwardIos className="botao-seta" fontSize="large" />
                    </IconButton>
                </ConteinerSeta>
            </ConteinerCarousel>
        </Section>
    )
}