import React, { useContext, useEffect, useState } from "react";
import Products from "../components/Products";
import { ProductsContext } from "../components/Context";

const MenPage = () => {
  const { renderedData } = useContext(ProductsContext);
  const [womenData, setWomenData] = useState(renderedData);

  const categoryHandler = () => {
    const category = womenData?.filter((d) => {
      return d.category === "women's clothing";
    });

    setWomenData(category);
    console.log(category);
  };

  useEffect(() => {
    categoryHandler();
  }, []);

  // categoryHandler();

  return (
    <div className="mt-20">
      Women's
      {womenData && <Products renderedData={womenData} />}
    </div>
  );
};

export default MenPage;
