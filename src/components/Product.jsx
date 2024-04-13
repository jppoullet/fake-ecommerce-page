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

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {renderedData?.map((d) => (
        <div
          key={d.id}
          className="border-2 border-black break-words flex flex-col justify-between"
        >
          <div className="">
            <img
              src={d.image}
              alt={d.title}
              id={d.id}
              className="h-44 w-full object-contain"
              onClick={clickHandler}
            />
          </div>
          <h2 className="font-bold text-lg">{d.title}</h2>
          {/* <p>{d.description}</p> */}
          <div>
            <div className="flex justify-between my-2">
              <div className="font-bold text-xl">${d.price}</div>
              <div>
                <div className="">{d.rating.rate}/5</div>
                <div>({d.rating.count})</div>
              </div>
            </div>
            <div className="flex justify-between items-center w-full mx-auto bottom-0 bg-gray-100 my-2">
              <img src={minusIcon} alt="minusIcon" className="h-1/2 w-4 mx-2" />
              <input type="number" className="bg-gray-100 w-full" />
              <img src={plusIcon} alt="plusIcon" className="h-1/2 w-4 mx-2" />
            </div>
            <button className="flex justify-center bg-orange-400 w-full my-2 py-2 rounded-md gap-2 text-white drop-shadow-sm">
              <img src={cartIcon} alt="cartIcon" />
              <p className="drop-shadow-md">Add to Cart</p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
