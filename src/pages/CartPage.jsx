import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../components/Context";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  // const [totalPrice, setTotalPrice] = useState(0);

  const totalPrice = cartItems.reduce((n, { price }) => n + price, 0);
  console.log(totalPrice);

  return (
    <div className="font-kumbhSans">
      <Navbar />
      <h1 className="text-3xl my-20">cart page</h1>
      <div className="flex justify-between">
        <div className="flex flex-col gap-5">
          {cartItems.map((c) => (
            <div
              key={c.id}
              className="flex justify-between items-center gap-10"
            >
              <div className="flex items-center gap-4">
                <img src={c.image} alt={c.image} className="w-20 max-h-28" />
                <h2>{c.title}</h2>
              </div>
              <div>${c.price}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-5 border border-red-400 p-10">
          <div>Total Price</div>
          <div>${totalPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
