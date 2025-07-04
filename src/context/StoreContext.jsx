// src/context/StoreContext.jsx
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [cartItems, setCartItems] = useState({});
  const url = "https://fuullstack-website-bharatcrafts.onrender.com";

  // Fetch product list
  const fetchProductList = async () => {
    try {
      const response = await axios.get(`${url}/api/products/list`);
      if (response.data.success && Array.isArray(response.data.data)) {
        setProductList(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error.response?.data || error.message);
    }
  };

  // Fetch cart
  const fetchCart = async () => {
    if (!token) return;
    try {
      const response = await axios.get(`${url}/api/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const formattedCart = response.data.cart.items.reduce((acc, item) => {
        if (!item.productId?.id) return acc;
        acc[item.productId.id] = { quantity: item.quantity, ...item.productId };
        return acc;
      }, {});
      setCartItems(formattedCart);
    } catch (error) {
      console.error("Error fetching cart:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  useEffect(() => {
    if (token) fetchCart();
  }, [token]);

  // Add to cart
  const addToCart = async (productId) => {
    if (!token) return;
    try {
      await axios.post(
        `${url}/api/cart/add`,
        { productId },
        { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } }
      );
      fetchCart();
    } catch (error) {
      console.error("Error adding to cart:", error.response?.data || error.message);
    }
  };

  // Remove from cart
  const removeFromCart = async (productId) => {
    if (!token) return;
    try {
      await axios.post(
        `${url}/api/cart/remove`,
        { productId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchCart();
    } catch (error) {
      console.error("Error removing from cart:", error.response?.data || error.message);
    }
  };

  // Get total cart amount
  const getTotalCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [id, item]) => {
      const product = productList.find((p) => p._id === id);
      return total + (product?.price || 0) * (item.quantity || 0);
    }, 0);
  };

  const contextValue = {
    productList,
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems,
    getTotalCartAmount,
    url,
    setToken,
    token,
    fetchCart,
  };

  return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>;
};

export default StoreContextProvider;
