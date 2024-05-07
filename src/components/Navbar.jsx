import React, { useState } from "react";
import menuIcon from "../assets/ecommerce-product-page-main/images/icon-menu.svg";
import cartIcon from "../assets/ecommerce-product-page-main/images/icon-cart.svg";
import acctImage from "../assets/ecommerce-product-page-main/images/image-avatar.png";
import { Link } from "react-router-dom";

const Navbar = ({ setRenderedData, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuHandler = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const categoryHandler = (event) => {
    console.log(event.target.id);
    const selectedCategory = event.target.id;

    const category = data.filter((d) => {
      return d.category === selectedCategory;
    });

    setRenderedData(category);
    console.log(category);
  };

  const mobileCategoryHandler = (event) => {
    setIsOpen(!isOpen);
    console.log(event.target.id);
    const selectedCategory = event.target.id;

    const category = data.filter((d) => {
      return d.category === selectedCategory;
    });

    setRenderedData(category);
    console.log(category);
  };

  return (
    <nav className="bg-white">
      {/* Mobile Navbar */}
      <div className="md:hidden py-4 fixed bg-white w-full top-0 left-0 right-0 px-5 flex justify-between">
        <div className="flex items-center gap-2">
          <button>
            <img src={menuIcon} alt="menuButton" onClick={menuHandler} />
          </button>
          <h1 className="text-xl font-bold">
            <a href="/">JPs Store</a>
          </h1>
        </div>{" "}
        <div className="flex items-center gap-5">
          {/* cart button */}
          <Link to="/Cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-darkGrayishBlue"
              width="22"
              height="20"
            >
              <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
            </svg>
          </Link>
          {/* account profile */}
          <button>
            <img src={acctImage} alt="acctImage" width={25} />
          </button>
        </div>
      </div>

      <ul
        className={`flex flex-col justify-evenly top-14 fixed bg-slate-200 left-0 right-0 pl-5 overflow-hidden transition-all ease-in duration-200 ${
          isOpen ? "h-1/5" : "h-0"
        }`}
      >
        <li>
          <a onClick={mobileCategoryHandler} id="men's clothing">
            Men
          </a>
        </li>
        <li>
          <a onClick={mobileCategoryHandler} id="women's clothing">
            Women
          </a>
        </li>
        <li>
          <a onClick={mobileCategoryHandler} id="jewelery">
            Jewelry
          </a>
        </li>
        <li>
          <a onClick={mobileCategoryHandler} id="electronics">
            Electronics
          </a>
        </li>
      </ul>

      {/* Desktop Navbar */}
      <div className="md:flex justify-between hidden fixed bg-white top-0 left-0 right-0 px-5 py-4 z-50">
        <div className="flex items-end gap-5 text-darkGrayishBlue">
          <h1 className="text-3xl font-bold mr-6 text-black cursor-pointer">
            <Link to="/">JPs Store</Link>
          </h1>
          <ul className="flex gap-5">
            <li
              className="cursor-pointer"
              onClick={categoryHandler}
              id="men's clothing"
            >
              Men
            </li>
            <li
              className="cursor-pointer"
              onClick={categoryHandler}
              id="women's clothing"
            >
              Women
            </li>
            <li
              className="cursor-pointer"
              onClick={categoryHandler}
              id="jewelery"
            >
              Jewelry
            </li>
            <li
              className="cursor-pointer"
              onClick={categoryHandler}
              id="electronics"
            >
              Electronics
            </li>
            <li
              className="cursor-pointer mx-5 text-veryDarkBlue"
              onClick={() => {
                setRenderedData(data);
              }}
            >
              Reset Filters
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          {/* Cart Button */}
          <Link to="/CartPage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              className="fill-darkGrayishBlue"
            >
              <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
            </svg>
          </Link>
          <button>
            <img src={acctImage} alt="acctImage" width={40} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
