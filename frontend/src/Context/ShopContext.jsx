import React, { createContext, useState } from "react";
import { Products } from "../assets/assets";
import { toast } from "react-toastify"; // Ensure proper casing for `toast`

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(Products); // Initialize products
  const [searchTerm, setSearchTerm] = useState(""); // Search term for filtering
  const [cartItems, setCartItems] = useState({}); // Cart state

  const currency = "Ksh"; // Default currency

  // Function to add items to the cart
  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }

    const updatedCart = { ...cartItems };
    if (!updatedCart[itemId]) {
      updatedCart[itemId] = { [size]: 1 };
    } else {
      updatedCart[itemId][size] = (updatedCart[itemId][size] || 0) + 1;
    }

    setCartItems(updatedCart);
    toast.success("Item added to cart!");
  };

  // Function to update item quantity
  const updateQuantity = (itemId, size, quantity) => {
    const updatedCart = { ...cartItems };

    if (updatedCart[itemId]) {
      updatedCart[itemId][size] = quantity;

      // Remove size entry if quantity is 0
      if (quantity === 0) {
        delete updatedCart[itemId][size];
      }

      // Remove item entry if no sizes remain
      if (Object.keys(updatedCart[itemId]).length === 0) {
        delete updatedCart[itemId];
      }
    }

    setCartItems(updatedCart);
  };
  //console.log(`product aded to cart: ItemId - ${itemId}, size - ${size}`)
  //toast.success(`product added to`)

  // Function to get the total cart count
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const size in cartItems[items]) {
        totalCount += cartItems[items][size];
      }
    }
    return totalCount;
  };

  // Function to calculate the total cart amount
  const getCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      const itemInfo = products.find((product) => product._id === itemId);

      if (itemInfo) {
        for (const size in cartItems[itemId]) {
          totalAmount += itemInfo.price * cartItems[itemId][size];
        }
      }
    }

    return totalAmount;
  };

  // Function to update the search term
  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  // Context value to provide to children components
  const value = {
    products,
    currency,
    searchTerm,
    cartItems,
    addToCart,
    updateQuantity,
    getCartCount,
    getCartAmount,
    updateSearchTerm,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
