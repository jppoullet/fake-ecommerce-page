import React, { useContext, useEffect, useState } from "react";
import Products from "../components/Products";
import { ProductsContext } from "../components/Context";

const MenPage = () => {
  const { renderedData } = useContext(ProductsContext);
  const [jewelryData, setJewelryData] = useState(renderedData);

  const categoryHandler = () => {
    const category = jewelryData?.filter((d) => {
      return d.category === "jewelery";
    });

    setJewelryData(category);
    console.log(category);
  };

  useEffect(() => {
    categoryHandler();
  }, []);

  // categoryHandler();

  return (
    <div className="mt-20">
      Jewelry
      {jewelryData && <Products renderedData={jewelryData} />}
    </div>
  );
};

export default MenPage;
