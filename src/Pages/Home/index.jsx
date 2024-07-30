import ContactsSection from "../../Components/ContactsSection";
import DescriptionStem from "../../Components/DescriptionStem";
import MainHome from "../../Components/MainHome";
import { ConteinerInsideTitle, ConteinerOutTitle, MainTitle } from "./styles";

export default function Home() {

    return (
        <div>
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
            <MainHome />
            <DescriptionStem />
            <ContactsSection />
        </div>
    )
}