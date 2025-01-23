import { createContext, useState, useEffect } from "react";
import { Products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(Products || []); // Fallback to an empty array if Products is undefined
  const [currency, setCurrency] = useState("ksh"); // Allow dynamic currency updates

  const value = {
    products,
    currency,
    setProducts, // Expose setter for products
    setCurrency, // Expose setter for currency if needed
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
