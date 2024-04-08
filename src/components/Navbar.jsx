import React from "react";
import menuIcon from "../assets/ecommerce-product-page-main/images/icon-menu.svg";
import cartIcon from "../assets/ecommerce-product-page-main/images/icon-cart.svg";
import acctImage from "../assets/ecommerce-product-page-main/images/image-avatar.png";

const Navbar = () => {
  return (
    <nav className="bg-white">
      {/* Mobile Navbar */}
      <div className="md:hidden py-4 flex justify-between">
        <div className="flex items-center gap-2">
          <button>
            <img src={menuIcon} alt="menuButton" />
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

      {/* Desktop Navbar */}
      <div className="md:flex hidden py-4 flex justify-between">
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
