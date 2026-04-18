import React from "react";
import styles from "./AdminDashboard.module.css";

const AdminDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
        <p className={styles.subTitle}>Premium admin overview panel</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <p className={styles.label}>Total Orders</p>
          <p className={styles.value}>128</p>
        </div>
        <div className={styles.card}>
          <p className={styles.label}>Pending Payments</p>
          <p className={styles.value}>09</p>
        </div>
        <div className={styles.card}>
          <p className={styles.label}>Products Listed</p>
          <p className={styles.value}>48</p>
        </div>
      </div>

      <div className={styles.panel}>
        <h3>Today Highlights</h3>
        <div className={styles.panelRow}>
          <span>Revenue trend</span>
          <strong>+14.8%</strong>
        </div>
        <div className={styles.panelRow}>
          <span>Successful payments</span>
          <strong>96%</strong>
        </div>
        <div className={styles.panelRow}>
          <span>Returning customers</span>
          <strong>43%</strong>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
