import React, { useContext, useState } from "react";
import menuIcon from "../assets/ecommerce-product-page-main/images/icon-menu.svg";
import cartIcon from "../assets/ecommerce-product-page-main/images/icon-cart.svg";
import acctImage from "../assets/ecommerce-product-page-main/images/image-avatar.png";
import { Link } from "react-router-dom";
import { CartContext } from "./Context";

const Navbar = ({ setRenderedData, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, setCartItems } = useContext(CartContext);

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
      <div className="md:hidden py-4 fixed bg-white w-full top-0 left-0 right-0 px-5 flex justify-between items-center z-50">
        <div className="flex items-center gap-2">
          <button>
            <img src={menuIcon} alt="menuButton" onClick={menuHandler} />
          </button>
          <h1 className="text-xl font-bold">
            <a href="/">JPs Store</a>
          </h1>
        </div>

        <div className="flex items-center gap-5">
          {/* cart button */}
          <Link to="/CartPage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-darkGrayishBlue"
              width="22"
              height="20"
            >
              <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
            </svg>
            <div className="fixed flex justify-center items-center top-7 right-[75px] bg-orange-400 rounded-full text-base w-2 h-2 p-3">
              {cartItems.length}
            </div>
          </Link>
          {/* account profile */}
          <button>
            <img src={acctImage} alt="acctImage" width={25} />
          </button>
        </div>
      </div>

      <ul
        className={`flex flex-col justify-evenly top-14 fixed z-50 bg-white left-0 right-0 pl-5 overflow-hidden transition-all ease-in duration-200 ${
          isOpen ? "h-1/3" : "h-0"
        }`}
      >
        <li
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Link to="/Men">Men's</Link>
        </li>
        <li
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Link to="/Women">Women</Link>
        </li>
        <li
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Link to="/Jewelry">Jewelry</Link>
        </li>
        <li
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Link to="/Electronics">Electronics</Link>
        </li>
      </ul>

      {/* Desktop Navbar */}
      <div className="md:flex justify-between hidden fixed bg-white top-0 left-0 right-0 px-5 py-4 z-50">
        <div className="flex items-end gap-5 text-darkGrayishBlue">
          <h1 className="text-3xl font-bold mr-6 text-black cursor-pointer">
            <Link to="/">JPs Store</Link>
          </h1>
          <ul className="flex gap-5">
            <li className="cursor-pointer" id="men's clothing">
              <Link to="/Men">Men</Link>
            </li>
            <li className="cursor-pointer" id="women's clothing">
              <Link to="/Women">Women</Link>
            </li>
            <li className="cursor-pointer" id="jewelery">
              <Link to="/Jewelry">Jewelry</Link>
            </li>
            <li className="cursor-pointer" id="electronics">
              <Link to="/Electronics">Electronics</Link>
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
            <div className="fixed flex justify-center items-center top-10 right-[90px] bg-orange-400 rounded-full w-2 h-2 p-3">
              {cartItems.length}
            </div>
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
