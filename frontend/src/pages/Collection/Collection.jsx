/**import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import women_wear from '../../assets/women_wear.png';
import men_wear from '../../assets/men_wear.png';
import kid_wear from '../../assets/kid_wear.png';
import furniture_banner from '../../assets/furniture_banner.png';
import accessories_banner from '../../assets/accesories_banner.png';

const Collection = () => {
  const { Products } = useContext(ShopContext); // Access products from context
  const { category } = useParams(); // Get category from URL

  // Filter products by category
  const filterProducts = Products?.filter((product) =>
    product.category?.toLowerCase() === category?.toLowerCase()
  ) || [];

  // Banner images mapping
  const bannerImages = {
    men: men_wear,
    women: women_wear,
    kids: kid_wear,
    accessories: accessories_banner,
    furniture: furniture_banner,
  };

  // Select banner image
  const bannerImage = bannerImages[category?.toLowerCase()] || '/default-banner.jpg';

  return (
    <div>
      {/* Banner Section *}
      <div className="banner">
        <img src={bannerImage} alt={`${category || 'Default'} banner`} />
      </div>

      {/* Product Grid *}
      <div className="product-grid">
        {filterProducts.length > 0 ? (
          filterProducts.map((product) => (
            <div className="product-card" key={product._id}>
              <div className="product-image">
                <Link to={`/product/${product._id}`} aria-label={`View details of ${product.name}`}>
                  <img
                    src={product.image?.[0] || '/default-image.jpg'}
                    alt={product.name || 'Product'}
                  />
                </Link>
              </div>
              <h3>{product.name || 'Product Name'}</h3>
              <p>Ksh: {product.price || 'Price Not Available'}</p>
            </div>
          ))
        ) : (
          <p>No products found for the "{category}" category.</p>
        )}
      </div>
    </div>
  );
};

export default Collection;
**/

import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import women_wear from '../../assets/women_wear.png';
import men_wear from '../../assets/men_wear.png';
import kid_wear from '../../assets/kid_wear.png';
import furniture_banner from '../../assets/furniture_banner.png';
import accessories_banner from '../../assets/accesories_banner.png';

const Collection = () => {
  const { products } = useContext(ShopContext); // Access products from context
  const { category } = useParams(); // Get category from URL

  // Filter products by category
  const filterProducts = products?.filter((product) =>
    product.category?.toLowerCase() === category?.toLowerCase()
  ) || [];

  // Banner images mapping
  const bannerImages = {
    men: men_wear,
    women: women_wear,
    kids: kid_wear,
    accessories: accessories_banner,
    furniture: furniture_banner,
  };

  // Select banner image
  const bannerImage = bannerImages[category?.toLowerCase()] || '/default-banner.jpg';

  return (
    <div>
      {/* Banner Section */}
      <div className="banner">
        <img src={bannerImage} alt={`${category || 'Default'} banner`} />
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filterProducts.length > 0 ? (
          filterProducts.map((product) => (
            <div className="product-card" key={product._id}>
              <div className="product-image">
                <Link to={`/product/${product._id}`} aria-label={`View details of ${product.name}`}>
                  <img
                    src={product.image?.[0] || '/default-image.jpg'}
                    alt={product.name || 'Product'}
                  />
                </Link>
              </div>
              <h3>{product.name || 'Product Name'}</h3>
              <p>Ksh: {product.price || 'Price Not Available'}</p>
            </div>
          ))
        ) : (
          <p>No products found for the "{category}" category.</p>
        )}
      </div>
    </div>
  );
};

export default Collection;
