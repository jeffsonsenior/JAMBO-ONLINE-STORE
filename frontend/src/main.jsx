import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Import global styles
import App from './App.jsx'; // Main App component
import { BrowserRouter } from 'react-router-dom'; // Routing support
import ShopContextProvider from './Context/ShopContext.jsx'; // Context for global state

// Get the root element from the HTML file
const rootElement = document.getElementById('root');

// Ensure the root element exists before rendering
if (!rootElement) {
  throw new Error("Root element not found. Check your HTML file for an element with id='root'.");
}

// Create the root and render the application
createRoot(rootElement).render(
  <React.StrictMode>
    <ShopContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShopContextProvider>
  </React.StrictMode>
);
