import React, { useContext } from "react";
import Cart from "../../context/Cart";

const Cart1 = () => {
  const { items } = useContext(Cart);
  let rate = items.rate;
  let quontity = items.liter_kg;
  let total = rate*quontity;

  if (!items.name ||items.liter_kg===0) return <div className="bg-yellow-300 h-[5rem] border-2 m-3 text-center text-4xl">no items in cart</div>
  return (
    <div>
      <div className="h-[17rem] border-2 m-3">
        <div className="border-2 bg-slate-200 h-[13rem] w-[20rem] m-3 rounded-2xl p-2">
          <div>
            {" "}
            <b>{items.name}</b>
          </div>
          <div className=" items-center w-full m-2">
            {" "}
            <img
              src={items.image}
              className="h-[10rem] w-[12rem] ml-[6rem] rounded-3xl absolute border-2 "
              alt={items.items}
            />
          </div>
          <div>Rate: {items.rate}</div>
         
          <div>Quantity: {items.liter_kg}</div>
          <div>Price: {total}</div>
        </div>
      <button className="bg-green-400 h-[2rem] w-[8rem] items-center ml-[2rem]">Order Now</button>
      </div>
    </div>
  );
};

export default Cart1;
