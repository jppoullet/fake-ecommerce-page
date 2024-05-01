import { createContext, useContext, useEffect, useState } from "react";
import { CartContext } from "./components/Context";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const [data, setData] = useState();
  const [renderedData, setRenderedData] = useState();
  const [cartItems, setCartItems] = useState([]);

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
    <div className="mx-5 font-kumbhSans">
      <CartContext.Provider value={cartItems}>
        <Navbar setRenderedData={setRenderedData} data={data} />
        <main className="my-20">
          <Products
            renderedData={renderedData}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </main>
      </CartContext.Provider>
    </div>
  );
}
export default App;
