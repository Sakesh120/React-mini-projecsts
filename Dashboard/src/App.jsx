import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import DashBoard from "./pages/DashBoard";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/DashBoard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
