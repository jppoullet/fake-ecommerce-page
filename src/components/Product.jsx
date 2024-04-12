import React from "react";
import minusIcon from "../assets/ecommerce-product-page-main/images/icon-minus.svg";
import plusIcon from "../assets/ecommerce-product-page-main/images/icon-plus.svg";

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
    <div className="grid grid-cols-2 gap-6">
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
          <h2>{d.title}</h2>
          {/* <p>{d.description}</p> */}
          <div>
            <div className="flex justify-between">
              <div>{d.price}</div>
              <div>
                <div>{d.rating.rate}/5</div>
                <div>({d.rating.count})</div>
              </div>
            </div>
            <div className="flex justify-between items-center w-full bottom-0">
              <img src={minusIcon} alt="minusIcon" className="h-full w-8" />
              <input type="number" className="bg-red-500 w-full" />
              <img src={plusIcon} alt="plusIcon" className="h-full w-8" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
