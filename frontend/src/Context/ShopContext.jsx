import { createContext, useState } from "react";
import { Products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(Products || []);
  const currency = "Ksh";

  const value = {
    products,
    currency,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
/**
import React, { createContext, useState } from "react"; // Import necessary React functions
import { Products } from "../assets/assets"; // Import product data

// Create a context to share data across components
export const ShopContext = createContext();

// Context provider component
const ShopContextProvider = ({ children }) => {
  // State to manage the list of products
  const [products, setProducts] = useState(Products || []); // Default to empty array if Products is undefined

  // Define the currency to be used in the shop
  const currency = "Ksh"; // Kenyan Shilling

  // Values to share with other components
  const value = {
    products, // List of products
    currency, // Currency used in the shop
  };

  // Provide the context to child components
  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
**/
