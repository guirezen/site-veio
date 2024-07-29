import ContactsSection from "../../Components/ContactsSection";
import DescriptionStem from "../../Components/DescriptionStem";
import Footer from "../../Components/Footer";
import Header from "../../Components/Head";
import MainHome from "../../Components/MainHome";

export default function Home() {
    
    return (
        <>
            <div>
                <MainHome />
                <DescriptionStem />
                <ContactsSection />
            </div>
        </>
    )
}