import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from '../globalStyles';
import Home from "../Pages/Home";

export default function RoutesApp() {

    return (
        <BrowserRouter>
            <GlobalStyles />

            <Routes>
                <Route path="/home" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}