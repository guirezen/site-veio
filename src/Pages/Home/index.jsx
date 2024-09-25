import { useEffect } from "react";
import ContactsSection from "../../Components/ContactsSection";
import DescriptionStem from "../../Components/DescriptionStem";
import ObrasHome from "../../Components/ObrasHome";
import { BackgroundHome, ConteinerInsideTitle, ConteinerOutTitle, MainTitle } from "./styles";
import { useObrasContext } from "../../Common/Context/Obras";
import { useLocation } from "react-router";

export default function Home() {
    const {
        filterObras
    } = useObrasContext()
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);


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
                        <span>VÉIO</span>
                    </MainTitle>
                </ConteinerInsideTitle>
            </ConteinerOutTitle>
            <ObrasHome />
            <DescriptionStem />
            <ContactsSection />
        </section>
    )
}