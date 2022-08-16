import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../context/UserContext";

import { GlobalStyle } from "../styles/GlobalStyles";
import Login from "./Login"
import Signup from "./Signup"
import Home from "./Home/Home"
import Subscriptions from "./Subscriptions"
import Plan from "./Plan/Plan";

export default function App() {
  const [clientInfo, setClientInfo] = useState({})

  return (
    <UserContext.Provider value={{ clientInfo, setClientInfo }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/subscriptions/:planId" element={<Plan />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}