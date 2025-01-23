import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShopContext } from '../../context/shopContext';
import women_wear from '../../assets/women_wear.png';
import men_wear from '../../assets/men_wear.png';
import kid_wear from '../../assets/kid_wear.png';
import furniture_banner from '../../assets/furniture_banner.png';
import accessories_banner from '../../assets/accessories_banner.png';

const Collection = () => {
  const { Products } = useContext(ShopContext);

  const { category } = useParams();

  const filterProducts = Products?.filter(
    (product) => product.category.toLowerCase() === category?.toLowerCase()
  );

  const bannerImages = {
    men: men_wear,
    women: women_wear,
    kids: kid_wear,
    accessories: accessories_banner,
    furniture: furniture_banner,
  };

  return (
    <div>
      <div className="banner">
        {bannerImages[category?.toLowerCase()] ? (
          <img src={bannerImages[category?.toLowerCase()]} alt="banner-img" />
        ) : (
          <p>Category Not Found</p>
        )}
      </div>
      {/* Product Grid */}
      <div className="product-grid">
        {filterProducts?.length > 0 ? (
          filterProducts.map((product) => (
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
              <p>${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Collection;
