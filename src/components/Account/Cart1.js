import React, { useContext } from "react";
import Cart from "../../context/Cart";

const Cart1 = () => {
  const { items } = useContext(Cart);
  return (
    <div>
      <div className="h-[15rem] border-2 m-3">
      cart
        <div>items: {items.name}</div>
        <div>Rate: {items.rate}</div>
        {/* <div>Image: <img src={items.image} alt={items.items} /></div> */}
        <div>Quantity: {items.liter_kg}</div>
      </div>
    </div>
  );
};

export default Cart1;
