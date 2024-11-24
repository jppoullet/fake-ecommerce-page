import { createContext, useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { CartContext } from "./components/Context";
import { ProductsContext } from "./components/Context";

import CartPage from "./pages/CartPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Root from "./pages/Root.jsx";
import Navbar from "./components/Navbar.jsx";
import MenPage from "./pages/MenPage.jsx";
import WomenPage from "./pages/WomenPage.jsx";
import JewelryPage from "./pages/JewelryPage.jsx";
import Electronics from "./pages/Electronics.jsx";
import ProductPage from "./pages/ProductPage.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState();
  const [renderedData, setRenderedData] = useState();

  const getProductData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error("Failed to fetch workout data");
      }

      const data = await response.json();

      // Do something with the data
      console.log(data);

      setData(data);
      setRenderedData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="mx-5 font-kumbhSans ">
      <ProductsContext.Provider value={{ renderedData, setRenderedData }}>
        <CartContext.Provider value={{ cartItems, setCartItems }}>
          <Router>
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<Root />} />
              <Route path="/CartPage" element={<CartPage />} />
              <Route path="/Men" element={<MenPage />} />
              <Route path="/Women" element={<WomenPage />} />
              <Route path="/Jewelry" element={<JewelryPage />} />
              <Route path="/Electronics" element={<Electronics />} />
              <Route path="/ProductPage/:id" element={<ProductPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Router>
        </CartContext.Provider>
      </ProductsContext.Provider>
    </div>
  );
}
export default App;
