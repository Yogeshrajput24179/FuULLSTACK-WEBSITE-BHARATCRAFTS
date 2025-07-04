import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {Object.keys(cartItems).map((productId) => {
                    const item = cartItems[productId];
                    return (
                        <div key={productId} className="cart-items-title cart-items-item">
                            <img src={item.image ? `${url}/uploads/${item.image}` : assets.placeholder_image} alt={item.name} />
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            <p>{item.quantity}</p>
                            <p>${item.price * item.quantity}</p>
                            <p className='cross' onClick={() => removeFromCart(productId)}>x</p>
                        </div>
                    );
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>₹{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Delivery Fee</p>
                        <p>{getTotalCartAmount() === 0 ? "₹0" : "₹50"}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <b>Total</b>
                        <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50}</b>
                    </div>
                    <hr />
                    <button 
                        onClick={() => token ? navigate('/Order') : alert("Please login to proceed")}
                        disabled={!token}
                    >
                        {token ? "Proceed to checkout" : "Login to Checkout"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
