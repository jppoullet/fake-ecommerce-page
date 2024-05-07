import { createContext, useContext, useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { CartContext } from "./components/Context";

import CartPage from "./pages/CartPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Root from "./pages/Root.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);
  // const [data, setData] = useState();
  // const [renderedData, setRenderedData] = useState();

  // const getProductData = async () => {
  //   try {
  //     const response = await fetch("https://fakestoreapi.com/products");

  //     if (!response.ok) {
  //       throw new Error("Failed to fetch workout data");
  //     }

  //     const data = await response.json();

  //     // Do something with the data
  //     console.log(data);

  //     setData(data);
  //     setRenderedData(data);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // useEffect(() => {
  //   getProductData();
  // }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/CartPage",
      element: <CartPage />,
    },
    {
      path: "/product",
    },
  ]);

  return (
    <div className="mx-5 font-kumbhSans">
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <RouterProvider router={router} />
      </CartContext.Provider>
    </div>
  );
}
export default App;
