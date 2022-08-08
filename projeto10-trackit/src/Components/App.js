import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login"
import Signin from "./Signin"
import Home from "./Home"
import { GlobalStyle } from "./GlobalStyles";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Signin />} />
                <Route path="/hoje" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}