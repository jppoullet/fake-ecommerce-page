import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext, ProductsContext } from "../components/Context";

const ProductPage = () => {
  const { renderedData } = useContext(ProductsContext);
  const { cartItems, setCartItems } = useContext(CartContext);

  // const [product, setProduct] = useState();
  const { id } = useParams();

  const product = renderedData.find((item) => item.id == id);
  if (!product) return <p className="mt-20">Product not found</p>;

  const addToCartHandler = (e, product) => {
    console.log(`add to cart ${product.title}`);
    console.log(product.id);

    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.id === product.id,
    );

    if (existingCartItemIndex >= 0) {
      // If the product is already in the cart, increment the quantity
      const updatedCartItems = cartItems.map((item, idx) =>
        idx === existingCartItemIndex ? { ...item, qty: item.qty + 1 } : item,
      );

      setCartItems(updatedCartItems);
      console.log("Quantity incremented");
    } else {
      // If the product is not in the cart, add it with qty 1
      setCartItems((prevItems) => [...prevItems, { ...product, qty: 1 }]);
      console.log("Added to cart");
    }
  };

  return (
    <div className="mt-32 flex flex-col items-center gap-16">
      <p>{product.title}</p>
      <img
        src={product.image}
        alt={product.title}
        className="size-60 object-contain"
      />
      <div className="text-xl md:text-2xl">${product.price.toFixed(2)}</div>
      <button
        className="my-2 flex w-full justify-center gap-2 rounded-md bg-orange-400 py-2 text-white drop-shadow-sm sm:w-96"
        onClick={(e) => {
          addToCartHandler(e, product);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="20"
          className="fill-white"
        >
          <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
        </svg>
        <p className="drop-shadow-md">Add to Cart</p>
      </button>
    </div>
  );
};

export default ProductPage;
