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
import SingleProduct from "./components/SingleProduct";
import CategoryProduct from "./pages/CategoryProduct";
import { useCart } from "./context/CartContext";
import ProtectedRoute from "./components/ProtectedRoute";
const App = () => {
  const [location, setLocation] = useState();
  const [openDropdown, setOpenDropdown] = useState(false);
  const { cartItem, setCartItem } = useCart();

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

  // Load card from localstorage on intial render
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItem");
    if (storedCart) {
      setCartItem(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever the changes
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

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
        <Route path="/products/:id" element={<SingleProduct />}></Route>
        <Route path="/category/:category" element={<CategoryProduct />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/card"
          element={
            <ProtectedRoute>
              <Card location={location} getLocation={getLocation} />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
