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

  const clickHandler = (e) => {
    console.log(e);
  };

  return (
    <div className="mx-5">
      <Navbar />
      <main className="font-kumbhSans my-20">
        <div className="grid grid-cols-2 gap-6">
          {data?.map((d) => (
            <div key={d.id} className="border-2 border-black break-words">
              <div className="">
                <img
                  src={d.image}
                  alt={d.title}
                  key={d.id}
                  className="h-44 w-full object-contain"
                  onClick={clickHandler}
                />
              </div>
              <h2>{d.title}</h2>
              {/* <p>{d.description}</p> */}
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
      </main>
    </div>
  );
}
export default App;
