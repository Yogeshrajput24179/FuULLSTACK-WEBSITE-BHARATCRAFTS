import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount, cartItems, url } = useContext(StoreContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token")?.trim();
    const userId = localStorage.getItem("userId")?.trim();

    console.log("✅ token:", token);
    console.log("✅ userId:", userId);

    if (!token || !userId) {
      alert("Please log in before placing an order.");
      return;
    }

    if (!cartItems || Object.keys(cartItems).length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const formattedItems = Object.keys(cartItems).map((id) => ({
      productId: id,
      quantity: cartItems[id].quantity,
    }));

    const orderData = {
      userId,
      deliveryAddress: { ...data },
      items: formattedItems,
      totalAmount: getTotalCartAmount(),
    };

    try {
      const response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("🔹 Full Response Data:", response.data);

      if (response.data.success) {
        const { session_url } = response.data;
        console.log("🔗 Stripe Session URL:", session_url);

        if (session_url) {
          window.location.href = session_url;
        } else {
          alert("⚠️ Stripe session URL is missing.");
        }
      } else {
        alert("Order Error: " + response.data.message);
      }
    } catch (error) {
      console.error("❌ Order API Error:", error.response?.data || error.message);
      alert("Order API Error: " + (error.response?.data?.message || error.message));
    }
  };

  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal === 0 ? 0 : 2;
  const total = subtotal + deliveryFee;

  return (
    <form onSubmit={handlePlaceOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" name="firstName" placeholder="First Name" value={data.firstName} onChange={onChangeHandler} required />
          <input type="text" name="lastName" placeholder="Last Name" value={data.lastName} onChange={onChangeHandler} required />
        </div>
        <input type="email" name="email" placeholder="Email address" value={data.email} onChange={onChangeHandler} required />
        <input type="text" name="street" placeholder="Street" value={data.street} onChange={onChangeHandler} required />
        <div className="multi-fields">
          <input type="text" name="city" placeholder="City" value={data.city} onChange={onChangeHandler} required />
          <input type="text" name="state" placeholder="State" value={data.state} onChange={onChangeHandler} required />
        </div>
        <div className="multi-fields">
          <input type="text" name="zipcode" placeholder="Zip code" value={data.zipcode} onChange={onChangeHandler} required />
          <input type="text" name="country" placeholder="Country" value={data.country} onChange={onChangeHandler} required />
        </div>
        <input type="text" name="phone" placeholder="Phone" value={data.phone} onChange={onChangeHandler} required />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>${total.toFixed(2)}</b>
          </div>
          <hr />
          <button type="submit">Proceed to Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
