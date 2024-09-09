import { ConteinerImage, Image } from "./styles";

export default function ImageDescription({ urlImage, alt, descricao }) {

    return (
        <>
            <ConteinerImage className="center-image">
                <Image
                    src={urlImage}
                    alt={alt}
                />
            </ConteinerImage>
            <div>
                <span>
                    {descricao}
                </span>
            </div>
        </>
    )
}