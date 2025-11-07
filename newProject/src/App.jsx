import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Card from "./pages/Card";
import Navbar from "./components/Navbar";
import axios from "axios";
import Footer from "./components/Footer";
const App = () => {
  const [location, setLocation] = useState();
  const [openDropdown, setOpenDropdown] = useState(false);

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      // console.log(latitude, longitude);

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      try {
        const locationMap = await axios.get(url);
        // console.log(location);
        // console.log(locationMap.data.address);
        const exactLocation = locationMap.data.address;
        setLocation(exactLocation);
        setOpenDropdown(false);
        // console.log(exactLocation);
      } catch (error) {}
    });
  };
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <BrowserRouter>
      <Navbar
        location={location}
        getLocation={getLocation}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/card" element={<Card />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
