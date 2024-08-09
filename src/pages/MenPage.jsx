import React, { useContext, useEffect, useState } from "react";
import Products from "../components/Products";
import { ProductsContext } from "../components/Context";

const MenPage = () => {
  const { renderedData } = useContext(ProductsContext);
  const [menData, setMenData] = useState(renderedData);

  const categoryHandler = () => {
    const category = menData?.filter((d) => {
      return d.category === "men's clothing";
    });

    setMenData(category);
    console.log(category);
  };

  useEffect(() => {
    categoryHandler();
  }, []);

  // categoryHandler();

  return (
    <div className="mt-20">
      Men's Page
      {menData && <Products renderedData={menData} />}
    </div>
  );
};

export default MenPage;
