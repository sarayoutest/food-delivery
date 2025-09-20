import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Placeorder from "./pages/Placeorder/Placeorder";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <ErrorBoundary>
        {showLogin && <Login setShowLogin={setShowLogin} />}
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
        </Routes>

        <Footer />
    </ErrorBoundary>
  );
}

export default App;
