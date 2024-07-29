import { Outlet } from "react-router";
import Footer from "../Footer";
import Header from "../Head";
import { BodyHome } from "./styles";

export default function Layout({ children }) {

    return (
        <BodyHome>
            <div>
                <Header />
            </div>
            <div >
                <Outlet />
                {children}
            </div>
            <div>
                <Footer />
            </div>
        </BodyHome>
    )
} 