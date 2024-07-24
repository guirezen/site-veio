import DescriptionStem from "../../Components/DescriptionStem";
import Footer from "../../Components/Footer";
import Header from "../../Components/Head";
import MainHome from "../../Components/MainHome";

export default function Home() {
    
    return (
        <body>
            <div>
                <Header />
            </div>
            <div>
                <MainHome />
                <DescriptionStem />
            </div>
            <div>
                <Footer />
            </div>
        </body>
    )
}