import React from "react";

const ProductPage = ({ selectedProduct }) => {
  return (
    <div>
      <h1>{selectedProduct?.map((product) => product.title)}</h1>
    </div>
  );
};

export default ProductPage;
