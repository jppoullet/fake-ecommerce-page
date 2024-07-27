import React, { useContext, useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { ProductsContext } from "../components/Context";

const Root = () => {
  const { renderedData } = useContext(ProductsContext);
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

  return (
    <>
      {/* <Navbar setRenderedData={setRenderedData} data={data} /> */}
      <main className="my-20">
        <Products renderedData={renderedData} />
      </main>
    </>
  );
};

export default Root;
