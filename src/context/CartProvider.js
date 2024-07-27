import React, { useState } from "react";
import Cart from "./Cart";

const CartProvider = ({children})=>{
    const [items, setItems] = useState({})

    return(
        <Cart.Provider value={{items, setItems}}>
            {children}
        </Cart.Provider>
    )
}

export default CartProvider;