import React from "react";
import styles from "./AdminOrders.module.css";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "/api";

function AdminOrders() {
  const [orders, setOrders] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [selectedOrder, setSelectedOrder] = React.useState(null);

  const fetchOrders = React.useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch(`${apiBaseUrl}/orders`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unable to load orders");
      setOrders(data.orders || []);
    } catch (err) {
      setError(err.message || "Unable to load orders");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const loadOrderDetail = async (id) => {
    try {
      const res = await fetch(`${apiBaseUrl}/orders/${id}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unable to load order details");
      setSelectedOrder(data.order);
    } catch (err) {
      alert(err.message || "Unable to load order details");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1>Admin Orders</h1>
          <p className={styles.subTitle}>Track customer purchases with a premium overview.</p>
        </div>
        <button onClick={fetchOrders}>Refresh</button>
      </div>

      <div className={styles.quickStats}>
        <div className={styles.statCard}>
          <span>Total Orders</span>
          <strong>{orders.length}</strong>
        </div>
        <div className={styles.statCard}>
          <span>Paid Orders</span>
          <strong>{orders.filter((o) => o.paymentStatus === "paid").length}</strong>
        </div>
        <div className={styles.statCard}>
          <span>Pending/Other</span>
          <strong>{orders.filter((o) => o.paymentStatus !== "paid").length}</strong>
        </div>
      </div>

      {loading && <p className={styles.info}>Loading orders...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {!loading && !error && orders.length === 0 && (
        <p className={styles.info}>No paid orders yet.</p>
      )}

      {!loading && !error && orders.length > 0 && (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Session ID</th>
                <th>Email</th>
                <th>Status</th>
                <th>Total</th>
                <th>Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.stripeSessionId}</td>
                  <td>{order.customerEmail || "N/A"}</td>
                  <td>
                    <span className={`${styles.badge} ${order.paymentStatus === "paid" ? styles.badgePaid : styles.badgePending}`}>
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td>
                    {(order.amountTotal / 100).toLocaleString(undefined, {
                      style: "currency",
                      currency: (order.currency || "usd").toUpperCase(),
                    })}
                  </td>
                  <td>{new Date(order.createdAt).toLocaleString()}</td>
                  <td>
                    <button onClick={() => loadOrderDetail(order._id)}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedOrder && (
        <div className={styles.detailCard}>
          <h2>Order Detail</h2>
          <p><strong>Session:</strong> {selectedOrder.stripeSessionId}</p>
          <p><strong>Email:</strong> {selectedOrder.customerEmail || "N/A"}</p>
          <p><strong>Status:</strong> {selectedOrder.paymentStatus}</p>
          <p>
            <strong>Total:</strong>{" "}
            {(selectedOrder.amountTotal / 100).toLocaleString(undefined, {
              style: "currency",
              currency: (selectedOrder.currency || "usd").toUpperCase(),
            })}
          </p>

          <h3>Items</h3>
          <ul className={styles.items}>
            {(selectedOrder.items || []).map((item, idx) => (
              <li key={`${item.name}-${idx}`}>
                {item.name} x {item.quantity} -{" "}
                {(item.unitAmount / 100).toLocaleString(undefined, {
                  style: "currency",
                  currency: (item.currency || "usd").toUpperCase(),
                })}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AdminOrders;
