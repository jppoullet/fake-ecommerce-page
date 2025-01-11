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
import { LoadingContext } from "./components/Context";

import CartPage from "./pages/CartPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Root from "./pages/Root.jsx";
import Navbar from "./components/Navbar.jsx";
import MenPage from "./pages/MenPage.jsx";
import WomenPage from "./pages/WomenPage.jsx";
import JewelryPage from "./pages/JewelryPage.jsx";
import Electronics from "./pages/Electronics.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import AccountPage from "./pages/AccountPage.jsx";

function App() {
  const [renderedData, setRenderedData] = useState();
  const [loading, setLoading] = useState(false);

  const [cartItems, setCartItems] = useState(() => {
    const storageCartItems = localStorage.getItem("cart");
    return storageCartItems ? JSON.parse(storageCartItems) : [];
  });

  const getProductData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error("Failed to fetch workout data");
      }

      const data = await response.json();

      // Do something with the data
      console.log(data);

    
      setRenderedData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="mx-5 font-kumbhSans">
      <ProductsContext.Provider value={{ renderedData, setRenderedData }}>
      <LoadingContext.Provider value={{ loading, setLoading }}>
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
              <Route path="/AccountPage" element={<AccountPage />} />
              <Route path="/ProductPage/:id" element={<ProductPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Router>
        </CartContext.Provider>
      </LoadingContext.Provider>
      </ProductsContext.Provider>
    </div>
  );
}
export default App;
