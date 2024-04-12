import React, { useState } from "react";
import menuIcon from "../assets/ecommerce-product-page-main/images/icon-menu.svg";
import cartIcon from "../assets/ecommerce-product-page-main/images/icon-cart.svg";
import acctImage from "../assets/ecommerce-product-page-main/images/image-avatar.png";

const Navbar = ({ setRenderedData, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuHandler = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const categoryHandler = (event) => {
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
          <h1 className="text-xl font-bold">JPs Store</h1>
        </div>{" "}
        <div className="flex items-center gap-5">
          <button>
            <img src={cartIcon} alt="cartIcon" />
          </button>
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
          <a onClick={categoryHandler} id="men's clothing">
            Men
          </a>
        </li>
        <li>
          <a onClick={categoryHandler} id="women's clothing">
            Women
          </a>
        </li>
        <li>
          <a onClick={categoryHandler} id="jewelery">
            Jewelry
          </a>
        </li>
        <li>
          <a onClick={categoryHandler} id="electronics">
            Electronics
          </a>
        </li>
      </ul>

      {/* Desktop Navbar */}
      <div className="md:flex hidden fixed py-4 flex justify-between">
        <div className="flex items-end gap-5 text-darkGrayishBlue">
          <h1 className="text-3xl font-bold mr-6 text-black">JPs Store</h1>
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">Jewelry</a>
          <a href="">Electronics</a>
        </div>
        <div className="flex items-center gap-5">
          <button>
            <img src={cartIcon} alt="cartIcon" />
          </button>
          <button>
            <img src={acctImage} alt="acctImage" width={40} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
