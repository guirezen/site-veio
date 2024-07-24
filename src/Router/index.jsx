import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from '../globalStyles';
import Home from "../Pages/Home";
import ContextComponent from "../Common/ContextComponent";

export default function RoutesApp() {

    return (
        <BrowserRouter>
            <GlobalStyles />

            <ContextComponent>
                <Routes>
                    <Route path="/home" element={<Home />} />
                </Routes>
            </ContextComponent>
        </BrowserRouter>
    )
}