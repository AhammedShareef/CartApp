import React, { useEffect, useState, useContext } from "react";
import { cartContext } from "../App";
import "../Styles/Cart.css";

const CartModal = () => {
  const { cartItems, setCartItems, showModal, setShowModal } =
    useContext(cartContext);
  const [price, setPrice] = useState(0);

  const initialCartItems = cartItems.map((item) => ({ ...item, count: 1 }));
  const [updatedCartItems, setUpdatedCartItems] = useState(initialCartItems);

  const handleRemove = (id) => {
    const remove = updatedCartItems.filter((item) => item.id !== id);
    setUpdatedCartItems(remove);
    handlePrice();
  };

  const handleChange = (item, count) => {
    const updatedItems = updatedCartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        const newCount = cartItem.count + count;
        return { ...cartItem, count: newCount >= 0 ? newCount : 0 };
      }
      return cartItem;
    });
    setUpdatedCartItems(updatedItems);
    handlePrice();
  };

  const handlePrice = () => {
    let amount = 0;
    updatedCartItems.forEach((item) => {
      amount = amount + item.price * item.count;
    });
    setPrice(amount);
  };

  useEffect(() => {
    setCartItems(updatedCartItems);
    handlePrice();
  }, [updatedCartItems, setCartItems]);

  return (
    <article>
      {updatedCartItems.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.images[1]} alt="" />
            <p>{item.title}</p>
          </div>

          <div>
            <button onClick={() => handleChange(item, -1)}>-</button>
            <span>{item.count}</span>
            <button onClick={() => handleChange(item, 1)}>+</button>
          </div>
          <div>
            <span>{item.price * item.count}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>
    </article>
  );
};

export default CartModal;
