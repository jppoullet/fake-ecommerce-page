import React, { useContext, useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { ProductsContext } from "../components/Context";

const Root = () => {
  const { renderedData } = useContext(ProductsContext);

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
