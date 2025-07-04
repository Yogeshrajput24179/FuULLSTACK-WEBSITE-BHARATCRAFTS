import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './MyOrders.css';
import { StoreContext } from '../../context/StoreContext';
import { toast } from 'react-toastify';

const MyOrders = () => {
  const { url , token,getTotalCartAmount } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        `${url}/api/order/userOrders`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data.success) {
        setData(response.data.orders);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      console.error("❌ Error in fetchOrders:", error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'green';
      case 'pending':
        return 'orange';
      case 'cancelled':
        return 'red';
      default:
        return '#555';
    }
  };

  return (
    <div className="my-orders-container">
      <h2>My Orders</h2>
      {data.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="orders-list">
          {data.map((order) => (
            <div key={order._id} className="order-card">
              <div className="order-header">
  <h3>#{order._id.slice(-6)}</h3>
  <span className="status-badge" style={{ backgroundColor: getStatusColor(order.status) }}>
    {order.status}
  </span>
</div>
              <p className="order-date">Ordered on: {formatDate(order.createdAt)}</p>
              <p className="order-total">Total: ₹{getTotalCartAmount(order.items)}</p>

              <div className="address-block">
                <strong>Delivery Address:</strong>
                <p>
                  {order.deliveryAddress?.firstName} {order.deliveryAddress?.lastName}<br />
                  {order.deliveryAddress?.street}, {order.deliveryAddress?.city}<br />
                  {order.deliveryAddress?.state} - {order.deliveryAddress?.zipcode}<br />
                  {order.deliveryAddress?.country}<br />
                  <strong>Phone:</strong> {order.deliveryAddress?.phone}
                </p>
              </div>

              <div className="order-items">
                <h4>Items:</h4>
                {order.items.map((item, idx) => (
                  <div key={`${item.productId._id}-${idx}`} className="item-card">
                    {console.log("🖼️ Image URL:", `${url}${item.productId.image}`)}
                    {item.productId?.image ? (
      <img
      src={`${url}/uploads/${item.productId.image}`}
        alt={item.productId.name}
      />
    ) : (
      <div className="image-placeholder">No Image</div>
    )}
                    <div>
                      <p className="item-name">{item.productId.name}</p>
                      <p className="item-qty">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      <button className="refresh-button" onClick={fetchOrders}>
        Refresh Orders
      </button>
    </div>
  );
};

export default MyOrders;
