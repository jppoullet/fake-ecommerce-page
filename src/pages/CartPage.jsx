import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../components/Context";
import { Trash, PlusCircle, MinusCircle } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (n, { price, qty }) => n + price * qty,
    0,
  );

  const totalQty = cartItems.reduce((n, { qty }) => n + qty, 0);

  console.log(totalPrice);
  console.log(cartItems);

  const increaseQtyHandler = (c) => {
    console.log("increase");
    // If the product is already in the cart, increment the quantity
    const updatedCartItems = cartItems.map((item, idx) =>
      item.id === c.id ? { ...item, qty: item.qty + 1 } : item,
    );

    setCartItems(updatedCartItems);
    console.log("Quantity incremented");
  };

  const decreaseQtyHandler = (c) => {
    console.log("decrease");
    // If the product is in the cart & qty is greater than 0, then decrement the quantity
    const updatedCartItems = cartItems.map((item, idx) =>
      item.id === c.id && c.qty > 0 ? { ...item, qty: item.qty - 1 } : item,
    );

    setCartItems(updatedCartItems);
    console.log("Quantity incremented");
  };

  const removeHandler = (c) => {
    // Iterate thru cartItems array, if current item id does not match passed item id, then keep
    // Removing current item from cartItems array
    const updatedCartItems = cartItems.filter((item) => item.id !== c.id);

    console.log(updatedCartItems);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="font-kumbhSans">
      <Navbar />
      <div className="mt-16 flex flex-col justify-between px-4 md:px-24">
        <div className="my-10 flex justify-center gap-5 py-3">
          <div className="">Subtotal ({totalQty} items):</div>
          <div className="font-bold">${totalPrice.toFixed(2)}</div>
        </div>
        <div className="mb-4 flex justify-end border-b-2 border-b-gray-300">
          <div>Price</div>
        </div>
        <div className="flex flex-col md:gap-10">
          {cartItems.map((c) => (
            <div
              key={c.id}
              className="my-4 flex h-32 justify-between gap-4 border-b md:gap-10"
            >
              <div className="flex gap-4">
                <div className="w-16 flex-none md:w-20">
                  <Link to={`/ProductPage/${c.id}`}>
                    <img
                      src={c.image}
                      alt={c.image}
                      className="object-contain"
                    />
                  </Link>
                </div>
                <div className="flex flex-col gap-5 overflow-hidden">
                  <h2 className="line-clamp-2 text-sm font-bold md:text-lg">
                    <Link to={`/ProductPage/${c.id}`}>{c.title}</Link>
                  </h2>

                  {/* Quantity and Remove Item Div */}
                  <div className="flex flex-col gap-5 text-sm text-gray-700 md:text-lg">
                    <div className="flex gap-4">
                      <div>Quantity: </div>
                      <div className="flex gap-4">
                        {c.qty > 1 ? (
                          <button
                            onClick={() => {
                              decreaseQtyHandler(c);
                            }}
                          >
                            <MinusCircle />
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              removeHandler(c);
                            }}
                          >
                            <Trash />
                          </button>
                        )}

                        <div className="w-2">{c.qty}</div>
                        <button
                          onClick={() => {
                            increaseQtyHandler(c);
                          }}
                        >
                          <PlusCircle />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <div className="text-sm font-bold md:text-lg">
                  ${c.price.toFixed(2)}
                </div>
                <div className="text-sm md:text-lg">
                  <button
                    onClick={() => {
                      removeHandler(c);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
