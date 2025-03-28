import React, { useContext, useState } from "react";
import { CartContext } from "../components/Context";
import { Trash, PlusCircle, MinusCircle } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  // const [cartItems, setCartItems] = useState(() => {
  //   const storageCartItems = localStorage.getItem("cart");
  //   return storageCartItems ? JSON.parse(storageCartItems) : [];
  // });

  const totalPrice = cartItems.reduce(
    (n, { price, qty }) => n + price * qty,
    0
  );

  const totalQty = cartItems.reduce((n, { qty }) => n + qty, 0);

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
    // If the product is in the cart & qty is greater than 0, then decrement the quantity
    const updatedCartItems = cartItems.map((item, idx) =>
      item.id === c.id && c.qty > 0 ? { ...item, qty: item.qty - 1 } : item
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

  const clearCartHandler = () => {
    setCartItems([]);
  };

  return (
    <div className="font-kumbhSans">
      <div className="flex flex-col justify-between mt-16 px-4 md:px-24">
        <div className="flex justify-between py-3 my-10">
          <div className="cursor-pointer" onClick={clearCartHandler}>
            Clear Cart
          </div>
          <div className="flex md:flex-row flex-col items-end md:gap-5">
            <div className="">Subtotal ({totalQty} items):</div>
            <div className="font-bold">${totalPrice.toFixed(2)}</div>
          </div>
        </div>
        <div className="flex justify-end border-b-2 border-b-gray-300 mb-4">
          <div>Price</div>
        </div>
        <div className="flex flex-col gap-4 md:gap-10">
          {cartItems.map((c) => (
            <div
              key={c.id}
              className="flex justify-between md:gap-10 gap-4 border-b h-32"
            >
              <div className="flex gap-4">
                <div className="flex-none h-50">
                  <Link to={`/ProductPage/${c.id}`}>
                    <img
                      src={c.image}
                      alt={c.image}
                      className="object-contain w-20 max-h-28"
                    />
                  </Link>
                </div>
                <div className="flex flex-col overflow-hidden gap-5">
                  <h2 className="md:text-lg text-sm font-bold">
                    <Link to={`/ProductPage/${c.id}`}>{c.title}</Link>
                  </h2>

                  {/* Quantity and Remove Item Div */}
                  <div className="md:text-lg text-sm flex flex-col gap-5">
                    <div className="flex gap-4">
                      <label htmlFor="qty">Quantity: </label>
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

                    <div className="flex justify-end"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between items-end">
                <div className="font-bold">${c.price.toFixed(2)}</div>
                <div className="">
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
