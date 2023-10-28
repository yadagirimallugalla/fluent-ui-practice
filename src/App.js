// import { useEffect, useState } from "react";
import { initializeIcons } from "@fluentui/react";
import "./App.css";
import ProductsPage from "./components/ProductsPage";
import LoginSignupPage from "./components/LoginSignupPage";
import { Routes, Route } from "react-router-dom";

initializeIcons();
function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<ProductsPage />} />
        <Route path="/:category" element={<ProductsPage />} />
        <Route path="/loginsignup" element={<LoginSignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
