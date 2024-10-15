import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  return (
    <BrowserRouter>
      <Header cartItems={cartItems} />
      <Routes>
        <Route index element={<Products handleAddToCart={handleAddToCart} />} />
        <Route
          path="/detail/:id"
          element={<ProductDetails handleAddToCart={handleAddToCart} />}
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
