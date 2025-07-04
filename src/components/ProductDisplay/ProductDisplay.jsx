import React, { useContext } from 'react';
import Products from '../Products/Products';
import './ProductDisplay.css';
import { StoreContext } from '../../context/StoreContext';

const ProductDisplay = ({ category }) => {
  const { productList } = useContext(StoreContext);
  console.log("🔹 Product List:", productList);

  if (!productList || productList.length === 0) {
    return <h2>Loading products...</h2>;
  }

  // Filter products by category upfront
  const filteredProducts = category === "All"
    ? productList
    : productList.filter(item => item.category === category);

  return (
    <div className="Products-display" id="Products-display">
      <h2>{category && category !== "All" ? `Products in ${category}` : 'All Products'}</h2>
      <div className="Products-display-list">
        {filteredProducts.map(item => (
          <Products
            key={item._id}
            id={item._id}      // <-- use _id here
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
            category={item.category}
          />
        ))}

      </div>
    </div>
  );
};

export default ProductDisplay;
