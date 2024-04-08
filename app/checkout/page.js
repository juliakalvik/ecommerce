"use client";

import React from "react";
import useCart from "../(store)/store";

const CheckoutPage = () => {
  const cartItems = useCart((state) => state.cartItems);
  const totalPrice = cartItems
    ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    : 0;

  const handlePlaceOrder = (event) => {
    alert("Thank you for your purchase!");
    emptyCart(); 
    
   
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        {cartItems &&
          cartItems.map((item) => (
            <div key={item.id}>
              <p>
                {item.title} - Quantity: {item.quantity} - Price:{" "}
                {item.price * item.quantity} kr
              </p>
            </div>
          ))}

        <p>Total Price: {totalPrice} kr</p>
      </div>
      <form onSubmit={handlePlaceOrder}>
   
        <input type="text" placeholder="Card Number" />
        <input type="text" placeholder="Expiration Date" />
        <input type="text" placeholder="CVV" />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
