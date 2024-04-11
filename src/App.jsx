import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import minusIcon from "../src/assets/ecommerce-product-page-main/images/icon-minus.svg";

function App() {
  const [data, setData] = useState();

  const getProductData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error("Failed to fetch workout data");
      }

      const data = await response.json();

      // Do something with the workout data
      console.log(data);

      setData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="mx-5">
      <Navbar />
      <main className="bg-slate-600 font-kumbhSans">
        <div className="grid grid-cols-2">
          {data?.map((d) => (
            <div key={d.id}>
              <img src={d.image} alt={d.title} />
              <h2>{d.title}</h2>
              <p>{d.description}</p>
              <div className="flex justify-between">
                <div>{d.price}</div>
                <div>
                  <div>{d.rating.rate}/5</div>
                  <div>({d.rating.count})</div>
                </div>
              </div>
              <img src={minusIcon} alt="" />
            </div>
          ))}
        </div>

        <button className="border-2 text-3xl" onClick={getProductData}>
          Button
        </button>
      </main>
    </div>
  );
}
export default App;
