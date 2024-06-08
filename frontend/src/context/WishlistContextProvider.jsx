import React, { createContext, useState } from 'react';

export const WishlistContext = createContext();

export default function WishlistContextProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (product) => {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
    };
  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
        { children }
    </WishlistContext.Provider>
  )
}