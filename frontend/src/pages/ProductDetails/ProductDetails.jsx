import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { products, currency } = useContext(ShopContext); // Get the products and currency from context
  const { productId } = useParams(); // Get the productId from the route params

  const [productData, setProductData] = useState(null); // State for product data
  const [image, setImage] = useState(''); // State for the selected image
  const [size, setSize] = useState(''); // State for the selected size

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]); // Access the first image
    }
  };

  useEffect(() => {
    if (products && products.length > 0) {
      fetchProductData();
    }
  }, [productId, products]);

  if (!productData) {
    return <div>No products match the provided product ID</div>;
  }

  return (
    <div className="product-container">
      <div className="product-content">
        <div className="product-images">
          <div className="thumbnail-container">
            {productData.image &&
              productData.image.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt={`${productData.name} thumbnail ${index + 1}`}
                  onClick={() => setImage(item)}
                  className="thumbnail"
                />
              ))}
          </div>
          <div className="main-image-container">
            <img src={image} alt={productData.name} className="main-image" />
          </div>
        </div>
        <div className="product-info">
          <h1 className="product-name">{productData.name}</h1>
          <hr className="product-divider" />
          <p className="product-price">
            {currency}
            {productData.price}
          </p>
          <p className="product-description">{productData.description}</p>
          <div className="size-selector">
            <p>Size Selection</p>
            <div className="size-buttons">
              {productData.sizes &&
                productData.sizes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(item)}
                    className={`size-button ${item === size ? 'active-size' : ''}`}
                  >
                    {item}
                  </button>
                ))}
            </div>
          </div>
          <hr className="product-divider" />
          <div className="product-policy">
            <h4>Free Delivery</h4>
            <h4>Secure Payment</h4>
            <h4>Other Payment Options</h4>
          </div>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
      <div className="description-review-select">
        <div className="tabs">
          <b className="tab active-tab">Description</b>
          <b className="tab">Reviews</b>
        </div>
        <div className="description-contents">
          <p>{productData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
