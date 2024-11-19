import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../components/Context";

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce((n, { price }) => n + price, 0);
  console.log(totalPrice);
  console.log(cartItems);

  const increaseQtyHandler = (c) => {
    console.log("increase");
    // If the product is already in the cart, increment the quantity
    const updatedCartItems = cartItems.map((item, idx) =>
      item.id === c.id ? { ...item, qty: item.qty + 1 } : item
    );

    setCartItems(updatedCartItems);
    console.log("Quantity incremented");
  };

  const decreaseQtyHandler = (c) => {
    console.log("decrease");
    // If the product is already in the cart, increment the quantity
    const updatedCartItems = cartItems.map((item, idx) =>
      item.id === c.id && c.qty > 0 ? { ...item, qty: item.qty - 1 } : item
    );

    setCartItems(updatedCartItems);
    console.log("Quantity incremented");
  };

  const removeHandler = (c) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== c.id);

    console.log(updatedCartItems);
    setCartItems(updatedCartItems);
  };

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
                    {c.qty > 0 ? (
                      <button
                        onClick={() => {
                          decreaseQtyHandler(c);
                        }}
                      >
                        -
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          removeHandler(c);
                        }}
                      >
                        Remove
                      </button>
                    )}

                    <div>{c.qty}</div>
                    <button
                      onClick={() => {
                        increaseQtyHandler(c);
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => {
                        removeHandler(c);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div>${c.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
