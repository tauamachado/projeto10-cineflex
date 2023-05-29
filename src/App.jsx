import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import axios from "axios";

export default function App() {

  axios.defaults.headers.common['Authorization'] = 'B5yGz8e3CEZiuTHuq8bp9SvE';

  const [successInfo, setSuccessInfo] = useState({});

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sessoes/:idFilme" element={<SessionsPage />} />
        <Route
          path="/assentos/:idSessao"
          element={<SeatsPage setSuccessInfo={setSuccessInfo} />}
        />
        <Route
          path="/sucesso"
          element={<SuccessPage successInfo={successInfo} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
