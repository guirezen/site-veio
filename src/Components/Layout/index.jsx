import { Outlet } from "react-router";
import Footer from "../Footer";
import Header from "../Head";
import { ConteinerBody, ConteinerInBody } from "./styles";

export default function Layout({ children }) {

    return (
        <ConteinerBody>
            <ConteinerInBody>
                <Header />
                <Outlet />
                <Footer />
            </ConteinerInBody>
        </ConteinerBody>
    )
} 