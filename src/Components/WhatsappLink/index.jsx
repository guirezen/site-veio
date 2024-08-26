import { Link } from "react-router-dom";

export default function WhatsappLink({ children }) {
    const numberWhats = '+5579999447319'
    const message = 'Olá, gostaria de saber mais sobre suas obras!'

    const urlWhatsapp = `https://wa.me/${numberWhats}?text=${encodeURIComponent(message)}`

    return (
        <a href={urlWhatsapp} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    )
}