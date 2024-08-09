import React, { useContext, useEffect, useState } from "react";
import Products from "../components/Products";
import { ProductsContext } from "../components/Context";

const MenPage = () => {
  const { renderedData } = useContext(ProductsContext);
  const [electronicsData, setElectronicsData] = useState(renderedData);

  const categoryHandler = () => {
    const category = electronicsData?.filter((d) => {
      return d.category === "electronics";
    });

    setElectronicsData(category);
    console.log(category);
  };

  useEffect(() => {
    categoryHandler();
  }, []);

  // categoryHandler();

  return (
    <div className="mt-20">
      Electronics
      {electronicsData && <Products renderedData={electronicsData} />}
    </div>
  );
};

export default MenPage;
