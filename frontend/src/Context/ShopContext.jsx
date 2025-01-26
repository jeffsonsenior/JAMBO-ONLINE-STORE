import React, { createContext, useState } from "react";
import { Products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(Products); // Initialize products from assets
  const [searchTerm, setSearchTerm] = useState(""); // For searching/filtering products

  const currency = "Ksh"; // Default currency

  // Function to update the search term
  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  // Context value to provide to children components
  const value = {
    products, // List of products
    currency, // Currency symbol
    searchTerm, // Current search term
    updateSearchTerm, // Function to update the search term
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;