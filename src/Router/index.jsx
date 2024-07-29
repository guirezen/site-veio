import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from '../globalStyles';
import Home from "../Pages/Home";
import ContextComponent from "../Common/ContextComponent";
import Layout from "../Components/Layout";

export default function RoutesApp() {

    return (
        <BrowserRouter>
            <GlobalStyles />

            <ContextComponent>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/home" element={<Home />} />
                    </Route>
                </Routes>
            </ContextComponent>
        </BrowserRouter>
    )
}