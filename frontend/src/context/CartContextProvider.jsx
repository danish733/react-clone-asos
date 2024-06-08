import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
      setCart((prevCart) => [...prevCart, product]);
    };
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
        { children }
    </CartContext.Provider>
  )
}
