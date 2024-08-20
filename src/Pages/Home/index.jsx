import { useEffect } from "react";
import ContactsSection from "../../Components/ContactsSection";
import DescriptionStem from "../../Components/DescriptionStem";
import ObrasHome from "../../Components/ObrasHome";
import { BackgroundHome, ConteinerInsideTitle, ConteinerOutTitle, MainTitle } from "./styles";
import { useObrasContext } from "../../Common/Context/Obras";

export default function Home() {
    const {
        filterObras
    } = useObrasContext()

    useEffect(() => {
        filterObras()
    }, [])

    return (
        <section>
            <BackgroundHome />
            <ConteinerOutTitle>
                <ConteinerInsideTitle>
                    <MainTitle>
                        O<br />
                        IMAGINÁ-<br />
                        RIO DE<br />
                        <span>VÉI<b>O</b></span>
                    </MainTitle>
                </ConteinerInsideTitle>
            </ConteinerOutTitle>
            <ObrasHome />
            <DescriptionStem />
            <ContactsSection />
        </section>
    )
}