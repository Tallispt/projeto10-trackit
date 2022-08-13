import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../context/UserContext";

import { GlobalStyle } from "./GlobalStyles";
import Login from "./Login"
import Signup from "./Signup"
import Home from "./Home"
import Subscriptions from "./Subscriptions"
import Plan from "./Plan";

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
          <Route path="/subscriptions/:idPlan" element={<Plan />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}