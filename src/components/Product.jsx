import React from "react";
import minusIcon from "../assets/ecommerce-product-page-main/images/icon-minus.svg";
import plusIcon from "../assets/ecommerce-product-page-main/images/icon-plus.svg";
import cartIcon from "../assets/ecommerce-product-page-main/images/icon-cart.svg";

const Product = ({ renderedData, setSelectedProduct }) => {
  const clickHandler = (e) => {
    console.log(e);
    const item = e.target.id;
    console.log(item);
    const dataItem = renderedData.filter((d) => {
      return d.id == item;
    });
    console.log(dataItem);
    setSelectedProduct(dataItem);
  };

  const plusHandler = (e) => {
    let productId = e.target.id;
    let productInput = document.getElementById(`input${productId}`);
    console.log(productInput);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {renderedData?.map((d) => (
        <div key={d.id} className="break-words flex flex-col justify-between">
          <div className="">
            <img
              src={d.image}
              alt={d.title}
              id={d.id}
              className="h-44 w-full object-contain"
              onClick={clickHandler}
            />
          </div>
          <h2 className="font-bold">{d.title}</h2>
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
              <img src={minusIcon} alt="minusIcon" className="h-1/2 w-4 mx-2" />
              <input
                type="number"
                placeholder="0"
                value="0"
                id={`input${d.id}`}
                className="bg-gray-100 w-full text-center"
              />
              <img
                src={plusIcon}
                alt="plusIcon"
                id={d.id}
                className="h-1/2 w-4 mx-2"
                onClick={plusHandler}
              />
            </div>
            <button className="flex justify-center bg-orange-400 w-full my-2 py-2 rounded-md gap-2 text-white drop-shadow-sm">
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

export default Product;
