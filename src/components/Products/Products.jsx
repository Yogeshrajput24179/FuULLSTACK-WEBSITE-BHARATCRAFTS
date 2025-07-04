import React, { useContext } from 'react';
import './Products.css';
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext';

export const Products = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart, url, token } = useContext(StoreContext);
    const quantity = cartItems[id]?.quantity || 0; // Track quantity properly

    return (
        <div className='Products-item'>
            <div className="Products-item-image-container">
                <img
                    src={`${url}/uploads/${image}`}
                    alt={name}
                    className="Products-item-image"
                    onError={e => { e.target.onerror = null; e.target.src = assets?.placeholder_image; }}
                />

                {token ? (
                    <div>
                        {quantity === 0 ? (
                            <img
                                className='add'
                                onClick={() => addToCart(id)}
                                src={assets?.add_icon_white || ""}
                                alt="Add to cart"
                            />
                        ) : (
                            <div className="Products-item-counter">
                                <img
                                    onClick={() => removeFromCart(id)}
                                    src={assets?.remove_icon_red || ""}
                                    alt="Remove"
                                />
                                <p>{quantity}</p>
                                <img
                                    onClick={() => addToCart(id)}
                                    src={assets?.add_icon_green || ""}
                                    alt="Add"
                                />
                            </div>
                        )}
                    </div>
                ) : (
                    <p className="login-warning">Login to add to cart</p>
                )}
            </div>
            <div className="Products-item-info">
                <div className='Products-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets?.rating_stars || " "} alt="Rating" />
                </div>
                <p className="Products-item-desc">{description}</p>
                <p className="Products-item-price">₹{price}</p>
            </div>
        </div>
    );
};

export default Products;
