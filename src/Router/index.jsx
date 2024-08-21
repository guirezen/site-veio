import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from '../globalStyles';
import Home from "../Pages/Home";
import ContextComponent from "../Common/ContextComponent";
import Layout from "../Components/Layout";
import PageSobre from "../Pages/Sobre";
import PeloMundo from "../Pages/PeloMundo";
import ObrasPage from "../Pages/Obras";

export default function RoutesApp() {

    return (
        <BrowserRouter>
            <GlobalStyles />

            <ContextComponent>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/sobre" element={<PageSobre />} />
                        <Route path="/pelomundo" element={<PeloMundo />} />
                        <Route path="/obras" element={<ObrasPage />} />
                    </Route>
                </Routes>
            </ContextComponent>
        </BrowserRouter>
    )
}