import { createContext, useState, useEffect } from "react";
import { Products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {

  const [products, setProducts] = useState(Products);
  const [searchTerm, setSearchTerm] = useState('');


  const currency = "Ksh";

  
  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  const value = {
    products,
    currency,
    searchTerm,
    updateSearchTerm,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;