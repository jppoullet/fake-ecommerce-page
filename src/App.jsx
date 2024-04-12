import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ItemPage from "./pages/ItemPage";

function App() {
  const [data, setData] = useState();
  const [renderedData, setRenderedData] = useState();
  const [selectedProduct, setSelectedProduct] = useState();

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
      <Navbar setRenderedData={setRenderedData} data={data} />
      <main className="my-20">
        <ItemPage selectedProduct={selectedProduct} />
        <Product
          renderedData={renderedData}
          setSelectedProduct={setSelectedProduct}
        />
      </main>
    </div>
  );
}
export default App;
