import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext'; // Import ShopContext to access product data
import { Link } from 'react-router-dom'; // Import Link for navigation to product details page

const HomeCollection = () => {
  // Extract 'products' from ShopContext to access the list of products
  const { products } = useContext(ShopContext);
  
  // State to store the filtered products for display on the home page
  const [homeProduct, setHomeProduct] = useState([]);

  // useEffect hook to update the 'homeProduct' state whenever 'products' changes
  useEffect(() => {
    // Slice the first 8 products from the 'products' array to display on the home page
    const filteredProducts = products?.slice(0, 8) || [];
    setHomeProduct(filteredProducts); // Update the state with the first 8 products
  }, [products]); // Dependency array to trigger the effect when 'products' changes

  return (
    <div>
      <div className="product-container">
        {/* Header section */}
        <div className="list_header">
          <h1>Home Collection</h1> {/* Title for the home collection */}
          <hr className="divider" /> {/* Divider line under the title */}
        </div>

        {/* Grid layout to display the products */}
        <div className="product-grid">
          {/* Conditional rendering: Check if there are any products to display */}
          {homeProduct.length > 0 ? (
            // Map through 'homeProduct' array to render each product
            homeProduct.map((product) => (
              <div className="product-card" key={product._id}>
                <div className="product-image">
                  {/* Link to the product detail page */}
                  <Link to={`/product/${product._id}`}>
                    {/* Display the product image or a fallback image if none is available */}
                    <img 
                      src={product.image && product.image[0] ? product.image[0] : '/default-image.jpg'} 
                      alt={product.name || 'Product'} // Use product name for alt text or 'Product' as fallback
                    />
                  </Link>
                </div>
                {/* Display the product name */}
                <h3>{product.name}</h3>
                {/* Display the product price */}
                <p>${product.price}</p>
              </div>
            ))
          ) : (
            // Display message if no products are found
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeCollection;
