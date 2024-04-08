"use client";

import React from "react";
import ReactDom from "react-dom";
import useCart from "./(store)/store";

export function Modal() {
  const closeModal = useCart((state) => state.setOpenModal);
  const cartItems = useCart((state) => state.cart);

  const totalPrice = cartItems.reduce((total, currentItem) => {
    return total + currentItem.price;
  }, 0);

  return ReactDom.createPortal(
    <div className="fixed top-0 left-0 w-screen z-50">
      <div onClick={closeModal} className="bg-transparent absolute inset-0"></div>
      <div className="flex flex-col bg-white absolute right-0 top-0 h-screen shadow-lg w-screen sm:w-96 max-w-screen gap-4">
        <div className="flex items-center justify-between text-xl p-6 relative">
          <h1>Cart</h1>
          <i onClick={closeModal} className="fa-solid fa-xmark"></i>
          <div className="aboslute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-slate-300 w-2/3"></div>
        </div>
        <div className="p-4 overflow-scroll flex-1 flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <p>The cart is empty</p>
          ) : (
            <>
              {cartItems.map((cartItem, itemIndex) => {
                return (
                  <div key={itemIndex} className="flex border-l border-solid border-slate-700 px-2 flex-col gap-2">
                    <div className="flex itmes-center justify-between">
                      <h2>{cartItem.title}</h2>
                      <p>{cartItem.price} kr</p>
                    </div>
                    <p className="text-slate-600 text-sm">Quantity: 1</p>
                  </div>
                ) 
              })}
              <div className="flex items-center justify-between border-t border-solid border-slate-700 pt-2">
                <h2>Total:</h2>
                <p>{totalPrice} kr</p>
              </div>
            </>
          )}
        </div>
        <div className="border border-solid border-slate-700 text-xl m-4 p-6 uppercase grid place-itmes-center hover:opacity-60 cursor-pointer justify-center">Checkout</div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
