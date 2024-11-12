import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../components/Context";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  const [quan, setQuan] = useState();
  // const [totalPrice, setTotalPrice] = useState(0);

  const totalPrice = cartItems.reduce((n, { price }) => n + price, 0);
  console.log(totalPrice);
  console.log(cartItems);

  // const quantity = cartItems.reduce((acc, currentValue) => {
  //   acc[currentValue] = (acc[currentValue] || 0) + 1;
  //   return acc;
  // }, {});

  // console.log(quantity);

  return (
    <div className="font-kumbhSans">
      <Navbar />
      <div className="flex flex-col justify-between mt-16">
        <div className="flex justify-center gap-5 py-3 my-10">
          <div className="font-bold">Subtotal:</div>
          <div>${totalPrice.toFixed(2)}</div>
        </div>
        <div className="flex flex-col gap-5">
          {cartItems.map((c) => (
            <div
              key={c.id}
              className="flex justify-between items-center gap-10"
            >
              <div className="flex items-center gap-4">
                <div>
                  <img
                    src={c.image}
                    alt={c.image}
                    className="md:w-20 md:max-h-28 w-14 max-h-16"
                  />
                  <h2 className="md:text-lg text-sm">{c.title}</h2>

                  <div className="md:text-lg text-sm flex items-center gap-5">
                    <label htmlFor="qty">Quantity:</label>
                    <button
                      onClick={() => {
                        c.qty = c.qty - 1;
                        console.log(c.qty);
                      }}
                    >
                      -
                    </button>
                    <input
                      className=" w-8 text-center"
                      type="number"
                      id="qty"
                      value={c.qty}
                      // onChange={(e) =>
                      //   setC({ ...c, qty: Number(e.target.value) })
                      // }
                    ></input>
                    <button
                      onClick={() => {
                        setQuan(c.qty + 1);
                        console.log(quan);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div>${c.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
