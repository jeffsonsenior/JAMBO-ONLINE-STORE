/**import React from 'react'
import { use } from 'react'
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom'


const BestSeller = () => {
    const {products} = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])
    
    useEffect(() => {
      const BestProduct = products.filter((item) => (item.bestseller));
      setBestSeller(BestProduct.slice(0, 4))

    },[products])



  return (
    <div>
      <div className="product-container">
        <div className="list_header">
          <h1>Best Collection</h1>
          <hr className='divider'/>
        </div>
        <div className='product-grid'>
          {bestSeller.length > 0 ? (
            bestSeller.map((product) => (
              <div className='product-card' key={product._id}>
                <div className='product-image'>
                  <Link to={`/product/${product._id}`}>
                  <img src={product.image[0]} alt="" />
                  </Link>                  
                </div>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            ))
          ) : (
            <p>No product found</p>
          )}
      </div>
    </div>
  </div>
  )
}
export default BestSeller
**/
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    // Filter products for bestsellers and limit to 4 items
    const BestProduct = products?.filter((item) => item.bestseller);
    setBestSeller(BestProduct?.slice(0, 4) || []);
  }, [products]);

  return (
    <div>
      <div className="product-container">
        <div className="list_header">
          <h1>Best Collection</h1>
          <hr className="divider" />
        </div>
        <div className="product-grid">
          {bestSeller.length > 0 ? (
            bestSeller.map((product) => (
              <div className="product-card" key={product._id}>
                <div className="product-image">
                  <Link to={`/product/${product._id}`}>
                    <img src={product.image?.[0] || '/default-image.jpg'} alt={product.name || 'Product'} />
                  </Link>
                </div>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
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

export default BestSeller;
