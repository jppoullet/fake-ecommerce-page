import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../components/Context";

const ProductPage = () => {
  const { renderedData } = useContext(ProductsContext);
  // const [product, setProduct] = useState();
  const { id } = useParams();

  const product = renderedData.find((item) => item.id == id);

  if (!product) return <p className="mt-20">Product not found</p>;

  return (
    <div className="mt-32 flex flex-col items-center gap-16">
      <p>{product.title}</p>
      <img
        src={product.image}
        alt={product.title}
        className="object-contain size-60"
      />
    </div>
  );
};

export default ProductPage;
