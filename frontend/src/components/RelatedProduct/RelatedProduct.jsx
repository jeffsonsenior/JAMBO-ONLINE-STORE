import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'; // Adjust this path if needed
import { ShopContext } from '../../Context/ShopContext'; // Adjust this path if needed

const RelatedProduct = ({category}) => {
  const { products } = useContext(ShopContext); // Assuming ShopContext is providing products

  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    const related = products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
    setRelatedProduct(related.slice(0, 4)); // Limit to first 4 related products
  }, [products, category]); // Adding category and products as dependencies to ensure re-rendering when they change

  return (
    <div>
      <div className="product-container">
        <div className="list_header">
          <h1>Related Products</h1>
          <hr className="divider" />
        </div>
        <div className="product-grid">
          {relatedProduct.length > 0 ? (
            relatedProduct.map((product) => (
              <div className="product-card" key={product._id}>
                <div className="product-image">
                  <Link to={`/product/${product._id}`}>
                    <img
                      src={product.image?.[0] || '/default-image.jpg'}
                      alt={product.name || 'Product'}
                    />
                  </Link>
                </div>
                <h3>{product.name}</h3>
                <p>ksh: {product.price}</p>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
