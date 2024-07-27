import React, { useContext, useEffect, useState } from "react";
import Products from "../components/Products";
import { ProductsContext } from "../components/Context";

const MenPage = () => {
  const { renderedData } = useContext(ProductsContext);
  const [menData, setMenData] = useState();

  const categoryHandler = (renderedData) => {
    const category = renderedData.filter((d) => {
      return d.category === "men's clothing";
    });

    setMenData(category);
    console.log(category);
  };

  console.log(renderedData);
  // categoryHandler();

  return (
    <div className="mt-40">
      Men's Page
      <Products renderedData={menData} />
    </div>
  );
};

export default MenPage;
