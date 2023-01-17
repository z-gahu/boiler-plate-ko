import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/loginPage" element={<LoginPage />} />
          <Route exact path="/registerPage" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
