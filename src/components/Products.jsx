import React, { useState } from "react";
import minusIcon from "../assets/ecommerce-product-page-main/images/icon-minus.svg";
import plusIcon from "../assets/ecommerce-product-page-main/images/icon-plus.svg";
import cartIcon from "../assets/ecommerce-product-page-main/images/icon-cart.svg";

const Products = ({ renderedData, cartItems, setCartItems }) => {
  const [amountValue, setAmountValue] = useState("");

  const productClickHandler = (e) => {
    const item = e.target.id;
    const dataItem = renderedData.filter((d) => {
      return d.id == item;
    });
    console.log(dataItem);
  };

  const plusHandler = (e, index) => {
    let productId = e.target.id;
    let productInput = document.querySelectorAll("input")[index];
    console.log(`value ${productInput.value}`);
    productInput.value++;
  };

  const minusHandler = (e, index) => {
    let productId = e.target.id;
    let productInput = document.querySelectorAll("input")[index];
    console.log(`value ${productInput.value}`);
    if (productInput.value == 0) {
      return;
    } else {
      productInput.value--;
    }
  };

  const addToCartHandler = (e, index, product) => {
    console.log(`add to cart ${product.title}`);
    setCartItems((prevItems) => [...prevItems, product]);
    // console.log(cartItems);
  };

  // console.log(cartItems);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-10">
      {renderedData?.map((d, index) => (
        <div key={d.id} className="break-words flex flex-col justify-between">
          <div className="">
            <img
              src={d.image}
              alt={d.title}
              id={d.id}
              className="h-44 w-full object-contain cursor-pointer"
              onClick={productClickHandler}
            />
          </div>
          <h2 className="font-bold cursor-pointer">{d.title}</h2>
          {/* <p>{d.description}</p> */}
          <div>
            <div className="flex justify-between my-2">
              <div>
                <div className="">{d.rating.rate}/5</div>
                <div>({d.rating.count})</div>
              </div>
              <div className="font-bold text-lg">${d.price}</div>
            </div>
            <div className="flex justify-between items-center w-full mx-auto bottom-0 bg-gray-100 my-2">
              <img
                src={minusIcon}
                alt="minusIcon"
                className="h-1/2 w-4 mx-2 cursor-pointer"
                onClick={(e) => {
                  minusHandler(e, index);
                }}
              />
              <input
                type="number"
                defaultValue="0"
                id={d.id}
                className="bg-gray-100 w-full text-center cursor-pointer"
              />
              <img
                src={plusIcon}
                alt="plusIcon"
                id={d.id}
                className="h-1/2 w-4 mx-2 cursor-pointer"
                onClick={(e) => {
                  plusHandler(e, index);
                }}
              />
            </div>
            <button
              className="flex justify-center bg-orange-400 w-full my-2 py-2 rounded-md gap-2 text-white drop-shadow-sm"
              onClick={(e) => {
                addToCartHandler(e, index, d);
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
        </div>
      ))}
    </div>
  );
};

export default Products;
